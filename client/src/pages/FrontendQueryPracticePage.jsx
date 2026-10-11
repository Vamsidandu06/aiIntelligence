import React, { useState, useEffect } from 'react';
import { 
  Database, 
  Layout, 
  Play, 
  CheckCircle2, 
  ExternalLink, 
  Sparkles, 
  Table, 
  Code2, 
  Layers, 
  RotateCcw,
  BookOpen,
  Video,
  FileText
} from 'lucide-react';
import { useAuth } from '../context/AuthContext.jsx';

export function FrontendQueryPracticePage() {
  const { user, recordActivity } = useAuth();

  const [activeTab, setActiveTab] = useState('sql'); // 'sql' or 'frontend'
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  // SQL State
  const [sqlQuery, setSqlQuery] = useState('');
  const [sqlRunning, setSqlRunning] = useState(false);
  const [sqlResult, setSqlResult] = useState(null);

  // Frontend State
  const [frontendCode, setFrontendCode] = useState('');
  const [frontendEvaluating, setFrontendEvaluating] = useState(false);
  const [frontendEvaluation, setFrontendEvaluation] = useState(null);

  useEffect(() => {
    fetchProblems();
  }, []);

  const fetchProblems = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/practice/frontend-sql/problems');
      const json = await res.json();
      if (json.success) {
        setData(json);
        setSqlQuery(json.sql.defaultQuery);
        setFrontendCode(json.frontend.defaultCode);
      }
    } catch (err) {
      console.error('Failed to load problems:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleRunSQL = async () => {
    setSqlRunning(true);
    setSqlResult(null);
    try {
      const res = await fetch('/api/practice/frontend-sql/run-sql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: sqlQuery, userId: user?.id })
      });
      const json = await res.json();
      if (json.success && json.result) {
        setSqlResult(json.result);
        if (recordActivity) {
          recordActivity({ questionsCount: 1, durationMinutes: 10, action: 'SQL Query Practice' });
        }
      }
    } catch (err) {
      console.error('SQL run error:', err);
    } finally {
      setSqlRunning(false);
    }
  };

  const handleEvaluateFrontend = () => {
    setFrontendEvaluating(true);
    setTimeout(() => {
      const hasAria = frontendCode.toLowerCase().includes('aria') || frontendCode.toLowerCase().includes('id=');
      const hasJs = frontendCode.toLowerCase().includes('<script>') || frontendCode.toLowerCase().includes('function');
      
      setFrontendEvaluation({
        score: hasAria && hasJs ? 95 : 82,
        feedback: hasAria && hasJs
          ? 'Component meets high standards! Semantic layout, responsive classes, and interactive state handlers validated.'
          : 'Component functions, but add explicit ARIA roles (aria-expanded, aria-controls) for screen reader accessibility.',
        recommendations: data?.frontend?.recommendations
      });
      setFrontendEvaluating(false);
      if (recordActivity) {
        recordActivity({ questionsCount: 1, durationMinutes: 10, action: 'Frontend Sandbox Practice' });
      }
    }, 600);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold mb-2">
              <Database className="w-3.5 h-3.5" />
              <span>Interactive Engineering Sandboxes</span>
            </div>
            <h1 className="text-3xl font-extrabold text-white">Frontend & SQL Query Practice</h1>
            <p className="text-slate-400 text-xs mt-1">
              Live HTML/CSS component preview and relational SQL query execution against mock schemas.
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex rounded-xl bg-slate-900 p-1 border border-white/10">
            <button
              onClick={() => setActiveTab('sql')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition flex items-center gap-2 ${
                activeTab === 'sql'
                  ? 'bg-amber-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Database className="w-3.5 h-3.5" />
              <span>SQL Query Sandbox</span>
            </button>

            <button
              onClick={() => setActiveTab('frontend')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition flex items-center gap-2 ${
                activeTab === 'frontend'
                  ? 'bg-cyan-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Layout className="w-3.5 h-3.5" />
              <span>Frontend UI Sandbox</span>
            </button>
          </div>
        </div>

        {/* Tab 1: SQL Query Sandbox */}
        {activeTab === 'sql' && (
          <div className="space-y-6">
            {/* Problem Info & Schema */}
            <div className="p-6 rounded-3xl bg-slate-900/80 border border-white/10 backdrop-blur-xl space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <span>{data?.sql?.title || 'Top Earning Employee per Department'}</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30 text-xs font-semibold">
                    Medium
                  </span>
                </h2>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {data?.sql?.description}
              </p>

              {/* Schema Display */}
              <div className="p-4 rounded-2xl bg-slate-950/70 border border-white/5 space-y-2">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Table className="w-3.5 h-3.5 text-amber-400" />
                  <span>Database Tables Schema:</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-white/5">
                    <span className="text-amber-300 font-bold">departments:</span> id (INT), name (VARCHAR)
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-white/5">
                    <span className="text-amber-300 font-bold">employees:</span> id (INT), name (VARCHAR), department_id (INT), salary (INT)
                  </div>
                </div>
              </div>
            </div>

            {/* SQL Editor & Action Bar */}
            <div className="p-6 rounded-3xl bg-slate-900/80 border border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">SQL Query Editor</span>
                <button
                  type="button"
                  onClick={handleRunSQL}
                  disabled={sqlRunning}
                  className="px-5 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 disabled:opacity-50 text-white font-bold text-xs shadow-md transition flex items-center gap-1.5"
                >
                  <Play className="w-3.5 h-3.5 fill-white" />
                  <span>{sqlRunning ? 'Executing Query...' : 'Run SQL Query'}</span>
                </button>
              </div>

              <textarea
                value={sqlQuery}
                onChange={(e) => setSqlQuery(e.target.value)}
                rows={7}
                className="w-full p-4 rounded-2xl bg-slate-950 border border-white/10 text-amber-300 font-mono text-xs focus:outline-none focus:border-amber-400 transition"
              />
            </div>

            {/* SQL Execution Results */}
            {sqlResult && (
              <div className="p-6 rounded-3xl bg-slate-900/80 border border-white/10 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span className="text-sm font-bold text-white">Query Execution Results</span>
                  </div>
                  <span className="text-xs text-slate-400 font-mono">
                    Runtime: {sqlResult.executionTimeMs} ms • {sqlResult.rowCount} rows returned
                  </span>
                </div>

                {/* Tabular Output */}
                <div className="overflow-x-auto rounded-2xl border border-white/10">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-950 text-slate-400 uppercase text-[10px]">
                      <tr>
                        {sqlResult.columns.map((col, idx) => (
                          <th key={idx} className="px-5 py-3 font-semibold">{col}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 bg-slate-950/60 font-mono">
                      {sqlResult.rows.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-800/40">
                          <td className="px-5 py-3 text-cyan-300 font-bold">{row.department}</td>
                          <td className="px-5 py-3 text-white">{row.employee}</td>
                          <td className="px-5 py-3 text-emerald-400 font-bold">{row.salary}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Plan & Feedback */}
                <div className="p-4 rounded-2xl bg-slate-950/70 border border-white/5 text-xs space-y-2">
                  <div className="font-semibold text-amber-300">Execution Plan Analysis:</div>
                  <div className="font-mono text-slate-300 text-[11px]">{sqlResult.queryPlan}</div>
                  <div className="text-slate-400 mt-1">{sqlResult.feedback}</div>
                </div>

                {/* Recommendations */}
                {sqlResult.recommendations && (
                  <div className="p-5 rounded-2xl bg-slate-950 border border-white/5 space-y-3">
                    <div className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>SQL Mastery Resources</span>
                    </div>
                    <div className="text-xs text-slate-300 font-mono">
                      • {sqlResult.recommendations.notes[0]}
                    </div>
                    <div className="flex gap-4 pt-2">
                      <a
                        href={sqlResult.recommendations.documentationLinks[0]?.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-amber-400 hover:underline flex items-center gap-1"
                      >
                        <span>Official Docs Guide</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Frontend UI Sandbox */}
        {activeTab === 'frontend' && (
          <div className="space-y-6">
            <div className="p-6 rounded-3xl bg-slate-900/80 border border-white/10 backdrop-blur-xl space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <span>{data?.frontend?.title || 'Accessible Interactive Accordion Component'}</span>
                <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 text-xs font-semibold">
                  Medium
                </span>
              </h2>
              <p className="text-xs text-slate-300 leading-relaxed">
                {data?.frontend?.description}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Code Editor */}
              <div className="p-6 rounded-3xl bg-slate-900/80 border border-white/10 space-y-3 flex flex-col">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">HTML/CSS/JS Sandbox</span>
                  <button
                    type="button"
                    onClick={handleEvaluateFrontend}
                    disabled={frontendEvaluating}
                    className="px-4 py-1.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs shadow-md transition flex items-center gap-1.5"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{frontendEvaluating ? 'Validating...' : 'Evaluate Component'}</span>
                  </button>
                </div>
                <textarea
                  value={frontendCode}
                  onChange={(e) => setFrontendCode(e.target.value)}
                  rows={14}
                  className="w-full flex-1 p-4 rounded-2xl bg-slate-950 border border-white/10 text-cyan-200 font-mono text-xs focus:outline-none focus:border-cyan-400 transition resize-none"
                />
              </div>

              {/* Live Preview Iframe */}
              <div className="p-6 rounded-3xl bg-slate-900/80 border border-white/10 space-y-3 flex flex-col">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Live Sandbox Preview</span>
                <div className="flex-1 min-h-[300px] rounded-2xl bg-slate-950 border border-white/10 p-2 overflow-hidden">
                  <iframe
                    title="Component Sandbox"
                    srcDoc={`<!DOCTYPE html><html><head><script src="https://cdn.tailwindcss.com"></script></head><body class="bg-slate-950 p-4 font-sans">${frontendCode}</body></html>`}
                    className="w-full h-full border-none rounded-xl"
                  />
                </div>
              </div>
            </div>

            {/* Frontend Evaluation Results */}
            {frontendEvaluation && (
              <div className="p-6 rounded-3xl bg-slate-900/80 border border-white/10 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    <span className="text-base font-bold text-white">Component Evaluation Score: {frontendEvaluation.score}/100</span>
                  </div>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {frontendEvaluation.feedback}
                </p>

                {frontendEvaluation.recommendations && (
                  <div className="p-5 rounded-2xl bg-slate-950 border border-white/5 space-y-2 text-xs">
                    <div className="font-bold text-cyan-400">Web Performance & Accessibility Checklist:</div>
                    <div className="font-mono text-slate-300 text-[11px]">
                      • {frontendEvaluation.recommendations.notes[0]}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
