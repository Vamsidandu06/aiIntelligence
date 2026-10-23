/**
 * Adaptive Interview Intelligence - Question Bank Service
 * 30+ Production-Ready Technical Questions across:
 * - Machine Learning / AI
 * - Backend Engineering
 * - Frontend Engineering
 * - SQL & Database Systems
 * - Data Structures, Algorithms & System Design
 */

export const QUESTION_BANK = [
  // ==========================================
  // 1. MACHINE LEARNING & AI (ml)
  // ==========================================
  {
    id: "ml-01",
    domain: "ml",
    difficulty: "intermediate",
    competencyName: "Machine Learning Pipelines & Data Integrity",
    prompt: "Explain how you would prevent data leakage when training a machine learning model, and describe the specific architectural patterns or code practices you use.",
    rubricCriteria: "Level 4: Explains why preprocessing must occur after split or inside pipelines. Identifies temporal/time-series leakage and group/entity leakage patterns. Level 2: Mentions train/test split without transformer encapsulation. Level 1: Superficial explanation.",
    whyThisQuestion: "Candidate's profile highlights machine learning pipelines. This question validates production data hygiene, feature engineering integrity, and leakage prevention.",
    uncertaintyToResolve: "Verification of candidate's practical ability to prevent feature, temporal, and group leakage in production pipelines.",
    expectedKeyConcepts: [
      "train/test split",
      "pipeline encapsulation",
      "fit_transform only on training",
      "temporal leakage",
      "group leakage",
      "timeseriessplit",
      "groupkfold"
    ],
    idealAnswer: "To prevent data leakage, training and test/validation datasets must be strictly partitioned before performing any feature transformations, imputations, or standardizations. In code, all transformers (like StandardScaler or SimpleImputer) and estimators must be encapsulated inside a Pipeline object (e.g., scikit-learn Pipeline or ColumnTransformer), guaranteeing fit() runs strictly on the training fold, while transform() applies to the validation fold. For sequential or time-series data, random splitting causes temporal leakage where future information leaks into the past; we enforce TimeSeriesSplit or chronological cutoffs. For grouped data (e.g., multiple patient scans or user sessions), GroupKFold prevents intra-entity leakage across splits."
  },
  {
    id: "ml-02",
    domain: "ml",
    difficulty: "advanced",
    competencyName: "Deep Learning Regularization & Model Optimization",
    prompt: "How do you diagnose and mitigate severe overfitting in deep neural networks and gradient-boosted decision trees? Compare the specific regularization techniques you would apply.",
    rubricCriteria: "Level 4: Distinguishes variance issues across neural networks (dropout, weight decay, early stopping) and GBDTs (subsample, colsample_bytree, max_depth, learning rate). Level 2: Recommends adding more data without architectural regularization. Level 1: Superficial explanation.",
    whyThisQuestion: "Candidate's profile demonstrates deep learning and ensemble model experience. Validates their grasp of regularization mechanisms and hyperparameter tuning under high variance.",
    uncertaintyToResolve: "Assessing candidate's diagnostic process when training curves diverge between training and validation loss.",
    expectedKeyConcepts: [
      "bias-variance tradeoff",
      "l1 lasso / l2 ridge",
      "weight decay",
      "dropout",
      "early stopping",
      "subsample / colsample_bytree",
      "learning rate"
    ],
    idealAnswer: "Overfitting occurs when a model captures statistical noise rather than the underlying data distribution, manifesting as low training loss but high validation loss (high variance). In deep neural networks, mitigation strategies include Dropout (randomly deactivating neurons during forward passes to prevent co-adaptation), Weight Decay (L2 regularization penalizing large weights in the loss function), Early Stopping based on validation loss plateaus, and Data Augmentation to increase training diversity. In Gradient Boosted Decision Trees (XGBoost/LightGBM), we regularize by constraining tree depth (max_depth), increasing sub-sampling ratios (subsample, colsample_bytree), lowering the learning rate (eta) with more boosting rounds, and adding L1/L2 leaf weight penalties."
  },
  {
    id: "ml-03",
    domain: "ml",
    difficulty: "advanced",
    competencyName: "Transformer Architectures & Attention Mechanisms",
    prompt: "Walk through the mathematical intuition of the Multi-Head Self-Attention mechanism in Transformers. How does scaled dot-product attention compute token relationships, and why is the scaling factor sqrt(d_k) necessary?",
    rubricCriteria: "Level 4: Explains Q, K, V matrix projections, softmax((QK^T)/sqrt(dk))V formula, vanishing gradient avoidance via scaling, and multi-head representation subspaces. Level 2: Mentions attention as finding important words without mathematical formulation.",
    whyThisQuestion: "Assesses modern generative AI / LLM foundation architecture knowledge and mathematical understanding of attention scaling.",
    uncertaintyToResolve: "Determining whether candidate understands low-level Transformer attention mechanics or merely calls pre-trained HuggingFace pipelines.",
    expectedKeyConcepts: [
      "query key value",
      "scaled dot-product",
      "softmax",
      "scaling factor sqrt(dk)",
      "vanishing gradients",
      "multi-head projection subspaces"
    ],
    idealAnswer: "Multi-Head Self-Attention projects input embeddings into Query (Q), Key (K), and Value (V) matrices via learned weight projections (W_Q, W_K, W_V). Attention weights are computed using the scaled dot-product formula: Attention(Q, K, V) = softmax((Q * K^T) / sqrt(d_k)) * V. The dot product (Q * K^T) measures similarity between token representations. The scaling factor 1/sqrt(d_k) is critical because for large key dimensions d_k, the dot products grow large in magnitude, pushing the softmax function into regions with near-zero gradients (saturation), which causes vanishing gradients during backpropagation. Multi-head attention repeats this across h parallel representation subspaces, allowing the model to jointly attend to semantic, syntactic, and positional information across tokens."
  },
  {
    id: "ml-04",
    domain: "ml",
    difficulty: "intermediate",
    competencyName: "Evaluation Metrics & Class Imbalance",
    prompt: "When evaluating a fraud detection or disease diagnosis model with extreme class imbalance (99.9% negative, 0.1% positive), why is Accuracy misleading? Explain which evaluation metrics and loss functions you would use.",
    rubricCriteria: "Level 4: Explains accuracy paradox, contrasts PR-AUC with ROC-AUC under severe skew, and specifies focal loss or class weighting. Level 2: Recommends accuracy or precision without handling baseline class skew.",
    whyThisQuestion: "Validates ability to design robust evaluation frameworks for real-world imbalanced datasets where naive metrics give dangerous false security.",
    uncertaintyToResolve: "Understanding of precision/recall trade-offs and loss re-weighting strategies under heavy class skew.",
    expectedKeyConcepts: [
      "accuracy paradox",
      "precision and recall",
      "f1-score",
      "precision-recall auc",
      "focal loss",
      "cost-sensitive classification",
      "confusion matrix"
    ],
    idealAnswer: "In extreme class imbalance (e.g., 99.9% negative), raw Accuracy is misleading because a trivial classifier predicting all negatives achieves 99.9% accuracy while failing to detect any fraud (the Accuracy Paradox). Instead, we prioritize Recall (Sensitivity) to minimize false negatives (missed frauds), and Precision to minimize false alarms, along with the Precision-Recall AUC (PR-AUC) curve, which is far more sensitive to true positives than ROC-AUC in skewed distributions. For training optimization, standard Cross-Entropy is dominated by the majority class; we employ Focal Loss (down-weighting easy negative examples) or Class-Weighted Cross-Entropy, paired with threshold tuning based on business cost-utility trade-offs."
  },
  {
    id: "ml-05",
    domain: "ml",
    difficulty: "advanced",
    competencyName: "Vector Embeddings & RAG Retrieval Systems",
    prompt: "Explain how dense vector embeddings represent semantic meaning and how approximate nearest neighbor (ANN) search algorithms (like HNSW or IVF) power Retrieval-Augmented Generation (RAG) at scale.",
    rubricCriteria: "Level 4: Explains cosine similarity, high-dimensional vector spaces, HNSW graph navigation or IVF clustering, and context window augmentation. Level 2: Explains vector search merely as a database query without indexing mechanics.",
    whyThisQuestion: "Candidate has generative AI experience; validates understanding of vector embeddings, indexing structures, and scalable semantic search in RAG pipelines.",
    uncertaintyToResolve: "Verification of candidate's knowledge regarding indexing trade-offs between exact search and scalable ANN algorithms.",
    expectedKeyConcepts: [
      "dense embeddings",
      "cosine similarity",
      "approximate nearest neighbor (ANN)",
      "hnsw (hierarchical navigable small world)",
      "ivf (inverted file index)",
      "rag context window",
      "latency vs recall"
    ],
    idealAnswer: "Dense vector embeddings represent text/data as high-dimensional continuous vectors where semantic similarity correlates with geometric proximity (measured via Cosine Similarity or Euclidean distance). Exact nearest neighbor search (O(N * D)) becomes unscalable for millions of documents. Approximate Nearest Neighbor (ANN) indexes solve this: HNSW (Hierarchical Navigable Small World) constructs multi-layered skip-list-like graphs where greedy routing traverses upper coarse layers down to dense fine layers in logarithmic O(log N) time with high recall. IVF (Inverted File Index) clusters vectors into Voronoi cells using k-means, querying only the nearest centroids. In RAG pipelines, the user prompt is embedded, top-k relevant chunks are retrieved via ANN in sub-10ms, and prepended into the LLM context window to ground responses with fresh, non-hallucinated facts."
  },
  {
    id: "ml-06",
    domain: "ml",
    difficulty: "advanced",
    competencyName: "Parameter-Efficient Fine-Tuning (PEFT / LoRA)",
    prompt: "What is Low-Rank Adaptation (LoRA) for Large Language Models? How does it drastically reduce GPU VRAM requirements during fine-tuning compared to full-parameter tuning?",
    rubricCriteria: "Level 4: Formulates delta W = B * A with rank r << min(d, k), frozen base model weights, optimizer state memory reduction, and optional 4-bit QLoRA. Level 2: Mentions prompt tuning or freezing layers without low-rank matrix decomposition.",
    whyThisQuestion: "Evaluates modern LLM fine-tuning techniques and hardware efficiency considerations in production ML.",
    uncertaintyToResolve: "Depth of knowledge in parameter-efficient adaptation versus brute-force full fine-tuning.",
    expectedKeyConcepts: [
      "lora",
      "low-rank matrix decomposition",
      "rank r",
      "frozen base weights",
      "optimizer state memory savings",
      "qlora 4-bit quantization",
      "vram footprint"
    ],
    idealAnswer: "Full-parameter fine-tuning of modern LLMs requires storing optimizer states (Adam requires 8 bytes per parameter), gradients (4 bytes), and weights (2-4 bytes), demanding tens or hundreds of gigabytes of GPU VRAM. LoRA freezes pre-trained weight matrices W_0 and models the weight update delta W as a low-rank decomposition B * A, where A in R^(r x k) and B in R^(d x r) with rank r << min(d, k) (often r between 8 and 64). During forward passes, h = W_0 * x + (alpha / r) * B * A * x. This reduces trainable parameters and optimizer memory by 90-99% while achieving comparable task performance. QLoRA further quantizes the base model W_0 to 4-bit NormalFloat (NF4) with double quantization, enabling fine-tuning a 70B parameter model on a single 48GB GPU."
  },

  // ==========================================
  // 2. BACKEND ENGINEERING (backend)
  // ==========================================
  {
    id: "backend-01",
    domain: "backend",
    difficulty: "advanced",
    competencyName: "Distributed Systems & Event-Driven Architecture",
    prompt: "Under what architectural conditions would you transition a monolithic application into microservices? How do you ensure data consistency across decoupled services without distributed two-phase commit?",
    rubricCriteria: "Level 4: Explains organizational scaling, bounded contexts, Saga pattern (orchestration vs choreography), transactional outbox pattern, and eventual consistency. Level 2: Describes microservices as just splitting APIs without addressing consistency.",
    whyThisQuestion: "Candidate resume claims backend engineering and microservices. Validates enterprise architectural maturity and distributed transaction patterns.",
    uncertaintyToResolve: "Verifying whether candidate understands distributed consensus, outbox patterns, and saga compensation flows.",
    expectedKeyConcepts: [
      "bounded context",
      "eventual consistency",
      "saga pattern",
      "transactional outbox pattern",
      "idempotent consumers",
      "cdc (change data capture)",
      "avoiding distributed 2pc"
    ],
    idealAnswer: "A transition from a monolith to microservices is justified by organizational scaling (multiple autonomous teams), independent scaling bottlenecks, and distinct failure domains—not merely novelty. To maintain consistency without the blocking latency and single points of failure of 2PC (Two-Phase Commit), we adopt Event-Driven Architecture with Eventual Consistency. The Saga Pattern coordinates distributed transactions across services via Choreography (events emitted over Kafka/RabbitMQ) or Orchestration (a central state machine). To guarantee that local database updates and outbound event emissions succeed atomically, we implement the Transactional Outbox Pattern with a change-data-capture (Debezium) or poller, combined with Idempotent consumers to handle duplicate deliveries gracefully."
  },
  {
    id: "backend-02",
    domain: "backend",
    difficulty: "intermediate",
    competencyName: "Authentication Systems & Security Engineering",
    prompt: "Compare stateless JWT authentication with stateful session-based authentication. How do you implement secure Refresh Token Rotation and handle token revocation in a distributed backend?",
    rubricCriteria: "Level 4: Compares stateless verification vs Redis session lookup, explains short-lived access tokens, HttpOnly SameSite cookies, refresh token rotation with token family replay detection. Level 2: Uses JWTs without revocation mechanisms.",
    whyThisQuestion: "Validates security design, stateless scaling trade-offs, and practical defenses against credential theft and token hijacking.",
    uncertaintyToResolve: "Understanding how to securely revoke tokens and mitigate replay attacks without turning JWTs back into stateful sessions.",
    expectedKeyConcepts: [
      "stateless jwt",
      "stateful sessions / redis",
      "httponly samesite cookies",
      "refresh token rotation",
      "replay attack detection",
      "token family invalidation",
      "short-lived access tokens"
    ],
    idealAnswer: "Session-based authentication stores session records in a shared store (like Redis) and gives the client an opaque session cookie; revocation is instantaneous by deleting the Redis key, but it introduces network hops on every authenticated request. Stateless JWTs encode user identity and signature, verified locally by services using public/symmetric keys without database lookups, but cannot be easily revoked before expiration. A secure production architecture uses short-lived Access Tokens (5-15 mins) and long-lived Refresh Tokens stored in Secure, HttpOnly, SameSite cookies. Refresh Token Rotation issues a new refresh token family upon each use; if an old refresh token is reused (indicating a stolen token), the backend immediately invalidates the entire token family, mitigating replay attacks."
  },
  {
    id: "backend-03",
    domain: "backend",
    difficulty: "advanced",
    competencyName: "High-Throughput Caching & Redis Architecture",
    prompt: "What caching patterns (Cache-Aside, Write-Through, Write-Behind) do you utilize in high-throughput backend services? How do you prevent Cache Penetration, Cache Breakdown, and Cache Stampede?",
    rubricCriteria: "Level 4: Explains cache-aside, cache breakdown (mutex locking/XFetch early expiration), cache penetration (bloom filters/null caching), and stampede (TTL jitter). Level 2: Mentions caching without discussing concurrency hazards.",
    whyThisQuestion: "Validates backend optimization and resilience against catastrophic cache failures under heavy read/write loads.",
    uncertaintyToResolve: "Candidate's practical experience handling concurrent cache misses and cache invalidation strategies.",
    expectedKeyConcepts: [
      "cache-aside",
      "write-through",
      "cache penetration",
      "cache breakdown",
      "cache stampede",
      "bloom filter",
      "distributed mutex lock",
      "ttl jitter"
    ],
    idealAnswer: "Cache-Aside (Lazy Loading) checks cache first, queries DB on miss, and writes result to cache with a TTL; Write-Through updates cache and DB synchronously. To handle edge cases: 1) Cache Penetration (queries for non-existent IDs repeatedly hitting the DB): mitigated by caching null values with short TTLs or placing a Bloom Filter in front of the cache. 2) Cache Breakdown / Stampede (a hot key expires and hundreds of concurrent requests simultaneously hit the database): resolved via distributed mutex locks (e.g., Redlock) ensuring only one worker queries the DB, or probabilistic early expiration (XFetch algorithm) where background threads re-cache keys before hard expiration. 3) Cache Avalanche (mass keys expiring at the same instant): resolved by adding random jitter to TTL durations."
  },
  {
    id: "backend-04",
    domain: "backend",
    difficulty: "intermediate",
    competencyName: "Node.js Event Loop & Concurrency Architecture",
    prompt: "Explain the phases of the Node.js Event Loop (Timers, Pending I/O, Poll, Check, Close). What happens when CPU-bound work blocks the event loop, and how does process.nextTick interact with microtasks?",
    rubricCriteria: "Level 4: Details event loop phases, microtask queue priority (nextTick vs Promises), main thread starvation during CPU work, and worker_threads offloading. Level 2: Describes Node.js as multi-threaded or ignores event loop phases.",
    whyThisQuestion: "Assesses deep understanding of single-threaded asynchronous runtime internals and concurrency hazards.",
    uncertaintyToResolve: "Verification of candidate's grasp of non-blocking I/O and CPU-bound thread pool delegation.",
    expectedKeyConcepts: [
      "event loop phases (timers, poll, check)",
      "libuv thread pool",
      "process.nexttick",
      "microtask queue",
      "cpu-bound main thread blocking",
      "worker_threads"
    ],
    idealAnswer: "The Node.js event loop runs on a single main thread backed by libuv: 1) Timers (executes setTimeout/setInterval callbacks whose timers expired), 2) Pending I/O (OS callbacks), 3) Poll (retrieves new I/O events and executes scripts; blocks if queue empty unless timers ready), 4) Check (setImmediate callbacks), 5) Close callbacks (e.g. socket.on('close')). Microtasks—consisting of process.nextTick (highest priority) and Promise resolution callbacks—drain immediately after the current operation finishes and before transitioning to the next phase or event loop tick. If heavy CPU-bound computation runs on the main thread (e.g., image parsing or cryptographic loops), it blocks the poll phase, starving incoming network I/O. We offload CPU-bound tasks to Worker Threads (worker_threads) or external worker queues (BullMQ/Redis) to keep the main event loop non-blocking."
  },
  {
    id: "backend-05",
    domain: "backend",
    difficulty: "intermediate",
    competencyName: "API Rate Limiting & Distributed Throttling",
    prompt: "Compare Token Bucket, Leaky Bucket, and Sliding Window Counter rate-limiting algorithms. How do you implement distributed rate limiting across multiple API gateway instances?",
    rubricCriteria: "Level 4: Compares burst tolerance (token bucket) vs smoothing (leaky bucket) vs sliding window, and details Redis atomic Lua scripts for distributed state. Level 2: Suggests in-memory counters per instance which fails in cluster mode.",
    whyThisQuestion: "Validates API resilience, DoS mitigation, and distributed state coordination.",
    uncertaintyToResolve: "Candidate's ability to implement multi-instance throttling without race conditions.",
    expectedKeyConcepts: [
      "token bucket",
      "leaky bucket",
      "sliding window counter",
      "redis lua script",
      "http 429 status",
      "retry-after header",
      "atomic operations"
    ],
    idealAnswer: "Token Bucket adds tokens to a bucket at a fixed rate up to capacity; requests consume tokens and pass if tokens are available, allowing controlled bursts up to bucket capacity. Leaky Bucket processes requests at a constant smooth drip rate regardless of bursts, buffering requests in a FIFO queue and dropping overflow. Sliding Window Counter divides time into micro-windows or maintains timestamped sets (ZSET), calculating weighted request counts across previous and current windows to prevent boundary spikes that plague fixed-window counters. In distributed environments across multiple API gateways, rate limiting is implemented in Redis using atomic Lua scripts (or Redis Cell) to evaluate token count or sliding timestamps in a single network round-trip, returning standard HTTP 429 Too Many Requests with Retry-After and X-RateLimit headers."
  },
  {
    id: "backend-06",
    domain: "backend",
    difficulty: "advanced",
    competencyName: "Database Connection Pooling & Deadlock Handling",
    prompt: "How does database connection pooling work, how do you size the pool under high concurrency, and how do you detect and recover from database deadlocks in concurrent transactions?",
    rubricCriteria: "Level 4: Explains connection overhead, pool sizing formula (cores * 2 + effective spindles), deadlock detection graphs, lock ordering, and exponential backoff retries. Level 2: Recommends arbitrarily large connection pools.",
    whyThisQuestion: "Evaluates backend scalability, database resource exhaustion prevention, and concurrent transactional recovery.",
    uncertaintyToResolve: "Assessing candidate's practical handling of connection starvation and transaction serialization errors.",
    expectedKeyConcepts: [
      "connection pool sizing",
      "context switching overhead",
      "deadlock detection",
      "consistent lock ordering",
      "exponential backoff with jitter",
      "transaction isolation levels"
    ],
    idealAnswer: "Opening a TCP and TLS database connection involves expensive handshakes and authentication. Connection pools (like HikariCP or pg.Pool) maintain a pre-warmed set of active connections reused by requests. Sizing the pool requires balancing CPU cores and disk I/O spindle speeds—often estimated via formula: Pool Size = (Core Count * 2) + Effective Spindle Count; oversized pools degrade performance due to OS context switching and database lock contention. Deadlocks occur when Transaction A holds Lock 1 and waits for Lock 2, while Transaction B holds Lock 2 and waits for Lock 1. Databases resolve deadlocks by killing the cheaper transaction and returning an error code (e.g., Postgres 40P01). Applications must catch deadlock errors and retry with exponential backoff and jitter, while architecturally enforcing consistent lock acquisition ordering across all queries."
  },

  // ==========================================
  // 3. FRONTEND ENGINEERING (frontend)
  // ==========================================
  {
    id: "frontend-01",
    domain: "frontend",
    difficulty: "advanced",
    competencyName: "React Internals & Fiber Reconciliation",
    prompt: "Explain how React's Fiber reconciler works. How does it break rendering into interruptible units of work, and what is the difference between the render phase and the commit phase?",
    rubricCriteria: "Level 4: Details Fiber tree pointers (child, sibling, return), interruptible render phase with scheduler lanes, and synchronous non-interruptible commit phase. Level 2: Describes virtual DOM diffing without Fiber architecture.",
    whyThisQuestion: "Validates advanced frontend engineering and deep knowledge of React rendering lifecycle and scheduler mechanics.",
    uncertaintyToResolve: "Determining whether candidate understands concurrent scheduling and frame budget prioritization.",
    expectedKeyConcepts: [
      "fiber node tree",
      "reconciliation",
      "interruptible render phase",
      "synchronous commit phase",
      "scheduler priority lanes",
      "time slicing"
    ],
    idealAnswer: "Prior to Fiber, React's stack reconciler performed synchronous recursive rendering that could block the main thread and drop frames on complex trees. The Fiber reconciler represents UI as a linked-list graph of fiber units of work (child, sibling, return pointers). Rendering is split into two phases: 1) Render Phase: asynchronous and interruptible. React traverses fibers, computes diffs, and assigns priority lanes via the Scheduler. If higher-priority work (like user typing or gestures) arrives, React can pause, discard, or resume work without touching the real DOM. 2) Commit Phase: synchronous and uninterrupted. React applies computed side-effects (DOM mutations, lifecycle hooks, useLayoutEffect) in a single pass to prevent visual tearing, followed by running useEffect asynchronously after paint."
  },
  {
    id: "frontend-02",
    domain: "frontend",
    difficulty: "intermediate",
    competencyName: "Core Web Vitals & Frontend Performance Optimization",
    prompt: "What are the three Core Web Vitals (LCP, INP, CLS), what thresholds define a 'Good' score, and what specific frontend optimization techniques do you apply to optimize each metric?",
    rubricCriteria: "Level 4: Specifies exact thresholds (<2.5s LCP, <200ms INP, <0.1 CLS), and gives concrete optimizations: fetchpriority/preload for LCP, yielding main thread for INP, and aspect-ratio dimensions for CLS. Level 2: Explains metrics vaguely without actionable optimizations.",
    whyThisQuestion: "Candidate resume claims modern frontend development; validates adherence to production performance standards and CWV metrics.",
    uncertaintyToResolve: "Understanding how to diagnose and remediate frontend latency, layout instability, and main-thread blocking.",
    expectedKeyConcepts: [
      "lcp largest contentful paint (<2.5s)",
      "inp interaction to next paint (<200ms)",
      "cls cumulative layout shift (<0.1)",
      "fetchpriority='high' and preload",
      "long tasks yielding via scheduler.yield()",
      "explicit aspect-ratio on images"
    ],
    idealAnswer: "Core Web Vitals measure user experience: 1) LCP (Largest Contentful Paint, < 2.5s): measures perceived loading speed of the largest hero element. Optimized by preloading hero assets (<link rel='preload' fetchpriority='high'>), self-hosting critical fonts with font-display: swap, deploying edge CDN caching, and modern AVIF/WebP image formats. 2) INP (Interaction to Next Paint, < 200ms): measures responsiveness to user interactions (clicks, taps, typing). Optimized by minimizing JavaScript main-thread blocking time, breaking long tasks (>50ms) using scheduler.yield() or setTimeout(0), and deferring non-urgent state updates with React's startTransition. 3) CLS (Cumulative Layout Shift, < 0.1): measures visual stability. Optimized by always declaring explicit width and height or aspect-ratio on images and embeds, reserving layout space for dynamic ads/banners, and never injecting dynamic content above existing content without user triggers."
  },
  {
    id: "frontend-03",
    domain: "frontend",
    difficulty: "intermediate",
    competencyName: "CSS Architecture, Layout Engines & GPU Compositing",
    prompt: "When should you architect a layout with CSS Grid versus Flexbox? How do CSS transitions trigger GPU compositing (composite-only properties) versus CPU layout/reflow and repaint?",
    rubricCriteria: "Level 4: Distinguishes 1D (Flexbox) vs 2D (Grid), and explains browser pipeline (Layout/Reflow -> Repaint -> Composite), identifying transform and opacity as GPU accelerated composite-only properties. Level 2: Describes simple styling without rendering engine concepts.",
    whyThisQuestion: "Evaluates layout design decisions and rendering pipeline awareness for 60fps animations.",
    uncertaintyToResolve: "Assessing candidate's awareness of reflow costs and GPU layer promotion.",
    expectedKeyConcepts: [
      "flexbox one-dimensional",
      "css grid two-dimensional",
      "reflow / layout",
      "repaint",
      "composite layer",
      "transform and opacity",
      "will-change GPU acceleration"
    ],
    idealAnswer: "Flexbox is designed for one-dimensional content flow (row or column), excelling at aligning elements along a single axis, distributing residual space, and handling components like navigation bars and button groups. CSS Grid is designed for two-dimensional layout orchestration (rows and columns simultaneously), excelling at macro page layouts, complex dashboard cards, and aligning items across both dimensions with fractional units (fr) and grid-template-areas. For animations and transitions, triggering properties like width, height, margin, or top forces browser Layout (Reflow) and subsequent Repaint, recalculating geometry on the CPU. High-performance 60fps animations restrict changes to Composite-only properties: transform (translate3d, scale, rotate) and opacity, which promote elements to isolated GPU compositing layers (accelerated by hardware without triggering reflow or repaint)."
  },
  {
    id: "frontend-04",
    domain: "frontend",
    difficulty: "intermediate",
    competencyName: "State Management Architecture & Render Cascades",
    prompt: "Compare React Context API with modern atomic/selector stores (Zustand/Redux Toolkit). What causes unnecessary re-renders in Context, and how do selectors prevent them?",
    rubricCriteria: "Level 4: Explains that Context value changes trigger all consumers regardless of consumed slice, and explains how selector subscriptions (useStore(s => s.foo)) perform equality checks to prevent re-renders. Level 2: Recommends Context for high-frequency dynamic state.",
    whyThisQuestion: "Validates component architecture and prevention of render thrashing in large applications.",
    uncertaintyToResolve: "Verification of candidate's knowledge regarding state colocation and selective re-rendering.",
    expectedKeyConcepts: [
      "react context re-render cascade",
      "selector subscription",
      "zustand / redux toolkit",
      "shallow equality comparison",
      "state colocation",
      "render memoization"
    ],
    idealAnswer: "React state should be collocated as close as possible to where it is used. The React Context API is built for low-frequency global values (theme, authenticated user, localization). Its primary limitation is that any change to the Context value forces every consumer component to re-render, even if that component only accesses an unaffected slice of the object, unless split into multiple micro-contexts. External store libraries like Zustand or Redux Toolkit decouple state from the React tree, using a subscription model with selector functions (e.g., useStore(state => state.user.name)). The hook compares the selected slice using strict or shallow equality (Object.is), only scheduling a component re-render when the specific selected slice changes, preventing costly full-tree render cascades."
  },
  {
    id: "frontend-05",
    domain: "frontend",
    difficulty: "advanced",
    competencyName: "SSR, Static Generation & React Server Components",
    prompt: "Explain the lifecycle of Server-Side Rendering (SSR) and Client Hydration in modern frameworks like Next.js or Remix. What is hydration mismatch, and how do Server Components (RSC) alter this model?",
    rubricCriteria: "Level 4: Details server HTML generation, client bundle hydration, causes of hydration mismatch (non-deterministic rendering), and how RSC executes strictly on server with zero client JS bundle. Level 2: Describes SSR as just fetching data on the server.",
    whyThisQuestion: "Assesses modern full-stack frontend architecture and hydration performance.",
    uncertaintyToResolve: "Candidate's understanding of hybrid server/client architectures and bundle footprint optimization.",
    expectedKeyConcepts: [
      "ssr server-side rendering",
      "client hydration",
      "hydration mismatch",
      "react server components (rsc)",
      "zero client bundle size",
      "streaming ssr with suspense"
    ],
    idealAnswer: "In SSR, the server executes components on request, queries data, and returns fully-rendered static HTML to the client for immediate LCP and SEO indexability. The browser paints HTML immediately, then downloads the JavaScript bundle and executes 'Hydration'—where React traverses the pre-rendered DOM, attaches event listeners, and reconstructs the internal Fiber tree. A Hydration Mismatch occurs when server-rendered HTML differs from the initial client render (e.g., using new Date(), window.innerWidth, or localStorage), causing React to warn and throw away server markup. React Server Components (RSC) fundamentally transform this: Server Components execute strictly on the server and stream a JSON-like virtual representation without sending their component JavaScript to the client bundle (achieving zero client bundle impact), while interactive Client Components ('use client') hydrate selectively at the leaf nodes."
  },
  {
    id: "frontend-06",
    domain: "frontend",
    difficulty: "intermediate",
    competencyName: "DOM Event Architecture & Event Delegation",
    prompt: "Explain the three phases of the DOM event flow: Capturing, Target, and Bubbling. How does Event Delegation leverage bubbling to optimize memory in high-volume interactive lists?",
    rubricCriteria: "Level 4: Explains capturing (window to target), target phase, bubbling (target to window), and event delegation using e.target vs e.currentTarget with .closest(). Level 2: Mentions onClick handlers on every item.",
    whyThisQuestion: "Validates low-level browser DOM fundamentals and memory optimization.",
    uncertaintyToResolve: "Understanding event propagation mechanics and memory overhead of per-element listener registration.",
    expectedKeyConcepts: [
      "capturing phase (trickling)",
      "target phase",
      "bubbling phase",
      "event delegation",
      "event.target vs event.currenttarget",
      "memory optimization",
      "closest() selector"
    ],
    idealAnswer: "When a DOM event occurs, it travels in three phases: 1) Capturing Phase (Trickling): the event descends from window through document, html, body down the ancestor hierarchy to the target element. 2) Target Phase: the event reaches the element where the interaction occurred. 3) Bubbling Phase: the event bubbles upward through its ancestor tree back to window. Event Delegation leverages the bubbling phase: rather than attaching individual event listeners to 1,000 distinct table rows or list items (which consumes excessive memory and degrades GC performance), a single listener is attached to the parent container. When a child is clicked, the event bubbles to the parent; the handler checks event.target (the clicked child) using .closest('selector') to execute logic, while event.currentTarget refers to the parent container."
  },

  // ==========================================
  // 4. SQL & DATABASE SYSTEMS (sql)
  // ==========================================
  {
    id: "sql-01",
    domain: "sql",
    difficulty: "advanced",
    competencyName: "B-Tree Indexing Internals & Query Execution Plans",
    prompt: "How does a B-Tree index organize table data on disk? Walk through what happens during an Index Seek versus an Index Scan, and explain why leading column order matters in Composite Indexes.",
    rubricCriteria: "Level 4: Details B-Tree page hierarchy (root, branch, leaf), clustered vs non-clustered, binary search seek (O(log N)) vs full leaf scan (O(N)), and leftmost prefix rule in composite indexes. Level 2: Describes indexes as simple lookup tables.",
    whyThisQuestion: "Candidate highlights SQL / relational databases. Validates storage engine knowledge and index design principles.",
    uncertaintyToResolve: "Verification of candidate's understanding of execution plans and composite index prefix selectivity.",
    expectedKeyConcepts: [
      "b-tree index structure",
      "clustered vs non-clustered",
      "index seek vs index scan",
      "composite index leading column order",
      "leftmost prefix rule",
      "covering index"
    ],
    idealAnswer: "A B-Tree (Balanced Tree) index organizes key-pointer pairs in sorted hierarchical pages: Root, Intermediate Branch, and Leaf pages. In a Clustered Index, leaf pages store the actual table rows; in a Non-Clustered index, leaf pages store the index keys and row pointers (RID or primary key). An Index Seek traverses from root to leaf via binary search in O(log N) page reads, directly pinpointing target records. An Index Scan reads all index leaf pages sequentially (O(N)), occurring when conditions lack selective predicates or functions wrap indexed columns (e.g., WHERE YEAR(date) = 2024). In Composite Indexes (col1, col2, col3), data is sorted strictly by col1 first, then col2, then col3. A query filtering only on col2 cannot utilize the B-Tree seek because the leading sort order is broken (Leftmost Prefix Rule). A Covering Index includes all query columns in the index itself, avoiding table lookups altogether."
  },
  {
    id: "sql-02",
    domain: "sql",
    difficulty: "advanced",
    competencyName: "ACID Transactions & Transaction Isolation Levels",
    prompt: "Explain the ACID guarantees of relational databases. Compare Read Uncommitted, Read Committed, Repeatable Read, and Serializable, detailing the concurrency anomalies each level prevents.",
    rubricCriteria: "Level 4: Formulates ACID principles, dirty reads, non-repeatable reads, phantom reads, and explains MVCC snapshot isolation vs serializable locking. Level 2: Defines ACID acronym without concurrency anomaly distinctions.",
    whyThisQuestion: "Validates deep relational database transaction semantics and concurrent data integrity guarantees.",
    uncertaintyToResolve: "Candidate's understanding of transaction isolation trade-offs and MVCC behavior under high concurrency.",
    expectedKeyConcepts: [
      "acid atomicity consistency isolation durability",
      "dirty read",
      "non-repeatable read",
      "phantom read",
      "mvcc (multi-version concurrency control)",
      "serializable snapshot isolation"
    ],
    idealAnswer: "ACID guarantees reliability: Atomicity (all-or-nothing via WAL rollback), Consistency (preserves schema constraints), Isolation (concurrent transactions execute without interference), Durability (committed changes persist to disk via WAL). Concurrency anomalies and Isolation Levels: 1) Read Uncommitted: allows Dirty Reads (reading uncommitted data later rolled back). 2) Read Committed: prevents Dirty Reads by reading only committed data; allows Non-Repeatable Reads (reading the same row twice in one transaction yields different values because another committed transaction modified it). 3) Repeatable Read: prevents Dirty and Non-Repeatable Reads via MVCC (Multi-Version Concurrency Control) snapshot isolation; in traditional locking, Phantom Reads (new rows inserted matching a WHERE clause) could occur. 4) Serializable: strictest level, preventing all anomalies including serialization anomalies and phantoms via two-phase locking or SSI (Serializable Snapshot Isolation)."
  },
  {
    id: "sql-03",
    domain: "sql",
    difficulty: "intermediate",
    competencyName: "Schema Normalization & Strategic Denormalization",
    prompt: "Walk through the normalization stages from 1NF to BCNF. Under what high-scale query scenarios would you intentionally denormalize a schema, and how do you safeguard data integrity?",
    rubricCriteria: "Level 4: Details 1NF (atomicity), 2NF (no partial dependencies), 3NF (no transitive dependencies), BCNF, and explains OLAP read-heavy join bottlenecks solved by denormalization with CDC/triggers. Level 2: Defines 1NF/2NF vaguely without denormalization trade-offs.",
    whyThisQuestion: "Assesses database modeling fundamentals and pragmatic tradeoffs between write normalization and read latency.",
    uncertaintyToResolve: "Determining whether candidate knows when to follow academic normalization versus real-world performance denormalization.",
    expectedKeyConcepts: [
      "1nf atomic values",
      "2nf no partial dependencies",
      "3nf no transitive dependencies",
      "bcnf boyce-codd normal form",
      "read-heavy olap vs write oltp",
      "materialized views",
      "triggers / event-driven synchronization"
    ],
    idealAnswer: "Normalization removes redundancy and update anomalies: 1NF requires atomic column values and unique primary keys (no repeating groups). 2NF requires 1NF and no partial dependencies (every non-key attribute depends on the whole composite primary key). 3NF requires 2NF and no transitive dependencies (non-key attributes depend only on the primary key, not on other non-key attributes). BCNF (Boyce-Codd) tightens 3NF so that for every functional dependency X -> Y, X must be a superkey. Strategic Denormalization is applied in high-throughput read-heavy systems (OLAP, reporting dashboards, feed aggregations) where multi-table JOINs create CPU/disk bottlenecks. To maintain integrity when denormalizing (e.g. storing cached user_name directly on orders table), we use transactional database triggers, asynchronous event-driven updates (Kafka/Change Data Capture), or Materialized Views refreshed on commit or schedule."
  },
  {
    id: "sql-04",
    domain: "sql",
    difficulty: "advanced",
    competencyName: "Database Sharding & Replication Architecture",
    prompt: "Compare horizontal scaling via Read Replicas versus Database Sharding. How do you select a Shard Key to avoid Hotspots, and what are the trade-offs of cross-shard transactions?",
    rubricCriteria: "Level 4: Explains read replicas (replication lag, single write bottleneck), sharding (read/write scale), shard key selection via consistent hashing, and trade-offs of cross-shard joins and distributed sagas. Level 2: Treats sharding and replication as synonymous.",
    whyThisQuestion: "Evaluates horizontal scaling strategy for massive database datasets exceeding single-node capacity.",
    uncertaintyToResolve: "Candidate's ability to partition relational data without introducing catastrophic write hotspots.",
    expectedKeyConcepts: [
      "read replicas replication lag",
      "horizontal sharding",
      "shard key selection",
      "avoiding write hotspots",
      "consistent hashing",
      "cross-shard joins",
      "distributed transactions"
    ],
    idealAnswer: "Read Replicas scale read queries horizontally by replicating the primary database via asynchronous or semi-synchronous replication; writes still bottleneck on the single primary, and replicas suffer from Replication Lag (clients reading immediately after writing may observe stale data, solved by read-your-own-writes routing). Sharding splits both reads and writes horizontally across multiple independent database nodes. Shard Key selection is paramount: a poor key (like timestamp or auto-incrementing ID) directs all current writes to a single shard (Write Hotspot). A high-cardinality key (like user_uuid or tenant_id) hashed via Consistent Hashing distributes data uniformly across nodes. The trade-offs of sharding include loss of referential integrity (foreign keys cannot span shards), expensive cross-shard JOINs requiring scatter-gather network queries, and complex distributed transactions (requiring Sagas)."
  },
  {
    id: "sql-05",
    domain: "sql",
    difficulty: "advanced",
    competencyName: "Query Optimization & JOIN Execution Engines",
    prompt: "How does the database query planner decide between Nested Loop Join, Hash Join, and Sort-Merge Join? How do table statistics and indexes dictate this choice?",
    rubricCriteria: "Level 4: Explains cost-based optimizer, nested loop (small outer + indexed inner O(M log N)), hash join (in-memory hash table of smaller table O(M+N)), sort-merge join (sorted inputs), and memory spill hazards. Level 2: Describes SQL JOIN syntax without execution engine internals.",
    whyThisQuestion: "Validates query tuning ability, execution plan diagnostics, and indexing strategy for high-volume joins.",
    uncertaintyToResolve: "Understanding how PostgreSQL/MySQL internal optimizers evaluate join algorithms.",
    expectedKeyConcepts: [
      "nested loop join",
      "hash join in-memory hash table",
      "sort-merge join",
      "query planner cost estimation",
      "table cardinality statistics",
      "work_mem and disk spill"
    ],
    idealAnswer: "The query planner's Cost-Based Optimizer selects join algorithms based on table cardinality, predicates, memory (work_mem), and available indexes: 1) Nested Loop Join: iterates over an outer table and looks up matching rows in the inner table. Optimal when the outer table is small and the inner table has an index on the join key (O(M * log N)), but degrades to O(M * N) without an index. 2) Hash Join: builds an in-memory hash table of the join keys of the smaller table, then scans the larger table probing the hash table (O(M + N)). Optimal for large, unsorted, unindexed tables. If the hash table exceeds work_mem, it spills to disk in multi-batch partitions. 3) Sort-Merge Join: requires both tables to be sorted on the join key (or scans an existing B-Tree index in sort order) and steps through both pointers sequentially (O(M + N) after sorting). Optimal for large sorted datasets or when queries include ORDER BY on join keys."
  },
  {
    id: "sql-06",
    domain: "sql",
    difficulty: "intermediate",
    competencyName: "SQL Security & Injection Prevention Mechanics",
    prompt: "How do Prepared Statements (Parameterized Queries) mathematically prevent SQL Injection at the database protocol level, and why is client-side string escaping insufficient?",
    rubricCriteria: "Level 4: Details binary protocol separation between AST compilation phase (syntax tree) and parameter binding phase, showing it is syntactically impossible for input to alter query structure. Level 2: Suggests regex escaping or sanitize functions.",
    whyThisQuestion: "Validates foundational security engineering in database access layers.",
    uncertaintyToResolve: "Candidate's technical comprehension of compiler AST parsing versus naive string sanitization.",
    expectedKeyConcepts: [
      "prepared statements",
      "parameterized queries",
      "abstract syntax tree (ast)",
      "compilation phase vs execution phase",
      "binary protocol separation",
      "client-side escaping failure modes"
    ],
    idealAnswer: "SQL Injection happens when untrusted user input is concatenated into query strings, causing the database SQL parser to treat data as executable code tokens (e.g., ' OR 1=1 --). Client-side string escaping or regex filters are insufficient because character encoding mismatches, null bytes, and subtle SQL dialect quirks can bypass sanitizers. Prepared Statements prevent injection at the database protocol level by decoupling query parsing from parameter binding. In Phase 1 (Prepare), the SQL template is sent to the database with placeholders (? or $1); the query engine parses, compiles, and generates an immutable Abstract Syntax Tree (AST) and query execution plan. In Phase 2 (Execute), parameter values are transmitted separately over the binary protocol. The query engine binds parameters strictly as literal values into the pre-compiled AST, making it syntactically impossible for input to alter query structure."
  },

  // ==========================================
  // 5. DATA STRUCTURES & SYSTEM DESIGN (dsa)
  // ==========================================
  {
    id: "dsa-01",
    domain: "dsa",
    difficulty: "intermediate",
    competencyName: "Data Structures & Hash Map Mechanics",
    prompt: "Explain the internal mechanics of a Hash Map. How does it achieve average O(1) lookup time, and what strategies are used to resolve hash collisions?",
    rubricCriteria: "Level 4: Explains hash code calculation, bucket indexing via modulo, O(1) average vs O(n) worst case, and compares collision strategies (separate chaining vs open addressing). Level 2: Explains key-value lookup without collision handling. Level 1: Superficial explanation.",
    whyThisQuestion: "Candidate claims foundational software engineering skills. Validates low-level memory layout, hashing functions, and collision resolution trade-offs beyond standard library usage.",
    uncertaintyToResolve: "Whether candidate understands low-level memory layout, hashing functions, and collision resolution trade-offs beyond standard library usage.",
    expectedKeyConcepts: [
      "hash function",
      "bucket index",
      "modulo",
      "collision",
      "separate chaining",
      "open addressing",
      "O(1) average",
      "O(n) worst-case",
      "load factor"
    ],
    idealAnswer: "A hash map provides average O(1) time complexity for insertions and lookups by using a hash function to map keys to bucket indices in an underlying array. When a key is inserted, hash(key) % capacity yields the bucket index. In the average case, keys distribute uniformly. However, collisions occur when distinct keys produce the same index. We resolve this via Separate Chaining (each bucket holds a linked list or red-black tree, as in Java 8+ HashMap when bucket size exceeds 8) or Open Addressing (probing alternative buckets via linear probing, quadratic probing, or double hashing). Without collision resolution, lookups degrade to O(n) worst-case. We maintain a load factor (commonly 0.75) and dynamically rehash into a doubled array capacity when exceeded."
  },
  {
    id: "dsa-02",
    domain: "dsa",
    difficulty: "advanced",
    competencyName: "Data Structures: LRU Cache Architecture",
    prompt: "How do you design a Least Recently Used (LRU) Cache supporting get(key) and put(key, value) in strictly O(1) time complexity? Why is a Doubly Linked List required instead of a Singly Linked List?",
    rubricCriteria: "Level 4: Details HashMap (key -> node pointer) + Doubly Linked List (MRU head, LRU tail), and explains why node deletion requires O(1) predecessor pointer update impossible in singly linked list without traversal. Level 2: Uses array or single list with O(n) eviction.",
    whyThisQuestion: "Classic data structure design problem testing compound data structures and pointer manipulation.",
    uncertaintyToResolve: "Ability to combine multiple data structures to meet strict time complexity constraints.",
    expectedKeyConcepts: [
      "lru cache",
      "doubly linked list",
      "hash map pointers",
      "O(1) get and put",
      "head mru and tail lru",
      "sentinel dummy nodes",
      "node removal in O(1)"
    ],
    idealAnswer: "An LRU cache with strict O(1) get and put requires combining a Hash Map with a Doubly Linked List. The Hash Map maps keys directly to pointers/nodes in the linked list for O(1) key lookup. The Doubly Linked List maintains temporal access order, with a dummy Head representing Most Recently Used (MRU) and a dummy Tail representing Least Recently Used (LRU). When get(key) is invoked, the node is retrieved from the map, unlinked from its current position in O(1), and spliced to the head. When put(key, value) exceeds capacity, the tail's previous node is evicted in O(1) and deleted from the hash map. A Doubly Linked List is mandatory because removing a node in O(1) requires updating node.prev.next = node.next; a Singly Linked List would require an O(N) traversal from the head to find the predecessor node."
  },
  {
    id: "dsa-03",
    domain: "dsa",
    difficulty: "advanced",
    competencyName: "Balanced Trees & Self-Balancing Invariants",
    prompt: "Compare AVL Trees and Red-Black Trees. How do self-balancing trees prevent degenerate O(N) linked-list search behavior, and why do standard libraries (like C++ std::map or Java TreeMap) prefer Red-Black Trees?",
    rubricCriteria: "Level 4: Explains tree rotations, AVL strict balance factor (<=1) vs Red-Black 5 color invariants, and contrasts AVL faster lookups with Red-Black faster insertions/deletions (fewer rotations). Level 2: Describes binary search trees without balancing invariants.",
    whyThisQuestion: "Evaluates algorithmic depth in tree balancing, rotation mechanics, and real-world standard library tradeoffs.",
    uncertaintyToResolve: "Candidate's understanding of tree height guarantees and amortized rebalancing complexity.",
    expectedKeyConcepts: [
      "avl tree balance factor",
      "red-black tree 5 invariants",
      "tree rotations",
      "O(log N) height guarantee",
      "search heavy vs write heavy",
      "amortized rebalancing rotations"
    ],
    idealAnswer: "In standard BSTs, inserting sorted data creates a degenerate tree equivalent to a linked list with O(N) search time. Self-balancing trees enforce tree height O(log N) via tree rotations (Left/Right/Double rotations). AVL Trees enforce strict balancing: the height difference (balance factor) between left and right subtrees cannot exceed 1. This guarantees shallower trees and faster lookups, but insertions and deletions require more frequent rotations. Red-Black Trees enforce looser balancing using 5 color invariants (Root is black, No two consecutive red nodes, Every path from root to null leaves has equal black height). Because Red-Black trees allow slightly higher height (2 * log(N+1)), insertions require at most 2 rotations and deletions at most 3 rotations with fewer structural adjustments. Standard libraries prefer Red-Black Trees because their amortized insertion and deletion performance is significantly faster in general-purpose workloads."
  },
  {
    id: "dsa-04",
    domain: "dsa",
    difficulty: "intermediate",
    competencyName: "System Design: Load Balancing Architecture",
    prompt: "How do Layer 4 (Transport) and Layer 7 (Application) load balancers differ? Compare round-robin, least-connections, and consistent hashing algorithms for routing incoming web traffic.",
    rubricCriteria: "Level 4: Distinguishes TCP/UDP L4 from HTTP/TLS L7 routing, explains round-robin vs least connections vs consistent hashing, and details health check polling and SSL termination. Level 2: Treats all load balancing as simple round-robin DNS.",
    whyThisQuestion: "Assesses distributed infrastructure design, traffic ingress management, and routing heuristics.",
    uncertaintyToResolve: "Candidate's ability to architect high-availability web tiers with appropriate traffic distribution algorithms.",
    expectedKeyConcepts: [
      "layer 4 transport vs layer 7 application",
      "round-robin",
      "least connections",
      "consistent hashing",
      "health check heartbeats",
      "ssl termination"
    ],
    idealAnswer: "Layer 4 (L4) load balancers operate at the transport layer (TCP/UDP), routing packets without inspecting application payloads. They deliver high throughput and low CPU overhead (NAT or Direct Server Return). Layer 7 (L7) load balancers operate at the application layer (HTTP/HTTPS/gRPC), terminating TLS and inspecting headers, cookies, and URL paths to route traffic intelligently (e.g., routing /api to backend and /static to CDN). Routing algorithms: 1) Round-Robin: distributes requests sequentially, effective when backend servers have identical specs and request processing times are uniform. 2) Least Connections: routes traffic to the server with the fewest active connections, superior when requests have variable lifetimes (e.g. streaming or database queries). 3) Consistent Hashing: maps requests (e.g., by client IP or session ID) along a hash ring to preserve cache affinity and session sticky-routing while minimizing cache re-allocations when servers scale in or out."
  },
  {
    id: "dsa-05",
    domain: "dsa",
    difficulty: "advanced",
    competencyName: "Distributed Consensus & The CAP / PACELC Theorem",
    prompt: "Explain the CAP Theorem and its extension, the PACELC Theorem. Why is 'Consistency + Availability + Partition Tolerance' impossible simultaneously on distributed networks?",
    rubricCriteria: "Level 4: Explains network partitions as unavoidable network facts, CP vs AP trade-offs, and PACELC trade-off (If Partition -> Availability vs Consistency; Else -> Latency vs Consistency). Level 2: Claims a database can achieve all three CAP properties.",
    whyThisQuestion: "Validates distributed systems theory and architectural trade-offs in cloud database selection.",
    uncertaintyToResolve: "Understanding how network latency and partitions force trade-offs between linearizability and availability.",
    expectedKeyConcepts: [
      "cap theorem",
      "network partition",
      "linearizable consistency",
      "availability guarantee",
      "pacelc theorem",
      "latency vs consistency trade-off",
      "eventual consistency"
    ],
    idealAnswer: "The CAP Theorem states that in a distributed data store, when a Network Partition (P) inevitably occurs (dropped packets, split-brain network failures), a system must choose between Consistency (C) and Availability (A). If it chooses Consistency (CP, e.g. HBase, Spanner with Paxos), nodes refuse writes or fail until nodes sync, ensuring no stale reads at the expense of availability. If it chooses Availability (AP, e.g. Cassandra, DynamoDB), nodes accept writes locally, but reads may return stale data until partitions heal and background reconciliation runs. The PACELC Theorem extends this: If there is a Partition (P), trade off Availability (A) vs Consistency (C); Else (E) when running normally without partitions, trade off Latency (L) vs Consistency (C) (e.g., replicating synchronously across regions adds latency to guarantee strong consistency)."
  },
  {
    id: "dsa-06",
    domain: "dsa",
    difficulty: "advanced",
    competencyName: "Distributed Caching & Consistent Hashing",
    prompt: "Explain how Consistent Hashing solves cache redistribution spikes in distributed caches (like Memcached or DynamoDB). How do Virtual Nodes prevent uneven load skew?",
    rubricCriteria: "Level 4: Formulates traditional hash(key) % N invalidation spike (N/(N+1) keys lost), explains hash ring [0, 2^32-1], clockwise traversal, K/N remapping, and Virtual Nodes (Vnodes) preventing hot spots. Level 2: Describes modulo hashing without understanding node addition cascading misses.",
    whyThisQuestion: "Candidate claims distributed systems knowledge; validates understanding of distributed hash tables and load balancing uniformity.",
    uncertaintyToResolve: "Understanding mathematical mechanics of consistent hashing and mitigation of ring clustering via virtual nodes.",
    expectedKeyConcepts: [
      "consistent hashing",
      "hash ring [0, 2^32-1]",
      "traditional modulo hash failure",
      "clockwise key assignment",
      "K/N key redistribution",
      "virtual nodes (vnodes)",
      "uniform load distribution"
    ],
    idealAnswer: "In traditional modulo hashing (server = hash(key) % N), adding or removing a single cache server changes the denominator N. This invalidates nearly 100% of cached keys (N/(N+1)), causing a catastrophic cache stampede on the primary database. Consistent Hashing maps both servers and cache keys to points on a circular 360-degree hash ring ([0, 2^32-1]). A key is stored on the first server encountered clockwise along the ring. When a server is added or removed, only keys residing between that server and its predecessor (~ K/N keys) are redistributed; all other servers remain unaffected. However, with few physical servers, keys can cluster non-uniformly on the ring (load skew). Virtual Nodes (Vnodes) solve this by mapping each physical machine to 100-200 distinct pseudo-random points across the ring, ensuring uniform traffic distribution and predictable rebalancing."
  }
];

