import express from 'express';
import { storage } from '../services/storage.js';
import {
  JUNIOR_SWE_CANDIDATE,
  JUNIOR_SWE_COMPETENCIES,
  JUNIOR_SWE_RESUME_CLAIMS,
  SWE_SCENARIO_PRESETS,
  SAMPLE_CANDIDATE,
  PRESET_COMPETENCIES,
  PRESET_RESUME_CLAIMS,
  SCENARIO_PRESETS,
  RUBRIC_LEVELS,
  fallbackEngine
} from '../services/fallbackEngine.js';
import { reportGenerator } from '../services/reportGenerator.js';

const router = express.Router();

/**
 * GET /api/demo/presets
 * Returns sample candidates, job descriptions, competencies, and 3-branch scenario presets
 */
router.get('/presets', (req, res) => {
  res.json({
    success: true,
    candidate: SAMPLE_CANDIDATE,
    scenarios: SCENARIO_PRESETS,
    competencies: PRESET_COMPETENCIES,
    resumeClaims: PRESET_RESUME_CLAIMS,
    juniorSWE: {
      candidate: JUNIOR_SWE_CANDIDATE,
      competencies: JUNIOR_SWE_COMPETENCIES,
      resumeClaims: JUNIOR_SWE_RESUME_CLAIMS,
      scenarios: SWE_SCENARIO_PRESETS
    },
    seniorAI: {
      candidate: SAMPLE_CANDIDATE,
      competencies: PRESET_COMPETENCIES,
      resumeClaims: PRESET_RESUME_CLAIMS,
      scenarios: SCENARIO_PRESETS
    },
    rubricLevels: RUBRIC_LEVELS
  });
});

/**
 * POST /api/demo/seed-scenario
 * Seeds a full interview state directly into storage for instant demonstration
 * Body: { scenario: 'scenarioA' | 'scenarioB' | 'scenarioC', role: 'junior' | 'senior' }
 */
