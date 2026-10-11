export const expandedMCQBank = [
  {
    "id": "mcq_code_01",
    "category": "coding",
    "difficulty": "Easy",
    "question": "What is the worst-case time complexity of searching for an element in a Hash Table when collisions are handled using separate chaining?",
    "options": [
      "O(1)",
      "O(log N)",
      "O(N)",
      "O(N^2)"
    ],
    "correctIndex": 2,
    "explanation": "In the worst case where all keys hash to the same bucket index, the chain degenerates into a linked list of length N, requiring O(N) linear scan."
  },
  {
    "id": "mcq_code_02",
    "category": "coding",
    "difficulty": "Medium",
    "question": "Which sorting algorithm has guaranteed O(N log N) worst-case time complexity, is in-place, but is NOT stable?",
    "options": [
      "Merge Sort",
      "Quick Sort",
      "Heap Sort",
      "Insertion Sort"
    ],
    "correctIndex": 2,
    "explanation": "Heap Sort guarantees O(N log N) in all cases (best, average, worst), sorts in-place using O(1) auxiliary space, but does not preserve relative order of equal elements."
  },
  {
    "id": "mcq_code_03",
    "category": "coding",
    "difficulty": "Medium",
    "question": "In Python, what is the time complexity of popping an element from the BEGINNING of a standard list `my_list.pop(0)` versus a `collections.deque.popleft()`?",
    "options": [
      "List is O(1); Deque is O(N)",
      "List is O(N); Deque is O(1)",
      "Both are O(1)",
      "Both are O(N)"
    ],
    "correctIndex": 1,
    "explanation": "A Python list is backed by a contiguous array, so pop(0) shifts all remaining N-1 elements left in O(N) time. collections.deque is a doubly linked list of blocks with O(1) operations at both ends."
  },
  {
    "id": "mcq_code_04",
    "category": "coding",
    "difficulty": "Hard",
    "question": "When implementing a monotonic stack to find the Next Greater Element for all items in an array, what is the amortized time complexity across the entire array of length N?",
    "options": [
      "O(N^2)",
      "O(N log N)",
      "O(N)",
      "O(log N)"
    ],
    "correctIndex": 2,
    "explanation": "Each element is pushed onto the stack exactly once and popped at most once. Therefore, the total number of stack operations across all iterations is at most 2N, yielding O(N) overall."
  },
  {
    "id": "mcq_code_05",
    "category": "coding",
    "difficulty": "Easy",
    "question": "In JavaScript, what is the result of `typeof null` versus `typeof undefined`?",
    "options": [
      "\"object\" and \"undefined\"",
      "\"null\" and \"undefined\"",
      "\"undefined\" and \"undefined\"",
      "\"object\" and \"null\""
    ],
    "correctIndex": 0,
    "explanation": "In JavaScript, `typeof null` returns \"object\" due to a legacy bug in the original JS engine where type tags were stored in the bottom 3 bits. `typeof undefined` returns \"undefined\"."
  },
  {
    "id": "mcq_code_06",
    "category": "coding",
    "difficulty": "Medium",
    "question": "What is the primary difference between a process and a thread in modern operating systems?",
    "options": [
      "Threads have isolated virtual address spaces; processes share heap memory.",
      "Processes have independent address spaces; threads within the same process share code, data, and heap.",
      "Processes run only in kernel mode; threads run in user mode.",
      "Threads cannot be preemptively scheduled by the OS kernel."
    ],
    "correctIndex": 1,
    "explanation": "A process is an isolated execution context with its own address space. Threads are lightweight execution units within a process sharing the same address space, file descriptors, and heap memory."
  },
  {
    "id": "mcq_ml_01",
    "category": "machine_learning",
    "difficulty": "Medium",
    "question": "When preprocessing data for an ML pipeline, why must StandardScaler be fit ONLY on the training split rather than the whole dataset?",
    "options": [
      "Because StandardScaler is computationally too slow on large datasets.",
      "To prevent data leakage by keeping test set distribution and statistics completely unseen during training.",
      "Because Scikit-Learn will raise an error if fit() is called on non-training splits.",
      "StandardScaler only works on arrays with fewer than 10,000 samples."
    ],
    "correctIndex": 1,
    "explanation": "Fitting transformations on the combined dataset leaks statistical information (mean and standard deviation) from the test set into model training, artificially inflating validation accuracy."
  },
  {
    "id": "mcq_ml_02",
    "category": "machine_learning",
    "difficulty": "Hard",
    "question": "In deep neural networks, how does Batch Normalization alleviate Internal Covariate Shift and accelerate convergence?",
    "options": [
      "By zeroing out negative weights during every forward pass.",
      "By normalizing layer inputs to zero mean and unit variance per mini-batch, with learnable affine scaling and shifting parameters.",
      "By pruning 50% of connections at random during training.",
      "By computing the exact Hessian matrix at every gradient step."
    ],
    "correctIndex": 1,
    "explanation": "Batch Normalization normalizes activations across the mini-batch and applies learnable gamma (scale) and beta (shift) parameters, stabilizing distribution shifts across deeper layers."
  },
  {
    "id": "mcq_ml_03",
    "category": "machine_learning",
    "difficulty": "Hard",
    "question": "In Transformer architectures, what is the computational complexity of the standard Scaled Dot-Product Self-Attention mechanism with sequence length L and hidden dimension d?",
    "options": [
      "O(L * d)",
      "O(L^2 * d)",
      "O(L * d^2)",
      "O(L^3)"
    ],
    "correctIndex": 1,
    "explanation": "Computing Q * K^T requires multiplying an (L x d) matrix by a (d x L) matrix, resulting in an (L x L) attention score matrix taking O(L^2 * d) operations."
  },
  {
    "id": "mcq_ml_04",
    "category": "machine_learning",
    "difficulty": "Medium",
    "question": "Which metric is best suited for evaluating a fraud detection model with severe class imbalance (0.01% positive fraud rate)?",
    "options": [
      "Overall Accuracy",
      "Precision-Recall Area Under Curve (PR-AUC)",
      "Mean Squared Error (MSE)",
      "Adjusted R-Squared"
    ],
    "correctIndex": 1,
    "explanation": "High accuracy is trivially achieved by predicting the negative majority class 99.99% of the time. PR-AUC focuses directly on true positives without being inflated by true negatives."
  },
  {
    "id": "mcq_fe_01",
    "category": "frontend",
    "difficulty": "Medium",
    "question": "In modern React (Fiber architecture), what happens during the reconciliation phase versus the commit phase?",
    "options": [
      "Reconciliation synchronously modifies DOM; commit computes virtual changes.",
      "Reconciliation renders components and computes virtual DOM diffs (interruptible); commit synchronously applies changes to the actual DOM.",
      "Reconciliation applies CSS animations; commit handles server fetch requests.",
      "There is no separation; React writes to DOM directly on every state update."
    ],
    "correctIndex": 1,
    "explanation": "The Render/Reconciliation phase diffs Fiber nodes and can be paused or resumed by React scheduler. The Commit phase is synchronous and writes the finalized tree to the real browser DOM."
  },
  {
    "id": "mcq_fe_02",
    "category": "frontend",
    "difficulty": "Hard",
    "question": "What is the Core Web Vital metric Interaction to Next Paint (INP) designed to measure?",
    "options": [
      "The time taken for the largest visible image or hero block to render.",
      "Overall page responsiveness to user interactions (clicks, taps, key presses) throughout the entire page lifecycle.",
      "The cumulative shift of layout elements during page load.",
      "The DNS resolution and TCP handshake latency."
    ],
    "correctIndex": 1,
    "explanation": "INP measures overall responsiveness by assessing the latency of all click, tap, and keyboard interactions throughout the user session and reporting the worst latency."
  },
  {
    "id": "mcq_fe_03",
    "category": "frontend",
    "difficulty": "Easy",
    "question": "In the CSS Box Model, what does `box-sizing: border-box` do when specifying an element width of 200px and padding of 20px?",
    "options": [
      "Total rendered width becomes 240px.",
      "Total rendered width remains 200px, absorbing the padding and border inside the specified width.",
      "Padding is ignored entirely.",
      "Border is moved outside the element margin."
    ],
    "correctIndex": 1,
    "explanation": "Under border-box, the specified width includes content, padding, and border. With width: 200px and padding: 20px, the total width is 200px (160px content + 40px horizontal padding)."
  },
  {
    "id": "mcq_sys_01",
    "category": "system_design",
    "difficulty": "Medium",
    "question": "In distributed systems, which strategy ensures that requests with identical keys are consistently routed to the same cache or database server even when nodes join or leave?",
    "options": [
      "Round Robin DNS routing",
      "Consistent Hashing with virtual nodes",
      "Flooding Broadcast routing",
      "Random Walk Routing"
    ],
    "correctIndex": 1,
    "explanation": "Consistent Hashing places both nodes and keys on a logical hash ring. When nodes are added or removed, only K/N keys need to be remapped on average, preventing cascading cache stampedes."
  },
  {
    "id": "mcq_sys_02",
    "category": "system_design",
    "difficulty": "Hard",
    "question": "According to the CAP Theorem, when a network partition (P) occurs in a distributed data store, which trade-off is mandatory?",
    "options": [
      "Sacrifice Durability for Latency",
      "Choose between Consistency (returning error or waiting) or Availability (returning potentially stale data)",
      "Sacrifice Encryption for High Throughput",
      "Switch from TCP to UDP automatically"
    ],
    "correctIndex": 1,
    "explanation": "Network partitions are inevitable in distributed networks. When a partition occurs, the system must either guarantee consistency by rejecting updates or guarantee availability by accepting divergent writes."
  },
  {
    "id": "mcq_sys_03",
    "category": "system_design",
    "difficulty": "Medium",
    "question": "What is the purpose of an Idempotency Key in payment gateway and RESTful API architectures?",
    "options": [
      "To encrypt payload data using asymmetric RSA keys.",
      "To prevent duplicate transactions when retrying network requests by ensuring duplicate identical calls execute only once.",
      "To bypass API rate limiting headers.",
      "To compress request JSON payloads."
    ],
    "correctIndex": 1,
    "explanation": "An idempotency key allows clients to safely retry POST requests on timeouts without risking duplicate payments or resource creations."
  },
  {
    "id": "mcq_sql_01",
    "category": "sql_database",
    "difficulty": "Medium",
    "question": "What is the key difference between the SQL window functions RANK() and DENSE_RANK() when ties occur?",
    "options": [
      "RANK() skips rank numbers after a tie (e.g., 1, 2, 2, 4), whereas DENSE_RANK() does not skip (e.g., 1, 2, 2, 3).",
      "DENSE_RANK() only works on integer primary keys.",
      "RANK() computes ascending order while DENSE_RANK() computes descending order.",
      "There is no functional difference; they are vendor-specific aliases."
    ],
    "correctIndex": 0,
    "explanation": "RANK() creates gaps corresponding to the number of tied rows, while DENSE_RANK() assigns consecutive rankings without skipping values."
  },
  {
    "id": "mcq_sql_02",
    "category": "sql_database",
    "difficulty": "Hard",
    "question": "Why are B+ Trees predominantly favored over B-Trees and Hash Indexes for relational database storage engines (e.g. InnoDB, Postgres)?",
    "options": [
      "B+ Trees only support integer keys.",
      "All actual record pointers are stored only in the leaf nodes, which are linked sequentially, enabling exceptionally fast range queries and full scans.",
      "B+ Trees never require rebalancing during insertions.",
      "Hash Indexes take O(N) space while B+ Trees take O(1) space."
    ],
    "correctIndex": 1,
    "explanation": "In a B+ Tree, non-leaf nodes store only keys for routing. All data resides in leaf nodes connected as a doubly linked list, which allows high fanout and contiguous range scans."
  }
];
