import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import PDFDocument from 'pdfkit';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetPdfPath = path.resolve(__dirname, '../../InterviewIQ_AI_Hackathon_Presentation_Guide.pdf');
const publicPdfPath = path.resolve(__dirname, '../../client/public/InterviewIQ_AI_Hackathon_Presentation_Guide.pdf');

// Ensure client/public directory exists
if (!fs.existsSync(path.dirname(publicPdfPath))) {
  fs.mkdirSync(path.dirname(publicPdfPath), { recursive: true });
}

const doc = new PDFDocument({ margin: 45, size: 'A4' });
const writeStream = fs.createWriteStream(targetPdfPath);
doc.pipe(writeStream);

// Colors
const NAVY = '#0B192C';
const BLUE = '#2563EB';
const DARK = '#1E293B';
const GRAY = '#64748B';
const GREEN = '#059669';
const AMBER = '#D97706';

// Header Banner
doc.rect(45, 45, 505, 75).fill(NAVY);
doc.fillColor('#FFFFFF').fontSize(19).font('Helvetica-Bold').text('INTERVIEWIQ AI — PRESENTATION PLAYBOOK', 60, 60);
doc.fontSize(10).font('Helvetica').fillColor('#93C5FD').text('Google Student Club Hackathon 2026 | 3-Minute Pitch & Judge Demo Guide', 60, 85);
doc.fontSize(8.5).fillColor('#E2E8F0').text('Tagline: "Every Answer Shapes the Next Question."', 60, 102);

function sectionTitle(title, y) {
  doc.rect(45, y, 505, 20).fill('#EFF6FF');
  doc.fillColor(BLUE).fontSize(11).font('Helvetica-Bold').text(title, 55, y + 5);
}

let currY = 135;

// SECTION 1
sectionTitle('STEP 0: PRE-PITCH PREPARATION (30 SECONDS BEFORE)', currY);
currY += 28;

doc.fillColor(DARK).fontSize(9).font('Helvetica');
doc.text('1. Open Chrome/Browser in fullscreen to: http://localhost:5000', 55, currY);
currY += 14;
doc.text('2. Verify the live status pill at top right says "Deterministic Demo Mode" or "Gemini 2.0 Active".', 55, currY);
currY += 14;
doc.text('3. Have your tabs ready: Landing Page, Dashboard, and Live Interview Room.', 55, currY);
currY += 14;
doc.text('4. Deep breath: Focus on the core adaptive innovation: dynamic difficulty & gap probing.', 55, currY);
currY += 24;

// SECTION 2
sectionTitle('STEP 1: THE HOOK & PROBLEM STATEMENT (0:00 - 0:45)', currY);
currY += 28;

doc.fillColor(DARK).fontSize(9).font('Helvetica-Bold').text('What to SAY:', 55, currY);
currY += 13;
doc.font('Helvetica-Oblique').fillColor('#334155').text(
  '"Good afternoon, judges. Today\'s technical hiring tools are broken. Traditional interview bots ask rigid, pre-scripted questions regardless of whether a candidate is an expert or struggling. Other bots hallucinate random scores without evidence.\n\nWe built InterviewIQ AI. Our defining principle is: Every Answer Shapes the Next Question. Our engine evaluates candidate answers against structured rubrics in real time, escalating difficulty when mastery is proven, and drilling into specific knowledge gaps when answers fall short."',
  55, currY, { width: 485, lineGap: 2 }
);
currY += 66;

doc.font('Helvetica-Bold').fillColor(DARK).text('What to SHOW on Screen:', 55, currY);
currY += 13;
doc.font('Helvetica').fillColor(GRAY).text(
  '• Point to the Landing Page comparison: "Traditional Chatbot vs. Adaptive Intelligence" table.', 55, currY
);
currY += 24;

// SECTION 3
sectionTitle('STEP 2: LIVE DEMO — THE ADAPTIVE BRANCHING (0:45 - 2:00)', currY);
currY += 28;

doc.fillColor(DARK).fontSize(9).font('Helvetica-Bold').text('BRANCH A: Mastery Demonstrates Escalation (1-Click Launch)', 55, currY);
currY += 13;
doc.font('Helvetica').fillColor(DARK).text('1. Click "A: Strong Answer" in the top navigation bar.', 55, currY);
currY += 13;
doc.text('2. SAY: "Here is candidate Alex Rivera being asked how to prevent data leakage in ML pipelines."', 55, currY);
currY += 13;
doc.text('3. Show the evaluation: 94/100, status Demonstrated, listing pre-split encapsulation and temporal splits.', 55, currY);
currY += 13;
doc.text('4. Look at Question 2: System escalated to Advanced difficulty (PostgreSQL B-tree indexes & query planning).', 55, currY);
currY += 13;
doc.fillColor(BLUE).font('Helvetica-Bold').text('5. Highlight the card: "Why This Question? Solidly demonstrated ML foundations, escalating to database architecture."', 55, currY);
currY += 22;

