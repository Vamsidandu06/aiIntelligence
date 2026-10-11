import mongoose from 'mongoose';
import { config } from './env.js';
import { storage } from '../services/storage.js';

export async function connectDB() {
  if (!config.mongoUri) {
    console.log('ℹ️  No MONGODB_URI provided. Running in high-performance local storage mode (data/store.json).');
    storage.setMongoConnected(false);
    return;
  }

  try {
    const conn = await mongoose.connect(config.mongoUri, {
      serverSelectionTimeoutMS: 4000
    });
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    storage.setMongoConnected(true);
  } catch (error) {
    console.warn(`⚠️  MongoDB Connection failed (${error.message}). Falling back to local storage.`);
    storage.setMongoConnected(false);
  }
}
