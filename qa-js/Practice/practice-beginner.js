// Practice Beginner Level Q&A Data

let beginner = [
  {
    id: 1,
    question: "What is the output of console.log(typeof null)?",
    answer: "object (This is a well-known bug in JavaScript)"
  },
  {
    id: 2,
    question: "How do you check if a variable is an array?",
    answer: "Using Array.isArray(variable) or variable instanceof Array"
  },
  {
    id: 3,
    question: "What is the difference between == and === operators?",
    answer: "== compares values after type coercion; === compares both value and type (strict equality)"
  },
  {
    id: 4,
    question: "How do you create a deep copy of an object?",
    answer: "Using JSON.parse(JSON.stringify(obj)) or structuredClone() (ES2022)"
  },
  {
    id: 5,
    question: "What is event delegation?",
    answer: "Attaching a single event listener to a parent element to manage events on child elements"
  }
];

// Make data available globally
window.beginner = beginner;