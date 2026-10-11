import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.jsx';
import { SettingsProvider } from './context/SettingsContext.jsx';
import { InterviewProvider } from './context/InterviewContext.jsx';

import { Navbar } from './components/Navbar.jsx';
import { Footer } from './components/Footer.jsx';

// The 19 Primary Module Pages
import { LandingPage } from './pages/LandingPage.jsx';
import { LoginPage } from './pages/LoginPage.jsx';
import { RegisterPage } from './pages/RegisterPage.jsx';
import { AdminDashboardPage } from './pages/AdminDashboardPage.jsx';
import { CreateJobPage } from './pages/CreateJobPage.jsx';
import { JobDetailsPage } from './pages/JobDetailsPage.jsx';
import { AddCandidatePage } from './pages/AddCandidatePage.jsx';
import { ResumeAnalysisPage } from './pages/ResumeAnalysisPage.jsx';
import { SetupPage } from './pages/SetupPage.jsx';
import { InterviewRoomPage } from './pages/InterviewRoomPage.jsx';
import { InterviewResultsPage } from './pages/InterviewResultsPage.jsx';
import { CompetencyDashboardPage } from './pages/CompetencyDashboardPage.jsx';
import { ClaimVerificationPage } from './pages/ClaimVerificationPage.jsx';
import { IntegrityTimelinePage } from './pages/IntegrityTimelinePage.jsx';
import { FinalReportPage } from './pages/FinalReportPage.jsx';
import { CandidateComparisonPage } from './pages/CandidateComparisonPage.jsx';
import { CandidateDecisionPage } from './pages/CandidateDecisionPage.jsx';
import { SettingsPage } from './pages/SettingsPage.jsx';
import { HelpDocsPage } from './pages/HelpDocsPage.jsx';

// Candidate Portal & Practice Suites
import { ClientDashboardPage } from './pages/ClientDashboardPage.jsx';
import { DashboardPage } from './pages/DashboardPage.jsx';
import { MCQPracticePage } from './pages/MCQPracticePage.jsx';
import { CodingArenaPage } from './pages/CodingArenaPage.jsx';
import { FrontendQueryPracticePage } from './pages/FrontendQueryPracticePage.jsx';
import { ResumeBuilderPage } from './pages/ResumeBuilderPage.jsx';
import { InterviewTipsPage } from './pages/InterviewTipsPage.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <SettingsProvider>
          <InterviewProvider>
            <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-500/20 selection:text-blue-900 font-sans antialiased">
              <Navbar />
              <main className="flex-1">
                <Routes>
                  {/* --- 19 REQUIRED ARCHITECTURAL PAGES --- */}
                  {/* 1. Landing Page */}
                  <Route path="/" element={<LandingPage />} />
                  
                  {/* 2. Recruiter Login */}
                  <Route path="/login" element={<LoginPage />} />
                  
                  {/* 3. Registration */}
                  <Route path="/register" element={<RegisterPage />} />
                  
                  {/* 4. Recruiter Dashboard */}
                  <Route path="/admin" element={<AdminDashboardPage />} />
                  <Route path="/recruiter-dashboard" element={<AdminDashboardPage />} />
                  
                  {/* 5. Create Job */}
                  <Route path="/jobs/new" element={<CreateJobPage />} />
                  
                  {/* 6. Job Details */}
                  <Route path="/jobs/:id" element={<JobDetailsPage />} />
                  
                  {/* 7. Add Candidate */}
                  <Route path="/candidates/new" element={<AddCandidatePage />} />
                  
                  {/* 8. Resume Analysis */}
                  <Route path="/resume-analysis" element={<ResumeAnalysisPage />} />
                  <Route path="/candidates/:id" element={<ResumeAnalysisPage />} />
                  <Route path="/candidates/:id/resume" element={<ResumeAnalysisPage />} />
                  
                  {/* 9. Interview Configuration */}
                  <Route path="/setup" element={<SetupPage />} />
                  
                  {/* 10. Live Adaptive Interview */}
                  <Route path="/interview" element={<InterviewRoomPage />} />
                  <Route path="/interview/:id" element={<InterviewRoomPage />} />
                  
                  {/* 11. Interview Results */}
                  <Route path="/results" element={<InterviewResultsPage />} />
                  <Route path="/results/:id" element={<InterviewResultsPage />} />
                  
                  {/* 12. Competency Evidence Explorer */}
                  <Route path="/competency" element={<CompetencyDashboardPage />} />
                  <Route path="/evidence" element={<CompetencyDashboardPage />} />
                  
                  {/* 13. Skill-Gap Analysis */}
                  <Route path="/claims" element={<ClaimVerificationPage />} />
                  <Route path="/skill-gap" element={<ClaimVerificationPage />} />
                  
                  {/* 14. Interview Integrity Timeline */}
                  <Route path="/integrity" element={<IntegrityTimelinePage />} />
                  
                  {/* 15. Candidate Intelligence Report */}
                  <Route path="/report" element={<FinalReportPage />} />
                  <Route path="/report/:id" element={<FinalReportPage />} />
                  
                  {/* 16. Candidate Comparison */}
                  <Route path="/compare" element={<CandidateComparisonPage />} />
                  <Route path="/candidates/compare" element={<CandidateComparisonPage />} />
                  
                  {/* 17. Recruiter Notes and Decisions */}
                  <Route path="/decision" element={<CandidateDecisionPage />} />
                  
                  {/* 18. Settings and Privacy */}
                  <Route path="/settings" element={<SettingsPage />} />
                  
                  {/* 19. Help and Documentation */}
                  <Route path="/help" element={<HelpDocsPage />} />
                  <Route path="/docs" element={<HelpDocsPage />} />

                  {/* Candidate Portal & Practice Suites */}
                  <Route path="/dashboard" element={<ClientDashboardPage />} />
                  <Route path="/history" element={<DashboardPage />} />
                  <Route path="/practice/mcq" element={<MCQPracticePage />} />
                  <Route path="/practice/coding" element={<CodingArenaPage />} />
                  <Route path="/practice/query" element={<FrontendQueryPracticePage />} />
                  <Route path="/resume-builder" element={<ResumeBuilderPage />} />
                  <Route path="/interview-tips" element={<InterviewTipsPage />} />

                  {/* Catch-all redirect */}
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </InterviewProvider>
        </SettingsProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
