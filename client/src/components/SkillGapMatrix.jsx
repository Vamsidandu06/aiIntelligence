import React, { useState } from 'react';
import { FileCheck, Search, Filter, CheckCircle2, AlertCircle, HelpCircle, XCircle } from 'lucide-react';
import { StatusBadge } from './StatusBadge.jsx';

export function SkillGapMatrix({ competencies = [], resumeClaims = [] }) {
  const [filterStatus, setFilterStatus] = useState('ALL');

  const filteredCompetencies = filterStatus === 'ALL'
    ? competencies
    : competencies.filter(c => c.status === filterStatus);

  return (
    <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
        <div>
          <span className="text-[10px] uppercase font-bold tracking-wider text-blue-600">
            Hackathon Module 04 Architecture
          </span>
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <FileCheck className="w-4 h-4 text-indigo-600" />
            <span>Resume-to-Interview Skill Gap Intelligence Matrix</span>
          </h3>
          <p className="text-xs text-slate-500">
            Comparing Job Requirements &rarr; Candidate Claims &rarr; Live Interview Evidence.
          </p>
        </div>

        {/* Status Filter Buttons */}
        <div className="flex flex-wrap items-center gap-1.5 text-xs">
          {['ALL', 'Demonstrated', 'Partially demonstrated', 'Claimed but unvalidated', 'Not assessed'].map(s => (
            <button
              key={s}
              onClick={() => setFilterStatus(s)}
              className={`px-2.5 py-1 rounded-lg font-medium transition text-[11px] ${
                filterStatus === s 
                  ? 'bg-blue-600 text-white font-bold shadow-xs' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Structured Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-50 text-slate-600 uppercase font-semibold border-b border-slate-200 text-[10px] tracking-wider">
            <tr>
              <th className="py-2.5 px-3">Job Requirement</th>
              <th className="py-2.5 px-3">Resume Claim</th>
              <th className="py-2.5 px-3">Interview Evidence</th>
              <th className="py-2.5 px-3">Skill Gap Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filteredCompetencies.map((comp, idx) => {
              const matchedClaim = resumeClaims.find(
                rc => rc.targetCompetency?.toLowerCase() === comp.name.toLowerCase()
              );
              const history = comp.evidenceHistory || [];
              const latestExcerpt = history[0]?.supportingExcerpts?.[0] || matchedClaim?.verifiedWithQuote;

              return (
                <tr key={comp.id || idx} className="hover:bg-slate-50/80 transition">
                  <td className="py-3 px-3 align-top font-semibold text-slate-900">
                    <div>{comp.name}</div>
                    <span className="text-[10px] text-slate-500 block capitalize font-normal">
                      Priority: {comp.importance || 'medium'} • {comp.category}
                    </span>
                  </td>

                  <td className="py-3 px-3 align-top text-slate-700">
                    {matchedClaim ? (
                      <span className="line-clamp-2 italic">"{matchedClaim.claim}"</span>
                    ) : (
                      <span className="text-slate-400 italic">No explicit bullet point on resume</span>
                    )}
                  </td>

                  <td className="py-3 px-3 align-top">
                    {latestExcerpt ? (
                      <div className="p-2 rounded bg-slate-50 border border-slate-200 text-[11px] font-mono text-slate-800 line-clamp-2">
                        "{latestExcerpt}"
                      </div>
                    ) : (
                      <span className="text-slate-400 text-[11px] italic">Awaiting question verification</span>
                    )}
                  </td>

                  <td className="py-3 px-3 align-top whitespace-nowrap">
                    <StatusBadge status={comp.status} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
