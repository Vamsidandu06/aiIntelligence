import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, Volume2, VolumeX, Loader2 } from 'lucide-react';
import { useSettings } from '../context/SettingsContext.jsx';

export function VoiceControls({ textToSpeak, onTranscriptReceived }) {
  const { settings } = useSettings();
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [interimText, setInterimText] = useState('');
  const recognitionRef = useRef(null);

  // Initialize Speech Recognition if supported
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = 'en-US';

      recognition.onresult = (event) => {
        let finalTrans = '';
        let interimTrans = '';

        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            finalTrans += event.results[i][0].transcript;
          } else {
            interimTrans += event.results[i][0].transcript;
          }
        }

        setInterimText(interimTrans);
        if (finalTrans) {
          onTranscriptReceived(finalTrans);
        }
      };

      recognition.onerror = (err) => {
        console.warn('Speech recognition error:', err.error);
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
        setInterimText('');
      };

      recognitionRef.current = recognition;
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.abort();
      }
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, [onTranscriptReceived]);

  const toggleListen = () => {
    if (!recognitionRef.current) return;

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      try {
        recognitionRef.current.start();
        setIsListening(true);
      } catch (err) {
        console.warn('Could not start recognition:', err);
      }
    }
  };

  const toggleSpeak = () => {
    if (!('speechSynthesis' in window) || !textToSpeak) return;

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utterance.rate = 1.0;
      utterance.pitch = 1.0;
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);

      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      {/* Text-to-Speech Button */}
      {settings.hasSpeechSynthesis && (
        <button
          type="button"
          onClick={toggleSpeak}
          title={isSpeaking ? "Stop reading question" : "Read question aloud"}
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border transition ${
            isSpeaking 
              ? 'bg-blue-600 text-white border-blue-600 shadow-sm animate-pulse' 
              : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
          }`}
        >
          {isSpeaking ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
          <span>{isSpeaking ? 'Mute Question' : 'Read Aloud'}</span>
        </button>
      )}

      {/* Speech-to-Text Button */}
      {settings.hasSpeechRecognition && (
        <button
          type="button"
          onClick={toggleListen}
          title={isListening ? "Stop voice dictation" : "Dictate your answer"}
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border transition ${
            isListening 
              ? 'bg-rose-600 text-white border-rose-600 shadow-sm animate-pulse' 
              : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
          }`}
        >
          {isListening ? <MicOff className="w-3.5 h-3.5" /> : <Mic className="w-3.5 h-3.5" />}
          <span>{isListening ? 'Listening (Click to stop)' : 'Voice Dictate'}</span>
        </button>
      )}

      {/* Interim Live Transcript Indicator */}
      {isListening && interimText && (
        <span className="text-xs text-rose-600 font-mono italic truncate max-w-xs bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
          🎙️ "{interimText}"
        </span>
      )}
    </div>
  );
}
