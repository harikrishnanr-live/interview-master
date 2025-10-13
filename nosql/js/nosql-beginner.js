// MongoDB Beginner Level Q&A Data (100 Questions)
let beginner = [
  {
    id: 1,
    question: "What is MongoDB?",
    answer:
      "MongoDB is a NoSQL database that stores data in flexible, JSON-like documents. It is schema-less, scalable, and designed for modern applications.",
    realTimeExample:
      "Imagine MongoDB as a magical notebook where you can write stories, add pictures, or change anything anytime, without following strict rules like in a school notebook.",
    realTimeExample2:
      "Think of MongoDB as a digital toy box where you can add, remove, or change toys without having to follow a strict organization plan, making it easy to play and experiment.",
  },
  {
    id: 2,
    question: "What are documents in MongoDB?",
    answer:
      "Documents are the basic unit of data in MongoDB, stored in a flexible, JSON-like format. Each document can have different fields and structures.",
    realTimeExample:
      "Imagine documents as squishy playdough shapes that can change form, holding your favorite colors and shapes without being stuck in one way.",
    realTimeExample2:
      "Think of documents as digital sticky notes that can hold text, numbers, lists, or even other notes, and you can change their shape or content anytime.",
  },
  {
    id: 3,
    question: "What are collections in MongoDB?",
    answer:
      "Collections are groups of documents in MongoDB, similar to tables in relational databases but without a fixed schema.",
    realTimeExample:
      "Imagine collections as colorful folders in your backpack, each holding a bunch of related drawings and stories so you can find your favorite ones easily.",
    realTimeExample2:
      "Think of collections as labeled boxes in your toy room, each containing a different type of toy, making it easy to find and play with what you want.",
  },
  {
    id: 4,
    question: "How do you connect to MongoDB?",
    answer:
      "Use a MongoDB driver (like the Node.js driver) and provide a connection string with the host, port, and database name.",
    syntax: "const MongoClient = require('mongodb').MongoClient;",
    example:
      "const client = new MongoClient('mongodb://localhost:27017/mydb');",
    realTimeExample:
      "Imagine connecting to MongoDB as plugging in your favorite video game console, where you type in the special code to start playing and exploring all the fun levels.",
    realTimeExample2:
      "Think of connecting as dialing a friend’s phone number to start a conversation, using the right address to reach your database.",
  },
  {
    id: 5,
    question: "How do you insert a document in MongoDB?",
    answer:
      "Use the insertOne() or insertMany() methods on a collection to add new documents.",
    syntax: "collection.insertOne(document)",
    example: "await collection.insertOne({ name: 'Alice', age: 30 });",
    realTimeExample:
      "Imagine inserting a document as carefully placing a new puzzle piece into your growing picture, making sure it fits perfectly with all the other colorful pieces around it.",
    realTimeExample2:
      "Think of inserting as adding a new toy to your collection, giving it a special place in your toy box so you can find it later.",
  },
  {
    id: 6,
    question: "How do you find documents in MongoDB?",
    answer:
      "Use the find() method with a query object to search for documents matching certain criteria.",
    syntax: "collection.find(query)",
    example:
      "const users = await collection.find({ age: { $gt: 25 } }).toArray();",
    realTimeExample:
      "Imagine finding documents as going on a treasure hunt in your backyard, using clues to dig up only the special rocks that match your secret map markings.",
    realTimeExample2:
      "Think of finding as searching for your favorite books in a library, using the catalog to quickly locate the ones you want to read.",
  },
  {
    id: 7,
    question: "How do you update documents in MongoDB?",
    answer:
      "Use updateOne() or updateMany() with a filter and update object to change existing documents.",
    syntax: "collection.updateOne(filter, update)",
    example:
      "await collection.updateOne({ name: 'Alice' }, { $set: { age: 31 } });",
    realTimeExample:
      "Imagine updating documents as giving your toy dinosaur a new hat and backpack, changing how it looks and what it can carry on its next adventure.",
    realTimeExample2:
      "Think of updating as editing a page in your sketchbook, adding new colors or details to make your drawing even better.",
  },
  {
    id: 8,
    question: "How do you delete documents in MongoDB?",
    answer:
      "Use deleteOne() or deleteMany() with a filter to remove documents from a collection.",
    syntax: "collection.deleteOne(filter)",
    example: "await collection.deleteOne({ name: 'Alice' });",
    realTimeExample:
      "Imagine deleting documents as carefully removing a sticker from your collection book, making sure the page stays clean for new stickers to come.",
    realTimeExample2:
      "Think of deleting as cleaning out old toys from your toy box, making room for new ones while keeping your collection tidy.",
  },
  {
    id: 9,
    question: "What is indexing in MongoDB?",
    answer:
      "Indexing creates a special data structure that improves query performance, like a book's index helping you find pages quickly.",
    realTimeExample:
      "Imagine indexing as creating a magical map for your toy box, where you can instantly find any toy by its special mark without searching through the whole messy pile.",
    realTimeExample2:
      "Think of indexing as building a table of contents for your notebook, making it easy to jump to the exact page you need.",
  },
  {
    id: 10,
    question: "How do you create an index in MongoDB?",
    answer:
      "Use the createIndex() method on a collection, specifying the field(s) to index.",
    syntax: "collection.createIndex({ field: 1 })",
    example: "await collection.createIndex({ name: 1 });",
    realTimeExample:
      "Imagine creating an index as drawing special labels on your bookshelf, making it super easy to grab the exact book you want without looking at every single one.",
    realTimeExample2:
      "Think of creating an index as adding a special tab to your recipe book, so you can quickly find your favorite recipes.",
  },
  {
    id: 11,
    question: "What is aggregation in MongoDB?",
    answer:
      "Aggregation processes data and returns computed results, like grouping and summarizing information.",
    syntax: "collection.aggregate(pipeline)",
    example:
      "const result = await collection.aggregate([{ $group: { _id: '$category', count: { $sum: 1 } } }]);",
    realTimeExample:
      "Imagine aggregation as sorting your candy collection by colors and counting how many of each you have, giving you a neat summary of your sweet treasures.",
    realTimeExample2:
      "Think of aggregation as organizing your toy collection by type and size, then counting how many cars, dolls, and blocks you have, so you know exactly what’s in your toy box.",
  },
  {
    id: 12,
    question: "What is sharding in MongoDB?",
    answer:
      "Sharding splits data across multiple servers, helping handle large datasets and high traffic.",
    realTimeExample:
      "Imagine sharding as dividing your giant puzzle into smaller pieces that different friends can work on, putting the whole picture together faster and easier.",
    realTimeExample2:
      "Think of sharding as splitting a big library into smaller branches, each holding a portion of the books, so more people can find and read books at the same time.",
  },
  {
    id: 13,
    question: "What is replication in MongoDB?",
    answer:
      "Replication copies data across multiple servers for backup and high availability.",
    realTimeExample:
      "Imagine replication as making photocopies of your favorite drawing and giving them to friends, so if one gets lost, you still have backups to share.",
    realTimeExample2:
      "Think of replication as having multiple copies of your favorite movie, so if one DVD gets scratched, you can still watch it using another copy.",
  },
  {
    id: 14,
    question: "What is JSON?",
    answer:
      "JSON is a simple, text-based format for storing and exchanging data, using key-value pairs and arrays.",
    realTimeExample:
      "Imagine JSON as writing a shopping list in plain words that anyone can read, with curly braces and quotes to make it neat and organized.",
    realTimeExample2:
      "Think of JSON as a recipe card written in a simple format that anyone can follow, with clear steps and ingredients listed in a structured way.",
  },
  {
    id: 15,
    question: "What is BSON?",
    answer:
      "BSON is a binary version of JSON that MongoDB uses, making it faster for computers to read and write.",
    realTimeExample:
      "Imagine BSON as a secret code version of your shopping list that only computers can read super fast, like a superhero's special language.",
    realTimeExample2:
      "Think of BSON as a compressed version of your favorite song, making it quick to download and play on your device.",
  },
  {
    id: 16,
    question: "What is a database schema?",
    answer:
      "A database schema is a blueprint or plan for how data is organized and stored in a database.",
    realTimeExample:
      "Imagine a database schema as the plan for building your treehouse, showing where each room goes and how everything connects before you start hammering nails.",
    realTimeExample2:
      "Think of a schema as the instructions for assembling a toy, showing which pieces go where and how they fit together.",
  },
  {
    id: 17,
    question: "What is flexible schema in MongoDB?",
    answer:
      "Flexible schema means you can change the structure of your data without breaking everything, like adding new pockets to your backpack.",
    realTimeExample:
      "Imagine flexible schema as having a magical backpack that can grow new pockets whenever you need them, without having to buy a whole new backpack.",
    realTimeExample2:
      "Think of flexible schema as a notebook where you can add new sections or change the layout anytime, without having to start a new notebook.",
  },
  {
    id: 18,
    question: "What is data modeling in MongoDB?",
    answer:
      "Data modeling is planning how to organize your information so it's easy to find and use later.",
    realTimeExample:
      "Imagine data modeling as sorting your toy collection into different boxes with labels, so you can quickly find your favorite car or doll when you want to play.",
    realTimeExample2:
      "Think of data modeling as organizing your closet by type and season, making it easy to find the right clothes for any occasion.",
  },
  {
    id: 19,
    question: "What is a primary key in MongoDB?",
    answer:
      "A primary key is a special identifier that uniquely identifies each document, like a name tag.",
    realTimeExample:
      "Imagine a primary key as the special name tag on your backpack that no one else has, making it easy to find yours in a pile of identical backpacks.",
    realTimeExample2:
      "Think of a primary key as the unique serial number on your phone, ensuring no one else has the exact same device as you.",
  },
  {
    id: 20,
    question: "What is an ObjectId in MongoDB?",
    answer:
      "ObjectId is a special unique identifier that MongoDB creates automatically for each document.",
    realTimeExample:
      "Imagine ObjectId as a magical fingerprint that MongoDB gives to each of your drawings, making sure no two drawings ever have the same special mark.",
    realTimeExample2:
      "Think of ObjectId as a unique barcode on each product in a store, ensuring every item can be tracked and identified individually.",
  },
  {
    id: 21,
    question: "How do you use MongoDB Compass?",
    answer:
      "MongoDB Compass is a GUI tool for exploring and manipulating MongoDB data visually, making it easy to interact with your database without writing code.",
    realTimeExample:
      "Imagine MongoDB Compass as a magical map and control panel that lets you explore your database world visually, clicking buttons instead of typing spells.",
    realTimeExample2:
      "Think of MongoDB Compass as a video game controller for your database, letting you navigate and interact with your data using a friendly interface.",
  },
  {
    id: 22,
    question: "What is MongoDB Atlas?",
    answer:
      "MongoDB Atlas is a cloud database service that makes it easy to deploy and manage MongoDB databases without worrying about servers or infrastructure.",
    realTimeExample:
      "Imagine MongoDB Atlas as a magical cloud castle in the sky where your database lives, taking care of itself while you focus on your adventures.",
    realTimeExample2:
      "Think of MongoDB Atlas as a fully managed restaurant kitchen, where you can focus on cooking great meals without worrying about cleaning or maintenance.",
  },
  {
    id: 23,
    question: "How do you backup MongoDB?",
    answer:
      "Use mongodump to create backups of your MongoDB data, saving all your documents to a directory for safekeeping.",
    syntax: "mongodump --db mydb --out /path/to/backup",
    example: "mongodump --db mydb --out /tmp/backup",
    realTimeExample:
      "Imagine backing up MongoDB as making photocopies of all your important drawings and storing them in a special safe box, so you can get them back if the originals disappear.",
    realTimeExample2:
      "Think of backing up as saving your game progress before turning off the console, so you can continue right where you left off next time.",
  },
  {
    id: 24,
    question: "How do you restore MongoDB?",
    answer:
      "Use mongorestore to restore data from a backup, bringing your documents back into the database.",
    syntax: "mongorestore --db mydb /path/to/backup/mydb",
    example: "mongorestore --db mydb /tmp/backup/mydb",
    realTimeExample:
      "Imagine restoring MongoDB as finding your lost toys in the school's lost and found box and bringing them back home where they belong.",
    realTimeExample2:
      "Think of restoring as loading your saved game progress, bringing back all your characters and items exactly as you left them.",
  },
  {
    id: 25,
    question: "What is MongoDB GridFS?",
    answer:
      "GridFS is a specification for storing and retrieving files that exceed the BSON document size limit, splitting large files into smaller chunks.",
    realTimeExample:
      "Imagine GridFS as a magical storage room where you can keep your giant posters and big drawings that don't fit in your regular folders.",
    realTimeExample2:
      "Think of GridFS as a file cabinet for large documents, where you can store and retrieve big files like videos or images without worrying about size limits.",
  },
  {
    id: 26,
    question: "How do you use MongoDB with Node.js?",
    answer:
      "Install the mongodb package and use the MongoClient to connect and perform operations with MongoDB from your Node.js applications.",
    syntax: "npm install mongodb",
    example: "const { MongoClient } = require('mongodb');",
    realTimeExample:
      "Imagine using MongoDB with Node.js as teaching your robot friend how to talk to your magical notebook, so they can work together on fun projects.",
    realTimeExample2:
      "Think of using MongoDB with Node.js as giving your app a direct phone line to your database, so they can communicate quickly and easily.",
  },
  {
    id: 27,
    question: "What is MongoDB change streams?",
    answer:
      "Change streams allow applications to access real-time data changes without polling, notifying you whenever data is inserted, updated, or deleted.",
    realTimeExample:
      "Imagine change streams as a magical notification bell that rings every time someone adds a new drawing to your shared art book, so you can see it instantly.",
    realTimeExample2:
      "Think of change streams as a live sports ticker that updates you with the latest scores and events as they happen, so you never miss a moment.",
  },
  {
    id: 28,
    question: "How do you handle errors in MongoDB?",
    answer:
      "Use try/catch blocks and check for error objects in callbacks or promises to gracefully handle and recover from errors.",
    syntax:
      "try { await collection.insertOne(doc); } catch (error) { console.error(error); }",
    example:
      "try { await collection.findOne({}); } catch (err) { console.log('Error:', err.message); }",
    realTimeExample:
      "Imagine handling errors in MongoDB as having a safety net under your playground swings, catching you gently if something goes wrong during playtime.",
    realTimeExample2:
      "Think of error handling as having a spare tire in your car, so you can keep driving even if you get a flat on the road.",
  },
  {
    id: 29,
    question: "What is MongoDB transactions?",
    answer:
      "Transactions allow multiple operations to be executed as a single atomic unit, ensuring that all operations succeed or fail together.",
    realTimeExample:
      "Imagine MongoDB transactions as a group game where everyone has to finish their part successfully, or everyone starts over together if someone makes a mistake.",
    realTimeExample2:
      "Think of transactions as a bank transfer where both the debit and credit must happen together, or neither happens at all, ensuring your money is always safe.",
  },
  {
    id: 30,
    question: "How do you optimize MongoDB queries?",
    answer:
      "Use indexes, limit fields with projection, and analyze query performance with explain() to make your queries faster and more efficient.",
    syntax: "collection.find(query).explain()",
    example: "await collection.find({ age: 30 }).explain('executionStats');",
    realTimeExample:
      "Imagine optimizing MongoDB queries as tuning your bicycle for a race, making sure all the gears work perfectly so you can zoom faster and smoother.",
    realTimeExample2:
      "Think of query optimization as organizing your toolbox so your most-used tools are always within reach, making your projects faster and easier.",
  },
  {
    id: 31,
    question: "What is MongoDB profiling?",
    answer:
      "Profiling captures slow queries for analysis and optimization, helping you identify and fix performance bottlenecks.",
    realTimeExample:
      "Imagine MongoDB profiling as a magical camera that takes pictures of slow moments in your games, helping you figure out how to make everything run faster and smoother.",
    realTimeExample2:
      "Think of profiling as a fitness tracker for your database, showing you which queries are slow and need improvement, just like a tracker shows you which exercises to focus on.",
  },
  {
    id: 32,
    question: "How do you monitor MongoDB?",
    answer:
      "Use tools like MongoDB Cloud Manager, mongostat, or custom monitoring scripts to track the performance, health, and status of your database in real time.",
    realTimeExample:
      "Imagine monitoring MongoDB as regularly checking your pet's temperature and energy levels, making sure they're healthy and happy all the time.",
    realTimeExample2:
      "Think of monitoring as a dashboard in your car, showing you speed, fuel level, and engine status, so you can keep everything running smoothly.",
  },
  {
    id: 33,
    question: "What is MongoDB security?",
    answer:
      "MongoDB security includes authentication, authorization, encryption, and access controls to protect your data from unauthorized access and breaches.",
    realTimeExample:
      "Imagine MongoDB security as putting a strong lock on your secret diary, so only you can read the special stories and no one else can peek.",
    realTimeExample2:
      "Think of MongoDB security as a bank vault for your data, with guards, locks, and alarms to keep everything safe and secure.",
  },
  {
    id: 34,
    question: "How do you secure MongoDB?",
    answer:
      "Enable authentication, use SSL/TLS, configure firewalls, and implement role-based access control to protect your MongoDB deployment.",
    realTimeExample:
      "Imagine securing MongoDB as building a fortress around your treasure chest, with guards, secret codes, and magical barriers to keep everything safe.",
    realTimeExample2:
      "Think of securing MongoDB as setting up a security system for your home, with locks, cameras, and alarms to protect your family and belongings.",
  },
  {
    id: 35,
    question: "What is MongoDB encryption?",
    answer:
      "MongoDB supports encryption at rest and in transit to protect your data from unauthorized access, ensuring that your information remains confidential and secure.",
    realTimeExample:
      "Imagine MongoDB encryption as writing your diary in a secret code that only you know how to read, keeping your thoughts safe from curious friends.",
    realTimeExample2:
      "Think of encryption as a secure vault for your data, where everything is locked away and only accessible with the right key or password.",
  },
  {
    id: 36,
    question: "How do you deploy MongoDB?",
    answer:
      "You can deploy MongoDB locally on your own servers, on-premises in your data center, or use cloud services like MongoDB Atlas for fully managed deployments.",
    realTimeExample:
      "Imagine deploying MongoDB as setting up your lemonade stand in different places - your backyard, the park, or even a magical cloud castle.",
    realTimeExample2:
      "Think of deploying MongoDB as choosing where to build your treehouse - in your garden, at a friend's house, or in a special treehouse park.",
  },
  {
    id: 37,
    question: "What is MongoDB Ops Manager?",
    answer:
      "Ops Manager is a management platform for MongoDB deployments, providing tools for monitoring, backup, automation, and scaling of your MongoDB clusters.",
    realTimeExample:
      "Imagine MongoDB Ops Manager as a magical control center where you can monitor and manage all your database castles from one central tower.",
    realTimeExample2:
      "Think of Ops Manager as a mission control center for your databases, where you can see everything that's happening and make adjustments as needed.",
  },
  {
    id: 38,
    question: "How do you scale MongoDB?",
    answer:
      "Use sharding for horizontal scaling to distribute data across multiple servers, and replication for high availability and read scaling.",
    realTimeExample:
      "Imagine scaling MongoDB as growing your treehouse by adding more rooms and branches, making it bigger and stronger to hold more friends.",
    realTimeExample2:
      "Think of scaling as adding more lanes to a highway, allowing more cars to travel at the same time without slowing down.",
  },
  {
    id: 39,
    question: "What is MongoDB Stitch?",
    answer:
      "MongoDB Stitch is a serverless platform for building applications with MongoDB, providing backend services, authentication, and integrations without managing servers.",
    realTimeExample:
      "Imagine MongoDB Stitch as a magical helper that takes care of all the hard work behind the scenes, so you can focus on creating fun apps.",
    realTimeExample2:
      "Think of Stitch as a personal assistant for your app, handling all the backend tasks so you can focus on building great features for your users.",
  },
  {
    id: 40,
    question: "How do you use MongoDB with Mongoose?",
    answer:
      "Mongoose is an ODM (Object Data Modeling) library for MongoDB and Node.js, providing schema validation, modeling, and a higher-level API for interacting with MongoDB.",
    syntax: "npm install mongoose",
    example:
      "const mongoose = require('mongoose'); const Schema = mongoose.Schema;",
    realTimeExample:
      "Imagine using MongoDB with Mongoose as having a friendly guide who helps you organize your magical notebook with clear rules and helpful tips.",
    realTimeExample2:
      "Think of Mongoose as a helpful teacher who shows you the best way to write and organize your stories, making sure everything is neat and correct.",
  },
  {
    id: 41,
    question: "What is a MongoDB schema in Mongoose?",
    answer:
      "A Mongoose schema defines the structure of documents in a collection, including field types, validation, and default values.",
    realTimeExample:
      "Imagine a Mongoose schema as a blueprint for building your toy castle, showing exactly where each block and tower should go.",
    realTimeExample2:
      "Think of a schema as a recipe card, listing all the ingredients and steps needed to make your favorite dish, ensuring you don't forget anything important.",
  },
  {
    id: 42,
    question: "How do you create a model in Mongoose?",
    answer:
      "Use mongoose.model() to create a model from a schema, which represents a collection and provides an interface for interacting with it.",
    syntax: "const Model = mongoose.model('ModelName', schema);",
    example: "const User = mongoose.model('User', userSchema);",
    realTimeExample:
      "Imagine creating a model in Mongoose as molding a perfect clay figure from your playdough, ready to bring your ideas to life.",
    realTimeExample2:
      "Think of creating a model as building a new character in a video game, with all the attributes and abilities you want them to have.",
  },
  {
    id: 43,
    question: "What is MongoDB validation?",
    answer:
      "Validation ensures that data meets certain criteria before being saved to the database, helping maintain data quality and consistency.",
    realTimeExample:
      "Imagine MongoDB validation as a friendly teacher who checks your homework before you turn it in, making sure everything is correct and complete.",
    realTimeExample2:
      "Think of validation as a spell checker for your data, making sure all the information is correct and properly formatted before saving it.",
  },
  {
    id: 44,
    question: "How do you validate data in Mongoose?",
    answer:
      "Define validation rules in your schema using built-in validators or custom functions to ensure data integrity.",
    syntax:
      "const schema = new Schema({ name: { type: String, required: true } });",
    example:
      "const userSchema = new Schema({ email: { type: String, required: true, unique: true } });",
    realTimeExample:
      "Imagine validating data in Mongoose as having a magical checklist that makes sure all your toy pieces are in the right colors and shapes before building.",
    realTimeExample2:
      "Think of validation as a form you fill out, where the system checks that all required fields are filled in correctly before you can submit it.",
  },
  {
    id: 45,
    question: "What is MongoDB middleware in Mongoose?",
    answer:
      "Middleware functions in Mongoose run before or after certain operations, allowing you to add logic or modify data at specific points in the process.",
    realTimeExample:
      "Imagine Mongoose middleware as helpful elves who tidy up your room before you play and clean up after you're done.",
    realTimeExample2:
      "Think of middleware as automatic helpers that run errands for you before and after you do something important, like locking the door when you leave and unlocking it when you return.",
  },
  {
    id: 46,
    question: "How do you use middleware in Mongoose?",
    answer:
      "Use pre() and post() methods on schemas to define middleware functions that run at specific times during document operations.",
    syntax: "schema.pre('save', function(next) { /* code */ });",
    example:
      "userSchema.pre('save', function(next) { this.updatedAt = Date.now(); next(); });",
    realTimeExample:
      "Imagine using middleware in Mongoose as setting up automatic helpers that brush your teeth before bed and tuck you in every night.",
    realTimeExample2:
      "Think of middleware as setting up a security system that automatically arms when you leave home and disarms when you return, keeping everything safe and ready for you.",
  },
  {
    id: 47,
    question: "What is MongoDB population in Mongoose?",
    answer:
      "Population in Mongoose replaces ObjectIds with actual documents from other collections, allowing you to reference and retrieve related data easily.",
    realTimeExample:
      "Imagine population as magically bringing your toy soldiers to life by connecting them to their real weapons and armor from other toy boxes.",
    realTimeExample2:
      "Think of population as inviting all the characters from your favorite books to join your story, making it more complete and exciting.",
  },
  {
    id: 48,
    question: "How do you populate references in Mongoose?",
    answer:
      "Use the populate() method on queries to fill in referenced documents, replacing ObjectIds with the actual documents from other collections.",
    syntax: "Model.find().populate('field')",
    example: "const users = await User.find().populate('posts');",
    realTimeExample:
      "Imagine populating references as inviting all your friends' favorite toys to join your playdate, making the party much more fun and complete.",
    realTimeExample2:
      "Think of populating as loading all the details for a character in a video game, so you can see their full profile, inventory, and history in one place.",
  },
  {
    id: 49,
    question: "What is MongoDB indexing in Mongoose?",
    answer:
      "Indexing in Mongoose defines indexes on schema fields to improve query performance, making it faster to find and retrieve documents.",
    syntax: "schema.index({ field: 1 })",
    example: "userSchema.index({ email: 1 });",
    realTimeExample:
      "Imagine indexing as creating special labels on your toy shelves, making it super easy to find exactly the toy you want without searching everywhere.",
    realTimeExample2:
      "Think of indexing as building an index for your cookbook, so you can quickly find recipes by ingredient or cooking time.",
  },
  {
    id: 50,
    question: "How do you handle MongoDB connections in Mongoose?",
    answer:
      "Use mongoose.connect() to establish a connection to MongoDB, and mongoose.connection to manage and monitor the connection.",
    syntax: "mongoose.connect(uri)",
    example: "await mongoose.connect('mongodb://localhost/mydb');",
    realTimeExample:
      "Imagine handling connections as plugging in your video game and pressing start, instantly connecting you to all the fun worlds and adventures.",
    realTimeExample2:
      "Think of handling connections as dialing a friend’s number to start a conversation, making sure you’re connected before you start talking.",
  },
  {
    id: 51,
    question: "What is MongoDB connection pooling in Mongoose?",
    answer:
      "Connection pooling in Mongoose maintains a pool of connections to MongoDB, reusing them for efficiency and reducing the overhead of creating new connections.",
    realTimeExample:
      "Imagine connection pooling as a class sharing a big box of crayons instead of each child having their own, making it faster to start coloring together.",
    realTimeExample2:
      "Think of connection pooling as a carpool for database connections, where everyone shares rides to the same destination, saving time and resources.",
  },
  {
    id: 52,
    question: "How do you close MongoDB connections in Mongoose?",
    answer:
      "Use mongoose.connection.close() or mongoose.disconnect() to gracefully close connections when your application is done using the database.",
    syntax: "mongoose.connection.close()",
    example: "await mongoose.connection.close();",
    realTimeExample:
      "Imagine closing connections as carefully putting away your toys and turning off the lights when playtime is over, keeping everything tidy for tomorrow.",
    realTimeExample2:
      "Think of closing connections as hanging up the phone after a conversation, making sure everything is properly ended and ready for next time.",
  },
  {
    id: 53,
    question: "What is MongoDB virtuals in Mongoose?",
    answer:
      "Virtuals in Mongoose are properties that are not stored in the database but are computed from other fields, allowing you to add derived or convenience properties to your models.",
    realTimeExample:
      "Imagine virtuals as magical glasses that show you extra information about your toys, like how old they are or what adventures they've been on, without changing the toys themselves.",
    realTimeExample2:
      "Think of virtuals as a calculator that shows you the total price of your shopping cart, even though the total isn’t stored in the database.",
  },
  {
    id: 54,
    question: "How do you define virtuals in Mongoose?",
    answer:
      "Use the virtual() method on schemas to define computed properties that are not stored in the database but are available on your model instances.",
    syntax:
      "schema.virtual('fullName').get(function() { return this.firstName + ' ' + this.lastName; });",
    example:
      "userSchema.virtual('fullName').get(function() { return `${this.firstName} ${this.lastName}`; });",
    realTimeExample:
      "Imagine defining virtuals as teaching your toys to introduce themselves with their full names, even though you only stored their first names in the box.",
    realTimeExample2:
      "Think of defining virtuals as creating a shortcut on your computer that opens a specific folder, even though the shortcut itself doesn’t contain any files.",
  },
  {
    id: 55,
    question: "What is MongoDB plugins in Mongoose?",
    answer:
      "Plugins in Mongoose add reusable functionality to schemas, allowing you to extend and customize your models with shared logic or features.",
    realTimeExample:
      "Imagine plugins as magical stickers you can put on your toy boxes, giving them special powers like glowing in the dark or making sounds.",
    realTimeExample2:
      "Think of plugins as apps you can install on your phone, adding new features and capabilities without changing the phone itself.",
  },
  {
    id: 56,
    question: "How do you create a plugin in Mongoose?",
    answer:
      "Define a function that adds methods or middleware to schemas, then apply it to your schemas to extend their functionality.",
    syntax:
      "function myPlugin(schema) { schema.method('myMethod', function() { /* code */ }); }",
    example:
      "function timestampPlugin(schema) { schema.pre('save', function(next) { this.updatedAt = Date.now(); next(); }); }",
    realTimeExample:
      "Imagine creating a plugin as inventing a new game rule that all your toy friends can learn, making playtime more exciting for everyone.",
    realTimeExample2:
      "Think of creating a plugin as writing a new recipe that anyone can use to make a special dish, adding a new option to your cookbook.",
  },
  {
    id: 57,
    question: "What is MongoDB discriminators in Mongoose?",
    answer:
      "Discriminators in Mongoose allow different models to share a collection with different schemas, enabling inheritance and polymorphism in your data models.",
    realTimeExample:
      "Imagine discriminators as having different types of toy cars that all live in the same garage but have different features, like racing cars and family cars.",
    realTimeExample2:
      "Think of discriminators as different types of animals that all live in the same zoo but have unique characteristics and behaviors.",
  },
  {
    id: 58,
    question: "How do you use discriminators in Mongoose?",
    answer:
      "Use the discriminator() method to create child schemas that inherit from a base schema, allowing you to model different types of documents in the same collection.",
    syntax:
      "const baseSchema = new Schema({}); const childSchema = baseSchema.discriminator('Child', childFields);",
    example:
      "const eventSchema = new Schema({ name: String }); const workshopSchema = eventSchema.discriminator('Workshop', { topic: String });",
    realTimeExample:
      "Imagine using discriminators as organizing your toy collection where cars, dolls, and blocks all share the same shelf but have their own special sections.",
    realTimeExample2:
      "Think of using discriminators as creating a family tree where each person has their own unique traits but shares common characteristics with their relatives.",
  },
  {
    id: 59,
    question: "What is MongoDB geospatial data?",
    answer:
      "Geospatial data in MongoDB represents locations and shapes on Earth, allowing you to store and query geographic information like coordinates, lines, and polygons.",
    realTimeExample:
      "Imagine geospatial data as magical maps that show exactly where your buried treasures are located, with special marks for mountains, rivers, and hidden caves.",
    realTimeExample2:
      "Think of geospatial data as a GPS for your favorite places, allowing you to find the nearest park, store, or friend’s house with ease.",
  },
  {
    id: 60,
    question: "How do you handle geospatial queries in MongoDB?",
    answer:
      "Use geospatial operators like $near, $geoWithin, and create 2dsphere indexes to query for documents based on their geographic properties.",
    syntax:
      "collection.find({ location: { $near: { $geometry: point, $maxDistance: distance } } })",
    example:
      "await collection.find({ location: { $near: { $geometry: { type: 'Point', coordinates: [lng, lat] }, $maxDistance: 1000 } } });",
    realTimeExample:
      "Imagine geospatial queries as asking your magical map to find all the ice cream shops within walking distance of your house.",
    realTimeExample2:
      "Think of geospatial queries as using a treasure map to find all the hidden gems within a certain area, making your treasure hunt more efficient and fun.",
  },
  {
    id: 61,
    question: "What is MongoDB text search?",
    answer:
      "Text search in MongoDB allows you to search for text content within documents, making it easy to find documents that contain specific words or phrases.",
    realTimeExample:
      "Imagine text search as having a magical magnifying glass that can find any word in your giant storybook instantly, no matter how many pages it has.",
    realTimeExample2:
      "Think of text search as a library catalog that lets you find all the books that mention a specific topic, even if it’s just a small part of the book.",
  },
  {
    id: 62,
    question: "How do you implement text search in MongoDB?",
    answer:
      "Create text indexes and use the $text operator in queries to search for text content within your documents.",
    syntax: "collection.createIndex({ field: 'text' })",
    example: "await collection.find({ $text: { $search: 'keyword' } });",
    realTimeExample:
      "Imagine implementing text search as teaching your bookshelf to whisper the page numbers where your favorite words are hiding.",
    realTimeExample2:
      "Think of implementing text search as setting up a search engine for your personal notes, making it easy to find any topic or idea you’ve written down.",
  },
  {
    id: 63,
    question: "What is MongoDB regex?",
    answer:
      "Regex in MongoDB allows you to search for documents using pattern matching, making it easy to find documents where a field matches a specific pattern.",
    realTimeExample:
      "Imagine regex as a magical word puzzle where you can find all words that start with 'super' or end with 'man' in your comic book collection.",
    realTimeExample2:
      "Think of regex as a powerful search tool that lets you find all the emails in your inbox that start with a specific word or contain a certain pattern.",
  },
  {
    id: 64,
    question: "How do you use regex in MongoDB queries?",
    answer:
      "Use the $regex operator to match patterns in string fields, allowing for flexible and powerful text searches.",
    syntax: "collection.find({ field: { $regex: /pattern/ } })",
    example: "await collection.find({ name: { $regex: /^A/ } });",
    realTimeExample:
      "Imagine using regex as searching for all your toys that have names starting with 'Bat', finding Batman, Batgirl, and Batmobile all at once.",
    realTimeExample2:
      "Think of using regex as filtering your music library to find all songs with titles that contain a specific word or pattern, making it easy to create playlists.",
  },
  {
    id: 65,
    question: "What is MongoDB aggregation pipeline?",
    answer:
      "The aggregation pipeline in MongoDB is a series of stages that process documents through multiple transformations, allowing for complex data analysis and summarization.",
    realTimeExample:
      "Imagine aggregation pipeline as a magical assembly line where your toy parts go through different stations, getting painted, assembled, and packaged into complete toys.",
    realTimeExample2:
      "Think of the aggregation pipeline as a data processing factory, where raw data goes through sorting, grouping, and calculating stages to produce meaningful summaries and reports.",
  },
  {
    id: 66,
    question: "What are common aggregation stages?",
    answer:
      "Common aggregation stages include $match (filters documents), $group (groups documents), $sort (orders documents), $project (reshapes documents), and $lookup (joins collections).",
    realTimeExample:
      "Imagine common aggregation stages as different stops on your toy factory tour: matching the right colors, grouping similar pieces, sorting by size, and finally packaging the finished toys.",
    realTimeExample2:
      "Think of aggregation stages as steps in a recipe, where you filter ingredients, mix them together, and present the final dish in an appealing way.",
  },
  {
    id: 67,
    question: "How do you use $lookup in aggregation?",
    answer:
      "$lookup performs a left outer join between collections, allowing you to combine related data from multiple collections in a single query.",
    syntax:
      "collection.aggregate([{ $lookup: { from: 'otherCollection', localField: 'field', foreignField: 'field', as: 'joinedData' } }])",
    example:
      "await collection.aggregate([{ $lookup: { from: 'posts', localField: 'userId', foreignField: '_id', as: 'userPosts' } }]);",
    realTimeExample:
      "Imagine $lookup as inviting all the drawings from your friend's sketchbook to join your art show, connecting them perfectly with your own artwork.",
    realTimeExample2:
      "Think of $lookup as joining tables in a spreadsheet, bringing related data together so you can see everything in one place.",
  },
  {
    id: 68,
    question: "What is MongoDB MapReduce?",
    answer:
      "MapReduce is a programming model for processing large datasets, allowing you to map data into key-value pairs and then reduce them to produce aggregated results.",
    realTimeExample:
      "Imagine MapReduce as dividing a giant puzzle among many friends (map), then each friend putting their pieces together (reduce) to complete the whole picture.",
    realTimeExample2:
      "Think of MapReduce as organizing a big cleanup where everyone sorts items into categories (map), then counts how many of each type they have (reduce), sharing the final counts with everyone.",
  },
  {
    id: 69,
    question: "How do you use MapReduce in MongoDB?",
    answer:
      "Use the mapReduce() method with map and reduce functions to process and aggregate data across your collection.",
    syntax:
      "collection.mapReduce(mapFunction, reduceFunction, { out: 'outputCollection' })",
    example:
      "await collection.mapReduce(function() { emit(this.category, 1); }, function(key, values) { return Array.sum(values); }, { out: 'categoryCounts' });",
    realTimeExample:
      "Imagine using MapReduce as organizing a big cleanup party where everyone sorts their toys first, then counts how many of each type they have to share with the group.",
    realTimeExample2:
      "Think of MapReduce as running a survey where you tally up all the responses to find out what most people think or prefer.",
  },
  {
    id: 70,
    question: "What is MongoDB capped collection?",
    answer:
      "Capped collections in MongoDB have a fixed size and maintain insertion order, automatically overwriting the oldest documents when the collection reaches its maximum size.",
    realTimeExample:
      "Imagine capped collection as a magical box that can only hold a certain number of toys, automatically making room for new ones by letting old ones disappear.",
    realTimeExample2:
      "Think of capped collections as a circular logbook where new entries automatically overwrite the oldest ones once the book is full, ensuring you always have the most recent information.",
  },
  {
    id: 71,
    question: "How do you create a capped collection?",
    answer:
      "Use db.createCollection() with the capped option to create a collection with a fixed size and optional maximum number of documents.",
    syntax:
      "db.createCollection('myCollection', { capped: true, size: 100000, max: 100 })",
    example:
      "await db.createCollection('logs', { capped: true, size: 5242880, max: 5000 });",
    realTimeExample:
      "Imagine creating a capped collection as building a special toy box with a magic lid that only opens when there's room for one more toy inside.",
    realTimeExample2:
      "Think of creating a capped collection as setting up a DVR that automatically deletes the oldest shows to make room for new recordings, ensuring you never run out of space.",
  },
  {
    id: 72,
    question: "What is MongoDB TTL index?",
    answer:
      "TTL indexes in MongoDB automatically delete documents after a specified time, making it easy to manage data that should expire or be removed after a certain period.",
    realTimeExample:
      "Imagine TTL index as a magical timer on your toy boxes that makes old toys disappear after a certain number of days, keeping only the newest and most played-with toys.",
    realTimeExample2:
      "Think of TTL indexes as a self-cleaning fridge that automatically removes expired food, ensuring you only keep fresh and safe items.",
  },
  {
    id: 73,
    question: "How do you create a TTL index?",
    answer:
      "Create an index on a date field with the expireAfterSeconds option to automatically remove documents after a specified time period.",
    syntax:
      "collection.createIndex({ createdAt: 1 }, { expireAfterSeconds: 3600 })",
    example:
      "await collection.createIndex({ createdAt: 1 }, { expireAfterSeconds: 86400 });",
    realTimeExample:
      "Imagine creating a TTL index as setting a magical alarm clock on your toy chest that gently removes toys after they've been there for a week.",
    realTimeExample2:
      "Think of creating a TTL index as setting an expiration date on your temporary files, so they’re automatically deleted after a certain time, keeping your storage clean and organized.",
  },
  {
    id: 74,
    question: "What is MongoDB partial index?",
    answer:
      "Partial indexes in MongoDB only index documents that match a specified filter, making the index smaller and more efficient for queries that only need a subset of the data.",
    realTimeExample:
      "Imagine partial index as creating a special map that only shows the locations of your red toys, ignoring all the other colors completely.",
    realTimeExample2:
      "Think of partial indexes as a phone book that only lists people with a specific area code, making it smaller and easier to use for your needs.",
  },
  {
    id: 75,
    question: "How do you create a partial index?",
    answer:
      "Use the partialFilterExpression option when creating an index to only include documents that match a specified filter.",
    syntax:
      "collection.createIndex({ field: 1 }, { partialFilterExpression: { status: 'active' } })",
    example:
      "await collection.createIndex({ email: 1 }, { partialFilterExpression: { verified: true } });",
    realTimeExample:
      "Imagine creating a partial index as making a phone book that only lists people who have birthdays in summer, skipping all the others.",
    realTimeExample2:
      "Think of creating a partial index as building a catalog that only includes products currently in stock, making it more useful and efficient for shoppers.",
  },
  {
    id: 76,
    question: "What is MongoDB sparse index?",
    answer:
      "Sparse indexes in MongoDB only include documents that have the indexed field, making the index more efficient by skipping documents where the field is missing or null.",
    realTimeExample:
      "Imagine sparse index as a magical directory that only lists people who have phone numbers, skipping everyone who doesn't have one.",
    realTimeExample2:
      "Think of sparse indexes as a map that only shows locations with known coordinates, leaving empty or unknown areas blank.",
  },
  {
    id: 77,
    question: "How do you create a sparse index?",
    answer:
      "Use the sparse option when creating an index to only include documents where the indexed field exists.",
    syntax: "collection.createIndex({ field: 1 }, { sparse: true })",
    example:
      "await collection.createIndex({ optionalField: 1 }, { sparse: true });",
    realTimeExample:
      "Imagine creating a sparse index as building a map that only marks spots where gold actually exists, leaving the empty desert areas completely blank.",
    realTimeExample2:
      "Think of creating a sparse index as drawing a treasure map that only shows the locations of real treasures, ignoring all the empty spots.",
  },
  {
    id: 78,
    question: "What is MongoDB compound index?",
    answer:
      "Compound indexes in MongoDB include multiple fields, allowing for more complex and efficient queries that involve multiple criteria.",
    realTimeExample:
      "Imagine compound index as a super-smart map that shows both the color and size of your toys, helping you find the exact red ball you want.",
    realTimeExample2:
      "Think of compound indexes as a phone book that lets you look up people by both last name and first name, making it easy to find exactly who you’re looking for.",
  },
  {
    id: 79,
    question: "How do you create a compound index?",
    answer:
      "Specify multiple fields when creating the index to enable efficient queries on combinations of fields.",
    syntax: "collection.createIndex({ field1: 1, field2: -1 })",
    example: "await collection.createIndex({ category: 1, price: -1 });",
    realTimeExample:
      "Imagine creating a compound index as organizing your toy shelf by both color and size, making it easy to find the big red car or small blue ball.",
    realTimeExample2:
      "Think of creating a compound index as sorting your music library by both artist and release date, making it easy to find your favorite songs.",
  },
  {
    id: 80,
    question: "What is MongoDB multikey index?",
    answer:
      "Multikey indexes in MongoDB are created on array fields, indexing each element of the array separately for efficient querying.",
    realTimeExample:
      "Imagine multikey index as a magical index that can point to multiple pages at once, like when one toy appears in several different adventure stories in your book.",
    realTimeExample2:
      "Think of multikey indexes as a search engine that can find all the documents containing any of the words in your search query, even if they’re part of a list.",
  },
  {
    id: 81,
    question: "How do you create a multikey index?",
    answer:
      "Create an index on a field that contains arrays to enable efficient queries on array elements.",
    syntax: "collection.createIndex({ tags: 1 })",
    example: "await collection.createIndex({ tags: 1 });",
    realTimeExample:
      "Imagine creating a multikey index as making a master list of all the different labels on your toy boxes, so you can find toys by any single tag from their many labels.",
    realTimeExample2:
      "Think of creating a multikey index as building a catalog that lets you search for books by any of the subjects listed on their covers, making it easy to find what you’re interested in.",
  },
  {
    id: 82,
    question: "What is MongoDB profiling?",
    answer:
      "Profiling captures slow queries for analysis and optimization, helping you identify and fix performance bottlenecks.",
    realTimeExample:
      "Imagine MongoDB profiling as a magical camera that takes pictures of slow moments in your games, helping you figure out how to make everything run faster and smoother.",
    realTimeExample2:
      "Think of profiling as a fitness tracker for your database, showing you which queries are slow and need improvement, just like a tracker shows you which exercises to focus on.",
  },
  {
    id: 83,
    question: "How do you enable profiling in MongoDB?",
    answer:
      "Use db.setProfilingLevel() to enable profiling and specify the level of detail to capture.",
    syntax: "db.setProfilingLevel(2)",
    example: "db.setProfilingLevel(2, { slowms: 100 });",
    realTimeExample:
      "Imagine enabling profiling as turning on a special video camera in your playroom that records whenever games take longer than a minute, helping you see what slows down the fun.",
    realTimeExample2:
      "Think of enabling profiling as setting up a performance review for your database, recording slow operations so you can optimize them later.",
  },
  {
    id: 84,
    question: "What is MongoDB explain plan?",
    answer:
      "The explain plan in MongoDB provides detailed information about how a query is executed, including which indexes are used and the estimated cost of each step.",
    realTimeExample:
      "Imagine explain plan as a magical storybook that tells you exactly how your toy robot finds the red ball, showing each step it takes and why it chooses that path.",
    realTimeExample2:
      "Think of explain plan as a chef’s recipe breakdown, showing you each step the chef will take to prepare your dish, the ingredients they’ll use, and how long each step should take.",
  },
  {
    id: 85,
    question: "How do you use explain in MongoDB?",
    answer:
      "Append the explain() method to your query to get a detailed execution plan.",
    syntax: "query.explain()",
    example: "await collection.find({ age: 30 }).explain('executionStats');",
    realTimeExample:
      "Imagine using explain as asking your toy robot to tell you the story of how it found your favorite toy, describing each turn and decision it made along the way.",
    realTimeExample2:
      "Think of using explain as reviewing a GPS route before a trip, showing you each turn and the estimated time for each segment.",
  },
  {
    id: 86,
    question: "What is MongoDB cursor?",
    answer:
      "A cursor in MongoDB is a pointer to the result set of a query, allowing you to iterate over the results one at a time or in batches.",
    realTimeExample:
      "Imagine cursor as a magical pointer that moves through your toy collection, pointing to each toy one by one so you can look at them without picking them all up at once.",
    realTimeExample2:
      "Think of cursor as a streaming service for your query results, allowing you to process data in small chunks rather than all at once.",
  },
  {
    id: 87,
    question: "How do you iterate a cursor in MongoDB?",
    answer:
      "Use methods like forEach, toArray, or next to process each document in the result set.",
    syntax: "cursor.forEach(doc => console.log(doc))",
    example: "await cursor.forEach(doc => { console.log(doc.name); });",
    realTimeExample:
      "Imagine iterating a cursor as walking through your toy room with a flashlight, shining light on each toy one by one to see what it is and where it belongs.",
    realTimeExample2:
      "Think of iterating a cursor as reading a book page by page, allowing you to focus on one part at a time.",
  },
  {
    id: 88,
    question: "What is MongoDB bulk operations?",
    answer:
      "Bulk operations in MongoDB allow you to perform multiple write operations (inserts, updates, deletes) in a single batch, improving performance and efficiency.",
    realTimeExample:
      "Imagine bulk operations as a magical conveyor belt that can paint, assemble, and package multiple toys at once, much faster than doing each one separately.",
    realTimeExample2:
      "Think of bulk operations as sending a batch of emails at once, rather than composing and sending each one individually.",
  },
  {
    id: 89,
    question: "How do you use bulk operations in MongoDB?",
    answer:
      "Use initializeUnorderedBulkOp or initializeOrderedBulkOp to create a bulk operation object, add your operations, and then execute them.",
    syntax: "const bulk = collection.initializeUnorderedBulkOp()",
    example:
      "const bulk = collection.initializeUnorderedBulkOp(); bulk.insert({ name: 'Alice' }); await bulk.execute();",
    realTimeExample:
      "Imagine using bulk operations as organizing a big toy assembly line where you can add multiple instructions at once, then watch all the toys get built together efficiently.",
    realTimeExample2:
      "Think of using bulk operations as preparing a batch of meals at once, rather than cooking each meal individually.",
  },
  {
    id: 90,
    question: "What is MongoDB schema validation?",
    answer:
      "Schema validation ensures that documents meet certain criteria before being saved, helping maintain data quality and consistency.",
    realTimeExample:
      "Imagine schema validation as a friendly gatekeeper who checks that all your toy drawings have the right colors and shapes before letting them into the art show.",
    realTimeExample2:
      "Think of schema validation as a form validator on a website, ensuring that all required fields are filled out correctly before submitting the form.",
  },
  {
    id: 91,
    question: "How do you set up schema validation in MongoDB?",
    answer:
      "Use the validator option when creating or modifying a collection to define validation rules.",
    syntax:
      "db.createCollection('collection', { validator: { $jsonSchema: schema } })",
    example:
      "await db.createCollection('users', { validator: { $jsonSchema: { bsonType: 'object', required: ['name', 'email'] } } });",
    realTimeExample:
      "Imagine setting up schema validation as teaching your toy box a special rule that only accepts drawings with both a head and body, keeping out incomplete artwork.",
    realTimeExample2:
      "Think of setting up schema validation as creating a template for your documents, ensuring that every new document fits the required structure.",
  },
  {
    id: 92,
    question: "What is MongoDB role-based access control?",
    answer:
      "Role-based access control (RBAC) in MongoDB allows you to manage user permissions by assigning roles that define what actions a user can perform.",
    realTimeExample:
      "Imagine role-based access control as assigning different keys to different friends: some can only look at toys, others can add new ones, and the special friend can rearrange everything.",
    realTimeExample2:
      "Think of RBAC as a library’s access policy, where patrons can borrow books, librarians can add or remove books, and the head librarian can manage the entire system.",
  },
  {
    id: 93,
    question: "How do you create a user in MongoDB?",
    answer:
      "Use db.createUser() to create a user with a username, password, and roles.",
    syntax:
      "db.createUser({ user: 'username', pwd: 'password', roles: ['role'] })",
    example:
      "await db.createUser({ user: 'alice', pwd: 'secret', roles: ['readWrite'] });",
    realTimeExample:
      "Imagine creating a user as giving a new friend a special name tag and key that lets them play with certain toys in your collection, depending on what kind of friend they are.",
    realTimeExample2:
      "Think of creating a user as setting up a new account on a streaming service, choosing a username, setting a password, and selecting the subscription level.",
  },
  {
    id: 94,
    question: "What is MongoDB authentication?",
    answer:
      "Authentication verifies the identity of users or applications attempting to connect to MongoDB, ensuring only authorized users can access the database.",
    realTimeExample:
      "Imagine authentication as checking that the person knocking on your door is really your friend by asking them a secret password before letting them in to play.",
    realTimeExample2:
      "Think of authentication as a login system for your email, where you must provide the correct username and password to access your messages.",
  },
  {
    id: 95,
    question: "How do you enable authentication in MongoDB?",
    answer:
      "Start the MongoDB server with the --auth flag or set security.authorization in your configuration file.",
    syntax: "mongod --auth",
    example: "mongod --auth --dbpath /data/db",
    realTimeExample:
      "Imagine enabling authentication as putting a magical lock on your toy room door that requires a special word from each friend before they can enter and play with the toys.",
    realTimeExample2:
      "Think of enabling authentication as setting up a password for your Wi-Fi network, ensuring only authorized devices can connect.",
  },
  {
    id: 96,
    question: "What is MongoDB authorization?",
    answer:
      "Authorization determines what actions an authenticated user is allowed to perform, ensuring users only have access to the data and operations they are permitted to use.",
    realTimeExample:
      "Imagine authorization as deciding which friends can only look at toys, which can play with them, and which special friends can add new toys to the collection.",
    realTimeExample2:
      "Think of authorization as a library’s lending policy, where patrons can borrow books, librarians can add or remove books, and the head librarian can manage the entire system.",
  },
  {
    id: 97,
    question: "What is MongoDB encryption at rest?",
    answer:
      "Encryption at rest protects data stored on disk, ensuring that even if someone gains physical access to your storage devices, they cannot read the data without the encryption keys.",
    realTimeExample:
      "Imagine encryption at rest as putting all your toy drawings in a magical safe that scrambles them into secret codes when you close the lid, keeping them safe from curious eyes.",
    realTimeExample2:
      "Think of encryption at rest as a locked diary, where your private thoughts are scrambled into code when the diary is closed, ensuring no one else can read them.",
  },
  {
    id: 98,
    question: "How do you enable encryption in MongoDB?",
    answer:
      "Start the MongoDB server with the --enableEncryption flag and specify a key file that contains the encryption key.",
    syntax: "mongod --enableEncryption --encryptionKeyFile /path/to/keyfile",
    example:
      "mongod --enableEncryption --encryptionKeyFile /var/lib/mongo/keyfile",
    realTimeExample:
      "Imagine enabling encryption as teaching your toy safe a secret code language that it uses to hide all your treasures, so only you with the right key can see them clearly.",
    realTimeExample2:
      "Think of enabling encryption as installing a security system for your home, where all your valuables are locked away and only accessible with the right code.",
  },
  {
    id: 99,
    question: "What is MongoDB backup and restore?",
    answer:
      "Backup and restore in MongoDB refers to the process of creating copies of your database (backup) and using those copies to recover your data in case of loss or corruption (restore).",
    realTimeExample:
      "Imagine backup and restore as making magical photocopies of your artwork and keeping them in a special drawer, so if your original drawings get lost, you can pull out perfect copies anytime.",
    realTimeExample2:
      "Think of backup and restore as a time machine for your data, allowing you to save snapshots and return to a previous state if something goes wrong.",
  },
  {
    id: 100,
    question: "How do you backup MongoDB?",
    answer:
      "Use mongodump to create a binary export of your database’s data, saving all your documents to a directory for safekeeping.",
    syntax: "mongodump --db database --out /path/to/backup",
    example: "mongodump --db mydb --out /tmp/backup",
    realTimeExample:
      "Imagine backing up MongoDB as carefully folding all your drawings and putting them in a special time capsule that preserves them exactly as they are for future rediscovery.",
    realTimeExample2:
      "Think of backing up as saving your game progress before turning off the console, ensuring you can continue right where you left off next time.",
  },
];

// Make data available globally
window.beginner = beginner;
