// PHP Beginner Level Q&A Data

let beginner = [
  {
    id: 1,
    question: "What is PHP?",
    answer:
      "PHP (Hypertext Preprocessor) is a server-side scripting language designed for web development and can be embedded into HTML.",
  },
  {
    id: 2,
    question: "What are the different types of variables in PHP?",
    answer:
      "PHP supports several data types: strings, integers, floats, booleans, arrays, objects, NULL, and resources.",
  },
  {
    id: 3,
    question: "What is the difference between == and === in PHP?",
    answer:
      "== compares values after type coercion, while === compares both value and type (strict comparison).",
  },
  {
    id: 4,
    question: "What are superglobals in PHP?",
    answer:
      "Superglobals are built-in variables that are always available in all scopes: $_GET, $_POST, $_SESSION, $_COOKIE, $_SERVER, $_FILES, $_ENV, $_REQUEST.",
  },
  {
    id: 5,
    question: "What is the difference between include and require in PHP?",
    answer:
      "Both include files, but require produces a fatal error if the file is not found, while include only produces a warning.",
  },
];

// Make data available globally
window.beginner = beginner;
