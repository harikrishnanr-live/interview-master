// Node.js Advanced Level Q&A Data

let advanced = [
  {
    id: 1,
    question: "What is a buffer in Node.js?",
    answer:
      "A buffer is like a temporary box in Node.js that holds raw binary data. It helps Node.js work with files, network data, and other binary stuff directly.",
    syntax: "Buffer.from('Hello'), Buffer.alloc(10)",
    example:
      "Create a buffer:\nconst buf = Buffer.from('Hello World');\nconsole.log(buf.toString()); // 'Hello World'",
    realTimeExample:
      "Like a lunchbox: It holds your food (data) until you're ready to eat (use) it.",
  },
  {
    id: 2,
    question: "What are streams in Node.js?",
    answer:
      "Streams are like pipes in Node.js. They let you read or write data in small chunks instead of all at once. This is great for big files or live data.",
    syntax:
      "fs.createReadStream('file.txt'), fs.createWriteStream('output.txt')",
    example:
      "Read a file as a stream:\nconst readStream = fs.createReadStream('big-file.txt');\nreadStream.on('data', (chunk) => console.log(chunk));",
    realTimeExample:
      "Like a garden hose: Water (data) flows through in a steady stream instead of dumping a whole bucket at once.",
  },
  {
    id: 3,
    question: "What is callback hell?",
    answer:
      "Callback hell is when you have too many nested callbacks in your code. It makes the code messy and hard to read, like a pyramid of doom.",
    example:
      "Bad example:\nfs.readFile('a.txt', (err, data) => {\n  fs.readFile('b.txt', (err, data) => {\n    fs.readFile('c.txt', (err, data) => {\n      // More nesting...\n    });\n  });\n});",
    realTimeExample:
      "Like a nest of Russian dolls: You open one, find another, and another, until it's too confusing.",
  },
  {
    id: 4,
    question: "What are the three methods to avoid callback hell?",
    answer:
      "To avoid callback hell, you can use:\n1. Promises\n2. Async/await\n3. Generator functions",
    syntax:
      "Promises: new Promise(), Async/await: async function() { await promise; }",
    example:
      "Using async/await:\nasync function readFiles() {\n  const a = await fs.promises.readFile('a.txt');\n  const b = await fs.promises.readFile('b.txt');\n  return { a, b };\n}",
    realTimeExample:
      "Like using an elevator instead of stairs: You go straight to your floor (result) without stopping at every step (callback).",
  },
  {
    id: 5,
    question: "What is body-parser in Node.js?",
    answer:
      "Body-parser is a tool for Express.js. It helps read data sent in HTTP requests, like form submissions or JSON data, and makes it easy to use in your code.",
    syntax: "app.use(express.json()), app.use(express.urlencoded())",
    example:
      "Use body-parser:\napp.use(express.json());\napp.post('/submit', (req, res) => {\n  console.log(req.body); // Data from the request\n});",
    realTimeExample:
      "Like a mail sorter: It opens the envelope (request) and organizes the letters (data) for you.",
  },
  {
    id: 6,
    question: "Explain the TLS module in Node.js.",
    answer:
      "The TLS module in Node.js helps create secure, encrypted connections over the internet. It's like HTTPS for your Node.js apps, keeping data safe from hackers.",
    syntax: "const tls = require('tls'); tls.createServer(options)",
    example:
      "Create a secure server:\nconst tls = require('tls');\nconst server = tls.createServer({\n  key: fs.readFileSync('key.pem'),\n  cert: fs.readFileSync('cert.pem')\n});",
    realTimeExample:
      "Like a secure phone line: Only you and the person you're calling (server/client) can hear the conversation (data).",
  },
  {
    id: 7,
    question: "What is a cluster in Node.js?",
    answer:
      "A cluster in Node.js lets you run multiple copies of your app at the same time. Each copy uses a different CPU core, making your app faster and able to handle more users.",
    syntax: "const cluster = require('cluster'); cluster.fork()",
    example:
      "Create a cluster:\nif (cluster.isMaster) {\n  for (let i = 0; i < 4; i++) cluster.fork();\n} else {\n  // Worker code here\n}",
    realTimeExample:
      "Like having multiple cashiers in a store: More cashiers (workers) mean more customers (requests) can be served at once.",
  },
  {
    id: 8,
    question: "What is the difference between a process and a thread?",
    answer:
      "A process is like a whole program running on your computer with its own memory. A thread is a smaller part inside a process that does a specific job. One process can have many threads working together.",
    realTimeExample:
      "Think of a process as a factory. Threads are like workers in that factory, each doing different jobs.",
  },
  {
    id: 9,
    question: "What is rate limiting?",
    answer:
      "Rate limiting controls how many requests a user or app can make to your server in a certain time. It helps stop abuse and keeps your server from getting overwhelmed.",
    syntax: "npm install express-rate-limit",
    example:
      "Limit requests:\nconst limiter = rateLimit({\n  windowMs: 15 * 60 * 1000, // 15 minutes\n  max: 100 // limit each IP to 100 requests\n});\napp.use(limiter);",
    realTimeExample:
      "Like a bouncer at a club: Only lets in a certain number of people (requests) at a time.",
  },
  {
    id: 10,
    question: "What is API caching with Redis?",
    answer:
      "API caching with Redis stores copies of API responses in a super-fast memory store. When the same request comes again, you can send the cached copy instead of recalculating everything.",
    syntax: "npm install redis, client.set(key, value), client.get(key)",
    example:
      "Cache API responses:\nconst cached = await client.get('api:users');\nif (cached) return JSON.parse(cached);\n// Fetch from DB and cache\nconst users = await db.getUsers();\nawait client.set('api:users', JSON.stringify(users), 'EX', 3600);",
    realTimeExample:
      "Like a photocopier with memory: It remembers the last copy (response) and can print it again quickly.",
  },
  {
    id: 11,
    question: "What is JWT Authentication & Authorization?",
    answer:
      "JWT (JSON Web Token) is like a digital ID card. Your server gives a signed token to users when they log in. The user sends this token with each request, so the server knows who they are and what they're allowed to do.",
    syntax:
      "npm install jsonwebtoken, jwt.sign(payload, secret), jwt.verify(token, secret)",
    example:
      "Create and verify a token:\nconst token = jwt.sign({ userId: 123 }, 'secret');\nconst decoded = jwt.verify(token, 'secret');",
    realTimeExample:
      "Like a concert wristband: Shows you paid (logged in) and what areas (permissions) you can access.",
  },
  {
    id: 12,
    question: "How do you implement microservices architecture in Node.js?",
    answer:
      "Microservices means breaking your big app into small, independent services. Each service does one job well and talks to others using APIs or messages. Use Docker to run each service separately.",
    syntax: "Docker, Kubernetes, REST/gRPC APIs",
    example:
      "Example services:\n- User service (handles user accounts)\n- Order service (handles orders)\n- Payment service (handles payments)\nEach runs in its own Docker container.",
    realTimeExample:
      "Like a restaurant: Different teams handle orders (waiters), cooking (chefs), and payments (cashiers), but they all work together.",
  },
  {
    id: 13,
    question: "What is the event loop and how does it work?",
    answer:
      "The event loop is like Node.js's manager. It keeps checking for tasks (like reading files or network requests) and runs their callbacks when they're done. This lets Node.js handle many things at once without waiting.",
    realTimeExample:
      "Like a juggler: Keeps many balls (tasks) in the air, catching (handling) each one when it comes down.",
  },
  {
    id: 14,
    question: "How do you optimize Node.js application performance?",
    answer:
      "To make Node.js apps faster:\n1. Use clustering to utilize all CPU cores\n2. Add caching with Redis\n3. Optimize database queries\n4. Compress responses\n5. Use PM2 for process management\n6. Avoid blocking the event loop",
    syntax: "cluster.fork(), npm install compression, pm2 start app.js -i max",
    example:
      "Enable compression:\nconst compression = require('compression');\napp.use(compression());",
    realTimeExample:
      "Like tuning a race car: Every small improvement adds up to make it much faster overall.",
  },
  {
    id: 15,
    question:
      "What is the difference between process.nextTick() and setImmediate()?",
    answer:
      "process.nextTick() runs your callback right before the next event loop starts. setImmediate() runs it after all I/O events in the current loop. nextTick is faster but can starve I/O if overused.",
    syntax: "process.nextTick(callback), setImmediate(callback)",
    example:
      "See the difference:\nprocess.nextTick(() => console.log('A'));\nsetImmediate(() => console.log('B'));\n// A prints before B",
    realTimeExample:
      "nextTick is like cutting in line. setImmediate is like waiting your turn after everyone else.",
  },
  {
    id: 16,
    question: "How do you implement distributed tracing in Node.js?",
    answer:
      "Distributed tracing helps you follow a request as it moves through different services. Use tools like OpenTelemetry to add tracing to your code and see where slowdowns happen.",
    syntax: "npm install @opentelemetry/api, tracer.startSpan()",
    example:
      "Trace a request:\nconst span = tracer.startSpan('getUser');\ntry {\n  // Your code here\n} finally {\n  span.end();\n}",
    realTimeExample:
      "Like a GPS tracker: Shows you exactly where your package (request) is at every step of its journey.",
  },
  {
    id: 17,
    question: "What is the circuit breaker pattern in Node.js?",
    answer:
      "A circuit breaker stops your app from repeatedly trying to use a failing service. After too many failures, it 'trips' and fails fast until the service recovers, preventing cascading failures.",
    syntax:
      "npm install opossum, const circuit = new CircuitBreaker(action, options)",
    example:
      "Use a circuit breaker:\nconst breaker = new CircuitBreaker(fetchData, {\n  timeout: 3000,\n  errorThresholdPercentage: 50,\n  resetTimeout: 30000\n});\nbreaker.fire().then(console.log).catch(console.error);",
    realTimeExample:
      "Like an electrical circuit breaker: If there's a power surge (too many failures), it cuts off the electricity (stops requests) to prevent damage.",
  },
  {
    id: 18,
    question: "How do you implement database connection pooling?",
    answer:
      "Connection pooling keeps a set of ready-to-use database connections. Instead of creating a new connection for every query, your app reuses connections from the pool, making everything faster.",
    syntax: "npm install mysql2, const pool = mysql.createPool(config)",
    example:
      "Create a connection pool:\nconst pool = mysql.createPool({\n  host: 'localhost',\n  user: 'root',\n  database: 'mydb',\n  connectionLimit: 10\n});\npool.query('SELECT * FROM users', (err, results) => { /* ... */ });",
    realTimeExample:
      "Like a pool of taxis: Instead of calling a new taxi (connection) every time, you use one from the pool waiting at the stand.",
  },
  {
    id: 19,
    question: "What is the observer pattern in Node.js?",
    answer:
      "The observer pattern lets objects watch other objects and get notified when something happens. In Node.js, EventEmitter uses this pattern to handle events.",
    syntax: "const emitter = new EventEmitter(); emitter.on('event', callback)",
    example:
      "Use EventEmitter:\nconst emitter = new EventEmitter();\nemitter.on('newUser', (user) => {\n  console.log(`Welcome ${user.name}!`);\n});\nemitter.emit('newUser', { name: 'Alice' });",
    realTimeExample:
      "Like a news subscription: You get notified (callback) whenever there's breaking news (event).",
  },
  {
    id: 20,
    question: "How do you implement API gateway pattern?",
    answer:
      "An API gateway is like a main door to all your microservices. It handles routing requests to the right service, authentication, and combining responses from multiple services.",
    syntax: "Express.js, Kong, or custom gateway service",
    example:
      "Simple gateway:\napp.get('/api/users', (req, res) => {\n  // Forward to user service\n  fetch('http://user-service/users')\n    .then(response => response.json())\n    .then(users => res.json(users));\n});",
    realTimeExample:
      "Like a hotel concierge: Directs you to the right service (restaurant, spa, etc.) and can combine information from different places.",
  },
  {
    id: 21,
    question: "What is the strategy pattern in Node.js?",
    answer:
      "The strategy pattern lets you switch between different ways of doing the same thing. You define multiple strategies (ways) and pick the right one at runtime.",
    syntax: "class Strategy { execute() {} }, context.setStrategy(strategy)",
    example:
      "Payment strategies:\nclass CreditCardStrategy {\n  pay(amount) { /* credit card logic */ }\n}\nclass PayPalStrategy {\n  pay(amount) { /* PayPal logic */ }\n}\n// Use the selected strategy\nconst payment = new Payment(new CreditCardStrategy());\npayment.pay(100);",
    realTimeExample:
      "Like choosing a payment method: You can pay with cash, card, or mobile - the process (paying) is the same, but the method changes.",
  },
  {
    id: 22,
    question: "How do you implement health checks in Node.js applications?",
    answer:
      "Health checks are like regular doctor visits for your app. Create an endpoint that checks if your app and its dependencies (like databases) are working properly.",
    syntax:
      "app.get('/health', (req, res) => { /* checks */ res.status(200).send('OK'); })",
    example:
      "Basic health check:\napp.get('/health', async (req, res) => {\n  const dbOk = await checkDatabase();\n  const redisOk = await checkRedis();\n  if (dbOk && redisOk) return res.status(200).send('OK');\n  res.status(500).send('Service unavailable');\n});",
    realTimeExample:
      "Like a smoke detector test: Regularly checks if everything is working to catch problems early.",
  },
  {
    id: 23,
    question: "What is the decorator pattern in Node.js?",
    answer:
      "The decorator pattern lets you add new features to objects without changing their code. You wrap the original object with decorators that add extra behavior.",
    syntax:
      "function decorator(original) { return function(...args) { /* add behavior */ return original(...args); }; }",
    example:
      "Logging decorator:\nfunction withLogging(fn) {\n  return function(...args) {\n    console.log(`Calling ${fn.name}`);\n    return fn(...args);\n  };\n}\nconst loggedFunction = withLogging(originalFunction);",
    realTimeExample:
      "Like adding phone accessories: You can add a case, screen protector, or pop socket without changing the phone itself.",
  },
  {
    id: 24,
    question: "How do you implement service mesh in Node.js?",
    answer:
      "A service mesh handles communication between your microservices. It provides features like service discovery, load balancing, and security without changing your app code. Use tools like Istio or Linkerd with Kubernetes.",
    syntax: "Kubernetes, Istio sidecar injection",
    example:
      "Deploy with Istio:\n1. Install Istio in your Kubernetes cluster\n2. Add Istio sidecar to your Node.js pods\n3. Use Istio's features for traffic management",
    realTimeExample:
      "Like a nervous system: Connects all parts of your body (services) and handles communication automatically.",
  },
  {
    id: 25,
    question: "What is the command pattern in Node.js?",
    answer:
      "The command pattern turns requests into objects. This lets you queue requests, log them, or support undo operations. Each command is a separate object that knows how to execute its action.",
    syntax: "class Command { execute() {} undo() {} }",
    example:
      "Database command:\nclass InsertCommand {\n  constructor(data) { this.data = data; }\n  execute() { return db.insert(this.data); }\n  undo() { return db.delete(this.data.id); }\n}\n// Use the command\nconst cmd = new InsertCommand({ name: 'Alice' });\nconst result = cmd.execute();",
    realTimeExample:
      "Like a remote control: Each button press is a command that can be recorded and replayed.",
  },
  {
    id: 26,
    question: "How do you implement distributed caching in Node.js?",
    answer:
      "Distributed caching stores data in a fast, shared memory store like Redis that multiple servers can access. This helps all your app instances share cached data and reduces database load.",
    syntax: "npm install redis, client.set(key, value, 'EX', ttl)",
    example:
      "Cache user data:\nconst cachedUser = await redis.get(`user:${userId}`);\nif (cachedUser) return JSON.parse(cachedUser);\n// Fetch from DB and cache\nconst user = await db.getUser(userId);\nawait redis.set(`user:${userId}`, JSON.stringify(user), 'EX', 3600);",
    realTimeExample:
      "Like a shared bulletin board: Everyone in the office (servers) can see and use the same posted notes (cached data).",
  },
  {
    id: 27,
    question: "What is the factory pattern in Node.js?",
    answer:
      "The factory pattern is like a factory that creates objects for you. You tell it what kind of object you need, and it makes one without you needing to know how it's made.",
    syntax:
      "class Factory { create(type) { if (type === 'A') return new A(); } }",
    example:
      "Database factory:\nclass DatabaseFactory {\n  create(type) {\n    if (type === 'mysql') return new MySQLConnection();\n    if (type === 'mongodb') return new MongoConnection();\n  }\n}\nconst db = new DatabaseFactory().create('mysql');",
    realTimeExample:
      "Like a car factory: You order a sedan or SUV, and the factory builds the right type of car for you.",
  },
  {
    id: 28,
    question: "How do you implement message queues in Node.js?",
    answer:
      "Message queues let your app send tasks to be processed later or by another service. Use libraries like Bull with Redis or RabbitMQ to create queues and handle background jobs.",
    syntax: "npm install bull, const queue = new Queue('jobs')",
    example:
      "Create a job queue:\nconst queue = new Queue('emailQueue');\n// Add a job\nqueue.add({ to: 'user@example.com', message: 'Hello!' });\n// Process jobs\nqueue.process(async (job) => {\n  await sendEmail(job.data.to, job.data.message);\n});",
    realTimeExample:
      "Like a postal service: You drop off letters (jobs) to be delivered later, while you continue with your day.",
  },
  {
    id: 29,
    question: "What is the singleton pattern in Node.js?",
    answer:
      "The singleton pattern makes sure only one instance of a class exists. This is useful for things like database connections or configuration objects that should only exist once in your app.",
    syntax:
      "class Singleton { static getInstance() { if (!this.instance) this.instance = new Singleton(); return this.instance; } }",
    example:
      "Database connection singleton:\nclass Database {\n  static getInstance() {\n    if (!this.instance) this.instance = new Database();\n    return this.instance;\n  }\n  connect() { /* connection logic */ }\n}\nconst db = Database.getInstance();",
    realTimeExample:
      "Like the President: Only one person can hold the office at a time, no matter how many people want the job.",
  },
  {
    id: 30,
    question: "How do you implement API versioning strategies?",
    answer:
      "API versioning lets you change your API without breaking existing clients. Common ways to version APIs:\n1. URL versioning (/api/v1/users)\n2. Header versioning (Accept: application/vnd.company.v1+json)\n3. Query parameter versioning (/api/users?version=1)",
    syntax: "app.use('/api/v1', v1Routes), req.headers['accept-version']",
    example:
      "URL versioning:\napp.use('/api/v1/users', userRoutesV1);\napp.use('/api/v2/users', userRoutesV2);",
    realTimeExample:
      "Like software updates: You can use the new version (v2) while old programs still work with the previous version (v1).",
  },
  {
    id: 31,
    question: "What is the adapter pattern in Node.js?",
    answer:
      "The adapter pattern helps different systems work together by converting one interface to another. It's like a translator between two incompatible things.",
    syntax:
      "class Adapter { constructor(adaptee) { this.adaptee = adaptee; } method() { return this.adaptee.compatibleMethod(); } }",
    example:
      "Database adapter:\nclass MongoAdapter {\n  constructor(mongoClient) {\n    this.client = mongoClient;\n  }\n  query(sql) {\n    // Convert SQL to Mongo query\n    return this.client.find(JSON.parse(sql));\n  }\n}",
    realTimeExample:
      "Like a power adapter: Lets you plug a US device into a European outlet by converting the plug type.",
  },
  {
    id: 32,
    question: "How do you implement graceful shutdown in production?",
    answer:
      "Graceful shutdown lets your app close properly when it receives a shutdown signal. It stops accepting new requests, finishes current ones, closes connections, and then exits cleanly.",
    syntax:
      "process.on('SIGTERM', async () => { server.close(); await db.close(); process.exit(0); })",
    example:
      "Handle shutdown:\nprocess.on('SIGINT', async () => {\n  console.log('Shutting down...');\n  server.close();\n  await db.close();\n  process.exit(0);\n});",
    realTimeExample:
      "Like closing a store: Stop letting new customers in, help the current ones finish, then turn off the lights and lock up.",
  },
  {
    id: 33,
    question: "What is the mediator pattern in Node.js?",
    answer:
      "The mediator pattern helps objects talk to each other without knowing about each other. A mediator object handles all communication between objects, keeping them loosely connected.",
    syntax:
      "class Mediator { notify(sender, event) { /* handle communication */ } }",
    example:
      "Chat room mediator:\nclass ChatMediator {\n  addUser(user) { this.users.push(user); }\n  send(message, user) {\n    this.users.forEach(u => {\n      if (u !== user) u.receive(message);\n    });\n  }\n}",
    realTimeExample:
      "Like an air traffic controller: Manages communication between planes (objects) to prevent collisions and keep everything organized.",
  },
  {
    id: 34,
    question: "How do you implement database sharding in Node.js?",
    answer:
      "Database sharding splits your data across multiple databases. Each shard holds a subset of the data, helping your app scale by spreading the load. You decide which shard to use based on a key (like user ID).",
    syntax: "const shard = getShard(userId); const db = shards[shard]",
    example:
      "Shard by user ID:\nfunction getShard(userId) {\n  return userId % 3; // Distribute across 3 shards\n}\nconst shard = getShard(req.user.id);\nconst db = databases[shard];",
    realTimeExample:
      "Like organizing books in multiple libraries: Each library (shard) holds books (data) for certain authors (users).",
  },
  {
    id: 35,
    question: "What is the template method pattern in Node.js?",
    answer:
      "The template method pattern defines the steps of an algorithm in a base class but lets subclasses change some steps without rewriting the whole algorithm.",
    syntax:
      "class Base { templateMethod() { this.step1(); this.step2(); } step1() {} step2() {} }",
    example:
      "Data processing template:\nclass DataProcessor {\n  process() {\n    this.read();\n    this.transform();\n    this.save();\n  }\n  read() { /* base implementation */ }\n  transform() { /* to be overridden */ }\n  save() { /* base implementation */ }\n}",
    realTimeExample:
      "Like a recipe template: The basic steps (mix, bake, decorate) are fixed, but you can change how you decorate (custom step).",
  },
  {
    id: 36,
    question: "How do you implement distributed locks in Node.js?",
    answer:
      "Distributed locks help coordinate actions across multiple servers. Only one server can hold the lock at a time, preventing conflicts when multiple servers try to do the same thing.",
    syntax: "redis.set('lock:key', 'value', 'NX', 'PX', ttl)",
    example:
      "Acquire a lock:\nconst lockId = await redis.set('resource:lock', 'locked', 'NX', 'PX', 30000);\nif (!lockId) return res.status(409).send('Resource locked');\n// Do work with the resource\nawait redis.del('resource:lock');",
    realTimeExample:
      "Like a key to a public restroom: Only one person can have the key at a time to use the restroom (resource).",
  },
  {
    id: 37,
    question: "What is the chain of responsibility pattern?",
    answer:
      "The chain of responsibility pattern passes requests along a chain of handlers. Each handler decides if it can process the request or should pass it to the next handler in the chain.",
    syntax:
      "class Handler { setNext(handler) { this.next = handler; } handle(request) { if (canHandle) process(); else this.next?.handle(request); } }",
    example:
      "Middleware chain:\nfunction authMiddleware(req, res, next) {\n  if (req.isAuthenticated) return next();\n  res.status(401).send('Unauthorized');\n}\nfunction validationMiddleware(req, res, next) {\n  if (isValid(req.body)) return next();\n  res.status(400).send('Invalid data');\n}",
    realTimeExample:
      "Like customer service: Your call gets passed to different departments until someone can help you.",
  },
  {
    id: 38,
    question: "How do you implement blue-green deployment in Node.js?",
    answer:
      "Blue-green deployment reduces downtime by running two identical production environments. Only one (blue) is live at a time. To update, you deploy to the green environment and switch traffic to it.",
    syntax: "Docker, Kubernetes, Load balancer configuration",
    example:
      "Blue-green steps:\n1. Deploy new version to green environment\n2. Test green environment\n3. Switch load balancer from blue to green\n4. If issues, switch back to blue",
    realTimeExample:
      "Like changing engines on a plane mid-flight: The new engine (green) is ready before you switch from the old one (blue).",
  },
  {
    id: 39,
    question: "What is the state pattern in Node.js?",
    answer:
      "The state pattern lets an object change its behavior when its internal state changes. The object appears to change its class, but it's actually delegating to different state objects.",
    syntax:
      "class State { handle() {} }, class Context { setState(state) { this.state = state; } request() { this.state.handle(); } }",
    example:
      "Order states:\nclass PendingState {\n  handle(order) {\n    console.log('Order is pending');\n    order.setState(new ProcessingState());\n  }\n}\nclass ProcessingState {\n  handle(order) {\n    console.log('Order is processing');\n    order.setState(new ShippedState());\n  }\n}",
    realTimeExample:
      "Like a traffic light: The same light (object) behaves differently (red/yellow/green) based on its current state.",
  },
  {
    id: 40,
    question: "How do you implement API rate limiting with Redis?",
    answer:
      "API rate limiting with Redis tracks how many requests each user makes. When a user exceeds their limit, you block further requests until the limit resets. Redis is perfect for this because it's fast and shared across servers.",
    syntax:
      "redis.incr('requests:user123'), redis.expire('requests:user123', 3600)",
    example:
      "Limit requests:\nconst count = await redis.incr(`req:${userId}`);\nif (count > 100) return res.status(429).send('Too many requests');\nawait redis.expire(`req:${userId}`, 3600); // Reset after 1 hour",
    realTimeExample:
      "Like a turnstile counter: Only lets through a certain number of people (requests) per hour.",
  },
  {
    id: 41,
    question: "How do you implement serverless Node.js functions?",
    answer:
      "Serverless lets you run Node.js functions without managing servers. You write functions that respond to events (like HTTP requests), and the cloud provider runs them for you, scaling automatically.",
    syntax: "AWS Lambda, Google Cloud Functions, Azure Functions",
    example:
      "AWS Lambda example:\nexports.handler = async (event) => {\n  const response = {\n    statusCode: 200,\n    body: JSON.stringify('Hello from Lambda!')\n  };\n  return response;\n};",
    realTimeExample:
      "Like a vending machine: You put in a request (money + button press), and it gives you what you want without you needing to know how it works inside.",
  },
  {
    id: 42,
    question: "What is the proxy pattern in Node.js?",
    answer:
      "The proxy pattern provides a substitute for another object to control access to it. This is useful for adding extra functionality like caching, logging, or access control.",
    syntax:
      "class Proxy { constructor(realSubject) { this.realSubject = realSubject; } request() { /* add logic */ this.realSubject.request(); } }",
    example:
      "Database proxy with caching:\nclass DatabaseProxy {\n  constructor(db) {\n    this.db = db;\n    this.cache = new Map();\n  }\n  async query(sql) {\n    if (this.cache.has(sql)) return this.cache.get(sql);\n    const result = await this.db.query(sql);\n    this.cache.set(sql, result);\n    return result;\n  }\n}",
    realTimeExample:
      "Like a secretary: Controls access to the boss (real object) and can handle some requests themselves.",
  },
  {
    id: 43,
    question: "How do you implement WebAssembly in Node.js?",
    answer:
      "WebAssembly (Wasm) lets you run code written in languages like C++ or Rust in Node.js at near-native speed. It's great for CPU-intensive tasks that would be slow in JavaScript.",
    syntax:
      "Node.js 12+ has built-in Wasm support, WebAssembly.instantiate(buffer)",
    example:
      "Load and run Wasm:\nconst fs = require('fs');\nconst wasmBuffer = fs.readFileSync('module.wasm');\nWebAssembly.instantiate(wasmBuffer)\n  .then(({ instance }) => {\n    console.log(instance.exports.add(2, 3)); // Call exported function\n  });",
    realTimeExample:
      "Like a turbocharger: Gives your Node.js app extra power for heavy tasks by using optimized code from other languages.",
  },
  {
    id: 44,
    question: "What is the builder pattern in Node.js?",
    answer:
      "The builder pattern helps create complex objects step by step. Instead of a complicated constructor, you use a builder to set properties one at a time and then build the final object.",
    syntax:
      "class Builder { setProperty(value) { this.property = value; return this; } build() { return new Product(this); } }",
    example:
      "User builder:\nclass UserBuilder {\n  setName(name) { this.name = name; return this; }\n  setAge(age) { this.age = age; return this; }\n  build() { return new User(this); }\n}\nconst user = new UserBuilder().setName('Alice').setAge(30).build();",
    realTimeExample:
      "Like building a burger: You add ingredients (properties) one by one (setName, setAge) before getting the final burger (object).",
  },
  {
    id: 45,
    question: "How do you implement real-time analytics in Node.js?",
    answer:
      "Real-time analytics means processing and showing data as it happens. Use WebSockets or Server-Sent Events (SSE) to send updates to clients, and process data in real-time with streams or message queues.",
    syntax: "WebSocket, SSE, Kafka, Redis streams",
    example:
      "Send real-time updates:\nconst wss = new WebSocket.Server({ port: 8080 });\nwss.on('connection', (ws) => {\n  setInterval(() => {\n    ws.send(JSON.stringify({ usersOnline: getOnlineCount() }));\n  }, 1000);\n});",
    realTimeExample:
      "Like a sports scoreboard: Updates the score (data) instantly as the game (events) happens.",
  },
  {
    id: 46,
    question: "What is the flyweight pattern in Node.js?",
    answer:
      "The flyweight pattern helps you reuse objects to save memory. Instead of creating many similar objects, you share common parts and only create what's unique for each case.",
    syntax:
      "class Flyweight { constructor(sharedState) { this.sharedState = sharedState; } operation(uniqueState) { /* use both states */ } }",
    example:
      "Tree flyweight:\nclass TreeType {\n  constructor(name, color) {\n    this.name = name;\n    this.color = color;\n  }\n  draw(x, y) { /* draw tree at x,y */ }\n}\n// Reuse tree types, only store position for each tree\nconst treeTypes = [new TreeType('Oak', 'Green'), new TreeType('Maple', 'Red')];",
    realTimeExample:
      "Like a stamp: You have one stamp (shared object) but can use it to make many identical marks (instances) on different papers.",
  },
  {
    id: 47,
    question: "How do you implement canary deployments in Node.js?",
    answer:
      "Canary deployments let you test new versions of your app with a small group of users before rolling it out to everyone. Use feature flags or route a percentage of traffic to the new version.",
    syntax: "Feature flags, Load balancer traffic splitting",
    example:
      "Canary route:\napp.get('/api/users', (req, res) => {\n  if (req.headers['x-canary'] === 'true') {\n    // New version logic\n  } else {\n    // Old version logic\n  }\n});",
    realTimeExample:
      "Like a movie preview: A small group (canary users) sees the movie first before it opens to everyone.",
  },
  {
    id: 48,
    question: "What is the interpreter pattern in Node.js?",
    answer:
      "The interpreter pattern is for creating a way to understand and run special languages or commands. It defines how to interpret each part of the language and what to do with it.",
    syntax:
      "class AbstractExpression { interpret() {} }, class TerminalExpression extends AbstractExpression { interpret() { /* logic */ } }",
    example:
      "Math expression interpreter:\nclass Number {\n  constructor(value) { this.value = value; }\n  interpret() { return this.value; }\n}\nclass Add {\n  constructor(left, right) { this.left = left; this.right = right; }\n  interpret() { return this.left.interpret() + this.right.interpret(); }\n}",
    realTimeExample:
      "Like a translator: Takes commands in a special language (like math expressions) and turns them into actions your computer understands.",
  },
  {
    id: 49,
    question: "How do you implement feature flags in Node.js?",
    answer:
      "Feature flags let you turn features on or off without deploying new code. You wrap new features in checks for these flags, so you can control who sees what and when.",
    syntax: "npm install feature-flags, flags.isEnabled('new-feature')",
    example:
      "Use feature flags:\nif (featureFlags.isEnabled('new-dashboard', req.user.id)) {\n  // Show new dashboard\n} else {\n  // Show old dashboard\n}",
    realTimeExample:
      "Like a light switch: You can turn a new feature (light) on or off for different users or groups.",
  },
  {
    id: 50,
    question: "What is the composite pattern in Node.js?",
    answer:
      "The composite pattern lets you treat individual objects and groups of objects the same way. It creates a tree structure where each node can be a simple object or a group of objects.",
    syntax:
      "class Component { add(component) {} remove(component) {} }, class Leaf extends Component { /* no add/remove */ }, class Composite extends Component { children = [] }",
    example:
      "File system composite:\nclass File {\n  constructor(name) { this.name = name; }\n  ls() { return this.name; }\n}\nclass Directory {\n  constructor(name) { this.name = name; this.children = []; }\n  add(child) { this.children.push(child); }\n  ls() { return [this.name, ...this.children.flatMap(c => c.ls())]; }\n}",
    realTimeExample:
      "Like a family tree: You can treat a single person (leaf) or a whole family (composite) the same way when listing names.",
  },
];

// Make data available globally
window.advanced = advanced;