doc.fillColor(DARK).fontSize(9).font('Helvetica-Bold').text('BRANCH B: The Contrast — Incomplete Answer Triggers Gap Follow-up', 55, currY);
currY += 13;
doc.font('Helvetica').fillColor(DARK).text('1. Click "B: Gap Follow-up" in the top navigation bar.', 55, currY);
currY += 13;
doc.text('2. SAY: "Now watch what happens when the candidate gives a generic answer omitting data leakage prevention."', 55, currY);
currY += 13;
doc.text('3. Show the evaluation: Partially Demonstrated (52/100) — Flags missing concept: feature transformation leakage.', 55, currY);
currY += 13;
doc.text('4. Look at Question 2: The engine does NOT escalate. It asks a surgical follow-up probing that exact gap!', 55, currY);
currY += 13;
doc.fillColor(GREEN).font('Helvetica-Bold').text('5. Punchline: "The same candidate, the same first question, but two completely divergent interview branches!"', 55, currY);

// PAGE BREAK TO PAGE 2
doc.addPage();
currY = 45;

// Header on Page 2
doc.rect(45, 45, 505, 30).fill(NAVY);
doc.fillColor('#FFFFFF').fontSize(11).font('Helvetica-Bold').text('INTERVIEWIQ AI — PRESENTATION PLAYBOOK (PAGE 2)', 55, 55);
currY = 88;

// SECTION 4
sectionTitle('STEP 3: CANDIDATE INTELLIGENCE REPORT & AUDIT TRAIL (2:00 - 2:40)', currY);
currY += 28;

doc.fillColor(DARK).fontSize(9).font('Helvetica-Bold').text('What to SHOW & SAY:', 55, currY);
currY += 13;
doc.font('Helvetica').fillColor(DARK).text('1. Click "Report" in the top menu to display the Executive Candidate Dossier.', 55, currY);
currY += 13;
doc.text('2. Competency Radar: "Shows real-time multi-axis topology grounded in rubric scores, not black-box guesses."', 55, currY);
currY += 13;
doc.text('3. Resume Claim Verification: Click "Claims". Show verbatim answer quotes validating claims like SQL optimization.', 55, currY);
currY += 13;
doc.text('4. Explainable Integrity: Click "Integrity". Show observable timestamps (tab switches, disclosed tools).', 55, currY);
currY += 13;
doc.fillColor(AMBER).font('Helvetica-Bold').text('   Explain: "We reject facial biometrics or eye-tracking. We log objective events without punitive bias."', 55, currY);
currY += 13;
doc.font('Helvetica').fillColor(DARK).text('5. Click "Print / Save to PDF" to show the clean print-ready dossier layout.', 55, currY);
currY += 24;

// SECTION 5
sectionTitle('STEP 4: CLOSING & ARCHITECTURE SUMMARY (2:40 - 3:00)', currY);
currY += 28;

doc.fillColor(DARK).fontSize(9).font('Helvetica-Oblique').text(
  '"InterviewIQ AI is built with React 18, Node.js 24, Google Gemini API with structured JSON output, and an instant deterministic fallback engine so it works anywhere, anytime. It transforms technical interviews from a rigid questionnaire into an intelligent, fair, and adaptive dialogue. Thank you!"',
  55, currY, { width: 485, lineGap: 2 }
);
currY += 46;

// SECTION 6
sectionTitle('STEP 5: JUDGE Q&A CHEAT SHEET (HOW TO ANSWER TOUGH QUESTIONS)', currY);
currY += 28;

const qaPairs = [
  {
    q: 'Q1: How is this different from just asking ChatGPT to interview someone?',
    a: 'A: ChatGPT prompts are stateless and hallucinate arbitrary scores. InterviewIQ AI combines structured rubric evaluations, a 6-state evidence tracking framework, deterministic question quotas, and time-budget awareness to guarantee complete competency coverage.'
  },
  {
    q: 'Q2: What happens if the Gemini API key runs out of quota or goes offline?',
    a: 'A: We built a dual-engine architecture: a live Google Gemini integration AND a 100% deterministic fallback engine. Candidate answers are never lost, and the application functions reliably offline or online.'
  },
  {
    q: 'Q3: How do you handle cheating without invading candidate privacy?',
    a: 'A: We strictly reject emotion inference and eye-tracking, which are scientifically unreliable. We track objective browser events (tab visibility changes, disclosed external tools) as an observational audit trail for human review, completely separated from competency scores.'
  },
  {
    q: 'Q4: Does the AI make hiring or firing decisions?',
    a: 'A: Absolutely not. InterviewIQ AI is explicitly designed as decision support. It provides traceable evidence, verbatim excerpts, and rubric breakdowns so human hiring teams make informed, unbiased decisions.'
  }
];

for (const pair of qaPairs) {
  doc.font('Helvetica-Bold').fillColor(BLUE).fontSize(8.5).text(pair.q, 55, currY);
  currY += 11;
  doc.font('Helvetica').fillColor(DARK).fontSize(8).text(pair.a, 55, currY, { width: 485, lineGap: 1.5 });
  currY += 27;
}

// Footer
doc.fontSize(8).fillColor(GRAY).text('Generated by InterviewIQ AI Engine | Google Student Club Hackathon 2026', 45, 780, { align: 'center', width: 505 });

doc.end();

writeStream.on('finish', () => {
  // Also copy to public folder for direct browser download
  fs.copyFileSync(targetPdfPath, publicPdfPath);
  console.log('PDF written successfully to:');
  console.log('1. ' + targetPdfPath);
  console.log('2. ' + publicPdfPath);
});
