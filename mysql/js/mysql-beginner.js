// MySQL Beginner Level Q&A Data

// MySQL Beginner Level Q&A Data
let beginner = [
  {
    id: 1,
    question: "What is MySQL?",
    answer:
      "MySQL is an open-source **relational database management system (RDBMS)** that uses **SQL (Structured Query Language)** to store, manage, and retrieve data efficiently.",
    syntax: "N/A",
    example:
      "Examples: WordPress, Facebook, and Twitter use MySQL for data storage.",
    realTimeExample:
      "Think of MySQL as a **digital filing cabinet**: It organizes (tables) and stores (data) your files (records) for quick access.",
  },
  {
    id: 2,
    question: "What is a primary key?",
    answer:
      "A primary key is a **column (or set of columns)** that uniquely identifies each row in a table. It **cannot be NULL** and must contain **unique values**.",
    syntax: "PRIMARY KEY, INT AUTO_INCREMENT",
    example: "Example: `id INT PRIMARY KEY AUTO_INCREMENT` in a `users` table.",
    realTimeExample:
      "Like a **student ID**: No two students (rows) can have the same ID (primary key).",
    codeExample: `
      CREATE TABLE users (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(50)
      );
    `,
  },
  {
    id: 3,
    question: "What is a foreign key?",
    answer:
      "A foreign key is a **column (or set of columns)** that references a primary key in another table, creating a **relationship** between the two tables.",
    syntax: "FOREIGN KEY, REFERENCES table_name(column_name)",
    example:
      "Example: `user_id INT, FOREIGN KEY (user_id) REFERENCES users(id)` in an `orders` table.",
    realTimeExample:
      "Like a **library book's due date card**: It links (foreign key) the book (order) to the borrower (user).",
    codeExample: `
      CREATE TABLE orders (
        order_id INT PRIMARY KEY,
        user_id INT,
        FOREIGN KEY (user_id) REFERENCES users(id)
      );
    `,
  },
  {
    id: 4,
    question: "What is the difference between CHAR and VARCHAR?",
    answer:
      "CHAR is **fixed-length** (pads with spaces), while VARCHAR is **variable-length** (stores only the data + length prefix). Use CHAR for fixed data (e.g., country codes) and VARCHAR for variable data (e.g., names).",
    syntax: "CHAR(length), VARCHAR(length)",
    example:
      "Example: `CHAR(10)` always uses 10 bytes, while `VARCHAR(10)` uses only the bytes needed.",
    realTimeExample:
      "CHAR is like a **parking spot**: It reserves space (10 bytes) even if the car (data) is small. VARCHAR is like a **stretchy bag**: It fits the item (data) exactly.",
  },
  {
    id: 5,
    question: "What are indexes in MySQL?",
    answer:
      "Indexes are **data structures** (e.g., B-trees) that improve **query speed** by allowing the database to find data without scanning the entire table. They **trade space for speed** and slow down writes.",
    syntax: "CREATE INDEX index_name ON table_name(column_name)",
    example:
      "Example: `CREATE INDEX idx_name ON users(name)` speeds up `SELECT * FROM users WHERE name = 'Alice';`.",
    realTimeExample:
      "Like a **book's index**: It helps you find (query) a topic (data) quickly without reading every page (table scan).",
    codeExample: `
      CREATE INDEX idx_email ON users(email);
      SELECT * FROM users WHERE email = 'alice@example.com'; -- Uses index
    `,
  },
  {
    id: 6,
    question: "What is SQL?",
    answer:
      "SQL (Structured Query Language) is a **standard language** for interacting with relational databases. It allows you to **create, read, update, and delete (CRUD)** data.",
    syntax: "SELECT, INSERT, UPDATE, DELETE, CREATE",
    example:
      "Example: `SELECT * FROM users;` retrieves all rows from the `users` table.",
    realTimeExample:
      "SQL is like **English for databases**: You use it to ask (query) and tell (command) the database what to do.",
  },
  {
    id: 7,
    question: "How do you create a database in MySQL?",
    answer:
      "Use the `CREATE DATABASE` statement to create a new database. Optionally, specify a character set or collation.",
    syntax: "CREATE DATABASE database_name;",
    example:
      "Example: `CREATE DATABASE school;` creates a database named `school`.",
    realTimeExample:
      "Like creating a **new folder** on your computer to store related files (tables).",
    codeExample: `
      CREATE DATABASE school CHARACTER SET utf8mb4;
    `,
  },
  {
    id: 8,
    question: "How do you create a table in MySQL?",
    answer:
      "Use the `CREATE TABLE` statement, specifying **column names**, **data types**, and **constraints** (e.g., PRIMARY KEY).",
    syntax: "CREATE TABLE table_name (column1 datatype constraints, ...);",
    example:
      "Example: `CREATE TABLE students (id INT PRIMARY KEY, name VARCHAR(50));`.",
    realTimeExample:
      "Like designing a **spreadsheet**: You define columns (name, age) and their types (text, number).",
    codeExample: `
      CREATE TABLE students (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(50) NOT NULL,
        age INT
      );
    `,
  },
  {
    id: 9,
    question: "How do you insert data into a table?",
    answer:
      "Use the `INSERT INTO` statement to add **one or more rows** to a table. Specify column names and values.",
    syntax:
      "INSERT INTO table_name (column1, column2) VALUES (value1, value2);",
    example:
      "Example: `INSERT INTO students (name, age) VALUES ('Alice', 20);` adds a new student.",
    realTimeExample:
      "Like adding a **new contact** to your phone's address book.",
    codeExample: `
      INSERT INTO students (name, age) VALUES
      ('Bob', 22),
      ('Charlie', 21);
    `,
  },
  {
    id: 10,
    question: "How do you select data from a table?",
    answer:
      "Use the `SELECT` statement to retrieve data. Specify columns or use `*` for all columns. Add `WHERE` to filter rows.",
    syntax: "SELECT column1, column2 FROM table_name [WHERE condition];",
    example:
      "Example: `SELECT name, age FROM students WHERE age > 20;` retrieves students older than 20.",
    realTimeExample:
      "Like **searching your email inbox** for messages from a specific sender (condition).",
    codeExample: `
      SELECT * FROM students WHERE name LIKE 'A%'; -- Names starting with 'A'
    `,
  },
  {
    id: 11,
    question: "What is a database schema?",
    answer:
      "A database schema is the **structure** that defines how data is organized, including **tables, columns, data types, and relationships** between tables.",
    syntax: "N/A",
    example:
      "Example: A schema for a school database might include tables for `students`, `teachers`, and `classes`.",
    realTimeExample:
      "Like a **blueprint** for a building: It shows where rooms (tables) and doors (relationships) are located.",
  },
  {
    id: 12,
    question: "What are common data types in MySQL?",
    answer:
      "Common data types include: **INT** (integers), **VARCHAR** (strings), **DATE** (dates), **BOOLEAN** (true/false), **DECIMAL** (fixed-point numbers), and **TEXT** (large text).",
    syntax: "INT, VARCHAR(length), DATE, BOOLEAN, DECIMAL(p,s), TEXT",
    example:
      "Example: `price DECIMAL(10,2)` stores prices with 2 decimal places (e.g., 19.99).",
    realTimeExample:
      "Like **choosing the right container**: Use a small box (INT) for marbles (numbers) and a large bag (TEXT) for clothes (long text).",
  },
  {
    id: 13,
    question: "What is normalization in databases?",
    answer:
      "Normalization is the process of **organizing data** to minimize redundancy and dependency. It involves dividing tables and defining relationships (e.g., 1NF, 2NF, 3NF).",
    syntax: "1NF, 2NF, 3NF, BCNF",
    example:
      "Example: Splitting a `users_orders` table into `users` and `orders` tables to avoid duplicate user data.",
    realTimeExample:
      "Like **organizing a closet**: You separate shoes (table) from shirts (table) to avoid clutter (redundancy).",
  },
  {
    id: 14,
    question: "How do you update data in a table?",
    answer:
      "Use the `UPDATE` statement to modify existing rows. Specify the table, columns to update, and a `WHERE` clause to target specific rows.",
    syntax: "UPDATE table_name SET column1 = value1 [WHERE condition];",
    example:
      "Example: `UPDATE students SET age = 21 WHERE id = 1;` updates Alice's age.",
    realTimeExample:
      "Like **editing a typo** in a printed document using correction fluid.",
    codeExample: `
      UPDATE products
      SET price = price * 1.1 -- 10% increase
      WHERE category = 'Electronics';
    `,
  },
  {
    id: 15,
    question: "How do you delete data from a table?",
    answer:
      "Use the `DELETE FROM` statement to remove rows. Always include a `WHERE` clause to avoid deleting all rows accidentally.",
    syntax: "DELETE FROM table_name [WHERE condition];",
    example:
      "Example: `DELETE FROM students WHERE id = 2;` removes Bob from the table.",
    realTimeExample:
      "Like **deleting a file** from your computer's recycle bin.",
    codeExample: `
      DELETE FROM orders
      WHERE order_date < '2020-01-01'; -- Delete old orders
    `,
  },
  {
    id: 16,
    question: "What is a JOIN in MySQL?",
    answer:
      "A JOIN combines rows from **two or more tables** based on a related column. Common types: **INNER JOIN** (matching rows), **LEFT JOIN** (all left table rows + matches).",
    syntax:
      "SELECT columns FROM table1 [INNER|LEFT] JOIN table2 ON table1.column = table2.column;",
    example:
      "Example: `SELECT users.name, orders.amount FROM users INNER JOIN orders ON users.id = orders.user_id;`.",
    realTimeExample:
      "Like **matching socks**: You pair (join) socks (rows) from two drawers (tables) by color (key).",
    codeExample: `
      SELECT students.name, classes.class_name
      FROM students
      JOIN classes ON students.class_id = classes.id;
    `,
  },
  {
    id: 17,
    question: "What is the difference between INNER JOIN and LEFT JOIN?",
    answer:
      "INNER JOIN returns **only matching rows** from both tables. LEFT JOIN returns **all rows from the left table** and matching rows from the right table (or NULL if no match).",
    syntax: "INNER JOIN, LEFT JOIN",
    example:
      "Example: `LEFT JOIN` includes all students, even those not enrolled in any class.",
    realTimeExample:
      "INNER JOIN is like a **Venn diagram intersection**: Only overlapping (matching) items. LEFT JOIN is like the **entire left circle**: All left items + overlaps.",
  },
  {
    id: 18,
    question: "How do you use the WHERE clause?",
    answer:
      "The `WHERE` clause **filters rows** based on a condition. Use comparison operators (`=`, `>`, `<`) or logical operators (`AND`, `OR`, `NOT`).",
    syntax: "SELECT columns FROM table_name WHERE condition;",
    example:
      "Example: `SELECT * FROM products WHERE price < 100;` finds affordable products.",
    realTimeExample:
      "Like **using a sieve**: Only the items (rows) that fit the holes (condition) pass through.",
    codeExample: `
      SELECT name, age FROM students
      WHERE age BETWEEN 18 AND 25 AND name LIKE 'A%';
    `,
  },
  {
    id: 19,
    question: "What is ORDER BY used for?",
    answer:
      "ORDER BY **sorts** the result set by one or more columns in **ascending (ASC)** or **descending (DESC)** order.",
    syntax:
      "SELECT columns FROM table_name ORDER BY column1 [ASC|DESC], column2 [ASC|DESC];",
    example:
      "Example: `SELECT * FROM students ORDER BY age DESC;` lists oldest students first.",
    realTimeExample:
      "Like **sorting a deck of cards** by suit (column) and rank (order).",
    codeExample: `
      SELECT name, age FROM students
      ORDER BY name ASC, age DESC; -- Sort by name (A-Z), then age (high to low)
    `,
  },
  {
    id: 20,
    question: "What is GROUP BY used for?",
    answer:
      "GROUP BY **groups rows** with the same values in specified columns, often used with **aggregate functions** (e.g., COUNT, SUM, AVG).",
    syntax:
      "SELECT column1, aggregate_function(column2) FROM table_name GROUP BY column1;",
    example:
      "Example: `SELECT class_id, COUNT(*) FROM students GROUP BY class_id;` counts students per class.",
    realTimeExample:
      "Like **grouping groceries** by type (fruits, vegetables) to count items in each group.",
    codeExample: `
      SELECT department, AVG(salary)
      FROM employees
      GROUP BY department;
    `,
  },
  {
    id: 21,
    question: "What are aggregate functions in MySQL?",
    answer:
      "Aggregate functions perform **calculations on a set of values** and return a single result. Examples: **COUNT**, **SUM**, **AVG**, **MIN**, **MAX**.",
    syntax: "COUNT(), SUM(), AVG(), MIN(), MAX()",
    example:
      "Example: `SELECT AVG(age) FROM students;` calculates the average age.",
    realTimeExample:
      "Like **calculating class averages**: You sum (SUM) all grades and divide (AVG) by the number of students (COUNT).",
    codeExample: `
      SELECT
        COUNT(*) AS total_students,
        MAX(age) AS oldest_age
      FROM students;
    `,
  },
  {
    id: 22,
    question: "How do you use LIMIT in queries?",
    answer:
      "LIMIT **restricts the number of rows** returned by a query. Useful for pagination or retrieving a subset of data.",
    syntax: "SELECT columns FROM table_name LIMIT number [OFFSET offset];",
    example:
      "Example: `SELECT * FROM products LIMIT 10 OFFSET 20;` skips the first 20 rows and returns 10.",
    realTimeExample:
      "Like **reading a book one chapter (LIMIT) at a time**, starting from page 20 (OFFSET).",
    codeExample: `
      SELECT name, age FROM students
      LIMIT 5; -- First 5 students
    `,
  },
  {
    id: 23,
    question: "What is AUTO_INCREMENT in MySQL?",
    answer:
      "AUTO_INCREMENT **automatically generates a unique number** for a column when a new row is inserted. Commonly used for primary keys.",
    syntax: "column_name INT AUTO_INCREMENT PRIMARY KEY",
    example:
      "Example: `id INT AUTO_INCREMENT PRIMARY KEY` assigns `id = 1, 2, 3,...` automatically.",
    realTimeExample:
      "Like a **ticket dispenser**: Each new ticket (row) gets the next number (AUTO_INCREMENT).",
    codeExample: `
      CREATE TABLE tasks (
        id INT AUTO_INCREMENT PRIMARY KEY,
        description VARCHAR(255)
      );
    `,
  },
  {
    id: 24,
    question: "What does NULL mean in MySQL?",
    answer:
      "NULL represents a **missing or unknown value**. It is **not the same as zero or an empty string**. Use `IS NULL` or `IS NOT NULL` to check for NULL values.",
    syntax: "IS NULL, IS NOT NULL",
    example:
      "Example: `SELECT * FROM students WHERE email IS NULL;` finds students without an email.",
    realTimeExample:
      "Like a **blank form field**: The user didn't fill it (NULL), unlike writing 'N/A' (empty string).",
    codeExample: `
      SELECT name FROM students
      WHERE phone IS NOT NULL; -- Students with a phone number
    `,
  },
  {
    id: 25,
    question: "How do you alter a table structure?",
    answer:
      "Use the `ALTER TABLE` statement to **add, modify, or delete columns**, or change constraints.",
    syntax: "ALTER TABLE table_name [ADD|MODIFY|DROP] column_name datatype;",
    example:
      "Example: `ALTER TABLE students ADD COLUMN email VARCHAR(100);` adds an email column.",
    realTimeExample:
      "Like **renovating a room**: You add (column) a window (email) or remove (DROP) a wall (column).",
    codeExample: `
      ALTER TABLE students
      MODIFY COLUMN age INT DEFAULT 18; -- Change default age
    `,
  },
  {
    id: 26,
    question: "How do you drop a table?",
    answer:
      "Use the `DROP TABLE` statement to **permanently delete a table and all its data**. This action cannot be undone.",
    syntax: "DROP TABLE table_name;",
    example: "Example: `DROP TABLE temp_data;` removes the `temp_data` table.",
    realTimeExample:
      "Like **deleting a file permanently** from your computer (not the recycle bin).",
    codeExample: `
      DROP TABLE IF EXISTS old_logs; -- Safe drop (no error if table doesn't exist)
    `,
  },
  {
    id: 27,
    question: "What is a view in MySQL?",
    answer:
      "A view is a **virtual table** based on the result of a SQL query. It simplifies complex queries and restricts data access.",
    syntax: "CREATE VIEW view_name AS SELECT query;",
    example:
      "Example: `CREATE VIEW active_students AS SELECT * FROM students WHERE status = 'active';`.",
    realTimeExample:
      "Like a **shortcut on your desktop**: It's a quick way to access (query) a specific folder (data).",
    codeExample: `
      CREATE VIEW student_names AS
      SELECT id, name FROM students;
      -- Usage:
      SELECT * FROM student_names;
    `,
  },
  {
    id: 28,
    question: "What is a stored procedure in MySQL?",
    answer:
      "A stored procedure is a **precompiled SQL code** saved in the database. It can be reused, accepts parameters, and reduces network traffic.",
    syntax:
      "DELIMITER // CREATE PROCEDURE procedure_name() BEGIN ... END // DELIMITER ;",
    example: "Example: A procedure to calculate student averages.",
    realTimeExample:
      "Like a **saved recipe**: You follow the same steps (SQL) every time you cook (call the procedure).",
    codeExample: `
      DELIMITER //
      CREATE PROCEDURE GetStudentAverage(IN student_id INT)
      BEGIN
        SELECT AVG(grade) FROM grades WHERE student_id = student_id;
      END //
      DELIMITER ;
      -- Call:
      CALL GetStudentAverage(1);
    `,
  },
  {
    id: 29,
    question: "How do you backup a MySQL database?",
    answer:
      "Use the `mysqldump` command-line tool to **export a database to a SQL file**. Include `--routines` for stored procedures and `--triggers` for triggers.",
    syntax: "mysqldump -u username -p database_name > backup.sql",
    example:
      "Example: `mysqldump -u root -p school > school_backup.sql` backs up the `school` database.",
    realTimeExample:
      "Like **making a photocopy** of important documents for safekeeping.",
    codeExample: `
      # Backup with compression
      mysqldump -u root -p school | gzip > school_backup.sql.gz
    `,
  },
  {
    id: 30,
    question: "What is MySQL Workbench?",
    answer:
      "MySQL Workbench is a **visual tool** for database design, development, and administration. It supports SQL development, data modeling, and server configuration.",
    syntax: "N/A",
    example:
      "Example: Designing a database schema visually and generating SQL scripts.",
    realTimeExample:
      "Like **Photoshop for databases**: You design (model) and edit (query) your data visually.",
  },
  {
    id: 31,
    question: "What is the use of the DISTINCT keyword?",
    answer:
      "DISTINCT **returns only unique values** in the result set, eliminating duplicates.",
    syntax: "SELECT DISTINCT column1, column2 FROM table_name;",
    example:
      "Example: `SELECT DISTINCT city FROM customers;` lists each city once.",
    realTimeExample:
      "Like **listing unique colors** in a box of crayons, ignoring duplicates.",
    codeExample: `
      SELECT DISTINCT department FROM employees;
    `,
  },
  {
    id: 32,
    question: "How do you use the LIKE operator?",
    answer:
      "LIKE is used in a `WHERE` clause to **search for a specified pattern** in a column. Use `%` (any characters) and `_` (single character) as wildcards.",
    syntax: "SELECT columns FROM table_name WHERE column LIKE 'pattern';",
    example:
      "Example: `SELECT * FROM students WHERE name LIKE 'A%';` finds names starting with 'A'.",
    realTimeExample:
      "Like **searching your contacts** for names starting with 'J' (J%).",
    codeExample: `
      SELECT name FROM students
      WHERE name LIKE '_a%'; -- Second letter is 'a'
    `,
  },
  {
    id: 33,
    question: "What is the BETWEEN operator?",
    answer:
      "BETWEEN filters rows where a value is **within a range** (inclusive). Works with numbers, dates, and strings.",
    syntax:
      "SELECT columns FROM table_name WHERE column BETWEEN value1 AND value2;",
    example:
      "Example: `SELECT * FROM products WHERE price BETWEEN 10 AND 50;` finds mid-range products.",
    realTimeExample: "Like **selecting books** with pages between 100 and 300.",
    codeExample: `
      SELECT name, age FROM students
      WHERE age BETWEEN 18 AND 25;
    `,
  },
  {
    id: 34,
    question: "How do you use the IN operator?",
    answer:
      "IN checks if a value **matches any value in a list**. Shorthand for multiple `OR` conditions.",
    syntax:
      "SELECT columns FROM table_name WHERE column IN (value1, value2, ...);",
    example:
      "Example: `SELECT * FROM students WHERE id IN (1, 3, 5);` finds specific students.",
    realTimeExample:
      "Like **checking if a fruit** is in your shopping list (apple, banana, orange).",
    codeExample: `
      SELECT name FROM employees
      WHERE department IN ('HR', 'Finance');
    `,
  },
  {
    id: 35,
    question: "What is the difference between DELETE and TRUNCATE?",
    answer:
      "DELETE removes rows **one by one** (can use WHERE, logs each deletion). TRUNCATE **deletes all rows at once** (faster, no WHERE, resets auto-increment).",
    syntax:
      "DELETE FROM table_name [WHERE condition]; TRUNCATE TABLE table_name;",
    example: "Example: `TRUNCATE TABLE logs;` empties the table instantly.",
    realTimeExample:
      "DELETE is like **erasing files one by one**. TRUNCATE is like **formatting a disk**—faster but irreversible.",
  },
  {
    id: 36,
    question: "How do you use the AS keyword?",
    answer:
      "AS **renames a column or table** in the result set (alias). Improves readability and avoids ambiguous column names.",
    syntax: "SELECT column1 AS alias_name FROM table_name;",
    example: "Example: `SELECT name AS student_name FROM students;`.",
    realTimeExample:
      "Like **nicknaming a friend**: You call 'Robert' (column) 'Bob' (alias) for simplicity.",
    codeExample: `
      SELECT
        CONCAT(first_name, ' ', last_name) AS full_name,
        age AS student_age
      FROM students;
    `,
  },
  {
    id: 37,
    question: "What is a subquery in MySQL?",
    answer:
      "A subquery is a **query nested inside another query**. Used to filter data, compute values, or generate temporary tables.",
    syntax:
      "SELECT column1 FROM table1 WHERE column1 [NOT] IN (SELECT column2 FROM table2);",
    example:
      "Example: `SELECT name FROM students WHERE id IN (SELECT student_id FROM honors);` finds honor students.",
    realTimeExample:
      "Like **asking a librarian** (main query) to find books (rows) recommended by a critic (subquery).",
    codeExample: `
      SELECT name FROM employees
      WHERE salary > (SELECT AVG(salary) FROM employees);
    `,
  },
  {
    id: 38,
    question: "How do you use the EXISTS operator?",
    answer:
      "EXISTS checks if a **subquery returns any rows**. Returns `TRUE` if the subquery has results, often used with correlated subqueries.",
    syntax:
      "SELECT column1 FROM table1 WHERE EXISTS (SELECT 1 FROM table2 WHERE condition);",
    example:
      "Example: `SELECT name FROM students WHERE EXISTS (SELECT 1 FROM grades WHERE student_id = students.id);` finds students with grades.",
    realTimeExample:
      "Like **checking if a store** (subquery) has your favorite snack (condition) before entering (main query).",
    codeExample: `
      SELECT product_name FROM products p
      WHERE EXISTS (
        SELECT 1 FROM inventory i
        WHERE i.product_id = p.id AND i.quantity > 0
      );
    `,
  },
  {
    id: 39,
    question: "What is a self-join?",
    answer:
      "A self-join is a **JOIN of a table to itself**, useful for comparing rows within the same table (e.g., hierarchical data).",
    syntax:
      "SELECT a.column1, b.column2 FROM table a JOIN table b ON a.key = b.key;",
    example:
      "Example: `SELECT e.name, m.name FROM employees e JOIN employees m ON e.manager_id = m.id;` shows employees and their managers.",
    realTimeExample:
      "Like a **family tree**: You join (relate) parents (rows) to children (rows) in the same table.",
    codeExample: `
      SELECT
        a.employee_name AS employee,
        b.employee_name AS manager
      FROM employees a
      JOIN employees b ON a.manager_id = b.employee_id;
    `,
  },
  {
    id: 40,
    question: "How do you use the CASE statement?",
    answer:
      "CASE performs **conditional logic** in SQL. It evaluates conditions and returns a value when a condition is met.",
    syntax:
      "CASE WHEN condition1 THEN result1 [WHEN condition2 THEN result2 ...] ELSE default_result END",
    example:
      "Example: `SELECT name, CASE WHEN age < 18 THEN 'Minor' ELSE 'Adult' END AS age_group FROM students;`.",
    realTimeExample:
      "Like a **traffic light**: It changes (returns) the signal (result) based on conditions (red/yellow/green).",
    codeExample: `
      SELECT
        product_name,
        CASE
          WHEN price < 10 THEN 'Cheap'
          WHEN price BETWEEN 10 AND 50 THEN 'Mid-range'
          ELSE 'Expensive'
        END AS price_category
      FROM products;
    `,
  },
  {
    id: 41,
    question: "What is a transaction in MySQL?",
    answer:
      "A transaction is a **sequence of SQL operations** executed as a single unit. It ensures data integrity with **ACID properties** (Atomicity, Consistency, Isolation, Durability).",
    syntax: "START TRANSACTION; ... COMMIT; or ROLLBACK;",
    example:
      "Example: Transferring money between accounts (debit + credit in one transaction).",
    realTimeExample:
      "Like a **bank transfer**: All steps (debit/credit) must succeed (commit) or none do (rollback).",
    codeExample: `
      START TRANSACTION;
      UPDATE accounts SET balance = balance - 100 WHERE id = 1;
      UPDATE accounts SET balance = balance + 100 WHERE id = 2;
      COMMIT;
    `,
  },
  {
    id: 42,
    question: "How do you use COMMIT and ROLLBACK?",
    answer:
      "COMMIT **saves** all changes made during a transaction. ROLLBACK **undoes** all changes if an error occurs.",
    syntax: "COMMIT; ROLLBACK;",
    example: "Example: `ROLLBACK;` reverts changes if a transfer fails.",
    realTimeExample:
      "COMMIT is like **saving a document**. ROLLBACK is like **hitting 'undo'** after a mistake.",
  },
  {
    id: 43,
    question: "What is a trigger in MySQL?",
    answer:
      "A trigger is a **stored program** that automatically executes in response to an event (e.g., INSERT, UPDATE, DELETE) on a table.",
    syntax:
      "DELIMITER // CREATE TRIGGER trigger_name [BEFORE|AFTER] [INSERT|UPDATE|DELETE] ON table_name FOR EACH ROW BEGIN ... END // DELIMITER ;",
    example: "Example: A trigger to log changes to a table.",
    realTimeExample:
      "Like a **security alarm**: It triggers (executes) when a door (event) opens (INSERT/UPDATE).",
    codeExample: `
      DELIMITER //
      CREATE TRIGGER after_insert_log
      AFTER INSERT ON students
      FOR EACH ROW
      BEGIN
        INSERT INTO logs (action, student_id)
        VALUES ('New student added', NEW.id);
      END //
      DELIMITER ;
    `,
  },
  {
    id: 44,
    question: "How do you create a trigger?",
    answer:
      "Use the `CREATE TRIGGER` statement to define the **trigger name, timing (BEFORE/AFTER), event (INSERT/UPDATE/DELETE), table, and action**.",
    syntax:
      "CREATE TRIGGER trigger_name timing event ON table_name FOR EACH ROW BEGIN ... END;",
    example: "Example: Log deleted records.",
    realTimeExample:
      "Like **setting a reminder**: It runs (trigger) when a condition (event) is met.",
  },
  {
    id: 45,
    question: "What is a cursor in MySQL?",
    answer:
      "A cursor is a **database object** used to traverse and manipulate rows returned by a query, one at a time. Useful in stored procedures.",
    syntax:
      "DECLARE cursor_name CURSOR FOR SELECT_statement; OPEN cursor_name; FETCH cursor_name INTO variables; CLOSE cursor_name;",
    example: "Example: Processing each row in a result set sequentially.",
    realTimeExample:
      "Like a **DVD player's 'next' button**: It moves (FETCH) through scenes (rows) one by one.",
    codeExample: `
      DELIMITER //
      CREATE PROCEDURE ProcessStudents()
      BEGIN
        DECLARE done INT DEFAULT FALSE;
        DECLARE student_id INT;
        DECLARE student_cursor CURSOR FOR SELECT id FROM students;
        DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;
        OPEN student_cursor;
        read_loop: LOOP
          FETCH student_cursor INTO student_id;
          IF done THEN LEAVE read_loop; END IF;
          -- Process student_id
        END LOOP;
        CLOSE student_cursor;
      END //
      DELIMITER ;
    `,
  },
  {
    id: 46,
    question: "How do you use cursors in stored procedures?",
    answer:
      "1) Declare the cursor, 2) Open it, 3) Fetch rows into variables, 4) Process data in a loop, 5) Close the cursor. Use `DECLARE CONTINUE HANDLER` to detect the end of rows.",
    syntax: "DECLARE, OPEN, FETCH, CLOSE, CONTINUE HANDLER",
    example: "Example: Updating each student's grade in a loop.",
    realTimeExample:
      "Like **reading a book page by page**: You open (OPEN), read (FETCH), and close (CLOSE) the book (cursor).",
  },
  {
    id: 47,
    question: "What is a temporary table in MySQL?",
    answer:
      "A temporary table is a **short-lived table** visible only to the current connection. It's automatically dropped when the connection closes or the session ends.",
    syntax: "CREATE TEMPORARY TABLE table_name (...);",
    example:
      "Example: Storing intermediate results during complex calculations.",
    realTimeExample:
      "Like a **sticky note**: You use it temporarily and discard it after.",
    codeExample: `
      CREATE TEMPORARY TABLE temp_results (
        id INT,
        result DECIMAL(10,2)
      );
      -- Usage:
      INSERT INTO temp_results SELECT id, price * 1.1 FROM products;
    `,
  },
  {
    id: 48,
    question: "How do you create a temporary table?",
    answer:
      "Use `CREATE TEMPORARY TABLE` followed by the table definition. Temporary tables are session-specific and dropped automatically.",
    syntax: "CREATE TEMPORARY TABLE table_name (column1 datatype, ...);",
    example:
      "Example: `CREATE TEMPORARY TABLE temp_users AS SELECT * FROM users WHERE active = 1;`.",
    realTimeExample:
      "Like **setting up a temporary workspace**: You clean it up (drop) when done.",
  },
  {
    id: 49,
    question: "What is the use of the HAVING clause?",
    answer:
      "HAVING filters **groups** created by `GROUP BY`, similar to how `WHERE` filters rows. Use it with aggregate functions (e.g., COUNT, SUM).",
    syntax:
      "SELECT column1, aggregate_function(column2) FROM table_name GROUP BY column1 HAVING condition;",
    example:
      "Example: `SELECT department, COUNT(*) FROM employees GROUP BY department HAVING COUNT(*) > 5;` finds large departments.",
    realTimeExample:
      "Like **filtering teams by size**: You only consider teams (groups) with more than 5 members (HAVING).",
    codeExample: `
      SELECT
        customer_id,
        SUM(amount) AS total_spent
      FROM orders
      GROUP BY customer_id
      HAVING total_spent > 1000;
    `,
  },
  {
    id: 50,
    question: "How do you use the UNION operator?",
    answer:
      "UNION **combines results** from multiple SELECT statements, removing duplicates. Use `UNION ALL` to include duplicates.",
    syntax:
      "SELECT columns FROM table1 UNION [ALL] SELECT columns FROM table2;",
    example:
      "Example: `SELECT name FROM students UNION SELECT name FROM teachers;` lists all unique names.",
    realTimeExample:
      "Like **merging two guest lists**: UNION removes duplicate names, UNION ALL keeps all.",
    codeExample: `
      SELECT product_name FROM electronics
      UNION ALL
      SELECT product_name FROM furniture; -- Includes duplicates
    `,
  },
  {
    id: 51,
    question: "What is the difference between UNION and UNION ALL?",
    answer:
      "UNION removes duplicate rows from the result set, while UNION ALL retains all rows, including duplicates. UNION ALL is faster.",
    syntax: "UNION, UNION ALL",
    example:
      "Example: `UNION ALL` is preferred for large tables where duplicates don't matter.",
    realTimeExample:
      "UNION is like a **set of unique stamps**. UNION ALL is like a **pile of all stamps**, including duplicates.",
  },
  {
    id: 52,
    question: "How do you use the ANY and ALL operators?",
    answer:
      "ANY returns `TRUE` if **any** subquery value meets the condition. ALL returns `TRUE` if **all** subquery values meet the condition.",
    syntax:
      "SELECT column1 FROM table1 WHERE column1 [comparison] ANY|ALL (SELECT column2 FROM table2);",
    example:
      "Example: `SELECT name FROM students WHERE age > ANY (SELECT age FROM honors);` finds students older than at least one honor student.",
    realTimeExample:
      "ANY is like **passing one test**. ALL is like **passing all tests** in a subject.",
    codeExample: `
      SELECT product_name FROM products
      WHERE price > ALL (SELECT price FROM discounted_products);
    `,
  },
  {
    id: 53,
    question: "What is a composite key?",
    answer:
      "A composite key is a **primary key composed of two or more columns**. It uniquely identifies rows when a single column isn't sufficient.",
    syntax: "PRIMARY KEY (column1, column2)",
    example:
      "Example: `PRIMARY KEY (student_id, course_id)` in an `enrollments` table.",
    realTimeExample:
      "Like a **combination lock**: You need multiple numbers (columns) to open it (identify the row).",
    codeExample: `
      CREATE TABLE enrollments (
        student_id INT,
        course_id INT,
        PRIMARY KEY (student_id, course_id)
      );
    `,
  },
  {
    id: 54,
    question: "How do you use the ON DELETE CASCADE constraint?",
    answer:
      "ON DELETE CASCADE **automatically deletes** rows in the child table when the referenced row in the parent table is deleted.",
    syntax:
      "FOREIGN KEY (child_column) REFERENCES parent_table(parent_column) ON DELETE CASCADE",
    example: "Example: Deleting a user also deletes their orders.",
    realTimeExample:
      "Like **dominoes**: Deleting the first domino (parent row) topples (deletes) the rest (child rows).",
    codeExample: `
      CREATE TABLE orders (
        order_id INT PRIMARY KEY,
        user_id INT,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
      );
    `,
  },
  {
    id: 55,
    question: "What is a cross join?",
    answer:
      "A cross join (Cartesian product) returns **all possible combinations** of rows from two tables. Useful for generating data sets but can be resource-intensive.",
    syntax: "SELECT columns FROM table1 CROSS JOIN table2;",
    example:
      "Example: `SELECT * FROM sizes CROSS JOIN colors;` generates all size-color combinations.",
    realTimeExample:
      "Like **mixing and matching shirts and pants**: Every shirt (row) is paired with every pant (row).",
    codeExample: `
      SELECT s.size_name, c.color_name
      FROM sizes s
      CROSS JOIN colors c;
    `,
  },
  {
    id: 56,
    question: "How do you use the COALESCE function?",
    answer:
      "COALESCE returns the **first non-NULL value** in a list of expressions. Useful for handling NULL values gracefully.",
    syntax: "COALESCE(expression1, expression2, ...);",
    example:
      "Example: `SELECT COALESCE(email, 'N/A') FROM users;` replaces NULL emails with 'N/A'.",
    realTimeExample:
      "Like a **backup plan**: If the first option (email) fails (NULL), try the next (default).",
    codeExample: `
      SELECT
        name,
        COALESCE(phone, mobile, 'No contact') AS contact
      FROM students;
    `,
  },
  {
    id: 57,
    question: "What is the IFNULL function?",
    answer:
      "IFNULL returns a **default value** if the expression is NULL. Similar to COALESCE but only handles two arguments.",
    syntax: "IFNULL(expression, default_value);",
    example:
      "Example: `SELECT IFNULL(discount, 0) FROM products;` treats NULL discounts as 0.",
    realTimeExample:
      "Like a **spare tire**: If the main tire (value) is flat (NULL), use the spare (default).",
    codeExample: `
      SELECT
        product_name,
        IFNULL(description, 'No description') AS desc
      FROM products;
    `,
  },
  {
    id: 58,
    question: "How do you use the GROUP_CONCAT function?",
    answer:
      "GROUP_CONCAT **concatenates values** from multiple rows into a single string, separated by a delimiter (default: comma).",
    syntax: "GROUP_CONCAT(column_name SEPARATOR 'delimiter')",
    example:
      "Example: `SELECT GROUP_CONCAT(name) FROM students WHERE class_id = 1;` lists all student names in one string.",
    realTimeExample:
      "Like **stringing beads**: You combine (concatenate) individual beads (values) into a necklace (string).",
    codeExample: `
      SELECT
        class_id,
        GROUP_CONCAT(name SEPARATOR ', ') AS student_names
      FROM students
      GROUP BY class_id;
    `,
  },
  {
    id: 59,
    question: "What is the NOW() function?",
    answer:
      "NOW() returns the **current date and time** in the format `YYYY-MM-DD HH:MM:SS`. Useful for timestamps.",
    syntax: "NOW(), CURRENT_TIMESTAMP",
    example:
      "Example: `INSERT INTO logs (action, time) VALUES ('Login', NOW());`.",
    realTimeExample:
      "Like **checking your watch**: It tells you the exact time (current timestamp) right now.",
    codeExample: `
      UPDATE tasks
      SET completed_at = NOW()
      WHERE id = 1;
    `,
  },
  {
    id: 60,
    question: "How do you use the DATE_FORMAT function?",
    answer:
      "DATE_FORMAT **formats a date** as a string using format specifiers (e.g., `%Y` for year, `%M` for month name).",
    syntax: "DATE_FORMAT(date, 'format_string');",
    example:
      "Example: `SELECT DATE_FORMAT(birthdate, '%M %d, %Y') FROM users;` returns 'June 15, 1990'.",
    realTimeExample:
      "Like **writing a date** in different styles: 06/15/1990 vs. June 15, 1990.",
    codeExample: `
      SELECT
        name,
        DATE_FORMAT(join_date, '%W, %M %e, %Y') AS formatted_date
      FROM employees;
    `,
  },
  {
    id: 61,
    question: "What is the DATEDIFF function?",
    answer: "DATEDIFF calculates the **difference in days** between two dates.",
    syntax: "DATEDIFF(date1, date2);",
    example:
      "Example: `SELECT DATEDIFF(end_date, start_date) FROM projects;` finds project durations in days.",
    realTimeExample: "Like **counting days** between two events on a calendar.",
    codeExample: `
      SELECT
        name,
        DATEDIFF(CURRENT_DATE, birthdate) AS age_in_days
      FROM users;
    `,
  },
  {
    id: 62,
    question: "How do you use the CONCAT function?",
    answer:
      "CONCAT **combines two or more strings** into one. Use `CONCAT_WS` to specify a separator.",
    syntax:
      "CONCAT(string1, string2, ...), CONCAT_WS(separator, string1, string2, ...)",
    example:
      "Example: `SELECT CONCAT(first_name, ' ', last_name) AS full_name FROM users;`.",
    realTimeExample:
      "Like **gluing paper strips** together to form a single sheet.",
    codeExample: `
      SELECT
        CONCAT_WS(', ', city, state, country) AS full_address
      FROM customers;
    `,
  },
  {
    id: 63,
    question: "What is the SUBSTRING function?",
    answer:
      "SUBSTRING extracts a **portion of a string**, starting at a specified position and length.",
    syntax: "SUBSTRING(string, start_position, length);",
    example:
      "Example: `SELECT SUBSTRING(email, 1, 3) FROM users;` gets the first 3 characters of each email.",
    realTimeExample:
      "Like **cutting a slice of cake**: You take (extract) a piece (substring) from the whole (string).",
    codeExample: `
      SELECT
        name,
        SUBSTRING(name, 1, 1) AS initial
      FROM students;
    `,
  },
  {
    id: 64,
    question: "How do you use the LENGTH function?",
    answer:
      "LENGTH returns the **number of bytes** in a string. Use `CHAR_LENGTH` for the number of characters (important for multi-byte characters).",
    syntax: "LENGTH(string), CHAR_LENGTH(string)",
    example:
      "Example: `SELECT LENGTH(password) FROM users;` checks password lengths.",
    realTimeExample:
      "Like **measuring a rope**: You find out how long (bytes/characters) it is.",
    codeExample: `
      SELECT
        name,
        CHAR_LENGTH(name) AS name_length
      FROM products;
    `,
  },
  {
    id: 65,
    question: "What is the REPLACE function?",
    answer:
      "REPLACE **replaces all occurrences** of a substring within a string with another substring.",
    syntax: "REPLACE(string, old_substring, new_substring);",
    example:
      "Example: `UPDATE users SET email = REPLACE(email, '@old.com', '@new.com');` updates email domains.",
    realTimeExample: "Like **using 'Find and Replace'** in a word processor.",
    codeExample: `
      SELECT
        REPLACE(description, 'old', 'new') AS updated_desc
      FROM products;
    `,
  },
  {
    id: 66,
    question: "How do you use the ROUND function?",
    answer:
      "ROUND **rounds a number** to a specified number of decimal places. Defaults to 0 decimals.",
    syntax: "ROUND(number, decimals);",
    example:
      "Example: `SELECT ROUND(price, 2) FROM products;` formats prices to 2 decimal places.",
    realTimeExample:
      "Like **rounding a bill** to the nearest dollar for simplicity.",
    codeExample: `
      SELECT
        product_name,
        ROUND(price * 1.1, 2) AS price_with_tax
      FROM products;
    `,
  },
  {
    id: 67,
    question: "What is the FLOOR and CEILING function?",
    answer:
      "FLOOR rounds a number **down** to the nearest integer. CEILING (or CEIL) rounds a number **up** to the nearest integer.",
    syntax: "FLOOR(number), CEILING(number), CEIL(number)",
    example:
      "Example: `SELECT FLOOR(avg_grade) FROM students;` rounds down grades.",
    realTimeExample:
      "FLOOR is like **taking the lower step**. CEILING is like **stepping up** to the next whole number.",
    codeExample: `
      SELECT
        CEILING(quantity / 10) AS batches_needed
      FROM inventory;
    `,
  },
  {
    id: 68,
    question: "How do you use the ABS function?",
    answer: "ABS returns the **absolute (non-negative) value** of a number.",
    syntax: "ABS(number);",
    example:
      "Example: `SELECT ABS(balance) FROM accounts;` shows balances as positive numbers.",
    realTimeExample:
      "Like **ignoring the direction** of a temperature change: -5°C and 5°C both become 5.",
    codeExample: `
      SELECT
        name,
        ABS(score - 50) AS deviation_from_50
      FROM tests;
    `,
  },
  {
    id: 69,
    question: "What is the MOD function?",
    answer: "MOD returns the **remainder** of a division operation (modulo).",
    syntax: "MOD(dividend, divisor);",
    example:
      "Example: `SELECT MOD(id, 2) FROM users;` finds even/odd IDs (0=even, 1=odd).",
    realTimeExample:
      "Like **dividing candies**: MOD tells you how many are left over (remainder).",
    codeExample: `
      SELECT
        id,
        MOD(id, 3) AS group_number
      FROM students;
    `,
  },
  {
    id: 70,
    question: "How do you use the POWER function?",
    answer:
      "POWER raises a number to the **specified power** (exponentiation).",
    syntax: "POWER(base, exponent);",
    example: "Example: `SELECT POWER(2, 3);` returns 8 (2³).",
    realTimeExample:
      "Like **calculating compound interest**: POWER helps compute growth over time.",
    codeExample: `
      SELECT
        side_length,
        POWER(side_length, 3) AS volume
      FROM cubes;
    `,
  },
  {
    id: 71,
    question: "What is the SQRT function?",
    answer: "SQRT returns the **square root** of a number.",
    syntax: "SQRT(number);",
    example: "Example: `SELECT SQRT(16);` returns 4.",
    realTimeExample:
      "Like **finding the side length** of a square when you know its area.",
    codeExample: `
      SELECT
        area,
        SQRT(area) AS side_length
      FROM squares;
    `,
  },
  {
    id: 72,
    question: "How do you use the RAND function?",
    answer:
      "RAND generates a **random float** between 0 and 1. Use it for random sampling or shuffling.",
    syntax: "RAND([seed]);",
    example:
      "Example: `SELECT * FROM products ORDER BY RAND() LIMIT 3;` picks 3 random products.",
    realTimeExample:
      "Like **rolling a dice**: Each call gives a different (random) result.",
    codeExample: `
      SELECT
        name,
        FLOOR(RAND() * 100) AS random_number
      FROM students;
    `,
  },
  {
    id: 73,
    question: "What is the GREATEST and LEAST function?",
    answer:
      "GREATEST returns the **largest value** in a list. LEAST returns the **smallest value**.",
    syntax: "GREATEST(value1, value2, ...), LEAST(value1, value2, ...)",
    example:
      "Example: `SELECT GREATEST(price, discount_price) FROM products;` picks the higher price.",
    realTimeExample:
      "GREATEST is like **finding the tallest person** in a group. LEAST is like finding the shortest.",
  },
  {
    id: 74,
    question: "How do you use the IF function?",
    answer:
      "IF returns one value if a condition is true, and another if false. Similar to a ternary operator in programming.",
    syntax: "IF(condition, value_if_true, value_if_false);",
    example: "Example: `SELECT IF(age >= 18, 'Adult', 'Minor') FROM users;`.",
    realTimeExample:
      "Like **choosing an outfit**: If it's cold (condition), wear a coat (true); else, wear a shirt (false).",
    codeExample: `
      SELECT
        name,
        IF(active = 1, 'Active', 'Inactive') AS status
      FROM customers;
    `,
  },
  {
    id: 75,
    question: "What is the use of the DEFAULT constraint?",
    answer:
      "DEFAULT assigns a **default value** to a column if no value is specified during insertion.",
    syntax: "column_name datatype DEFAULT default_value",
    example:
      "Example: `status VARCHAR(20) DEFAULT 'active'` sets 'active' if no status is provided.",
    realTimeExample:
      "Like a **default ringtone**: If you don't pick one, the phone uses the default.",
    codeExample: `
      CREATE TABLE tasks (
        id INT PRIMARY KEY,
        status VARCHAR(20) DEFAULT 'pending'
      );
    `,
  },
];

// Make data available globally
window.beginner = beginner;
