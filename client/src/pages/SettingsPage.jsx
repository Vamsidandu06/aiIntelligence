import React, { useState } from 'react';
import { 
  Settings, 
  Key, 
  Cpu, 
  Database, 
  Mic, 
  Trash2, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  ExternalLink 
} from 'lucide-react';
import { useSettings } from '../context/SettingsContext.jsx';
import { api } from '../api/client.js';

export function SettingsPage() {
  const { settings, updateApiKey, fetchStatus } = useSettings();

  const [apiKeyInput, setApiKeyInput] = useState('');
  const [modelSelect, setModelSelect] = useState(settings.model || 'gemini-1.5-flash');
  const [saving, setSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [resetting, setResetting] = useState(false);
  const [error, setError] = useState(null);

  const handleSaveConfig = async (e) => {
    e.preventDefault();
    try {
      setSaving(true);
      setError(null);
      await updateApiKey(apiKeyInput, modelSelect);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 4000);
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  const handleResetData = async () => {
    if (confirm('Are you sure you want to clear all stored interview sessions and reports? This cannot be undone.')) {
      try {
        setResetting(true);
        await api.resetData();
        alert('All local storage data has been cleared.');
      } catch (err) {
        alert(`Reset failed: ${err.message}`);
      } finally {
        setResetting(false);
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Application Settings & Privacy Controls
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Configure AI model keys, inspect storage mode, and manage candidate privacy settings.
        </p>
      </div>

      {saveSuccess && (
        <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>Gemini AI settings updated successfully! Live adaptive reasoning is active.</span>
        </div>
      )}

      {error && (
        <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-rose-600" />
          <span>{error}</span>
        </div>
      )}

      {/* Gemini AI Configuration */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-5">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-blue-600" />
              <span>Google Gemini AI Engine</span>
            </h2>
            <p className="text-xs text-slate-500">
              Supply a Gemini API key for live LLM reasoning, or use the built-in deterministic demo fallback engine.
            </p>
          </div>

          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${
            settings.isGeminiConfigured
              ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
              : 'bg-blue-50 text-blue-700 border-blue-200'
          }`}>
            <span className={`w-2 h-2 rounded-full ${settings.isGeminiConfigured ? 'bg-emerald-500' : 'bg-blue-500'}`} />
            <span>{settings.isGeminiConfigured ? 'Gemini Connected' : 'Deterministic Fallback Active'}</span>
          </span>
        </div>

        <form onSubmit={handleSaveConfig} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Google Gemini API Key
            </label>
            <div className="relative">
              <input
                type="password"
                value={apiKeyInput}
                onChange={(e) => setApiKeyInput(e.target.value)}
                placeholder="AIzaSy... (leave blank to use server environment variable or demo engine)"
                className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs font-mono focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <p className="text-[11px] text-slate-400 mt-1">
              Your key remains strictly on the server and is never exposed to external clients.
            </p>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Generative Model
            </label>
            <select
              value={modelSelect}
              onChange={(e) => setModelSelect(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="gemini-1.5-flash">gemini-1.5-flash (Fast, Low Latency - Recommended)</option>
              <option value="gemini-1.5-pro">gemini-1.5-pro (High Reasoning Depth)</option>
              <option value="gemini-2.0-flash">gemini-2.0-flash (Latest Model Preview)</option>
            </select>
          </div>

          <div className="flex justify-end pt-2">
            <button
              type="submit"
              disabled={saving}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow-xs transition"
            >
              {saving ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Key className="w-3.5 h-3.5" />}
              <span>Save AI Configuration</span>
            </button>
          </div>
        </form>
      </div>

      {/* Storage & Environment Inspection */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
        <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
          <Database className="w-4 h-4 text-indigo-600" />
          <span>Storage & Persistence Status</span>
        </h2>
        <div className="grid sm:grid-cols-2 gap-4 text-xs">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <span className="font-semibold text-slate-500 block mb-1">Storage Mode</span>
            <span className="font-bold text-slate-900 text-sm">{settings.storageMode}</span>
            <p className="text-[11px] text-slate-400 mt-1">
              Automatic zero-config JSON persistence ensures instant local runs without mongod daemon setup.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <span className="font-semibold text-slate-500 block mb-1">Production MongoDB Atlas</span>
            <span className="text-slate-700">Set <code>MONGODB_URI</code> in <code>.env</code></span>
            <p className="text-[11px] text-slate-400 mt-1">
              Seamlessly auto-migrates to cloud database cluster for deployment on Render.
            </p>
          </div>
        </div>
      </div>

      {/* Audio & Accessibility Status */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
        <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
          <Mic className="w-4 h-4 text-emerald-600" />
          <span>Voice & Audio Accessibility</span>
        </h2>
        <div className="grid sm:grid-cols-2 gap-4 text-xs">
          <div className="p-3 rounded-lg border border-slate-200 flex items-center justify-between">
            <span>Web Speech-to-Text Recognition</span>
            <span className={`font-bold ${settings.hasSpeechRecognition ? 'text-emerald-600' : 'text-slate-400'}`}>
              {settings.hasSpeechRecognition ? 'Supported' : 'Unavailable in this browser'}
            </span>
          </div>

          <div className="p-3 rounded-lg border border-slate-200 flex items-center justify-between">
            <span>SpeechSynthesis Question Reader</span>
            <span className={`font-bold ${settings.hasSpeechSynthesis ? 'text-emerald-600' : 'text-slate-400'}`}>
              {settings.hasSpeechSynthesis ? 'Supported' : 'Unavailable in this browser'}
            </span>
          </div>
        </div>
      </div>

      {/* Data Management & Privacy Controls */}
      <div className="p-6 rounded-2xl bg-white border border-rose-200/80 shadow-xs space-y-4">
        <div className="space-y-1">
          <h2 className="text-base font-bold text-rose-900 flex items-center gap-2">
            <Trash2 className="w-4 h-4 text-rose-600" />
            <span>Reset Local Storage & Data Privacy</span>
          </h2>
          <p className="text-xs text-slate-500">
            Clears all locally saved interviews, answers, extracted documents, and intelligence reports.
          </p>
        </div>

        <button
          type="button"
          onClick={handleResetData}
          disabled={resetting}
          className="px-4 py-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-300 font-semibold text-xs transition"
        >
          {resetting ? 'Clearing Storage...' : 'Reset All Local Session Data'}
        </button>
      </div>

    </div>
  );
}
