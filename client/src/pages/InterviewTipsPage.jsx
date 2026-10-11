import React, { useState, useEffect } from 'react';
import { 
  Lightbulb, 
  BookOpen, 
  Layers, 
  MessageSquare, 
  DollarSign, 
  Code2, 
  CheckCircle2, 
  Sparkles, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';

export function InterviewTipsPage() {
  const [tips, setTips] = useState([]);
  const [openTipId, setOpenTipId] = useState('tip_star');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTips();
  }, []);

  const fetchTips = async () => {
    try {
      const res = await fetch('/api/resume-builder/interview-tips');
      const data = await res.json();
      if (data.success) {
        setTips(data.tips);
      }
    } catch (err) {
      console.error('Failed to load interview tips:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="border-b border-white/10 pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold mb-2">
            <Lightbulb className="w-3.5 h-3.5" />
            <span>FAANG & Top Tech Preparation Playbooks</span>
          </div>
          <h1 className="text-3xl font-extrabold text-white">Interview Intelligence & Tips</h1>
          <p className="text-slate-400 text-xs mt-1">
            Proven frameworks for behavioral questions, system design architecture, coding interviews, and salary negotiation.
          </p>
        </div>

        {/* Playbooks Accordion */}
        <div className="space-y-4">
          {tips.map((tip) => {
            const isOpen = openTipId === tip.id;
            return (
              <div 
                key={tip.id}
                className="rounded-3xl bg-slate-900/80 border border-white/10 backdrop-blur-xl overflow-hidden transition"
              >
                <button
                  type="button"
                  onClick={() => setOpenTipId(isOpen ? null : tip.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-slate-800/40 transition"
                >
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold text-purple-400 uppercase tracking-wider">
                      {tip.category}
                    </span>
                    <h2 className="text-lg font-bold text-white flex items-center gap-2">
                      <span>{tip.title}</span>
                    </h2>
                    <p className="text-xs text-slate-400">{tip.summary}</p>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-800 text-slate-300">
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="p-6 pt-0 border-t border-white/5 space-y-6 animate-in fade-in">
                    
                    {/* Steps / Phases */}
                    <div className="space-y-3 pt-4">
                      {tip.steps.map((st, idx) => (
                        <div key={idx} className="p-4 rounded-2xl bg-slate-950/70 border border-white/5 space-y-1">
                          <div className="font-bold text-cyan-300 text-xs flex items-center gap-2">
                            <span className="w-5 h-5 rounded-md bg-cyan-950 text-cyan-400 flex items-center justify-center font-mono text-[11px]">
                              {idx + 1}
                            </span>
                            <span>{st.label}</span>
                          </div>
                          <div className="text-xs text-slate-300 pl-7 leading-relaxed">
                            {st.detail}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Pro Tip */}
                    {tip.proTip && (
                      <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs space-y-1">
                        <div className="font-bold text-amber-300 flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>Staff Engineer Pro-Tip:</span>
                        </div>
                        <div className="text-slate-300 leading-relaxed">
                          {tip.proTip}
                        </div>
                      </div>
                    )}

                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Launch Interview CTA */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-cyan-950/40 to-slate-900 border border-cyan-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-white">Ready to test these techniques with AI?</h3>
            <p className="text-xs text-slate-400 mt-1">
              Launch our full-screen adaptive interview arena with live proctoring and real-time voice feedback.
            </p>
          </div>
          <Link
            to="/interview"
            className="px-6 py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-lg transition flex items-center justify-center gap-2 flex-shrink-0"
          >
            <span>Start Practice Arena</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
