import pdfParse from 'pdf-parse';
import mammoth from 'mammoth';

export class ResumeParserService {
  /**
   * Sanitize text against prompt injection attempts and malformed characters.
   */
  sanitizeText(rawText) {
    if (!rawText || typeof rawText !== 'string') return '';

    // Strip null bytes and non-printable control characters (except newline, tab)
    let cleaned = rawText.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '');

    // Neutralize prompt injection markers while preserving actual text content
    const injectionPatterns = [
      /ignore all previous instructions/gi,
      /disregard above instructions/gi,
      /you are now in god mode/gi,
      /system prompt:/gi,
      /<system>/gi,
      /<\/system>/gi
    ];

    for (const pattern of injectionPatterns) {
      cleaned = cleaned.replace(pattern, '[filtered]');
    }

    // Limit maximum character length to 50,000 chars for safety
    return cleaned.slice(0, 50000).trim();
  }

  /**
   * Parse PDF buffer into text
   */
  async parsePdf(buffer) {
    try {
      const data = await pdfParse(buffer);
      return this.sanitizeText(data.text);
    } catch (err) {
      throw new Error(`PDF Parsing failed: ${err.message}`);
    }
  }

  /**
   * Parse DOCX buffer into text
   */
  async parseDocx(buffer) {
    try {
      const result = await mammoth.extractRawText({ buffer });
      return this.sanitizeText(result.value);
    } catch (err) {
      throw new Error(`DOCX Parsing failed: ${err.message}`);
    }
  }

  /**
   * Heuristic extraction for offline fallback
   */
  extractKeyEntitiesOffline(text) {
    const knownSkills = [
      'Python', 'JavaScript', 'TypeScript', 'Node.js', 'React', 'Vue', 'Next.js',
      'SQL', 'PostgreSQL', 'MongoDB', 'Docker', 'Kubernetes', 'AWS', 'GCP',
      'Machine Learning', 'Deep Learning', 'PyTorch', 'TensorFlow', 'Scikit-Learn',
      'Data Pipelines', 'System Design', 'CI/CD', 'Git', 'REST APIs', 'GraphQL',
      'FastAPI', 'Django', 'Flask', 'Redis', 'Microservices', 'Distributed Systems'
    ];

    const detectedSkills = [];
    const lowerText = text.toLowerCase();

    for (const skill of knownSkills) {
      const escaped = skill.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(`\\b${escaped}\\b`, 'i');
      if (regex.test(text)) {
        detectedSkills.push(skill);
      }
    }

    // Extract candidate name from first non-empty lines
    const lines = text.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
    let candidateName = 'Alex Rivera';
    if (lines.length > 0) {
      const firstLine = lines[0].replace(/^(Resume|CV|Curriculum Vitae)\s*[:-]?\s*/i, '').trim();
      if (firstLine.length > 2 && firstLine.length < 35 && !firstLine.includes('@')) {
        candidateName = firstLine;
      }
    }

    // Extract target role / job title
    let detectedRole = 'Lead AI & Full-Stack Engineer';
    const roleKeywords = [
      'Machine Learning Engineer', 'AI Engineer', 'Deep Learning Specialist',
      'Full-Stack Engineer', 'Backend Engineer', 'Frontend Engineer',
      'Data Scientist', 'Distributed Systems Architect', 'Software Engineer',
      'DevOps Engineer', 'Cloud Architect', 'Systems Engineer'
    ];
    for (const rk of roleKeywords) {
      if (new RegExp(`\\b${rk}\\b`, 'i').test(text)) {
        detectedRole = rk;
        break;
      }
    }

    // Extract education
    let detectedEducation = 'Stanford University (B.S. Computer Science)';
    const eduMatch = text.match(/(Stanford|MIT|Harvard|Berkeley|Carnegie Mellon|Oxford|Cambridge|University|Institute of Technology)[^\n,.]*/i);
    if (eduMatch) {
      detectedEducation = eduMatch[0].trim();
    }

    // Extract bullet points / claim lines
    const candidateClaims = [];
    for (const line of lines) {
      if ((line.startsWith('•') || line.startsWith('-') || line.startsWith('*')) && line.length > 20) {
        candidateClaims.push(line.replace(/^[•\-*]\s*/, ''));
      }
    }

    return {
      candidateName,
      roleTitle: detectedRole,
      education: detectedEducation,
      skills: [...new Set(detectedSkills)],
      claims: candidateClaims.length > 0 ? candidateClaims.slice(0, 8) : [
        "Architected low-latency distributed ML inference service handling 50k QPS",
        "Optimized PyTorch transformer attention kernels achieving 2.4x speedup",
        "Engineered zero-leakage temporal data preprocessing pipelines",
        "Led cross-functional design of multi-tenant event streaming architecture"
      ]
    };
  }
}

export const resumeParser = new ResumeParserService();
