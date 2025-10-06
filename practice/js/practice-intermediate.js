// Practice Intermediate Level Q&A Data

let intermediate = [
  {
    id: 1,
    question: "Given an array of integers and a target sum, find two numbers that add up to the target. Return their indices.\n\nExample: twoSum([2, 7, 11, 15], 9) should return [0, 1] (because 2 + 7 = 9)",
    answer: `\`\`\`javascript
function twoSum(nums, target) {
    const map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    
    return []; // No solution found
}

// Example usage:
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
\`\`\``
  },
  {
    id: 2,
    question: "Find the length of the longest substring without repeating characters.\n\nExample: lengthOfLongestSubstring('abcabcbb') should return 3 (substring 'abc')",
    answer: `\`\`\`javascript
function lengthOfLongestSubstring(s) {
    let maxLength = 0;
    let start = 0;
    const charIndex = new Map();
    
    for (let end = 0; end < s.length; end++) {
        if (charIndex.has(s[end])) {
            start = Math.max(start, charIndex.get(s[end]) + 1);
        }
        charIndex.set(s[end], end);
        maxLength = Math.max(maxLength, end - start + 1);
    }
    
    return maxLength;
}

// Example usage:
console.log(lengthOfLongestSubstring('abcabcbb')); // 3
\`\`\``
  },
  {
    id: 3,
    question: "Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.\n\nExample: isValid('()[]{}') should return true, isValid('(]') should return false",
    answer: `\`\`\`javascript
function isValid(s) {
    const stack = [];
    const brackets = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else if (char === ')' || char === '}' || char === ']') {
            if (stack.length === 0 || stack.pop() !== brackets[char]) {
                return false;
            }
        }
    }
    
    return stack.length === 0;
}

// Example usage:
console.log(isValid('()[]{}')); // true
console.log(isValid('(]')); // false
\`\`\``
  },
  {
    id: 4,
    question: "Merge two sorted arrays into one sorted array.\n\nExample: merge([1, 3, 5], [2, 4, 6]) should return [1, 2, 3, 4, 5, 6]",
    answer: `\`\`\`javascript
function merge(nums1, nums2) {
    const result = [];
    let i = 0, j = 0;
    
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] <= nums2[j]) {
            result.push(nums1[i]);
            i++;
        } else {
            result.push(nums2[j]);
            j++;
        }
    }
    
    // Add remaining elements
    while (i < nums1.length) {
        result.push(nums1[i]);
        i++;
    }
    
    while (j < nums2.length) {
        result.push(nums2[j]);
        j++;
    }
    
    return result;
}

// Example usage:
console.log(merge([1, 3, 5], [2, 4, 6])); // [1, 2, 3, 4, 5, 6]
\`\`\``
  },
  {
    id: 5,
    question: "Implement a function to rotate an array to the right by k steps.\n\nExample: rotate([1, 2, 3, 4, 5, 6, 7], 3) should return [5, 6, 7, 1, 2, 3, 4]",
    answer: `\`\`\`javascript
function rotate(nums, k) {
    k = k % nums.length;
    if (k === 0) return nums;
    
    // Reverse the entire array
    reverse(nums, 0, nums.length - 1);
    // Reverse the first k elements
    reverse(nums, 0, k - 1);
    // Reverse the remaining elements
    reverse(nums, k, nums.length - 1);
    
    return nums;
}

function reverse(arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}

// Example usage:
const arr = [1, 2, 3, 4, 5, 6, 7];
rotate(arr, 3);
console.log(arr); // [5, 6, 7, 1, 2, 3, 4]
\`\`\``
  },
];

// Make data available globally
window.intermediate = intermediate;
