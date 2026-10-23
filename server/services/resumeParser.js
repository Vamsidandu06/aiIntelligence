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
    if (!text || typeof text !== 'string') {
      return {
        candidateName: 'Candidate',
        roleTitle: 'Software Engineer',
        education: 'Computer Science & Engineering',
        skills: ['Software Engineering', 'Problem Solving', 'Data Structures'],
        claims: ['Strong engineering problem solving and software design skills.']
      };
    }

    const knownSkills = [
      'Python', 'JavaScript', 'TypeScript', 'Java', 'C++', 'C#', 'Go', 'Rust', 'PHP', 'Ruby', 'Swift', 'Kotlin',
      'Node.js', 'React', 'Vue', 'Next.js', 'Angular', 'Express', 'FastAPI', 'Django', 'Flask', 'Spring Boot',
      'HTML', 'CSS', 'Tailwind', 'Redux', 'REST APIs', 'GraphQL',
      'SQL', 'PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'SQLite', 'Oracle',
      'Docker', 'Kubernetes', 'AWS', 'GCP', 'Azure', 'Linux', 'Git', 'CI/CD',
      'Machine Learning', 'Deep Learning', 'PyTorch', 'TensorFlow', 'Scikit-Learn', 'Pandas', 'NumPy',
      'Data Pipelines', 'Data Structures', 'Algorithms', 'System Design', 'Microservices', 'Distributed Systems'
    ];

    const detectedSkills = [];
    for (const skill of knownSkills) {
      const escaped = skill.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(`(^|[^a-zA-Z0-9+#])${escaped}([^a-zA-Z0-9+#]|$)`, 'i');
      if (regex.test(text)) {
        detectedSkills.push(skill);
      }
    }

    const lines = text.split(/\r?\n/).map(l => l.trim()).filter(Boolean);

    // Extract Candidate Name from top lines
    let candidateName = null;
    const headerExcludeRegex = /^(resume|curriculum vitae|cv|page|contact|email|phone|address|profile|summary|skills|experience|education|projects|objective)\b/i;
    
    for (let i = 0; i < Math.min(lines.length, 12); i++) {
      const line = lines[i]
        .replace(/^(Resume|CV|Curriculum Vitae)\s*[:-]?\s*/i, '')
        .replace(/[|,•*].*$/, '') // remove trailing delimiter segments like "| Phone | Email"
        .trim();

      if (!line || headerExcludeRegex.test(line) || line.includes('@') || line.includes('http') || line.includes('www.') || line.includes('.com') || /\d{5,}/.test(line)) {
        continue;
      }

      // Check if line looks like a person's name (1 to 4 words, letters, dots, hyphens only, 2-40 chars)
      const words = line.split(/\s+/);
      if (words.length >= 1 && words.length <= 4 && /^[a-zA-Z\s.'-]+$/.test(line) && line.length >= 2 && line.length <= 40) {
        // If all uppercase, convert to Title Case (e.g. VAMSI DANDU -> Vamsi Dandu)
        if (line === line.toUpperCase()) {
          candidateName = words.map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');
        } else {
          candidateName = line;
        }
        break;
      }
    }

    if (!candidateName) {
      // Try to find email and extract name from prefix (e.g. vamsi.dandu@gmail.com -> Vamsi Dandu)
      const emailMatch = text.match(/([a-zA-Z0-9._%+-]+)@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
      if (emailMatch && emailMatch[1]) {
        const parts = emailMatch[1].split(/[._-]/).filter(p => !/\d/.test(p) && p.length > 1);
        if (parts.length >= 1) {
          candidateName = parts.map(p => p.charAt(0).toUpperCase() + p.slice(1).toLowerCase()).join(' ');
        }
      }
    }

    if (!candidateName) {
      candidateName = 'Candidate';
    }

    // Extract Target Role / Job Title
    let detectedRole = null;
    const roleKeywords = [
      'Machine Learning Engineer', 'AI Engineer', 'Deep Learning Specialist',
      'Full-Stack Developer', 'Full-Stack Engineer', 'Frontend Developer', 'Frontend Engineer',
      'Backend Developer', 'Backend Engineer', 'Software Engineer', 'Software Developer',
      'Data Scientist', 'Data Analyst', 'Database Administrator', 'DevOps Engineer',
      'Cloud Architect', 'Cloud Engineer', 'Systems Engineer', 'Mobile Developer',
      'Android Developer', 'iOS Developer', 'Web Developer'
    ];

    for (const rk of roleKeywords) {
      if (new RegExp(`\\b${rk}\\b`, 'i').test(text)) {
        detectedRole = rk;
        break;
      }
    }

    if (!detectedRole) {
      if (detectedSkills.includes('React') || detectedSkills.includes('Vue') || detectedSkills.includes('Frontend')) {
        detectedRole = 'Frontend Engineer';
      } else if (detectedSkills.includes('Node.js') || detectedSkills.includes('FastAPI') || detectedSkills.includes('Django') || detectedSkills.includes('Spring Boot')) {
        detectedRole = 'Backend Engineer';
      } else if (detectedSkills.includes('Machine Learning') || detectedSkills.includes('PyTorch') || detectedSkills.includes('TensorFlow')) {
        detectedRole = 'Machine Learning Engineer';
      } else if (detectedSkills.includes('SQL') && !detectedSkills.includes('React')) {
        detectedRole = 'Database & Backend Engineer';
      } else {
        detectedRole = 'Software Engineer';
      }
    }

    // Extract Education
    let detectedEducation = null;
    const eduMatch = text.match(/(?:B\.?Tech|B\.?E\.?|B\.?S\.?|B\.?C\.?A\.?|M\.?Tech|M\.?S\.?|M\.?C\.?A\.?|Bachelor|Master|Ph\.?D|Doctorate|Diploma|University|College|Institute|School)[^\n,.;]*/i);
    if (eduMatch) {
      detectedEducation = eduMatch[0].trim();
    } else {
      detectedEducation = 'Computer Science & Engineering';
    }

    // Extract bullet points / claim lines
    const candidateClaims = [];
    for (const line of lines) {
      if ((line.startsWith('•') || line.startsWith('-') || line.startsWith('*') || /^\d+\.\s+/.test(line)) && line.length > 15) {
        candidateClaims.push(line.replace(/^[•\-*]\s*/, '').replace(/^\d+\.\s+/, '').trim());
      }
    }

    // If no explicit bullets found, extract sentences that mention skills or action verbs
    if (candidateClaims.length === 0) {
      for (const line of lines) {
        if (line.length > 25 && /^(developed|built|designed|implemented|created|led|optimized|engineered|architected|maintained|integrated|automated)\b/i.test(line)) {
          candidateClaims.push(line);
        }
      }
    }

    // If still empty, construct dynamic claims from detected skills
    const finalClaims = candidateClaims.length > 0 
      ? candidateClaims.slice(0, 8) 
      : (detectedSkills.length > 0 
          ? detectedSkills.slice(0, 4).map(s => `Hands-on practical development experience and core competency in ${s}.`)
          : ["Demonstrated analytical problem solving and algorithmic reasoning capabilities.", "Designed and maintained scalable software components with clean documentation."]);

    return {
      candidateName,
      roleTitle: detectedRole,
      education: detectedEducation,
      skills: [...new Set(detectedSkills)],
      claims: finalClaims
    };
  }
}

export const resumeParser = new ResumeParserService();
