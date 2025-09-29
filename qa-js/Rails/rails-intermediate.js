// Rails Intermediate Level Q&A Data

let intermediate = [
  {
    id: 1,
    question: "What are Rails routes?",
    answer: "Routes in Rails map URLs to controller actions, defining how requests are handled by the application."
  },
  {
    id: 2,
    question: "What is a Rails controller?",
    answer: "A controller in Rails handles user requests, processes data, and returns responses, typically in the form of rendered views or JSON."
  },
  {
    id: 3,
    question: "What are Rails helpers?",
    answer: "Helpers are methods that can be used in views to perform common tasks, such as formatting dates or generating HTML."
  },
  {
    id: 4,
    question: "What is the Rails asset pipeline?",
    answer: "The asset pipeline provides a framework to concatenate and minify JavaScript and CSS assets."
  },
  {
    id: 5,
    question: "What are Rails validations?",
    answer: "Validations are rules that ensure data integrity by checking the validity of data before it's saved to the database."
  }
];

// Make data available globally
window.intermediate = intermediate;