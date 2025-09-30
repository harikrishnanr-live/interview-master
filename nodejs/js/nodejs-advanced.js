// Node.js Advanced Level Q&A Data

let advanced = [
  {
    id: 1,
    question: "What is a buffer in Node.js?",
    answer: "A buffer is a temporary storage space for binary data, allowing Node.js to handle raw data directly."
  },
  {
    id: 2,
    question: "What are streams in Node.js?",
    answer: "Streams are objects used to handle continuous data flows, allowing for efficient reading and writing of data."
  },
  {
    id: 3,
    question: "What is callback hell?",
    answer: "Callback hell refers to the problematic situation caused by deeply nested callbacks, making code difficult to read and maintain."
  },
  {
    id: 4,
    question: "What are the three methods to avoid callback hell?",
    answer: "To avoid callback hell, use `async/await`, promises, or generators."
  },
  {
    id: 5,
    question: "What is body-parser in Node.js?",
    answer: "Body-parser is a middleware that parses incoming request bodies in a middleware before handling it in Node.js applications."
  },
  {
    id: 6,
    question: "Explain the TLS module in Node.js.",
    answer: "The TLS module provides an implementation of TLS and SSL protocols to establish secure network connections."
  },
  {
    id: 7,
    question: "What is a cluster in Node.js?",
    answer: "A cluster allows Node.js to utilize multiple cores of a machine by creating child processes that share the same server port."
  },
  {
    id: 8,
    question: "process vs thread",
    answer: "A process is a whole program running on your computer with its own memory and resources. A thread is a smaller unit within a process that does a specific task. A process can have multiple threads running simultaneously."
  },
  {
    id: 9,
    question: "What is rate limiting?",
    answer: "Rate limiting is a technique used to control the amount of requests a user or client can make to a server within a specified time period. It is used to prevent abuse, ensure fair resource distribution, and protect against DDoS attacks."
  },
  {
    id: 10,
    question: "What is API caching (Redis)?",
    answer: "API caching with Redis involves storing frequently requested API responses in Redis, an in-memory key-value store. This reduces the need to fetch data from the database every time, improving performance and reducing load."
  },
  {
    id: 11,
    question: "What is JWT Authentication & Authorization?",
    answer: "JWT (JSON Web Token) is used for authentication and authorization in a stateless manner. It involves generating a signed token that contains user information, which can be sent with each request. The server verifies the token to authenticate and authorize the user."
  }
];

// Make data available globally
window.advanced = advanced;