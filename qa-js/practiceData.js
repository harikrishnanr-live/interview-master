// Practice Q&A Data
let practiceData = [
    {
        "id": 1,
        "question": "What is the output of console.log(typeof null)?",
        "answer": "object (This is a well-known bug in JavaScript)"
    },
    {
        "id": 2,
        "question": "How do you check if a variable is an array?",
        "answer": "Using Array.isArray(variable) or variable instanceof Array"
    },
    {
        "id": 3,
        "question": "What is the difference between == and === operators?",
        "answer": "== compares values after type coercion; === compares both value and type (strict equality)"
    },
    {
        "id": 4,
        "question": "How do you create a deep copy of an object?",
        "answer": "Using JSON.parse(JSON.stringify(obj)) or structuredClone() (ES2022)"
    },
    {
        "id": 5,
        "question": "What is event delegation?",
        "answer": "Attaching a single event listener to a parent element to manage events on child elements"
    },
    {
        "id": 6,
        "question": "How do you remove duplicates from an array?",
        "answer": "Using new Set(array), filter() with indexOf(), or reduce() method"
    },
    {
        "id": 7,
        "question": "What is a closure in JavaScript?",
        "answer": "A function that has access to its own scope, outer function's scope, and global scope"
    },
    {
        "id": 8,
        "question": "How do you convert a string to a number?",
        "answer": "Using Number(), parseInt(), parseFloat(), or unary plus (+) operator"
    },
    {
        "id": 9,
        "question": "What is the purpose of the bind() method?",
        "answer": "Creates a new function with a specified this value and initial arguments"
    },
    {
        "id": 10,
        "question": "How do you check if an object has a specific property?",
        "answer": "Using hasOwnProperty(), in operator, or obj.property !== undefined"
    },
    {
        "id": 11,
        "question": "What is the difference between let, const, and var?",
        "answer": "var is function-scoped and hoisted; let and const are block-scoped; const cannot be reassigned"
    },
    {
        "id": 12,
        "question": "How do you handle asynchronous operations?",
        "answer": "Using callbacks, promises, or async/await syntax"
    },
    {
        "id": 13,
        "question": "What is the event loop in JavaScript?",
        "answer": "A mechanism that handles asynchronous callbacks by queuing and executing tasks"
    },
    {
        "id": 14,
        "question": "How do you create a promise?",
        "answer": "Using new Promise((resolve, reject) => { /* async code */ })"
    },
    {
        "id": 15,
        "question": "What is destructuring assignment?",
        "answer": "Extracting values from arrays or objects into variables using syntax like [a, b] = array or {a, b} = object"
    }
];

// Make data available globally
window.practiceData = practiceData;
