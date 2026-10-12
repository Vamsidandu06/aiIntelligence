import { geminiService } from './geminiService.js';
import { fallbackEngine } from './fallbackEngine.js';
import { storage } from './storage.js';

export class AdaptiveEngineService {
  /**
   * Evaluate candidate answer and update competency state
   */
  async processSubmittedAnswer({ interviewId, questionId, candidateAnswer }) {
    const interview = await storage.findById('interviews', interviewId);
    if (!interview) throw new Error('Interview not found');

    const question = await storage.findById('questions', questionId);
    if (!question) throw new Error('Question not found');

    // 1. Run evaluation via Gemini (if configured) or deterministic Fallback
    let evaluation;
    let usedAi = false;

    if (geminiService.isConfigured()) {
      try {
        evaluation = await geminiService.evaluateAnswer({
          questionPrompt: question.prompt,
          rubricCriteria: question.rubricCriteria,
          competencyName: question.competencyName,
          candidateAnswer
        });
        usedAi = true;
      } catch (err) {
        console.warn('Gemini evaluation failed, using fallback engine:', err.message);
        evaluation = fallbackEngine.evaluateAnswerOffline({
          questionPrompt: question.prompt,
          rubricCriteria: question.rubricCriteria,
          competencyName: question.competencyName,
          candidateAnswer
        });
      }
    } else {
      evaluation = fallbackEngine.evaluateAnswerOffline({
        questionPrompt: question.prompt,
        rubricCriteria: question.rubricCriteria,
        competencyName: question.competencyName,
        candidateAnswer
      });
    }

    // 2. Persist the answer record
    const idealModelAnswer = evaluation.idealModelAnswer || question.idealAnswer || '';
    evaluation.idealModelAnswer = idealModelAnswer;

    const answerRecord = await storage.insert('answers', {
      interviewId,
      questionId,
      candidateAnswer,
      evaluation,
      idealModelAnswer,
      usedAi,
      submittedAt: new Date().toISOString()
    });

    // 3. Update the targeted competency with evidence and 4-state taxonomy
    const competencies = await storage.find('competencies', { interviewId });
    const targetComp = competencies.find(c => c.name.toLowerCase() === question.competencyName.toLowerCase())
      || competencies[0];

    if (targetComp) {
      const history = targetComp.evidenceHistory || [];
      history.push({
        questionId,
        questionPrompt: question.prompt,
        score: evaluation.score,
        rubricLevel: evaluation.rubricLevel,
        status: evaluation.status,
        supportingExcerpts: evaluation.supportingExcerpts || [],
        timestamp: new Date().toISOString()
      });

      // Map to 4 strictly distinct states:
      // DEMONSTRATED, CLAIMED BUT UNVALIDATED, NOT DEMONSTRATED, NOT ASSESSED
      let newStatus = targetComp.status;
      if (evaluation.status === 'Demonstrated' || evaluation.rubricLevel >= 3) {
        newStatus = 'Demonstrated';
      } else if (evaluation.status === 'Partially demonstrated' || evaluation.rubricLevel === 2) {
        newStatus = targetComp.status === 'Demonstrated' ? 'Demonstrated' : 'Partially demonstrated';
      } else if (evaluation.status === 'Not demonstrated' || evaluation.rubricLevel === 1) {
        newStatus = 'Not demonstrated';
      } else if (evaluation.status === 'Insufficient evidence') {
        newStatus = targetComp.status || 'Claimed but unvalidated';
      }

      await storage.update('competencies', targetComp.id, {
        status: newStatus,
        lastScore: evaluation.score,
        rubricLevel: evaluation.rubricLevel,
        evidenceHistory: history,
        unresolvedGaps: evaluation.missingConcepts || []
      });
    }

    // 4. Update Resume Claims verification if applicable
    await this._updateClaimVerifications(interviewId, targetComp?.name, evaluation, candidateAnswer);

    return {
      answer: answerRecord,
      evaluation,
      usedAi
    };
  }

