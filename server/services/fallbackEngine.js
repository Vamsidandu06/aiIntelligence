/**
 * Fallback & Deterministic Scenario Engine for Adaptive Interview Intelligence (AII)
 * Supports 100% offline demonstration, 0-4 Rubric scoring, and 3 distinct answer paths
 */

// --- 1. JUNIOR SOFTWARE ENGINEER PRESET (Primary Demonstration Scenario per Section 16) ---
export const JUNIOR_SWE_CANDIDATE = {
  name: "David Chen",
  targetRole: "Junior Software Engineer",
  resumeText: `DAVID CHEN
Junior Software Engineer | david.chen@alumni.edu | San Jose, CA | linkedin.com/in/davidchen-dev

SUMMARY
Motivated Software Engineer graduate with a strong foundation in data structures, algorithms, object-oriented design, and relational database systems. Proficient in Python, Java, SQL, and Git.

TECHNICAL SKILLS
- Languages: Python, Java, JavaScript, SQL, C++
- Data Structures & Algorithms: Hash Tables, Trees, Graphs, Sorting, Dynamic Programming
- Databases: PostgreSQL, SQLite, MySQL
- Core Concepts: Object-Oriented Design, RESTful APIs, Version Control (Git), Unit Testing

EDUCATION
B.S. in Computer Science | State University (Graduated May 2025)
- Relevant Coursework: Data Structures & Algorithms (Grade: A), Database Management Systems (Grade: A-), Operating Systems, Software Engineering

PROJECTS
- Distributed Key-Value Store: Implemented an in-memory key-value store in Python utilizing custom hash tables with separate chaining for collision resolution and LRU cache eviction.
- Student Enrollment Portal: Built a full-stack CRUD application with React and PostgreSQL, creating normalized schemas and indexed queries.

INTERNSHIP EXPERIENCE
Software Engineering Intern | TechStart Labs (Summer 2024)
- Implemented automated test suites and optimized database queries for internal analytics.
- Authored clear technical documentation and participated in daily standups and sprint retrospectives.`,

  jobDescription: `ROLE: Junior Software Engineer
COMPANY: Horizon Technologies (Google Student Club Hackathon 2026 Partner)

RESPONSIBILITIES:
- Write clean, testable, and well-documented code in Python or Java.
- Implement fundamental data structures and algorithmic solutions for core services.
- Design and query relational database schemas using SQL.
- Communicate technical approaches clearly during code reviews and team discussions.

REQUIRED COMPETENCIES:
1. Data Structures (Hash Maps, Trees, Arrays) (Importance: High)
2. Algorithms & Computational Complexity (Importance: High)
3. Problem Solving & Edge Case Handling (Importance: High)
4. Database Fundamentals & SQL (Importance: Medium)
5. Communication & Technical Articulation (Importance: Medium)`
};

export const JUNIOR_SWE_COMPETENCIES = [
  {
    name: "Data Structures",
    category: "technical",
    requiredLevel: "intermediate",
    importance: "high",
    description: "Understanding of internal memory representation, hash tables, trees, and practical trade-offs.",
    initialStatus: "Claimed but unvalidated"
  },
  {
    name: "Algorithms & Complexity",
    category: "technical",
    requiredLevel: "intermediate",
    importance: "high",
    description: "Time and space complexity analysis (Big-O), search/sort algorithms, and worst-case bounds.",
    initialStatus: "Claimed but unvalidated"
  },
  {
    name: "Problem Solving",
    category: "technical",
    requiredLevel: "intermediate",
    importance: "high",
    description: "Structured analytical reasoning, edge-case identification, and boundary condition handling.",
    initialStatus: "Not assessed"
  },
  {
    name: "Database Fundamentals",
    category: "technical",
    requiredLevel: "intermediate",
    importance: "medium",
    description: "Relational data modeling, primary/foreign keys, joins, and SQL query structure.",
    initialStatus: "Claimed but unvalidated"
  },
  {
    name: "Communication",
    category: "behavioral",
    requiredLevel: "intermediate",
    importance: "medium",
    description: "Clarity of technical explanations, structure, and responsiveness to interviewer guidance.",
    initialStatus: "Not assessed"
  }
];

export const JUNIOR_SWE_RESUME_CLAIMS = [
  {
    claim: "Implemented an in-memory key-value store in Python utilizing custom hash tables with separate chaining for collision resolution.",
    category: "technical",
    targetCompetency: "Data Structures",
    verificationStatus: "Claimed but unvalidated"
  },
  {
    claim: "Strong foundation in data structures, algorithms, and computational complexity (Grade A in DSA).",
    category: "technical",
    targetCompetency: "Algorithms & Complexity",
    verificationStatus: "Claimed but unvalidated"
  },
  {
    claim: "Built a full-stack CRUD application with React and PostgreSQL, creating normalized schemas and indexed queries.",
    category: "technical",
    targetCompetency: "Database Fundamentals",
    verificationStatus: "Claimed but unvalidated"
  },
  {
    claim: "Authored clear technical documentation and participated in daily standups and sprint retrospectives.",
    category: "behavioral",
    targetCompetency: "Communication",
    verificationStatus: "Claimed but unvalidated"
  }
];

