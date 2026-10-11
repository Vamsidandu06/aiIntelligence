import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Briefcase, 
  Users, 
  Sliders, 
  Plus, 
  ChevronRight, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  AlertCircle,
  FileText,
  UserCheck
} from 'lucide-react';
import { api } from '../api/client.js';
import { Skeleton } from '../components/Skeleton.jsx';

export function JobDetailsPage() {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        setLoading(true);
        const res = await api.getJob(id);
        setJob(res.job);
        setCandidates(res.candidates || []);
      } catch (err) {
        console.error('Error fetching job details:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchJob();
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-12 space-y-6">
        <Skeleton className="h-10 w-1/3" />
        <Skeleton className="h-48 w-full" />
      </div>
    );
  }

  if (!job) {
    return (
      <div className="max-w-md mx-auto my-20 p-8 bg-white rounded-2xl border border-slate-200 text-center space-y-4">
        <AlertCircle className="w-10 h-10 text-amber-500 mx-auto" />
        <h2 className="text-lg font-bold text-slate-900">Job Opening Not Found</h2>
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
        <span className="text-slate-900 font-medium">{job.title}</span>
      </nav>

      {/* Header Banner */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-100">
              {job.department}
            </span>
            <span className="text-xs text-slate-400">• {job.experienceLevel}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
            {job.title}
          </h1>
          <p className="text-xs text-slate-500 mt-1 max-w-2xl">
            {job.description || 'Configured with adaptive evidence rubrics and real-time uncertainty probing.'}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to={`/candidates/new?jobId=${job.id}`}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 shadow-xs transition"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Candidate</span>
          </Link>
          <Link
            to="/setup"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-xs font-semibold hover:bg-slate-50 transition"
          >
            <Clock className="w-3.5 h-3.5 text-slate-500" />
            <span>Launch Interview</span>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Required Competencies Matrix */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <Sliders className="w-4 h-4 text-emerald-600" />
                <span>Competency Priority Matrix</span>
              </h2>
              <span className="text-[11px] text-slate-500">{job.requiredCompetencies?.length || 0} Dimensions</span>
            </div>

            <div className="space-y-3">
              {(job.requiredCompetencies || []).map((comp, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900">{comp.name}</span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-semibold uppercase ${
                      comp.importance === 'high' ? 'bg-rose-50 text-rose-700 border border-rose-200' : 'bg-blue-50 text-blue-700 border border-blue-200'
                    }`}>
                      {comp.importance} priority
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500">{comp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Evaluation Rubric Details */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-3 text-xs">
            <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
              <FileText className="w-4 h-4 text-purple-600" />
              <span>Standardized Rubric Benchmark</span>
            </h2>
            <p className="text-slate-600 leading-relaxed">
              {job.rubricCriteria}
            </p>
          </div>
        </div>

        {/* Right Column: Applicants & Active Pipeline */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <Users className="w-4 h-4 text-blue-600" />
                <span>Associated Candidates</span>
              </h2>
              <span className="text-[11px] text-slate-500">{candidates.length} in Pool</span>
            </div>

            {candidates.length === 0 ? (
              <div className="text-center py-8 text-xs text-slate-500 space-y-3">
                <p>No candidates linked to this role yet.</p>
                <Link
                  to={`/candidates/new?jobId=${job.id}`}
                  className="inline-block px-3 py-1.5 rounded-lg bg-blue-50 text-blue-600 font-semibold"
                >
                  Upload First Resume
                </Link>
              </div>
            ) : (
              <div className="space-y-2.5">
                {candidates.map((cand) => (
                  <Link
                    key={cand.id}
                    to={`/candidates/${cand.id}`}
                    className="block p-3 rounded-xl border border-slate-200 hover:border-blue-400 hover:bg-blue-50/30 transition text-xs space-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-900">{cand.name}</span>
                      <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                        {cand.status}
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-500 block">{cand.email}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
