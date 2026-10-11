import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Sparkles, 
  BarChart3, 
  ShieldCheck, 
  FileText, 
  Settings, 
  Play, 
  Zap, 
  History,
  CheckCircle2,
  Menu,
  X,
  Target,
  FileCheck2,
  Award,
  Code2,
  HelpCircle,
  Database,
  Lightbulb,
  User,
  LogOut,
  Clock,
  ChevronDown,
  Search,
  Briefcase,
  SlidersHorizontal,
  Layers
} from 'lucide-react';
import { useSettings } from '../context/SettingsContext.jsx';
import { useInterview } from '../context/InterviewContext.jsx';
import { useAuth } from '../context/AuthContext.jsx';
import { api } from '../api/client.js';

export function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { settings } = useSettings();
  const { interview, loadInterview } = useInterview();
  const { user, isAdmin, isAuthenticated, logout } = useAuth();
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [practiceDropdownOpen, setPracticeDropdownOpen] = useState(false);
  const [seedingDemo, setSeedingDemo] = useState(false);

  // Global Candidate Quick-Search
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }
    const timer = setTimeout(async () => {
      try {
        const res = await api.getCandidates({ search: searchQuery });
        setSearchResults(res.candidates || []);
      } catch (err) {
        console.error('Search error:', err);
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const handleRunDemoScenario = async (scenario) => {
    try {
      setSeedingDemo(true);
      const res = await api.seedDemoScenario({ scenario, role: 'junior' });
      await loadInterview(res.interviewId);
      navigate(`/interview?id=${res.interviewId}`);
    } catch (err) {
      alert(`Demo seeding failed: ${err.message}`);
    } finally {
      setSeedingDemo(false);
      setMobileMenuOpen(false);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const currentInterviewId = interview?.id;

  const recruiterLinks = [
    { name: 'Dashboard', path: '/admin', icon: Briefcase },
    { name: 'Setup & Matrix', path: '/setup', icon: Target },
    { name: 'Evidence', path: '/competency', icon: Layers },
    { name: 'Skill Gaps', path: '/claims', icon: FileCheck2 },
    { name: 'Integrity', path: '/integrity', icon: ShieldCheck },
    { name: 'Compare', path: '/compare', icon: SlidersHorizontal },
    { name: 'Decision Dossier', path: '/decision', icon: Award }
  ];

  const practiceItems = [
    { name: 'MCQ Skill Drills', path: '/practice/mcq', icon: HelpCircle, desc: 'Instant evaluation & study notes' },
    { name: 'LeetCode Coding Arena', path: '/practice/coding', icon: Code2, desc: 'Easy, Medium, Hard problem catalog' },
    { name: 'Frontend & SQL Sandbox', path: '/practice/query', icon: Database, desc: 'Live SQL relational runner' }
  ];

  const isActive = (path) => {
    if (path.includes('?')) {
      return location.pathname + location.search === path;
    }
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 text-slate-800 shadow-2xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Logo & Brand */}
          <Link to="/" className="flex items-center gap-3 shrink-0 group">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-xs group-hover:bg-blue-700 transition">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-extrabold text-base text-slate-900 tracking-tight flex items-center gap-1.5">
                Adaptive Interview <span className="text-blue-600 font-bold">Intelligence</span>
              </span>
              <span className="text-[10px] text-slate-500 tracking-wider block font-medium">
                Every Question Has a Purpose. Every Decision Has Evidence.
              </span>
            </div>
          </Link>

          {/* Global Search Bar */}
          <div className="hidden md:block relative max-w-xs w-full">
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                value={searchQuery}
                onFocus={() => setSearchOpen(true)}
                onBlur={() => setTimeout(() => setSearchOpen(false), 250)}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search candidates, skills, roles..."
                className="w-full pl-8 pr-3 py-1.5 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>

            {/* Live Search Results Dropdown */}
            {searchOpen && searchResults.length > 0 && (
              <div className="absolute top-full left-0 mt-1 w-full bg-white rounded-xl border border-slate-200 shadow-lg p-2 space-y-1 z-50 text-xs">
                <div className="px-2 py-1 text-[10px] uppercase font-bold text-slate-400">Candidates Found</div>
                {searchResults.map(c => (
                  <Link
                    key={c.id}
                    to={`/candidates/${c.id}`}
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 text-slate-700 hover:text-blue-600 transition"
                  >
                    <div>
                      <span className="font-semibold block">{c.name}</span>
                      <span className="text-[10px] text-slate-400">{c.targetRole}</span>
                    </div>
                    <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                      {c.status}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1">
            {recruiterLinks.map((link) => {
              const Icon = link.icon;
              const active = isActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-semibold transition ${
                    active
                      ? 'bg-blue-50 text-blue-700 border border-blue-200 shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${active ? 'text-blue-600' : 'text-slate-400'}`} />
                  <span>{link.name}</span>
                </Link>
              );
            })}

            {/* Practice Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setPracticeDropdownOpen(!practiceDropdownOpen)}
                onBlur={() => setTimeout(() => setPracticeDropdownOpen(false), 200)}
                className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition cursor-pointer"
              >
                <Code2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Practice</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {practiceDropdownOpen && (
                <div className="absolute top-full right-0 mt-1 w-60 rounded-2xl bg-white border border-slate-200 shadow-xl p-2 space-y-1 z-50">
                  {practiceItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.name}
                        to={item.path}
                        onClick={() => setPracticeDropdownOpen(false)}
                        className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-50 transition text-left"
                      >
                        <Icon className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <div>
                          <div className="text-xs font-bold text-slate-800">{item.name}</div>
                          <div className="text-[10px] text-slate-400">{item.desc}</div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <Link
              to="/help"
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            >
              <HelpCircle className="w-3.5 h-3.5 text-slate-400" />
              <span>Docs</span>
            </Link>

            <Link
              to="/presentation"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200 transition shadow-2xs"
            >
              <Award className="w-3.5 h-3.5 text-blue-600" />
              <span>Pitch Deck</span>
            </Link>
          </nav>

          {/* Right Action: 3 Demo Branch Triggers & Profile */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Turnkey 3-Branch Scenario Triggers (Section 16) */}
            <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs">
              <span className="px-1.5 text-slate-500 text-[10px] font-bold flex items-center gap-1">
                <Zap className="w-3 h-3 text-amber-500 fill-amber-500" /> Demo:
              </span>
              <button
                onClick={() => handleRunDemoScenario('scenarioA')}
                disabled={seedingDemo}
                title="Scenario A: Strong answer -> Escalates difficulty to advanced cache design"
                className="px-2 py-0.5 rounded-lg bg-white hover:bg-emerald-50 text-emerald-800 border border-slate-200 font-semibold transition text-[10px] cursor-pointer"
              >
                A: Strong
              </button>
              <button
                onClick={() => handleRunDemoScenario('scenarioB')}
                disabled={seedingDemo}
                title="Scenario B: Incomplete answer -> Fires surgical follow-up on collision handling"
                className="ml-1 px-2 py-0.5 rounded-lg bg-white hover:bg-blue-50 text-blue-800 border border-slate-200 font-semibold transition text-[10px] cursor-pointer"
              >
                B: Partial
              </button>
              <button
                onClick={() => handleRunDemoScenario('scenarioC')}
                disabled={seedingDemo}
                title="Scenario C: Ambiguous answer -> Fires clarification request on internal mechanics"
                className="ml-1 px-2 py-0.5 rounded-lg bg-white hover:bg-amber-50 text-amber-800 border border-slate-200 font-semibold transition text-[10px] cursor-pointer"
              >
                C: Ambiguous
              </button>
            </div>

            {/* Profile Avatar & Sign Out */}
            {user ? (
              <div className="flex items-center gap-2">
                <Link
                  to="/admin"
                  className="flex items-center gap-2 p-1 pl-2 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition"
                >
                  <span className="text-xs font-bold text-slate-800 max-w-[100px] truncate">{user.name || 'Recruiter'}</span>
                  <div className="w-7 h-7 rounded-lg bg-blue-600 text-white font-bold flex items-center justify-center text-xs">
                    {(user.name || 'R').slice(0, 1).toUpperCase()}
                  </div>
                </Link>
                <button
                  onClick={handleLogout}
                  title="Sign out"
                  className="p-1.5 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-400 hover:text-rose-600 transition cursor-pointer"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link
                  to="/login"
                  className="px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition shadow-2xs"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="px-3 py-1.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 font-semibold text-xs transition"
                >
                  Register
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex xl:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-600 hover:bg-slate-100"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-3 text-xs">
          <div className="grid grid-cols-2 gap-2">
            {recruiterLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-xl border border-slate-200 bg-slate-50 font-semibold text-slate-800"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
            <span className="font-bold text-slate-500">Run Demo:</span>
            <div className="flex gap-1.5">
              <button
                onClick={() => handleRunDemoScenario('scenarioA')}
                className="px-2 py-1 rounded-lg bg-emerald-50 text-emerald-800 font-semibold text-[11px]"
              >
                Branch A
              </button>
              <button
                onClick={() => handleRunDemoScenario('scenarioB')}
                className="px-2 py-1 rounded-lg bg-blue-50 text-blue-800 font-semibold text-[11px]"
              >
                Branch B
              </button>
              <button
                onClick={() => handleRunDemoScenario('scenarioC')}
                className="px-2 py-1 rounded-lg bg-amber-50 text-amber-800 font-semibold text-[11px]"
              >
                Branch C
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
