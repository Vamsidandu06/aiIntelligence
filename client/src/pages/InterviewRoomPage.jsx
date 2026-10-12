import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import { 
  Sparkles, 
  Send, 
  Clock, 
  Target, 
  Zap, 
  CheckCircle2, 
  AlertCircle, 
  FileText, 
  HelpCircle, 
  Loader2, 
  Mic, 
  MicOff,
  ChevronRight, 
  ShieldAlert, 
  ArrowRight,
  Info,
  Brain,
  Activity,
  Maximize2,
  Minimize2,
  FileCheck2,
  Camera,
  UserCheck,
  Volume2,
  RotateCcw,
  GraduationCap,
  Briefcase,
  AlertTriangle,
  BookOpen,
  ExternalLink,
  Code2
} from 'lucide-react';
import { useInterview } from '../context/InterviewContext.jsx';
import { WhyThisQuestionCard } from '../components/WhyThisQuestionCard.jsx';
import { TimerDisplay } from '../components/TimerDisplay.jsx';
import { StatusBadge } from '../components/StatusBadge.jsx';
import { Skeleton } from '../components/Skeleton.jsx';
import { AudioWaveform } from '../components/AudioWaveform.jsx';
import { AdaptivePipelineVisualizer } from '../components/AdaptivePipelineVisualizer.jsx';
import { CandidateWebcam } from '../components/CandidateWebcam.jsx';
import { AIInterviewerAvatar } from '../components/AIInterviewerAvatar.jsx';
import { PreInterviewCheck } from '../components/PreInterviewCheck.jsx';

