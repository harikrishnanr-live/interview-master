// PHP Advanced Level Q&A Data

let advanced = [
  {
    id: 1,
    question:
      "What is the difference between abstract classes and interfaces in PHP?",
    answer:
      "Abstract classes can have both abstract and concrete methods, while interfaces can only have abstract methods. A class can implement multiple interfaces but extend only one abstract class.",
  },
  {
    id: 2,
    question: "What is autoloading in PHP?",
    answer:
      "Autoloading allows PHP to automatically load class files when they are needed, eliminating the need for manual include/require statements.",
  },
  {
    id: 3,
    question: "What is Composer in PHP?",
    answer:
      "Composer is a dependency management tool for PHP that allows you to declare the libraries your project depends on.",
  },
  {
    id: 4,
    question: "What are namespaces in PHP?",
    answer:
      "Namespaces allow you to organize code into logical groups and prevent name collisions between classes, functions, and constants.",
  },
  {
    id: 5,
    question: "What is the difference between GET and POST methods?",
    answer:
      "GET sends data in the URL and is less secure, while POST sends data in the request body and is more secure for sensitive data.",
  },
];

// Make data available globally
window.advanced = advanced;
