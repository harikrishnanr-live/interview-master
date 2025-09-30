// NoSQL Intermediate Level Q&A Data

let intermediate = [
  {
    id: 1,
    question: "What is BSON in MongoDB?",
    answer:
      "BSON (Binary JSON) is the binary-encoded serialization of JSON-like documents used by MongoDB for storage and network transfer.",
  },
  {
    id: 2,
    question: "What is the difference between SQL and NoSQL databases?",
    answer:
      "SQL databases are relational with fixed schemas, while NoSQL databases are non-relational with flexible schemas and are better for handling large volumes of unstructured data.",
  },
  {
    id: 3,
    question: "What is sharding in MongoDB?",
    answer:
      "Sharding is the process of distributing data across multiple machines to support deployments with very large data sets and high throughput operations.",
  },
  {
    id: 4,
    question: "What are indexes in MongoDB?",
    answer:
      "Indexes support the efficient execution of queries in MongoDB by storing a small portion of the collection's data in an easy-to-traverse form.",
  },
  {
    id: 5,
    question: "What is aggregation in MongoDB?",
    answer:
      "Aggregation operations process data records and return computed results. MongoDB provides aggregation pipeline for data processing.",
  },
];

// Make data available globally
window.intermediate = intermediate;
