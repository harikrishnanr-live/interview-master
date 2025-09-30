// TypeScript Beginner Level Q&A Data

let beginner = [
  {
    id: 1,
    question: "What is TypeScript?",
    answer: "TypeScript is a statically typed superset of JavaScript that adds optional types to JavaScript. It compiles down to plain JavaScript and can run anywhere JavaScript runs."
  },
  {
    id: 2,
    question: "What are the advantages of using TypeScript over JavaScript?",
    answer: "Type safety, better tooling (autocomplete, linting), supports modern JavaScript features, improved refactoring, and better error checking during development."
  },
  {
    id: 3,
    question: "How do you define a variable in TypeScript?",
    answer: "You define a variable with let, const, or var and specify the type if needed."
  },
  {
    id: 4,
    question: "What are types in TypeScript?",
    answer: "Types describe the shape or structure of data, such as string, number, boolean, and object. They are used to define variables, function parameters, and return types."
  }
];

// Make data available globally
window.beginner = beginner;