window.nodejsData = [
    {
        "id": 1,
        "question": "What is Nodejs?",
        "answer": "Node.js is a JavaScript engine used for executing JavaScript code outside the browser, commonly used to build scalable backend applications."
    },
    {
        "id": 2,
        "question": "What are the features of Nodejs 23?",
        "answer": "Node.js lets you run JavaScript code outside of a web browser to build fast and efficient applications. Faster Performance: The new V8 engine makes your applications run faster. WebAssembly (Wasm): Better support for running WebAssembly code, making it easier to run high-performance code in your applications. HTTP/3 Support: New and improved HTTP/3 protocol support for faster and more secure web communication. Native ES Modules Support: Among many other node.js updates, the services now natively provide support for ES modules, which facilitates code compatibility by standardizing the imports of modules."
    },
    {
        "id": 3,
        "question": "Is Node.js single-threaded?",
        "answer": "Yes, Node.js is single-threaded but uses event-driven architecture and non-blocking I/O to handle multiple requests efficiently."
    },
    {
        "id": 4,
        "question": "What is clustering in Nodejs?",
        "answer": "Clustering in Node.js is a way to use multiple CPU cores to run an application for better performance and handle more requests."
    },
    {
        "id": 5,
        "question": "What is a module in Node.js?",
        "answer": "A module in Node.js is a block of code that provides specific functionality, which can be reused across different parts of an application."
    },
    {
        "id": 6,
        "question": "What is concurrency?",
        "answer": "Concurrency is an essential feature of Node.js that enables it to handle large numbers of I/O operations simultaneously, without blocking the execution thread. This concurrency model allows Node.js to handle many requests concurrently, resulting in improved application performance."
    },
    {
        "id": 7,
        "question": "What is middleware?",
        "answer": "Middleware functions execute between the request and response cycle, performing tasks like logging, authentication, and data processing. The different types of middleware are: Application-level Middleware, Router-level Middleware, Error-handling Middleware, Third-party Middleware, and Built-in Middleware."
    },
    {
        "id": 8,
        "question": "How does Node.js handle concurrency despite being single-threaded?",
        "answer": "Node.js handles concurrency through asynchronous, non-blocking operations, allowing multiple tasks to run simultaneously within a single thread."
    },
    {
        "id": 9,
        "question": "What is a thread pool?",
        "answer": "A thread pool in Node.js is like having a group of helpers (threads) ready to execute tasks that take some time, such as reading a file or making a network request. These helpers ensure that your main program keeps running smoothly without waiting for those tasks to finish."
    },
    {
        "id": 10,
        "question": "What is control flow in Node.js?",
        "answer": "Control flow refers to the order in which code statements and functions are executed, managing asynchronous operations and error handling."
    },
    {
        "id": 11,
        "question": "What is REPL in Node.js?",
        "answer": "REPL stands for Read, Evaluate, Print, and Loop; it's an interactive environment for executing Node.js code and debugging."
    },
    {
        "id": 12,
        "question": "How to import a module in Node.js?",
        "answer": "Use the `require()` function to import external modules, storing the result in a variable for use in the application."
    },
    {
        "id": 13,
        "question": "What is package.json in Node.js?",
        "answer": "`package.json` is a metadata file in Node.js that contains information about the project, such as dependencies, scripts, and versions."
    },
    {
        "id": 14,
        "question": "^(Caret) vs ~(Tilde) in package.json",
        "answer": "^ (Caret) allows updates to newer minor or patch versions (e.g., `^1.2.3` can update to `1.2.4` or `1.3.0`, but not `2.0.0`). ~ (Tilde) allows updates only to newer patch versions (e.g., `~1.2.3` can update to `1.2.4` but not `1.3.0`)."
    },
    {
        "id": 15,
        "question": "Session vs Cookies",
        "answer": "Sessions store data on the server and last until the user closes the browser or logs out. Cookies store data on the client's browser and can last until deleted or expire. Sessions are ideal for sensitive data like login information, while cookies are useful for remembering user preferences."
    },
    {
        "id": 16,
        "question": "response.write vs response.send",
        "answer": "response.write is used in Node.js to send raw data in chunks to the client, while response.send in Express.js is a higher-level method that sends a complete HTTP response, which can include HTML, JSON, or plain text."
    },
    {
        "id": 17,
        "question": "What is the error-first callback?",
        "answer": "The 'error-first callback' is a convention in Node.js where the first parameter of the callback function is reserved for an error object. If an error occurs during an asynchronous operation, this error object is populated, otherwise, it is null or undefined."
    },
    {
        "id": 18,
        "question": "What is the difference between setImmediate() and process.nextTick() methods?",
        "answer": "`process.nextTick()` executes callbacks at the start of the next event loop, while `setImmediate()` executes them at the end of the current event loop."
    },
    {
        "id": 19,
        "question": "What is the child process in Nodejs?",
        "answer": "A child process in Node.js allows you to run another program or script from your main Node.js program, enabling parallel task execution without blocking the main program. This can be achieved using `spawn`, `fork`, or `exec` methods."
    },
    {
        "id": 20,
        "question": "What is event-driven programming in Node.js?",
        "answer": "Event-driven programming synchronizes multiple events using event loops and callback functions to simplify program flow."
    },
    {
        "id": 21,
        "question": "What is a buffer in Node.js?",
        "answer": "A buffer is a temporary storage space for binary data, allowing Node.js to handle raw data directly."
    },
    {
        "id": 22,
        "question": "What are streams in Node.js?",
        "answer": "Streams are objects used to handle continuous data flows, allowing for efficient reading and writing of data."
    },
    {
        "id": 23,
        "question": "What is callback hell?",
        "answer": "Callback hell refers to the problematic situation caused by deeply nested callbacks, making code difficult to read and maintain."
    },
    {
        "id": 24,
        "question": "What are the three methods to avoid callback hell?",
        "answer": "To avoid callback hell, use `async/await`, promises, or generators."
    },
    {
        "id": 25,
        "question": "What is body-parser in Node.js?",
        "answer": "Body-parser is a middleware that parses incoming request bodies in a middleware before handling it in Node.js applications."
    },
    {
        "id": 26,
        "question": "Explain the TLS module in Node.js.",
        "answer": "The TLS module provides an implementation of TLS and SSL protocols to establish secure network connections."
    },
    {
        "id": 27,
        "question": "What is a cluster in Node.js?",
        "answer": "A cluster allows Node.js to utilize multiple cores of a machine by creating child processes that share the same server port."
    },
    {
        "id": 28,
        "question": "process vs thread",
        "answer": "A process is a whole program running on your computer with its own memory and resources. A thread is a smaller unit within a process that does a specific task. A process can have multiple threads running simultaneously."
    },
    {
        "id": 29,
        "question": "What is rate limiting?",
        "answer": "Rate limiting is a technique used to control the amount of requests a user or client can make to a server within a specified time period. It is used to prevent abuse, ensure fair resource distribution, and protect against DDoS attacks."
    },
    {
        "id": 30,
        "question": "What is API caching (Redis)?",
        "answer": "API caching with Redis involves storing frequently requested API responses in Redis, an in-memory key-value store. This reduces the need to fetch data from the database every time, improving performance and reducing load."
    },
    {
        "id": 31,
        "question": "What is JWT Authentication & Authorization?",
        "answer": "JWT (JSON Web Token) is used for authentication and authorization in a stateless manner. It involves generating a signed token that contains user information, which can be sent with each request. The server verifies the token to authenticate and authorize the user."
    }
];
