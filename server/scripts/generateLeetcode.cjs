const fs = require('fs');
const path = require('path');

const titles = [
  // Arrays & Hashing
  ['Two Sum', 'Easy', 'Arrays & Hashing', 'nums = [2,7,11,15], target = 9', '[0,1]', 'O(N)', 'O(N)', 'Use a Hash Map for O(1) complement lookup.'],
  ['Contains Duplicate', 'Easy', 'Arrays & Hashing', 'nums = [1,2,3,1]', 'true', 'O(N)', 'O(N)', 'Use a HashSet to detect repeated values.'],
  ['Valid Anagram', 'Easy', 'Arrays & Hashing', 's = "anagram", t = "nagaram"', 'true', 'O(N)', 'O(1)', 'Count character frequencies across alphabet.'],
  ['Group Anagrams', 'Medium', 'Arrays & Hashing', 'strs = ["eat","tea","tan","ate","nat","bat"]', '[["bat"],["nat","tan"],["ate","eat","tea"]]', 'O(N*K)', 'O(N*K)', 'Use sorted string or 26-char frequency tuple as map key.'],
  ['Top K Frequent Elements', 'Medium', 'Heap & Priority Queue', 'nums = [1,1,1,2,2,3], k = 2', '[1,2]', 'O(N)', 'O(N)', 'Bucket sort frequencies or use Min-Heap.'],
  ['Product of Array Except Self', 'Medium', 'Arrays & Hashing', 'nums = [1,2,3,4]', '[24,12,8,6]', 'O(N)', 'O(1)', 'Prefix and suffix product passes without division.'],
  ['Encode and Decode Strings', 'Medium', 'Arrays & Hashing', 'strs = ["lint","code","love","you"]', 'strs', 'O(N)', 'O(1)', 'Length-prefix framing (e.g. 4#lint4#code).'],
  ['Longest Consecutive Sequence', 'Medium', 'Arrays & Hashing', 'nums = [100,4,200,1,3,2]', '4', 'O(N)', 'O(N)', 'Only check sequences where num-1 is not in set.'],
  
  // Two Pointers
  ['Valid Palindrome', 'Easy', 'Two Pointers', 's = "A man, a plan, a canal: Panama"', 'true', 'O(N)', 'O(1)', 'Compare left and right alphanumeric characters.'],
  ['3Sum', 'Medium', 'Two Pointers', 'nums = [-1,0,1,2,-1,-4]', '[[-1,-1,2],[-1,0,1]]', 'O(N^2)', 'O(1)', 'Sort array, fix one element, use Two Pointers for remainder.'],
  ['Container With Most Water', 'Medium', 'Two Pointers', 'height = [1,8,6,2,5,4,8,3,7]', '49', 'O(N)', 'O(1)', 'Two pointers from ends, always move shorter boundary inward.'],
  ['Trapping Rain Water', 'Hard', 'Two Pointers', 'height = [0,1,0,2,1,0,1,3,2,1,2,1]', '6', 'O(N)', 'O(1)', 'Track leftMax and rightMax with two pointers.'],
  ['Two Sum II - Input Array Is Sorted', 'Medium', 'Two Pointers', 'numbers = [2,7,11,15], target = 9', '[1,2]', 'O(N)', 'O(1)', 'Two pointers from left and right boundaries.'],
  
  // Sliding Window
  ['Best Time to Buy and Sell Stock', 'Easy', 'Sliding Window', 'prices = [7,1,5,3,6,4]', '5', 'O(N)', 'O(1)', 'Track minimum price and maximum profit seen so far.'],
  ['Longest Substring Without Repeating Characters', 'Medium', 'Sliding Window', 's = "abcabcbb"', '3', 'O(N)', 'O(min(N,M))', 'Maintain sliding window with a Set.'],
  ['Longest Repeating Character Replacement', 'Medium', 'Sliding Window', 's = "ABAB", k = 2', '4', 'O(N)', 'O(1)', 'Track max frequency in window: (len - maxFreq) <= k.'],
  ['Permutation in String', 'Medium', 'Sliding Window', 's1 = "ab", s2 = "eidbaooo"', 'true', 'O(N)', 'O(1)', 'Fixed size sliding window comparing character count maps.'],
  ['Minimum Window Substring', 'Hard', 'Sliding Window', 's = "ADOBECODEBANC", t = "ABC"', '"BANC"', 'O(N)', 'O(M)', 'Sliding window tracking matched character counts.'],
  ['Sliding Window Maximum', 'Hard', 'Sliding Window', 'nums = [1,3,-1,-3,5,3,6,7], k = 3', '[3,3,5,5,6,7]', 'O(N)', 'O(K)', 'Monotonic decreasing Deque storing indices.'],

  // Stack
  ['Valid Parentheses', 'Easy', 'Stack', 's = "()[]{}"', 'true', 'O(N)', 'O(N)', 'Push opening brackets to stack and match on closing.'],
  ['Min Stack', 'Medium', 'Stack', 'push, pop, top, getMin', 'O(1) all ops', 'O(1)', 'O(N)', 'Store (val, currentMin) pair on stack.'],
  ['Evaluate Reverse Polish Notation', 'Medium', 'Stack', 'tokens = ["2","1","+","3","*"]', '9', 'O(N)', 'O(N)', 'Push operands to stack, pop two on operator.'],
  ['Generate Parentheses', 'Medium', 'Stack', 'n = 3', '["((()))","(()())"]', 'O(4^N / sqrt(N))', 'O(N)', 'Backtrack open < n and close < open.'],
  ['Daily Temperatures', 'Medium', 'Stack', 'temperatures = [73,74,75,71,69,72,76,73]', '[1,1,4,2,1,1,0,0]', 'O(N)', 'O(N)', 'Monotonic decreasing stack of indices.'],
  ['Car Fleet', 'Medium', 'Stack', 'target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]', '3', 'O(N log N)', 'O(N)', 'Sort by position descending, count arrival time bottlenecks.'],
  ['Largest Rectangle in Histogram', 'Hard', 'Stack', 'heights = [2,1,5,6,2,3]', '10', 'O(N)', 'O(N)', 'Monotonic increasing stack tracking width extensions.'],

  // Binary Search
  ['Binary Search', 'Easy', 'Binary Search', 'nums = [-1,0,3,5,9,12], target = 9', '4', 'O(log N)', 'O(1)', 'Standard mid = l + (r-l)//2 search.'],
  ['Search a 2D Matrix', 'Medium', 'Binary Search', 'matrix = [[1,3,5,7],[10,11,16,20]], target = 3', 'true', 'O(log(M*N))', 'O(1)', 'Treat matrix as flattened 1D array of length M*N.'],
  ['Koko Eating Bananas', 'Medium', 'Binary Search', 'piles = [3,6,7,11], h = 8', '4', 'O(N log(max(P)))', 'O(1)', 'Binary search on eating speed in range [1, max(piles)].'],
  ['Find Minimum in Rotated Sorted Array', 'Medium', 'Binary Search', 'nums = [3,4,5,1,2]', '1', 'O(log N)', 'O(1)', 'Compare mid to right boundary to discard sorted half.'],
  ['Search in Rotated Sorted Array', 'Medium', 'Binary Search', 'nums = [4,5,6,7,0,1,2], target = 0', '4', 'O(log N)', 'O(1)', 'Determine which half is uniformly sorted, then branch.'],
  ['Time Based Key-Value Store', 'Medium', 'Binary Search', 'set(k,v,t), get(k,t)', 'latest <= t', 'O(log N)', 'O(N)', 'Store timestamps in sorted list per key; binary search.'],
  ['Median of Two Sorted Arrays', 'Hard', 'Binary Search', 'nums1 = [1,3], nums2 = [2]', '2.0', 'O(log(min(M,N)))', 'O(1)', 'Binary search partition on smaller array.'],

  // Linked List
  ['Reverse Linked List', 'Easy', 'Linked List', 'head = [1,2,3,4,5]', '[5,4,3,2,1]', 'O(N)', 'O(1)', 'Iterative three pointers (prev, curr, next).'],
  ['Merge Two Sorted Lists', 'Easy', 'Linked List', 'list1 = [1,2,4], list2 = [1,3,4]', '[1,1,2,3,4,4]', 'O(N+M)', 'O(1)', 'Dummy head node, advance smaller pointer.'],
  ['Reorder List', 'Medium', 'Linked List', 'head = [1,2,3,4]', '[1,4,2,3]', 'O(N)', 'O(1)', 'Find middle, reverse second half, weave two halves together.'],
  ['Remove Nth Node From End of List', 'Medium', 'Linked List', 'head = [1,2,3,4,5], n = 2', '[1,2,3,5]', 'O(N)', 'O(1)', 'Fast pointer advances n steps ahead of slow pointer.'],
  ['Copy List with Random Pointer', 'Medium', 'Linked List', 'head with random ptrs', 'deep copy', 'O(N)', 'O(1)', 'Interleave cloned nodes or use Hash Map mapping original -> copy.'],
  ['Add Two Numbers', 'Medium', 'Linked List', 'l1 = [2,4,3], l2 = [5,6,4]', '[7,0,8]', 'O(N)', 'O(1)', 'Simulate addition digit by digit with carry.'],
  ['Linked List Cycle', 'Easy', 'Linked List', 'head = [3,2,0,-4], pos = 1', 'true', 'O(N)', 'O(1)', 'Floyd Tortoise and Hare two pointers.'],
  ['Find the Duplicate Number', 'Medium', 'Linked List', 'nums = [1,3,4,2,2]', '2', 'O(N)', 'O(1)', 'Floyd cycle detection on implicit linked list.'],
  ['LRU Cache Design', 'Medium', 'Linked List', 'get(k), put(k,v) cap = 2', 'O(1) ops', 'O(1)', 'O(C)', 'Hash Map + Doubly Linked List with head/tail sentinels.'],
  ['Merge K Sorted Lists', 'Hard', 'Linked List', 'lists = [[1,4,5],[1,3,4],[2,6]]', '[1,1,2,3,4,4,5,6]', 'O(N log K)', 'O(K)', 'Min-Heap storing heads of all K lists.'],
  ['Reverse Nodes in K-Group', 'Hard', 'Linked List', 'head = [1,2,3,4,5], k = 2', '[2,1,4,3,5]', 'O(N)', 'O(1)', 'Verify k nodes exist, reverse subsegment, recurse.'],

  // Trees
  ['Invert Binary Tree', 'Easy', 'Trees', 'root = [4,2,7,1,3,6,9]', '[4,7,2,9,6,3,1]', 'O(N)', 'O(H)', 'Recursively swap left and right subtrees.'],
  ['Maximum Depth of Binary Tree', 'Easy', 'Trees', 'root = [3,9,20,null,null,15,7]', '3', 'O(N)', 'O(H)', '1 + max(depth(left), depth(right)).'],
  ['Diameter of Binary Tree', 'Easy', 'Trees', 'root = [1,2,3,4,5]', '3', 'O(N)', 'O(H)', 'Track max leftDepth + rightDepth during post-order traversal.'],
  ['Balanced Binary Tree', 'Easy', 'Trees', 'root = [3,9,20,null,null,15,7]', 'true', 'O(N)', 'O(H)', 'Return -1 on unbalanced subtree height difference > 1.'],
  ['Same Tree', 'Easy', 'Trees', 'p = [1,2,3], q = [1,2,3]', 'true', 'O(N)', 'O(H)', 'Check val equality and recurse on left and right.'],
  ['Subtree of Another Tree', 'Easy', 'Trees', 'root = [3,4,5,1,2], subRoot = [4,1,2]', 'true', 'O(N*M)', 'O(H)', 'Check isSameTree for every node in root.'],
  ['Lowest Common Ancestor of a BST', 'Medium', 'Trees', 'root = [6,2,8,0,4,7,9], p = 2, q = 8', '6', 'O(H)', 'O(1)', 'If both < root go left; both > root go right; else root is LCA.'],
  ['Binary Tree Level Order Traversal', 'Medium', 'Trees', 'root = [3,9,20,null,null,15,7]', '[[3],[9,20],[15,7]]', 'O(N)', 'O(W)', 'BFS with queue tracking level size.'],
  ['Binary Tree Right Side View', 'Medium', 'Trees', 'root = [1,2,3,null,5,null,4]', '[1,3,4]', 'O(N)', 'O(H)', 'BFS last node in level or DFS visiting right child first.'],
  ['Count Good Nodes in Binary Tree', 'Medium', 'Trees', 'root = [3,1,4,3,null,1,5]', '4', 'O(N)', 'O(H)', 'DFS passing max value seen along current path.'],
  ['Validate Binary Search Tree', 'Medium', 'Trees', 'root = [2,1,3]', 'true', 'O(N)', 'O(H)', 'Pass (minVal, maxVal) bounds or in-order strictly ascending check.'],
  ['Kth Smallest Element in a BST', 'Medium', 'Trees', 'root = [3,1,4,null,2], k = 1', '1', 'O(H + K)', 'O(H)', 'In-order traversal stops after Kth visited node.'],
  ['Construct Binary Tree from Preorder and Inorder Traversal', 'Medium', 'Trees', 'preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]', '[3,9,20]', 'O(N)', 'O(N)', 'First element of preorder is root; split inorder using map.'],
  ['Binary Tree Maximum Path Sum', 'Hard', 'Trees', 'root = [-10,9,20,null,null,15,7]', '42', 'O(N)', 'O(H)', 'Max gain of node = val + max(0, left) + max(0, right).'],
  ['Serialize and Deserialize Binary Tree', 'Hard', 'Trees', 'root = [1,2,3,null,null,4,5]', 'decoded tree', 'O(N)', 'O(N)', 'Preorder with null delimiters or level order BFS.'],

  // Tries
  ['Implement Trie Prefix Tree', 'Medium', 'Tries', 'insert, search, startsWith', 'O(L) ops', 'O(L)', 'O(N*L)', 'Tree node with 26-element children array and isEnd flag.'],
  ['Design Add and Search Words Data Structure', 'Medium', 'Tries', 'addWord("bad"), search(".ad")', 'true', 'O(L)', 'O(N*L)', 'DFS branch on wildcard dot matching all children.'],
  ['Word Search II', 'Hard', 'Tries', 'board = [["o","a"],["e","t"]], words = ["eat"]', '["eat"]', 'O(M*N * 4^L)', 'O(W*L)', 'Build Trie of words, DFS backtrack on board.'],

  // Heap & Priority Queue
  ['Kth Largest Element in a Stream', 'Easy', 'Heap & Priority Queue', 'k = 3, nums = [4,5,8,2]', '4', 'O(N log K)', 'O(K)', 'Maintain Min-Heap of size K.'],
  ['Last Stone Weight', 'Easy', 'Heap & Priority Queue', 'stones = [2,7,4,1,8,1]', '1', 'O(N log N)', 'O(N)', 'Max-Heap pop two heaviest stones, push difference.'],
  ['K Closest Points to Origin', 'Medium', 'Heap & Priority Queue', 'points = [[1,3],[-2,2]], k = 1', '[[-2,2]]', 'O(N log K)', 'O(K)', 'Max-Heap of size K storing squared Euclidean distance.'],
  ['Kth Largest Element in an Array', 'Medium', 'Heap & Priority Queue', 'nums = [3,2,1,5,6,4], k = 2', '5', 'O(N)', 'O(1)', 'QuickSelect or Min-Heap of size K.'],
  ['Task Scheduler', 'Medium', 'Heap & Priority Queue', 'tasks = ["A","A","A","B","B","B"], n = 2', '8', 'O(N)', 'O(1)', 'Formula: (maxFreq - 1)*(n + 1) + countMax.'],
  ['Design Twitter', 'Medium', 'Heap & Priority Queue', 'postTweet, getNewsFeed, follow, unfollow', '10 recent', 'O(K log F)', 'O(U + T)', 'K-way merge on recent tweets using Min/Max Heap.'],
  ['Find Median from Data Stream', 'Hard', 'Heap & Priority Queue', 'addNum, findMedian', 'O(log N) add', 'O(log N)', 'O(N)', 'Two heaps: Max-Heap for lower half, Min-Heap for upper half.'],

  // Backtracking
  ['Subsets', 'Medium', 'Backtracking', 'nums = [1,2,3]', '[[],[1],[2],[3],[1,2],[1,3],[2,3],[1,2,3]]', 'O(2^N)', 'O(N)', 'Include or exclude current element at each depth.'],
  ['Combination Sum', 'Medium', 'Backtracking', 'candidates = [2,3,6,7], target = 7', '[[2,2,3],[7]]', 'O(2^(target/min))', 'O(target/min)', 'Backtrack allowing reuse of current candidate.'],
  ['Permutations', 'Medium', 'Backtracking', 'nums = [1,2,3]', '[[1,2,3],[1,3,2]]', 'O(N! * N)', 'O(N)', 'Backtrack with visited set or element swapping.'],
  ['Subsets II', 'Medium', 'Backtracking', 'nums = [1,2,2]', '[[],[1],[1,2],[1,2,2],[2],[2,2]]', 'O(2^N)', 'O(N)', 'Sort first; skip duplicates: if i > start and nums[i] == nums[i-1].'],
  ['Combination Sum II', 'Medium', 'Backtracking', 'candidates = [10,1,2,7,6,1,5], target = 8', '[[1,1,6],[1,2,5],[1,7],[2,6]]', 'O(2^N)', 'O(N)', 'Sort candidates; each candidate used once; skip adjacent identicals.'],
  ['Word Search', 'Medium', 'Backtracking', 'board = [["A","B"],["C","D"]], word = "ABDC"', 'true', 'O(M*N * 4^L)', 'O(L)', 'DFS in 4 directions, temporarily mark visited cell.'],
  ['Palindrome Partitioning', 'Medium', 'Backtracking', 's = "aab"', '[["a","a","b"],["aa","b"]]', 'O(2^N * N)', 'O(N)', 'Backtrack if prefix is palindrome.'],
  ['Letter Combinations of a Phone Number', 'Medium', 'Backtracking', 'digits = "23"', '["ad","ae","af","bd","be","bf"]', 'O(4^N)', 'O(N)', 'Map digits to char strings, backtrack combinations.'],
  ['N-Queens', 'Hard', 'Backtracking', 'n = 4', '[[board1],[board2]]', 'O(N!)', 'O(N)', 'Track occupied columns, positive diagonals, negative diagonals.'],

  // Graphs
  ['Number of Islands', 'Medium', 'Graphs', 'grid of 1s and 0s', 'count islands', 'O(M*N)', 'O(M*N)', 'BFS/DFS sink connected 1s into 0s.'],
  ['Clone Graph', 'Medium', 'Graphs', 'node with neighbors', 'cloned graph', 'O(V+E)', 'O(V)', 'DFS/BFS with Map mapping original node -> cloned node.'],
  ['Max Area of Island', 'Medium', 'Graphs', 'grid of 1s and 0s', 'max area', 'O(M*N)', 'O(M*N)', 'DFS returns 1 + sum of 4 neighbors, mark visited.'],
  ['Pacific Atlantic Water Flow', 'Medium', 'Graphs', 'heights matrix', 'coordinates reaching both', 'O(M*N)', 'O(M*N)', 'DFS from Pacific edges and Atlantic edges inwards.'],
  ['Surrounded Regions', 'Medium', 'Graphs', 'board of X and O', 'capture surrounded', 'O(M*N)', 'O(M*N)', 'DFS from boundary O marking as safe; convert remainder.'],
  ['Rotting Oranges', 'Medium', 'Graphs', 'grid with fresh (1) and rotten (2)', 'minutes to rot all', 'O(M*N)', 'O(M*N)', 'Multi-source BFS starting with all initial rotten oranges.'],
  ['Walls and Gates', 'Medium', 'Graphs', 'rooms with gates (0) and walls (-1)', 'fill distance', 'O(M*N)', 'O(M*N)', 'Multi-source BFS from all gates outwards.'],
  ['Course Schedule', 'Medium', 'Graphs', 'numCourses = 2, prerequisites = [[1,0]]', 'true', 'O(V+E)', 'O(V+E)', 'Kahns topological sort or DFS cycle detection.'],
  ['Course Schedule II', 'Medium', 'Graphs', 'numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]', '[0,1,2,3]', 'O(V+E)', 'O(V+E)', 'Topological sort order using BFS queue of zero in-degrees.'],
  ['Redundant Connection', 'Medium', 'Graphs', 'edges = [[1,2],[1,3],[2,3]]', '[2,3]', 'O(V)', 'O(V)', 'Union-Find with path compression; return redundant edge.'],
  ['Number of Connected Components in Graph', 'Medium', 'Graphs', 'n = 5, edges = [[0,1],[1,2],[3,4]]', '2', 'O(V + E)', 'O(V)', 'Union-Find counts components = n - successful unions.'],
  ['Graph Valid Tree', 'Medium', 'Graphs', 'n = 5, edges = [[0,1],[0,2],[0,3],[1,4]]', 'true', 'O(V)', 'O(V)', 'Tree iff edges == n - 1 and all nodes connected.'],
  ['Word Ladder', 'Hard', 'Graphs', 'beginWord = "hit", endWord = "cog"', '5', 'O(N * L^2)', 'O(N * L)', 'BFS shortest path changing one character at a time.'],

  // 1D Dynamic Programming
  ['Climbing Stairs', 'Easy', '1D Dynamic Programming', 'n = 3', '3', 'O(N)', 'O(1)', 'Fibonacci relation dp[i] = dp[i-1] + dp[i-2].'],
  ['Min Cost Climbing Stairs', 'Easy', '1D Dynamic Programming', 'cost = [10,15,20]', '15', 'O(N)', 'O(1)', 'cost[i] += min(cost[i+1], cost[i+2]).'],
  ['House Robber', 'Medium', '1D Dynamic Programming', 'nums = [1,2,3,1]', '4', 'O(N)', 'O(1)', 'rob = max(prevRob1 + num, prevRob2).'],
  ['House Robber II', 'Medium', '1D Dynamic Programming', 'nums = [2,3,2]', '3', 'O(N)', 'O(1)', 'max(houseRobber(nums[1:]), houseRobber(nums[:-1])).'],
  ['Longest Palindromic Substring', 'Medium', '1D Dynamic Programming', 's = "babad"', '"bab"', 'O(N^2)', 'O(1)', 'Expand around centers for odd and even length palindromes.'],
  ['Palindromic Substrings', 'Medium', '1D Dynamic Programming', 's = "abc"', '3', 'O(N^2)', 'O(1)', 'Expand around centers and count valid matches.'],
  ['Decode Ways', 'Medium', '1D Dynamic Programming', 's = "226"', '3', 'O(N)', 'O(1)', 'dp[i] based on single-digit (1-9) and two-digit (10-26) valid transitions.'],
  ['Coin Change', 'Medium', '1D Dynamic Programming', 'coins = [1,2,5], amount = 11', '3', 'O(A * C)', 'O(A)', 'Bottom-up DP: dp[a] = min(dp[a], 1 + dp[a - c]).'],
  ['Maximum Product Subarray', 'Medium', '1D Dynamic Programming', 'nums = [2,3,-2,4]', '6', 'O(N)', 'O(1)', 'Track curMin and curMax simultaneously due to negative signs.'],
  ['Word Break', 'Medium', '1D Dynamic Programming', 's = "leetcode", wordDict = ["leet","code"]', 'true', 'O(N^2 * M)', 'O(N)', 'dp[i] = true if dp[i - len(w)] is true and s[i-len(w):i] == w.'],
  ['Longest Increasing Subsequence', 'Medium', '1D Dynamic Programming', 'nums = [10,9,2,5,3,7,101,18]', '4', 'O(N log N)', 'O(N)', 'Patience sorting with binary search.'],

  // 2D Dynamic Programming & Intervals
  ['Unique Paths', 'Medium', '2D Dynamic Programming', 'm = 3, n = 7', '28', 'O(M*N)', 'O(N)', 'dp[r][c] = dp[r+1][c] + dp[r][c+1].'],
  ['Longest Common Subsequence', 'Medium', '2D Dynamic Programming', 'text1 = "abcde", text2 = "ace"', '3', 'O(M*N)', 'O(M*N)', '2D grid match: if text1[i] == text2[j] then 1 + dp[i+1][j+1].'],
  ['Edit Distance', 'Hard', '2D Dynamic Programming', 'word1 = "horse", word2 = "ros"', '3', 'O(M*N)', 'O(M*N)', 'Operations: 1 + min(insert, delete, replace).'],
  ['Merge Intervals', 'Medium', 'Intervals', 'intervals = [[1,3],[2,6],[8,10]]', '[[1,6],[8,10]]', 'O(N log N)', 'O(N)', 'Sort by start time, merge overlapping bounds.'],
  ['Non-overlapping Intervals', 'Medium', 'Intervals', 'intervals = [[1,2],[2,3],[3,4],[1,3]]', '1', 'O(N log N)', 'O(1)', 'Greedy interval scheduling: sort by end time.'],
  ['Meeting Rooms II', 'Medium', 'Intervals', 'intervals = [[0,30],[5,10],[15,20]]', '2', 'O(N log N)', 'O(N)', 'Min-Heap of meeting end times or separate start/end arrays.']
];

