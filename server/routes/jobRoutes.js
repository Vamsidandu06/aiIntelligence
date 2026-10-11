import express from 'express';
import { storage } from '../services/storage.js';

const router = express.Router();

// Seed initial default jobs if none exist
const DEFAULT_JOBS = [
  {
    id: 'job_junior_swe',
    title: 'Junior Software Engineer',
    department: 'Core Engineering',
    experienceLevel: 'Entry / Junior (0-2 years)',
    description: 'Build robust backend services, implement core data structures and algorithms, and contribute to relational database schemas.',
    interviewDuration: 20,
    questionCount: 4,
    requiredCompetencies: [
      { name: 'Data Structures', category: 'technical', requiredLevel: 'intermediate', importance: 'high', description: 'Internal memory representation, hash tables, trees, trade-offs' },
      { name: 'Algorithms & Complexity', category: 'technical', requiredLevel: 'intermediate', importance: 'high', description: 'Big-O time and space complexity, search, sorting' },
      { name: 'Problem Solving', category: 'technical', requiredLevel: 'intermediate', importance: 'high', description: 'Analytical reasoning, edge-case and boundary condition handling' },
      { name: 'Database Fundamentals', category: 'technical', requiredLevel: 'intermediate', importance: 'medium', description: 'Relational data modeling, joins, indexing intuition' },
      { name: 'Communication', category: 'behavioral', requiredLevel: 'intermediate', importance: 'medium', description: 'Technical articulation and structured responses' }
    ],
    rubricCriteria: 'Standardized 0-4 Rubric: 0-No evidence, 1-Limited, 2-Partial understanding, 3-Competent demonstration, 4-Strong demonstration.',
    createdAt: new Date('2026-09-01T10:00:00Z').toISOString()
  },
  {
    id: 'job_senior_bi_sql',
    title: 'Senior BI / SQL Developer',
    department: 'Data & Analytics',
    experienceLevel: 'Senior (4-7 years)',
    description: 'Architect complex analytical data models, optimize heavy SQL window queries, and design dimensional data warehouses.',
    interviewDuration: 25,
    questionCount: 5,
    requiredCompetencies: [
      { name: 'Advanced SQL & Window Functions', category: 'technical', requiredLevel: 'advanced', importance: 'high', description: 'PARTITION BY, ranking, running totals, query plans' },
      { name: 'Data Modeling & Warehousing', category: 'technical', requiredLevel: 'advanced', importance: 'high', description: 'Star schema, snowflake schema, slowly changing dimensions' },
      { name: 'Query Optimization & Indexing', category: 'technical', requiredLevel: 'advanced', importance: 'high', description: 'Execution plans, B-trees, partitioning, query bottlenecks' },
      { name: 'Business Intelligence Strategy', category: 'behavioral', requiredLevel: 'intermediate', importance: 'medium', description: 'Stakeholder alignment, requirements gathering' }
    ],
    rubricCriteria: 'Assesses deep query planning, edge cases with null padding, and execution engine understanding.',
    createdAt: new Date('2026-09-05T11:00:00Z').toISOString()
  },
  {
    id: 'job_ml_engineer',
    title: 'Senior AI & Full-Stack Engineer',
    department: 'Artificial Intelligence',
    experienceLevel: 'Senior (5+ years)',
    description: 'Design end-to-end machine learning pipelines, ensure data integrity and feature leakage prevention, and build scalable web backends.',
    interviewDuration: 25,
    questionCount: 5,
    requiredCompetencies: [
      { name: 'Machine Learning Pipelines & Data Integrity', category: 'technical', requiredLevel: 'advanced', importance: 'high', description: 'Pipeline encapsulation, data leakage mitigation, temporal cross-validation' },
      { name: 'SQL Optimization & Database Architecture', category: 'technical', requiredLevel: 'advanced', importance: 'high', description: 'PostgreSQL schema tuning, indexing, query execution planning' },
      { name: 'Full-Stack Web Architecture', category: 'technical', requiredLevel: 'intermediate', importance: 'medium', description: 'Node.js/Express REST APIs and React frontends' },
      { name: 'System Design & Scalability', category: 'architecture', requiredLevel: 'advanced', importance: 'medium', description: 'Redis caching, microservices, high-concurrency ingestion' }
    ],
    rubricCriteria: 'Evaluates production architecture trade-offs, leakage prevention patterns, and distributed scaling.',
    createdAt: new Date('2026-09-10T09:00:00Z').toISOString()
  }
];

// Initialize default jobs if missing
async function ensureDefaultJobs() {
  const existing = await storage.find('jobs');
  if (!existing || existing.length === 0) {
    for (const job of DEFAULT_JOBS) {
      await storage.insert('jobs', job);
    }
  }
}
ensureDefaultJobs();

/**
 * GET /api/jobs
 * List all jobs
 */
router.get('/', async (req, res) => {
  try {
    await ensureDefaultJobs();
    const jobs = await storage.find('jobs');
    res.json({ success: true, jobs });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * GET /api/jobs/:id
 * Retrieve single job with applicants
 */
router.get('/:id', async (req, res) => {
  try {
    const job = await storage.findById('jobs', req.params.id);
    if (!job) return res.status(404).json({ error: 'Job not found' });

    const candidates = await storage.find('candidates', { targetRoleId: req.params.id });
    res.json({ success: true, job, candidates });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * POST /api/jobs
 * Create a new job configuration
 */
router.post('/', async (req, res) => {
  try {
    const {
      title,
      department = 'Engineering',
      experienceLevel = 'Mid-Level',
      description = '',
      requiredCompetencies = [],
      interviewDuration = 20,
      questionCount = 4,
      rubricCriteria = 'Standard 0-4 Rubric'
    } = req.body;

    if (!title) {
      return res.status(400).json({ error: 'Job title is required' });
    }

    const job = await storage.insert('jobs', {
      title,
      department,
      experienceLevel,
      description,
      requiredCompetencies,
      interviewDuration: Number(interviewDuration) || 20,
      questionCount: Number(questionCount) || 4,
      rubricCriteria,
      createdAt: new Date().toISOString()
    });

    res.status(201).json({ success: true, job });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * PUT /api/jobs/:id
 * Update job configuration
 */
router.put('/:id', async (req, res) => {
  try {
    const job = await storage.findById('jobs', req.params.id);
    if (!job) return res.status(404).json({ error: 'Job not found' });

    const updated = await storage.update('jobs', req.params.id, req.body);
    res.json({ success: true, job: updated });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
