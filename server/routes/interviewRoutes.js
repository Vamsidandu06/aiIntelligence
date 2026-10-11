import express from 'express';
import { storage } from '../services/storage.js';
import { adaptiveEngine } from '../services/adaptiveEngine.js';
import { reportGenerator } from '../services/reportGenerator.js';
import { fallbackEngine } from '../services/fallbackEngine.js';
import { geminiService } from '../services/geminiService.js';

const router = express.Router();

/**
 * GET /api/interviews
 * List all interviews
 */
router.get('/', async (req, res) => {
  try {
    const list = await storage.find('interviews');
    res.json({ success: true, interviews: list });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * POST /api/interviews
 * Create a new interview setup
 */
router.post('/', async (req, res) => {
  try {
    const {
      candidateName = 'Candidate',
      targetRole = 'Software Engineer',
      resumeText = '',
      jobDescription = '',
      competencies = [],
      resumeClaims = [],
      durationMinutes = 20,
      totalQuestions = 4
    } = req.body;

    const interview = await storage.insert('interviews', {
      candidateName,
      targetRole,
      resumeText,
      jobDescription,
      resumeClaims,
      durationMinutes,
      totalQuestions,
      status: 'setup', // setup | in_progress | completed
      startTime: null,
      endTime: null
    });

    // Save competencies associated with this interview
    for (const comp of competencies) {
      await storage.insert('competencies', {
        interviewId: interview.id,
        name: comp.name,
        category: comp.category || 'technical',
        requiredLevel: comp.requiredLevel || 'intermediate',
        importance: comp.importance || 'medium',
        description: comp.description || '',
        status: comp.initialStatus || 'Claimed but unvalidated',
        lastScore: null,
        evidenceHistory: [],
        unresolvedGaps: []
      });
    }

    res.status(201).json({ success: true, interview });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * GET /api/interviews/:id
 * Retrieve full interview state
 */
router.get('/:id', async (req, res) => {
  try {
    const interview = await storage.findById('interviews', req.params.id);
    if (!interview) {
      return res.status(404).json({ error: 'Interview not found' });
    }

    const competencies = await storage.find('competencies', { interviewId: req.params.id });
    const questions = await storage.find('questions', { interviewId: req.params.id });
    const answers = await storage.find('answers', { interviewId: req.params.id });
    const report = await storage.findOne('reports', { interviewId: req.params.id });

    // Active question is the latest question created
    const activeQuestion = questions.length > answers.length 
      ? questions[questions.length - 1] 
      : null;

    res.json({
      success: true,
      interview,
      competencies,
      questions,
      answers,
      activeQuestion,
      report
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * POST /api/interviews/:id/start
 * Start the interview and generate the initial question
 */
router.post('/:id/start', async (req, res) => {
  try {
    const interview = await storage.findById('interviews', req.params.id);
    if (!interview) return res.status(404).json({ error: 'Interview not found' });

    await storage.update('interviews', interview.id, {
      status: 'in_progress',
      startTime: new Date().toISOString()
    });

    // Check if initial question already exists
    let existingQuestions = await storage.find('questions', { interviewId: interview.id });
    if (existingQuestions.length > 0) {
      return res.json({
        success: true,
        question: existingQuestions[0]
      });
    }

    const competencies = await storage.find('competencies', { interviewId: interview.id });
    const priorityComp = competencies.find(c => c.importance === 'high') || competencies[0];

    // Generate first question
    let qData;
    let usedAi = false;

    if (geminiService.isConfigured()) {
      try {
        qData = await geminiService.generateAdaptiveQuestion({
          targetRole: interview.targetRole,
          competencyToAssess: priorityComp,
          targetDifficulty: 'intermediate',
          isFollowUp: false,
          decisionReason: `Initial foundational question targeting high-importance role requirement '${priorityComp.name}'.`
        });
        usedAi = true;
      } catch (err) {
        console.warn('AI init question failed, using fallback:', err.message);
        qData = fallbackEngine.getInitialQuestion();
      }
    } else {
      qData = fallbackEngine.getInitialQuestion();
    }

    const firstQuestion = await storage.insert('questions', {
      interviewId: interview.id,
      order: 1,
      prompt: qData.prompt,
      difficulty: qData.difficulty || 'intermediate',
      competencyName: qData.competencyName || priorityComp.name,
      rubricCriteria: qData.rubricCriteria,
      whyThisQuestion: qData.whyThisQuestion,
      expectedKeyConcepts: qData.expectedKeyConcepts || [],
      usedAi,
      createdAt: new Date().toISOString()
    });

    res.json({
      success: true,
      question: firstQuestion
    });
  } catch (err) {
    console.error('Error starting interview:', err);
    res.status(500).json({ error: err.message });
  }
});

/**
 * POST /api/interviews/:id/answer
 * Submit an answer, evaluate it, update competencies, and generate the next adaptive question
 */
router.post('/:id/answer', async (req, res) => {
  try {
    const { questionId, candidateAnswer, remainingTimeMinutes = 15 } = req.body;

    if (!candidateAnswer || typeof candidateAnswer !== 'string') {
      return res.status(400).json({ error: 'candidateAnswer is required' });
    }

    const interview = await storage.findById('interviews', req.params.id);
    if (!interview) return res.status(404).json({ error: 'Interview not found' });

    // Check for duplicate submission on the same question
    const existingAnswer = await storage.findOne('answers', {
      interviewId: interview.id,
      questionId
    });
    if (existingAnswer) {
      return res.status(409).json({
        error: 'An answer has already been submitted for this question.',
        answer: existingAnswer
      });
    }

    // 1. Process evaluation and update competency profile
    const { answer, evaluation, usedAi } = await adaptiveEngine.processSubmittedAnswer({
      interviewId: interview.id,
      questionId,
      candidateAnswer
    });

    // 2. Select next adaptive question
    const nextResult = await adaptiveEngine.selectNextQuestion({
      interviewId: interview.id,
      currentQuestionIndex: (await storage.find('answers', { interviewId: interview.id })).length,
      totalQuestions: interview.totalQuestions || 4,
      remainingTimeMinutes
    });

    // If quota reached or time up -> finalize interview and generate report
    if (nextResult.isComplete) {
      await storage.update('interviews', interview.id, {
        status: 'completed',
        endTime: new Date().toISOString()
      });
      const report = await reportGenerator.generateReport(interview.id);

      return res.json({
        success: true,
        evaluation,
        answer,
        isComplete: true,
        report
      });
    }

    res.json({
      success: true,
      evaluation,
      answer,
      isComplete: false,
      nextQuestion: nextResult.question
    });
  } catch (err) {
    console.error('Error processing answer:', err);
    res.status(500).json({ error: err.message });
  }
});

/**
 * POST /api/interviews/:id/complete
 * Manually complete the interview and generate final dossier
 */
router.post('/:id/complete', async (req, res) => {
  try {
    const interview = await storage.findById('interviews', req.params.id);
    if (!interview) return res.status(404).json({ error: 'Interview not found' });

    await storage.update('interviews', interview.id, {
      status: 'completed',
      endTime: new Date().toISOString()
    });

    const report = await reportGenerator.generateReport(interview.id);

    res.json({
      success: true,
      report
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * POST /api/interviews/:id/decision
 * Record human recruiter hiring decision, recommendation override, and notes
 */
router.post('/:id/decision', async (req, res) => {
  try {
    const interview = await storage.findById('interviews', req.params.id);
    if (!interview) return res.status(404).json({ error: 'Interview not found' });

    const {
      recommendationCategory = 'Strong evidence of role-relevant competencies',
      recruiterDecision = 'ADVANCE_TO_PANEL',
      notes = '',
      isOverride = false,
      overrideRationale = ''
    } = req.body;

    const decisionRecord = {
      interviewId: interview.id,
      candidateName: interview.candidateName,
      targetRole: interview.targetRole,
      recommendationCategory,
      recruiterDecision,
      notes,
      isOverride: Boolean(isOverride),
      overrideRationale,
      decidedAt: new Date().toISOString()
    };

    await storage.insert('recruiterDecisions', decisionRecord);
    await storage.update('interviews', interview.id, {
      recruiterDecision: decisionRecord
    });

    res.status(201).json({
      success: true,
      decision: decisionRecord
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * GET /api/interviews/:id/decision
 * Retrieve recorded decision for an interview
 */
router.get('/:id/decision', async (req, res) => {
  try {
    const decisions = await storage.find('recruiterDecisions', { interviewId: req.params.id });
    const latest = decisions[decisions.length - 1] || null;
    res.json({ success: true, decision: latest });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
