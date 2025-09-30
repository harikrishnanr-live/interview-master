// TypeScript Intermediate Level Q&A Data

let intermediate = [
  {
    id: 1,
    question: "What is the difference between any and unknown in TypeScript?",
    answer:
      "any allows any type and bypasses type checking. unknown is safer and forces the developer to check the type before using it.",
  },
  {
    id: 2,
    question: "What is a tuple in TypeScript?",
    answer:
      'A tuple is an ordered collection of elements of different types. In TypeScript, a tuple is a special type of array where the number of elements and their types are fixed. Example: let person: [string, number] = ["Alice", 25];',
  },
  {
    id: 3,
    question: "What are interfaces in TypeScript?",
    answer:
      "Interfaces define the structure of an object, including its properties and methods.",
  },
];

// Make data available globally
window.intermediate = intermediate;
