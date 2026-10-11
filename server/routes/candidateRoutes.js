import express from 'express';
import { storage } from '../services/storage.js';
import { JUNIOR_SWE_CANDIDATE, JUNIOR_SWE_RESUME_CLAIMS, SAMPLE_CANDIDATE, PRESET_RESUME_CLAIMS } from '../services/fallbackEngine.js';

const router = express.Router();

const DEFAULT_CANDIDATES = [
  {
    id: 'cand_david_chen',
    name: 'David Chen',
    email: 'david.chen@alumni.edu',
    targetRoleId: 'job_junior_swe',
    targetRole: 'Junior Software Engineer',
    department: 'Core Engineering',
    status: 'Recommended',
    recommendationBadge: 'Strong evidence of role-relevant competencies',
    overallScore: 88,
    resumeText: JUNIOR_SWE_CANDIDATE.resumeText,
    resumeClaims: JUNIOR_SWE_RESUME_CLAIMS,
    extractedSkills: ['Python', 'Java', 'SQL', 'Hash Tables', 'Binary Trees', 'Git', 'RESTful APIs'],
    competencyCoverage: {
      'Data Structures': { score: 95, status: 'Demonstrated', rubricLevel: 4 },
      'Algorithms & Complexity': { score: 85, status: 'Demonstrated', rubricLevel: 3 },
      'Problem Solving': { score: 90, status: 'Demonstrated', rubricLevel: 4 },
      'Database Fundamentals': { score: 75, status: 'Partially demonstrated', rubricLevel: 2 },
      'Communication': { score: 88, status: 'Demonstrated', rubricLevel: 3 }
    },
    recruiterNotes: 'Exceptional grasp of hash map internals and collision resolution. Solid potential for junior backend systems.',
    createdAt: new Date('2026-10-01T12:00:00Z').toISOString()
  },
  {
    id: 'cand_matthew_james',
    name: 'Matthew James',
    email: 'matthew.james@example.com',
    targetRoleId: 'job_senior_bi_sql',
    targetRole: 'Senior BI / SQL Developer',
    department: 'Data & Analytics',
    status: 'Recommended',
    recommendationBadge: 'Strong evidence of role-relevant competencies',
    overallScore: 92,
    resumeText: 'Experienced Senior BI Developer with 6 years in PostgreSQL, dimensional modeling, and high-performance SQL query tuning.',
    resumeClaims: [
      { claim: 'Optimized complex SQL queries reducing runtime by 70%', category: 'technical', targetCompetency: 'Advanced SQL & Window Functions', verificationStatus: 'Demonstrated' },
      { claim: 'Designed enterprise dimensional data warehouses with Kimball star schema', category: 'technical', targetCompetency: 'Data Modeling & Warehousing', verificationStatus: 'Demonstrated' }
    ],
    extractedSkills: ['PostgreSQL', 'SQL Window Functions', 'Star Schema', 'ETL Pipelines', 'PowerBI', 'Snowflake'],
    competencyCoverage: {
      'Advanced SQL & Window Functions': { score: 96, status: 'Demonstrated', rubricLevel: 4 },
      'Data Modeling & Warehousing': { score: 92, status: 'Demonstrated', rubricLevel: 4 },
      'Query Optimization & Indexing': { score: 88, status: 'Demonstrated', rubricLevel: 3 },
      'Business Intelligence Strategy': { score: 85, status: 'Demonstrated', rubricLevel: 3 }
    },
    recruiterNotes: 'Stood out for his structured approach to solving data problems, and his ability to align technical work with business goals.',
    createdAt: new Date('2026-10-03T14:30:00Z').toISOString()
  },
  {
    id: 'cand_alex_rivera',
    name: 'Alex Rivera',
    email: 'alex.rivera@example.com',
    targetRoleId: 'job_ml_engineer',
    targetRole: 'Senior AI & Full-Stack Engineer',
    department: 'Artificial Intelligence',
    status: 'Additional Validation Recommended',
    recommendationBadge: 'Additional validation recommended',
    overallScore: 78,
    resumeText: SAMPLE_CANDIDATE.resumeText,
    resumeClaims: PRESET_RESUME_CLAIMS,
    extractedSkills: ['Python', 'TypeScript', 'React', 'PyTorch', 'Node.js', 'PostgreSQL', 'Redis'],
    competencyCoverage: {
      'Machine Learning Pipelines & Data Integrity': { score: 94, status: 'Demonstrated', rubricLevel: 4 },
      'SQL Optimization & Database Architecture': { score: 82, status: 'Demonstrated', rubricLevel: 3 },
      'Full-Stack Web Architecture': { score: 70, status: 'Partially demonstrated', rubricLevel: 2 },
      'System Design & Scalability': { score: null, status: 'Not assessed', rubricLevel: 0 }
    },
    recruiterNotes: 'Solid ML pipeline integrity demonstration, but full-stack system caching remains untested in live interview.',
    createdAt: new Date('2026-10-05T09:15:00Z').toISOString()
  }
];

