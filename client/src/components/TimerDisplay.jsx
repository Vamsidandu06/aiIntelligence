import React from 'react';
import { Clock } from 'lucide-react';

export function TimerDisplay({ remainingSeconds }) {
  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;
  const isLow = remainingSeconds < 300; // < 5 mins

  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border font-mono text-sm font-semibold transition ${
      isLow 
        ? 'bg-rose-50 text-rose-700 border-rose-300 animate-pulse' 
        : 'bg-slate-100 text-slate-700 border-slate-200'
    }`}>
      <Clock className={`w-4 h-4 ${isLow ? 'text-rose-600' : 'text-slate-500'}`} />
      <span>{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</span>
    </div>
  );
}
