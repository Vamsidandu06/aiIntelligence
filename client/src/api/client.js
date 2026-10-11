const BASE_URL = '/api';

export async function apiRequest(endpoint, options = {}) {
  const url = `${BASE_URL}${endpoint}`;
  const headers = { ...options.headers };

  if (!(options.body instanceof FormData) && !headers['Content-Type']) {
    headers['Content-Type'] = 'application/json';
  }

  const response = await fetch(url, {
    ...options,
    headers
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const errorMsg = data.error || `HTTP ${response.status}: ${response.statusText}`;
    throw new Error(errorMsg);
  }

  return data;
}

export const api = {
  // Health & Settings
  getHealth: () => apiRequest('/health'),
  getSettingsStatus: () => apiRequest('/settings/status'),
  updateSettings: (config) => apiRequest('/settings/config', { method: 'POST', body: JSON.stringify(config) }),
  resetData: () => apiRequest('/settings/reset-data', { method: 'POST' }),

  // Jobs
  getJobs: () => apiRequest('/jobs'),
  getJob: (id) => apiRequest(`/jobs/${id}`),
  createJob: (jobData) => apiRequest('/jobs', { method: 'POST', body: JSON.stringify(jobData) }),
  updateJob: (id, jobData) => apiRequest(`/jobs/${id}`, { method: 'PUT', body: JSON.stringify(jobData) }),

  // Candidates & Comparison
  getCandidates: (params = {}) => {
    const q = new URLSearchParams(params).toString();
    return apiRequest(`/candidates${q ? `?${q}` : ''}`);
  },
  getCandidate: (id) => apiRequest(`/candidates/${id}`),
  createCandidate: (data) => apiRequest('/candidates', { method: 'POST', body: JSON.stringify(data) }),
  compareCandidates: (ids = []) => apiRequest(`/candidates/compare${ids.length ? `?ids=${ids.join(',')}` : ''}`),

  // Resume & Extraction
  parseResumeFile: (formData) => apiRequest('/resume/parse', { method: 'POST', body: formData }),
  extractCompetencies: (data) => apiRequest('/resume/extract-competencies', { method: 'POST', body: JSON.stringify(data) }),

  // Interviews
  getInterviews: () => apiRequest('/interviews'),
  createInterview: (data) => apiRequest('/interviews', { method: 'POST', body: JSON.stringify(data) }),
  getInterview: (id) => apiRequest(`/interviews/${id}`),
  startInterview: (id) => apiRequest(`/interviews/${id}/start`, { method: 'POST' }),
  submitAnswer: (id, payload) => apiRequest(`/interviews/${id}/answer`, { method: 'POST', body: JSON.stringify(payload) }),
  completeInterview: (id) => apiRequest(`/interviews/${id}/complete`, { method: 'POST' }),

  // Recruiter Decision
  recordDecision: (id, decisionData) => apiRequest(`/interviews/${id}/decision`, { method: 'POST', body: JSON.stringify(decisionData) }),
  getDecision: (id) => apiRequest(`/interviews/${id}/decision`),

  // Integrity Events
  logIntegrityEvent: (payload) => apiRequest('/integrity/event', { method: 'POST', body: JSON.stringify(payload) }),
  getIntegrityEvents: (interviewId) => apiRequest(`/integrity/${interviewId}`),
  reviewIntegrityEvent: (id, reviewData) => apiRequest(`/integrity/events/${id}/review`, { method: 'PUT', body: JSON.stringify(reviewData) }),

  // Reports
  getReport: (interviewId) => apiRequest(`/reports/${interviewId}`),
  generateReport: (interviewId) => apiRequest(`/reports/${interviewId}/generate`, { method: 'POST' }),

  // Demo Suite
  getDemoPresets: () => apiRequest('/demo/presets'),
  seedDemoScenario: (payload = { scenario: 'scenarioA', role: 'junior' }) => {
    const body = typeof payload === 'string' ? { scenario: payload, role: 'junior' } : payload;
    return apiRequest('/demo/seed-scenario', { method: 'POST', body: JSON.stringify(body) });
  }
};