/**
 * Keyword sets for automatic resume domain grip detection
 */
const DOMAIN_KEYWORDS = {
  ml: [
    'machine learning', 'deep learning', 'pytorch', 'tensorflow', 'scikit-learn',
    'nlp', 'llm', 'computer vision', 'transformer', 'neural network', 'embeddings',
    'xgboost', 'pandas', 'numpy', 'data science', 'ai engineer', 'model training',
    'data leakage', 'classification', 'regression', 'huggingface', 'scipy', 'bert',
    'gpt', 'clustering', 'reinforcement learning', 'keras', 'generative ai'
  ],
  backend: [
    'backend', 'node.js', 'express', 'django', 'fastapi', 'spring boot', 'golang',
    'go lang', 'microservices', 'rest api', 'graphql', 'redis', 'docker', 'kubernetes',
    'kafka', 'rabbitmq', 'concurrency', 'event loop', 'jwt', 'oauth', 'server-side',
    'grpc', 'distributed systems', 'celery', 'flask', 'api design', 'nginx'
  ],
  frontend: [
    'frontend', 'react', 'vue', 'angular', 'typescript', 'javascript', 'tailwind',
    'next.js', 'redux', 'zustand', 'css', 'html', 'vite', 'web vitals', 'virtual dom',
    'responsive design', 'ui/ux', 'browser', 'client-side', 'webpack', 'sass',
    'bootstrap', 'svelte', 'accessibility', 'dom', 'spa'
  ],
  sql: [
    'sql', 'postgresql', 'postgres', 'mysql', 'database', 'rdbms', 'indexing',
    'acid', 'queries', 'normalization', 'denormalization', 'sharding', 'joins',
    'b-tree', 'nosql', 'mongodb', 'schema design', 'transactions', 'sqlite',
    'oracle', 'dynamodb', 'cassandra', 'query optimization', 'stored procedures'
  ],
  dsa: [
    'data structures', 'algorithms', 'system design', 'load balancer', 'hash map',
    'lru cache', 'binary tree', 'graph', 'dynamic programming', 'complexity',
    'o(1)', 'o(n)', 'cap theorem', 'consistent hashing', 'balanced tree', 'heap',
    'leetcode', 'competitive programming', 'sorting'
  ]
};