// --- 3 DISTINCT CANDIDATE ANSWER PATHS FOR JUNIOR SOFTWARE ENGINEER ---
export const SWE_SCENARIO_PRESETS = {
  scenarioA: {
    title: "Scenario A: Strong Answer (Mastery -> Escalation)",
    pathType: "strong",
    description: "Candidate explains hash map internals, array indexing, hash function modulo, O(1) average lookup, and proactively addresses collision handling (separate chaining vs open addressing).",
    q1_answer: `A hash map provides average O(1) time complexity for insertions and lookups by using a hash function to map keys to bucket indices in an underlying array.

Under the hood:
1. When a key is inserted, a hash function computes an integer hash code from the key, which is then mapped to a bucket index using modulo arithmetic: index = hash(key) % array_capacity.
2. In the average case, keys distribute uniformly across buckets, allowing constant-time direct array indexing.
3. However, hash collisions inevitably occur when two distinct keys yield the same index. There are two primary strategies to resolve this:
   - Separate Chaining: Each bucket stores a linked list (or balanced red-black tree, like Java 8+ HashMap when bucket size exceeds 8) of colliding entries.
   - Open Addressing: All entries reside directly in the array; upon collision, we probe alternative buckets using linear probing, quadratic probing, or double hashing.
4. If too many collisions occur without resizing, lookup degrades to O(n) worst-case. To prevent this, hash maps track a load factor (e.g. 0.75) and dynamically double the capacity and rehash all keys when exceeded.`,
    expectedOutcome: "Rubric Level 4 (Strong Demonstration). Difficulty escalates to 'advanced' on LRU cache design and distributed rehashing."
  },

  scenarioB: {
    title: "Scenario B: Partially Correct Answer (Gap -> Targeted Follow-Up)",
    pathType: "partial",
    description: "Candidate explains key-value mapping and O(1) average lookup, but fails to explain collision handling or worst-case bounds.",
    q1_answer: `A hash map is an associative data structure that stores key-value pairs. It is very fast because lookups, insertions, and deletions take O(1) constant time on average. It works by taking a key, running it through a hashing algorithm, and getting an index so that you can look up the value directly in memory without having to loop through an array or traverse a binary tree.`,
    expectedOutcome: "Rubric Level 2 (Partial Understanding). Identifies missing concept: collision resolution. Engine generates a surgical follow-up investigating collision handling."
  },

  scenarioC: {
    title: "Scenario C: Ambiguous Answer (Uncertainty -> Clarification Probe)",
    pathType: "ambiguous",
    description: "Candidate gives a brief, vague response citing language built-ins without demonstrating underlying mechanical understanding.",
    q1_answer: `Hash maps are fast because in Python dictionaries or JavaScript objects you just pass a key like myDict['user'] and it finds it instantly. It doesn't need to search through elements so it is constant time.`,
    expectedOutcome: "Rubric Level 1 (Limited Evidence). Engine flags High Uncertainty and issues a clarification request asking for internal array mapping details."
  }
};

// --- PRESET FOR SENIOR AI & FULL-STACK (Preserved for compatibility) ---
export const SAMPLE_CANDIDATE = {
  name: "Alex Rivera",
  targetRole: "Senior AI & Full-Stack Engineer",
  resumeText: `ALEX RIVERA\nSenior Software & Machine Learning Engineer | alex.rivera@example.com\nSUMMARY: 5+ years building scalable distributed systems and ML pipelines.\nTECHNICAL SKILLS: Python, TypeScript, React, Node.js, PostgreSQL, PyTorch`,
  jobDescription: `ROLE: Senior AI & Full-Stack Engineer\nREQUIRED COMPETENCIES: Machine Learning Pipelines & Data Integrity, SQL Optimization, Full-Stack Architecture`
};

