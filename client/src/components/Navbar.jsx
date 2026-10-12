import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Sparkles, 
  Menu, 
  X, 
  Target, 
  FileCheck2, 
  Code2, 
  HelpCircle, 
  Database, 
  LogOut, 
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
  const { interview } = useInterview();
  const { user, logout } = useAuth();
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [practiceDropdownOpen, setPracticeDropdownOpen] = useState(false);

  // Global Candidate Quick-Search
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searchOpen, setSearchOpen] = useState(false);

  // Close mobile drawer on route navigation
  useEffect(() => {
    setMobileMenuOpen(false);
    setPracticeDropdownOpen(false);
  }, [location.pathname]);

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

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  // Streamlined primary links (Decision Dossier & Integrity & Pitch Deck removed per user request)
  const recruiterLinks = [
    { name: 'Dashboard', path: '/admin', icon: Briefcase },
    { name: 'Setup & Matrix', path: '/setup', icon: Target },
    { name: 'Evidence', path: '/competency', icon: Layers },
    { name: 'Skill Gaps', path: '/claims', icon: FileCheck2 },
    { name: 'Compare', path: '/compare', icon: SlidersHorizontal }
  ];

  const practiceItems = [
    { name: 'MCQ Skill Drills', path: '/practice/mcq', icon: HelpCircle, desc: 'Instant evaluation & notes' },
    { name: 'Coding Arena', path: '/practice/coding', icon: Code2, desc: '100+ multi-language challenges' },
    { name: 'SQL Sandbox', path: '/practice/query', icon: Database, desc: 'Interactive relational runner' }
  ];

  const isActive = (path) => {
    if (path.includes('?')) {
      return location.pathname + location.search === path;
    }
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 text-slate-800 shadow-xs overflow-x-clip">
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-2 sm:gap-4">
          
          {/* Logo & Brand - Adaptive between Mobile & PC */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 shrink-0 group min-w-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-xs group-hover:bg-blue-700 transition shrink-0">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <div className="min-w-0">
              <div className="font-extrabold text-sm sm:text-base text-slate-900 tracking-tight truncate flex items-center gap-1">
                <span>Adaptive Interview</span> <span className="text-blue-600">Intelligence</span>
              </div>
              <span className="hidden sm:block text-[10px] text-slate-500 tracking-normal truncate font-medium">
                Every Question Has a Purpose. Every Decision Has Evidence.
              </span>
            </div>
          </Link>

          {/* Desktop Search Bar - gracefully hides if screen space shrinks */}
          <div className="hidden lg:block relative w-44 xl:w-56 shrink-0">
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                value={searchQuery}
                onFocus={() => setSearchOpen(true)}
                onBlur={() => setTimeout(() => setSearchOpen(false), 250)}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search candidates..."
                className="w-full pl-8 pr-3 py-1.5 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>

            {/* Live Search Results Dropdown */}
            {searchOpen && searchResults.length > 0 && (
              <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl border border-slate-200 shadow-xl p-2 space-y-1 z-50 text-xs">
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
          <nav className="hidden lg:flex items-center gap-1 shrink-0">
            {recruiterLinks.map((link) => {
              const Icon = link.icon;
              const active = isActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-semibold transition ${
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
          </nav>

          {/* Right Action: User Authentication / Profile */}
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            {user ? (
              <div className="flex items-center gap-2">
                <Link
                  to="/admin"
                  className="flex items-center gap-2 p-1 pl-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition"
                >
                  <span className="text-xs font-bold text-slate-800 max-w-[90px] truncate">{user.name || 'Recruiter'}</span>
                  <div className="w-7 h-7 rounded-lg bg-blue-600 text-white font-bold flex items-center justify-center text-xs">
                    {(user.name || 'R').slice(0, 1).toUpperCase()}
                  </div>
                </Link>
                <button
                  type="button"
                  onClick={handleLogout}
                  title="Sign out"
                  className="p-1.5 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-400 hover:text-rose-600 transition cursor-pointer"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-1.5">
                <Link
                  to="/login"
                  className="px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition shadow-2xs"
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

          {/* Mobile Menu Button - Fits perfectly within right boundary */}
          <div className="flex lg:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer - Fully responsive & bounded within viewport */}
      {mobileMenuOpen && (
        <div className="lg:hidden w-full bg-white border-b border-slate-200 px-4 py-4 space-y-3 text-xs animate-in slide-in-from-top-2 duration-150 shadow-lg">
          
          {/* Mobile Search */}
          <div className="relative w-full">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search candidates, skills..."
              className="w-full pl-8 pr-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-hidden"
            />
          </div>

          {/* Navigation Links Grid */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            {recruiterLinks.map((link) => {
              const Icon = link.icon;
              const active = isActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`p-2.5 rounded-xl border font-semibold flex items-center gap-2 transition ${
                    active 
                      ? 'bg-blue-50 text-blue-700 border-blue-200' 
                      : 'border-slate-200 bg-slate-50 text-slate-800 hover:bg-slate-100'
                  }`}
                >
                  <Icon className="w-4 h-4 text-blue-600 shrink-0" />
                  <span className="truncate">{link.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Practice Suites in Mobile */}
          <div className="pt-2 border-t border-slate-100">
            <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1.5">Candidate Practice Suites</span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5">
              {practiceItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg bg-slate-50 hover:bg-blue-50 text-slate-700 font-semibold text-xs flex items-center gap-2 border border-slate-100"
                >
                  <item.icon className="w-3.5 h-3.5 text-blue-600" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* User Account / Sign In in Mobile */}
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
            {user ? (
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-blue-600 text-white font-bold flex items-center justify-center text-xs">
                    {(user.name || 'R').slice(0, 1).toUpperCase()}
                  </div>
                  <span className="font-bold text-slate-800">{user.name || 'Recruiter'}</span>
                </div>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="px-3 py-1.5 rounded-xl bg-slate-100 text-slate-600 hover:text-rose-600 font-semibold text-xs"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2 w-full">
                <Link
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 text-center py-2 rounded-xl bg-blue-600 text-white font-bold text-xs"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 text-center py-2 rounded-xl border border-slate-200 text-slate-700 font-bold text-xs"
                >
                  Register
                </Link>
              </div>
            )}
          </div>

        </div>
      )}
    </header>
  );
}
