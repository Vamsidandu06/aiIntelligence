import React, { useState, useEffect } from 'react';
import { 
  Code2, 
  Play, 
  Send, 
  CheckCircle2, 
  XCircle, 
  AlertCircle, 
  Clock, 
  Sparkles, 
  RotateCcw, 
  BookOpen, 
  ExternalLink, 
  Video, 
  Lightbulb, 
  ChevronRight,
  Terminal,
  Layers,
  Search,
  Filter
} from 'lucide-react';
import { useAuth } from '../context/AuthContext.jsx';

export function CodingArenaPage() {
  const { user, recordActivity } = useAuth();

  const [difficultyFilter, setDifficultyFilter] = useState('All');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [problems, setProblems] = useState([]);
  const [selectedProblem, setSelectedProblem] = useState(null);
  const [language, setLanguage] = useState('python');
  const [code, setCode] = useState('');
  const [running, setRunning] = useState(false);
  const [executionResult, setExecutionResult] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [loading, setLoading] = useState(true);

  const categories = [
    'All',
    'Arrays & Hashing',
    'Two Pointers',
    'Sliding Window',
    'Stack',
    'Binary Search',
    'Linked List',
    'Trees',
    'Tries',
    'Heap & Priority Queue',
    'Backtracking',
    'Graphs',
    '1D Dynamic Programming',
    '2D Dynamic Programming',
    'Intervals'
  ];

  useEffect(() => {
    fetchProblems();
  }, [difficultyFilter, categoryFilter, searchQuery]);

  const fetchProblems = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (difficultyFilter !== 'All') params.append('difficulty', difficultyFilter);
      if (categoryFilter !== 'All') params.append('category', categoryFilter);
      if (searchQuery.trim()) params.append('search', searchQuery.trim());

      const res = await fetch(`/api/practice/coding/problems?${params.toString()}`);
      const data = await res.json();
      if (data.success && data.problems.length > 0) {
        setProblems(data.problems);
        // If current selection is not in filtered list, select first
        if (!selectedProblem || !data.problems.some(p => p.id === selectedProblem.id)) {
          const first = data.problems[0];
          setSelectedProblem(first);
          setCode(first.starterCode[language] || first.starterCode.python || first.starterCode.javascript);
        }
      } else {
        setProblems([]);
      }
    } catch (err) {
      console.error('Failed to fetch coding problems:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSelectProblem = (problem) => {
    setSelectedProblem(problem);
    setCode(problem.starterCode[language] || problem.starterCode.python || problem.starterCode.javascript);
    setExecutionResult(null);
    setActiveTab(0);
    setShowHint(false);
  };

  const handleLanguageChange = (newLang) => {
    setLanguage(newLang);
    if (selectedProblem) {
      setCode(selectedProblem.starterCode[newLang] || selectedProblem.starterCode.python || selectedProblem.starterCode.javascript);
    }
  };

  const handleResetCode = () => {
    if (selectedProblem) {
      setCode(selectedProblem.starterCode[language] || selectedProblem.starterCode.python || selectedProblem.starterCode.javascript);
      setExecutionResult(null);
    }
  };

  const handleRunCode = async () => {
    if (!selectedProblem || !code) return;
    setRunning(true);
    setExecutionResult(null);
    try {
      const res = await fetch('/api/practice/coding/run', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          problemId: selectedProblem.id,
          code,
          language,
          userId: user?.id
        })
      });
      const data = await res.json();
      if (data.success && data.result) {
        setExecutionResult(data.result);
        if (data.result.allPassed && recordActivity) {
          recordActivity({ questionsCount: 1, durationMinutes: 15, action: `Solved ${selectedProblem.title}` });
        }
      } else {
        setExecutionResult({
          status: 'Runtime Error',
          allPassed: false,
          error: data.error || 'Execution failed'
        });
      }
    } catch (err) {
      setExecutionResult({
        status: 'Runtime Error',
        allPassed: false,
        error: err.message
      });
    } finally {
      setRunning(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* Top Bar */}
      <div className="border-b border-white/10 bg-slate-900/90 backdrop-blur-md px-4 sm:px-6 py-4 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white flex items-center justify-center font-bold shadow-md shadow-emerald-500/20">
            <Code2 className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-white flex items-center gap-2">
              <span>LeetCode 100 Masterclass Arena</span>
              <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-mono font-semibold">
                100 Core Questions Catalog
              </span>
            </h1>
            <p className="text-slate-400 text-xs">
              Complete curated catalog of 100 essential FAANG coding interview problems with VM test runner.
            </p>
          </div>
        </div>

        {/* Search & Filters */}
        <div className="flex flex-wrap items-center gap-2.5">
          {/* Search Bar */}
          <div className="relative w-full sm:w-56">
            <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search 100 questions..."
              className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-slate-950 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400"
            />
          </div>

          {/* Category Dropdown */}
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="px-3 py-1.5 rounded-xl bg-slate-950 border border-white/10 text-xs text-slate-200 focus:outline-none"
          >
            {categories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>

          {/* Difficulty Filter Pills */}
          <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-white/10">
            {['All', 'Easy', 'Medium', 'Hard'].map((diff) => (
              <button
                key={diff}
                onClick={() => setDifficultyFilter(diff)}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition ${
                  difficultyFilter === diff
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {diff}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Split-Screen Workspace */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        
        {/* Left Pane: 100 Problems Catalog & Details */}
        <div className="lg:w-1/2 border-r border-white/10 flex flex-col overflow-y-auto max-h-[calc(100vh-80px)] p-6 space-y-6">
          
          {/* Problem Selector Bar */}
          <div>
            <div className="flex items-center justify-between text-xs text-slate-400 mb-2 font-mono">
              <span>Showing {problems.length} of 100 Interview Problems</span>
              {selectedProblem && <span>Active: #{selectedProblem.number}</span>}
            </div>

            {/* Scrollable Problems List Chips */}
            <div className="max-h-36 overflow-y-auto p-2 rounded-2xl bg-slate-950/80 border border-white/5 flex flex-wrap gap-1.5">
              {problems.map((p) => (
                <button
                  key={p.id}
                  onClick={() => handleSelectProblem(p)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition flex items-center gap-1.5 ${
                    selectedProblem?.id === p.id
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                      : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-white/5'
                  }`}
                >
                  <span>{p.title}</span>
                  <span className={`text-[9px] ${
                    p.difficulty === 'Hard' ? 'text-rose-400' : p.difficulty === 'Medium' ? 'text-amber-400' : 'text-emerald-400'
                  }`}>
                    • {p.difficulty}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {selectedProblem ? (
            <div className="space-y-6">
              {/* Problem Header */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h2 className="text-2xl font-extrabold text-white">
                    {selectedProblem.title}
                  </h2>
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${
                    selectedProblem.difficulty === 'Hard'
                      ? 'bg-rose-500/10 text-rose-300 border-rose-500/30'
                      : selectedProblem.difficulty === 'Medium'
                      ? 'bg-amber-500/10 text-amber-300 border-amber-500/30'
                      : 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
                  }`}>
                    {selectedProblem.difficulty}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
                  <span>Category: <strong className="text-slate-200">{selectedProblem.category}</strong></span>
                  <span>•</span>
                  <span>Target Time: <strong className="text-emerald-400 font-mono">{selectedProblem.optimalComplexity?.time}</strong></span>
                  <span>•</span>
                  <span>Target Space: <strong className="text-cyan-400 font-mono">{selectedProblem.optimalComplexity?.space}</strong></span>
                </div>
              </div>

              {/* Problem Description */}
              <div className="text-sm text-slate-300 leading-relaxed whitespace-pre-line font-sans">
                {selectedProblem.description}
              </div>

              {/* Examples */}
              <div className="space-y-3">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Examples</div>
                {selectedProblem.examples.map((ex, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-900 border border-white/5 space-y-1.5 font-mono text-xs">
                    <div className="text-slate-400">
                      <strong className="text-cyan-400 font-sans">Input:</strong> {ex.input}
                    </div>
                    <div className="text-slate-400">
                      <strong className="text-emerald-400 font-sans">Output:</strong> {ex.output}
                    </div>
                    {ex.explanation && (
                      <div className="text-slate-500 text-[11px] font-sans pt-1">
                        Explanation: {ex.explanation}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Hints Accordion */}
              {selectedProblem.hints && selectedProblem.hints.length > 0 && (
                <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/5">
                  <button
                    type="button"
                    onClick={() => setShowHint(!showHint)}
                    className="w-full flex items-center justify-between text-xs font-semibold text-amber-400"
                  >
                    <span className="flex items-center gap-1.5">
                      <Lightbulb className="w-3.5 h-3.5" />
                      <span>{showHint ? 'Hide Algorithmic Hint' : 'Show Algorithmic Hint'}</span>
                    </span>
                    <span>{showHint ? '▲' : '▼'}</span>
                  </button>
                  {showHint && (
                    <div className="mt-3 space-y-2 text-xs text-slate-300">
                      {selectedProblem.hints.map((hint, i) => (
                        <p key={i}>• {hint}</p>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ) : (
            <div className="p-12 text-center text-slate-400">No problems match the current filter.</div>
          )}
        </div>

        {/* Right Pane: Code Editor & Execution Console */}
        <div className="lg:w-1/2 flex flex-col bg-slate-950 max-h-[calc(100vh-80px)]">
          
          {/* Editor Header */}
          <div className="p-3 bg-slate-900/80 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Language:</span>
              <select
                value={language}
                onChange={(e) => handleLanguageChange(e.target.value)}
                className="px-3 py-1.5 rounded-xl bg-slate-800 border border-white/10 text-xs text-cyan-300 font-mono font-bold focus:outline-none focus:border-cyan-400 transition"
              >
                <option value="python">🐍 Python (Python 3.14 Engine)</option>
                <option value="c">⚙️ C (GCC 13.2 Compiler)</option>
                <option value="cpp">⚡ C++ (G++ 13.2 Compiler)</option>
                <option value="java">☕ Java (Java 25 OpenJDK)</option>
                <option value="javascript">🌐 JavaScript (Node.js 24 VM)</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleResetCode}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition"
                title="Reset Starter Code"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>

              <button
                type="button"
                onClick={handleRunCode}
                disabled={running}
                className="px-4 py-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 disabled:opacity-50 text-white font-bold text-xs shadow-md shadow-emerald-950/50 transition flex items-center gap-1.5"
              >
                <Play className="w-3 h-3 fill-white" />
                <span>{running ? 'Compiling & Verifying...' : 'Run & Verify'}</span>
              </button>
            </div>
          </div>

          {/* Interactive Code Editor (Textarea with Mono styling) */}
          <div className="flex-1 p-4 bg-slate-950 font-mono text-sm text-cyan-200 overflow-y-auto">
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="// Write your solution here..."
              spellCheck="false"
              className="w-full h-full min-h-[300px] bg-transparent text-slate-200 font-mono text-xs leading-relaxed focus:outline-none resize-none"
            />
          </div>

          {/* Execution Output Console */}
          <div className="border-t border-white/10 bg-slate-900/90 p-4 space-y-4 max-h-[340px] overflow-y-auto">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-white flex items-center gap-2">
                <Terminal className="w-4 h-4 text-emerald-400" />
                <span>Test Execution & Compiler Results</span>
              </span>

              {executionResult && (
                <div className="flex items-center gap-2">
                  {executionResult.compiler && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                      {executionResult.compiler}
                    </span>
                  )}
                  <span className={`px-2.5 py-0.5 rounded-full font-bold text-[11px] border ${
                    executionResult.status === 'Accepted'
                      ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
                      : 'bg-rose-500/10 text-rose-300 border-rose-500/30'
                  }`}>
                    {executionResult.status}
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{executionResult.runtimeMs} ms</span>
                  </span>
                </div>
              )}
            </div>

            {/* If Results available */}
            {executionResult ? (
              <div className="space-y-3">
                {/* Compiler Stdout if available */}
                {executionResult.stdout && (
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-white/5 font-mono text-[11px] text-slate-300 space-y-1">
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">Standard Output (stdout):</div>
                    <pre className="whitespace-pre-wrap text-cyan-300">{executionResult.stdout.trim()}</pre>
                  </div>
                )}
                {executionResult.testCases && executionResult.testCases.length > 0 ? (
                  <>
                    {/* Test Case Tabs */}
                    <div className="flex gap-2">
                      {executionResult.testCases.map((tc, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setActiveTab(idx)}
                          className={`px-3 py-1 rounded-lg text-xs font-mono font-semibold transition flex items-center gap-1.5 ${
                            activeTab === idx
                              ? 'bg-slate-800 text-white border border-white/10'
                              : 'bg-slate-950/60 text-slate-500 hover:text-slate-300'
                          }`}
                        >
                          <span>Case {tc.testCase}</span>
                          {tc.passed ? (
                            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                          ) : (
                            <XCircle className="w-3 h-3 text-rose-400" />
                          )}
                        </button>
                      ))}
                    </div>

                    {/* Active Test Case Detail */}
                    {executionResult.testCases[activeTab] && (
                      <div className="p-3.5 rounded-xl bg-slate-950 border border-white/5 font-mono text-xs space-y-1.5">
                        <div className="text-slate-400">
                          <strong className="text-slate-300 font-sans">Input:</strong> {JSON.stringify(executionResult.testCases[activeTab].input)}
                        </div>
                        <div className="text-slate-400">
                          <strong className="text-emerald-400 font-sans">Expected Output:</strong> {JSON.stringify(executionResult.testCases[activeTab].expected)}
                        </div>
                        <div className="text-slate-400">
                          <strong className="text-cyan-400 font-sans">Your Output:</strong> {JSON.stringify(executionResult.testCases[activeTab].actual)}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-mono">
                    {executionResult.error || 'Execution encountered an exception.'}
                  </div>
                )}

                {/* Algorithmic Recommendations */}
                {executionResult.recommendations && (
                  <div className="p-3.5 rounded-xl bg-slate-950 border border-white/5 flex items-center justify-between text-xs">
                    <div>
                      <div className="text-[11px] font-bold text-cyan-400 flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        <span>Recommended Masterclass Roadmap:</span>
                      </div>
                      <div className="text-slate-300 text-[11px] mt-0.5">
                        {executionResult.recommendations.notes[0]}
                      </div>
                    </div>
                    {executionResult.recommendations.documentationLinks[0] && (
                      <a
                        href={executionResult.recommendations.documentationLinks[0].url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-300 font-semibold text-[11px] flex items-center gap-1 flex-shrink-0"
                      >
                        <span>Study Guide</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <div className="text-xs text-slate-500 font-mono">
                Click "Run Code" to compile and execute against the assertion suite.
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
