import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  Briefcase, 
  Plus, 
  Trash2, 
  CheckCircle2, 
  Sparkles, 
  Sliders, 
  Clock, 
  FileText, 
  ChevronRight,
  ShieldAlert,
  ArrowRight
} from 'lucide-react';
import { api } from '../api/client.js';

export function CreateJobPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    department: 'Core Engineering',
    experienceLevel: 'Entry / Junior (0-2 years)',
    description: '',
    interviewDuration: 20,
    questionCount: 4,
    interviewMode: 'Adaptive Technical & Behavioral',
    interviewLanguage: 'English (US)',
    rubricCriteria: 'Standardized 0-4 Rubric: 0-No Evidence, 1-Limited, 2-Partial Understanding, 3-Competent Demonstration, 4-Strong Demonstration.'
  });

  const [competencies, setCompetencies] = useState([
    { name: 'Data Structures', category: 'technical', requiredLevel: 'intermediate', importance: 'high', description: 'Hash maps, binary trees, arrays, internal memory mapping' },
    { name: 'Algorithms & Complexity', category: 'technical', requiredLevel: 'intermediate', importance: 'high', description: 'Big-O time and space complexity, sorting, worst-case bounds' },
    { name: 'Problem Solving', category: 'technical', requiredLevel: 'intermediate', importance: 'high', description: 'Analytical decomposition, boundary conditions, edge cases' },
    { name: 'Database Fundamentals', category: 'technical', requiredLevel: 'intermediate', importance: 'medium', description: 'Relational schemas, primary/foreign keys, indexing' },
    { name: 'Communication', category: 'behavioral', requiredLevel: 'intermediate', importance: 'medium', description: 'Clarity of technical explanations and structured articulation' }
  ]);

  const [newComp, setNewComp] = useState({ name: '', category: 'technical', requiredLevel: 'intermediate', importance: 'medium', description: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleAddCompetency = () => {
    if (!newComp.name.trim()) return;
    setCompetencies([...competencies, { ...newComp }]);
    setNewComp({ name: '', category: 'technical', requiredLevel: 'intermediate', importance: 'medium', description: '' });
  };

  const handleRemoveCompetency = (index) => {
    setCompetencies(competencies.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title) {
      alert('Please enter a job title.');
      return;
    }

    setSubmitting(true);
    try {
      const res = await api.createJob({
        ...formData,
        requiredCompetencies: competencies
      });
      navigate(`/jobs/${res.job.id}`);
    } catch (err) {
      alert('Error creating job: ' + err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-8">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-slate-500">
        <Link to="/" className="hover:text-slate-800">Home</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link to="/admin" className="hover:text-slate-800">Recruiter Dashboard</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-slate-900 font-medium">Create Job Role</span>
      </nav>

      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-100">
            Recruiter Job Configuration Wizard
          </span>
          <span className="text-xs text-slate-400">• Competency Matrix Setup</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
          Create New Job Opening
        </h1>
        <p className="text-xs text-slate-500 mt-0.5">
          Configure required technical & behavioral competencies, interview parameters, and standardized rubrics.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Basic Job Details */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
          <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
            <Briefcase className="w-4 h-4 text-blue-600" />
            <span>1. Role Specifications</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="font-semibold text-slate-700 block mb-1">Job Title *</label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="e.g. Junior Software Engineer"
                className="w-full p-2.5 rounded-xl border border-slate-200 text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="font-semibold text-slate-700 block mb-1">Department</label>
              <select
                value={formData.department}
                onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-blue-500"
              >
                <option>Core Engineering</option>
                <option>Artificial Intelligence</option>
                <option>Data & Analytics</option>
                <option>Product & UX Design</option>
                <option>Cloud Infrastructure</option>
              </select>
            </div>

            <div>
              <label className="font-semibold text-slate-700 block mb-1">Target Experience Level</label>
              <select
                value={formData.experienceLevel}
                onChange={(e) => setFormData({ ...formData, experienceLevel: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-blue-500"
              >
                <option>Entry / Junior (0-2 years)</option>
                <option>Mid-Level (2-5 years)</option>
                <option>Senior (5+ years)</option>
                <option>Staff / Lead (8+ years)</option>
              </select>
            </div>

            <div>
              <label className="font-semibold text-slate-700 block mb-1">Interview Language</label>
              <input
                type="text"
                value={formData.interviewLanguage}
                onChange={(e) => setFormData({ ...formData, interviewLanguage: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="md:col-span-2">
              <label className="font-semibold text-slate-700 block mb-1">Job Description & Responsibilities</label>
              <textarea
                rows={3}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Outline core responsibilities, day-to-day technologies, and system requirements..."
                className="w-full p-2.5 rounded-xl border border-slate-200 text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Interview Configuration Parameters */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
          <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
            <Clock className="w-4 h-4 text-indigo-600" />
            <span>2. Adaptive Interview Constraints</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div>
              <label className="font-semibold text-slate-700 block mb-1">Interview Duration</label>
              <select
                value={formData.interviewDuration}
                onChange={(e) => setFormData({ ...formData, interviewDuration: Number(e.target.value) })}
                className="w-full p-2.5 rounded-xl border border-slate-200 text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-blue-500"
              >
                <option value={15}>15 Minutes (Rapid Screening)</option>
                <option value={20}>20 Minutes (Standard)</option>
                <option value={30}>30 Minutes (Comprehensive)</option>
                <option value={45}>45 Minutes (Senior Architecture)</option>
              </select>
            </div>

            <div>
              <label className="font-semibold text-slate-700 block mb-1">Target Questions Count</label>
              <select
                value={formData.questionCount}
                onChange={(e) => setFormData({ ...formData, questionCount: Number(e.target.value) })}
                className="w-full p-2.5 rounded-xl border border-slate-200 text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-blue-500"
              >
                <option value={3}>3 Questions</option>
                <option value={4}>4 Questions (Recommended)</option>
                <option value={5}>5 Questions</option>
                <option value={6}>6 Questions</option>
              </select>
            </div>

            <div>
              <label className="font-semibold text-slate-700 block mb-1">Interview Mode</label>
              <select
                value={formData.interviewMode}
                onChange={(e) => setFormData({ ...formData, interviewMode: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-blue-500"
              >
                <option>Adaptive Technical & Behavioral</option>
                <option>Pure Technical & Problem Solving</option>
                <option>System Architecture Deep-Dive</option>
              </select>
            </div>
          </div>
        </div>

        {/* Competency Matrix Builder */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Sliders className="w-4 h-4 text-emerald-600" />
              <span>3. Initial Competency Matrix ({competencies.length} Configured)</span>
            </h2>
            <span className="text-[11px] text-slate-500">Recruiter-customizable weights</span>
          </div>

          <div className="space-y-2.5">
            {competencies.map((comp, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-800">{comp.name}</span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-semibold uppercase ${
                      comp.importance === 'high' ? 'bg-rose-50 text-rose-700 border border-rose-200' : 'bg-blue-50 text-blue-700 border border-blue-200'
                    }`}>
                      {comp.importance} priority
                    </span>
                    <span className="text-slate-400 capitalize">• {comp.requiredLevel}</span>
                  </div>
                  <p className="text-[11px] text-slate-500">{comp.description}</p>
                </div>

                <button
                  type="button"
                  onClick={() => handleRemoveCompetency(idx)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition cursor-pointer"
                  title="Remove competency"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          {/* Add Competency Inline Form */}
          <div className="p-3.5 rounded-xl border border-dashed border-slate-300 bg-slate-50/50 space-y-3 text-xs">
            <span className="font-semibold text-slate-700 block">+ Add Competency Requirement</span>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
              <input
                type="text"
                value={newComp.name}
                onChange={(e) => setNewComp({ ...newComp, name: e.target.value })}
                placeholder="Competency name (e.g. System Design)"
                className="sm:col-span-2 p-2 rounded-lg border border-slate-200 bg-white"
              />
              <select
                value={newComp.importance}
                onChange={(e) => setNewComp({ ...newComp, importance: e.target.value })}
                className="p-2 rounded-lg border border-slate-200 bg-white"
              >
                <option value="high">High Priority</option>
                <option value="medium">Medium Priority</option>
                <option value="low">Low Priority</option>
              </select>
              <select
                value={newComp.requiredLevel}
                onChange={(e) => setNewComp({ ...newComp, requiredLevel: e.target.value })}
                className="p-2 rounded-lg border border-slate-200 bg-white"
              >
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={newComp.description}
                onChange={(e) => setNewComp({ ...newComp, description: e.target.value })}
                placeholder="Description of what demonstration requires..."
                className="flex-1 p-2 rounded-lg border border-slate-200 bg-white"
              />
              <button
                type="button"
                onClick={handleAddCompetency}
                className="px-3 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 cursor-pointer"
              >
                Add
              </button>
            </div>
          </div>
        </div>

        {/* Evaluation Rubric Definition */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-3 text-xs">
          <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
            <FileText className="w-4 h-4 text-purple-600" />
            <span>4. Standardized Evaluation Rubric</span>
          </h2>
          <textarea
            rows={2}
            value={formData.rubricCriteria}
            onChange={(e) => setFormData({ ...formData, rubricCriteria: e.target.value })}
            className="w-full p-2.5 rounded-xl border border-slate-200 text-slate-800"
          />
        </div>

        <div className="flex items-center justify-end gap-3 pt-2">
          <Link
            to="/admin"
            className="px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50"
          >
            Cancel
          </Link>
          <button
            type="submit"
            disabled={submitting}
            className="px-6 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 shadow-xs cursor-pointer disabled:opacity-50"
          >
            {submitting ? 'Creating Opening...' : 'Save & Publish Job Opening'}
          </button>
        </div>
      </form>
    </div>
  );
}
