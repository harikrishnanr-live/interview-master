// Flutter Beginner Level Q&A Data

let beginner = [
  {
    id: 1,
    question: "What is Flutter?",
    answer:
      "Flutter is Google's UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase.",
  },
  {
    id: 2,
    question: "What is Dart?",
    answer:
      "Dart is the programming language used to develop Flutter applications. It's object-oriented and has features like async/await for asynchronous programming.",
  },
  {
    id: 3,
    question: "What are widgets in Flutter?",
    answer:
      "Widgets are the basic building blocks of Flutter UI. Everything in Flutter is a widget, from buttons to layout containers.",
  },
  {
    id: 4,
    question: "What is the difference between Stateless and Stateful widgets?",
    answer:
      "Stateless widgets don't have state and are immutable, while Stateful widgets can maintain state that can change over time.",
  },
  {
    id: 5,
    question: "What is the BuildContext?",
    answer:
      "BuildContext is a handle to the location of a widget in the widget tree. It's used to access theme data, navigator, and other inherited widgets.",
  },
  {
    id: 6,
    question: "What is a MaterialApp widget?",
    answer:
      "MaterialApp is a convenience widget that wraps several widgets commonly required for Material Design applications.",
  },
  {
    id: 7,
    question: "What are keys in Flutter?",
    answer:
      "Keys are identifiers for widgets that help Flutter identify which widgets have changed, been added, or removed when rebuilding the widget tree.",
  },
  {
    id: 8,
    question: "What is the difference between `Future<List<Product>>` and `List<Product>`?",
    answer: [
      "Future<List<Product>>: Represents a list that will be available later (asynchronous). Used with FutureBuilder for one-time data loading.",
      "List<Product>: Represents an immediately available list that can be modified. Better for scenarios like infinite scroll where you add more items dynamically.",
      "Key difference: Future is for waiting on data, List is for immediate access and modification."
    ]
  },
];

// Make data available globally
window.beginner = beginner;
