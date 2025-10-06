// Practice Advanced Level Q&A Data

let advanced = [
  {
    id: 1,
    question: "Find the length of the longest common subsequence between two strings.\n\nExample: longestCommonSubsequence('ABCDGH', 'AEDFHR') should return 3 ('ADH')",
    answer: `\`\`\`javascript
function longestCommonSubsequence(text1, text2) {
    const m = text1.length;
    const n = text2.length;
    const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));
    
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    
    return dp[m][n];
}

// Example usage:
console.log(longestCommonSubsequence('ABCDGH', 'AEDFHR')); // 3
\`\`\``
  },
  {
    id: 2,
    question: "Given n non-negative integers representing an elevation map, compute how much water it can trap after raining.\n\nExample: trap([0,1,0,2,1,0,1,3,2,1,2,1]) should return 6",
    answer: `\`\`\`javascript
function trap(height) {
    if (height.length === 0) return 0;
    
    let left = 0, right = height.length - 1;
    let leftMax = 0, rightMax = 0;
    let water = 0;
    
    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                water += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                water += rightMax - height[right];
            }
            right--;
        }
    }
    
    return water;
}

// Example usage:
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); // 6
\`\`\``
  },
  {
    id: 3,
    question: "Implement a function to find the median of two sorted arrays.\n\nExample: findMedianSortedArrays([1, 3], [2]) should return 2.0",
    answer: `\`\`\`javascript
function findMedianSortedArrays(nums1, nums2) {
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }
    
    const m = nums1.length;
    const n = nums2.length;
    let left = 0, right = m;
    
    while (left <= right) {
        const partitionX = Math.floor((left + right) / 2);
        const partitionY = Math.floor((m + n + 1) / 2) - partitionX;
        
        const maxX = partitionX === 0 ? -Infinity : nums1[partitionX - 1];
        const minX = partitionX === m ? Infinity : nums1[partitionX];
        
        const maxY = partitionY === 0 ? -Infinity : nums2[partitionY - 1];
        const minY = partitionY === n ? Infinity : nums2[partitionY];
        
        if (maxX <= minY && maxY <= minX) {
            if ((m + n) % 2 === 0) {
                return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;
            } else {
                return Math.max(maxX, maxY);
            }
        } else if (maxX > minY) {
            right = partitionX - 1;
        } else {
            left = partitionX + 1;
        }
    }
    
    throw new Error('Input arrays are not sorted');
}

// Example usage:
console.log(findMedianSortedArrays([1, 3], [2])); // 2
\`\`\``
  },
  {
    id: 4,
    question: "Given a string s and a string p, find all the start indices of p's anagrams in s.\n\nExample: findAnagrams('cbaebabacd', 'abc') should return [0, 6]",
    answer: `\`\`\`javascript
function findAnagrams(s, p) {
    const result = [];
    const pCount = new Array(26).fill(0);
    const sCount = new Array(26).fill(0);
    
    // Count frequency of characters in p
    for (let char of p) {
        pCount[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    
    let left = 0;
    for (let right = 0; right < s.length; right++) {
        // Add current character to window
        sCount[s[right].charCodeAt(0) - 'a'.charCodeAt(0)]++;
        
        // If window size exceeds p length, remove leftmost character
        if (right - left + 1 > p.length) {
            sCount[s[left].charCodeAt(0) - 'a'.charCodeAt(0)]--;
            left++;
        }
        
        // If window size equals p length, check if it's an anagram
        if (right - left + 1 === p.length) {
            if (arraysEqual(pCount, sCount)) {
                result.push(left);
            }
        }
    }
    
    return result;
}

function arraysEqual(a, b) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

// Example usage:
console.log(findAnagrams('cbaebabacd', 'abc')); // [0, 6]
\`\`\``
  },
  {
    id: 5,
    question: "Implement a trie (prefix tree) with insert, search, and startsWith methods.\n\nExample usage: insert('apple'), search('apple') returns true, startsWith('app') returns true",
    answer: `\`\`\`javascript
class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }
    
    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }
    
    search(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return node.isEndOfWord;
    }
    
    startsWith(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return true;
    }
}

// Example usage:
const trie = new Trie();
trie.insert('apple');
console.log(trie.search('apple')); // true
console.log(trie.search('app')); // false
console.log(trie.startsWith('app')); // true
\`\`\``
  },
  {
    id: 6,
    question: "You have a list of numbers. Find how many times two or more 1s appear next to each other, and count how many such groups there are.\n\nExample: For the array [1,0,1,1,1,2,3,1,1,5,1,6,1,1,1,1,0,1,1,1,1,1,4,1,1], find the number of groups of consecutive 1s (2 or more) and the total number of 1s in those groups.",
    answer: `\`\`\`javascript
function countConsecutiveOnes(arr) {
    let groups = 0;
    let totalOnes = 0;
    let current = 0;
    
    for (let num of arr) {
        if (num === 1) {
            current++;
        } else {
            if (current >= 2) {
                groups++;
                totalOnes += current;
            }
            current = 0;
        }
    }
    
    // Check the last group
    if (current >= 2) {
        groups++;
        totalOnes += current;
    }
    
    return { groups, totalOnes };
}

// Example usage:
const val = [1,0,1,1,1,2,3,1,1,5,1,6,1,1,1,1,0,1,1,1,1,1,4,1,1];
const result = countConsecutiveOnes(val);
console.log('Number of groups:', result.groups); // 5
console.log('Total 1s in groups:', result.totalOnes); // 17
\`\`\``
  },
];

// Make data available globally
window.advanced = advanced;
