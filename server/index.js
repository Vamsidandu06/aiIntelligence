import express from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { config } from './config/env.js';
import { connectDB } from './config/db.js';

import interviewRoutes from './routes/interviewRoutes.js';
import resumeRoutes from './routes/resumeRoutes.js';
import integrityRoutes from './routes/integrityRoutes.js';
import reportRoutes from './routes/reportRoutes.js';
import demoRoutes from './routes/demoRoutes.js';
import settingsRoutes from './routes/settingsRoutes.js';
import authRoutes from './routes/authRoutes.js';
import practiceRoutes from './routes/practiceRoutes.js';
import resumeBuilderRoutes from './routes/resumeBuilderRoutes.js';
import jobRoutes from './routes/jobRoutes.js';
import candidateRoutes from './routes/candidateRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middlewares
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json({ limit: '15mb' }));
app.use(express.urlencoded({ extended: true, limit: '15mb' }));

// Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'InterviewIQ AI - Adaptive Interview Intelligence (AII) API',
    tagline: 'Every Question Has a Purpose. Every Decision Has Evidence.',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

// Route Registrations
app.use('/api/auth', authRoutes);
app.use('/api/admin', authRoutes);
app.use('/api/practice', practiceRoutes);
app.use('/api/resume-builder', resumeBuilderRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/candidates', candidateRoutes);
app.use('/api/interviews', interviewRoutes);
app.use('/api/resume', resumeRoutes);
app.use('/api/integrity', integrityRoutes);
app.use('/api/reports', reportRoutes);
app.use('/api/demo', demoRoutes);
app.use('/api/settings', settingsRoutes);

// Static frontend serving if client/dist exists
const clientDist = path.resolve(__dirname, '../client/dist');
if (fs.existsSync(clientDist)) {
  app.use(express.static(clientDist));
  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api')) return next();
    res.sendFile(path.join(clientDist, 'index.html'));
  });
}

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('Unhandled error in request:', err);
  res.status(err.status || 500).json({
    error: err.message || 'Internal server error',
    stack: config.nodeEnv === 'development' ? err.stack : undefined
  });
});

export async function startServer() {
  await connectDB();
  return app.listen(config.port, () => {
    console.log(`🚀 Adaptive Interview Intelligence (AII) running on http://localhost:${config.port} [${config.nodeEnv}]`);
  });
}

export default app;
