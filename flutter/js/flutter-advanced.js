// Flutter Advanced Level Q&A Data

let advanced = [
  {
    id: 1,
    question: "What is the BLoC pattern in Flutter?",
    answer:
      "BLoC (Business Logic Component) is a state management pattern that separates business logic from UI components using streams.",
  },
  {
    id: 2,
    question: "What is Provider in Flutter?",
    answer:
      "Provider is a state management solution that uses InheritedWidget to make data available to child widgets in the widget tree.",
  },
  {
    id: 3,
    question:
      "What is the difference between Colors.blueGrey and Colors.blueGrey[50] in Flutter?",
    answer: [
      {
        term: "Colors.blueGrey",
        definition: "is the default shade — medium blue-grey",
      },
      {
        term: "Colors.blueGrey[50]",
        definition: "is a very light shade — soft and almost white.",
      },
      {
        term: "Possible values",
        definition: "50, 100, 200, 300, 400, 500, 600, 700, 800, 900",
      },
    ],
  },
  {
    id: 4,
    question: "What is Scaffold in Flutter?",
    answer: "Scaffold is like the basic frame or structure of your app screen.",
  },
  {
    id: 5,
    question: "Why doesn't Dart have the !== operator like JavaScript?",
    answer: [
      {
        term: "Why Dart doesn't have !==",
        definition:
          "Dart doesn't include the !== operator because it doesn't need it. Unlike JavaScript, Dart's equality operators are already strict.",
      },
      {
        term: "Dart's equality operators",
        definition:
          "== checks for equality without type conversion. != checks for inequality without type conversion.",
      },
      {
        term: "JavaScript comparison",
        definition:
          '== allows type conversion (e.g., "5" == 5 is true). === avoids type conversion (e.g., "5" === 5 is false). So !== is needed to check strict inequality.',
      },
      {
        term: "Dart behavior",
        definition:
          '"5" != 5 is already false, because Dart doesn\'t convert types. Therefore, !== would be redundant.',
      },
      {
        term: "Summary",
        definition: "Dart's != is already strict, so !== isn't necessary.",
      },
    ],
  },
  {
    id: 6,
    question: "What is the difference between null and empty in Dart?",
    answer: [
      {
        term: "null in Dart",
        definition:
          "null means the variable has no value at all — it hasn't been initialized.",
      },
      {
        term: "empty in Dart",
        definition:
          'empty means the variable has a value, but it\'s an empty string ("").',
      },
      {
        term: "Why check both value == null || value.isEmpty?",
        definition:
          "This condition ensures that the user has actually entered something in the field. It checks: value == null: the field was never touched or initialized. value.isEmpty: the user tapped the field but left it blank. Together, they catch both cases where the password is missing.",
      },
    ],
  },
];

// Make data available globally
window.advanced = advanced;
