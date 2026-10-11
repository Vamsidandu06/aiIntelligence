import { Router } from 'express';
import { authService } from '../services/authService.js';

const router = Router();

// POST /api/auth/login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await authService.login(email, password);
    res.json({ success: true, ...result });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

// POST /api/auth/send-otp
router.post('/send-otp', async (req, res) => {
  try {
    const { email, isSignup } = req.body;
    const result = await authService.requestOtp(email, isSignup);
    res.json({ success: true, ...result });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

// POST /api/auth/verify-otp
router.post('/verify-otp', async (req, res) => {
  try {
    const { email, otp } = req.body;
    const result = await authService.verifyOtp(email, otp);
    res.json({ success: true, ...result });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

// POST /api/auth/login-otp
router.post('/login-otp', async (req, res) => {
  try {
    const { email, otp } = req.body;
    const result = await authService.loginWithOtp(email, otp);
    res.json({ success: true, ...result });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

// POST /api/auth/register
router.post('/register', async (req, res) => {
  try {
    const { name, email, password, otp, role } = req.body;
    const result = await authService.register({ name, email, password, otp, role });
    res.status(201).json({ success: true, ...result });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

// GET /api/auth/me/:id
router.get('/me/:id', async (req, res) => {
  try {
    const user = await authService.getUserById(req.params.id);
    if (!user) {
      return res.status(404).json({ success: false, error: 'User not found' });
    }
    res.json({ success: true, user });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// POST /api/auth/heartbeat
router.post('/heartbeat', async (req, res) => {
  try {
    const { userId, questionsCount, durationMinutes, action } = req.body;
    const updated = await authService.recordActivity(userId, {
      questionsCount,
      durationMinutes,
      action
    });
    res.json({ success: true, updated });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// GET /api/admin/users or /api/auth/admin/users
router.get(['/users', '/admin/users'], async (req, res) => {
  try {
    const users = await authService.getAllUsers();
    res.json({ success: true, users });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// POST /api/admin/toggle-role or /api/auth/admin/toggle-role
router.post(['/toggle-role', '/admin/toggle-role'], async (req, res) => {
  try {
    const { userId } = req.body;
    const user = await authService.toggleRole(userId);
    res.json({ success: true, user });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

// GET /api/admin/metrics or /api/auth/admin/metrics
router.get(['/metrics', '/admin/metrics'], async (req, res) => {
  try {
    const metrics = await authService.getAdminMetrics();
    res.json({ success: true, metrics });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// GET /api/admin/alerts or /api/auth/admin/alerts (Live suspicious integrity events)
router.get(['/alerts', '/admin/alerts'], async (req, res) => {
  try {
    const alerts = await authService.getSuspiciousAlerts();
    res.json({ success: true, count: alerts.length, alerts });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

export default router;
