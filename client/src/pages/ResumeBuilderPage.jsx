import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FileText, 
  Sparkles, 
  Printer, 
  Play, 
  Plus, 
  Trash2, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Award, 
  Briefcase, 
  GraduationCap, 
  Code2, 
  ExternalLink 
} from 'lucide-react';
import { useInterview } from '../context/InterviewContext.jsx';
import { useAuth } from '../context/AuthContext.jsx';
import { api } from '../api/client.js';

export function ResumeBuilderPage() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { setResumeText, setJobDescription } = useInterview();

  // Resume State
  const [personal, setPersonal] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '',
    location: '',
    github: '',
    targetRole: 'Full-Stack Software Engineer',
    education: 'Computer Science & Engineering'
  });

  const [summary, setSummary] = useState(
    'Staff-level Machine Learning Engineer with 6+ years designing, training, and deploying distributed model training pipelines, high-throughput inference engines, and vector database architectures.'
  );

  const [experiences, setExperiences] = useState([
    {
      id: 'exp_1',
      company: 'CloudScale AI Infrastructure',
      role: 'Lead ML Systems Engineer',
      period: '2023 - Present',
      bullets: [
        'Architected distributed PyTorch training pipeline reducing inference latency by 38% across 1.2M daily queries.',
        'Engineered strict temporal train/validation splitting preventing data leakage across rolling time-series datasets.'
      ]
    },
    {
      id: 'exp_2',
      company: 'Nexus Analytics Corp',
      role: 'Senior Machine Learning Engineer',
      period: '2021 - 2023',
      bullets: [
        'Developed end-to-end feature store and model monitoring service detecting data drift in production with 99.4% uptime.'
      ]
    }
  ]);

  const [skills, setSkills] = useState(
    'Python, PyTorch, TensorFlow, Scikit-Learn, Distributed Systems, SQL, Redis, Docker, Kubernetes, AWS SageMaker'
  );

  const [bulletInput, setBulletInput] = useState('');
  const [optimizing, setOptimizing] = useState(false);
  const [optimizedResult, setOptimizedResult] = useState(null);

  const handleOptimizeBullet = async () => {
    if (!bulletInput.trim()) return;
    setOptimizing(true);
    try {
      const res = await fetch('/api/resume-builder/optimize-bullet', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ bullet: bulletInput, role: personal.targetRole })
      });
      const data = await res.json();
      if (data.success) {
        setOptimizedResult(data);
      }
    } catch (err) {
      console.error('Bullet optimization error:', err);
    } finally {
      setOptimizing(false);
    }
  };

  const handleApplyOptimizedBullet = () => {
    if (!optimizedResult) return;
    setExperiences(prev => {
      const copy = [...prev];
      copy[0].bullets.push(optimizedResult.optimized);
      return copy;
    });
    setBulletInput('');
    setOptimizedResult(null);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleLaunchInterview = async () => {
    // Compile structured resume into clean text
    const compiled = `
CANDIDATE: ${personal.name}
TARGET ROLE: ${personal.targetRole}
EMAIL: ${personal.email} | LOCATION: ${personal.location}

PROFESSIONAL SUMMARY:
${summary}

WORK EXPERIENCE:
${experiences.map(e => `
${e.role} at ${e.company} (${e.period})
${e.bullets.map(b => `- ${b}`).join('\n')}
`).join('\n')}

TECHNICAL SKILLS:
${skills}
`.trim();

    const targetJD = `Position: ${personal.targetRole || 'Software Engineer'}\nKey Responsibilities:\n- Deliver robust, high-performance software systems adhering to clean design principles.\n- Articulate clear engineering trade-offs during live technical evaluation.`;

    if (setResumeText) setResumeText(compiled);
    if (setJobDescription) setJobDescription(targetJD);

    sessionStorage.setItem('aii_draft_resume', JSON.stringify({
      name: personal.name,
      targetRole: personal.targetRole,
      education: personal.education,
      skills: skills.split(',').map(s => s.trim()).filter(Boolean),
      resumeText: compiled,
      jobDescription: targetJD
    }));

    try {
      const skillsArray = skills.split(',').map(s => s.trim()).filter(Boolean);
      const comps = (skillsArray.length > 0 ? skillsArray : ['Software Engineering', 'Problem Solving']).slice(0, 5).map((sk, idx) => ({
        name: sk,
        category: 'technical',
        requiredLevel: 'intermediate',
        importance: idx < 2 ? 'high' : 'medium',
        description: `Practical implementation and conceptual mastery in ${sk}`,
        initialStatus: 'Claimed but unvalidated'
      }));

      const claims = experiences.flatMap(e => e.bullets).filter(Boolean).map((b, i) => ({
        id: `rb_claim_${i + 1}`,
        claimText: b,
        category: 'technical',
        targetCompetency: skillsArray[0] || 'Software Engineering',
        verificationStatus: 'untested'
      }));

      const res = await api.createInterview({
        candidateName: personal.name || 'Candidate',
        targetRole: personal.targetRole || 'Software Engineer',
        education: personal.education || 'Computer Science & Engineering',
        skills: skillsArray,
        resumeText: compiled,
        jobDescription: targetJD,
        competencies: comps,
        resumeClaims: claims,
        durationMinutes: 20,
        totalQuestions: 4
      });

      await api.startInterview(res.interview.id);
      navigate(`/interview?id=${res.interview.id}`);
    } catch (err) {
      console.warn('Failed to auto-create session from builder, navigating to setup:', err);
      navigate('/setup');
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>AI Resume Architect & Bullet Optimizer</span>
            </div>
            <h1 className="text-3xl font-extrabold text-white">Interactive Tech Resume Builder</h1>
            <p className="text-slate-400 text-xs mt-1">
              Enter your credentials, optimize bullets with the Google XYZ metric formula, and launch an adaptive AI interview.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handlePrint}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-white/10 flex items-center gap-2 transition"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save PDF</span>
            </button>

            <button
              type="button"
              onClick={handleLaunchInterview}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-xs shadow-lg shadow-cyan-950/50 flex items-center gap-2 transition"
            >
              <Play className="w-3.5 h-3.5 fill-white" />
              <span>Start Adaptive Interview with this Resume</span>
            </button>
          </div>
        </div>

        {/* AI Bullet Point Enhancer Banner */}
        <div className="p-6 rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-indigo-500/30 backdrop-blur-xl space-y-4">
          <div className="flex items-center gap-2 text-indigo-400 font-bold text-sm">
            <Sparkles className="w-4 h-4" />
            <span>Google XYZ Bullet Point Optimizer</span>
          </div>
          <p className="text-slate-300 text-xs leading-relaxed">
            Enter a raw bullet point (e.g. <em>"Worked on data preprocessing and model evaluation"</em>) to transform it into: <strong>"Accomplished [X] as measured by [Y], by doing [Z]"</strong>.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              value={bulletInput}
              onChange={(e) => setBulletInput(e.target.value)}
              placeholder="e.g. Worked on distributed model pipeline for real-time recommendations"
              className="flex-1 px-4 py-2.5 rounded-xl bg-slate-950/90 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-400"
            />
            <button
              type="button"
              onClick={handleOptimizeBullet}
              disabled={optimizing || !bulletInput.trim()}
              className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 text-white font-bold text-xs shadow-md transition flex items-center justify-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{optimizing ? 'Optimizing...' : 'AI Enhance'}</span>
            </button>
          </div>

          {optimizedResult && (
            <div className="p-4 rounded-2xl bg-indigo-950/70 border border-indigo-500/40 space-y-3 animate-in fade-in">
              <div className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>Optimized Bullet (Impact Score: {optimizedResult.impactScore}/100)</span>
              </div>
              <div className="text-xs font-mono text-slate-100 bg-slate-950/80 p-3 rounded-xl border border-white/5">
                "{optimizedResult.optimized}"
              </div>
              <button
                type="button"
                onClick={handleApplyOptimizedBullet}
                className="px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 transition"
              >
                <span>Add to Resume Experience</span>
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>

        {/* Builder & Live Preview Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left: Input Editor */}
          <div className="p-6 rounded-3xl bg-slate-900/80 border border-white/10 space-y-6">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <FileText className="w-4 h-4 text-rose-400" />
              <span>Candidate Information Editor</span>
            </h2>

            {/* Personal Details */}
            <div className="space-y-3">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Contact & Role</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  value={personal.name}
                  onChange={(e) => setPersonal({ ...personal, name: e.target.value })}
                  placeholder="Full Name"
                  className="px-3.5 py-2 rounded-xl bg-slate-950 border border-white/10 text-xs text-white"
                />
                <input
                  type="text"
                  value={personal.targetRole}
                  onChange={(e) => setPersonal({ ...personal, targetRole: e.target.value })}
                  placeholder="Target Job Title"
                  className="px-3.5 py-2 rounded-xl bg-slate-950 border border-white/10 text-xs text-white"
                />
                <input
                  type="email"
                  value={personal.email}
                  onChange={(e) => setPersonal({ ...personal, email: e.target.value })}
                  placeholder="Email"
                  className="px-3.5 py-2 rounded-xl bg-slate-950 border border-white/10 text-xs text-white"
                />
                <input
                  type="text"
                  value={personal.location}
                  onChange={(e) => setPersonal({ ...personal, location: e.target.value })}
                  placeholder="Location"
                  className="px-3.5 py-2 rounded-xl bg-slate-950 border border-white/10 text-xs text-white"
                />
              </div>
            </div>

            {/* Summary */}
            <div className="space-y-2">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Professional Summary</div>
              <textarea
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                rows={3}
                className="w-full p-3.5 rounded-xl bg-slate-950 border border-white/10 text-xs text-white leading-relaxed focus:outline-none"
              />
            </div>

            {/* Skills */}
            <div className="space-y-2">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Technical Skills (Comma separated)</div>
              <textarea
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                rows={2}
                className="w-full p-3.5 rounded-xl bg-slate-950 border border-white/10 text-xs text-white focus:outline-none font-mono"
              />
            </div>
          </div>

          {/* Right: Live Formatted Resume Preview */}
          <div className="p-8 rounded-3xl bg-slate-900/90 border border-white/10 shadow-2xl space-y-6 text-slate-300 font-sans">
            <div className="border-b border-white/10 pb-4">
              <h1 className="text-2xl font-extrabold text-white tracking-tight">{personal.name}</h1>
              <div className="text-cyan-400 font-semibold text-sm mt-0.5">{personal.targetRole}</div>
              <div className="text-xs text-slate-400 mt-1 flex flex-wrap gap-3 font-mono">
                <span>{personal.email}</span>
                <span>•</span>
                <span>{personal.phone}</span>
                <span>•</span>
                <span>{personal.location}</span>
              </div>
            </div>

            {/* Summary */}
            <div>
              <div className="text-xs font-bold text-white uppercase tracking-wider border-b border-white/5 pb-1 mb-2">
                Professional Profile
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {summary}
              </p>
            </div>

            {/* Experience */}
            <div>
              <div className="text-xs font-bold text-white uppercase tracking-wider border-b border-white/5 pb-1 mb-3">
                Experience & Engineering Impact
              </div>
              <div className="space-y-4">
                {experiences.map((exp) => (
                  <div key={exp.id} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-white">{exp.role}</span>
                      <span className="text-slate-400 font-mono text-[11px]">{exp.period}</span>
                    </div>
                    <div className="text-xs text-cyan-400 font-medium">{exp.company}</div>
                    <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 pt-1">
                      {exp.bullets.map((b, idx) => (
                        <li key={idx} className="leading-relaxed">{b}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <div className="text-xs font-bold text-white uppercase tracking-wider border-b border-white/5 pb-1 mb-2">
                Core Competencies & Stack
              </div>
              <p className="text-xs font-mono text-cyan-300 leading-relaxed">
                {skills}
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
