import React from 'react';
import { Link } from 'react-router-dom';
import { 
  HelpCircle, 
  BookOpen, 
  ShieldCheck, 
  Sliders, 
  Cpu, 
  Scale, 
  CheckCircle2, 
  ChevronRight, 
  ArrowRight,
  Sparkles,
  FileText,
  AlertTriangle,
  Lightbulb
} from 'lucide-react';

export function HelpDocsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-10 text-slate-800">
      
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs text-slate-500">
        <Link to="/" className="hover:text-slate-800">Home</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-slate-900 font-medium">Documentation & System Architecture</span>
      </nav>

      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-100">
            System Guide & Architecture
          </span>
          <span className="text-xs text-slate-400">• Google Student Club Hackathon 2026</span>
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 mt-1">
          Adaptive Interview Intelligence (AII) Platform Guide
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          "Every Question Has a Purpose. Every Decision Has Evidence."
        </p>
      </div>

      {/* Quick Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2 text-xs">
          <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
            <Cpu className="w-4 h-4" />
          </div>
          <h3 className="font-bold text-slate-900 text-sm">Adaptive Feedback Loop</h3>
          <p className="text-slate-500 leading-relaxed">
            Every answer dynamically updates candidate competency evidence and steers the next question towards unresolved uncertainties.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2 text-xs">
          <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
            <Scale className="w-4 h-4" />
          </div>
          <h3 className="font-bold text-slate-900 text-sm">Responsible AI by Design</h3>
          <p className="text-slate-500 leading-relaxed">
            No single black-box scores. Strict refusal of pseudoscientific facial/emotion emotion tracking or algorithmic auto-rejection.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2 text-xs">
          <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
            <Sliders className="w-4 h-4" />
          </div>
          <h3 className="font-bold text-slate-900 text-sm">4-State Skill Taxonomy</h3>
          <p className="text-slate-500 leading-relaxed">
            Strictly separates Demonstrated, Claimed but Unvalidated, Not Demonstrated, and Not Assessed.
          </p>
        </div>
      </div>

      {/* 5 Core Intelligence Modules Breakdown */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2">
          The Five Intelligence Modules
        </h2>

        {/* Module 1 */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3 text-xs leading-relaxed">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded bg-blue-100 text-blue-800 font-bold text-[11px]">
              MODULE 01
            </span>
            <h3 className="font-bold text-slate-900 text-sm">Question Generation & Interview Adaptation</h3>
          </div>
          <p className="text-slate-600">
            Unlike static question lists or unconstrained conversational chatbots, our Adaptive Question Engine executes a transparent question-priority algorithm:
          </p>
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 font-mono text-[11px] text-blue-900">
            question_priority = (role_importance * evidence_uncertainty * assessment_need * expected_information_gain) - repetition_penalty - time_cost_penalty
          </div>
          <ul className="list-disc pl-5 space-y-1 text-slate-600">
            <li><strong>Strong Answer:</strong> Validates mastery $\rightarrow$ Difficulty escalates to Advanced architectural trade-offs.</li>
            <li><strong>Partially Correct Answer:</strong> Identifies missing concept $\rightarrow$ Fires a surgical follow-up investigating the exact gap.</li>
            <li><strong>Ambiguous Answer:</strong> High uncertainty $\rightarrow$ Fires a clarification probe before drawing conclusions.</li>
            <li><strong>Explainability Card:</strong> Displays explicit "Why this question was selected" metadata on every screen.</li>
          </ul>
        </div>

        {/* Module 2 */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3 text-xs leading-relaxed">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[11px]">
              MODULE 02
            </span>
            <h3 className="font-bold text-slate-900 text-sm">Real-Time Candidate Evaluation & Rubrics</h3>
          </div>
          <p className="text-slate-600">
            Answers are evaluated against a standardized 0–4 competency rubric:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 font-mono text-[11px]">
            <div className="p-2 bg-slate-50 border border-slate-200 rounded">0: No Evidence</div>
            <div className="p-2 bg-amber-50 border border-amber-200 rounded text-amber-900">1: Limited Evidence</div>
            <div className="p-2 bg-blue-50 border border-blue-200 rounded text-blue-900">2: Partial</div>
            <div className="p-2 bg-emerald-50 border border-emerald-200 rounded text-emerald-900">3: Competent</div>
            <div className="p-2 bg-emerald-100 border border-emerald-300 rounded text-emerald-950 font-bold">4: Strong</div>
          </div>
          <p className="text-slate-600">
            Ratings are tied directly to verbatim candidate excerpts. When evidence is insufficient, competencies are marked as "Insufficient evidence" rather than fabricating a score.
          </p>
        </div>

        {/* Module 3 */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3 text-xs leading-relaxed">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded bg-purple-100 text-purple-800 font-bold text-[11px]">
              MODULE 03
            </span>
            <h3 className="font-bold text-slate-900 text-sm">Interview Integrity Intelligence</h3>
          </div>
          <p className="text-slate-600">
            Monitors explicit, auditable browser events (e.g., Page Visibility API <code>visibilitychange: hidden</code>, window focus loss, or candidate-disclosed external references).
          </p>
          <div className="p-3.5 rounded-xl bg-purple-50/60 border border-purple-200 text-purple-950 font-medium">
            <strong>Key Safeguard:</strong> Integrity signals are operational review indicators for human recruiters. They are NEVER combined into competency scores and CANNOT automatically reject candidates.
          </div>
        </div>

        {/* Module 4 */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3 text-xs leading-relaxed">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded bg-amber-100 text-amber-800 font-bold text-[11px]">
              MODULE 04
            </span>
            <h3 className="font-bold text-slate-900 text-sm">Resume-to-Interview Skill Gap Intelligence</h3>
          </div>
          <p className="text-slate-600">
            Cross-references resume claims against live interview evidence across 4 distinct states:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-600">
            <li><strong className="text-emerald-700">DEMONSTRATED:</strong> Supported by substantive answer evidence.</li>
            <li><strong className="text-amber-700">CLAIMED BUT UNVALIDATED:</strong> Listed on resume, but has not yet been sufficiently tested in interview.</li>
            <li><strong className="text-rose-700">NOT DEMONSTRATED:</strong> Assessed via question, but evidence failed to meet required rubric level.</li>
            <li><strong className="text-slate-700">NOT ASSESSED:</strong> No adequate assessment has taken place (never penalized as failure).</li>
          </ul>
        </div>

        {/* Module 5 */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3 text-xs leading-relaxed">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded bg-indigo-100 text-indigo-800 font-bold text-[11px]">
              MODULE 05
            </span>
            <h3 className="font-bold text-slate-900 text-sm">Candidate Decision Intelligence</h3>
          </div>
          <p className="text-slate-600">
            Generates full-spectrum recruiter intelligence reports with evidence traceability, candidate comparison matrices, recommendation categories, and human override controls.
          </p>
        </div>
      </div>

      {/* Call to action */}
      <div className="p-6 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-base font-bold">Ready to test the live demonstration?</h3>
          <p className="text-xs text-slate-400 mt-0.5">Explore the Junior Software Engineer scenario with 3 distinct answer branches.</p>
        </div>
        <Link
          to="/setup"
          className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition"
        >
          Launch Demonstration
        </Link>
      </div>

    </div>
  );
}
