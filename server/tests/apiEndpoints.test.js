import test from 'node:test';
import assert from 'node:assert/strict';
import app from '../index.js';

// Simple helper to make in-process HTTP requests using fetch to localhost
let server;
let baseUrl;

test.before(async () => {
  return new Promise((resolve) => {
    // Listen on dynamic ephemeral port
    server = app.listen(0, () => {
      const port = server.address().port;
      baseUrl = `http://localhost:${port}`;
      resolve();
    });
  });
});

test.after(async () => {
  return new Promise((resolve) => {
    server.close(resolve);
  });
});

test('API GET /api/health returns ok status', async () => {
  const res = await fetch(`${baseUrl}/api/health`);
  assert.equal(res.status, 200);
  const data = await res.json();
  assert.equal(data.status, 'ok');
  assert.ok(data.service.includes('InterviewIQ'));
});

test('API GET /api/demo/presets returns preloaded candidate & scenarios', async () => {
  const res = await fetch(`${baseUrl}/api/demo/presets`);
  assert.equal(res.status, 200);
  const data = await res.json();
  assert.equal(data.candidate.name, 'Alex Rivera');
  assert.ok(data.scenarios.scenarioA);
  assert.ok(data.scenarios.scenarioB);
});

test('API POST /api/demo/seed-scenario Scenario A (Strong Answer -> Escalates)', async () => {
  const res = await fetch(`${baseUrl}/api/demo/seed-scenario`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ scenario: 'scenarioA' })
  });

  assert.equal(res.status, 201);
  const data = await res.json();
  assert.ok(data.interviewId);
  assert.equal(data.firstAnswerEvaluation.status, 'Demonstrated');
  assert.ok(data.firstAnswerEvaluation.score >= 85);
  assert.equal(data.nextAdaptiveQuestion.difficulty, 'advanced');
  assert.ok(data.nextAdaptiveQuestion.whyThisQuestion.includes('demonstrated mastery') || data.nextAdaptiveQuestion.whyThisQuestion.includes('solidly demonstrated'));
});

test('API POST /api/demo/seed-scenario Scenario B (Incomplete Answer -> Gap Probe)', async () => {
  const res = await fetch(`${baseUrl}/api/demo/seed-scenario`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ scenario: 'scenarioB' })
  });

  assert.equal(res.status, 201);
  const data = await res.json();
  assert.ok(data.interviewId);
  assert.equal(data.firstAnswerEvaluation.status, 'Partially demonstrated');
  assert.ok(data.firstAnswerEvaluation.missingConcepts.length > 0);
  assert.ok(data.nextAdaptiveQuestion.whyThisQuestion.includes('Why this question?'));
  assert.ok(data.nextAdaptiveQuestion.whyThisQuestion.includes('investigates that specific knowledge gap') || data.nextAdaptiveQuestion.whyThisQuestion.includes('did not establish how you prevent'));
});

test('API Integrity Logging and Non-Punitive Audit Trail', async () => {
  const seedRes = await fetch(`${baseUrl}/api/demo/seed-scenario`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ scenario: 'scenarioA' })
  });
  const { interviewId } = await seedRes.json();

  // Log a tab hidden event
  const logRes = await fetch(`${baseUrl}/api/integrity/event`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      interviewId,
      type: 'tab_hidden',
      details: 'User switched window'
    })
  });
  assert.equal(logRes.status, 201);

  // Retrieve timeline
  const listRes = await fetch(`${baseUrl}/api/integrity/${interviewId}`);
  assert.equal(listRes.status, 200);
  const timeline = await listRes.json();
  assert.ok(timeline.events.length >= 1);
  assert.ok(timeline.tabVisibilityCount >= 1);
});

test('API GET /api/reports/:id returns comprehensive candidate dossier', async () => {
  const seedRes = await fetch(`${baseUrl}/api/demo/seed-scenario`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ scenario: 'scenarioA' })
  });
  const { interviewId } = await seedRes.json();

  const reportRes = await fetch(`${baseUrl}/api/reports/${interviewId}`);
  assert.equal(reportRes.status, 200);
  const data = await reportRes.json();
  assert.ok(data.report);
  assert.equal(data.report.candidateName, 'Alex Rivera');
  assert.ok(data.report.competencies.length > 0);
  assert.ok(data.report.learningResources.length > 0);
  assert.ok(data.report.disclaimer.includes('Responsible AI Notice'));
});