/**
 * Detect domain grip based on resume text and target role
 */
export function detectResumeDomainGrip(resumeText = '', targetRole = '') {
  // If targetRole is a generic placeholder, don't let it skew keyword matching
  const isDefaultOrGenericRole = !targetRole || 
    targetRole === 'Senior AI & Full-Stack Engineer' || 
    targetRole === 'Software Engineer' || 
    targetRole === 'Junior Software Engineer' ||
    targetRole === 'Candidate';

  const cleanRole = isDefaultOrGenericRole ? '' : targetRole;
  const combined = `${resumeText} ${cleanRole}`.toLowerCase();

  const scores = {
    ml: 0,
    backend: 0,
    frontend: 0,
    sql: 0,
    dsa: 0
  };

  for (const [domain, keywords] of Object.entries(DOMAIN_KEYWORDS)) {
    for (const kw of keywords) {
      // Escape for regex
      const escaped = kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(`\\b${escaped}\\b`, 'gi');
      const matches = combined.match(regex);
      if (matches) {
        scores[domain] += matches.length;
      }
    }
  }

  // Find dominant domain based on maximum score
  let dominantDomain = 'dsa';
  let maxScore = 0;

  // Check which domain has highest score from resume
  const domains = ['frontend', 'backend', 'ml', 'sql', 'dsa'];
  for (const domain of domains) {
    if (scores[domain] > maxScore) {
      maxScore = scores[domain];
      dominantDomain = domain;
    }
  }

  // If role specifically specifies something explicit and non-generic, honor that role
  const lowerRole = (targetRole || '').toLowerCase().trim();
  if (!isDefaultOrGenericRole) {
    if (lowerRole.includes('frontend') || lowerRole.includes('ui') || lowerRole.includes('web') || lowerRole.includes('react') || lowerRole.includes('client')) {
      dominantDomain = 'frontend';
    } else if (lowerRole.includes('backend') || lowerRole.includes('server') || lowerRole.includes('node') || lowerRole.includes('api')) {
      dominantDomain = 'backend';
    } else if (lowerRole.includes('sql') || lowerRole.includes('database') || lowerRole.includes('dba') || lowerRole.includes('data engineer')) {
      dominantDomain = 'sql';
    } else if (lowerRole.includes('machine learning') || lowerRole.includes('deep learning') || lowerRole.includes('data scientist') || /\bai\b/.test(lowerRole)) {
      dominantDomain = 'ml';
    } else if (lowerRole.includes('algorithm') || lowerRole.includes('dsa') || lowerRole.includes('systems') || lowerRole.includes('competitive')) {
      dominantDomain = 'dsa';
    }
  }

  // If still no scores and role was generic, check if role specifically mentions anything
  if (maxScore === 0 && isDefaultOrGenericRole && targetRole) {
    if (targetRole.toLowerCase().includes('frontend')) dominantDomain = 'frontend';
    else if (targetRole.toLowerCase().includes('backend')) dominantDomain = 'backend';
    else if (targetRole.toLowerCase().includes('sql')) dominantDomain = 'sql';
    else if (targetRole.toLowerCase().includes('machine learning')) dominantDomain = 'ml';
    else dominantDomain = 'dsa';
  }

  return {
    dominantDomain,
    scores
  };
}

