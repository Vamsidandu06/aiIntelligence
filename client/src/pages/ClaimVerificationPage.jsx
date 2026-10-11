import React, { useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  FileCheck2, 
  HelpCircle, 
  CheckCircle2, 
  AlertCircle, 
  Quote, 
  Search, 
  ShieldCheck, 
  ArrowRight,
  Info
} from 'lucide-react';
import { useInterview } from '../context/InterviewContext.jsx';
import { StatusBadge } from '../components/StatusBadge.jsx';
import { Skeleton } from '../components/Skeleton.jsx';

export function ClaimVerificationPage() {
  const [searchParams] = useSearchParams();
  const interviewId = searchParams.get('id');
  const { interview, loadInterview, loading } = useInterview();

  useEffect(() => {
    if (interviewId && (!interview || interview.id !== interviewId)) {
      loadInterview(interviewId);
    }
  }, [interviewId]);

  if (loading && !interview) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-12 space-y-6">
        <Skeleton className="h-10 w-1/3" />
        <Skeleton className="h-32 w-full" />
      </div>
    );
  }

  if (!interview) {
    return (
      <div className="max-w-md mx-auto my-20 p-8 bg-white rounded-2xl border border-slate-200 text-center space-y-4">
        <AlertCircle className="w-10 h-10 text-amber-500 mx-auto" />
        <h2 className="text-lg font-bold text-slate-900">No Active Interview Selected</h2>
        <p className="text-xs text-slate-500">Please choose an interview session to review resume claim verification.</p>
        <Link to="/dashboard" className="inline-block px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold">
          Return to Dashboard
        </Link>
      </div>
    );
  }

  const claims = interview.resumeClaims || [];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Evidence Audit Inspector
            </span>
            <span className="text-xs text-slate-400">• Session ID: {interview.id?.slice(0, 10)}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Resume Claim Verification
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Cross-referencing candidate resume claims against real-time interview answers and verbatim evidence.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Link
            to={`/competency?id=${interview.id}`}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold transition"
          >
            <span>Competency Radar</span>
          </Link>
          <Link
            to={`/report?id=${interview.id}`}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition shadow-xs"
          >
            <span>View Full Report</span>
          </Link>
        </div>
      </div>

      {/* Responsible AI Disclaimer Banner */}
      <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-blue-900 text-xs flex items-start gap-3">
        <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong>Responsible AI Policy:</strong> A claim classified as "Claimed but unvalidated" or "Not assessed" simply reflects that the interview question quota did not cover that specific claim. Candidates are never presumed dishonest due to limited question coverage.
        </p>
      </div>

      {/* Claims List */}
      <div className="space-y-4">
        {claims.length === 0 ? (
          <div className="p-8 bg-white rounded-2xl border border-slate-200 text-center text-xs text-slate-500">
            No resume claims currently registered for this interview.
          </div>
        ) : (
          claims.map((claim, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
              
              {/* Claim Header & Status */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-3 border-b border-slate-100">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-mono text-[11px] font-bold">
                      Claim #{idx + 1}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      Target Competency: <strong className="text-slate-800">{claim.targetCompetency || 'Technical Skill'}</strong>
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                    "{claim.claim}"
                  </h3>
                </div>

                <div className="shrink-0">
                  <StatusBadge status={claim.verificationStatus || 'Claimed but unvalidated'} size="lg" />
                </div>
              </div>

              {/* Supporting Evidence Excerpt & Assessment */}
              <div className="grid sm:grid-cols-2 gap-4 text-xs">
                
                {/* Supporting Quote */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <span className="text-[11px] font-bold text-slate-700 flex items-center gap-1.5">
                    <Quote className="w-3.5 h-3.5 text-blue-600" />
                    <span>Verbatim Interview Evidence:</span>
                  </span>
                  {claim.verifiedWithQuote ? (
                    <p className="text-slate-800 font-mono text-[11px] bg-white p-2.5 rounded border border-slate-200 leading-relaxed">
                      "{claim.verifiedWithQuote}"
                    </p>
                  ) : (
                    <p className="text-slate-400 italic">
                      No matching interview answer has evaluated this specific claim yet.
                    </p>
                  )}
                </div>

                {/* Rubric Assessment Explanation */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <span className="text-[11px] font-bold text-slate-700 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Assessment Explanation & Confidence:</span>
                  </span>
                  <p className="text-slate-600 leading-relaxed">
                    {claim.explanation || 'Claim is currently recorded from candidate resume and awaiting validation during live questioning.'}
                  </p>
                  <div className="flex items-center gap-4 pt-1 text-[11px]">
                    <span className="text-slate-500">
                      Confidence Level: <strong className="capitalize text-slate-700">{claim.confidence || 'Medium'}</strong>
                    </span>
                    <span className="text-slate-500">
                      Remaining Uncertainty: <strong className="text-slate-700">
                        {claim.verificationStatus === 'Demonstrated' ? 'Low' : 'Requires further inquiry'}
                      </strong>
                    </span>
                  </div>
                </div>

              </div>

            </div>
          ))
        )}
      </div>

    </div>
  );
}
