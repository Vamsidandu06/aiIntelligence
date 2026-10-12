import React, { useEffect, useRef, useState, useCallback } from 'react';
import { 
  Camera, 
  CameraOff, 
  Mic, 
  MicOff, 
  ShieldCheck, 
  AlertCircle, 
  RefreshCw,
  Video
} from 'lucide-react';

export function CandidateWebcam({ onIntegrityEvent, className = "" }) {
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const [stream, setStream] = useState(null);
  const [isCameraOn, setIsCameraOn] = useState(true);
  const [isMicOn, setIsMicOn] = useState(true);
  const [permissionStatus, setPermissionStatus] = useState('prompt'); // 'prompt' | 'granted' | 'denied'
  const [micLevel, setMicLevel] = useState(0);
  const [isConnecting, setIsConnecting] = useState(false);

  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const animFrameRef = useRef(null);

  // Initialize or re-initialize camera and audio stream
  const initMedia = useCallback(async () => {
    try {
      setIsConnecting(true);
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error('Camera access is not supported in this browser.');
      }

      // Stop previous stream if any
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(t => t.stop());
      }

      const userStream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: { ideal: 1280 },
          height: { ideal: 720 },
          facingMode: 'user'
        },
        audio: true
      });

      streamRef.current = userStream;
      setStream(userStream);
      setPermissionStatus('granted');
      setIsCameraOn(true);
      setIsMicOn(true);

      // Connect stream to video element
      if (videoRef.current) {
        videoRef.current.srcObject = userStream;
        videoRef.current.play().catch(e => console.warn('Video auto-play deferred:', e));
      }

      // Setup Audio Analyser for Live Mic Levels
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) {
          if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
            audioContextRef.current.close().catch(() => {});
          }
          const audioCtx = new AudioContext();
          audioContextRef.current = audioCtx;
          const analyser = audioCtx.createAnalyser();
          analyser.fftSize = 64;
          analyserRef.current = analyser;

          const source = audioCtx.createMediaStreamSource(userStream);
          source.connect(analyser);

          const dataArray = new Uint8Array(analyser.frequencyBinCount);

          const checkAudioLevel = () => {
            if (analyserRef.current) {
              analyserRef.current.getByteFrequencyData(dataArray);
              let sum = 0;
              for (let i = 0; i < dataArray.length; i++) {
                sum += dataArray[i];
              }
              const avg = sum / dataArray.length;
              setMicLevel(Math.min(100, Math.round(avg * 1.5)));
            }
            animFrameRef.current = requestAnimationFrame(checkAudioLevel);
          };
          checkAudioLevel();
        }
      } catch (audioErr) {
        console.warn('Audio analyser init warning:', audioErr);
      }

      if (onIntegrityEvent) {
        onIntegrityEvent('camera_active', 'Live proctored video feed connected successfully.');
      }

    } catch (err) {
      console.warn('Camera access denied or unavailable:', err.message);
      setPermissionStatus('denied');
    } finally {
      setIsConnecting(false);
    }
  }, [onIntegrityEvent]);

  useEffect(() => {
    initMedia();

    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
      if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
        audioContextRef.current.close().catch(() => {});
      }
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [initMedia]);

  // Robust stream binding callback
  const handleVideoRef = useCallback((element) => {
    videoRef.current = element;
    if (element && streamRef.current) {
      if (element.srcObject !== streamRef.current) {
        element.srcObject = streamRef.current;
      }
      element.play().catch(() => {});
    }
  }, []);

  // Guarantee continuous playback across fullscreen changes, tab switching, and window resizes
  useEffect(() => {
    const attachAndPlay = () => {
      if (videoRef.current && streamRef.current && isCameraOn) {
        if (videoRef.current.srcObject !== streamRef.current) {
          videoRef.current.srcObject = streamRef.current;
        }
        videoRef.current.play().catch(() => {});
      }
    };

    // Attach immediately on stream/camera updates
    attachAndPlay();

    // Listen to Fullscreen transitions (both entering and exiting fullscreen)
    document.addEventListener('fullscreenchange', attachAndPlay);
    document.addEventListener('webkitfullscreenchange', attachAndPlay);
    document.addEventListener('mozfullscreenchange', attachAndPlay);
    document.addEventListener('MSFullscreenChange', attachAndPlay);
    window.addEventListener('resize', attachAndPlay);
    document.addEventListener('visibilitychange', attachAndPlay);

    return () => {
      document.removeEventListener('fullscreenchange', attachAndPlay);
      document.removeEventListener('webkitfullscreenchange', attachAndPlay);
      document.removeEventListener('mozfullscreenchange', attachAndPlay);
      document.removeEventListener('MSFullscreenChange', attachAndPlay);
      window.removeEventListener('resize', attachAndPlay);
      document.removeEventListener('visibilitychange', attachAndPlay);
    };
  }, [stream, isCameraOn, permissionStatus]);

  const toggleCamera = () => {
    if (stream) {
      const videoTrack = stream.getVideoTracks()[0];
      if (videoTrack) {
        videoTrack.enabled = !videoTrack.enabled;
        setIsCameraOn(videoTrack.enabled);
        if (videoTrack.enabled && videoRef.current) {
          videoRef.current.play().catch(() => {});
        }
        if (onIntegrityEvent) {
          onIntegrityEvent(videoTrack.enabled ? 'camera_enabled' : 'camera_disabled', 
            `Candidate switched video camera ${videoTrack.enabled ? 'ON' : 'OFF'}`
          );
        }
      }
    } else {
      setIsCameraOn(!isCameraOn);
    }
  };

  const toggleMic = () => {
    if (stream) {
      const audioTrack = stream.getAudioTracks()[0];
      if (audioTrack) {
        audioTrack.enabled = !audioTrack.enabled;
        setIsMicOn(audioTrack.enabled);
      }
    } else {
      setIsMicOn(!isMicOn);
    }
  };

  return (
    <div className={`relative overflow-hidden rounded-2xl bg-slate-950 border border-slate-800 shadow-xl flex items-center justify-center ${className}`}>
      
      {/* Video Stream Element - Always mounted to prevent DOM tearing on fullscreen exit */}
      <video
        ref={handleVideoRef}
        autoPlay
        playsInline
        muted
        className={`w-full h-full object-cover transform -scale-x-100 transition-opacity duration-300 ${
          permissionStatus === 'granted' && isCameraOn ? 'opacity-100 block' : 'opacity-0 hidden'
        }`}
      />

      {/* Camera Off / Paused Overlay */}
      {permissionStatus === 'granted' && !isCameraOn && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950/95 text-slate-400 space-y-3 p-6 text-center z-10">
          <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400">
            <CameraOff className="w-7 h-7" />
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-white">Camera Preview Paused</h4>
            <p className="text-xs text-slate-400 max-w-xs">
              Click below to reactivate your live proctored webcam stream.
            </p>
          </div>
          <button
            type="button"
            onClick={toggleCamera}
            className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-md"
          >
            <Camera className="w-4 h-4" />
            <span>Turn Camera On</span>
          </button>
        </div>
      )}

      {/* Permission Denied or Device Unavailable Fallback */}
      {permissionStatus === 'denied' && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-slate-900 to-slate-950 text-slate-300 space-y-3.5 z-10">
          <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <CameraOff className="w-7 h-7" />
          </div>
          <div className="space-y-1 max-w-xs">
            <h4 className="text-sm font-bold text-white">Camera Permission Needed</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Enable camera permissions in your browser bar, or click Retry to reconnect the active video feed.
            </p>
          </div>
          <button
            type="button"
            onClick={initMedia}
            disabled={isConnecting}
            className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white text-xs font-bold transition flex items-center gap-2 cursor-pointer shadow-md"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isConnecting ? 'animate-spin' : ''}`} />
            <span>{isConnecting ? 'Connecting...' : 'Retry Camera Access'}</span>
          </button>
        </div>
      )}

      {/* Status Overlay Pills (Top Left) */}
      <div className="absolute top-3 left-3 flex items-center gap-2 pointer-events-none z-20">
        <div className="px-2.5 py-1 rounded-full bg-slate-950/85 backdrop-blur-md border border-white/10 text-[10px] font-semibold text-slate-200 flex items-center gap-1.5 shadow-sm">
          <span className={`w-2 h-2 rounded-full ${permissionStatus === 'granted' && isCameraOn ? 'bg-emerald-500 animate-pulse' : 'bg-slate-500'}`} />
          <span>{permissionStatus === 'granted' && isCameraOn ? 'HD PROCTORED ACTIVE' : 'CAMERA STANDBY'}</span>
        </div>
      </div>

      {/* Live Audio Level Meter (Bottom Left) */}
      <div className="absolute bottom-3 left-3 flex items-center gap-2 bg-slate-950/85 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 z-20">
        <Mic className={`w-3.5 h-3.5 ${isMicOn ? 'text-cyan-400' : 'text-slate-500'}`} />
        <div className="w-16 h-1.5 bg-slate-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400 transition-all duration-75"
            style={{ width: `${isMicOn ? Math.max(8, micLevel) : 0}%` }}
          />
        </div>
      </div>

      {/* Hardware Toggle Controls (Bottom Right) */}
      <div className="absolute bottom-3 right-3 flex items-center gap-2 z-20">
        <button
          type="button"
          onClick={toggleMic}
          className={`p-2 rounded-xl backdrop-blur-md border transition cursor-pointer ${
            isMicOn 
              ? 'bg-slate-900/85 border-white/10 text-slate-200 hover:bg-slate-800' 
              : 'bg-rose-500/20 border-rose-500/40 text-rose-300'
          }`}
          title={isMicOn ? 'Mute Microphone' : 'Unmute Microphone'}
        >
          {isMicOn ? <Mic className="w-3.5 h-3.5" /> : <MicOff className="w-3.5 h-3.5" />}
        </button>

        <button
          type="button"
          onClick={toggleCamera}
          className={`p-2 rounded-xl backdrop-blur-md border transition cursor-pointer ${
            isCameraOn 
              ? 'bg-slate-900/85 border-white/10 text-slate-200 hover:bg-slate-800' 
              : 'bg-rose-500/20 border-rose-500/40 text-rose-300'
          }`}
          title={isCameraOn ? 'Turn Camera Off' : 'Turn Camera On'}
        >
          {isCameraOn ? <Camera className="w-3.5 h-3.5" /> : <CameraOff className="w-3.5 h-3.5" />}
        </button>
      </div>

    </div>
  );
}
