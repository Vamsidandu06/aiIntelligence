import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Briefcase, 
  CheckCircle2, 
  AlertCircle, 
  TrendingUp, 
  Award, 
  HelpCircle, 
  FileText, 
  ShieldCheck, 
  ArrowRight, 
  Share2, 
  Printer, 
  Sparkles,
  Layers,
  Target,
  UserCheck,
  Save,
  Check,
  SlidersHorizontal,
  ChevronRight
} from 'lucide-react';
import { api } from '../api/client.js';
import { useInterview } from '../context/InterviewContext.jsx';
import { StatusBadge } from '../components/StatusBadge.jsx';
import { SkillGapMatrix } from '../components/SkillGapMatrix.jsx';
import { TemporalRiskGauge } from '../components/TemporalRiskGauge.jsx';
import { Skeleton } from '../components/Skeleton.jsx';

export function CandidateDecisionPage() {
  const [searchParams] = useSearchParams();
  const interviewId = searchParams.get('id');

  const [report, setReport] = useState(null);
  const [integrityEvents, setIntegrityEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  // Recruiter Decision Form State
  const [recommendationCategory, setRecommendationCategory] = useState('Strong evidence of role-relevant competencies');
  const [recruiterDecision, setRecruiterDecision] = useState('ADVANCE_TO_PANEL');
  const [recruiterNotes, setRecruiterNotes] = useState('');
  const [isOverride, setIsOverride] = useState(false);
  const [overrideRationale, setOverrideRationale] = useState('');
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!interviewId) return;
    const fetchAll = async () => {
      try {
        setLoading(true);
        const [repRes, intRes, decRes] = await Promise.all([
          api.getReport(interviewId),
          api.getIntegrityEvents(interviewId),
          api.getDecision(interviewId).catch(() => ({ decision: null }))
        ]);
        setReport(repRes.report);
        setIntegrityEvents(intRes.events || []);

        if (decRes && decRes.decision) {
          setRecommendationCategory(decRes.decision.recommendationCategory || 'Strong evidence of role-relevant competencies');
          setRecruiterDecision(decRes.decision.recruiterDecision || 'ADVANCE_TO_PANEL');
          setRecruiterNotes(decRes.decision.notes || '');
          setIsOverride(Boolean(decRes.decision.isOverride));
          setOverrideRationale(decRes.decision.overrideRationale || '');
        }
      } catch (err) {
        console.error('Error fetching decision data:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchAll();
  }, [interviewId]);

  const handleSaveDecision = async () => {
    if (!interviewId) return;
    setSaving(true);
    try {
      await api.recordDecision(interviewId, {
        recommendationCategory,
        recruiterDecision,
        notes: recruiterNotes,
        isOverride,
        overrideRationale
      });
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 4000);
    } catch (err) {
      alert('Failed to record decision: ' + err.message);
    } finally {
      setSaving(false);
    }
  };

  if (loading && !report) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-12 space-y-6">
        <Skeleton className="h-10 w-1/3" />
        <Skeleton className="h-64 w-full" />
      </div>
    );
  }

  if (!report) {
    return (
      <div className="max-w-md mx-auto my-20 p-8 bg-white rounded-2xl border border-slate-200 text-center space-y-4 shadow-sm">
        <AlertCircle className="w-10 h-10 text-amber-500 mx-auto" />
        <h2 className="text-lg font-bold text-slate-900">No Intelligence Dossier Available</h2>
        <p className="text-xs text-slate-500">Please choose an interview session or run a demo scenario to generate decision intelligence.</p>
        <Link to="/setup" className="inline-block px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition">
          Launch Demonstration Session
        </Link>
      </div>
    );
  }

  // Calculate Role Alignment Index
  const totalComps = report.competencies?.length || 1;
  const demonstrated = report.competencies?.filter(c => c.status === 'Demonstrated').length || 0;
  const partial = report.competencies?.filter(c => c.status === 'Partially demonstrated').length || 0;
  const alignmentIndex = Math.min(100, Math.round(((demonstrated * 1.0 + partial * 0.5) / totalComps) * 100));

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-slate-500">
        <Link to="/" className="hover:text-slate-800">Home</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link to="/admin" className="hover:text-slate-800">Recruiter Dashboard</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-slate-900 font-medium">Candidate Decision Intelligence</span>
      </nav>

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-100">
              Module 05: Decision Support
            </span>
            <span className="text-xs text-slate-400">• Evidence-Driven Synthesis</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
            {report.candidateName} — Candidate Intelligence Dossier
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Target Job Role: <strong className="text-slate-700">{report.targetRole}</strong>
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to={`/report?id=${interviewId}`}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 shadow-xs"
          >
            <FileText className="w-3.5 h-3.5 text-slate-500" />
            <span>Full Printable Report</span>
          </Link>
          <Link
            to={`/compare`}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-600 text-xs font-semibold text-white hover:bg-blue-700 shadow-xs"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Compare Candidates</span>
          </Link>
        </div>
      </div>

      {/* High-Level Role Alignment Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white shadow-md space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center font-bold text-lg text-blue-300">
              {report.candidateName?.slice(0, 2).toUpperCase()}
            </div>
            <div>
              <span className="text-sm font-bold text-white block">{report.candidateName}</span>
              <span className="text-xs text-slate-300">{report.targetRole}</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="text-right">
              <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-semibold">Evidence Match Index</span>
              <span className="text-2xl font-extrabold text-emerald-400">{alignmentIndex}%</span>
            </div>
            <div className="text-right">
              <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-semibold">Demonstrated Skills</span>
              <span className="text-2xl font-extrabold text-blue-300">{demonstrated} / {totalComps}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-xs">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
            <span className="text-slate-400 font-semibold block">Demonstrated Strengths</span>
            <span className="text-lg font-bold text-emerald-400">{report.strengths?.length || 0} Core Competencies</span>
            <p className="text-[11px] text-slate-300">Verified through rigorous algorithmic/architectural answers.</p>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
            <span className="text-slate-400 font-semibold block">Identified Knowledge Gaps</span>
            <span className="text-lg font-bold text-amber-400">{report.gaps?.length || 0} Targeted Areas</span>
            <p className="text-[11px] text-slate-300">Specific missing concepts surfaced during probing.</p>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
            <span className="text-slate-400 font-semibold block">Session Integrity Signal</span>
            <span className="text-lg font-bold text-cyan-300">
              {integrityEvents.length === 0 ? 'No Notable Events' : `${integrityEvents.length} Events Reviewed`}
            </span>
            <p className="text-[11px] text-slate-300">Operational review signal — never automatically determines rejection.</p>
          </div>
        </div>
      </div>

      {/* Recruiter Decision Recording Panel */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
              <UserCheck className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">Recruiter Decision & Recommendation Framework</h3>
              <p className="text-xs text-slate-500">The platform assists recruiters with evidence; recruiters retain full decision autonomy and overrides.</p>
            </div>
          </div>
          {saveSuccess && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold animate-pulse">
              <Check className="w-3.5 h-3.5" /> Decision Saved
            </span>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Recommendation Framework (Section 9) */}
          <div className="space-y-3">
            <label className="text-xs font-bold text-slate-800 block uppercase tracking-wider">
              AI Decision Support Category
            </label>
            <div className="space-y-2">
              {[
                { id: 'Strong evidence of role-relevant competencies', desc: 'Sufficient evidence collected across core role competencies with high rubric scores.' },
                { id: 'Additional validation recommended', desc: 'Competency evidence is partial or key resume claims remain unvalidated.' },
                { id: 'Insufficient evidence for a meaningful assessment', desc: 'Too few questions answered or answers lacked technical depth.' }
              ].map(cat => (
                <label
                  key={cat.id}
                  onClick={() => setRecommendationCategory(cat.id)}
                  className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition text-xs ${
                    recommendationCategory === cat.id
                      ? 'border-blue-500 bg-blue-50/60 text-blue-950 font-medium shadow-2xs'
                      : 'border-slate-200 bg-slate-50/50 hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <input
                    type="radio"
                    name="rec_category"
                    checked={recommendationCategory === cat.id}
                    onChange={() => setRecommendationCategory(cat.id)}
                    className="mt-0.5 text-blue-600 focus:ring-blue-500"
                  />
                  <div>
                    <span className="font-semibold block">{cat.id}</span>
                    <span className="text-[11px] text-slate-500">{cat.desc}</span>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Official Recruiter Decision */}
          <div className="space-y-3">
            <label className="text-xs font-bold text-slate-800 block uppercase tracking-wider">
              Recruiter Action & Next Step
            </label>
            <div className="grid grid-cols-2 gap-2.5">
              {[
                { id: 'HIRE', label: 'Hire Candidate', color: 'border-emerald-300 hover:border-emerald-500 text-emerald-800 bg-emerald-50/50' },
                { id: 'ADVANCE_TO_PANEL', label: 'Advance to Panel', color: 'border-blue-300 hover:border-blue-500 text-blue-800 bg-blue-50/50' },
                { id: 'ADDITIONAL_PROBE', label: 'Schedule Follow-Up Probe', color: 'border-amber-300 hover:border-amber-500 text-amber-800 bg-amber-50/50' },
                { id: 'REJECT', label: 'Do Not Advance', color: 'border-rose-300 hover:border-rose-500 text-rose-800 bg-rose-50/50' }
              ].map(action => (
                <button
                  key={action.id}
                  type="button"
                  onClick={() => setRecruiterDecision(action.id)}
                  className={`p-3 rounded-xl border text-left text-xs font-bold transition flex flex-col justify-between h-20 ${
                    recruiterDecision === action.id
                      ? 'ring-2 ring-blue-600 border-transparent shadow-xs bg-white text-slate-900'
                      : `${action.color} border`
                  }`}
                >
                  <span>{action.label}</span>
                  <span className="text-[10px] font-mono text-slate-500">[{action.id}]</span>
                </button>
              ))}
            </div>

            {/* Human Override Toggle */}
            <div className="pt-2">
              <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-slate-700">
                <input
                  type="checkbox"
                  checked={isOverride}
                  onChange={(e) => setIsOverride(e.target.checked)}
                  className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                />
                <span>Override AI Evidence Recommendation</span>
              </label>

              {isOverride && (
                <div className="mt-2.5">
                  <input
                    type="text"
                    value={overrideRationale}
                    onChange={(e) => setOverrideRationale(e.target.value)}
                    placeholder="Document mandatory reason for overriding AI recommendation..."
                    className="w-full text-xs p-2.5 rounded-lg border border-amber-300 bg-amber-50/50 text-slate-800 focus:outline-hidden focus:ring-1 focus:ring-amber-500"
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Recruiter Qualitative Notes */}
        <div className="space-y-2 pt-2 border-t border-slate-100">
          <label className="text-xs font-bold text-slate-800 block">
            Recruiter Qualitative Notes & Panel Context
          </label>
          <textarea
            rows={3}
            value={recruiterNotes}
            onChange={(e) => setRecruiterNotes(e.target.value)}
            placeholder="Add specific observations regarding candidate technical depth, communication clarity, or areas for panel deep-dive..."
            className="w-full text-xs p-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-500 transition text-slate-800"
          />
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleSaveDecision}
            disabled={saving}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white hover:bg-slate-800 font-semibold text-xs shadow-xs transition cursor-pointer disabled:opacity-50"
          >
            <Save className="w-3.5 h-3.5" />
            <span>{saving ? 'Saving...' : 'Record Official Decision'}</span>
          </button>
        </div>
      </div>

      {/* Module 04: Skill Gap Matrix */}
      <SkillGapMatrix 
        competencies={report.competencies || []} 
        resumeClaims={report.resumeClaimsVerification || []} 
      />

      {/* Module 03: Temporal Risk Profile */}
      <TemporalRiskGauge events={integrityEvents} />

      {/* Traceable Question-by-Question Audit Trail */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
        <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
          <Layers className="w-4 h-4 text-blue-600" />
          <span>Evidence Traceability Audit Trail</span>
        </h3>
        <p className="text-xs text-slate-500">
          Every rating is linked to the exact question asked, the candidate's verbatim answer, and rubric checklist.
        </p>

        <div className="space-y-4 pt-2">
          {(report.assessmentRecords || []).map((rec, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-800">
                  Q{idx + 1}: {rec.questionPrompt?.slice(0, 80)}...
                </span>
                <StatusBadge status={rec.evaluation?.status} />
              </div>

              {rec.candidateAnswer && (
                <p className="font-mono text-slate-700 bg-white p-2.5 rounded border border-slate-200 line-clamp-2">
                  "{rec.candidateAnswer}"
                </p>
              )}

              {rec.evaluation?.assessmentExplanation && (
                <p className="text-slate-600 italic">
                  <strong>Assessment:</strong> {rec.evaluation.assessmentExplanation}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
