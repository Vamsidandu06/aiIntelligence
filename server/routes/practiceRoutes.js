import { Router } from 'express';
import { practiceService } from '../services/practiceService.js';
import { authService } from '../services/authService.js';

const router = Router();

// GET /api/practice/mcqs
router.get('/mcqs', (req, res) => {
  const { category } = req.query;
  const list = practiceService.getMCQs(category);
  // Hide correctIndex when serving list to user
  const sanitized = list.map(item => {
    const copy = { ...item };
    delete copy.correctIndex;
    delete copy.explanation;
    return copy;
  });
  res.json({ success: true, count: sanitized.length, mcqs: sanitized });
});

// POST /api/practice/mcqs/evaluate
router.post('/mcqs/evaluate', async (req, res) => {
  try {
    const { id, selectedOptionIndex, userId } = req.body;
    const result = practiceService.evaluateMCQ(id, selectedOptionIndex);

    if (userId) {
      await authService.recordActivity(userId, {
        questionsCount: 1,
        durationMinutes: 2,
        action: `Answered MCQ on ${result.category}: ${result.isCorrect ? 'Correct' : 'Incorrect'}`
      });
    }

    res.json({ success: true, evaluation: result });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

// GET /api/practice/coding/problems
router.get('/coding/problems', (req, res) => {
  const { difficulty, category, search } = req.query;
  const problems = practiceService.getCodingProblems(difficulty, category, search);
  res.json({ success: true, count: problems.length, problems });
});

// GET /api/practice/coding/problems/:id
router.get('/coding/problems/:id', (req, res) => {
  const problem = practiceService.getCodingProblemById(req.params.id);
  if (!problem) {
    return res.status(404).json({ success: false, error: 'Problem not found' });
  }
  res.json({ success: true, problem });
});

// POST /api/practice/coding/run
router.post('/coding/run', async (req, res) => {
  try {
    const { problemId, code, language, userId } = req.body;
    if (!problemId || !code) {
      return res.status(400).json({ success: false, error: 'Problem ID and code are required' });
    }

    const runResult = await practiceService.runCodingCode(problemId, code, language);

    if (userId && runResult.allPassed) {
      await authService.recordActivity(userId, {
        questionsCount: 1,
        durationMinutes: 15,
        action: `Accepted LeetCode Challenge: ${problemId}`
      });
    }

    res.json({ success: true, result: runResult });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// GET /api/practice/frontend-sql/problems
router.get('/frontend-sql/problems', (req, res) => {
  const problems = practiceService.getFrontendSQLProblems();
  res.json({ success: true, ...problems });
});

// POST /api/practice/frontend-sql/run-sql
router.post('/frontend-sql/run-sql', async (req, res) => {
  try {
    const { query, userId } = req.body;
    if (!query) {
      return res.status(400).json({ success: false, error: 'Query string is required' });
    }

    const result = practiceService.runSQLQuery(query);

    if (userId) {
      await authService.recordActivity(userId, {
        questionsCount: 1,
        durationMinutes: 10,
        action: `Executed SQL Query Practice`
      });
    }

    res.json({ success: true, result });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

export default router;
