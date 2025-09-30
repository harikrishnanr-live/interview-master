// NoSQL Advanced Level Q&A Data

let advanced = [
  {
    id: 1,
    question: "What is Redis?",
    answer: "Redis is an open-source, in-memory data structure store used as a database, cache, and message broker."
  },
  {
    id: 2,
    question: "What are the advantages of NoSQL databases?",
    answer: "Flexible schemas, horizontal scalability, better performance for certain workloads, and easier handling of large volumes of unstructured data."
  },
  {
    id: 3,
    question: "What is eventual consistency?",
    answer: "Eventual consistency is a consistency model used in distributed computing to achieve high availability that informally guarantees that, if no new updates are made to a given data item, eventually all accesses to that item will return the last updated value."
  },
  {
    id: 4,
    question: "What is CAP theorem?",
    answer: "CAP theorem states that it is impossible for a distributed data store to simultaneously provide more than two out of the following three guarantees: Consistency, Availability, and Partition tolerance."
  },
  {
    id: 5,
    question: "What is Cassandra?",
    answer: "Apache Cassandra is a free and open-source, distributed, wide-column store, NoSQL database management system designed to handle large amounts of data across many commodity servers."
  }
];

// Make data available globally
window.advanced = advanced;