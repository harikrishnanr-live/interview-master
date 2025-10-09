let beginner = [
  {
    id: 1,
    question: "What is Node.js?",
    answer:
      "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine, allowing you to execute JavaScript code outside the browser. It is commonly used to build scalable backend applications and network services.",
    realTimeExample:
      "Like a Swiss Army knife for JavaScript: It lets you use JavaScript for both frontend and backend, making it versatile for full-stack development.",
  },
  {
    id: 2,
    question: "What are the features of Node.js 23?",
    answer:
      "Node.js 23 includes several key features: Faster performance with the updated V8 engine, WebAssembly (Wasm) support for high-performance code, HTTP/3 protocol support for faster and more secure web communication, and native ES modules support for better code compatibility and standardization.",
    realTimeExample:
      "Like upgrading your car: Node.js 23 is like getting a faster engine (V8), better fuel (Wasm), a smoother ride (HTTP/3), and a more intuitive dashboard (ES modules).",
  },
  {
    id: 3,
    question: "Is Node.js single-threaded?",
    answer:
      "Yes, Node.js is single-threaded, but it uses an event-driven architecture and non-blocking I/O operations to handle multiple requests efficiently. This allows it to manage concurrency without using multiple threads.",
    realTimeExample:
      "Like a skilled chef: Even though there's only one chef (thread), they can handle multiple orders (requests) efficiently by delegating tasks (non-blocking I/O) to kitchen assistants (event loop).",
  },
  {
    id: 4,
    question: "What is clustering in Node.js?",
    answer:
      "Clustering in Node.js allows you to create multiple instances of your application, each running in its own process. This enables you to utilize multiple CPU cores, improving performance and allowing the application to handle more requests.",
    syntax: "const cluster = require('cluster'); cluster.fork();",
    example:
      "if (cluster.isMaster) {\n  for (let i = 0; i < numCPUs; i++) cluster.fork();\n} else {\n  app.listen(3000);\n}",
    realTimeExample:
      "Like opening multiple cashier counters: Each counter (process) handles its own line of customers (requests), reducing wait times and improving efficiency.",
  },
  {
    id: 5,
    question: "What is a module in Node.js?",
    answer:
      "A module in Node.js is a reusable block of code that provides specific functionality. Modules can be core modules (built into Node.js), local modules (created by you), or third-party modules (installed via npm).",
    syntax: "const module = require('module-name');",
    example:
      "const fs = require('fs'); // Core module\nconst myModule = require('./myModule'); // Local module",
    realTimeExample:
      "Like LEGO blocks: Each block (module) has a specific function, and you can combine them to build complex structures (applications).",
  },
  {
    id: 6,
    question: "What is concurrency?",
    answer:
      "Concurrency in Node.js refers to its ability to handle multiple I/O operations simultaneously without blocking the execution thread. This is achieved through asynchronous, non-blocking operations, allowing Node.js to manage many requests at once.",
    realTimeExample:
      "Like a multitasking assistant: They can take phone calls (I/O operations), respond to emails (requests), and manage schedules (tasks) all at the same time without getting overwhelmed.",
  },
  {
    id: 7,
    question: "What is middleware?",
    answer:
      "Middleware in Node.js (especially in Express.js) are functions that execute during the request-response cycle. They can perform tasks like logging, authentication, and data processing. Middleware functions have access to the request and response objects and can modify them or end the cycle.",
    syntax: "app.use(middlewareFunction);",
    example:
      "app.use((req, res, next) => {\n  console.log('Request received');\n  next();\n});",
    realTimeExample:
      "Like a series of security checkpoints: Each checkpoint (middleware) performs a specific task (e.g., ID check, bag scan) before allowing you to proceed (next()).",
  },
  {
    id: 8,
    question: "How does Node.js handle concurrency despite being single-threaded?",
    answer:
      "Node.js handles concurrency using an event-driven architecture and non-blocking I/O operations. When an I/O operation is initiated, Node.js doesn't wait for it to complete. Instead, it registers a callback and continues executing other code. Once the I/O operation is done, the callback is executed.",
    realTimeExample:
      "Like a restaurant with one waiter: The waiter (single thread) takes orders (requests) and sends them to the kitchen (I/O operations). While waiting for the food, the waiter takes more orders. When the food is ready, the waiter delivers it (callback execution).",
  },
  {
    id: 9,
    question: "What is a thread pool?",
    answer:
      "A thread pool in Node.js is a collection of pre-instantiated threads that are used to execute tasks that would otherwise block the main thread, such as file I/O or network requests. The thread pool allows Node.js to handle these tasks asynchronously, improving performance.",
    realTimeExample:
      "Like a team of delivery drivers: The main office (main thread) assigns delivery tasks (I/O operations) to available drivers (threads in the pool), ensuring that deliveries (tasks) are handled efficiently without blocking the office's operations.",
  },
  {
    id: 10,
    question: "What is control flow in Node.js?",
    answer:
      "Control flow in Node.js refers to the order in which code statements and functions are executed, especially in asynchronous operations. It involves managing the execution of callbacks, promises, and async/await to ensure that operations are performed in the correct sequence and errors are handled properly.",
    realTimeExample:
      "Like a traffic controller: They manage the flow of vehicles (code execution), ensuring that each vehicle (operation) moves in the correct order and reaches its destination (completion) without collisions (errors).",
  },
  {
    id: 11,
    question: "How do you install Node.js?",
    answer:
      "You can install Node.js by downloading the installer from the official Node.js website (nodejs.org) and running it. Alternatively, you can use package managers like `apt` for Ubuntu, `brew` for macOS, or `chocolatey` for Windows.",
    syntax: "node --version, npm --version",
    example:
      "After installation, check the installed versions:\nnode --version\nnpm --version",
    realTimeExample:
      "Like installing a new app on your phone: You download the installer (or use an app store) and run it. Once installed, you can check the app version to ensure it's ready to use.",
  },
  {
    id: 12,
    question: "What is npm?",
    answer:
      "npm (Node Package Manager) is the default package manager for Node.js. It is used to install, manage, and share JavaScript packages and dependencies, making it easy to include third-party libraries in your projects.",
    syntax: "npm install <package-name>, npm init",
    example:
      "Install a package:\nnpm install express\nInitialize a new project:\nnpm init",
    realTimeExample:
      "Like an app store for your code: You can browse, download, and manage libraries (apps) that add functionality to your project (device).",
  },
  {
    id: 13,
    question: "How do you create a simple HTTP server in Node.js?",
    answer:
      "You can create a simple HTTP server using the built-in `http` module. The server listens for incoming requests and sends responses.",
    syntax: "const http = require('http'); http.createServer().listen(port);",
    example:
      "const http = require('http');\nconst server = http.createServer((req, res) => {\n  res.end('Hello World');\n});\nserver.listen(3000, () => {\n  console.log('Server running on port 3000');\n});",
    realTimeExample:
      "Like setting up a small shop: The server (shop) waits for customers (requests) and gives them what they ask for (responses).",
  },
  {
    id: 14,
    question: "What is the fs module in Node.js?",
    answer:
      "The `fs` (File System) module in Node.js provides methods for interacting with the file system. It allows you to read, write, and manipulate files and directories.",
    syntax: "const fs = require('fs'); fs.readFile(), fs.writeFile()",
    example:
      "Read a file:\nfs.readFile('file.txt', 'utf8', (err, data) => {\n  if (err) throw err;\n  console.log(data);\n});",
    realTimeExample:
      "Like a librarian: The `fs` module helps you read books (files) from shelves (directories) and put new books back (write files).",
  },
  {
    id: 15,
    question: "What is asynchronous programming in Node.js?",
    answer:
      "Asynchronous programming in Node.js allows operations to run in the background without blocking the main thread. This is achieved using callbacks, promises, or async/await, enabling efficient handling of I/O operations and improving application performance.",
    syntax: "fs.readFile(path, callback), async function() { await promise; }",
    example:
      "Read a file asynchronously:\nfs.readFile('file.txt', (err, data) => {\n  if (err) throw err;\n  console.log(data);\n});",
    realTimeExample:
      "Like ordering food at a restaurant: You place your order (initiate an operation) and continue chatting (executing other code) while waiting for your food (operation result).",
  },
  {
    id: 16,
    question: "What are callbacks in Node.js?",
    answer:
      "Callbacks in Node.js are functions passed as arguments to other functions. They are executed after an asynchronous operation completes, allowing you to handle the result or error of the operation.",
    syntax: "function asyncOperation(callback) { /* operation */ callback(); }",
    example:
      "Read a file using a callback:\nfs.readFile('file.txt', (err, data) => {\n  if (err) throw err;\n  console.log(data);\n});",
    realTimeExample:
      "Like leaving a message: 'Call me back when you're done' — the callback is the action taken after the operation completes.",
  },
  {
    id: 17,
    question: "What are promises in Node.js?",
    answer:
      "Promises in Node.js represent the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises provide a cleaner way to handle asynchronous code compared to callbacks, using `.then()` for success and `.catch()` for errors.",
    syntax: "new Promise((resolve, reject) => { /* operation */ }); promise.then().catch();",
    example:
      "Create a promise:\nconst promise = new Promise((resolve) => {\n  setTimeout(() => resolve('Done'), 1000);\n});\npromise.then(console.log);",
    realTimeExample:
      "Like ordering online: You get a confirmation (promise) that your package will arrive, and you can plan what to do when it does (`.then()`).",
  },
  {
    id: 18,
    question: "What is async/await in Node.js?",
    answer:
      "Async/await is a modern syntax for handling asynchronous operations in Node.js. It allows you to write asynchronous code in a synchronous style, making it easier to read and maintain. `async` defines an asynchronous function, and `await` pauses the execution until the promise is resolved.",
    syntax: "async function myFunction() { const result = await promise; }",
    example:
      "Read a file using async/await:\nasync function readFile() {\n  const data = await fs.promises.readFile('file.txt', 'utf8');\n  console.log(data);\n}",
    realTimeExample:
      "Like waiting in line: You stand there (await) until it's your turn, but you can still breathe and think (other operations) while waiting.",
  },
  {
    id: 19,
    question: "How do you handle errors in Node.js?",
    answer:
      "In Node.js, you can handle errors using `try/catch` blocks for synchronous code, error-first callbacks for asynchronous operations, and `.catch()` for promises. Always check for errors to prevent crashes and provide meaningful feedback.",
    syntax: "try { /* code */ } catch (error) { /* handle error */ }, callback(err, data), promise.catch(err => { /* handle error */ })",
    example:
      "Handle errors in a callback:\nfs.readFile('file.txt', (err, data) => {\n  if (err) {\n    console.error(err);\n    return;\n  }\n  console.log(data);\n});",
    realTimeExample:
      "Like having insurance: It protects you when unexpected things happen, so your program doesn't crash.",
  },
  {
    id: 20,
    question: "What is the event loop in Node.js?",
    answer:
      "The event loop in Node.js is a mechanism that allows Node.js to perform non-blocking I/O operations. It handles asynchronous callbacks and keeps the application responsive by continuously checking the call stack and the callback queue.",
    realTimeExample:
      "Like a busy waiter: The waiter takes orders (events), sends them to the kitchen (I/O), and serves other tables while waiting for the food (callbacks) to be ready.",
  },
  {
    id: 21,
    question: "What is the difference between require() and import?",
    answer:
      "In Node.js, `require()` is the CommonJS syntax for importing modules, while `import` is the ES6 modules syntax. Node.js supports both, but `import` is more modern and requires setting `'type': 'module'` in your `package.json`.",
    syntax: "const module = require('module'); import module from 'module';",
    example:
      "CommonJS:\nconst fs = require('fs');\nES6:\nimport fs from 'fs';",
    realTimeExample:
      "Like different ways to invite friends: `require()` is like calling them on the phone, while `import` is like sending a text invite.",
  },
  {
    id: 22,
    question: "What is package.json?",
    answer:
      "The `package.json` file contains metadata about your Node.js project, including dependencies, scripts, and project information. It is created using `npm init` and is essential for managing project dependencies and configurations.",
    syntax: "npm init, npm install --save <package>",
    example:
      "Example `package.json`:\n{\n  'name': 'my-app',\n  'version': '1.0.0',\n  'dependencies': {\n    'express': '^4.17.1'\n  }\n}",
    realTimeExample:
      "Like a recipe card: It lists all the ingredients (dependencies) and instructions (scripts) needed to make the dish (your app).",
  },
  {
    id: 23,
    question: "What are environment variables in Node.js?",
    answer:
      "Environment variables in Node.js are key-value pairs that store configuration data outside of your code. They are accessed via `process.env` and are useful for storing sensitive data like API keys and database credentials.",
    syntax: "process.env.VARIABLE_NAME, export VARIABLE=value",
    example:
      "Access an environment variable:\nconst port = process.env.PORT || 3000;",
    realTimeExample:
      "Like secret notes: You can pass information to your app without hardcoding it in the code, keeping sensitive data secure.",
  },
  {
    id: 24,
    question: "What is the process object in Node.js?",
    answer:
      "The `process` object in Node.js provides information about, and control over, the current Node.js process. It is a global object and includes properties like `process.env` for environment variables, `process.argv` for command-line arguments, and methods like `process.exit()` to end the process.",
    syntax: "process.env, process.argv, process.exit()",
    example:
      "Log the Node.js version:\nconsole.log(process.version);",
    realTimeExample:
      "Like the dashboard of your car: It shows you important information (environment variables, arguments) and lets you control the vehicle (exit the process).",
  },
  {
    id: 25,
    question: "What are buffers in Node.js?",
    answer:
      "Buffers in Node.js are temporary storage for binary data, used for handling streams of data like file I/O or network communication. Buffers are especially useful for dealing with raw binary data, such as images or network packets.",
    syntax: "Buffer.from(), Buffer.alloc()",
    example:
      "Create a buffer:\nconst buf = Buffer.from('Hello World');",
    realTimeExample:
      "Like a waiting room: It holds data temporarily before it's processed or sent somewhere else.",
  },
  {
    id: 26,
    question: "What are streams in Node.js?",
    answer:
      "Streams in Node.js are objects that allow you to read or write data in chunks, enabling efficient handling of large files or data without loading everything into memory at once. Streams are particularly useful for handling large datasets or real-time data processing.",
    syntax: "fs.createReadStream(), fs.createWriteStream()",
    example:
      "Create a read stream:\nconst readStream = fs.createReadStream('large-file.txt');",
    realTimeExample:
      "Like a hose: Water (data) flows through in a continuous stream rather than in one big bucket, making it easier to manage large volumes.",
  },
  {
    id: 27,
    question: "How do you create a simple Express.js server?",
    answer:
      "To create a simple Express.js server, install Express, create an Express app, define routes, and start the server to listen on a specific port.",
    syntax: "npm install express, app.get(), app.listen()",
    example:
      "Create a basic server:\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => res.send('Hello'));\napp.listen(3000, () => console.log('Server running on port 3000'));",
    realTimeExample:
      "Like opening a restaurant: You set up the kitchen (Express app), define the menu (routes), and open the doors (listen on a port) for customers (requests).",
  },
  {
    id: 28,
    question: "What is routing in Express.js?",
    answer:
      "Routing in Express.js defines how the application responds to client requests for specific endpoints. It uses HTTP methods (GET, POST, PUT, DELETE) and URL patterns to determine the appropriate response.",
    syntax: "app.get('/path', handler), app.post('/path', handler)",
    example:
      "Define a route:\napp.get('/users', (req, res) => {\n  res.json(users);\n});",
    realTimeExample:
      "Like a GPS: It guides you from your current location (request) to your destination (response) based on the route (endpoint) you choose.",
  },
  {
    id: 29,
    question: "What is middleware in Express.js?",
    answer:
      "Middleware in Express.js are functions that have access to the request and response objects and can modify them or end the request-response cycle. Middleware functions can perform tasks like logging, authentication, and data processing.",
    syntax: "app.use(middleware), function middleware(req, res, next) { }",
    example:
      "Use JSON parsing middleware:\napp.use(express.json());",
    realTimeExample:
      "Like airport security: Each checkpoint (middleware) performs a specific task (e.g., ID check, bag scan) before allowing you to proceed (next()).",
  },
  {
    id: 30,
    question: "How do you handle static files in Express.js?",
    answer:
      "To handle static files in Express.js, use the `express.static()` middleware. This allows you to serve static files like images, CSS, and JavaScript from a specified directory.",
    syntax: "app.use(express.static('public'))",
    example:
      "Serve static files:\napp.use(express.static('public'));",
    realTimeExample:
      "Like a file server: It makes your photos, documents, and other files available for download when requested by users.",
  },
  {
    id: 31,
    question: "What is the difference between PUT and PATCH?",
    answer:
      "In Express.js, `PUT` is used to replace an entire resource, while `PATCH` is used to apply partial modifications to a resource. `PUT` updates the entire entity, whereas `PATCH` only updates the specified fields.",
    syntax: "app.put('/resource/:id'), app.patch('/resource/:id')",
    example:
      "PUT example:\napp.put('/users/1', (req, res) => {\n  // Replace entire user\n});\nPATCH example:\napp.patch('/users/1', (req, res) => {\n  // Update only specified fields\n});",
    realTimeExample:
      "PUT is like repainting the entire house, while PATCH is like touching up a single wall.",
  },
  {
    id: 32,
    question: "How do you connect to a database in Node.js?",
    answer:
      "To connect to a database in Node.js, use database-specific drivers or ORMs. For MongoDB, you can use `mongoose`, and for SQL databases, you can use packages like `mysql` or `pg`.",
    syntax: "const mongoose = require('mongoose'); mongoose.connect(uri);",
    example:
      "Connect to MongoDB:\nmongoose.connect('mongodb://localhost/myapp');",
    realTimeExample:
      "Like plugging in a USB drive: It establishes a connection so you can read and write data to the database.",
  },
  {
    id: 33,
    question: "What is CORS in Node.js?",
    answer:
      "CORS (Cross-Origin Resource Sharing) is a security feature that allows or restricts requests from different origins. In Node.js, you can use the `cors` middleware in Express to enable CORS and configure which origins are allowed to access your resources.",
    syntax: "npm install cors, app.use(cors())",
    example:
      "Enable CORS:\napp.use(cors({ origin: 'http://localhost:3000' }));",
    realTimeExample:
      "Like a bouncer at a club: They decide who can enter (make requests) based on where they're from (origin).",
  },
  {
    id: 34,
    question: "How do you handle file uploads in Node.js?",
    answer:
      "To handle file uploads in Node.js, use middleware like `multer`, which is designed for handling `multipart/form-data` used in file uploads. `multer` makes it easy to process file uploads in web forms.",
    syntax: "npm install multer, const upload = multer()",
    example:
      "Handle a file upload:\napp.post('/upload', upload.single('file'), (req, res) => {\n  console.log(req.file);\n});",
    realTimeExample:
      "Like a mailbox: It accepts letters (files) and delivers them to the right person (server).",
  },
  {
    id: 35,
    question: "What is JWT in Node.js?",
    answer:
      "JWT (JSON Web Token) is a compact, URL-safe means of representing claims between two parties. In Node.js, JWTs are commonly used for authentication and secure information exchange. They consist of three parts: header, payload, and signature.",
    syntax: "npm install jsonwebtoken, jwt.sign(), jwt.verify()",
    example:
      "Create a JWT:\nconst token = jwt.sign({ userId: 123 }, 'secret');",
    realTimeExample:
      "Like a VIP pass: It proves who you are and what you're allowed to access, ensuring secure and authorized entry.",
  },
  {
    id: 36,
    question: "How do you schedule tasks in Node.js?",
    answer:
      "In Node.js, you can schedule tasks using `setTimeout()` for one-time delays, `setInterval()` for repeated tasks, or libraries like `node-cron` for cron-like scheduling. These tools allow you to execute code at specific times or intervals.",
    syntax: "setTimeout(callback, delay), setInterval(callback, interval)",
    example:
      "Schedule a task:\nsetTimeout(() => console.log('Hello'), 1000);",
    realTimeExample:
      "Like setting an alarm: It tells your app to do something at a specific time or repeatedly, ensuring tasks are executed on schedule.",
  },
  {
    id: 37,
    question: "What is the global object in Node.js?",
    answer:
      "The global object in Node.js provides variables and functions that are available throughout the application. It is similar to the `window` object in browsers and includes properties like `global.variable`, `console`, and `setTimeout`.",
    syntax: "global.variable = value, console, setTimeout",
    example:
      "Set a global variable:\nglobal.myVar = 'Hello';\nconsole.log(global.myVar);",
    realTimeExample:
      "Like a public bulletin board: Everyone in the app can see and use what's posted there, making it accessible across the entire application.",
  },
  {
    id: 38,
    question: "How do you debug Node.js applications?",
    answer:
      "You can debug Node.js applications using the built-in debugger with the `--inspect` flag, `console.log()` for simple debugging, or tools like the VS Code debugger and `node-inspector`. These tools help you identify and fix issues in your code.",
    syntax: "node --inspect app.js, debugger;",
    example:
      "Start debugging:\nnode --inspect-brk app.js",
    realTimeExample:
      "Like a detective: You pause the action to examine clues (variables) and figure out what's happening in your code.",
  },
  {
    id: 39,
    question: "What is the REPL in Node.js?",
    answer:
      "REPL (Read-Eval-Print Loop) in Node.js is an interactive shell for running JavaScript code. It is useful for testing snippets of code and exploring APIs without creating a full script.",
    syntax: "node, .help, .exit",
    example:
      "Start the REPL:\nType `node` in the terminal, then enter JavaScript code:\n> console.log('Hello');",
    realTimeExample:
      "Like a calculator: You type in expressions and immediately see the results, making it easy to test and experiment with code.",
  },
  {
    id: 40,
    question: "How do you handle child processes in Node.js?",
    answer:
      "In Node.js, you can handle child processes using the `child_process` module. This module allows you to spawn new processes, execute commands, or run other Node.js scripts, enabling parallel processing and better resource utilization.",
    syntax: "const { spawn } = require('child_process'); spawn('command', args);",
    example:
      "Execute a command:\nconst { exec } = require('child_process');\nexec('ls', (err, stdout) => console.log(stdout));",
    realTimeExample:
      "Like hiring assistants: Your main app (parent process) delegates tasks to child processes (assistants) that work independently, improving efficiency.",
  },
  {
    id: 41,
    question: "What is the path module in Node.js?",
    answer:
      "The `path` module in Node.js provides utilities for working with file and directory paths. It helps handle path differences between operating systems, such as Windows using backslashes and Unix using forward slashes.",
    syntax: "const path = require('path'); path.join(), path.resolve()",
    example:
      "Join paths:\nconst fullPath = path.join(__dirname, 'public', 'index.html');",
    realTimeExample:
      "Like a map: It helps you navigate and construct correct file paths regardless of the operating system, ensuring you find the right location (file or directory).",
  },
  {
    id: 42,
    question: "How do you read command line arguments in Node.js?",
    answer:
      "In Node.js, you can read command line arguments using the `process.argv` array. The first element is the Node.js executable path, the second is the script file path, and the rest are the arguments passed to the script.",
    syntax: "process.argv",
    example:
      "Access command line arguments:\nconsole.log(process.argv[2]); // First argument after script name",
    realTimeExample:
      "Like reading instructions: Your app can take commands from the command line when started, allowing for flexible and dynamic execution.",
  },
  {
    id: 43,
    question: "What is the os module in Node.js?",
    answer:
      "The `os` module in Node.js provides operating system-related utility methods and properties. It allows you to retrieve information about the operating system, such as the platform, CPU architecture, and memory usage.",
    syntax: "const os = require('os'); os.platform(), os.cpus()",
    example:
      "Get the platform:\nconsole.log(os.platform()); // 'win32', 'linux', etc.",
    realTimeExample:
      "Like asking your computer questions: What OS are you running? How many CPUs do you have? The `os` module provides these answers.",
  },
  {
    id: 44,
    question: "How do you create and use custom modules in Node.js?",
    answer:
      "To create and use custom modules in Node.js, create a JavaScript file and use `module.exports` or `exports` to expose functions, objects, or variables. Then, require the file in other parts of your application to use the module.",
    syntax: "module.exports = function() {}; const myModule = require('./myModule');",
    example:
      "In `greet.js`:\nmodule.exports = function(name) {\n  return `Hello, ${name}!`;\n};\nIn `app.js`:\nconst greet = require('./greet');\nconsole.log(greet('Alice'));",
    realTimeExample:
      "Like building with LEGO: You create a custom piece (module) and use it in different projects, making your code reusable and modular.",
  },
  {
    id: 45,
    question: "What is the util module in Node.js?",
    answer:
      "The `util` module in Node.js provides utility functions for debugging, formatting, and type checking. It includes methods like `util.inspect()` for debugging objects and `util.promisify()` for converting callback-based functions to promises.",
    syntax: "const util = require('util'); util.inspect(), util.promisify()",
    example:
      "Convert a callback function to a promise:\nconst readFile = util.promisify(fs.readFile);\nreadFile('file.txt', 'utf8').then(data => console.log(data));",
    realTimeExample:
      "Like a Swiss Army knife: It offers a variety of tools for common programming tasks, making it versatile and handy for developers.",
  },
  {
    id: 46,
    question: "How do you handle JSON data in Node.js?",
    answer:
      "In Node.js, you can handle JSON data using `JSON.parse()` to convert JSON strings to JavaScript objects and `JSON.stringify()` to convert JavaScript objects to JSON strings. These methods are essential for working with JSON data in APIs and configuration files.",
    syntax: "JSON.parse(jsonString), JSON.stringify(object)",
    example:
      "Parse JSON:\nconst obj = JSON.parse('{\"name\": \"John\"}');\nStringify object:\nconst json = JSON.stringify({name: 'John'});",
    realTimeExample:
      "Like translating languages: `JSON.parse()` reads the foreign language (JSON), and `JSON.stringify()` writes it, ensuring seamless communication between systems.",
  },
  {
    id: 47,
    question: "What is the crypto module in Node.js?",
    answer:
      "The `crypto` module in Node.js provides cryptographic functionality, including hashing, encryption, and digital signatures. It is useful for securing data and implementing authentication mechanisms.",
    syntax: "const crypto = require('crypto'); crypto.createHash(), crypto.randomBytes()",
    example:
      "Create a hash:\nconst hash = crypto.createHash('sha256').update('password').digest('hex');",
    realTimeExample:
      "Like a safe: It protects sensitive information with encryption and secure hashing, ensuring data integrity and confidentiality.",
  },
  {
    id: 48,
    question: "How do you implement basic authentication in Express.js?",
    answer:
      "To implement basic authentication in Express.js, use middleware to check credentials. For basic authentication, decode the base64-encoded username and password from the `Authorization` header and verify them against your user database.",
    syntax: "app.use((req, res, next) => { const auth = req.headers.authorization; });",
    example:
      "Decode credentials:\nconst credentials = Buffer.from(auth.split(' ')[1], 'base64').toString().split(':');",
    realTimeExample:
      "Like showing ID at a door: The bouncer (middleware) checks if your credentials (ID) match before letting you in (granting access).",
  },
  {
    id: 49,
    question: "What are route parameters in Express.js?",
    answer:
      "Route parameters in Express.js are named URL segments that capture values specified at their position in the URL. They are used to extract dynamic values from the URL, such as an ID or username, and make them available in the request object.",
    syntax: "app.get('/users/:id', (req, res) => { req.params.id });",
    example:
      "Define a route with parameters:\napp.get('/users/:id', (req, res) => {\n  const userId = req.params.id;\n  res.send(`User ID: ${userId}`);\n});",
    realTimeExample:
      "Like address labels: `/users/:id` is like 'User number [id]', where `id` gets filled in with the actual value from the URL.",
  },
  {
    id: 50,
    question: "How do you serve JSON responses in Express.js?",
    answer:
      "In Express.js, you can serve JSON responses using the `res.json()` method. This method automatically sets the appropriate headers and converts the JavaScript object to a JSON string, making it easy to send structured data to the client.",
    syntax: "res.json(object)",
    example:
      "Send a JSON response:\napp.get('/api/users', (req, res) => {\n  res.json({ users: [] });\n});",
    realTimeExample:
      "Like sending a letter: `res.json()` packages your data nicely and mails it to the client, ensuring it arrives in a readable format.",
  },
  {
    id: 51,
    question: "What is body parsing in Express.js?",
    answer:
      "Body parsing in Express.js involves using middleware to extract data from HTTP request bodies and make it available in the `req.body` object. This is essential for handling form submissions and JSON payloads in POST and PUT requests.",
    syntax: "app.use(express.json()), app.use(express.urlencoded())",
    example:
      "Parse JSON bodies:\napp.use(express.json());\napp.post('/login', (req, res) => {\n  console.log(req.body.username);\n});",
    realTimeExample:
      "Like opening a package: It unwraps the data sent in POST requests so you can use it in your application.",
  },
  {
    id: 52,
    question: "How do you handle 404 errors in Express.js?",
    answer:
      "To handle 404 errors in Express.js, add a catch-all route at the end of your route definitions. This route will respond with a 404 status for any unmatched routes, ensuring users receive a proper error message when requesting non-existent resources.",
    syntax: "app.use((req, res) => { res.status(404).send('Not Found'); });",
    example:
      "Handle 404 errors:\napp.get('/api/*', (req, res) => {\n  res.status(404).json({ error: 'API endpoint not found' });\n});",
    realTimeExample:
      "Like a 'page not found' sign: When someone asks for something that doesn't exist, you show them this sign to let them know it's not available.",
  },
  {
    id: 53,
    question: "What is session management in Express.js?",
    answer:
      "Session management in Express.js involves using middleware like `express-session` to create and manage user sessions. Sessions store user data across multiple requests, allowing you to maintain state and track user activity.",
    syntax: "npm install express-session, app.use(session({ secret: 'key' }))",
    example:
      "Set up session management:\napp.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: true }));\nreq.session.userId = 123;",
    realTimeExample:
      "Like a shopping cart: It remembers what you've added across different pages of the store, ensuring a seamless user experience.",
  },
  {
    id: 54,
    question: "How do you implement rate limiting in Express.js?",
    answer:
      "To implement rate limiting in Express.js, use middleware like `express-rate-limit`. This middleware limits the number of requests a client can make in a given time window, helping to prevent abuse and ensure fair usage of your API.",
    syntax: "npm install express-rate-limit, const limiter = rateLimit({ windowMs: 60000, max: 100 });",
    example:
      "Apply rate limiting:\napp.use(limiter);",
    realTimeExample:
      "Like a speed limit: It prevents clients from making too many requests too quickly, ensuring smooth and fair operation of your service.",
  },
  {
    id: 55,
    question: "What is the difference between app.use() and app.get()?",
    answer:
      "In Express.js, `app.use()` applies middleware to all routes matching the specified path, while `app.get()` handles GET requests to a specific route. `app.use()` is more general and can be used for any HTTP method, whereas `app.get()` is specific to GET requests.",
    syntax: "app.use('/api', middleware), app.get('/users', handler)",
    example:
      "Apply middleware to all routes:\napp.use(express.json());\nHandle GET requests:\napp.get('/users', getUsers);",
    realTimeExample:
      "`app.use()` is like a general rule for a neighborhood, while `app.get()` is specific directions to one house.",
  },
  {
    id: 56,
    question: "How do you set up HTTPS in Node.js?",
    answer:
      "To set up HTTPS in Node.js, use the `https` module with SSL certificates. Provide the key and certificate options to the `createServer` method to enable secure communication over HTTPS.",
    syntax: "const https = require('https'); https.createServer({ key, cert }, app)",
    example:
      "Create an HTTPS server:\nconst options = {\n  key: fs.readFileSync('key.pem'),\n  cert: fs.readFileSync('cert.pem')\n};\nhttps.createServer(options, app).listen(443);",
    realTimeExample:
      "Like locking your front door: HTTPS encrypts communication between the client and server, ensuring data privacy and security.",
  },
  {
    id: 57,
    question: "What is the cluster module in Node.js?",
    answer:
      "The `cluster` module in Node.js allows you to create child processes that share server ports, enabling you to utilize multiple CPU cores. This improves performance and allows your application to handle more requests by distributing the workload across processes.",
    syntax: "const cluster = require('cluster'); cluster.fork()",
    example:
      "Create a cluster:\nif (cluster.isMaster) {\n  for (let i = 0; i < numCPUs; i++) cluster.fork();\n} else {\n  app.listen(3000);\n}",
    realTimeExample:
      "Like a team of workers: Multiple processes (workers) handle requests, sharing the workload and improving efficiency.",
  },
  {
    id: 58,
    question: "How do you implement logging in Node.js?",
    answer:
      "To implement logging in Node.js, you can use `console` methods for simple logging or libraries like `winston` or `morgan` for more structured and advanced logging. Logging is essential for debugging, monitoring, and maintaining your application.",
    syntax: "console.log(), npm install winston",
    example:
      "Set up logging with Winston:\nconst winston = require('winston');\nconst logger = winston.createLogger({\n  transports: [new winston.transports.File({ filename: 'app.log' })]\n});",
    realTimeExample:
      "Like a diary: It records what your application is doing, helping you debug and monitor its activity over time.",
  },
  {
    id: 59,
    question: "What is the dns module in Node.js?",
    answer:
      "The `dns` module in Node.js provides functions for performing DNS lookups and name resolution. It allows you to translate domain names to IP addresses and vice versa, which is essential for network communication and web requests.",
    syntax: "const dns = require('dns'); dns.lookup(), dns.resolve()",
    example:
      "Perform a DNS lookup:\ndns.lookup('google.com', (err, address) => console.log(address));",
    realTimeExample:
      "Like a phone book: It translates domain names (names) to IP addresses (phone numbers), making it easy to connect to the right server.",
  },
  {
    id: 60,
    question: "How do you handle WebSockets in Node.js?",
    answer:
      "To handle WebSockets in Node.js, use libraries like `ws` or `socket.io`. WebSockets enable real-time, bidirectional communication between the client and server, making them ideal for applications like chat apps and live updates.",
    syntax: "npm install ws, const WebSocket = require('ws');",
    example:
      "Create a WebSocket server:\nconst wss = new WebSocket.Server({ port: 8080 });\nwss.on('connection', ws => {\n  ws.send('Hello');\n});",
    realTimeExample:
      "Like a phone call: It maintains an open connection for instant, two-way communication between the client and server.",
  },
  {
    id: 61,
    question: "What is the querystring module in Node.js?",
    answer:
      "The `querystring` module in Node.js provides utilities for parsing and formatting URL query strings. It allows you to convert query strings to objects and vice versa, making it easy to work with URL parameters in your applications.",
    syntax: "const qs = require('querystring'); qs.parse(), qs.stringify()",
    example:
      "Parse a query string:\nqs.parse('name=John&age=30'); // { name: 'John', age: '30' }",
    realTimeExample:
      "Like decoding a secret message: It turns URL parameters into usable data, making it easy to extract and work with query information.",
  },
  {
    id: 62,
    question: "How do you implement caching in Node.js?",
    answer:
      "To implement caching in Node.js, you can use in-memory caching with objects or maps, or libraries like `node-cache` or `Redis` for distributed caching. Caching improves performance by storing frequently accessed data in memory, reducing the need to fetch it repeatedly.",
    syntax: "const cache = {}; cache[key] = value;",
    example:
      "Use node-cache:\nconst NodeCache = require('node-cache');\nconst cache = new NodeCache();\ncache.set('key', 'value');",
    realTimeExample:
      "Like a memory palace: It stores frequently used data for quick access, improving the speed and efficiency of your application.",
  },
  {
    id: 63,
    question: "What is the zlib module in Node.js?",
    answer:
      "The `zlib` module in Node.js provides compression and decompression functionality using algorithms like gzip and deflate. It is useful for reducing the size of data, making it faster to transfer and store.",
    syntax: "const zlib = require('zlib'); zlib.gzip(), zlib.gunzip()",
    example:
      "Compress data:\nzlib.gzip(Buffer.from('Hello World'), (err, buffer) => {});",
    realTimeExample:
      "Like a zip file: It compresses data to save space and transfer it faster, making your application more efficient.",
  },
  {
    id: 64,
    question: "How do you handle file watching in Node.js?",
    answer:
      "To handle file watching in Node.js, use `fs.watch()` or `fs.watchFile()` to monitor file changes. For better cross-platform support, you can use libraries like `chokidar`. File watching is useful for triggering actions when files are modified, such as reloading configurations or rebuilding assets.",
    syntax: "fs.watch(filename, callback)",
    example:
      "Watch a file:\nfs.watch('file.txt', (eventType, filename) => {\n  console.log('File changed');\n});",
    realTimeExample:
      "Like a security camera: It alerts you when files are modified, allowing you to respond to changes in real time.",
  },
  {
    id: 65,
    question: "What is the events module in Node.js?",
    answer:
      "The `events` module in Node.js provides the `EventEmitter` class, which is used to implement the observer pattern. It allows objects to emit named events and register listeners for those events, enabling event-driven programming.",
    syntax: "const EventEmitter = require('events'); emitter.on(), emitter.emit()",
    example:
      "Create an event emitter:\nconst emitter = new EventEmitter();\nemitter.on('event', () => console.log('Event fired'));\nemitter.emit('event');",
    realTimeExample:
      "Like a radio broadcast: Objects can broadcast events (radio signals), and listeners can tune in to respond to those events.",
  },
  {
    id: 66,
    question: "How do you implement pagination in Express.js?",
    answer:
      "To implement pagination in Express.js, use query parameters for the page number and limit. Calculate the offset based on these parameters and slice the results from your database accordingly. Pagination is essential for handling large datasets and improving user experience by dividing content into manageable chunks.",
    syntax: "const page = req.query.page || 1; const limit = req.query.limit || 10;",
    example:
      "Implement pagination:\nconst offset = (page - 1) * limit;\nconst results = await Model.findAll({ limit, offset });",
    realTimeExample:
      "Like flipping pages in a book: It shows a limited number of items per 'page', making it easier to navigate through large amounts of data.",
  },
  {
    id: 67,
    question: "What is input validation in Express.js?",
    answer:
      "Input validation in Express.js involves using middleware like `express-validator` to ensure that the data received from clients meets the required criteria. Validation helps prevent errors, security vulnerabilities, and data corruption by checking and sanitizing user input.",
    syntax: "npm install express-validator, body('field').isEmail()",
    example:
      "Validate user input:\napp.post('/user', body('email').isEmail(), (req, res) => {});",
    realTimeExample:
      "Like a quality control check: It ensures that the data is correct and meets the required standards before processing.",
  },
  {
    id: 68,
    question: "How do you implement file downloads in Express.js?",
    answer:
      "To implement file downloads in Express.js, use the `res.download()` method to send files as attachments or `res.sendFile()` to send files as part of the response. This allows users to download files from your server, such as PDFs, images, or other documents.",
    syntax: "res.download(path), res.sendFile(path)",
    example:
      "Enable file downloads:\napp.get('/download', (req, res) => {\n  res.download('/path/to/file.pdf');\n});",
    realTimeExample:
      "Like sending an attachment: It allows users to download files from your server, just like emailing a file as an attachment.",
  },
  {
    id: 69,
    question: "What is the helmet middleware in Express.js?",
    answer:
      "The `helmet` middleware in Express.js helps secure your applications by setting various HTTP headers. It protects your app from common web vulnerabilities by configuring headers that mitigate risks like cross-site scripting (XSS) and clickjacking.",
    syntax: "npm install helmet, app.use(helmet())",
    example:
      "Use helmet:\napp.use(helmet());",
    realTimeExample:
      "Like wearing a helmet: It protects your app from common security vulnerabilities, ensuring a safer experience for users.",
  },
  {
    id: 70,
    question: "How do you implement API versioning in Express.js?",
    answer:
      "To implement API versioning in Express.js, you can use URL versioning (e.g., `/api/v1/`), header versioning, or query parameter versioning. Versioning allows you to maintain multiple versions of your API, ensuring backward compatibility as your application evolves.",
    syntax: "app.use('/api/v1', routes), Accept-Version header",
    example:
      "Version your API:\napp.use('/api/v1/users', userRoutesV1);\napp.use('/api/v2/users', userRoutesV2);",
    realTimeExample:
      "Like software versions: It allows different API versions to coexist, ensuring that existing clients continue to work while new features are introduced.",
  },
  {
    id: 71,
    question: "What is the morgan middleware in Express.js?",
    answer:
      "The `morgan` middleware in Express.js is an HTTP request logger. It logs details about incoming requests, such as the method, URL, status code, and response time, to the console or a file. Logging requests is useful for debugging, monitoring, and analyzing traffic.",
    syntax: "npm install morgan, app.use(morgan('combined'))",
    example:
      "Log requests:\napp.use(morgan('tiny'));",
    realTimeExample:
      "Like a visitor log: It records who visited your app and when, providing valuable insights into user activity and potential issues.",
  },
  {
    id: 72,
    question: "How do you handle form data in Express.js?",
    answer:
      "To handle form data in Express.js, use the `express.urlencoded()` middleware for form-encoded data and `multer` for handling `multipart/form-data` used in file uploads. These middleware parse incoming request bodies and make the data available in `req.body`.",
    syntax: "app.use(express.urlencoded({ extended: true }))",
    example:
      "Parse form data:\napp.use(express.urlencoded());\napp.post('/submit', (req, res) => {\n  console.log(req.body);\n});",
    realTimeExample:
      "Like reading a filled form: It extracts data from submitted forms, making it easy to process user input in your application.",
  },
  {
    id: 73,
    question: "What is the compression middleware in Express.js?",
    answer:
      "The compression middleware in Express.js compresses response bodies, reducing their size and improving transfer speed. This is particularly useful for optimizing performance and reducing bandwidth usage, especially for large responses.",
    syntax: "npm install compression, app.use(compression())",
    example:
      "Compress responses:\napp.use(compression());",
    realTimeExample:
      "Like zipping a file before emailing it: It makes responses smaller and faster to transfer, improving the user experience.",
  },
  {
    id: 74,
    question: "How do you implement basic routing in Express.js?",
    answer:
      "To implement basic routing in Express.js, define routes using `app.METHOD()` where `METHOD` is an HTTP method like GET, POST, PUT, or DELETE. Routing determines how your application responds to client requests for specific endpoints.",
    syntax: "app.get('/path', handler), app.post('/path', handler)",
    example:
      "Define a route:\napp.get('/hello', (req, res) => res.send('Hello World'));",
    realTimeExample:
      "Like directing traffic: It routes requests to the appropriate handlers based on the URL and HTTP method, ensuring users get the right response.",
  },
  {
    id: 75,
    question: "What is the serve-favicon middleware in Express.js?",
    answer:
      "The `serve-favicon` middleware in Express.js serves the `favicon.ico` file for your website. The favicon is the small icon displayed in the browser tab, and this middleware makes it easy to serve this file to clients.",
    syntax: "npm install serve-favicon, app.use(favicon(path))",
    example:
      "Serve a favicon:\napp.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));",
    realTimeExample:
      "Like a website's logo: It shows the small icon in browser tabs, helping users identify your site quickly.",
  },
  {
    id: 76,
    question: "How do you handle cookies in Express.js?",
    answer:
      "To handle cookies in Express.js, use the `cookie-parser` middleware to parse cookies from incoming requests and the `res.cookie()` method to set cookies in the response. Cookies are useful for storing small pieces of data on the client side, such as session IDs or user preferences.",
    syntax: "npm install cookie-parser, app.use(cookieParser())",
    example:
      "Set and read cookies:\nres.cookie('name', 'value');\nconsole.log(req.cookies.name);",
    realTimeExample:
      "Like leaving notes: It stores small pieces of data on the user's browser, allowing you to remember user preferences and session information.",
  },
  {
    id: 77,
    question: "What is the method-override middleware in Express.js?",
    answer:
      "The `method-override` middleware in Express.js allows you to use HTTP verbs like PUT or DELETE in places where the client doesn't support them, such as HTML forms that only support GET and POST. This middleware interprets a special field in the form data to determine the intended HTTP method.",
    syntax: "npm install method-override, app.use(methodOverride())",
    example:
      "Override HTTP methods:\napp.use(methodOverride('_method'));",
    realTimeExample:
      "Like a workaround: It allows forms to use any HTTP method despite browser limitations, ensuring your API works as intended.",
  },
  {
    id: 78,
    question: "How do you implement basic templating in Express.js?",
    answer:
      "To implement basic templating in Express.js, set a view engine like EJS or Pug and use the `res.render()` method to render templates with dynamic data. Templating engines make it easy to generate HTML dynamically, improving the maintainability and flexibility of your application.",
    syntax: "app.set('view engine', 'ejs'), res.render('template', data)",
    example:
      "Set up templating:\napp.set('view engine', 'ejs');\napp.get('/', (req, res) => res.render('index', { title: 'Home' }));",
    realTimeExample:
      "Like filling in a form template: It inserts dynamic data into HTML templates, making it easy to generate personalized content for users.",
  },
  {
    id: 79,
    question: "What is the response-time middleware in Express.js?",
    answer:
      "The `response-time` middleware in Express.js adds an `X-Response-Time` header to responses, showing how long the request took to process. This is useful for monitoring performance and identifying bottlenecks in your application.",
    syntax: "npm install response-time, app.use(responseTime())",
    example:
      "Add response time:\napp.use(responseTime());",
    realTimeExample:
      "Like a stopwatch: It measures and reports how long each request takes, helping you optimize performance and improve user experience.",
  },
  {
    id: 80,
    question: "How do you handle redirects in Express.js?",
    answer:
      "To handle redirects in Express.js, use the `res.redirect()` method. This method sends a redirect response to the client, instructing them to navigate to a different URL. Redirects are useful for guiding users to the correct resources or handling URL changes.",
    syntax: "res.redirect(status, path)",
    example:
      "Redirect users:\napp.get('/old-path', (req, res) => res.redirect(301, '/new-path'));",
    realTimeExample:
      "Like a detour sign: It sends users to a different location, ensuring they reach the correct destination even if the original path has changed.",
  },
  {
    id: 81,
    question: "What is the vhost middleware in Express.js?",
    answer:
      "The `vhost` middleware in Express.js allows you to serve different applications on different subdomains. This is useful for hosting multiple services or applications under the same domain, each accessible via its own subdomain.",
    syntax: "npm install vhost, app.use(vhost('sub.example.com', subApp))",
    example:
      "Serve apps on subdomains:\napp.use(vhost('api.example.com', apiApp));\napp.use(vhost('www.example.com', webApp));",
    realTimeExample:
      "Like having different stores in one mall: Each subdomain serves different content, allowing you to manage multiple services under a single domain.",
  },
  {
    id: 82,
    question: "How do you implement basic error handling in Express.js?",
    answer:
      "To implement basic error handling in Express.js, use error-handling middleware with four parameters: `err`, `req`, `res`, and `next`. Define this middleware after your other routes to catch and handle errors that occur during request processing.",
    syntax: "app.use((err, req, res, next) => { res.status(500).send('Error'); })",
    example:
      "Handle errors:\napp.use((err, req, res, next) => {\n  console.error(err);\n  res.status(500).json({ error: 'Internal Server Error' });\n});",
    realTimeExample:
      "Like a safety net: It catches errors that slip through and provides appropriate responses, ensuring your application remains stable and user-friendly.",
  },
  {
    id: 83,
    question: "What is the connect-timeout middleware in Express.js?",
    answer:
      "The `connect-timeout` middleware in Express.js sets a timeout for requests, automatically ending slow requests to prevent them from hanging and consuming resources. This is useful for improving the responsiveness and reliability of your application.",
    syntax: "npm install connect-timeout, app.use(timeout('5s'))",
    example:
      "Set a timeout:\napp.use(timeout('10s'));\napp.use(haltOnTimedout);",
    realTimeExample:
      "Like a timer: It stops requests that take too long to complete, preventing them from hanging and ensuring smooth operation of your service.",
  },
  {
    id: 84,
    question: "How do you serve static assets in Express.js?",
    answer:
      "To serve static assets in Express.js, use the `express.static()` middleware. This middleware serves static files like images, CSS, and JavaScript from a specified directory, making them accessible to clients.",
    syntax: "app.use(express.static('public'))",
    example:
      "Serve static files:\napp.use('/assets', express.static('public'));",
    realTimeExample:
      "Like a file server: It makes your images, stylesheets, and scripts available to browsers, ensuring your web pages load correctly and efficiently.",
  },
  {
    id: 85,
    question: "What is the express-session middleware?",
    answer:
      "The `express-session` middleware in Express.js manages server-side sessions using cookies for session IDs. Sessions allow you to store user data across multiple requests, making it possible to maintain state and track user activity in your application.",
    syntax: "npm install express-session, app.use(session(options))",
    example:
      "Set up sessions:\napp.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: true }));",
    realTimeExample:
      "Like a VIP card: It tracks user state across multiple requests, ensuring a personalized and seamless experience for users.",
  },
  {
    id: 86,
    question: "How do you implement CSRF protection in Express.js?",
    answer:
      "To implement CSRF (Cross-Site Request Forgery) protection in Express.js, use the `csurf` middleware. CSRF protection ensures that requests to your application are legitimate and not forged by malicious sites, improving the security of your application.",
    syntax: "npm install csurf, app.use(csurf())",
    example:
      "Enable CSRF protection:\napp.use(csurf());\napp.get('/form', (req, res) => res.render('form', { csrfToken: req.csrfToken() }));",
    realTimeExample:
      "Like a secret handshake: It ensures that requests come from legitimate sources, protecting your application from unauthorized actions.",
  },
  {
    id: 87,
    question: "What is the connect-flash middleware in Express.js?",
    answer:
      "The `connect-flash` middleware in Express.js provides a way to store and display flash messages between requests. Flash messages are temporary notifications that are displayed once and then cleared, making them useful for providing feedback to users.",
    syntax: "npm install connect-flash, app.use(flash())",
    example:
      "Use flash messages:\nreq.flash('success', 'Item created');\nres.locals.messages = req.flash();",
    realTimeExample:
      "Like temporary notes: They show messages once, then disappear, ensuring users receive important feedback without cluttering the interface.",
  },
  {
    id: 88,
    question: "How do you handle multipart uploads in Express.js?",
    answer:
      "To handle multipart uploads in Express.js, use the `multer` middleware. Multipart uploads are used for file uploads in web forms, and `multer` makes it easy to process these uploads and access the uploaded files in your application.",
    syntax: "npm install multer, const upload = multer()",
    example:
      "Handle file uploads:\napp.post('/upload', upload.single('file'), (req, res) => {\n  console.log(req.file);\n});",
    realTimeExample:
      "Like a package handler: It receives and processes uploaded files, ensuring they are stored and managed correctly in your application.",
  },
  {
    id: 89,
    question: "What is the express-validator middleware?",
    answer:
      "The `express-validator` middleware in Express.js provides validation and sanitization for request data. It ensures that user input meets the required criteria, helping to prevent errors, security vulnerabilities, and data corruption.",
    syntax: "npm install express-validator, body('field').isEmail()",
    example:
      "Validate input:\napp.post('/user', body('email').isEmail(), (req, res) => {});",
    realTimeExample:
      "Like a data inspector: It checks and cleans input data before use, ensuring it is correct and safe for processing.",
  },
  {
    id: 90,
    question: "How do you implement API documentation in Express.js?",
    answer:
      "To implement API documentation in Express.js, use tools like Swagger/OpenAPI or libraries like `swagger-jsdoc`. These tools help you document your API endpoints, making it easier for developers to understand and use your API.",
    syntax: "npm install swagger-jsdoc swagger-ui-express",
    example:
      "Set up API documentation:\nconst swaggerUi = require('swagger-ui-express');\napp.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));",
    realTimeExample:
      "Like a user manual: It provides clear instructions on how to use your API, ensuring developers can integrate with your service effectively.",
  },
  {
    id: 91,
    question: "What is the passport middleware for authentication?",
    answer:
      "The `passport` middleware for Express.js is a flexible and modular authentication system. It supports various authentication strategies, such as local authentication, OAuth, and OpenID, making it easy to implement secure and scalable authentication in your application.",
    syntax: "npm install passport passport-local, passport.use(strategy)",
    example:
      "Set up local authentication:\npassport.use(new LocalStrategy((username, password, done) => {\n  // Verify credentials\n}));",
    realTimeExample:
      "Like a security guard: It checks credentials using various methods, ensuring only authorized users can access your application.",
  },
  {
    id: 92,
    question: "How do you implement logging with Winston in Node.js?",
    answer:
      "To implement logging with Winston in Node.js, install the `winston` package and create a logger instance. Winston provides multiple transports and log levels, making it easy to log messages to the console, files, or other destinations.",
    syntax: "npm install winston, winston.createLogger()",
    example:
      "Set up logging:\nconst logger = winston.createLogger({\n  level: 'info',\n  transports: [new winston.transports.Console()]\n});\nlogger.info('Hello');",
    realTimeExample:
      "Like a professional diary: It records events with different importance levels, providing valuable insights into your application's activity.",
  },
  {
    id: 93,
    question: "What is PM2 and how do you use it?",
    answer:
      "PM2 is a process manager for Node.js applications. It provides features like clustering, monitoring, and zero-downtime reloads, making it easy to manage and scale your Node.js applications in production environments.",
    syntax: "npm install -g pm2, pm2 start app.js",
    example:
      "Start and manage an app:\npm2 start app.js --name 'my-app';\npm2 monit;\npm2 restart my-app;",
    realTimeExample:
      "Like a team manager: It oversees multiple app instances, ensuring they run smoothly and efficiently, even under heavy load.",
  },
  {
    id: 94,
    question: "How do you implement basic testing in Node.js?",
    answer:
      "To implement basic testing in Node.js, use testing frameworks like Jest or Mocha with assertion libraries like Chai. These tools help you write and run tests for your application, ensuring it works as expected and catching bugs early in the development process.",
    syntax: "npm install jest, describe(), it(), expect()",
    example:
      "Write a test:\ndescribe('Math', () => {\n  it('should add', () => {\n    expect(1 + 1).toBe(2);\n  });\n});",
    realTimeExample:
      "Like quality control: It runs tests to ensure your code works correctly, helping you deliver a reliable and bug-free application.",
  },
  {
    id: 95,
    question: "What is Docker and how do you containerize a Node.js app?",
    answer:
      "Docker is a platform for developing, shipping, and running applications in containers. To containerize a Node.js app, create a `Dockerfile` that specifies the environment and dependencies, then build and run the container using Docker commands.",
    syntax: "FROM node:14, COPY ., RUN npm install, CMD ['node', 'app.js']",
    example:
      "Create a Dockerfile:\nFROM node:16\nWORKDIR /app\nCOPY package*.json ./\nRUN npm install\nCOPY . .\nEXPOSE 3000\nCMD ['node', 'app.js']",
    realTimeExample:
      "Like a shipping container: It packages your app with everything it needs to run anywhere, ensuring consistency and portability across different environments.",
  },
  {
    id: 96,
    question: "How do you handle database connections in Node.js?",
    answer:
      "To handle database connections in Node.js, use connection pooling for SQL databases or connection management for NoSQL databases. Always close connections properly to avoid resource leaks and ensure efficient use of database resources.",
    syntax: "const pool = mysql.createPool(config); pool.query()",
    example:
      "Set up a connection pool:\nconst pool = mysql.createPool({ host: 'localhost', user: 'root', database: 'test' });",
    realTimeExample:
      "Like managing phone lines: It reuses connections efficiently and hangs up when done, ensuring optimal performance and resource usage.",
  },
  {
    id: 97,
    question: "What is GraphQL and how do you implement it in Node.js?",
    answer:
      "GraphQL is a query language for APIs that allows clients to request exactly the data they need. To implement GraphQL in Node.js, use libraries like Apollo Server or express-graphql to define your schema and resolvers, enabling flexible and efficient data fetching.",
    syntax: "npm install apollo-server-express, graphql",
    example:
      "Set up a GraphQL server:\nconst { ApolloServer, gql } = require('apollo-server-express');\nconst typeDefs = gql`type Query { hello: String }`;",
    realTimeExample:
      "Like a smart menu: Clients request exactly what they need, ensuring efficient and tailored data delivery without over-fetching or under-fetching.",
  },
  {
    id: 98,
    question: "How do you implement caching with Redis in Node.js?",
    answer:
      "To implement caching with Redis in Node.js, use the `redis` npm package to connect to a Redis server and perform caching operations. Redis is an in-memory data store that provides fast access to cached data, improving the performance of your application.",
    syntax: "npm install redis, const redis = require('redis')",
    example:
      "Connect to Redis:\nconst client = redis.createClient();\nclient.set('key', 'value');\nclient.get('key', (err, reply) => console.log(reply));",
    realTimeExample:
      "Like a super-fast memory: It stores data for instant retrieval, reducing the need to fetch data repeatedly and improving application performance.",
  },
  {
    id: 99,
    question: "What is the difference between process.nextTick() and setImmediate()?",
    answer:
      "In Node.js, `process.nextTick()` executes a callback in the next iteration of the event loop, before any I/O operations. `setImmediate()` executes a callback after I/O operations, in the next iteration of the event loop. This difference affects the order in which callbacks are executed and can impact the performance and behavior of your application.",
    syntax: "process.nextTick(callback), setImmediate(callback)",
    example:
      "Compare execution order:\nprocess.nextTick(() => console.log('nextTick'));\nsetImmediate(() => console.log('setImmediate'));",
    realTimeExample:
      "Like scheduling tasks: `nextTick` is for urgent tasks (do now), while `setImmediate` is for tasks that can wait until after current operations (do soon).",
  },
  {
    id: 100,
    question: "How do you implement graceful shutdown in Node.js?",
    answer:
      "To implement graceful shutdown in Node.js, listen for signals like `SIGTERM` or `SIGINT`, close open connections, and exit the process cleanly. This ensures that your application shuts down properly, avoiding data loss or corruption and providing a smooth experience for users.",
    syntax: "process.on('SIGTERM', () => { server.close(() => process.exit(0)); })",
    example:
      "Handle shutdown:\nprocess.on('SIGINT', () => {\n  console.log('Shutting down...');\n  db.close(() => process.exit(0));\n});",
    realTimeExample:
      "Like closing a store: You clean up (close connections) before locking the door, ensuring everything is in order and ready for the next opening.",
  },
  {
    id: 101,
    question: "What is the vm module in Node.js?",
    answer:
      "The `vm` module in Node.js provides APIs for compiling and running code in V8 Virtual Machine contexts. It allows you to execute JavaScript code in isolated environments, which is useful for sandboxing and security.",
    syntax: "const vm = require('vm'); vm.runInContext()",
    example:
      "Run code in a context:\nconst script = new vm.Script('a + b');\nconst context = { a: 1, b: 2 };\nscript.runInContext(context);",
    realTimeExample:
      "Like a sandbox: It runs code in isolated environments, ensuring security and preventing unintended interactions with the main application.",
  },
  {
    id: 102,
    question: "How do you handle memory leaks in Node.js?",
    answer:
      "To handle memory leaks in Node.js, use tools like `process.memoryUsage()`, heap snapshots, and libraries like `clinic.js`. Avoid global variables and circular references, and regularly monitor memory usage to identify and fix leaks.",
    syntax: "process.memoryUsage(), --inspect",
    example:
      "Check memory usage:\nconsole.log(process.memoryUsage());",
    realTimeExample:
      "Like fixing a leaky faucet: You monitor and plug memory leaks to prevent resource waste and ensure your application runs efficiently.",
  },
  {
    id: 103,
    question: "What is the inspector module in Node.js?",
    answer:
      "The `inspector` module in Node.js provides an API for interacting with the V8 inspector. It enables debugging and profiling, allowing you to inspect the runtime behavior of your application and identify performance issues or bugs.",
    syntax: "const inspector = require('inspector'); inspector.open()",
    example:
      "Open the inspector:\ninspector.open(9229, 'localhost', true);",
    realTimeExample:
      "Like a mechanic's diagnostic tool: It allows deep inspection of the engine (your application), helping you identify and fix issues.",
  },
  {
    id: 104,
    question: "How do you implement internationalization (i18n) in Node.js?",
    answer:
      "To implement internationalization (i18n) in Node.js, use libraries like `i18n` or `i18next`. These libraries help you manage multiple languages and locales, making it easy to adapt your application's content for users around the world.",
    syntax: "npm install i18next, i18next.init()",
    example:
      "Set up i18n:\ni18next.init({\n  lng: 'en',\n  resources: {\n    en: { translation: { hello: 'Hello' } }\n  }\n});",
    realTimeExample:
      "Like a universal translator: It adapts your application's content for different languages and cultures, ensuring a personalized experience for users worldwide.",
  },
  {
    id: 105,
    question: "What is the perf_hooks module in Node.js?",
    answer:
      "The `perf_hooks` module in Node.js provides APIs for measuring performance and creating custom performance metrics. It allows you to monitor the performance of your application and identify areas for optimization.",
    syntax: "const { performance } = require('perf_hooks'); performance.now()",
    example:
      "Measure performance:\nconst start = performance.now();\n// Some code\nconst end = performance.now();\nconsole.log(end - start);",
    realTimeExample:
      "Like a stopwatch: It measures how long operations take, helping you optimize performance and improve efficiency.",
  },
  {
    id: 106,
    question: "How do you implement job queues in Node.js?",
    answer:
      "To implement job queues in Node.js, use libraries like `Bull` or `Bee-Queue` with Redis. Job queues allow you to process tasks asynchronously in the background, improving the responsiveness and scalability of your application.",
    syntax: "npm install bull, new Queue()",
    example:
      "Create a job queue:\nconst Queue = require('bull');\nconst myQueue = new Queue('my-queue');\nmyQueue.add({ foo: 'bar' });",
    realTimeExample:
      "Like a to-do list: It processes tasks in the background without blocking the main flow, ensuring your application remains responsive and efficient.",
  },
  {
    id: 107,
    question: "What is the assert module in Node.js?",
    answer:
      "The `assert` module in Node.js provides a set of assertion functions for testing invariants. It is commonly used in testing to verify that code behaves as expected, helping you catch bugs and ensure the reliability of your application.",
    syntax: "const assert = require('assert'); assert.equal()",
    example:
      "Test with assertions:\nassert.equal(1 + 1, 2); // Passes\nassert.equal(1 + 1, 3); // Throws",
    realTimeExample:
      "Like a fact checker: It verifies that your code behaves as expected, ensuring correctness and reliability.",
  },
  {
    id: 108,
    question: "How do you implement real-time notifications in Node.js?",
    answer:
      "To implement real-time notifications in Node.js, use WebSockets with libraries like `socket.io` or the native `ws` library. WebSockets enable bidirectional communication between the client and server, making it easy to send updates and notifications in real time.",
    syntax: "npm install socket.io, io.on('connection')",
    example:
      "Set up real-time notifications:\nio.on('connection', (socket) => {\n  socket.emit('notification', 'Hello!');\n});",
    realTimeExample:
      "Like instant messaging: It sends updates to users in real time, ensuring they receive timely and relevant information.",
  },
  {
    id: 109,
    question: "What is the readline module in Node.js?",
    answer:
      "The `readline` module in Node.js provides an interface for reading data from a readable stream one line at a time. It is useful for processing input from the terminal or files, making it easy to handle user input and automate tasks.",
    syntax: "const readline = require('readline'); readline.createInterface()",
    example:
      "Read user input:\nconst rl = readline.createInterface({\n  input: process.stdin,\n  output: process.stdout\n});\nrl.question('What is your name? ', (answer) => {\n  console.log(answer);\n});",
    realTimeExample:
      "Like a conversation: It reads user input line by line from the terminal, making it easy to interact with users and process their responses.",
  },
  {
    id: 110,
    question: "How do you implement API rate limiting with Redis?",
    answer:
      "To implement API rate limiting with Redis in Node.js, use Redis to store request counts and check limits before processing requests. This ensures that users do not exceed their allowed number of requests, protecting your API from abuse and ensuring fair usage.",
    syntax: "redis.incr(), redis.expire()",
    example:
      "Limit requests:\nredis.incr(`requests:${userId}`);\nredis.expire(`requests:${userId}`, 3600);",
    realTimeExample:
      "Like a traffic cop: It counts and limits how many requests each user can make, ensuring fair and efficient use of your API.",
  },
  {
    id: 111,
    question: "What is the difference between Buffer and string in Node.js?",
    answer:
      "In Node.js, `Buffer` is used to store binary data, while `string` is used to store text. Buffers are useful for handling raw binary data, such as images or network packets, while strings are used for human-readable text.",
    syntax: "Buffer.from('text'), 'text'.toString()",
    example:
      "Convert between Buffer and string:\nconst buf = Buffer.from('Hello');\nconst str = buf.toString();",
    realTimeExample:
      "Like raw ingredients vs. cooked food: Buffer is the raw bytes, while string is the readable text, making it easy to work with both binary and textual data.",
  },
  {
    id: 112,
    question: "What is the purpose of the `package-lock.json` file?",
    answer:
      "The `package-lock.json` file is automatically generated when npm modifies the `node_modules` tree or `package.json`. It records the exact versions of all dependencies and their sub-dependencies, ensuring consistent installations across different environments and preventing 'works on my machine' issues.",
    example:
      "When you run `npm install`, npm uses `package-lock.json` to install the exact versions of dependencies listed, ensuring everyone on your team gets the same setup.",
    realTimeExample:
      "Like a shopping receipt: It lists exactly what you bought (dependencies) and their versions, so you can get the same items again later.",
    realTimeExample2:
      "Like a blueprint: It ensures every developer builds the same structure (app) with the same materials (dependencies).",
    syntax: "Automatically generated by `npm install`.",
  },
  {
    id: 113,
    question: "What is the difference between `exports` and `module.exports`?",
    answer:
      "In Node.js, `exports` is a reference to `module.exports`. If you reassign `exports`, it breaks the reference, and changes won't affect `module.exports`. Use `module.exports` to export a function or object directly, while `exports` is used for named exports.",
    example:
      "Named exports:\nexports.myFunction = function() {};\nDefault exports:\nmodule.exports = function() {};",
    realTimeExample:
      "Like a library: `exports` is like adding books to a shelf, while `module.exports` is like replacing the whole shelf with a new one.",
    realTimeExample2:
      "Think of `exports` as a shortcut to `module.exports`. If you change the shortcut, it no longer points to the original.",
    syntax: "exports.myVar = 'value'; module.exports = { myVar: 'value' };",
  },
  {
    id: 114,
    question: "How do you use environment variables in a Node.js project?",
    answer:
      "Use the `dotenv` package to load environment variables from a `.env` file into `process.env`. This keeps sensitive data, like API keys and database credentials, out of your codebase and makes it easy to manage different configurations for development, testing, and production environments.",
    example:
      "1. Install `dotenv`:\n   npm install dotenv\n2. Create a `.env` file:\n   DB_PASSWORD=secret\n3. Load it in your app:\n   require('dotenv').config();\n4. Access variables:\n   const password = process.env.DB_PASSWORD;",
    realTimeExample:
      "Like a secret vault: It stores passwords and keys securely, away from prying eyes.",
    realTimeExample2:
      "Like a recipe card: It keeps your secret ingredients (API keys) separate from the instructions (code).",
    syntax: "require('dotenv').config(); process.env.VARIABLE_NAME",
  },
  {
    id: 115,
    question: "What is the purpose of the `node_modules` folder?",
    answer:
      "The `node_modules` folder contains all the dependencies (packages and libraries) installed for your Node.js project. Each dependency can have its own `node_modules` folder for its dependencies, creating a nested structure. This folder is created and managed by npm or yarn when you install packages.",
    example:
      "When you run `npm install express`, the `express` package and its dependencies are downloaded into `node_modules`.",
    realTimeExample:
      "Like a toolbox: It contains all the tools (libraries) your project needs to build and run.",
    realTimeExample2:
      "Like a pantry: It stores all the ingredients (dependencies) your app needs to function.",
    syntax: "Generated by `npm install` or `yarn install`.",
  },
  {
    id: 116,
    question: "How do you debug a Node.js application?",
    answer:
      "Use the built-in debugger by running your app with the `--inspect` flag. Open Chrome DevTools and navigate to `chrome://inspect` to attach the debugger. For simple debugging, use `console.log()`. For more advanced debugging, use tools like the VS Code debugger or `node-inspector`.",
    example:
      "1. Start your app:\n   node --inspect app.js\n2. Open Chrome DevTools and go to `chrome://inspect`\n3. Click on your app to start debugging.",
    realTimeExample:
      "Like a detective: You pause the action to examine clues (variables) and figure out what's happening in your code.",
    realTimeExample2:
      "Like a car diagnostic tool: It helps you find and fix issues under the hood (in your code).",
    syntax: "node --inspect app.js, debugger;",
  },
  {
    id: 117,
    question: "What is the purpose of the `require` function in Node.js?",
    answer:
      "The `require` function is used to include modules in your Node.js application. It reads a JavaScript file, executes it, and returns the `exports` object. It can load core modules, local files, or third-party packages from `node_modules`.",
    example:
      "Include a core module:\nconst fs = require('fs');\nInclude a local file:\nconst myModule = require('./myModule');\nInclude a third-party package:\nconst express = require('express');",
    realTimeExample:
      "Like importing a tool: You bring in a tool (module) to use its functionality in your project.",
    realTimeExample2:
      "Like calling a friend for help: You ask for their expertise (module) to solve a problem.",
    syntax: "const module = require('module-name');",
  },
  {
    id: 118,
    question: "How do you create a custom module in Node.js?",
    answer:
      "Create a JavaScript file and use `module.exports` or `exports` to expose functions, objects, or variables. Then, require the file in other parts of your application to use the module. Custom modules help you organize and reuse code across your project.",
    example:
      "In `greet.js`:\nmodule.exports = function(name) {\n  return `Hello, ${name}!`;\n};\nIn `app.js`:\nconst greet = require('./greet');\nconsole.log(greet('Alice'));",
    realTimeExample:
      "Like building a LEGO set: You create a custom piece (module) and use it in different projects.",
    realTimeExample2:
      "Like writing a recipe: You document a process (module) so others can use it in their cooking (projects).",
    syntax: "module.exports = function() {}; const myModule = require('./myModule');",
  },
  {
    id: 119,
    question: "What is the purpose of the `process` object in Node.js?",
    answer:
      "The `process` object in Node.js provides information about, and control over, the current Node.js process. It is a global object and includes properties like `process.env` for environment variables, `process.argv` for command-line arguments, and methods like `process.exit()` to end the process. It is essential for managing and monitoring your application's runtime environment.",
    example:
      "Access environment variables:\nprocess.env.NODE_ENV\nAccess command-line arguments:\nprocess.argv\nExit the process:\nprocess.exit(1);",
    realTimeExample:
      "Like the dashboard of your car: It shows you important information (environment, arguments) and lets you control the vehicle (exit the process).",
    realTimeExample2:
      "Like a control panel: It provides switches and gauges (methods and properties) to monitor and control your application.",
    syntax: "process.env, process.argv, process.exit()",
  },
  {
    id: 120,
    question: "How do you handle errors in asynchronous code in Node.js?",
    answer:
      "Use `try/catch` blocks for synchronous errors, error-first callbacks for asynchronous operations, and `.catch()` for promises. Always handle errors to prevent crashes and provide meaningful feedback to users. Proper error handling ensures your application remains stable and user-friendly.",
    example:
      "With callbacks:\nfs.readFile('file.txt', (err, data) => {\n  if (err) return console.error(err);\n  console.log(data);\n});\nWith promises:\nfs.promises.readFile('file.txt').then(data => console.log(data)).catch(err => console.error(err));\nWith async/await:\nasync function readFile() {\n  try {\n    const data = await fs.promises.readFile('file.txt');\n    console.log(data);\n  } catch (err) {\n    console.error(err);\n  }\n}",
    realTimeExample:
      "Like having a safety net: It catches errors before they cause your app to crash.",
    realTimeExample2:
      "Like a first aid kit: It provides tools to handle unexpected issues and keep things running smoothly.",
    syntax: "try/catch, .catch(), callback(err, data)",
  },
  {
    id: 121,
    question: "What is the purpose of the `util` module in Node.js?",
    answer:
      "The `util` module in Node.js provides utility functions for debugging, formatting, and type checking. It includes methods like `util.inspect()` for debugging objects and `util.promisify()` for converting callback-based functions to promises, making it easier to work with asynchronous code and complex data structures.",
    example:
      "Convert a callback function to a promise:\nconst util = require('util');\nconst fs = require('fs');\nconst readFile = util.promisify(fs.readFile);\nreadFile('file.txt', 'utf8').then(data => console.log(data));\nInspect an object:\nconsole.log(util.inspect(myObject, { depth: null }));",
    realTimeExample:
      "Like a Swiss Army knife: It offers a variety of tools for common programming tasks.",
    realTimeExample2:
      "Like a utility belt: It provides handy gadgets (functions) for debugging and formatting.",
    syntax: "const util = require('util'); util.inspect(), util.promisify()",
  },
  {
    id: 122,
    question: "How do you read and write files asynchronously in Node.js?",
    answer:
      "Use the `fs` (File System) module's asynchronous methods like `fs.readFile()` and `fs.writeFile()`. These methods take a callback function that is executed once the operation completes, allowing your application to continue executing other code while waiting for the file operation to finish.",
    example:
      "Read a file asynchronously:\nfs.readFile('file.txt', 'utf8', (err, data) => {\n  if (err) throw err;\n  console.log(data);\n});\nWrite to a file asynchronously:\nfs.writeFile('file.txt', 'Hello, Node.js!', (err) => {\n  if (err) throw err;\n  console.log('File saved!');\n});",
    realTimeExample:
      "Like ordering food: You place your order (initiate an operation) and continue chatting (executing other code) while waiting for your food (operation result).",
    realTimeExample2:
      "Like sending a letter: You drop it in the mailbox (write request) and go about your day, then receive a reply (callback) when it's delivered.",
    syntax: "fs.readFile(path, callback), fs.writeFile(path, data, callback)",
  },
  {
    id: 123,
    question: "What is the purpose of the `events` module in Node.js?",
    answer:
      "The `events` module in Node.js provides the `EventEmitter` class, which is used to handle events. It allows objects to emit named events and register listeners for those events, enabling event-driven programming and asynchronous communication between different parts of your application.",
    example:
      "Create an event emitter:\nconst EventEmitter = require('events');\nconst emitter = new EventEmitter();\nemitter.on('event', () => console.log('Event fired'));\nemitter.emit('event');",
    realTimeExample:
      "Like a radio station: Objects can broadcast events (radio signals), and listeners can tune in to respond to those events.",
    realTimeExample2:
      "Like a news feed: Objects post updates (events), and subscribers receive notifications (listeners).",
    syntax: "const EventEmitter = require('events'); emitter.on(), emitter.emit()",
  },
  {
    id: 124,
    question: "How do you create a simple REST API with Express.js?",
    answer:
      "To create a simple REST API with Express.js, install Express, create an Express app, define routes for handling HTTP requests (GET, POST, PUT, DELETE), and start the server to listen on a specific port. REST APIs are essential for building scalable and maintainable web services.",
    example:
      "1. Install Express:\n   npm install express\n2. Create a server:\n   const express = require('express');\n   const app = express();\n   app.get('/api/greet', (req, res) => {\n     res.json({ message: 'Hello, World!' });\n   });\n   app.listen(3000, () => {\n     console.log('Server running on port 3000');\n   });",
    realTimeExample:
      "Like setting up a customer service desk: You define how to handle different types of requests (GET, POST) and provide appropriate responses.",
    realTimeExample2:
      "Like a restaurant menu: You list available options (endpoints) and describe what each one offers (response).",
    syntax: "app.get(path, handler), app.post(path, handler), app.listen(port)",
  },
  {
    id: 125,
    question: "What is the purpose of the `path` module in Node.js?",
    answer:
      "The `path` module in Node.js provides utilities for working with file and directory paths. It helps handle path differences between operating systems, such as Windows using backslashes and Unix using forward slashes, ensuring your code works correctly across different platforms.",
    example:
      "Join paths:\nconst path = require('path');\nconst fullPath = path.join(__dirname, 'public', 'index.html');\nGet the basename:\nconst filename = path.basename('/path/to/file.txt'); // 'file.txt'",
    realTimeExample:
      "Like a map: It helps you navigate and construct correct file paths regardless of the operating system.",
    realTimeExample2:
      "Like a GPS: It provides directions (path utilities) to find files and directories in your project.",
    syntax: "const path = require('path'); path.join(), path.resolve()",
  },
];

window.beginner = beginner;