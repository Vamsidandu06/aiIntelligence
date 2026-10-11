export class RecommendationEngine {
  constructor() {
    this.resourceMap = {
      'machine_learning': {
        topic: 'Machine Learning & AI Architecture',
        notes: [
          'Always split data temporally or by entity before performing standard scaling or feature extraction to prevent data leakage.',
          'Use Stratified K-Fold when target class imbalance is present to preserve class distributions across folds.',
          'For low latency inference, evaluate model quantization (INT8/FP16) and ONNX runtime integration.'
        ],
        documentationLinks: [
          { title: 'Scikit-Learn: Common Pitfalls in Model Evaluation', url: 'https://scikit-learn.org/stable/common_pitfalls.html' },
          { title: 'Google Machine Learning Crash Course', url: 'https://developers.google.com/machine-learning/crash-course' },
          { title: 'PyTorch Production Best Practices', url: 'https://pytorch.org/tutorials/recipes/recipes_index.html' }
        ],
        recommendedClasses: [
          { title: 'Stanford CS229: Machine Learning by Andrew Ng', platform: 'YouTube / Coursera', duration: '12 Weeks' },
          { title: 'Fast.ai: Practical Deep Learning for Coders', platform: 'Fast.ai', duration: '7 Weeks' },
          { title: 'Full Stack Deep Learning (LLMs & Deployment)', platform: 'FSDL', duration: 'Self-Paced' }
        ]
      },
      'system_design': {
        topic: 'High Scale System Design & Distributed Systems',
        notes: [
          'Design for failure: implement circuit breakers, retry with exponential backoff, and idempotent consumers.',
          'Database Sharding: Choose shard keys with high cardinality to prevent hot partitions.',
          'Caching: Apply Cache-Aside for read-heavy workloads; enforce TTLs to prevent stale state accumulation.'
        ],
        documentationLinks: [
          { title: 'System Design Primer (Donne Martin)', url: 'https://github.com/donnemartin/system-design-primer' },
          { title: 'AWS Well-Architected Framework: Reliability', url: 'https://aws.amazon.com/architecture/well-architected/' },
          { title: 'Martin Kleppmann: Designing Data-Intensive Applications Notes', url: 'https://dataintensive.net/' }
        ],
        recommendedClasses: [
          { title: 'ByteByteGo System Design Blueprint', platform: 'Alex Xu / ByteByteGo', duration: 'Comprehensive' },
          { title: 'MIT 6.824: Distributed Systems', platform: 'MIT OpenCourseWare', duration: '15 Lectures' },
          { title: 'Grokking the System Design Interview', platform: 'DesignGurus', duration: 'Self-Paced' }
        ]
      },
      'algorithms': {
        topic: 'Data Structures & Algorithms (LeetCode Masterclass)',
        notes: [
          'Two Pointers: Use for sorted arrays or palindrome verification in O(1) space.',
          'Sliding Window: Track sub-arrays or sub-strings satisfying specific constraint conditions in O(N) time.',
          'Monotonic Stack: Optimal for Next Greater Element and histogram area calculations in O(N).'
        ],
        documentationLinks: [
          { title: 'NeetCode 150 Problem Roadmap', url: 'https://neetcode.io/roadmap' },
          { title: 'LeetCode Explore: Arrays and Strings', url: 'https://leetcode.com/explore/' },
          { title: 'CP-Algorithms: Data Structures & Math', url: 'https://cp-algorithms.com/' }
        ],
        recommendedClasses: [
          { title: 'NeetCode All Algorithms Playlist', platform: 'YouTube', duration: 'Complete Track' },
          { title: 'Abdul Bari: Algorithms & Complexity Analysis', platform: 'YouTube / Udemy', duration: '84 Lectures' },
          { title: 'Princeton Algorithms Part I & II (Sedgewick)', platform: 'Coursera', duration: '10 Weeks' }
        ]
      },
      'sql_database': {
        topic: 'Relational Database Optimization & SQL Mastery',
        notes: [
          'Window Functions: Use DENSE_RANK() vs RANK() depending on whether duplicate rankings should skip ranks.',
          'Composite Index Rule: Ensure WHERE filter order matches index leading columns (Left-to-Right prefix rule).',
          'Avoid SELECT * in production: Fetch only targeted indexed columns to enable Index-Only Scans.'
        ],
        documentationLinks: [
          { title: 'PostgreSQL Official Documentation: Window Functions', url: 'https://www.postgresql.org/docs/current/tutorial-window.html' },
          { title: 'Use The Index, Luke! SQL Indexing Guide', url: 'https://use-the-index-luke.com/' },
          { title: 'LeetCode SQL 50 Study Plan', url: 'https://leetcode.com/studyplan/top-sql-50/' }
        ],
        recommendedClasses: [
          { title: 'Mode Analytics: Advanced SQL Tutorial', platform: 'Mode', duration: 'Interactive' },
          { title: 'CMU 15-445/645: Database Systems (Andy Pavlo)', platform: 'Carnegie Mellon University', duration: 'Full Semester' },
          { title: 'Database Design for Developers by Vlad Mihalcea', platform: 'Hypersistence', duration: 'Video Course' }
        ]
      },
      'frontend': {
        topic: 'Modern Frontend Engineering & Web Performance',
        notes: [
          'Component Rendering: Avoid object/array recreation in render props that trigger unnecessary child re-renders.',
          'Core Web Vitals: Optimize Largest Contentful Paint (LCP) by preloading hero assets and minimizing render-blocking JS.',
          'Accessibility (a11y): Ensure interactive elements use semantic HTML and correct ARIA roles for screen reader navigation.'
        ],
        documentationLinks: [
          { title: 'MDN Web Docs: Modern JavaScript & CSS', url: 'https://developer.mozilla.org/' },
          { title: 'React Official Documentation (react.dev)', url: 'https://react.dev/learn' },
          { title: 'web.dev: Learn Core Web Vitals & INP', url: 'https://web.dev/explore/fast' }
        ],
        recommendedClasses: [
          { title: 'Epic React by Kent C. Dodds', platform: 'EpicWeb', duration: 'Comprehensive' },
          { title: 'Namaste JavaScript & React by Akshay Saini', platform: 'YouTube / NamasteDev', duration: 'Series' },
          { title: 'Web Development Bootcamp by Colt Steele', platform: 'Udemy', duration: '60 Hours' }
        ]
      }
    };
  }

  getRecommendationsForSkill(skillKey = 'machine_learning') {
    const key = skillKey.toLowerCase().replace(/[^a-z]/g, '_');
    for (const [k, v] of Object.entries(this.resourceMap)) {
      if (key.includes(k) || k.includes(key)) {
        return v;
      }
    }
    // Default fallback to systems or algorithms
    return this.resourceMap['algorithms'];
  }
}

export const recommendationEngine = new RecommendationEngine();
