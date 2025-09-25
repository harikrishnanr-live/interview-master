// MySQL Q&A Data
let mysqlData = [
    {
        "id": 1,
        "question": "What is MySQL?",
        "answer": "MySQL is an open-source relational database management system (RDBMS) that uses SQL (Structured Query Language) for managing and manipulating data."
    },
    {
        "id": 2,
        "question": "What is a primary key?",
        "answer": "A primary key is a column or set of columns that uniquely identifies each row in a table. It must contain unique values and cannot be NULL."
    },
    {
        "id": 3,
        "question": "What is a foreign key?",
        "answer": "A foreign key is a column or set of columns in one table that refers to the primary key in another table, establishing a relationship between the tables."
    },
    {
        "id": 4,
        "question": "What is the difference between CHAR and VARCHAR?",
        "answer": "CHAR is fixed-length and pads with spaces, while VARCHAR is variable-length and only stores the actual data plus a length prefix."
    },
    {
        "id": 5,
        "question": "What are indexes in MySQL?",
        "answer": "Indexes are data structures that improve the speed of data retrieval operations on database tables at the cost of additional space and slower write operations."
    },
    {
        "id": 6,
        "question": "What is a JOIN in SQL?",
        "answer": "A JOIN is used to combine rows from two or more tables based on a related column between them."
    },
    {
        "id": 7,
        "question": "What are the different types of JOINs?",
        "answer": "INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN, and CROSS JOIN."
    },
    {
        "id": 8,
        "question": "What is normalization?",
        "answer": "Normalization is the process of organizing data in a database to reduce redundancy and improve data integrity."
    },
    {
        "id": 9,
        "question": "What are the normal forms?",
        "answer": "First Normal Form (1NF), Second Normal Form (2NF), Third Normal Form (3NF), Boyce-Codd Normal Form (BCNF), Fourth Normal Form (4NF), and Fifth Normal Form (5NF)."
    },
    {
        "id": 10,
        "question": "What is a stored procedure?",
        "answer": "A stored procedure is a prepared SQL code that you can save and reuse. It can accept parameters and return results."
    },
    {
        "id": 11,
        "question": "What are triggers in MySQL?",
        "answer": "Triggers are SQL statements that are automatically executed when specific events occur in a database, such as INSERT, UPDATE, or DELETE operations."
    },
    {
        "id": 12,
        "question": "What is ACID in database systems?",
        "answer": "ACID stands for Atomicity, Consistency, Isolation, and Durability - properties that guarantee reliable processing of database transactions."
    },
    {
        "id": 13,
        "question": "What is the difference between WHERE and HAVING clauses?",
        "answer": "WHERE filters rows before grouping, while HAVING filters groups after the GROUP BY clause is applied."
    },
    {
        "id": 14,
        "question": "What are views in MySQL?",
        "answer": "Views are virtual tables based on the result of a SELECT statement. They don't store data themselves but provide a way to look at data from one or more tables."
    },
    {
        "id": 15,
        "question": "What is the EXPLAIN statement?",
        "answer": "EXPLAIN shows how MySQL executes a query, including which indexes are used and how tables are joined, helping to optimize query performance."
    }
];

// Make data available globally
window.mysqlData = mysqlData;