export const PRESET_COMPETENCIES = [
  {
    name: "Machine Learning Pipelines & Data Integrity",
    category: "technical",
    requiredLevel: "advanced",
    importance: "high",
    description: "Ability to construct robust ML pipelines, prevent data leakage, and ensure model generalization.",
    initialStatus: "Claimed but unvalidated"
  },
  {
    name: "SQL Optimization & Database Architecture",
    category: "technical",
    requiredLevel: "advanced",
    importance: "high",
    description: "Deep understanding of indexes, query execution plans, and relational database tuning.",
    initialStatus: "Claimed but unvalidated"
  },
  {
    name: "Full-Stack Web Architecture (Node/React)",
    category: "technical",
    requiredLevel: "intermediate",
    importance: "medium",
    description: "Designing RESTful APIs in Node/Express and building performant React frontends.",
    initialStatus: "Claimed but unvalidated"
  },
  {
    name: "System Design, Scalability & Caching",
    category: "architecture",
    requiredLevel: "advanced",
    importance: "medium",
    description: "Microservices design, Redis caching strategies, and handling high-concurrency workloads.",
    initialStatus: "Not assessed"
  },
  {
    name: "Production Problem Solving & Reliability",
    category: "behavioral",
    requiredLevel: "intermediate",
    importance: "medium",
    description: "Diagnosing production outages, debugging distributed issues, and root cause analysis.",
    initialStatus: "Not assessed"
  }
];

export const PRESET_RESUME_CLAIMS = [
  {
    claim: "Built automated training pipelines with data validation safeguards preventing feature leakage and distribution drift.",
    category: "technical",
    targetCompetency: "Machine Learning Pipelines & Data Integrity",
    verificationStatus: "Claimed but unvalidated"
  },
  {
    claim: "Experienced in SQL query optimization and PostgreSQL schema indexing, reducing batch pipeline runtime by 62%.",
    category: "technical",
    targetCompetency: "SQL Optimization & Database Architecture",
    verificationStatus: "Claimed but unvalidated"
  },
  {
    claim: "Architected resilient RESTful microservices with Node.js and TypeScript handling high-concurrency event ingestion.",
    category: "technical",
    targetCompetency: "Full-Stack Web Architecture (Node/React)",
    verificationStatus: "Claimed but unvalidated"
  },
  {
    claim: "Designed and deployed real-time predictive ML services serving 10M+ daily requests with <35ms p99 latency.",
    category: "architecture",
    targetCompetency: "System Design, Scalability & Caching",
    verificationStatus: "Claimed but unvalidated"
  }
];

export const ML_SCENARIO_PRESETS = {
  scenarioA: {
    title: "Scenario A: Strong Answer (Mastery -> Escalation)",
    pathType: "strong",
    description: "Candidate answers with rigorous depth on pipeline isolation, scikit-learn Pipeline encapsulation, TimeSeriesSplit, and GroupKFold.",
    q1_answer: `To prevent data leakage when training a machine learning model, you must ensure that no information from the test or validation dataset is available during model training or feature engineering. 

First, the train/test split must occur before ANY preprocessing or feature transformations. If you fit a StandardScaler, Imputer, or TargetEncoder on the entire dataset, validation information leaks into the training pipeline. In scikit-learn, this is avoided by strictly encapsulating transformers and estimators inside a Pipeline object and calling fit_transform only on training splits.

Second, for time-series or sequential data, random k-fold cross-validation will cause temporal leakage (predicting past events using future context). Instead, time-series split or rolling window validation must be utilized.

Third, group-level leakage must be mitigated using GroupKFold when multiple samples belong to the same entity (e.g. medical patients or user accounts) so that an entity doesn't appear in both train and validation splits.`,
    expectedOutcome: "Rubric Level 4 (Strong Demonstration). Difficulty escalates to 'advanced' on high-concurrency caching & system architecture."
  },

  scenarioB: {
    title: "Scenario B: Incomplete Answer (Gap -> Targeted Follow-Up)",
    pathType: "partial",
    description: "Candidate gives a generic answer that mentions model training and hyperparameter tuning, but fails to explain how to prevent data leakage.",
    q1_answer: `When training machine learning models, I usually start by loading the data into pandas and exploring the correlations. Then I split the data using train_test_split from sklearn. After that, I try several algorithms like Random Forest and XGBoost to see which one performs best. I tune the hyperparameters with GridSearchCV, check the accuracy and F1 score, and pick the best model for deployment.`,
    expectedOutcome: "Rubric Level 2 (Partial Understanding). Identifies missing concept 'feature transformation leakage / temporal split'. Asks surgical follow-up investigating the specific knowledge gap."
  },

  scenarioC: {
    title: "Scenario C: Ambiguous Answer (Uncertainty -> Clarification Probe)",
    pathType: "ambiguous",
    description: "Candidate gives a brief response about using libraries without explaining validation safeguards.",
    q1_answer: `I just use standard scikit-learn functions and call fit on the dataset. The library handles the model training and splits automatically.`,
    expectedOutcome: "Rubric Level 1 (Limited Evidence). Engine flags High Uncertainty and issues a clarification request asking for validation split details."
  }
};

export const SCENARIO_PRESETS = ML_SCENARIO_PRESETS;

