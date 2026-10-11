import React, { createContext, useContext, useState, useEffect } from 'react';
import { api } from '../api/client.js';

const SettingsContext = createContext(null);

export function SettingsProvider({ children }) {
  const [settings, setSettings] = useState({
    isGeminiConfigured: false,
    model: 'gemini-1.5-flash',
    storageMode: 'Detecting...',
    hasSpeechRecognition: false,
    hasSpeechSynthesis: false
  });
  const [loading, setLoading] = useState(true);

  const fetchStatus = async () => {
    try {
      const res = await api.getSettingsStatus();
      setSettings(prev => ({
        ...prev,
        isGeminiConfigured: res.isGeminiConfigured,
        model: res.model,
        storageMode: res.storageMode
      }));
    } catch (err) {
      console.warn('Backend not responding yet:', err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStatus();

    // Browser speech capabilities check
    const hasSR = 'webkitSpeechRecognition' in window || 'SpeechRecognition' in window;
    const hasSS = 'speechSynthesis' in window;

    setSettings(prev => ({
      ...prev,
      hasSpeechRecognition: Boolean(hasSR),
      hasSpeechSynthesis: Boolean(hasSS)
    }));
  }, []);

  const updateApiKey = async (apiKey, model) => {
    const res = await api.updateSettings({ apiKey, model });
    await fetchStatus();
    return res;
  };

  return (
    <SettingsContext.Provider value={{ settings, loading, fetchStatus, updateApiKey }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const ctx = useContext(SettingsContext);
  if (!ctx) throw new Error('useSettings must be used within SettingsProvider');
  return ctx;
}
