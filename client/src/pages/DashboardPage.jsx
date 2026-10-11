import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Plus, 
  History, 
  FileText, 
  BarChart2, 
  Calendar, 
  Clock, 
  ArrowRight, 
  Zap, 
  ShieldCheck, 
  Sparkles,
  AlertCircle
} from 'lucide-react';
import { api } from '../api/client.js';
import { useInterview } from '../context/InterviewContext.jsx';
import { Skeleton } from '../components/Skeleton.jsx';

export function DashboardPage() {
  const navigate = useNavigate();
  const { loadInterview } = useInterview();
  const [interviews, setInterviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchInterviews = async () => {
    try {
      setLoading(true);
      const res = await api.getInterviews();
      setInterviews(res.interviews || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInterviews();
  }, []);

  const handleLaunchScenario = async (scenario) => {
    try {
      const res = await api.seedDemoScenario(scenario);
      await loadInterview(res.interviewId);
      navigate(`/interview?id=${res.interviewId}`);
    } catch (err) {
      alert(`Demo seeding failed: ${err.message}`);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Interview Intelligence Dashboard
          </h1>
          <p className="text-sm text-slate-500">
            Monitor active adaptive sessions, inspect evidence reports, and launch new evaluations.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/setup"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow-sm transition"
          >
            <Plus className="w-4 h-4" />
            <span>New Interview</span>
          </Link>
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
          <span className="text-xs font-medium text-slate-500">Total Interviews</span>
          <div className="text-2xl font-extrabold text-slate-900 mt-1">{interviews.length}</div>
        </div>

        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
          <span className="text-xs font-medium text-slate-500">Completed Sessions</span>
          <div className="text-2xl font-extrabold text-emerald-600 mt-1">
            {interviews.filter(i => i.status === 'completed').length}
          </div>
        </div>

        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
          <span className="text-xs font-medium text-slate-500">In-Progress Sessions</span>
          <div className="text-2xl font-extrabold text-blue-600 mt-1">
            {interviews.filter(i => i.status === 'in_progress').length}
          </div>
        </div>

        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
          <span className="text-xs font-medium text-slate-500">Demo Sessions</span>
          <div className="text-2xl font-extrabold text-indigo-600 mt-1">
            {interviews.filter(i => i.isDemoSession).length}
          </div>
        </div>
      </div>

      {/* Demo Scenario Quick Launcher */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>Instant Hackathon Demonstration Scenarios</span>
            </h3>
            <p className="text-xs text-slate-600">
              One-click seed a full interview session with pre-filled questions and answers to test dynamic branching.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handleLaunchScenario('scenarioA')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-blue-300 text-blue-700 hover:bg-blue-100 font-semibold text-xs shadow-xs transition"
            >
              <Zap className="w-3.5 h-3.5 text-blue-600" />
              <span>Scenario A: Strong (Escalate)</span>
            </button>
            <button
              onClick={() => handleLaunchScenario('scenarioB')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-amber-300 text-amber-700 hover:bg-amber-100 font-semibold text-xs shadow-xs transition"
            >
              <Zap className="w-3.5 h-3.5 text-amber-600" />
              <span>Scenario B: Incomplete (Gap Probe)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Interview List Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 sm:p-6 border-b border-slate-100 flex items-center justify-between">
          <h2 className="text-base font-bold text-slate-900">Recorded Interview Sessions</h2>
          <span className="text-xs text-slate-500">{interviews.length} sessions found</span>
        </div>

        {loading ? (
          <div className="p-6 space-y-4">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
          </div>
        ) : interviews.length === 0 ? (
          <div className="p-12 text-center space-y-3">
            <History className="w-10 h-10 text-slate-300 mx-auto" />
            <h3 className="text-sm font-semibold text-slate-800">No interviews yet</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Start a new adaptive interview or click one of the Demo scenario buttons above to initialize a session.
            </p>
            <Link
              to="/setup"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 text-white font-semibold text-xs shadow-xs"
            >
              <Plus className="w-3.5 h-3.5" /> Start First Interview
            </Link>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 uppercase tracking-wider font-semibold">
                <tr>
                  <th className="py-3 px-4">Candidate & Role</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Type</th>
                  <th className="py-3 px-4">Created</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {interviews.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50/70 transition">
                    <td className="py-3 px-4">
                      <div className="font-semibold text-slate-900">{item.candidateName}</div>
                      <div className="text-slate-500 text-[11px]">{item.targetRole}</div>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded-full font-semibold capitalize text-[11px] ${
                        item.status === 'completed'
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : item.status === 'in_progress'
                          ? 'bg-blue-50 text-blue-700 border border-blue-200'
                          : 'bg-slate-100 text-slate-600 border border-slate-200'
                      }`}>
                        {item.status.replace('_', ' ')}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      {item.isDemoSession ? (
                        <span className="text-[10px] bg-indigo-50 text-indigo-700 border border-indigo-200 px-2 py-0.5 rounded font-mono">
                          {item.demoScenario || 'Demo'}
                        </span>
                      ) : (
                        <span className="text-[10px] text-slate-500 font-mono">Live</span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-slate-500">
                      {new Date(item.createdAt || Date.now()).toLocaleDateString()}
                    </td>
                    <td className="py-3 px-4 text-right space-x-2">
                      <Link
                        to={`/interview?id=${item.id}`}
                        className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 font-semibold px-2 py-1 rounded hover:bg-blue-50"
                      >
                        <span>Room</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                      <Link
                        to={`/report?id=${item.id}`}
                        className="inline-flex items-center gap-1 text-slate-600 hover:text-slate-900 font-semibold px-2 py-1 rounded hover:bg-slate-100"
                      >
                        <FileText className="w-3 h-3" />
                        <span>Report</span>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

    </div>
  );
}
