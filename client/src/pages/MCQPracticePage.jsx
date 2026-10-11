import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  HelpCircle, 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  ArrowRight, 
  RotateCcw, 
  BookOpen, 
  ExternalLink, 
  Video, 
  FileText,
  Award,
  ChevronRight
} from 'lucide-react';
import { useAuth } from '../context/AuthContext.jsx';

export function MCQPracticePage() {
  const { user, recordActivity } = useAuth();

  const [categories] = useState([
    { id: 'all', label: 'All Categories' },
    { id: 'machine_learning', label: 'Machine Learning & AI' },
    { id: 'algorithms', label: 'Algorithms & DSA' },
    { id: 'system_design', label: 'System Design' },
    { id: 'sql_database', label: 'SQL Databases' },
    { id: 'frontend', label: 'Frontend Engineering' }
  ]);

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [mcqs, setMcqs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [evaluation, setEvaluation] = useState(null);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetchMCQs();
  }, [selectedCategory]);

  const fetchMCQs = async () => {
    setLoading(true);
    setEvaluation(null);
    setSelectedOption(null);
    setCurrentIndex(0);
    try {
      const url = selectedCategory === 'all' 
        ? '/api/practice/mcqs' 
        : `/api/practice/mcqs?category=${selectedCategory}`;
      const res = await fetch(url);
      const data = await res.json();
      if (data.success) {
        setMcqs(data.mcqs);
      }
    } catch (err) {
      console.error('Failed to load MCQs:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSelectOption = (idx) => {
    if (evaluation) return; // prevent changing after submit
    setSelectedOption(idx);
  };

  const handleSubmitAnswer = async () => {
    if (selectedOption === null || !currentQuestion) return;
    setSubmitting(true);
    try {
      const res = await fetch('/api/practice/mcqs/evaluate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: currentQuestion.id,
          selectedOptionIndex: selectedOption,
          userId: user?.id
        })
      });
      const data = await res.json();
      if (data.success && data.evaluation) {
        setEvaluation(data.evaluation);
        setScore(prev => ({
          correct: prev.correct + (data.evaluation.isCorrect ? 1 : 0),
          total: prev.total + 1
        }));
        if (recordActivity) {
          recordActivity({ questionsCount: 1, durationMinutes: 2, action: 'MCQ Practice' });
        }
      }
    } catch (err) {
      console.error('Evaluation error:', err);
    } finally {
      setSubmitting(false);
    }
  };

  const handleNext = () => {
    if (currentIndex < mcqs.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setEvaluation(null);
    }
  };

  const currentQuestion = mcqs[currentIndex];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold mb-2">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Skill Drills & Rubric Evaluation</span>
            </div>
            <h1 className="text-3xl font-extrabold text-white">MCQ Practice Arena</h1>
            <p className="text-slate-400 text-xs mt-1">
              Select questions across engineering tracks. Get instant rubric evaluation and targeted study links.
            </p>
          </div>

          {/* Score Counter */}
          <div className="p-4 rounded-2xl bg-slate-900 border border-white/10 flex items-center gap-4">
            <div>
              <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Session Score</div>
              <div className="text-2xl font-extrabold text-white">
                {score.correct} <span className="text-sm font-normal text-slate-500">/ {score.total}</span>
              </div>
            </div>
            <Award className="w-8 h-8 text-indigo-400" />
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition ${
                selectedCategory === cat.id
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-950/50'
                  : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Question Card */}
        {loading ? (
          <div className="p-12 text-center text-slate-400 rounded-3xl bg-slate-900/60 border border-white/10">
            Loading adaptive question drills...
          </div>
        ) : currentQuestion ? (
          <div className="p-8 rounded-3xl bg-slate-900/80 border border-white/10 backdrop-blur-xl shadow-2xl space-y-6">
            
            {/* Question Progress & Difficulty */}
            <div className="flex items-center justify-between text-xs">
              <span className="font-mono text-indigo-400 font-semibold">
                Question {currentIndex + 1} of {mcqs.length}
              </span>
              <span className={`px-2.5 py-0.5 rounded-full font-semibold text-[11px] border ${
                currentQuestion.difficulty === 'Hard'
                  ? 'bg-rose-500/10 text-rose-300 border-rose-500/30'
                  : currentQuestion.difficulty === 'Medium'
                  ? 'bg-amber-500/10 text-amber-300 border-amber-500/30'
                  : 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
              }`}>
                {currentQuestion.difficulty}
              </span>
            </div>

            {/* Question Prompt */}
            <h2 className="text-lg sm:text-xl font-bold text-white leading-relaxed">
              {currentQuestion.question}
            </h2>

            {/* Options */}
            <div className="space-y-3 pt-2">
              {currentQuestion.options.map((option, idx) => {
                let optionStyle = 'bg-slate-950/80 border-white/10 hover:border-slate-600 text-slate-200';
                
                if (evaluation) {
                  if (idx === evaluation.correctIndex) {
                    optionStyle = 'bg-emerald-950/40 border-emerald-500 text-emerald-200';
                  } else if (idx === selectedOption && !evaluation.isCorrect) {
                    optionStyle = 'bg-rose-950/40 border-rose-500 text-rose-200';
                  } else {
                    optionStyle = 'opacity-50 border-transparent bg-slate-950/40 text-slate-400';
                  }
                } else if (selectedOption === idx) {
                  optionStyle = 'bg-indigo-950/60 border-indigo-500 text-indigo-200 shadow-md shadow-indigo-950/50';
                }

                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelectOption(idx)}
                    className={`w-full p-4 rounded-2xl border text-left text-sm transition flex items-start gap-3.5 ${optionStyle}`}
                  >
                    <span className="w-6 h-6 rounded-lg bg-slate-800 text-slate-300 flex items-center justify-center text-xs font-mono font-bold flex-shrink-0 mt-0.5">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="flex-1 leading-snug">{option}</span>
                    {evaluation && idx === evaluation.correctIndex && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    )}
                    {evaluation && idx === selectedOption && !evaluation.isCorrect && (
                      <XCircle className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Action Bar */}
            <div className="pt-4 flex items-center justify-between border-t border-white/10">
              <div className="text-xs text-slate-500">
                {selectedOption === null && !evaluation && 'Select an option to evaluate'}
              </div>

              {!evaluation ? (
                <button
                  type="button"
                  onClick={handleSubmitAnswer}
                  disabled={selectedOption === null || submitting}
                  className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 text-white font-bold text-xs shadow-lg transition flex items-center gap-2"
                >
                  <span>{submitting ? 'Evaluating...' : 'Submit & Check Answer'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={currentIndex >= mcqs.length - 1}
                  className="px-6 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 disabled:opacity-40 text-white font-bold text-xs shadow-lg transition flex items-center gap-2"
                >
                  <span>{currentIndex >= mcqs.length - 1 ? 'Quiz Completed' : 'Next Question'}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Instant Evaluation Feedback & Study Links */}
            {evaluation && (
              <div className="mt-6 pt-6 border-t border-white/10 space-y-5 animate-in fade-in duration-300">
                <div className={`p-4 rounded-2xl border ${
                  evaluation.isCorrect 
                    ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-200' 
                    : 'bg-rose-500/10 border-rose-500/30 text-rose-200'
                }`}>
                  <div className="flex items-center gap-2 font-bold text-sm mb-1">
                    {evaluation.isCorrect ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span>Correct Answer! Well reasoned.</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-4 h-4 text-rose-400" />
                        <span>Incorrect Choice. Here is the verified rationale:</span>
                      </>
                    )}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {evaluation.explanation}
                  </p>
                </div>

                {/* AI Improvement Suggestions: Notes, Links, Classes */}
                {evaluation.recommendations && (
                  <div className="p-5 rounded-2xl bg-slate-950/80 border border-white/5 space-y-4">
                    <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Recommended Study Notes & Learning Classes</span>
                    </div>

                    {/* Notes */}
                    <div className="p-3.5 rounded-xl bg-slate-900 text-xs text-slate-300 leading-relaxed font-mono">
                      <div className="text-[11px] text-slate-400 font-bold mb-1 flex items-center gap-1">
                        <FileText className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Core Concept Note:</span>
                      </div>
                      {evaluation.recommendations.notes[0]}
                    </div>

                    {/* Links & Classes */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {evaluation.recommendations.documentationLinks[0] && (
                        <a
                          href={evaluation.recommendations.documentationLinks[0].url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-xl bg-slate-900 border border-white/5 hover:border-cyan-500/40 text-left transition group block"
                        >
                          <div className="text-[10px] font-semibold text-cyan-400 flex items-center gap-1">
                            <span>Documentation Link</span>
                            <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition" />
                          </div>
                          <div className="text-xs text-slate-200 font-medium mt-1 truncate">
                            {evaluation.recommendations.documentationLinks[0].title}
                          </div>
                        </a>
                      )}

                      {evaluation.recommendations.recommendedClasses[0] && (
                        <div className="p-3 rounded-xl bg-slate-900 border border-white/5 text-left">
                          <div className="text-[10px] font-semibold text-purple-400 flex items-center gap-1">
                            <Video className="w-3 h-3" />
                            <span>Recommended Class</span>
                          </div>
                          <div className="text-xs text-slate-200 font-medium mt-1 truncate">
                            {evaluation.recommendations.recommendedClasses[0].title}
                          </div>
                          <div className="text-[10px] text-slate-500 mt-0.5">
                            {evaluation.recommendations.recommendedClasses[0].platform}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}

          </div>
        ) : (
          <div className="p-12 text-center text-slate-400 rounded-3xl bg-slate-900/60 border border-white/10">
            No questions available for this category.
          </div>
        )}

      </div>
    </div>
  );
}