/**
 * Get random initial question tailored to candidate's resume domain
 */
export function getRandomInitialQuestion({ resumeText = '', targetRole = 'Software Engineer', excludeIds = [] } = {}) {
  const { dominantDomain } = detectResumeDomainGrip(resumeText, targetRole);

  // Filter pool by dominant domain and exclude asked IDs / prompts
  let candidatePool = QUESTION_BANK.filter(q => 
    q.domain === dominantDomain && 
    !excludeIds.includes(q.id) &&
    !excludeIds.some(asked => asked === q.id || asked === q.prompt)
  );

  // If pool exhausted or empty, fall back to any unasked questions
  if (candidatePool.length === 0) {
    candidatePool = QUESTION_BANK.filter(q => 
      !excludeIds.includes(q.id) &&
      !excludeIds.some(asked => asked === q.id || asked === q.prompt)
    );
  }

  if (candidatePool.length === 0) {
    candidatePool = QUESTION_BANK;
  }

  // Select a random question from candidatePool
  const randomIndex = Math.floor(Math.random() * candidatePool.length);
  const selected = candidatePool[randomIndex];

  return {
    ...selected,
    priorityCalculation: {
      metrics: {
        roleImportance: 0.95,
        evidenceUncertainty: 1.0,
        assessmentNeed: 1.0,
        expectedInformationGain: 0.9,
        repetitionPenalty: 0.0,
        timeCostPenalty: 0.05
      },
      priorityScore: 0.945
    }
  };
}

