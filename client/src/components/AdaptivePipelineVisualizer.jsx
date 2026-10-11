import React from 'react';
import { ArrowRight, CheckCircle2, AlertCircle, Sparkles, Brain, Cpu, Target, Sliders } from 'lucide-react';

export function AdaptivePipelineVisualizer({ currentEvaluation, activeQuestion, isSubmitting }) {
  const steps = [
    {
      id: 'step1',
      num: '01',
      title: 'Candidate Answer',
      desc: isSubmitting ? 'Capturing response...' : 'Evidence captured',
      icon: Brain,
      active: true,
      color: 'border-blue-500 bg-blue-50/50 text-blue-700'
    },
    {
      id: 'step2',
      num: '02',
      title: 'Context Analysis',
      desc: 'Rubric & history matched',
      icon: Cpu,
      active: Boolean(currentEvaluation || isSubmitting),
      color: 'border-indigo-500 bg-indigo-50/50 text-indigo-700'
    },
    {
      id: 'step3',
      num: '03',
      title: 'Skill / Gap Detection',
      desc: currentEvaluation?.missingConcepts?.length > 0 
        ? `${currentEvaluation.missingConcepts.length} Gaps Flagged` 
        : currentEvaluation?.status === 'Demonstrated' 
        ? 'Mastery Verified' 
        : 'Evaluating gaps...',
      icon: AlertCircle,
      active: Boolean(currentEvaluation),
      color: currentEvaluation?.status === 'Demonstrated' 
        ? 'border-emerald-500 bg-emerald-50/50 text-emerald-700' 
        : 'border-amber-500 bg-amber-50/50 text-amber-700'
    },
    {
      id: 'step4',
      num: '04',
      title: 'Difficulty Selection',
      desc: activeQuestion?.difficulty 
        ? `${activeQuestion.difficulty.toUpperCase()} Calibrated` 
        : 'Calibrating depth...',
      icon: Sliders,
      active: Boolean(activeQuestion),
      color: 'border-purple-500 bg-purple-50/50 text-purple-700'
    },
    {
      id: 'step5',
      num: '05',
      title: 'Next Question',
      desc: 'Selected with Rationale',
      icon: Target,
      active: Boolean(activeQuestion),
      color: 'border-cyan-500 bg-cyan-50/50 text-cyan-700'
    }
  ];

  return (
    <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-100">
        <div>
          <span className="text-[10px] uppercase font-bold tracking-wider text-blue-600">
            Hackathon Module 01 Architecture
          </span>
          <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span>Question Generation & Adaptive Interview Pipeline</span>
          </h3>
        </div>

        <span className="text-[11px] font-mono text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
          Candidate Answer &rarr; Context &rarr; Skill Gap &rarr; Difficulty &rarr; Next Question
        </span>
      </div>

      {/* 5-Step Pipeline Grid */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2.5 pt-1">
        {steps.map((s, idx) => {
          const Icon = s.icon;
          return (
            <div 
              key={s.id} 
              className={`p-3 rounded-xl border transition-all duration-300 relative ${
                s.active ? s.color : 'border-slate-200 bg-slate-50 text-slate-400 opacity-60'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-mono font-bold tracking-wider">{s.num}</span>
                <Icon className="w-3.5 h-3.5" />
              </div>
              <h4 className="text-xs font-bold leading-snug">{s.title}</h4>
              <p className="text-[10px] text-slate-500 mt-1 truncate">{s.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
