// Rails Beginner Level Q&A Data

let beginner = [
  {
    id: 1,
    question: "What is Ruby on Rails?",
    answer:
      "Ruby on Rails is a web application framework written in Ruby that follows the MVC (Model-View-Controller) architectural pattern.",
  },
  {
    id: 2,
    question: "What is MVC in Rails?",
    answer:
      "MVC stands for Model-View-Controller. Models handle data, Views handle presentation, and Controllers handle user input and business logic.",
  },
  {
    id: 3,
    question: "What is ActiveRecord?",
    answer:
      "ActiveRecord is Rails' Object-Relational Mapping (ORM) system that provides an interface between database tables and Ruby objects.",
  },
  {
    id: 4,
    question: "What are migrations in Rails?",
    answer:
      "Migrations are a way to alter the database schema over time in a consistent and easy way.",
  },
  {
    id: 5,
    question: "What is REST in Rails?",
    answer:
      "REST (Representational State Transfer) is an architectural style for designing networked applications, commonly used in Rails for API development.",
  },
];

// Make data available globally
window.beginner = beginner;
