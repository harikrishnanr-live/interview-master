// Practice Advanced Level Q&A Data

let advanced = [
  {
    id: 1,
    question: "What is the difference between let, const, and var?",
    answer:
      "var is function-scoped and hoisted; let and const are block-scoped; const cannot be reassigned",
  },
  {
    id: 2,
    question: "How do you handle asynchronous operations?",
    answer: "Using callbacks, promises, or async/await syntax",
  },
  {
    id: 3,
    question: "What is the event loop in JavaScript?",
    answer:
      "A mechanism that handles asynchronous callbacks by queuing and executing tasks",
  },
  {
    id: 4,
    question: "How do you create a promise?",
    answer: "Using new Promise((resolve, reject) => { /* async code */ })",
  },
  {
    id: 5,
    question: "What is destructuring assignment?",
    answer:
      "Extracting values from arrays or objects into variables using syntax like [a, b] = array or {a, b} = object",
  },
];

// Make data available globally
window.advanced = advanced;
