// Practice Beginner Level Q&A Data

let beginner = [
  {
    id: 1,
    question: "Given an array of numbers, count how many groups of two or more consecutive 1s exist, and calculate the total number of 1s in those groups.\n\nExample: [1,0,1,1,1,2,3,1,1,5,1,6,1,1,1,1,0,1,1,1,1,1,4,1,1]\n\nWrite a function that returns [totalGroups, totalConsecutiveOnes]",
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
    
    return [groups, totalOnes];
}

\`\`\`javascript
// Example usage:
const val = [1,0,1,1,1,2,3,1,1,5,1,6,1,1,1,1,0,1,1,1,1,1,4,1,1];
console.log(countConsecutiveOnes(val)); // [3, 15]
\`\`\``
  },
  {
    id: 2,
    question: "Write a function to find the maximum number in an array without using Math.max().\n\nExample: findMax([3, 7, 2, 9, 5]) should return 9",
    answer: `\`\`\`javascript
function findMax(arr) {
    if (arr.length === 0) return undefined;
    
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// Example usage:
console.log(findMax([3, 7, 2, 9, 5])); // 9
\`\`\``
  },
  {
    id: 3,
    question: "Write a function to reverse a string without using built-in reverse methods.\n\nExample: reverseString('hello') should return 'olleh'",
    answer: `\`\`\`javascript
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// Example usage:
console.log(reverseString('hello')); // 'olleh'
\`\`\``
  },
  {
    id: 4,
    question: "Write a function to check if a string is a palindrome (reads the same forwards and backwards), ignoring case and non-alphanumeric characters.\n\nExample: isPalindrome('A man, a plan, a canal: Panama') should return true",
    answer: `\`\`\`javascript
function isPalindrome(str) {
    // Remove non-alphanumeric and convert to lowercase
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Check if it reads the same forwards and backwards
    for (let i = 0; i < cleanStr.length / 2; i++) {
        if (cleanStr[i] !== cleanStr[cleanStr.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

// Example usage:
console.log(isPalindrome('A man, a plan, a canal: Panama')); // true
console.log(isPalindrome('race a car')); // false
\`\`\``
  },
  {
    id: 5,
    question: "Write a function to remove duplicates from an array while preserving the order.\n\nExample: removeDuplicates([1, 2, 2, 3, 4, 4, 5]) should return [1, 2, 3, 4, 5]",
    answer: `\`\`\`javascript
function removeDuplicates(arr) {
    const result = [];
    const seen = new Set();
    
    for (let item of arr) {
        if (!seen.has(item)) {
            seen.add(item);
            result.push(item);
        }
    }
    
    return result;
}

// Example usage:
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
\`\`\``
  },
];

// Make data available globally
window.beginner = beginner;
