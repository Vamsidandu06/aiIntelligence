import { GoogleGenerativeAI } from '@google/generative-ai';
import { config } from '../config/env.js';

export class GeminiService {
  constructor() {
    this.apiKey = config.geminiApiKey;
    this.modelName = config.geminiModel || 'gemini-1.5-flash';
    this.client = null;

    if (this.apiKey) {
      try {
        this.client = new GoogleGenerativeAI(this.apiKey);
      } catch (err) {
        console.warn('Failed to initialize GoogleGenerativeAI client:', err.message);
      }
    }
  }

  setApiKey(key, model = 'gemini-1.5-flash') {
    this.apiKey = key;
    this.modelName = model;
    if (key) {
      this.client = new GoogleGenerativeAI(key);
    } else {
      this.client = null;
    }
  }

  isConfigured() {
    return Boolean(this.client && this.apiKey);
  }

  /**
   * Helper to clean markdown code fences if LLM returns ```json ... ```
   */
  _cleanJsonText(text) {
    let clean = text.trim();
    if (clean.startsWith('```json')) {
      clean = clean.replace(/^```json\s*/i, '').replace(/```\s*$/i, '');
    } else if (clean.startsWith('```')) {
      clean = clean.replace(/^```\s*/i, '').replace(/```\s*$/i, '');
    }
    return clean.trim();
  }

  /**
   * Extract competencies and claims from Resume + Job Description
   */
  async extractCompetenciesAndClaims({ resumeText, jobDescription }) {
    if (!this.isConfigured()) {
      throw new Error('GEMINI_API_KEY_NOT_CONFIGURED');
    }

    const model = this.client.getGenerativeModel({
      model: this.modelName,
      generationConfig: {
        responseMimeType: 'application/json',
        temperature: 0.2
      }
    });

    const prompt = `You are an expert technical recruiter and talent assessor.
Analyze the following candidate resume and job description.
Extract required technical and soft competencies, and explicit resume claims made by the candidate.

RESUME CONTENT:
"""
${resumeText.slice(0, 15000)}
"""

JOB DESCRIPTION:
"""
${jobDescription.slice(0, 10000)}
"""

Return a STRICT JSON object with the following schema:
{
  "competencies": [
    {
      "name": "string (e.g. Python & ML Engineering)",
      "category": "technical | architecture | behavioral | domain",
      "requiredLevel": "beginner | intermediate | advanced",
      "importance": "high | medium | low",
      "description": "Brief description of expectations for this role",
      "initialStatus": "Claimed but unvalidated" // If mentioned in resume, else "Not assessed"
    }
  ],
  "resumeClaims": [
    {
      "claim": "Specific claim verbatim or condensed from resume (e.g. 'Experienced in SQL query optimization')",
      "category": "technical",
      "targetCompetency": "Matching competency name from above list",
      "verificationStatus": "Claimed but unvalidated"
    }
  ],
  "candidateName": "Extracted candidate name or 'Candidate'",
  "roleTitle": "Extracted target job title or 'Software Engineer'"
}
Only output the JSON object.`;

    const response = await model.generateContent(prompt);
    const cleaned = this._cleanJsonText(response.response.text());
    return JSON.parse(cleaned);
  }

