import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';
import { config } from '../config/env.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_FILE = path.resolve(__dirname, '../data/store.json');

// Ensure data directory and file exist
if (!fs.existsSync(path.dirname(DATA_FILE))) {
  fs.mkdirSync(path.dirname(DATA_FILE), { recursive: true });
}

const defaultData = {
  interviews: [],
  questions: [],
  answers: [],
  competencies: [],
  integrityEvents: [],
  reports: [],
  users: [
    {
      id: 'usr_admin_vamsi',
      name: 'Vamsi (Super Admin)',
      email: 'vamsi@gmail.com',
      password: 'password@1',
      role: 'admin',
      totalHours: 58.4,
      questionsSolved: 450,
      interviewsAttended: 24,
      lastLogin: new Date().toISOString(),
      createdAt: '2026-08-01T10:00:00.000Z',
      status: 'active'
    },
    {
      id: 'usr_alex_02',
      name: 'Alex Rivera',
      email: 'alex@cloudscale.io',
      password: 'client123',
      role: 'client',
      totalHours: 14.2,
      questionsSolved: 48,
      interviewsAttended: 4,
      lastLogin: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
      createdAt: '2026-09-15T11:30:00.000Z',
      status: 'active'
    },
    {
      id: 'usr_priya_03',
      name: 'Priya Sharma',
      email: 'priya@fintech.io',
      password: 'client123',
      role: 'client',
      totalHours: 8.5,
      questionsSolved: 32,
      interviewsAttended: 2,
      lastLogin: new Date(Date.now() - 1000 * 60 * 120).toISOString(),
      createdAt: '2026-09-20T14:15:00.000Z',
      status: 'active'
    },
    {
      id: 'usr_marcus_04',
      name: 'Marcus Vance',
      email: 'marcus@ai-labs.org',
      password: 'client123',
      role: 'client',
      totalHours: 19.8,
      questionsSolved: 74,
      interviewsAttended: 6,
      lastLogin: new Date(Date.now() - 1000 * 60 * 180).toISOString(),
      createdAt: '2026-09-10T09:45:00.000Z',
      status: 'active'
    }
  ],
  activityLogs: [
    {
      id: 'act_01',
      userId: 'usr_alex_02',
      userName: 'Alex Rivera',
      action: 'Completed Adaptive ML Interview Session',
      durationMinutes: 45,
      questionsCount: 5,
      timestamp: new Date(Date.now() - 1000 * 60 * 45).toISOString()
    },
    {
      id: 'act_02',
      userId: 'usr_priya_03',
      userName: 'Priya Sharma',
      action: 'Solved Medium LeetCode: LRU Cache Design',
      durationMinutes: 30,
      questionsCount: 1,
      timestamp: new Date(Date.now() - 1000 * 60 * 120).toISOString()
    },
    {
      id: 'act_03',
      userId: 'usr_marcus_04',
      userName: 'Marcus Vance',
      action: 'Practiced SQL Window Function Queries',
      durationMinutes: 25,
      questionsCount: 4,
      timestamp: new Date(Date.now() - 1000 * 60 * 180).toISOString()
    }
  ],
  practiceSubmissions: []
};

if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(defaultData, null, 2), 'utf-8');
}

export class StorageService {
  constructor() {
    this.isMongoConnected = false;
    this._memoryStore = {};
    for (const key of Object.keys(defaultData)) {
      this._memoryStore[key] = [];
    }
  }

  setMongoConnected(connected) {
    this.isMongoConnected = connected;
  }

  _readLocal() {
    let retries = 5;
    while (retries > 0) {
      try {
        const content = fs.readFileSync(DATA_FILE, 'utf-8');
        if (!content || !content.trim()) {
          retries--;
          Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 15);
          continue;
        }
        const parsed = JSON.parse(content);
        // Ensure default collections exist in memory
        for (const [key, val] of Object.entries(defaultData)) {
          if (!parsed[key]) {
            parsed[key] = val;
          }
        }
        // Merge process memoryStore so concurrent disk writes do not erase in-flight session data
        for (const [col, list] of Object.entries(this._memoryStore)) {
          if (!parsed[col]) parsed[col] = [];
          for (const item of list) {
            const idx = parsed[col].findIndex(p => p.id === item.id);
            if (idx >= 0) {
              parsed[col][idx] = { ...parsed[col][idx], ...item };
            } else {
              parsed[col].push(item);
            }
          }
        }
        return parsed;
      } catch (err) {
        retries--;
        if (retries === 0) {
          console.error('Error reading local store after retries:', err.message);
          return { ...defaultData };
        }
        Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 20);
      }
    }
    return { ...defaultData };
  }

  _writeLocal(data) {
    let retries = 5;
    while (retries > 0) {
      try {
        const tempPath = `${DATA_FILE}.${process.pid}.${Date.now()}.${Math.random().toString(36).substring(2, 6)}.tmp`;
        fs.writeFileSync(tempPath, JSON.stringify(data, null, 2), 'utf-8');
        try {
          fs.renameSync(tempPath, DATA_FILE);
        } catch {
          fs.copyFileSync(tempPath, DATA_FILE);
          try { fs.unlinkSync(tempPath); } catch {}
        }
        return;
      } catch (err) {
        retries--;
        if (retries === 0) {
          try {
            fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf-8');
          } catch (e) {
            console.error('Error writing local store:', e.message);
          }
        }
        Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 20);
      }
    }
  }

  // --- Generic Collection Operations ---
  async find(collection, query = {}) {
    const data = this._readLocal();
    const list = data[collection] || [];
    return list.filter(item => {
      for (const [key, value] of Object.entries(query)) {
        if (item[key] !== value) return false;
      }
      return true;
    });
  }

  async findOne(collection, query = {}) {
    const list = await this.find(collection, query);
    return list[0] || null;
  }

  async findById(collection, id) {
    return this.findOne(collection, { id });
  }

  async insert(collection, item) {
    if (!item.id) {
      item.id = 'id_' + Date.now() + '_' + Math.random().toString(36).substring(2, 9);
    }
    if (!item.createdAt) {
      item.createdAt = new Date().toISOString();
    }
    item.updatedAt = new Date().toISOString();

    if (!this._memoryStore[collection]) this._memoryStore[collection] = [];
    this._memoryStore[collection].push(item);

    const data = this._readLocal();
    this._writeLocal(data);
    return item;
  }

  async update(collection, idOrQuery, updates) {
    const targetId = typeof idOrQuery === 'object' && idOrQuery !== null ? (idOrQuery.id || idOrQuery._id) : idOrQuery;

    // Update in memory store
    if (this._memoryStore[collection]) {
      const mIdx = this._memoryStore[collection].findIndex(i => i.id === targetId);
      if (mIdx !== -1) {
        this._memoryStore[collection][mIdx] = {
          ...this._memoryStore[collection][mIdx],
          ...updates,
          updatedAt: new Date().toISOString()
        };
      }
    }

    const data = this._readLocal();
    const list = data[collection] || [];
    const index = list.findIndex(i => i.id === targetId);
    if (index === -1) return null;

    list[index] = {
      ...list[index],
      ...updates,
      updatedAt: new Date().toISOString()
    };
    data[collection] = list;
    this._writeLocal(data);
    return list[index];
  }

  async delete(collection, id) {
    const data = this._readLocal();
    if (!data[collection]) return false;
    data[collection] = data[collection].filter(i => i.id !== id);
    this._writeLocal(data);
    return true;
  }

  async clear(collection) {
    const data = this._readLocal();
    data[collection] = [];
    this._writeLocal(data);
  }
}

export const storage = new StorageService();
