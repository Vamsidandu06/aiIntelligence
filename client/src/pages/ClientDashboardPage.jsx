import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Sparkles, 
  Clock, 
  HelpCircle, 
  Award, 
  Target, 
  Code2, 
  Database, 
  FileText, 
  Lightbulb, 
  Play, 
  ArrowRight, 
  TrendingUp, 
  CheckCircle2, 
  BookOpen, 
  ExternalLink, 
  Video, 
  Activity,
  User,
  Shield,
  Layers,
  ChevronRight
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  Radar,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip
} from 'recharts';
import { useAuth } from '../context/AuthContext.jsx';

export function ClientDashboardPage() {
  const navigate = useNavigate();
  const { user, refreshUser, isAuthenticated } = useAuth();

  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    refreshUser();
  }, [refreshUser]);

  // Candidate metrics (with safe fallbacks)
  const candidateName = user?.name || 'Alex Rivera';
  const totalHours = user?.totalHours !== undefined ? Number(user.totalHours).toFixed(1) : '14.2';
  const questionsSolved = user?.questionsSolved !== undefined ? user.questionsSolved : 48;
  const interviewsAttended = user?.interviewsAttended !== undefined ? user.interviewsAttended : 4;
  const readinessIndex = 88;

  // Radar chart data for competency mastery
  const competencyData = [
    { subject: 'Machine Learning', score: 94, fullMark: 100 },
    { subject: 'System Design', score: 82, fullMark: 100 },
    { subject: 'Data Structures', score: 90, fullMark: 100 },
    { subject: 'SQL & Data', score: 85, fullMark: 100 },
    { subject: 'Communication', score: 88, fullMark: 100 },
    { subject: 'Problem Solving', score: 92, fullMark: 100 }
  ];

  // Curated learning recommendations based on recent evaluations
  const learningRecommendations = [
    {
      id: 'rec_01',
      category: 'Machine Learning',
      badge: 'Leakage Prevention & Scaling',
      note: 'Always split data temporally or by entity before standard scaling to prevent test statistics from contaminating training weights.',
      docLink: { title: 'Scikit-Learn Evaluation Pitfalls', url: 'https://scikit-learn.org/stable/common_pitfalls.html' },
      course: { title: 'Fast.ai: Practical Deep Learning for Coders', platform: 'Fast.ai (Free)', duration: '7 Weeks' }
    },
    {
      id: 'rec_02',
      category: 'Algorithms & LeetCode',
      badge: 'Sliding Window & Hash Maps',
      note: 'Convert O(N^2) search loops to O(N) by storing intermediate complements in a Hash Map or maintaining monotonic two-pointer bounds.',
      docLink: { title: 'NeetCode 150 Master Roadmap', url: 'https://neetcode.io/roadmap' },
      course: { title: 'Abdul Bari Algorithms Series', platform: 'YouTube / University', duration: 'Comprehensive' }
    },
    {
      id: 'rec_03',
      category: 'System Design',
      badge: 'Distributed Caching & Sharding',
      note: 'Employ Consistent Hashing with virtual vnodes to maintain balanced partition distributions when cache nodes scale dynamically.',
      docLink: { title: 'System Design Primer (Donne Martin)', url: 'https://github.com/donnemartin/system-design-primer' },
      course: { title: 'ByteByteGo System Design Blueprint', platform: 'Alex Xu ByteByteGo', duration: 'Self-Paced' }
    },
    {
      id: 'rec_04',
      category: 'SQL & Query Optimization',
      badge: 'Window Functions & Indexing',
      note: 'Use DENSE_RANK() OVER (PARTITION BY dept_id ORDER BY salary DESC) to compute top earners without rank skipping on ties.',
      docLink: { title: 'PostgreSQL Window Function Docs', url: 'https://www.postgresql.org/docs/current/tutorial-window.html' },
      course: { title: 'Mode Analytics: Advanced SQL Tutorial', platform: 'Mode (Interactive)', duration: '12 Modules' }
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Top Banner / Hero Header */}
      <div className="relative border-b border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 pt-8 pb-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Candidate Intelligence & Practice Arena</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                Welcome back, {candidateName}
              </h1>
              <p className="text-slate-400 text-sm mt-1 max-w-2xl">
                Track your active interview metrics, practice coding and MCQs with instant feedback, and sharpen your skills with adaptive AI reasoning.
              </p>
            </div>

            {/* Quick Action: Start Adaptive Interview */}
            <div className="flex items-center gap-3">
              <Link
                to="/interview"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-sm shadow-lg shadow-cyan-950/50 hover:shadow-cyan-500/20 transition group"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>Start Live Adaptive Interview</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </Link>
            </div>
          </div>

          {/* Core HUD Metric Cards (Requested in Prompt) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {/* Interviews Attended */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-white/10 backdrop-blur-md hover:border-cyan-500/40 transition">
              <div className="flex items-center justify-between text-slate-400 mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider">Interviews Attended</span>
                <Target className="w-4 h-4 text-cyan-400" />
              </div>
              <div className="text-3xl font-extrabold text-white">{interviewsAttended}</div>
              <div className="text-xs text-cyan-400/80 mt-1 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                <span>Full-Screen Proctored Sessions</span>
              </div>
            </div>

            {/* Questions Solved */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-white/10 backdrop-blur-md hover:border-cyan-500/40 transition">
              <div className="flex items-center justify-between text-slate-400 mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider">Questions Solved</span>
                <HelpCircle className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="text-3xl font-extrabold text-white">{questionsSolved}</div>
              <div className="text-xs text-emerald-400/80 mt-1 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                <span>MCQs, Coding & Live Questions</span>
              </div>
            </div>

            {/* Time Spent (Hours) */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-white/10 backdrop-blur-md hover:border-cyan-500/40 transition">
              <div className="flex items-center justify-between text-slate-400 mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider">Practice Time Spent</span>
                <Clock className="w-4 h-4 text-amber-400" />
              </div>
              <div className="text-3xl font-extrabold text-white">{totalHours} <span className="text-lg font-normal text-slate-400">Hours</span></div>
              <div className="text-xs text-amber-400/80 mt-1 flex items-center gap-1">
                <Activity className="w-3 h-3" />
                <span>Live Active Heartbeat Tracked</span>
              </div>
            </div>

            {/* Role Alignment Index */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-white/10 backdrop-blur-md hover:border-cyan-500/40 transition">
              <div className="flex items-center justify-between text-slate-400 mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider">Role Alignment Index</span>
                <Award className="w-4 h-4 text-purple-400" />
              </div>
              <div className="text-3xl font-extrabold text-white">{readinessIndex}%</div>
              <div className="text-xs text-purple-400/80 mt-1 flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                <span>Lead ML & System Mastery</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        
        {/* Practice Modules Grid (6 Modules Requested) */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Layers className="w-5 h-5 text-cyan-400" />
                <span>Interactive Practice Suites</span>
              </h2>
              <p className="text-slate-400 text-xs mt-0.5">
                Every practice module includes instant rubric evaluation, test runner execution, and recommended study links.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            
            {/* Card 1: Adaptive Live AI Interview */}
            <Link
              to="/interview"
              className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-cyan-950/40 border border-cyan-500/30 hover:border-cyan-400 transition group relative overflow-hidden"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition flex items-center justify-between">
                <span>Adaptive Live AI Interview</span>
                <ChevronRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition" />
              </h3>
              <p className="text-slate-400 text-xs mt-2 leading-relaxed">
                Full-screen proctored arena with 3D AI Hologram, live webcam, voice dictation, and questions shaped dynamically by previous answers.
              </p>
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-2 text-[11px] font-semibold text-cyan-400">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Problem Statement 03 Core Engine</span>
              </div>
            </Link>

            {/* Card 2: MCQ Skill Drills */}
            <Link
              to="/practice/mcq"
              className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-indigo-950/40 border border-indigo-500/30 hover:border-indigo-400 transition group relative overflow-hidden"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-300 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <HelpCircle className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition flex items-center justify-between">
                <span>MCQ Skill Drills</span>
                <ChevronRight className="w-4 h-4 text-indigo-400 group-hover:translate-x-1 transition" />
              </h3>
              <p className="text-slate-400 text-xs mt-2 leading-relaxed">
                Categorized multiple choice drills across ML, System Design, DSA, and SQL. Instant rationale and custom study notes.
              </p>
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-2 text-[11px] font-semibold text-indigo-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Instant Rubric Evaluation</span>
              </div>
            </Link>

            {/* Card 3: LeetCode Coding Arena */}
            <Link
              to="/practice/coding"
              className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-emerald-950/40 border border-emerald-500/30 hover:border-emerald-400 transition group relative overflow-hidden"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition flex items-center justify-between">
                <span>LeetCode Coding Arena</span>
                <ChevronRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition" />
              </h3>
              <p className="text-slate-400 text-xs mt-2 leading-relaxed">
                Easy, Medium, Hard algorithmic challenges. Live JavaScript & Python code execution, sandbox test assertions, and runtime tracking.
              </p>
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-2 text-[11px] font-semibold text-emerald-400">
                <Code2 className="w-3.5 h-3.5" />
                <span>Multi-Tier Test Series</span>
              </div>
            </Link>

            {/* Card 4: Frontend & SQL Query Sandbox */}
            <Link
              to="/practice/query"
              className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-amber-950/40 border border-amber-500/30 hover:border-amber-400 transition group relative overflow-hidden"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition flex items-center justify-between">
                <span>Frontend & SQL Sandbox</span>
                <ChevronRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition" />
              </h3>
              <p className="text-slate-400 text-xs mt-2 leading-relaxed">
                Live interactive component preview playground and SQL relational query engine with schema visualization and execution plans.
              </p>
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-2 text-[11px] font-semibold text-amber-400">
                <Database className="w-3.5 h-3.5" />
                <span>Schema Visualizer & Results Grid</span>
              </div>
            </Link>

            {/* Card 5: AI Resume Builder */}
            <Link
              to="/resume-builder"
              className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-rose-950/40 border border-rose-500/30 hover:border-rose-400 transition group relative overflow-hidden"
            >
              <div className="w-12 h-12 rounded-xl bg-rose-500/20 text-rose-300 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-rose-300 transition flex items-center justify-between">
                <span>AI Resume Builder & Optimizer</span>
                <ChevronRight className="w-4 h-4 text-rose-400 group-hover:translate-x-1 transition" />
              </h3>
              <p className="text-slate-400 text-xs mt-2 leading-relaxed">
                Build an ATS-optimized tech resume. Transform raw bullet points into Google XYZ metrics and launch live interviews directly.
              </p>
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-2 text-[11px] font-semibold text-rose-400">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Google XYZ Formula Enhancer</span>
              </div>
            </Link>

            {/* Card 6: Interview Tips & Playbooks */}
            <Link
              to="/interview-tips"
              className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-purple-950/40 border border-purple-500/30 hover:border-purple-400 transition group relative overflow-hidden"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition flex items-center justify-between">
                <span>Interview Playbooks & Tips</span>
                <ChevronRight className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition" />
              </h3>
              <p className="text-slate-400 text-xs mt-2 leading-relaxed">
                Master the STAR behavioral framework, 4-step System Design blueprint, and proven salary negotiation scripts.
              </p>
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-2 text-[11px] font-semibold text-purple-400">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Curated FAANG Strategies</span>
              </div>
            </Link>
          </div>
        </div>

        {/* Competency Mastery Radar & Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 p-6 rounded-2xl bg-slate-900/60 border border-white/10 backdrop-blur-md">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-cyan-400" />
                <span>Competency Radar & Skill Proficiency</span>
              </h3>
              <span className="text-xs text-slate-400">Continuously Calibrated</span>
            </div>
            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={competencyData}>
                  <PolarGrid stroke="#334155" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 11 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#475569" />
                  <Radar name="Demonstrated Score" dataKey="score" stroke="#06b6d4" fill="#06b6d4" fillOpacity={0.4} />
                  <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px' }} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 backdrop-blur-md flex flex-col justify-between">
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2 mb-3">
                <Award className="w-4 h-4 text-amber-400" />
                <span>Skill Gap & Mastery Summary</span>
              </h3>
              <p className="text-xs text-slate-400 mb-4">
                Based on your recent adaptive answers and code evaluations:
              </p>
              
              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs">
                  <div className="font-semibold text-emerald-300">Strongest Demonstrated Competency</div>
                  <div className="text-slate-300 mt-0.5">Machine Learning (94%) — Strong mastery of training pipelines and metrics.</div>
                </div>

                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs">
                  <div className="font-semibold text-amber-300">Recommended Growth Area</div>
                  <div className="text-slate-300 mt-0.5">System Design (82%) — Deepen consistent hashing & database sharding knowledge.</div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10">
              <Link
                to="/decision"
                className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 text-xs font-semibold flex items-center justify-center gap-2 transition"
              >
                <span>View Full Module 05 Recruiter Dossier</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Personalized Learning Recommendations & Notes (Requested in Prompt) */}
        <div className="p-8 rounded-3xl bg-slate-900/80 border border-white/10 backdrop-blur-xl">
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-2">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Targeted AI Improvement Engine</span>
            </div>
            <h2 className="text-2xl font-bold text-white">
              Recommended Study Notes, Documentation & Classes
            </h2>
            <p className="text-slate-400 text-xs mt-1">
              Based on your evaluation gaps, our AI engine generated these high-yield notes, official docs, and verified course links.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {learningRecommendations.map((item) => (
              <div key={item.id} className="p-5 rounded-2xl bg-slate-950/70 border border-white/5 space-y-4 hover:border-cyan-500/30 transition">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-cyan-400">{item.category}</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-800 text-[11px] font-medium text-slate-300 border border-white/5">
                    {item.badge}
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900 border border-white/5">
                  <div className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 mb-1 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Essential Cheat Sheet Takeaway:</span>
                  </div>
                  <div className="text-xs text-slate-200 leading-relaxed font-mono">
                    {item.note}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <a
                    href={item.docLink.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-900/90 border border-white/5 hover:border-cyan-500/40 text-left transition group block"
                  >
                    <div className="text-[10px] font-semibold text-cyan-400 flex items-center gap-1">
                      <span>Official Documentation</span>
                      <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition" />
                    </div>
                    <div className="text-xs text-slate-300 font-medium mt-1 truncate">
                      {item.docLink.title}
                    </div>
                  </a>

                  <div className="p-3 rounded-xl bg-slate-900/90 border border-white/5 text-left">
                    <div className="text-[10px] font-semibold text-purple-400 flex items-center gap-1">
                      <Video className="w-3 h-3" />
                      <span>Recommended Class</span>
                    </div>
                    <div className="text-xs text-slate-300 font-medium mt-1 truncate">
                      {item.course.title}
                    </div>
                    <div className="text-[10px] text-slate-500 mt-0.5">{item.course.platform} • {item.course.duration}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
