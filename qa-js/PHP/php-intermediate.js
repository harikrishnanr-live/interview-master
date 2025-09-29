// PHP Intermediate Level Q&A Data

let intermediate = [
  {
    id: 1,
    question: "What are sessions in PHP?",
    answer: "Sessions allow you to store user information across multiple pages for the duration of a user's visit to your website."
  },
  {
    id: 2,
    question: "What are cookies in PHP?",
    answer: "Cookies are small files stored on the user's computer that contain user-specific information."
  },
  {
    id: 3,
    question: "What is PDO in PHP?",
    answer: "PDO (PHP Data Objects) is a database abstraction layer that provides a consistent interface for accessing databases."
  },
  {
    id: 4,
    question: "What is the difference between mysqli and PDO?",
    answer: "mysqli is specific to MySQL databases, while PDO supports multiple database types and provides better security features."
  },
  {
    id: 5,
    question: "What are traits in PHP?",
    answer: "Traits are a mechanism for code reuse in single inheritance languages like PHP. They allow you to include methods in multiple classes."
  }
];

// Make data available globally
window.intermediate = intermediate;