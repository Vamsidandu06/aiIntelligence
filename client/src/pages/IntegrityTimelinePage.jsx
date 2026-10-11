import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  ShieldAlert, 
  Clock, 
  Eye, 
  EyeOff, 
  FileText, 
  AlertCircle, 
  Info,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  Check,
  X,
  MessageSquare
} from 'lucide-react';
import { api } from '../api/client.js';
import { useInterview } from '../context/InterviewContext.jsx';
import { Skeleton } from '../components/Skeleton.jsx';

export function IntegrityTimelinePage() {
  const [searchParams] = useSearchParams();
  const interviewId = searchParams.get('id');
  const { interview, loadInterview } = useInterview();

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingNoteId, setEditingNoteId] = useState(null);
  const [noteText, setNoteText] = useState('');

  const fetchIntegrityData = async () => {
    if (!interviewId) return;
    try {
      setLoading(true);
      const res = await api.getIntegrityEvents(interviewId);
      setEvents(res.events || []);
      if (!interview) {
        await loadInterview(interviewId);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchIntegrityData();
  }, [interviewId]);

  const handleDismissEvent = async (event) => {
    try {
      await api.reviewIntegrityEvent(event.id, {
        isDismissed: true,
        reviewStatus: 'Dismissed by Recruiter (Reviewed Innocuous)',
        recruiterNotes: event.recruiterNotes || 'Event determined to be normal operating behavior.'
      });
      fetchIntegrityData();
    } catch (err) {
      alert('Error updating event: ' + err.message);
    }
  };

  const handleSaveNote = async (eventId) => {
    try {
      await api.reviewIntegrityEvent(eventId, {
        recruiterNotes: noteText,
        reviewStatus: 'Human Review Recorded'
      });
      setEditingNoteId(null);
      setNoteText('');
      fetchIntegrityData();
    } catch (err) {
      alert('Error saving note: ' + err.message);
    }
  };

  if (loading && events.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-6">
        <Skeleton className="h-10 w-1/3" />
        <Skeleton className="h-48 w-full" />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 text-slate-800">
      
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs text-slate-500">
        <Link to="/" className="hover:text-slate-800">Home</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link to="/admin" className="hover:text-slate-800">Recruiter Dashboard</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-slate-900 font-medium">Integrity Event Stream</span>
      </nav>

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-md border border-purple-100">
              Module 03: Operational Integrity
            </span>
            <span className="text-xs text-slate-400">• Non-Punitive Audit Stream</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
            Interview Integrity Timeline & Review
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Objective chronological logging of browser events, tab focus, and disclosed reference tools.
          </p>
        </div>

        <Link
          to={`/decision?id=${interviewId}`}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs transition"
        >
          <span>Return to Dossier</span>
        </Link>
      </div>

      {/* Ethical Framework Notice (Section 7) */}
      <div className="p-4 rounded-xl bg-purple-50 border border-purple-200 text-purple-950 text-xs space-y-2">
        <div className="flex items-center gap-2 font-bold">
          <ShieldCheck className="w-4 h-4 text-purple-700" />
          <span>Responsible & Explainable Monitoring Framework (Section 7)</span>
        </div>
        <p className="leading-relaxed">
          The platform records verifiable browser interactions (e.g. Page Visibility API state changes, active keyboard focus, transparent tool disclosures). <strong>We strictly reject facial micro-expression analysis, eye tracking, or pseudo-scientific biometrics.</strong> Integrity signals are operational review indicators for human recruiters and never automatically determine candidate rejection.
        </p>
      </div>

      {/* Event Metrics Summary */}
      <div className="grid grid-cols-3 gap-4 text-xs">
        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-1">
          <span className="text-slate-400 font-semibold uppercase tracking-wider text-[10px]">Logged Events</span>
          <div className="text-2xl font-extrabold text-slate-900">{events.length}</div>
          <p className="text-[11px] text-slate-500">Total session events</p>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-1">
          <span className="text-slate-400 font-semibold uppercase tracking-wider text-[10px]">Tab Transitions</span>
          <div className="text-2xl font-extrabold text-amber-600">
            {events.filter(e => e.type === 'tab_hidden').length}
          </div>
          <p className="text-[11px] text-slate-500">Visibility loss intervals</p>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-1">
          <span className="text-slate-400 font-semibold uppercase tracking-wider text-[10px]">Recruiter Dismissals</span>
          <div className="text-2xl font-extrabold text-emerald-600">
            {events.filter(e => e.isDismissed).length}
          </div>
          <p className="text-[11px] text-slate-500">Reviewed as innocuous</p>
        </div>
      </div>

      {/* Chronological Event Timeline */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
        <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
          <Clock className="w-4 h-4 text-blue-600" />
          <span>Chronological Audit Trail ({events.length} Events)</span>
        </h2>

        {events.length === 0 ? (
          <div className="p-8 text-center text-xs text-slate-500">
            No interruption events logged during this interview session. Continuous tab focus maintained.
          </div>
        ) : (
          <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
            {events.map((event, idx) => {
              const isHidden = event.type === 'tab_hidden';
              const isDisclosed = event.type === 'external_assistance_disclosed';
              const isDismissed = Boolean(event.isDismissed);

              return (
                <div key={event.id || idx} className="relative group">
                  {/* Timeline marker */}
                  <div className={`absolute -left-6 top-1.5 w-4 h-4 rounded-full border-2 bg-white flex items-center justify-center ${
                    isDismissed
                      ? 'border-slate-300 text-slate-300'
                      : isDisclosed
                      ? 'border-emerald-500 text-emerald-500'
                      : isHidden
                      ? 'border-amber-500 text-amber-500'
                      : 'border-blue-400 text-blue-400'
                  }`} />

                  {/* Event content box */}
                  <div className={`p-4 rounded-xl border text-xs space-y-2 transition ${
                    isDismissed
                      ? 'border-slate-200 bg-slate-50 opacity-60'
                      : 'border-slate-200 bg-white shadow-2xs hover:border-slate-300'
                  }`}>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900 flex items-center gap-1.5">
                          {isDisclosed ? (
                            <>
                              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                              <span>External Assistance Disclosed</span>
                            </>
                          ) : isHidden ? (
                            <>
                              <EyeOff className="w-3.5 h-3.5 text-amber-600" />
                              <span>Tab Visibility Lost (Page Visibility API)</span>
                            </>
                          ) : (
                            <>
                              <Eye className="w-3.5 h-3.5 text-blue-600" />
                              <span>Tab Active / Restored</span>
                            </>
                          )}
                        </span>
                        {isDismissed && (
                          <span className="text-[10px] bg-slate-200 text-slate-700 px-1.5 py-0.5 rounded font-semibold">
                            Dismissed
                          </span>
                        )}
                      </div>

                      <span className="font-mono text-slate-400 text-[11px]">
                        {new Date(event.serverTimestamp || event.clientTimestamp).toLocaleTimeString()}
                      </span>
                    </div>

                    <p className="text-slate-700 font-medium">
                      {event.objectiveDescription || event.details}
                    </p>

                    {event.recruiterNotes && (
                      <div className="p-2.5 rounded-lg bg-blue-50 border border-blue-100 text-blue-900 text-[11px]">
                        <strong>Recruiter Note:</strong> {event.recruiterNotes}
                      </div>
                    )}

                    {/* Recruiter Review Actions */}
                    <div className="flex flex-wrap items-center justify-between pt-2 border-t border-slate-100 gap-2">
                      <span className="text-[11px] text-slate-500">
                        Status: <strong className="text-slate-700">{event.reviewStatus}</strong>
                      </span>

                      <div className="flex items-center gap-2">
                        {editingNoteId === event.id ? (
                          <div className="flex items-center gap-1.5">
                            <input
                              type="text"
                              value={noteText}
                              onChange={(e) => setNoteText(e.target.value)}
                              placeholder="Add human context..."
                              className="p-1 px-2 border border-slate-300 rounded text-[11px]"
                            />
                            <button
                              onClick={() => handleSaveNote(event.id)}
                              className="px-2 py-1 bg-blue-600 text-white rounded text-[10px] font-semibold"
                            >
                              Save
                            </button>
                            <button
                              onClick={() => setEditingNoteId(null)}
                              className="px-2 py-1 bg-slate-200 text-slate-700 rounded text-[10px]"
                            >
                              Cancel
                            </button>
                          </div>
                        ) : (
                          <>
                            <button
                              onClick={() => {
                                setEditingNoteId(event.id);
                                setNoteText(event.recruiterNotes || '');
                              }}
                              className="text-[11px] text-blue-600 hover:text-blue-800 font-medium inline-flex items-center gap-1"
                            >
                              <MessageSquare className="w-3 h-3" />
                              <span>{event.recruiterNotes ? 'Edit Note' : 'Add Note'}</span>
                            </button>

                            {!isDismissed && (
                              <button
                                onClick={() => handleDismissEvent(event)}
                                className="text-[11px] text-slate-500 hover:text-slate-800 font-medium inline-flex items-center gap-1 border border-slate-200 px-2 py-0.5 rounded hover:bg-slate-50"
                              >
                                <Check className="w-3 h-3 text-emerald-600" />
                                <span>Dismiss Event</span>
                              </button>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

    </div>
  );
}
