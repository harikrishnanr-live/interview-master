// Node.js Beginner Level Q&A Data

let beginner = [
  {
    id: 1,
    question: "What is Nodejs?",
    answer: "Node.js is a JavaScript engine used for executing JavaScript code outside the browser, commonly used to build scalable backend applications."
  },
  {
    id: 2,
    question: "What are the features of Nodejs 23?",
    answer: "Node.js lets you run JavaScript code outside of a web browser to build fast and efficient applications. Faster Performance: The new V8 engine makes your applications run faster. WebAssembly (Wasm): Better support for running WebAssembly code, making it easier to run high-performance code in your applications. HTTP/3 Support: New and improved HTTP/3 protocol support for faster and more secure web communication. Native ES Modules Support: Among many other node.js updates, the services now natively provide support for ES modules, which facilitates code compatibility by standardizing the imports of modules."
  },
  {
    id: 3,
    question: "Is Node.js single-threaded?",
    answer: "Yes, Node.js is single-threaded but uses event-driven architecture and non-blocking I/O to handle multiple requests efficiently."
  },
  {
    id: 4,
    question: "What is clustering in Nodejs?",
    answer: "Clustering in Node.js is a way to use multiple CPU cores to run an application for better performance and handle more requests."
  },
  {
    id: 5,
    question: "What is a module in Node.js?",
    answer: "A module in Node.js is a block of code that provides specific functionality, which can be reused across different parts of an application."
  },
  {
    id: 6,
    question: "What is concurrency?",
    answer: "Concurrency is an essential feature of Node.js that enables it to handle large numbers of I/O operations simultaneously, without blocking the execution thread. This concurrency model allows Node.js to handle many requests concurrently, resulting in improved application performance."
  },
  {
    id: 7,
    question: "What is middleware?",
    answer: "Middleware functions execute between the request and response cycle, performing tasks like logging, authentication, and data processing. The different types of middleware are: Application-level Middleware, Router-level Middleware, Error-handling Middleware, Third-party Middleware, and Built-in Middleware."
  },
  {
    id: 8,
    question: "How does Node.js handle concurrency despite being single-threaded?",
    answer: "Node.js handles concurrency through asynchronous, non-blocking operations, allowing multiple tasks to run simultaneously within a single thread."
  },
  {
    id: 9,
    question: "What is a thread pool?",
    answer: "A thread pool in Node.js is like having a group of helpers (threads) ready to execute tasks that take some time, such as reading a file or making a network request. These helpers ensure that your main program keeps running smoothly without waiting for those tasks to finish."
  },
  {
    id: 10,
    question: "What is control flow in Node.js?",
    answer: "Control flow refers to the order in which code statements and functions are executed, managing asynchronous operations and error handling."
  }
];

// Make data available globally
window.beginner = beginner;