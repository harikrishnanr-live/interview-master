// Practice Intermediate Level Q&A Data

let intermediate = [
  {
    id: 1,
    question: "How do you remove duplicates from an array?",
    answer: "Using new Set(array), filter() with indexOf(), or reduce() method"
  },
  {
    id: 2,
    question: "What is a closure in JavaScript?",
    answer: "A function that has access to its own scope, outer function's scope, and global scope"
  },
  {
    id: 3,
    question: "How do you convert a string to a number?",
    answer: "Using Number(), parseInt(), parseFloat(), or unary plus (+) operator"
  },
  {
    id: 4,
    question: "What is the purpose of the bind() method?",
    answer: "Creates a new function with a specified this value and initial arguments"
  },
  {
    id: 5,
    question: "How do you check if an object has a specific property?",
    answer: "Using hasOwnProperty(), in operator, or obj.property !== undefined"
  }
];

// Make data available globally
window.intermediate = intermediate;