// Initialize default candidates if missing
async function ensureDefaultCandidates() {
  const existing = await storage.find('candidates');
  if (!existing || existing.length === 0) {
    for (const cand of DEFAULT_CANDIDATES) {
      await storage.insert('candidates', cand);
    }
  }
}
ensureDefaultCandidates();

/**
 * GET /api/candidates
 * List candidates with optional filtering by role or status
 */
router.get('/', async (req, res) => {
  try {
    await ensureDefaultCandidates();
    const { role, status, search } = req.query;
    let list = await storage.find('candidates');

    if (role) {
      list = list.filter(c => c.targetRoleId === role || c.targetRole.toLowerCase().includes(role.toLowerCase()));
    }
    if (status) {
      list = list.filter(c => c.status.toLowerCase() === status.toLowerCase());
    }
    if (search) {
      const q = search.toLowerCase();
      list = list.filter(c => c.name.toLowerCase().includes(q) || c.targetRole.toLowerCase().includes(q) || c.email.toLowerCase().includes(q));
    }

    res.json({ success: true, candidates: list });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * GET /api/candidates/compare
 * Compare candidates side-by-side
 */
router.get('/compare', async (req, res) => {
  try {
    await ensureDefaultCandidates();
    const { ids } = req.query;
    const all = await storage.find('candidates');

    let candidatesToCompare = [];
    if (ids) {
      const idArray = ids.split(',');
      candidatesToCompare = all.filter(c => idArray.includes(c.id));
    }

    if (candidatesToCompare.length === 0) {
      candidatesToCompare = all.slice(0, 3);
    }

    res.json({
      success: true,
      candidates: candidatesToCompare
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * GET /api/candidates/:id
 * Retrieve candidate details
 */
router.get('/:id', async (req, res) => {
  try {
    await ensureDefaultCandidates();
    const candidate = await storage.findById('candidates', req.params.id);
    if (!candidate) return res.status(404).json({ error: 'Candidate not found' });

    const interviews = await storage.find('interviews', { candidateName: candidate.name });
    res.json({ success: true, candidate, interviews });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * POST /api/candidates
 * Create candidate with parsed resume claims
 */
router.post('/', async (req, res) => {
  try {
    const {
      name,
      email,
      targetRoleId = 'job_junior_swe',
      targetRole = 'Junior Software Engineer',
      department = 'Engineering',
      resumeText = '',
      extractedSkills = [],
      resumeClaims = []
    } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }

    const candidate = await storage.insert('candidates', {
      name,
      email,
      targetRoleId,
      targetRole,
      department,
      status: 'Screened',
      recommendationBadge: 'Awaiting Assessment',
      overallScore: null,
      resumeText,
      extractedSkills,
      resumeClaims,
      competencyCoverage: {},
      recruiterNotes: '',
      createdAt: new Date().toISOString()
    });

    res.status(201).json({ success: true, candidate });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
