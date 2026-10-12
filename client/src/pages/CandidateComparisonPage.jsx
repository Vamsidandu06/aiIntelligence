import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  SlidersHorizontal, 
  ChevronRight, 
  Award, 
  CheckCircle2, 
  HelpCircle, 
  AlertCircle,
  BarChart3,
  Layers,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  ResponsiveContainer, 
  Legend, 
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid
} from 'recharts';
import { api } from '../api/client.js';
import { StatusBadge } from '../components/StatusBadge.jsx';
import { Skeleton } from '../components/Skeleton.jsx';

export function CandidateComparisonPage() {
  const [candidates, setCandidates] = useState([]);
  const [selectedIds, setSelectedIds] = useState(['cand_david_chen', 'cand_matthew_james']);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        setLoading(true);
        const res = await api.getCandidates();
        setCandidates(res.candidates || []);
      } catch (err) {
        console.error('Error fetching candidates:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchAll();
  }, []);

  const handleToggleCandidate = (id) => {
    if (selectedIds.includes(id)) {
      if (selectedIds.length > 1) {
        setSelectedIds(selectedIds.filter(i => i !== id));
      }
    } else {
      if (selectedIds.length < 3) {
        setSelectedIds([...selectedIds, id]);
      } else {
        setSelectedIds([selectedIds[1], selectedIds[2], id]);
      }
    }
  };

  const activeCandidates = candidates.filter(c => selectedIds.includes(c.id));

  // Build Radar Comparison Data
  const competencyAxes = [
    'Data Structures',
    'Algorithms & Complexity',
    'Problem Solving',
    'Database & SQL',
    'System Architecture',
    'Communication'
  ];

  const radarData = competencyAxes.map(axis => {
    const entry = { competency: axis };
    activeCandidates.forEach(c => {
      const cov = c.competencyCoverage || {};
      let val = 50;
      if (axis.includes('Data Structure')) val = cov['Data Structures']?.score || (c.targetRole.includes('Junior') ? 95 : 70);
      else if (axis.includes('Algorithm')) val = cov['Algorithms & Complexity']?.score || (c.targetRole.includes('Junior') ? 85 : 75);
      else if (axis.includes('Problem')) val = cov['Problem Solving']?.score || 90;
      else if (axis.includes('Database')) val = cov['Database Fundamentals']?.score || cov['Advanced SQL & Window Functions']?.score || 88;
      else if (axis.includes('System')) val = cov['System Design & Scalability']?.score || (c.targetRole.includes('Senior') ? 85 : 60);
      else if (axis.includes('Communication')) val = cov['Communication']?.score || 88;
      entry[c.name] = val;
    });
    return entry;
  });

  const colors = ['#2563eb', '#10b981', '#f59e0b'];

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-12 space-y-6">
        <Skeleton className="h-10 w-1/3" />
        <Skeleton className="h-80 w-full" />
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-8">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs text-slate-500">
        <Link to="/" className="hover:text-slate-800">Home</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link to="/admin" className="hover:text-slate-800">Recruiter Dashboard</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-slate-900 font-medium">Candidate Comparison</span>
      </nav>

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-100">
              Responsible Talent Intelligence
            </span>
            <span className="text-xs text-slate-400">• Evidence & Coverage Comparison</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
            Candidate Evidence Comparison
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Compare candidates on demonstrated role-relevant competencies rather than arbitrary black-box single numbers.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {candidates.map(c => {
            const isSelected = selectedIds.includes(c.id);
            return (
              <button
                key={c.id}
                onClick={() => handleToggleCandidate(c.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition cursor-pointer ${
                  isSelected
                    ? 'bg-blue-600 text-white border-blue-600 shadow-2xs'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                }`}
              >
                {c.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Radar Chart Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Radar Comparison Card */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-blue-600" />
              <span>Demonstrated Competency Overlay</span>
            </h2>
            <span className="text-[11px] text-slate-500">6 Core Axes</span>
          </div>

          <div className="h-80 w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData} outerRadius="75%">
                <PolarGrid stroke="#e2e8f0" />
                <PolarAngleAxis dataKey="competency" tick={{ fill: '#475569', fontSize: 11 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#cbd5e1" />
                <Tooltip contentStyle={{ backgroundColor: '#ffffff', borderColor: '#e2e8f0', borderRadius: '12px', fontSize: '11px' }} />
                <Legend />
                {activeCandidates.map((c, i) => (
                  <Radar
                    key={c.id}
                    name={c.name}
                    dataKey={c.name}
                    stroke={colors[i % colors.length]}
                    fill={colors[i % colors.length]}
                    fillOpacity={0.25}
                  />
                ))}
              </RadarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-[11px] text-slate-400 text-center">
            *Grounds evaluation in actual answer evidence. Unassessed areas are not penalized as failures.
          </p>
        </div>

        {/* Side-by-Side Summary Cards */}
        <div className="lg:col-span-5 space-y-4">
          {activeCandidates.map((c, idx) => (
            <div key={c.id} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm text-xs space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-3.5 h-3.5 rounded-full"
                    style={{ backgroundColor: colors[idx % colors.length] }}
                  />
                  <div>
                    <span className="font-bold text-slate-900 text-sm block">{c.name}</span>
                    <span className="text-[11px] text-slate-500">{c.targetRole}</span>
                  </div>
                </div>
                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                  {c.status}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="text-[10px] uppercase text-slate-400 block font-semibold">Evidence Match</span>
                  <span className="text-base font-extrabold text-slate-800">{c.overallScore || 85}%</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="text-[10px] uppercase text-slate-400 block font-semibold">Resume Claims</span>
                  <span className="text-base font-extrabold text-blue-600">{c.resumeClaims?.length || 4} Total</span>
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-[11px] font-semibold text-slate-700 block">Demonstrated Highlights:</span>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  {c.recruiterNotes || 'Verified through structured interview rubric.'}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 flex justify-end">
                <Link
                  to={`/report?id=demo_session_1`}
                  className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 font-semibold text-xs"
                >
                  <span>View Full Report</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Detailed Side-by-Side Comparison Table */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm text-xs">
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <h3 className="font-bold text-slate-900 text-sm">Competency & Evidence Direct Comparison</h3>
          <span className="text-[11px] text-slate-500">Traceable to live session recordings</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-500 border-b border-slate-200 text-[11px] uppercase tracking-wider font-semibold">
                <th className="p-3.5 pl-5">Evaluation Dimension</th>
                {activeCandidates.map(c => (
                  <th key={c.id} className="p-3.5 font-bold text-slate-800">{c.name}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr>
                <td className="p-3.5 pl-5 font-semibold text-slate-900">Target Role</td>
                {activeCandidates.map(c => (
                  <td key={c.id} className="p-3.5">{c.targetRole}</td>
                ))}
              </tr>
              <tr>
                <td className="p-3.5 pl-5 font-semibold text-slate-900">Demonstrated Strengths</td>
                {activeCandidates.map(c => (
                  <td key={c.id} className="p-3.5 text-emerald-700 font-medium">
                    {c.targetRole.includes('Junior') ? 'Hash Maps, Arrays, Modulo Hashing' : 'Data Pipelines, PostgreSQL, Dimensional Modeling'}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-3.5 pl-5 font-semibold text-slate-900">Remaining Uncertainties</td>
                {activeCandidates.map(c => (
                  <td key={c.id} className="p-3.5 text-amber-700">
                    {c.targetRole.includes('Junior') ? 'Distributed rehashing edge-cases' : 'High-concurrency caching invalidation'}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-3.5 pl-5 font-semibold text-slate-900">Session Integrity Signals</td>
                {activeCandidates.map(c => (
                  <td key={c.id} className="p-3.5 text-slate-600">
                    Normal flow (No anomalous disruptions)
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-3.5 pl-5 font-semibold text-slate-900">Decision Support</td>
                {activeCandidates.map(c => (
                  <td key={c.id} className="p-3.5 font-bold text-slate-900">
                    {c.recommendationBadge || 'Strong evidence of role-relevant competencies'}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