// --- 0-4 STANDARDIZED RUBRIC DEFINITIONS ---
export const RUBRIC_LEVELS = {
  0: { level: 0, label: "No relevant evidence", description: "Answer does not provide relevant technical evidence or was left unanswered." },
  1: { level: 1, label: "Limited evidence", description: "Demonstrates superficial recall or ambiguous claims without mechanical substance." },
  2: { level: 2, label: "Partial understanding", description: "Identifies core high-level concepts but omits critical mechanisms or edge cases." },
  3: { level: 3, label: "Competent demonstration", description: "Clear, correct technical explanation addressing primary criteria and complexities." },
  4: { level: 4, label: "Strong demonstration", description: "Exemplary depth, proactive coverage of edge cases, internal trade-offs, and architecture." }
};

// --- CORE OFFLINE ENGINE SERVICE ---
export class FallbackEngineService {
  /**
   * Transparent Question Priority Algorithm
   * Priority = (roleImportance * uncertainty * assessmentNeed * infoGain) - repetitionPenalty - timeCostPenalty
   */
  calculateQuestionPriority({
    roleImportance = 0.8,
    evidenceUncertainty = 0.9,
    assessmentNeed = 0.9,
    expectedInformationGain = 0.85,
    repetitionPenalty = 0.0,
    timeCostPenalty = 0.1
  }) {
    // Documented formula:
    const baseScore = roleImportance * evidenceUncertainty * assessmentNeed * expectedInformationGain;
    const finalPriority = Math.max(0, Math.min(1, baseScore - repetitionPenalty - timeCostPenalty));
    return {
      formula: "question_priority = (role_importance * evidence_uncertainty * assessment_need * expected_information_gain) - repetition_penalty - time_cost_penalty",
      factors: {
        roleImportance: Number(roleImportance.toFixed(2)),
        evidenceUncertainty: Number(evidenceUncertainty.toFixed(2)),
        assessmentNeed: Number(assessmentNeed.toFixed(2)),
        expectedInformationGain: Number(expectedInformationGain.toFixed(2)),
        repetitionPenalty: Number(repetitionPenalty.toFixed(2)),
        timeCostPenalty: Number(timeCostPenalty.toFixed(2))
      },
      priorityScore: Number(finalPriority.toFixed(3))
    };
  }

  getInitialQuestion(role = "Senior AI & Full-Stack Engineer") {
    const priorityCalc = this.calculateQuestionPriority({
      roleImportance: 0.95,
      evidenceUncertainty: 1.0,
      assessmentNeed: 1.0,
      expectedInformationGain: 0.9,
      repetitionPenalty: 0.0,
      timeCostPenalty: 0.05
    });

    const isJunior = role && (role.toLowerCase().includes("junior") || (role.toLowerCase().includes("software engineer") && !role.toLowerCase().includes("senior")));

    if (isJunior) {
      return {
        prompt: "Explain the internal mechanics of a Hash Map. How does it achieve average O(1) lookup time, and what strategies are used to resolve hash collisions?",
        difficulty: "intermediate",
        competencyName: "Data Structures",
        estimatedDurationMinutes: 4,
        rubricCriteria: "Level 4: Explains hash code calculation, bucket indexing via modulo, O(1) average vs O(n) worst case, and compares collision strategies (separate chaining vs open addressing). Level 2: Explains key-value lookup without collision handling. Level 1: Superficial explanation.",
        whyThisQuestion: "Why this question? Selected as primary question because Data Structures is the highest-priority competency for the Junior Software Engineer role, and the candidate's resume prominently claims implementation of a custom key-value store with collision handling.",
        uncertaintyToResolve: "Whether candidate understands low-level memory layout, hashing functions, and collision resolution trade-offs beyond standard library usage.",
        expectedKeyConcepts: ["hash function", "bucket index", "modulo", "collision", "separate chaining", "open addressing", "O(1) average", "O(n) worst-case", "load factor"],
        priorityCalculation: priorityCalc
      };
    }

    // Default Senior AI / ML question
    return {
      prompt: "Explain how you would prevent data leakage when training a machine learning model, and describe the specific architectural patterns or code practices you use.",
      difficulty: "intermediate",
      competencyName: "Machine Learning Pipelines & Data Integrity",
      estimatedDurationMinutes: 4,
      rubricCriteria: "Level 4: Explains why preprocessing must occur after split or inside pipelines. Identifies temporal/time-series leakage and group/entity leakage patterns. Level 2: Mentions train/test split without transformer encapsulation. Level 1: Superficial explanation.",
      whyThisQuestion: "Why this question? Candidate's resume claims experience in automated training pipelines preventing feature leakage. This validates production data hygiene.",
      uncertaintyToResolve: "Verification of candidate's claimed ability to prevent data leakage in production.",
      expectedKeyConcepts: ["train/test split", "pipeline", "preprocessing", "temporal", "leakage", "group"],
      priorityCalculation: priorityCalc
    };
  }

