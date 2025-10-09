// Node.js Intermediate Level Q&A Data

let intermediate = [
  {
    id: 1,
    question: "What is REPL in Node.js?",
    answer:
      "REPL stands for Read, Evaluate, Print, and Loop; it's an interactive environment for executing Node.js code and debugging.",
  },
  {
    id: 2,
    question: "How to import a module in Node.js?",
    answer:
      "Use the `require()` function to import external modules, storing the result in a variable for use in the application.",
  },
  {
    id: 3,
    question: "What is package.json in Node.js?",
    answer:
      "`package.json` is a metadata file in Node.js that contains information about the project, such as dependencies, scripts, and versions.",
  },
  {
    id: 4,
    question: "^(Caret) vs ~(Tilde) in package.json",
    answer:
      "^ (Caret) allows updates to newer minor or patch versions (e.g., `^1.2.3` can update to `1.2.4` or `1.3.0`, but not `2.0.0`). ~ (Tilde) allows updates only to newer patch versions (e.g., `~1.2.3` can update to `1.2.4` but not `1.3.0`).",
  },
  {
    id: 5,
    question: "Session vs Cookies",
    answer:
      "Sessions store data on the server and last until the user closes the browser or logs out. Cookies store data on the client's browser and can last until deleted or expire. Sessions are ideal for sensitive data like login information, while cookies are useful for remembering user preferences.",
  },
  {
    id: 6,
    question: "response.write vs response.send",
    answer:
      "response.write is used in Node.js to send raw data in chunks to the client, while response.send in Express.js is a higher-level method that sends a complete HTTP response, which can include HTML, JSON, or plain text.",
  },
  {
    id: 7,
    question: "What is the error-first callback?",
    answer:
      "The 'error-first callback' is a convention in Node.js where the first parameter of the callback function is reserved for an error object. If an error occurs during an asynchronous operation, this error object is populated, otherwise, it is null or undefined.",
  },
  {
    id: 8,
    question:
      "What is the difference between setImmediate() and process.nextTick() methods?",
    answer:
      "`process.nextTick()` executes callbacks at the start of the next event loop, while `setImmediate()` executes them at the end of the current event loop.",
  },
  {
    id: 9,
    question: "What is the child process in Nodejs?",
    answer:
      "A child process in Node.js allows you to run another program or script from your main Node.js program, enabling parallel task execution without blocking the main program. This can be achieved using `spawn`, `fork`, or `exec` methods.",
  },
  {
    id: 10,
    question: "What is event-driven programming in Node.js?",
    answer:
      "Event-driven programming synchronizes multiple events using event loops and callback functions to simplify program flow.",
  },
  {
    id: 11,
    question: "How do you handle routing in Express.js?",
    answer:
      "Use app.METHOD() functions like app.get(), app.post() to define routes. Routes match HTTP methods and URL patterns to handler functions.",
    syntax: "app.get('/path', (req, res) => { })",
    example:
      "app.get('/users/:id', (req, res) => { res.json({ id: req.params.id }); });",
    realTimeExample:
      "Like directing traffic: Routes guide requests to the right destination based on the URL.",
  },
  {
    id: 12,
    question: "What is middleware in Express.js?",
    answer:
      "Middleware functions have access to request and response objects, can modify them, and call next() to pass control to the next middleware.",
    syntax: "function middleware(req, res, next) { }",
    example:
      "app.use((req, res, next) => { console.log(req.method); next(); });",
    realTimeExample:
      "Like airport security: Checks and processes passengers (requests) before they board (reach the route handler).",
  },
  {
    id: 13,
    question: "How do you connect MongoDB with Node.js?",
    answer:
      "Use the mongodb driver or Mongoose ODM. Install mongodb package, create a client, and connect to the database.",
    syntax:
      "const { MongoClient } = require('mongodb'); MongoClient.connect(uri)",
    example:
      "const client = new MongoClient(uri); await client.connect(); const db = client.db('mydb');",
    realTimeExample:
      "Like plugging in a USB drive: Establishes connection to access and store data.",
  },
  {
    id: 14,
    question: "What is Mongoose in Node.js?",
    answer:
      "Mongoose is an ODM (Object Data Modeling) library for MongoDB that provides schema-based modeling, validation, and query building.",
    syntax: "const mongoose = require('mongoose'); mongoose.connect(uri)",
    example:
      "const userSchema = new mongoose.Schema({ name: String, age: Number }); const User = mongoose.model('User', userSchema);",
    realTimeExample:
      "Like a blueprint for building: Defines the structure and rules for your data models.",
  },
  {
    id: 15,
    question: "How do you implement authentication in Node.js?",
    answer:
      "Use libraries like passport.js with strategies (local, JWT, OAuth). Hash passwords with bcrypt, use sessions or JWT tokens.",
    syntax: "npm install passport passport-local bcryptjs",
    example:
      "passport.use(new LocalStrategy((username, password, done) => { /* verify */ }));",
    realTimeExample:
      "Like a security guard: Checks credentials and grants access to authorized users.",
  },
  {
    id: 16,
    question: "What is JWT and how do you use it?",
    answer:
      "JWT (JSON Web Token) is a compact token format for securely transmitting information. Use jsonwebtoken library to sign and verify tokens.",
    syntax: "jwt.sign(payload, secret), jwt.verify(token, secret)",
    example:
      "const token = jwt.sign({ userId: 123 }, 'secret'); const decoded = jwt.verify(token, 'secret');",
    realTimeExample:
      "Like a VIP pass: Contains user information and proves identity without database lookups.",
  },
  {
    id: 17,
    question: "How do you handle file uploads in Node.js?",
    answer:
      "Use multer middleware for Express.js to handle multipart/form-data. Configure storage destination and file filtering.",
    syntax: "npm install multer, const upload = multer({ dest: 'uploads/' })",
    example:
      "app.post('/upload', upload.single('file'), (req, res) => { console.log(req.file); });",
    realTimeExample:
      "Like a mailroom: Receives and organizes incoming packages (files) from users.",
  },
  {
    id: 18,
    question: "What is REST API in Node.js?",
    answer:
      "REST (Representational State Transfer) is an architectural style for APIs using HTTP methods. Create endpoints for CRUD operations.",
    syntax:
      "app.get('/api/users'), app.post('/api/users'), app.put('/api/users/:id'), app.delete('/api/users/:id')",
    example:
      "app.get('/api/users', async (req, res) => { const users = await User.find(); res.json(users); });",
    realTimeExample:
      "Like a menu at a restaurant: Provides options (endpoints) for different actions (GET, POST, etc.).",
  },
  {
    id: 19,
    question: "How do you implement pagination in Node.js APIs?",
    answer:
      "Use query parameters for page and limit. Calculate offset, apply to database queries, and return metadata.",
    syntax:
      "const page = req.query.page || 1; const limit = req.query.limit || 10;",
    example:
      "const offset = (page - 1) * limit; const users = await User.find().skip(offset).limit(limit);",
    realTimeExample:
      "Like flipping pages in a book: Shows a limited number of items per 'page' with navigation.",
  },
  {
    id: 20,
    question: "What is CORS and how to handle it?",
    answer:
      "CORS (Cross-Origin Resource Sharing) prevents cross-origin requests. Use cors middleware or set headers manually.",
    syntax: "npm install cors, app.use(cors())",
    example:
      "app.use(cors({ origin: 'http://localhost:3000', credentials: true }));",
    realTimeExample:
      "Like a border control: Checks if requests from other domains are allowed to access resources.",
  },
  {
    id: 21,
    question: "How do you implement input validation in Node.js?",
    answer:
      "Use libraries like joi or express-validator. Define schemas for expected input and validate requests.",
    syntax:
      "npm install joi, const schema = Joi.object({ name: Joi.string().required() })",
    example:
      "const { error } = schema.validate(req.body); if (error) return res.status(400).json({ error: error.details[0].message });",
    realTimeExample:
      "Like a quality inspector: Checks incoming data meets requirements before processing.",
  },
  {
    id: 22,
    question: "What is socket.io in Node.js?",
    answer:
      "Socket.io enables real-time, bidirectional communication between web clients and servers using WebSockets.",
    syntax: "npm install socket.io, const io = require('socket.io')(server)",
    example:
      "io.on('connection', (socket) => { socket.on('message', (data) => { io.emit('message', data); }); });",
    realTimeExample:
      "Like a walkie-talkie: Allows instant communication between client and server.",
  },
  {
    id: 23,
    question: "How do you handle errors in Express.js?",
    answer:
      "Use error-handling middleware as the last middleware. It has 4 parameters: (err, req, res, next).",
    syntax:
      "app.use((err, req, res, next) => { res.status(500).json({ error: err.message }); })",
    example:
      "app.use((err, req, res, next) => { console.error(err.stack); res.status(500).send('Something broke!'); });",
    realTimeExample:
      "Like a safety net: Catches errors that slip through and provides appropriate error responses.",
  },
  {
    id: 24,
    question: "What is clustering in Node.js?",
    answer:
      "Clustering creates multiple worker processes to utilize all CPU cores, improving performance and reliability.",
    syntax: "const cluster = require('cluster'); cluster.fork()",
    example:
      "if (cluster.isMaster) { for (let i = 0; i < numCPUs; i++) cluster.fork(); } else { app.listen(3000); }",
    realTimeExample:
      "Like a team of workers: Multiple processes handle requests, distributing the workload.",
  },
  {
    id: 25,
    question: "How do you implement caching in Node.js?",
    answer:
      "Use in-memory caching (objects/Maps) or external caches like Redis. Cache expensive operations and database queries.",
    syntax: "const cache = new Map(); cache.set(key, value)",
    example:
      "const cache = {}; function getUser(id) { if (cache[id]) return cache[id]; /* fetch from DB */ cache[id] = user; return user; }",
    realTimeExample:
      "Like a memory bank: Stores frequently accessed data for quick retrieval.",
  },
  {
    id: 26,
    question: "What is PM2 in Node.js?",
    answer:
      "PM2 is a process manager for production Node.js applications, providing clustering, monitoring, and zero-downtime reloads.",
    syntax: "npm install -g pm2, pm2 start app.js",
    example:
      "pm2 start app.js --name 'my-app'; pm2 monit; pm2 logs; pm2 restart my-app;",
    realTimeExample:
      "Like a production manager: Oversees app deployment, scaling, and maintenance.",
  },
  {
    id: 27,
    question: "How do you implement logging in Node.js?",
    answer:
      "Use console.log() for simple logging or libraries like winston for structured, multi-transport logging.",
    syntax: "npm install winston, winston.createLogger()",
    example:
      "const logger = winston.createLogger({ transports: [new winston.transports.File({ filename: 'app.log' })] }); logger.info('App started');",
    realTimeExample:
      "Like a black box recorder: Keeps detailed records of application events and errors.",
  },
  {
    id: 28,
    question: "What is GraphQL in Node.js?",
    answer:
      "GraphQL is a query language for APIs that allows clients to request exactly the data they need.",
    syntax: "npm install graphql express-graphql",
    example:
      "const schema = new GraphQLSchema({ query: new GraphQLObjectType({ name: 'Query', fields: { hello: { type: GraphQLString, resolve: () => 'Hello World' } } }) });",
    realTimeExample:
      "Like a smart menu: Clients specify exactly what they want, no more, no less.",
  },
  {
    id: 29,
    question: "How do you implement testing in Node.js?",
    answer:
      "Use testing frameworks like Jest or Mocha with assertion libraries. Write unit tests, integration tests, and use mocks.",
    syntax: "npm install jest, describe(), it(), expect()",
    example:
      "describe('sum', () => { it('adds 1 + 2 to equal 3', () => { expect(sum(1, 2)).toBe(3); }); });",
    realTimeExample:
      "Like quality control: Verifies code works correctly and prevents regressions.",
  },
  {
    id: 30,
    question: "What is Docker and how to use it with Node.js?",
    answer:
      "Docker creates containerized environments. Create a Dockerfile for Node.js apps to ensure consistent deployment.",
    syntax:
      "FROM node:16, WORKDIR /app, COPY package*.json ./, RUN npm install, COPY ., CMD ['node', 'app.js']",
    example:
      "Dockerfile content as above, then docker build -t my-app . && docker run -p 3000:3000 my-app",
    realTimeExample:
      "Like a shipping container: Packages the app with all dependencies for consistent deployment anywhere.",
  },
  {
    id: 31,
    question: "How do you handle database migrations in Node.js?",
    answer:
      "Use migration libraries like knex.js or sequelize-cli to version and apply database schema changes.",
    syntax: "npx knex migrate:make create_users_table, npx knex migrate:latest",
    example:
      "exports.up = function(knex) { return knex.schema.createTable('users', table => { table.increments('id'); table.string('name'); }); };",
    realTimeExample:
      "Like version control for databases: Tracks and applies schema changes safely.",
  },
  {
    id: 32,
    question: "What is the difference between SQL and NoSQL databases?",
    answer:
      "SQL databases are relational with fixed schemas, ACID compliance, and complex queries. NoSQL databases are flexible, scalable, and better for unstructured data.",
    realTimeExample:
      "SQL is like a structured filing cabinet. NoSQL is like a flexible storage unit for various item types.",
  },
  {
    id: 33,
    question: "How do you implement rate limiting in Node.js?",
    answer:
      "Use middleware like express-rate-limit to limit requests per IP or user within a time window.",
    syntax:
      "npm install express-rate-limit, const limiter = rateLimit({ windowMs: 60000, max: 100 })",
    example: "app.use(limiter); // Applies to all routes",
    realTimeExample:
      "Like a traffic light: Controls the flow of requests to prevent overload.",
  },
  {
    id: 34,
    question: "What is the event loop in Node.js?",
    answer:
      "The event loop handles asynchronous operations, executing callbacks when I/O operations complete, keeping Node.js non-blocking.",
    realTimeExample:
      "Like a busy restaurant kitchen: Takes orders (events), processes them asynchronously, and serves when ready.",
  },
  {
    id: 35,
    question: "How do you implement background jobs in Node.js?",
    answer:
      "Use libraries like Bull with Redis for job queues, or node-cron for scheduled tasks.",
    syntax: "npm install bull, const queue = new Queue('my-queue')",
    example:
      "queue.add({ email: 'user@example.com', message: 'Welcome!' }); // Process emails in background",
    realTimeExample:
      "Like a task list: Handles time-consuming operations without blocking the main application.",
  },
  {
    id: 36,
    question:
      "What is the difference between spawn, exec, and fork in child_process?",
    answer:
      "spawn streams data, exec buffers output, fork creates new Node.js process. Use spawn for large data, exec for simple commands, fork for Node.js scripts.",
    syntax: "child_process.spawn(), child_process.exec(), child_process.fork()",
    example:
      "const { spawn } = require('child_process'); const child = spawn('ls', ['-l']);",
    realTimeExample:
      "spawn is like a hose (streaming), exec is like a bucket (buffered), fork is like cloning yourself.",
  },
  {
    id: 37,
    question: "How do you implement WebSockets in Node.js?",
    answer:
      "Use the ws library for native WebSocket support or socket.io for additional features like fallbacks.",
    syntax: "npm install ws, const WebSocket = require('ws')",
    example:
      "const wss = new WebSocket.Server({ port: 8080 }); wss.on('connection', ws => { ws.send('Hello!'); });",
    realTimeExample:
      "Like a direct phone line: Maintains persistent connection for real-time communication.",
  },
  {
    id: 38,
    question:
      "What is the difference between process.nextTick() and setImmediate()?",
    answer:
      "process.nextTick() executes before the next event loop iteration. setImmediate() executes after I/O events in the current loop.",
    syntax: "process.nextTick(callback), setImmediate(callback)",
    example:
      "process.nextTick(() => console.log('nextTick')); setImmediate(() => console.log('immediate'));",
    realTimeExample:
      "nextTick is urgent (do immediately), setImmediate is soon (after current tasks).",
  },
  {
    id: 39,
    question: "How do you implement API versioning in Node.js?",
    answer:
      "Use URL versioning (/api/v1/), header versioning, or query parameters. Create separate route files for each version.",
    syntax: "app.use('/api/v1', v1Routes), app.use('/api/v2', v2Routes)",
    example:
      "const v1Routes = require('./routes/v1'); const v2Routes = require('./routes/v2');",
    realTimeExample:
      "Like software versions: Allows multiple API versions to coexist and evolve independently.",
  },
  {
    id: 40,
    question:
      "What is the difference between synchronous and asynchronous programming?",
    answer:
      "Synchronous code executes line by line, blocking until each operation completes. Asynchronous code allows operations to run in parallel, using callbacks or promises.",
    realTimeExample:
      "Synchronous is like waiting in line one by one. Asynchronous is like ordering food and continuing conversation while waiting.",
  },
  {
    id: 41,
    question: "How do you handle database transactions in Node.js?",
    answer:
      "Use transaction methods provided by database drivers. Start transaction, execute queries, commit on success, rollback on error.",
    syntax:
      "connection.beginTransaction(), connection.commit(), connection.rollback()",
    example:
      "connection.beginTransaction(); try { await connection.query('UPDATE...'); await connection.query('INSERT...'); await connection.commit(); } catch { await connection.rollback(); }",
    realTimeExample:
      "Like a bank transfer: All operations must succeed together or none at all.",
  },
  {
    id: 42,
    question: "What is the difference between PUT and PATCH?",
    answer:
      "PUT replaces the entire resource. PATCH applies partial updates to the resource.",
    syntax: "app.put('/resource/:id'), app.patch('/resource/:id')",
    example:
      "PUT /users/1 replaces entire user object. PATCH /users/1 updates only specified fields.",
    realTimeExample:
      "PUT is like repainting the whole wall. PATCH is like fixing a small crack.",
  },
  {
    id: 43,
    question: "How do you implement password hashing in Node.js?",
    answer:
      "Use bcrypt or argon2 libraries to hash passwords securely. Never store plain text passwords.",
    syntax: "npm install bcrypt, bcrypt.hash(), bcrypt.compare()",
    example:
      "const hashedPassword = await bcrypt.hash(password, 10); const isValid = await bcrypt.compare(password, hashedPassword);",
    realTimeExample:
      "Like locking valuables: Protects user passwords even if database is compromised.",
  },
  {
    id: 44,
    question: "What is the difference between res.send() and res.json()?",
    answer:
      "res.send() sends various data types with automatic content-type. res.json() specifically sends JSON with application/json content-type.",
    syntax: "res.send(data), res.json(data)",
    example:
      "res.send('<h1>Hello</h1>'); // Sends HTML, res.json({ message: 'Hello' }); // Sends JSON",
    realTimeExample:
      "res.send() is general purpose. res.json() is specifically for JSON data.",
  },
  {
    id: 45,
    question: "How do you implement session-based authentication?",
    answer:
      "Use express-session middleware to store session data on server. Store user ID in session after login.",
    syntax: "npm install express-session, app.use(session({ secret: 'key' }))",
    example:
      "req.session.userId = user.id; // After login, if (req.session.userId) { /* authenticated */ }",
    realTimeExample:
      "Like a VIP wristband: Server remembers user is logged in across requests.",
  },
  {
    id: 46,
    question: "What is the difference between middleware and routes?",
    answer:
      "Middleware processes requests before they reach routes. Routes define specific endpoints and their handlers.",
    syntax: "app.use(middleware), app.get('/path', handler)",
    example:
      "app.use(express.json()); // Middleware, app.get('/users', getUsers); // Route",
    realTimeExample:
      "Middleware is like security checkpoints. Routes are like the final destinations.",
  },
  {
    id: 47,
    question: "How do you implement file streaming in Node.js?",
    answer:
      "Use fs.createReadStream() and fs.createWriteStream() for efficient file handling without loading entire files into memory.",
    syntax:
      "const readStream = fs.createReadStream('file.txt'); const writeStream = fs.createWriteStream('output.txt')",
    example: "readStream.pipe(writeStream); // Streams data from read to write",
    realTimeExample:
      "Like a pipeline: Moves data in chunks rather than carrying the whole load at once.",
  },
  {
    id: 48,
    question: "What is the difference between exports and module.exports?",
    answer:
      "Both export from modules. exports is a reference to module.exports. Use module.exports for single export, exports for multiple.",
    syntax: "exports.function = function() {}, module.exports = { function }",
    example:
      "exports.add = (a, b) => a + b; // Multiple exports, module.exports = class Calculator {}; // Single export",
    realTimeExample:
      "exports is like adding items to a box. module.exports is replacing the entire box.",
  },
  {
    id: 49,
    question: "How do you implement API documentation in Node.js?",
    answer:
      "Use Swagger/OpenAPI with libraries like swagger-jsdoc and swagger-ui-express to generate interactive API docs.",
    syntax: "npm install swagger-jsdoc swagger-ui-express",
    example:
      "const swaggerUi = require('swagger-ui-express'); app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));",
    realTimeExample:
      "Like a user manual: Provides clear instructions and examples for API usage.",
  },
  {
    id: 50,
    question: "What is the difference between res.end() and res.send()?",
    answer:
      "res.end() ends the response without sending data. res.send() sends data and ends the response.",
    syntax: "res.end(), res.send(data)",
    example:
      "res.status(404).end(); // Just end with 404, res.send('Hello'); // Send data and end",
    realTimeExample:
      "res.end() is like hanging up the phone. res.send() is saying something before hanging up.",
  },
  {
    id: 51,
    question:
      "How do you implement role-based access control (RBAC) in Node.js?",
    answer:
      "Role-Based Access Control (RBAC) restricts access to resources based on user roles. Use middleware to check the user's role and permissions before allowing access to specific routes or actions.",
    syntax:
      "function checkRole(role) { return (req, res, next) => { if (req.user.role === role) return next(); res.status(403).send('Access denied'); } }",
    example:
      "Define RBAC middleware:\nconst checkAdmin = checkRole('admin');\napp.get('/admin', checkAdmin, (req, res) => {\n  res.send('Admin Dashboard');\n});",
    realTimeExample:
      "Like a VIP area: Only users with the right role (VIP pass) can enter specific areas (routes) of your application.",
  },
  {
    id: 52,
    question: "How do you implement rate limiting for APIs in Node.js?",
    answer:
      "Rate limiting restricts the number of requests a client can make to your API within a specific time window. Use the `express-rate-limit` middleware to implement rate limiting and protect your API from abuse.",
    syntax:
      "npm install express-rate-limit, const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 })",
    example:
      "Apply rate limiting:\napp.use(limiter);\napp.get('/api/data', (req, res) => {\n  res.json({ data: 'Limited access' });\n});",
    realTimeExample:
      "Like a traffic light: Controls the flow of requests to prevent overload and ensure fair usage of your API.",
  },
  {
    id: 53,
    question: "How do you implement WebSocket communication in Node.js?",
    answer:
      "WebSocket enables real-time, bidirectional communication between clients and servers. Use the `ws` library to create a WebSocket server and handle WebSocket connections, messages, and events.",
    syntax: "npm install ws, const WebSocket = require('ws')",
    example:
      "Create a WebSocket server:\nconst wss = new WebSocket.Server({ port: 8080 });\nwss.on('connection', (ws) => {\n  ws.on('message', (message) => {\n    console.log('Received:', message);\n    ws.send(`Echo: ${message}`);\n  });\n});",
    realTimeExample:
      "Like a live chat: Enables instant, two-way communication between clients and servers, allowing real-time updates and interactions.",
  },
  {
    id: 54,
    question: "How do you implement API versioning in Node.js?",
    answer:
      "API versioning allows you to maintain multiple versions of your API, ensuring backward compatibility as your application evolves. Use URL versioning, header versioning, or query parameters to implement API versioning.",
    syntax: "app.use('/api/v1', v1Routes), app.use('/api/v2', v2Routes)",
    example:
      "Version your API:\nconst v1Routes = require('./routes/v1');\nconst v2Routes = require('./routes/v2');\napp.use('/api/v1/users', v1Routes);\napp.use('/api/v2/users', v2Routes);",
    realTimeExample:
      "Like software versions: Allows different API versions to coexist, ensuring that existing clients continue to work while new features are introduced.",
  },
  {
    id: 55,
    question: "How do you implement database connection pooling in Node.js?",
    answer:
      "Database connection pooling reuses database connections to improve performance and reduce overhead. Use connection pooling libraries like `mysql2` or `pg` to manage a pool of database connections in your Node.js application.",
    syntax:
      "const pool = mysql.createPool({ host: 'localhost', user: 'root', database: 'test', connectionLimit: 10 })",
    example:
      "Create a connection pool:\nconst pool = mysql.createPool({\n  host: 'localhost',\n  user: 'root',\n  database: 'test',\n  connectionLimit: 10\n});\npool.query('SELECT * FROM users', (err, results) => {\n  if (err) throw err;\n  console.log(results);\n});",
    realTimeExample:
      "Like a pool of taxis: Reuses connections (taxis) efficiently, reducing wait times and improving resource utilization.",
  },
  {
    id: 56,
    question: "How do you implement request validation in Node.js?",
    answer:
      "Request validation ensures that incoming data meets specific criteria before processing. Use libraries like `joi` or `express-validator` to validate and sanitize user input, preventing errors and security vulnerabilities.",
    syntax:
      "npm install joi, const schema = Joi.object({ name: Joi.string().required() })",
    example:
      "Validate request data:\nconst { error } = schema.validate(req.body);\nif (error) return res.status(400).json({ error: error.details[0].message });",
    realTimeExample:
      "Like a quality control check: Ensures that incoming data is correct and meets requirements before processing, preventing errors and security issues.",
  },
  {
    id: 57,
    question: "How do you implement file compression in Node.js?",
    answer:
      "File compression reduces the size of files, improving transfer speed and reducing bandwidth usage. Use the `compression` middleware in Express.js to compress response bodies before sending them to the client.",
    syntax: "npm install compression, app.use(compression())",
    example:
      "Enable compression:\napp.use(compression());\napp.get('/download', (req, res) => {\n  res.download('large-file.zip');\n});",
    realTimeExample:
      "Like zipping a file: Compresses data to save space and transfer it faster, improving performance and user experience.",
  },
  {
    id: 58,
    question: "How do you implement request logging in Node.js?",
    answer:
      "Request logging records details about incoming requests, such as the method, URL, status code, and response time. Use the `morgan` middleware in Express.js to log HTTP requests to the console or a file, aiding in debugging and monitoring.",
    syntax: "npm install morgan, app.use(morgan('combined'))",
    example:
      "Log HTTP requests:\napp.use(morgan('tiny'));\napp.get('/', (req, res) => {\n  res.send('Hello World');\n});",
    realTimeExample:
      "Like a visitor log: Records who visited your app and when, providing valuable insights into user activity and potential issues.",
  },
  {
    id: 59,
    question: "How do you implement response caching in Node.js?",
    answer:
      "Response caching stores the results of expensive operations or API responses, reducing the need to recompute or refetch data. Use the `apicache` middleware to cache responses and improve performance.",
    syntax: "npm install apicache, const cache = apicache.middleware",
    example:
      "Cache API responses:\napp.use(cache('5 minutes'));\napp.get('/api/data', (req, res) => {\n  res.json({ data: 'Cached response' });\n});",
    realTimeExample:
      "Like a memory cache: Stores frequently accessed data for quick retrieval, reducing load times and improving efficiency.",
  },
  {
    id: 60,
    question: "How do you implement health checks in Node.js?",
    answer:
      "Health checks monitor the status of your application and its dependencies, ensuring everything is running smoothly. Create a dedicated endpoint that returns the health status of your application, including database connections and external services.",
    syntax:
      "app.get('/health', (req, res) => { res.json({ status: 'OK', database: 'connected' }) })",
    example:
      "Implement a health check:\napp.get('/health', async (req, res) => {\n  const dbStatus = await checkDatabaseConnection();\n  res.json({ status: 'OK', database: dbStatus });\n});",
    realTimeExample:
      "Like a doctor's checkup: Regularly checks the health of your application and its dependencies, ensuring everything is functioning correctly.",
  },
  {
    id: 61,
    question: "How do you implement request timeouts in Node.js?",
    answer:
      "Request timeouts prevent slow or hanging requests from consuming resources indefinitely. Use the `connect-timeout` middleware to set a timeout for requests, automatically ending those that take too long.",
    syntax: "npm install connect-timeout, app.use(timeout('10s'))",
    example:
      "Set a request timeout:\napp.use(timeout('10s'));\napp.use(haltOnTimedout);\napp.get('/slow', (req, res) => {\n  setTimeout(() => res.send('Done'), 15000);\n});",
    realTimeExample:
      "Like a timer: Automatically stops requests that take too long, preventing resource exhaustion and ensuring smooth operation.",
  },
  {
    id: 62,
    question: "How do you implement API key authentication in Node.js?",
    answer:
      "API key authentication requires clients to provide a valid API key to access your API. Use middleware to check for the presence and validity of an API key in the request headers or query parameters.",
    syntax:
      "function checkApiKey(req, res, next) { const apiKey = req.headers['x-api-key']; if (apiKey && apiKey === 'valid-key') return next(); res.status(401).send('Unauthorized'); }",
    example:
      "Protect routes with API key:\napp.use(checkApiKey);\napp.get('/api/data', (req, res) => {\n  res.json({ data: 'Protected data' });\n});",
    realTimeExample:
      "Like a keycard: Only clients with a valid key (API key) can access protected resources, ensuring security and authorization.",
  },
  {
    id: 63,
    question: "How do you implement request throttling in Node.js?",
    answer:
      "Request throttling limits the rate at which a client can make requests to your API, preventing abuse and ensuring fair usage. Use the `express-rate-limit` middleware to implement throttling based on IP addresses or user identities.",
    syntax:
      "npm install express-rate-limit, const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 })",
    example:
      "Apply request throttling:\napp.use(limiter);\napp.get('/api/data', (req, res) => {\n  res.json({ data: 'Throttled access' });\n});",
    realTimeExample:
      "Like a speed limit: Controls the rate of requests to prevent overload and ensure fair access to your API.",
  },
  {
    id: 64,
    question: "How do you implement request body parsing in Node.js?",
    answer:
      "Request body parsing extracts data from HTTP request bodies, such as JSON or form data. Use the `body-parser` middleware in Express.js to parse incoming request bodies and make the data available in `req.body`.",
    syntax: "npm install body-parser, app.use(bodyParser.json())",
    example:
      "Parse JSON request bodies:\napp.use(express.json());\napp.post('/api/data', (req, res) => {\n  console.log(req.body);\n  res.json({ received: true });\n});",
    realTimeExample:
      "Like opening a package: Extracts data from the request body, making it easy to process user input in your application.",
  },
  {
    id: 65,
    question: "How do you implement request parameter validation in Node.js?",
    answer:
      "Request parameter validation ensures that URL or query parameters meet specific criteria before processing. Use libraries like `joi` or `express-validator` to validate parameters and provide meaningful error messages.",
    syntax:
      "npm install joi, const schema = Joi.object({ id: Joi.number().required() })",
    example:
      "Validate request parameters:\nconst { error } = schema.validate(req.params);\nif (error) return res.status(400).json({ error: error.details[0].message });",
    realTimeExample:
      "Like a ticket inspector: Checks that parameters are valid before allowing access to specific resources or actions.",
  },
  {
    id: 66,
    question: "How do you implement request header validation in Node.js?",
    answer:
      "Request header validation ensures that required or specific headers are present and valid in incoming requests. Use middleware to check for the presence and validity of headers, such as content type or authorization headers.",
    syntax:
      "function checkHeaders(req, res, next) { if (req.headers['content-type'] === 'application/json') return next(); res.status(400).send('Invalid headers'); }",
    example:
      "Validate request headers:\napp.use(checkHeaders);\napp.post('/api/data', (req, res) => {\n  res.json({ received: true });\n});",
    realTimeExample:
      "Like a bouncer: Checks that requests have the correct headers (ID) before allowing access to specific resources or actions.",
  },
  {
    id: 67,
    question: "How do you implement request query validation in Node.js?",
    answer:
      "Request query validation ensures that query parameters meet specific criteria before processing. Use libraries like `joi` or `express-validator` to validate query parameters and provide meaningful error messages.",
    syntax:
      "npm install joi, const schema = Joi.object({ limit: Joi.number().min(1).max(100) })",
    example:
      "Validate request queries:\nconst { error } = schema.validate(req.query);\nif (error) return res.status(400).json({ error: error.details[0].message });",
    realTimeExample:
      "Like a filter: Ensures that query parameters are valid and within acceptable ranges before processing, preventing errors and unexpected behavior.",
  },
  {
    id: 68,
    question: "How do you implement request compression in Node.js?",
    answer:
      "Request compression reduces the size of incoming request bodies, improving performance and reducing bandwidth usage. Use the `body-parser` middleware with compression options to handle compressed request bodies.",
    syntax:
      "npm install body-parser, app.use(bodyParser.json({ limit: '10mb' }))",
    example:
      "Handle compressed requests:\napp.use(express.json({ limit: '10mb' }));\napp.post('/api/data', (req, res) => {\n  console.log(req.body);\n  res.json({ received: true });\n});",
    realTimeExample:
      "Like unpacking a compressed package: Extracts and processes compressed request data, ensuring efficient handling of large payloads.",
  },
  {
    id: 69,
    question: "How do you implement request decompression in Node.js?",
    answer:
      "Request decompression extracts data from compressed request bodies, such as gzip or deflate encoding. Use middleware like `compression` or `body-parser` to handle decompressed request bodies and make the data available in `req.body`.",
    syntax: "npm install compression, app.use(compression())",
    example:
      "Handle decompressed requests:\napp.use(express.json());\napp.post('/api/data', (req, res) => {\n  console.log(req.body);\n  res.json({ received: true });\n});",
    realTimeExample:
      "Like inflating a balloon: Extracts and processes compressed request data, ensuring that the original data is available for use in your application.",
  },
  {
    id: 70,
    question: "How do you implement request logging middleware in Node.js?",
    answer:
      "Request logging middleware records details about incoming requests, such as the method, URL, headers, and body. Use the `morgan` middleware or custom middleware to log requests to the console or a file, aiding in debugging and monitoring.",
    syntax: "npm install morgan, app.use(morgan('combined'))",
    example:
      "Log incoming requests:\napp.use(morgan('dev'));\napp.get('/', (req, res) => {\n  res.send('Hello World');\n});",
    realTimeExample:
      "Like a security camera: Records details about incoming requests, providing a log of activity for analysis and troubleshooting.",
  },
  {
    id: 71,
    question: "How do you implement request ID tracking in Node.js?",
    answer:
      "Request ID tracking assigns a unique identifier to each incoming request, making it easier to trace and debug issues across multiple services or logs. Use middleware to generate and attach a request ID to each request.",
    syntax: "app.use((req, res, next) => { req.id = uuid.v4(); next(); })",
    example:
      "Track request IDs:\napp.use((req, res, next) => {\n  req.id = uuid.v4();\n  console.log(`Request ${req.id} received`);\n  next();\n});",
    realTimeExample:
      "Like a tracking number: Assigns a unique identifier to each request, making it easy to follow its journey through your application and services.",
  },
  {
    id: 72,
    question: "How do you implement request timing in Node.js?",
    answer:
      "Request timing measures the duration of request processing, helping you identify performance bottlenecks. Use middleware to record the start time of a request and calculate the duration when the response is sent.",
    syntax:
      "app.use((req, res, next) => { req.startTime = Date.now(); next(); })",
    example:
      "Measure request timing:\napp.use((req, res, next) => {\n  req.startTime = Date.now();\n  res.on('finish', () => {\n    const duration = Date.now() - req.startTime;\n    console.log(`Request took ${duration}ms`);\n  });\n  next();\n});",
    realTimeExample:
      "Like a stopwatch: Measures how long each request takes to process, helping you optimize performance and improve user experience.",
  },
  {
    id: 73,
    question: "How do you implement request size limiting in Node.js?",
    answer:
      "Request size limiting prevents excessively large request bodies from consuming too much memory or causing performance issues. Use the `body-parser` middleware to set limits on the size of incoming request bodies.",
    syntax: "app.use(express.json({ limit: '10kb' }))",
    example:
      "Limit request size:\napp.use(express.json({ limit: '10kb' }));\napp.post('/api/data', (req, res) => {\n  res.json({ received: true });\n});",
    realTimeExample:
      "Like a weight limit: Ensures that request bodies are within acceptable size limits, preventing resource exhaustion and performance degradation.",
  },
  {
    id: 74,
    question: "How do you implement request method overriding in Node.js?",
    answer:
      "Request method overriding allows clients to use HTTP methods like PUT or DELETE in environments where only GET and POST are supported, such as HTML forms. Use the `method-override` middleware to interpret a query parameter or header as the intended HTTP method.",
    syntax: "npm install method-override, app.use(methodOverride('_method'))",
    example:
      "Override HTTP methods:\napp.use(methodOverride('_method'));\napp.put('/api/data', (req, res) => {\n  res.json({ updated: true });\n});",
    realTimeExample:
      "Like a translator: Interprets the intended HTTP method from a query parameter or header, allowing clients to use any HTTP method regardless of limitations.",
  },
  {
    id: 75,
    question: "How do you implement request content negotiation in Node.js?",
    answer:
      "Request content negotiation allows clients to specify the format of the response they prefer, such as JSON or XML. Use the `accepts` method in Express.js to check the `Accept` header and respond with the appropriate content type.",
    syntax:
      "req.accepts(type), res.format({ 'application/json': () => { res.json({ data: 'JSON' }) })",
    example:
      "Negotiate response format:\napp.get('/api/data', (req, res) => {\n  res.format({\n    'application/json': () => res.json({ data: 'JSON' }),\n    'text/plain': () => res.send('Plain Text')\n  });\n});",
    realTimeExample:
      "Like a multilingual guide: Responds to clients in their preferred format, ensuring compatibility and a better user experience.",
  },
];

// Make data available globally
window.intermediate = intermediate;