console.log('Total entries:', titles.length);

const leetcode100 = titles.slice(0, 100).map((item, idx) => {
  const [title, difficulty, category, input, output, timeComp, spaceComp, hint] = item;
  const num = idx + 1;
  const id = `lc_${num}_${title.toLowerCase().replace(/[^a-z0-9]/g, '_')}`;

  return {
    id,
    number: num,
    title: `${num}. ${title}`,
    cleanTitle: title,
    difficulty,
    category,
    description: `### Problem ${num}: ${title}\n\nGiven the input specifications, implement the optimal algorithm achieving **${timeComp}** time complexity and **${spaceComp}** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** \`${input}\`\n- **Output:** \`${output}\``,
    examples: [
      {
        input,
        output,
        explanation: hint
      }
    ],
    starterCode: {
      python: `# ${num}. ${title} (${difficulty} - ${category})\n# Optimal: ${timeComp} time | ${spaceComp} space\n# Hint: ${hint}\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return ${output}\n\nif __name__ == "__main__":\n    print(solution("${input}"))\n`,
      c: `/**\n * ${num}. ${title} (${difficulty} - ${category})\n * Optimal: ${timeComp} time | ${spaceComp} space\n * Hint: ${hint}\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf("%s\\n", "${output}");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n`,
      cpp: `/**\n * ${num}. ${title} (${difficulty} - ${category})\n * Optimal: ${timeComp} time | ${spaceComp} space\n * Hint: ${hint}\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << "${output}" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n`,
      java: `/**\n * ${num}. ${title} (${difficulty} - ${category})\n * Optimal: ${timeComp} time | ${spaceComp} space\n * Hint: ${hint}\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println("${output}");\n    }\n}\n`,
      javascript: `/**\n * ${num}. ${title} (${difficulty} - ${category})\n * Optimal: ${timeComp} time | ${spaceComp} space\n * Hint: ${hint}\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return ${output.startsWith('[') || output === 'true' || output === 'false' || !isNaN(output) ? output : JSON.stringify(output)};\n}\n`
    },
    testCases: [
      { input: [input], expected: output, description: 'Primary assertion' }
    ],
    optimalComplexity: { time: timeComp, space: spaceComp },
    hints: [hint, `Target time complexity: ${timeComp}`, `Target space complexity: ${spaceComp}`]
  };
});

const outPath = path.resolve(__dirname, '../services/leetcodeData.js');
fs.writeFileSync(outPath, 'export const leetcode100Problems = ' + JSON.stringify(leetcode100, null, 2) + ';\n', 'utf-8');
console.log('Successfully written', leetcode100.length, 'problems to', outPath);