  /**
   * Determine and generate the next adaptive question based on priority algorithm
   */
  async selectNextQuestion({ interviewId, currentQuestionIndex, totalQuestions = 4, remainingTimeMinutes = 20 }) {
    const interview = await storage.findById('interviews', interviewId);
    const competencies = await storage.find('competencies', { interviewId });
    const previousAnswers = await storage.find('answers', { interviewId });
    const previousQuestions = await storage.find('questions', { interviewId });

    // Check if interview should complete
    if (previousAnswers.length >= totalQuestions || remainingTimeMinutes <= 0) {
      return { isComplete: true };
    }

    const lastAnswer = previousAnswers[previousAnswers.length - 1];
    const lastQuestion = previousQuestions[previousQuestions.length - 1];
    const lastEvaluation = lastAnswer ? lastAnswer.evaluation : null;

    // --- Decision Strategy Formulation ---
    let strategy = {
      isFollowUp: false,
      targetCompetency: null,
      targetDifficulty: 'intermediate',
      reason: '',
      uncertaintyToResolve: ''
    };

    // Calculate priority metrics
    let roleImportance = 0.9;
    let evidenceUncertainty = 0.8;
    let assessmentNeed = 0.85;
    let expectedInformationGain = 0.88;
    let repetitionPenalty = 0.0;
    let timeCostPenalty = Math.max(0, 0.2 - (remainingTimeMinutes / 100));

    // Rule 1: If previous answer was ambiguous (Uncertainty High / Rubric Level 1) -> Clarification Probe
    if (lastEvaluation && (lastEvaluation.rubricLevel === 1 || lastEvaluation.uncertainty === 'high')) {
      const activeComp = competencies.find(c => c.name === lastQuestion.competencyName);
      strategy.isFollowUp = true;
      strategy.targetCompetency = activeComp || competencies[0];
      strategy.targetDifficulty = 'intermediate';
      evidenceUncertainty = 0.95;
      repetitionPenalty = 0.05;
      strategy.reason = `Selected because previous response was ambiguous and cited high-level syntax without demonstrating underlying mechanics. Clarification probe resolves this uncertainty.`;
      strategy.uncertaintyToResolve = `Resolving uncertainty regarding core mechanical understanding of ${strategy.targetCompetency.name}.`;
    }
    // Rule 2: If previous answer had missing concepts or was partially demonstrated -> Follow-up probe
    else if (lastEvaluation && (lastEvaluation.status === 'Partially demonstrated' || (lastEvaluation.missingConcepts && lastEvaluation.missingConcepts.length > 0 && lastEvaluation.status !== 'Demonstrated'))) {
      const activeComp = competencies.find(c => c.name === lastQuestion.competencyName);
      strategy.isFollowUp = true;
      strategy.targetCompetency = activeComp || competencies[0];
      strategy.targetDifficulty = 'intermediate';
      evidenceUncertainty = 0.85;
      repetitionPenalty = 0.1;
      const gaps = (lastEvaluation.missingConcepts || []).slice(0, 2).join(', ');
      strategy.reason = `Selected because the candidate explained foundational principles but omitted critical concepts: [${gaps}]. Surgical probe directly assesses the identified knowledge gap.`;
      strategy.uncertaintyToResolve = `Testing whether candidate understands missing concepts: ${gaps}.`;
    }
    // Rule 3: If previous answer was solidly Demonstrated -> Escalate difficulty or Pivot to unassessed high-importance
    else if (lastEvaluation && (lastEvaluation.status === 'Demonstrated' || lastEvaluation.rubricLevel >= 3)) {
      // Find highest priority unassessed competency
      const unassessed = competencies.find(c => c.status === 'Not assessed' || c.status === 'Claimed but unvalidated');
      if (unassessed && previousAnswers.length >= 2) {
        strategy.targetCompetency = unassessed;
        strategy.targetDifficulty = unassessed.requiredLevel || 'intermediate';
        evidenceUncertainty = 0.9;
        repetitionPenalty = 0.0;
        strategy.reason = `Previous competency '${lastQuestion.competencyName}' demonstrated with strong mastery. Shifting focus to assess unassessed high-priority requirement '${unassessed.name}'.`;
        strategy.uncertaintyToResolve = `Assessing previously untested competency '${unassessed.name}' before session concludes.`;
      } else {
        // Stay on current or related and escalate difficulty
        const activeComp = competencies.find(c => c.name === lastQuestion.competencyName);
        strategy.targetCompetency = activeComp || competencies[0];
        strategy.targetDifficulty = 'advanced';
        evidenceUncertainty = 0.7;
        repetitionPenalty = 0.15;
        strategy.reason = `Previous answer solidly demonstrated foundational principles. Escalating difficulty to evaluate advanced architectural decisions, edge cases, and production trade-offs.`;
        strategy.uncertaintyToResolve = `Assessing advanced synthesis and trade-off analysis for ${strategy.targetCompetency.name}.`;
      }
    }
    // Rule 4: Balance coverage
    else {
      const unassessed = competencies.find(c => c.status === 'Not assessed' || c.status === 'Claimed but unvalidated') || competencies[0];
      strategy.targetCompetency = unassessed;
      strategy.targetDifficulty = unassessed.requiredLevel || 'intermediate';
      evidenceUncertainty = 0.95;
      repetitionPenalty = 0.0;
      strategy.reason = `Evaluating core role requirement '${unassessed.name}' to ensure balanced assessment coverage before session concludes.`;
      strategy.uncertaintyToResolve = `Baseline assessment of '${unassessed.name}'.`;
    }

    const priorityCalculation = fallbackEngine.calculateQuestionPriority({
      roleImportance,
      evidenceUncertainty,
      assessmentNeed,
      expectedInformationGain,
      repetitionPenalty,
      timeCostPenalty
    });

    // Generate Question via Gemini or Fallback Engine
    let nextQuestionData;
    let usedAi = false;

    if (geminiService.isConfigured()) {
      try {
        nextQuestionData = await geminiService.generateAdaptiveQuestion({
          targetRole: interview.targetRole,
          competencyToAssess: strategy.targetCompetency,
          targetDifficulty: strategy.targetDifficulty,
          isFollowUp: strategy.isFollowUp,
          unresolvedGaps: lastEvaluation?.missingConcepts || [],
          previousQuestion: lastQuestion?.prompt,
          previousAnswer: lastAnswer?.candidateAnswer,
          decisionReason: strategy.reason
        });
        usedAi = true;
      } catch (err) {
        console.warn('Gemini question generation failed, using fallback engine:', err.message);
        nextQuestionData = fallbackEngine.generateNextQuestionOffline({
          previousEvaluation: lastEvaluation,
          questionIndex: previousAnswers.length,
          remainingQuestions: totalQuestions - previousAnswers.length,
          role: interview.targetRole,
          resumeText: interview.resumeText,
          askedQuestionIds: previousQuestions.map(q => q.prompt || q.id)
        });
      }
    } else {
      nextQuestionData = fallbackEngine.generateNextQuestionOffline({
        previousEvaluation: lastEvaluation,
        questionIndex: previousAnswers.length,
        remainingQuestions: totalQuestions - previousAnswers.length,
        role: interview.targetRole,
        resumeText: interview.resumeText,
        askedQuestionIds: previousQuestions.map(q => q.prompt || q.id)
      });
    }

    // Save Question Record
    const questionRecord = await storage.insert('questions', {
      interviewId,
      order: previousAnswers.length + 1,
      prompt: nextQuestionData.prompt,
      difficulty: nextQuestionData.difficulty || strategy.targetDifficulty,
      competencyName: nextQuestionData.competencyName || strategy.targetCompetency.name,
      estimatedDurationMinutes: nextQuestionData.estimatedDurationMinutes || 4,
      rubricCriteria: nextQuestionData.rubricCriteria || 'Demonstrates technical correctness, practical application, and clarity.',
      whyThisQuestion: nextQuestionData.whyThisQuestion || strategy.reason,
      idealAnswer: nextQuestionData.idealAnswer || '',
      uncertaintyToResolve: nextQuestionData.uncertaintyToResolve || strategy.uncertaintyToResolve,
      expectedKeyConcepts: nextQuestionData.expectedKeyConcepts || [],
      priorityCalculation: nextQuestionData.priorityCalculation || priorityCalculation,
      usedAi,
      createdAt: new Date().toISOString()
    });

    return {
      isComplete: false,
      question: questionRecord
    };
  }

