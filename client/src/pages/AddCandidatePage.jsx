import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { 
  UserPlus, 
  UploadCloud, 
  FileText, 
  Briefcase, 
  CheckCircle2, 
  ChevronRight, 
  AlertCircle,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { api } from '../api/client.js';

export function AddCandidatePage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const defaultJobId = searchParams.get('jobId') || 'job_junior_swe';

  const [jobs, setJobs] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    targetRoleId: defaultJobId,
    targetRole: 'Junior Software Engineer',
    resumeText: ''
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [extractedData, setExtractedData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await api.getJobs();
        setJobs(res.jobs || []);
        const matched = (res.jobs || []).find(j => j.id === defaultJobId);
        if (matched) {
          setFormData(f => ({ ...f, targetRole: matched.title, targetRoleId: matched.id }));
        }
      } catch (err) {
        console.error('Error fetching jobs:', err);
      }
    };
    fetchJobs();
  }, [defaultJobId]);

  const handleJobChange = (e) => {
    const jId = e.target.value;
    const matched = jobs.find(j => j.id === jId);
    setFormData({
      ...formData,
      targetRoleId: jId,
      targetRole: matched ? matched.title : 'Software Engineer'
    });
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setSelectedFile(file);
    setError('');

    // Attempt parsing via API
    setUploading(true);
    try {
      const uploadFormData = new FormData();
      uploadFormData.append('file', file);
      uploadFormData.append('resume', file);
      const res = await api.parseResumeFile(uploadFormData);
      const text = res.extractedText || res.text || '';
      if (text) {
        setFormData(f => ({ 
          ...f, 
          resumeText: text,
          name: f.name || (res.candidateName && res.candidateName !== 'Candidate' ? res.candidateName : f.name),
          targetRole: f.targetRole || res.roleTitle || f.targetRole
        }));
        setExtractedData(res);
      }
    } catch (err) {
      console.warn('Resume file parsing fallback:', err.message);
      setError('Document parsing note: Server returned fallback. You can inspect or edit the resume text below.');
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      setError('Please fill in candidate name and email.');
      return;
    }

    try {
      const claims = (extractedData && extractedData.claims) || [
        { claim: "Proficient in core data structures and object-oriented algorithms", category: "technical", targetCompetency: "Data Structures", verificationStatus: "Claimed but unvalidated" }
      ];

      const res = await api.createCandidate({
        ...formData,
        resumeClaims: claims,
        extractedSkills: (extractedData && extractedData.skills) || ['Python', 'Data Structures', 'SQL']
      });

      navigate(`/candidates/${res.candidate.id}`);
    } catch (err) {
      setError('Failed to create candidate: ' + err.message);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 space-y-8">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs text-slate-500">
        <Link to="/" className="hover:text-slate-800">Home</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link to="/admin" className="hover:text-slate-800">Recruiter Dashboard</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-slate-900 font-medium">Add Candidate</span>
      </nav>

      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-100">
            Candidate Onboarding
          </span>
          <span className="text-xs text-slate-400">• Resume Claims Parsing</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
          Add Candidate & Parse Resume
        </h1>
        <p className="text-xs text-slate-500 mt-0.5">
          Upload candidate resume in PDF or DOCX format to extract verifiable technical claims and skills.
        </p>
      </div>

      {error && (
        <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0 text-amber-600" />
          <span>{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Candidate Info Card */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4 text-xs">
          <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
            <UserPlus className="w-4 h-4 text-blue-600" />
            <span>1. Candidate Profile</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="font-semibold text-slate-700 block mb-1">Full Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. David Chen"
                className="w-full p-2.5 rounded-xl border border-slate-200 text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="font-semibold text-slate-700 block mb-1">Email Address *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="david.chen@example.com"
                className="w-full p-2.5 rounded-xl border border-slate-200 text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="md:col-span-2">
              <label className="font-semibold text-slate-700 block mb-1">Target Job Role</label>
              <select
                value={formData.targetRoleId}
                onChange={handleJobChange}
                className="w-full p-2.5 rounded-xl border border-slate-200 text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-blue-500"
              >
                {jobs.map(j => (
                  <option key={j.id} value={j.id}>{j.title} ({j.department})</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Resume Upload Dropzone */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4 text-xs">
          <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
            <UploadCloud className="w-4 h-4 text-indigo-600" />
            <span>2. Upload Resume (PDF / DOCX)</span>
          </h2>

          <div className="border-2 border-dashed border-slate-300 rounded-2xl p-6 text-center hover:border-blue-500 transition bg-slate-50/50">
            <input
              type="file"
              id="resume-upload"
              accept=".pdf,.docx,.txt"
              onChange={handleFileChange}
              className="hidden"
            />
            <label htmlFor="resume-upload" className="cursor-pointer space-y-2 block">
              <UploadCloud className="w-10 h-10 text-slate-400 mx-auto" />
              <div className="text-slate-700 font-semibold">
                {selectedFile ? selectedFile.name : 'Click to upload or drag & drop resume file'}
              </div>
              <p className="text-[11px] text-slate-400">
                Supports PDF or DOCX up to 10MB. Text will be sanitized against prompt injection.
              </p>
            </label>
            {uploading && (
              <p className="text-xs text-blue-600 font-semibold animate-pulse mt-2">
                Extracting and sanitizing resume content...
              </p>
            )}
          </div>

          <div>
            <label className="font-semibold text-slate-700 block mb-1">
              Resume Text Content (Extracted or Manual Input)
            </label>
            <textarea
              rows={6}
              value={formData.resumeText}
              onChange={(e) => setFormData({ ...formData, resumeText: e.target.value })}
              placeholder="Paste raw resume text here if not uploading file..."
              className="w-full p-2.5 rounded-xl border border-slate-200 text-slate-800 font-mono text-[11px]"
            />
          </div>
        </div>

        <div className="flex items-center justify-end gap-3">
          <Link
            to="/admin"
            className="px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="px-6 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 shadow-xs cursor-pointer"
          >
            Save Candidate & Analyze Claims
          </button>
        </div>
      </form>
    </div>
  );
}