router.post('/seed-scenario', async (req, res) => {
  try {
    const { scenario = 'scenarioA', role = 'senior' } = req.body;
    const isJunior = role === 'junior';

    const candidateProfile = isJunior ? JUNIOR_SWE_CANDIDATE : SAMPLE_CANDIDATE;
    const presetCompetencies = isJunior ? JUNIOR_SWE_COMPETENCIES : PRESET_COMPETENCIES;
    const presetClaims = isJunior ? JUNIOR_SWE_RESUME_CLAIMS : PRESET_RESUME_CLAIMS;
    const scenarioData = isJunior
      ? (SWE_SCENARIO_PRESETS[scenario] || SWE_SCENARIO_PRESETS.scenarioA)
      : (SCENARIO_PRESETS[scenario] || SCENARIO_PRESETS.scenarioA);

    // 1. Create interview session
    const interview = await storage.insert('interviews', {
      candidateName: candidateProfile.name,
      targetRole: candidateProfile.targetRole,
      resumeText: candidateProfile.resumeText,
      jobDescription: candidateProfile.jobDescription,
      resumeClaims: JSON.parse(JSON.stringify(presetClaims)),
      durationMinutes: 20,
      totalQuestions: 4,
      status: 'in_progress',
      isDemoSession: true,
      demoScenario: scenario,
      startTime: new Date(Date.now() - 10 * 60 * 1000).toISOString()
    });

    // 2. Insert competencies into database with strictly distinct initial states
    for (const comp of presetCompetencies) {
      await storage.insert('competencies', {
        interviewId: interview.id,
        name: comp.name,
        category: comp.category,
        requiredLevel: comp.requiredLevel,
        importance: comp.importance,
        description: comp.description,
        status: comp.initialStatus, // "Claimed but unvalidated" or "Not assessed"
        lastScore: null,
        evidenceHistory: [],
        unresolvedGaps: []
      });
    }

    // 3. Insert Question 1
    const q1Data = fallbackEngine.getInitialQuestion(candidateProfile.targetRole);
    const q1 = await storage.insert('questions', {
      interviewId: interview.id,
      order: 1,
      prompt: q1Data.prompt,
      difficulty: q1Data.difficulty,
      competencyName: q1Data.competencyName,
      estimatedDurationMinutes: q1Data.estimatedDurationMinutes || 4,
      rubricCriteria: q1Data.rubricCriteria,
      whyThisQuestion: q1Data.whyThisQuestion,
      uncertaintyToResolve: q1Data.uncertaintyToResolve,
      expectedKeyConcepts: q1Data.expectedKeyConcepts,
      priorityCalculation: q1Data.priorityCalculation,
      usedAi: false,
      isDemoData: true
    });

    // 4. Simulate Answer 1 submission based on scenario
    const candidateAnswer = scenarioData.q1_answer;

    const evaluation = fallbackEngine.evaluateAnswerOffline({
      questionPrompt: q1.prompt,
      rubricCriteria: q1.rubricCriteria,
      competencyName: q1.competencyName,
      candidateAnswer
    });

    const a1 = await storage.insert('answers', {
      interviewId: interview.id,
      questionId: q1.id,
      candidateAnswer,
      evaluation,
      usedAi: false,
      isDemoData: true,
      submittedAt: new Date(Date.now() - 5 * 60 * 1000).toISOString()
    });

    // Update Competency #1 in store
    const comps = await storage.find('competencies', { interviewId: interview.id });
    const comp1 = comps.find(c => c.name === q1.competencyName);
    if (comp1) {
      await storage.update('competencies', comp1.id, {
        status: evaluation.status,
        lastScore: evaluation.score,
        rubricLevel: evaluation.rubricLevel,
        unresolvedGaps: evaluation.missingConcepts,
        evidenceHistory: [{
          questionId: q1.id,
          questionPrompt: q1.prompt,
          score: evaluation.score,
          rubricLevel: evaluation.rubricLevel,
          status: evaluation.status,
          supportingExcerpts: evaluation.supportingExcerpts,
          timestamp: new Date().toISOString()
        }]
      });
    }

    // Update Resume Claim #1
    const claims = interview.resumeClaims.map((claim, idx) => {
      if (idx === 0) {
        return {
          ...claim,
          verificationStatus: evaluation.status,
          verifiedWithQuote: evaluation.supportingExcerpts[0] || 'Answer provided in interview',
          confidence: evaluation.confidence || 'high',
          explanation: evaluation.assessmentExplanation
        };
      }
      return claim;
    });
    await storage.update('interviews', interview.id, { resumeClaims: claims });

    // 5. Generate Question 2 (demonstrating adaptive divergence!)
    const q2Data = fallbackEngine.generateNextQuestionOffline({
      previousEvaluation: evaluation,
      questionIndex: 1,
      role: candidateProfile.targetRole
    });

    const q2 = await storage.insert('questions', {
      interviewId: interview.id,
      order: 2,
      prompt: q2Data.prompt,
      difficulty: q2Data.difficulty,
      competencyName: q2Data.competencyName,
      estimatedDurationMinutes: q2Data.estimatedDurationMinutes || 4,
      rubricCriteria: q2Data.rubricCriteria,
      whyThisQuestion: q2Data.whyThisQuestion,
      uncertaintyToResolve: q2Data.uncertaintyToResolve,
      expectedKeyConcepts: q2Data.expectedKeyConcepts,
      priorityCalculation: q2Data.priorityCalculation,
      usedAi: false,
      isDemoData: true
    });

    // 6. Log an auditable, non-punitive integrity event
    await storage.insert('integrityEvents', {
      interviewId: interview.id,
      type: 'tab_hidden',
      details: 'Tab visibility lost for 4 seconds during question #1',
      objectiveDescription: 'The interview browser tab transitioned to hidden (visibilitychange: hidden).',
      reviewStatus: 'Requires Human Review if repeated',
      isDismissed: false,
      recruiterNotes: '',
      clientTimestamp: new Date(Date.now() - 6 * 60 * 1000).toISOString(),
      serverTimestamp: new Date(Date.now() - 6 * 60 * 1000).toISOString()
    });

    // Generate initial report snapshot
    const report = await reportGenerator.generateReport(interview.id);

    res.status(201).json({
      success: true,
      interviewId: interview.id,
      scenario: scenarioData.title,
      firstAnswerEvaluation: evaluation,
      nextAdaptiveQuestion: q2,
      report
    });
  } catch (err) {
    console.error('Error seeding demo scenario:', err);
    res.status(500).json({ error: err.message });
  }
});

export default router;