export function InterviewRoomPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const interviewId = searchParams.get('id');

  const {
    interview,
    questions,
    answers,
    activeQuestion,
    lastEvaluation,
    isSubmitting,
    loading,
    error,
    remainingSeconds,
    loadInterview,
    submitAnswer,
    completeInterview,
    discloseExternalAssistance
  } = useInterview();

  // Pre-interview check state
  const [preCheckDone, setPreCheckDone] = useState(false);
  const [spokenTranscript, setSpokenTranscript] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isAiSpeaking, setIsAiSpeaking] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fullscreenAlert, setFullscreenAlert] = useState(false);

  // Dynamic Evaluation & Practice Feedback State
  const [evaluationFeedback, setEvaluationFeedback] = useState(null);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [speechStatus, setSpeechStatus] = useState('Adaptive Voice Listener Active');

  const recognitionRef = useRef(null);

  useEffect(() => {
    if (interviewId) {
      loadInterview(interviewId);
    }
  }, [interviewId]);

  // Real-time Integrity Event Logger
  const handleLogIntegrityEvent = async (type, details) => {
    if (!interviewId) return;
    try {
      await fetch('/api/integrity/event', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          interviewId,
          type,
          details,
          clientTimestamp: new Date().toISOString()
        })
      });
    } catch (e) {
      console.warn('Failed to post integrity event:', e);
    }
  };

  // Fullscreen and Tab Visibility listener
  useEffect(() => {
    const handleFullscreenState = () => {
      const isCurrentlyFullscreen = Boolean(document.fullscreenElement);
      setIsFullscreen(isCurrentlyFullscreen);
      if (!isCurrentlyFullscreen && preCheckDone && interview?.status === 'in_progress') {
        setFullscreenAlert(true);
        handleLogIntegrityEvent('fullscreen_exit', 'Candidate exited fullscreen proctored arena');
        setTimeout(() => setFullscreenAlert(false), 5000);
      } else if (isCurrentlyFullscreen && preCheckDone) {
        handleLogIntegrityEvent('fullscreen_enter', 'Candidate entered fullscreen proctored arena');
      }
    };

    const handleVisibility = () => {
      if (document.hidden && preCheckDone && interview?.status === 'in_progress') {
        handleLogIntegrityEvent('tab_hidden', 'Candidate navigated away from proctored interview tab');
      } else if (!document.hidden && preCheckDone) {
        handleLogIntegrityEvent('tab_visible', 'Candidate returned to proctored interview tab');
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenState);
    document.addEventListener('visibilitychange', handleVisibility);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenState);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, [preCheckDone, interview?.status, interviewId]);

  const activeQuestionText = activeQuestion?.prompt || activeQuestion?.text || '';

  // AI Reads the Entire Question Aloud automatically when activeQuestion changes
  useEffect(() => {
    if (activeQuestionText && preCheckDone && !showFeedbackModal) {
      speakQuestionAloud(activeQuestionText);
    }
  }, [activeQuestion?.id, preCheckDone, showFeedbackModal]);

  const speakAloud = (textToSpeak, onStart, onEnd) => {
    if (!('speechSynthesis' in window) || !textToSpeak) {
      if (onEnd) onEnd();
      return;
    }
    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utterance.rate = 0.95;
      utterance.pitch = 1.0;
      utterance.volume = 1.0;
      utterance.onstart = () => {
        setIsAiSpeaking(true);
        if (onStart) onStart();
      };
      utterance.onend = () => {
        setIsAiSpeaking(false);
        if (onEnd) onEnd();
      };
      utterance.onerror = () => {
        setIsAiSpeaking(false);
        if (onEnd) onEnd();
      };
      window.speechSynthesis.speak(utterance);
    } catch (e) {
      console.warn('Speech synthesis error:', e);
      setIsAiSpeaking(false);
      if (onEnd) onEnd();
    }
  };

  const speakQuestionAloud = (textToSpeak) => {
    setSpeechStatus('Speaking Question Aloud');
    speakAloud(textToSpeak, null, () => {
      setSpeechStatus('Listening for Candidate Spoken Response');
      startVoiceListening();
    });
  };

  const handleReplayQuestion = () => {
    if (activeQuestionText) {
      speakQuestionAloud(activeQuestionText);
    }
  };

  // Continuous Web Speech Recognition (Spoken voice answer)
  const startVoiceListening = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setSpeechSupported(false);
      return;
    }

    try {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }

      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = 'en-US';

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event) => {
        let currentTranscript = '';
        for (let i = 0; i < event.results.length; i++) {
          currentTranscript += event.results[i][0].transcript + ' ';
        }
        setSpokenTranscript(currentTranscript.trim());
      };

      recognition.onerror = (err) => {
        console.warn('Speech recognition error:', err.error);
        if (err.error !== 'no-speech') {
          setIsListening(false);
        }
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognition;
      recognition.start();
    } catch (e) {
      console.warn('Could not start recognition:', e);
    }
  };

  const stopVoiceListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  };

  const toggleListening = () => {
    if (isListening) {
      stopVoiceListening();
    } else {
      startVoiceListening();
    }
  };

  const handleSubmitSpokenAnswer = async () => {
    if (!spokenTranscript.trim() || isSubmitting) return;

    const transcriptToSubmit = spokenTranscript.trim();
    stopVoiceListening();

    try {
      setSpeechStatus('Analyzing Answer & Reasoning Competency Rubrics');
      const res = await submitAnswer(transcriptToSubmit);
      setSpokenTranscript('');

      const evalData = res?.evaluation || lastEvaluation;
      if (evalData) {
        const isDemonstrated = evalData.status === 'Demonstrated';
        const missing = evalData.missingConcepts || [];
        const correct = evalData.correctConcepts || [];
        const score = evalData.score || (isDemonstrated ? 85 : 52);
        const needsPractice = !isDemonstrated || missing.length > 0 || score < 75;

        let verbalSpeech = '';
        if (needsPractice) {
          const missingFormatted = missing.length > 0 ? missing.slice(0, 3).join(', ') : 'critical technical depth';
          const correctFormatted = correct.length > 0 ? `You touched upon ${correct.slice(0, 2).join(' and ')}, but ` : '';
          verbalSpeech = `Based on your answer, you need more practice on this topic. ${correctFormatted}you missed key concepts including ${missingFormatted}. I strongly recommend practicing targeted coding problems and MCQs in our arena.`;
        } else {
          verbalSpeech = `Outstanding! Your answer demonstrated clear mastery of ${activeQuestion?.competencyName || 'the required competency'}. Your score is ${score} percent. Let us advance to the next challenge!`;
        }

        const feedbackObj = {
          evaluation: evalData,
          needsPractice,
          verbalSpeech,
          score,
          candidateAnswer: transcriptToSubmit,
          idealModelAnswer: evalData.idealModelAnswer || activeQuestion?.idealAnswer || 'A production-grade answer should formulate the internal algorithms, memory layouts, time/space complexity, and concrete architectural trade-offs.',
          missingConcepts: missing,
          correctConcepts: correct,
          isComplete: res?.isComplete,
          nextQuestion: res?.nextQuestion,
          previousQuestionPrompt: activeQuestionText,
          competencyName: activeQuestion?.competencyName || 'Technical Competency'
        };

        setEvaluationFeedback(feedbackObj);
        setShowFeedbackModal(true);
        setSpeechStatus(needsPractice ? 'Delivering Practice Feedback' : 'Confirming Competency Mastery');

        // AI speaks out whether candidate needs more practice or demonstrated mastery
        speakAloud(verbalSpeech);
      } else if (res?.isComplete) {
        navigate(`/results?id=${interviewId}`);
      }
    } catch (err) {
      console.error('Submission error:', err);
      setSpeechStatus('Error evaluating answer');
    }
  };

  const handleProceedAfterFeedback = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsAiSpeaking(false);

    if (evaluationFeedback?.isComplete) {
      navigate(`/results?id=${interviewId}`);
      return;
    }

    setShowFeedbackModal(false);
    setEvaluationFeedback(null);
    setSpeechStatus('Loaded Next Adaptive Question');
  };

  const handleReplayFeedback = () => {
    if (evaluationFeedback?.verbalSpeech) {
      setSpeechStatus(evaluationFeedback.needsPractice ? 'Replaying Practice Feedback' : 'Replaying Mastery Assessment');
      speakAloud(evaluationFeedback.verbalSpeech);
    }
  };

  const handlePreCheckComplete = () => {
    setPreCheckDone(true);
    // Request fullscreen immediately
    try {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen().catch(() => {});
      }
    } catch {}
  };

  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
        setIsFullscreen(true);
      } else {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
          setIsFullscreen(false);
        }
      }
    } catch (err) {
      console.warn('Fullscreen toggle failed:', err);
    }
  };

  const isCompleted = interview?.status === 'completed';

  // Candidate Resume Profile Details
  const candidateName = interview?.candidateProfile?.name || 'Alex Rivera';
  const university = 'Stanford University • B.S. Computer Science';
  const targetRole = interview?.targetRole || 'Lead Machine Learning Engineer';

  return (
    <div className={`min-h-screen ${isFullscreen ? 'bg-slate-950 p-4 sm:p-6 text-white' : 'bg-slate-950 text-slate-100 p-4 sm:p-6'}`}>
      
      {/* Step 1: Pre-Interview AV Hardware Calibration Modal */}
      {!preCheckDone && (
        <PreInterviewCheck
          onComplete={handlePreCheckComplete}
          candidateData={{
            name: candidateName,
            university,
            role: targetRole,
            skills: ['Python', 'PyTorch', 'Distributed Systems', 'ML Pipelines']
          }}
        />
      )}

      {/* Fullscreen Caution Banner */}
      {fullscreenAlert && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 p-4 rounded-2xl bg-rose-500/90 backdrop-blur-md text-white text-xs font-bold border border-rose-400 shadow-2xl flex items-center gap-3 animate-bounce">
          <ShieldAlert className="w-5 h-5 text-white" />
          <span>Integrity Notice: Full-screen mode is required. Please re-enter full screen.</span>
          <button
            onClick={toggleFullscreen}
            className="px-3 py-1 bg-white text-rose-600 rounded-lg font-extrabold text-[11px]"
          >
            Re-enter Fullscreen
          </button>
        </div>
      )}

      {/* AI Answer Evaluation & Candidate vs Ideal Benchmark Comparison Modal */}
      {showFeedbackModal && evaluationFeedback && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
          <div className={`max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-3xl border p-5 sm:p-8 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200 ${
            evaluationFeedback.needsPractice 
              ? 'bg-slate-900 border-amber-500/40 shadow-amber-500/10' 
              : 'bg-slate-900 border-emerald-500/40 shadow-emerald-500/10'
          }`}>
            {/* Background ambient glow */}
            <div className={`absolute -right-20 -top-20 w-72 h-72 rounded-full blur-3xl pointer-events-none ${
              evaluationFeedback.needsPractice ? 'bg-amber-500/15' : 'bg-emerald-500/15'
            }`} />

            {/* Header with status & score */}
            <div className="flex items-start justify-between border-b border-white/10 pb-4 mb-5 gap-4">
              <div className="flex items-center gap-3.5">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                  evaluationFeedback.needsPractice 
                    ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' 
                    : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                }`}>
                  {evaluationFeedback.needsPractice ? (
                    <AlertTriangle className="w-6 h-6 animate-pulse" />
                  ) : (
                    <CheckCircle2 className="w-6 h-6" />
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className={`text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${
                      evaluationFeedback.needsPractice
                        ? 'bg-amber-500/20 text-amber-300 border-amber-500/30'
                        : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                    }`}>
                      {evaluationFeedback.needsPractice ? '⚠️ Needs More Practice' : '✅ Demonstrated Mastery'}
                    </span>
                    <span className="text-xs font-mono text-slate-300 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                      Score: {evaluationFeedback.score}%
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-white mt-1">
                    {evaluationFeedback.needsPractice
                      ? `Target Practice: ${evaluationFeedback.competencyName}`
                      : `Mastery Confirmed: ${evaluationFeedback.competencyName}`
                    }
                  </h3>
                </div>
              </div>

              {/* Replay feedback voice button */}
              <button
                type="button"
                onClick={handleReplayFeedback}
                className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-white/10 flex items-center gap-1.5 transition flex-shrink-0 cursor-pointer"
                title="Listen to AI voice again"
              >
                <Volume2 className="w-4 h-4 text-cyan-400" />
                <span className="hidden sm:inline">Replay Voice</span>
              </button>
            </div>

            {/* AI Verbal Feedback Box */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-950/80 border border-white/5 space-y-1.5 mb-5">
              <div className="flex items-center justify-between text-[11px] font-mono text-cyan-400">
                <span className="flex items-center gap-1.5 font-bold">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                  AI Interviewer Verbal Assessment:
                </span>
                {isAiSpeaking && (
                  <span className="text-amber-400 flex items-center gap-1.5 animate-pulse font-semibold">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    Speaking Aloud...
                  </span>
                )}
              </div>
              <p className="text-xs sm:text-sm text-slate-200 italic font-sans leading-relaxed">
                "{evaluationFeedback.verbalSpeech}"
              </p>
            </div>

            {/* === SIDE-BY-SIDE: CANDIDATE ANSWER VS IDEAL BENCHMARK MODEL ANSWER === */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              
              {/* Left Column: Candidate's Submitted Answer */}
              <div className="p-4 rounded-2xl bg-slate-950/70 border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 border-b border-white/5 pb-2">
                    <span className="flex items-center gap-1.5 text-slate-300">
                      <FileText className="w-3.5 h-3.5 text-blue-400" />
                      <span>Your Submitted Answer:</span>
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono">
                      {evaluationFeedback.candidateAnswer ? evaluationFeedback.candidateAnswer.trim().split(/\s+/).length : 0} Words
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans whitespace-pre-wrap">
                    {evaluationFeedback.candidateAnswer || '(No substantial text submitted)'}
                  </p>
                </div>

                {evaluationFeedback.correctConcepts?.length > 0 && (
                  <div className="mt-3 pt-3 border-t border-white/5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block mb-1.5">
                      ✓ Points You Covered:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {evaluationFeedback.correctConcepts.map((item, idx) => (
                        <span key={idx} className="text-[11px] px-2 py-0.5 rounded-lg bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Ideal Benchmark Model Answer */}
              <div className="p-4 rounded-2xl bg-gradient-to-b from-blue-950/30 to-slate-950/80 border border-cyan-500/30 flex flex-col justify-between shadow-inner">
                <div>
                  <div className="flex items-center justify-between text-[11px] font-bold text-cyan-300 uppercase tracking-wider mb-2 border-b border-cyan-500/20 pb-2">
                    <span className="flex items-center gap-1.5">
                      <Target className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Ideal Benchmark Model Answer:</span>
                    </span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono">
                      Production Standard
                    </span>
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed font-sans whitespace-pre-wrap">
                    {evaluationFeedback.idealModelAnswer || 'An ideal benchmark answer details data structure mechanics, time/space complexity bounds, edge case mitigations, and production architectural trade-offs.'}
                  </p>
                </div>

                <div className="mt-3 pt-3 border-t border-cyan-500/20 text-[10px] text-cyan-300/80 italic">
                  💡 Benchmark covers: architectural trade-offs, edge cases, and mechanical depth.
                </div>
              </div>

            </div>

            {/* Missing Concepts Gap Callout (if any) */}
            {evaluationFeedback.needsPractice && evaluationFeedback.missingConcepts?.length > 0 && (
              <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 mb-5 space-y-2">
                <div className="text-[11px] font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                  <span>Knowledge Gaps Identified (Concepts To Practice):</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {evaluationFeedback.missingConcepts.map((item, idx) => (
                    <div key={idx} className="px-2.5 py-1 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-200 text-xs font-medium flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Detailed Diagnostic Explanation */}
            {evaluationFeedback.evaluation?.assessmentExplanation && (
              <div className="text-xs text-slate-400 mb-5 leading-relaxed bg-slate-950/50 p-3 rounded-xl border border-white/5">
                <strong className="text-slate-300">Diagnostic Summary:</strong> {evaluationFeedback.evaluation.assessmentExplanation}
              </div>
            )}

            {/* Action Footer */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-white/10">
              {evaluationFeedback.needsPractice ? (
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <a
                    href="/practice/coding"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs flex items-center gap-1.5 shadow-lg shadow-amber-950/40 transition"
                  >
                    <Code2 className="w-4 h-4" />
                    <span>Practice in Coding Arena</span>
                    <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
                  </a>

                  <a
                    href="/practice/mcq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs flex items-center gap-1.5 border border-white/10 transition"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                    <span>MCQ Drills</span>
                    <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
                  </a>
                </div>
              ) : (
                <div className="text-xs text-emerald-400 font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span>Advancing to next adaptive difficulty tier</span>
                </div>
              )}

              <button
                type="button"
                onClick={handleProceedAfterFeedback}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-extrabold text-xs shadow-lg shadow-cyan-950/50 flex items-center justify-center gap-1.5 transition cursor-pointer"
              >
                <span>{evaluationFeedback.isComplete ? 'View Evaluation Results' : 'Proceed to Next Question'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Top Proctored Header Bar */}
      <div className="max-w-7xl mx-auto mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900/90 border border-white/10 backdrop-blur-md">
        
        {/* Candidate Identity & University */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-600 to-blue-700 flex items-center justify-center font-bold text-white shadow-md shadow-cyan-500/20">
            {candidateName[0]}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-extrabold text-white text-base">{candidateName}</h1>
              <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 text-[10px] font-semibold border border-cyan-500/20">
                {targetRole}
              </span>
            </div>
            <div className="text-[11px] text-slate-400 flex items-center gap-1.5 mt-0.5">
              <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
              <span>{university}</span>
            </div>
          </div>
        </div>

        {/* Right Status Badges & Controls */}
        <div className="flex items-center gap-3">
          <TimerDisplay remainingSeconds={remainingSeconds} />
          
          <button
            type="button"
            onClick={toggleFullscreen}
            className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-white/10 flex items-center gap-1.5 transition"
          >
            {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            <span>{isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}</span>
          </button>

          <button
            type="button"
            onClick={completeInterview}
            className="px-3.5 py-1.5 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 text-xs font-semibold border border-rose-500/30 transition"
          >
            End Interview
          </button>
        </div>
      </div>

      {/* Main Interactive Dual-Video Arena */}
      {!isCompleted && (
        <div className="max-w-7xl mx-auto space-y-6">
          
          {/* Dual Screen: 3D AI Interviewer on Left, Live Candidate Webcam on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Left Box: 3D Holographic AI Interviewer */}
            <div className="relative min-h-[360px] rounded-3xl bg-slate-900/90 border border-white/10 backdrop-blur-xl overflow-hidden p-6 flex flex-col justify-between shadow-2xl">
              
              {/* Top AI Indicator */}
              <div className="flex items-center justify-between z-10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                  <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider">
                    AI Interviewer Hologram
                  </span>
                </div>

                {isAiSpeaking && (
                  <div className="px-2.5 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-[11px] font-semibold flex items-center gap-1.5 animate-pulse">
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>Speaking Question Aloud...</span>
                  </div>
                )}
              </div>

              {/* 3D Holographic Avatar */}
              <div className="flex-1 flex items-center justify-center py-2">
                <AIInterviewerAvatar 
                  isSpeaking={isAiSpeaking} 
                  isThinking={isSubmitting} 
                  statusLabel={speechStatus}
                  compact={true}
                  onToggleSpeak={handleReplayQuestion}
                />
              </div>

              {/* Question Text Box with Replay Button */}
              {activeQuestion && (
                <div className="relative z-10 p-5 rounded-2xl bg-slate-950/80 border border-white/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono text-cyan-400 font-semibold">
                      Question {questions.length} • Difficulty: {activeQuestion.difficulty?.toUpperCase() || 'MEDIUM'}
                    </span>

                    <button
                      type="button"
                      onClick={handleReplayQuestion}
                      className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] font-semibold flex items-center gap-1 border border-white/5 transition"
                    >
                      <RotateCcw className="w-3 h-3 text-cyan-400" />
                      <span>Replay Aloud</span>
                    </button>
                  </div>

                  <p className="text-sm sm:text-base font-bold text-white leading-relaxed">
                    "{activeQuestionText}"
                  </p>

                  {/* Why this question explainable reasoning */}
                  {activeQuestion.whyThisQuestion && (
                    <div className="text-[11px] text-slate-400 pt-2 border-t border-white/5 flex items-start gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Why this question?</strong> {activeQuestion.whyThisQuestion}</span>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Right Box: Proctored Candidate Camera & Facial Gaze Detection */}
            <div className="relative min-h-[360px] rounded-3xl bg-slate-900/90 border border-white/10 backdrop-blur-xl overflow-hidden p-6 flex flex-col justify-between shadow-2xl">
              
              <div className="flex items-center justify-between mb-3 z-10">
                <div className="flex items-center gap-2">
                  <Camera className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider">
                    Candidate Live Feed (Proctored)
                  </span>
                </div>
                <div className="text-[10px] text-emerald-400/90 font-mono flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Proctored Arena Active</span>
                </div>
              </div>

              {/* Webcam Component */}
              <div className="flex-1 w-full rounded-2xl overflow-hidden min-h-[260px]">
                <CandidateWebcam 
                  className="w-full h-full min-h-[260px]" 
                  onIntegrityEvent={handleLogIntegrityEvent}
                />
              </div>

            </div>

          </div>

          {/* Dual Voice & Typed Answer Workspace (Compliant with Section 6) */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-white/10 backdrop-blur-xl shadow-2xl space-y-6">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <h3 className="text-lg font-extrabold text-white flex items-center gap-2">
                  <Mic className="w-5 h-5 text-cyan-400" />
                  <span>Answer Workspace (Voice or Typed Input)</span>
                </h3>
                <p className="text-slate-400 text-xs mt-0.5">
                  Speak into your microphone or type your technical response. Both modes evaluate against identical evidence rubrics.
                </p>
              </div>

              {/* Input & Microphone Controls */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={toggleListening}
                  className={`px-4 py-2 rounded-xl font-bold text-xs flex items-center gap-2 transition shadow-md cursor-pointer ${
                    isListening
                      ? 'bg-rose-500 hover:bg-rose-600 text-white shadow-rose-950/50 animate-pulse'
                      : 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-cyan-950/50'
                  }`}
                >
                  {isListening ? (
                    <>
                      <MicOff className="w-3.5 h-3.5" />
                      <span>Listening (Click to Pause)</span>
                    </>
                  ) : (
                    <>
                      <Mic className="w-3.5 h-3.5" />
                      <span>Voice Record</span>
                    </>
                  )}
                </button>
              </div>
            </div>


            {/* Editable Answer Textarea / Live Transcript Box */}
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  <span className="flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Candidate Answer Input (Editable):</span>
                  </span>
                  <span>{spokenTranscript.trim() ? spokenTranscript.trim().split(/\s+/).length : 0} Words</span>
                </div>

                <textarea
                  rows={4}
                  value={spokenTranscript}
                  onChange={(e) => setSpokenTranscript(e.target.value)}
                  placeholder="Speak into microphone or type your response here directly. Candidate answers are evaluated against transparent rubrics..."
                  className="w-full p-4 rounded-2xl bg-slate-950/90 border border-white/10 text-slate-100 text-xs font-sans leading-relaxed focus:outline-hidden focus:ring-2 focus:ring-cyan-500 transition resize-y"
                />

                {isListening && (
                  <div className="p-2 bg-slate-950/50 rounded-xl border border-cyan-500/20">
                    <AudioWaveform isRecording={isListening} />
                  </div>
                )}
              </div>

              {/* Submit Answer Button */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
                <div className="text-[11px] text-slate-400">
                  {isListening ? '🔴 Recording speech in real-time...' : 'Ready for submission'}
                </div>

                <button
                  type="button"
                  onClick={handleSubmitSpokenAnswer}
                  disabled={isSubmitting || !spokenTranscript.trim()}
                  className="px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 disabled:opacity-40 text-white font-extrabold text-xs shadow-lg shadow-cyan-950/60 flex items-center justify-center gap-2 transition cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Evaluating Answer &amp; Calibrating Next Question...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Answer &amp; Trigger Adaptive Loop</span>
                    </>
                  )}
                </button>
              </div>
            </div>

          </div>

          {/* Module 01 Adaptive Pipeline Visualizer */}
          <AdaptivePipelineVisualizer currentStage={isSubmitting ? 2 : 1} />

        </div>
      )}

      {/* Completed State */}
      {isCompleted && (
        <div className="max-w-2xl mx-auto p-10 rounded-3xl bg-slate-900/90 border border-white/10 text-center space-y-6">
          <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto" />
          <h2 className="text-3xl font-extrabold text-white">Interview Concluded Successfully</h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            All technical answers have been evaluated against competency rubrics and compared with benchmark model answers. Your comprehensive performance report is ready.
          </p>
          <div className="pt-2">
            <Link
              to={`/results?id=${interviewId}`}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-sm shadow-xl transition inline-flex items-center gap-2"
            >
              <span>View Comprehensive Evaluation & Results</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}

    </div>
  );
}
