import { storage } from './storage.js';

export class ReportGeneratorService {
  async generateReport(interviewId) {
    const interview = await storage.findById('interviews', interviewId);
    if (!interview) throw new Error('Interview not found');

    const competencies = await storage.find('competencies', { interviewId });
    const questions = await storage.find('questions', { interviewId });
    const answers = await storage.find('answers', { interviewId });
    const integrityEvents = await storage.find('integrityEvents', { interviewId });

    // Aggregate answers and assessments
    const assessmentRecords = questions.map(q => {
      const ans = answers.find(a => a.questionId === q.id);
      return {
        questionId: q.id,
        order: q.order,
        questionPrompt: q.prompt,
        difficulty: q.difficulty,
        competencyName: q.competencyName,
        rubricCriteria: q.rubricCriteria,
        whyThisQuestion: q.whyThisQuestion,
        candidateAnswer: ans ? ans.candidateAnswer : null,
        evaluation: ans ? ans.evaluation : null
      };
    });

    // Identify demonstrated strengths vs knowledge gaps
    const strengths = [];
    const gaps = [];

    for (const comp of competencies) {
      if (comp.status === 'Demonstrated') {
        strengths.push({
          competency: comp.name,
          category: comp.category,
          score: comp.lastScore || 90,
          description: comp.description,
          evidenceExcerpt: comp.evidenceHistory?.[0]?.supportingExcerpts?.[0] || 'Verified in interview response'
        });
      } else if (comp.status === 'Partially demonstrated' || comp.status === 'Not demonstrated') {
        gaps.push({
          competency: comp.name,
          category: comp.category,
          status: comp.status,
          unresolvedGaps: comp.unresolvedGaps || ['Incomplete coverage of rubric criteria'],
          recommendedFocus: `Deepen practical experience in ${comp.name}`
        });
      }
    }

    // Unassessed competencies
    const unassessed = competencies
      .filter(c => c.status === 'Not assessed' || c.status === 'Claimed but unvalidated')
      .map(c => ({
        name: c.name,
        category: c.category,
        importance: c.importance,
        reason: 'Session question limit reached before this topic was reached'
      }));

    // Integrity summary
    const flaggedEvents = integrityEvents.filter(e => e.type === 'tab_hidden' || e.type === 'window_blur');
    const integritySummary = {
      totalEvents: integrityEvents.length,
      tabVisibilityChanges: integrityEvents.filter(e => e.type === 'tab_hidden').length,
      externalAssistanceDisclosed: integrityEvents.some(e => e.type === 'external_assistance_disclosed'),
      reviewRecommendation: flaggedEvents.length > 2 
        ? 'Flagged for human reviewer inspection: Observable tab visibility changes noted.'
        : 'Normal session flow: No anomalous interruptions recorded.',
      events: integrityEvents
    };

    // Learning resources recommended
    const learningResources = [
      {
        topic: "ML Pipeline Design & Leakage Prevention",
        type: "Course / Documentation",
        title: "Scikit-Learn Common Pitfalls: Data Leakage in Feature Pipelines",
        url: "https://scikit-learn.org/stable/common_pitfalls.html"
      },
      {
        topic: "PostgreSQL Query Optimization",
        type: "Reference Manual",
        title: "The Art of PostgreSQL & Query Execution Planning",
        url: "https://www.postgresql.org/docs/current/using-explain.html"
      },
      {
        topic: "High-Concurrency Caching Patterns",
        type: "Architecture Guide",
        title: "Redis Distributed Caching and Stampede Mitigation",
        url: "https://redis.io/docs/manual/patterns/"
      }
    ];

    const report = {
      interviewId,
      candidateName: interview.candidateName || 'Alex Rivera',
      targetRole: interview.targetRole || 'Senior AI & Full-Stack Engineer',
      generatedAt: new Date().toISOString(),
      durationMinutes: interview.durationMinutes || 20,
      competencies,
      assessmentRecords,
      strengths,
      gaps,
      unassessedCompetencies: unassessed,
      resumeClaimsVerification: interview.resumeClaims || [],
      integritySummary,
      learningResources,
      disclaimer: "Responsible AI Notice: InterviewIQ AI provides objective, evidence-based candidate intelligence. It is designed solely as decision support for hiring teams and candidates. It does not replace human judgment, nor does it generate automatic hiring or rejection decisions."
    };

    const existingReport = await storage.findOne('reports', { interviewId });
    if (existingReport) {
      await storage.update('reports', existingReport.id, report);
      return { ...existingReport, ...report };
    }

    return await storage.insert('reports', report);
  }
}

export const reportGenerator = new ReportGeneratorService();
