import express from 'express';
import { upload } from '../middleware/upload.js';
import { resumeParser } from '../services/resumeParser.js';
import { geminiService } from '../services/geminiService.js';
import { fallbackEngine, SAMPLE_CANDIDATE, PRESET_COMPETENCIES, PRESET_RESUME_CLAIMS } from '../services/fallbackEngine.js';

const router = express.Router();

/**
 * POST /api/resume/parse
 * Extract plain text from uploaded PDF or DOCX file (supports both 'file' and 'resume' form field names)
 */
router.post('/parse', upload.any(), async (req, res) => {
  try {
    let extractedText = '';
    const uploadedFile = (req.files && req.files[0]) || req.file;

    if (uploadedFile) {
      const ext = uploadedFile.originalname.split('.').pop().toLowerCase();
      if (ext === 'pdf') {
        extractedText = await resumeParser.parsePdf(uploadedFile.buffer);
      } else if (ext === 'docx' || ext === 'doc') {
        extractedText = await resumeParser.parseDocx(uploadedFile.buffer);
      } else {
        extractedText = resumeParser.sanitizeText(uploadedFile.buffer.toString('utf-8'));
      }
    } else if (req.body.resumeText) {
      extractedText = resumeParser.sanitizeText(req.body.resumeText);
    } else {
      return res.status(400).json({ error: 'No resume file or text provided' });
    }

    const offlineAnalysis = resumeParser.extractKeyEntitiesOffline(extractedText);

    res.json({
      success: true,
      text: extractedText,
      extractedText: extractedText,
      candidateName: offlineAnalysis.candidateName,
      roleTitle: offlineAnalysis.roleTitle,
      education: offlineAnalysis.education,
      detectedSkills: offlineAnalysis.skills,
      skills: offlineAnalysis.skills,
      extractedClaims: offlineAnalysis.claims,
      claims: offlineAnalysis.claims
    });
  } catch (err) {
    console.error('Error parsing resume:', err);
    res.status(500).json({ error: err.message || 'Failed to parse resume document' });
  }
});

/**
 * POST /api/resume/extract-competencies
 * Match Resume and Job Description to produce Competency Map and Claims
 */
router.post('/extract-competencies', async (req, res) => {
  try {
    const { resumeText, jobDescription, candidateName, roleTitle, targetRole } = req.body;

    if (!resumeText || !jobDescription) {
      return res.status(400).json({ error: 'Both resumeText and jobDescription are required' });
    }

    let result;
    let usedAi = false;

    if (geminiService.isConfigured()) {
      try {
        result = await geminiService.extractCompetenciesAndClaims({
          resumeText,
          jobDescription
        });
        usedAi = true;
      } catch (err) {
        console.warn('Gemini extraction failed, using heuristic fallback:', err.message);
      }
    }

    if (!result) {
      // Deterministic dynamic extraction based on candidate's actual resume content
      const offline = resumeParser.extractKeyEntitiesOffline(resumeText);
      const effectiveName = candidateName && candidateName.trim() && candidateName !== 'Alex Rivera'
        ? candidateName.trim()
        : (offline.candidateName && offline.candidateName !== 'Alex Rivera' ? offline.candidateName : 'Candidate');
        
      const effectiveRole = roleTitle || targetRole || offline.roleTitle || 'Software Engineer';
      const skills = offline.skills || [];

      // Build dynamic competencies tailored to detected skills in resume
      const dynamicCompetencies = [];

      if (skills.some(s => ['Machine Learning', 'Deep Learning', 'PyTorch', 'TensorFlow', 'Data Pipelines'].includes(s))) {
        dynamicCompetencies.push({
          name: "Machine Learning & AI Modeling",
          category: "technical",
          requiredLevel: "advanced",
          importance: "high",
          description: "Applied machine learning architecture, feature engineering, and model training pipelines.",
          initialStatus: "Claimed but unvalidated"
        });
      }

      if (skills.some(s => ['React', 'JavaScript', 'TypeScript', 'Vue', 'Next.js', 'HTML', 'CSS', 'Tailwind', 'Angular'].includes(s))) {
        dynamicCompetencies.push({
          name: "Frontend Architecture & UI Engineering",
          category: "technical",
          requiredLevel: "intermediate",
          importance: "high",
          description: "Modern component state management, DOM performance optimization, and responsive design.",
          initialStatus: "Claimed but unvalidated"
        });
      }

      if (skills.some(s => ['Node.js', 'Python', 'Java', 'FastAPI', 'Express', 'Django', 'Spring Boot', 'REST APIs', 'GraphQL'].includes(s))) {
        dynamicCompetencies.push({
          name: "Backend Services & API Architecture",
          category: "technical",
          requiredLevel: "intermediate",
          importance: "high",
          description: "High-reliability web services, concurrency handling, and clean API design.",
          initialStatus: "Claimed but unvalidated"
        });
      }

      if (skills.some(s => ['SQL', 'PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'SQLite'].includes(s))) {
        dynamicCompetencies.push({
          name: "Database Fundamentals & SQL Query Optimization",
          category: "technical",
          requiredLevel: "intermediate",
          importance: "medium",
          description: "Relational database modeling, indexing strategies, and data consistency.",
          initialStatus: "Claimed but unvalidated"
        });
      }

      if (skills.some(s => ['Docker', 'Kubernetes', 'AWS', 'GCP', 'Azure', 'CI/CD', 'Git'].includes(s))) {
        dynamicCompetencies.push({
          name: "DevOps, Cloud & Infrastructure",
          category: "technical",
          requiredLevel: "intermediate",
          importance: "medium",
          description: "Containerization, cloud deployment infrastructure, and automated delivery pipelines.",
          initialStatus: "Claimed but unvalidated"
        });
      }

      // Ensure foundational technical and analytical competencies are included
      if (dynamicCompetencies.length < 3) {
        dynamicCompetencies.push({
          name: "Data Structures & Algorithmic Complexity",
          category: "technical",
          requiredLevel: "intermediate",
          importance: "high",
          description: "Optimal computational complexity, memory management, and edge-case handling.",
          initialStatus: "Claimed but unvalidated"
        });
        dynamicCompetencies.push({
          name: "System Design & Problem Solving",
          category: "technical",
          requiredLevel: "intermediate",
          importance: "high",
          description: "Structured analytical problem breakdown, trade-off evaluation, and modular design.",
          initialStatus: "Claimed but unvalidated"
        });
        dynamicCompetencies.push({
          name: "Technical Communication & Reasoning",
          category: "behavioral",
          requiredLevel: "intermediate",
          importance: "medium",
          description: "Clear articulation of engineering trade-offs, architecture decisions, and edge-case analysis.",
          initialStatus: "Not assessed"
        });
      }

      // Map claims to candidate's actual extracted claims
      const dynamicClaims = (offline.claims || []).map((c, idx) => ({
        id: `claim_${idx + 1}`,
        claim: c,
        claimText: c,
        category: "technical",
        targetCompetency: dynamicCompetencies[idx % dynamicCompetencies.length].name,
        verificationStatus: "Claimed but unvalidated"
      }));

      result = {
        candidateName: effectiveName,
        roleTitle: effectiveRole,
        education: offline.education,
        detectedSkills: skills,
        competencies: dynamicCompetencies,
        resumeClaims: dynamicClaims
      };
    }

    res.json({
      success: true,
      data: result,
      usedAi
    });
  } catch (err) {
    console.error('Error extracting competencies:', err);
    res.status(500).json({ error: err.message || 'Failed to extract competencies' });
  }
});

export default router;
