import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { api } from '../api/client.js';

const InterviewContext = createContext(null);

export function InterviewProvider({ children }) {
  const [interview, setInterview] = useState(null);
  const [competencies, setCompetencies] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [lastEvaluation, setLastEvaluation] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Timer state
  const [remainingSeconds, setRemainingSeconds] = useState(20 * 60);
  const [timerActive, setTimerActive] = useState(false);

  // Timer tick
  useEffect(() => {
    let interval = null;
    if (timerActive && remainingSeconds > 0) {
      interval = setInterval(() => {
        setRemainingSeconds(s => s - 1);
      }, 1000);
    } else if (remainingSeconds <= 0 && timerActive) {
      setTimerActive(false);
    }
    return () => clearInterval(interval);
  }, [timerActive, remainingSeconds]);

  // Non-punitive Integrity Event Monitor
  useEffect(() => {
    if (!interview || interview.status !== 'in_progress') return;

    const handleVisibility = () => {
      if (document.hidden) {
        api.logIntegrityEvent({
          interviewId: interview.id,
          type: 'tab_hidden',
          clientTimestamp: new Date().toISOString()
        }).catch(err => console.warn('Integrity log failed:', err));
      } else {
        api.logIntegrityEvent({
          interviewId: interview.id,
          type: 'tab_visible',
          clientTimestamp: new Date().toISOString()
        }).catch(err => console.warn('Integrity log failed:', err));
      }
    };

    const handleBlur = () => {
      api.logIntegrityEvent({
        interviewId: interview.id,
        type: 'window_blur',
        clientTimestamp: new Date().toISOString()
      }).catch(err => console.warn('Integrity log failed:', err));
    };

    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        api.logIntegrityEvent({
          interviewId: interview.id,
          type: 'fullscreen_exit',
          clientTimestamp: new Date().toISOString()
        }).catch(err => console.warn('Integrity log failed:', err));
      } else {
        api.logIntegrityEvent({
          interviewId: interview.id,
          type: 'fullscreen_enter',
          clientTimestamp: new Date().toISOString()
        }).catch(err => console.warn('Integrity log failed:', err));
      }
    };

    document.addEventListener('visibilitychange', handleVisibility);
    window.addEventListener('blur', handleBlur);
    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibility);
      window.removeEventListener('blur', handleBlur);
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, [interview?.id, interview?.status]);

  const loadInterview = async (id) => {
    setLoading(true);
    setError(null);
    try {
      const data = await api.getInterview(id);
      setInterview(data.interview);
      setCompetencies(data.competencies || []);
      setQuestions(data.questions || []);
      setAnswers(data.answers || []);
      setActiveQuestion(data.activeQuestion || null);

      if (data.answers && data.answers.length > 0) {
        setLastEvaluation(data.answers[data.answers.length - 1].evaluation);
      }

      if (data.interview.status === 'in_progress') {
        setTimerActive(true);
      }
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const startInterview = async (id) => {
    setLoading(true);
    try {
      const res = await api.startInterview(id);
      await loadInterview(id);
      setTimerActive(true);
      return res;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const submitAnswer = async (candidateAnswer) => {
    if (!interview || !activeQuestion) return;
    setIsSubmitting(true);
    setError(null);

    try {
      const remainingTimeMinutes = Math.max(1, Math.round(remainingSeconds / 60));
      const res = await api.submitAnswer(interview.id, {
        questionId: activeQuestion.id,
        candidateAnswer,
        remainingTimeMinutes
      });

      setLastEvaluation(res.evaluation);

      // Refresh state
      await loadInterview(interview.id);

      if (res.isComplete) {
        setTimerActive(false);
      }

      return res;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setIsSubmitting(false);
    }
  };

  const completeInterview = async () => {
    if (!interview) return;
    setLoading(true);
    try {
      const res = await api.completeInterview(interview.id);
      setTimerActive(false);
      await loadInterview(interview.id);
      return res;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const discloseExternalAssistance = async (details) => {
    if (!interview) return;
    await api.logIntegrityEvent({
      interviewId: interview.id,
      type: 'external_assistance_disclosed',
      details,
      clientTimestamp: new Date().toISOString()
    });
  };

  return (
    <InterviewContext.Provider value={{
      interview,
      competencies,
      questions,
      answers,
      activeQuestion,
      lastEvaluation,
      isSubmitting,
      loading,
      error,
      remainingSeconds,
      timerActive,
      loadInterview,
      startInterview,
      submitAnswer,
      completeInterview,
      discloseExternalAssistance
    }}>
      {children}
    </InterviewContext.Provider>
  );
}

export function useInterview() {
  const ctx = useContext(InterviewContext);
  if (!ctx) throw new Error('useInterview must be used within InterviewProvider');
  return ctx;
}
