// Flutter Q&A Data
let flutterQuestions = [
    {
        "id": 1,
        "question": "What is Flutter?",
        "answer": "Flutter is Google's UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase."
    },
    {
        "id": 2,
        "question": "What is Dart?",
        "answer": "Dart is the programming language used to develop Flutter applications. It's object-oriented and has features like async/await for asynchronous programming."
    },
    {
        "id": 3,
        "question": "What are widgets in Flutter?",
        "answer": "Widgets are the basic building blocks of Flutter UI. Everything in Flutter is a widget, from buttons to layout containers."
    },
    {
        "id": 4,
        "question": "What is the difference between Stateless and Stateful widgets?",
        "answer": "Stateless widgets don't have state and are immutable, while Stateful widgets can maintain state that can change over time."
    },
    {
        "id": 5,
        "question": "What is the BuildContext?",
        "answer": "BuildContext is a handle to the location of a widget in the widget tree. It's used to access theme data, navigator, and other inherited widgets."
    },
    {
        "id": 6,
        "question": "What is a MaterialApp widget?",
        "answer": "MaterialApp is a convenience widget that wraps several widgets commonly required for Material Design applications."
    },
    {
        "id": 7,
        "question": "What are keys in Flutter?",
        "answer": "Keys are identifiers for widgets that help Flutter identify which widgets have changed, been added, or removed when rebuilding the widget tree."
    },
    {
        "id": 8,
        "question": "What is the pubspec.yaml file?",
        "answer": "pubspec.yaml is the configuration file for Flutter projects that contains metadata about the project and its dependencies."
    },
    {
        "id": 9,
        "question": "What is hot reload in Flutter?",
        "answer": "Hot reload is a feature that allows you to quickly see changes in your Flutter app without restarting the entire application."
    },
    {
        "id": 10,
        "question": "What are async and await in Dart?",
        "answer": "async and await are keywords used for asynchronous programming. async marks a function as asynchronous, and await pauses execution until a Future completes."
    },
    {
        "id": 11,
        "question": "What is a Future in Dart?",
        "answer": "A Future represents a potential value or error that will be available at some time in the future, commonly used for asynchronous operations."
    },
    {
        "id": 12,
        "question": "What is the difference between const and final in Dart?",
        "answer": "Both const and final are used for variables that won't change, but const is a compile-time constant while final is a runtime constant."
    },
    {
        "id": 13,
        "question": "What are mixins in Dart?",
        "answer": "Mixins are a way to reuse code in multiple class hierarchies. They allow you to add functionality to classes without inheritance."
    },
    {
        "id": 14,
        "question": "What is the BLoC pattern in Flutter?",
        "answer": "BLoC (Business Logic Component) is a state management pattern that separates business logic from UI components using streams."
    },
    {
        "id": 15,
        "question": "What is Provider in Flutter?",
        "answer": "Provider is a state management solution that uses InheritedWidget to make data available to child widgets in the widget tree."
    },
    {
        "id": 16,
        "question": "What is the difference between Colors.blueGrey and Colors.blueGrey[50] in Flutter?",
        "answer": [
            {
                "term": "Colors.blueGrey",
                "definition": "is the default shade — medium blue-grey"
            },
            {
                "term": "Colors.blueGrey[50]",
                "definition": "is a very light shade — soft and almost white."
            },
            {
                "term": "Possible values",
                "definition": "50, 100, 200, 300, 400, 500, 600, 700, 800, 900"
            }
        ]
    },
    {
        "id": 17,
        "question": "What is Scaffold in Flutter?",
        "answer": "Scaffold is like the basic frame or structure of your app screen."
    }
];

// Make data available globally
window.flutterData = flutterQuestions;
