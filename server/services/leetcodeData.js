export const leetcode100Problems = [
  {
    "id": "lc_1_two_sum",
    "number": 1,
    "title": "1. Two Sum",
    "cleanTitle": "Two Sum",
    "difficulty": "Easy",
    "category": "Arrays & Hashing",
    "description": "### Problem 1: Two Sum\n\nGiven the input specifications, implement the optimal algorithm achieving **O(N)** time complexity and **O(N)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `nums = [2,7,11,15], target = 9`\n- **Output:** `[0,1]`",
    "examples": [
      {
        "input": "nums = [2,7,11,15], target = 9",
        "output": "[0,1]",
        "explanation": "Use a Hash Map for O(1) complement lookup."
      }
    ],
    "starterCode": {
      "python": "# 1. Two Sum (Easy - Arrays & Hashing)\n# Optimal: O(N) time | O(N) space\n# Hint: Use a Hash Map for O(1) complement lookup.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return [0,1]\n\nif __name__ == \"__main__\":\n    print(solution(\"nums = [2,7,11,15], target = 9\"))\n",
      "c": "/**\n * 1. Two Sum (Easy - Arrays & Hashing)\n * Optimal: O(N) time | O(N) space\n * Hint: Use a Hash Map for O(1) complement lookup.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"[0,1]\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 1. Two Sum (Easy - Arrays & Hashing)\n * Optimal: O(N) time | O(N) space\n * Hint: Use a Hash Map for O(1) complement lookup.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"[0,1]\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 1. Two Sum (Easy - Arrays & Hashing)\n * Optimal: O(N) time | O(N) space\n * Hint: Use a Hash Map for O(1) complement lookup.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"[0,1]\");\n    }\n}\n",
      "javascript": "/**\n * 1. Two Sum (Easy - Arrays & Hashing)\n * Optimal: O(N) time | O(N) space\n * Hint: Use a Hash Map for O(1) complement lookup.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return [0,1];\n}\n"
    },
    "testCases": [
      {
        "input": [
          "nums = [2,7,11,15], target = 9"
        ],
        "expected": "[0,1]",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(N)",
      "space": "O(N)"
    },
    "hints": [
      "Use a Hash Map for O(1) complement lookup.",
      "Target time complexity: O(N)",
      "Target space complexity: O(N)"
    ]
  },
  {
    "id": "lc_2_contains_duplicate",
    "number": 2,
    "title": "2. Contains Duplicate",
    "cleanTitle": "Contains Duplicate",
    "difficulty": "Easy",
    "category": "Arrays & Hashing",
    "description": "### Problem 2: Contains Duplicate\n\nGiven the input specifications, implement the optimal algorithm achieving **O(N)** time complexity and **O(N)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `nums = [1,2,3,1]`\n- **Output:** `true`",
    "examples": [
      {
        "input": "nums = [1,2,3,1]",
        "output": "true",
        "explanation": "Use a HashSet to detect repeated values."
      }
    ],
    "starterCode": {
      "python": "# 2. Contains Duplicate (Easy - Arrays & Hashing)\n# Optimal: O(N) time | O(N) space\n# Hint: Use a HashSet to detect repeated values.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return true\n\nif __name__ == \"__main__\":\n    print(solution(\"nums = [1,2,3,1]\"))\n",
      "c": "/**\n * 2. Contains Duplicate (Easy - Arrays & Hashing)\n * Optimal: O(N) time | O(N) space\n * Hint: Use a HashSet to detect repeated values.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"true\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 2. Contains Duplicate (Easy - Arrays & Hashing)\n * Optimal: O(N) time | O(N) space\n * Hint: Use a HashSet to detect repeated values.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"true\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 2. Contains Duplicate (Easy - Arrays & Hashing)\n * Optimal: O(N) time | O(N) space\n * Hint: Use a HashSet to detect repeated values.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"true\");\n    }\n}\n",
      "javascript": "/**\n * 2. Contains Duplicate (Easy - Arrays & Hashing)\n * Optimal: O(N) time | O(N) space\n * Hint: Use a HashSet to detect repeated values.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return true;\n}\n"
    },
    "testCases": [
      {
        "input": [
          "nums = [1,2,3,1]"
        ],
        "expected": "true",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(N)",
      "space": "O(N)"
    },
    "hints": [
      "Use a HashSet to detect repeated values.",
      "Target time complexity: O(N)",
      "Target space complexity: O(N)"
    ]
  },
  {
    "id": "lc_3_valid_anagram",
    "number": 3,
    "title": "3. Valid Anagram",
    "cleanTitle": "Valid Anagram",
    "difficulty": "Easy",
    "category": "Arrays & Hashing",
    "description": "### Problem 3: Valid Anagram\n\nGiven the input specifications, implement the optimal algorithm achieving **O(N)** time complexity and **O(1)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `s = \"anagram\", t = \"nagaram\"`\n- **Output:** `true`",
    "examples": [
      {
        "input": "s = \"anagram\", t = \"nagaram\"",
        "output": "true",
        "explanation": "Count character frequencies across alphabet."
      }
    ],
    "starterCode": {
      "python": "# 3. Valid Anagram (Easy - Arrays & Hashing)\n# Optimal: O(N) time | O(1) space\n# Hint: Count character frequencies across alphabet.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return true\n\nif __name__ == \"__main__\":\n    print(solution(\"s = \"anagram\", t = \"nagaram\"\"))\n",
      "c": "/**\n * 3. Valid Anagram (Easy - Arrays & Hashing)\n * Optimal: O(N) time | O(1) space\n * Hint: Count character frequencies across alphabet.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"true\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 3. Valid Anagram (Easy - Arrays & Hashing)\n * Optimal: O(N) time | O(1) space\n * Hint: Count character frequencies across alphabet.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"true\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 3. Valid Anagram (Easy - Arrays & Hashing)\n * Optimal: O(N) time | O(1) space\n * Hint: Count character frequencies across alphabet.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"true\");\n    }\n}\n",
      "javascript": "/**\n * 3. Valid Anagram (Easy - Arrays & Hashing)\n * Optimal: O(N) time | O(1) space\n * Hint: Count character frequencies across alphabet.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return true;\n}\n"
    },
    "testCases": [
      {
        "input": [
          "s = \"anagram\", t = \"nagaram\""
        ],
        "expected": "true",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(N)",
      "space": "O(1)"
    },
    "hints": [
      "Count character frequencies across alphabet.",
      "Target time complexity: O(N)",
      "Target space complexity: O(1)"
    ]
  },
  {
    "id": "lc_4_group_anagrams",
    "number": 4,
    "title": "4. Group Anagrams",
    "cleanTitle": "Group Anagrams",
    "difficulty": "Medium",
    "category": "Arrays & Hashing",
    "description": "### Problem 4: Group Anagrams\n\nGiven the input specifications, implement the optimal algorithm achieving **O(N*K)** time complexity and **O(N*K)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `strs = [\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"]`\n- **Output:** `[[\"bat\"],[\"nat\",\"tan\"],[\"ate\",\"eat\",\"tea\"]]`",
    "examples": [
      {
        "input": "strs = [\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"]",
        "output": "[[\"bat\"],[\"nat\",\"tan\"],[\"ate\",\"eat\",\"tea\"]]",
        "explanation": "Use sorted string or 26-char frequency tuple as map key."
      }
    ],
    "starterCode": {
      "python": "# 4. Group Anagrams (Medium - Arrays & Hashing)\n# Optimal: O(N*K) time | O(N*K) space\n# Hint: Use sorted string or 26-char frequency tuple as map key.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return [[\"bat\"],[\"nat\",\"tan\"],[\"ate\",\"eat\",\"tea\"]]\n\nif __name__ == \"__main__\":\n    print(solution(\"strs = [\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"]\"))\n",
      "c": "/**\n * 4. Group Anagrams (Medium - Arrays & Hashing)\n * Optimal: O(N*K) time | O(N*K) space\n * Hint: Use sorted string or 26-char frequency tuple as map key.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"[[\"bat\"],[\"nat\",\"tan\"],[\"ate\",\"eat\",\"tea\"]]\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 4. Group Anagrams (Medium - Arrays & Hashing)\n * Optimal: O(N*K) time | O(N*K) space\n * Hint: Use sorted string or 26-char frequency tuple as map key.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"[[\"bat\"],[\"nat\",\"tan\"],[\"ate\",\"eat\",\"tea\"]]\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 4. Group Anagrams (Medium - Arrays & Hashing)\n * Optimal: O(N*K) time | O(N*K) space\n * Hint: Use sorted string or 26-char frequency tuple as map key.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"[[\"bat\"],[\"nat\",\"tan\"],[\"ate\",\"eat\",\"tea\"]]\");\n    }\n}\n",
      "javascript": "/**\n * 4. Group Anagrams (Medium - Arrays & Hashing)\n * Optimal: O(N*K) time | O(N*K) space\n * Hint: Use sorted string or 26-char frequency tuple as map key.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return [[\"bat\"],[\"nat\",\"tan\"],[\"ate\",\"eat\",\"tea\"]];\n}\n"
    },
    "testCases": [
      {
        "input": [
          "strs = [\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"]"
        ],
        "expected": "[[\"bat\"],[\"nat\",\"tan\"],[\"ate\",\"eat\",\"tea\"]]",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(N*K)",
      "space": "O(N*K)"
    },
    "hints": [
      "Use sorted string or 26-char frequency tuple as map key.",
      "Target time complexity: O(N*K)",
      "Target space complexity: O(N*K)"
    ]
  },
  {
    "id": "lc_5_top_k_frequent_elements",
    "number": 5,
    "title": "5. Top K Frequent Elements",
    "cleanTitle": "Top K Frequent Elements",
    "difficulty": "Medium",
    "category": "Heap & Priority Queue",
    "description": "### Problem 5: Top K Frequent Elements\n\nGiven the input specifications, implement the optimal algorithm achieving **O(N)** time complexity and **O(N)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `nums = [1,1,1,2,2,3], k = 2`\n- **Output:** `[1,2]`",
    "examples": [
      {
        "input": "nums = [1,1,1,2,2,3], k = 2",
        "output": "[1,2]",
        "explanation": "Bucket sort frequencies or use Min-Heap."
      }
    ],
    "starterCode": {
      "python": "# 5. Top K Frequent Elements (Medium - Heap & Priority Queue)\n# Optimal: O(N) time | O(N) space\n# Hint: Bucket sort frequencies or use Min-Heap.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return [1,2]\n\nif __name__ == \"__main__\":\n    print(solution(\"nums = [1,1,1,2,2,3], k = 2\"))\n",
      "c": "/**\n * 5. Top K Frequent Elements (Medium - Heap & Priority Queue)\n * Optimal: O(N) time | O(N) space\n * Hint: Bucket sort frequencies or use Min-Heap.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"[1,2]\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 5. Top K Frequent Elements (Medium - Heap & Priority Queue)\n * Optimal: O(N) time | O(N) space\n * Hint: Bucket sort frequencies or use Min-Heap.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"[1,2]\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 5. Top K Frequent Elements (Medium - Heap & Priority Queue)\n * Optimal: O(N) time | O(N) space\n * Hint: Bucket sort frequencies or use Min-Heap.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"[1,2]\");\n    }\n}\n",
      "javascript": "/**\n * 5. Top K Frequent Elements (Medium - Heap & Priority Queue)\n * Optimal: O(N) time | O(N) space\n * Hint: Bucket sort frequencies or use Min-Heap.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return [1,2];\n}\n"
    },
    "testCases": [
      {
        "input": [
          "nums = [1,1,1,2,2,3], k = 2"
        ],
        "expected": "[1,2]",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(N)",
      "space": "O(N)"
    },
    "hints": [
      "Bucket sort frequencies or use Min-Heap.",
      "Target time complexity: O(N)",
      "Target space complexity: O(N)"
    ]
  },
  {
    "id": "lc_6_product_of_array_except_self",
    "number": 6,
    "title": "6. Product of Array Except Self",
    "cleanTitle": "Product of Array Except Self",
    "difficulty": "Medium",
    "category": "Arrays & Hashing",
    "description": "### Problem 6: Product of Array Except Self\n\nGiven the input specifications, implement the optimal algorithm achieving **O(N)** time complexity and **O(1)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `nums = [1,2,3,4]`\n- **Output:** `[24,12,8,6]`",
    "examples": [
      {
        "input": "nums = [1,2,3,4]",
        "output": "[24,12,8,6]",
        "explanation": "Prefix and suffix product passes without division."
      }
    ],
    "starterCode": {
      "python": "# 6. Product of Array Except Self (Medium - Arrays & Hashing)\n# Optimal: O(N) time | O(1) space\n# Hint: Prefix and suffix product passes without division.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return [24,12,8,6]\n\nif __name__ == \"__main__\":\n    print(solution(\"nums = [1,2,3,4]\"))\n",
      "c": "/**\n * 6. Product of Array Except Self (Medium - Arrays & Hashing)\n * Optimal: O(N) time | O(1) space\n * Hint: Prefix and suffix product passes without division.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"[24,12,8,6]\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 6. Product of Array Except Self (Medium - Arrays & Hashing)\n * Optimal: O(N) time | O(1) space\n * Hint: Prefix and suffix product passes without division.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"[24,12,8,6]\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 6. Product of Array Except Self (Medium - Arrays & Hashing)\n * Optimal: O(N) time | O(1) space\n * Hint: Prefix and suffix product passes without division.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"[24,12,8,6]\");\n    }\n}\n",
      "javascript": "/**\n * 6. Product of Array Except Self (Medium - Arrays & Hashing)\n * Optimal: O(N) time | O(1) space\n * Hint: Prefix and suffix product passes without division.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return [24,12,8,6];\n}\n"
    },
    "testCases": [
      {
        "input": [
          "nums = [1,2,3,4]"
        ],
        "expected": "[24,12,8,6]",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(N)",
      "space": "O(1)"
    },
    "hints": [
      "Prefix and suffix product passes without division.",
      "Target time complexity: O(N)",
      "Target space complexity: O(1)"
    ]
  },
  {
    "id": "lc_7_encode_and_decode_strings",
    "number": 7,
    "title": "7. Encode and Decode Strings",
    "cleanTitle": "Encode and Decode Strings",
    "difficulty": "Medium",
    "category": "Arrays & Hashing",
    "description": "### Problem 7: Encode and Decode Strings\n\nGiven the input specifications, implement the optimal algorithm achieving **O(N)** time complexity and **O(1)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `strs = [\"lint\",\"code\",\"love\",\"you\"]`\n- **Output:** `strs`",
    "examples": [
      {
        "input": "strs = [\"lint\",\"code\",\"love\",\"you\"]",
        "output": "strs",
        "explanation": "Length-prefix framing (e.g. 4#lint4#code)."
      }
    ],
    "starterCode": {
      "python": "# 7. Encode and Decode Strings (Medium - Arrays & Hashing)\n# Optimal: O(N) time | O(1) space\n# Hint: Length-prefix framing (e.g. 4#lint4#code).\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return strs\n\nif __name__ == \"__main__\":\n    print(solution(\"strs = [\"lint\",\"code\",\"love\",\"you\"]\"))\n",
      "c": "/**\n * 7. Encode and Decode Strings (Medium - Arrays & Hashing)\n * Optimal: O(N) time | O(1) space\n * Hint: Length-prefix framing (e.g. 4#lint4#code).\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"strs\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 7. Encode and Decode Strings (Medium - Arrays & Hashing)\n * Optimal: O(N) time | O(1) space\n * Hint: Length-prefix framing (e.g. 4#lint4#code).\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"strs\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 7. Encode and Decode Strings (Medium - Arrays & Hashing)\n * Optimal: O(N) time | O(1) space\n * Hint: Length-prefix framing (e.g. 4#lint4#code).\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"strs\");\n    }\n}\n",
      "javascript": "/**\n * 7. Encode and Decode Strings (Medium - Arrays & Hashing)\n * Optimal: O(N) time | O(1) space\n * Hint: Length-prefix framing (e.g. 4#lint4#code).\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return \"strs\";\n}\n"
    },
    "testCases": [
      {
        "input": [
          "strs = [\"lint\",\"code\",\"love\",\"you\"]"
        ],
        "expected": "strs",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(N)",
      "space": "O(1)"
    },
    "hints": [
      "Length-prefix framing (e.g. 4#lint4#code).",
      "Target time complexity: O(N)",
      "Target space complexity: O(1)"
    ]
  },
  {
    "id": "lc_8_longest_consecutive_sequence",
    "number": 8,
    "title": "8. Longest Consecutive Sequence",
    "cleanTitle": "Longest Consecutive Sequence",
    "difficulty": "Medium",
    "category": "Arrays & Hashing",
    "description": "### Problem 8: Longest Consecutive Sequence\n\nGiven the input specifications, implement the optimal algorithm achieving **O(N)** time complexity and **O(N)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `nums = [100,4,200,1,3,2]`\n- **Output:** `4`",
    "examples": [
      {
        "input": "nums = [100,4,200,1,3,2]",
        "output": "4",
        "explanation": "Only check sequences where num-1 is not in set."
      }
    ],
    "starterCode": {
      "python": "# 8. Longest Consecutive Sequence (Medium - Arrays & Hashing)\n# Optimal: O(N) time | O(N) space\n# Hint: Only check sequences where num-1 is not in set.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return 4\n\nif __name__ == \"__main__\":\n    print(solution(\"nums = [100,4,200,1,3,2]\"))\n",
      "c": "/**\n * 8. Longest Consecutive Sequence (Medium - Arrays & Hashing)\n * Optimal: O(N) time | O(N) space\n * Hint: Only check sequences where num-1 is not in set.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"4\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 8. Longest Consecutive Sequence (Medium - Arrays & Hashing)\n * Optimal: O(N) time | O(N) space\n * Hint: Only check sequences where num-1 is not in set.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"4\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 8. Longest Consecutive Sequence (Medium - Arrays & Hashing)\n * Optimal: O(N) time | O(N) space\n * Hint: Only check sequences where num-1 is not in set.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"4\");\n    }\n}\n",
      "javascript": "/**\n * 8. Longest Consecutive Sequence (Medium - Arrays & Hashing)\n * Optimal: O(N) time | O(N) space\n * Hint: Only check sequences where num-1 is not in set.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return 4;\n}\n"
    },
    "testCases": [
      {
        "input": [
          "nums = [100,4,200,1,3,2]"
        ],
        "expected": "4",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(N)",
      "space": "O(N)"
    },
    "hints": [
      "Only check sequences where num-1 is not in set.",
      "Target time complexity: O(N)",
      "Target space complexity: O(N)"
    ]
  },
  {
    "id": "lc_9_valid_palindrome",
    "number": 9,
    "title": "9. Valid Palindrome",
    "cleanTitle": "Valid Palindrome",
    "difficulty": "Easy",
    "category": "Two Pointers",
    "description": "### Problem 9: Valid Palindrome\n\nGiven the input specifications, implement the optimal algorithm achieving **O(N)** time complexity and **O(1)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `s = \"A man, a plan, a canal: Panama\"`\n- **Output:** `true`",
    "examples": [
      {
        "input": "s = \"A man, a plan, a canal: Panama\"",
        "output": "true",
        "explanation": "Compare left and right alphanumeric characters."
      }
    ],
    "starterCode": {
      "python": "# 9. Valid Palindrome (Easy - Two Pointers)\n# Optimal: O(N) time | O(1) space\n# Hint: Compare left and right alphanumeric characters.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return true\n\nif __name__ == \"__main__\":\n    print(solution(\"s = \"A man, a plan, a canal: Panama\"\"))\n",
      "c": "/**\n * 9. Valid Palindrome (Easy - Two Pointers)\n * Optimal: O(N) time | O(1) space\n * Hint: Compare left and right alphanumeric characters.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"true\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 9. Valid Palindrome (Easy - Two Pointers)\n * Optimal: O(N) time | O(1) space\n * Hint: Compare left and right alphanumeric characters.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"true\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 9. Valid Palindrome (Easy - Two Pointers)\n * Optimal: O(N) time | O(1) space\n * Hint: Compare left and right alphanumeric characters.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"true\");\n    }\n}\n",
      "javascript": "/**\n * 9. Valid Palindrome (Easy - Two Pointers)\n * Optimal: O(N) time | O(1) space\n * Hint: Compare left and right alphanumeric characters.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return true;\n}\n"
    },
    "testCases": [
      {
        "input": [
          "s = \"A man, a plan, a canal: Panama\""
        ],
        "expected": "true",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(N)",
      "space": "O(1)"
    },
    "hints": [
      "Compare left and right alphanumeric characters.",
      "Target time complexity: O(N)",
      "Target space complexity: O(1)"
    ]
  },
  {
    "id": "lc_10_3sum",
    "number": 10,
    "title": "10. 3Sum",
    "cleanTitle": "3Sum",
    "difficulty": "Medium",
    "category": "Two Pointers",
    "description": "### Problem 10: 3Sum\n\nGiven the input specifications, implement the optimal algorithm achieving **O(N^2)** time complexity and **O(1)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `nums = [-1,0,1,2,-1,-4]`\n- **Output:** `[[-1,-1,2],[-1,0,1]]`",
    "examples": [
      {
        "input": "nums = [-1,0,1,2,-1,-4]",
        "output": "[[-1,-1,2],[-1,0,1]]",
        "explanation": "Sort array, fix one element, use Two Pointers for remainder."
      }
    ],
    "starterCode": {
      "python": "# 10. 3Sum (Medium - Two Pointers)\n# Optimal: O(N^2) time | O(1) space\n# Hint: Sort array, fix one element, use Two Pointers for remainder.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return [[-1,-1,2],[-1,0,1]]\n\nif __name__ == \"__main__\":\n    print(solution(\"nums = [-1,0,1,2,-1,-4]\"))\n",
      "c": "/**\n * 10. 3Sum (Medium - Two Pointers)\n * Optimal: O(N^2) time | O(1) space\n * Hint: Sort array, fix one element, use Two Pointers for remainder.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"[[-1,-1,2],[-1,0,1]]\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 10. 3Sum (Medium - Two Pointers)\n * Optimal: O(N^2) time | O(1) space\n * Hint: Sort array, fix one element, use Two Pointers for remainder.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"[[-1,-1,2],[-1,0,1]]\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 10. 3Sum (Medium - Two Pointers)\n * Optimal: O(N^2) time | O(1) space\n * Hint: Sort array, fix one element, use Two Pointers for remainder.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"[[-1,-1,2],[-1,0,1]]\");\n    }\n}\n",
      "javascript": "/**\n * 10. 3Sum (Medium - Two Pointers)\n * Optimal: O(N^2) time | O(1) space\n * Hint: Sort array, fix one element, use Two Pointers for remainder.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return [[-1,-1,2],[-1,0,1]];\n}\n"
    },
    "testCases": [
      {
        "input": [
          "nums = [-1,0,1,2,-1,-4]"
        ],
        "expected": "[[-1,-1,2],[-1,0,1]]",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(N^2)",
      "space": "O(1)"
    },
    "hints": [
      "Sort array, fix one element, use Two Pointers for remainder.",
      "Target time complexity: O(N^2)",
      "Target space complexity: O(1)"
    ]
  },
  {
    "id": "lc_11_container_with_most_water",
    "number": 11,
    "title": "11. Container With Most Water",
    "cleanTitle": "Container With Most Water",
    "difficulty": "Medium",
    "category": "Two Pointers",
    "description": "### Problem 11: Container With Most Water\n\nGiven the input specifications, implement the optimal algorithm achieving **O(N)** time complexity and **O(1)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `height = [1,8,6,2,5,4,8,3,7]`\n- **Output:** `49`",
    "examples": [
      {
        "input": "height = [1,8,6,2,5,4,8,3,7]",
        "output": "49",
        "explanation": "Two pointers from ends, always move shorter boundary inward."
      }
    ],
    "starterCode": {
      "python": "# 11. Container With Most Water (Medium - Two Pointers)\n# Optimal: O(N) time | O(1) space\n# Hint: Two pointers from ends, always move shorter boundary inward.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return 49\n\nif __name__ == \"__main__\":\n    print(solution(\"height = [1,8,6,2,5,4,8,3,7]\"))\n",
      "c": "/**\n * 11. Container With Most Water (Medium - Two Pointers)\n * Optimal: O(N) time | O(1) space\n * Hint: Two pointers from ends, always move shorter boundary inward.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"49\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 11. Container With Most Water (Medium - Two Pointers)\n * Optimal: O(N) time | O(1) space\n * Hint: Two pointers from ends, always move shorter boundary inward.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"49\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 11. Container With Most Water (Medium - Two Pointers)\n * Optimal: O(N) time | O(1) space\n * Hint: Two pointers from ends, always move shorter boundary inward.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"49\");\n    }\n}\n",
      "javascript": "/**\n * 11. Container With Most Water (Medium - Two Pointers)\n * Optimal: O(N) time | O(1) space\n * Hint: Two pointers from ends, always move shorter boundary inward.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return 49;\n}\n"
    },
    "testCases": [
      {
        "input": [
          "height = [1,8,6,2,5,4,8,3,7]"
        ],
        "expected": "49",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(N)",
      "space": "O(1)"
    },
    "hints": [
      "Two pointers from ends, always move shorter boundary inward.",
      "Target time complexity: O(N)",
      "Target space complexity: O(1)"
    ]
  },
  {
    "id": "lc_12_trapping_rain_water",
    "number": 12,
    "title": "12. Trapping Rain Water",
    "cleanTitle": "Trapping Rain Water",
    "difficulty": "Hard",
    "category": "Two Pointers",
    "description": "### Problem 12: Trapping Rain Water\n\nGiven the input specifications, implement the optimal algorithm achieving **O(N)** time complexity and **O(1)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `height = [0,1,0,2,1,0,1,3,2,1,2,1]`\n- **Output:** `6`",
    "examples": [
      {
        "input": "height = [0,1,0,2,1,0,1,3,2,1,2,1]",
        "output": "6",
        "explanation": "Track leftMax and rightMax with two pointers."
      }
    ],
    "starterCode": {
      "python": "# 12. Trapping Rain Water (Hard - Two Pointers)\n# Optimal: O(N) time | O(1) space\n# Hint: Track leftMax and rightMax with two pointers.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return 6\n\nif __name__ == \"__main__\":\n    print(solution(\"height = [0,1,0,2,1,0,1,3,2,1,2,1]\"))\n",
      "c": "/**\n * 12. Trapping Rain Water (Hard - Two Pointers)\n * Optimal: O(N) time | O(1) space\n * Hint: Track leftMax and rightMax with two pointers.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"6\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 12. Trapping Rain Water (Hard - Two Pointers)\n * Optimal: O(N) time | O(1) space\n * Hint: Track leftMax and rightMax with two pointers.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"6\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 12. Trapping Rain Water (Hard - Two Pointers)\n * Optimal: O(N) time | O(1) space\n * Hint: Track leftMax and rightMax with two pointers.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"6\");\n    }\n}\n",
      "javascript": "/**\n * 12. Trapping Rain Water (Hard - Two Pointers)\n * Optimal: O(N) time | O(1) space\n * Hint: Track leftMax and rightMax with two pointers.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return 6;\n}\n"
    },
    "testCases": [
      {
        "input": [
          "height = [0,1,0,2,1,0,1,3,2,1,2,1]"
        ],
        "expected": "6",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(N)",
      "space": "O(1)"
    },
    "hints": [
      "Track leftMax and rightMax with two pointers.",
      "Target time complexity: O(N)",
      "Target space complexity: O(1)"
    ]
  },
  {
    "id": "lc_13_two_sum_ii___input_array_is_sorted",
    "number": 13,
    "title": "13. Two Sum II - Input Array Is Sorted",
    "cleanTitle": "Two Sum II - Input Array Is Sorted",
    "difficulty": "Medium",
    "category": "Two Pointers",
    "description": "### Problem 13: Two Sum II - Input Array Is Sorted\n\nGiven the input specifications, implement the optimal algorithm achieving **O(N)** time complexity and **O(1)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `numbers = [2,7,11,15], target = 9`\n- **Output:** `[1,2]`",
    "examples": [
      {
        "input": "numbers = [2,7,11,15], target = 9",
        "output": "[1,2]",
        "explanation": "Two pointers from left and right boundaries."
      }
    ],
    "starterCode": {
      "python": "# 13. Two Sum II - Input Array Is Sorted (Medium - Two Pointers)\n# Optimal: O(N) time | O(1) space\n# Hint: Two pointers from left and right boundaries.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return [1,2]\n\nif __name__ == \"__main__\":\n    print(solution(\"numbers = [2,7,11,15], target = 9\"))\n",
      "c": "/**\n * 13. Two Sum II - Input Array Is Sorted (Medium - Two Pointers)\n * Optimal: O(N) time | O(1) space\n * Hint: Two pointers from left and right boundaries.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"[1,2]\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 13. Two Sum II - Input Array Is Sorted (Medium - Two Pointers)\n * Optimal: O(N) time | O(1) space\n * Hint: Two pointers from left and right boundaries.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"[1,2]\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 13. Two Sum II - Input Array Is Sorted (Medium - Two Pointers)\n * Optimal: O(N) time | O(1) space\n * Hint: Two pointers from left and right boundaries.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"[1,2]\");\n    }\n}\n",
      "javascript": "/**\n * 13. Two Sum II - Input Array Is Sorted (Medium - Two Pointers)\n * Optimal: O(N) time | O(1) space\n * Hint: Two pointers from left and right boundaries.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return [1,2];\n}\n"
    },
    "testCases": [
      {
        "input": [
          "numbers = [2,7,11,15], target = 9"
        ],
        "expected": "[1,2]",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(N)",
      "space": "O(1)"
    },
    "hints": [
      "Two pointers from left and right boundaries.",
      "Target time complexity: O(N)",
      "Target space complexity: O(1)"
    ]
  },
  {
    "id": "lc_14_best_time_to_buy_and_sell_stock",
    "number": 14,
    "title": "14. Best Time to Buy and Sell Stock",
    "cleanTitle": "Best Time to Buy and Sell Stock",
    "difficulty": "Easy",
    "category": "Sliding Window",
    "description": "### Problem 14: Best Time to Buy and Sell Stock\n\nGiven the input specifications, implement the optimal algorithm achieving **O(N)** time complexity and **O(1)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `prices = [7,1,5,3,6,4]`\n- **Output:** `5`",
    "examples": [
      {
        "input": "prices = [7,1,5,3,6,4]",
        "output": "5",
        "explanation": "Track minimum price and maximum profit seen so far."
      }
    ],
    "starterCode": {
      "python": "# 14. Best Time to Buy and Sell Stock (Easy - Sliding Window)\n# Optimal: O(N) time | O(1) space\n# Hint: Track minimum price and maximum profit seen so far.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return 5\n\nif __name__ == \"__main__\":\n    print(solution(\"prices = [7,1,5,3,6,4]\"))\n",
      "c": "/**\n * 14. Best Time to Buy and Sell Stock (Easy - Sliding Window)\n * Optimal: O(N) time | O(1) space\n * Hint: Track minimum price and maximum profit seen so far.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"5\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 14. Best Time to Buy and Sell Stock (Easy - Sliding Window)\n * Optimal: O(N) time | O(1) space\n * Hint: Track minimum price and maximum profit seen so far.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"5\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 14. Best Time to Buy and Sell Stock (Easy - Sliding Window)\n * Optimal: O(N) time | O(1) space\n * Hint: Track minimum price and maximum profit seen so far.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"5\");\n    }\n}\n",
      "javascript": "/**\n * 14. Best Time to Buy and Sell Stock (Easy - Sliding Window)\n * Optimal: O(N) time | O(1) space\n * Hint: Track minimum price and maximum profit seen so far.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return 5;\n}\n"
    },
    "testCases": [
      {
        "input": [
          "prices = [7,1,5,3,6,4]"
        ],
        "expected": "5",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(N)",
      "space": "O(1)"
    },
    "hints": [
      "Track minimum price and maximum profit seen so far.",
      "Target time complexity: O(N)",
      "Target space complexity: O(1)"
    ]
  },
  {
    "id": "lc_15_longest_substring_without_repeating_characters",
    "number": 15,
    "title": "15. Longest Substring Without Repeating Characters",
    "cleanTitle": "Longest Substring Without Repeating Characters",
    "difficulty": "Medium",
    "category": "Sliding Window",
    "description": "### Problem 15: Longest Substring Without Repeating Characters\n\nGiven the input specifications, implement the optimal algorithm achieving **O(N)** time complexity and **O(min(N,M))** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `s = \"abcabcbb\"`\n- **Output:** `3`",
    "examples": [
      {
        "input": "s = \"abcabcbb\"",
        "output": "3",
        "explanation": "Maintain sliding window with a Set."
      }
    ],
    "starterCode": {
      "python": "# 15. Longest Substring Without Repeating Characters (Medium - Sliding Window)\n# Optimal: O(N) time | O(min(N,M)) space\n# Hint: Maintain sliding window with a Set.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return 3\n\nif __name__ == \"__main__\":\n    print(solution(\"s = \"abcabcbb\"\"))\n",
      "c": "/**\n * 15. Longest Substring Without Repeating Characters (Medium - Sliding Window)\n * Optimal: O(N) time | O(min(N,M)) space\n * Hint: Maintain sliding window with a Set.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"3\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 15. Longest Substring Without Repeating Characters (Medium - Sliding Window)\n * Optimal: O(N) time | O(min(N,M)) space\n * Hint: Maintain sliding window with a Set.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"3\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 15. Longest Substring Without Repeating Characters (Medium - Sliding Window)\n * Optimal: O(N) time | O(min(N,M)) space\n * Hint: Maintain sliding window with a Set.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"3\");\n    }\n}\n",
      "javascript": "/**\n * 15. Longest Substring Without Repeating Characters (Medium - Sliding Window)\n * Optimal: O(N) time | O(min(N,M)) space\n * Hint: Maintain sliding window with a Set.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return 3;\n}\n"
    },
    "testCases": [
      {
        "input": [
          "s = \"abcabcbb\""
        ],
        "expected": "3",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(N)",
      "space": "O(min(N,M))"
    },
    "hints": [
      "Maintain sliding window with a Set.",
      "Target time complexity: O(N)",
      "Target space complexity: O(min(N,M))"
    ]
  },
  {
    "id": "lc_16_longest_repeating_character_replacement",
    "number": 16,
    "title": "16. Longest Repeating Character Replacement",
    "cleanTitle": "Longest Repeating Character Replacement",
    "difficulty": "Medium",
    "category": "Sliding Window",
    "description": "### Problem 16: Longest Repeating Character Replacement\n\nGiven the input specifications, implement the optimal algorithm achieving **O(N)** time complexity and **O(1)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `s = \"ABAB\", k = 2`\n- **Output:** `4`",
    "examples": [
      {
        "input": "s = \"ABAB\", k = 2",
        "output": "4",
        "explanation": "Track max frequency in window: (len - maxFreq) <= k."
      }
    ],
    "starterCode": {
      "python": "# 16. Longest Repeating Character Replacement (Medium - Sliding Window)\n# Optimal: O(N) time | O(1) space\n# Hint: Track max frequency in window: (len - maxFreq) <= k.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return 4\n\nif __name__ == \"__main__\":\n    print(solution(\"s = \"ABAB\", k = 2\"))\n",
      "c": "/**\n * 16. Longest Repeating Character Replacement (Medium - Sliding Window)\n * Optimal: O(N) time | O(1) space\n * Hint: Track max frequency in window: (len - maxFreq) <= k.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"4\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 16. Longest Repeating Character Replacement (Medium - Sliding Window)\n * Optimal: O(N) time | O(1) space\n * Hint: Track max frequency in window: (len - maxFreq) <= k.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"4\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 16. Longest Repeating Character Replacement (Medium - Sliding Window)\n * Optimal: O(N) time | O(1) space\n * Hint: Track max frequency in window: (len - maxFreq) <= k.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"4\");\n    }\n}\n",
      "javascript": "/**\n * 16. Longest Repeating Character Replacement (Medium - Sliding Window)\n * Optimal: O(N) time | O(1) space\n * Hint: Track max frequency in window: (len - maxFreq) <= k.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return 4;\n}\n"
    },
    "testCases": [
      {
        "input": [
          "s = \"ABAB\", k = 2"
        ],
        "expected": "4",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(N)",
      "space": "O(1)"
    },
    "hints": [
      "Track max frequency in window: (len - maxFreq) <= k.",
      "Target time complexity: O(N)",
      "Target space complexity: O(1)"
    ]
  },
  {
    "id": "lc_17_permutation_in_string",
    "number": 17,
    "title": "17. Permutation in String",
    "cleanTitle": "Permutation in String",
    "difficulty": "Medium",
    "category": "Sliding Window",
    "description": "### Problem 17: Permutation in String\n\nGiven the input specifications, implement the optimal algorithm achieving **O(N)** time complexity and **O(1)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `s1 = \"ab\", s2 = \"eidbaooo\"`\n- **Output:** `true`",
    "examples": [
      {
        "input": "s1 = \"ab\", s2 = \"eidbaooo\"",
        "output": "true",
        "explanation": "Fixed size sliding window comparing character count maps."
      }
    ],
    "starterCode": {
      "python": "# 17. Permutation in String (Medium - Sliding Window)\n# Optimal: O(N) time | O(1) space\n# Hint: Fixed size sliding window comparing character count maps.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return true\n\nif __name__ == \"__main__\":\n    print(solution(\"s1 = \"ab\", s2 = \"eidbaooo\"\"))\n",
      "c": "/**\n * 17. Permutation in String (Medium - Sliding Window)\n * Optimal: O(N) time | O(1) space\n * Hint: Fixed size sliding window comparing character count maps.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"true\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 17. Permutation in String (Medium - Sliding Window)\n * Optimal: O(N) time | O(1) space\n * Hint: Fixed size sliding window comparing character count maps.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"true\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 17. Permutation in String (Medium - Sliding Window)\n * Optimal: O(N) time | O(1) space\n * Hint: Fixed size sliding window comparing character count maps.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"true\");\n    }\n}\n",
      "javascript": "/**\n * 17. Permutation in String (Medium - Sliding Window)\n * Optimal: O(N) time | O(1) space\n * Hint: Fixed size sliding window comparing character count maps.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return true;\n}\n"
    },
    "testCases": [
      {
        "input": [
          "s1 = \"ab\", s2 = \"eidbaooo\""
        ],
        "expected": "true",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(N)",
      "space": "O(1)"
    },
    "hints": [
      "Fixed size sliding window comparing character count maps.",
      "Target time complexity: O(N)",
      "Target space complexity: O(1)"
    ]
  },
  {
    "id": "lc_18_minimum_window_substring",
    "number": 18,
    "title": "18. Minimum Window Substring",
    "cleanTitle": "Minimum Window Substring",
    "difficulty": "Hard",
    "category": "Sliding Window",
    "description": "### Problem 18: Minimum Window Substring\n\nGiven the input specifications, implement the optimal algorithm achieving **O(N)** time complexity and **O(M)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `s = \"ADOBECODEBANC\", t = \"ABC\"`\n- **Output:** `\"BANC\"`",
    "examples": [
      {
        "input": "s = \"ADOBECODEBANC\", t = \"ABC\"",
        "output": "\"BANC\"",
        "explanation": "Sliding window tracking matched character counts."
      }
    ],
    "starterCode": {
      "python": "# 18. Minimum Window Substring (Hard - Sliding Window)\n# Optimal: O(N) time | O(M) space\n# Hint: Sliding window tracking matched character counts.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return \"BANC\"\n\nif __name__ == \"__main__\":\n    print(solution(\"s = \"ADOBECODEBANC\", t = \"ABC\"\"))\n",
      "c": "/**\n * 18. Minimum Window Substring (Hard - Sliding Window)\n * Optimal: O(N) time | O(M) space\n * Hint: Sliding window tracking matched character counts.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"\"BANC\"\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 18. Minimum Window Substring (Hard - Sliding Window)\n * Optimal: O(N) time | O(M) space\n * Hint: Sliding window tracking matched character counts.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"\"BANC\"\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 18. Minimum Window Substring (Hard - Sliding Window)\n * Optimal: O(N) time | O(M) space\n * Hint: Sliding window tracking matched character counts.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"\"BANC\"\");\n    }\n}\n",
      "javascript": "/**\n * 18. Minimum Window Substring (Hard - Sliding Window)\n * Optimal: O(N) time | O(M) space\n * Hint: Sliding window tracking matched character counts.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return \"\\\"BANC\\\"\";\n}\n"
    },
    "testCases": [
      {
        "input": [
          "s = \"ADOBECODEBANC\", t = \"ABC\""
        ],
        "expected": "\"BANC\"",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(N)",
      "space": "O(M)"
    },
    "hints": [
      "Sliding window tracking matched character counts.",
      "Target time complexity: O(N)",
      "Target space complexity: O(M)"
    ]
  },
  {
    "id": "lc_19_sliding_window_maximum",
    "number": 19,
    "title": "19. Sliding Window Maximum",
    "cleanTitle": "Sliding Window Maximum",
    "difficulty": "Hard",
    "category": "Sliding Window",
    "description": "### Problem 19: Sliding Window Maximum\n\nGiven the input specifications, implement the optimal algorithm achieving **O(N)** time complexity and **O(K)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `nums = [1,3,-1,-3,5,3,6,7], k = 3`\n- **Output:** `[3,3,5,5,6,7]`",
    "examples": [
      {
        "input": "nums = [1,3,-1,-3,5,3,6,7], k = 3",
        "output": "[3,3,5,5,6,7]",
        "explanation": "Monotonic decreasing Deque storing indices."
      }
    ],
    "starterCode": {
      "python": "# 19. Sliding Window Maximum (Hard - Sliding Window)\n# Optimal: O(N) time | O(K) space\n# Hint: Monotonic decreasing Deque storing indices.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return [3,3,5,5,6,7]\n\nif __name__ == \"__main__\":\n    print(solution(\"nums = [1,3,-1,-3,5,3,6,7], k = 3\"))\n",
      "c": "/**\n * 19. Sliding Window Maximum (Hard - Sliding Window)\n * Optimal: O(N) time | O(K) space\n * Hint: Monotonic decreasing Deque storing indices.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"[3,3,5,5,6,7]\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 19. Sliding Window Maximum (Hard - Sliding Window)\n * Optimal: O(N) time | O(K) space\n * Hint: Monotonic decreasing Deque storing indices.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"[3,3,5,5,6,7]\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 19. Sliding Window Maximum (Hard - Sliding Window)\n * Optimal: O(N) time | O(K) space\n * Hint: Monotonic decreasing Deque storing indices.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"[3,3,5,5,6,7]\");\n    }\n}\n",
      "javascript": "/**\n * 19. Sliding Window Maximum (Hard - Sliding Window)\n * Optimal: O(N) time | O(K) space\n * Hint: Monotonic decreasing Deque storing indices.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return [3,3,5,5,6,7];\n}\n"
    },
    "testCases": [
      {
        "input": [
          "nums = [1,3,-1,-3,5,3,6,7], k = 3"
        ],
        "expected": "[3,3,5,5,6,7]",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(N)",
      "space": "O(K)"
    },
    "hints": [
      "Monotonic decreasing Deque storing indices.",
      "Target time complexity: O(N)",
      "Target space complexity: O(K)"
    ]
  },
  {
    "id": "lc_20_valid_parentheses",
    "number": 20,
    "title": "20. Valid Parentheses",
    "cleanTitle": "Valid Parentheses",
    "difficulty": "Easy",
    "category": "Stack",
    "description": "### Problem 20: Valid Parentheses\n\nGiven the input specifications, implement the optimal algorithm achieving **O(N)** time complexity and **O(N)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `s = \"()[]{}\"`\n- **Output:** `true`",
    "examples": [
      {
        "input": "s = \"()[]{}\"",
        "output": "true",
        "explanation": "Push opening brackets to stack and match on closing."
      }
    ],
    "starterCode": {
      "python": "# 20. Valid Parentheses (Easy - Stack)\n# Optimal: O(N) time | O(N) space\n# Hint: Push opening brackets to stack and match on closing.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return true\n\nif __name__ == \"__main__\":\n    print(solution(\"s = \"()[]{}\"\"))\n",
      "c": "/**\n * 20. Valid Parentheses (Easy - Stack)\n * Optimal: O(N) time | O(N) space\n * Hint: Push opening brackets to stack and match on closing.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"true\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 20. Valid Parentheses (Easy - Stack)\n * Optimal: O(N) time | O(N) space\n * Hint: Push opening brackets to stack and match on closing.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"true\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 20. Valid Parentheses (Easy - Stack)\n * Optimal: O(N) time | O(N) space\n * Hint: Push opening brackets to stack and match on closing.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"true\");\n    }\n}\n",
      "javascript": "/**\n * 20. Valid Parentheses (Easy - Stack)\n * Optimal: O(N) time | O(N) space\n * Hint: Push opening brackets to stack and match on closing.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return true;\n}\n"
    },
    "testCases": [
      {
        "input": [
          "s = \"()[]{}\""
        ],
        "expected": "true",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(N)",
      "space": "O(N)"
    },
    "hints": [
      "Push opening brackets to stack and match on closing.",
      "Target time complexity: O(N)",
      "Target space complexity: O(N)"
    ]
  },
  {
    "id": "lc_21_min_stack",
    "number": 21,
    "title": "21. Min Stack",
    "cleanTitle": "Min Stack",
    "difficulty": "Medium",
    "category": "Stack",
    "description": "### Problem 21: Min Stack\n\nGiven the input specifications, implement the optimal algorithm achieving **O(1)** time complexity and **O(N)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `push, pop, top, getMin`\n- **Output:** `O(1) all ops`",
    "examples": [
      {
        "input": "push, pop, top, getMin",
        "output": "O(1) all ops",
        "explanation": "Store (val, currentMin) pair on stack."
      }
    ],
    "starterCode": {
      "python": "# 21. Min Stack (Medium - Stack)\n# Optimal: O(1) time | O(N) space\n# Hint: Store (val, currentMin) pair on stack.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return O(1) all ops\n\nif __name__ == \"__main__\":\n    print(solution(\"push, pop, top, getMin\"))\n",
      "c": "/**\n * 21. Min Stack (Medium - Stack)\n * Optimal: O(1) time | O(N) space\n * Hint: Store (val, currentMin) pair on stack.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"O(1) all ops\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 21. Min Stack (Medium - Stack)\n * Optimal: O(1) time | O(N) space\n * Hint: Store (val, currentMin) pair on stack.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"O(1) all ops\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 21. Min Stack (Medium - Stack)\n * Optimal: O(1) time | O(N) space\n * Hint: Store (val, currentMin) pair on stack.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"O(1) all ops\");\n    }\n}\n",
      "javascript": "/**\n * 21. Min Stack (Medium - Stack)\n * Optimal: O(1) time | O(N) space\n * Hint: Store (val, currentMin) pair on stack.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return \"O(1) all ops\";\n}\n"
    },
    "testCases": [
      {
        "input": [
          "push, pop, top, getMin"
        ],
        "expected": "O(1) all ops",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(1)",
      "space": "O(N)"
    },
    "hints": [
      "Store (val, currentMin) pair on stack.",
      "Target time complexity: O(1)",
      "Target space complexity: O(N)"
    ]
  },
  {
    "id": "lc_22_evaluate_reverse_polish_notation",
    "number": 22,
    "title": "22. Evaluate Reverse Polish Notation",
    "cleanTitle": "Evaluate Reverse Polish Notation",
    "difficulty": "Medium",
    "category": "Stack",
    "description": "### Problem 22: Evaluate Reverse Polish Notation\n\nGiven the input specifications, implement the optimal algorithm achieving **O(N)** time complexity and **O(N)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `tokens = [\"2\",\"1\",\"+\",\"3\",\"*\"]`\n- **Output:** `9`",
    "examples": [
      {
        "input": "tokens = [\"2\",\"1\",\"+\",\"3\",\"*\"]",
        "output": "9",
        "explanation": "Push operands to stack, pop two on operator."
      }
    ],
    "starterCode": {
      "python": "# 22. Evaluate Reverse Polish Notation (Medium - Stack)\n# Optimal: O(N) time | O(N) space\n# Hint: Push operands to stack, pop two on operator.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return 9\n\nif __name__ == \"__main__\":\n    print(solution(\"tokens = [\"2\",\"1\",\"+\",\"3\",\"*\"]\"))\n",
      "c": "/**\n * 22. Evaluate Reverse Polish Notation (Medium - Stack)\n * Optimal: O(N) time | O(N) space\n * Hint: Push operands to stack, pop two on operator.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"9\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 22. Evaluate Reverse Polish Notation (Medium - Stack)\n * Optimal: O(N) time | O(N) space\n * Hint: Push operands to stack, pop two on operator.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"9\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 22. Evaluate Reverse Polish Notation (Medium - Stack)\n * Optimal: O(N) time | O(N) space\n * Hint: Push operands to stack, pop two on operator.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"9\");\n    }\n}\n",
      "javascript": "/**\n * 22. Evaluate Reverse Polish Notation (Medium - Stack)\n * Optimal: O(N) time | O(N) space\n * Hint: Push operands to stack, pop two on operator.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return 9;\n}\n"
    },
    "testCases": [
      {
        "input": [
          "tokens = [\"2\",\"1\",\"+\",\"3\",\"*\"]"
        ],
        "expected": "9",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(N)",
      "space": "O(N)"
    },
    "hints": [
      "Push operands to stack, pop two on operator.",
      "Target time complexity: O(N)",
      "Target space complexity: O(N)"
    ]
  },
  {
    "id": "lc_23_generate_parentheses",
    "number": 23,
    "title": "23. Generate Parentheses",
    "cleanTitle": "Generate Parentheses",
    "difficulty": "Medium",
    "category": "Stack",
    "description": "### Problem 23: Generate Parentheses\n\nGiven the input specifications, implement the optimal algorithm achieving **O(4^N / sqrt(N))** time complexity and **O(N)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `n = 3`\n- **Output:** `[\"((()))\",\"(()())\"]`",
    "examples": [
      {
        "input": "n = 3",
        "output": "[\"((()))\",\"(()())\"]",
        "explanation": "Backtrack open < n and close < open."
      }
    ],
    "starterCode": {
      "python": "# 23. Generate Parentheses (Medium - Stack)\n# Optimal: O(4^N / sqrt(N)) time | O(N) space\n# Hint: Backtrack open < n and close < open.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return [\"((()))\",\"(()())\"]\n\nif __name__ == \"__main__\":\n    print(solution(\"n = 3\"))\n",
      "c": "/**\n * 23. Generate Parentheses (Medium - Stack)\n * Optimal: O(4^N / sqrt(N)) time | O(N) space\n * Hint: Backtrack open < n and close < open.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"[\"((()))\",\"(()())\"]\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 23. Generate Parentheses (Medium - Stack)\n * Optimal: O(4^N / sqrt(N)) time | O(N) space\n * Hint: Backtrack open < n and close < open.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"[\"((()))\",\"(()())\"]\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 23. Generate Parentheses (Medium - Stack)\n * Optimal: O(4^N / sqrt(N)) time | O(N) space\n * Hint: Backtrack open < n and close < open.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"[\"((()))\",\"(()())\"]\");\n    }\n}\n",
      "javascript": "/**\n * 23. Generate Parentheses (Medium - Stack)\n * Optimal: O(4^N / sqrt(N)) time | O(N) space\n * Hint: Backtrack open < n and close < open.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return [\"((()))\",\"(()())\"];\n}\n"
    },
    "testCases": [
      {
        "input": [
          "n = 3"
        ],
        "expected": "[\"((()))\",\"(()())\"]",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(4^N / sqrt(N))",
      "space": "O(N)"
    },
    "hints": [
      "Backtrack open < n and close < open.",
      "Target time complexity: O(4^N / sqrt(N))",
      "Target space complexity: O(N)"
    ]
  },
  {
    "id": "lc_24_daily_temperatures",
    "number": 24,
    "title": "24. Daily Temperatures",
    "cleanTitle": "Daily Temperatures",
    "difficulty": "Medium",
    "category": "Stack",
    "description": "### Problem 24: Daily Temperatures\n\nGiven the input specifications, implement the optimal algorithm achieving **O(N)** time complexity and **O(N)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `temperatures = [73,74,75,71,69,72,76,73]`\n- **Output:** `[1,1,4,2,1,1,0,0]`",
    "examples": [
      {
        "input": "temperatures = [73,74,75,71,69,72,76,73]",
        "output": "[1,1,4,2,1,1,0,0]",
        "explanation": "Monotonic decreasing stack of indices."
      }
    ],
    "starterCode": {
      "python": "# 24. Daily Temperatures (Medium - Stack)\n# Optimal: O(N) time | O(N) space\n# Hint: Monotonic decreasing stack of indices.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return [1,1,4,2,1,1,0,0]\n\nif __name__ == \"__main__\":\n    print(solution(\"temperatures = [73,74,75,71,69,72,76,73]\"))\n",
      "c": "/**\n * 24. Daily Temperatures (Medium - Stack)\n * Optimal: O(N) time | O(N) space\n * Hint: Monotonic decreasing stack of indices.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"[1,1,4,2,1,1,0,0]\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 24. Daily Temperatures (Medium - Stack)\n * Optimal: O(N) time | O(N) space\n * Hint: Monotonic decreasing stack of indices.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"[1,1,4,2,1,1,0,0]\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 24. Daily Temperatures (Medium - Stack)\n * Optimal: O(N) time | O(N) space\n * Hint: Monotonic decreasing stack of indices.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"[1,1,4,2,1,1,0,0]\");\n    }\n}\n",
      "javascript": "/**\n * 24. Daily Temperatures (Medium - Stack)\n * Optimal: O(N) time | O(N) space\n * Hint: Monotonic decreasing stack of indices.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return [1,1,4,2,1,1,0,0];\n}\n"
    },
    "testCases": [
      {
        "input": [
          "temperatures = [73,74,75,71,69,72,76,73]"
        ],
        "expected": "[1,1,4,2,1,1,0,0]",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(N)",
      "space": "O(N)"
    },
    "hints": [
      "Monotonic decreasing stack of indices.",
      "Target time complexity: O(N)",
      "Target space complexity: O(N)"
    ]
  },
  {
    "id": "lc_25_car_fleet",
    "number": 25,
    "title": "25. Car Fleet",
    "cleanTitle": "Car Fleet",
    "difficulty": "Medium",
    "category": "Stack",
    "description": "### Problem 25: Car Fleet\n\nGiven the input specifications, implement the optimal algorithm achieving **O(N log N)** time complexity and **O(N)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]`\n- **Output:** `3`",
    "examples": [
      {
        "input": "target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]",
        "output": "3",
        "explanation": "Sort by position descending, count arrival time bottlenecks."
      }
    ],
    "starterCode": {
      "python": "# 25. Car Fleet (Medium - Stack)\n# Optimal: O(N log N) time | O(N) space\n# Hint: Sort by position descending, count arrival time bottlenecks.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return 3\n\nif __name__ == \"__main__\":\n    print(solution(\"target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]\"))\n",
      "c": "/**\n * 25. Car Fleet (Medium - Stack)\n * Optimal: O(N log N) time | O(N) space\n * Hint: Sort by position descending, count arrival time bottlenecks.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"3\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 25. Car Fleet (Medium - Stack)\n * Optimal: O(N log N) time | O(N) space\n * Hint: Sort by position descending, count arrival time bottlenecks.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"3\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 25. Car Fleet (Medium - Stack)\n * Optimal: O(N log N) time | O(N) space\n * Hint: Sort by position descending, count arrival time bottlenecks.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"3\");\n    }\n}\n",
      "javascript": "/**\n * 25. Car Fleet (Medium - Stack)\n * Optimal: O(N log N) time | O(N) space\n * Hint: Sort by position descending, count arrival time bottlenecks.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return 3;\n}\n"
    },
    "testCases": [
      {
        "input": [
          "target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]"
        ],
        "expected": "3",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N)",
      "space": "O(N)"
    },
    "hints": [
      "Sort by position descending, count arrival time bottlenecks.",
      "Target time complexity: O(N log N)",
      "Target space complexity: O(N)"
    ]
  },
  {
    "id": "lc_26_largest_rectangle_in_histogram",
    "number": 26,
    "title": "26. Largest Rectangle in Histogram",
    "cleanTitle": "Largest Rectangle in Histogram",
    "difficulty": "Hard",
    "category": "Stack",
    "description": "### Problem 26: Largest Rectangle in Histogram\n\nGiven the input specifications, implement the optimal algorithm achieving **O(N)** time complexity and **O(N)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `heights = [2,1,5,6,2,3]`\n- **Output:** `10`",
    "examples": [
      {
        "input": "heights = [2,1,5,6,2,3]",
        "output": "10",
        "explanation": "Monotonic increasing stack tracking width extensions."
      }
    ],
    "starterCode": {
      "python": "# 26. Largest Rectangle in Histogram (Hard - Stack)\n# Optimal: O(N) time | O(N) space\n# Hint: Monotonic increasing stack tracking width extensions.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return 10\n\nif __name__ == \"__main__\":\n    print(solution(\"heights = [2,1,5,6,2,3]\"))\n",
      "c": "/**\n * 26. Largest Rectangle in Histogram (Hard - Stack)\n * Optimal: O(N) time | O(N) space\n * Hint: Monotonic increasing stack tracking width extensions.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"10\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 26. Largest Rectangle in Histogram (Hard - Stack)\n * Optimal: O(N) time | O(N) space\n * Hint: Monotonic increasing stack tracking width extensions.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"10\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 26. Largest Rectangle in Histogram (Hard - Stack)\n * Optimal: O(N) time | O(N) space\n * Hint: Monotonic increasing stack tracking width extensions.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"10\");\n    }\n}\n",
      "javascript": "/**\n * 26. Largest Rectangle in Histogram (Hard - Stack)\n * Optimal: O(N) time | O(N) space\n * Hint: Monotonic increasing stack tracking width extensions.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return 10;\n}\n"
    },
    "testCases": [
      {
        "input": [
          "heights = [2,1,5,6,2,3]"
        ],
        "expected": "10",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(N)",
      "space": "O(N)"
    },
    "hints": [
      "Monotonic increasing stack tracking width extensions.",
      "Target time complexity: O(N)",
      "Target space complexity: O(N)"
    ]
  },
  {
    "id": "lc_27_binary_search",
    "number": 27,
    "title": "27. Binary Search",
    "cleanTitle": "Binary Search",
    "difficulty": "Easy",
    "category": "Binary Search",
    "description": "### Problem 27: Binary Search\n\nGiven the input specifications, implement the optimal algorithm achieving **O(log N)** time complexity and **O(1)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `nums = [-1,0,3,5,9,12], target = 9`\n- **Output:** `4`",
    "examples": [
      {
        "input": "nums = [-1,0,3,5,9,12], target = 9",
        "output": "4",
        "explanation": "Standard mid = l + (r-l)//2 search."
      }
    ],
    "starterCode": {
      "python": "# 27. Binary Search (Easy - Binary Search)\n# Optimal: O(log N) time | O(1) space\n# Hint: Standard mid = l + (r-l)//2 search.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return 4\n\nif __name__ == \"__main__\":\n    print(solution(\"nums = [-1,0,3,5,9,12], target = 9\"))\n",
      "c": "/**\n * 27. Binary Search (Easy - Binary Search)\n * Optimal: O(log N) time | O(1) space\n * Hint: Standard mid = l + (r-l)//2 search.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"4\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 27. Binary Search (Easy - Binary Search)\n * Optimal: O(log N) time | O(1) space\n * Hint: Standard mid = l + (r-l)//2 search.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"4\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 27. Binary Search (Easy - Binary Search)\n * Optimal: O(log N) time | O(1) space\n * Hint: Standard mid = l + (r-l)//2 search.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"4\");\n    }\n}\n",
      "javascript": "/**\n * 27. Binary Search (Easy - Binary Search)\n * Optimal: O(log N) time | O(1) space\n * Hint: Standard mid = l + (r-l)//2 search.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return 4;\n}\n"
    },
    "testCases": [
      {
        "input": [
          "nums = [-1,0,3,5,9,12], target = 9"
        ],
        "expected": "4",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(log N)",
      "space": "O(1)"
    },
    "hints": [
      "Standard mid = l + (r-l)//2 search.",
      "Target time complexity: O(log N)",
      "Target space complexity: O(1)"
    ]
  },
  {
    "id": "lc_28_search_a_2d_matrix",
    "number": 28,
    "title": "28. Search a 2D Matrix",
    "cleanTitle": "Search a 2D Matrix",
    "difficulty": "Medium",
    "category": "Binary Search",
    "description": "### Problem 28: Search a 2D Matrix\n\nGiven the input specifications, implement the optimal algorithm achieving **O(log(M*N))** time complexity and **O(1)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `matrix = [[1,3,5,7],[10,11,16,20]], target = 3`\n- **Output:** `true`",
    "examples": [
      {
        "input": "matrix = [[1,3,5,7],[10,11,16,20]], target = 3",
        "output": "true",
        "explanation": "Treat matrix as flattened 1D array of length M*N."
      }
    ],
    "starterCode": {
      "python": "# 28. Search a 2D Matrix (Medium - Binary Search)\n# Optimal: O(log(M*N)) time | O(1) space\n# Hint: Treat matrix as flattened 1D array of length M*N.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return true\n\nif __name__ == \"__main__\":\n    print(solution(\"matrix = [[1,3,5,7],[10,11,16,20]], target = 3\"))\n",
      "c": "/**\n * 28. Search a 2D Matrix (Medium - Binary Search)\n * Optimal: O(log(M*N)) time | O(1) space\n * Hint: Treat matrix as flattened 1D array of length M*N.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"true\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 28. Search a 2D Matrix (Medium - Binary Search)\n * Optimal: O(log(M*N)) time | O(1) space\n * Hint: Treat matrix as flattened 1D array of length M*N.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"true\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 28. Search a 2D Matrix (Medium - Binary Search)\n * Optimal: O(log(M*N)) time | O(1) space\n * Hint: Treat matrix as flattened 1D array of length M*N.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"true\");\n    }\n}\n",
      "javascript": "/**\n * 28. Search a 2D Matrix (Medium - Binary Search)\n * Optimal: O(log(M*N)) time | O(1) space\n * Hint: Treat matrix as flattened 1D array of length M*N.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return true;\n}\n"
    },
    "testCases": [
      {
        "input": [
          "matrix = [[1,3,5,7],[10,11,16,20]], target = 3"
        ],
        "expected": "true",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(log(M*N))",
      "space": "O(1)"
    },
    "hints": [
      "Treat matrix as flattened 1D array of length M*N.",
      "Target time complexity: O(log(M*N))",
      "Target space complexity: O(1)"
    ]
  },
  {
    "id": "lc_29_koko_eating_bananas",
    "number": 29,
    "title": "29. Koko Eating Bananas",
    "cleanTitle": "Koko Eating Bananas",
    "difficulty": "Medium",
    "category": "Binary Search",
    "description": "### Problem 29: Koko Eating Bananas\n\nGiven the input specifications, implement the optimal algorithm achieving **O(N log(max(P)))** time complexity and **O(1)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `piles = [3,6,7,11], h = 8`\n- **Output:** `4`",
    "examples": [
      {
        "input": "piles = [3,6,7,11], h = 8",
        "output": "4",
        "explanation": "Binary search on eating speed in range [1, max(piles)]."
      }
    ],
    "starterCode": {
      "python": "# 29. Koko Eating Bananas (Medium - Binary Search)\n# Optimal: O(N log(max(P))) time | O(1) space\n# Hint: Binary search on eating speed in range [1, max(piles)].\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return 4\n\nif __name__ == \"__main__\":\n    print(solution(\"piles = [3,6,7,11], h = 8\"))\n",
      "c": "/**\n * 29. Koko Eating Bananas (Medium - Binary Search)\n * Optimal: O(N log(max(P))) time | O(1) space\n * Hint: Binary search on eating speed in range [1, max(piles)].\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"4\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 29. Koko Eating Bananas (Medium - Binary Search)\n * Optimal: O(N log(max(P))) time | O(1) space\n * Hint: Binary search on eating speed in range [1, max(piles)].\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"4\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 29. Koko Eating Bananas (Medium - Binary Search)\n * Optimal: O(N log(max(P))) time | O(1) space\n * Hint: Binary search on eating speed in range [1, max(piles)].\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"4\");\n    }\n}\n",
      "javascript": "/**\n * 29. Koko Eating Bananas (Medium - Binary Search)\n * Optimal: O(N log(max(P))) time | O(1) space\n * Hint: Binary search on eating speed in range [1, max(piles)].\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return 4;\n}\n"
    },
    "testCases": [
      {
        "input": [
          "piles = [3,6,7,11], h = 8"
        ],
        "expected": "4",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(N log(max(P)))",
      "space": "O(1)"
    },
    "hints": [
      "Binary search on eating speed in range [1, max(piles)].",
      "Target time complexity: O(N log(max(P)))",
      "Target space complexity: O(1)"
    ]
  },
  {
    "id": "lc_30_find_minimum_in_rotated_sorted_array",
    "number": 30,
    "title": "30. Find Minimum in Rotated Sorted Array",
    "cleanTitle": "Find Minimum in Rotated Sorted Array",
    "difficulty": "Medium",
    "category": "Binary Search",
    "description": "### Problem 30: Find Minimum in Rotated Sorted Array\n\nGiven the input specifications, implement the optimal algorithm achieving **O(log N)** time complexity and **O(1)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `nums = [3,4,5,1,2]`\n- **Output:** `1`",
    "examples": [
      {
        "input": "nums = [3,4,5,1,2]",
        "output": "1",
        "explanation": "Compare mid to right boundary to discard sorted half."
      }
    ],
    "starterCode": {
      "python": "# 30. Find Minimum in Rotated Sorted Array (Medium - Binary Search)\n# Optimal: O(log N) time | O(1) space\n# Hint: Compare mid to right boundary to discard sorted half.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return 1\n\nif __name__ == \"__main__\":\n    print(solution(\"nums = [3,4,5,1,2]\"))\n",
      "c": "/**\n * 30. Find Minimum in Rotated Sorted Array (Medium - Binary Search)\n * Optimal: O(log N) time | O(1) space\n * Hint: Compare mid to right boundary to discard sorted half.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"1\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 30. Find Minimum in Rotated Sorted Array (Medium - Binary Search)\n * Optimal: O(log N) time | O(1) space\n * Hint: Compare mid to right boundary to discard sorted half.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"1\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 30. Find Minimum in Rotated Sorted Array (Medium - Binary Search)\n * Optimal: O(log N) time | O(1) space\n * Hint: Compare mid to right boundary to discard sorted half.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"1\");\n    }\n}\n",
      "javascript": "/**\n * 30. Find Minimum in Rotated Sorted Array (Medium - Binary Search)\n * Optimal: O(log N) time | O(1) space\n * Hint: Compare mid to right boundary to discard sorted half.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return 1;\n}\n"
    },
    "testCases": [
      {
        "input": [
          "nums = [3,4,5,1,2]"
        ],
        "expected": "1",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(log N)",
      "space": "O(1)"
    },
    "hints": [
      "Compare mid to right boundary to discard sorted half.",
      "Target time complexity: O(log N)",
      "Target space complexity: O(1)"
    ]
  },
  {
    "id": "lc_31_search_in_rotated_sorted_array",
    "number": 31,
    "title": "31. Search in Rotated Sorted Array",
    "cleanTitle": "Search in Rotated Sorted Array",
    "difficulty": "Medium",
    "category": "Binary Search",
    "description": "### Problem 31: Search in Rotated Sorted Array\n\nGiven the input specifications, implement the optimal algorithm achieving **O(log N)** time complexity and **O(1)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `nums = [4,5,6,7,0,1,2], target = 0`\n- **Output:** `4`",
    "examples": [
      {
        "input": "nums = [4,5,6,7,0,1,2], target = 0",
        "output": "4",
        "explanation": "Determine which half is uniformly sorted, then branch."
      }
    ],
    "starterCode": {
      "python": "# 31. Search in Rotated Sorted Array (Medium - Binary Search)\n# Optimal: O(log N) time | O(1) space\n# Hint: Determine which half is uniformly sorted, then branch.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return 4\n\nif __name__ == \"__main__\":\n    print(solution(\"nums = [4,5,6,7,0,1,2], target = 0\"))\n",
      "c": "/**\n * 31. Search in Rotated Sorted Array (Medium - Binary Search)\n * Optimal: O(log N) time | O(1) space\n * Hint: Determine which half is uniformly sorted, then branch.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"4\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 31. Search in Rotated Sorted Array (Medium - Binary Search)\n * Optimal: O(log N) time | O(1) space\n * Hint: Determine which half is uniformly sorted, then branch.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"4\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 31. Search in Rotated Sorted Array (Medium - Binary Search)\n * Optimal: O(log N) time | O(1) space\n * Hint: Determine which half is uniformly sorted, then branch.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"4\");\n    }\n}\n",
      "javascript": "/**\n * 31. Search in Rotated Sorted Array (Medium - Binary Search)\n * Optimal: O(log N) time | O(1) space\n * Hint: Determine which half is uniformly sorted, then branch.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return 4;\n}\n"
    },
    "testCases": [
      {
        "input": [
          "nums = [4,5,6,7,0,1,2], target = 0"
        ],
        "expected": "4",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(log N)",
      "space": "O(1)"
    },
    "hints": [
      "Determine which half is uniformly sorted, then branch.",
      "Target time complexity: O(log N)",
      "Target space complexity: O(1)"
    ]
  },
  {
    "id": "lc_32_time_based_key_value_store",
    "number": 32,
    "title": "32. Time Based Key-Value Store",
    "cleanTitle": "Time Based Key-Value Store",
    "difficulty": "Medium",
    "category": "Binary Search",
    "description": "### Problem 32: Time Based Key-Value Store\n\nGiven the input specifications, implement the optimal algorithm achieving **O(log N)** time complexity and **O(N)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `set(k,v,t), get(k,t)`\n- **Output:** `latest <= t`",
    "examples": [
      {
        "input": "set(k,v,t), get(k,t)",
        "output": "latest <= t",
        "explanation": "Store timestamps in sorted list per key; binary search."
      }
    ],
    "starterCode": {
      "python": "# 32. Time Based Key-Value Store (Medium - Binary Search)\n# Optimal: O(log N) time | O(N) space\n# Hint: Store timestamps in sorted list per key; binary search.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return latest <= t\n\nif __name__ == \"__main__\":\n    print(solution(\"set(k,v,t), get(k,t)\"))\n",
      "c": "/**\n * 32. Time Based Key-Value Store (Medium - Binary Search)\n * Optimal: O(log N) time | O(N) space\n * Hint: Store timestamps in sorted list per key; binary search.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"latest <= t\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 32. Time Based Key-Value Store (Medium - Binary Search)\n * Optimal: O(log N) time | O(N) space\n * Hint: Store timestamps in sorted list per key; binary search.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"latest <= t\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 32. Time Based Key-Value Store (Medium - Binary Search)\n * Optimal: O(log N) time | O(N) space\n * Hint: Store timestamps in sorted list per key; binary search.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"latest <= t\");\n    }\n}\n",
      "javascript": "/**\n * 32. Time Based Key-Value Store (Medium - Binary Search)\n * Optimal: O(log N) time | O(N) space\n * Hint: Store timestamps in sorted list per key; binary search.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return \"latest <= t\";\n}\n"
    },
    "testCases": [
      {
        "input": [
          "set(k,v,t), get(k,t)"
        ],
        "expected": "latest <= t",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(log N)",
      "space": "O(N)"
    },
    "hints": [
      "Store timestamps in sorted list per key; binary search.",
      "Target time complexity: O(log N)",
      "Target space complexity: O(N)"
    ]
  },
  {
    "id": "lc_33_median_of_two_sorted_arrays",
    "number": 33,
    "title": "33. Median of Two Sorted Arrays",
    "cleanTitle": "Median of Two Sorted Arrays",
    "difficulty": "Hard",
    "category": "Binary Search",
    "description": "### Problem 33: Median of Two Sorted Arrays\n\nGiven the input specifications, implement the optimal algorithm achieving **O(log(min(M,N)))** time complexity and **O(1)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `nums1 = [1,3], nums2 = [2]`\n- **Output:** `2.0`",
    "examples": [
      {
        "input": "nums1 = [1,3], nums2 = [2]",
        "output": "2.0",
        "explanation": "Binary search partition on smaller array."
      }
    ],
    "starterCode": {
      "python": "# 33. Median of Two Sorted Arrays (Hard - Binary Search)\n# Optimal: O(log(min(M,N))) time | O(1) space\n# Hint: Binary search partition on smaller array.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return 2.0\n\nif __name__ == \"__main__\":\n    print(solution(\"nums1 = [1,3], nums2 = [2]\"))\n",
      "c": "/**\n * 33. Median of Two Sorted Arrays (Hard - Binary Search)\n * Optimal: O(log(min(M,N))) time | O(1) space\n * Hint: Binary search partition on smaller array.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"2.0\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 33. Median of Two Sorted Arrays (Hard - Binary Search)\n * Optimal: O(log(min(M,N))) time | O(1) space\n * Hint: Binary search partition on smaller array.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"2.0\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 33. Median of Two Sorted Arrays (Hard - Binary Search)\n * Optimal: O(log(min(M,N))) time | O(1) space\n * Hint: Binary search partition on smaller array.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"2.0\");\n    }\n}\n",
      "javascript": "/**\n * 33. Median of Two Sorted Arrays (Hard - Binary Search)\n * Optimal: O(log(min(M,N))) time | O(1) space\n * Hint: Binary search partition on smaller array.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return 2.0;\n}\n"
    },
    "testCases": [
      {
        "input": [
          "nums1 = [1,3], nums2 = [2]"
        ],
        "expected": "2.0",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(log(min(M,N)))",
      "space": "O(1)"
    },
    "hints": [
      "Binary search partition on smaller array.",
      "Target time complexity: O(log(min(M,N)))",
      "Target space complexity: O(1)"
    ]
  },
  {
    "id": "lc_34_reverse_linked_list",
    "number": 34,
    "title": "34. Reverse Linked List",
    "cleanTitle": "Reverse Linked List",
    "difficulty": "Easy",
    "category": "Linked List",
    "description": "### Problem 34: Reverse Linked List\n\nGiven the input specifications, implement the optimal algorithm achieving **O(N)** time complexity and **O(1)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `head = [1,2,3,4,5]`\n- **Output:** `[5,4,3,2,1]`",
    "examples": [
      {
        "input": "head = [1,2,3,4,5]",
        "output": "[5,4,3,2,1]",
        "explanation": "Iterative three pointers (prev, curr, next)."
      }
    ],
    "starterCode": {
      "python": "# 34. Reverse Linked List (Easy - Linked List)\n# Optimal: O(N) time | O(1) space\n# Hint: Iterative three pointers (prev, curr, next).\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return [5,4,3,2,1]\n\nif __name__ == \"__main__\":\n    print(solution(\"head = [1,2,3,4,5]\"))\n",
      "c": "/**\n * 34. Reverse Linked List (Easy - Linked List)\n * Optimal: O(N) time | O(1) space\n * Hint: Iterative three pointers (prev, curr, next).\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"[5,4,3,2,1]\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 34. Reverse Linked List (Easy - Linked List)\n * Optimal: O(N) time | O(1) space\n * Hint: Iterative three pointers (prev, curr, next).\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"[5,4,3,2,1]\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 34. Reverse Linked List (Easy - Linked List)\n * Optimal: O(N) time | O(1) space\n * Hint: Iterative three pointers (prev, curr, next).\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"[5,4,3,2,1]\");\n    }\n}\n",
      "javascript": "/**\n * 34. Reverse Linked List (Easy - Linked List)\n * Optimal: O(N) time | O(1) space\n * Hint: Iterative three pointers (prev, curr, next).\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return [5,4,3,2,1];\n}\n"
    },
    "testCases": [
      {
        "input": [
          "head = [1,2,3,4,5]"
        ],
        "expected": "[5,4,3,2,1]",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(N)",
      "space": "O(1)"
    },
    "hints": [
      "Iterative three pointers (prev, curr, next).",
      "Target time complexity: O(N)",
      "Target space complexity: O(1)"
    ]
  },
  {
    "id": "lc_35_merge_two_sorted_lists",
    "number": 35,
    "title": "35. Merge Two Sorted Lists",
    "cleanTitle": "Merge Two Sorted Lists",
    "difficulty": "Easy",
    "category": "Linked List",
    "description": "### Problem 35: Merge Two Sorted Lists\n\nGiven the input specifications, implement the optimal algorithm achieving **O(N+M)** time complexity and **O(1)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `list1 = [1,2,4], list2 = [1,3,4]`\n- **Output:** `[1,1,2,3,4,4]`",
    "examples": [
      {
        "input": "list1 = [1,2,4], list2 = [1,3,4]",
        "output": "[1,1,2,3,4,4]",
        "explanation": "Dummy head node, advance smaller pointer."
      }
    ],
    "starterCode": {
      "python": "# 35. Merge Two Sorted Lists (Easy - Linked List)\n# Optimal: O(N+M) time | O(1) space\n# Hint: Dummy head node, advance smaller pointer.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return [1,1,2,3,4,4]\n\nif __name__ == \"__main__\":\n    print(solution(\"list1 = [1,2,4], list2 = [1,3,4]\"))\n",
      "c": "/**\n * 35. Merge Two Sorted Lists (Easy - Linked List)\n * Optimal: O(N+M) time | O(1) space\n * Hint: Dummy head node, advance smaller pointer.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"[1,1,2,3,4,4]\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 35. Merge Two Sorted Lists (Easy - Linked List)\n * Optimal: O(N+M) time | O(1) space\n * Hint: Dummy head node, advance smaller pointer.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"[1,1,2,3,4,4]\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 35. Merge Two Sorted Lists (Easy - Linked List)\n * Optimal: O(N+M) time | O(1) space\n * Hint: Dummy head node, advance smaller pointer.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"[1,1,2,3,4,4]\");\n    }\n}\n",
      "javascript": "/**\n * 35. Merge Two Sorted Lists (Easy - Linked List)\n * Optimal: O(N+M) time | O(1) space\n * Hint: Dummy head node, advance smaller pointer.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return [1,1,2,3,4,4];\n}\n"
    },
    "testCases": [
      {
        "input": [
          "list1 = [1,2,4], list2 = [1,3,4]"
        ],
        "expected": "[1,1,2,3,4,4]",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(N+M)",
      "space": "O(1)"
    },
    "hints": [
      "Dummy head node, advance smaller pointer.",
      "Target time complexity: O(N+M)",
      "Target space complexity: O(1)"
    ]
  },
  {
    "id": "lc_36_reorder_list",
    "number": 36,
    "title": "36. Reorder List",
    "cleanTitle": "Reorder List",
    "difficulty": "Medium",
    "category": "Linked List",
    "description": "### Problem 36: Reorder List\n\nGiven the input specifications, implement the optimal algorithm achieving **O(N)** time complexity and **O(1)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `head = [1,2,3,4]`\n- **Output:** `[1,4,2,3]`",
    "examples": [
      {
        "input": "head = [1,2,3,4]",
        "output": "[1,4,2,3]",
        "explanation": "Find middle, reverse second half, weave two halves together."
      }
    ],
    "starterCode": {
      "python": "# 36. Reorder List (Medium - Linked List)\n# Optimal: O(N) time | O(1) space\n# Hint: Find middle, reverse second half, weave two halves together.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return [1,4,2,3]\n\nif __name__ == \"__main__\":\n    print(solution(\"head = [1,2,3,4]\"))\n",
      "c": "/**\n * 36. Reorder List (Medium - Linked List)\n * Optimal: O(N) time | O(1) space\n * Hint: Find middle, reverse second half, weave two halves together.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"[1,4,2,3]\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 36. Reorder List (Medium - Linked List)\n * Optimal: O(N) time | O(1) space\n * Hint: Find middle, reverse second half, weave two halves together.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"[1,4,2,3]\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 36. Reorder List (Medium - Linked List)\n * Optimal: O(N) time | O(1) space\n * Hint: Find middle, reverse second half, weave two halves together.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"[1,4,2,3]\");\n    }\n}\n",
      "javascript": "/**\n * 36. Reorder List (Medium - Linked List)\n * Optimal: O(N) time | O(1) space\n * Hint: Find middle, reverse second half, weave two halves together.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return [1,4,2,3];\n}\n"
    },
    "testCases": [
      {
        "input": [
          "head = [1,2,3,4]"
        ],
        "expected": "[1,4,2,3]",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(N)",
      "space": "O(1)"
    },
    "hints": [
      "Find middle, reverse second half, weave two halves together.",
      "Target time complexity: O(N)",
      "Target space complexity: O(1)"
    ]
  },
  {
    "id": "lc_37_remove_nth_node_from_end_of_list",
    "number": 37,
    "title": "37. Remove Nth Node From End of List",
    "cleanTitle": "Remove Nth Node From End of List",
    "difficulty": "Medium",
    "category": "Linked List",
    "description": "### Problem 37: Remove Nth Node From End of List\n\nGiven the input specifications, implement the optimal algorithm achieving **O(N)** time complexity and **O(1)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `head = [1,2,3,4,5], n = 2`\n- **Output:** `[1,2,3,5]`",
    "examples": [
      {
        "input": "head = [1,2,3,4,5], n = 2",
        "output": "[1,2,3,5]",
        "explanation": "Fast pointer advances n steps ahead of slow pointer."
      }
    ],
    "starterCode": {
      "python": "# 37. Remove Nth Node From End of List (Medium - Linked List)\n# Optimal: O(N) time | O(1) space\n# Hint: Fast pointer advances n steps ahead of slow pointer.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return [1,2,3,5]\n\nif __name__ == \"__main__\":\n    print(solution(\"head = [1,2,3,4,5], n = 2\"))\n",
      "c": "/**\n * 37. Remove Nth Node From End of List (Medium - Linked List)\n * Optimal: O(N) time | O(1) space\n * Hint: Fast pointer advances n steps ahead of slow pointer.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"[1,2,3,5]\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 37. Remove Nth Node From End of List (Medium - Linked List)\n * Optimal: O(N) time | O(1) space\n * Hint: Fast pointer advances n steps ahead of slow pointer.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"[1,2,3,5]\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 37. Remove Nth Node From End of List (Medium - Linked List)\n * Optimal: O(N) time | O(1) space\n * Hint: Fast pointer advances n steps ahead of slow pointer.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"[1,2,3,5]\");\n    }\n}\n",
      "javascript": "/**\n * 37. Remove Nth Node From End of List (Medium - Linked List)\n * Optimal: O(N) time | O(1) space\n * Hint: Fast pointer advances n steps ahead of slow pointer.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return [1,2,3,5];\n}\n"
    },
    "testCases": [
      {
        "input": [
          "head = [1,2,3,4,5], n = 2"
        ],
        "expected": "[1,2,3,5]",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(N)",
      "space": "O(1)"
    },
    "hints": [
      "Fast pointer advances n steps ahead of slow pointer.",
      "Target time complexity: O(N)",
      "Target space complexity: O(1)"
    ]
  },
  {
    "id": "lc_38_copy_list_with_random_pointer",
    "number": 38,
    "title": "38. Copy List with Random Pointer",
    "cleanTitle": "Copy List with Random Pointer",
    "difficulty": "Medium",
    "category": "Linked List",
    "description": "### Problem 38: Copy List with Random Pointer\n\nGiven the input specifications, implement the optimal algorithm achieving **O(N)** time complexity and **O(1)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `head with random ptrs`\n- **Output:** `deep copy`",
    "examples": [
      {
        "input": "head with random ptrs",
        "output": "deep copy",
        "explanation": "Interleave cloned nodes or use Hash Map mapping original -> copy."
      }
    ],
    "starterCode": {
      "python": "# 38. Copy List with Random Pointer (Medium - Linked List)\n# Optimal: O(N) time | O(1) space\n# Hint: Interleave cloned nodes or use Hash Map mapping original -> copy.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return deep copy\n\nif __name__ == \"__main__\":\n    print(solution(\"head with random ptrs\"))\n",
      "c": "/**\n * 38. Copy List with Random Pointer (Medium - Linked List)\n * Optimal: O(N) time | O(1) space\n * Hint: Interleave cloned nodes or use Hash Map mapping original -> copy.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"deep copy\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 38. Copy List with Random Pointer (Medium - Linked List)\n * Optimal: O(N) time | O(1) space\n * Hint: Interleave cloned nodes or use Hash Map mapping original -> copy.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"deep copy\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 38. Copy List with Random Pointer (Medium - Linked List)\n * Optimal: O(N) time | O(1) space\n * Hint: Interleave cloned nodes or use Hash Map mapping original -> copy.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"deep copy\");\n    }\n}\n",
      "javascript": "/**\n * 38. Copy List with Random Pointer (Medium - Linked List)\n * Optimal: O(N) time | O(1) space\n * Hint: Interleave cloned nodes or use Hash Map mapping original -> copy.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return \"deep copy\";\n}\n"
    },
    "testCases": [
      {
        "input": [
          "head with random ptrs"
        ],
        "expected": "deep copy",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(N)",
      "space": "O(1)"
    },
    "hints": [
      "Interleave cloned nodes or use Hash Map mapping original -> copy.",
      "Target time complexity: O(N)",
      "Target space complexity: O(1)"
    ]
  },
  {
    "id": "lc_39_add_two_numbers",
    "number": 39,
    "title": "39. Add Two Numbers",
    "cleanTitle": "Add Two Numbers",
    "difficulty": "Medium",
    "category": "Linked List",
    "description": "### Problem 39: Add Two Numbers\n\nGiven the input specifications, implement the optimal algorithm achieving **O(N)** time complexity and **O(1)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `l1 = [2,4,3], l2 = [5,6,4]`\n- **Output:** `[7,0,8]`",
    "examples": [
      {
        "input": "l1 = [2,4,3], l2 = [5,6,4]",
        "output": "[7,0,8]",
        "explanation": "Simulate addition digit by digit with carry."
      }
    ],
    "starterCode": {
      "python": "# 39. Add Two Numbers (Medium - Linked List)\n# Optimal: O(N) time | O(1) space\n# Hint: Simulate addition digit by digit with carry.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return [7,0,8]\n\nif __name__ == \"__main__\":\n    print(solution(\"l1 = [2,4,3], l2 = [5,6,4]\"))\n",
      "c": "/**\n * 39. Add Two Numbers (Medium - Linked List)\n * Optimal: O(N) time | O(1) space\n * Hint: Simulate addition digit by digit with carry.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"[7,0,8]\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 39. Add Two Numbers (Medium - Linked List)\n * Optimal: O(N) time | O(1) space\n * Hint: Simulate addition digit by digit with carry.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"[7,0,8]\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 39. Add Two Numbers (Medium - Linked List)\n * Optimal: O(N) time | O(1) space\n * Hint: Simulate addition digit by digit with carry.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"[7,0,8]\");\n    }\n}\n",
      "javascript": "/**\n * 39. Add Two Numbers (Medium - Linked List)\n * Optimal: O(N) time | O(1) space\n * Hint: Simulate addition digit by digit with carry.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return [7,0,8];\n}\n"
    },
    "testCases": [
      {
        "input": [
          "l1 = [2,4,3], l2 = [5,6,4]"
        ],
        "expected": "[7,0,8]",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(N)",
      "space": "O(1)"
    },
    "hints": [
      "Simulate addition digit by digit with carry.",
      "Target time complexity: O(N)",
      "Target space complexity: O(1)"
    ]
  },
  {
    "id": "lc_40_linked_list_cycle",
    "number": 40,
    "title": "40. Linked List Cycle",
    "cleanTitle": "Linked List Cycle",
    "difficulty": "Easy",
    "category": "Linked List",
    "description": "### Problem 40: Linked List Cycle\n\nGiven the input specifications, implement the optimal algorithm achieving **O(N)** time complexity and **O(1)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `head = [3,2,0,-4], pos = 1`\n- **Output:** `true`",
    "examples": [
      {
        "input": "head = [3,2,0,-4], pos = 1",
        "output": "true",
        "explanation": "Floyd Tortoise and Hare two pointers."
      }
    ],
    "starterCode": {
      "python": "# 40. Linked List Cycle (Easy - Linked List)\n# Optimal: O(N) time | O(1) space\n# Hint: Floyd Tortoise and Hare two pointers.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return true\n\nif __name__ == \"__main__\":\n    print(solution(\"head = [3,2,0,-4], pos = 1\"))\n",
      "c": "/**\n * 40. Linked List Cycle (Easy - Linked List)\n * Optimal: O(N) time | O(1) space\n * Hint: Floyd Tortoise and Hare two pointers.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"true\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 40. Linked List Cycle (Easy - Linked List)\n * Optimal: O(N) time | O(1) space\n * Hint: Floyd Tortoise and Hare two pointers.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"true\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 40. Linked List Cycle (Easy - Linked List)\n * Optimal: O(N) time | O(1) space\n * Hint: Floyd Tortoise and Hare two pointers.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"true\");\n    }\n}\n",
      "javascript": "/**\n * 40. Linked List Cycle (Easy - Linked List)\n * Optimal: O(N) time | O(1) space\n * Hint: Floyd Tortoise and Hare two pointers.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return true;\n}\n"
    },
    "testCases": [
      {
        "input": [
          "head = [3,2,0,-4], pos = 1"
        ],
        "expected": "true",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(N)",
      "space": "O(1)"
    },
    "hints": [
      "Floyd Tortoise and Hare two pointers.",
      "Target time complexity: O(N)",
      "Target space complexity: O(1)"
    ]
  },
  {
    "id": "lc_41_find_the_duplicate_number",
    "number": 41,
    "title": "41. Find the Duplicate Number",
    "cleanTitle": "Find the Duplicate Number",
    "difficulty": "Medium",
    "category": "Linked List",
    "description": "### Problem 41: Find the Duplicate Number\n\nGiven the input specifications, implement the optimal algorithm achieving **O(N)** time complexity and **O(1)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `nums = [1,3,4,2,2]`\n- **Output:** `2`",
    "examples": [
      {
        "input": "nums = [1,3,4,2,2]",
        "output": "2",
        "explanation": "Floyd cycle detection on implicit linked list."
      }
    ],
    "starterCode": {
      "python": "# 41. Find the Duplicate Number (Medium - Linked List)\n# Optimal: O(N) time | O(1) space\n# Hint: Floyd cycle detection on implicit linked list.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return 2\n\nif __name__ == \"__main__\":\n    print(solution(\"nums = [1,3,4,2,2]\"))\n",
      "c": "/**\n * 41. Find the Duplicate Number (Medium - Linked List)\n * Optimal: O(N) time | O(1) space\n * Hint: Floyd cycle detection on implicit linked list.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"2\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 41. Find the Duplicate Number (Medium - Linked List)\n * Optimal: O(N) time | O(1) space\n * Hint: Floyd cycle detection on implicit linked list.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"2\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 41. Find the Duplicate Number (Medium - Linked List)\n * Optimal: O(N) time | O(1) space\n * Hint: Floyd cycle detection on implicit linked list.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"2\");\n    }\n}\n",
      "javascript": "/**\n * 41. Find the Duplicate Number (Medium - Linked List)\n * Optimal: O(N) time | O(1) space\n * Hint: Floyd cycle detection on implicit linked list.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return 2;\n}\n"
    },
    "testCases": [
      {
        "input": [
          "nums = [1,3,4,2,2]"
        ],
        "expected": "2",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(N)",
      "space": "O(1)"
    },
    "hints": [
      "Floyd cycle detection on implicit linked list.",
      "Target time complexity: O(N)",
      "Target space complexity: O(1)"
    ]
  },
  {
    "id": "lc_42_lru_cache_design",
    "number": 42,
    "title": "42. LRU Cache Design",
    "cleanTitle": "LRU Cache Design",
    "difficulty": "Medium",
    "category": "Linked List",
    "description": "### Problem 42: LRU Cache Design\n\nGiven the input specifications, implement the optimal algorithm achieving **O(1)** time complexity and **O(C)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `get(k), put(k,v) cap = 2`\n- **Output:** `O(1) ops`",
    "examples": [
      {
        "input": "get(k), put(k,v) cap = 2",
        "output": "O(1) ops",
        "explanation": "Hash Map + Doubly Linked List with head/tail sentinels."
      }
    ],
    "starterCode": {
      "python": "# 42. LRU Cache Design (Medium - Linked List)\n# Optimal: O(1) time | O(C) space\n# Hint: Hash Map + Doubly Linked List with head/tail sentinels.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return O(1) ops\n\nif __name__ == \"__main__\":\n    print(solution(\"get(k), put(k,v) cap = 2\"))\n",
      "c": "/**\n * 42. LRU Cache Design (Medium - Linked List)\n * Optimal: O(1) time | O(C) space\n * Hint: Hash Map + Doubly Linked List with head/tail sentinels.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"O(1) ops\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 42. LRU Cache Design (Medium - Linked List)\n * Optimal: O(1) time | O(C) space\n * Hint: Hash Map + Doubly Linked List with head/tail sentinels.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"O(1) ops\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 42. LRU Cache Design (Medium - Linked List)\n * Optimal: O(1) time | O(C) space\n * Hint: Hash Map + Doubly Linked List with head/tail sentinels.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"O(1) ops\");\n    }\n}\n",
      "javascript": "/**\n * 42. LRU Cache Design (Medium - Linked List)\n * Optimal: O(1) time | O(C) space\n * Hint: Hash Map + Doubly Linked List with head/tail sentinels.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return \"O(1) ops\";\n}\n"
    },
    "testCases": [
      {
        "input": [
          "get(k), put(k,v) cap = 2"
        ],
        "expected": "O(1) ops",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(1)",
      "space": "O(C)"
    },
    "hints": [
      "Hash Map + Doubly Linked List with head/tail sentinels.",
      "Target time complexity: O(1)",
      "Target space complexity: O(C)"
    ]
  },
  {
    "id": "lc_43_merge_k_sorted_lists",
    "number": 43,
    "title": "43. Merge K Sorted Lists",
    "cleanTitle": "Merge K Sorted Lists",
    "difficulty": "Hard",
    "category": "Linked List",
    "description": "### Problem 43: Merge K Sorted Lists\n\nGiven the input specifications, implement the optimal algorithm achieving **O(N log K)** time complexity and **O(K)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `lists = [[1,4,5],[1,3,4],[2,6]]`\n- **Output:** `[1,1,2,3,4,4,5,6]`",
    "examples": [
      {
        "input": "lists = [[1,4,5],[1,3,4],[2,6]]",
        "output": "[1,1,2,3,4,4,5,6]",
        "explanation": "Min-Heap storing heads of all K lists."
      }
    ],
    "starterCode": {
      "python": "# 43. Merge K Sorted Lists (Hard - Linked List)\n# Optimal: O(N log K) time | O(K) space\n# Hint: Min-Heap storing heads of all K lists.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return [1,1,2,3,4,4,5,6]\n\nif __name__ == \"__main__\":\n    print(solution(\"lists = [[1,4,5],[1,3,4],[2,6]]\"))\n",
      "c": "/**\n * 43. Merge K Sorted Lists (Hard - Linked List)\n * Optimal: O(N log K) time | O(K) space\n * Hint: Min-Heap storing heads of all K lists.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"[1,1,2,3,4,4,5,6]\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 43. Merge K Sorted Lists (Hard - Linked List)\n * Optimal: O(N log K) time | O(K) space\n * Hint: Min-Heap storing heads of all K lists.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"[1,1,2,3,4,4,5,6]\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 43. Merge K Sorted Lists (Hard - Linked List)\n * Optimal: O(N log K) time | O(K) space\n * Hint: Min-Heap storing heads of all K lists.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"[1,1,2,3,4,4,5,6]\");\n    }\n}\n",
      "javascript": "/**\n * 43. Merge K Sorted Lists (Hard - Linked List)\n * Optimal: O(N log K) time | O(K) space\n * Hint: Min-Heap storing heads of all K lists.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return [1,1,2,3,4,4,5,6];\n}\n"
    },
    "testCases": [
      {
        "input": [
          "lists = [[1,4,5],[1,3,4],[2,6]]"
        ],
        "expected": "[1,1,2,3,4,4,5,6]",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(N log K)",
      "space": "O(K)"
    },
    "hints": [
      "Min-Heap storing heads of all K lists.",
      "Target time complexity: O(N log K)",
      "Target space complexity: O(K)"
    ]
  },
  {
    "id": "lc_44_reverse_nodes_in_k_group",
    "number": 44,
    "title": "44. Reverse Nodes in K-Group",
    "cleanTitle": "Reverse Nodes in K-Group",
    "difficulty": "Hard",
    "category": "Linked List",
    "description": "### Problem 44: Reverse Nodes in K-Group\n\nGiven the input specifications, implement the optimal algorithm achieving **O(N)** time complexity and **O(1)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `head = [1,2,3,4,5], k = 2`\n- **Output:** `[2,1,4,3,5]`",
    "examples": [
      {
        "input": "head = [1,2,3,4,5], k = 2",
        "output": "[2,1,4,3,5]",
        "explanation": "Verify k nodes exist, reverse subsegment, recurse."
      }
    ],
    "starterCode": {
      "python": "# 44. Reverse Nodes in K-Group (Hard - Linked List)\n# Optimal: O(N) time | O(1) space\n# Hint: Verify k nodes exist, reverse subsegment, recurse.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return [2,1,4,3,5]\n\nif __name__ == \"__main__\":\n    print(solution(\"head = [1,2,3,4,5], k = 2\"))\n",
      "c": "/**\n * 44. Reverse Nodes in K-Group (Hard - Linked List)\n * Optimal: O(N) time | O(1) space\n * Hint: Verify k nodes exist, reverse subsegment, recurse.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"[2,1,4,3,5]\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 44. Reverse Nodes in K-Group (Hard - Linked List)\n * Optimal: O(N) time | O(1) space\n * Hint: Verify k nodes exist, reverse subsegment, recurse.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"[2,1,4,3,5]\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 44. Reverse Nodes in K-Group (Hard - Linked List)\n * Optimal: O(N) time | O(1) space\n * Hint: Verify k nodes exist, reverse subsegment, recurse.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"[2,1,4,3,5]\");\n    }\n}\n",
      "javascript": "/**\n * 44. Reverse Nodes in K-Group (Hard - Linked List)\n * Optimal: O(N) time | O(1) space\n * Hint: Verify k nodes exist, reverse subsegment, recurse.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return [2,1,4,3,5];\n}\n"
    },
    "testCases": [
      {
        "input": [
          "head = [1,2,3,4,5], k = 2"
        ],
        "expected": "[2,1,4,3,5]",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(N)",
      "space": "O(1)"
    },
    "hints": [
      "Verify k nodes exist, reverse subsegment, recurse.",
      "Target time complexity: O(N)",
      "Target space complexity: O(1)"
    ]
  },
  {
    "id": "lc_45_invert_binary_tree",
    "number": 45,
    "title": "45. Invert Binary Tree",
    "cleanTitle": "Invert Binary Tree",
    "difficulty": "Easy",
    "category": "Trees",
    "description": "### Problem 45: Invert Binary Tree\n\nGiven the input specifications, implement the optimal algorithm achieving **O(N)** time complexity and **O(H)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `root = [4,2,7,1,3,6,9]`\n- **Output:** `[4,7,2,9,6,3,1]`",
    "examples": [
      {
        "input": "root = [4,2,7,1,3,6,9]",
        "output": "[4,7,2,9,6,3,1]",
        "explanation": "Recursively swap left and right subtrees."
      }
    ],
    "starterCode": {
      "python": "# 45. Invert Binary Tree (Easy - Trees)\n# Optimal: O(N) time | O(H) space\n# Hint: Recursively swap left and right subtrees.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return [4,7,2,9,6,3,1]\n\nif __name__ == \"__main__\":\n    print(solution(\"root = [4,2,7,1,3,6,9]\"))\n",
      "c": "/**\n * 45. Invert Binary Tree (Easy - Trees)\n * Optimal: O(N) time | O(H) space\n * Hint: Recursively swap left and right subtrees.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"[4,7,2,9,6,3,1]\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 45. Invert Binary Tree (Easy - Trees)\n * Optimal: O(N) time | O(H) space\n * Hint: Recursively swap left and right subtrees.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"[4,7,2,9,6,3,1]\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 45. Invert Binary Tree (Easy - Trees)\n * Optimal: O(N) time | O(H) space\n * Hint: Recursively swap left and right subtrees.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"[4,7,2,9,6,3,1]\");\n    }\n}\n",
      "javascript": "/**\n * 45. Invert Binary Tree (Easy - Trees)\n * Optimal: O(N) time | O(H) space\n * Hint: Recursively swap left and right subtrees.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return [4,7,2,9,6,3,1];\n}\n"
    },
    "testCases": [
      {
        "input": [
          "root = [4,2,7,1,3,6,9]"
        ],
        "expected": "[4,7,2,9,6,3,1]",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(N)",
      "space": "O(H)"
    },
    "hints": [
      "Recursively swap left and right subtrees.",
      "Target time complexity: O(N)",
      "Target space complexity: O(H)"
    ]
  },
  {
    "id": "lc_46_maximum_depth_of_binary_tree",
    "number": 46,
    "title": "46. Maximum Depth of Binary Tree",
    "cleanTitle": "Maximum Depth of Binary Tree",
    "difficulty": "Easy",
    "category": "Trees",
    "description": "### Problem 46: Maximum Depth of Binary Tree\n\nGiven the input specifications, implement the optimal algorithm achieving **O(N)** time complexity and **O(H)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `root = [3,9,20,null,null,15,7]`\n- **Output:** `3`",
    "examples": [
      {
        "input": "root = [3,9,20,null,null,15,7]",
        "output": "3",
        "explanation": "1 + max(depth(left), depth(right))."
      }
    ],
    "starterCode": {
      "python": "# 46. Maximum Depth of Binary Tree (Easy - Trees)\n# Optimal: O(N) time | O(H) space\n# Hint: 1 + max(depth(left), depth(right)).\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return 3\n\nif __name__ == \"__main__\":\n    print(solution(\"root = [3,9,20,null,null,15,7]\"))\n",
      "c": "/**\n * 46. Maximum Depth of Binary Tree (Easy - Trees)\n * Optimal: O(N) time | O(H) space\n * Hint: 1 + max(depth(left), depth(right)).\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"3\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 46. Maximum Depth of Binary Tree (Easy - Trees)\n * Optimal: O(N) time | O(H) space\n * Hint: 1 + max(depth(left), depth(right)).\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"3\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 46. Maximum Depth of Binary Tree (Easy - Trees)\n * Optimal: O(N) time | O(H) space\n * Hint: 1 + max(depth(left), depth(right)).\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"3\");\n    }\n}\n",
      "javascript": "/**\n * 46. Maximum Depth of Binary Tree (Easy - Trees)\n * Optimal: O(N) time | O(H) space\n * Hint: 1 + max(depth(left), depth(right)).\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return 3;\n}\n"
    },
    "testCases": [
      {
        "input": [
          "root = [3,9,20,null,null,15,7]"
        ],
        "expected": "3",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(N)",
      "space": "O(H)"
    },
    "hints": [
      "1 + max(depth(left), depth(right)).",
      "Target time complexity: O(N)",
      "Target space complexity: O(H)"
    ]
  },
  {
    "id": "lc_47_diameter_of_binary_tree",
    "number": 47,
    "title": "47. Diameter of Binary Tree",
    "cleanTitle": "Diameter of Binary Tree",
    "difficulty": "Easy",
    "category": "Trees",
    "description": "### Problem 47: Diameter of Binary Tree\n\nGiven the input specifications, implement the optimal algorithm achieving **O(N)** time complexity and **O(H)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `root = [1,2,3,4,5]`\n- **Output:** `3`",
    "examples": [
      {
        "input": "root = [1,2,3,4,5]",
        "output": "3",
        "explanation": "Track max leftDepth + rightDepth during post-order traversal."
      }
    ],
    "starterCode": {
      "python": "# 47. Diameter of Binary Tree (Easy - Trees)\n# Optimal: O(N) time | O(H) space\n# Hint: Track max leftDepth + rightDepth during post-order traversal.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return 3\n\nif __name__ == \"__main__\":\n    print(solution(\"root = [1,2,3,4,5]\"))\n",
      "c": "/**\n * 47. Diameter of Binary Tree (Easy - Trees)\n * Optimal: O(N) time | O(H) space\n * Hint: Track max leftDepth + rightDepth during post-order traversal.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"3\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 47. Diameter of Binary Tree (Easy - Trees)\n * Optimal: O(N) time | O(H) space\n * Hint: Track max leftDepth + rightDepth during post-order traversal.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"3\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 47. Diameter of Binary Tree (Easy - Trees)\n * Optimal: O(N) time | O(H) space\n * Hint: Track max leftDepth + rightDepth during post-order traversal.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"3\");\n    }\n}\n",
      "javascript": "/**\n * 47. Diameter of Binary Tree (Easy - Trees)\n * Optimal: O(N) time | O(H) space\n * Hint: Track max leftDepth + rightDepth during post-order traversal.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return 3;\n}\n"
    },
    "testCases": [
      {
        "input": [
          "root = [1,2,3,4,5]"
        ],
        "expected": "3",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(N)",
      "space": "O(H)"
    },
    "hints": [
      "Track max leftDepth + rightDepth during post-order traversal.",
      "Target time complexity: O(N)",
      "Target space complexity: O(H)"
    ]
  },
  {
    "id": "lc_48_balanced_binary_tree",
    "number": 48,
    "title": "48. Balanced Binary Tree",
    "cleanTitle": "Balanced Binary Tree",
    "difficulty": "Easy",
    "category": "Trees",
    "description": "### Problem 48: Balanced Binary Tree\n\nGiven the input specifications, implement the optimal algorithm achieving **O(N)** time complexity and **O(H)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `root = [3,9,20,null,null,15,7]`\n- **Output:** `true`",
    "examples": [
      {
        "input": "root = [3,9,20,null,null,15,7]",
        "output": "true",
        "explanation": "Return -1 on unbalanced subtree height difference > 1."
      }
    ],
    "starterCode": {
      "python": "# 48. Balanced Binary Tree (Easy - Trees)\n# Optimal: O(N) time | O(H) space\n# Hint: Return -1 on unbalanced subtree height difference > 1.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return true\n\nif __name__ == \"__main__\":\n    print(solution(\"root = [3,9,20,null,null,15,7]\"))\n",
      "c": "/**\n * 48. Balanced Binary Tree (Easy - Trees)\n * Optimal: O(N) time | O(H) space\n * Hint: Return -1 on unbalanced subtree height difference > 1.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"true\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 48. Balanced Binary Tree (Easy - Trees)\n * Optimal: O(N) time | O(H) space\n * Hint: Return -1 on unbalanced subtree height difference > 1.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"true\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 48. Balanced Binary Tree (Easy - Trees)\n * Optimal: O(N) time | O(H) space\n * Hint: Return -1 on unbalanced subtree height difference > 1.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"true\");\n    }\n}\n",
      "javascript": "/**\n * 48. Balanced Binary Tree (Easy - Trees)\n * Optimal: O(N) time | O(H) space\n * Hint: Return -1 on unbalanced subtree height difference > 1.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return true;\n}\n"
    },
    "testCases": [
      {
        "input": [
          "root = [3,9,20,null,null,15,7]"
        ],
        "expected": "true",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(N)",
      "space": "O(H)"
    },
    "hints": [
      "Return -1 on unbalanced subtree height difference > 1.",
      "Target time complexity: O(N)",
      "Target space complexity: O(H)"
    ]
  },
  {
    "id": "lc_49_same_tree",
    "number": 49,
    "title": "49. Same Tree",
    "cleanTitle": "Same Tree",
    "difficulty": "Easy",
    "category": "Trees",
    "description": "### Problem 49: Same Tree\n\nGiven the input specifications, implement the optimal algorithm achieving **O(N)** time complexity and **O(H)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `p = [1,2,3], q = [1,2,3]`\n- **Output:** `true`",
    "examples": [
      {
        "input": "p = [1,2,3], q = [1,2,3]",
        "output": "true",
        "explanation": "Check val equality and recurse on left and right."
      }
    ],
    "starterCode": {
      "python": "# 49. Same Tree (Easy - Trees)\n# Optimal: O(N) time | O(H) space\n# Hint: Check val equality and recurse on left and right.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return true\n\nif __name__ == \"__main__\":\n    print(solution(\"p = [1,2,3], q = [1,2,3]\"))\n",
      "c": "/**\n * 49. Same Tree (Easy - Trees)\n * Optimal: O(N) time | O(H) space\n * Hint: Check val equality and recurse on left and right.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"true\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 49. Same Tree (Easy - Trees)\n * Optimal: O(N) time | O(H) space\n * Hint: Check val equality and recurse on left and right.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"true\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 49. Same Tree (Easy - Trees)\n * Optimal: O(N) time | O(H) space\n * Hint: Check val equality and recurse on left and right.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"true\");\n    }\n}\n",
      "javascript": "/**\n * 49. Same Tree (Easy - Trees)\n * Optimal: O(N) time | O(H) space\n * Hint: Check val equality and recurse on left and right.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return true;\n}\n"
    },
    "testCases": [
      {
        "input": [
          "p = [1,2,3], q = [1,2,3]"
        ],
        "expected": "true",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(N)",
      "space": "O(H)"
    },
    "hints": [
      "Check val equality and recurse on left and right.",
      "Target time complexity: O(N)",
      "Target space complexity: O(H)"
    ]
  },
  {
    "id": "lc_50_subtree_of_another_tree",
    "number": 50,
    "title": "50. Subtree of Another Tree",
    "cleanTitle": "Subtree of Another Tree",
    "difficulty": "Easy",
    "category": "Trees",
    "description": "### Problem 50: Subtree of Another Tree\n\nGiven the input specifications, implement the optimal algorithm achieving **O(N*M)** time complexity and **O(H)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `root = [3,4,5,1,2], subRoot = [4,1,2]`\n- **Output:** `true`",
    "examples": [
      {
        "input": "root = [3,4,5,1,2], subRoot = [4,1,2]",
        "output": "true",
        "explanation": "Check isSameTree for every node in root."
      }
    ],
    "starterCode": {
      "python": "# 50. Subtree of Another Tree (Easy - Trees)\n# Optimal: O(N*M) time | O(H) space\n# Hint: Check isSameTree for every node in root.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return true\n\nif __name__ == \"__main__\":\n    print(solution(\"root = [3,4,5,1,2], subRoot = [4,1,2]\"))\n",
      "c": "/**\n * 50. Subtree of Another Tree (Easy - Trees)\n * Optimal: O(N*M) time | O(H) space\n * Hint: Check isSameTree for every node in root.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"true\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 50. Subtree of Another Tree (Easy - Trees)\n * Optimal: O(N*M) time | O(H) space\n * Hint: Check isSameTree for every node in root.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"true\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 50. Subtree of Another Tree (Easy - Trees)\n * Optimal: O(N*M) time | O(H) space\n * Hint: Check isSameTree for every node in root.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"true\");\n    }\n}\n",
      "javascript": "/**\n * 50. Subtree of Another Tree (Easy - Trees)\n * Optimal: O(N*M) time | O(H) space\n * Hint: Check isSameTree for every node in root.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return true;\n}\n"
    },
    "testCases": [
      {
        "input": [
          "root = [3,4,5,1,2], subRoot = [4,1,2]"
        ],
        "expected": "true",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(N*M)",
      "space": "O(H)"
    },
    "hints": [
      "Check isSameTree for every node in root.",
      "Target time complexity: O(N*M)",
      "Target space complexity: O(H)"
    ]
  },
  {
    "id": "lc_51_lowest_common_ancestor_of_a_bst",
    "number": 51,
    "title": "51. Lowest Common Ancestor of a BST",
    "cleanTitle": "Lowest Common Ancestor of a BST",
    "difficulty": "Medium",
    "category": "Trees",
    "description": "### Problem 51: Lowest Common Ancestor of a BST\n\nGiven the input specifications, implement the optimal algorithm achieving **O(H)** time complexity and **O(1)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `root = [6,2,8,0,4,7,9], p = 2, q = 8`\n- **Output:** `6`",
    "examples": [
      {
        "input": "root = [6,2,8,0,4,7,9], p = 2, q = 8",
        "output": "6",
        "explanation": "If both < root go left; both > root go right; else root is LCA."
      }
    ],
    "starterCode": {
      "python": "# 51. Lowest Common Ancestor of a BST (Medium - Trees)\n# Optimal: O(H) time | O(1) space\n# Hint: If both < root go left; both > root go right; else root is LCA.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return 6\n\nif __name__ == \"__main__\":\n    print(solution(\"root = [6,2,8,0,4,7,9], p = 2, q = 8\"))\n",
      "c": "/**\n * 51. Lowest Common Ancestor of a BST (Medium - Trees)\n * Optimal: O(H) time | O(1) space\n * Hint: If both < root go left; both > root go right; else root is LCA.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"6\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 51. Lowest Common Ancestor of a BST (Medium - Trees)\n * Optimal: O(H) time | O(1) space\n * Hint: If both < root go left; both > root go right; else root is LCA.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"6\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 51. Lowest Common Ancestor of a BST (Medium - Trees)\n * Optimal: O(H) time | O(1) space\n * Hint: If both < root go left; both > root go right; else root is LCA.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"6\");\n    }\n}\n",
      "javascript": "/**\n * 51. Lowest Common Ancestor of a BST (Medium - Trees)\n * Optimal: O(H) time | O(1) space\n * Hint: If both < root go left; both > root go right; else root is LCA.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return 6;\n}\n"
    },
    "testCases": [
      {
        "input": [
          "root = [6,2,8,0,4,7,9], p = 2, q = 8"
        ],
        "expected": "6",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(H)",
      "space": "O(1)"
    },
    "hints": [
      "If both < root go left; both > root go right; else root is LCA.",
      "Target time complexity: O(H)",
      "Target space complexity: O(1)"
    ]
  },
  {
    "id": "lc_52_binary_tree_level_order_traversal",
    "number": 52,
    "title": "52. Binary Tree Level Order Traversal",
    "cleanTitle": "Binary Tree Level Order Traversal",
    "difficulty": "Medium",
    "category": "Trees",
    "description": "### Problem 52: Binary Tree Level Order Traversal\n\nGiven the input specifications, implement the optimal algorithm achieving **O(N)** time complexity and **O(W)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `root = [3,9,20,null,null,15,7]`\n- **Output:** `[[3],[9,20],[15,7]]`",
    "examples": [
      {
        "input": "root = [3,9,20,null,null,15,7]",
        "output": "[[3],[9,20],[15,7]]",
        "explanation": "BFS with queue tracking level size."
      }
    ],
    "starterCode": {
      "python": "# 52. Binary Tree Level Order Traversal (Medium - Trees)\n# Optimal: O(N) time | O(W) space\n# Hint: BFS with queue tracking level size.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return [[3],[9,20],[15,7]]\n\nif __name__ == \"__main__\":\n    print(solution(\"root = [3,9,20,null,null,15,7]\"))\n",
      "c": "/**\n * 52. Binary Tree Level Order Traversal (Medium - Trees)\n * Optimal: O(N) time | O(W) space\n * Hint: BFS with queue tracking level size.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"[[3],[9,20],[15,7]]\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 52. Binary Tree Level Order Traversal (Medium - Trees)\n * Optimal: O(N) time | O(W) space\n * Hint: BFS with queue tracking level size.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"[[3],[9,20],[15,7]]\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 52. Binary Tree Level Order Traversal (Medium - Trees)\n * Optimal: O(N) time | O(W) space\n * Hint: BFS with queue tracking level size.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"[[3],[9,20],[15,7]]\");\n    }\n}\n",
      "javascript": "/**\n * 52. Binary Tree Level Order Traversal (Medium - Trees)\n * Optimal: O(N) time | O(W) space\n * Hint: BFS with queue tracking level size.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return [[3],[9,20],[15,7]];\n}\n"
    },
    "testCases": [
      {
        "input": [
          "root = [3,9,20,null,null,15,7]"
        ],
        "expected": "[[3],[9,20],[15,7]]",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(N)",
      "space": "O(W)"
    },
    "hints": [
      "BFS with queue tracking level size.",
      "Target time complexity: O(N)",
      "Target space complexity: O(W)"
    ]
  },
  {
    "id": "lc_53_binary_tree_right_side_view",
    "number": 53,
    "title": "53. Binary Tree Right Side View",
    "cleanTitle": "Binary Tree Right Side View",
    "difficulty": "Medium",
    "category": "Trees",
    "description": "### Problem 53: Binary Tree Right Side View\n\nGiven the input specifications, implement the optimal algorithm achieving **O(N)** time complexity and **O(H)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `root = [1,2,3,null,5,null,4]`\n- **Output:** `[1,3,4]`",
    "examples": [
      {
        "input": "root = [1,2,3,null,5,null,4]",
        "output": "[1,3,4]",
        "explanation": "BFS last node in level or DFS visiting right child first."
      }
    ],
    "starterCode": {
      "python": "# 53. Binary Tree Right Side View (Medium - Trees)\n# Optimal: O(N) time | O(H) space\n# Hint: BFS last node in level or DFS visiting right child first.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return [1,3,4]\n\nif __name__ == \"__main__\":\n    print(solution(\"root = [1,2,3,null,5,null,4]\"))\n",
      "c": "/**\n * 53. Binary Tree Right Side View (Medium - Trees)\n * Optimal: O(N) time | O(H) space\n * Hint: BFS last node in level or DFS visiting right child first.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"[1,3,4]\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 53. Binary Tree Right Side View (Medium - Trees)\n * Optimal: O(N) time | O(H) space\n * Hint: BFS last node in level or DFS visiting right child first.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"[1,3,4]\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 53. Binary Tree Right Side View (Medium - Trees)\n * Optimal: O(N) time | O(H) space\n * Hint: BFS last node in level or DFS visiting right child first.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"[1,3,4]\");\n    }\n}\n",
      "javascript": "/**\n * 53. Binary Tree Right Side View (Medium - Trees)\n * Optimal: O(N) time | O(H) space\n * Hint: BFS last node in level or DFS visiting right child first.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return [1,3,4];\n}\n"
    },
    "testCases": [
      {
        "input": [
          "root = [1,2,3,null,5,null,4]"
        ],
        "expected": "[1,3,4]",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(N)",
      "space": "O(H)"
    },
    "hints": [
      "BFS last node in level or DFS visiting right child first.",
      "Target time complexity: O(N)",
      "Target space complexity: O(H)"
    ]
  },
  {
    "id": "lc_54_count_good_nodes_in_binary_tree",
    "number": 54,
    "title": "54. Count Good Nodes in Binary Tree",
    "cleanTitle": "Count Good Nodes in Binary Tree",
    "difficulty": "Medium",
    "category": "Trees",
    "description": "### Problem 54: Count Good Nodes in Binary Tree\n\nGiven the input specifications, implement the optimal algorithm achieving **O(N)** time complexity and **O(H)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `root = [3,1,4,3,null,1,5]`\n- **Output:** `4`",
    "examples": [
      {
        "input": "root = [3,1,4,3,null,1,5]",
        "output": "4",
        "explanation": "DFS passing max value seen along current path."
      }
    ],
    "starterCode": {
      "python": "# 54. Count Good Nodes in Binary Tree (Medium - Trees)\n# Optimal: O(N) time | O(H) space\n# Hint: DFS passing max value seen along current path.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return 4\n\nif __name__ == \"__main__\":\n    print(solution(\"root = [3,1,4,3,null,1,5]\"))\n",
      "c": "/**\n * 54. Count Good Nodes in Binary Tree (Medium - Trees)\n * Optimal: O(N) time | O(H) space\n * Hint: DFS passing max value seen along current path.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"4\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 54. Count Good Nodes in Binary Tree (Medium - Trees)\n * Optimal: O(N) time | O(H) space\n * Hint: DFS passing max value seen along current path.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"4\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 54. Count Good Nodes in Binary Tree (Medium - Trees)\n * Optimal: O(N) time | O(H) space\n * Hint: DFS passing max value seen along current path.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"4\");\n    }\n}\n",
      "javascript": "/**\n * 54. Count Good Nodes in Binary Tree (Medium - Trees)\n * Optimal: O(N) time | O(H) space\n * Hint: DFS passing max value seen along current path.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return 4;\n}\n"
    },
    "testCases": [
      {
        "input": [
          "root = [3,1,4,3,null,1,5]"
        ],
        "expected": "4",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(N)",
      "space": "O(H)"
    },
    "hints": [
      "DFS passing max value seen along current path.",
      "Target time complexity: O(N)",
      "Target space complexity: O(H)"
    ]
  },
  {
    "id": "lc_55_validate_binary_search_tree",
    "number": 55,
    "title": "55. Validate Binary Search Tree",
    "cleanTitle": "Validate Binary Search Tree",
    "difficulty": "Medium",
    "category": "Trees",
    "description": "### Problem 55: Validate Binary Search Tree\n\nGiven the input specifications, implement the optimal algorithm achieving **O(N)** time complexity and **O(H)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `root = [2,1,3]`\n- **Output:** `true`",
    "examples": [
      {
        "input": "root = [2,1,3]",
        "output": "true",
        "explanation": "Pass (minVal, maxVal) bounds or in-order strictly ascending check."
      }
    ],
    "starterCode": {
      "python": "# 55. Validate Binary Search Tree (Medium - Trees)\n# Optimal: O(N) time | O(H) space\n# Hint: Pass (minVal, maxVal) bounds or in-order strictly ascending check.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return true\n\nif __name__ == \"__main__\":\n    print(solution(\"root = [2,1,3]\"))\n",
      "c": "/**\n * 55. Validate Binary Search Tree (Medium - Trees)\n * Optimal: O(N) time | O(H) space\n * Hint: Pass (minVal, maxVal) bounds or in-order strictly ascending check.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"true\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 55. Validate Binary Search Tree (Medium - Trees)\n * Optimal: O(N) time | O(H) space\n * Hint: Pass (minVal, maxVal) bounds or in-order strictly ascending check.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"true\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 55. Validate Binary Search Tree (Medium - Trees)\n * Optimal: O(N) time | O(H) space\n * Hint: Pass (minVal, maxVal) bounds or in-order strictly ascending check.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"true\");\n    }\n}\n",
      "javascript": "/**\n * 55. Validate Binary Search Tree (Medium - Trees)\n * Optimal: O(N) time | O(H) space\n * Hint: Pass (minVal, maxVal) bounds or in-order strictly ascending check.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return true;\n}\n"
    },
    "testCases": [
      {
        "input": [
          "root = [2,1,3]"
        ],
        "expected": "true",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(N)",
      "space": "O(H)"
    },
    "hints": [
      "Pass (minVal, maxVal) bounds or in-order strictly ascending check.",
      "Target time complexity: O(N)",
      "Target space complexity: O(H)"
    ]
  },
  {
    "id": "lc_56_kth_smallest_element_in_a_bst",
    "number": 56,
    "title": "56. Kth Smallest Element in a BST",
    "cleanTitle": "Kth Smallest Element in a BST",
    "difficulty": "Medium",
    "category": "Trees",
    "description": "### Problem 56: Kth Smallest Element in a BST\n\nGiven the input specifications, implement the optimal algorithm achieving **O(H + K)** time complexity and **O(H)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `root = [3,1,4,null,2], k = 1`\n- **Output:** `1`",
    "examples": [
      {
        "input": "root = [3,1,4,null,2], k = 1",
        "output": "1",
        "explanation": "In-order traversal stops after Kth visited node."
      }
    ],
    "starterCode": {
      "python": "# 56. Kth Smallest Element in a BST (Medium - Trees)\n# Optimal: O(H + K) time | O(H) space\n# Hint: In-order traversal stops after Kth visited node.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return 1\n\nif __name__ == \"__main__\":\n    print(solution(\"root = [3,1,4,null,2], k = 1\"))\n",
      "c": "/**\n * 56. Kth Smallest Element in a BST (Medium - Trees)\n * Optimal: O(H + K) time | O(H) space\n * Hint: In-order traversal stops after Kth visited node.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"1\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 56. Kth Smallest Element in a BST (Medium - Trees)\n * Optimal: O(H + K) time | O(H) space\n * Hint: In-order traversal stops after Kth visited node.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"1\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 56. Kth Smallest Element in a BST (Medium - Trees)\n * Optimal: O(H + K) time | O(H) space\n * Hint: In-order traversal stops after Kth visited node.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"1\");\n    }\n}\n",
      "javascript": "/**\n * 56. Kth Smallest Element in a BST (Medium - Trees)\n * Optimal: O(H + K) time | O(H) space\n * Hint: In-order traversal stops after Kth visited node.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return 1;\n}\n"
    },
    "testCases": [
      {
        "input": [
          "root = [3,1,4,null,2], k = 1"
        ],
        "expected": "1",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(H + K)",
      "space": "O(H)"
    },
    "hints": [
      "In-order traversal stops after Kth visited node.",
      "Target time complexity: O(H + K)",
      "Target space complexity: O(H)"
    ]
  },
  {
    "id": "lc_57_construct_binary_tree_from_preorder_and_inorder_traversal",
    "number": 57,
    "title": "57. Construct Binary Tree from Preorder and Inorder Traversal",
    "cleanTitle": "Construct Binary Tree from Preorder and Inorder Traversal",
    "difficulty": "Medium",
    "category": "Trees",
    "description": "### Problem 57: Construct Binary Tree from Preorder and Inorder Traversal\n\nGiven the input specifications, implement the optimal algorithm achieving **O(N)** time complexity and **O(N)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]`\n- **Output:** `[3,9,20]`",
    "examples": [
      {
        "input": "preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]",
        "output": "[3,9,20]",
        "explanation": "First element of preorder is root; split inorder using map."
      }
    ],
    "starterCode": {
      "python": "# 57. Construct Binary Tree from Preorder and Inorder Traversal (Medium - Trees)\n# Optimal: O(N) time | O(N) space\n# Hint: First element of preorder is root; split inorder using map.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return [3,9,20]\n\nif __name__ == \"__main__\":\n    print(solution(\"preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]\"))\n",
      "c": "/**\n * 57. Construct Binary Tree from Preorder and Inorder Traversal (Medium - Trees)\n * Optimal: O(N) time | O(N) space\n * Hint: First element of preorder is root; split inorder using map.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"[3,9,20]\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 57. Construct Binary Tree from Preorder and Inorder Traversal (Medium - Trees)\n * Optimal: O(N) time | O(N) space\n * Hint: First element of preorder is root; split inorder using map.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"[3,9,20]\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 57. Construct Binary Tree from Preorder and Inorder Traversal (Medium - Trees)\n * Optimal: O(N) time | O(N) space\n * Hint: First element of preorder is root; split inorder using map.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"[3,9,20]\");\n    }\n}\n",
      "javascript": "/**\n * 57. Construct Binary Tree from Preorder and Inorder Traversal (Medium - Trees)\n * Optimal: O(N) time | O(N) space\n * Hint: First element of preorder is root; split inorder using map.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return [3,9,20];\n}\n"
    },
    "testCases": [
      {
        "input": [
          "preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]"
        ],
        "expected": "[3,9,20]",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(N)",
      "space": "O(N)"
    },
    "hints": [
      "First element of preorder is root; split inorder using map.",
      "Target time complexity: O(N)",
      "Target space complexity: O(N)"
    ]
  },
  {
    "id": "lc_58_binary_tree_maximum_path_sum",
    "number": 58,
    "title": "58. Binary Tree Maximum Path Sum",
    "cleanTitle": "Binary Tree Maximum Path Sum",
    "difficulty": "Hard",
    "category": "Trees",
    "description": "### Problem 58: Binary Tree Maximum Path Sum\n\nGiven the input specifications, implement the optimal algorithm achieving **O(N)** time complexity and **O(H)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `root = [-10,9,20,null,null,15,7]`\n- **Output:** `42`",
    "examples": [
      {
        "input": "root = [-10,9,20,null,null,15,7]",
        "output": "42",
        "explanation": "Max gain of node = val + max(0, left) + max(0, right)."
      }
    ],
    "starterCode": {
      "python": "# 58. Binary Tree Maximum Path Sum (Hard - Trees)\n# Optimal: O(N) time | O(H) space\n# Hint: Max gain of node = val + max(0, left) + max(0, right).\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return 42\n\nif __name__ == \"__main__\":\n    print(solution(\"root = [-10,9,20,null,null,15,7]\"))\n",
      "c": "/**\n * 58. Binary Tree Maximum Path Sum (Hard - Trees)\n * Optimal: O(N) time | O(H) space\n * Hint: Max gain of node = val + max(0, left) + max(0, right).\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"42\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 58. Binary Tree Maximum Path Sum (Hard - Trees)\n * Optimal: O(N) time | O(H) space\n * Hint: Max gain of node = val + max(0, left) + max(0, right).\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"42\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 58. Binary Tree Maximum Path Sum (Hard - Trees)\n * Optimal: O(N) time | O(H) space\n * Hint: Max gain of node = val + max(0, left) + max(0, right).\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"42\");\n    }\n}\n",
      "javascript": "/**\n * 58. Binary Tree Maximum Path Sum (Hard - Trees)\n * Optimal: O(N) time | O(H) space\n * Hint: Max gain of node = val + max(0, left) + max(0, right).\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return 42;\n}\n"
    },
    "testCases": [
      {
        "input": [
          "root = [-10,9,20,null,null,15,7]"
        ],
        "expected": "42",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(N)",
      "space": "O(H)"
    },
    "hints": [
      "Max gain of node = val + max(0, left) + max(0, right).",
      "Target time complexity: O(N)",
      "Target space complexity: O(H)"
    ]
  },
  {
    "id": "lc_59_serialize_and_deserialize_binary_tree",
    "number": 59,
    "title": "59. Serialize and Deserialize Binary Tree",
    "cleanTitle": "Serialize and Deserialize Binary Tree",
    "difficulty": "Hard",
    "category": "Trees",
    "description": "### Problem 59: Serialize and Deserialize Binary Tree\n\nGiven the input specifications, implement the optimal algorithm achieving **O(N)** time complexity and **O(N)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `root = [1,2,3,null,null,4,5]`\n- **Output:** `decoded tree`",
    "examples": [
      {
        "input": "root = [1,2,3,null,null,4,5]",
        "output": "decoded tree",
        "explanation": "Preorder with null delimiters or level order BFS."
      }
    ],
    "starterCode": {
      "python": "# 59. Serialize and Deserialize Binary Tree (Hard - Trees)\n# Optimal: O(N) time | O(N) space\n# Hint: Preorder with null delimiters or level order BFS.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return decoded tree\n\nif __name__ == \"__main__\":\n    print(solution(\"root = [1,2,3,null,null,4,5]\"))\n",
      "c": "/**\n * 59. Serialize and Deserialize Binary Tree (Hard - Trees)\n * Optimal: O(N) time | O(N) space\n * Hint: Preorder with null delimiters or level order BFS.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"decoded tree\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 59. Serialize and Deserialize Binary Tree (Hard - Trees)\n * Optimal: O(N) time | O(N) space\n * Hint: Preorder with null delimiters or level order BFS.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"decoded tree\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 59. Serialize and Deserialize Binary Tree (Hard - Trees)\n * Optimal: O(N) time | O(N) space\n * Hint: Preorder with null delimiters or level order BFS.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"decoded tree\");\n    }\n}\n",
      "javascript": "/**\n * 59. Serialize and Deserialize Binary Tree (Hard - Trees)\n * Optimal: O(N) time | O(N) space\n * Hint: Preorder with null delimiters or level order BFS.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return \"decoded tree\";\n}\n"
    },
    "testCases": [
      {
        "input": [
          "root = [1,2,3,null,null,4,5]"
        ],
        "expected": "decoded tree",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(N)",
      "space": "O(N)"
    },
    "hints": [
      "Preorder with null delimiters or level order BFS.",
      "Target time complexity: O(N)",
      "Target space complexity: O(N)"
    ]
  },
  {
    "id": "lc_60_implement_trie_prefix_tree",
    "number": 60,
    "title": "60. Implement Trie Prefix Tree",
    "cleanTitle": "Implement Trie Prefix Tree",
    "difficulty": "Medium",
    "category": "Tries",
    "description": "### Problem 60: Implement Trie Prefix Tree\n\nGiven the input specifications, implement the optimal algorithm achieving **O(L)** time complexity and **O(N*L)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `insert, search, startsWith`\n- **Output:** `O(L) ops`",
    "examples": [
      {
        "input": "insert, search, startsWith",
        "output": "O(L) ops",
        "explanation": "Tree node with 26-element children array and isEnd flag."
      }
    ],
    "starterCode": {
      "python": "# 60. Implement Trie Prefix Tree (Medium - Tries)\n# Optimal: O(L) time | O(N*L) space\n# Hint: Tree node with 26-element children array and isEnd flag.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return O(L) ops\n\nif __name__ == \"__main__\":\n    print(solution(\"insert, search, startsWith\"))\n",
      "c": "/**\n * 60. Implement Trie Prefix Tree (Medium - Tries)\n * Optimal: O(L) time | O(N*L) space\n * Hint: Tree node with 26-element children array and isEnd flag.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"O(L) ops\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 60. Implement Trie Prefix Tree (Medium - Tries)\n * Optimal: O(L) time | O(N*L) space\n * Hint: Tree node with 26-element children array and isEnd flag.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"O(L) ops\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 60. Implement Trie Prefix Tree (Medium - Tries)\n * Optimal: O(L) time | O(N*L) space\n * Hint: Tree node with 26-element children array and isEnd flag.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"O(L) ops\");\n    }\n}\n",
      "javascript": "/**\n * 60. Implement Trie Prefix Tree (Medium - Tries)\n * Optimal: O(L) time | O(N*L) space\n * Hint: Tree node with 26-element children array and isEnd flag.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return \"O(L) ops\";\n}\n"
    },
    "testCases": [
      {
        "input": [
          "insert, search, startsWith"
        ],
        "expected": "O(L) ops",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(L)",
      "space": "O(N*L)"
    },
    "hints": [
      "Tree node with 26-element children array and isEnd flag.",
      "Target time complexity: O(L)",
      "Target space complexity: O(N*L)"
    ]
  },
  {
    "id": "lc_61_design_add_and_search_words_data_structure",
    "number": 61,
    "title": "61. Design Add and Search Words Data Structure",
    "cleanTitle": "Design Add and Search Words Data Structure",
    "difficulty": "Medium",
    "category": "Tries",
    "description": "### Problem 61: Design Add and Search Words Data Structure\n\nGiven the input specifications, implement the optimal algorithm achieving **O(L)** time complexity and **O(N*L)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `addWord(\"bad\"), search(\".ad\")`\n- **Output:** `true`",
    "examples": [
      {
        "input": "addWord(\"bad\"), search(\".ad\")",
        "output": "true",
        "explanation": "DFS branch on wildcard dot matching all children."
      }
    ],
    "starterCode": {
      "python": "# 61. Design Add and Search Words Data Structure (Medium - Tries)\n# Optimal: O(L) time | O(N*L) space\n# Hint: DFS branch on wildcard dot matching all children.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return true\n\nif __name__ == \"__main__\":\n    print(solution(\"addWord(\"bad\"), search(\".ad\")\"))\n",
      "c": "/**\n * 61. Design Add and Search Words Data Structure (Medium - Tries)\n * Optimal: O(L) time | O(N*L) space\n * Hint: DFS branch on wildcard dot matching all children.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"true\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 61. Design Add and Search Words Data Structure (Medium - Tries)\n * Optimal: O(L) time | O(N*L) space\n * Hint: DFS branch on wildcard dot matching all children.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"true\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 61. Design Add and Search Words Data Structure (Medium - Tries)\n * Optimal: O(L) time | O(N*L) space\n * Hint: DFS branch on wildcard dot matching all children.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"true\");\n    }\n}\n",
      "javascript": "/**\n * 61. Design Add and Search Words Data Structure (Medium - Tries)\n * Optimal: O(L) time | O(N*L) space\n * Hint: DFS branch on wildcard dot matching all children.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return true;\n}\n"
    },
    "testCases": [
      {
        "input": [
          "addWord(\"bad\"), search(\".ad\")"
        ],
        "expected": "true",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(L)",
      "space": "O(N*L)"
    },
    "hints": [
      "DFS branch on wildcard dot matching all children.",
      "Target time complexity: O(L)",
      "Target space complexity: O(N*L)"
    ]
  },
  {
    "id": "lc_62_word_search_ii",
    "number": 62,
    "title": "62. Word Search II",
    "cleanTitle": "Word Search II",
    "difficulty": "Hard",
    "category": "Tries",
    "description": "### Problem 62: Word Search II\n\nGiven the input specifications, implement the optimal algorithm achieving **O(M*N * 4^L)** time complexity and **O(W*L)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `board = [[\"o\",\"a\"],[\"e\",\"t\"]], words = [\"eat\"]`\n- **Output:** `[\"eat\"]`",
    "examples": [
      {
        "input": "board = [[\"o\",\"a\"],[\"e\",\"t\"]], words = [\"eat\"]",
        "output": "[\"eat\"]",
        "explanation": "Build Trie of words, DFS backtrack on board."
      }
    ],
    "starterCode": {
      "python": "# 62. Word Search II (Hard - Tries)\n# Optimal: O(M*N * 4^L) time | O(W*L) space\n# Hint: Build Trie of words, DFS backtrack on board.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return [\"eat\"]\n\nif __name__ == \"__main__\":\n    print(solution(\"board = [[\"o\",\"a\"],[\"e\",\"t\"]], words = [\"eat\"]\"))\n",
      "c": "/**\n * 62. Word Search II (Hard - Tries)\n * Optimal: O(M*N * 4^L) time | O(W*L) space\n * Hint: Build Trie of words, DFS backtrack on board.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"[\"eat\"]\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 62. Word Search II (Hard - Tries)\n * Optimal: O(M*N * 4^L) time | O(W*L) space\n * Hint: Build Trie of words, DFS backtrack on board.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"[\"eat\"]\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 62. Word Search II (Hard - Tries)\n * Optimal: O(M*N * 4^L) time | O(W*L) space\n * Hint: Build Trie of words, DFS backtrack on board.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"[\"eat\"]\");\n    }\n}\n",
      "javascript": "/**\n * 62. Word Search II (Hard - Tries)\n * Optimal: O(M*N * 4^L) time | O(W*L) space\n * Hint: Build Trie of words, DFS backtrack on board.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return [\"eat\"];\n}\n"
    },
    "testCases": [
      {
        "input": [
          "board = [[\"o\",\"a\"],[\"e\",\"t\"]], words = [\"eat\"]"
        ],
        "expected": "[\"eat\"]",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(M*N * 4^L)",
      "space": "O(W*L)"
    },
    "hints": [
      "Build Trie of words, DFS backtrack on board.",
      "Target time complexity: O(M*N * 4^L)",
      "Target space complexity: O(W*L)"
    ]
  },
  {
    "id": "lc_63_kth_largest_element_in_a_stream",
    "number": 63,
    "title": "63. Kth Largest Element in a Stream",
    "cleanTitle": "Kth Largest Element in a Stream",
    "difficulty": "Easy",
    "category": "Heap & Priority Queue",
    "description": "### Problem 63: Kth Largest Element in a Stream\n\nGiven the input specifications, implement the optimal algorithm achieving **O(N log K)** time complexity and **O(K)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `k = 3, nums = [4,5,8,2]`\n- **Output:** `4`",
    "examples": [
      {
        "input": "k = 3, nums = [4,5,8,2]",
        "output": "4",
        "explanation": "Maintain Min-Heap of size K."
      }
    ],
    "starterCode": {
      "python": "# 63. Kth Largest Element in a Stream (Easy - Heap & Priority Queue)\n# Optimal: O(N log K) time | O(K) space\n# Hint: Maintain Min-Heap of size K.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return 4\n\nif __name__ == \"__main__\":\n    print(solution(\"k = 3, nums = [4,5,8,2]\"))\n",
      "c": "/**\n * 63. Kth Largest Element in a Stream (Easy - Heap & Priority Queue)\n * Optimal: O(N log K) time | O(K) space\n * Hint: Maintain Min-Heap of size K.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"4\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 63. Kth Largest Element in a Stream (Easy - Heap & Priority Queue)\n * Optimal: O(N log K) time | O(K) space\n * Hint: Maintain Min-Heap of size K.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"4\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 63. Kth Largest Element in a Stream (Easy - Heap & Priority Queue)\n * Optimal: O(N log K) time | O(K) space\n * Hint: Maintain Min-Heap of size K.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"4\");\n    }\n}\n",
      "javascript": "/**\n * 63. Kth Largest Element in a Stream (Easy - Heap & Priority Queue)\n * Optimal: O(N log K) time | O(K) space\n * Hint: Maintain Min-Heap of size K.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return 4;\n}\n"
    },
    "testCases": [
      {
        "input": [
          "k = 3, nums = [4,5,8,2]"
        ],
        "expected": "4",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(N log K)",
      "space": "O(K)"
    },
    "hints": [
      "Maintain Min-Heap of size K.",
      "Target time complexity: O(N log K)",
      "Target space complexity: O(K)"
    ]
  },
  {
    "id": "lc_64_last_stone_weight",
    "number": 64,
    "title": "64. Last Stone Weight",
    "cleanTitle": "Last Stone Weight",
    "difficulty": "Easy",
    "category": "Heap & Priority Queue",
    "description": "### Problem 64: Last Stone Weight\n\nGiven the input specifications, implement the optimal algorithm achieving **O(N log N)** time complexity and **O(N)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `stones = [2,7,4,1,8,1]`\n- **Output:** `1`",
    "examples": [
      {
        "input": "stones = [2,7,4,1,8,1]",
        "output": "1",
        "explanation": "Max-Heap pop two heaviest stones, push difference."
      }
    ],
    "starterCode": {
      "python": "# 64. Last Stone Weight (Easy - Heap & Priority Queue)\n# Optimal: O(N log N) time | O(N) space\n# Hint: Max-Heap pop two heaviest stones, push difference.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return 1\n\nif __name__ == \"__main__\":\n    print(solution(\"stones = [2,7,4,1,8,1]\"))\n",
      "c": "/**\n * 64. Last Stone Weight (Easy - Heap & Priority Queue)\n * Optimal: O(N log N) time | O(N) space\n * Hint: Max-Heap pop two heaviest stones, push difference.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"1\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 64. Last Stone Weight (Easy - Heap & Priority Queue)\n * Optimal: O(N log N) time | O(N) space\n * Hint: Max-Heap pop two heaviest stones, push difference.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"1\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 64. Last Stone Weight (Easy - Heap & Priority Queue)\n * Optimal: O(N log N) time | O(N) space\n * Hint: Max-Heap pop two heaviest stones, push difference.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"1\");\n    }\n}\n",
      "javascript": "/**\n * 64. Last Stone Weight (Easy - Heap & Priority Queue)\n * Optimal: O(N log N) time | O(N) space\n * Hint: Max-Heap pop two heaviest stones, push difference.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return 1;\n}\n"
    },
    "testCases": [
      {
        "input": [
          "stones = [2,7,4,1,8,1]"
        ],
        "expected": "1",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N)",
      "space": "O(N)"
    },
    "hints": [
      "Max-Heap pop two heaviest stones, push difference.",
      "Target time complexity: O(N log N)",
      "Target space complexity: O(N)"
    ]
  },
  {
    "id": "lc_65_k_closest_points_to_origin",
    "number": 65,
    "title": "65. K Closest Points to Origin",
    "cleanTitle": "K Closest Points to Origin",
    "difficulty": "Medium",
    "category": "Heap & Priority Queue",
    "description": "### Problem 65: K Closest Points to Origin\n\nGiven the input specifications, implement the optimal algorithm achieving **O(N log K)** time complexity and **O(K)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `points = [[1,3],[-2,2]], k = 1`\n- **Output:** `[[-2,2]]`",
    "examples": [
      {
        "input": "points = [[1,3],[-2,2]], k = 1",
        "output": "[[-2,2]]",
        "explanation": "Max-Heap of size K storing squared Euclidean distance."
      }
    ],
    "starterCode": {
      "python": "# 65. K Closest Points to Origin (Medium - Heap & Priority Queue)\n# Optimal: O(N log K) time | O(K) space\n# Hint: Max-Heap of size K storing squared Euclidean distance.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return [[-2,2]]\n\nif __name__ == \"__main__\":\n    print(solution(\"points = [[1,3],[-2,2]], k = 1\"))\n",
      "c": "/**\n * 65. K Closest Points to Origin (Medium - Heap & Priority Queue)\n * Optimal: O(N log K) time | O(K) space\n * Hint: Max-Heap of size K storing squared Euclidean distance.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"[[-2,2]]\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 65. K Closest Points to Origin (Medium - Heap & Priority Queue)\n * Optimal: O(N log K) time | O(K) space\n * Hint: Max-Heap of size K storing squared Euclidean distance.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"[[-2,2]]\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 65. K Closest Points to Origin (Medium - Heap & Priority Queue)\n * Optimal: O(N log K) time | O(K) space\n * Hint: Max-Heap of size K storing squared Euclidean distance.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"[[-2,2]]\");\n    }\n}\n",
      "javascript": "/**\n * 65. K Closest Points to Origin (Medium - Heap & Priority Queue)\n * Optimal: O(N log K) time | O(K) space\n * Hint: Max-Heap of size K storing squared Euclidean distance.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return [[-2,2]];\n}\n"
    },
    "testCases": [
      {
        "input": [
          "points = [[1,3],[-2,2]], k = 1"
        ],
        "expected": "[[-2,2]]",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(N log K)",
      "space": "O(K)"
    },
    "hints": [
      "Max-Heap of size K storing squared Euclidean distance.",
      "Target time complexity: O(N log K)",
      "Target space complexity: O(K)"
    ]
  },
  {
    "id": "lc_66_kth_largest_element_in_an_array",
    "number": 66,
    "title": "66. Kth Largest Element in an Array",
    "cleanTitle": "Kth Largest Element in an Array",
    "difficulty": "Medium",
    "category": "Heap & Priority Queue",
    "description": "### Problem 66: Kth Largest Element in an Array\n\nGiven the input specifications, implement the optimal algorithm achieving **O(N)** time complexity and **O(1)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `nums = [3,2,1,5,6,4], k = 2`\n- **Output:** `5`",
    "examples": [
      {
        "input": "nums = [3,2,1,5,6,4], k = 2",
        "output": "5",
        "explanation": "QuickSelect or Min-Heap of size K."
      }
    ],
    "starterCode": {
      "python": "# 66. Kth Largest Element in an Array (Medium - Heap & Priority Queue)\n# Optimal: O(N) time | O(1) space\n# Hint: QuickSelect or Min-Heap of size K.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return 5\n\nif __name__ == \"__main__\":\n    print(solution(\"nums = [3,2,1,5,6,4], k = 2\"))\n",
      "c": "/**\n * 66. Kth Largest Element in an Array (Medium - Heap & Priority Queue)\n * Optimal: O(N) time | O(1) space\n * Hint: QuickSelect or Min-Heap of size K.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"5\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 66. Kth Largest Element in an Array (Medium - Heap & Priority Queue)\n * Optimal: O(N) time | O(1) space\n * Hint: QuickSelect or Min-Heap of size K.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"5\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 66. Kth Largest Element in an Array (Medium - Heap & Priority Queue)\n * Optimal: O(N) time | O(1) space\n * Hint: QuickSelect or Min-Heap of size K.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"5\");\n    }\n}\n",
      "javascript": "/**\n * 66. Kth Largest Element in an Array (Medium - Heap & Priority Queue)\n * Optimal: O(N) time | O(1) space\n * Hint: QuickSelect or Min-Heap of size K.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return 5;\n}\n"
    },
    "testCases": [
      {
        "input": [
          "nums = [3,2,1,5,6,4], k = 2"
        ],
        "expected": "5",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(N)",
      "space": "O(1)"
    },
    "hints": [
      "QuickSelect or Min-Heap of size K.",
      "Target time complexity: O(N)",
      "Target space complexity: O(1)"
    ]
  },
  {
    "id": "lc_67_task_scheduler",
    "number": 67,
    "title": "67. Task Scheduler",
    "cleanTitle": "Task Scheduler",
    "difficulty": "Medium",
    "category": "Heap & Priority Queue",
    "description": "### Problem 67: Task Scheduler\n\nGiven the input specifications, implement the optimal algorithm achieving **O(N)** time complexity and **O(1)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `tasks = [\"A\",\"A\",\"A\",\"B\",\"B\",\"B\"], n = 2`\n- **Output:** `8`",
    "examples": [
      {
        "input": "tasks = [\"A\",\"A\",\"A\",\"B\",\"B\",\"B\"], n = 2",
        "output": "8",
        "explanation": "Formula: (maxFreq - 1)*(n + 1) + countMax."
      }
    ],
    "starterCode": {
      "python": "# 67. Task Scheduler (Medium - Heap & Priority Queue)\n# Optimal: O(N) time | O(1) space\n# Hint: Formula: (maxFreq - 1)*(n + 1) + countMax.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return 8\n\nif __name__ == \"__main__\":\n    print(solution(\"tasks = [\"A\",\"A\",\"A\",\"B\",\"B\",\"B\"], n = 2\"))\n",
      "c": "/**\n * 67. Task Scheduler (Medium - Heap & Priority Queue)\n * Optimal: O(N) time | O(1) space\n * Hint: Formula: (maxFreq - 1)*(n + 1) + countMax.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"8\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 67. Task Scheduler (Medium - Heap & Priority Queue)\n * Optimal: O(N) time | O(1) space\n * Hint: Formula: (maxFreq - 1)*(n + 1) + countMax.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"8\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 67. Task Scheduler (Medium - Heap & Priority Queue)\n * Optimal: O(N) time | O(1) space\n * Hint: Formula: (maxFreq - 1)*(n + 1) + countMax.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"8\");\n    }\n}\n",
      "javascript": "/**\n * 67. Task Scheduler (Medium - Heap & Priority Queue)\n * Optimal: O(N) time | O(1) space\n * Hint: Formula: (maxFreq - 1)*(n + 1) + countMax.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return 8;\n}\n"
    },
    "testCases": [
      {
        "input": [
          "tasks = [\"A\",\"A\",\"A\",\"B\",\"B\",\"B\"], n = 2"
        ],
        "expected": "8",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(N)",
      "space": "O(1)"
    },
    "hints": [
      "Formula: (maxFreq - 1)*(n + 1) + countMax.",
      "Target time complexity: O(N)",
      "Target space complexity: O(1)"
    ]
  },
  {
    "id": "lc_68_design_twitter",
    "number": 68,
    "title": "68. Design Twitter",
    "cleanTitle": "Design Twitter",
    "difficulty": "Medium",
    "category": "Heap & Priority Queue",
    "description": "### Problem 68: Design Twitter\n\nGiven the input specifications, implement the optimal algorithm achieving **O(K log F)** time complexity and **O(U + T)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `postTweet, getNewsFeed, follow, unfollow`\n- **Output:** `10 recent`",
    "examples": [
      {
        "input": "postTweet, getNewsFeed, follow, unfollow",
        "output": "10 recent",
        "explanation": "K-way merge on recent tweets using Min/Max Heap."
      }
    ],
    "starterCode": {
      "python": "# 68. Design Twitter (Medium - Heap & Priority Queue)\n# Optimal: O(K log F) time | O(U + T) space\n# Hint: K-way merge on recent tweets using Min/Max Heap.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return 10 recent\n\nif __name__ == \"__main__\":\n    print(solution(\"postTweet, getNewsFeed, follow, unfollow\"))\n",
      "c": "/**\n * 68. Design Twitter (Medium - Heap & Priority Queue)\n * Optimal: O(K log F) time | O(U + T) space\n * Hint: K-way merge on recent tweets using Min/Max Heap.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"10 recent\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 68. Design Twitter (Medium - Heap & Priority Queue)\n * Optimal: O(K log F) time | O(U + T) space\n * Hint: K-way merge on recent tweets using Min/Max Heap.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"10 recent\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 68. Design Twitter (Medium - Heap & Priority Queue)\n * Optimal: O(K log F) time | O(U + T) space\n * Hint: K-way merge on recent tweets using Min/Max Heap.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"10 recent\");\n    }\n}\n",
      "javascript": "/**\n * 68. Design Twitter (Medium - Heap & Priority Queue)\n * Optimal: O(K log F) time | O(U + T) space\n * Hint: K-way merge on recent tweets using Min/Max Heap.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return \"10 recent\";\n}\n"
    },
    "testCases": [
      {
        "input": [
          "postTweet, getNewsFeed, follow, unfollow"
        ],
        "expected": "10 recent",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(K log F)",
      "space": "O(U + T)"
    },
    "hints": [
      "K-way merge on recent tweets using Min/Max Heap.",
      "Target time complexity: O(K log F)",
      "Target space complexity: O(U + T)"
    ]
  },
  {
    "id": "lc_69_find_median_from_data_stream",
    "number": 69,
    "title": "69. Find Median from Data Stream",
    "cleanTitle": "Find Median from Data Stream",
    "difficulty": "Hard",
    "category": "Heap & Priority Queue",
    "description": "### Problem 69: Find Median from Data Stream\n\nGiven the input specifications, implement the optimal algorithm achieving **O(log N)** time complexity and **O(N)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `addNum, findMedian`\n- **Output:** `O(log N) add`",
    "examples": [
      {
        "input": "addNum, findMedian",
        "output": "O(log N) add",
        "explanation": "Two heaps: Max-Heap for lower half, Min-Heap for upper half."
      }
    ],
    "starterCode": {
      "python": "# 69. Find Median from Data Stream (Hard - Heap & Priority Queue)\n# Optimal: O(log N) time | O(N) space\n# Hint: Two heaps: Max-Heap for lower half, Min-Heap for upper half.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return O(log N) add\n\nif __name__ == \"__main__\":\n    print(solution(\"addNum, findMedian\"))\n",
      "c": "/**\n * 69. Find Median from Data Stream (Hard - Heap & Priority Queue)\n * Optimal: O(log N) time | O(N) space\n * Hint: Two heaps: Max-Heap for lower half, Min-Heap for upper half.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"O(log N) add\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 69. Find Median from Data Stream (Hard - Heap & Priority Queue)\n * Optimal: O(log N) time | O(N) space\n * Hint: Two heaps: Max-Heap for lower half, Min-Heap for upper half.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"O(log N) add\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 69. Find Median from Data Stream (Hard - Heap & Priority Queue)\n * Optimal: O(log N) time | O(N) space\n * Hint: Two heaps: Max-Heap for lower half, Min-Heap for upper half.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"O(log N) add\");\n    }\n}\n",
      "javascript": "/**\n * 69. Find Median from Data Stream (Hard - Heap & Priority Queue)\n * Optimal: O(log N) time | O(N) space\n * Hint: Two heaps: Max-Heap for lower half, Min-Heap for upper half.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return \"O(log N) add\";\n}\n"
    },
    "testCases": [
      {
        "input": [
          "addNum, findMedian"
        ],
        "expected": "O(log N) add",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(log N)",
      "space": "O(N)"
    },
    "hints": [
      "Two heaps: Max-Heap for lower half, Min-Heap for upper half.",
      "Target time complexity: O(log N)",
      "Target space complexity: O(N)"
    ]
  },
  {
    "id": "lc_70_subsets",
    "number": 70,
    "title": "70. Subsets",
    "cleanTitle": "Subsets",
    "difficulty": "Medium",
    "category": "Backtracking",
    "description": "### Problem 70: Subsets\n\nGiven the input specifications, implement the optimal algorithm achieving **O(2^N)** time complexity and **O(N)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `nums = [1,2,3]`\n- **Output:** `[[],[1],[2],[3],[1,2],[1,3],[2,3],[1,2,3]]`",
    "examples": [
      {
        "input": "nums = [1,2,3]",
        "output": "[[],[1],[2],[3],[1,2],[1,3],[2,3],[1,2,3]]",
        "explanation": "Include or exclude current element at each depth."
      }
    ],
    "starterCode": {
      "python": "# 70. Subsets (Medium - Backtracking)\n# Optimal: O(2^N) time | O(N) space\n# Hint: Include or exclude current element at each depth.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return [[],[1],[2],[3],[1,2],[1,3],[2,3],[1,2,3]]\n\nif __name__ == \"__main__\":\n    print(solution(\"nums = [1,2,3]\"))\n",
      "c": "/**\n * 70. Subsets (Medium - Backtracking)\n * Optimal: O(2^N) time | O(N) space\n * Hint: Include or exclude current element at each depth.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"[[],[1],[2],[3],[1,2],[1,3],[2,3],[1,2,3]]\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 70. Subsets (Medium - Backtracking)\n * Optimal: O(2^N) time | O(N) space\n * Hint: Include or exclude current element at each depth.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"[[],[1],[2],[3],[1,2],[1,3],[2,3],[1,2,3]]\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 70. Subsets (Medium - Backtracking)\n * Optimal: O(2^N) time | O(N) space\n * Hint: Include or exclude current element at each depth.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"[[],[1],[2],[3],[1,2],[1,3],[2,3],[1,2,3]]\");\n    }\n}\n",
      "javascript": "/**\n * 70. Subsets (Medium - Backtracking)\n * Optimal: O(2^N) time | O(N) space\n * Hint: Include or exclude current element at each depth.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return [[],[1],[2],[3],[1,2],[1,3],[2,3],[1,2,3]];\n}\n"
    },
    "testCases": [
      {
        "input": [
          "nums = [1,2,3]"
        ],
        "expected": "[[],[1],[2],[3],[1,2],[1,3],[2,3],[1,2,3]]",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(2^N)",
      "space": "O(N)"
    },
    "hints": [
      "Include or exclude current element at each depth.",
      "Target time complexity: O(2^N)",
      "Target space complexity: O(N)"
    ]
  },
  {
    "id": "lc_71_combination_sum",
    "number": 71,
    "title": "71. Combination Sum",
    "cleanTitle": "Combination Sum",
    "difficulty": "Medium",
    "category": "Backtracking",
    "description": "### Problem 71: Combination Sum\n\nGiven the input specifications, implement the optimal algorithm achieving **O(2^(target/min))** time complexity and **O(target/min)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `candidates = [2,3,6,7], target = 7`\n- **Output:** `[[2,2,3],[7]]`",
    "examples": [
      {
        "input": "candidates = [2,3,6,7], target = 7",
        "output": "[[2,2,3],[7]]",
        "explanation": "Backtrack allowing reuse of current candidate."
      }
    ],
    "starterCode": {
      "python": "# 71. Combination Sum (Medium - Backtracking)\n# Optimal: O(2^(target/min)) time | O(target/min) space\n# Hint: Backtrack allowing reuse of current candidate.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return [[2,2,3],[7]]\n\nif __name__ == \"__main__\":\n    print(solution(\"candidates = [2,3,6,7], target = 7\"))\n",
      "c": "/**\n * 71. Combination Sum (Medium - Backtracking)\n * Optimal: O(2^(target/min)) time | O(target/min) space\n * Hint: Backtrack allowing reuse of current candidate.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"[[2,2,3],[7]]\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 71. Combination Sum (Medium - Backtracking)\n * Optimal: O(2^(target/min)) time | O(target/min) space\n * Hint: Backtrack allowing reuse of current candidate.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"[[2,2,3],[7]]\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 71. Combination Sum (Medium - Backtracking)\n * Optimal: O(2^(target/min)) time | O(target/min) space\n * Hint: Backtrack allowing reuse of current candidate.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"[[2,2,3],[7]]\");\n    }\n}\n",
      "javascript": "/**\n * 71. Combination Sum (Medium - Backtracking)\n * Optimal: O(2^(target/min)) time | O(target/min) space\n * Hint: Backtrack allowing reuse of current candidate.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return [[2,2,3],[7]];\n}\n"
    },
    "testCases": [
      {
        "input": [
          "candidates = [2,3,6,7], target = 7"
        ],
        "expected": "[[2,2,3],[7]]",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(2^(target/min))",
      "space": "O(target/min)"
    },
    "hints": [
      "Backtrack allowing reuse of current candidate.",
      "Target time complexity: O(2^(target/min))",
      "Target space complexity: O(target/min)"
    ]
  },
  {
    "id": "lc_72_permutations",
    "number": 72,
    "title": "72. Permutations",
    "cleanTitle": "Permutations",
    "difficulty": "Medium",
    "category": "Backtracking",
    "description": "### Problem 72: Permutations\n\nGiven the input specifications, implement the optimal algorithm achieving **O(N! * N)** time complexity and **O(N)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `nums = [1,2,3]`\n- **Output:** `[[1,2,3],[1,3,2]]`",
    "examples": [
      {
        "input": "nums = [1,2,3]",
        "output": "[[1,2,3],[1,3,2]]",
        "explanation": "Backtrack with visited set or element swapping."
      }
    ],
    "starterCode": {
      "python": "# 72. Permutations (Medium - Backtracking)\n# Optimal: O(N! * N) time | O(N) space\n# Hint: Backtrack with visited set or element swapping.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return [[1,2,3],[1,3,2]]\n\nif __name__ == \"__main__\":\n    print(solution(\"nums = [1,2,3]\"))\n",
      "c": "/**\n * 72. Permutations (Medium - Backtracking)\n * Optimal: O(N! * N) time | O(N) space\n * Hint: Backtrack with visited set or element swapping.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"[[1,2,3],[1,3,2]]\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 72. Permutations (Medium - Backtracking)\n * Optimal: O(N! * N) time | O(N) space\n * Hint: Backtrack with visited set or element swapping.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"[[1,2,3],[1,3,2]]\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 72. Permutations (Medium - Backtracking)\n * Optimal: O(N! * N) time | O(N) space\n * Hint: Backtrack with visited set or element swapping.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"[[1,2,3],[1,3,2]]\");\n    }\n}\n",
      "javascript": "/**\n * 72. Permutations (Medium - Backtracking)\n * Optimal: O(N! * N) time | O(N) space\n * Hint: Backtrack with visited set or element swapping.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return [[1,2,3],[1,3,2]];\n}\n"
    },
    "testCases": [
      {
        "input": [
          "nums = [1,2,3]"
        ],
        "expected": "[[1,2,3],[1,3,2]]",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(N! * N)",
      "space": "O(N)"
    },
    "hints": [
      "Backtrack with visited set or element swapping.",
      "Target time complexity: O(N! * N)",
      "Target space complexity: O(N)"
    ]
  },
  {
    "id": "lc_73_subsets_ii",
    "number": 73,
    "title": "73. Subsets II",
    "cleanTitle": "Subsets II",
    "difficulty": "Medium",
    "category": "Backtracking",
    "description": "### Problem 73: Subsets II\n\nGiven the input specifications, implement the optimal algorithm achieving **O(2^N)** time complexity and **O(N)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `nums = [1,2,2]`\n- **Output:** `[[],[1],[1,2],[1,2,2],[2],[2,2]]`",
    "examples": [
      {
        "input": "nums = [1,2,2]",
        "output": "[[],[1],[1,2],[1,2,2],[2],[2,2]]",
        "explanation": "Sort first; skip duplicates: if i > start and nums[i] == nums[i-1]."
      }
    ],
    "starterCode": {
      "python": "# 73. Subsets II (Medium - Backtracking)\n# Optimal: O(2^N) time | O(N) space\n# Hint: Sort first; skip duplicates: if i > start and nums[i] == nums[i-1].\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return [[],[1],[1,2],[1,2,2],[2],[2,2]]\n\nif __name__ == \"__main__\":\n    print(solution(\"nums = [1,2,2]\"))\n",
      "c": "/**\n * 73. Subsets II (Medium - Backtracking)\n * Optimal: O(2^N) time | O(N) space\n * Hint: Sort first; skip duplicates: if i > start and nums[i] == nums[i-1].\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"[[],[1],[1,2],[1,2,2],[2],[2,2]]\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 73. Subsets II (Medium - Backtracking)\n * Optimal: O(2^N) time | O(N) space\n * Hint: Sort first; skip duplicates: if i > start and nums[i] == nums[i-1].\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"[[],[1],[1,2],[1,2,2],[2],[2,2]]\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 73. Subsets II (Medium - Backtracking)\n * Optimal: O(2^N) time | O(N) space\n * Hint: Sort first; skip duplicates: if i > start and nums[i] == nums[i-1].\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"[[],[1],[1,2],[1,2,2],[2],[2,2]]\");\n    }\n}\n",
      "javascript": "/**\n * 73. Subsets II (Medium - Backtracking)\n * Optimal: O(2^N) time | O(N) space\n * Hint: Sort first; skip duplicates: if i > start and nums[i] == nums[i-1].\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return [[],[1],[1,2],[1,2,2],[2],[2,2]];\n}\n"
    },
    "testCases": [
      {
        "input": [
          "nums = [1,2,2]"
        ],
        "expected": "[[],[1],[1,2],[1,2,2],[2],[2,2]]",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(2^N)",
      "space": "O(N)"
    },
    "hints": [
      "Sort first; skip duplicates: if i > start and nums[i] == nums[i-1].",
      "Target time complexity: O(2^N)",
      "Target space complexity: O(N)"
    ]
  },
  {
    "id": "lc_74_combination_sum_ii",
    "number": 74,
    "title": "74. Combination Sum II",
    "cleanTitle": "Combination Sum II",
    "difficulty": "Medium",
    "category": "Backtracking",
    "description": "### Problem 74: Combination Sum II\n\nGiven the input specifications, implement the optimal algorithm achieving **O(2^N)** time complexity and **O(N)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `candidates = [10,1,2,7,6,1,5], target = 8`\n- **Output:** `[[1,1,6],[1,2,5],[1,7],[2,6]]`",
    "examples": [
      {
        "input": "candidates = [10,1,2,7,6,1,5], target = 8",
        "output": "[[1,1,6],[1,2,5],[1,7],[2,6]]",
        "explanation": "Sort candidates; each candidate used once; skip adjacent identicals."
      }
    ],
    "starterCode": {
      "python": "# 74. Combination Sum II (Medium - Backtracking)\n# Optimal: O(2^N) time | O(N) space\n# Hint: Sort candidates; each candidate used once; skip adjacent identicals.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return [[1,1,6],[1,2,5],[1,7],[2,6]]\n\nif __name__ == \"__main__\":\n    print(solution(\"candidates = [10,1,2,7,6,1,5], target = 8\"))\n",
      "c": "/**\n * 74. Combination Sum II (Medium - Backtracking)\n * Optimal: O(2^N) time | O(N) space\n * Hint: Sort candidates; each candidate used once; skip adjacent identicals.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"[[1,1,6],[1,2,5],[1,7],[2,6]]\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 74. Combination Sum II (Medium - Backtracking)\n * Optimal: O(2^N) time | O(N) space\n * Hint: Sort candidates; each candidate used once; skip adjacent identicals.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"[[1,1,6],[1,2,5],[1,7],[2,6]]\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 74. Combination Sum II (Medium - Backtracking)\n * Optimal: O(2^N) time | O(N) space\n * Hint: Sort candidates; each candidate used once; skip adjacent identicals.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"[[1,1,6],[1,2,5],[1,7],[2,6]]\");\n    }\n}\n",
      "javascript": "/**\n * 74. Combination Sum II (Medium - Backtracking)\n * Optimal: O(2^N) time | O(N) space\n * Hint: Sort candidates; each candidate used once; skip adjacent identicals.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return [[1,1,6],[1,2,5],[1,7],[2,6]];\n}\n"
    },
    "testCases": [
      {
        "input": [
          "candidates = [10,1,2,7,6,1,5], target = 8"
        ],
        "expected": "[[1,1,6],[1,2,5],[1,7],[2,6]]",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(2^N)",
      "space": "O(N)"
    },
    "hints": [
      "Sort candidates; each candidate used once; skip adjacent identicals.",
      "Target time complexity: O(2^N)",
      "Target space complexity: O(N)"
    ]
  },
  {
    "id": "lc_75_word_search",
    "number": 75,
    "title": "75. Word Search",
    "cleanTitle": "Word Search",
    "difficulty": "Medium",
    "category": "Backtracking",
    "description": "### Problem 75: Word Search\n\nGiven the input specifications, implement the optimal algorithm achieving **O(M*N * 4^L)** time complexity and **O(L)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `board = [[\"A\",\"B\"],[\"C\",\"D\"]], word = \"ABDC\"`\n- **Output:** `true`",
    "examples": [
      {
        "input": "board = [[\"A\",\"B\"],[\"C\",\"D\"]], word = \"ABDC\"",
        "output": "true",
        "explanation": "DFS in 4 directions, temporarily mark visited cell."
      }
    ],
    "starterCode": {
      "python": "# 75. Word Search (Medium - Backtracking)\n# Optimal: O(M*N * 4^L) time | O(L) space\n# Hint: DFS in 4 directions, temporarily mark visited cell.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return true\n\nif __name__ == \"__main__\":\n    print(solution(\"board = [[\"A\",\"B\"],[\"C\",\"D\"]], word = \"ABDC\"\"))\n",
      "c": "/**\n * 75. Word Search (Medium - Backtracking)\n * Optimal: O(M*N * 4^L) time | O(L) space\n * Hint: DFS in 4 directions, temporarily mark visited cell.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"true\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 75. Word Search (Medium - Backtracking)\n * Optimal: O(M*N * 4^L) time | O(L) space\n * Hint: DFS in 4 directions, temporarily mark visited cell.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"true\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 75. Word Search (Medium - Backtracking)\n * Optimal: O(M*N * 4^L) time | O(L) space\n * Hint: DFS in 4 directions, temporarily mark visited cell.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"true\");\n    }\n}\n",
      "javascript": "/**\n * 75. Word Search (Medium - Backtracking)\n * Optimal: O(M*N * 4^L) time | O(L) space\n * Hint: DFS in 4 directions, temporarily mark visited cell.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return true;\n}\n"
    },
    "testCases": [
      {
        "input": [
          "board = [[\"A\",\"B\"],[\"C\",\"D\"]], word = \"ABDC\""
        ],
        "expected": "true",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(M*N * 4^L)",
      "space": "O(L)"
    },
    "hints": [
      "DFS in 4 directions, temporarily mark visited cell.",
      "Target time complexity: O(M*N * 4^L)",
      "Target space complexity: O(L)"
    ]
  },
  {
    "id": "lc_76_palindrome_partitioning",
    "number": 76,
    "title": "76. Palindrome Partitioning",
    "cleanTitle": "Palindrome Partitioning",
    "difficulty": "Medium",
    "category": "Backtracking",
    "description": "### Problem 76: Palindrome Partitioning\n\nGiven the input specifications, implement the optimal algorithm achieving **O(2^N * N)** time complexity and **O(N)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `s = \"aab\"`\n- **Output:** `[[\"a\",\"a\",\"b\"],[\"aa\",\"b\"]]`",
    "examples": [
      {
        "input": "s = \"aab\"",
        "output": "[[\"a\",\"a\",\"b\"],[\"aa\",\"b\"]]",
        "explanation": "Backtrack if prefix is palindrome."
      }
    ],
    "starterCode": {
      "python": "# 76. Palindrome Partitioning (Medium - Backtracking)\n# Optimal: O(2^N * N) time | O(N) space\n# Hint: Backtrack if prefix is palindrome.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return [[\"a\",\"a\",\"b\"],[\"aa\",\"b\"]]\n\nif __name__ == \"__main__\":\n    print(solution(\"s = \"aab\"\"))\n",
      "c": "/**\n * 76. Palindrome Partitioning (Medium - Backtracking)\n * Optimal: O(2^N * N) time | O(N) space\n * Hint: Backtrack if prefix is palindrome.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"[[\"a\",\"a\",\"b\"],[\"aa\",\"b\"]]\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 76. Palindrome Partitioning (Medium - Backtracking)\n * Optimal: O(2^N * N) time | O(N) space\n * Hint: Backtrack if prefix is palindrome.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"[[\"a\",\"a\",\"b\"],[\"aa\",\"b\"]]\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 76. Palindrome Partitioning (Medium - Backtracking)\n * Optimal: O(2^N * N) time | O(N) space\n * Hint: Backtrack if prefix is palindrome.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"[[\"a\",\"a\",\"b\"],[\"aa\",\"b\"]]\");\n    }\n}\n",
      "javascript": "/**\n * 76. Palindrome Partitioning (Medium - Backtracking)\n * Optimal: O(2^N * N) time | O(N) space\n * Hint: Backtrack if prefix is palindrome.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return [[\"a\",\"a\",\"b\"],[\"aa\",\"b\"]];\n}\n"
    },
    "testCases": [
      {
        "input": [
          "s = \"aab\""
        ],
        "expected": "[[\"a\",\"a\",\"b\"],[\"aa\",\"b\"]]",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(2^N * N)",
      "space": "O(N)"
    },
    "hints": [
      "Backtrack if prefix is palindrome.",
      "Target time complexity: O(2^N * N)",
      "Target space complexity: O(N)"
    ]
  },
  {
    "id": "lc_77_letter_combinations_of_a_phone_number",
    "number": 77,
    "title": "77. Letter Combinations of a Phone Number",
    "cleanTitle": "Letter Combinations of a Phone Number",
    "difficulty": "Medium",
    "category": "Backtracking",
    "description": "### Problem 77: Letter Combinations of a Phone Number\n\nGiven the input specifications, implement the optimal algorithm achieving **O(4^N)** time complexity and **O(N)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `digits = \"23\"`\n- **Output:** `[\"ad\",\"ae\",\"af\",\"bd\",\"be\",\"bf\"]`",
    "examples": [
      {
        "input": "digits = \"23\"",
        "output": "[\"ad\",\"ae\",\"af\",\"bd\",\"be\",\"bf\"]",
        "explanation": "Map digits to char strings, backtrack combinations."
      }
    ],
    "starterCode": {
      "python": "# 77. Letter Combinations of a Phone Number (Medium - Backtracking)\n# Optimal: O(4^N) time | O(N) space\n# Hint: Map digits to char strings, backtrack combinations.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return [\"ad\",\"ae\",\"af\",\"bd\",\"be\",\"bf\"]\n\nif __name__ == \"__main__\":\n    print(solution(\"digits = \"23\"\"))\n",
      "c": "/**\n * 77. Letter Combinations of a Phone Number (Medium - Backtracking)\n * Optimal: O(4^N) time | O(N) space\n * Hint: Map digits to char strings, backtrack combinations.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"[\"ad\",\"ae\",\"af\",\"bd\",\"be\",\"bf\"]\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 77. Letter Combinations of a Phone Number (Medium - Backtracking)\n * Optimal: O(4^N) time | O(N) space\n * Hint: Map digits to char strings, backtrack combinations.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"[\"ad\",\"ae\",\"af\",\"bd\",\"be\",\"bf\"]\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 77. Letter Combinations of a Phone Number (Medium - Backtracking)\n * Optimal: O(4^N) time | O(N) space\n * Hint: Map digits to char strings, backtrack combinations.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"[\"ad\",\"ae\",\"af\",\"bd\",\"be\",\"bf\"]\");\n    }\n}\n",
      "javascript": "/**\n * 77. Letter Combinations of a Phone Number (Medium - Backtracking)\n * Optimal: O(4^N) time | O(N) space\n * Hint: Map digits to char strings, backtrack combinations.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return [\"ad\",\"ae\",\"af\",\"bd\",\"be\",\"bf\"];\n}\n"
    },
    "testCases": [
      {
        "input": [
          "digits = \"23\""
        ],
        "expected": "[\"ad\",\"ae\",\"af\",\"bd\",\"be\",\"bf\"]",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(4^N)",
      "space": "O(N)"
    },
    "hints": [
      "Map digits to char strings, backtrack combinations.",
      "Target time complexity: O(4^N)",
      "Target space complexity: O(N)"
    ]
  },
  {
    "id": "lc_78_n_queens",
    "number": 78,
    "title": "78. N-Queens",
    "cleanTitle": "N-Queens",
    "difficulty": "Hard",
    "category": "Backtracking",
    "description": "### Problem 78: N-Queens\n\nGiven the input specifications, implement the optimal algorithm achieving **O(N!)** time complexity and **O(N)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `n = 4`\n- **Output:** `[[board1],[board2]]`",
    "examples": [
      {
        "input": "n = 4",
        "output": "[[board1],[board2]]",
        "explanation": "Track occupied columns, positive diagonals, negative diagonals."
      }
    ],
    "starterCode": {
      "python": "# 78. N-Queens (Hard - Backtracking)\n# Optimal: O(N!) time | O(N) space\n# Hint: Track occupied columns, positive diagonals, negative diagonals.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return [[board1],[board2]]\n\nif __name__ == \"__main__\":\n    print(solution(\"n = 4\"))\n",
      "c": "/**\n * 78. N-Queens (Hard - Backtracking)\n * Optimal: O(N!) time | O(N) space\n * Hint: Track occupied columns, positive diagonals, negative diagonals.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"[[board1],[board2]]\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 78. N-Queens (Hard - Backtracking)\n * Optimal: O(N!) time | O(N) space\n * Hint: Track occupied columns, positive diagonals, negative diagonals.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"[[board1],[board2]]\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 78. N-Queens (Hard - Backtracking)\n * Optimal: O(N!) time | O(N) space\n * Hint: Track occupied columns, positive diagonals, negative diagonals.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"[[board1],[board2]]\");\n    }\n}\n",
      "javascript": "/**\n * 78. N-Queens (Hard - Backtracking)\n * Optimal: O(N!) time | O(N) space\n * Hint: Track occupied columns, positive diagonals, negative diagonals.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return [[board1],[board2]];\n}\n"
    },
    "testCases": [
      {
        "input": [
          "n = 4"
        ],
        "expected": "[[board1],[board2]]",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(N!)",
      "space": "O(N)"
    },
    "hints": [
      "Track occupied columns, positive diagonals, negative diagonals.",
      "Target time complexity: O(N!)",
      "Target space complexity: O(N)"
    ]
  },
  {
    "id": "lc_79_number_of_islands",
    "number": 79,
    "title": "79. Number of Islands",
    "cleanTitle": "Number of Islands",
    "difficulty": "Medium",
    "category": "Graphs",
    "description": "### Problem 79: Number of Islands\n\nGiven the input specifications, implement the optimal algorithm achieving **O(M*N)** time complexity and **O(M*N)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `grid of 1s and 0s`\n- **Output:** `count islands`",
    "examples": [
      {
        "input": "grid of 1s and 0s",
        "output": "count islands",
        "explanation": "BFS/DFS sink connected 1s into 0s."
      }
    ],
    "starterCode": {
      "python": "# 79. Number of Islands (Medium - Graphs)\n# Optimal: O(M*N) time | O(M*N) space\n# Hint: BFS/DFS sink connected 1s into 0s.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return count islands\n\nif __name__ == \"__main__\":\n    print(solution(\"grid of 1s and 0s\"))\n",
      "c": "/**\n * 79. Number of Islands (Medium - Graphs)\n * Optimal: O(M*N) time | O(M*N) space\n * Hint: BFS/DFS sink connected 1s into 0s.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"count islands\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 79. Number of Islands (Medium - Graphs)\n * Optimal: O(M*N) time | O(M*N) space\n * Hint: BFS/DFS sink connected 1s into 0s.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"count islands\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 79. Number of Islands (Medium - Graphs)\n * Optimal: O(M*N) time | O(M*N) space\n * Hint: BFS/DFS sink connected 1s into 0s.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"count islands\");\n    }\n}\n",
      "javascript": "/**\n * 79. Number of Islands (Medium - Graphs)\n * Optimal: O(M*N) time | O(M*N) space\n * Hint: BFS/DFS sink connected 1s into 0s.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return \"count islands\";\n}\n"
    },
    "testCases": [
      {
        "input": [
          "grid of 1s and 0s"
        ],
        "expected": "count islands",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(M*N)",
      "space": "O(M*N)"
    },
    "hints": [
      "BFS/DFS sink connected 1s into 0s.",
      "Target time complexity: O(M*N)",
      "Target space complexity: O(M*N)"
    ]
  },
  {
    "id": "lc_80_clone_graph",
    "number": 80,
    "title": "80. Clone Graph",
    "cleanTitle": "Clone Graph",
    "difficulty": "Medium",
    "category": "Graphs",
    "description": "### Problem 80: Clone Graph\n\nGiven the input specifications, implement the optimal algorithm achieving **O(V+E)** time complexity and **O(V)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `node with neighbors`\n- **Output:** `cloned graph`",
    "examples": [
      {
        "input": "node with neighbors",
        "output": "cloned graph",
        "explanation": "DFS/BFS with Map mapping original node -> cloned node."
      }
    ],
    "starterCode": {
      "python": "# 80. Clone Graph (Medium - Graphs)\n# Optimal: O(V+E) time | O(V) space\n# Hint: DFS/BFS with Map mapping original node -> cloned node.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return cloned graph\n\nif __name__ == \"__main__\":\n    print(solution(\"node with neighbors\"))\n",
      "c": "/**\n * 80. Clone Graph (Medium - Graphs)\n * Optimal: O(V+E) time | O(V) space\n * Hint: DFS/BFS with Map mapping original node -> cloned node.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"cloned graph\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 80. Clone Graph (Medium - Graphs)\n * Optimal: O(V+E) time | O(V) space\n * Hint: DFS/BFS with Map mapping original node -> cloned node.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"cloned graph\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 80. Clone Graph (Medium - Graphs)\n * Optimal: O(V+E) time | O(V) space\n * Hint: DFS/BFS with Map mapping original node -> cloned node.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"cloned graph\");\n    }\n}\n",
      "javascript": "/**\n * 80. Clone Graph (Medium - Graphs)\n * Optimal: O(V+E) time | O(V) space\n * Hint: DFS/BFS with Map mapping original node -> cloned node.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return \"cloned graph\";\n}\n"
    },
    "testCases": [
      {
        "input": [
          "node with neighbors"
        ],
        "expected": "cloned graph",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(V+E)",
      "space": "O(V)"
    },
    "hints": [
      "DFS/BFS with Map mapping original node -> cloned node.",
      "Target time complexity: O(V+E)",
      "Target space complexity: O(V)"
    ]
  },
  {
    "id": "lc_81_max_area_of_island",
    "number": 81,
    "title": "81. Max Area of Island",
    "cleanTitle": "Max Area of Island",
    "difficulty": "Medium",
    "category": "Graphs",
    "description": "### Problem 81: Max Area of Island\n\nGiven the input specifications, implement the optimal algorithm achieving **O(M*N)** time complexity and **O(M*N)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `grid of 1s and 0s`\n- **Output:** `max area`",
    "examples": [
      {
        "input": "grid of 1s and 0s",
        "output": "max area",
        "explanation": "DFS returns 1 + sum of 4 neighbors, mark visited."
      }
    ],
    "starterCode": {
      "python": "# 81. Max Area of Island (Medium - Graphs)\n# Optimal: O(M*N) time | O(M*N) space\n# Hint: DFS returns 1 + sum of 4 neighbors, mark visited.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return max area\n\nif __name__ == \"__main__\":\n    print(solution(\"grid of 1s and 0s\"))\n",
      "c": "/**\n * 81. Max Area of Island (Medium - Graphs)\n * Optimal: O(M*N) time | O(M*N) space\n * Hint: DFS returns 1 + sum of 4 neighbors, mark visited.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"max area\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 81. Max Area of Island (Medium - Graphs)\n * Optimal: O(M*N) time | O(M*N) space\n * Hint: DFS returns 1 + sum of 4 neighbors, mark visited.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"max area\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 81. Max Area of Island (Medium - Graphs)\n * Optimal: O(M*N) time | O(M*N) space\n * Hint: DFS returns 1 + sum of 4 neighbors, mark visited.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"max area\");\n    }\n}\n",
      "javascript": "/**\n * 81. Max Area of Island (Medium - Graphs)\n * Optimal: O(M*N) time | O(M*N) space\n * Hint: DFS returns 1 + sum of 4 neighbors, mark visited.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return \"max area\";\n}\n"
    },
    "testCases": [
      {
        "input": [
          "grid of 1s and 0s"
        ],
        "expected": "max area",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(M*N)",
      "space": "O(M*N)"
    },
    "hints": [
      "DFS returns 1 + sum of 4 neighbors, mark visited.",
      "Target time complexity: O(M*N)",
      "Target space complexity: O(M*N)"
    ]
  },
  {
    "id": "lc_82_pacific_atlantic_water_flow",
    "number": 82,
    "title": "82. Pacific Atlantic Water Flow",
    "cleanTitle": "Pacific Atlantic Water Flow",
    "difficulty": "Medium",
    "category": "Graphs",
    "description": "### Problem 82: Pacific Atlantic Water Flow\n\nGiven the input specifications, implement the optimal algorithm achieving **O(M*N)** time complexity and **O(M*N)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `heights matrix`\n- **Output:** `coordinates reaching both`",
    "examples": [
      {
        "input": "heights matrix",
        "output": "coordinates reaching both",
        "explanation": "DFS from Pacific edges and Atlantic edges inwards."
      }
    ],
    "starterCode": {
      "python": "# 82. Pacific Atlantic Water Flow (Medium - Graphs)\n# Optimal: O(M*N) time | O(M*N) space\n# Hint: DFS from Pacific edges and Atlantic edges inwards.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return coordinates reaching both\n\nif __name__ == \"__main__\":\n    print(solution(\"heights matrix\"))\n",
      "c": "/**\n * 82. Pacific Atlantic Water Flow (Medium - Graphs)\n * Optimal: O(M*N) time | O(M*N) space\n * Hint: DFS from Pacific edges and Atlantic edges inwards.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"coordinates reaching both\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 82. Pacific Atlantic Water Flow (Medium - Graphs)\n * Optimal: O(M*N) time | O(M*N) space\n * Hint: DFS from Pacific edges and Atlantic edges inwards.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"coordinates reaching both\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 82. Pacific Atlantic Water Flow (Medium - Graphs)\n * Optimal: O(M*N) time | O(M*N) space\n * Hint: DFS from Pacific edges and Atlantic edges inwards.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"coordinates reaching both\");\n    }\n}\n",
      "javascript": "/**\n * 82. Pacific Atlantic Water Flow (Medium - Graphs)\n * Optimal: O(M*N) time | O(M*N) space\n * Hint: DFS from Pacific edges and Atlantic edges inwards.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return \"coordinates reaching both\";\n}\n"
    },
    "testCases": [
      {
        "input": [
          "heights matrix"
        ],
        "expected": "coordinates reaching both",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(M*N)",
      "space": "O(M*N)"
    },
    "hints": [
      "DFS from Pacific edges and Atlantic edges inwards.",
      "Target time complexity: O(M*N)",
      "Target space complexity: O(M*N)"
    ]
  },
  {
    "id": "lc_83_surrounded_regions",
    "number": 83,
    "title": "83. Surrounded Regions",
    "cleanTitle": "Surrounded Regions",
    "difficulty": "Medium",
    "category": "Graphs",
    "description": "### Problem 83: Surrounded Regions\n\nGiven the input specifications, implement the optimal algorithm achieving **O(M*N)** time complexity and **O(M*N)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `board of X and O`\n- **Output:** `capture surrounded`",
    "examples": [
      {
        "input": "board of X and O",
        "output": "capture surrounded",
        "explanation": "DFS from boundary O marking as safe; convert remainder."
      }
    ],
    "starterCode": {
      "python": "# 83. Surrounded Regions (Medium - Graphs)\n# Optimal: O(M*N) time | O(M*N) space\n# Hint: DFS from boundary O marking as safe; convert remainder.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return capture surrounded\n\nif __name__ == \"__main__\":\n    print(solution(\"board of X and O\"))\n",
      "c": "/**\n * 83. Surrounded Regions (Medium - Graphs)\n * Optimal: O(M*N) time | O(M*N) space\n * Hint: DFS from boundary O marking as safe; convert remainder.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"capture surrounded\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 83. Surrounded Regions (Medium - Graphs)\n * Optimal: O(M*N) time | O(M*N) space\n * Hint: DFS from boundary O marking as safe; convert remainder.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"capture surrounded\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 83. Surrounded Regions (Medium - Graphs)\n * Optimal: O(M*N) time | O(M*N) space\n * Hint: DFS from boundary O marking as safe; convert remainder.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"capture surrounded\");\n    }\n}\n",
      "javascript": "/**\n * 83. Surrounded Regions (Medium - Graphs)\n * Optimal: O(M*N) time | O(M*N) space\n * Hint: DFS from boundary O marking as safe; convert remainder.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return \"capture surrounded\";\n}\n"
    },
    "testCases": [
      {
        "input": [
          "board of X and O"
        ],
        "expected": "capture surrounded",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(M*N)",
      "space": "O(M*N)"
    },
    "hints": [
      "DFS from boundary O marking as safe; convert remainder.",
      "Target time complexity: O(M*N)",
      "Target space complexity: O(M*N)"
    ]
  },
  {
    "id": "lc_84_rotting_oranges",
    "number": 84,
    "title": "84. Rotting Oranges",
    "cleanTitle": "Rotting Oranges",
    "difficulty": "Medium",
    "category": "Graphs",
    "description": "### Problem 84: Rotting Oranges\n\nGiven the input specifications, implement the optimal algorithm achieving **O(M*N)** time complexity and **O(M*N)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `grid with fresh (1) and rotten (2)`\n- **Output:** `minutes to rot all`",
    "examples": [
      {
        "input": "grid with fresh (1) and rotten (2)",
        "output": "minutes to rot all",
        "explanation": "Multi-source BFS starting with all initial rotten oranges."
      }
    ],
    "starterCode": {
      "python": "# 84. Rotting Oranges (Medium - Graphs)\n# Optimal: O(M*N) time | O(M*N) space\n# Hint: Multi-source BFS starting with all initial rotten oranges.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return minutes to rot all\n\nif __name__ == \"__main__\":\n    print(solution(\"grid with fresh (1) and rotten (2)\"))\n",
      "c": "/**\n * 84. Rotting Oranges (Medium - Graphs)\n * Optimal: O(M*N) time | O(M*N) space\n * Hint: Multi-source BFS starting with all initial rotten oranges.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"minutes to rot all\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 84. Rotting Oranges (Medium - Graphs)\n * Optimal: O(M*N) time | O(M*N) space\n * Hint: Multi-source BFS starting with all initial rotten oranges.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"minutes to rot all\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 84. Rotting Oranges (Medium - Graphs)\n * Optimal: O(M*N) time | O(M*N) space\n * Hint: Multi-source BFS starting with all initial rotten oranges.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"minutes to rot all\");\n    }\n}\n",
      "javascript": "/**\n * 84. Rotting Oranges (Medium - Graphs)\n * Optimal: O(M*N) time | O(M*N) space\n * Hint: Multi-source BFS starting with all initial rotten oranges.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return \"minutes to rot all\";\n}\n"
    },
    "testCases": [
      {
        "input": [
          "grid with fresh (1) and rotten (2)"
        ],
        "expected": "minutes to rot all",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(M*N)",
      "space": "O(M*N)"
    },
    "hints": [
      "Multi-source BFS starting with all initial rotten oranges.",
      "Target time complexity: O(M*N)",
      "Target space complexity: O(M*N)"
    ]
  },
  {
    "id": "lc_85_walls_and_gates",
    "number": 85,
    "title": "85. Walls and Gates",
    "cleanTitle": "Walls and Gates",
    "difficulty": "Medium",
    "category": "Graphs",
    "description": "### Problem 85: Walls and Gates\n\nGiven the input specifications, implement the optimal algorithm achieving **O(M*N)** time complexity and **O(M*N)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `rooms with gates (0) and walls (-1)`\n- **Output:** `fill distance`",
    "examples": [
      {
        "input": "rooms with gates (0) and walls (-1)",
        "output": "fill distance",
        "explanation": "Multi-source BFS from all gates outwards."
      }
    ],
    "starterCode": {
      "python": "# 85. Walls and Gates (Medium - Graphs)\n# Optimal: O(M*N) time | O(M*N) space\n# Hint: Multi-source BFS from all gates outwards.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return fill distance\n\nif __name__ == \"__main__\":\n    print(solution(\"rooms with gates (0) and walls (-1)\"))\n",
      "c": "/**\n * 85. Walls and Gates (Medium - Graphs)\n * Optimal: O(M*N) time | O(M*N) space\n * Hint: Multi-source BFS from all gates outwards.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"fill distance\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 85. Walls and Gates (Medium - Graphs)\n * Optimal: O(M*N) time | O(M*N) space\n * Hint: Multi-source BFS from all gates outwards.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"fill distance\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 85. Walls and Gates (Medium - Graphs)\n * Optimal: O(M*N) time | O(M*N) space\n * Hint: Multi-source BFS from all gates outwards.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"fill distance\");\n    }\n}\n",
      "javascript": "/**\n * 85. Walls and Gates (Medium - Graphs)\n * Optimal: O(M*N) time | O(M*N) space\n * Hint: Multi-source BFS from all gates outwards.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return \"fill distance\";\n}\n"
    },
    "testCases": [
      {
        "input": [
          "rooms with gates (0) and walls (-1)"
        ],
        "expected": "fill distance",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(M*N)",
      "space": "O(M*N)"
    },
    "hints": [
      "Multi-source BFS from all gates outwards.",
      "Target time complexity: O(M*N)",
      "Target space complexity: O(M*N)"
    ]
  },
  {
    "id": "lc_86_course_schedule",
    "number": 86,
    "title": "86. Course Schedule",
    "cleanTitle": "Course Schedule",
    "difficulty": "Medium",
    "category": "Graphs",
    "description": "### Problem 86: Course Schedule\n\nGiven the input specifications, implement the optimal algorithm achieving **O(V+E)** time complexity and **O(V+E)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `numCourses = 2, prerequisites = [[1,0]]`\n- **Output:** `true`",
    "examples": [
      {
        "input": "numCourses = 2, prerequisites = [[1,0]]",
        "output": "true",
        "explanation": "Kahns topological sort or DFS cycle detection."
      }
    ],
    "starterCode": {
      "python": "# 86. Course Schedule (Medium - Graphs)\n# Optimal: O(V+E) time | O(V+E) space\n# Hint: Kahns topological sort or DFS cycle detection.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return true\n\nif __name__ == \"__main__\":\n    print(solution(\"numCourses = 2, prerequisites = [[1,0]]\"))\n",
      "c": "/**\n * 86. Course Schedule (Medium - Graphs)\n * Optimal: O(V+E) time | O(V+E) space\n * Hint: Kahns topological sort or DFS cycle detection.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"true\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 86. Course Schedule (Medium - Graphs)\n * Optimal: O(V+E) time | O(V+E) space\n * Hint: Kahns topological sort or DFS cycle detection.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"true\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 86. Course Schedule (Medium - Graphs)\n * Optimal: O(V+E) time | O(V+E) space\n * Hint: Kahns topological sort or DFS cycle detection.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"true\");\n    }\n}\n",
      "javascript": "/**\n * 86. Course Schedule (Medium - Graphs)\n * Optimal: O(V+E) time | O(V+E) space\n * Hint: Kahns topological sort or DFS cycle detection.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return true;\n}\n"
    },
    "testCases": [
      {
        "input": [
          "numCourses = 2, prerequisites = [[1,0]]"
        ],
        "expected": "true",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(V+E)",
      "space": "O(V+E)"
    },
    "hints": [
      "Kahns topological sort or DFS cycle detection.",
      "Target time complexity: O(V+E)",
      "Target space complexity: O(V+E)"
    ]
  },
  {
    "id": "lc_87_course_schedule_ii",
    "number": 87,
    "title": "87. Course Schedule II",
    "cleanTitle": "Course Schedule II",
    "difficulty": "Medium",
    "category": "Graphs",
    "description": "### Problem 87: Course Schedule II\n\nGiven the input specifications, implement the optimal algorithm achieving **O(V+E)** time complexity and **O(V+E)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]`\n- **Output:** `[0,1,2,3]`",
    "examples": [
      {
        "input": "numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]",
        "output": "[0,1,2,3]",
        "explanation": "Topological sort order using BFS queue of zero in-degrees."
      }
    ],
    "starterCode": {
      "python": "# 87. Course Schedule II (Medium - Graphs)\n# Optimal: O(V+E) time | O(V+E) space\n# Hint: Topological sort order using BFS queue of zero in-degrees.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return [0,1,2,3]\n\nif __name__ == \"__main__\":\n    print(solution(\"numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]\"))\n",
      "c": "/**\n * 87. Course Schedule II (Medium - Graphs)\n * Optimal: O(V+E) time | O(V+E) space\n * Hint: Topological sort order using BFS queue of zero in-degrees.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"[0,1,2,3]\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 87. Course Schedule II (Medium - Graphs)\n * Optimal: O(V+E) time | O(V+E) space\n * Hint: Topological sort order using BFS queue of zero in-degrees.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"[0,1,2,3]\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 87. Course Schedule II (Medium - Graphs)\n * Optimal: O(V+E) time | O(V+E) space\n * Hint: Topological sort order using BFS queue of zero in-degrees.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"[0,1,2,3]\");\n    }\n}\n",
      "javascript": "/**\n * 87. Course Schedule II (Medium - Graphs)\n * Optimal: O(V+E) time | O(V+E) space\n * Hint: Topological sort order using BFS queue of zero in-degrees.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return [0,1,2,3];\n}\n"
    },
    "testCases": [
      {
        "input": [
          "numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]"
        ],
        "expected": "[0,1,2,3]",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(V+E)",
      "space": "O(V+E)"
    },
    "hints": [
      "Topological sort order using BFS queue of zero in-degrees.",
      "Target time complexity: O(V+E)",
      "Target space complexity: O(V+E)"
    ]
  },
  {
    "id": "lc_88_redundant_connection",
    "number": 88,
    "title": "88. Redundant Connection",
    "cleanTitle": "Redundant Connection",
    "difficulty": "Medium",
    "category": "Graphs",
    "description": "### Problem 88: Redundant Connection\n\nGiven the input specifications, implement the optimal algorithm achieving **O(V)** time complexity and **O(V)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `edges = [[1,2],[1,3],[2,3]]`\n- **Output:** `[2,3]`",
    "examples": [
      {
        "input": "edges = [[1,2],[1,3],[2,3]]",
        "output": "[2,3]",
        "explanation": "Union-Find with path compression; return redundant edge."
      }
    ],
    "starterCode": {
      "python": "# 88. Redundant Connection (Medium - Graphs)\n# Optimal: O(V) time | O(V) space\n# Hint: Union-Find with path compression; return redundant edge.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return [2,3]\n\nif __name__ == \"__main__\":\n    print(solution(\"edges = [[1,2],[1,3],[2,3]]\"))\n",
      "c": "/**\n * 88. Redundant Connection (Medium - Graphs)\n * Optimal: O(V) time | O(V) space\n * Hint: Union-Find with path compression; return redundant edge.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"[2,3]\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 88. Redundant Connection (Medium - Graphs)\n * Optimal: O(V) time | O(V) space\n * Hint: Union-Find with path compression; return redundant edge.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"[2,3]\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 88. Redundant Connection (Medium - Graphs)\n * Optimal: O(V) time | O(V) space\n * Hint: Union-Find with path compression; return redundant edge.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"[2,3]\");\n    }\n}\n",
      "javascript": "/**\n * 88. Redundant Connection (Medium - Graphs)\n * Optimal: O(V) time | O(V) space\n * Hint: Union-Find with path compression; return redundant edge.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return [2,3];\n}\n"
    },
    "testCases": [
      {
        "input": [
          "edges = [[1,2],[1,3],[2,3]]"
        ],
        "expected": "[2,3]",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(V)",
      "space": "O(V)"
    },
    "hints": [
      "Union-Find with path compression; return redundant edge.",
      "Target time complexity: O(V)",
      "Target space complexity: O(V)"
    ]
  },
  {
    "id": "lc_89_number_of_connected_components_in_graph",
    "number": 89,
    "title": "89. Number of Connected Components in Graph",
    "cleanTitle": "Number of Connected Components in Graph",
    "difficulty": "Medium",
    "category": "Graphs",
    "description": "### Problem 89: Number of Connected Components in Graph\n\nGiven the input specifications, implement the optimal algorithm achieving **O(V + E)** time complexity and **O(V)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `n = 5, edges = [[0,1],[1,2],[3,4]]`\n- **Output:** `2`",
    "examples": [
      {
        "input": "n = 5, edges = [[0,1],[1,2],[3,4]]",
        "output": "2",
        "explanation": "Union-Find counts components = n - successful unions."
      }
    ],
    "starterCode": {
      "python": "# 89. Number of Connected Components in Graph (Medium - Graphs)\n# Optimal: O(V + E) time | O(V) space\n# Hint: Union-Find counts components = n - successful unions.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return 2\n\nif __name__ == \"__main__\":\n    print(solution(\"n = 5, edges = [[0,1],[1,2],[3,4]]\"))\n",
      "c": "/**\n * 89. Number of Connected Components in Graph (Medium - Graphs)\n * Optimal: O(V + E) time | O(V) space\n * Hint: Union-Find counts components = n - successful unions.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"2\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 89. Number of Connected Components in Graph (Medium - Graphs)\n * Optimal: O(V + E) time | O(V) space\n * Hint: Union-Find counts components = n - successful unions.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"2\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 89. Number of Connected Components in Graph (Medium - Graphs)\n * Optimal: O(V + E) time | O(V) space\n * Hint: Union-Find counts components = n - successful unions.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"2\");\n    }\n}\n",
      "javascript": "/**\n * 89. Number of Connected Components in Graph (Medium - Graphs)\n * Optimal: O(V + E) time | O(V) space\n * Hint: Union-Find counts components = n - successful unions.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return 2;\n}\n"
    },
    "testCases": [
      {
        "input": [
          "n = 5, edges = [[0,1],[1,2],[3,4]]"
        ],
        "expected": "2",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(V + E)",
      "space": "O(V)"
    },
    "hints": [
      "Union-Find counts components = n - successful unions.",
      "Target time complexity: O(V + E)",
      "Target space complexity: O(V)"
    ]
  },
  {
    "id": "lc_90_graph_valid_tree",
    "number": 90,
    "title": "90. Graph Valid Tree",
    "cleanTitle": "Graph Valid Tree",
    "difficulty": "Medium",
    "category": "Graphs",
    "description": "### Problem 90: Graph Valid Tree\n\nGiven the input specifications, implement the optimal algorithm achieving **O(V)** time complexity and **O(V)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `n = 5, edges = [[0,1],[0,2],[0,3],[1,4]]`\n- **Output:** `true`",
    "examples": [
      {
        "input": "n = 5, edges = [[0,1],[0,2],[0,3],[1,4]]",
        "output": "true",
        "explanation": "Tree iff edges == n - 1 and all nodes connected."
      }
    ],
    "starterCode": {
      "python": "# 90. Graph Valid Tree (Medium - Graphs)\n# Optimal: O(V) time | O(V) space\n# Hint: Tree iff edges == n - 1 and all nodes connected.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return true\n\nif __name__ == \"__main__\":\n    print(solution(\"n = 5, edges = [[0,1],[0,2],[0,3],[1,4]]\"))\n",
      "c": "/**\n * 90. Graph Valid Tree (Medium - Graphs)\n * Optimal: O(V) time | O(V) space\n * Hint: Tree iff edges == n - 1 and all nodes connected.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"true\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 90. Graph Valid Tree (Medium - Graphs)\n * Optimal: O(V) time | O(V) space\n * Hint: Tree iff edges == n - 1 and all nodes connected.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"true\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 90. Graph Valid Tree (Medium - Graphs)\n * Optimal: O(V) time | O(V) space\n * Hint: Tree iff edges == n - 1 and all nodes connected.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"true\");\n    }\n}\n",
      "javascript": "/**\n * 90. Graph Valid Tree (Medium - Graphs)\n * Optimal: O(V) time | O(V) space\n * Hint: Tree iff edges == n - 1 and all nodes connected.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return true;\n}\n"
    },
    "testCases": [
      {
        "input": [
          "n = 5, edges = [[0,1],[0,2],[0,3],[1,4]]"
        ],
        "expected": "true",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(V)",
      "space": "O(V)"
    },
    "hints": [
      "Tree iff edges == n - 1 and all nodes connected.",
      "Target time complexity: O(V)",
      "Target space complexity: O(V)"
    ]
  },
  {
    "id": "lc_91_word_ladder",
    "number": 91,
    "title": "91. Word Ladder",
    "cleanTitle": "Word Ladder",
    "difficulty": "Hard",
    "category": "Graphs",
    "description": "### Problem 91: Word Ladder\n\nGiven the input specifications, implement the optimal algorithm achieving **O(N * L^2)** time complexity and **O(N * L)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `beginWord = \"hit\", endWord = \"cog\"`\n- **Output:** `5`",
    "examples": [
      {
        "input": "beginWord = \"hit\", endWord = \"cog\"",
        "output": "5",
        "explanation": "BFS shortest path changing one character at a time."
      }
    ],
    "starterCode": {
      "python": "# 91. Word Ladder (Hard - Graphs)\n# Optimal: O(N * L^2) time | O(N * L) space\n# Hint: BFS shortest path changing one character at a time.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return 5\n\nif __name__ == \"__main__\":\n    print(solution(\"beginWord = \"hit\", endWord = \"cog\"\"))\n",
      "c": "/**\n * 91. Word Ladder (Hard - Graphs)\n * Optimal: O(N * L^2) time | O(N * L) space\n * Hint: BFS shortest path changing one character at a time.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"5\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 91. Word Ladder (Hard - Graphs)\n * Optimal: O(N * L^2) time | O(N * L) space\n * Hint: BFS shortest path changing one character at a time.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"5\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 91. Word Ladder (Hard - Graphs)\n * Optimal: O(N * L^2) time | O(N * L) space\n * Hint: BFS shortest path changing one character at a time.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"5\");\n    }\n}\n",
      "javascript": "/**\n * 91. Word Ladder (Hard - Graphs)\n * Optimal: O(N * L^2) time | O(N * L) space\n * Hint: BFS shortest path changing one character at a time.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return 5;\n}\n"
    },
    "testCases": [
      {
        "input": [
          "beginWord = \"hit\", endWord = \"cog\""
        ],
        "expected": "5",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(N * L^2)",
      "space": "O(N * L)"
    },
    "hints": [
      "BFS shortest path changing one character at a time.",
      "Target time complexity: O(N * L^2)",
      "Target space complexity: O(N * L)"
    ]
  },
  {
    "id": "lc_92_climbing_stairs",
    "number": 92,
    "title": "92. Climbing Stairs",
    "cleanTitle": "Climbing Stairs",
    "difficulty": "Easy",
    "category": "1D Dynamic Programming",
    "description": "### Problem 92: Climbing Stairs\n\nGiven the input specifications, implement the optimal algorithm achieving **O(N)** time complexity and **O(1)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `n = 3`\n- **Output:** `3`",
    "examples": [
      {
        "input": "n = 3",
        "output": "3",
        "explanation": "Fibonacci relation dp[i] = dp[i-1] + dp[i-2]."
      }
    ],
    "starterCode": {
      "python": "# 92. Climbing Stairs (Easy - 1D Dynamic Programming)\n# Optimal: O(N) time | O(1) space\n# Hint: Fibonacci relation dp[i] = dp[i-1] + dp[i-2].\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return 3\n\nif __name__ == \"__main__\":\n    print(solution(\"n = 3\"))\n",
      "c": "/**\n * 92. Climbing Stairs (Easy - 1D Dynamic Programming)\n * Optimal: O(N) time | O(1) space\n * Hint: Fibonacci relation dp[i] = dp[i-1] + dp[i-2].\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"3\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 92. Climbing Stairs (Easy - 1D Dynamic Programming)\n * Optimal: O(N) time | O(1) space\n * Hint: Fibonacci relation dp[i] = dp[i-1] + dp[i-2].\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"3\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 92. Climbing Stairs (Easy - 1D Dynamic Programming)\n * Optimal: O(N) time | O(1) space\n * Hint: Fibonacci relation dp[i] = dp[i-1] + dp[i-2].\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"3\");\n    }\n}\n",
      "javascript": "/**\n * 92. Climbing Stairs (Easy - 1D Dynamic Programming)\n * Optimal: O(N) time | O(1) space\n * Hint: Fibonacci relation dp[i] = dp[i-1] + dp[i-2].\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return 3;\n}\n"
    },
    "testCases": [
      {
        "input": [
          "n = 3"
        ],
        "expected": "3",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(N)",
      "space": "O(1)"
    },
    "hints": [
      "Fibonacci relation dp[i] = dp[i-1] + dp[i-2].",
      "Target time complexity: O(N)",
      "Target space complexity: O(1)"
    ]
  },
  {
    "id": "lc_93_min_cost_climbing_stairs",
    "number": 93,
    "title": "93. Min Cost Climbing Stairs",
    "cleanTitle": "Min Cost Climbing Stairs",
    "difficulty": "Easy",
    "category": "1D Dynamic Programming",
    "description": "### Problem 93: Min Cost Climbing Stairs\n\nGiven the input specifications, implement the optimal algorithm achieving **O(N)** time complexity and **O(1)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `cost = [10,15,20]`\n- **Output:** `15`",
    "examples": [
      {
        "input": "cost = [10,15,20]",
        "output": "15",
        "explanation": "cost[i] += min(cost[i+1], cost[i+2])."
      }
    ],
    "starterCode": {
      "python": "# 93. Min Cost Climbing Stairs (Easy - 1D Dynamic Programming)\n# Optimal: O(N) time | O(1) space\n# Hint: cost[i] += min(cost[i+1], cost[i+2]).\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return 15\n\nif __name__ == \"__main__\":\n    print(solution(\"cost = [10,15,20]\"))\n",
      "c": "/**\n * 93. Min Cost Climbing Stairs (Easy - 1D Dynamic Programming)\n * Optimal: O(N) time | O(1) space\n * Hint: cost[i] += min(cost[i+1], cost[i+2]).\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"15\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 93. Min Cost Climbing Stairs (Easy - 1D Dynamic Programming)\n * Optimal: O(N) time | O(1) space\n * Hint: cost[i] += min(cost[i+1], cost[i+2]).\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"15\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 93. Min Cost Climbing Stairs (Easy - 1D Dynamic Programming)\n * Optimal: O(N) time | O(1) space\n * Hint: cost[i] += min(cost[i+1], cost[i+2]).\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"15\");\n    }\n}\n",
      "javascript": "/**\n * 93. Min Cost Climbing Stairs (Easy - 1D Dynamic Programming)\n * Optimal: O(N) time | O(1) space\n * Hint: cost[i] += min(cost[i+1], cost[i+2]).\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return 15;\n}\n"
    },
    "testCases": [
      {
        "input": [
          "cost = [10,15,20]"
        ],
        "expected": "15",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(N)",
      "space": "O(1)"
    },
    "hints": [
      "cost[i] += min(cost[i+1], cost[i+2]).",
      "Target time complexity: O(N)",
      "Target space complexity: O(1)"
    ]
  },
  {
    "id": "lc_94_house_robber",
    "number": 94,
    "title": "94. House Robber",
    "cleanTitle": "House Robber",
    "difficulty": "Medium",
    "category": "1D Dynamic Programming",
    "description": "### Problem 94: House Robber\n\nGiven the input specifications, implement the optimal algorithm achieving **O(N)** time complexity and **O(1)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `nums = [1,2,3,1]`\n- **Output:** `4`",
    "examples": [
      {
        "input": "nums = [1,2,3,1]",
        "output": "4",
        "explanation": "rob = max(prevRob1 + num, prevRob2)."
      }
    ],
    "starterCode": {
      "python": "# 94. House Robber (Medium - 1D Dynamic Programming)\n# Optimal: O(N) time | O(1) space\n# Hint: rob = max(prevRob1 + num, prevRob2).\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return 4\n\nif __name__ == \"__main__\":\n    print(solution(\"nums = [1,2,3,1]\"))\n",
      "c": "/**\n * 94. House Robber (Medium - 1D Dynamic Programming)\n * Optimal: O(N) time | O(1) space\n * Hint: rob = max(prevRob1 + num, prevRob2).\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"4\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 94. House Robber (Medium - 1D Dynamic Programming)\n * Optimal: O(N) time | O(1) space\n * Hint: rob = max(prevRob1 + num, prevRob2).\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"4\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 94. House Robber (Medium - 1D Dynamic Programming)\n * Optimal: O(N) time | O(1) space\n * Hint: rob = max(prevRob1 + num, prevRob2).\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"4\");\n    }\n}\n",
      "javascript": "/**\n * 94. House Robber (Medium - 1D Dynamic Programming)\n * Optimal: O(N) time | O(1) space\n * Hint: rob = max(prevRob1 + num, prevRob2).\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return 4;\n}\n"
    },
    "testCases": [
      {
        "input": [
          "nums = [1,2,3,1]"
        ],
        "expected": "4",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(N)",
      "space": "O(1)"
    },
    "hints": [
      "rob = max(prevRob1 + num, prevRob2).",
      "Target time complexity: O(N)",
      "Target space complexity: O(1)"
    ]
  },
  {
    "id": "lc_95_house_robber_ii",
    "number": 95,
    "title": "95. House Robber II",
    "cleanTitle": "House Robber II",
    "difficulty": "Medium",
    "category": "1D Dynamic Programming",
    "description": "### Problem 95: House Robber II\n\nGiven the input specifications, implement the optimal algorithm achieving **O(N)** time complexity and **O(1)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `nums = [2,3,2]`\n- **Output:** `3`",
    "examples": [
      {
        "input": "nums = [2,3,2]",
        "output": "3",
        "explanation": "max(houseRobber(nums[1:]), houseRobber(nums[:-1]))."
      }
    ],
    "starterCode": {
      "python": "# 95. House Robber II (Medium - 1D Dynamic Programming)\n# Optimal: O(N) time | O(1) space\n# Hint: max(houseRobber(nums[1:]), houseRobber(nums[:-1])).\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return 3\n\nif __name__ == \"__main__\":\n    print(solution(\"nums = [2,3,2]\"))\n",
      "c": "/**\n * 95. House Robber II (Medium - 1D Dynamic Programming)\n * Optimal: O(N) time | O(1) space\n * Hint: max(houseRobber(nums[1:]), houseRobber(nums[:-1])).\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"3\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 95. House Robber II (Medium - 1D Dynamic Programming)\n * Optimal: O(N) time | O(1) space\n * Hint: max(houseRobber(nums[1:]), houseRobber(nums[:-1])).\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"3\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 95. House Robber II (Medium - 1D Dynamic Programming)\n * Optimal: O(N) time | O(1) space\n * Hint: max(houseRobber(nums[1:]), houseRobber(nums[:-1])).\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"3\");\n    }\n}\n",
      "javascript": "/**\n * 95. House Robber II (Medium - 1D Dynamic Programming)\n * Optimal: O(N) time | O(1) space\n * Hint: max(houseRobber(nums[1:]), houseRobber(nums[:-1])).\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return 3;\n}\n"
    },
    "testCases": [
      {
        "input": [
          "nums = [2,3,2]"
        ],
        "expected": "3",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(N)",
      "space": "O(1)"
    },
    "hints": [
      "max(houseRobber(nums[1:]), houseRobber(nums[:-1])).",
      "Target time complexity: O(N)",
      "Target space complexity: O(1)"
    ]
  },
  {
    "id": "lc_96_longest_palindromic_substring",
    "number": 96,
    "title": "96. Longest Palindromic Substring",
    "cleanTitle": "Longest Palindromic Substring",
    "difficulty": "Medium",
    "category": "1D Dynamic Programming",
    "description": "### Problem 96: Longest Palindromic Substring\n\nGiven the input specifications, implement the optimal algorithm achieving **O(N^2)** time complexity and **O(1)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `s = \"babad\"`\n- **Output:** `\"bab\"`",
    "examples": [
      {
        "input": "s = \"babad\"",
        "output": "\"bab\"",
        "explanation": "Expand around centers for odd and even length palindromes."
      }
    ],
    "starterCode": {
      "python": "# 96. Longest Palindromic Substring (Medium - 1D Dynamic Programming)\n# Optimal: O(N^2) time | O(1) space\n# Hint: Expand around centers for odd and even length palindromes.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return \"bab\"\n\nif __name__ == \"__main__\":\n    print(solution(\"s = \"babad\"\"))\n",
      "c": "/**\n * 96. Longest Palindromic Substring (Medium - 1D Dynamic Programming)\n * Optimal: O(N^2) time | O(1) space\n * Hint: Expand around centers for odd and even length palindromes.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"\"bab\"\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 96. Longest Palindromic Substring (Medium - 1D Dynamic Programming)\n * Optimal: O(N^2) time | O(1) space\n * Hint: Expand around centers for odd and even length palindromes.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"\"bab\"\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 96. Longest Palindromic Substring (Medium - 1D Dynamic Programming)\n * Optimal: O(N^2) time | O(1) space\n * Hint: Expand around centers for odd and even length palindromes.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"\"bab\"\");\n    }\n}\n",
      "javascript": "/**\n * 96. Longest Palindromic Substring (Medium - 1D Dynamic Programming)\n * Optimal: O(N^2) time | O(1) space\n * Hint: Expand around centers for odd and even length palindromes.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return \"\\\"bab\\\"\";\n}\n"
    },
    "testCases": [
      {
        "input": [
          "s = \"babad\""
        ],
        "expected": "\"bab\"",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(N^2)",
      "space": "O(1)"
    },
    "hints": [
      "Expand around centers for odd and even length palindromes.",
      "Target time complexity: O(N^2)",
      "Target space complexity: O(1)"
    ]
  },
  {
    "id": "lc_97_palindromic_substrings",
    "number": 97,
    "title": "97. Palindromic Substrings",
    "cleanTitle": "Palindromic Substrings",
    "difficulty": "Medium",
    "category": "1D Dynamic Programming",
    "description": "### Problem 97: Palindromic Substrings\n\nGiven the input specifications, implement the optimal algorithm achieving **O(N^2)** time complexity and **O(1)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `s = \"abc\"`\n- **Output:** `3`",
    "examples": [
      {
        "input": "s = \"abc\"",
        "output": "3",
        "explanation": "Expand around centers and count valid matches."
      }
    ],
    "starterCode": {
      "python": "# 97. Palindromic Substrings (Medium - 1D Dynamic Programming)\n# Optimal: O(N^2) time | O(1) space\n# Hint: Expand around centers and count valid matches.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return 3\n\nif __name__ == \"__main__\":\n    print(solution(\"s = \"abc\"\"))\n",
      "c": "/**\n * 97. Palindromic Substrings (Medium - 1D Dynamic Programming)\n * Optimal: O(N^2) time | O(1) space\n * Hint: Expand around centers and count valid matches.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"3\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 97. Palindromic Substrings (Medium - 1D Dynamic Programming)\n * Optimal: O(N^2) time | O(1) space\n * Hint: Expand around centers and count valid matches.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"3\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 97. Palindromic Substrings (Medium - 1D Dynamic Programming)\n * Optimal: O(N^2) time | O(1) space\n * Hint: Expand around centers and count valid matches.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"3\");\n    }\n}\n",
      "javascript": "/**\n * 97. Palindromic Substrings (Medium - 1D Dynamic Programming)\n * Optimal: O(N^2) time | O(1) space\n * Hint: Expand around centers and count valid matches.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return 3;\n}\n"
    },
    "testCases": [
      {
        "input": [
          "s = \"abc\""
        ],
        "expected": "3",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(N^2)",
      "space": "O(1)"
    },
    "hints": [
      "Expand around centers and count valid matches.",
      "Target time complexity: O(N^2)",
      "Target space complexity: O(1)"
    ]
  },
  {
    "id": "lc_98_decode_ways",
    "number": 98,
    "title": "98. Decode Ways",
    "cleanTitle": "Decode Ways",
    "difficulty": "Medium",
    "category": "1D Dynamic Programming",
    "description": "### Problem 98: Decode Ways\n\nGiven the input specifications, implement the optimal algorithm achieving **O(N)** time complexity and **O(1)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `s = \"226\"`\n- **Output:** `3`",
    "examples": [
      {
        "input": "s = \"226\"",
        "output": "3",
        "explanation": "dp[i] based on single-digit (1-9) and two-digit (10-26) valid transitions."
      }
    ],
    "starterCode": {
      "python": "# 98. Decode Ways (Medium - 1D Dynamic Programming)\n# Optimal: O(N) time | O(1) space\n# Hint: dp[i] based on single-digit (1-9) and two-digit (10-26) valid transitions.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return 3\n\nif __name__ == \"__main__\":\n    print(solution(\"s = \"226\"\"))\n",
      "c": "/**\n * 98. Decode Ways (Medium - 1D Dynamic Programming)\n * Optimal: O(N) time | O(1) space\n * Hint: dp[i] based on single-digit (1-9) and two-digit (10-26) valid transitions.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"3\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 98. Decode Ways (Medium - 1D Dynamic Programming)\n * Optimal: O(N) time | O(1) space\n * Hint: dp[i] based on single-digit (1-9) and two-digit (10-26) valid transitions.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"3\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 98. Decode Ways (Medium - 1D Dynamic Programming)\n * Optimal: O(N) time | O(1) space\n * Hint: dp[i] based on single-digit (1-9) and two-digit (10-26) valid transitions.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"3\");\n    }\n}\n",
      "javascript": "/**\n * 98. Decode Ways (Medium - 1D Dynamic Programming)\n * Optimal: O(N) time | O(1) space\n * Hint: dp[i] based on single-digit (1-9) and two-digit (10-26) valid transitions.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return 3;\n}\n"
    },
    "testCases": [
      {
        "input": [
          "s = \"226\""
        ],
        "expected": "3",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(N)",
      "space": "O(1)"
    },
    "hints": [
      "dp[i] based on single-digit (1-9) and two-digit (10-26) valid transitions.",
      "Target time complexity: O(N)",
      "Target space complexity: O(1)"
    ]
  },
  {
    "id": "lc_99_coin_change",
    "number": 99,
    "title": "99. Coin Change",
    "cleanTitle": "Coin Change",
    "difficulty": "Medium",
    "category": "1D Dynamic Programming",
    "description": "### Problem 99: Coin Change\n\nGiven the input specifications, implement the optimal algorithm achieving **O(A * C)** time complexity and **O(A)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `coins = [1,2,5], amount = 11`\n- **Output:** `3`",
    "examples": [
      {
        "input": "coins = [1,2,5], amount = 11",
        "output": "3",
        "explanation": "Bottom-up DP: dp[a] = min(dp[a], 1 + dp[a - c])."
      }
    ],
    "starterCode": {
      "python": "# 99. Coin Change (Medium - 1D Dynamic Programming)\n# Optimal: O(A * C) time | O(A) space\n# Hint: Bottom-up DP: dp[a] = min(dp[a], 1 + dp[a - c]).\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return 3\n\nif __name__ == \"__main__\":\n    print(solution(\"coins = [1,2,5], amount = 11\"))\n",
      "c": "/**\n * 99. Coin Change (Medium - 1D Dynamic Programming)\n * Optimal: O(A * C) time | O(A) space\n * Hint: Bottom-up DP: dp[a] = min(dp[a], 1 + dp[a - c]).\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"3\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 99. Coin Change (Medium - 1D Dynamic Programming)\n * Optimal: O(A * C) time | O(A) space\n * Hint: Bottom-up DP: dp[a] = min(dp[a], 1 + dp[a - c]).\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"3\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 99. Coin Change (Medium - 1D Dynamic Programming)\n * Optimal: O(A * C) time | O(A) space\n * Hint: Bottom-up DP: dp[a] = min(dp[a], 1 + dp[a - c]).\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"3\");\n    }\n}\n",
      "javascript": "/**\n * 99. Coin Change (Medium - 1D Dynamic Programming)\n * Optimal: O(A * C) time | O(A) space\n * Hint: Bottom-up DP: dp[a] = min(dp[a], 1 + dp[a - c]).\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return 3;\n}\n"
    },
    "testCases": [
      {
        "input": [
          "coins = [1,2,5], amount = 11"
        ],
        "expected": "3",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(A * C)",
      "space": "O(A)"
    },
    "hints": [
      "Bottom-up DP: dp[a] = min(dp[a], 1 + dp[a - c]).",
      "Target time complexity: O(A * C)",
      "Target space complexity: O(A)"
    ]
  },
  {
    "id": "lc_100_maximum_product_subarray",
    "number": 100,
    "title": "100. Maximum Product Subarray",
    "cleanTitle": "Maximum Product Subarray",
    "difficulty": "Medium",
    "category": "1D Dynamic Programming",
    "description": "### Problem 100: Maximum Product Subarray\n\nGiven the input specifications, implement the optimal algorithm achieving **O(N)** time complexity and **O(1)** space complexity.\n\n### Constraints & Edge Cases:\n- Analyze boundaries, empty inputs, single elements, and extreme values.\n- Adhere to the optimal complexity targets.\n\n### Example:\n- **Input:** `nums = [2,3,-2,4]`\n- **Output:** `6`",
    "examples": [
      {
        "input": "nums = [2,3,-2,4]",
        "output": "6",
        "explanation": "Track curMin and curMax simultaneously due to negative signs."
      }
    ],
    "starterCode": {
      "python": "# 100. Maximum Product Subarray (Medium - 1D Dynamic Programming)\n# Optimal: O(N) time | O(1) space\n# Hint: Track curMin and curMax simultaneously due to negative signs.\n\ndef solution(data):\n    # Write your optimal algorithm below\n    return 6\n\nif __name__ == \"__main__\":\n    print(solution(\"nums = [2,3,-2,4]\"))\n",
      "c": "/**\n * 100. Maximum Product Subarray (Medium - 1D Dynamic Programming)\n * Optimal: O(N) time | O(1) space\n * Hint: Track curMin and curMax simultaneously due to negative signs.\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nvoid solve() {\n    // Implement optimal algorithm\n    printf(\"%s\\n\", \"6\");\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "cpp": "/**\n * 100. Maximum Product Subarray (Medium - 1D Dynamic Programming)\n * Optimal: O(N) time | O(1) space\n * Hint: Track curMin and curMax simultaneously due to negative signs.\n */\n#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Implement optimal algorithm\n        cout << \"6\" << endl;\n    }\n};\n\nint main() {\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n",
      "java": "/**\n * 100. Maximum Product Subarray (Medium - 1D Dynamic Programming)\n * Optimal: O(N) time | O(1) space\n * Hint: Track curMin and curMax simultaneously due to negative signs.\n */\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Implement optimal algorithm\n        System.out.println(\"6\");\n    }\n}\n",
      "javascript": "/**\n * 100. Maximum Product Subarray (Medium - 1D Dynamic Programming)\n * Optimal: O(N) time | O(1) space\n * Hint: Track curMin and curMax simultaneously due to negative signs.\n */\nfunction solution(input) {\n  // Implement optimal algorithm\n  return 6;\n}\n"
    },
    "testCases": [
      {
        "input": [
          "nums = [2,3,-2,4]"
        ],
        "expected": "6",
        "description": "Primary assertion"
      }
    ],
    "optimalComplexity": {
      "time": "O(N)",
      "space": "O(1)"
    },
    "hints": [
      "Track curMin and curMax simultaneously due to negative signs.",
      "Target time complexity: O(N)",
      "Target space complexity: O(1)"
    ]
  }
];
