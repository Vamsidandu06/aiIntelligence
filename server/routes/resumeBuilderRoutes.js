import { Router } from 'express';
import { resumeBuilderService } from '../services/resumeBuilderService.js';

const router = Router();

// POST /api/resume/optimize-bullet
router.post('/optimize-bullet', async (req, res) => {
  try {
    const { bullet, role } = req.body;
    const result = await resumeBuilderService.optimizeBullet(bullet, role);
    res.json({ success: true, ...result });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// GET /api/resume/interview-tips
router.get('/interview-tips', (req, res) => {
  const tips = resumeBuilderService.getInterviewTips();
  res.json({ success: true, count: tips.length, tips });
});

export default router;
