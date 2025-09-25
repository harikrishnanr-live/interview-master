// NoSQL Q&A Data
let nosqlData = [
    {
        "id": 1,
        "question": "What is NoSQL?",
        "answer": "NoSQL (Not Only SQL) is a database design approach that provides flexible schemas for storing and retrieving data beyond traditional relational databases."
    },
    {
        "id": 2,
        "question": "What are the main types of NoSQL databases?",
        "answer": "Document stores (MongoDB), Key-value stores (Redis), Column-family stores (Cassandra), and Graph databases (Neo4j)."
    },
    {
        "id": 3,
        "question": "What is MongoDB?",
        "answer": "MongoDB is a document-oriented NoSQL database that stores data in flexible, JSON-like documents with dynamic schemas."
    },
    {
        "id": 4,
        "question": "What are documents in MongoDB?",
        "answer": "Documents are the basic unit of data in MongoDB, similar to rows in relational databases but with a flexible schema."
    },
    {
        "id": 5,
        "question": "What are collections in MongoDB?",
        "answer": "Collections are groups of MongoDB documents, similar to tables in relational databases."
    },
    {
        "id": 6,
        "question": "What is BSON in MongoDB?",
        "answer": "BSON (Binary JSON) is the binary-encoded serialization of JSON-like documents used by MongoDB for storage and network transfer."
    },
    {
        "id": 7,
        "question": "What is the difference between SQL and NoSQL databases?",
        "answer": "SQL databases are relational with fixed schemas, while NoSQL databases are non-relational with flexible schemas and are better for handling large volumes of unstructured data."
    },
    {
        "id": 8,
        "question": "What is sharding in MongoDB?",
        "answer": "Sharding is the process of distributing data across multiple machines to support deployments with very large data sets and high throughput operations."
    },
    {
        "id": 9,
        "question": "What are indexes in MongoDB?",
        "answer": "Indexes support the efficient execution of queries in MongoDB by storing a small portion of the collection's data in an easy-to-traverse form."
    },
    {
        "id": 10,
        "question": "What is aggregation in MongoDB?",
        "answer": "Aggregation operations process data records and return computed results. MongoDB provides aggregation pipeline for data processing."
    },
    {
        "id": 11,
        "question": "What is Redis?",
        "answer": "Redis is an open-source, in-memory data structure store used as a database, cache, and message broker."
    },
    {
        "id": 12,
        "question": "What are the advantages of NoSQL databases?",
        "answer": "Flexible schemas, horizontal scalability, better performance for certain workloads, and easier handling of large volumes of unstructured data."
    },
    {
        "id": 13,
        "question": "What is eventual consistency?",
        "answer": "Eventual consistency is a consistency model used in distributed computing to achieve high availability that informally guarantees that, if no new updates are made to a given data item, eventually all accesses to that item will return the last updated value."
    },
    {
        "id": 14,
        "question": "What is CAP theorem?",
        "answer": "CAP theorem states that it is impossible for a distributed data store to simultaneously provide more than two out of the following three guarantees: Consistency, Availability, and Partition tolerance."
    },
    {
        "id": 15,
        "question": "What is Cassandra?",
        "answer": "Apache Cassandra is a free and open-source, distributed, wide-column store, NoSQL database management system designed to handle large amounts of data across many commodity servers."
    }
];

// Make data available globally
window.nosqlData = nosqlData;
