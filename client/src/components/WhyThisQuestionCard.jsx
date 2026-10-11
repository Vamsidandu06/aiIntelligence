import React, { useState } from 'react';
import { Sparkles, ChevronDown, ChevronUp, ShieldCheck, Target, Zap } from 'lucide-react';

export function WhyThisQuestionCard({ whyText, competencyName, difficulty, rubricCriteria, defaultExpanded = true }) {
  const [expanded, setExpanded] = useState(defaultExpanded);

  if (!whyText) return null;

  return (
    <div className="bg-gradient-to-r from-blue-50/70 via-indigo-50/40 to-slate-50 border border-blue-200/80 rounded-xl p-4 shadow-sm transition-all duration-200">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-blue-600/10 text-blue-600 flex items-center justify-center font-bold">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900 flex items-center gap-2">
              Why This Question?
              <span className="text-[10px] uppercase tracking-wider font-bold bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                Adaptive Intelligence
              </span>
            </h4>
            <p className="text-xs text-slate-500">Every answer dynamically shapes the next question</p>
          </div>
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="text-slate-400 hover:text-slate-600 p-1 rounded-md transition"
          aria-label="Toggle explanation details"
        >
          {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>

      {expanded && (
        <div className="mt-3 pt-3 border-t border-blue-100 text-sm text-slate-700 space-y-2">
          <p className="leading-relaxed font-medium text-slate-800">
            {whyText}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-1 text-xs">
            <div className="inline-flex items-center gap-1.5 text-slate-600 bg-white px-2.5 py-1 rounded-md border border-slate-200">
              <Target className="w-3.5 h-3.5 text-blue-600" />
              <span>Target: <strong>{competencyName}</strong></span>
            </div>

            <div className="inline-flex items-center gap-1.5 text-slate-600 bg-white px-2.5 py-1 rounded-md border border-slate-200">
              <Zap className="w-3.5 h-3.5 text-amber-500" />
              <span>Difficulty: <strong className="capitalize">{difficulty}</strong></span>
            </div>
          </div>

          {rubricCriteria && (
            <div className="mt-2 bg-white/80 p-2.5 rounded-lg border border-slate-200/80 text-xs text-slate-600">
              <span className="font-semibold text-slate-700 block mb-1">Evaluation Rubric Focus:</span>
              <p className="whitespace-pre-line text-slate-600">{rubricCriteria}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
