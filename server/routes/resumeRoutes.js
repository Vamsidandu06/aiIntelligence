import express from 'express';
import { upload } from '../middleware/upload.js';
import { resumeParser } from '../services/resumeParser.js';
import { geminiService } from '../services/geminiService.js';
import { fallbackEngine, SAMPLE_CANDIDATE, PRESET_COMPETENCIES, PRESET_RESUME_CLAIMS } from '../services/fallbackEngine.js';

const router = express.Router();

/**
 * POST /api/resume/parse
 * Extract plain text from uploaded PDF or DOCX file
 */
router.post('/parse', upload.single('file'), async (req, res) => {
  try {
    let extractedText = '';

    if (req.file) {
      const ext = req.file.originalname.split('.').pop().toLowerCase();
      if (ext === 'pdf') {
        extractedText = await resumeParser.parsePdf(req.file.buffer);
      } else if (ext === 'docx' || ext === 'doc') {
        extractedText = await resumeParser.parseDocx(req.file.buffer);
      } else {
        extractedText = resumeParser.sanitizeText(req.file.buffer.toString('utf-8'));
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
      candidateName: offlineAnalysis.candidateName,
      roleTitle: offlineAnalysis.roleTitle,
      education: offlineAnalysis.education,
      detectedSkills: offlineAnalysis.skills,
      extractedClaims: offlineAnalysis.claims
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
    const { resumeText, jobDescription } = req.body;

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
      // Deterministic fallback map
      const offline = resumeParser.extractKeyEntitiesOffline(resumeText);
      result = {
        candidateName: offline.skills.length > 0 ? "Alex Rivera" : "Candidate",
        roleTitle: "Software / AI Engineer",
        competencies: PRESET_COMPETENCIES,
        resumeClaims: PRESET_RESUME_CLAIMS
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
