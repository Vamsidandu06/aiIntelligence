import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { 
  Upload, 
  FileText, 
  Briefcase, 
  Sparkles, 
  CheckCircle2, 
  Trash2, 
  Plus, 
  ArrowRight, 
  Loader2, 
  Sliders, 
  AlertCircle 
} from 'lucide-react';
import { api } from '../api/client.js';
import { useInterview } from '../context/InterviewContext.jsx';
import { useAuth } from '../context/AuthContext.jsx';
import { StatusBadge } from '../components/StatusBadge.jsx';

export function SetupPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const candidateIdParam = searchParams.get('candidateId');
  const { user } = useAuth();
  const { loadInterview, startInterview } = useInterview();

  // Inputs
  const [candidateName, setCandidateName] = useState(user?.name || '');
  const [targetRole, setTargetRole] = useState('');
  const [education, setEducation] = useState('');
  const [detectedSkills, setDetectedSkills] = useState([]);
  const [resumeText, setResumeText] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [fileUploadName, setFileUploadName] = useState('');

  // Extracted data (stage 2)
  const [isExtracting, setIsExtracting] = useState(false);
  const [competencies, setCompetencies] = useState([]);
  const [resumeClaims, setResumeClaims] = useState([]);
  const [durationMinutes, setDurationMinutes] = useState(20);
  const [totalQuestions, setTotalQuestions] = useState(4);
  const [isStarting, setIsStarting] = useState(false);
  const [error, setError] = useState(null);

  // Auto-fill from candidateId parameter or draft resume stored in sessionStorage
  useEffect(() => {
    if (candidateIdParam) {
      api.getCandidate(candidateIdParam).then(res => {
        if (res.candidate) {
          const c = res.candidate;
          if (c.name) setCandidateName(c.name);
          if (c.targetRole) setTargetRole(c.targetRole);
          if (c.resumeText) setResumeText(c.resumeText);
          if (c.education) setEducation(c.education);
          if (c.extractedSkills) setDetectedSkills(c.extractedSkills);
          if (c.resumeClaims && c.resumeClaims.length > 0) {
            setResumeClaims(c.resumeClaims);
          }
        }
      }).catch(err => console.warn('Could not load candidate param:', err));
    } else {
      const draft = sessionStorage.getItem('aii_draft_resume');
      if (draft) {
        try {
          const parsed = JSON.parse(draft);
          if (parsed.name) setCandidateName(parsed.name);
          if (parsed.targetRole) setTargetRole(parsed.targetRole);
          if (parsed.resumeText) setResumeText(parsed.resumeText);
          if (parsed.education) setEducation(parsed.education);
          if (parsed.skills) setDetectedSkills(parsed.skills);
          if (parsed.jobDescription) setJobDescription(parsed.jobDescription);
        } catch (e) {}
      }
    }
  }, [candidateIdParam]);

  // Preload Sample Candidate Alex Rivera (only upon explicit click)
  const handleLoadSampleData = async () => {
    try {
      const presets = await api.getDemoPresets();
      setCandidateName(presets.candidate.name);
      setTargetRole(presets.candidate.targetRole);
      setResumeText(presets.candidate.resumeText);
      setJobDescription(presets.candidate.jobDescription);
      setCompetencies(presets.competencies);
      setResumeClaims(presets.resumeClaims);
      setError(null);
    } catch (err) {
      setError(`Failed to load presets: ${err.message}`);
    }
  };

  // Handle PDF/DOCX file upload with immediate field auto-filling
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setFileUploadName(file.name);
    const formData = new FormData();
    formData.append('file', file);

    try {
      setIsExtracting(true);
      setError(null);
      const res = await api.parseResumeFile(formData);
      const extractedText = res.text || res.extractedText || '';
      setResumeText(extractedText);

      // Auto-fill input fields immediately based on extracted resume
      if (res.candidateName && (!candidateName || candidateName === 'Candidate' || candidateName === 'Alex Rivera')) {
        setCandidateName(res.candidateName);
      }
      if (res.roleTitle && (!targetRole || targetRole === 'Senior AI & Full-Stack Engineer')) {
        setTargetRole(res.roleTitle);
      }
      if (res.education) {
        setEducation(res.education);
      }
      const rawSkills = res.detectedSkills || res.skills || [];
      if (rawSkills.length > 0) {
        setDetectedSkills(rawSkills);
      }
      
      // Auto-fill a tailored Job Description matching candidate's extracted role
      const effectiveRole = res.roleTitle || targetRole || 'Software Engineer';
      if (!jobDescription.trim()) {
        setJobDescription(`Position: ${effectiveRole}\nKey Responsibilities:\n- Deliver reliable, testable engineering implementations matching ${effectiveRole} requirements.\n- Articulate clear architectural trade-offs during live technical evaluation.\n- Analyze computational efficiency, edge cases, and design scalable solutions.`);
      }

      // Auto-extract competencies from detected skills
      if (rawSkills.length > 0) {
        setCompetencies(rawSkills.slice(0, 6).map((sk, idx) => ({
          name: sk,
          importance: idx < 2 ? 'high' : 'medium',
          requiredLevel: 'advanced',
          status: 'Not assessed'
        })));
      }

      // Auto-extract claims
      const rawClaims = res.extractedClaims || res.claims || [];
      if (rawClaims.length > 0) {
        setResumeClaims(rawClaims.map((cl, idx) => ({
          id: `claim_${idx + 1}`,
          claimText: typeof cl === 'string' ? cl : (cl.claim || cl.claimText),
          competencyTarget: rawSkills[0] || 'Technical Architecture',
          verificationStatus: 'untested'
        })));
      }
    } catch (err) {
      setError(`Document upload error: ${err.message}`);
    } finally {
      setIsExtracting(false);
    }
  };

  // Analyze Resume + JD
  const handleAnalyzeAndExtract = async () => {
    if (!resumeText.trim() || !jobDescription.trim()) {
      setError('Please provide both resume text (or upload document) and job description.');
      return;
    }

    try {
      setIsExtracting(true);
      setError(null);
      const res = await api.extractCompetencies({ 
        resumeText, 
        jobDescription,
        candidateName,
        roleTitle: targetRole 
      });
      if (res.data) {
        if (res.data.candidateName && (!candidateName || candidateName === 'Candidate')) {
          setCandidateName(res.data.candidateName);
        }
        if (res.data.roleTitle && !targetRole) {
          setTargetRole(res.data.roleTitle);
        }
        if (res.data.education && !education) {
          setEducation(res.data.education);
        }
        if (res.data.detectedSkills) {
          setDetectedSkills(res.data.detectedSkills);
        }
        setCompetencies(res.data.competencies || []);
        setResumeClaims(res.data.resumeClaims || []);
      }
    } catch (err) {
      setError(`Competency extraction failed: ${err.message}`);
    } finally {
      setIsExtracting(false);
    }
  };

  // User edits competencies
  const handleRemoveCompetency = (index) => {
    setCompetencies(competencies.filter((_, i) => i !== index));
  };

  const handleAddCompetency = () => {
    const name = prompt('Enter Competency Name (e.g. Distributed Systems):');
    if (name) {
      setCompetencies([
        ...competencies,
        {
          name,
          category: 'technical',
          requiredLevel: 'intermediate',
          importance: 'medium',
          description: 'Custom added competency',
          initialStatus: 'Claimed but unvalidated'
        }
      ]);
    }
  };

  // Submit and Start Interview
  const handleCreateAndStart = async () => {
    if (competencies.length === 0) {
      setError('At least one competency is required to construct the adaptive interview.');
      return;
    }

    try {
      setIsStarting(true);
      setError(null);

      const finalSkills = detectedSkills.length > 0 ? detectedSkills : competencies.map(c => c.name);

      // 1. Create interview session
      const createRes = await api.createInterview({
        candidateName: candidateName.trim() || 'Candidate',
        targetRole: targetRole.trim() || 'Software Engineer',
        education: education || 'Computer Science & Engineering',
        skills: finalSkills,
        resumeText,
        jobDescription,
        competencies,
        resumeClaims,
        durationMinutes,
        totalQuestions
      });

      // 2. Start session and generate initial question
      await startInterview(createRes.interview.id);

      // 3. Navigate to Interview Room
      navigate(`/interview?id=${createRes.interview.id}`);
    } catch (err) {
      setError(`Failed to launch interview: ${err.message}`);
    } finally {
      setIsStarting(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Interview Setup & Competency Extraction
          </h1>
          <p className="text-sm text-slate-500">
            Upload candidate documents or load sample profiles to generate role-aligned rubrics.
          </p>
        </div>

        <button
          type="button"
          onClick={handleLoadSampleData}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold text-xs border border-blue-200 shadow-xs transition"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Load Sample Candidate (Alex Rivera)</span>
        </button>
      </div>

      {error && (
        <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-start gap-2">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          <div>{error}</div>
        </div>
      )}

      {/* Main Form: Two Column Layout */}
      <div className="grid lg:grid-cols-2 gap-6">
        
        {/* Left Column: Resume Document & Target Info */}
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <FileText className="w-4 h-4 text-blue-600" />
              <span>1. Candidate Profile & Resume</span>
            </h2>

            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Candidate Name</label>
                <input
                  type="text"
                  value={candidateName}
                  onChange={(e) => setCandidateName(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="e.g. Your Name (auto-fills upon upload)"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Target Job Role</label>
                <input
                  type="text"
                  value={targetRole}
                  onChange={(e) => setTargetRole(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="e.g. Full-Stack Developer, ML Engineer, SQL Specialist"
                />
              </div>
            </div>

            {/* File Upload Drop Area */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Upload Resume (PDF, DOCX, TXT)</label>
              <label className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-slate-300 hover:border-blue-500 rounded-xl cursor-pointer bg-slate-50/50 hover:bg-blue-50/20 transition">
                <Upload className="w-6 h-6 text-slate-400 mb-1" />
                <span className="text-xs font-medium text-slate-600">
                  {fileUploadName ? `Uploaded: ${fileUploadName}` : 'Click or drag PDF/DOCX to upload'}
                </span>
                <span className="text-[10px] text-slate-400 mt-0.5">Maximum file size: 10 MB</span>
                <input
                  type="file"
                  accept=".pdf,.docx,.doc,.txt"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>
            </div>

            {/* Resume Text Area */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Extracted Resume Content (or paste raw text)
              </label>
              <textarea
                rows={7}
                value={resumeText}
                onChange={(e) => setResumeText(e.target.value)}
                placeholder="Paste candidate resume text or bullet points here..."
                className="w-full p-3 rounded-lg border border-slate-300 text-xs font-mono focus:ring-2 focus:ring-blue-500 focus:outline-none leading-relaxed"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Job Description & Interview Constraints */}
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-indigo-600" />
              <span>2. Job Description & Expectations</span>
            </h2>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Target Role Job Description & Requirements
              </label>
              <textarea
                rows={9}
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                placeholder="Paste the target role description, responsibilities, and required competencies..."
                className="w-full p-3 rounded-lg border border-slate-300 text-xs font-mono focus:ring-2 focus:ring-blue-500 focus:outline-none leading-relaxed"
              />
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Duration (Minutes)</label>
                <input
                  type="number"
                  min="5"
                  max="60"
                  value={durationMinutes}
                  onChange={(e) => setDurationMinutes(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Question Quota</label>
                <input
                  type="number"
                  min="2"
                  max="10"
                  value={totalQuestions}
                  onChange={(e) => setTotalQuestions(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>

            <button
              type="button"
              onClick={handleAnalyzeAndExtract}
              disabled={isExtracting}
              className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs shadow-xs flex items-center justify-center gap-2 transition"
            >
              {isExtracting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Analyzing Documents...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span>Extract Competencies & Map Resume Claims</span>
                </>
              )}
            </button>
          </div>
        </div>

      </div>

      {/* Extracted Competency Map Review Section */}
      {competencies.length > 0 && (
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
            <div>
              <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>3. Review & Validate Extracted Competencies ({competencies.length})</span>
              </h2>
              <p className="text-xs text-slate-500">
                Verify competencies before starting. Skills listed on resume start as "Claimed (Unvalidated)" until verified.
              </p>
            </div>

            <button
              type="button"
              onClick={handleAddCompetency}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 text-xs font-semibold transition"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Competency</span>
            </button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {competencies.map((comp, idx) => (
              <div key={idx} className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2 relative group">
                <div className="flex items-start justify-between gap-2">
                  <div className="font-bold text-xs text-slate-900">{comp.name}</div>
                  <button
                    onClick={() => handleRemoveCompetency(idx)}
                    className="opacity-0 group-hover:opacity-100 text-slate-400 hover:text-rose-600 transition"
                    title="Remove"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="flex items-center gap-2 text-[11px]">
                  <StatusBadge status={comp.initialStatus || 'Claimed but unvalidated'} />
                  <span className="text-slate-500 capitalize">{comp.importance || 'medium'} priority</span>
                </div>

                <p className="text-[11px] text-slate-600 line-clamp-2">
                  {comp.description || 'Target skill evaluated during interview.'}
                </p>
              </div>
            ))}
          </div>

          {/* Launch Interview CTA */}
          <div className="pt-4 flex justify-end">
            <button
              type="button"
              onClick={handleCreateAndStart}
              disabled={isStarting}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-500/20 transition transform hover:-translate-y-0.5"
            >
              {isStarting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Initializing Adaptive Session...</span>
                </>
              ) : (
                <>
                  <span>Begin Adaptive Interview</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
