import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Cpu, 
  ShieldCheck, 
  BarChart3, 
  GitBranch, 
  Zap, 
  Layers, 
  FileCheck2, 
  Play, 
  Sliders,
  Brain,
  Mic,
  Activity,
  Award,
  AlertTriangle,
  Lock,
  Eye,
  Check,
  ChevronRight
} from 'lucide-react';
import { api } from '../api/client.js';
import { useInterview } from '../context/InterviewContext.jsx';

export function LandingPage() {
  const navigate = useNavigate();
  const { loadInterview } = useInterview();

  // Interactive Product Preview State (Section 3)
  const [activeTab, setActiveTab] = useState('answer'); // 'answer' | 'evidence' | 'skillgap' | 'adaptive'
  const [demoBranch, setDemoBranch] = useState('strong'); // 'strong' | 'partial' | 'ambiguous'

  const handleLaunchScenario = async (scenario) => {
    try {
      const res = await api.seedDemoScenario({ scenario, role: 'junior' });
      await loadInterview(res.interviewId);
      navigate(`/interview?id=${res.interviewId}`);
    } catch (err) {
      alert(`Demo launch failed: ${err.message}`);
    }
  };

  return (
    <div className="space-y-24 pb-20 text-slate-800">
      
      {/* 1. HERO SECTION (Section 3 Requirements) */}
      <section className="relative pt-16 pb-20 overflow-hidden bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          
          {/* Tagline Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-cyan-400/30 text-cyan-300 text-xs font-semibold shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Google Student Club Hackathon 2026 • Adaptive Interview Intelligence (AII)</span>
          </div>

          {/* Exact Required Hero Headline */}
          <div className="max-w-4xl mx-auto space-y-4">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.15]">
              Interviews That Think Beyond <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300">
                The Next Question.
              </span>
            </h1>
            {/* Exact Required Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
              An evidence-driven AI platform that adapts interviews in real time, evaluates demonstrated competencies, identifies skill gaps, and gives recruiters the context they need to make informed decisions.
            </p>
          </div>

          {/* Exact Required CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/setup"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-500/25 transition transform hover:-translate-y-0.5"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Start an Interview</span>
            </Link>

            <Link
              to="/help"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 backdrop-blur-md shadow-xs transition"
            >
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span>Explore the Intelligence Engine</span>
            </Link>
          </div>

          {/* Interactive Live Product Preview (Section 3 Requirement) */}
          <div className="max-w-4xl mx-auto mt-12 bg-white rounded-2xl border border-slate-200 shadow-2xl text-slate-900 text-left overflow-hidden">
            <div className="bg-slate-100 p-3 border-b border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-400 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
                <span className="font-bold text-slate-700 ml-2">Live Adaptive Interviewing Feedback Loop</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white p-1 rounded-lg border border-slate-200 text-[11px]">
                <button
                  onClick={() => setDemoBranch('strong')}
                  className={`px-2 py-0.5 rounded font-semibold ${demoBranch === 'strong' ? 'bg-emerald-100 text-emerald-800' : 'text-slate-600'}`}
                >
                  Strong Answer
                </button>
                <button
                  onClick={() => setDemoBranch('partial')}
                  className={`px-2 py-0.5 rounded font-semibold ${demoBranch === 'partial' ? 'bg-blue-100 text-blue-800' : 'text-slate-600'}`}
                >
                  Partial Answer
                </button>
                <button
                  onClick={() => setDemoBranch('ambiguous')}
                  className={`px-2 py-0.5 rounded font-semibold ${demoBranch === 'ambiguous' ? 'bg-amber-100 text-amber-800' : 'text-slate-600'}`}
                >
                  Ambiguous Answer
                </button>
              </div>
            </div>

            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              {/* Left Side: Candidate Answering Question */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-blue-700 uppercase tracking-wider text-[10px]">
                    Step 1: Current Question (Data Structures)
                  </span>
                  <span className="text-[10px] bg-slate-100 px-2 py-0.5 rounded font-mono text-slate-600">Intermediate</span>
                </div>
                <p className="p-3 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-800">
                  "Explain how a Hash Map achieves average O(1) lookup, and how collisions are resolved."
                </p>

                <div className="space-y-1">
                  <span className="font-semibold text-slate-500 block uppercase tracking-wider text-[10px]">Candidate Answer Input:</span>
                  <div className="p-3 bg-white border border-slate-200 rounded-xl font-mono text-[11px] text-slate-700">
                    {demoBranch === 'strong' && (
                      <p>"Uses hash(key) % capacity to map to bucket index. Collisions are handled via separate chaining (linked list / tree) or open addressing with probing. Average O(1), worst-case O(n)."</p>
                    )}
                    {demoBranch === 'partial' && (
                      <p>"It is very fast because lookups take O(1) constant time on average by passing keys through a hashing algorithm to get direct memory indices."</p>
                    )}
                    {demoBranch === 'ambiguous' && (
                      <p>"Hash maps are fast because in Python dictionaries or JavaScript objects you pass a key and it finds it instantly without searching."</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Side: Competency Evidence & Next Adaptive Question */}
              <div className="space-y-4 bg-slate-50 p-4 rounded-xl border border-slate-200">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-slate-800 uppercase tracking-wider text-[10px]">
                      Step 2: Real-time Rubric Update
                    </span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      demoBranch === 'strong' ? 'bg-emerald-100 text-emerald-800' :
                      demoBranch === 'partial' ? 'bg-blue-100 text-blue-800' : 'bg-amber-100 text-amber-800'
                    }`}>
                      {demoBranch === 'strong' ? 'Level 4 (Strong Demonstration)' :
                       demoBranch === 'partial' ? 'Level 2 (Partial Understanding)' : 'Level 1 (Limited Evidence)'}
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-500 ${
                        demoBranch === 'strong' ? 'w-11/12 bg-emerald-500' :
                        demoBranch === 'partial' ? 'w-1/2 bg-blue-500' : 'w-1/4 bg-amber-500'
                      }`}
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="font-bold text-indigo-700 uppercase tracking-wider text-[10px] block">
                    Step 3: Next Adaptive Question Generated
                  </span>
                  <div className="p-3 bg-white border border-indigo-200 rounded-xl space-y-2">
                    <p className="font-bold text-slate-900 text-[11px]">
                      {demoBranch === 'strong' && "How would you design a Least Recently Used (LRU) Cache supporting O(1) get and put operations?"}
                      {demoBranch === 'partial' && "You explained average lookup, but what happens when two distinct keys yield the identical index? Describe collision resolution techniques."}
                      {demoBranch === 'ambiguous' && "Could you walk through the step-by-step process of how a string key is mapped to an array bucket index in memory?"}
                    </p>
                    <div className="text-[10px] text-slate-500 bg-slate-50 p-2 rounded border border-slate-100">
                      <strong>Why this question:</strong>{' '}
                      {demoBranch === 'strong' && "Demonstrated hash map mechanics. Escalating difficulty to advanced cache composition."}
                      {demoBranch === 'partial' && "Candidate omitted collision handling. Surgical follow-up directly probes identified gap."}
                      {demoBranch === 'ambiguous' && "Answer was ambiguous. Clarification probe resolves underlying mechanical uncertainty."}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-3 bg-slate-100 border-t border-slate-200 text-center">
              <button
                onClick={() => handleLaunchScenario(demoBranch === 'strong' ? 'scenarioA' : demoBranch === 'partial' ? 'scenarioB' : 'scenarioC')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 transition cursor-pointer"
              >
                <span>Launch This Scenario in Live Interview Room</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 2. THE PROBLEM WITH TRADITIONAL INTERVIEWS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-md border border-rose-100">
            Current Industry Failure
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            The Problem with Traditional Interviews
          </h2>
          <p className="text-xs text-slate-500">
            Recruitment today swings between rigid scripted questionnaires and opaque black-box AI tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-9 h-9 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900">Fixed, Blind Question Lists</h3>
            <p className="text-slate-500 leading-relaxed">
              Scripted interviews ask the exact same questions regardless of whether the candidate already demonstrated mastery or struggled completely on fundamentals.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <Brain className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900">Black-Box Single AI Scores</h3>
            <p className="text-slate-500 leading-relaxed">
              Generic conversational bots output an unexplained number like "72%" without linking findings to concrete evidence, answer excerpts, or standardized rubrics.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
              <Eye className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900">Pseudoscientific Bias</h3>
            <p className="text-slate-500 leading-relaxed">
              Unreliable systems claim to detect "honesty" or "culture fit" from facial micro-expressions, gaze tracking, or vocal tone—introducing massive bias without scientific basis.
            </p>
          </div>
        </div>
      </section>

      {/* 3. HOW ADAPTIVE INTERVIEWING WORKS */}
      <section className="bg-slate-100 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-100">
              Adaptive Intelligence Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              How Adaptive Interviewing Works
            </h2>
            <p className="text-xs text-slate-500">
              A closed feedback loop connecting candidate answers to next-best-question priority.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
            {[
              { step: '01', title: 'Competency Planning', desc: 'Builds role-specific competency matrix before interview starts, weighted by importance.' },
              { step: '02', title: 'Answer Evidence Extraction', desc: 'Analyzes response against 0-4 rubric, identifying correct concepts and missing gaps.' },
              { step: '03', title: 'Question Priority Algorithm', desc: 'Calculates expected information gain and uncertainty to pick next surgical question.' },
              { step: '04', title: 'Recruiter Decision Support', desc: 'Compiles full evidence dossier with verbatim quotes and human override autonomy.' }
            ].map(s => (
              <div key={s.step} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
                <span className="text-xs font-extrabold text-blue-600 font-mono">{s.step}</span>
                <h3 className="font-bold text-slate-900 text-sm">{s.title}</h3>
                <p className="text-slate-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE FIVE INTELLIGENCE MODULES */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-100">
            System Capabilities
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            The Five Connected Intelligence Modules
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-xs">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold font-mono text-[10px]">MODULE 01</span>
            <h3 className="font-bold text-slate-900 text-sm">Question Generation & Adaptation</h3>
            <p className="text-slate-500 leading-relaxed">
              Dynamically escalates to Advanced problems or pivots to surgical gap probes based on normalized information gain.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-bold font-mono text-[10px]">MODULE 02</span>
            <h3 className="font-bold text-slate-900 text-sm">Real-Time Candidate Evaluation</h3>
            <p className="text-slate-500 leading-relaxed">
              Evaluates typed or speech responses against 0-4 criteria, linking scores directly to verbatim excerpts.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <span className="px-2 py-0.5 rounded bg-purple-50 text-purple-700 font-bold font-mono text-[10px]">MODULE 03</span>
            <h3 className="font-bold text-slate-900 text-sm">Interview Integrity Intelligence</h3>
            <p className="text-slate-500 leading-relaxed">
              Auditable browser events logged for human inspection. Non-punitive, explainable, and never triggers automated rejection.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <span className="px-2 py-0.5 rounded bg-amber-50 text-amber-700 font-bold font-mono text-[10px]">MODULE 04</span>
            <h3 className="font-bold text-slate-900 text-sm">Resume-to-Interview Skill Gap</h3>
            <p className="text-slate-500 leading-relaxed">
              Cross-references resume claims across 4 distinct states: Demonstrated, Claimed Unvalidated, Not Demonstrated, and Not Assessed.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <span className="px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 font-bold font-mono text-[10px]">MODULE 05</span>
            <h3 className="font-bold text-slate-900 text-sm">Candidate Decision Intelligence</h3>
            <p className="text-slate-500 leading-relaxed">
              Executive dossiers, radar comparisons, recommendation categories, and full human override governance.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-sm space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="px-2 py-0.5 rounded bg-white/20 text-white font-bold font-mono text-[10px]">DEMO READY</span>
              <h3 className="font-bold text-white text-sm">Competition-Ready MVP</h3>
              <p className="text-blue-100 text-[11px] leading-relaxed">
                Test the Junior Software Engineer scenario with real-time feedback loops and zero-config deterministic fallback.
              </p>
            </div>
            <Link
              to="/setup"
              className="inline-flex items-center gap-1 font-bold text-xs text-white hover:underline"
            >
              <span>Test Live MVP</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. RESPONSIBLE AI & SECURITY */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-md border border-emerald-500/20">
              Responsible AI & Privacy Safeguards
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Built for Trust, Explainability, and Candidate Fairness
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-300">
            <div className="space-y-2 p-4 rounded-xl bg-white/5 border border-white/10">
              <h3 className="font-bold text-white text-sm">1. Verbatim Traceability</h3>
              <p>Every competency rating cites the question asked and verbatim candidate excerpts. No scores are invented.</p>
            </div>
            <div className="space-y-2 p-4 rounded-xl bg-white/5 border border-white/10">
              <h3 className="font-bold text-white text-sm">2. Non-Punitive Integrity</h3>
              <p>Tab switches and visibility shifts are review indicators for humans. They do not automatically determine rejection.</p>
            </div>
            <div className="space-y-2 p-4 rounded-xl bg-white/5 border border-white/10">
              <h3 className="font-bold text-white text-sm">3. Human Override Autonomy</h3>
              <p>AI suggestions are decision support aids. Recruiters retain full authority to override ratings and record reasoning.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FINAL CALL TO ACTION */}
      <section className="text-center max-w-4xl mx-auto px-4 space-y-6">
        <h2 className="text-3xl font-extrabold text-slate-900">
          Ready to Experience Evidence-Driven Interviews?
        </h2>
        <p className="text-xs text-slate-500 max-w-xl mx-auto">
          Start an interview session, inspect real-time competency adaptation, and review the candidate decision intelligence dossier.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/setup"
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow-xs transition"
          >
            Start an Interview Now
          </Link>
          <Link
            to="/admin"
            className="px-6 py-3 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 font-semibold text-xs transition"
          >
            Open Recruiter Dashboard
          </Link>
        </div>
      </section>

    </div>
  );
}
