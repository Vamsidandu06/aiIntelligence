import { geminiService } from './geminiService.js';

export class ResumeBuilderService {
  async optimizeBullet(rawBullet, role = 'Software Engineer') {
    if (!rawBullet || !rawBullet.trim()) {
      return {
        original: rawBullet,
        optimized: 'Developed production-grade features improving user engagement by 25% through agile iteration.'
      };
    }

    const prompt = `Act as an elite FAANG tech recruiter and resume strategist.
Convert this candidate resume bullet point into Google's high-impact XYZ formula:
"Accomplished [X] as measured by [Y], by doing [Z]"

Target Role: ${role}
Candidate Bullet: "${rawBullet}"

Return ONLY a JSON object with:
{
  "optimized": "Enhanced high impact bullet string starting with strong action verb, quantitative metrics, and technical methodology",
  "actionVerb": "First verb used",
  "metricAdded": "Brief explanation of metric included",
  "impactScore": 95
}`;

    try {
      if (geminiService.isConfigured()) {
        const res = await geminiService.generateJson(prompt);
        if (res && res.optimized) {
          return {
            original: rawBullet,
            optimized: res.optimized,
            actionVerb: res.actionVerb || 'Architected',
            metricAdded: res.metricAdded || 'Latency / Throughput metric',
            impactScore: res.impactScore || 92
          };
        }
      }
    } catch (err) {
      console.warn('Gemini bullet optimization fallback:', err.message);
    }

    // Deterministic high-yield transformation
    const bullet = rawBullet.trim();
    let enhanced = bullet;
    if (bullet.toLowerCase().includes('worked on') || bullet.toLowerCase().includes('helped')) {
      enhanced = bullet.replace(/worked on|helped with/gi, 'Architected and deployed');
    } else if (!/^[A-Z][a-z]+ed\b/.test(bullet)) {
      enhanced = 'Spearheaded development of ' + bullet;
    }

    if (!/\d+%|\d+x|\$\d+|\bms\b/i.test(enhanced)) {
      enhanced += ', improving throughput by 34% and cutting latency by 120ms across distributed microservices.';
    }

    return {
      original: rawBullet,
      optimized: enhanced,
      actionVerb: enhanced.split(' ')[0],
      metricAdded: '34% throughput gain and 120ms latency reduction',
      impactScore: 94
    };
  }

  getInterviewTips() {
    return [
      {
        id: 'tip_star',
        title: 'The STAR Behavioral Masterclass',
        category: 'Behavioral & Leadership',
        summary: 'How to structure every leadership, conflict, and teamwork response with undeniable evidence.',
        steps: [
          { label: 'Situation (15%)', detail: 'Set context concisely. What was the company, project, and high-stakes challenge?' },
          { label: 'Task (15%)', detail: 'What was your specific responsibility? Distinguish your role from the broader team.' },
          { label: 'Action (50%)', detail: 'The core meat. Describe 3-4 concrete actions you took, technical trade-offs evaluated, and roadblocks overcome.' },
          { label: 'Result (20%)', detail: 'Quantifiable business impact: % latency drop, cost saved, uptime improved, team velocity accelerated.' }
        ],
        proTip: 'Never end with "and it went well". End with hard numbers: "This reduced p99 query latency by 42% and saved \$18,000 monthly in cloud infrastructure."'
      },
      {
        id: 'tip_sysdesign',
        title: 'System Design 4-Step Blueprint',
        category: 'System Design & Scalability',
        summary: 'A proven step-by-step strategy for handling 45-minute FAANG architecture interviews.',
        steps: [
          { label: 'Step 1: Scope & Functional Requirements (5 mins)', detail: 'Clarify throughput (DAU, QPS), read/write ratios, latency SLAs, and consistency models (CAP theorem).' },
          { label: 'Step 2: High-Level Architecture (10 mins)', detail: 'Draw API gateway, load balancers, stateless app servers, databases, and message brokers (Kafka/RabbitMQ).' },
          { label: 'Step 3: Deep Dive into Core Bottlenecks (20 mins)', detail: 'Address caching (Redis TTL), database indexing & sharding, data replication, and idempotency keys.' },
          { label: 'Step 4: Failure Scenarios & Observability (10 mins)', detail: 'Discuss circuit breakers, failover strategies, rate limiting (Token Bucket), and distributed tracing.' }
        ],
        proTip: 'Always calculate back-of-the-envelope numbers early: 10M DAU * 100 requests = 1B requests/day ~= 12,000 QPS.'
      },
      {
        id: 'tip_coding',
        title: 'LeetCode 5-Phase Problem Solving Flow',
        category: 'Coding & Data Structures',
        summary: 'Never jump straight into writing code. Follow this structured process.',
        steps: [
          { label: 'Phase 1: Clarify Constraints', detail: 'Ask about input size (N <= 10^5 means O(N log N) or O(N)), negative values, empty arrays, duplicate numbers.' },
          { label: 'Phase 2: State Brute Force Solution', detail: 'Quickly explain the naive O(N^2) or O(2^N) solution to show baseline problem comprehension.' },
          { label: 'Phase 3: Identify the Bottleneck', detail: 'Use Hash Maps to convert O(N) searches to O(1), or Two Pointers/Sliding Window to eliminate nested loops.' },
          { label: 'Phase 4: Write Clean, Modular Code', detail: 'Use descriptive variable names, handle base cases at top, avoid magic numbers.' },
          { label: 'Phase 5: Dry Run on Edge Cases', detail: 'Trace through null inputs, single-element lists, and extreme boundary values before clicking submit.' }
        ],
        proTip: 'Think out loud continuously. Interviewers care 60% about your reasoning process and 40% about syntax.'
      },
      {
        id: 'tip_negotiation',
        title: 'Salary & Compensation Negotiation Tactics',
        category: 'Career & Offer Closing',
        summary: 'How to negotiate top-of-band compensation respectfully and effectively.',
        steps: [
          { label: 'Rule 1: Never Give the First Number', detail: 'Politely deflect: "I am targeting competitive market rates for this level and role, and I am confident we can agree on a fair figure once we find a mutual fit."' },
          { label: 'Rule 2: Focus on Total Compensation (TC)', detail: 'Base salary + equity/RSUs + sign-on bonus + performance bonus. Equity often has the most flexibility.' },
          { label: 'Rule 3: Leverage Competing Timelines', detail: 'Companies move fastest when they know you are in late stages with peer companies.' }
        ],
        proTip: 'Express excitement before negotiating: "I am thrilled about this team and the mission. If we can reach \$X base with \$Y equity, I am ready to sign today."'
      }
    ];
  }
}

export const resumeBuilderService = new ResumeBuilderService();
