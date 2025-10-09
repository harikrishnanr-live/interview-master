// MySQL Advanced Level Q&A Data
let advanced = [
  {
    id: 1,
    question:
      "What are triggers in MySQL and how do they ensure data integrity?",
    answer:
      "Triggers are automatically executed SQL statements in response to database events (e.g., INSERT, UPDATE, DELETE). They enforce business rules, audit changes, or maintain derived data. Triggers run before or after the event and can access OLD (pre-change) and NEW (post-change) row values.",
    syntax:
      "DELIMITER //\nCREATE TRIGGER trigger_name [BEFORE|AFTER] [INSERT|UPDATE|DELETE] ON table_name FOR EACH ROW BEGIN -- SQL statements END //\nDELIMITER ;",
    example:
      "Example: Automatically updating an audit_log table whenever a user’s salary is changed.",
    realTimeExample:
      "Like a security camera: It records (triggers) every time a door (event) is opened (INSERT/UPDATE/DELETE).",
    codeExample: `
      DELIMITER //
      CREATE TRIGGER after_salary_update
      AFTER UPDATE ON employees
      FOR EACH ROW
      BEGIN
        INSERT INTO audit_log (employee_id, old_salary, new_salary, change_time)
        VALUES (OLD.id, OLD.salary, NEW.salary, NOW());
      END //
      DELIMITER ;
    `,
  },
  {
    id: 2,
    question: "What is ACID in database systems and why is it important?",
    answer:
      "ACID is a set of properties that guarantee reliable transaction processing: Atomicity (all-or-nothing), Consistency (valid states), Isolation (no interference), and Durability (survives crashes). ACID ensures data integrity and reliability in multi-user environments.",
    syntax: "START TRANSACTION; COMMIT; ROLLBACK;",
    example:
      "Example: Transferring money between accounts must be atomic (both debit and credit succeed or fail together).",
    realTimeExample:
      "Like a bank vault: Atomicity is the combination lock (all steps or none), consistency is the audit trail, isolation is the private room, and durability is the fireproof safe.",
  },
  {
    id: 3,
    question: "What is the difference between WHERE and HAVING clauses?",
    answer:
      "WHERE filters rows before grouping (cannot use aggregate functions). HAVING filters groups after GROUP BY (can use aggregate functions). Use WHERE for row-level filtering and HAVING for group-level filtering.",
    syntax: "WHERE condition; HAVING aggregate_function_condition;",
    example:
      "Example: WHERE salary > 50000 filters rows; HAVING COUNT(*) > 5 filters departments with more than 5 employees.",
    realTimeExample:
      "WHERE is like checking IDs at a door (rows). HAVING is like counting people in a room (groups) and only keeping rooms with >5 people.",
    codeExample: `
      SELECT department, COUNT(*) AS employees
      FROM employees
      WHERE salary > 50000
      GROUP BY department
      HAVING employees > 5;
    `,
  },
  {
    id: 4,
    question: "What are views in MySQL and how do they improve security?",
    answer:
      "Views are virtual tables defined by a SQL query. They simplify complex queries, restrict data access (e.g., show only certain columns), and provide abstraction (hide schema changes). Views don’t store data; they dynamically generate results when queried.",
    syntax: "CREATE VIEW view_name AS SELECT query;",
    example:
      "Example: A view employee_directory that excludes sensitive columns like salary.",
    realTimeExample:
      "Like a museum exhibit: You see (query) only what’s on display (view), not the entire collection (table).",
    codeExample: `
      CREATE VIEW public_employees AS
      SELECT id, name, department
      FROM employees;
      -- Users can only see id, name, and department
    `,
  },
  {
    id: 5,
    question:
      "What is the EXPLAIN statement and how do you interpret its output?",
    answer:
      "EXPLAIN shows the query execution plan, including join types (e.g., ALL = full scan, ref = index lookup), estimated rows examined, indexes used, and extra info (e.g., Using filesort = slow sorting). Use it to identify bottlenecks (e.g., missing indexes).",
    syntax: "EXPLAIN SELECT query;",
    example:
      "Example: EXPLAIN SELECT * FROM users WHERE age > 30; checks if an index is used for age.",
    realTimeExample:
      "Like a GPS route preview: It shows (EXPLAIN) the path (execution plan) before you drive (execute the query).",
    codeExample: `
      EXPLAIN SELECT name FROM employees WHERE department = 'IT';
      -- Look for "type: ref" (index used) vs. "type: ALL" (full scan)
    `,
  },
  {
    id: 6,
    question: "How do you optimize a slow-running MySQL query?",
    answer: [
      "Use EXPLAIN to identify bottlenecks.",
      "Add indexes on WHERE, JOIN, and ORDER BY columns.",
      "Avoid SELECT *; fetch only needed columns.",
      "Limit result sets with LIMIT.",
      "Denormalize if joins are too expensive.",
      "Use query caching for repeated reads.",
      "Partition large tables by range or hash."
    ],
    syntax: "EXPLAIN, CREATE INDEX, LIMIT, PARTITION BY",
    example: "Example: Adding an index on email for a slow user lookup query.",
    realTimeExample:
      "Like tuning a car: You adjust (indexes), remove weight (SELECT *), and streamline (LIMIT) for speed (performance).",
    codeExample: `
      -- Before optimization
      EXPLAIN SELECT * FROM users WHERE email LIKE '%@gmail.com';
      -- After: Add index and limit columns
      CREATE INDEX idx_email ON users(email);
      SELECT id, name FROM users WHERE email LIKE '%@gmail.com' LIMIT 100;
    `,
  },
  {
    id: 7,
    question: "What is a covering index in MySQL and how does it work?",
    answer:
      "A covering index is an index that includes all columns needed for a query, allowing MySQL to retrieve data directly from the index without accessing the table (index-only scan). This drastically improves performance for read-heavy queries.",
    syntax: "CREATE INDEX index_name ON table_name (column1, column2, ...);",
    example:
      "Example: An index on (department, salary) covers SELECT salary FROM employees WHERE department = 'IT'.",
    realTimeExample:
      "Like a library catalog card: It contains all the info (columns) you need, so you don’t have to fetch the book (table).",
    codeExample: `
      -- Covering index for this query:
      SELECT name, salary FROM employees WHERE department = 'Engineering';
      CREATE INDEX idx_dept_salary ON employees(department, salary, name);
    `,
  },
  {
    id: 8,
    question: "How do you use the MySQL query cache effectively?",
    answer: [
      "The query cache stores results of SELECT queries to speed up repeated identical queries.",
      "To use it: Enable with query_cache_type=1 and set query_cache_size.",
      "Avoid caching dynamic queries (e.g., with NOW()).",
      "Monitor cache hit ratio with SHOW STATUS LIKE 'Qcache%'.",
      "Note: Disabled by default in MySQL 8.0+."
    ],
    syntax:
      "SET GLOBAL query_cache_type=1; SET GLOBAL query_cache_size=1048576;",
    example:
      "Example: Caching results for a dashboard query that runs every minute.",
    realTimeExample:
      "Like a café’s display case: Frequently ordered items (queries) are kept ready (cached) for quick service.",
    codeExample: `
      SET GLOBAL query_cache_type = 1;
      SET GLOBAL query_cache_size = 1000000; -- 1MB cache
      -- Check cache stats:
      SHOW STATUS LIKE 'Qcache%';
    `,
  },
  {
    id: 9,
    question:
      "What is the difference between MyISAM and InnoDB storage engines?",
    answer:
      "MyISAM: No transactions, table-level locking, faster reads, full-text search. InnoDB: Transactions (ACID), row-level locking, foreign keys, crash recovery. Use MyISAM for read-only tables and InnoDB for transactional applications.",
    syntax: "ENGINE=MyISAM, ENGINE=InnoDB",
    example:
      "Example: Converting a MyISAM table to InnoDB for transaction support.",
    realTimeExample:
      "MyISAM is like a read-only encyclopedia. InnoDB is like a bank ledger with edits and transactions.",
  },
  {
    id: 10,
    question: "How do you implement full-text search in MySQL?",
    answer: [
      "Full-text search enables efficient text-based queries using MATCH ... AGAINST.",
      "Steps: Create a FULLTEXT index on text columns.",
      "Use MATCH(column) AGAINST('search_term') in queries.",
      "Supports natural language (relevance-ranked) and boolean (exact) modes.",
      "Note: Requires MyISAM or InnoDB (MySQL 5.6+) tables."
    ],
    syntax:
      "CREATE FULLTEXT INDEX idx_name ON table_name(column); MATCH(column) AGAINST('term' [IN NATURAL LANGUAGE MODE|IN BOOLEAN MODE]);",
    example:
      "Example: Searching for articles containing ‘database optimization’.",
    realTimeExample:
      "Like Google Search: It indexes (FULLTEXT) words (text) for fast, relevance-ranked results (MATCH ... AGAINST).",
    codeExample: `
      -- Create full-text index
      ALTER TABLE articles ADD FULLTEXT(content);
      -- Search in natural language mode
      SELECT title, MATCH(content) AGAINST('database optimization') AS relevance
      FROM articles
      WHERE MATCH(content) AGAINST('database optimization');
    `,
  },
  {
    id: 11,
    question: "What are MySQL partitions and when should you use them?",
    answer:
      "Partitions divide large tables into smaller, manageable pieces based on rules (e.g., range, list, hash). Use partitions to improve query performance (scan only relevant partitions), simplify maintenance (e.g., drop old data by partition), and distribute I/O across multiple disks. Best for tables with millions of rows and clear partitioning logic (e.g., by date).",
    syntax: `
      CREATE TABLE table_name (
        columns
      )
      PARTITION BY [RANGE|LIST|HASH](column)
      (
        PARTITION partition_name VALUES LESS THAN|IN|(...),
        ...
      );
    `,
    example:
      "Example: Partitioning sales data by year for faster monthly reports.",
    realTimeExample:
      "Like dividing a book into chapters: You only read (query) the chapter (partition) you need.",
    codeExample: `
      CREATE TABLE sales (
        id INT,
        sale_date DATE,
        amount DECIMAL(10,2)
      )
      PARTITION BY RANGE (YEAR(sale_date)) (
        PARTITION p2020 VALUES LESS THAN (2021),
        PARTITION p2021 VALUES LESS THAN (2022),
        PARTITION pmax VALUES LESS THAN MAXVALUE
      );
    `,
  },
  {
    id: 12,
    question: "How do you set up MySQL replication for high availability?",
    answer: [
      "MySQL replication copies data from a master to one or more slaves, improving availability and read scalability.",
      "Steps: Configure the master: Set server-id, enable binary logging (log_bin).",
      "Create a replication user on the master.",
      "Configure the slave: Set server-id, relay-log.",
      "Start replication on the slave with START SLAVE.",
      "Monitor with SHOW SLAVE STATUS."
    ],
    syntax: `
      -- Master config (my.cnf):
      server-id = 1
      log_bin = /var/log/mysql/mysql-bin.log
      binlog_do_db = database_name

      -- Slave config (my.cnf):
      server-id = 2
      relay-log = /var/log/mysql/mysql-relay-bin.log

      -- Commands:
      CHANGE MASTER TO MASTER_HOST='master_ip', MASTER_USER='replica_user', MASTER_PASSWORD='password';
      START SLAVE;
    `,
    example: "Example: Setting up a slave for read scaling in a web app.",
    realTimeExample:
      "Like a photocopy machine: The master (original) is copied (replicated) to slaves (copies) for backup and distribution.",
  },
  {
    id: 13,
    question: "What is a deadlock in MySQL and how do you resolve it?",
    answer:
      "A deadlock occurs when two or more transactions wait indefinitely for locks held by each other. MySQL automatically detects and resolves deadlocks by rolling back one transaction. Prevention tips: Design transactions to acquire locks in a consistent order, keep transactions short, avoid user interaction mid-transaction, and use lower isolation levels (e.g., READ COMMITTED). Diagnosis: Use SHOW ENGINE INNODB STATUS to analyze deadlocks.",
    syntax:
      "SHOW ENGINE INNODB STATUS; SET TRANSACTION ISOLATION LEVEL READ COMMITTED;",
    example: [
      "Transaction A locks row 1 and waits for row 2",
      "Transaction B locks row 2 and waits for row 1"
    ],
    realTimeExample:
      "Like a traffic gridlock: Cars (transactions) block each other, and traffic police (MySQL) intervene to clear the jam (rollback).",
  },
  {
    id: 14,
    question: "How do you implement row-level locking in MySQL?",
    answer: [
      "Row-level locking (used by InnoDB) allows multiple transactions to access different rows simultaneously, improving concurrency.",
      "To use it: Use InnoDB tables (default in MySQL 8.0+).",
      "Ensure transactions are short and efficient.",
      "Avoid long-running queries that hold locks.",
      "Use SELECT ... FOR UPDATE to manually lock rows for writing."
    ],
    syntax: "SELECT ... FOR UPDATE; BEGIN; COMMIT;",
    example:
      "Example: Locking a user’s row during a balance update to prevent concurrent modifications.",
    realTimeExample:
      "Like reserving a seat: Only one person (transaction) can modify (lock) a seat (row) at a time.",
    codeExample: `
      START TRANSACTION;
      -- Lock the user's row for update
      SELECT * FROM accounts WHERE id = 1 FOR UPDATE;
      -- Update balance
      UPDATE accounts SET balance = balance - 100 WHERE id = 1;
      COMMIT;
    `,
  },
  {
    id: 15,
    question: "What is the binary log in MySQL and how is it used?",
    answer:
      "The binary log (binlog) records all data changes (INSERT/UPDATE/DELETE) for replication and recovery. It’s essential for replication (slaves read the master’s binlog) and point-in-time recovery. Configure with log_bin in my.cnf. View logs with mysqlbinlog.",
    syntax: `
      -- my.cnf
      log_bin = /var/log/mysql/mysql-bin.log
      binlog_format = ROW

      -- Commands
      SHOW BINARY LOGS;
      FLUSH BINARY LOGS;
      mysqlbinlog /var/log/mysql/mysql-bin.000001
    `,
    example:
      "Example: Recovering data after an accidental DELETE using binlog events.",
    realTimeExample:
      "Like a flight black box: It records (binlog) every action (query) for later analysis (recovery/replication).",
  },
  {
    id: 16,
    question: "How do you perform point-in-time recovery in MySQL?",
    answer: [
      "Point-in-time recovery (PITR) restores data to a specific moment using binary logs.",
      "Steps: Restore the latest backup.",
      "Apply binary logs up to the desired time: mysqlbinlog --start-datetime='2023-01-01 12:00:00' /var/log/mysql/mysql-bin.000001 | mysql -u root -p.",
      "Verify data integrity."
    ],
    syntax: "mysqlbinlog, --start-datetime, --stop-datetime, FLUSH BINARY LOGS",
    example:
      "Example: Recovering a database to the state just before a corrupt UPDATE.",
    realTimeExample:
      "Like rewinding a DVR: You restore (backup) to a point and replay (binlog) up to the exact moment (datetime) you need.",
  },
  {
    id: 17,
    question: "What is the InnoDB buffer pool and how do you tune it?",
    answer: [
      "The InnoDB buffer pool is a memory area that caches data and indexes to reduce disk I/O.",
      "Tuning it: Set innodb_buffer_pool_size to 50-70% of available RAM (e.g., 4GB on an 8GB server).",
      "Monitor hit ratio with SHOW ENGINE INNODB STATUS.",
      "Adjust innodb_buffer_pool_instances (default: 8) for large pools (>1GB).",
      "Aim for a hit ratio > 95% (cache efficiency)."
    ],
    syntax: "innodb_buffer_pool_size, SHOW ENGINE INNODB STATUS",
    example:
      "Example: Increasing buffer pool size for a high-traffic e-commerce site.",
    realTimeExample:
      "Like a library’s reading room: Frequently accessed books (data) are kept on tables (buffer pool) for quick access.",
  },
  {
    id: 18,
    question: "How do you monitor MySQL performance metrics?",
    answer: [
      "Monitor MySQL performance using: SHOW STATUS: Global server metrics (e.g., Com_select, Innodb_rows_read).",
      "SHOW PROCESSLIST: Active connections and queries.",
      "Performance Schema: Detailed low-level metrics (enabled by default in MySQL 5.6+).",
      "Slow Query Log: Logs queries exceeding long_query_time.",
      "Third-party tools: Percona PMM, MySQL Workbench, Prometheus + Grafana."
    ],
    syntax: `
      SHOW GLOBAL STATUS LIKE 'Com_%';
      SHOW PROCESSLIST;
      SELECT * FROM performance_schema.events_waits_current;
      SET GLOBAL slow_query_log = ON;
    `,
    example: "Example: Identifying slow queries with the slow query log.",
    realTimeExample:
      "Like a car dashboard: You monitor (SHOW STATUS) speed (queries/sec), fuel (buffer pool), and engine health (Performance Schema).",
  },
  {
    id: 19,
    question: "What is the slow query log and how do you analyze it?",
    answer: [
      "The slow query log records queries exceeding long_query_time (default: 10 seconds).",
      "To analyze it: Enable the log: SET GLOBAL slow_query_log = ON; SET GLOBAL long_query_time = 2;",
      "Use mysqldumpslow or pt-query-digest (Percona Toolkit) to summarize logs: mysqldumpslow -s t -t 10 /var/log/mysql/mysql-slow.log.",
      "Optimize identified queries (e.g., add indexes)."
    ],
    syntax: "slow_query_log, long_query_time, mysqldumpslow, pt-query-digest",
    example: "Example: Finding and optimizing a slow JOIN query from the log.",
    realTimeExample:
      "Like a speed camera: It records (logs) queries that exceed the speed limit (long_query_time).",
  },
  {
    id: 20,
    question: "How do you use the Performance Schema in MySQL?",
    answer: [
      "Performance Schema is a low-level monitoring tool for server events (e.g., queries, locks, I/O).",
      "To use it: Check if enabled: SHOW VARIABLES LIKE 'performance_schema';",
      "Query tables like events_waits_current for real-time metrics.",
      "Use setup_consumers and setup_instruments to configure monitoring.",
      "Example use cases: Identify lock contention, slow queries, or I/O bottlenecks."
    ],
    syntax: `
      SHOW VARIABLES LIKE 'performance_schema';
      SELECT * FROM performance_schema.events_waits_current;
      UPDATE performance_schema.setup_consumers SET ENABLED = 'YES' WHERE NAME LIKE '%wait%';
    `,
    example: "Example: Monitoring lock waits to diagnose deadlocks.",
    realTimeExample:
      "Like a black box recorder: It captures (events) every detail (query/lock) for analysis (performance tuning).",
  },
  {
    id: 21,
    question: "What are the best practices for MySQL indexing?",
    answer: [
      "Index columns used in WHERE, JOIN, and ORDER BY clauses.",
      "Use composite indexes for multiple columns (order matters: leftmost prefix rule).",
      "Avoid over-indexing: Each index slows down writes.",
      "Use covering indexes to avoid table lookups.",
      "Monitor index usage with SHOW INDEX and EXPLAIN.",
      "Consider index types: B-tree (default), Hash (memory tables), Full-text (text search).",
      "Drop unused indexes to reduce overhead."
    ],
    syntax: "CREATE INDEX, SHOW INDEX, DROP INDEX, EXPLAIN",
    example:
      "Example: Creating a composite index on (last_name, first_name) for a common query pattern.",
    realTimeExample:
      "Like a library catalog: You index (create indexes) by author (WHERE), title (JOIN), and publication date (ORDER BY) for fast lookups.",
  },
  {
    id: 22,
    question: "How do you implement sharding in MySQL?",
    answer: [
      "Sharding horizontally partitions data across multiple servers (shards) to improve scalability.",
      "Steps: Choose a shard key (e.g., user_id modulo N).",
      "Distribute data evenly across shards.",
      "Use a proxy (e.g., ProxySQL, Vitess) or application logic to route queries.",
      "Handle cross-shard queries carefully (e.g., joins).",
      "Tools: MySQL Fabric, Vitess, or custom application logic."
    ],
    syntax: "Shard key: user_id % 4, ProxySQL, Vitess",
    example: "Example: Sharding a users table by user_id % 4 across 4 servers.",
    realTimeExample:
      "Like dividing a pizza into slices: Each shard (slice) holds a portion of the data (pizza), and the proxy (server) delivers the right slice (query result).",
  },
  {
    id: 23,
    question:
      "What is the difference between vertical and horizontal scaling in MySQL?",
    answer:
      "Vertical scaling upgrades server resources (CPU, RAM) for better performance. Horizontal scaling adds more servers (sharding, replication) to distribute load. Vertical is simpler but has a single point of failure; horizontal is complex but fault-tolerant. Use vertical for small/medium workloads and horizontal for high-traffic, large-scale applications.",
    syntax: "innodb_buffer_pool_size, ProxySQL, Vitess",
    example:
      "Example: Using Vitess to horizontally scale a social media database.",
    realTimeExample:
      "Vertical scaling is like upgrading a car’s engine. Horizontal scaling is like adding more cars to a fleet.",
  },
  {
    id: 24,
    question: "How do you set up a MySQL cluster for high availability?",
    answer: [
      "A MySQL cluster (e.g., InnoDB Cluster or NDB Cluster) provides high availability and scalability.",
      "Steps for InnoDB Cluster: Deploy MySQL Servers (3+ nodes).",
      "Set up Group Replication for synchronous multi-master replication.",
      "Add MySQL Router to route queries to the cluster.",
      "Use MySQL Shell to manage the cluster.",
      "Tools: MySQL InnoDB Cluster, NDB Cluster (for real-time apps)."
    ],
    syntax: `
      -- Install MySQL Shell and create cluster
      dba.createCluster('myCluster');
      -- Add instances
      cluster.addInstance('user@host:3306');
      -- Deploy MySQL Router
    `,
    example:
      "Example: Setting up a 3-node InnoDB Cluster for a global e-commerce platform.",
    realTimeExample:
      "Like a RAID array: Data (cluster) is distributed across drives (nodes) for redundancy (high availability) and speed (scalability).",
  },
  {
    id: 25,
    question: "What is the NDB storage engine in MySQL?",
    answer:
      "NDB (Network Database) is a high-availability, in-memory storage engine designed for real-time applications (e.g., telecom, gaming). Key features: Synchronous replication across nodes, automatic sharding, 99.999% availability, and SQL/NoSQL access. Use cases: High-throughput, low-latency applications. Limitations: Requires all data to fit in memory; complex setup.",
  },
  {
    id: 26,
    question: "How do you configure MySQL for read-heavy workloads?",
    answer: [
      "Optimize MySQL for read-heavy workloads (e.g., reporting, analytics) with: Use MyISAM for read-only tables (if no transactions needed).",
      "Increase key_buffer_size (for MyISAM index caching).",
      "Enable query cache (query_cache_type=1).",
      "Add read replicas to distribute read load.",
      "Use covering indexes to avoid table scans.",
      "Tune innodb_buffer_pool_size (even for MyISAM, it caches InnoDB metadata).",
      "Schedule backups during low-traffic periods."
    ],
    syntax: `
      key_buffer_size = 1G
      query_cache_size = 256M
      query_cache_type = 1
      innodb_buffer_pool_size = 4G
    `,
    example:
      "Example: Configuring a reporting database with 10x more reads than writes.",
    realTimeExample:
      "Like a library: You optimize (cache/index) for readers (SELECT queries) and minimize disruptions (writes).",
  },
  {
    id: 27,
    question: "What is the thread pool in MySQL and how do you configure it?",
    answer: [
      "The thread pool (available in Percona Server or MySQL Enterprise) reduces overhead by reusing threads for multiple connections, improving scalability under high concurrency.",
      "Configure with: thread_pool_size: Number of thread groups (default: auto).",
      "thread_pool_max_threads: Max threads per group (default: 1000).",
      "thread_pool_stall_limit: Time (ms) to wait for a free thread (default: 500).",
      "Note: Not available in standard MySQL Community Edition."
    ],
    syntax:
      "thread_pool_size, thread_pool_max_threads, thread_pool_stall_limit",
    example:
      "Example: Configuring a thread pool for a web server handling 10,000 connections.",
    realTimeExample:
      "Like a call center: Threads (agents) are reused (pooled) to handle multiple calls (connections) efficiently.",
  },
  {
    id: 28,
    question: "How do you handle large BLOB or TEXT data in MySQL?",
    answer: [
      "For large BLOB/TEXT data (e.g., images, JSON): Store in separate tables to avoid bloating main tables.",
      "Use MEDIUMBLOB/LONGBLOB for data >64KB.",
      "Compress data with COMPRESS()/UNCOMPRESS().",
      "Store externally: Save only file paths in MySQL; store files on disk/CDN.",
      "Stream data: Fetch in chunks with SELECT SUBSTRING(blob_column, 1, 1024).",
      "Index metadata: Add columns for searchable attributes (e.g., image_type)."
    ],
    syntax: "BLOB, TEXT, MEDIUMBLOB, LONGBLOB, COMPRESS(), UNCOMPRESS()",
    example:
      "Example: Storing user-uploaded videos with metadata in a separate user_media table.",
    realTimeExample:
      "Like a warehouse: You store large items (BLOBs) in a separate area (table) and keep an inventory list (metadata) in the main office (table).",
  },
  {
    id: 29,
    question:
      "What is the difference between MySQL replication and clustering?",
    answer:
      "Replication copies data from master to slaves (async) for data redundancy and read scaling. Clustering groups servers to act as a single system (sync) for high availability and write scaling. Replication is simpler but only scales reads; clustering is complex but scales reads/writes and provides automatic failover.",
  },
  {
    id: 30,
    question: "How do you implement a read/write split in MySQL?",
    answer: [
      "Read/write split directs read queries to replicas and write queries to the master, improving performance.",
      "Implement with: Application-level routing: Configure connection pools for reads/writes.",
      "ProxySQL: Route queries based on rules (e.g., SELECT → replicas).",
      "MySQL Router: Part of InnoDB Cluster, routes reads to replicas.",
      "Best practices: Monitor replica lag (SHOW SLAVE STATUS), use connection pooling (e.g., HikariCP), and handle failover gracefully."
    ],
    syntax: "ProxySQL, MySQL Router, connection pooling",
    example:
      "Example: Using ProxySQL to route SELECT queries to 3 replicas and INSERT/UPDATE to the master.",
    realTimeExample:
      "Like a library: You read (SELECT) books (replicas) anywhere but return (UPDATE) them to the main desk (master).",
  },
  {
    id: 31,
    question:
      "What is the binlog format in MySQL and how do you choose the right one?",
    answer: [
      "The binary log (binlog) format determines how changes are recorded: STATEMENT: Logs SQL statements (compact, but unsafe for some functions like UUID()).",
      "ROW: Logs row changes (default in MySQL 8.0+, safe but larger).",
      "MIXED: Uses STATEMENT for safe queries, ROW otherwise.",
      "Choose ROW for replication, point-in-time recovery, or when using functions like UUID().",
      "Choose STATEMENT for simple environments with no unsafe functions."
    ],
    syntax: "binlog_format = ROW|STATEMENT|MIXED",
    example:
      "Example: Setting binlog_format=ROW for a replicated database with UUID().",
    realTimeExample:
      "STATEMENT is like writing instructions (e.g., ‘add 1 to X’). ROW is like recording the before/after values (e.g., ‘X was 5, now 6’).",
  },
  {
    id: 32,
    question: "How do you use the MySQL Performance Schema to diagnose issues?",
    answer: [
      "Performance Schema provides low-level metrics for queries, locks, and I/O.",
      "Steps to diagnose issues: Check enabled instruments: SELECT * FROM performance_schema.setup_instruments;",
      "Monitor current waits: SELECT * FROM performance_schema.events_waits_current;",
      "Analyze long-running queries: SELECT * FROM performance_schema.events_statements_summary_by_digest ORDER BY SUM_TIMER_WAIT DESC;",
      "Enable/disable consumers: UPDATE performance_schema.setup_consumers SET ENABLED = 'YES' WHERE NAME LIKE '%wait%';"
    ],
    syntax: "performance_schema, setup_instruments, events_waits_current",
    example: "Example: Identifying lock contention in a high-traffic app.",
    realTimeExample:
      "Like a car’s diagnostic tool: It reads (Performance Schema) real-time data (events) to find engine issues (bottlenecks).",
  },
  {
    id: 33,
    question:
      "What is the MySQL optimizer and how does it choose execution plans?",
    answer: [
      "The MySQL optimizer determines the most efficient way to execute a query by: Parsing the query into an internal structure.",
      "Generating possible execution plans (e.g., join orders, index usage).",
      "Estimating costs for each plan (based on statistics).",
      "Choosing the lowest-cost plan.",
      "Influencing factors: Indexes, table statistics, join types, and query hints (e.g., FORCE INDEX).",
      "Debug with: EXPLAIN, OPTIMIZER_TRACE."
    ],
  },
  {
    id: 34,
    question: "How do you use hints to influence the MySQL optimizer?",
    answer:
      "Hints are instructions to the optimizer to override its default choices. Common hints: FORCE INDEX(index_name): Use a specific index. IGNORE INDEX(index_name): Avoid an index. JOIN_FIXED_ORDER: Preserve table join order. SQL_CALC_FOUND_ROWS: Count rows without LIMIT. Use sparingly: Hints can become outdated as data changes.",
    syntax: "FORCE INDEX, IGNORE INDEX, JOIN_FIXED_ORDER",
    example: "Example: Forcing a join order for a complex query.",
    realTimeExample:
      "Like giving directions: You suggest (hint) a specific route (index) to a driver (optimizer) who might otherwise choose a slower path.",
  },
  {
    id: 35,
    question: "What is the MySQL query rewrite plugin and how do you use it?",
    answer: [
      "The query rewrite plugin intercepts and modifies queries before execution.",
      "Use cases: Fixing deprecated syntax (e.g., TYPE=InnoDB → ENGINE=InnoDB), adding hints (e.g., FORCE INDEX), or rewriting schema names for multi-tenancy.",
      "Steps: Install the plugin: INSTALL PLUGIN rewrite_query SONAME 'rewrite_query.so';",
      "Add rewrite rules to rewrite_rules table.",
      "Enable with SET GLOBAL rewrite_query_enabled=1;"
    ],
    syntax: "INSTALL PLUGIN rewrite_query, rewrite_rules table",
    example:
      "Example: Automatically adding FORCE INDEX to queries on a specific table.",
    realTimeExample:
      "Like a mailroom: It intercepts (rewrite plugin) letters (queries) and redirects (rewrites) them as needed.",
  },
  {
    id: 36,
    question: "How do you implement multi-tenancy in MySQL?",
    answer: [
      "Multi-tenancy strategies for MySQL: Separate Databases: One database per tenant (high isolation, easy backups).",
      "Shared Database, Separate Schemas: One schema per tenant.",
      "Shared Schema with Tenant ID: Add tenant_id to all tables (scalable, but requires row-level security).",
      "Query Rewrite Plugin: Dynamically rewrite queries to include tenant_id.",
      "Best practices: Use connection pooling per tenant.",
      "Implement row-level security (e.g., views with WHERE tenant_id = current_tenant()).",
      "Monitor performance per tenant."
    ],
    syntax: "tenant_id column, row-level security, connection pooling",
    example:
      "Example: Using a shared schema with tenant_id and row-level security.",
    realTimeExample:
      "Like an apartment building: Separate databases are like individual units (high isolation), while shared schemas are like shared floors with private rooms (tenant_id).",
  },
  {
    id: 37,
    question:
      "What is the MySQL Enterprise Audit plugin and how do you use it?",
    answer: [
      "The Enterprise Audit plugin logs database activity (e.g., logins, queries, schema changes) for compliance and security.",
      "Steps: Install the plugin: INSTALL PLUGIN audit_log SONAME 'audit_log.so';",
      "Configure audit policies in audit_log_filter: INSERT INTO mysql.audit_log_filter (NAME, FILTER) VALUES ('log_connections', '{ \"filter\": { \"class\": { \"name\": \"connection\" } } }');",
      "Enable auditing: SET GLOBAL audit_log_enabled = ON;",
      "View logs in the audit log file (default: audit.log)."
    ],
  },
  {
    id: 38,
    question: "How do you secure MySQL against SQL injection?",
    answer: [
      "Prepared Statements (parameterized queries): PREPARE stmt FROM 'SELECT * FROM users WHERE id = ?';",
      "Stored Procedures: Encapsulate logic in the database.",
      "Input Validation: Reject or sanitize user input.",
      "Least Privilege: Grant only necessary permissions.",
      "ORM Frameworks: Use tools like Hibernate or SQLAlchemy.",
      "Disable Dynamic SQL: Avoid concatenating SQL strings.",
      "Example of vulnerability: SELECT * FROM users WHERE name = '$user_input';"
    ],
  },
  {
    id: 39,
    question: "What is the MySQL Enterprise Firewall and how does it work?",
    answer: [
      "Learning Mode: Analyzes and whitelists normal query patterns.",
      "Protecting Mode: Blocks queries not in the whitelist.",
      "Auditing: Logs blocked queries for review.",
      "Steps to enable:",
      "Install the plugin: INSTALL PLUGIN mysql_firewall SONAME 'mysql_firewall.so';",
      "Configure users: CALL mysql.sp_set_firewall_mode('user@host', 'PROTECTING');",
      "Monitor with mysql_firewall_users and mysql_firewall_whitelist."
    ],
  },
  {
    id: 40,
    question: "How do you implement row-level security in MySQL?",
    answer: [
      "Row-level security (RLS) restricts data access at the row level based on user attributes.",
      "Implement with: Views with WHERE clauses: CREATE VIEW my_data AS SELECT * FROM data WHERE tenant_id = SUBSTRING_INDEX(USER(), '@', 1);",
      "Stored Procedures: Encapsulate logic with user checks.",
      "Application Logic: Filter rows in the app code.",
      "ProxySQL: Route queries with RLS rules.",
      "MySQL 8.0+: Use CREATE POLICY (if available in your fork, e.g., MariaDB)."
    ],
  },
  {
    id: 41,
    question: "What is the MySQL Document Store and how do you use it?",
    answer: [
      "MySQL Document Store allows storing and querying JSON documents alongside relational data.",
      "Key features: JSON Data Type: Store and index JSON documents.",
      "X DevAPI: Modern API for document operations (CRUD, find, modify).",
      "NoSQL and SQL: Query JSON with SQL (JSON_EXTRACT) or NoSQL-style methods.",
      "Steps to use: Create a table with a JSON column: CREATE TABLE user_profiles (id INT PRIMARY KEY, data JSON);",
      "Insert JSON data: INSERT INTO user_profiles VALUES (1, '{\"name\": \"Alice\", \"preferences\": {\"theme\": \"dark\"}}');",
      "Query with JSON_EXTRACT or X DevAPI."
    ],
  },
  {
    id: 42,
    question: "How do you use JSON functions in MySQL 8.0?",
    answer:
      "MySQL 8.0 provides JSON functions to manipulate and query JSON data: JSON_EXTRACT(data, path): Extract a value (data->'$.path' shorthand). JSON_CONTAINS(data, value): Check if JSON contains a value. JSON_SEARCH(data, one, 'value'): Find the path to a value. JSON_MODIFY(data, path, value): Update a JSON field. JSON_ARRAYAGG(): Aggregate values into a JSON array. JSON_OBJECT(): Create a JSON object. Use generated columns to index JSON fields for faster queries.",
  },
  {
    id: 43,
    question: "What is the MySQL X Protocol and X DevAPI?",
    answer:
      "The X Protocol is a modern, asynchronous binary protocol for MySQL, replacing the classic text-based protocol. X DevAPI is the client interface for X Protocol, supporting: Document Store: CRUD operations on JSON documents. Relational Tables: Traditional SQL operations. Asynchronous I/O: Non-blocking queries. Connection Pooling: Efficient resource management. Use cases: Microservices, polyglot persistence, and high-concurrency apps. Languages: Node.js, Java, Python, C#, etc.",
  },
  {
    id: 44,
    question: "How do you use Common Table Expressions (CTEs) in MySQL 8.0?",
    answer:
      "CTEs (Common Table Expressions) are temporary result sets defined in a WITH clause, improving readability and performance for complex queries. Types: Non-recursive CTE: Simple subquery. Recursive CTE: For hierarchical data (e.g., org charts). Syntax: WITH cte_name AS (SELECT ...) SELECT * FROM cte_name;",
  },
  {
    id: 45,
    question: "What are window functions in MySQL 8.0 and how do you use them?",
    answer:
      "Window functions perform calculations across a set of rows related to the current row, without collapsing rows (unlike GROUP BY). Key functions: Ranking: ROW_NUMBER(), RANK(), DENSE_RANK(). Aggregate: SUM() OVER(), AVG() OVER(). Value: LAG(), LEAD(), FIRST_VALUE(). Syntax: function() OVER([PARTITION BY column] [ORDER BY column] [frame_clause]).",
  },
  {
    id: 46,
    question: "How do you use the ROW_NUMBER() window function?",
    answer: [
      "ROW_NUMBER() assigns a unique sequential integer to rows within a partition, starting at 1.",
      "Use cases: Pagination: WHERE ROW_NUMBER() BETWEEN 10 AND 20.",
      "Deduplication: Keep only the first row per group.",
      "Top-N per group: Filter with a subquery.",
      "Note: Requires an ORDER BY clause to determine row order."
    ],
  },
  {
    id: 47,
    question:
      "What is the difference between RANK(), DENSE_RANK(), and ROW_NUMBER()?",
    answer:
      "ROW_NUMBER(): Unique sequential numbers, even for ties. RANK(): Same rank for ties, with gaps (e.g., two 1st places → next is 3rd). DENSE_RANK(): Same rank for ties, no gaps. Use ROW_NUMBER() for unique identifiers, RANK() for competition rankings (e.g., sports), and DENSE_RANK() for dense rankings (e.g., percentiles).",
  },
  {
    id: 48,
    question: "How do you use LAG() and LEAD() window functions?",
    answer:
      "LAG() and LEAD() access previous (LAG) or next (LEAD) rows in the result set without a self-join. LAG(column, offset, default): Access data from a previous row. LEAD(column, offset, default): Access data from a subsequent row. Use cases: Calculating deltas, detecting trends, or filling gaps.",
  },
  {
    id: 49,
    question: "What is the WITH RECURSIVE clause in MySQL 8.0?",
    answer: [
      "WITH RECURSIVE defines a recursive Common Table Expression (CTE) for querying hierarchical data (e.g., org charts, tree structures).",
      "Structure: Base case: Non-recursive term.",
      "Recursive term: Joins to the CTE itself.",
      "Termination: Recursion stops when no rows are returned.",
      "Use cases: Organizational hierarchies, bill-of-materials, graph traversal."
    ],
  },
  {
    id: 50,
    question: "How do you use the JSON_TABLE function in MySQL 8.0?",
    answer:
      "JSON_TABLE converts JSON data into a relational table, allowing you to query nested JSON as rows/columns. Syntax: JSON_TABLE(json_expr, path COLUMNS (column_list)) AS alias. Use cases: Flattening nested JSON arrays, joining JSON data with relational tables, extracting specific fields from JSON documents.",
  },
];
// Make data available globally
window.advanced = advanced;
