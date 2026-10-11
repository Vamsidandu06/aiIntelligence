import React from 'react';
import { Sparkles, Shield, Cpu, ExternalLink } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 text-xs border-t border-slate-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-blue-600 flex items-center justify-center text-white">
              <Sparkles className="w-3.5 h-3.5" />
            </div>
            <span className="text-white font-bold tracking-tight">InterviewIQ AI</span>
            <span className="text-slate-500">|</span>
            <span>Google Student Club Hackathon 2026</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-blue-400" />
              <span>Adaptive Question Engine</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
              <span>Evidence-Based & Non-Punitive</span>
            </span>
          </div>

          <div className="text-slate-500">
            Tagline: "Every Answer Shapes the Next Question."
          </div>
        </div>
      </div>
    </footer>
  );
}
