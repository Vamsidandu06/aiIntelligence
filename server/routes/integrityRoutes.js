import express from 'express';
import { storage } from '../services/storage.js';

const router = express.Router();

/**
 * POST /api/integrity/event
 * Log an observable integrity event (tab_hidden, tab_visible, window_blur, external_assistance_disclosed)
 */
router.post('/event', async (req, res) => {
  try {
    const { interviewId, type, details, clientTimestamp } = req.body;

    if (!interviewId || !type) {
      return res.status(400).json({ error: 'interviewId and type are required' });
    }

    let objectiveDescription = '';
    let reviewStatus = 'Logged - No Action Required';
    let severity = 'low';

    switch (type) {
      case 'tab_hidden':
        objectiveDescription = 'The interview browser tab transitioned to hidden (visibilitychange: hidden).';
        reviewStatus = 'Requires Human Review if repeated';
        severity = 'medium';
        break;
      case 'tab_visible':
        objectiveDescription = 'The interview browser tab returned to visible (visibilitychange: visible).';
        reviewStatus = 'Logged - Normal Return';
        severity = 'low';
        break;
      case 'window_blur':
        objectiveDescription = 'Window lost active keyboard/mouse focus.';
        reviewStatus = 'Logged - Observational';
        severity = 'low';
        break;
      case 'interruption':
        objectiveDescription = details || 'Network or session recording experienced a transient interruption.';
        reviewStatus = 'Logged - Technical Interruption';
        severity = 'low';
        break;
      case 'external_assistance_disclosed':
        objectiveDescription = `Candidate explicitly disclosed use of external assistance: "${details || 'External reference documentation'}"`;
        reviewStatus = 'Transparent Disclosure Recorded';
        severity = 'low';
        break;
      case 'fullscreen_exit':
        objectiveDescription = 'Candidate exited fullscreen mode.';
        reviewStatus = 'Logged - Observational';
        severity = 'medium';
        break;
      default:
        objectiveDescription = `Observed event: ${type} - ${details || ''}`;
        reviewStatus = 'Logged';
        severity = 'low';
    }

    const event = await storage.insert('integrityEvents', {
      interviewId,
      type,
      details: details || '',
      objectiveDescription,
      reviewStatus,
      severity,
      isDismissed: false,
      recruiterNotes: '',
      clientTimestamp: clientTimestamp || new Date().toISOString(),
      serverTimestamp: new Date().toISOString()
    });

    res.status(201).json({ success: true, event });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * GET /api/integrity/:interviewId
 * Retrieve chronological event timeline for an interview
 */
router.get('/:interviewId', async (req, res) => {
  try {
    const events = await storage.find('integrityEvents', { interviewId: req.params.interviewId });
    // Sort chronologically
    events.sort((a, b) => new Date(a.serverTimestamp) - new Date(b.serverTimestamp));

    res.json({
      success: true,
      events,
      totalEvents: events.length,
      tabVisibilityCount: events.filter(e => e.type === 'tab_hidden').length,
      disclosures: events.filter(e => e.type === 'external_assistance_disclosed')
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * PUT /api/integrity/events/:id/review
 * Recruiter updates review status, dismisses event, or adds human notes
 */
router.put('/events/:id/review', async (req, res) => {
  try {
    const { isDismissed, reviewStatus, recruiterNotes } = req.body;
    const event = await storage.findById('integrityEvents', req.params.id);
    if (!event) return res.status(404).json({ error: 'Integrity event not found' });

    const updated = await storage.update('integrityEvents', req.params.id, {
      ...(isDismissed !== undefined && { isDismissed }),
      ...(reviewStatus && { reviewStatus }),
      ...(recruiterNotes !== undefined && { recruiterNotes }),
      reviewedAt: new Date().toISOString()
    });

    res.json({ success: true, event: updated });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
