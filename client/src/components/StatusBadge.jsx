import React from 'react';
import { CheckCircle2, AlertCircle, HelpCircle, XCircle, Clock, FileQuestion } from 'lucide-react';

export function StatusBadge({ status, size = 'sm', showIcon = true }) {
  const configs = {
    'Demonstrated': {
      bg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      icon: CheckCircle2,
      label: 'Demonstrated'
    },
    'Partially demonstrated': {
      bg: 'bg-amber-50 text-amber-700 border-amber-200',
      icon: AlertCircle,
      label: 'Partially Demonstrated'
    },
    'Claimed but unvalidated': {
      bg: 'bg-blue-50 text-blue-700 border-blue-200',
      icon: HelpCircle,
      label: 'Claimed (Unvalidated)'
    },
    'Not demonstrated': {
      bg: 'bg-rose-50 text-rose-700 border-rose-200',
      icon: XCircle,
      label: 'Not Demonstrated'
    },
    'Not assessed': {
      bg: 'bg-slate-100 text-slate-600 border-slate-200',
      icon: Clock,
      label: 'Not Assessed'
    },
    'Insufficient evidence': {
      bg: 'bg-purple-50 text-purple-700 border-purple-200',
      icon: FileQuestion,
      label: 'Insufficient Evidence'
    }
  };

  const current = configs[status] || configs['Not assessed'];
  const Icon = current.icon;

  const sizeClasses = size === 'lg' 
    ? 'px-3 py-1.5 text-sm font-semibold' 
    : 'px-2.5 py-0.5 text-xs font-medium';

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border ${current.bg} ${sizeClasses}`}>
      {showIcon && <Icon className={size === 'lg' ? 'w-4 h-4' : 'w-3.5 h-3.5'} />}
      <span>{current.label}</span>
    </span>
  );
}
