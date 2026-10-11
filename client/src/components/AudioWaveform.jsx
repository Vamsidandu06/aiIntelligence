import React from 'react';

export function AudioWaveform({ isActive = false, label = "Voice Input Stream" }) {
  const bars = [12, 28, 45, 20, 60, 35, 75, 48, 85, 52, 68, 30, 50, 24, 15];

  return (
    <div className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-white shadow-xs">
      <div className="flex items-center gap-1 h-8 px-2">
        {bars.map((height, i) => (
          <div
            key={i}
            className={`w-1 rounded-full transition-all duration-150 ${
              isActive 
                ? 'bg-gradient-to-t from-cyan-500 via-blue-500 to-indigo-400 animate-pulse' 
                : 'bg-slate-700'
            }`}
            style={{
              height: isActive ? `${Math.max(15, (height * (0.5 + Math.random() * 0.5)))}%` : '20%',
              animationDelay: `${i * 0.08}s`
            }}
          />
        ))}
      </div>
      <div className="text-xs">
        <span className="font-semibold block text-slate-200">{label}</span>
        <span className="text-[10px] text-cyan-400 font-mono">
          {isActive ? '● Live Frequency Modulation (Web Speech API)' : 'Ready for Audio Dictation'}
        </span>
      </div>
    </div>
  );
}
