// MySQL Beginner Level Q&A Data

let beginner = [
  {
    id: 1,
    question: "What is MySQL?",
    answer:
      "MySQL is an open-source relational database management system (RDBMS) that uses SQL (Structured Query Language) for managing and manipulating data.",
  },
  {
    id: 2,
    question: "What is a primary key?",
    answer:
      "A primary key is a column or set of columns that uniquely identifies each row in a table. It must contain unique values and cannot be NULL.",
  },
  {
    id: 3,
    question: "What is a foreign key?",
    answer:
      "A foreign key is a column or set of columns in one table that refers to the primary key in another table, establishing a relationship between the tables.",
  },
  {
    id: 4,
    question: "What is the difference between CHAR and VARCHAR?",
    answer:
      "CHAR is fixed-length and pads with spaces, while VARCHAR is variable-length and only stores the actual data plus a length prefix.",
  },
  {
    id: 5,
    question: "What are indexes in MySQL?",
    answer:
      "Indexes are data structures that improve the speed of data retrieval operations on database tables at the cost of additional space and slower write operations.",
  },
];

// Make data available globally
window.beginner = beginner;