  /**
   * Evaluate a candidate answer against question and rubrics
   */
  async evaluateAnswer({ questionPrompt, rubricCriteria, competencyName, candidateAnswer, interviewHistory = [] }) {
    if (!this.isConfigured()) {
      throw new Error('GEMINI_API_KEY_NOT_CONFIGURED');
    }

    const model = this.client.getGenerativeModel({
      model: this.modelName,
      generationConfig: {
        responseMimeType: 'application/json',
        temperature: 0.2
      }
    });

    const prompt = `You are a rigorous, fair, evidence-based technical interviewer.
Evaluate the candidate's answer strictly based on observed evidence in their response.

QUESTION ASKED:
"${questionPrompt}"

COMPETENCY BEING ASSESSED:
"${competencyName}"

EVALUATION RUBRIC CRITERIA:
"${rubricCriteria}"

CANDIDATE'S ANSWER:
"""
${candidateAnswer}
"""

RULES:
1. Do not invent evidence or penalize candidates for unasked details.
2. If the answer is completely off-topic, blank, or too brief to judge, mark hasSufficientEvidence = false, score = null, and status = "Insufficient evidence".
3. If the answer is strong, correct, and addresses the rubric, score between 80-100, status = "Demonstrated".
4. If the answer is partially correct but misses core concepts, score between 40-75, status = "Partially demonstrated".
5. If the answer is fundamentally incorrect or displays serious misconceptions, score between 0-35, status = "Not demonstrated".
6. Extract exact verbatim excerpts from the candidate's answer for supportingExcerpts.

Return a STRICT JSON object with this schema:
{
  "hasSufficientEvidence": true | false,
  "score": number (0 to 100) or null,
  "status": "Demonstrated" | "Partially demonstrated" | "Not demonstrated" | "Insufficient evidence",
  "technicalCorrectness": "high" | "medium" | "low" | "unverified",
  "conceptualUnderstanding": "clear" | "partial" | "misconception" | "insufficient",
  "correctConcepts": ["list of correctly explained concepts"],
  "missingConcepts": ["list of missing concepts or gaps that were required by the rubric"],
  "misunderstandings": ["any misconceptions identified"],
  "supportingExcerpts": ["direct verbatim phrases from the candidate's answer"],
  "assessmentExplanation": "Objective 2-3 sentence assessment explaining the rating based strictly on provided answer",
  "confidence": "high" | "medium" | "low",
  "recommendedFollowUp": "Suggested follow-up concept to investigate next if gaps exist"
}
Only output the JSON object.`;

    const response = await model.generateContent(prompt);
    const cleaned = this._cleanJsonText(response.response.text());
    return JSON.parse(cleaned);
  }

  /**
   * Generate an adaptive next question with transparent explanation
   */
  async generateAdaptiveQuestion({
    targetRole,
    competencyToAssess,
    targetDifficulty, // "beginner", "intermediate", "advanced"
    isFollowUp,
    unresolvedGaps = [],
    previousQuestion = null,
    previousAnswer = null,
    decisionReason = ''
  }) {
    if (!this.isConfigured()) {
      throw new Error('GEMINI_API_KEY_NOT_CONFIGURED');
    }

    const model = this.client.getGenerativeModel({
      model: this.modelName,
      generationConfig: {
        responseMimeType: 'application/json',
        temperature: 0.3
      }
    });

    const prompt = `You are an adaptive interview architect for the role of "${targetRole}".
Generate the next interview question according to the adaptive strategy below.

STRATEGY CONTEXT:
- Target Competency: "${competencyToAssess.name}" (${competencyToAssess.category})
- Target Difficulty: "${targetDifficulty}"
- Is Targeted Follow-up to Previous Answer: ${isFollowUp ? 'YES' : 'NO'}
- Identified Unresolved Gaps from Previous Evaluation: ${JSON.stringify(unresolvedGaps)}
- Selection Reason Context: "${decisionReason}"
${previousQuestion ? `- Previous Question: "${previousQuestion}"` : ''}
${previousAnswer ? `- Previous Answer: "${previousAnswer.slice(0, 500)}"` : ''}

REQUIREMENTS:
1. If this is a follow-up, drill specifically into the missing concepts or gaps without repeating the earlier question.
2. If this is escalating difficulty, create a practical, high-impact scenario or trade-off question.
3. Provide an explicit, transparent "whyThisQuestion" explanation that clarifies to the candidate why this question was selected (e.g., "Why this question? Your previous answer demonstrated an understanding of X, but did not address Y. This question investigates that specific knowledge gap.").
4. Provide structured rubric criteria that will be used to evaluate the answer.

Return a STRICT JSON object with this schema:
{
  "prompt": "The exact interview question prompt",
  "difficulty": "${targetDifficulty}",
  "competencyName": "${competencyToAssess.name}",
  "rubricCriteria": "Explicit 3-point bullet checklist of what an ideal answer must demonstrate",
  "whyThisQuestion": "Concise, transparent rationale connecting candidate's previous response or target competency to this choice",
  "expectedKeyConcepts": ["keyword1", "keyword2", "keyword3"]
}
Only output the JSON object.`;

    const response = await model.generateContent(prompt);
    const cleaned = this._cleanJsonText(response.response.text());
    return JSON.parse(cleaned);
  }
}

export const geminiService = new GeminiService();
