import test from 'node:test';
import assert from 'node:assert/strict';
import { 
  QUESTION_BANK, 
  detectResumeDomainGrip, 
  getRandomInitialQuestion, 
  getRandomAdaptiveQuestion,
  findQuestionByPromptOrId 
} from '../services/questionBank.js';
import { fallbackEngine } from '../services/fallbackEngine.js';

test('Question Bank - Contains 30+ questions spanning ML, Backend, Frontend, SQL, DSA', () => {
  assert.ok(QUESTION_BANK.length >= 30, `Expected at least 30 questions, got ${QUESTION_BANK.length}`);
  
  const domains = new Set(QUESTION_BANK.map(q => q.domain));
  assert.ok(domains.has('ml'), 'Missing ML questions');
  assert.ok(domains.has('backend'), 'Missing Backend questions');
  assert.ok(domains.has('frontend'), 'Missing Frontend questions');
  assert.ok(domains.has('sql'), 'Missing SQL questions');
  assert.ok(domains.has('dsa'), 'Missing DSA questions');

  // Verify all questions have required properties and ideal benchmark answers
  for (const q of QUESTION_BANK) {
    assert.ok(q.id, 'Question missing id');
    assert.ok(q.prompt, 'Question missing prompt');
    assert.ok(q.competencyName, 'Question missing competencyName');
    assert.ok(q.idealAnswer && q.idealAnswer.length > 50, `Question ${q.id} missing comprehensive ideal benchmark answer`);
    assert.ok(Array.isArray(q.expectedKeyConcepts) && q.expectedKeyConcepts.length > 0, `Question ${q.id} missing expectedKeyConcepts`);
  }
});

test('Resume Domain Grip Detector - accurately classifies resume strengths', () => {
  // ML resume
  const mlResume = `Experienced Machine Learning Engineer with PyTorch, TensorFlow, transformers, deep learning, NLP, embeddings, scikit-learn.`;
  const mlGrip = detectResumeDomainGrip(mlResume, 'AI Engineer');
  assert.equal(mlGrip.dominantDomain, 'ml');

  // Backend resume
  const backendResume = `Senior Backend Developer. Built distributed microservices with Node.js, Express, Redis caching, Docker, Kafka, REST APIs, and JWT authentication.`;
  const backendGrip = detectResumeDomainGrip(backendResume, 'Backend Engineer');
  assert.equal(backendGrip.dominantDomain, 'backend');

  // Frontend resume
  const frontendResume = `Frontend Specialist proficient in React, TypeScript, Tailwind CSS, Next.js, Redux, Core Web Vitals, HTML, and responsive UI.`;
  const frontendGrip = detectResumeDomainGrip(frontendResume, 'Frontend Engineer');
  assert.equal(frontendGrip.dominantDomain, 'frontend');

  // SQL resume
  const sqlResume = `Database Administrator with PostgreSQL, MySQL, B-Tree index optimization, ACID transactions, relational schema design, query plans, and sharding.`;
  const sqlGrip = detectResumeDomainGrip(sqlResume, 'Database Engineer');
  assert.equal(sqlGrip.dominantDomain, 'sql');
});

test('Dynamic Question Selection - picks questions randomly tailored to candidate resume grip', () => {
  const mlResume = `Machine Learning, PyTorch, transformers, deep learning, NLP`;
  const q1 = getRandomInitialQuestion({ resumeText: mlResume, targetRole: 'AI Engineer' });
  assert.equal(q1.domain, 'ml');
  assert.ok(q1.idealAnswer);

  const backendResume = `Node.js, Express, microservices, Redis caching, distributed systems`;
  const q2 = getRandomInitialQuestion({ resumeText: backendResume, targetRole: 'Backend Engineer' });
  assert.equal(q2.domain, 'backend');
  assert.ok(q2.idealAnswer);

  const sqlResume = `PostgreSQL, MySQL, indexing, ACID transactions, relational queries`;
  const q3 = getRandomInitialQuestion({ resumeText: sqlResume, targetRole: 'Database Engineer' });
  assert.equal(q3.domain, 'sql');
  assert.ok(q3.idealAnswer);
});

test('Offline Answer Evaluation - attaches benchmark idealModelAnswer for client comparison', () => {
  const sqlQuestion = findQuestionByPromptOrId('sql-01');
  assert.ok(sqlQuestion);

  const candidateAnswer = `A B-Tree index organizes table pages into root, branch, and leaf nodes. In an index seek, it does binary search in O(log N) page reads. In an index scan, it scans all leaf pages. Leading column order in composite indexes matters because of leftmost prefix rule.`;

  const evaluation = fallbackEngine.evaluateAnswerOffline({
    questionPrompt: sqlQuestion.prompt,
    rubricCriteria: sqlQuestion.rubricCriteria,
    competencyName: sqlQuestion.competencyName,
    candidateAnswer
  });

  assert.ok(evaluation.hasSufficientEvidence);
  assert.ok(evaluation.score >= 80);
  assert.equal(evaluation.status, 'Demonstrated');
  assert.ok(evaluation.idealModelAnswer, 'Missing idealModelAnswer in evaluation');
  assert.equal(evaluation.idealModelAnswer, sqlQuestion.idealAnswer);
  assert.equal(evaluation.candidateAnswer, candidateAnswer);
});
