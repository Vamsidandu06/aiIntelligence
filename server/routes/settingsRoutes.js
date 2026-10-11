import express from 'express';
import { geminiService } from '../services/geminiService.js';
import { config } from '../config/env.js';
import { storage } from '../services/storage.js';

const router = express.Router();

router.get('/status', (req, res) => {
  res.json({
    success: true,
    isGeminiConfigured: geminiService.isConfigured(),
    model: geminiService.modelName,
    hasApiKey: Boolean(geminiService.apiKey),
    storageMode: storage.isMongoConnected ? 'MongoDB Atlas' : 'Local JSON Disk Persistence (store.json)'
  });
});

router.post('/config', (req, res) => {
  try {
    const { apiKey, model } = req.body;
    if (apiKey !== undefined) {
      geminiService.setApiKey(apiKey.trim(), model || geminiService.modelName);
    }
    res.json({
      success: true,
      isGeminiConfigured: geminiService.isConfigured(),
      model: geminiService.modelName
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/reset-data', async (req, res) => {
  try {
    await storage.clear('interviews');
    await storage.clear('questions');
    await storage.clear('answers');
    await storage.clear('competencies');
    await storage.clear('integrityEvents');
    await storage.clear('reports');
    res.json({ success: true, message: 'Local storage reset successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
