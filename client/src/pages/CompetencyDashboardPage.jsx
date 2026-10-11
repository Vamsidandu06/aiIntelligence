import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  BarChart3, 
  Target, 
  CheckCircle2, 
  AlertCircle, 
  HelpCircle, 
  ArrowRight,
  TrendingUp,
  Layers,
  Sparkles
} from 'lucide-react';
import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from 'recharts';
import { useInterview } from '../context/InterviewContext.jsx';
import { StatusBadge } from '../components/StatusBadge.jsx';
import { Skeleton } from '../components/Skeleton.jsx';

export function CompetencyDashboardPage() {
  const [searchParams] = useSearchParams();
  const interviewId = searchParams.get('id');
  const { interview, competencies, answers, questions, loadInterview, loading } = useInterview();

  useEffect(() => {
    if (interviewId && (!interview || interview.id !== interviewId)) {
      loadInterview(interviewId);
    }
  }, [interviewId]);

  if (loading && !interview) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-12 space-y-6">
        <Skeleton className="h-10 w-1/3" />
        <Skeleton className="h-64 w-full" />
      </div>
    );
  }

  if (!interview) {
    return (
      <div className="max-w-md mx-auto my-20 p-8 bg-white rounded-2xl border border-slate-200 text-center space-y-4">
        <AlertCircle className="w-10 h-10 text-amber-500 mx-auto" />
        <h2 className="text-lg font-bold text-slate-900">Select an Interview Session</h2>
        <p className="text-xs text-slate-500">Go to Dashboard or launch a demo to view the live competency dashboard.</p>
        <Link to="/dashboard" className="inline-block px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold">
          Return to Dashboard
        </Link>
      </div>
    );
  }

  // Prepare chart data
  const chartData = competencies.map(c => {
    let score = c.lastScore;
    if (score === null || score === undefined) {
      if (c.status === 'Demonstrated') score = 90;
      else if (c.status === 'Partially demonstrated') score = 55;
      else score = 0;
    }
    return {
      subject: c.name.length > 22 ? c.name.slice(0, 20) + '...' : c.name,
      fullName: c.name,
      score: score,
      fullMark: 100,
      status: c.status
    };
  });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Live Competency Profile
            </span>
            <span className="text-xs text-slate-400">• Session ID: {interview.id?.slice(0, 10)}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            {interview.candidateName} — Competency Matrix
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Target Role: <strong>{interview.targetRole}</strong>
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Link
            to={`/interview?id=${interview.id}`}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs transition"
          >
            <span>Interview Room</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            to={`/report?id=${interview.id}`}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold transition"
          >
            <span>View Full Report</span>
          </Link>
        </div>
      </div>

      {/* Visualizations: Radar and Bar Breakdown */}
      <div className="grid lg:grid-cols-2 gap-6">
        
        {/* Radar Chart */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-blue-600" />
              <span>Competency Radar Topology</span>
            </h3>
            <span className="text-[11px] text-slate-500">Scale: 0 - 100</span>
          </div>
          <p className="text-xs text-slate-500">
            Visualizing verified competency depth vs role expectations.
          </p>

          <div className="h-72 w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="75%" data={chartData}>
                <PolarGrid stroke="#e2e8f0" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#475569', fontSize: 11 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#cbd5e1" />
                <Radar name="Score" dataKey="score" stroke="#2563EB" fill="#3B82F6" fillOpacity={0.4} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bar Chart Breakdown */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-indigo-600" />
              <span>Competency Score Distribution</span>
            </h3>
            <span className="text-[11px] text-slate-500">{competencies.length} Competencies</span>
          </div>
          <p className="text-xs text-slate-500">
            Unassessed skills display 0 until tested by interview questions.
          </p>

          <div className="h-72 w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 40 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="subject" angle={-30} textAnchor="end" tick={{ fill: '#64748b', fontSize: 10 }} interval={0} />
                <YAxis domain={[0, 100]} tick={{ fill: '#64748b', fontSize: 11 }} />
                <Tooltip />
                <Bar dataKey="score" fill="#2563EB" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>

      {/* Competency Cards with Detailed Evidence History */}
      <div className="space-y-4">
        <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
          <Layers className="w-4 h-4 text-blue-600" />
          <span>Competency Evidence Matrix ({competencies.length})</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {competencies.map((comp) => {
            const history = comp.evidenceHistory || [];

            return (
              <div key={comp.id} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-bold text-sm text-slate-900 leading-snug">{comp.name}</h3>
                  <StatusBadge status={comp.status} />
                </div>

                <div className="flex items-center gap-2 text-[11px] text-slate-500">
                  <span className="capitalize">{comp.category}</span>
                  <span>•</span>
                  <span>Level: <strong className="capitalize">{comp.requiredLevel || 'intermediate'}</strong></span>
                  <span>•</span>
                  <span>Priority: <strong className="capitalize">{comp.importance || 'medium'}</strong></span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {comp.description}
                </p>

                {comp.lastScore !== null && comp.lastScore !== undefined && (
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-500">Latest Verified Score:</span>
                    <span className="font-mono font-bold text-blue-600">{comp.lastScore}/100</span>
                  </div>
                )}

                {/* Evidence quotes if verified */}
                {history.length > 0 && (
                  <div className="pt-2 border-t border-slate-100 space-y-1">
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                      Supporting Answer Excerpt:
                    </span>
                    <p className="text-[11px] font-mono text-slate-700 bg-slate-50 p-2 rounded border border-slate-200 line-clamp-3">
                      "{history[0]?.supportingExcerpts?.[0] || 'Evidence verified in interview session.'}"
                    </p>
                  </div>
                )}

                {/* Unresolved Gaps if present */}
                {comp.unresolvedGaps?.length > 0 && (
                  <div className="pt-2 border-t border-amber-100 bg-amber-50/50 p-2 rounded text-[11px] text-amber-800">
                    <span className="font-bold block mb-0.5">Identified Knowledge Gap:</span>
                    <ul className="list-disc list-inside space-y-0.5">
                      {comp.unresolvedGaps.map((gap, i) => (
                        <li key={i}>{gap}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
