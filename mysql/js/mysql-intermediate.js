// MySQL Intermediate Level Q&A Data

// MySQL Intermediate Level Q&A Data
let intermediate = [
  {
    id: 1,
    question: "What is a JOIN in SQL and why is it used?",
    answer:
      "A JOIN **combines rows** from two or more tables based on a **related column** (usually a primary/foreign key). It’s used to retrieve data distributed across multiple tables.",
    syntax:
      "SELECT columns FROM table1 JOIN table2 ON table1.column = table2.column;",
    example:
      "Example: `SELECT users.name, orders.amount FROM users JOIN orders ON users.id = orders.user_id;` retrieves user names and their order amounts.",
    realTimeExample:
      "Like **matching socks**: You pair (JOIN) socks (rows) from two drawers (tables) by color (key).",
    codeExample: `
      SELECT
        employees.name,
        departments.name AS department
      FROM employees
      JOIN departments ON employees.dept_id = departments.id;
    `,
  },
  {
    id: 2,
    question: "What are the different types of JOINs in SQL?",
    answer:
      "1. **INNER JOIN**: Returns matching rows from both tables.\n2. **LEFT JOIN**: Returns all rows from the left table + matching rows from the right.\n3. **RIGHT JOIN**: Returns all rows from the right table + matching rows from the left.\n4. **FULL OUTER JOIN**: Returns all rows when there’s a match in either table.\n5. **CROSS JOIN**: Returns the Cartesian product (all combinations).\n6. **SELF JOIN**: Joins a table to itself.",
    syntax:
      "INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN, CROSS JOIN, SELF JOIN",
    example:
      "Example: `LEFT JOIN` includes all employees, even those not assigned to a department.",
    realTimeExample:
      "INNER JOIN is like a **Venn diagram intersection**. LEFT JOIN is like the **entire left circle + intersection**.",
  },
  {
    id: 3,
    question: "What is normalization in databases?",
    answer:
      "Normalization is the process of **organizing data** to minimize redundancy and dependency. It involves dividing tables and defining relationships (e.g., 1NF, 2NF, 3NF).",
    syntax: "1NF, 2NF, 3NF, BCNF",
    example:
      "Example: Splitting a `users_orders` table into `users` and `orders` to avoid duplicate user data.",
    realTimeExample:
      "Like **organizing a closet**: You separate shoes (table) from shirts (table) to avoid clutter (redundancy).",
  },
  {
    id: 4,
    question: "What are the normal forms in database design?",
    answer:
      "1. **1NF**: Eliminate repeating groups (atomic values).\n2. **2NF**: Remove partial dependencies (all non-key columns depend on the full primary key).\n3. **3NF**: Remove transitive dependencies (non-key columns depend only on the primary key).\n4. **BCNF**: Stricter 3NF (no dependency on candidate keys).\n5. **4NF**: No multi-valued dependencies.\n6. **5NF**: No join dependencies.",
    syntax: "1NF, 2NF, 3NF, BCNF, 4NF, 5NF",
    example:
      "Example: 3NF ensures non-key columns (e.g., `address`) depend only on the primary key (`user_id`).",
    realTimeExample:
      "1NF is like **using folders** for files. 3NF is like **labeling folders** so files (data) are easy to find.",
  },
  {
    id: 5,
    question: "What is a stored procedure in MySQL?",
    answer:
      "A stored procedure is a **precompiled SQL code** saved in the database. It can accept parameters, return results, and reduce network traffic by executing multiple statements as a single call.",
    syntax:
      "DELIMITER // CREATE PROCEDURE procedure_name([parameters]) BEGIN ... END // DELIMITER ;",
    example: "Example: A procedure to calculate and update student GPAs.",
    realTimeExample:
      "Like a **saved recipe**: You follow the same steps (SQL) every time you cook (call the procedure).",
    codeExample: `
      DELIMITER //
      CREATE PROCEDURE CalculateGPA(IN student_id INT, OUT gpa DECIMAL(3,2))
      BEGIN
        SELECT AVG(grade) INTO gpa
        FROM grades
        WHERE student_id = student_id;
      END //
      DELIMITER ;
      -- Call:
      CALL CalculateGPA(1, @result);
    `,
  },
  {
    id: 6,
    question: "How do you create and use a stored procedure?",
    answer:
      "1. Define the procedure with `CREATE PROCEDURE`.\n2. Use `IN`/`OUT` parameters for inputs/outputs.\n3. Call it with `CALL procedure_name(arguments)`.",
    syntax: "CREATE PROCEDURE, CALL, IN, OUT, INOUT",
    example: "Example: A procedure to transfer funds between accounts.",
    realTimeExample:
      "Like **programming a robot**: You define the steps (procedure) and run it (CALL) when needed.",
    codeExample: `
      DELIMITER //
      CREATE PROCEDURE TransferFunds(
        IN from_account INT,
        IN to_account INT,
        IN amount DECIMAL(10,2)
      )
      BEGIN
        UPDATE accounts SET balance = balance - amount WHERE id = from_account;
        UPDATE accounts SET balance = balance + amount WHERE id = to_account;
      END //
      DELIMITER ;
      -- Call:
      CALL TransferFunds(1, 2, 100.00);
    `,
  },
  {
    id: 7,
    question: "What is a trigger in MySQL?",
    answer:
      "A trigger is a **stored program** that automatically executes in response to an event (e.g., INSERT, UPDATE, DELETE) on a table. Useful for auditing, validation, or maintaining derived data.",
    syntax:
      "DELIMITER // CREATE TRIGGER trigger_name [BEFORE|AFTER] [INSERT|UPDATE|DELETE] ON table_name FOR EACH ROW BEGIN ... END // DELIMITER ;",
    example: "Example: Logging changes to a table.",
    realTimeExample:
      "Like a **security alarm**: It triggers (executes) when a door (event) opens (INSERT/UPDATE).",
    codeExample: `
      DELIMITER //
      CREATE TRIGGER log_order_deletion
      AFTER DELETE ON orders
      FOR EACH ROW
      BEGIN
        INSERT INTO order_logs (order_id, action, action_time)
        VALUES (OLD.id, 'DELETE', NOW());
      END //
      DELIMITER ;
    `,
  },
  {
    id: 8,
    question: "How do you create and use a trigger?",
    answer:
      "1. Define the trigger with `CREATE TRIGGER`.\n2. Specify the timing (`BEFORE`/`AFTER`) and event (`INSERT`/`UPDATE`/`DELETE`).\n3. Use `OLD`/`NEW` to reference row values.",
    syntax: "CREATE TRIGGER, BEFORE, AFTER, OLD, NEW",
    example: "Example: Validating data before insertion.",
    realTimeExample:
      "Like **setting a reminder**: It runs (trigger) when a condition (event) is met.",
    codeExample: `
      DELIMITER //
      CREATE TRIGGER validate_salary
      BEFORE UPDATE ON employees
      FOR EACH ROW
      BEGIN
        IF NEW.salary < 0 THEN
          SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Salary cannot be negative';
        END IF;
      END //
      DELIMITER ;
    `,
  },
  {
    id: 9,
    question: "What is a view in MySQL?",
    answer:
      "A view is a **virtual table** based on the result of a SQL query. It simplifies complex queries, restricts data access, and provides a consistent interface even if the underlying schema changes.",
    syntax: "CREATE VIEW view_name AS SELECT query;",
    example:
      "Example: `CREATE VIEW active_students AS SELECT * FROM students WHERE status = 'active';`.",
    realTimeExample:
      "Like a **shortcut on your desktop**: It’s a quick way to access (query) a specific folder (data).",
    codeExample: `
      CREATE VIEW employee_salaries AS
      SELECT name, salary
      FROM employees
      WHERE department = 'Engineering';
      -- Usage:
      SELECT * FROM employee_salaries;
    `,
  },
  {
    id: 10,
    question: "How do you create and use a view?",
    answer:
      "1. Create the view with `CREATE VIEW`.\n2. Query it like a table: `SELECT * FROM view_name`.\n3. Update it with `CREATE OR REPLACE VIEW` if the underlying query changes.",
    syntax: "CREATE VIEW, CREATE OR REPLACE VIEW, DROP VIEW",
    example: "Example: Creating a view for high-value orders.",
    realTimeExample:
      "Like **saving a filter** in a photo app: You reuse (query) the same filter (view) later.",
    codeExample: `
      CREATE OR REPLACE VIEW high_value_orders AS
      SELECT order_id, amount
      FROM orders
      WHERE amount > 1000;
    `,
  },
  {
    id: 11,
    question: "What is a cursor in MySQL?",
    answer:
      "A cursor is a **database object** used to traverse and manipulate rows returned by a query, one at a time. It’s essential for row-by-row processing in stored procedures.",
    syntax:
      "DECLARE cursor_name CURSOR FOR SELECT_statement; OPEN cursor_name; FETCH cursor_name INTO variables; CLOSE cursor_name;",
    example: "Example: Processing each row in a result set sequentially.",
    realTimeExample:
      "Like a **DVD player’s ‘next’ button**: It moves (FETCH) through scenes (rows) one by one.",
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
    id: 12,
    question: "How do you use cursors in stored procedures?",
    answer:
      "1. Declare the cursor with `DECLARE`.\n2. Open it with `OPEN`.\n3. Fetch rows into variables with `FETCH`.\n4. Use a loop to process each row.\n5. Close the cursor with `CLOSE`.\n6. Handle the end of rows with `DECLARE CONTINUE HANDLER`.",
    syntax: "DECLARE, OPEN, FETCH, CLOSE, CONTINUE HANDLER",
    example: "Example: Updating each student’s grade in a loop.",
    realTimeExample:
      "Like **reading a book page by page**: You open (OPEN), read (FETCH), and close (CLOSE) the book (cursor).",
  },
  {
    id: 13,
    question: "What is a transaction in MySQL?",
    answer:
      "A transaction is a **sequence of SQL operations** executed as a single unit. It ensures data integrity with **ACID properties**: Atomicity, Consistency, Isolation, Durability.",
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
    id: 14,
    question: "How do you use COMMIT and ROLLBACK in transactions?",
    answer:
      "Use `COMMIT` to **save all changes** made during a transaction. Use `ROLLBACK` to **undo all changes** if an error occurs. Always handle errors to avoid partial updates.",
    syntax: "COMMIT; ROLLBACK; SAVEPOINT;",
    example:
      "Example: Rolling back a transfer if the recipient account doesn’t exist.",
    realTimeExample:
      "COMMIT is like **saving a document**. ROLLBACK is like **hitting ‘undo’** after a mistake.",
    codeExample: `
      START TRANSACTION;
      UPDATE inventory SET quantity = quantity - 1 WHERE product_id = 1;
      -- Check if operation succeeded
      IF (SELECT quantity FROM inventory WHERE product_id = 1) < 0 THEN
        ROLLBACK;
      ELSE
        COMMIT;
      END IF;
    `,
  },
  {
    id: 15,
    question: "What is a savepoint in MySQL?",
    answer:
      "A savepoint is a **point within a transaction** that you can roll back to, allowing partial rollbacks instead of undoing the entire transaction.",
    syntax: "SAVEPOINT savepoint_name; ROLLBACK TO savepoint_name;",
    example:
      "Example: Rolling back to a savepoint if a step fails, but committing the rest.",
    realTimeExample:
      "Like **saving a game**: You can reload (ROLLBACK) from a checkpoint (SAVEPOINT) if you fail a level.",
    codeExample: `
      START TRANSACTION;
      INSERT INTO orders (user_id, amount) VALUES (1, 100);
      SAVEPOINT after_order;
      UPDATE inventory SET stock = stock - 1 WHERE product_id = 1;
      -- If stock update fails:
      ROLLBACK TO after_order;
      COMMIT; -- Only the INSERT is committed
    `,
  },
  {
    id: 16,
    question: "What is a stored function in MySQL?",
    answer:
      "A stored function is a **reusable SQL routine** that returns a single value. Unlike stored procedures, functions can be used in SQL statements (e.g., `SELECT`).",
    syntax:
      "DELIMITER // CREATE FUNCTION function_name([parameters]) RETURNS datatype BEGIN ... RETURN value; END // DELIMITER ;",
    example: "Example: A function to calculate tax.",
    realTimeExample:
      "Like a **math formula**: You input (parameters) values and get a result (return value).",
    codeExample: `
      DELIMITER //
      CREATE FUNCTION CalculateTax(amount DECIMAL(10,2))
      RETURNS DECIMAL(10,2)
      BEGIN
        DECLARE tax DECIMAL(10,2);
        SET tax = amount * 0.08;
        RETURN tax;
      END //
      DELIMITER ;
      -- Usage:
      SELECT CalculateTax(100) AS tax_amount;
    `,
  },
  {
    id: 17,
    question: "How do you create and use a stored function?",
    answer:
      "1. Define the function with `CREATE FUNCTION`.\n2. Specify the return type.\n3. Use `RETURN` to send back the result.\n4. Call it in SQL statements like `SELECT function_name(arguments)`.",
    syntax: "CREATE FUNCTION, RETURN, DROP FUNCTION",
    example: "Example: A function to concatenate first and last names.",
    realTimeExample:
      "Like a **vending machine**: You select (call) an item (function) and get a result (return value).",
    codeExample: `
      DELIMITER //
      CREATE FUNCTION FullName(first VARCHAR(50), last VARCHAR(50))
      RETURNS VARCHAR(101)
      BEGIN
        RETURN CONCAT(first, ' ', last);
      END //
      DELIMITER ;
      -- Usage:
      SELECT FullName('John', 'Doe') AS full_name;
    `,
  },
  {
    id: 18,
    question:
      "What is the difference between a stored procedure and a stored function?",
    answer:
      "1. **Stored Procedure**: Can return multiple results, doesn’t return a value directly, called with `CALL`.\n2. **Stored Function**: Returns a single value, can be used in SQL statements (e.g., `SELECT`), called like a function.",
    syntax: "CALL procedure_name; SELECT function_name();",
    example:
      "Example: Use a function in `SELECT function_name(column) FROM table;`.",
    realTimeExample:
      "A procedure is like a **multi-step recipe**. A function is like a **single calculation** (e.g., adding tax).",
  },
  {
    id: 19,
    question: "What is a temporary table in MySQL?",
    answer:
      "A temporary table is a **short-lived table** visible only to the current connection. It’s automatically dropped when the connection closes or the session ends. Useful for storing intermediate results.",
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
    id: 20,
    question: "How do you create and use a temporary table?",
    answer:
      "1. Create the table with `CREATE TEMPORARY TABLE`.\n2. Use it like a regular table within the session.\n3. It’s automatically dropped when the session ends.",
    syntax: "CREATE TEMPORARY TABLE, DROP TEMPORARY TABLE",
    example: "Example: Creating a temporary table for session-specific data.",
    realTimeExample:
      "Like **setting up a temporary workspace**: You clean it up (drop) when done.",
    codeExample: `
      CREATE TEMPORARY TABLE session_data (
        user_id INT,
        last_activity TIMESTAMP
      );
      -- Usage:
      INSERT INTO session_data VALUES (1, NOW());
    `,
  },
  {
    id: 21,
    question: "What is a composite key in MySQL?",
    answer:
      "A composite key is a **primary key composed of two or more columns**. It uniquely identifies rows when a single column isn’t sufficient (e.g., junction tables).",
    syntax: "PRIMARY KEY (column1, column2, ...)",
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
    id: 22,
    question: "How do you use ON DELETE CASCADE in foreign keys?",
    answer:
      "ON DELETE CASCADE **automatically deletes** rows in the child table when the referenced row in the parent table is deleted. Use it to maintain referential integrity.",
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
    id: 23,
    question: "What is a cross join in MySQL?",
    answer:
      "A cross join (Cartesian product) returns **all possible combinations** of rows from two tables. Useful for generating data sets but can be resource-intensive.",
    syntax: "SELECT columns FROM table1 CROSS JOIN table2;",
    example:
      "Example: `SELECT sizes.size_name, colors.color_name FROM sizes CROSS JOIN colors;` generates all size-color combinations.",
    realTimeExample:
      "Like **mixing and matching shirts and pants**: Every shirt (row) is paired with every pant (row).",
    codeExample: `
      SELECT
        s.size_name,
        c.color_name
      FROM sizes s
      CROSS JOIN colors c;
    `,
  },
  {
    id: 24,
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
    id: 25,
    question: "What is the IFNULL function in MySQL?",
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
    id: 26,
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
    id: 27,
    question: "What is the NOW() function in MySQL?",
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
    id: 28,
    question: "How do you use the DATE_FORMAT function?",
    answer:
      "DATE_FORMAT **formats a date** as a string using format specifiers (e.g., `%Y` for year, `%M` for month name).",
    syntax: "DATE_FORMAT(date, 'format_string');",
    example:
      "Example: `SELECT DATE_FORMAT(birthdate, '%M %d, %Y') FROM users;` returns ‘June 15, 1990’.",
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
    id: 29,
    question: "What is the DATEDIFF function in MySQL?",
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
    id: 30,
    question: "How do you use the CONCAT function in MySQL?",
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
    id: 31,
    question: "What is the SUBSTRING function in MySQL?",
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
    id: 32,
    question: "How do you use the LENGTH function in MySQL?",
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
    id: 33,
    question: "What is the REPLACE function in MySQL?",
    answer:
      "REPLACE **replaces all occurrences** of a substring within a string with another substring.",
    syntax: "REPLACE(string, old_substring, new_substring);",
    example:
      "Example: `UPDATE users SET email = REPLACE(email, '@old.com', '@new.com');` updates email domains.",
    realTimeExample: "Like **using ‘Find and Replace’** in a word processor.",
    codeExample: `
      SELECT
        REPLACE(description, 'old', 'new') AS updated_desc
      FROM products;
    `,
  },
  {
    id: 34,
    question: "How do you use the ROUND function in MySQL?",
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
    id: 35,
    question: "What is the FLOOR and CEILING function in MySQL?",
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
    id: 36,
    question: "How do you use the ABS function in MySQL?",
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
    id: 37,
    question: "What is the MOD function in MySQL?",
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
    id: 38,
    question: "How do you use the POWER function in MySQL?",
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
    id: 39,
    question: "What is the SQRT function in MySQL?",
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
    id: 40,
    question: "How do you use the RAND function in MySQL?",
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
    id: 41,
    question: "What is the GREATEST and LEAST function in MySQL?",
    answer:
      "GREATEST returns the **largest value** in a list. LEAST returns the **smallest value**.",
    syntax: "GREATEST(value1, value2, ...), LEAST(value1, value2, ...)",
    example:
      "Example: `SELECT GREATEST(price, discount_price) FROM products;` picks the higher price.",
    realTimeExample:
      "GREATEST is like **finding the tallest person** in a group. LEAST is like finding the shortest.",
  },
  {
    id: 42,
    question: "How do you use the IF function in MySQL?",
    answer:
      "IF returns one value if a condition is true, and another if false. Similar to a ternary operator in programming.",
    syntax: "IF(condition, value_if_true, value_if_false);",
    example: "Example: `SELECT IF(age >= 18, 'Adult', 'Minor') FROM users;`.",
    realTimeExample:
      "Like **choosing an outfit**: If it’s cold (condition), wear a coat (true); else, wear a shirt (false).",
    codeExample: `
      SELECT
        name,
        IF(active = 1, 'Active', 'Inactive') AS status
      FROM customers;
    `,
  },
  {
    id: 43,
    question: "What is the use of the DEFAULT constraint in MySQL?",
    answer:
      "DEFAULT assigns a **default value** to a column if no value is specified during insertion.",
    syntax: "column_name datatype DEFAULT default_value",
    example:
      "Example: `status VARCHAR(20) DEFAULT 'active'` sets ‘active’ if no status is provided.",
    realTimeExample:
      "Like a **default ringtone**: If you don’t pick one, the phone uses the default.",
    codeExample: `
      CREATE TABLE tasks (
        id INT PRIMARY KEY,
        status VARCHAR(20) DEFAULT 'pending'
      );
    `,
  },
  {
    id: 44,
    question: "What is a composite index in MySQL?",
    answer:
      "A composite index is an **index on multiple columns**. It improves query performance for searches involving those columns.",
    syntax: "CREATE INDEX index_name ON table_name (column1, column2, ...);",
    example:
      "Example: `CREATE INDEX idx_name_age ON students (name, age);` speeds up queries filtering by both name and age.",
    realTimeExample:
      "Like a **phone book sorted by last name and first name**: It helps you find (query) people (rows) faster.",
    codeExample: `
      CREATE INDEX idx_dept_salary ON employees (department, salary);
    `,
  },
  {
    id: 45,
    question: "How do you create and use a composite index?",
    answer:
      "1. Create the index with `CREATE INDEX`.\n2. Include multiple columns in the order they’re used in queries.\n3. MySQL uses the index for queries that filter on the leftmost columns.",
    syntax: "CREATE INDEX, DROP INDEX",
    example:
      "Example: Creating an index on `(last_name, first_name)` for faster name searches.",
    realTimeExample:
      "Like **sorting a deck of cards by suit and rank**: It’s efficient if you search by suit (leftmost column) first.",
    codeExample: `
      CREATE INDEX idx_customer_region ON customers (region, last_name);
    `,
  },
  {
    id: 46,
    question: "What is a covering index in MySQL?",
    answer:
      "A covering index is an **index that includes all columns** needed for a query, allowing MySQL to retrieve data directly from the index without accessing the table (index-only scan).",
    syntax: "CREATE INDEX index_name ON table_name (column1, column2, ...);",
    example:
      "Example: An index on `(department, salary)` can cover `SELECT salary FROM employees WHERE department = 'IT'`.",
    realTimeExample:
      "Like a **library catalog**: It includes all details (columns) you need, so you don’t have to fetch the book (table).",
  },
  {
    id: 47,
    question: "How do you optimize queries using indexes?",
    answer:
      "1. **Create indexes** on columns used in WHERE, JOIN, and ORDER BY clauses.\n2. Use **composite indexes** for multiple columns.\n3. Avoid **over-indexing** (too many indexes slow down writes).\n4. Use `EXPLAIN` to analyze query performance.",
    syntax: "CREATE INDEX, EXPLAIN, ANALYZE TABLE",
    example: "Example: Adding an index on `email` for faster logins.",
    realTimeExample:
      "Like **adding tabs to a notebook**: It helps you find (query) sections (data) faster.",
    codeExample: `
      EXPLAIN SELECT * FROM users WHERE email = 'alice@example.com';
      CREATE INDEX idx_email ON users(email);
    `,
  },
  {
    id: 48,
    question: "What is the EXPLAIN statement in MySQL?",
    answer:
      "EXPLAIN provides a **query execution plan**, showing how MySQL will execute a query. It helps identify performance bottlenecks (e.g., full table scans).",
    syntax: "EXPLAIN SELECT query;",
    example:
      "Example: `EXPLAIN SELECT * FROM users WHERE age > 30;` checks if an index is used.",
    realTimeExample:
      "Like a **GPS route preview**: It shows (EXPLAIN) the path (execution plan) before you drive (execute).",
    codeExample: `
      EXPLAIN SELECT name FROM employees WHERE salary > 50000;
    `,
  },
  {
    id: 49,
    question: "How do you use the EXPLAIN statement?",
    answer:
      "1. Prefix your query with `EXPLAIN`.\n2. Look for `type: ALL` (full table scan) or `rows: high` (many rows examined).\n3. Optimize by adding indexes or rewriting the query.",
    syntax: "EXPLAIN, type, rows, key, Extra",
    example: "Example: Identifying a missing index for a slow query.",
    realTimeExample:
      "Like a **doctor’s diagnosis**: EXPLAIN finds (diagnoses) what’s slowing down (bottleneck) your query (patient).",
  },
  {
    id: 50,
    question: "What is a full-text index in MySQL?",
    answer:
      "A full-text index is a **special index** for searching text columns efficiently. It supports natural language and boolean searches (e.g., `MATCH ... AGAINST`).",
    syntax:
      "CREATE FULLTEXT INDEX index_name ON table_name (column_name); MATCH(column) AGAINST('search_term');",
    example:
      "Example: Searching for articles containing ‘database optimization’.",
    realTimeExample:
      "Like a **search engine**: It indexes (FULLTEXT) words (text) for fast searches (MATCH ... AGAINST).",
    codeExample: `
      CREATE FULLTEXT INDEX idx_article_content ON articles(content);
      SELECT * FROM articles
      WHERE MATCH(content) AGAINST('database optimization');
    `,
  },
  {
    id: 51,
    question: "How do you create and use a full-text index?",
    answer:
      "1. Create the index with `CREATE FULLTEXT INDEX`.\n2. Use `MATCH ... AGAINST` in queries.\n3. Supports natural language (`IN NATURAL LANGUAGE MODE`) or boolean (`IN BOOLEAN MODE`) searches.",
    syntax:
      "CREATE FULLTEXT INDEX, MATCH ... AGAINST, IN NATURAL LANGUAGE MODE",
    example: "Example: Finding products with ‘wireless’ in their description.",
    realTimeExample:
      "Like **Google Search**: It finds (MATCH) relevant pages (rows) based on keywords (search_term).",
    codeExample: `
      ALTER TABLE products ADD FULLTEXT(description);
      SELECT * FROM products
      WHERE MATCH(description) AGAINST('wireless headphones' IN NATURAL LANGUAGE MODE);
    `,
  },
  {
    id: 52,
    question: "What is a partition in MySQL?",
    answer:
      "A partition divides a **large table into smaller, manageable parts** (partitions) based on a rule (e.g., range, list, hash). Improves performance and maintenance.",
    syntax: "PARTITION BY RANGE|LIST|HASH(column)",
    example: "Example: Partitioning sales data by year.",
    realTimeExample:
      "Like **dividing a book into chapters**: Each partition (chapter) is easier to handle (query).",
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
    id: 53,
    question: "How do you create and use table partitions?",
    answer:
      "1. Define partitions with `PARTITION BY`.\n2. Use `RANGE`, `LIST`, or `HASH` partitioning.\n3. Query the table normally; MySQL handles partition selection.",
    syntax: "PARTITION BY, RANGE, LIST, HASH",
    example: "Example: Partitioning customer data by region.",
    realTimeExample:
      "Like **sorting files into folders**: Each partition (folder) holds related data (files).",
    codeExample: `
      CREATE TABLE customers (
        id INT,
        name VARCHAR(50),
        region VARCHAR(20)
      )
      PARTITION BY LIST (region) (
        PARTITION p_north VALUES IN ('North', 'Northeast'),
        PARTITION p_south VALUES IN ('South', 'Southeast')
      );
    `,
  },
  {
    id: 54,
    question: "What is replication in MySQL?",
    answer:
      "Replication copies data from a **master server** to one or more **slave servers**, improving availability, load balancing, and data redundancy.",
    syntax: "CHANGE MASTER TO, START SLAVE, SHOW SLAVE STATUS",
    example: "Example: Setting up a slave server for read scaling.",
    realTimeExample:
      "Like **photocopying a document**: The master (original) is copied (replicated) to slaves (copies).",
  },
  {
    id: 55,
    question: "How do you set up MySQL replication?",
    answer:
      "1. Configure the master (`my.cnf`): `server-id`, `log_bin`, `binlog-do-db`.\n2. Create a replication user on the master.\n3. Configure the slave (`my.cnf`): `server-id`, `relay-log`.\n4. Start replication on the slave: `START SLAVE`.",
    syntax: "CHANGE MASTER TO, START SLAVE, SHOW MASTER STATUS",
    example: "Example: Replicating a production database to a backup server.",
    realTimeExample:
      "Like **setting up a mirror**: The slave (mirror) reflects (replicates) the master (original).",
    codeExample: `
      -- On master:
      GRANT REPLICATION SLAVE ON *.* TO 'replica_user'@'%' IDENTIFIED BY 'password';
      FLUSH PRIVILEGES;
      -- On slave:
      CHANGE MASTER TO
        MASTER_HOST='master_ip',
        MASTER_USER='replica_user',
        MASTER_PASSWORD='password',
        MASTER_LOG_FILE='mysql-bin.000001',
        MASTER_LOG_POS=123;
      START SLAVE;
    `,
  },
  {
    id: 56,
    question: "What is a read replica in MySQL?",
    answer:
      "A read replica is a **slave server** that replicates data from a master and is used for **read-only queries**, reducing load on the master.",
    syntax: "CHANGE MASTER TO, START SLAVE, READ ONLY",
    example: "Example: Directing analytical queries to a read replica.",
    realTimeExample:
      "Like a **library copy**: You read (query) the copy (replica) but can’t edit (write) it.",
  },
  {
    id: 57,
    question: "How do you optimize MySQL for high traffic?",
    answer:
      "1. **Use indexing** for frequently queried columns.\n2. **Enable caching** (`query_cache_type`).\n3. **Scale reads** with replication.\n4. **Optimize queries** with `EXPLAIN`.\n5. **Tune server variables** (e.g., `innodb_buffer_pool_size`).",
    syntax: "query_cache_type, innodb_buffer_pool_size, EXPLAIN",
    example:
      "Example: Increasing `innodb_buffer_pool_size` for a high-traffic e-commerce site.",
    realTimeExample:
      "Like **upgrading a highway**: You add lanes (replicas), smooth curves (indexes), and clear signs (optimized queries) for faster traffic (queries).",
  },
  {
    id: 58,
    question: "What is the MySQL query cache?",
    answer:
      "The query cache **stores the results of SELECT queries** so that identical queries can be served faster. Disabled by default in MySQL 8.0+.",
    syntax: "query_cache_type, query_cache_size, FLUSH QUERY CACHE",
    example: "Example: Enabling the query cache for a read-heavy application.",
    realTimeExample:
      "Like a **café’s display case**: Frequently ordered items (queries) are kept ready (cached) for quick service.",
    codeExample: `
      SET GLOBAL query_cache_type = 1;
      SET GLOBAL query_cache_size = 1000000; -- 1MB cache
    `,
  },
  {
    id: 59,
    question: "How do you enable and configure the query cache?",
    answer:
      "1. Set `query_cache_type=1` in `my.cnf`.\n2. Allocate memory with `query_cache_size`.\n3. Restart MySQL or set variables dynamically.\n4. Monitor with `SHOW STATUS LIKE 'Qcache%';`.",
    syntax: "query_cache_type, query_cache_size, SHOW STATUS LIKE 'Qcache%'",
    example: "Example: Configuring a 10MB query cache.",
    realTimeExample:
      "Like **setting up a vending machine**: You stock (cache) popular items (queries) for quick access.",
  },
  {
    id: 60,
    question: "What is the InnoDB storage engine?",
    answer:
      "InnoDB is MySQL’s **default transactional storage engine**. It supports **ACID transactions**, row-level locking, foreign keys, and crash recovery.",
    syntax: "ENGINE=InnoDB, SHOW ENGINES",
    example:
      "Example: Using InnoDB for a banking application requiring transactions.",
    realTimeExample:
      "Like a **bank vault**: It ensures (ACID) transactions (deposits/withdrawals) are secure (durable) and consistent.",
  },
  {
    id: 61,
    question: "How do you convert a table to InnoDB?",
    answer:
      "Use `ALTER TABLE table_name ENGINE=InnoDB;` to convert a table. Backup the table first, as conversion may take time for large tables.",
    syntax: "ALTER TABLE, ENGINE=InnoDB",
    example:
      "Example: Converting a MyISAM table to InnoDB for transaction support.",
    realTimeExample:
      "Like **upgrading a car’s engine**: You replace (ALTER) the old engine (MyISAM) with a new one (InnoDB).",
    codeExample: `
      ALTER TABLE orders ENGINE=InnoDB;
    `,
  },
  {
    id: 62,
    question: "What is the MyISAM storage engine?",
    answer:
      "MyISAM is a **non-transactional storage engine** optimized for read-heavy workloads. It supports full-text indexing and table-level locking but lacks foreign keys and transactions.",
    syntax: "ENGINE=MyISAM, SHOW ENGINES",
    example: "Example: Using MyISAM for a read-only reporting database.",
    realTimeExample:
      "Like a **library catalog**: Fast for lookups (reads) but not for updates (writes).",
  },
  {
    id: 63,
    question: "When should you use MyISAM vs. InnoDB?",
    answer:
      "Use **MyISAM** for:\n- Read-heavy workloads.\n- Full-text search.\n- Simple, non-transactional applications.\n\nUse **InnoDB** for:\n- Transactional applications (ACID).\n- High concurrency (row-level locking).\n- Foreign key support.",
    syntax: "ENGINE=MyISAM, ENGINE=InnoDB",
    example:
      "Example: MyISAM for a blog (reads), InnoDB for an e-commerce site (transactions).",
    realTimeExample:
      "MyISAM is like a **read-only encyclopedia**. InnoDB is like a **bank ledger** with edits and transactions.",
  },
  {
    id: 64,
    question: "What is a deadlock in MySQL?",
    answer:
      "A deadlock occurs when **two or more transactions wait indefinitely** for locks held by each other, causing a standstill. MySQL automatically detects and resolves deadlocks by rolling back one transaction.",
    syntax: "SHOW ENGINE INNODB STATUS, transaction isolation levels",
    example:
      "Example: Transaction A locks row 1 and waits for row 2, while Transaction B locks row 2 and waits for row 1.",
    realTimeExample:
      "Like a **traffic jam**: Cars (transactions) block each other, and traffic police (MySQL) intervene to clear the jam (rollback).",
  },
  {
    id: 65,
    question: "How do you handle deadlocks in MySQL?",
    answer:
      "1. **Design transactions** to acquire locks in a consistent order.\n2. **Keep transactions short** and avoid user interaction mid-transaction.\n3. **Use `SHOW ENGINE INNODB STATUS`** to diagnose deadlocks.\n4. **Retry transactions** automatically on deadlock errors.",
    syntax: "SHOW ENGINE INNODB STATUS, START TRANSACTION, ROLLBACK",
    example: "Example: Retrying a transaction after catching a deadlock error.",
    realTimeExample:
      "Like **reversing a car** out of a deadlock: You back up (rollback) and try a different route (retry).",
    codeExample: `
      START TRANSACTION;
      -- Attempt operations
      COMMIT;
      -- On deadlock error (1213), retry
    `,
  },
  {
    id: 66,
    question: "What are transaction isolation levels in MySQL?",
    answer:
      "Isolation levels define **how transactions interact** with each other:\n1. **READ UNCOMMITTED**: Dirty reads allowed.\n2. **READ COMMITTED**: Only committed data is read.\n3. **REPEATABLE READ** (default): Consistent reads within a transaction.\n4. **SERIALIZABLE**: Highest isolation; transactions execute serially.",
    syntax: "SET TRANSACTION ISOLATION LEVEL level;",
    example:
      "Example: Setting isolation level to `READ COMMITTED` for a reporting query.",
    realTimeExample:
      "Like **soundproof rooms**: Higher levels (SERIALIZABLE) block more noise (interference) from other transactions.",
    codeExample: `
      SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
      START TRANSACTION;
      -- Queries here
      COMMIT;
    `,
  },
  {
    id: 67,
    question: "How do you set transaction isolation levels?",
    answer:
      "Use `SET TRANSACTION ISOLATION LEVEL` before starting a transaction. Global setting: `SET GLOBAL transaction_isolation='level';`.",
    syntax: "SET TRANSACTION ISOLATION LEVEL, SET GLOBAL transaction_isolation",
    example: "Example: Setting `REPEATABLE READ` for a financial transaction.",
    realTimeExample:
      "Like **adjusting privacy settings**: You control (isolation level) who can see (read) your data (transaction).",
  },
  {
    id: 68,
    question: "What is a covering index in MySQL?",
    answer:
      "A covering index is an **index that includes all columns** needed for a query, allowing MySQL to retrieve data directly from the index without accessing the table (index-only scan).",
    syntax: "CREATE INDEX index_name ON table_name (column1, column2, ...);",
    example:
      "Example: An index on `(department, salary)` can cover `SELECT salary FROM employees WHERE department = 'IT'`.",
    realTimeExample:
      "Like a **library catalog**: It includes all details (columns) you need, so you don’t have to fetch the book (table).",
  },
  {
    id: 69,
    question: "How do you create a covering index?",
    answer:
      "1. Identify columns used in `WHERE`, `SELECT`, and `ORDER BY`.\n2. Create an index including all these columns.\n3. MySQL can then perform an **index-only scan**.",
    syntax: "CREATE INDEX, EXPLAIN",
    example: "Example: Creating a covering index for a user search query.",
    realTimeExample:
      "Like **packing a lunchbox**: You include (index) everything (columns) you’ll need (query) for the day.",
    codeExample: `
      CREATE INDEX idx_user_search ON users (last_name, first_name, email);
      -- Covers: SELECT email FROM users WHERE last_name = 'Smith' AND first_name = 'John';
    `,
  },
  {
    id: 70,
    question: "What is a clustered index in MySQL?",
    answer:
      "A clustered index **determines the physical order of data** in a table. In InnoDB, the primary key is the clustered index; all data is stored in the primary key’s B-tree.",
    syntax: "PRIMARY KEY, InnoDB",
    example: "Example: In InnoDB, `PRIMARY KEY (id)` clusters data by `id`.",
    realTimeExample:
      "Like a **phone book sorted by last name**: The order (clustered index) defines how you find (query) entries (rows).",
  },
];

// Make data available globally
window.intermediate = intermediate;
