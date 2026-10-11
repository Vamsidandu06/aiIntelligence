import React from 'react';
import { ShieldCheck, ShieldAlert, AlertTriangle, Clock, CheckCircle2, Info } from 'lucide-react';

export function TemporalRiskGauge({ events = [] }) {
  const tabSwitches = events.filter(e => e.type === 'tab_hidden').length;
  const blurCount = events.filter(e => e.type === 'window_blur').length;
  const disclosed = events.filter(e => e.type === 'external_assistance_disclosed').length;

  // Temporal clustering logic:
  // Are events grouped tightly in time or scattered?
  let clusterWarning = false;
  if (events.length >= 3) {
    const times = events.map(e => new Date(e.serverTimestamp || e.clientTimestamp).getTime()).sort();
    for (let i = 0; i < times.length - 2; i++) {
      if (times[i + 2] - times[i] < 60000) { // 3 events in under 60 seconds
        clusterWarning = true;
        break;
      }
    }
  }

  // Calculate explainable risk score (0 - 100)
  let riskScore = Math.min(100, (tabSwitches * 15) + (blurCount * 5));
  if (disclosed > 0) {
    // Transparent candidate disclosure mitigates suspicion
    riskScore = Math.max(0, riskScore - 15);
  }

  const severity = riskScore > 50 
    ? { label: 'Elevated Audit Attention', color: 'text-amber-700 bg-amber-50 border-amber-300', icon: AlertTriangle }
    : riskScore > 20 
    ? { label: 'Moderate Observational Signals', color: 'text-blue-700 bg-blue-50 border-blue-200', icon: Info }
    : { label: 'Low Risk — Normal Session Flow', color: 'text-emerald-700 bg-emerald-50 border-emerald-200', icon: CheckCircle2 };

  const SeverityIcon = severity.icon;

  return (
    <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
        <div>
          <span className="text-[10px] uppercase font-bold tracking-wider text-blue-600">
            Hackathon Module 03 Architecture
          </span>
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Temporal Aggregation & Explainable Risk Profile</span>
          </h3>
        </div>

        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${severity.color}`}>
          <SeverityIcon className="w-3.5 h-3.5" />
          <span>{severity.label}</span>
        </span>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
        <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
          <span className="text-slate-500 block text-[11px]">Aggregated Events</span>
          <span className="text-xl font-extrabold text-slate-900">{events.length}</span>
        </div>

        <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
          <span className="text-slate-500 block text-[11px]">Tab Visibility Lost</span>
          <span className="text-xl font-extrabold text-amber-600">{tabSwitches}</span>
        </div>

        <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
          <span className="text-slate-500 block text-[11px]">Candidate Disclosures</span>
          <span className="text-xl font-extrabold text-emerald-600">{disclosed}</span>
        </div>

        <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
          <span className="text-slate-500 block text-[11px]">Temporal Clustering</span>
          <span className="text-xs font-bold text-slate-700 mt-1 block">
            {clusterWarning ? '⚠️ Clustered bursts' : '✓ Normal distribution'}
          </span>
        </div>
      </div>

      {/* Explainability Callout */}
      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1">
        <span className="font-bold text-slate-800 block">Explainable Risk Rationale:</span>
        <p className="leading-relaxed">
          {tabSwitches === 0 && blurCount === 0
            ? 'Continuous active window focus maintained throughout all technical questions. Zero anomaly signals observed.'
            : `${tabSwitches} tab visibility changes recorded. ${
                disclosed > 0 
                  ? 'Candidate proactively declared documentation references, mitigating suspicion.' 
                  : 'Isolated window focus shifts recorded. Objective telemetry presented for human reviewer discretion.'
              }`}
        </p>
      </div>

      {/* Ethical Guardrail Notice */}
      <div className="text-[11px] text-slate-400 italic flex items-center gap-1.5">
        <Info className="w-3.5 h-3.5 text-blue-500 shrink-0" />
        <span>Ethical AI Standard: Strictly observational. No biometric or facial recognition proxies used.</span>
      </div>
    </div>
  );
}
