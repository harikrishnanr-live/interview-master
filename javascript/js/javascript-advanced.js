// JavaScript Advanced Level Q&A Data

let advanced = [
  {
    id: 1,
    question: "How do you check if a variable is an array?",
    answer: "Using Array.isArray(variable).",
  },
  {
    id: 2,
    question: "What are the ways to clone an object?",
    answer:
      "Using Object.assign(), spread operator, or JSON.parse(JSON.stringify(obj)) for deep clone.",
  },
  {
    id: 3,
    question: "What is the difference between shallow copy and deep copy?",
    answer:
      "Shallow copy copies top-level properties; deep copy copies nested objects.",
  },
  {
    id: 4,
    question: "What is a Symbol?",
    answer:
      "A unique and immutable primitive value used as object property keys.",
  },
  {
    id: 5,
    question: "What is a generator function?",
    answer: "A function that can be paused and resumed using yield.",
  },
  {
    id: 6,
    question: "What is the event loop in JavaScript?",
    answer:
      "A mechanism that handles asynchronous callbacks by queuing and executing tasks.",
  },
  {
    id: 7,
    question: "What is the difference between microtasks and macrotasks?",
    answer:
      "Microtasks (e.g. promises) run before macrotasks (e.g. setTimeout) in the event loop.",
  },
  {
    id: 8,
    question: "How do you convert an object to JSON?",
    answer: "Using JSON.stringify().",
  },
  {
    id: 9,
    question: "How do you parse JSON to an object?",
    answer: "Using JSON.parse().",
  },
  {
    id: 10,
    question: "What is debouncing?",
    answer:
      "Delaying function execution until after a certain amount of time has passed since last call.",
  },
  {
    id: 11,
    question: "What is throttling?",
    answer: "Limiting function execution to once every fixed time interval.",
  },
  {
    id: 12,
    question: "What are higher-order functions?",
    answer:
      "Functions that take other functions as arguments or return functions.",
  },
  {
    id: 13,
    question: "What is the difference between map() and forEach()?",
    answer: "map() returns a new array; forEach() returns undefined.",
  },
  {
    id: 14,
    question: "What is the filter() method?",
    answer:
      "Returns a new array with elements that pass a test implemented by a function.",
  },
  {
    id: 15,
    question: "What is reduce() method?",
    answer:
      "Executes a reducer function on each element to reduce the array to a single value.",
  },
  {
    id: 16,
    question: "What is the difference between splice() and slice()?",
    answer:
      "splice() modifies the original array; slice() returns a new array.",
  },
  {
    id: 17,
    question: "What is JSONP?",
    answer:
      "A technique to overcome cross-origin restrictions by using script tags.",
  },
  {
    id: 18,
    question: "What is a service worker?",
    answer:
      "A script that runs in the background to manage caching and offline experience.",
  },
  {
    id: 19,
    question: "What is strict equality?",
    answer: "Checking both type and value equality using === operator.",
  },
  {
    id: 20,
    question: "What is the difference between a primitive and an object?",
    answer:
      "Primitives are immutable and hold single values; objects are collections of properties.",
  },
  {
    id: 21,
    question: "What is the difference between undefined and undeclared?",
    answer:
      "undefined means declared but no value; undeclared means not declared at all.",
  },
  {
    id: 22,
    question: "What is a weak reference in JavaScript?",
    answer:
      "References that do not prevent garbage collection, e.g., WeakMap and WeakSet.",
  },
  {
    id: 23,
    question: "What is the difference between WeakMap and Map?",
    answer:
      "WeakMap keys must be objects and are weakly referenced; Map keys can be any type.",
  },
  {
    id: 24,
    question: "What is the use of Object.freeze()?",
    answer:
      "Prevents modification of existing properties and addition of new ones on an object.",
  },
  {
    id: 25,
    question: "What are modules?",
    answer:
      "Reusable pieces of code encapsulated in files that export and import functionality.",
  },
  {
    id: 26,
    question: "What are the benefits of using ES6 modules?",
    answer:
      "Encapsulation, reuse, better dependency management, and cleaner syntax.",
  },
  {
    id: 27,
    question:
      "What is the difference between synchronous and asynchronous functions?",
    answer:
      "Synchronous functions block the main thread; asynchronous functions do not.",
  },
  {
    id: 28,
    question: "What is a promise chain?",
    answer:
      "Chaining multiple then() calls to handle sequential asynchronous operations.",
  },
];

// Make data available globally
window.advanced = advanced;
