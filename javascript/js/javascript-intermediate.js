// JavaScript Intermediate Level Q&A Data

let intermediate = [
  {
    id: 1,
    question: "What is event bubbling?",
    answer: "Event propagation where the event starts from the target element and bubbles up to ancestor elements."
  },
  {
    id: 2,
    question: "What is event capturing?",
    answer: "Event propagation phase where the event starts from the root and goes down to the target element."
  },
  {
    id: 3,
    question: "How do you stop event propagation?",
    answer: "By calling event.stopPropagation() or event.stopImmediatePropagation()."
  },
  {
    id: 4,
    question: "What is a promise?",
    answer: "An object representing eventual completion or failure of an asynchronous operation."
  },
  {
    id: 5,
    question: "What are the states of a promise?",
    answer: "Pending, Fulfilled (resolved), and Rejected."
  },
  {
    id: 6,
    question: "How do you create a promise?",
    answer: "Using new Promise((resolve, reject) => { /* async code */ })."
  },
  {
    id: 7,
    question: "What is async/await?",
    answer: "Syntax for writing asynchronous code that looks synchronous, built on promises."
  },
  {
    id: 8,
    question: "What is a closure?",
    answer: "A function with access to its own scope, outer function's scope, and the global scope."
  },
  {
    id: 9,
    question: "What is the difference between local and global scope?",
    answer: "Local scope is inside functions or blocks; global scope is accessible everywhere."
  },
  {
    id: 10,
    question: "What is lexical scoping?",
    answer: "Variables are resolved by their physical location in the code at the time of definition."
  },
  {
    id: 11,
    question: "What is the this keyword?",
    answer: "Refers to the object that is executing the current function."
  },
  {
    id: 12,
    question: "How does 'this' behave in arrow functions?",
    answer: "Arrow functions don't have their own this; they inherit it from the surrounding scope."
  },
  {
    id: 13,
    question: "What is prototype inheritance?",
    answer: "Objects inherit properties and methods from their prototype objects."
  },
  {
    id: 14,
    question: "What is the difference between call(), apply(), and bind()?",
    answer: "call() and apply() invoke functions with a given this; apply() takes args as array, call() as list; bind() returns a new function with bound this."
  },
  {
    id: 15,
    question: "What is the difference between an expression and a statement?",
    answer: "An expression produces a value; a statement performs an action."
  },
  {
    id: 16,
    question: "What is NaN compared to undefined?",
    answer: "NaN is a number representing 'Not a Number'; undefined means a variable is declared but not assigned."
  },
  {
    id: 17,
    question: "What is the difference between null and undefined?",
    answer: "null is an intentional absence of value; undefined means variable declared but not assigned."
  },
  {
    id: 18,
    question: "How can you convert a string to a number?",
    answer: "Using Number(), parseInt(), parseFloat(), or unary plus (+) operator."
  },
  {
    id: 19,
    question: "What is event delegation?",
    answer: "Attaching a single event listener to a parent element to manage events on child elements."
  },
  {
    id: 20,
    question: "What is a template literal?",
    answer: "String literals allowing embedded expressions using backticks and ${}."
  },
  {
    id: 21,
    question: "What is destructuring assignment?",
    answer: "Extracting values from arrays or objects into variables."
  },
  {
    id: 22,
    question: "What are default parameters?",
    answer: "Function parameters with default values if no argument is provided."
  },
  {
    id: 23,
    question: "What is the spread operator?",
    answer: "Expands iterable (like arrays) into individual elements."
  },
  {
    id: 24,
    question: "What is the rest parameter?",
    answer: "Collects multiple elements into an array parameter."
  },
  {
    id: 25,
    question: "How do you create a class in JavaScript?",
    answer: "Using the class keyword: class MyClass { constructor() { } method() { } }"
  },
  {
    id: 26,
    question: "What is a constructor?",
    answer: "A special method for creating and initializing an object created with a class."
  },
  {
    id: 27,
    question: "What is inheritance in classes?",
    answer: "A class can extend another class to inherit properties and methods."
  },
  {
    id: 28,
    question: "What is a module in JavaScript?",
    answer: "Reusable pieces of code that can be exported and imported using import/export syntax."
  },
  {
    id: 29,
    question: "What is the difference between synchronous and asynchronous code?",
    answer: "Synchronous code runs sequentially; asynchronous code runs without blocking the main thread."
  },
  {
    id: 30,
    question: "How do you handle errors in JavaScript?",
    answer: "Using try...catch blocks or handling rejected promises."
  },
  {
    id: 31,
    question: "What is the use of 'use strict'?",
    answer: "Enables strict mode which helps catch errors and disables some unsafe features."
  },
  {
    id: 32,
    question: "What is the difference between function declaration and function expression?",
    answer: "Function declarations are hoisted; function expressions are not."
  },
  {
    id: 33,
    question: "What is hoisting?",
    answer: "JavaScript's behavior of moving declarations to the top of their scope before execution."
  },
  {
    id: 34,
    question: "What is an Immediately Invoked Function Expression (IIFE)?",
    answer: "A function that runs as soon as it is defined."
  },
  {
    id: 35,
    question: "What is the difference between null, undefined, and empty string?",
    answer: "null is an assigned absence, undefined means uninitialized, empty string is a string with no characters."
  }
];

// Make data available globally
window.intermediate = intermediate;