import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Printer, 
  Download, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  HelpCircle, 
  ExternalLink, 
  Layers, 
  BookOpen, 
  ShieldCheck, 
  Quote, 
  Share2,
  TrendingUp,
  Cpu,
  BarChart3
} from 'lucide-react';
import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  ResponsiveContainer 
} from 'recharts';
import { api } from '../api/client.js';
import { StatusBadge } from '../components/StatusBadge.jsx';
import { Skeleton } from '../components/Skeleton.jsx';

export function FinalReportPage() {
  const [searchParams] = useSearchParams();
  const interviewId = searchParams.get('id');

  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchReport = async () => {
    if (!interviewId) return;
    try {
      setLoading(true);
      const res = await api.getReport(interviewId);
      setReport(res.report);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReport();
  }, [interviewId]);

  const handlePrint = () => {
    window.print();
  };

  if (loading && !report) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-12 space-y-6">
        <Skeleton className="h-12 w-1/3" />
        <Skeleton className="h-64 w-full" />
        <Skeleton className="h-32 w-full" />
      </div>
    );
  }

  if (!report) {
    return (
      <div className="max-w-md mx-auto my-20 p-8 bg-white rounded-2xl border border-slate-200 text-center space-y-4">
        <AlertCircle className="w-10 h-10 text-amber-500 mx-auto" />
        <h2 className="text-lg font-bold text-slate-900">Report Not Found</h2>
        <p className="text-xs text-slate-500">Please choose an interview session or complete one to generate the dossier.</p>
        <Link to="/dashboard" className="inline-block px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold">
          Return to Dashboard
        </Link>
      </div>
    );
  }

  // Radar chart data
  const chartData = (report.competencies || []).map(c => ({
    subject: c.name.length > 20 ? c.name.slice(0, 18) + '...' : c.name,
    score: c.lastScore || (c.status === 'Demonstrated' ? 90 : c.status === 'Partially demonstrated' ? 55 : 0),
    fullMark: 100
  }));

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 print-page">
      
      {/* Action Bar (hidden when printing) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 no-print">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
            Executive Intelligence Dossier
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Candidate Evaluation Report
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-xs transition"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print / Save to PDF</span>
          </button>

          <Link
            to={`/interview?id=${interviewId}`}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold transition"
          >
            <span>Back to Room</span>
          </Link>
        </div>
      </div>

      {/* Report Header Card */}
      <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>InterviewIQ AI Evaluation Dossier</span>
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900">
              {report.candidateName}
            </h2>
            <p className="text-sm font-semibold text-slate-600 mt-1">
              Evaluated for: <span className="text-blue-700 font-bold">{report.targetRole}</span>
            </p>
          </div>

          <div className="text-right text-xs text-slate-500 space-y-1">
            <div>Generated: <strong>{new Date(report.generatedAt).toLocaleString()}</strong></div>
            <div>Evaluation Duration: <strong>{report.durationMinutes} Minutes</strong></div>
            <div>Verified Questions: <strong>{report.assessmentRecords?.length || 0} Questions</strong></div>
          </div>
        </div>

        {/* Responsible AI Notice */}
        <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200/80 text-blue-900 text-xs leading-relaxed">
          <strong>Decision Support Notice:</strong> {report.disclaimer}
        </div>
      </div>

      {/* Competency Radar & Strengths / Gaps Summary */}
      <div className="grid md:grid-cols-2 gap-6">
        
        {/* Radar Topology */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
          <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-blue-600" />
            <span>Demonstrated Competency Topology</span>
          </h3>
          <p className="text-xs text-slate-500">
            Multi-axis competency profile grounded in observed interview evidence.
          </p>

          <div className="h-64 w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="75%" data={chartData}>
                <PolarGrid stroke="#e2e8f0" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#475569', fontSize: 10 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#cbd5e1" />
                <Radar name="Candidate" dataKey="score" stroke="#2563EB" fill="#3B82F6" fillOpacity={0.4} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Strengths & Gaps Cards */}
        <div className="space-y-4">
          
          {/* Demonstrated Strengths */}
          <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-2">
            <h4 className="text-xs font-bold text-emerald-900 uppercase tracking-wider flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Demonstrated Strengths ({report.strengths?.length || 0})</span>
            </h4>
            {report.strengths?.length === 0 ? (
              <p className="text-xs text-emerald-700 italic">No fully demonstrated strengths recorded yet.</p>
            ) : (
              <ul className="text-xs text-emerald-800 space-y-2 pt-1">
                {report.strengths.map((s, idx) => (
                  <li key={idx} className="p-2 bg-white/70 rounded-lg border border-emerald-200">
                    <div className="font-bold text-emerald-900">{s.competency}</div>
                    <div className="text-[11px] text-emerald-700 line-clamp-2 mt-0.5 font-mono">
                      "{s.evidenceExcerpt}"
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Identified Knowledge Gaps */}
          <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-2">
            <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wider flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4 text-amber-600" />
              <span>Targeted Knowledge Gaps ({report.gaps?.length || 0})</span>
            </h4>
            {report.gaps?.length === 0 ? (
              <p className="text-xs text-amber-700 italic">No critical knowledge gaps observed.</p>
            ) : (
              <ul className="text-xs text-amber-800 space-y-2 pt-1">
                {report.gaps.map((g, idx) => (
                  <li key={idx} className="p-2 bg-white/70 rounded-lg border border-amber-200">
                    <div className="font-bold text-amber-900">{g.competency}</div>
                    <div className="text-[11px] text-amber-700 mt-0.5">
                      Gaps: {(g.unresolvedGaps || []).join(', ')}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

        </div>

      </div>

      {/* Traceable Question-by-Question Assessment Trail */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Layers className="w-4 h-4 text-blue-600" />
            <span>Evidence Audit Trail: Question, Answer & Rubric Traceability</span>
          </h3>
          <span className="text-xs text-slate-500">Full auditability</span>
        </div>

        <div className="space-y-4">
          {(report.assessmentRecords || []).map((rec, idx) => {
            const evalData = rec.evaluation;

            return (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-navy-900 text-white font-mono text-xs font-bold">
                      Q{idx + 1}
                    </span>
                    <span className="text-xs font-bold text-slate-800">
                      Target: {rec.competencyName}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {evalData?.status && <StatusBadge status={evalData.status} />}
                    {evalData?.score !== null && evalData?.score !== undefined && (
                      <span className="font-mono font-bold text-xs bg-slate-100 px-2 py-0.5 rounded text-slate-800">
                        {evalData.score}/100
                      </span>
                    )}
                  </div>
                </div>

                <div className="text-sm font-semibold text-slate-900">
                  "{rec.questionPrompt}"
                </div>

                {rec.whyThisQuestion && (
                  <div className="text-xs text-blue-800 bg-blue-50/70 p-2.5 rounded-lg border border-blue-200">
                    <strong>Selection Rationale:</strong> {rec.whyThisQuestion}
                  </div>
                )}

                {rec.candidateAnswer && (
                  <div className="text-xs text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-200 font-mono whitespace-pre-wrap">
                    <span className="text-slate-400 font-bold block mb-1">Candidate's Submitted Answer:</span>
                    "{rec.candidateAnswer}"
                  </div>
                )}

                {evalData && (
                  <div className="grid sm:grid-cols-2 gap-3 text-xs pt-1">
                    {evalData.correctConcepts?.length > 0 && (
                      <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200">
                        <span className="font-bold text-emerald-800 block mb-0.5">Correct Concepts:</span>
                        <ul className="list-disc list-inside text-emerald-700">
                          {evalData.correctConcepts.map((c, i) => <li key={i}>{c}</li>)}
                        </ul>
                      </div>
                    )}

                    {evalData.missingConcepts?.length > 0 && (
                      <div className="p-2.5 rounded-lg bg-amber-50 border border-amber-200">
                        <span className="font-bold text-amber-800 block mb-0.5">Missing Concepts:</span>
                        <ul className="list-disc list-inside text-amber-700">
                          {evalData.missingConcepts.map((c, i) => <li key={i}>{c}</li>)}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Unassessed Competencies & Learning Resources */}
      <div className="grid md:grid-cols-2 gap-6">
        
        {/* Unassessed Competencies */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
          <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-slate-500" />
            <span>Unassessed Competencies</span>
          </h3>
          <p className="text-xs text-slate-500">
            Skills that were not reached before the question quota was completed.
          </p>

          <div className="space-y-2 pt-1 text-xs">
            {(report.unassessedCompetencies || []).length === 0 ? (
              <p className="text-slate-400 italic">All role competencies were evaluated.</p>
            ) : (
              (report.unassessedCompetencies || []).map((un, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-slate-800">{un.name}</span>
                    <span className="text-[11px] text-slate-500 block">{un.reason}</span>
                  </div>
                  <StatusBadge status="Not assessed" />
                </div>
              ))
            )}
          </div>
        </div>

        {/* Recommended Learning Resources */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
          <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-indigo-600" />
            <span>Recommended Learning Resources</span>
          </h3>
          <p className="text-xs text-slate-500">
            Targeted technical literature to resolve identified knowledge gaps.
          </p>

          <div className="space-y-2 pt-1 text-xs">
            {(report.learningResources || []).map((res, idx) => (
              <a
                key={idx}
                href={res.url}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-lg bg-slate-50 hover:bg-blue-50/50 border border-slate-200 hover:border-blue-300 block transition group"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-800 group-hover:text-blue-700">{res.title}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600" />
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  Focus: {res.topic} ({res.type})
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Integrity Summary Banner */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
        <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Interview Integrity & Observation Summary</span>
        </h3>
        <p className="text-xs text-slate-600">
          {report.integritySummary?.reviewRecommendation || 'Normal session flow without anomalous interruptions.'}
        </p>
        <div className="flex items-center gap-4 text-xs text-slate-500 pt-1">
          <span>Tab switches: <strong>{report.integritySummary?.tabVisibilityChanges || 0}</strong></span>
          <span>Explicit disclosures: <strong>{report.integritySummary?.externalAssistanceDisclosed ? 'Yes' : 'None'}</strong></span>
          <Link to={`/integrity?id=${interviewId}`} className="text-blue-600 hover:underline font-semibold">
            View Chronological Timeline &rarr;
          </Link>
        </div>
      </div>

    </div>
  );
}