/**
 * Get next question adaptively based on candidate's performance and unasked pool
 */
export function getRandomAdaptiveQuestion({
  resumeText = '',
  targetRole = 'Software Engineer',
  askedQuestionIds = [],
  previousEvaluation = null
} = {}) {
  const { dominantDomain } = detectResumeDomainGrip(resumeText, targetRole);

  const unasked = QUESTION_BANK.filter(q => 
    !askedQuestionIds.includes(q.id) && 
    !askedQuestionIds.some(asked => asked === q.id || asked === q.prompt || (typeof asked === 'string' && asked.includes(q.prompt.slice(0, 30))))
  );

  let pool = [];

  if (previousEvaluation && (previousEvaluation.status === 'Demonstrated' || previousEvaluation.rubricLevel >= 3)) {
    // Escalate difficulty to advanced within same dominant domain
    const advancedInDomain = unasked.filter(q => q.domain === dominantDomain && q.difficulty === 'advanced');
    if (advancedInDomain.length > 0) {
      pool = advancedInDomain;
    } else {
      pool = unasked.filter(q => q.domain === dominantDomain);
    }
  } else if (previousEvaluation && (previousEvaluation.status === 'Partially demonstrated' || previousEvaluation.rubricLevel <= 2)) {
    // Keep in same domain with intermediate or targeted probe
    const intermediateInDomain = unasked.filter(q => q.domain === dominantDomain && q.difficulty === 'intermediate');
    if (intermediateInDomain.length > 0) {
      pool = intermediateInDomain;
    } else {
      pool = unasked.filter(q => q.domain === dominantDomain);
    }
  } else {
    pool = unasked.filter(q => q.domain === dominantDomain);
  }

  // If dominant domain questions are exhausted, fall back to any unasked questions
  if (pool.length === 0) {
    pool = unasked;
  }

  if (pool.length === 0) {
    pool = QUESTION_BANK;
  }

  const randomIndex = Math.floor(Math.random() * pool.length);
  const selected = pool[randomIndex];

  return {
    ...selected,
    priorityCalculation: {
      metrics: {
        roleImportance: 0.9,
        evidenceUncertainty: 0.85,
        assessmentNeed: 0.85,
        expectedInformationGain: 0.88,
        repetitionPenalty: 0.1,
        timeCostPenalty: 0.05
      },
      priorityScore: 0.892
    }
  };
}

/**
 * Look up question by prompt or id to retrieve its benchmark ideal answer
 */
export function findQuestionByPromptOrId(query = '') {
  if (!query) return null;
  const qStr = query.toLowerCase().trim();
  return QUESTION_BANK.find(q => 
    q.id === query || 
    q.prompt.toLowerCase().trim() === qStr || 
    q.prompt.toLowerCase().includes(qStr.slice(0, 30))
  ) || null;
}