  evaluateAnswerOffline({ questionPrompt, rubricCriteria, competencyName, candidateAnswer }) {
    const text = (candidateAnswer || '').toLowerCase().trim();
    const wordCount = text.split(/\s+/).filter(Boolean).length;

    // --- Check for Insufficient Evidence / Blank or Irrelevant Answer ---
    if (!candidateAnswer || wordCount < 8 || text === 'i like coding in python.') {
      return {
        hasSufficientEvidence: false,
        score: null,
        rubricLevel: 0,
        rubricLabel: RUBRIC_LEVELS[0].label,
        status: "Insufficient evidence",
        skillState: "NOT ASSESSED",
        technicalCorrectness: "unverified",
        conceptualUnderstanding: "none",
        correctConcepts: [],
        missingConcepts: ["Core mechanical explanation", "Concrete implementation details"],
        misunderstandings: [],
        supportingExcerpts: [candidateAnswer ? candidateAnswer.trim() : "No substantial answer provided."],
        assessmentExplanation: "Response was too brief or non-committal to substantiate technical competence. Marked as Insufficient evidence.",
        confidence: "high",
        uncertainty: "high",
        recommendedFollowUp: "Ask candidate to clarify the fundamental mechanics."
      };
    }

    const isMlQuestion = (competencyName && competencyName.includes("Machine Learning")) || (questionPrompt && questionPrompt.toLowerCase().includes("leak"));

    if (isMlQuestion) {
      // 1. Strong ML Answer (Scenario A)
      const hasSplitBeforePreprocess = text.includes("split must occur before") || text.includes("fit_transform only on training") || (text.includes("pipeline") && text.includes("standardscaler"));
      const hasTemporalOrGroup = text.includes("timeseries") || text.includes("time-series") || text.includes("groupkfold") || text.includes("temporal");

      if (hasSplitBeforePreprocess || (text.includes("pipeline") && text.includes("leakage") && (hasTemporalOrGroup || text.includes("estimator")))) {
        return {
          hasSufficientEvidence: true,
          score: 92,
          rubricLevel: 4,
          rubricLabel: RUBRIC_LEVELS[4].label,
          status: "Demonstrated",
          skillState: "DEMONSTRATED",
          technicalCorrectness: "high",
          conceptualUnderstanding: "clear and comprehensive",
          correctConcepts: [
            "Encapsulating transformers inside Pipeline objects",
            "Fitting transformers strictly on training splits",
            "Preventing temporal leakage via TimeSeriesSplit",
            "Mitigating group leakage using GroupKFold"
          ],
          missingConcepts: [],
          misunderstandings: [],
          supportingExcerpts: [
            "train/test split must occur before ANY preprocessing or feature transformations",
            "strictly encapsulating transformers and estimators inside a Pipeline object"
          ],
          assessmentExplanation: "Candidate demonstrated clear mastery of ML data integrity, explaining preprocessing isolation, temporal leakage hazards, and group entity isolation.",
          confidence: "high",
          uncertainty: "low",
          recommendedFollowUp: "Escalate difficulty to Advanced: High-concurrency caching and distributed system architecture."
        };
      }

      // 2. Partial ML Answer (Scenario B)
      if (text.includes("train_test_split") || text.includes("gridsearchcv") || text.includes("random forest") || text.includes("xgboost") || !text.includes("fit_transform")) {
        return {
          hasSufficientEvidence: true,
          score: 50,
          rubricLevel: 2,
          rubricLabel: RUBRIC_LEVELS[2].label,
          status: "Partially demonstrated",
          skillState: "NOT DEMONSTRATED",
          technicalCorrectness: "medium",
          conceptualUnderstanding: "partial",
          correctConcepts: ["Train/test split execution", "Hyperparameter optimization with cross-validation"],
          missingConcepts: [
            "Preventing feature transformation leakage during preprocessing",
            "Encapsulating transformers inside scikit-learn Pipeline objects",
            "Mitigating temporal leakage in sequential datasets"
          ],
          misunderstandings: ["Candidate applied transformations across entire dataset or did not establish how to prevent feature transformation leakage during preprocessing."],
          supportingExcerpts: [
            "split the data using train_test_split from sklearn",
            "tune the hyperparameters with GridSearchCV"
          ],
          assessmentExplanation: "Candidate described high-level training and model selection, but did not establish how to prevent feature transformation leakage during preprocessing.",
          confidence: "high",
          uncertainty: "medium",
          recommendedFollowUp: "Targeted Probe: You mentioned train_test_split, but how do you prevent feature transformation leakage during preprocessing?"
        };
      }

      // 3. Ambiguous ML Answer (Scenario C)
      return {
        hasSufficientEvidence: true,
        score: 35,
        rubricLevel: 1,
        rubricLabel: RUBRIC_LEVELS[1].label,
        status: "Partially demonstrated",
        skillState: "NOT DEMONSTRATED",
        technicalCorrectness: "low",
        conceptualUnderstanding: "superficial",
        correctConcepts: ["Mentioned library usage"],
        missingConcepts: [
          "Feature transformation leakage prevention",
          "Pipeline encapsulation",
          "Cross-validation split strategies"
        ],
        misunderstandings: ["Relied on library defaults without demonstrating mechanical safeguards."],
        supportingExcerpts: [candidateAnswer.trim()],
        assessmentExplanation: "Candidate cited high-level library functions without explaining validation split safeguards or leakage prevention.",
        confidence: "medium",
        uncertainty: "high",
        recommendedFollowUp: "Clarification Probe: Inquire how preprocessing steps are isolated from validation sets."
      };
    }

    // --- Junior SWE / Hash Map Branch ---
    // Check for Ambiguous (Scenario C)
    if (wordCount < 18 || (text.includes("dictionary") && !text.includes("collision") && !text.includes("bucket"))) {
      return {
        hasSufficientEvidence: true,
        score: 38,
        rubricLevel: 1,
        rubricLabel: RUBRIC_LEVELS[1].label,
        status: "Partially demonstrated",
        skillState: "NOT DEMONSTRATED",
        technicalCorrectness: "low",
        conceptualUnderstanding: "superficial",
        correctConcepts: ["Identified that lookups avoid linear scanning"],
        missingConcepts: [
          "Hash function computation & bucket array mapping",
          "Handling collisions when two keys map to identical index",
          "Worst-case algorithmic bounds"
        ],
        misunderstandings: ["Answer cited high-level language syntax without explaining underlying data structure mechanics."],
        supportingExcerpts: [candidateAnswer.trim()],
        assessmentExplanation: "Candidate mentioned language-level dictionary syntax, but did not demonstrate mechanical understanding of array indexing, hash codes, or collision resolution.",
        confidence: "medium",
        uncertainty: "high",
        recommendedFollowUp: "Clarification Probe: Ask candidate how string keys are mapped into array memory indices under the hood."
      };
    }

    // Check for Strong (Scenario A)
    const hasCollisionDetails = text.includes("chaining") || text.includes("open addressing") || text.includes("collision") || text.includes("linear probing");
    const hasHashingDetails = text.includes("modulo") || text.includes("bucket") || text.includes("array") || text.includes("load factor") || text.includes("tree");

    if (hasCollisionDetails && (hasHashingDetails || text.includes("hash code") || text.includes("o(1)"))) {
      const excerpts = [];
      if (candidateAnswer.includes("Separate Chaining") || candidateAnswer.includes("separate chaining")) {
        excerpts.push("Separate Chaining: Each bucket stores a linked list or balanced tree of colliding entries.");
      } else if (candidateAnswer.includes("Open Addressing") || candidateAnswer.includes("open addressing")) {
        excerpts.push("Open Addressing: probe alternative buckets using linear probing or double hashing.");
      } else {
        excerpts.push(candidateAnswer.slice(0, 140) + "...");
      }

      return {
        hasSufficientEvidence: true,
        score: 95,
        rubricLevel: 4,
        rubricLabel: RUBRIC_LEVELS[4].label,
        status: "Demonstrated",
        skillState: "DEMONSTRATED",
        technicalCorrectness: "high",
        conceptualUnderstanding: "clear and comprehensive",
        correctConcepts: [
          "Hash code calculation and array index modulo mapping",
          "O(1) average lookup vs O(n) worst-case collision degradation",
          "Separate chaining with linked lists / balanced trees",
          "Open addressing with linear or quadratic probing",
          "Load factor tracking and dynamic resizing"
        ],
        missingConcepts: [],
        misunderstandings: [],
        supportingExcerpts: excerpts,
        assessmentExplanation: "Candidate demonstrated exemplary command of hash map internals, explaining index mapping, average vs worst-case bounds, and contrasting collision resolution paradigms.",
        confidence: "high",
        uncertainty: "low",
        recommendedFollowUp: "Escalate difficulty to Advanced: Distributed caching and LRU cache implementation."
      };
    }

    // Partial Answer (Scenario B)
    const excerpts = [];
    if (candidateAnswer.includes("associative data structure") || candidateAnswer.includes("key-value")) {
      excerpts.push("stores key-value pairs... lookups take O(1) constant time on average.");
    } else {
      excerpts.push(candidateAnswer.slice(0, 110) + "...");
    }

    return {
      hasSufficientEvidence: true,
      score: 55,
      rubricLevel: 2,
      rubricLabel: RUBRIC_LEVELS[2].label,
      status: "Partially demonstrated",
      skillState: "NOT DEMONSTRATED",
      technicalCorrectness: "medium",
      conceptualUnderstanding: "partial",
      correctConcepts: ["Key-value associative mapping", "Average O(1) lookup expectation"],
      missingConcepts: [
        "Collision resolution strategies (Separate Chaining vs Open Addressing)",
        "Worst-case O(n) complexity under severe collision clustering",
        "Array bucket indexing via hash code modulo"
      ],
      misunderstandings: ["Assumed constant time O(1) is guaranteed without discussing collision degradation or resizing."],
      supportingExcerpts: excerpts,
      assessmentExplanation: "Candidate explained high-level key-value mapping and average O(1) complexity, but completely omitted how hash collisions occur and how they are resolved.",
      confidence: "high",
      uncertainty: "medium",
      recommendedFollowUp: "Targeted Probe: What happens when two distinct keys yield the exact same bucket index?"
    };
  }

