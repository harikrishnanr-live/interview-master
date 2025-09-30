// NoSQL Beginner Level Q&A Data

let beginner = [
  {
    id: 1,
    question: "What is NoSQL?",
    answer: "NoSQL (Not Only SQL) is a database design approach that provides flexible schemas for storing and retrieving data beyond traditional relational databases."
  },
  {
    id: 2,
    question: "What are the main types of NoSQL databases?",
    answer: "Document stores (MongoDB), Key-value stores (Redis), Column-family stores (Cassandra), and Graph databases (Neo4j)."
  },
  {
    id: 3,
    question: "What is MongoDB?",
    answer: "MongoDB is a document-oriented NoSQL database that stores data in flexible, JSON-like documents with dynamic schemas."
  },
  {
    id: 4,
    question: "What are documents in MongoDB?",
    answer: "Documents are the basic unit of data in MongoDB, similar to rows in relational databases but with a flexible schema."
  },
  {
    id: 5,
    question: "What are collections in MongoDB?",
    answer: "Collections are groups of MongoDB documents, similar to tables in relational databases."
  }
];

// Make data available globally
window.beginner = beginner;