// MongoDB Intermediate Level Q&A Data
let intermediate = [
  {
    id: 1,
    question: "What is BSON in MongoDB?",
    answer:
      "BSON (Binary JSON) is a binary-encoded serialization format used by MongoDB to store documents and enable efficient data traversal and querying. It extends JSON with additional data types like Date, Binary, and ObjectId, making it both flexible and performant for database operations.",
    realTimeExample:
      "BSON is like a high-efficiency file format for your documents. Just as a ZIP file compresses and organizes data for faster transfer, BSON optimizes your data for quick storage and retrieval in MongoDB, while supporting rich data types like dates and binary data.",
    realTimeExample2:
      "Imagine BSON as a universal translator for your database. It takes your JSON data and converts it into a binary format that MongoDB can read and write much faster, just like a translator helps people from different countries communicate smoothly and quickly.",
  },
  {
    id: 2,
    question: "What is the difference between SQL and NoSQL databases?",
    answer:
      "SQL databases are relational, using structured schemas, tables, and SQL for querying. They enforce strict data integrity and are ideal for complex queries and transactions. NoSQL databases are non-relational, schema-less, and designed for unstructured data, horizontal scaling, and high flexibility, making them suitable for large-scale, distributed systems.",
    realTimeExample:
      "SQL databases are like a well-organized library, where every book has a fixed place on the shelf, and you use a catalog to find what you need. NoSQL databases are like a flexible, ever-growing digital library where you can add new types of books anytime, and search for them in creative ways without strict rules.",
    realTimeExample2:
      "Imagine SQL as a spreadsheet with strict columns and rows, where every entry must fit the predefined structure. NoSQL is like a digital notebook where you can jot down ideas, drawings, lists, and photos in any format, and still find what you need quickly, even as your data grows and changes.",
  },
  {
    id: 3,
    question: "What is sharding in MongoDB?",
    answer:
      "Sharding is a method for distributing data across multiple machines. MongoDB uses sharding to support deployments with very large data sets and high throughput operations. It splits data into shards (smaller chunks) and distributes them across a cluster, enabling horizontal scaling and improved performance.",
    realTimeExample:
      "Sharding is like splitting a giant puzzle into smaller sections and giving each section to a different team to assemble. Each team works on their part, and when combined, the full picture is complete. This way, the work is done faster and more efficiently, even as the puzzle grows in size.",
    realTimeExample2:
      "Imagine sharding as a network of local libraries. Instead of one giant library holding all the books, each branch holds a portion of the collection. When you search for a book, the system quickly directs you to the right branch, making the process faster and more scalable, especially as the collection expands.",
  },
  {
    id: 4,
    question: "What are indexes in MongoDB?",
    answer:
      "Indexes in MongoDB are special data structures that store a small portion of the collection’s data set in an easy-to-traverse form. Indexes improve the speed of data retrieval operations by allowing the database to find data without scanning every document in a collection.",
    realTimeExample:
      "Indexes are like the index at the back of a textbook. Instead of reading every page to find a topic, you look it up in the index and go straight to the right page. This makes finding information much faster and more efficient, especially in large collections.",
    realTimeExample2:
      "Imagine indexes as a GPS for your data. Just as a GPS helps you navigate directly to your destination without exploring every street, indexes help MongoDB find the data you need without scanning every document in the collection, saving time and resources.",
  },
  {
    id: 5,
    question: "What is aggregation in MongoDB?",
    answer:
      "Aggregation in MongoDB is a way of processing data records and returning computed results. It groups values from multiple documents together, and can perform a variety of operations like grouping, sorting, and transforming data using a pipeline of stages.",
    realTimeExample:
      "Aggregation is like a data processing factory. You feed in raw data, and through a series of steps—sorting, grouping, and calculating—you get meaningful summaries and insights, just like turning raw ingredients into a finished meal with clear, actionable information.",
    realTimeExample2:
      "Imagine aggregation as a smart assistant that takes your sales data, groups it by region, calculates totals and averages, and presents you with a clear report showing which regions are performing best and why, all in real time.",
  },
  {
    id: 6,
    question: "What is MongoDB replication?",
    answer:
      "Replication in MongoDB is the process of synchronizing data across multiple servers. It provides redundancy and increases data availability by maintaining multiple copies of data on different database servers. This ensures high availability and automatic failover in case of hardware failure.",
    realTimeExample:
      "Replication is like having multiple photocopiers in different rooms, each making a copy of every important document you create. If one photocopier breaks, you can still access your documents from another, ensuring you never lose your work.",
    realTimeExample2:
      "Imagine replication as a team of backup singers. Each singer knows the lyrics and can step in if the lead singer’s microphone fails, ensuring the performance continues without interruption and the audience never notices the switch.",
  },
  {
    id: 7,
    question: "What is a MongoDB replica set?",
    answer:
      "A replica set in MongoDB is a group of mongod processes that maintain the same data set, providing redundancy and high availability. One node is primary and receives all write operations, while the others are secondaries that replicate the primary’s data. If the primary fails, the replica set automatically elects a new primary from the secondaries.",
    realTimeExample:
      "A replica set is like a team of superheroes where each member has the same powers. If the leader is unavailable, another member steps up to take charge, ensuring the team’s mission continues without disruption.",
    realTimeExample2:
      "Imagine a replica set as a group of synchronized clocks. If one clock stops, the others continue to keep time, and the system automatically uses the next available clock to ensure everyone stays on schedule.",
  },
  {
    id: 8,
    question: "What is MongoDB oplog?",
    answer:
      "The oplog (operations log) is a special capped collection that records all operations that modify the data in a MongoDB replica set. It is used by the secondaries to replicate data from the primary, ensuring all members of the replica set stay in sync.",
    realTimeExample:
      "The oplog is like a ship’s logbook, recording every action and change made during the voyage. If a new captain takes over, they can review the logbook to understand what’s happened and continue the journey seamlessly.",
    realTimeExample2:
      "Imagine the oplog as a DVR for your database. It records every change made to your data, so if a secondary server misses an update, it can rewind and replay the changes to catch up and stay synchronized with the primary.",
  },
  {
    id: 9,
    question: "What is MongoDB journaling?",
    answer:
      "Journaling in MongoDB is a mechanism that ensures write operations are durable. It writes changes to a journal (write-ahead log) before applying them to the data files. If MongoDB crashes, it can recover the data by replaying the journal, ensuring no data is lost.",
    realTimeExample:
      "Journaling is like writing your plans in a notebook before you start building something. If you get interrupted, you can pick up right where you left off by checking your notes, ensuring your project isn’t lost or corrupted.",
    realTimeExample2:
      "Imagine journaling as a flight data recorder for your database. It records every change before it’s applied, so if there’s a crash, you can replay the recordings to restore your data to the exact state it was in before the incident.",
  },
  {
    id: 10,
    question: "What is MongoDB write concern?",
    answer:
      "Write concern in MongoDB describes the level of acknowledgment requested from MongoDB for write operations. It specifies how many servers must confirm the write before it is considered successful, balancing performance and data safety.",
    realTimeExample:
      "Write concern is like choosing how many friends must confirm they’ve received your message before you consider it delivered. You can send it and forget, or wait for everyone to acknowledge receipt, depending on how important the message is.",
    realTimeExample2:
      "Imagine write concern as a package delivery service. You can choose to get a confirmation when the package is dropped off, or only when it’s signed for by the recipient, ensuring the right level of certainty for your needs.",
  },
  {
    id: 11,
    question: "What is MongoDB read concern?",
    answer:
      "Read concern in MongoDB determines the level of consistency and isolation for read operations. It allows you to specify whether to read the most recent data or data that has been acknowledged by a majority of replica set members, balancing performance and data consistency.",
    realTimeExample:
      "Read concern is like choosing whether to read the latest news headlines as they’re published, or waiting for the morning paper that’s been reviewed and confirmed by multiple editors, depending on how up-to-date you need your information to be.",
    realTimeExample2:
      "Imagine read concern as a restaurant menu. You can choose to see the chef’s latest specials as they’re created, or only the dishes that have been tested and approved by the kitchen staff, ensuring you get the level of reliability you want.",
  },
  {
    id: 12,
    question: "What is MongoDB read preference?",
    answer:
      "Read preference in MongoDB determines which member of a replica set the client reads from. You can choose to read from the primary, secondaries, or the nearest available member, allowing you to balance load and optimize for performance or data freshness.",
    realTimeExample:
      "Read preference is like choosing which library branch to visit for a book. You can go to the main branch for the latest editions, a nearby branch for convenience, or any branch that’s open, depending on your needs.",
    realTimeExample2:
      "Imagine read preference as selecting a news source. You can choose the headquarters for the most up-to-date news, a local affiliate for faster access, or the nearest available source, depending on what’s most important to you at the moment.",
  },
  {
    id: 13,
    question: "What is MongoDB write concern majority?",
    answer:
      "Majority write concern in MongoDB requires that a write operation is acknowledged by a majority of the replica set members before it is considered successful. This ensures that the data is durably stored and available even if some servers fail, providing a strong consistency guarantee.",
    realTimeExample:
      "Majority write concern is like requiring a majority of your team members to sign off on a decision before it’s finalized. This ensures that the decision is well-supported and can be acted upon even if some team members are unavailable.",
    realTimeExample2:
      "Imagine majority write concern as a group of friends planning a trip. You only book the tickets after most of the group has confirmed their availability, ensuring the plan is solid and won’t fall apart if one or two friends can’t make it.",
  },
  {
    id: 14,
    question: "What is MongoDB connection pooling?",
    answer:
      "Connection pooling in MongoDB is a technique for reusing database connections instead of creating a new connection for each operation. This reduces the overhead of establishing new connections, improving performance and resource utilization, especially in high-concurrency applications.",
    realTimeExample:
      "Connection pooling is like a carpool for database connections. Instead of everyone driving their own car to the same destination, you share rides, reducing traffic and saving resources, making the whole system more efficient.",
    realTimeExample2:
      "Imagine connection pooling as a library’s book checkout system. Instead of issuing a new library card for every book you borrow, you reuse the same card for all your checkouts, making the process faster and less resource-intensive.",
  },
  {
    id: 15,
    question: "What is MongoDB GridFS?",
    answer:
      "GridFS is a specification for storing and retrieving large files such as images, audio, and video in MongoDB. It splits files into chunks and stores each chunk as a separate document, allowing MongoDB to handle files larger than the BSON document size limit.",
    realTimeExample:
      "GridFS is like a file cabinet for large documents. Instead of trying to fit a giant poster into a small drawer, you fold it into manageable sections and store each section in its own folder. When you need the poster, you simply unfold and reassemble the sections.",
    realTimeExample2:
      "Imagine GridFS as a streaming service for your files. Large videos are broken into small segments, and when you play the video, each segment is delivered in order, giving you a smooth viewing experience without buffering issues, even with very large files.",
  },
  {
    id: 16,
    question: "How do you use MongoDB GridFS?",
    answer:
      "To use GridFS, you create a GridFSBucket instance and use its methods to upload, download, and manage large files. GridFS automatically handles chunking and reassembly, making it easy to work with files larger than 16MB.",
    realTimeExample:
      "Using GridFS is like using a specialized tool to handle oversized cargo. You load your large file into the system, and it automatically splits it into manageable pieces, stores them efficiently, and reassembles them when you need the full file again.",
    realTimeExample2:
      "Imagine using GridFS as a jigsaw puzzle organizer. You can take a large, complex puzzle, break it into smaller, easier-to-handle pieces, store them in separate boxes, and put them back together whenever you want to see the full picture.",
    syntax: "const gridFSBucket = new mongodb.GridFSBucket(db);",
    codeExample:
      "const uploadStream = gridFSBucket.openUploadStream('myLargeFile.mp4');\n" +
      "fs.createReadStream('./myLargeFile.mp4').pipe(uploadStream);\n" +
      "uploadStream.on('finish', () => {\n" +
      "  console.log('File uploaded successfully!');\n" +
      "});",
  },
  {
    id: 17,
    question: "What is MongoDB change streams?",
    answer:
      "Change streams in MongoDB allow applications to access real-time data changes. By opening a change stream on a collection or database, you can watch for insertions, updates, and deletions, and react to these changes as they happen, enabling event-driven architectures.",
    realTimeExample:
      "Change streams are like a live news feed for your database. Instead of checking for updates manually, you subscribe to the feed and get instant notifications whenever something changes, keeping you always in the loop.",
    realTimeExample2:
      "Imagine change streams as a security camera for your data. It constantly monitors for any activity, and as soon as something happens—like a new document being added or an existing one being updated—it alerts you in real time, so you can take immediate action if needed.",
  },
  {
    id: 18,
    question: "How do you use MongoDB change streams?",
    answer:
      "To use change streams, you open a change stream on a collection or database using the watch() method. You can then listen for change events and handle them in your application, such as logging changes or triggering other processes.",
    realTimeExample:
      "Using change streams is like setting up a live sports ticker. You subscribe to the game’s events, and every time there’s a goal, substitution, or penalty, you get an instant update, allowing you to react or notify others immediately.",
    realTimeExample2:
      "Imagine using change streams as a stock market alert system. You set up watches on your favorite stocks, and whenever there’s a price change or significant event, you get a real-time notification, enabling you to make timely decisions.",
    syntax: "const changeStream = collection.watch();",
    codeExample:
      "const changeStream = db.collection('orders').watch();\n" +
      "changeStream.on('change', (change) => {\n" +
      "  console.log('Change detected:', change);\n" +
      "  // Handle the change, e.g., send a notification or update a cache\n" +
      "});",
  },
  {
    id: 19,
    question: "What is MongoDB transactions?",
    answer:
      "Transactions in MongoDB allow you to group multiple operations into a single, atomic unit of work. All operations within a transaction either succeed together or fail together, ensuring data consistency even in distributed systems.",
    realTimeExample:
      "Transactions are like a group of friends moving furniture. Either everyone lifts the couch and moves it successfully, or if someone drops their end, everyone puts it back down and tries again, ensuring the couch is never left half-moved or in an inconsistent state.",
    realTimeExample2:
      "Imagine transactions as a bank transfer. When you move money from one account to another, the transaction ensures that the money is deducted from the first account and added to the second, or neither happens, preventing any loss or inconsistency in your funds.",
  },
  {
    id: 20,
    question: "How do you use MongoDB transactions?",
    answer:
      "To use transactions in MongoDB, you start a session, begin a transaction, perform your operations, and then commit the transaction. If any operation fails, you can abort the transaction to roll back all changes.",
    realTimeExample:
      "Using transactions is like planning a multi-step recipe. You prepare all the ingredients and start cooking, but if you burn one part, you can throw everything out and start over, ensuring you only serve a complete and perfect dish.",
    realTimeExample2:
      "Imagine using transactions as a group project. Everyone works on their part, but if one person’s work doesn’t meet the standards, the whole group agrees to revise everything together, ensuring the final submission is cohesive and correct.",
    syntax:
      "const session = client.startSession(); session.startTransaction();",
    codeExample:
      "const session = client.startSession();\n" +
      "try {\n" +
      "  session.startTransaction();\n" +
      "  await collection1.insertOne({ doc: 1 }, { session });\n" +
      "  await collection2.insertOne({ doc: 2 }, { session });\n" +
      "  await session.commitTransaction();\n" +
      "} catch (error) {\n" +
      "  await session.abortTransaction();\n" +
      "  throw error;\n" +
      "} finally {\n" +
      "  session.endSession();\n" +
      "}",
  },
  {
    id: 21,
    question: "What is MongoDB aggregation pipeline?",
    answer:
      "The aggregation pipeline in MongoDB is a framework for processing and transforming documents in a collection. It consists of a sequence of stages, where each stage applies an operation to the input documents and passes the results to the next stage, allowing for complex data analysis and transformation.",
    realTimeExample:
      "The aggregation pipeline is like an assembly line in a factory. Each station performs a specific task—sorting, grouping, calculating—on the items as they pass through, transforming raw materials into finished products ready for use.",
    realTimeExample2:
      "Imagine the aggregation pipeline as a data analysis workflow. You start with raw data, filter out what you don’t need, group and summarize the rest, and finally present the results in a clear, actionable format, just like turning survey responses into insightful reports.",
  },
  {
    id: 22,
    question: "What are common aggregation stages?",
    answer:
      "Common aggregation stages in MongoDB include $match (filters documents), $group (groups documents by a key), $sort (orders documents), $project (reshapes documents), and $lookup (performs a left outer join with another collection). These stages can be combined to perform complex data processing.",
    realTimeExample:
      "Common aggregation stages are like the steps in a recipe. You first select the ingredients ($match), then mix them together ($group), arrange them in order ($sort), and finally present them on a plate ($project), creating a delicious and well-organized meal.",
    realTimeExample2:
      "Imagine common aggregation stages as a music playlist. You filter songs by genre ($match), group them by artist ($group), sort them by release date ($sort), and select only the tracks you want to include ($project), creating a perfect playlist for any mood.",
  },
  {
    id: 23,
    question: "How do you use $lookup in aggregation?",
    answer:
      "The $lookup stage in MongoDB performs a left outer join between documents in the same database. It matches documents from the input collection with documents from the joined collection, allowing you to combine related data from multiple collections in a single query.",
    realTimeExample:
      "Using $lookup is like connecting puzzle pieces from different boxes. You take a piece from your main puzzle and find matching pieces from another box, allowing you to see the complete picture that spans both sets of pieces.",
    realTimeExample2:
      "Imagine $lookup as a social network. You can see a user’s profile ($lookup from the users collection) and all their posts ($lookup from the posts collection) in a single view, making it easy to understand the full context of their activity.",
    syntax:
      "collection.aggregate([{ $lookup: { from: 'other', localField: 'field', foreignField: 'field', as: 'joined' } }])",
    codeExample:
      "await collection.aggregate([\n" +
      "  {\n" +
      "    $lookup: {\n" +
      "      from: 'users',\n" +
      "      localField: 'userId',\n" +
      "      foreignField: '_id',\n" +
      "      as: 'user'\n" +
      "    }\n" +
      "  }\n" +
      "]);",
  },
  {
    id: 24,
    question: "What is MongoDB MapReduce?",
    answer:
      "MapReduce in MongoDB is a data processing paradigm for condensing large volumes of data into useful aggregated results. It uses a map function to process and emit key-value pairs, and a reduce function to combine these pairs, producing a final output.",
    realTimeExample:
      "MapReduce is like organizing a large cleanup event. Volunteers (map function) sort items into categories (key-value pairs), and team leaders (reduce function) combine the sorted items, summarizing what was collected and where it should go next.",
    realTimeExample2:
      "Imagine MapReduce as a census process. Workers go door-to-door collecting data (map), then statisticians combine and analyze the data (reduce) to produce reports on population trends, helping planners make informed decisions.",
  },
  {
    id: 25,
    question: "How do you use MapReduce in MongoDB?",
    answer:
      "To use MapReduce in MongoDB, you define a map function to process input documents and emit key-value pairs, and a reduce function to combine these pairs. You then call the mapReduce method on your collection, specifying these functions and any options.",
    realTimeExample:
      "Using MapReduce is like running a survey. You ask each participant questions (map), then tally up the answers to find trends and insights (reduce), producing a summary report that tells you what most people think.",
    realTimeExample2:
      "Imagine using MapReduce as a word count program. The map function counts words in each document, and the reduce function sums these counts, giving you a list of how often each word appears across all your documents.",
    syntax: "collection.mapReduce(mapFunction, reduceFunction, options)",
    codeExample:
      "await collection.mapReduce(\n" +
      "  function() { emit(this.category, 1); },\n" +
      "  function(key, values) { return Array.sum(values); },\n" +
      "  { out: 'results' }\n" +
      ");",
  },
  {
    id: 26,
    question: "What is MongoDB text search?",
    answer:
      "Text search in MongoDB allows you to search for string content in your collections using full-text search capabilities. It supports language-specific stemming, stop words, and phrase searching, making it easy to find relevant documents based on text content.",
    realTimeExample:
      "Text search is like using a search engine for your documents. Instead of manually scanning each document, you type in keywords, and MongoDB returns all the documents that contain those words, ranked by relevance, just like a web search.",
    realTimeExample2:
      "Imagine text search as a library catalog. You enter a topic or phrase, and the system instantly shows you all the books that discuss that topic, even if the words are buried deep within the text, saving you hours of manual searching.",
  },
  {
    id: 27,
    question: "How do you implement text search in MongoDB?",
    answer:
      "To implement text search, you first create a text index on the fields you want to search. Then, you use the $text operator in your queries to search for terms, phrases, or exclude words, with optional language and case sensitivity settings.",
    realTimeExample:
      "Implementing text search is like setting up a keyword index for your book collection. Once the index is created, you can quickly find all books that mention a specific topic, phrase, or even exclude certain words, making your searches fast and accurate.",
    realTimeExample2:
      "Imagine implementing text search as a smart assistant for your emails. You create an index of all your messages, then ask the assistant to find emails about a project, excluding any from a specific sender, and it instantly returns the relevant messages.",
    syntax: "collection.createIndex({ field: 'text' })",
    codeExample:
      "await collection.createIndex({ content: 'text' });\n" +
      "await collection.find({ $text: { $search: 'mongodb tutorial' } });",
  },
  {
    id: 28,
    question: "What is MongoDB regex?",
    answer:
      "Regex (regular expressions) in MongoDB allows you to search for documents using pattern matching. You can use regex to find documents where a field matches a specific pattern, such as starting with a certain letter, containing a sequence of characters, or matching a complex pattern.",
    realTimeExample:
      "Regex is like a word detective for your data. You can search for all documents where a field starts with 'super', ends with 'man', or contains a specific sequence, making it easy to find exactly what you’re looking for, even with partial or flexible criteria.",
    realTimeExample2:
      "Imagine regex as a powerful filter for your contacts. You can find all names that start with 'A', contain 'son', or match any pattern you define, helping you quickly locate the right person without scrolling through every entry.",
  },
  {
    id: 29,
    question: "How do you use regex in MongoDB?",
    answer:
      "To use regex in MongoDB, you use the $regex operator in your queries. You can specify the pattern to match, and optionally set flags for case insensitivity or multiline matching, allowing for flexible and powerful text searches.",
    realTimeExample:
      "Using regex is like setting up a smart search for your music library. You can find all songs with titles starting with 'The', containing 'love', or matching any pattern, making it easy to build playlists based on flexible criteria.",
    realTimeExample2:
      "Imagine using regex as a code search tool. You can find all function names that start with 'get', variables containing 'temp', or any pattern, helping you quickly navigate and understand large codebases.",
    syntax: "collection.find({ field: { $regex: /pattern/ } })",
    codeExample:
      "await collection.find({ name: { $regex: /^A/, $options: 'i' } });",
  },
  {
    id: 30,
    question: "What is MongoDB geospatial data?",
    answer:
      "Geospatial data in MongoDB refers to data that represents geographic locations, such as points, lines, and polygons. MongoDB supports geospatial queries, allowing you to find documents based on their proximity to a location, inclusion within a boundary, or intersection with a shape.",
    realTimeExample:
      "Geospatial data is like a digital map for your locations. You can store the coordinates of places, then query for all locations within a certain distance, inside a specific area, or along a route, making it easy to find what’s nearby or relevant to your current position.",
    realTimeExample2:
      "Imagine geospatial data as a treasure map. You can mark the locations of hidden treasures, then query for all treasures within a certain radius of your current position, or along a path you plan to travel, ensuring you never miss a valuable find.",
  },
  {
    id: 31,
    question: "How do you handle geospatial queries in MongoDB?",
    answer:
      "To handle geospatial queries, you first create a geospatial index (such as 2dsphere) on your location fields. Then, you use geospatial operators like $near, $geoWithin, and $geoIntersects to query for documents based on their geographic properties.",
    realTimeExample:
      "Handling geospatial queries is like using a GPS for your data. You index your locations, then ask for all points of interest within a mile, inside a city boundary, or along a highway, getting instant results that match your geographic criteria.",
    realTimeExample2:
      "Imagine handling geospatial queries as a delivery routing system. You index all your delivery locations, then query for the nearest available driver to a new order, or all orders within a delivery zone, optimizing your logistics in real time.",
    syntax: "collection.find({ location: { $near: { $geometry: point } } })",
    codeExample:
      "await collection.createIndex({ location: '2dsphere' });\n" +
      "await collection.find({\n" +
      "  location: {\n" +
      "    $near: {\n" +
      "      $geometry: { type: 'Point', coordinates: [longitude, latitude] },\n" +
      "      $maxDistance: 1000\n" +
      "    }\n" +
      "  }\n" +
      "});",
  },
  {
    id: 32,
    question: "What is MongoDB capped collection?",
    answer:
      "A capped collection in MongoDB is a fixed-size collection that automatically overwrites its oldest entries when it reaches its maximum size. This makes it ideal for storing high-volume, rapidly changing data like logs, where only the most recent data is relevant.",
    realTimeExample:
      "A capped collection is like a circular logbook. Once the book is full, new entries automatically overwrite the oldest ones, ensuring you always have the most recent information without running out of space or needing manual cleanup.",
    realTimeExample2:
      "Imagine a capped collection as a security camera’s recording loop. The camera records over the oldest footage once the storage is full, ensuring you always have the latest video without needing to manually delete old files.",
  },
  {
    id: 33,
    question: "How do you create a capped collection?",
    answer:
      "To create a capped collection, you use the createCollection method with the capped option set to true, and specify the maximum size in bytes and optionally the maximum number of documents. This ensures the collection will automatically manage its size by overwriting old data.",
    realTimeExample:
      "Creating a capped collection is like setting up a rotating display for your products. You specify how many items can be displayed at once, and when a new item is added, the oldest one is automatically removed, keeping your display fresh and relevant.",
    realTimeExample2:
      "Imagine creating a capped collection as a podcast playlist with a fixed length. Once the playlist reaches its limit, adding a new episode automatically removes the oldest one, ensuring your listeners always hear the most recent content.",
    syntax: "db.createCollection('name', { capped: true, size: 100000 })",
    codeExample:
      "await db.createCollection('logs', {\n" +
      "  capped: true,\n" +
      "  size: 5242880, // 5MB\n" +
      "  max: 5000 // max 5000 documents\n" +
      "});",
  },
  {
    id: 34,
    question: "What is MongoDB TTL index?",
    answer:
      "A TTL (Time To Live) index in MongoDB automatically removes documents from a collection after a specified period. This is useful for managing data that should expire, such as session data, logs, or temporary records, without requiring manual cleanup.",
    realTimeExample:
      "A TTL index is like a self-cleaning fridge. You set an expiration date on your food, and the fridge automatically removes anything past its date, ensuring you only keep fresh, relevant items without needing to check and throw things out yourself.",
    realTimeExample2:
      "Imagine a TTL index as a parking meter for your data. You set a time limit for how long a document can stay in the collection, and once that time is up, the document is automatically removed, freeing up space for new data.",
  },
  {
    id: 35,
    question: "How do you create a TTL index?",
    answer:
      "To create a TTL index, you use the createIndex method on a date field, specifying the expireAfterSeconds option. This tells MongoDB to automatically remove documents where the date field is older than the specified number of seconds.",
    realTimeExample:
      "Creating a TTL index is like setting an alarm for your temporary files. You specify how long each file should be kept, and once that time is up, the system automatically deletes it, ensuring your storage stays clean and efficient.",
    realTimeExample2:
      "Imagine creating a TTL index as a hotel’s check-out system. You set a check-out time for each guest, and once that time passes, the system automatically marks the room as available, ensuring no room is left occupied indefinitely.",
    syntax:
      "collection.createIndex({ field: 1 }, { expireAfterSeconds: 3600 })",
    codeExample:
      "await collection.createIndex({\n" +
      "  createdAt: 1\n" +
      "}, {\n" +
      "  expireAfterSeconds: 86400 // 24 hours\n" +
      "});",
  },
  {
    id: 36,
    question: "What is MongoDB compound index?",
    answer:
      "A compound index in MongoDB is an index on multiple fields. It allows you to efficiently query documents based on the combination of those fields, and can also support sort operations and range queries on the indexed fields.",
    realTimeExample:
      "A compound index is like a phone book organized by both last name and first name. You can quickly find a person by either field, or by both together, making your searches much faster and more flexible than searching by one field alone.",
    realTimeExample2:
      "Imagine a compound index as a restaurant menu sorted by both cuisine type and price. You can quickly find all Italian dishes under $20, or all dishes under $10 regardless of cuisine, making it easy to find exactly what you want.",
  },
  {
    id: 37,
    question: "How do you create a compound index?",
    answer:
      "To create a compound index, you use the createIndex method and specify an object with the fields you want to index, each with a value of 1 (ascending) or -1 (descending). This creates an index that can efficiently support queries on the combination of those fields.",
    realTimeExample:
      "Creating a compound index is like setting up a filing system for your documents, sorted by both date and category. You can quickly find all documents from last month in the 'finance' category, or all 'marketing' documents from this year, making your searches fast and precise.",
    realTimeExample2:
      "Imagine creating a compound index as a music library sorted by both artist and release year. You can quickly find all albums by a specific artist from the 90s, or all albums released in 2020 regardless of artist, making it easy to explore your collection.",
    syntax: "collection.createIndex({ field1: 1, field2: -1 })",
    codeExample:
      "await collection.createIndex({\n" +
      "  category: 1,\n" +
      "  price: -1\n" +
      "});",
  },
  {
    id: 38,
    question: "What is MongoDB partial index?",
    answer:
      "A partial index in MongoDB is an index that only includes documents that match a specified filter expression. This makes the index smaller and more efficient, as it only indexes a subset of the documents in the collection, improving query performance for that subset.",
    realTimeExample:
      "A partial index is like a phone book that only lists people with a specific area code. Instead of including everyone, it focuses on the subset you care about, making it smaller, faster to search, and more relevant to your needs.",
    realTimeExample2:
      "Imagine a partial index as a VIP guest list for an event. Instead of listing every attendee, it only includes those with VIP status, making it easier and faster to manage and verify the important guests.",
  },
  {
    id: 39,
    question: "How do you create a partial index?",
    answer:
      "To create a partial index, you use the createIndex method and specify a partialFilterExpression option. This option defines which documents should be included in the index, allowing you to focus the index on the most relevant subset of your data.",
    realTimeExample:
      "Creating a partial index is like setting up a specialized catalog for your products. You only include items that are currently in stock, making the catalog smaller, faster to search, and more useful for customers looking to buy now.",
    realTimeExample2:
      "Imagine creating a partial index as a playlist of your favorite songs. Instead of including every song in your library, you only add the ones you love, making the playlist more enjoyable and easier to navigate.",
    syntax:
      "collection.createIndex({ field: 1 }, { partialFilterExpression: { status: 'active' } })",
    codeExample:
      "await collection.createIndex({\n" +
      "  email: 1\n" +
      "}, {\n" +
      "  partialFilterExpression: { verified: true }\n" +
      "});",
  },
  {
    id: 40,
    question: "What is MongoDB sparse index?",
    answer:
      "A sparse index in MongoDB is an index that only contains entries for documents that have the indexed field. This makes the index more efficient by skipping documents where the field is missing or null, reducing the index size and improving query performance for existing fields.",
    realTimeExample:
      "A sparse index is like a directory that only lists people with published phone numbers. Instead of including everyone, it skips those without numbers, making the directory smaller, more efficient, and easier to use for those who need to make calls.",
    realTimeExample2:
      "Imagine a sparse index as a map that only shows locations with known coordinates. Instead of marking every possible spot, it focuses on the ones you can actually navigate to, making the map clearer and more useful for planning routes.",
  },
  {
    id: 41,
    question: "How do you create a sparse index?",
    answer:
      "To create a sparse index, you use the createIndex method and set the sparse option to true. This ensures the index only includes documents where the indexed field exists, making the index more efficient and reducing its size.",
    realTimeExample:
      "Creating a sparse index is like building a contact list that only includes people with email addresses. Instead of listing everyone, it focuses on those you can actually email, making the list more useful and easier to manage.",
    realTimeExample2:
      "Imagine creating a sparse index as a recipe book that only includes recipes with photos. Instead of listing every recipe, it focuses on the ones you can visually preview, making it easier to choose what to cook next.",
    syntax: "collection.createIndex({ field: 1 }, { sparse: true })",
    codeExample:
      "await collection.createIndex({\n" +
      "  optionalField: 1\n" +
      "}, {\n" +
      "  sparse: true\n" +
      "});",
  },
  {
    id: 42,
    question: "What is MongoDB multikey index?",
    answer:
      "A multikey index in MongoDB is an index on an array field, where each element of the array is indexed separately. This allows you to efficiently query for documents based on the values within the array, supporting complex searches and aggregations on array data.",
    realTimeExample:
      "A multikey index is like a library catalog that indexes every word in a book’s table of contents. You can quickly find books that mention a specific topic, even if it’s just one chapter among many, making your searches more comprehensive and accurate.",
    realTimeExample2:
      "Imagine a multikey index as a playlist that indexes every artist featured in a song. You can quickly find all songs where a specific artist is featured, even if they’re only a guest on one track, making it easy to explore collaborations and discover new music.",
  },
  {
    id: 43,
    question: "How do you create a multikey index?",
    answer:
      "To create a multikey index, you use the createIndex method on an array field. MongoDB automatically creates a separate index entry for each element in the array, allowing you to efficiently query for documents based on array content.",
    realTimeExample:
      "Creating a multikey index is like setting up a tag system for your photos. Each photo can have multiple tags, and you can quickly find all photos with a specific tag, even if it’s just one tag among many, making your photo library easy to navigate.",
    realTimeExample2:
      "Imagine creating a multikey index as a bookstore’s subject index. Each book can have multiple subjects, and you can quickly find all books on a specific topic, even if it’s just one subject among many, making it easy to find what you’re interested in.",
    syntax: "collection.createIndex({ arrayField: 1 })",
    codeExample: "await collection.createIndex({\n" + "  tags: 1\n" + "});",
  },
  {
    id: 44,
    question: "What is MongoDB database profiling?",
    answer:
      "Database profiling in MongoDB is a diagnostic tool that captures detailed information about database operations, such as query execution time, used indexes, and returned documents. This helps you identify slow queries, optimize performance, and troubleshoot issues in your database.",
    realTimeExample:
      "Database profiling is like a fitness tracker for your database. It records how long each operation takes, which indexes are used, and how much data is returned, helping you identify bottlenecks and optimize your database’s performance, just like a tracker helps you improve your workout routine.",
    realTimeExample2:
      "Imagine database profiling as a flight data recorder for your queries. It logs every operation’s performance, so you can review what happened during slow periods, identify the root causes, and make adjustments to keep everything running smoothly.",
  },
  {
    id: 45,
    question: "How do you enable profiling in MongoDB?",
    answer:
      "To enable profiling, you use the setProfilingLevel method on your database, specifying the level of profiling (0 for off, 1 for slow operations, 2 for all operations) and optionally a threshold for what constitutes a slow operation. This allows you to capture the data you need for analysis.",
    realTimeExample:
      "Enabling profiling is like turning on a security camera for your database. You can set it to record only suspicious activity (slow operations) or everything that happens, giving you the visibility you need to monitor and improve performance.",
    realTimeExample2:
      "Imagine enabling profiling as a performance review for your database. You set the criteria for what’s considered slow, then review the recorded operations to see where improvements can be made, ensuring your database runs at its best.",
    syntax: "db.setProfilingLevel(2)",
    codeExample:
      "db.setProfilingLevel(2, { slowms: 100 }); // Log all operations slower than 100ms",
  },
  {
    id: 46,
    question: "What is MongoDB explain plan?",
    answer:
      "The explain plan in MongoDB provides detailed information about how a query is executed, including which indexes are used, the order of operations, and the estimated cost of each step. This helps you understand and optimize query performance by seeing exactly how MongoDB processes your queries.",
    realTimeExample:
      "The explain plan is like a GPS route preview for your query. It shows you the path MongoDB will take to execute your query, including which indexes it will use and how long each step is expected to take, helping you choose the most efficient route for your data.",
    realTimeExample2:
      "Imagine the explain plan as a chef’s recipe breakdown. It shows you each step the chef will take to prepare your dish, the ingredients (indexes) they’ll use, and how long each step should take, helping you understand and optimize the cooking process for the best results.",
  },
  {
    id: 47,
    question: "How do you use explain in MongoDB?",
    answer:
      "To use explain, you append the explain() method to your query. This returns a document with detailed information about the query execution plan, including the winning plan, rejected plans, and execution statistics, helping you analyze and optimize your queries.",
    realTimeExample:
      "Using explain is like asking a tour guide for a detailed itinerary. They show you the planned route, the stops along the way, and the expected time for each, helping you understand the journey and make adjustments for a better experience.",
    realTimeExample2:
      "Imagine using explain as a sports playbook review. The coach shows you the planned plays, the positions of each player, and the expected outcomes, helping you understand the strategy and make improvements for the next game.",
    syntax: "query.explain()",
    codeExample:
      "await collection.find({ age: 30 }).explain('executionStats');",
  },
  {
    id: 48,
    question: "What is MongoDB cursor?",
    answer:
      "A cursor in MongoDB is a pointer to the result set of a query. It allows you to iterate over the results, retrieving documents one at a time or in batches, which is especially useful for large result sets that cannot fit into memory all at once.",
    realTimeExample:
      "A cursor is like a bookmark in a book. Instead of loading the entire book into memory, you use the bookmark to keep your place and read one page at a time, making it easy to manage large books without overwhelming your resources.",
    realTimeExample2:
      "Imagine a cursor as a streaming service for your query results. Instead of downloading the entire movie at once, you stream it in small chunks, allowing you to start watching immediately and use less memory, even for very large files.",
  },
  {
    id: 49,
    question: "How do you iterate a cursor in MongoDB?",
    answer:
      "To iterate a cursor, you can use methods like forEach, toArray, or next. These methods allow you to process each document in the result set one by one, or retrieve all documents at once, giving you flexibility in how you handle the query results.",
    realTimeExample:
      "Iterating a cursor is like reading a magazine page by page. You can flip through each page one at a time (forEach), collect all the pages into a pile (toArray), or just peek at the next page (next), depending on how you want to consume the content.",
    realTimeExample2:
      "Imagine iterating a cursor as a music playlist. You can listen to each song one by one (forEach), download the entire playlist (toArray), or just skip to the next track (next), giving you control over how you experience the music.",
    syntax: "cursor.forEach(doc => console.log(doc))",
    codeExample:
      "const cursor = collection.find({ status: 'active' });\n" +
      "await cursor.forEach(doc => {\n" +
      "  console.log(doc.name);\n" +
      "});",
  },
  {
    id: 50,
    question: "What is MongoDB bulk operations?",
    answer:
      "Bulk operations in MongoDB allow you to perform multiple write operations (inserts, updates, deletes) in a single batch. This reduces the overhead of sending multiple requests to the server, improving performance and efficiency, especially for large numbers of operations.",
    realTimeExample:
      "Bulk operations are like using a conveyor belt in a factory. Instead of processing each item one at a time, you load a batch onto the belt and process them all together, saving time and resources, and keeping the production line moving smoothly.",
    realTimeExample2:
      "Imagine bulk operations as a group email. Instead of sending individual messages to each recipient, you compose one email and send it to everyone at once, saving time and ensuring everyone gets the same information efficiently.",
  },
  {
    id: 51,
    question: "How do you use bulk operations in MongoDB?",
    answer:
      "To use bulk operations, you create a bulk operation object using initializeUnorderedBulkOp or initializeOrderedBulkOp, add your operations to the bulk, and then execute it. This allows you to perform multiple writes in a single, efficient batch.",
    realTimeExample:
      "Using bulk operations is like preparing a batch of meals. You chop all the vegetables, cook all the meat, and assemble all the dishes at once, instead of making each meal one at a time, saving time and effort in the kitchen.",
    realTimeExample2:
      "Imagine using bulk operations as a bulk mail merge. You prepare all your letters, envelopes, and labels at once, then send them all together, instead of addressing and mailing each one individually, making the process much faster and more efficient.",
    syntax: "const bulk = collection.initializeUnorderedBulkOp()",
    codeExample:
      "const bulk = collection.initializeUnorderedBulkOp();\n" +
      "bulk.insert({ name: 'Alice' });\n" +
      "bulk.insert({ name: 'Bob' });\n" +
      "await bulk.execute();",
  },
  {
    id: 52,
    question: "What is MongoDB schema validation?",
    answer:
      "Schema validation in MongoDB allows you to enforce rules on the structure and content of documents in a collection. You can specify required fields, data types, and other constraints, ensuring that only valid documents are inserted or updated, maintaining data quality and consistency.",
    realTimeExample:
      "Schema validation is like a bouncer at a club. Only documents that meet the specified criteria (dress code, age, etc.) are allowed in, ensuring that the data in your collection is always valid, consistent, and ready for use.",
    realTimeExample2:
      "Imagine schema validation as a form validator on a website. It checks that all required fields are filled out correctly before submitting the form, ensuring that only complete and valid data is saved to the database.",
  },
  {
    id: 53,
    question: "How do you set up schema validation in MongoDB?",
    answer:
      "To set up schema validation, you use the validator option when creating or modifying a collection. You define a validation rule using the $jsonSchema operator, specifying the required structure, data types, and any other constraints for your documents.",
    realTimeExample:
      "Setting up schema validation is like creating a template for your documents. You define the required fields, their types, and any rules they must follow, ensuring that every new document fits the template and is ready for use in your application.",
    realTimeExample2:
      "Imagine setting up schema validation as a blueprint for a building. You specify the required rooms, their sizes, and the materials to use, ensuring that every building constructed from the blueprint is safe, consistent, and meets all the necessary standards.",
    syntax:
      "db.createCollection('collection', { validator: { $jsonSchema: schema } })",
    codeExample:
      "await db.createCollection('users', {\n" +
      "  validator: {\n" +
      "    $jsonSchema: {\n" +
      "      bsonType: 'object',\n" +
      "      required: ['name', 'email'],\n" +
      "      properties: {\n" +
      "        name: { bsonType: 'string' },\n" +
      "        email: { bsonType: 'string', pattern: '^.+@.+\\..+$' }\n" +
      "      }\n" +
      "    }\n" +
      "  }\n" +
      "});",
  },
  {
    id: 54,
    question: "What is MongoDB role-based access control?",
    answer:
      "Role-based access control (RBAC) in MongoDB allows you to manage user permissions by assigning roles that define what actions a user can perform. This provides fine-grained control over who can read, write, or administer your databases and collections, enhancing security and compliance.",
    realTimeExample:
      "RBAC is like a keycard system for your office. Different employees have different levels of access—some can enter only their department, others can access the entire building, and a few can manage the security system, ensuring everyone has the right level of access for their role.",
    realTimeExample2:
      "Imagine RBAC as a library’s access policy. Patrons can check out books, librarians can add or remove books, and the head librarian can manage the entire system, ensuring that everyone has the appropriate permissions for their responsibilities.",
  },
  {
    id: 55,
    question: "How do you create a user in MongoDB?",
    answer:
      "To create a user in MongoDB, you use the createUser method, specifying the user’s username, password, and the roles they should have. This allows you to control what databases and collections the user can access, and what actions they can perform.",
    realTimeExample:
      "Creating a user is like issuing a new employee ID badge. You assign a unique name, a secure password, and the access levels they need, ensuring they can perform their job without accessing sensitive or unrelated areas.",
    realTimeExample2:
      "Imagine creating a user as setting up a new account on a streaming service. You choose a username, set a password, and select the subscription level, determining what content the user can watch and what features they can access.",
    syntax:
      "db.createUser({ user: 'username', pwd: 'password', roles: ['role'] })",
    codeExample:
      "await db.createUser({\n" +
      "  user: 'alice',\n" +
      "  pwd: 'securePassword123',\n" +
      "  roles: ['readWrite', 'dbAdmin']\n" +
      "});",
  },
  {
    id: 56,
    question: "What is MongoDB authentication?",
    answer:
      "Authentication in MongoDB is the process of verifying the identity of a user or application attempting to connect to the database. It ensures that only authorized users can access the database, protecting your data from unauthorized access and potential breaches.",
    realTimeExample:
      "Authentication is like a login system for your database. Users must provide valid credentials (username and password) to access the data, just like logging into your email or bank account, ensuring that only authorized individuals can view or modify sensitive information.",
    realTimeExample2:
      "Imagine authentication as a security checkpoint at an airport. Only passengers with valid tickets and identification are allowed to board the plane, ensuring that everyone on board is authorized and the flight is secure.",
  },
  {
    id: 57,
    question: "How do you enable authentication in MongoDB?",
    answer:
      "To enable authentication, you start the MongoDB server with the --auth command-line option or set security.authorization to enabled in your configuration file. This requires all clients to authenticate before performing any operations, enhancing the security of your database.",
    realTimeExample:
      "Enabling authentication is like locking the front door of your house. Only people with the right key (credentials) can enter, ensuring that your belongings (data) are safe from unauthorized access and potential theft.",
    realTimeExample2:
      "Imagine enabling authentication as setting up a password for your Wi-Fi network. Only devices with the correct password can connect, ensuring that your internet connection is secure and only used by authorized devices.",
    syntax: "mongod --auth",
    codeExample: "mongod --auth --dbpath /data/db",
  },
  {
    id: 58,
    question: "What is MongoDB authorization?",
    answer:
      "Authorization in MongoDB determines what actions an authenticated user is allowed to perform. It works in conjunction with authentication to ensure that users only have access to the databases, collections, and operations they are permitted to use, based on their assigned roles and privileges.",
    realTimeExample:
      "Authorization is like a permission slip for your database. Just because a user is authenticated (has a ticket) doesn’t mean they can do everything—some can only read data, others can write, and a few can manage the entire system, ensuring everyone stays within their allowed actions.",
    realTimeExample2:
      "Imagine authorization as a library’s lending policy. Patrons can borrow books, librarians can add or remove books, and the head librarian can manage the entire system, ensuring that everyone has the appropriate level of access for their role.",
  },
  {
    id: 59,
    question: "What is MongoDB encryption at rest?",
    answer:
      "Encryption at rest in MongoDB protects your data by encrypting it when it is stored on disk. This ensures that even if someone gains physical access to your storage devices, they cannot read the data without the encryption keys, providing an additional layer of security for sensitive information.",
    realTimeExample:
      "Encryption at rest is like a safe for your data. Even if someone steals the safe, they can’t open it without the combination, ensuring that your valuable information remains protected and confidential, no matter what happens to the physical storage.",
    realTimeExample2:
      "Imagine encryption at rest as a locked diary. Even if someone finds your diary, they can’t read your private thoughts without the key, ensuring that your personal information stays secure and private, even if the diary is lost or stolen.",
  },
  {
    id: 60,
    question: "How do you enable encryption in MongoDB?",
    answer:
      "To enable encryption at rest, you start the MongoDB server with the --enableEncryption option and specify a key file that contains the encryption key. This ensures that all data files are encrypted on disk, protecting your data from unauthorized access.",
    realTimeExample:
      "Enabling encryption is like installing a security system for your data. You provide the system with a unique key, and it automatically encrypts all your files, ensuring that even if someone steals your hard drive, they can’t read your data without the key.",
    realTimeExample2:
      "Imagine enabling encryption as locking your phone with a passcode. Even if someone finds your phone, they can’t access your apps or data without the passcode, ensuring that your personal information remains secure and private.",
    syntax: "mongod --enableEncryption --encryptionKeyFile /path/to/keyfile",
    codeExample:
      "mongod --enableEncryption --encryptionKeyFile /var/lib/mongo/keyfile",
  },
  {
    id: 61,
    question: "What is MongoDB backup and restore?",
    answer:
      "Backup and restore in MongoDB refers to the process of creating copies of your database (backup) and using those copies to recover your data in case of loss or corruption (restore). This ensures that you can recover your data to a known good state, minimizing downtime and data loss.",
    realTimeExample:
      "Backup and restore is like making photocopies of your important documents. If the originals are lost or damaged, you can use the copies to recreate them, ensuring that you never lose critical information and can always recover what you need.",
    realTimeExample2:
      "Imagine backup and restore as a time machine for your data. You take snapshots of your database at regular intervals, and if something goes wrong, you can rewind time and restore your data to a previous, working state, ensuring continuity and reliability.",
  },
  {
    id: 62,
    question: "How do you backup MongoDB?",
    answer:
      "To backup MongoDB, you use the mongodump utility, which creates a binary export of your database’s data. You can specify which databases or collections to backup, and where to store the backup files, ensuring you have a complete and reliable copy of your data.",
    realTimeExample:
      "Backing up MongoDB is like making a digital copy of your photo album. You select which albums to copy, where to store the copies, and ensure that every photo is safely preserved, so you can restore them if the originals are ever lost or damaged.",
    realTimeExample2:
      "Imagine backing up MongoDB as creating a safety deposit box for your data. You carefully place all your important documents inside, lock it securely, and store it in a safe location, ensuring that you can always retrieve your data when you need it.",
    syntax: "mongodump --db database --out /path/to/backup",
    codeExample: "mongodump --db mydb --out /tmp/backup",
  },
  {
    id: 63,
    question: "How do you restore MongoDB?",
    answer:
      "To restore MongoDB, you use the mongorestore utility, which loads the data from a backup created by mongodump. You specify the backup files and the target database, allowing you to recover your data to a previous state, ensuring minimal downtime and data loss.",
    realTimeExample:
      "Restoring MongoDB is like unpacking your digital photo album. You take the backup files, load them into your photo app, and all your pictures are restored exactly as they were, ensuring that you can pick up right where you left off, with no loss of memories or data.",
    realTimeExample2:
      "Imagine restoring MongoDB as opening your safety deposit box. You retrieve your stored documents, place them back in your filing system, and everything is restored to its original state, ensuring that your data is complete and ready for use.",
    syntax: "mongorestore --db database /path/to/backup/database",
    codeExample: "mongorestore --db mydb /tmp/backup/mydb",
  },
  {
    id: 64,
    question: "What is MongoDB monitoring?",
    answer:
      "Monitoring in MongoDB involves tracking the performance, health, and status of your database in real time. This includes metrics like query execution time, memory usage, and connection counts, allowing you to proactively identify and resolve issues, ensuring optimal performance and reliability.",
    realTimeExample:
      "Monitoring is like a dashboard for your database. It shows you real-time metrics on how your database is performing, just like a car dashboard shows you speed, fuel level, and engine status, helping you keep everything running smoothly and avoid potential problems.",
    realTimeExample2:
      "Imagine monitoring as a health tracker for your database. It continuously checks vital signs like response time, memory usage, and error rates, alerting you to any issues so you can take action before they become critical, ensuring your database stays healthy and performant.",
  },
  {
    id: 65,
    question: "What tools can you use to monitor MongoDB?",
    answer:
      "Tools for monitoring MongoDB include MongoDB Cloud Manager, mongostat, mongotop, and custom scripts or third-party solutions like Prometheus and Grafana. These tools provide real-time metrics, alerts, and visualizations, helping you keep your database running at its best.",
    realTimeExample:
      "Monitoring tools are like a team of specialists for your database. MongoDB Cloud Manager is your central command center, mongostat and mongotop are your real-time performance monitors, and custom scripts are your tailored solutions, all working together to keep your database healthy and efficient.",
    realTimeExample2:
      "Imagine monitoring tools as a fitness tracking ecosystem. MongoDB Cloud Manager is your smartwatch, mongostat is your heart rate monitor, mongotop is your step counter, and custom scripts are your personalized workout plans, all helping you stay in top shape and perform at your best.",
  },
  {
    id: 66,
    question: "What is MongoDB performance tuning?",
    answer:
      "Performance tuning in MongoDB involves optimizing your database configuration, schema design, and queries to improve speed, efficiency, and resource usage. This includes creating the right indexes, optimizing queries, and adjusting server settings to match your workload and hardware.",
    realTimeExample:
      "Performance tuning is like tuning a musical instrument. You adjust the strings, the bridge, and the tuning pegs until everything is in harmony, ensuring that your database performs at its best, just like a well-tuned instrument produces the best sound.",
    realTimeExample2:
      "Imagine performance tuning as optimizing a race car. You adjust the engine, the suspension, and the aerodynamics to match the track and conditions, ensuring that your database runs as fast and efficiently as possible, just like a race car optimized for speed and handling.",
  },
  {
    id: 67,
    question: "How do you optimize MongoDB queries?",
    answer:
      "To optimize MongoDB queries, you should use appropriate indexes, limit the fields returned, avoid large arrays in documents, and structure your queries to take advantage of MongoDB’s strengths. This reduces the amount of data scanned and transferred, improving query performance and efficiency.",
    realTimeExample:
      "Optimizing queries is like planning the most efficient route for a delivery truck. You use maps (indexes) to find the fastest path, avoid heavy traffic (large arrays), and only carry what’s necessary (limit fields), ensuring that your queries are as fast and efficient as possible.",
    realTimeExample2:
      "Imagine optimizing queries as writing a concise and clear email. You include only the necessary information (limit fields), use bullet points for easy reading (indexes), and avoid long attachments (large arrays), ensuring that your message is quick to read and easy to understand, just like an optimized query is quick to execute and easy to process.",
  },
  {
    id: 68,
    question: "What is MongoDB connection string?",
    answer:
      "A connection string in MongoDB is a URI that specifies the location and authentication details for connecting to a MongoDB server or cluster. It includes the hostname, port, database name, and optionally, the username and password, providing all the information needed to establish a connection.",
    realTimeExample:
      "A connection string is like an address for your database. It tells your application exactly where to find the database, how to log in, and which database to use, just like an address tells you where to find a friend’s house and how to get inside.",
    realTimeExample2:
      "Imagine a connection string as a GPS coordinate for your database. It provides the exact location (hostname and port), the access code (username and password), and the destination (database name), ensuring that your application can always find and connect to your database, no matter where it is.",
    syntax: "mongodb://username:password@host:port/database",
    codeExample: "mongodb://admin:password@localhost:27017/mydb",
  },
  {
    id: 69,
    question: "What is MongoDB driver?",
    answer:
      "A MongoDB driver is a library that allows your application to interact with MongoDB. It provides an API for connecting to the database, executing queries, and managing data, abstracting the details of the MongoDB protocol and making it easy to work with MongoDB from your programming language of choice.",
    realTimeExample:
      "A MongoDB driver is like a translator for your application. It speaks the language of MongoDB and the language of your application, allowing them to communicate seamlessly, just like a translator helps people who speak different languages understand each other and work together.",
    realTimeExample2:
      "Imagine a MongoDB driver as a universal remote for your database. It provides a single, consistent interface for controlling your database, no matter what programming language your application uses, making it easy to interact with MongoDB from anywhere in your code.",
  },
  {
    id: 70,
    question: "How do you install MongoDB Node.js driver?",
    answer:
      "To install the MongoDB Node.js driver, you use the npm package manager to add the mongodb package to your project. This provides the official MongoDB driver for Node.js, allowing you to connect to and interact with MongoDB from your Node.js applications.",
    realTimeExample:
      "Installing the MongoDB Node.js driver is like adding a new tool to your toolbox. You use npm to download and install the driver, just like you’d use a wrench to add a new tool to your toolbox, ensuring that you have everything you need to work with MongoDB in your Node.js projects.",
    realTimeExample2:
      "Imagine installing the MongoDB Node.js driver as downloading a new app for your phone. You use the app store (npm) to find and install the driver, just like you’d download a new app, ensuring that you can connect to and use MongoDB from your Node.js applications with ease.",
    syntax: "npm install mongodb",
    codeExample: "npm install mongodb",
  },
  {
    id: 71,
    question: "What is MongoDB ObjectId?",
    answer:
      "An ObjectId in MongoDB is a unique identifier automatically generated for each document in a collection. It is a 12-byte value that includes a timestamp, machine identifier, process ID, and counter, ensuring that each ObjectId is unique across all documents and collections.",
    realTimeExample:
      "An ObjectId is like a fingerprint for your documents. Each document gets a unique identifier that distinguishes it from all others, just like each person has a unique fingerprint that identifies them, ensuring that no two documents are ever confused or mixed up.",
    realTimeExample2:
      "Imagine an ObjectId as a serial number for your products. Each product gets a unique number that identifies it, just like each document gets a unique ObjectId, ensuring that you can always track and manage your documents individually, no matter how many you have.",
  },
  {
    id: 72,
    question: "How do you generate ObjectId in MongoDB?",
    answer:
      "MongoDB automatically generates an ObjectId for each new document, but you can also create ObjectIds manually using the ObjectId constructor. This allows you to generate unique identifiers for your documents, even before they are inserted into the database.",
    realTimeExample:
      "Generating an ObjectId is like stamping a unique barcode on each item in your inventory. MongoDB does this automatically for new documents, but you can also stamp barcodes manually if you need to prepare documents in advance, ensuring that each one is uniquely identified.",
    realTimeExample2:
      "Imagine generating an ObjectId as assigning a unique student ID to each new student. MongoDB assigns these IDs automatically, but you can also generate them manually if you need to prepare student records before they enroll, ensuring that each student has a unique identifier from the start.",
    syntax: "new ObjectId()",
    codeExample:
      "const { ObjectId } = require('mongodb');\n" +
      "const id = new ObjectId();",
  },
  {
    id: 73,
    question: "What is MongoDB timestamp in ObjectId?",
    answer:
      "The timestamp in an ObjectId is a 4-byte value representing the time at which the ObjectId was created, measured in seconds since the Unix epoch. This allows you to determine the approximate creation time of a document, and to sort documents by their creation time.",
    realTimeExample:
      "The timestamp in an ObjectId is like a date stamp on a letter. It tells you when the letter was written, allowing you to sort your letters by date and understand the sequence of events, just like the timestamp in an ObjectId tells you when a document was created.",
    realTimeExample2:
      "Imagine the timestamp in an ObjectId as a time stamp on a photo. It tells you when the photo was taken, allowing you to organize your photos by date and see the progression of events over time, just like the timestamp in an ObjectId helps you track the creation of your documents.",
  },
  {
    id: 74,
    question: "What is MongoDB database?",
    answer:
      "A database in MongoDB is a container for collections of documents. It provides a way to organize and group related data, and can contain multiple collections, each with its own set of documents, allowing you to manage and query your data efficiently.",
    realTimeExample:
      "A database is like a filing cabinet for your data. It contains multiple folders (collections), each holding related documents, making it easy to organize, find, and manage your information, just like a filing cabinet helps you keep your paperwork organized and accessible.",
    realTimeExample2:
      "Imagine a database as a library. It contains multiple shelves (collections), each holding books (documents) on related topics, making it easy to find and manage the information you need, just like a database helps you organize and access your data.",
  },
  {
    id: 75,
    question: "What is MongoDB collection?",
    answer:
      "A collection in MongoDB is a group of documents stored together in the database. It is analogous to a table in relational databases, but with a flexible schema that allows documents to have different fields and structures, making it easy to store and query related data.",
    realTimeExample:
      "A collection is like a photo album for your documents. It groups related documents together, just like a photo album groups related photos, making it easy to find and manage all the documents that belong together, even if they have different shapes and sizes.",
    realTimeExample2:
      "Imagine a collection as a playlist for your music. It groups related songs together, just like a collection groups related documents, making it easy to find and play all the songs that fit a certain theme or mood, even if they are from different artists or albums.",
  },
  {
    id: 76,
    question: "What is MongoDB document?",
    answer:
      "A document in MongoDB is a record in a collection, stored in BSON format. It is a set of key-value pairs, similar to a JSON object, and can have nested structures, arrays, and a variety of data types, making it a flexible and powerful way to store data.",
    realTimeExample:
      "A document is like a page in a scrapbook. It can contain text, photos, stickers, and other elements, all organized together to tell a story or capture a moment, just like a MongoDB document can contain a variety of data types and structures to represent a single record.",
    realTimeExample2:
      "Imagine a document as a recipe card. It contains the name of the dish, a list of ingredients, step-by-step instructions, and maybe even a photo of the finished dish, all organized together to help you cook a meal, just like a MongoDB document organizes all the information about a single record.",
  },
  {
    id: 77,
    question: "What is MongoDB field?",
    answer:
      "A field in MongoDB is a key-value pair within a document. The key is a string that identifies the field, and the value can be any BSON data type, including strings, numbers, arrays, and nested documents, allowing for flexible and complex data structures.",
    realTimeExample:
      "A field is like a label on a file folder. The label (key) tells you what’s inside, and the contents (value) can be anything from a single note to a stack of papers, just like a MongoDB field can hold a variety of data types and structures, making it easy to organize and access your data.",
    realTimeExample2:
      "Imagine a field as a column in a spreadsheet. The column header (key) tells you what kind of data is in the column, and each cell (value) can contain a number, text, or even a formula, just like a MongoDB field can hold a variety of data types and structures, making it easy to work with your data.",
  },
  {
    id: 78,
    question: "What is MongoDB embedded document?",
    answer:
      "An embedded document in MongoDB is a document that is nested within another document. This allows you to store related data together, reducing the need for joins and making it easier to query and manage complex, hierarchical data structures.",
    realTimeExample:
      "An embedded document is like a letter inside an envelope. The envelope (parent document) contains the letter (embedded document), keeping related information together and making it easy to find and manage, just like an embedded document keeps related data together in a single MongoDB document.",
    realTimeExample2:
      "Imagine an embedded document as a chapter in a book. The book (parent document) contains the chapter (embedded document), keeping related content together and making it easy to read and understand the story as a whole, just like an embedded document keeps related data together in a single MongoDB document.",
  },
  {
    id: 79,
    question: "What is MongoDB reference?",
    answer:
      "A reference in MongoDB is a link from one document to another, typically using the ObjectId of the referenced document. This allows you to relate documents across collections, similar to foreign keys in relational databases, but with more flexibility and without requiring joins.",
    realTimeExample:
      "A reference is like a footnote in a book. The footnote (reference) points to another section or source, allowing you to keep the main text clean and focused while still providing access to related information, just like a MongoDB reference links documents without embedding them.",
    realTimeExample2:
      "Imagine a reference as a hyperlink on a webpage. The link (reference) points to another page or resource, allowing you to navigate between related content without duplicating it, just like a MongoDB reference links documents across collections without embedding them.",
  },
  {
    id: 80,
    question: "What is MongoDB array?",
    answer:
      "An array in MongoDB is an ordered list of values within a document. Arrays can contain values of any BSON data type, including other documents and arrays, allowing for complex and flexible data structures that can represent lists, sets, and hierarchical data.",
    realTimeExample:
      "An array is like a playlist of songs. It contains an ordered list of items (songs), each of which can be a different type or style, just like a MongoDB array can contain a variety of data types and structures, making it easy to manage and query lists of related data.",
    realTimeExample2:
      "Imagine an array as a shopping list. It contains an ordered list of items (groceries), each of which can be a different type or category, just like a MongoDB array can contain a variety of data types and structures, making it easy to organize and access your data.",
  },
  {
    id: 81,
    question: "What is MongoDB operator?",
    answer:
      "An operator in MongoDB is a special symbol or keyword used in queries to perform specific operations, such as comparison, logical, element, array, and bitwise operations. Operators allow you to build complex and powerful queries that can filter, transform, and aggregate your data.",
    realTimeExample:
      "An operator is like a tool in a toolbox. Each tool (operator) is designed for a specific task, such as cutting, measuring, or fastening, just like each MongoDB operator is designed for a specific type of operation, allowing you to build complex queries and manipulate your data with precision.",
    realTimeExample2:
      "Imagine an operator as a button on a remote control. Each button (operator) performs a specific function, such as changing the channel, adjusting the volume, or turning the device on or off, just like each MongoDB operator performs a specific operation, allowing you to control and query your data with ease.",
  },
  {
    id: 82,
    question: "What is MongoDB $set operator?",
    answer:
      "The $set operator in MongoDB updates the value of a field in a document. If the field does not exist, $set will add the field with the specified value. This allows you to update or add fields in a single operation, making it easy to modify your documents.",
    realTimeExample:
      "The $set operator is like using a label maker to update or add labels to your files. You can change the label on an existing file or add a new label to a file that doesn’t have one, ensuring that your files are always properly labeled and easy to find.",
    realTimeExample2:
      "Imagine the $set operator as a sticky note for your documents. You can update the note on an existing document or add a new note to a document that doesn’t have one, ensuring that your documents always have the latest and most relevant information.",
  },
  {
    id: 83,
    question: "What is MongoDB $unset operator?",
    answer:
      "The $unset operator in MongoDB removes a field from a document. This allows you to delete specific fields without affecting the rest of the document, making it easy to clean up and simplify your documents as needed.",
    realTimeExample:
      "The $unset operator is like using an eraser to remove a label from a file. You can delete the label without affecting the contents of the file, ensuring that your files are clean and organized, just like $unset removes fields without affecting the rest of the document.",
    realTimeExample2:
      "Imagine the $unset operator as a trash can for your documents. You can throw away specific fields you no longer need, keeping your documents clean and clutter-free, just like $unset removes unwanted fields from your MongoDB documents.",
  },
  {
    id: 84,
    question: "What is MongoDB $inc operator?",
    answer:
      "The $inc operator in MongoDB increments the value of a numeric field by a specified amount. This allows you to easily update counters, scores, and other numeric values, making it simple to track and manage changing data over time.",
    realTimeExample:
      "The $inc operator is like using a counter to track the number of items in your inventory. Each time you add or remove an item, you increment or decrement the counter, ensuring that you always have an accurate count, just like $inc updates numeric fields in your documents.",
    realTimeExample2:
      "Imagine the $inc operator as a scoreboard for a game. Each time a team scores, you increment their score, ensuring that the scoreboard always reflects the current state of the game, just like $inc updates numeric fields to reflect changes in your data.",
  },
  {
    id: 85,
    question: "What is MongoDB $push operator?",
    answer:
      "The $push operator in MongoDB adds an element to an array field in a document. If the field does not exist, $push will create the array with the specified element. This allows you to easily build and manage arrays of related data within your documents.",
    realTimeExample:
      "The $push operator is like adding a new song to a playlist. You can append the song to the end of the playlist, ensuring that your playlist grows and stays up to date, just like $push adds elements to arrays in your documents.",
    realTimeExample2:
      "Imagine the $push operator as adding a new item to your shopping list. You can append the item to the end of the list, ensuring that your list is always complete and up to date, just like $push adds elements to arrays in your MongoDB documents.",
  },
  {
    id: 86,
    question: "What is MongoDB $pull operator?",
    answer:
      "The $pull operator in MongoDB removes all elements from an array field that match a specified query condition. This allows you to easily clean up and manage arrays by removing unwanted or outdated elements, keeping your data accurate and relevant.",
    realTimeExample:
      "The $pull operator is like removing a song from a playlist. You can delete all instances of the song that match your criteria, ensuring that your playlist stays clean and relevant, just like $pull removes elements from arrays in your documents.",
    realTimeExample2:
      "Imagine the $pull operator as crossing items off your shopping list. You can remove all instances of an item that you no longer need, ensuring that your list is always accurate and up to date, just like $pull removes elements from arrays in your MongoDB documents.",
  },
  {
    id: 87,
    question: "What is MongoDB $addToSet operator?",
    answer:
      "The $addToSet operator in MongoDB adds an element to an array field only if the element is not already present. This ensures that the array contains only unique elements, making it easy to manage sets of related data without duplicates.",
    realTimeExample:
      "The $addToSet operator is like adding a unique item to your collection. You only add the item if you don’t already have it, ensuring that your collection stays unique and organized, just like $addToSet ensures that arrays in your documents contain only unique elements.",
    realTimeExample2:
      "Imagine the $addToSet operator as adding a new contact to your phone. You only add the contact if it’s not already in your list, ensuring that your contacts stay unique and easy to manage, just like $addToSet ensures that arrays in your MongoDB documents contain only unique elements.",
  },
  {
    id: 88,
    question: "What is MongoDB $pop operator?",
    answer:
      "The $pop operator in MongoDB removes the first or last element from an array field. You can specify whether to remove from the beginning (-1) or the end (1) of the array, making it easy to manage the order and size of your arrays.",
    realTimeExample:
      "The $pop operator is like removing the top or bottom card from a deck. You can choose to remove the first card (-1) or the last card (1), ensuring that your deck stays in order and at the right size, just like $pop manages the elements in your arrays.",
    realTimeExample2:
      "Imagine the $pop operator as managing a queue of tasks. You can remove the first task (-1) to start working on it, or the last task (1) to reorder your priorities, ensuring that your task list stays organized and manageable, just like $pop manages the elements in your MongoDB arrays.",
  },
  {
    id: 89,
    question: "What is MongoDB $each operator?",
    answer:
      "The $each operator in MongoDB is used with $push and $addToSet to add multiple elements to an array in a single operation. This allows you to efficiently update arrays with multiple values, making it easy to manage and grow your arrays as needed.",
    realTimeExample:
      "The $each operator is like adding multiple songs to a playlist at once. Instead of adding each song one by one, you can add them all in a single operation, ensuring that your playlist grows quickly and efficiently, just like $each adds multiple elements to arrays in your documents.",
    realTimeExample2:
      "Imagine the $each operator as adding multiple items to your shopping list at once. Instead of adding each item individually, you can add them all in a single operation, ensuring that your list is always complete and up to date, just like $each adds multiple elements to arrays in your MongoDB documents.",
  },
  {
    id: 90,
    question: "What is MongoDB $position operator?",
    answer:
      "The $position operator in MongoDB is used with $push to specify the position at which to insert an element into an array. This allows you to control the order of elements in your arrays, making it easy to organize and manage your data as needed.",
    realTimeExample:
      "The $position operator is like inserting a new song into a specific spot in your playlist. Instead of adding the song to the end, you can place it exactly where you want, ensuring that your playlist is organized just the way you like it, just like $position inserts elements at specific positions in your arrays.",
    realTimeExample2:
      "Imagine the $position operator as inserting a new task into a specific spot in your to-do list. Instead of adding the task to the end, you can place it exactly where it fits best, ensuring that your list is organized and prioritized, just like $position inserts elements at specific positions in your MongoDB arrays.",
  },
  {
    id: 91,
    question: "What is MongoDB $sort operator?",
    answer:
      "The $sort operator in MongoDB sorts the elements of an array within a document. You can specify the sort order (ascending or descending) and the fields to sort by, making it easy to organize and analyze your array data as needed.",
    realTimeExample:
      "The $sort operator is like organizing your bookshelf by title or author. You can arrange your books in ascending or descending order, ensuring that your bookshelf is organized and easy to navigate, just like $sort organizes the elements in your arrays.",
    realTimeExample2:
      "Imagine the $sort operator as sorting your playlist by song title or artist. You can arrange your songs in the order you prefer, ensuring that your playlist is organized and enjoyable, just like $sort organizes the elements in your MongoDB arrays.",
  },
  {
    id: 92,
    question: "What is MongoDB $slice operator?",
    answer:
      "The $slice operator in MongoDB returns a subset of the elements in an array. You can specify the number of elements to return and their starting position, making it easy to work with portions of your arrays without loading the entire array into memory.",
    realTimeExample:
      "The $slice operator is like taking a slice of a cake. You can choose how big a slice you want and where to start cutting, ensuring that you get just the portion you need, just like $slice returns a subset of the elements in your arrays.",
    realTimeExample2:
      "Imagine the $slice operator as selecting a range of songs from your playlist. You can choose to listen to just the first few songs, a middle section, or the last few songs, ensuring that you only listen to the portion you want, just like $slice returns a subset of the elements in your MongoDB arrays.",
  },
  {
    id: 93,
    question: "What is MongoDB $regex operator?",
    answer:
      "The $regex operator in MongoDB allows you to search for documents where a field matches a specified regular expression pattern. This provides powerful and flexible text search capabilities, making it easy to find documents based on complex string patterns.",
    realTimeExample:
      "The $regex operator is like using a search engine with advanced filters. You can search for documents where a field matches a specific pattern, such as starting with a certain letter, containing a sequence of characters, or matching a complex expression, just like a search engine helps you find exactly what you’re looking for.",
    realTimeExample2:
      "Imagine the $regex operator as a word puzzle solver. You can search for documents where a field matches a specific pattern, such as containing a certain sequence of letters or matching a complex rule, ensuring that you find all the documents that fit your criteria, just like a puzzle solver helps you find the right words.",
  },
  {
    id: 94,
    question: "What is MongoDB $text operator?",
    answer:
      "The $text operator in MongoDB performs a text search on the content of fields indexed with a text index. It allows you to search for words and phrases, and can rank results by relevance, making it easy to find documents based on their text content.",
    realTimeExample:
      "The $text operator is like using a search engine for your documents. You can search for words and phrases within your text fields, and MongoDB returns the most relevant documents, just like a search engine returns the most relevant web pages for your query.",
    realTimeExample2:
      "Imagine the $text operator as a library catalog search. You can search for books that contain specific words or phrases, and the catalog returns the most relevant books, making it easy to find what you’re looking for, just like $text helps you find the most relevant documents in your MongoDB collections.",
  },
  {
    id: 95,
    question: "What is MongoDB $where operator?",
    answer:
      "The $where operator in MongoDB allows you to use JavaScript expressions in your queries. This provides powerful and flexible query capabilities, allowing you to perform complex logic and calculations directly in your queries, making it easy to find documents that match your custom criteria.",
    realTimeExample:
      "The $where operator is like using a calculator in your queries. You can perform complex calculations and logic, such as comparing fields, evaluating expressions, or calling functions, ensuring that you find exactly the documents that match your custom criteria, just like a calculator helps you perform complex math.",
    realTimeExample2:
      "Imagine the $where operator as a custom filter for your documents. You can write JavaScript expressions to define exactly what you’re looking for, such as documents where one field is greater than another, or where a complex condition is met, ensuring that you find the documents that match your unique requirements, just like a custom filter helps you find exactly what you need.",
  },
  {
    id: 96,
    question: "What is MongoDB $exists operator?",
    answer:
      "The $exists operator in MongoDB matches documents that contain or do not contain a specified field. This allows you to easily find documents based on the presence or absence of fields, making it simple to query for documents with specific structures or missing data.",
    realTimeExample:
      "The $exists operator is like checking for the presence of a label on a file. You can find all files that have a specific label, or all files that are missing a label, ensuring that you can easily manage and organize your files based on their structure, just like $exists helps you query for documents based on their fields.",
    realTimeExample2:
      "Imagine the $exists operator as a checklist for your documents. You can check which documents have all the required fields, and which are missing some, ensuring that your data is complete and consistent, just like a checklist helps you ensure that everything is in order.",
  },
  {
    id: 97,
    question: "What is MongoDB $type operator?",
    answer:
      "The $type operator in MongoDB matches documents where a field is of a specified BSON type. This allows you to query for documents based on the data type of their fields, making it easy to find and manage documents with specific types of data.",
    realTimeExample:
      "The $type operator is like sorting your files by type. You can find all documents where a field is a string, a number, a date, or any other BSON type, ensuring that you can easily manage and analyze your data based on its structure, just like sorting files by type helps you organize and find what you need.",
    realTimeExample2:
      "Imagine the $type operator as a filter for your documents. You can filter documents based on the type of data in their fields, such as finding all documents where a field is an array, a date, or a nested document, ensuring that you work with the right type of data for your needs, just like a filter helps you focus on what’s important.",
  },
  {
    id: 98,
    question: "What is MongoDB $size operator?",
    answer:
      "The $size operator in MongoDB matches documents where an array field has a specified number of elements. This allows you to query for documents based on the size of their arrays, making it easy to find and manage documents with arrays of a specific length.",
    realTimeExample:
      "The $size operator is like counting the items in a list. You can find all documents where an array has exactly 5 elements, or more than 10 elements, ensuring that you can easily manage and analyze your data based on the size of its arrays, just like counting items helps you organize and understand your lists.",
    realTimeExample2:
      "Imagine the $size operator as a sizing tool for your documents. You can find documents where an array has the exact size you need, such as all documents with an array of 3 elements, ensuring that you work with data that fits your requirements, just like a sizing tool helps you find the right fit.",
  },
  {
    id: 99,
    question: "What is MongoDB $all operator?",
    answer:
      "The $all operator in MongoDB matches documents where an array field contains all the specified elements. This allows you to query for documents based on the presence of multiple values in an array, making it easy to find documents that meet all your criteria.",
    realTimeExample:
      "The $all operator is like checking off items on a shopping list. You can find all documents where an array contains all the items you need, ensuring that you get exactly what you’re looking for, just like checking off items helps you complete your shopping efficiently.",
    realTimeExample2:
      "Imagine the $all operator as a checklist for your documents. You can find documents where an array contains all the required elements, such as all documents with an array that includes both 'red' and 'blue', ensuring that your data meets all your criteria, just like a checklist helps you ensure that everything is in order.",
  },
  {
    id: 100,
    question: "What is MongoDB $elemMatch operator?",
    answer:
      "The $elemMatch operator in MongoDB matches documents where an array field contains at least one element that matches all the specified query criteria. This allows you to query for documents based on complex conditions within their arrays, making it easy to find documents with specific array elements.",
    realTimeExample:
      "The $elemMatch operator is like searching for a specific type of fruit in a basket. You can find all baskets that contain at least one fruit that is both red and ripe, ensuring that you get exactly the baskets you want, just like $elemMatch helps you find documents with array elements that match your criteria.",
    realTimeExample2:
      "Imagine the $elemMatch operator as a filter for your documents. You can find documents where an array contains at least one element that matches all your conditions, such as all documents with an array that includes an element with both a specific name and value, ensuring that you find the documents that meet your exact requirements, just like a filter helps you focus on what’s important.",
  },
  {
    id: 101,
    question:
      "How do you design a schema for a high-write, high-read application in MongoDB? What are the trade-offs?",
    answer:
      "Designing a schema for high-write, high-read applications in MongoDB requires balancing read performance, write performance, and data consistency. Key strategies include denormalization, sharding, indexing, capped collections, and adjusting read/write concerns. Trade-offs include increased storage and update complexity with denormalization, and operational complexity with sharding.",
    realTimeExample:
      "For a social media platform, you might denormalize user profiles and posts, shard by user ID, and use capped collections for activity logs. This balances fast reads for user feeds and scalability for millions of writes.",
    realTimeExample2:
      "Imagine a real-time analytics dashboard where you denormalize metrics for fast reads, but use change streams to keep denormalized data in sync, ensuring both performance and consistency.",
  },
  {
    id: 102,
    question:
      "How do you ensure data consistency across a sharded cluster in MongoDB?",
    answer:
      "Ensuring data consistency in a sharded MongoDB cluster involves using majority write and read concerns, distributed transactions for multi-document operations, and application-level logic for eventual consistency. Monitoring with oplog and change streams helps detect and resolve inconsistencies.",
    realTimeExample:
      "In a financial application, use majority write and read concerns for account balances, and distributed transactions for fund transfers between accounts on different shards.",
    realTimeExample2:
      "Imagine a global e-commerce platform where you use majority write concern for inventory updates and change streams to sync inventory across regions, ensuring consistency even during network partitions.",
  },
  {
    id: 103,
    question:
      "Explain how you would optimize a slow aggregation pipeline in MongoDB.",
    answer:
      "Optimizing a slow aggregation pipeline involves indexing fields used in $match, $sort, and $group stages, placing $match early to reduce the document set, using $project to limit fields, and enabling allowDiskUse for large datasets. Sharding can parallelize aggregation work.",
    realTimeExample:
      "For a sales analytics pipeline, index by date and product ID, filter early with $match, and use $project to only include necessary fields, reducing the working set and improving performance.",
    realTimeExample2:
      "Imagine a log analysis pipeline where you use $match to filter logs by time range first, then $group by error type, and $project to only include error counts, making the pipeline much faster.",
    syntax:
      "db.collection.aggregate([{ $match: { date: { $gte: ISODate('2025-01-01') } } }, { $group: { _id: '$errorType', count: { $sum: 1 } } }])",
  },
  {
    id: 104,
    question:
      "How do you handle large binary data (e.g., images, videos) in MongoDB?",
    answer:
      "For large binary data, use GridFS, which splits files into chunks and stores each chunk as a separate document. GridFS uses two collections: fs.files (metadata) and fs.chunks (binary data), and supports streaming and range queries.",
    realTimeExample:
      "For a video-sharing platform, store video metadata in fs.files and the video chunks in fs.chunks, enabling efficient streaming and partial downloads.",
    realTimeExample2:
      "Imagine a medical imaging system where you store large MRI scans in GridFS, allowing doctors to stream and view specific sections without downloading the entire file.",
    syntax: "const gridFSBucket = new mongodb.GridFSBucket(db);",
    codeExample: `
      const uploadStream = gridFSBucket.openUploadStream('video.mp4');
      fs.createReadStream('./video.mp4').pipe(uploadStream);
      uploadStream.on('finish', () => console.log('Upload complete'));
    `,
  },
  {
    id: 105,
    question:
      "Describe how you would implement a real-time analytics dashboard using MongoDB.",
    answer:
      "To build a real-time analytics dashboard, use change streams to listen for data changes, aggregation pipelines to compute metrics, materialized views for fast rendering, and WebSockets to push updates to the dashboard.",
    realTimeExample:
      "For a live sports scoring app, use change streams to detect score updates, aggregation to compute team stats, and WebSockets to push updates to all connected dashboards.",
    realTimeExample2:
      "Imagine a stock trading dashboard where change streams detect price changes, aggregation computes moving averages, and WebSockets update all trader dashboards in real time.",
    syntax: "const changeStream = db.collection('scores').watch();",
    codeExample: `
      const changeStream = db.collection('scores').watch();
      changeStream.on('change', (change) => {
        // Compute and push updates to dashboard
      });
    `,
  },
  {
    id: 106,
    question: "How do you secure a MongoDB deployment in production?",
    answer:
      "Securing MongoDB in production involves enabling SCRAM or x.509 authentication, using role-based access control (RBAC), encrypting data in transit (TLS) and at rest, binding to trusted IPs, and enabling auditing. Regular updates are also critical.",
    realTimeExample:
      "For a healthcare application, enable x.509 authentication, encrypt patient data at rest, and use TLS for all communications, ensuring compliance with HIPAA.",
    realTimeExample2:
      "Imagine a financial services platform where you use RBAC to limit access to sensitive collections, encrypt all PII, and audit all data access for compliance and security.",
    syntax:
      "mongod --auth --tlsMode requireTLS --tlsCertificateKeyFile /path/to/cert",
  },
  {
    id: 107,
    question:
      "How do you migrate a large, live MongoDB database with minimal downtime?",
    answer:
      "To migrate with minimal downtime, perform an initial sync with mongodump/mongorestore or mongomirror, capture ongoing changes using change streams or oplog tailing, pause writes, apply remaining changes, and switch applications to the new cluster.",
    realTimeExample:
      "For an e-commerce platform, perform an initial sync during low traffic, use change streams to capture new orders, and schedule the cutover during a maintenance window.",
    realTimeExample2:
      "Imagine a global SaaS application where you use oplog tailing to sync changes between data centers, ensuring users experience no interruption during the migration.",
    syntax: "mongodump --db mydb --out /backup/mydb",
  },
  {
    id: 108,
    question:
      "How do you monitor and tune the performance of a MongoDB cluster?",
    answer:
      "Monitoring and tuning involves using mongostat, mongotop, and MongoDB Atlas/Cloud Manager for real-time metrics, analyzing slow queries with explain() and indexStats, monitoring hardware resources, ensuring even shard distribution, and adjusting configuration settings like wiredTigerCacheSizeGB.",
    realTimeExample:
      "For a high-traffic API, use mongostat to detect slow queries, add missing indexes, and increase cache size to reduce disk I/O.",
    realTimeExample2:
      "Imagine a gaming leaderboard where you monitor query performance, add indexes for common score queries, and adjust cache size to handle spikes during tournaments.",
    syntax: "db.collection.explain('executionStats').find({})",
  },
  {
    id: 109,
    question:
      "How do you handle schema migrations in MongoDB without downtime?",
    answer:
      "For zero-downtime schema migrations, ensure backward compatibility, use dual writes to both old and new fields, run background scripts to update documents incrementally, and use feature flags to roll out changes gradually.",
    realTimeExample:
      "For a user profile update, add the new field, update application code to handle both old and new fields, and run a background script to populate the new field for all users.",
    realTimeExample2:
      "Imagine a product catalog where you add a new 'discount' field, update the app to handle both old and new catalog entries, and use a background job to backfill the discount for all products.",
    syntax: "db.users.updateMany({}, { $set: { newField: 'default' } })",
  },
  {
    id: 110,
    question: "How do you integrate MongoDB with AI/ML pipelines?",
    answer:
      "Integrating MongoDB with AI/ML involves exporting data using MongoDB Connector for BI or custom scripts, preprocessing data with aggregation pipelines or external tools, training models with frameworks like TensorFlow or PyTorch, and storing model outputs or embeddings in MongoDB for real-time inference. Use change streams to trigger model retraining or updates when data changes.",
    realTimeExample:
      "For a recommendation system, export user behavior data from MongoDB, preprocess it, train a recommendation model, and store the results back in MongoDB for real-time recommendations.",
    realTimeExample2:
      "Imagine a fraud detection system where you use change streams to detect new transactions, preprocess the data, run it through a fraud detection model, and store the risk score in MongoDB for real-time alerts.",
    syntax:
      "db.collection.aggregate([{ $match: { date: { $gte: ISODate('2025-01-01') } } }, { $out: 'exported_data' }])",
  },
  {
    id: 111,
    question:
      "What are MongoDB time-series collections and how do you use them?",
    answer:
      "Time-series collections in MongoDB are optimized for storing and querying sequential data points measured over time, such as IoT sensor data or application metrics. They automatically create a time-based index and support efficient range queries and data compression.",
    realTimeExample:
      "For an IoT application, store sensor readings in a time-series collection, enabling fast queries for data within a specific time range and efficient storage of high-frequency data.",
    realTimeExample2:
      "Imagine a monitoring system where you store server metrics in a time-series collection, allowing you to quickly query for CPU usage spikes or memory trends over time.",
    syntax:
      "db.createCollection('sensorData', { timeseries: { timeField: 'timestamp', metaField: 'sensorId' } })",
    codeExample: `
      db.sensorData.insertOne({
        timestamp: ISODate('2025-10-13T12:00:00Z'),
        sensorId: 'sensor1',
        value: 23.5
      });
    `,
  },
  {
    id: 112,
    question:
      "What are the best practices for using multi-document transactions in MongoDB?",
    answer:
      "Best practices for multi-document transactions include keeping transactions short and focused, avoiding user interaction within transactions, ensuring all participating collections are on the same shard for distributed transactions, and handling retries for transient errors. Use transactions only when necessary, as they impact performance.",
    realTimeExample:
      "For a banking application, use a transaction to transfer funds between accounts, ensuring both the debit and credit operations succeed or fail together.",
    realTimeExample2:
      "Imagine an inventory system where you use a transaction to update both the product stock and order status, ensuring consistency even if the system fails mid-operation.",
    syntax:
      "const session = db.getMongo().startSession(); session.startTransaction();",
    codeExample: `
      const session = db.getMongo().startSession();
      session.startTransaction();
      try {
        accounts.updateOne({ _id: 'account1' }, { $inc: { balance: -100 } }, { session });
        accounts.updateOne({ _id: 'account2' }, { $inc: { balance: 100 } }, { session });
        session.commitTransaction();
      } catch (error) {
        session.abortTransaction();
        throw error;
      } finally {
        session.endSession();
      }
    `,
  },
  {
    id: 113,
    question:
      "How do you deploy MongoDB across multiple regions for global low-latency access?",
    answer:
      "To deploy MongoDB globally, use MongoDB Atlas Global Clusters, which automatically distribute data across regions based on read/write patterns. Configure custom read/write regions, use geo-sharding for data locality, and monitor performance to ensure low latency for users worldwide.",
    realTimeExample:
      "For a global social network, deploy a MongoDB Atlas Global Cluster with read regions in North America, Europe, and Asia, ensuring users always read from the nearest region.",
    realTimeExample2:
      "Imagine a global e-commerce platform where you use geo-sharding to store user data in the region closest to the user, reducing latency for both reads and writes.",
    syntax:
      "db.adminCommand({ enableSharding: 'mydb' }); db.adminCommand({ shardCollection: 'mydb.users', key: { region: 1 } })",
  },
  {
    id: 114,
    question: "How do you write custom aggregation expressions in MongoDB?",
    answer:
      "To write custom aggregation expressions, use the $function operator to define JavaScript functions within the aggregation pipeline. This allows for complex, custom logic that isn’t possible with standard aggregation operators. Be aware of performance and security implications when using $function.",
    realTimeExample:
      "For a data science application, use $function to compute a custom similarity score between documents during aggregation.",
    realTimeExample2:
      "Imagine a recommendation engine where you use $function to calculate a custom relevance score based on user preferences and item features.",
    syntax:
      "{ $addFields: { customScore: { $function: { body: 'function() { ... }', args: [], lang: 'js' } } } }",
    codeExample: `
      db.products.aggregate([
        {
          $addFields: {
            customScore: {
              $function: {
                body: function(userPref, itemFeatures) { /* custom logic */ },
                args: ['$userPreferences', '$features'],
                lang: 'js'
              }
            }
          }
        }
      ]);
    `,
  },
  {
    id: 115,
    question: "How do you manage MongoDB deployments on Kubernetes?",
    answer:
      "To manage MongoDB on Kubernetes, use the MongoDB Enterprise Operator or community operators to automate deployment, scaling, and management of MongoDB clusters. Configure persistent volumes for data storage, use StatefulSets for stable network identities, and set up monitoring and backups for production environments.",
    realTimeExample:
      "For a cloud-native application, deploy MongoDB as a StatefulSet on Kubernetes, using the MongoDB Enterprise Operator to manage replica sets and automatic failover.",
    realTimeExample2:
      "Imagine a microservices architecture where each service has its own MongoDB instance deployed on Kubernetes, with automated scaling and backups managed by the operator.",
    syntax: "kubectl apply -f mongodb-statefulset.yaml",
  },
];

// Make data available globally
window.intermediate = intermediate;