  generateNextQuestionOffline({ previousEvaluation, questionIndex = 1, remainingQuestions = 3, role = "Senior AI & Full-Stack Engineer" }) {
    const isJunior = role && (role.toLowerCase().includes("junior") || (role.toLowerCase().includes("software engineer") && !role.toLowerCase().includes("senior")));

    // Branch C: Clarification probe after ambiguous answer
    if (previousEvaluation && (previousEvaluation.rubricLevel === 1 || previousEvaluation.uncertainty === "high")) {
      const priorityCalc = this.calculateQuestionPriority({
        roleImportance: 0.9,
        evidenceUncertainty: 0.95,
        assessmentNeed: 0.95,
        expectedInformationGain: 0.9,
        repetitionPenalty: 0.1,
        timeCostPenalty: 0.05
      });

      if (isJunior) {
        return {
          prompt: "Could you walk through the step-by-step process of how a string key is mapped to an array bucket index in memory, and what makes the lookup constant time rather than a linear search?",
          difficulty: "intermediate",
          competencyName: "Data Structures",
          estimatedDurationMinutes: 3,
          rubricCriteria: "Level 3: Explains hash code computation, modulo by array length, and direct pointer/offset addressing in memory.",
          whyThisQuestion: "Why this question? Candidate's previous response was ambiguous regarding internal data structure mechanics. This clarification probe investigates that specific knowledge gap and resolves uncertainty.",
          uncertaintyToResolve: "Resolving uncertainty regarding foundational memory indexing and hash computation.",
          expectedKeyConcepts: ["hash function", "modulo array length", "memory address pointer", "O(1) indexing"],
          priorityCalculation: priorityCalc
        };
      }

      return {
        prompt: "Could you explain specifically how you isolate data preprocessing inside cross-validation splits to ensure that feature statistics from validation folds do not influence training?",
        difficulty: "intermediate",
        competencyName: "Machine Learning Pipelines & Data Integrity",
        estimatedDurationMinutes: 3,
        rubricCriteria: "Level 3: Explains fitting transformers solely on training split.",
        whyThisQuestion: "Why this question? Candidate gave an ambiguous response regarding pipeline mechanics. This clarification probe investigates that specific knowledge gap and resolves uncertainty.",
        uncertaintyToResolve: "Resolving uncertainty regarding validation fold leakage safeguards.",
        expectedKeyConcepts: ["pipeline", "train split", "fit_transform", "data leakage"],
        priorityCalculation: priorityCalc
      };
    }

    // Branch B: Surgical probe after partially correct answer
    if (previousEvaluation && (previousEvaluation.status === "Partially demonstrated" || (previousEvaluation.missingConcepts && previousEvaluation.missingConcepts.length > 0 && previousEvaluation.status !== "Demonstrated"))) {
      const priorityCalc = this.calculateQuestionPriority({
        roleImportance: 0.95,
        evidenceUncertainty: 0.85,
        assessmentNeed: 0.9,
        expectedInformationGain: 0.92,
        repetitionPenalty: 0.1,
        timeCostPenalty: 0.05
      });

      const isMlProbe = !isJunior || (previousEvaluation.missingConcepts && previousEvaluation.missingConcepts.some(c => c.toLowerCase().includes("leak") || c.toLowerCase().includes("transformation")));

      if (isMlProbe) {
        return {
          prompt: "You mentioned using train_test_split and StandardScaler, but did not establish how you prevent feature transformation leakage during preprocessing and cross-validation. How would you refactor your pipeline to prevent this data leakage?",
          difficulty: "intermediate",
          competencyName: "Machine Learning Pipelines & Data Integrity",
          estimatedDurationMinutes: 4,
          rubricCriteria: "Level 3+: Candidate explains why preprocessing steps must be fitted only on training folds, using Pipeline objects or GroupKFold/TimeSeriesSplit.",
          whyThisQuestion: "Why this question? The candidate's previous response did not establish how you prevent data leakage during preprocessing. This follow-up investigates that specific knowledge gap.",
          uncertaintyToResolve: "Testing whether candidate understands transformer leakage across validation folds.",
          expectedKeyConcepts: ["pipeline", "fit_transform", "cross-validation leakage", "data leakage"],
          priorityCalculation: priorityCalc
        };
      }

      return {
        prompt: "You noted that hash maps achieve average O(1) lookup, but what happens when two different keys generate the identical hash code or bucket index? Describe the collision resolution techniques you would use and how they impact worst-case time complexity.",
        difficulty: "intermediate",
        competencyName: "Data Structures",
        estimatedDurationMinutes: 4,
        rubricCriteria: "Level 4: Compares separate chaining vs open addressing (linear/quadratic probing), and identifies O(n) worst-case degradation when all keys collide into one bucket.",
        whyThisQuestion: "Why this question? Selected because candidate's previous response explained average-case lookup but completely omitted collision resolution. This surgical probe investigates that specific knowledge gap.",
        uncertaintyToResolve: "Testing whether candidate understands worst-case algorithmic degradation and collision handling trade-offs.",
        expectedKeyConcepts: ["separate chaining", "open addressing", "linear probing", "O(n) worst case", "balanced tree in bucket"],
        priorityCalculation: priorityCalc
      };
    }

    // Branch A: Mastery escalation (or next high-priority competency)
    if (questionIndex === 1) {
      const priorityCalc = this.calculateQuestionPriority({
        roleImportance: 0.9,
        evidenceUncertainty: 0.7,
        assessmentNeed: 0.85,
        expectedInformationGain: 0.88,
        repetitionPenalty: 0.0,
        timeCostPenalty: 0.1
      });

      if (!isJunior) {
        return {
          prompt: "When designing a caching layer with Redis in front of a high-concurrency database, how do you handle cache invalidation, cache stampede (thundering herd), and cache penetration?",
          difficulty: "advanced",
          competencyName: "System Design, Scalability & Caching",
          estimatedDurationMinutes: 5,
          rubricCriteria: "Level 4: Compares invalidation strategies (write-through, cache-aside). Identifies mutual exclusion locks or probabilistic early expiration for stampede. Explains Bloom filters or null caching for penetration.",
          whyThisQuestion: "Why this question? Candidate has solidly demonstrated ML pipeline integrity. The engine escalates difficulty to advanced high-concurrency caching and system reliability.",
          uncertaintyToResolve: "Assessing candidate's high-concurrency caching and system reliability architectures.",
          expectedKeyConcepts: ["cache stampede", "distributed lock", "cache penetration", "Bloom filter", "write-aside"],
          priorityCalculation: priorityCalc
        };
      }

      return {
        prompt: "How would you design a Least Recently Used (LRU) Cache that supports both get(key) and put(key, value) operations in strictly O(1) time complexity? What combination of data structures is required and why?",
        difficulty: "advanced",
        competencyName: "Problem Solving",
        estimatedDurationMinutes: 5,
        rubricCriteria: "Level 4: Identifies combining a Doubly Linked List with a Hash Map. Explains why singly linked list cannot achieve O(1) node deletion and how hash map provides constant time node lookup.",
        whyThisQuestion: "Why this question? Candidate demonstrated mastery of foundational hash map mechanics. The engine escalates difficulty to evaluate practical data structure composition and algorithmic trade-offs.",
        uncertaintyToResolve: "Verifying whether candidate can synthesize multiple data structures to meet strict algorithmic constraints.",
        expectedKeyConcepts: ["doubly linked list", "hash map", "O(1) eviction", "head/tail pointers", "node removal"],
        priorityCalculation: priorityCalc
      };
    }

    // Question 3: Database Fundamentals
    const priorityCalc = this.calculateQuestionPriority({
      roleImportance: 0.85,
      evidenceUncertainty: 0.9,
      assessmentNeed: 0.9,
      expectedInformationGain: 0.8,
      repetitionPenalty: 0.0,
      timeCostPenalty: 0.15
    });

    return {
      prompt: "In a relational database, explain the difference between an INNER JOIN, a LEFT OUTER JOIN, and a FULL OUTER JOIN, and describe what happens to performance when joining on non-indexed columns.",
      difficulty: "intermediate",
      competencyName: "Database Fundamentals",
      estimatedDurationMinutes: 4,
      rubricCriteria: "Level 3+: Clearly differentiates match semantics across joins, identifies table scans vs index seeks, and explains join algorithms (nested loop, hash join, merge join).",
      whyThisQuestion: "Why this question? Selected to assess the unassessed core requirement 'Database Fundamentals' before interview completion.",
      uncertaintyToResolve: "Assessing candidate's relational schema knowledge and indexing intuition.",
      expectedKeyConcepts: ["inner join", "left join", "null padding", "index scan", "nested loop join", "hash join"],
      priorityCalculation: priorityCalc
    };
  }
}

export const fallbackEngine = new FallbackEngineService();