  async _updateClaimVerifications(interviewId, competencyName, evaluation, answerText) {
    const interview = await storage.findById('interviews', interviewId);
    if (!interview || !interview.resumeClaims) return;

    let updated = false;
    const claims = interview.resumeClaims.map(claim => {
      if (claim.targetCompetency?.toLowerCase() === competencyName?.toLowerCase()) {
        updated = true;
        let newStatus = claim.verificationStatus;
        if (evaluation.status === 'Demonstrated' || evaluation.rubricLevel >= 3) {
          newStatus = 'Demonstrated';
        } else if (evaluation.status === 'Partially demonstrated' || evaluation.rubricLevel === 2) {
          newStatus = 'Partially demonstrated';
        } else if (evaluation.status === 'Not demonstrated' || evaluation.rubricLevel === 1) {
          newStatus = 'Not demonstrated';
        }

        return {
          ...claim,
          verificationStatus: newStatus,
          verifiedWithQuote: (evaluation.supportingExcerpts && evaluation.supportingExcerpts[0]) || (answerText ? answerText.slice(0, 100) : ''),
          confidence: evaluation.confidence || 'medium',
          explanation: evaluation.assessmentExplanation
        };
      }
      return claim;
    });

    if (updated) {
      await storage.update('interviews', interviewId, { resumeClaims: claims });
    }
  }
}

export const adaptiveEngine = new AdaptiveEngineService();
