import express from 'express';
import { storage } from '../services/storage.js';
import { reportGenerator } from '../services/reportGenerator.js';

const router = express.Router();

/**
 * GET /api/reports/:interviewId
 * Fetch full candidate intelligence report
 */
router.get('/:interviewId', async (req, res) => {
  try {
    let report = await storage.findOne('reports', { interviewId: req.params.interviewId });
    if (!report) {
      // If not generated yet, attempt generation
      const interview = await storage.findById('interviews', req.params.interviewId);
      if (interview) {
        report = await reportGenerator.generateReport(req.params.interviewId);
      } else {
        return res.status(404).json({ error: 'Report or interview not found' });
      }
    }

    res.json({ success: true, report });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * POST /api/reports/:interviewId/generate
 * Re-generate report explicitly
 */
router.post('/:interviewId/generate', async (req, res) => {
  try {
    const report = await reportGenerator.generateReport(req.params.interviewId);
    res.json({ success: true, report });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
