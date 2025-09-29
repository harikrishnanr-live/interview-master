// Node.js Intermediate Level Q&A Data

let intermediate = [
  {
    id: 1,
    question: "What is REPL in Node.js?",
    answer: "REPL stands for Read, Evaluate, Print, and Loop; it's an interactive environment for executing Node.js code and debugging."
  },
  {
    id: 2,
    question: "How to import a module in Node.js?",
    answer: "Use the `require()` function to import external modules, storing the result in a variable for use in the application."
  },
  {
    id: 3,
    question: "What is package.json in Node.js?",
    answer: "`package.json` is a metadata file in Node.js that contains information about the project, such as dependencies, scripts, and versions."
  },
  {
    id: 4,
    question: "^(Caret) vs ~(Tilde) in package.json",
    answer: "^ (Caret) allows updates to newer minor or patch versions (e.g., `^1.2.3` can update to `1.2.4` or `1.3.0`, but not `2.0.0`). ~ (Tilde) allows updates only to newer patch versions (e.g., `~1.2.3` can update to `1.2.4` but not `1.3.0`)."
  },
  {
    id: 5,
    question: "Session vs Cookies",
    answer: "Sessions store data on the server and last until the user closes the browser or logs out. Cookies store data on the client's browser and can last until deleted or expire. Sessions are ideal for sensitive data like login information, while cookies are useful for remembering user preferences."
  },
  {
    id: 6,
    question: "response.write vs response.send",
    answer: "response.write is used in Node.js to send raw data in chunks to the client, while response.send in Express.js is a higher-level method that sends a complete HTTP response, which can include HTML, JSON, or plain text."
  },
  {
    id: 7,
    question: "What is the error-first callback?",
    answer: "The 'error-first callback' is a convention in Node.js where the first parameter of the callback function is reserved for an error object. If an error occurs during an asynchronous operation, this error object is populated, otherwise, it is null or undefined."
  },
  {
    id: 8,
    question: "What is the difference between setImmediate() and process.nextTick() methods?",
    answer: "`process.nextTick()` executes callbacks at the start of the next event loop, while `setImmediate()` executes them at the end of the current event loop."
  },
  {
    id: 9,
    question: "What is the child process in Nodejs?",
    answer: "A child process in Node.js allows you to run another program or script from your main Node.js program, enabling parallel task execution without blocking the main program. This can be achieved using `spawn`, `fork`, or `exec` methods."
  },
  {
    id: 10,
    question: "What is event-driven programming in Node.js?",
    answer: "Event-driven programming synchronizes multiple events using event loops and callback functions to simplify program flow."
  }
];

// Make data available globally
window.intermediate = intermediate;