// JavaScript Beginner Level Q&A Data

let beginner = [
  {
    id: 1,
    question: "What is a variable in JavaScript?",
    answer:
      "A variable is a container for storing data values. Declared with var, let, or const.",
  },
  {
    id: 2,
    question: "How do you declare a variable in JavaScript?",
    answer: "Using var, let, or const followed by the variable name.",
  },
  {
    id: 3,
    question: "What is the difference between var, let, and const?",
    answer:
      "var is function scoped and can be re-declared; let and const are block scoped, let can be updated, const cannot.",
  },
  {
    id: 4,
    question: "What data types are supported in JavaScript?",
    answer:
      "Number, String, Boolean, Object, Null, Undefined, Symbol, and BigInt.",
  },
  {
    id: 5,
    question: "What is a string in JavaScript?",
    answer:
      "A sequence of characters enclosed in single, double quotes, or backticks.",
  },
  {
    id: 6,
    question: "How do you create a multi-line string?",
    answer:
      "Using template literals with backticks (`) or concatenation with \\n.",
  },
  {
    id: 7,
    question: "What is a function in JavaScript?",
    answer: "A reusable block of code designed to perform a particular task.",
  },
  {
    id: 8,
    question: "How do you declare a function?",
    answer:
      "Using function keyword: function name() { // code } or arrow functions.",
  },
  {
    id: 9,
    question: "What are function parameters and arguments?",
    answer:
      "Parameters are named variables in a function definition; arguments are actual values passed to the function.",
  },
  {
    id: 10,
    question: "What is the return statement?",
    answer: "It specifies the value a function returns to the caller.",
  },
  {
    id: 11,
    question: "What is an object in JavaScript?",
    answer:
      "An object is a collection of key-value pairs, where keys are strings (or Symbols) and values can be any type.",
  },
  {
    id: 12,
    question: "How do you create an object?",
    answer: "Using object literal syntax {} or new Object().",
  },
  {
    id: 13,
    question: "How do you access object properties?",
    answer: "Using dot notation (obj.key) or bracket notation (obj['key']).",
  },
  {
    id: 14,
    question: "How do you add a property to an object?",
    answer: "Assign a value to a new key: obj.newProp = value.",
  },
  {
    id: 15,
    question: "What is an array?",
    answer: "An ordered list of values indexed from 0.",
  },
  {
    id: 16,
    question: "How do you create an array?",
    answer: "Using square brackets: let arr = [1, 2, 3].",
  },
  {
    id: 17,
    question: "How do you access elements in an array?",
    answer: "Using indices: arr[0], arr[1], etc.",
  },
  {
    id: 18,
    question: "How do you find the length of an array?",
    answer: "Using the length property: arr.length.",
  },
  {
    id: 19,
    question: "What is a loop?",
    answer:
      "A control structure that repeats a block of code while a condition is true.",
  },
  {
    id: 20,
    question: "Name different types of loops in JavaScript.",
    answer: "for, while, do-while, for...in, and for...of loops.",
  },
  {
    id: 21,
    question: "What is the difference between for...in and for...of loops?",
    answer:
      "for...in iterates over object keys; for...of iterates over iterable values.",
  },
  {
    id: 22,
    question: "What are conditional statements?",
    answer:
      "Statements that perform different actions based on conditions (if, else if, else, switch).",
  },
  {
    id: 23,
    question: "How do you write an if statement?",
    answer: "if (condition) { // code }",
  },
  {
    id: 24,
    question: "What is the switch statement?",
    answer:
      "A control statement that executes code based on matching a value to case clauses.",
  },
  {
    id: 25,
    question: "What are truthy and falsy values?",
    answer:
      "Truthy values evaluate to true in a boolean context; falsy values (like 0, '', null, undefined, NaN, false) evaluate to false.",
  },
  {
    id: 26,
    question: "What is NaN in JavaScript?",
    answer:
      "NaN stands for 'Not-a-Number', representing a value that is not a legal number.",
  },
  {
    id: 27,
    question: "How do you check if a value is NaN?",
    answer:
      "Using the built-in isNaN() function or Number.isNaN() for more accurate checking.",
  },
  {
    id: 28,
    question: "What is the difference between == and ===?",
    answer:
      "== compares values after type coercion; === compares both value and type (strict equality).",
  },
  {
    id: 29,
    question: "What is type coercion?",
    answer:
      "JavaScript automatically converts values from one type to another when performing operations.",
  },
  {
    id: 30,
    question: "What is a callback function?",
    answer:
      "A function passed into another function as an argument to be executed later.",
  },
];

// Make data available globally
window.beginner = beginner;
