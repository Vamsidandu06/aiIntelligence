import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  FileText, 
  CheckCircle2, 
  HelpCircle, 
  AlertCircle, 
  Briefcase, 
  GraduationCap, 
  Code2, 
  ChevronRight,
  ArrowRight,
  Play
} from 'lucide-react';
import { api } from '../api/client.js';
import { Skeleton } from '../components/Skeleton.jsx';

export function ResumeAnalysisPage() {
  const { id } = useParams();
  const [candidate, setCandidate] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCandidate = async () => {
      try {
        setLoading(true);
        const res = await api.getCandidate(id || 'cand_david_chen');
        setCandidate(res.candidate);
      } catch (err) {
        console.error('Error fetching candidate:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchCandidate();
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-12 space-y-6">
        <Skeleton className="h-10 w-1/3" />
        <Skeleton className="h-64 w-full" />
      </div>
    );
  }

  if (!candidate) {
    return (
      <div className="max-w-md mx-auto my-20 p-8 bg-white rounded-2xl border border-slate-200 text-center space-y-4">
        <AlertCircle className="w-10 h-10 text-amber-500 mx-auto" />
        <h2 className="text-lg font-bold text-slate-900">Candidate Not Found</h2>
        <Link to="/admin" className="inline-block px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold">
          Return to Dashboard
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-8">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs text-slate-500">
        <Link to="/" className="hover:text-slate-800">Home</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link to="/admin" className="hover:text-slate-800">Recruiter Dashboard</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-slate-900 font-medium">Resume Analysis: {candidate.name}</span>
      </nav>

      {/* Header Banner */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-100">
              Module 04: Resume Claims Engine
            </span>
            <span className="text-xs text-slate-400">• Extraction & Claim Mapping</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
            {candidate.name} — Resume Claim Extraction
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Target Role: <strong className="text-slate-700">{candidate.targetRole}</strong> • {candidate.email}
          </p>
        </div>

        <Link
          to={`/setup?candidateId=${candidate.id}`}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 shadow-xs transition"
        >
          <Play className="w-3.5 h-3.5 fill-current" />
          <span>Launch Interview to Validate</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column: Verifiable Claims */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <FileText className="w-4 h-4 text-blue-600" />
                <span>Extracted Resume Claims (Awaiting Validation)</span>
              </h2>
              <span className="text-[11px] text-slate-500">{candidate.resumeClaims?.length || 0} Claims</span>
            </div>

            <div className="space-y-3">
              {(candidate.resumeClaims || []).map((claim, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded text-[10px] border border-blue-200">
                      Target: {claim.targetCompetency}
                    </span>
                    <span className="text-[10px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                      {claim.verificationStatus || 'Claimed but unvalidated'}
                    </span>
                  </div>
                  <p className="font-mono text-slate-800 text-[11px] bg-white p-2.5 rounded border border-slate-200">
                    "{claim.claim}"
                  </p>
                  <p className="text-[11px] text-slate-500">
                    *Listing this claim on resume does NOT establish proficiency until verified with live interview evidence.
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Full Resume Text Viewer */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-3 text-xs">
            <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
              <Code2 className="w-4 h-4 text-indigo-600" />
              <span>Sanitized Raw Resume Document</span>
            </h2>
            <pre className="p-4 rounded-xl bg-slate-50 border border-slate-200 font-mono text-[11px] text-slate-700 overflow-x-auto whitespace-pre-wrap leading-relaxed max-h-80">
              {candidate.resumeText || 'No raw resume text provided.'}
            </pre>
          </div>
        </div>

        {/* Right Column: Skills & Highlights */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4 text-xs">
            <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
              <Code2 className="w-4 h-4 text-emerald-600" />
              <span>Extracted Technical Skills</span>
            </h2>

            <div className="flex flex-wrap gap-1.5">
              {(candidate.extractedSkills || []).map((skill, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 text-slate-800 font-medium text-[11px]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6 text-xs space-y-3">
            <h3 className="font-bold text-blue-950 flex items-center gap-1.5">
              <span>Next Recommended Step</span>
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Launch an adaptive interview session. The AI engine will prioritize questions testing high-uncertainty claims like <strong>Data Structures</strong> and <strong>Hash Maps</strong>.
            </p>
            <Link
              to="/setup"
              className="inline-flex items-center gap-1 font-semibold text-blue-700 hover:text-blue-900"
            >
              <span>Go to Interview Setup</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
