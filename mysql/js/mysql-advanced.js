// MySQL Advanced Level Q&A Data

let advanced = [
  {
    id: 1,
    question: "What are triggers in MySQL?",
    answer: "Triggers are SQL statements that are automatically executed when specific events occur in a database, such as INSERT, UPDATE, or DELETE operations."
  },
  {
    id: 2,
    question: "What is ACID in database systems?",
    answer: "ACID stands for Atomicity, Consistency, Isolation, and Durability - properties that guarantee reliable processing of database transactions."
  },
  {
    id: 3,
    question: "What is the difference between WHERE and HAVING clauses?",
    answer: "WHERE filters rows before grouping, while HAVING filters groups after the GROUP BY clause is applied."
  },
  {
    id: 4,
    question: "What are views in MySQL?",
    answer: "Views are virtual tables based on the result of a SELECT statement. They don't store data themselves but provide a way to look at data from one or more tables."
  },
  {
    id: 5,
    question: "What is the EXPLAIN statement?",
    answer: "EXPLAIN shows how MySQL executes a query, including which indexes are used and how tables are joined, helping to optimize query performance."
  }
];

// Make data available globally
window.advanced = advanced;