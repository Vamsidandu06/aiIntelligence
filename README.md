# 🚀 InterviewIQ AI — Adaptive Interview Intelligence
> **Tagline:** *"Every Answer Shapes the Next Question."*  
> **Google Student Club Hackathon 2026 Submission**

[![Tests](https://img.shields.io/badge/tests-11%20passing-emerald.svg)]()
[![Node](https://img.shields.io/badge/node-v24.13.0-blue.svg)]()
[![React](https://img.shields.io/badge/react-18.3-cyan.svg)]()
[![Gemini](https://img.shields.io/badge/AI-Google%20Gemini%20API-indigo.svg)]()
[![License](https://img.shields.io/badge/license-MIT-slate.svg)]()

---

## 📌 Project Overview
Traditional technical interview tools fall into two broken extremes:
1. **Static Questionnaires:** Fixed, scripted question lists that ignore whether a candidate is an expert or struggling.
2. **Generic AI Chatbots:** Unconstrained bots that hallucinate arbitrary scores, fail to test unassessed competencies, or lack explainable rubrics.

**InterviewIQ AI** solves this with a dedicated **Adaptive Question Engine**:
- Evaluates each answer against structured, competency-specific rubrics.
- Identifies correct concepts, missing concepts, and misunderstandings.
- Dynamically pivots the interview: **strong answers escalate difficulty**, while **incomplete answers trigger targeted follow-up probes** investigating the exact knowledge gap.
- Explains every question choice with a transparent **"Why this question?"** rationale.
- Cross-references candidate resume claims against real-time interview answers.
- Provides **non-punitive, explainable integrity monitoring** without pseudoscience or bias.

---

## 🌟 Core Innovations

### 1. Dynamic Question Adaptation
The same candidate produces completely different interview trajectories based on demonstrated competence:
- **Scenario A (Mastery $\rightarrow$ Difficulty Escalation):** Candidate explains data leakage prevention with encapsulated pipelines and temporal splits $\rightarrow$ System verifies competency and escalates to advanced distributed architecture questions.
- **Scenario B (Knowledge Gap $\rightarrow$ Surgical Probe):** Candidate gives a generic model training answer omitting leakage prevention $\rightarrow$ System flags the gap and immediately asks a targeted follow-up investigating feature transformation leakage.

### 2. Transparent Decision Rationale ("Why this question?")
Every question displays an explainable card:
> *"Why this question? Your previous answer demonstrated an understanding of model training but did not establish how you prevent feature transformation leakage. This question investigates that specific knowledge gap."*

### 3. Evidence-Based 6-State Competency Framework
Competencies are tracked strictly based on available evidence, never assumptions:
1. `Demonstrated`: Verified with technical correctness and concrete examples.
2. `Partially demonstrated`: Core idea touched, but missed critical rubric criteria.
3. `Claimed but unvalidated`: Listed on resume, not yet tested.
4. `Not demonstrated`: Question was asked, but candidate was unable to provide a correct response.
5. `Not assessed`: Role requirement not reached due to time/question limits.
6. `Insufficient evidence`: Candidate provided too brief or non-committal an answer.

### 4. Resume Claim Verification
Cross-references resume claims (e.g., *"Experienced in SQL query optimization"*) with interview performance, capturing verbatim quotes, rubric assessments, and remaining uncertainty for recruiter inspection.

### 5. Responsible Integrity Intelligence
Tracks observable browser events (`visibilitychange: hidden`, focus shifts, candidate-disclosed external references). **Strictly rejects emotion/facial analysis and algorithmic cheating accusations.** Kept completely separate from competency scores.

### 6. Voice Interview Accessibility
Integrated browser Speech-to-Text (`SpeechRecognition`) and Text-to-Speech (`SpeechSynthesis`) with real-time editable transcription and question audio playback.

---

## 🏛️ System Architecture

```
                       +-----------------------------------+
                       |      React 18 + Vite Frontend     |
                       |  Tailwind CSS + Lucide + Recharts |
                       +-----------------+-----------------+
                                         |
                                         | REST API (JSON / Multipart)
                                         v
                       +-----------------------------------+
                       |       Node.js + Express Backend   |
                       |  Zod Validation + Multer Uploads  |
                       +--------+-----------------+--------+
                                |                 |
          +---------------------+                 +---------------------+
          v                                                             v
+------------------------+                                    +-------------------+
| Adaptive Engine        |                                    | Document Parser   |
| - Rubric Evaluation    |                                    | - PDF / DOCX      |
| - Competency Updater   |                                    | - Text Extraction |
| - Gap & Coverage Logic |                                    | - Sanitization    |
| - Decision Rationale   |                                    +-------------------+
+-----------+------------+
            |
            +------------+------------+
            |                         |
            v                         v
+------------------------+  +-------------------+
| Google Gemini Service  |  | Deterministic     |
| (Structured JSON Mode) |  | Fallback Engine   |
+------------------------+  +-------------------+
            |                         |
            +------------+------------+
                         |
                         v
+-------------------------------------------------+
| Persistence: MongoDB Atlas / Local Disk JSON    |
| (Interviews, Questions, Competencies, Reports)  |
+-------------------------------------------------+
```

---

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| **Frontend** | React 18, Vite 6, Tailwind CSS, Recharts, Lucide React, React Router 6 |
| **Backend** | Node.js 24, Express 4, Zod, Multer, `pdf-parse`, `mammoth` |
| **Database** | MongoDB Atlas (Mongoose) with automatic zero-config local JSON persistence (`data/store.json`) |
| **AI Engine** | Google Gemini API (`@google/generative-ai`) + 100% Deterministic Fallback Engine |
| **Voice** | Web Speech API (`SpeechRecognition` & `SpeechSynthesis`) |

---

## 🚀 Quick Start Guide

### Prerequisites
- Node.js 18+ (tested on Node v24.13.0)
- npm 9+

### 1. Clone & Install
```bash
git clone https://github.com/your-repo/interviewiq-ai.git
cd interviewiq-ai

# Install root orchestrator dependencies
npm install

# Install server dependencies
cd server && npm install

# Install client dependencies
cd ../client && npm install
cd ..
```

### 2. Configure Environment (Optional)
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
Edit `.env` with your settings (leave blank to run in zero-config deterministic fallback mode):
```env
GEMINI_API_KEY=your_gemini_api_key_here
GEMINI_MODEL=gemini-1.5-flash
PORT=5000
MONGODB_URI=mongodb+srv://...  # Optional
```

### 3. Run the Application
You can run client and server concurrently:
```bash
npm run dev
```
Or start the backend (which also serves the compiled frontend):
```bash
cd client && npm run build && cd ..
cd server && npm start
```

Open your browser to:
- **Frontend App:** `http://localhost:5173` (dev) or `http://localhost:5000` (production)
- **API Health Check:** `http://localhost:5000/api/health`

---

## 🧪 Automated Testing
Run the automated unit and end-to-end integration test suite:
```bash
cd server
npm test
```
**Test Coverage Includes:**
- Prompt injection text sanitization
- Scenario A (Strong answer $\rightarrow$ Demonstrated $\rightarrow$ Escalates difficulty)
- Scenario B (Incomplete answer $\rightarrow$ Missing concept detected $\rightarrow$ Surgical follow-up probe)
- Insufficient evidence handling (No invented scores)
- API health and demo seed endpoints
- Non-punitive integrity logging
- Report generation & traceable rubric evidence

---

## 🎤 3-Minute Hackathon Presentation Script

| Time | Action | What to Explain to Judges |
|---|---|---|
| **0:00 - 0:30** | Open Landing Page | "Welcome to **InterviewIQ AI**. Every answer shapes the next question. Unlike traditional chatbots with static question lists, our engine dynamically evaluates candidate answers against rubrics and adapts." |
| **0:30 - 1:00** | Click **Setup** or **Demo Quick Launch** | "Here we upload a resume or load our candidate Alex Rivera. Notice the extracted competencies and resume claims mapped into verified evidence states." |
| **1:00 - 1:45** | Run **Scenario A** (Strong Answer) | "In Scenario A, Alex answers Question #1 with deep technical insight into data leakage. Notice the evaluation identifies all correct concepts and marks the skill 'Demonstrated'. Look at Question #2: the engine automatically escalates difficulty to an advanced system design scenario, with an explainable 'Why this question?' card." |
| **1:45 - 2:30** | Run **Scenario B** (Incomplete Answer) | "Now see what happens when the candidate gives an incomplete answer omitting data leakage. The engine flags the missing concept and generates a surgical follow-up question probing that exact gap. The interview sequence completely changes based on evidence." |
| **2:30 - 3:00** | Open **Report**, **Claims**, and **Integrity** | "Finally, inspect the Candidate Intelligence Dossier. Notice the multi-axis radar chart, verbatim quotes verifying resume claims, objective non-punitive integrity logs, and curated learning resources. This is transparent decision support, not an unexplained black-box score." |

---

## 🔒 Responsible AI Statement
InterviewIQ AI is designed as an objective **decision-support tool** for recruiters and candidates:
- It **does not make automated hiring or rejection decisions**.
- It **never labels candidates dishonest** if a resume claim is unassessed.
- It **strictly prohibits pseudo-scientific biometrics** (facial expressions, eye tracking, emotion inference) that unfairly discriminate against neurodivergent candidates.
- All scores are strictly traceable to explicit rubric criteria and candidate-provided answers.

---

## 📄 License
MIT License. Built for Google Student Club Hackathon 2026.
