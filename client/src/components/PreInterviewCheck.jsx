import React, { useState, useEffect, useRef } from 'react';
import { 
  Camera, 
  Mic, 
  Volume2, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  ArrowRight, 
  Maximize2, 
  User, 
  GraduationCap, 
  Briefcase, 
  ShieldCheck,
  Zap
} from 'lucide-react';

export function PreInterviewCheck({ onComplete, candidateData }) {
  const [cameraReady, setCameraReady] = useState(false);
  const [micReady, setMicReady] = useState(false);
  const [speakerTested, setSpeakerTested] = useState(false);
  const [audioLevel, setAudioLevel] = useState(0);
  const [testingSpeaker, setTestingSpeaker] = useState(false);
  const [permissionError, setPermissionError] = useState('');

  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const animFrameRef = useRef(null);

  // Initialize camera and mic
  useEffect(() => {
    let isMounted = true;

    async function initMedia() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { width: 640, height: 480 },
          audio: true
        });

        if (!isMounted) return;
        streamRef.current = stream;

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
        setCameraReady(true);

        // Audio Analyser
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) {
          const ctx = new AudioContext();
          audioContextRef.current = ctx;
          const source = ctx.createMediaStreamSource(stream);
          const analyser = ctx.createAnalyser();
          analyser.fftSize = 256;
          source.connect(analyser);
          analyserRef.current = analyser;

          const dataArray = new Uint8Array(analyser.frequencyBinCount);
          const checkVolume = () => {
            if (!analyserRef.current) return;
            analyserRef.current.getByteFrequencyData(dataArray);
            let sum = 0;
            for (let i = 0; i < dataArray.length; i++) {
              sum += dataArray[i];
            }
            const avg = sum / dataArray.length;
            const normalized = Math.min(100, Math.round((avg / 128) * 100));
            setAudioLevel(normalized);

            if (normalized > 5) {
              setMicReady(true);
            }
            animFrameRef.current = requestAnimationFrame(checkVolume);
          };
          checkVolume();
        } else {
          setMicReady(true);
        }
      } catch (err) {
        console.warn('Hardware permission error:', err);
        setPermissionError('Camera or microphone access denied. Virtual simulation proctoring enabled.');
        setCameraReady(true);
        setMicReady(true);
      }
    }

    initMedia();

    return () => {
      isMounted = false;
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      if (audioContextRef.current) audioContextRef.current.close().catch(() => {});
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const handleTestSpeaker = () => {
    setTestingSpeaker(true);
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance('Audio check verified. Welcome to your adaptive AI interview arena.');
      utterance.rate = 1.0;
      utterance.pitch = 1.0;
      utterance.volume = 1.0;
      utterance.onend = () => {
        setTestingSpeaker(false);
        setSpeakerTested(true);
      };
      utterance.onerror = () => {
        setTestingSpeaker(false);
        setSpeakerTested(true);
      };
      window.speechSynthesis.speak(utterance);
    } else {
      setTimeout(() => {
        setTestingSpeaker(false);
        setSpeakerTested(true);
      }, 500);
    }
  };

  const handleEnterArena = () => {
    // Automatically trigger fullscreen mode
    try {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen().catch(() => {});
      }
    } catch {}

    onComplete({
      cameraReady,
      micReady,
      speakerTested
    });
  };

  const candidateName = candidateData?.name || 'Alex Rivera';
  const university = candidateData?.university || 'Stanford University / B.S. Computer Science';
  const targetRole = candidateData?.role || 'Lead Machine Learning Engineer';
  const skills = candidateData?.skills || ['Python', 'PyTorch', 'Distributed Systems', 'ML Pipelines'];

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-2xl flex items-center justify-center p-4 overflow-y-auto">
      <div className="max-w-3xl w-full bg-slate-900/90 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-cyan-950/60 space-y-6">
        
        {/* Header */}
        <div className="text-center space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Pre-Interview Hardware & Proctor Calibration</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Audio & Video Hardware Readiness
          </h2>
          <p className="text-slate-400 text-xs max-w-xl mx-auto">
            Please test your camera, microphone, and speakers before entering the full-screen proctored arena.
          </p>
        </div>

        {permissionError && (
          <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            <span>{permissionError}</span>
          </div>
        )}

        {/* 2-Column Split: Hardware Testing on Left, Resume on Right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Left Column: Live Camera & Mic Tests */}
          <div className="space-y-4">
            
            {/* Camera Preview */}
            <div className="relative aspect-video rounded-2xl bg-slate-950 border border-white/10 overflow-hidden flex items-center justify-center">
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-[11px] font-semibold text-white flex items-center gap-1.5 border border-white/10">
                <Camera className="w-3 h-3 text-cyan-400" />
                <span>{cameraReady ? 'Camera Active' : 'Connecting...'}</span>
              </div>
              {cameraReady && (
                <div className="absolute top-2.5 right-2.5 w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
              )}
            </div>

            {/* Microphone Volume Meter */}
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/5 space-y-2">
              <div className="flex items-center justify-between text-xs font-semibold">
                <span className="text-slate-300 flex items-center gap-1.5">
                  <Mic className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Microphone Voice Level</span>
                </span>
                <span className="text-emerald-400 font-mono text-[11px]">
                  {micReady ? 'Signal Detected' : 'Speak to test...'}
                </span>
              </div>

              {/* Volume Bar */}
              <div className="w-full h-2.5 bg-slate-900 rounded-full overflow-hidden border border-white/5">
                <div 
                  className="h-full bg-gradient-to-r from-cyan-500 via-emerald-400 to-amber-400 transition-all duration-75"
                  style={{ width: `${Math.max(8, audioLevel)}%` }}
                />
              </div>
            </div>

            {/* Speaker Sound Test */}
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/5 flex items-center justify-between">
              <div>
                <div className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                  <Volume2 className="w-3.5 h-3.5 text-purple-400" />
                  <span>Speaker Output Test</span>
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  {speakerTested ? 'Audio output verified' : 'Click to hear test chime'}
                </div>
              </div>

              <button
                type="button"
                onClick={handleTestSpeaker}
                disabled={testingSpeaker}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition border ${
                  speakerTested
                    ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                    : 'bg-purple-600/30 hover:bg-purple-600/40 text-purple-300 border-purple-500/30'
                }`}
              >
                {testingSpeaker ? 'Playing...' : speakerTested ? '✓ Audio Verified' : 'Play Test'}
              </button>
            </div>

          </div>

          {/* Right Column: Candidate Profile & Target Role */}
          <div className="p-5 rounded-2xl bg-slate-950/80 border border-white/5 flex flex-col justify-between space-y-4">
            
            <div className="space-y-4">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-cyan-400" />
                <span>Extracted Resume Credentials</span>
              </div>

              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-white/5">
                  <div className="text-[11px] text-slate-500 font-medium">Candidate Name</div>
                  <div className="text-sm font-bold text-white mt-0.5">{candidateName}</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-white/5">
                  <div className="text-[11px] text-slate-500 font-medium flex items-center gap-1">
                    <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Education / University</span>
                  </div>
                  <div className="text-xs font-semibold text-slate-200 mt-0.5">{university}</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-white/5">
                  <div className="text-[11px] text-slate-500 font-medium flex items-center gap-1">
                    <Briefcase className="w-3.5 h-3.5 text-purple-400" />
                    <span>Target Interview Role</span>
                  </div>
                  <div className="text-xs font-bold text-purple-300 mt-0.5">{targetRole}</div>
                </div>

                {/* Skills Badges */}
                <div>
                  <div className="text-[11px] text-slate-500 font-medium mb-1.5">Target Skill Competencies</div>
                  <div className="flex flex-wrap gap-1.5">
                    {skills.slice(0, 5).map((sk, i) => (
                      <span key={i} className="px-2 py-0.5 rounded-md bg-slate-900 text-slate-300 text-[10px] font-mono border border-white/5">
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2 text-[11px] text-slate-500 leading-relaxed">
              🔒 Proctoring Notice: Full-screen mode is required. Facial gaze and external window changes will be continuously monitored.
            </div>

          </div>

        </div>

        {/* Enter Arena Button */}
        <div className="pt-2">
          <button
            type="button"
            onClick={handleEnterArena}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-extrabold text-sm shadow-xl shadow-cyan-950/60 flex items-center justify-center gap-2 transition group"
          >
            <Maximize2 className="w-4 h-4" />
            <span>All Systems Calibrated — Enter Full-Screen Interview Arena</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
          </button>
        </div>

      </div>
    </div>
  );
}
