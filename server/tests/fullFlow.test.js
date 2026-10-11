import test from 'node:test';
import assert from 'node:assert/strict';
import { storage } from '../services/storage.js';
import { adaptiveEngine } from '../services/adaptiveEngine.js';
import { reportGenerator } from '../services/reportGenerator.js';
import { SAMPLE_CANDIDATE, PRESET_COMPETENCIES, PRESET_RESUME_CLAIMS, SCENARIO_PRESETS, fallbackEngine } from '../services/fallbackEngine.js';

test('Full Interview Lifecycle - setup, answer processing, adaptive branching, and report generation', async () => {
  // 1. Setup session
  const interview = await storage.insert('interviews', {
    candidateName: 'Test Candidate',
    targetRole: 'Senior AI Engineer',
    resumeClaims: JSON.parse(JSON.stringify(PRESET_RESUME_CLAIMS)),
    durationMinutes: 20,
    totalQuestions: 2
  });

  for (const comp of PRESET_COMPETENCIES) {
    await storage.insert('competencies', {
      interviewId: interview.id,
      name: comp.name,
      category: comp.category,
      requiredLevel: comp.requiredLevel,
      importance: comp.importance,
      description: comp.description,
      status: comp.initialStatus,
      lastScore: null,
      evidenceHistory: []
    });
  }

  // 2. Initial question
  const q1Data = fallbackEngine.getInitialQuestion();
  const q1 = await storage.insert('questions', {
    interviewId: interview.id,
    order: 1,
    prompt: q1Data.prompt,
    difficulty: q1Data.difficulty,
    competencyName: q1Data.competencyName,
    rubricCriteria: q1Data.rubricCriteria,
    whyThisQuestion: q1Data.whyThisQuestion,
    expectedKeyConcepts: q1Data.expectedKeyConcepts
  });

  // 3. Process Answer
  const result = await adaptiveEngine.processSubmittedAnswer({
    interviewId: interview.id,
    questionId: q1.id,
    candidateAnswer: SCENARIO_PRESETS.scenarioA.q1_answer
  });

  assert.equal(result.evaluation.status, 'Demonstrated');
  assert.ok(result.evaluation.score >= 80);

  // Check updated competency
  const comps = await storage.find('competencies', { interviewId: interview.id });
  const comp1 = comps.find(c => c.name === q1.competencyName);
  assert.equal(comp1.status, 'Demonstrated');

  // 4. Select Next Question
  const nextQResult = await adaptiveEngine.selectNextQuestion({
    interviewId: interview.id,
    currentQuestionIndex: 1,
    totalQuestions: 2,
    remainingTimeMinutes: 15
  });

  assert.equal(nextQResult.isComplete, false);
  assert.ok(nextQResult.question);
  assert.equal(nextQResult.question.order, 2);

  // 5. Generate Report
  const report = await reportGenerator.generateReport(interview.id);
  assert.ok(report);
  assert.equal(report.candidateName, 'Test Candidate');
  assert.ok(report.strengths.length > 0);
  assert.ok(report.unassessedCompetencies.length > 0);
  assert.ok(report.disclaimer.includes('Responsible AI Notice'));
});
