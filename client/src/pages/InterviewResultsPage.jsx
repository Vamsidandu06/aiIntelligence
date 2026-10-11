import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Award, 
  CheckCircle2, 
  ChevronRight, 
  FileText, 
  Layers, 
  BarChart3, 
  Clock, 
  ShieldCheck, 
  Sliders, 
  ArrowRight,
  TrendingUp,
  AlertCircle
} from 'lucide-react';
import { api } from '../api/client.js';
import { StatusBadge } from '../components/StatusBadge.jsx';
import { Skeleton } from '../components/Skeleton.jsx';

export function InterviewResultsPage() {
  const [searchParams] = useSearchParams();
  const interviewId = searchParams.get('id');

  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!interviewId) return;
    const fetchReport = async () => {
      try {
        setLoading(true);
        const res = await api.getReport(interviewId);
        setReport(res.report);
      } catch (err) {
        console.error('Error fetching interview results:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchReport();
  }, [interviewId]);

  if (loading && !report) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-12 space-y-6">
        <Skeleton className="h-10 w-1/3" />
        <Skeleton className="h-64 w-full" />
      </div>
    );
  }

  if (!report) {
    return (
      <div className="max-w-md mx-auto my-20 p-8 bg-white rounded-2xl border border-slate-200 text-center space-y-4">
        <AlertCircle className="w-10 h-10 text-amber-500 mx-auto" />
        <h2 className="text-lg font-bold text-slate-900">Session Results Unavailable</h2>
        <p className="text-xs text-slate-500">Please choose or complete an interview session first.</p>
        <Link to="/setup" className="inline-block px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold">
          Go to Interview Setup
        </Link>
      </div>
    );
  }

  const demonstratedCount = (report.competencies || []).filter(c => c.status === 'Demonstrated').length;
  const totalCount = (report.competencies || []).length || 1;
  const scorePct = Math.round((demonstratedCount / totalCount) * 100);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-8">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs text-slate-500">
        <Link to="/" className="hover:text-slate-800">Home</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link to="/admin" className="hover:text-slate-800">Recruiter Dashboard</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-slate-900 font-medium">Session Results</span>
      </nav>

      {/* Header Banner */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-100 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Session Concluded
            </span>
            <span className="text-xs text-slate-400">• Evidence Collected</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
            {report.candidateName} — Interview Debrief
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Role: <strong>{report.targetRole}</strong> • Total Questions Evaluated: <strong>{report.assessmentRecords?.length || 0}</strong>
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to={`/decision?id=${interviewId}`}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 shadow-xs transition"
          >
            <span>Recruiter Decision Dossier</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            to={`/report?id=${interviewId}`}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-xs font-semibold hover:bg-slate-50 transition"
          >
            <FileText className="w-3.5 h-3.5 text-slate-500" />
            <span>Printable Dossier</span>
          </Link>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-1">
          <span className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider block">Qualifier Score</span>
          <span className="text-2xl font-extrabold text-slate-900">{demonstratedCount}/{totalCount}</span>
          <p className="text-[11px] text-emerald-600 font-medium">Demonstrated Skills</p>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-1">
          <span className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider block">Coverage Match</span>
          <span className="text-2xl font-extrabold text-blue-600">{scorePct}%</span>
          <p className="text-[11px] text-slate-500">Rubric Alignment</p>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-1">
          <span className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider block">Active Integrity</span>
          <span className="text-2xl font-extrabold text-slate-900">Normal</span>
          <p className="text-[11px] text-slate-500">{report.integritySummary?.totalEvents || 0} Events Audited</p>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-1">
          <span className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider block">Next Recommended Step</span>
          <span className="text-sm font-bold text-emerald-700 block mt-1">Review Dossier</span>
          <p className="text-[11px] text-slate-500">Human panel decision</p>
        </div>
      </div>

      {/* Evaluated Questions Feed */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4 text-xs">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2">
            <Layers className="w-4 h-4 text-blue-600" />
            <span>Adaptive Question Trajectory & Answer Evidence</span>
          </h2>
          <span className="text-[11px] text-slate-500">{report.assessmentRecords?.length || 0} Questions Answered</span>
        </div>

        <div className="space-y-4">
          {(report.assessmentRecords || []).map((rec, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-md bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-[11px]">
                    Q{idx + 1}
                  </span>
                  <span className="font-bold text-slate-900">{rec.competencyName}</span>
                  <span className="capitalize text-slate-400">• {rec.difficulty} Difficulty</span>
                </div>
                <StatusBadge status={rec.evaluation?.status} />
              </div>

              <p className="text-slate-800 font-medium bg-white p-3 rounded-lg border border-slate-200">
                {rec.questionPrompt}
              </p>

              {rec.whyThisQuestion && (
                <div className="p-2.5 rounded-lg bg-blue-50/60 border border-blue-100 text-[11px] text-blue-900">
                  <strong>Adaptive Selection Rationale:</strong> {rec.whyThisQuestion}
                </div>
              )}

              {rec.candidateAnswer && (
                <div className="space-y-1">
                  <span className="text-[11px] font-semibold text-slate-500 block uppercase tracking-wider">Candidate Response:</span>
                  <p className="p-2.5 rounded-lg bg-white border border-slate-200 font-mono text-[11px] text-slate-700 line-clamp-3">
                    "{rec.candidateAnswer}"
                  </p>
                </div>
              )}

              {rec.evaluation?.assessmentExplanation && (
                <div className="text-[11px] text-slate-600 italic">
                  <strong>Evaluation:</strong> {rec.evaluation.assessmentExplanation}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
