// PHP Q&A Data
let phpData = [
    {
        "id": 1,
        "question": "What is PHP?",
        "answer": "PHP (Hypertext Preprocessor) is a server-side scripting language designed for web development and can be embedded into HTML."
    },
    {
        "id": 2,
        "question": "What are the different types of variables in PHP?",
        "answer": "PHP supports several data types: strings, integers, floats, booleans, arrays, objects, NULL, and resources."
    },
    {
        "id": 3,
        "question": "What is the difference between == and === in PHP?",
        "answer": "== compares values after type coercion, while === compares both value and type (strict comparison)."
    },
    {
        "id": 4,
        "question": "What are superglobals in PHP?",
        "answer": "Superglobals are built-in variables that are always available in all scopes: $_GET, $_POST, $_SESSION, $_COOKIE, $_SERVER, $_FILES, $_ENV, $_REQUEST."
    },
    {
        "id": 5,
        "question": "What is the difference between include and require in PHP?",
        "answer": "Both include files, but require produces a fatal error if the file is not found, while include only produces a warning."
    },
    {
        "id": 6,
        "question": "What are sessions in PHP?",
        "answer": "Sessions allow you to store user information across multiple pages for the duration of a user's visit to your website."
    },
    {
        "id": 7,
        "question": "What are cookies in PHP?",
        "answer": "Cookies are small files stored on the user's computer that contain user-specific information."
    },
    {
        "id": 8,
        "question": "What is PDO in PHP?",
        "answer": "PDO (PHP Data Objects) is a database abstraction layer that provides a consistent interface for accessing databases."
    },
    {
        "id": 9,
        "question": "What is the difference between mysqli and PDO?",
        "answer": "mysqli is specific to MySQL databases, while PDO supports multiple database types and provides better security features."
    },
    {
        "id": 10,
        "question": "What are traits in PHP?",
        "answer": "Traits are a mechanism for code reuse in single inheritance languages like PHP. They allow you to include methods in multiple classes."
    },
    {
        "id": 11,
        "question": "What is the difference between abstract classes and interfaces in PHP?",
        "answer": "Abstract classes can have both abstract and concrete methods, while interfaces can only have abstract methods. A class can implement multiple interfaces but extend only one abstract class."
    },
    {
        "id": 12,
        "question": "What is autoloading in PHP?",
        "answer": "Autoloading allows PHP to automatically load class files when they are needed, eliminating the need for manual include/require statements."
    },
    {
        "id": 13,
        "question": "What is Composer in PHP?",
        "answer": "Composer is a dependency management tool for PHP that allows you to declare the libraries your project depends on."
    },
    {
        "id": 14,
        "question": "What are namespaces in PHP?",
        "answer": "Namespaces allow you to organize code into logical groups and prevent name collisions between classes, functions, and constants."
    },
    {
        "id": 15,
        "question": "What is the difference between GET and POST methods?",
        "answer": "GET sends data in the URL and is less secure, while POST sends data in the request body and is more secure for sensitive data."
    }
];

// Make data available globally
window.phpData = phpData;
