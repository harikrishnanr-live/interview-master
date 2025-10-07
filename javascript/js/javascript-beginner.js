let beginner = [
  {
    id: 1,
    question: "What is a variable in JavaScript?",
    answer:
      "A variable is like a box. You can put something inside it, like a number or a word. You can open the box later and use what`s inside. You can change what`s inside unless it`s a special box called `const`.",
    syntax:
      "let boxName = 'apple';\nvar oldBox = 'banana';\nconst fixedBox = 'cherry';",
    example: "let name = 'John';",
    realTimeExample:
      "Imagine you have a box labeled `name`. You put `John` inside. Later, you can open the box and see `John` is still there. If you use `let`, you can change it to `Jane`. If you use `const`, you can`t change it.",
    codeExample: "let age = 25;\nconst pi = 3.14;\nvar city = 'New York';",
  },
  {
    id: 2,
    question: "How do you declare a variable in JavaScript?",
    answer:
      "To make a new box (variable), you say `let`, `var`, or `const`, then give it a name. You can put something inside it right away or leave it empty.",
    syntax: "let myBox;\nvar oldBox;\nconst fixedBox = 'apple';",
    example: "let name;",
    realTimeExample:
      "Like getting a new locker at school. You can put your books in it later, or put something in it right now.",
    codeExample: "let age;\nconst pi = 3.14;",
  },
  {
    id: 3,
    question: "What is the difference between var, let, and const?",
    answer:
      "`var` is the old way to make a box. You can change what`s inside and even make a new box with the same name. `let` is the new way. You can change what`s inside, but you can`t make a new box with the same name. `const` is also new, but once you put something inside, you can`t change it or make a new box with the same name.",
    syntax: "let changeable = 10;\nvar oldWay = 20;\nconst fixed = 30;",
    example:
      "let age = 10;\nage = 11; // OK\nconst name = 'John';\nname = 'Jane'; // Error!",
    realTimeExample:
      "`var` is like a pencil note: you can erase and rewrite. `let` is like a sticky note: you can change the note, but not replace the sticky note itself. `const` is like a permanent marker: once you write, you can`t change it.",
    codeExample: "let age = 10;\nconst name = 'John';\nvar oldVar = 'old';",
  },
  {
    id: 4,
    question: "What data types are supported in JavaScript?",
    answer:
      "JavaScript has different kinds of things you can put in boxes: numbers (like 5), words (like `hello`), true/false (like a yes/no question), nothing (empty or not set), lists (like a shopping list), and special boxes with many things inside (objects).",
    syntax:
      "let num = 10;\nlet word = 'hello';\nlet isTrue = true;\nlet nothing = null;\nlet list = [1, 2, 3];\nlet box = {name: 'John'};",
    example: "let age = 25;\nlet name = 'John';\nlet isStudent = true;",
    realTimeExample:
      "Numbers are like counting apples. Words are like writing in a notebook. True/false is like answering yes or no. Lists are like a list of groceries. Objects are like a backpack with many pockets, each with something inside.",
    codeExample:
      "let apples = 5;\nlet greeting = 'hello';\nlet isRaining = false;\nlet fruits = ['apple', 'banana'];\nlet person = {name: 'John', age: 25};",
  },
  {
    id: 5,
    question: "What is a string in JavaScript?",
    answer:
      "A string is just a bunch of letters or words. You write them inside quotes, like `hello` or `good morning`. You can use single quotes, double quotes, or backticks.",
    syntax:
      "let word = 'hello';\nlet sentence = \"hi there\";\nlet story = `once upon a time`;",
    example: "let name = 'John';",
    realTimeExample:
      "Like writing a message on a piece of paper. You can write `Hi, mom!` or `How are you?`. The quotes are like the edges of the paper.",
    codeExample:
      "let firstName = 'John';\nlet lastName = \"Doe\";\nlet message = `Hello, ${firstName}!`;",
  },
  {
    id: 6,
    question: "How do you create a multi-line string?",
    answer:
      "If you want to write a long message with many lines, you can use backticks (`) and press Enter for new lines. Or, you can use \\n to start a new line.",
    syntax: "let story = `line 1\nline 2`;",
    example: "let poem = `Roses are red,\nViolets are blue`;",
    realTimeExample:
      "Like writing a letter with paragraphs. Each new line is like a new sentence.",
    codeExample: "let address = `123 Main St,\nNew York,\nUSA`;",
  },
  {
    id: 7,
    question: "What is a function in JavaScript?",
    answer:
      "A function is like a magic recipe. You write down the steps once, and then you can use it again and again. You can give it things to work with (like ingredients), and it can give you something back (like a cake).",
    syntax:
      "function sayHi() { console.log('Hi!'); }\nconst add = (a, b) => a + b;",
    example: "function sayHi() { console.log('Hi!'); }",
    realTimeExample:
      "Like a recipe for making a sandwich. You write down the steps: take bread, add cheese, add ham. Every time you want a sandwich, you follow the recipe.",
    codeExample:
      "function greet(name) {\n  return `Hello, ${name}!`;\n}\nlet message = greet('John');",
  },
  {
    id: 8,
    question: "How do you declare a function?",
    answer:
      "To make a new recipe (function), you say `function` and give it a name. Then you write the steps inside curly braces. You can also use a shorter way with `=>`.",
    syntax: "function name() { // steps }\nconst name = () => { // steps };",
    example: "function add(a, b) { return a + b; }",
    realTimeExample:
      "Like writing a to-do list. You write `Make tea: boil water, add tea bag, pour in cup`. Every time you want tea, you follow the list.",
    codeExample:
      "function multiply(a, b) {\n  return a * b;\n}\nconst divide = (a, b) => a / b;",
  },
  {
    id: 9,
    question: "What are function parameters and arguments?",
    answer:
      "Parameters are like the empty spots in your recipe. They are the names you write in the recipe. Arguments are the real things you put in those spots when you use the recipe.",
    syntax: "function add(a, b) { return a + b; }\nadd(2, 3);",
    example:
      "function greet(name) { console.log('Hi, ' + name); }\ngreet('John');",
    realTimeExample:
      "Your recipe says `add [fruit]`. The empty spot is a parameter. When you add `apple`, `apple` is the argument.",
    codeExample:
      "function makeJuice(fruit) {\n  return `${fruit} juice`;\n}\nlet drink = makeJuice('orange');",
  },
  {
    id: 10,
    question: "What is the return statement?",
    answer:
      "When your recipe (function) is done, it can give you something back. You use `return` to say what that something is. It`s like handing you a cake after baking.",
    syntax: "function add(a, b) { return a + b; }",
    example: "function add(a, b) { return a + b; }\nlet sum = add(2, 3);",
    realTimeExample:
      "If your recipe is `make a sandwich`, the return is the sandwich you get at the end.",
    codeExample:
      "function double(num) {\n  return num * 2;\n}\nlet result = double(5);",
  },
  {
    id: 11,
    question: "What is an object in JavaScript?",
    answer:
      "An object is like a special box with many smaller boxes inside. Each small box has a label and something inside it. You can put anything inside: numbers, words, lists, even other objects.",
    syntax: "let box = { label1: 'apple', label2: 5 };",
    example: "let person = { name: 'John', age: 25 };",
    realTimeExample:
      "Like a backpack. It has pockets (labels) and each pocket has something inside (values). One pocket has your notebook, another has your pencil.",
    codeExample:
      "let car = {\n  color: 'red',\n  model: 'Toyota',\n  year: 2020\n};",
  },
  {
    id: 12,
    question: "How do you create an object?",
    answer:
      "To make a new special box (object), you use curly braces {}. Inside, you write the labels and what`s inside each small box. You can also use `new Object()`, but the first way is easier.",
    syntax: "let obj = { name: 'John', age: 25 };\nlet obj = new Object();",
    example: "let car = { color: 'red', model: 'Toyota' };",
    realTimeExample:
      "Like making a profile card. You write your name, age, and favorite color on the card.",
    codeExample:
      "let book = {\n  title: 'Harry Potter',\n  author: 'J.K. Rowling',\n  pages: 300\n};",
  },
  {
    id: 13,
    question: "How do you access object properties?",
    answer:
      "To get something from a small box inside your special box (object), you can use a dot (.) or square brackets []. Just say the name of the big box, then the name of the small box.",
    syntax: "obj.key\nobj['key']",
    example: "let name = person.name;\nlet age = person['age'];",
    realTimeExample:
      "Like opening a specific drawer in a cabinet. You say `cabinet.drawer` or `cabinet[`drawer`]` to get what`s inside.",
    codeExample:
      "let person = { name: 'John', age: 25 };\nlet personName = person.name;\nlet personAge = person['age'];",
  },
  {
    id: 14,
    question: "How do you add a property to an object?",
    answer:
      "To add a new small box to your special box (object), just say the name of the big box, then the name of the new small box, and put something inside it.",
    syntax: "obj.newKey = value;",
    example: "person.city = 'New York';",
    realTimeExample:
      "Like adding a new sticker to your notebook. You pick a spot and stick it there.",
    codeExample:
      "let person = { name: 'John' };\nperson.age = 25;\nperson.city = 'Paris';",
  },
  {
    id: 15,
    question: "What is an array?",
    answer:
      "An array is like a list. You can write down many things in order, like a shopping list or a list of your favorite songs. Each thing in the list has a number, starting from 0.",
    syntax: "let list = ['apple', 'banana', 'cherry'];",
    example: "let fruits = ['apple', 'banana', 'orange'];",
    realTimeExample:
      "Like a list of groceries: 0. milk, 1. bread, 2. eggs. You can add, remove, or change things in the list.",
    codeExample:
      "let colors = ['red', 'green', 'blue'];\nlet numbers = [1, 2, 3, 4];",
  },
  {
    id: 16,
    question: "How do you create an array?",
    answer:
      "To make a new list (array), you use square brackets []. Inside, you write the things you want in the list, separated by commas.",
    syntax: "let arr = [1, 2, 3];",
    example: "let numbers = [1, 2, 3];",
    realTimeExample:
      "Like making a playlist. You write down the names of your favorite songs in order.",
    codeExample:
      "let fruits = ['apple', 'banana', 'orange'];\nlet emptyList = [];",
  },
  {
    id: 17,
    question: "How do you access elements in an array?",
    answer:
      "To get something from your list (array), you say the name of the list and the number of the thing you want, inside square brackets. Remember, the first thing is number 0.",
    syntax: "arr[0]",
    example: "let first = fruits[0];",
    realTimeExample:
      "Like picking a book from a shelf. The first book is number 0, the second is number 1, and so on.",
    codeExample:
      "let fruits = ['apple', 'banana', 'orange'];\nlet firstFruit = fruits[0]; // 'apple'\nlet secondFruit = fruits[1]; // 'banana'",
  },
  {
    id: 18,
    question: "How do you find the length of an array?",
    answer:
      "To find out how many things are in your list (array), you use .length after the name of the list. It tells you the count.",
    syntax: "arr.length",
    example: "let count = fruits.length;",
    realTimeExample:
      "Like counting how many apples are in your basket. You don`t have to count one by one; you just look at the number.",
    codeExample:
      "let fruits = ['apple', 'banana', 'orange'];\nlet fruitCount = fruits.length; // 3",
  },
  {
    id: 19,
    question: "What is a loop?",
    answer:
      "A loop is like a magic circle. It lets you do the same thing again and again until something changes. You can use it to repeat steps, like counting or reading each thing in a list.",
    syntax: "for (let i = 0; i < 5; i++) { // code }",
    example: "for (let i = 0; i < 3; i++) { console.log(i); }",
    realTimeExample:
      "Like singing a song chorus over and over until the song ends. Or like going around a roundabout until you reach your street.",
    codeExample: "for (let i = 0; i < 5; i++) {\n  console.log('Hello!');\n}",
  },
  {
    id: 20,
    question: "Name different types of loops in JavaScript.",
    answer:
      "There are a few ways to make a magic circle (loop): `for` (you say how many times), `while` (you say when to stop), `do...while` (you do it once, then check), `for...in` (for each label in a special box), and `for...of` (for each thing in a list).",
    syntax:
      "for (let i = 0; i < 5; i++)\nwhile (condition)\ndo { // code } while (condition)\nfor (let key in obj)\nfor (let value of arr)",
    example: "for (let fruit of fruits) { console.log(fruit); }",
    realTimeExample:
      "'for': counting from 1 to 10. 'while': eating cookies until the jar is empty. 'for...of': reading each page of a book one by one.",
    codeExample:
      "// for loop\nfor (let i = 0; i < 3; i++) { console.log(i); }\n\n// while loop\nlet i = 0;\nwhile (i < 3) { console.log(i); i++; }\n\n// for...of loop\nlet fruits = ['apple', 'banana'];\nfor (let fruit of fruits) { console.log(fruit); }",
  },
  {
    id: 21,
    question: "What is the difference between for...in and for...of loops?",
    answer:
      "'for...in' is for going through the labels in a special box (object). 'for...of' is for going through the things in a list (array).",
    syntax: "for (let key in obj)\nfor (let value of arr)",
    example: "for (let fruit of fruits) { console.log(fruit); }",
    realTimeExample:
      "'for...in': listing all the labels on your drawers (shirts, socks, pants). 'for...of': taking out each shirt from the shirts drawer.",
    codeExample:
      "let person = { name: 'John', age: 25 };\nfor (let key in person) { console.log(key); } // 'name', 'age'\n\nlet fruits = ['apple', 'banana'];\nfor (let fruit of fruits) { console.log(fruit); } // 'apple', 'banana'",
  },
  {
    id: 22,
    question: "What are conditional statements?",
    answer:
      "Conditional statements are like questions. You ask `if` something is true, then do one thing. If not, you can do something else. You can use `if`, `else if`, `else`, or `switch` to ask these questions.",
    syntax:
      "if (condition) { // code }\nelse if (condition) { // code }\nelse { // code }\nswitch (value) { case 1: // code }",
    example:
      "if (age > 18) { console.log('Adult'); } else { console.log('Child'); }",
    realTimeExample:
      "Like choosing what to wear: if it`s cold, wear a jacket. If it`s hot, wear a t-shirt. If it`s raining, take an umbrella.",
    codeExample:
      "let age = 20;\nif (age > 18) {\n  console.log('You can vote!');\n} else {\n  console.log('You are too young to vote.');\n}",
  },
  {
    id: 23,
    question: "How do you write an if statement?",
    answer:
      "To write a question (if statement), you say `if`, then write your question in parentheses (). If the answer is `yes`, it does what`s inside the curly braces {}.",
    syntax: "if (condition) { // code }",
    example: "if (age > 18) { console.log('Adult'); }",
    realTimeExample:
      "Like checking the weather: if it`s raining, take an umbrella. If not, don`t take one.",
    codeExample:
      "let isRaining = true;\nif (isRaining) {\n  console.log('Take an umbrella!');\n}",
  },
  {
    id: 24,
    question: "What is the switch statement?",
    answer:
      "A switch statement is like a menu. You pick one thing, and it does what matches your pick. It`s like a shortcut for many `if` questions.",
    syntax: "switch (value) { case 1: // code; break; }",
    example: "switch (day) { case 1: console.log('Monday'); break; }",
    realTimeExample:
      "Like a vending machine: if you press 1, you get a soda. If you press 2, you get chips.",
    codeExample:
      "let day = 3;\nswitch (day) {\n  case 1: console.log('Monday'); break;\n  case 2: console.log('Tuesday'); break;\n  case 3: console.log('Wednesday'); break;\n}",
  },
  {
    id: 25,
    question: "What are truthy and falsy values?",
    answer:
      "In JavaScript, some things are like `yes` (truthy) and some are like `no` (falsy). Truthy things are true in questions. Falsy things are false. Falsy things are 0, empty words (``), null, undefined, NaN, and false.",
    syntax: "if (value) { // runs if truthy }",
    example: "if (name) { console.log('Name exists'); }",
    realTimeExample:
      "Truthy: a full glass of water (it`s there). Falsy: an empty glass (nothing there).",
    codeExample:
      "let name = 'John';\nif (name) {\n  console.log('Name is truthy');\n}\n\nlet age = 0;\nif (age) {\n  console.log('This won`t run');\n} else {\n  console.log('Age is falsy');\n}",
  },
  {
    id: 26,
    question: "What is NaN in JavaScript?",
    answer:
      "NaN means `Not a Number`. It`s like when you try to do math with things that aren`t numbers, like words. JavaScript gets confused and says `NaN`.",
    syntax: "let notNumber = 'hello' / 2;",
    example: "let result = 'hello' / 2; // result is NaN",
    realTimeExample:
      "Like trying to add apples and oranges. It doesn`t make sense, so you get NaN.",
    codeExample: "let badMath = 'apple' * 3;\nconsole.log(badMath); // NaN",
  },
  {
    id: 27,
    question: "How do you check if a value is NaN?",
    answer:
      "To check if something is `Not a Number`, you can use isNaN() or Number.isNaN(). They tell you if it`s NaN or not.",
    syntax: "isNaN(value)\nNumber.isNaN(value)",
    example: "if (isNaN(result)) { console.log('Not a number'); }",
    realTimeExample:
      "Like checking if a fruit is rotten before you eat it. If it`s rotten (NaN), you don`t eat it.",
    codeExample:
      "let result = 'hello' / 2;\nif (isNaN(result)) {\n  console.log('This is not a number!');\n}",
  },
  {
    id: 28,
    question: "What is the difference between == and ===?",
    answer:
      "`==` checks if two things are the same, but it changes types if needed. `===` checks if two things are the same AND the same type. It`s stricter.",
    syntax: "value1 == value2\nvalue1 === value2",
    example: "5 == '5' // true\n5 === '5' // false",
    realTimeExample:
      "`==`: two boxes with the same number of apples, but one is red and one is green. `===`: both boxes must have the same number of apples AND the same color.",
    codeExample:
      "let num = 5;\nlet str = '5';\nconsole.log(num == str); // true\nconsole.log(num === str); // false",
  },
  {
    id: 29,
    question: "What is type coercion?",
    answer:
      "Type coercion is when JavaScript changes one type to another automatically. For example, it can turn a word into a number if you try to do math with it.",
    syntax: "'5' + 2 // '52'\n'5' - 2 // 3",
    example: "let sum = '5' + 2; // sum is '52'",
    realTimeExample:
      "Like mixing juice and water. Sometimes you get a new drink (like `52`), sometimes it stays the same (like 3).",
    codeExample:
      "let a = '10';\nlet b = 5;\nconsole.log(a + b); // '105'\nconsole.log(a - b); // 5",
  },
  {
    id: 30,
    question: "What is a callback function?",
    answer:
      "A callback function is like giving someone a note with instructions. You give the note to another function, and it reads the note and does what it says later.",
    syntax: "function callback() { // code }\notherFunction(callback);",
    example: "setTimeout(() => { console.log('Done!'); }, 1000);",
    realTimeExample:
      "Like giving your friend a note to give to the teacher after class. Your friend (the function) will give the note (run the code) later.",
    codeExample:
      "function sayHi() {\n  console.log('Hi!');\n}\nsetTimeout(sayHi, 2000); // says 'Hi!' after 2 seconds",
  },
  {
    id: 31,
    question: "What is the DOM?",
    answer:
      "The DOM is like a magic map of a webpage. It lets you change anything on the page using JavaScript. You can add, remove, or change things like words, pictures, or buttons.",
    syntax: "document.getElementById('id')",
    example: "document.getElementById('header').innerHTML = 'Hello';",
    realTimeExample:
      "Like a remote control for a TV. You can change the channel, volume, or picture without touching the TV.",
    codeExample: "document.getElementById('title').innerHTML = 'Welcome!';",
  },
  {
    id: 32,
    question: "How do you select elements in the DOM?",
    answer:
      "To pick something from the webpage (like a word or a button), you can use getElementById, getElementsByClassName, or querySelector. You tell it what to pick, and it gives it to you.",
    syntax: "document.getElementById('id')\ndocument.querySelector('.class')",
    example: "let header = document.getElementById('header');",
    realTimeExample:
      "Like picking a book from a shelf. You can pick by the book`s title, color, or where it is on the shelf.",
    codeExample:
      "let title = document.getElementById('main-title');\nlet buttons = document.querySelectorAll('.btn');",
  },
  {
    id: 33,
    question: "What is an event in JavaScript?",
    answer:
      "An event is something that happens on a webpage, like clicking a button, moving the mouse, or pressing a key. You can make your code do something when the event happens.",
    syntax: "element.addEventListener('click', function)",
    example:
      "button.addEventListener('click', () => { console.log('Clicked!'); });",
    realTimeExample:
      "Like a doorbell. When someone presses it (event), the bell rings and you know someone is at the door.",
    codeExample:
      "let myButton = document.getElementById('myBtn');\nmyButton.addEventListener('click', () => {\n  alert('Button clicked!');\n});",
  },
  {
    id: 34,
    question: "How do you add an event listener?",
    answer:
      "To make your code listen for an event (like a click), you use addEventListener. You say what event to listen for and what to do when it happens.",
    syntax: "element.addEventListener('event', function)",
    example:
      "button.addEventListener('click', () => { console.log('Clicked!'); });",
    realTimeExample:
      "Like setting a trap. When something steps on it (event), it makes a sound (runs your code).",
    codeExample:
      "let myButton = document.getElementById('myBtn');\nmyButton.addEventListener('mouseover', () => {\n  console.log('Mouse is over the button!');\n});",
  },
  {
    id: 35,
    question: "What is asynchronous programming?",
    answer:
      "Asynchronous programming lets your code do other things while waiting for something slow, like loading a picture or getting data from the internet. It doesn`t stop everything while waiting.",
    syntax: "setTimeout(() => { // code }, 1000);",
    example: "setTimeout(() => { console.log('Done!'); }, 1000);",
    realTimeExample:
      "Like ordering food at a restaurant. You can chat with friends while waiting for your pizza to arrive.",
    codeExample:
      "console.log('Start');\nsetTimeout(() => {\n  console.log('This runs after 1 second');\n}, 1000);\nconsole.log('End');",
  },
  {
    id: 36,
    question: "What is a Promise?",
    answer:
      "A Promise is like a promise in real life. It says, `I will do this later and tell you if it worked or not.` It can be `fulfilled` (it worked), `rejected` (it didn`t work), or `pending` (still waiting).",
    syntax: "let promise = new Promise((resolve, reject) => { // code });",
    example:
      "let promise = new Promise((resolve) => { resolve('Success!'); });",
    realTimeExample:
      "Like ordering a package online. The store promises to send it and will tell you when it`s on the way or if there`s a problem.",
    codeExample:
      "let myPromise = new Promise((resolve, reject) => {\n  let success = true;\n  if (success) {\n    resolve('Yay!');\n  } else {\n    reject('Oops!');\n  }\n});",
  },
  {
    id: 37,
    question: "How do you create a Promise?",
    answer:
      "To make a new Promise, you use `new Promise()`. Inside, you say what to do and whether to say `it worked` (resolve) or `it didn`t work` (reject).",
    syntax: "new Promise((resolve, reject) => { // code })",
    example: "let promise = new Promise((resolve) => { resolve('Done!'); });",
    realTimeExample:
      "Like making a deal with a friend: `I promise to bring your book tomorrow. If I do, I`ll call you. If not, I`ll text you.`",
    codeExample:
      "let fetchData = new Promise((resolve, reject) => {\n  let data = { name: 'John' };\n  resolve(data);\n});",
  },
  {
    id: 38,
    question: "What is async/await?",
    answer:
      "async/await is a way to make Promises easier to use. You say `async` before a function, and `await` before a Promise. It makes your code look like it runs step by step, even though it`s still waiting for slow things.",
    syntax: "async function name() { let result = await promise; }",
    example: "async function fetchData() { let data = await fetch('url'); }",
    realTimeExample:
      "Like following a recipe. You wait for the water to boil before adding pasta, but you can chop vegetables while waiting.",
    codeExample:
      "async function getUser() {\n  let response = await fetch('https://api.example.com/user');\n  let user = await response.json();\n  console.log(user);\n}",
  },
  {
    id: 39,
    question: "What is the 'this' keyword?",
    answer:
      "'this` means the object that is running the function. It`s like saying `me` or `this thing`. It changes depending on where you use it.",
    syntax: "function() { console.log(this); }",
    example:
      "let person = { name: 'John', greet() { console.log(this.name); } };",
    realTimeExample:
      "Like saying `me` in a group photo. `this` is the person taking the photo (the object).",
    codeExample:
      "let person = {\n  name: 'John',\n  sayName() {\n    console.log(this.name);\n  }\n};\nperson.sayName(); // 'John'",
  },
  {
    id: 40,
    question: "What is a closure?",
    answer:
      "A closure is a function that remembers where it came from, even if it`s used somewhere else. It can still see the things from its old home.",
    syntax:
      "function outer() { let x = 10; return function() { console.log(x); } }",
    example: "let inner = outer();\ninner(); // logs 10",
    realTimeExample:
      "Like a secret note. Even if you take it out of your notebook, it still knows it came from your notebook.",
    codeExample:
      "function makeCounter() {\n  let count = 0;\n  return function() {\n    count++;\n    return count;\n  };\n}\nlet counter = makeCounter();\nconsole.log(counter()); // 1\nconsole.log(counter()); // 2",
  },
  {
    id: 41,
    question: "What is the difference between null and undefined?",
    answer:
      "'null` means `nothing` on purpose. You put `nothing` in the box. `undefined` means the box doesn`t exist yet or you forgot to put something in it.",
    syntax: "let empty = null;\nlet notSet;",
    example: "let age = null;\nlet name;",
    realTimeExample:
      "null: an empty lunchbox because you chose not to bring lunch. undefined: forgetting to pack lunch at all.",
    codeExample:
      "let a = null;\nlet b;\nconsole.log(a); // null\nconsole.log(b); // undefined",
  },
  {
    id: 42,
    question: "What is JSON?",
    answer:
      "JSON is a way to write data as text, so it`s easy to send or save. It looks like a special box (object) or a list (array), but it`s written as a string.",
    syntax: '{ "name": "John", "age": 25 }',
    example:
      "let person = { name: 'John', age: 25 };\nlet json = JSON.stringify(person);",
    realTimeExample:
      "Like writing a letter. You put your thoughts into words so someone else can read them.",
    codeExample:
      'let person = { name: \'John\', age: 25 };\nlet jsonString = JSON.stringify(person);\nconsole.log(jsonString); // \'{"name":"John","age":25}\'',
  },
  {
    id: 43,
    question: "How do you parse JSON?",
    answer:
      "To turn a JSON string back into a special box (object) or list (array), you use JSON.parse(). It reads the string and makes the real thing.",
    syntax: "JSON.parse(text)",
    example: 'let obj = JSON.parse(\'{ "name": "John" }\');',
    realTimeExample:
      "Like reading a letter. You turn the words back into thoughts in your mind.",
    codeExample:
      'let jsonString = \'{"name":"John","age":25}\';\nlet person = JSON.parse(jsonString);\nconsole.log(person.name); // \'John\'',
  },
  {
    id: 44,
    question: "How do you stringify JSON?",
    answer:
      "To turn a special box (object) or list (array) into a JSON string, you use JSON.stringify(). It writes down the box or list as text.",
    syntax: "JSON.stringify(obj)",
    example: "let text = JSON.stringify({ name: 'John' });",
    realTimeExample:
      "Like writing a letter. You turn your thoughts into words on paper.",
    codeExample:
      'let person = { name: \'John\', age: 25 };\nlet jsonString = JSON.stringify(person);\nconsole.log(jsonString); // \'{"name":"John","age":25}\'',
  },
  {
    id: 45,
    question: "What is localStorage?",
    answer:
      "localStorage is like a magic notebook in your browser. You can write things in it, and they stay there even after you close the page. You can save words, numbers, or even lists.",
    syntax: "localStorage.setItem('key', 'value')\nlocalStorage.getItem('key')",
    example:
      "localStorage.setItem('name', 'John');\nlet name = localStorage.getItem('name');",
    realTimeExample:
      "Like a notebook you keep in your desk. You can write in it today and still read it tomorrow.",
    codeExample:
      "localStorage.setItem('username', 'john_doe');\nlet username = localStorage.getItem('username');\nconsole.log(username); // 'john_doe'",
  },
  {
    id: 46,
    question: "How do you store data in localStorage?",
    answer:
      "To save something in your magic notebook (localStorage), you use setItem(). You give it a name (key) and what to save (value).",
    syntax: "localStorage.setItem('key', 'value')",
    example: "localStorage.setItem('name', 'John');",
    realTimeExample:
      "Like putting a sticker with your name on your notebook so you remember it`s yours.",
    codeExample:
      "localStorage.setItem('theme', 'dark');\nlocalStorage.setItem('fontSize', '16px');",
  },
  {
    id: 47,
    question: "What is sessionStorage?",
    answer:
      "sessionStorage is like a whiteboard in your browser. You can write things on it, but when you close the tab, everything is erased. It`s like localStorage, but only for one session.",
    syntax: "sessionStorage.setItem('key', 'value')",
    example: "sessionStorage.setItem('name', 'John');",
    realTimeExample:
      "Like writing on a whiteboard. It`s there while you`re using it, but it gets erased when you leave the room.",
    codeExample:
      "sessionStorage.setItem('tempData', '123');\nlet data = sessionStorage.getItem('tempData');",
  },
  {
    id: 48,
    question: "What is a module in JavaScript?",
    answer:
      "A module is like a separate page in your notebook. You can write code on one page and use it on another page. It helps keep your code organized and easy to find.",
    syntax: "import { name } from 'file.js'\nexport const name = 'John';",
    example: "import { add } from './math.js';",
    realTimeExample:
      "Like a Lego set. Each set (module) has its own pieces, but you can combine them to build something bigger.",
    codeExample:
      "// math.js\nexport const add = (a, b) => a + b;\n\n// main.js\nimport { add } from './math.js';\nconsole.log(add(2, 3)); // 5",
  },
  {
    id: 49,
    question: "How do you import a module?",
    answer:
      "To use code from another page (module), you use import. You say what you want and where to find it.",
    syntax: "import { name } from 'file.js'",
    example: "import { add } from './math.js';",
    realTimeExample:
      "Like borrowing a book from the library. You ask for the book (import) and use it in your home (file).",
    codeExample: "import { multiply, divide } from './mathUtils.js';",
  },
  {
    id: 50,
    question: "What is the spread operator?",
    answer:
      "The spread operator (...) is like spreading out all the things in a list or a special box. You can use it to copy, combine, or spread out things.",
    syntax: "[...arr]\n{...obj}",
    example:
      "let newArr = [...oldArr, 4];\nlet newObj = {...oldObj, city: 'Paris'};",
    realTimeExample:
      "Like spreading out all your toys on the floor so you can see them all at once.",
    codeExample:
      "let arr1 = [1, 2, 3];\nlet arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]\n\nlet obj1 = { a: 1, b: 2 };\nlet obj2 = { ...obj1, c: 3 }; // { a: 1, b: 2, c: 3 }",
  },
  {
    id: 51,
    question: "What is destructuring?",
    answer:
      "Destructuring is like unpacking a box. You can take things out of a list or a special box and put them into their own boxes (variables) all at once.",
    syntax:
      "let [a, b] = [1, 2];\nlet { name, age } = { name: 'John', age: 25 };",
    example: "let [first, second] = [1, 2];\nlet { name } = { name: 'John' };",
    realTimeExample:
      "Like unpacking your school bag. You take out your notebook, pencil, and lunchbox all at once.",
    codeExample:
      "let numbers = [10, 20, 30];\nlet [a, b, c] = numbers;\n\nlet person = { name: 'John', age: 25 };\nlet { name, age } = person;",
  },
  {
    id: 52,
    question: "How do you destructure an array?",
    answer:
      "To unpack things from a list (array), you use square brackets []. You write the names of the new boxes (variables) in order, and it puts the things from the list into them.",
    syntax: "let [a, b] = [1, 2];",
    example: "let [first, second] = [1, 2];",
    realTimeExample:
      "Like taking the first two cookies from a plate. The first cookie goes to the first box, the second to the second box.",
    codeExample:
      "let colors = ['red', 'green', 'blue'];\nlet [firstColor, secondColor] = colors;",
  },
  {
    id: 53,
    question: "How do you destructure an object?",
    answer:
      "To unpack things from a special box (object), you use curly braces {}. You write the names of the small boxes (keys) you want, and it puts what`s inside into new boxes (variables).",
    syntax: "let { name, age } = { name: 'John', age: 25 };",
    example: "let { name } = { name: 'John' };",
    realTimeExample:
      "Like taking your name and age from your profile card. You pick what you want and put it in your pocket.",
    codeExample:
      "let person = { name: 'John', age: 25, city: 'Paris' };\nlet { name, city } = person;",
  },
  {
    id: 54,
    question: "What is a template literal?",
    answer:
      "A template literal is a special way to write words (strings). You can put boxes (variables) right inside the words using ${}. It makes it easy to mix words and boxes together.",
    syntax: "`Hello ${name}!`",
    example: "let greeting = `Hello ${name}!`;",
    realTimeExample:
      "Like filling in the blanks on a greeting card: `Dear ${name}, Happy Birthday!`",
    codeExample:
      "let name = 'John';\nlet message = `Hello, ${name}! Welcome back.`;",
  },
  {
    id: 55,
    question: "How do you use template literals?",
    answer:
      "To use template literals, you write your words inside backticks (``). To put a box (variable) inside, you use ${}. It`s like a magic fill-in-the-blank.",
    syntax: "`Hello ${name}!`",
    example: "let greeting = `Hello ${name}!`;",
    realTimeExample:
      "Like writing a personalized message: `Hi ${friend}, let`s play!`",
    codeExample: "let user = 'Alice';\nlet welcome = `Welcome back, ${user}!`;",
  },
  {
    id: 56,
    question: "What is the ternary operator?",
    answer:
      "The ternary operator is a short way to write an `if-else` question. You ask a question, then say what to do if it`s `yes` and what to do if it`s `no`, all in one line.",
    syntax: "condition ? trueValue : falseValue",
    example: "let result = age > 18 ? 'Adult' : 'Child';",
    realTimeExample:
      "Like choosing an outfit: `Is it cold? Yes: wear a jacket; No: wear a t-shirt.`",
    codeExample: "let age = 20;\nlet canVote = age >= 18 ? 'Yes' : 'No';",
  },
  {
    id: 57,
    question: "What is the optional chaining operator?",
    answer:
      "The optional chaining operator (?.) lets you safely ask for something that might not exist. If the thing isn`t there, it just says `undefined` instead of causing an error.",
    syntax: "obj?.key",
    example: "let name = user?.name;",
    realTimeExample:
      "Like asking a friend for a pencil. If they don`t have one, it`s okay and you just move on.",
    codeExample:
      "let user = { profile: { name: 'John' } };\nlet username = user?.profile?.name; // 'John'\nlet age = user?.profile?.age; // undefined",
  },
  {
    id: 58,
    question: "What is the nullish coalescing operator?",
    answer:
      "The nullish coalescing operator (??) lets you give a default value if something is null or undefined. It`s like a backup plan.",
    syntax: "value ?? defaultValue",
    example: "let name = user.name ?? 'Guest';",
    realTimeExample:
      "Like saying, `If you don`t have a name tag, you`re a guest.`",
    codeExample:
      "let username = null;\nlet displayName = username ?? 'Guest';\nconsole.log(displayName); // 'Guest'",
  },
  {
    id: 59,
    question: "What is a Set?",
    answer:
      "A Set is like a special list where everything is unique. You can`t have the same thing twice. It`s useful when you only want one of each thing.",
    syntax: "let set = new Set([1, 2, 3]);",
    example: "let unique = new Set([1, 2, 2, 3]);",
    realTimeExample:
      "Like a list of unique collectible cards. You only keep one of each card, even if you get duplicates.",
    codeExample:
      "let numbers = new Set([1, 2, 2, 3, 3, 4]);\nconsole.log([...numbers]); // [1, 2, 3, 4]",
  },
  {
    id: 60,
    question: "What is a Map?",
    answer:
      "A Map is like a special box where you can use anything as a label (key). It`s like an object, but the labels can be anything, not just words.",
    syntax: "let map = new Map([['key', 'value']]);",
    example: "let map = new Map([['name', 'John']]);",
    realTimeExample:
      "Like a treasure map. Each X (key) marks a spot (value), and the X can be anything, not just a word.",
    codeExample:
      "let myMap = new Map();\nmyMap.set('name', 'John');\nmyMap.set(1, 'one');\nconsole.log(myMap.get('name')); // 'John'",
  },
  {
    id: 61,
    question: "How do you create a Set?",
    answer:
      "To make a new Set, you use `new Set()`. You can put a list inside to start with, and it will only keep the unique things.",
    syntax: "let set = new Set([1, 2, 3]);",
    example: "let unique = new Set([1, 2, 2, 3]);",
    realTimeExample:
      "Like making a list of unique party guests. If someone is already on the list, they won`t be added again.",
    codeExample:
      "let colors = new Set(['red', 'green', 'blue', 'red']);\nconsole.log(colors); // Set {'red', 'green', 'blue'}",
  },
  {
    id: 62,
    question: "How do you create a Map?",
    answer:
      "To make a new Map, you use `new Map()`. You can start with a list of pairs (key and value), or add them later.",
    syntax: "let map = new Map([['key', 'value']]);",
    example: "let map = new Map([['name', 'John']]);",
    realTimeExample:
      "Like a phone book. Each name (key) has a phone number (value), and you can add as many as you want.",
    codeExample:
      "let phoneBook = new Map([\n  ['John', '555-1234'],\n  ['Jane', '555-5678']\n]);",
  },
  {
    id: 63,
    question: "What is a Symbol?",
    answer:
      "A Symbol is like a secret code. It`s always unique, even if you make two with the same name. You can use it as a special label in objects.",
    syntax: "let sym = Symbol('description');",
    example: "let id = Symbol('id');",
    realTimeExample:
      "Like a secret handshake. Only you and your friend know what it means, and it`s always unique.",
    codeExample:
      "let id1 = Symbol('id');\nlet id2 = Symbol('id');\nconsole.log(id1 === id2); // false",
  },
  {
    id: 64,
    question: "What is BigInt?",
    answer:
      "BigInt is for really, really big numbers. Numbers so big that normal numbers can`t hold them. You write them with an `n` at the end.",
    syntax: "let big = 123n;",
    example: "let bigNumber = 123456789012345678901234567890n;",
    realTimeExample:
      "Like counting all the stars in the sky. You need a special way to count such big numbers.",
    codeExample: "let huge = 9007199254740991n;\nlet sum = huge + 1n;",
  },
  {
    id: 65,
    question: "What is the event loop?",
    answer:
      "The event loop is like a manager in JavaScript. It helps your code do many things at once, like waiting for clicks or data. It makes sure everything runs smoothly and in the right order.",
    syntax: "N/A",
    example: "N/A",
    realTimeExample:
      "Like a teacher managing a classroom. She helps students one by one, even if some need more time.",
    codeExample:
      "console.log('Start');\nsetTimeout(() => {\n  console.log('This runs later');\n}, 0);\nconsole.log('End');",
  },
  {
    id: 66,
    question: "What is the call stack?",
    answer:
      "The call stack is like a stack of plates. When a function runs, it`s put on the stack. When it`s done, it`s taken off. The last function put on is the first one taken off.",
    syntax: "N/A",
    example: "N/A",
    realTimeExample:
      "Like a stack of plates. The last plate you put on is the first one you take off.",
    codeExample:
      "function first() {\n  second();\n}\nfunction second() {\n  third();\n}\nfunction third() {\n  console.log('Done!');\n}\nfirst();",
  },
  {
    id: 67,
    question: "What is hoisting?",
    answer:
      "Hoisting is like moving all the boxes (variables) and recipes (functions) to the top of the room before the code runs. So you can use them before they`re made, but they might be empty.",
    syntax: "N/A",
    example: "console.log(x); // undefined\nvar x = 5;",
    realTimeExample:
      "Like a teacher calling your name before you raise your hand. You`re already in the room, even if you haven`t answered yet.",
    codeExample:
      "console.log(y); // undefined\nvar y = 10;\n\nsayHi(); // 'Hi!'\nfunction sayHi() {\n  console.log('Hi!');\n}",
  },
  {
    id: 68,
    question: "What is strict mode?",
    answer:
      "Strict mode makes JavaScript stricter and safer. It catches more mistakes and doesn`t let you do things that might cause problems.",
    syntax: "'use strict';",
    example: "'use strict';\nx = 5; // Error: x is not defined",
    realTimeExample:
      "Like a strict teacher. You have to follow the rules, or you get in trouble.",
    codeExample:
      "'use strict';\nfunction test() {\n  undeclaredVar = 10; // Error!\n}",
  },
  {
    id: 69,
    question: "How do you enable strict mode?",
    answer:
      "To turn on strict mode, you write `use strict` at the top of your code or at the top of a function. It makes your code follow stricter rules.",
    syntax: "'use strict';",
    example: "'use strict';\nx = 5; // Error: x is not defined",
    realTimeExample:
      "Like putting a `No Running` sign at the top of the stairs. Everyone has to follow it.",
    codeExample:
      "'use strict';\nlet x = 10; // OK\nx = 20; // OK\ny = 30; // Error: y is not defined",
  },
  {
    id: 70,
    question: "What is the difference between slice and splice?",
    answer:
      "'slice` makes a copy of a part of a list (array) or a word (string). It doesn`t change the original. `splice` cuts out a part of a list and can add new things. It does change the original.",
    syntax: "arr.slice(start, end)\narr.splice(start, deleteCount, items)",
    example: "let part = arr.slice(0, 2);\narr.splice(1, 0, 'new');",
    realTimeExample:
      "slice: making a copy of a page from a book. splice: cutting out a page and maybe adding a new one.",
    codeExample:
      "let arr = [1, 2, 3, 4];\nlet sliced = arr.slice(1, 3); // [2, 3]\narr.splice(1, 2, 'a', 'b'); // arr is [1, 'a', 'b', 4]",
  },
  {
    id: 71,
    question: "What is the reduce method?",
    answer:
      "The reduce method squishes a list (array) into one thing. It goes through each thing in the list and does something with it, like adding them all up.",
    syntax: "arr.reduce((total, item) => total + item, 0)",
    example: "let sum = [1, 2, 3].reduce((a, b) => a + b, 0);",
    realTimeExample:
      "Like adding up all your pocket money for the month to see how much you have.",
    codeExample:
      "let numbers = [1, 2, 3, 4];\nlet total = numbers.reduce((sum, num) => sum + num, 0); // 10",
  },
  {
    id: 72,
    question: "How do you use the reduce method?",
    answer:
      "To use reduce, you give it a function and a starting value. The function says what to do with each thing in the list and the total so far.",
    syntax: "arr.reduce((total, item) => total + item, 0)",
    example: "let sum = [1, 2, 3].reduce((a, b) => a + b, 0);",
    realTimeExample:
      "Like counting all the apples in several baskets to find the total.",
    codeExample:
      "let words = ['Hello', ' ', 'world', '!'];\nlet sentence = words.reduce((str, word) => str + word, ''); // 'Hello world!'",
  },
  {
    id: 73,
    question: "What is the filter method?",
    answer:
      "The filter method makes a new list (array) with only the things you want. It goes through each thing and checks if it matches your rule.",
    syntax: "arr.filter(item => item > 2)",
    example: "let big = [1, 2, 3].filter(item => item > 2);",
    realTimeExample: "Like picking only the red marbles from a bag of marbles.",
    codeExample:
      "let numbers = [1, 2, 3, 4, 5];\nlet evens = numbers.filter(num => num % 2 === 0); // [2, 4]",
  },
  {
    id: 74,
    question: "What is the map method?",
    answer:
      "The map method makes a new list (array) with changed things. It goes through each thing in the list and does something to it, like doubling it.",
    syntax: "arr.map(item => item * 2)",
    example: "let doubled = [1, 2, 3].map(item => item * 2);",
    realTimeExample: "Like doubling the number of cookies each friend gets.",
    codeExample:
      "let numbers = [1, 2, 3];\nlet doubled = numbers.map(num => num * 2); // [2, 4, 6]",
  },
  {
    id: 75,
    question: "What is the forEach method?",
    answer:
      "The forEach method does something for each thing in the list (array). It doesn`t make a new list; it just does the thing.",
    syntax: "arr.forEach(item => console.log(item))",
    example: "[1, 2, 3].forEach(item => console.log(item));",
    realTimeExample: "Like giving a high-five to each friend in a line.",
    codeExample:
      "let fruits = ['apple', 'banana', 'orange'];\nfruits.forEach(fruit => console.log(fruit));",
  },
  {
    id: 76,
    question: "What is the find method?",
    answer:
      "The find method gives you the first thing in the list (array) that matches your rule. It stops looking after it finds one.",
    syntax: "arr.find(item => item > 2)",
    example: "let found = [1, 2, 3].find(item => item > 2);",
    realTimeExample: "Like finding the first red sock in a drawer of socks.",
    codeExample:
      "let numbers = [1, 2, 3, 4];\nlet firstBig = numbers.find(num => num > 2); // 3",
  },
  {
    id: 77,
    question: "What is the some method?",
    answer:
      "The some method checks if at least one thing in the list (array) matches your rule. It says `yes` if it finds one, `no` if it doesn`t.",
    syntax: "arr.some(item => item > 2)",
    example: "let hasBig = [1, 2, 3].some(item => item > 2);",
    realTimeExample:
      "Like checking if at least one friend brought a ball to play with.",
    codeExample:
      "let numbers = [1, 2, 3];\nlet hasEven = numbers.some(num => num % 2 === 0); // true",
  },
  {
    id: 78,
    question: "What is the every method?",
    answer:
      "The every method checks if all things in the list (array) match your rule. It says `yes` only if every single one matches.",
    syntax: "arr.every(item => item > 2)",
    example: "let allBig = [3, 4, 5].every(item => item > 2);",
    realTimeExample:
      "Like making sure every student in class did their homework.",
    codeExample:
      "let numbers = [2, 4, 6];\nlet allEven = numbers.every(num => num % 2 === 0); // true",
  },
  {
    id: 79,
    question: "What is the includes method?",
    answer:
      "The includes method checks if something is in the list (array). It says `yes` if it`s there, `no` if it`s not.",
    syntax: "arr.includes(2)",
    example: "let hasTwo = [1, 2, 3].includes(2);",
    realTimeExample:
      "Like checking if your favorite candy is in the candy jar.",
    codeExample:
      "let fruits = ['apple', 'banana', 'orange'];\nlet hasBanana = fruits.includes('banana'); // true",
  },
  {
    id: 80,
    question: "What is the indexOf method?",
    answer:
      "The indexOf method tells you where something is in the list (array). It gives you the number (index) of the thing, or -1 if it`s not there.",
    syntax: "arr.indexOf(2)",
    example: "let position = [1, 2, 3].indexOf(2);",
    realTimeExample: "Like finding the page number of a chapter in a book.",
    codeExample:
      "let letters = ['a', 'b', 'c'];\nlet index = letters.indexOf('b'); // 1",
  },
  {
    id: 81,
    question: "What is the join method?",
    answer:
      "The join method turns a list (array) into a word (string). You can say what to put between each thing in the list.",
    syntax: "arr.join(',')",
    example: "let text = [1, 2, 3].join('-');",
    realTimeExample: "Like stringing beads together to make a necklace.",
    codeExample:
      "let words = ['Hello', 'world'];\nlet sentence = words.join(' '); // 'Hello world'",
  },
  {
    id: 82,
    question: "What is the split method?",
    answer:
      "The split method turns a word (string) into a list (array). You say where to cut the word, and it gives you the pieces.",
    syntax: "'1,2,3'.split(',')",
    example: "let arr = '1-2-3'.split('-');",
    realTimeExample:
      "Like cutting a string of paper dolls into individual dolls.",
    codeExample:
      "let sentence = 'Hello world';\nlet words = sentence.split(' '); // ['Hello', 'world']",
  },
  {
    id: 83,
    question: "What is the replace method?",
    answer:
      "The replace method changes part of a word (string). You say what to find and what to put in its place.",
    syntax: "'hello'.replace('l', 'x')",
    example: "let newText = 'hello'.replace('l', 'x');",
    realTimeExample:
      "Like using correction tape to change a letter in your notebook.",
    codeExample:
      "let text = 'I love apples';\nlet newText = text.replace('apples', 'bananas'); // 'I love bananas'",
  },
  {
    id: 84,
    question: "What is the substring method?",
    answer:
      "The substring method cuts out a part of a word (string). You say where to start and where to stop, and it gives you that part.",
    syntax: "'hello'.substring(0, 2)",
    example: "let part = 'hello'.substring(0, 2);",
    realTimeExample: "Like cutting out a coupon from a newspaper.",
    codeExample:
      "let word = 'JavaScript';\nlet sub = word.substring(0, 4); // 'Java'",
  },
  {
    id: 85,
    question: "What is the toUpperCase method?",
    answer:
      "The toUpperCase method makes all the letters in a word (string) BIG. It`s like shouting the word.",
    syntax: "'hello'.toUpperCase()",
    example: "let big = 'hello'.toUpperCase();",
    realTimeExample: "Like shouting: `HELLO!` instead of `hello.`",
    codeExample:
      "let greeting = 'hello';\nlet loudGreeting = greeting.toUpperCase(); // 'HELLO'",
  },
  {
    id: 86,
    question: "What is the toLowerCase method?",
    answer:
      "The toLowerCase method makes all the letters in a word (string) small. It`s like whispering the word.",
    syntax: "'HELLO'.toLowerCase()",
    example: "let small = 'HELLO'.toLowerCase();",
    realTimeExample: "Like whispering: `hello` instead of `HELLO.`",
    codeExample:
      "let shout = 'HELLO';\nlet whisper = shout.toLowerCase(); // 'hello'",
  },
  {
    id: 87,
    question: "What is the trim method?",
    answer:
      "The trim method removes extra spaces from the start and end of a word (string). It`s like trimming the edges of a piece of paper.",
    syntax: "' hello '.trim()",
    example: "let clean = ' hello '.trim();",
    realTimeExample:
      "Like trimming the edges of a piece of paper to make it neat.",
    codeExample:
      "let messy = '   hello   ';\nlet clean = messy.trim(); // 'hello'",
  },
  {
    id: 88,
    question: "What is the charAt method?",
    answer:
      "The charAt method gives you the letter at a certain spot in a word (string). You say the number of the spot (starting at 0), and it gives you the letter there.",
    syntax: "'hello'.charAt(0)",
    example: "let first = 'hello'.charAt(0);",
    realTimeExample: "Like pointing to the first letter in a word on a page.",
    codeExample:
      "let word = 'hello';\nlet firstLetter = word.charAt(0); // 'h'",
  },
  {
    id: 89,
    question: "What is the concat method?",
    answer:
      "The concat method joins two words (strings) or lists (arrays) together. It`s like taping two pieces of paper together.",
    syntax: "'hello'.concat(' world')",
    example: "let greeting = 'hello'.concat(' world');",
    realTimeExample:
      "Like taping two pieces of paper together to make a longer sheet.",
    codeExample:
      "let first = 'Hello';\nlet second = 'world';\nlet sentence = first.concat(', ', second); // 'Hello, world'",
  },
  {
    id: 90,
    question: "What is the push method?",
    answer:
      "The push method adds something to the end of a list (array). It`s like adding a new book to the end of a bookshelf.",
    syntax: "arr.push(4)",
    example: "let arr = [1, 2, 3];\narr.push(4);",
    realTimeExample: "Like adding a new book to the end of a bookshelf.",
    codeExample:
      "let fruits = ['apple', 'banana'];\nfruits.push('orange'); // ['apple', 'banana', 'orange']",
  },
  {
    id: 91,
    question: "What is the pop method?",
    answer:
      "The pop method removes the last thing from a list (array). It`s like taking the top pancake from a stack.",
    syntax: "arr.pop()",
    example: "let last = [1, 2, 3].pop();",
    realTimeExample: "Like taking the top pancake from a stack.",
    codeExample:
      "let fruits = ['apple', 'banana', 'orange'];\nlet lastFruit = fruits.pop(); // 'orange'",
  },
  {
    id: 92,
    question: "What is the shift method?",
    answer:
      "The shift method removes the first thing from a list (array). It`s like taking the first card from a deck.",
    syntax: "arr.shift()",
    example: "let first = [1, 2, 3].shift();",
    realTimeExample: "Like taking the first card from a deck.",
    codeExample:
      "let fruits = ['apple', 'banana', 'orange'];\nlet firstFruit = fruits.shift(); // 'apple'",
  },
  {
    id: 93,
    question: "What is the unshift method?",
    answer:
      "The unshift method adds something to the start of a list (array). It`s like adding a new chapter at the beginning of a book.",
    syntax: "arr.unshift(0)",
    example: "let arr = [1, 2, 3];\narr.unshift(0);",
    realTimeExample: "Like adding a new chapter at the beginning of a book.",
    codeExample:
      "let fruits = ['banana', 'orange'];\nfruits.unshift('apple'); // ['apple', 'banana', 'orange']",
  },
  {
    id: 94,
    question: "What is the sort method?",
    answer:
      "The sort method puts the things in a list (array) in order. It can order words or numbers, but you might need to tell it how to order numbers.",
    syntax: "arr.sort()",
    example: "let sorted = [3, 1, 2].sort();",
    realTimeExample: "Like arranging your books by size or color.",
    codeExample: "let numbers = [3, 1, 4, 2];\nnumbers.sort(); // [1, 2, 3, 4]",
  },
  {
    id: 95,
    question: "What is the reverse method?",
    answer:
      "The reverse method turns a list (array) backwards. The first thing becomes last, and the last thing becomes first.",
    syntax: "arr.reverse()",
    example: "let backwards = [1, 2, 3].reverse();",
    realTimeExample:
      "Like reading a word from the end to the start: `hello` becomes `olleh`.",
    codeExample:
      "let letters = ['a', 'b', 'c'];\nletters.reverse(); // ['c', 'b', 'a']",
  },
  {
    id: 96,
    question: "What is the Math object?",
    answer:
      "The Math object is like a math toolbox. It has tools for doing math, like finding the biggest number, making random numbers, or calculating pi.",
    syntax: "Math.PI\nMath.random()",
    example: "let pi = Math.PI;\nlet random = Math.random();",
    realTimeExample:
      "Like a math toolbox: it has everything you need for calculations.",
    codeExample:
      "let pi = Math.PI; // 3.14159...\nlet random = Math.random(); // a number between 0 and 1",
  },
  {
    id: 97,
    question: "What is Math.PI?",
    answer:
      "Math.PI is the number pi (3.14159...). It`s a special number used in math, especially with circles.",
    syntax: "Math.PI",
    example: "let pi = Math.PI;",
    realTimeExample: "Like the magic number used to find the size of a circle.",
    codeExample: "let circleArea = Math.PI * radius * radius;",
  },
  {
    id: 98,
    question: "What is Math.random()?",
    answer:
      "Math.random() gives you a random number between 0 and 1. It`s like rolling a dice, but the number is always less than 1.",
    syntax: "Math.random()",
    example: "let random = Math.random();",
    realTimeExample: "Like rolling a dice: you get a random number.",
    codeExample:
      "let randomNum = Math.random();\nlet diceRoll = Math.floor(Math.random() * 6) + 1; // 1-6",
  },
  {
    id: 99,
    question: "What is Math.floor()?",
    answer:
      "Math.floor() rounds a number down to the nearest whole number. It`s like always stepping down to the lower floor, even if you`re halfway up.",
    syntax: "Math.floor(3.7)",
    example: "let floor = Math.floor(3.7);",
    realTimeExample:
      "Like always stepping down to the lower floor, even if you`re halfway up.",
    codeExample: "let num = 3.9;\nlet roundedDown = Math.floor(num); // 3",
  },
  {
    id: 100,
    question: "What is Math.ceil()?",
    answer:
      "Math.ceil() rounds a number up to the nearest whole number. It`s like always stepping up to the next floor, even if you`re halfway down.",
    syntax: "Math.ceil(3.2)",
    example: "let ceil = Math.ceil(3.2);",
    realTimeExample:
      "Like always stepping up to the next floor, even if you`re halfway down.",
    codeExample: "let num = 3.1;\nlet roundedUp = Math.ceil(num); // 4",
  },
  {
    id: 101,
    question: "What is the difference between let and const?",
    answer:
      "'let` is like a box you can change what`s inside later. `const` is like a box you can`t change after you put something in it. Both are new ways to make boxes (variables).",
    syntax: "let changeable = 10;\nconst fixed = 20;",
    example:
      "let age = 10;\nage = 11; // OK\nconst name = 'John';\nname = 'Jane'; // Error!",
    realTimeExample:
      "'let` is like a pencil note: you can erase and write something new. `const` is like a permanent marker: once you write, you can`t change it.",
    codeExample:
      "let score = 0;\nscore = 10; // OK\n\nconst PI = 3.14;\nPI = 3.14159; // Error!",
  },
  {
    id: 102,
    question: "What is an arrow function?",
    answer:
      "An arrow function is a shorter way to write a recipe (function). Instead of saying `function`, you use =>. It`s like writing a text message in shorthand.",
    syntax: "const name = () => { // code }",
    example: "const add = (a, b) => a + b;",
    realTimeExample:
      "Like writing `CU L8R` instead of `See you later`. It`s shorter and does the same thing.",
    codeExample:
      "const greet = name => `Hello, ${name}!`;\nconsole.log(greet('Alice')); // 'Hello, Alice!'",
  },
  {
    id: 103,
    question: "What is the rest parameter?",
    answer:
      "The rest parameter (...) lets you put all the things people give to your recipe (function) into one list (array). It`s like collecting all the toys on the floor into one box.",
    syntax: "function func(...args) { // args is an array }",
    example: "function sum(...nums) { return nums.reduce((a, b) => a + b); }",
    realTimeExample:
      "Like collecting all the gifts at a birthday party into one big bag.",
    codeExample:
      "function logAll(...items) {\n  items.forEach(item => console.log(item));\n}\nlogAll(1, 2, 3); // logs 1, 2, 3",
  },
  {
    id: 104,
    question: "What is the default parameter?",
    answer:
      "A default parameter is like a backup plan for your recipe (function). If someone doesn`t give you something, you use the backup instead.",
    syntax: "function func(param = default) { // code }",
    example: "function greet(name = 'Guest') { console.log(`Hi, ${name}!`); }",
    realTimeExample:
      "Like a default ringtone: if you don`t pick one, your phone uses the default.",
    codeExample:
      "function multiply(a, b = 2) {\n  return a * b;\n}\nconsole.log(multiply(3)); // 6",
  },
  {
    id: 105,
    question: "What is a constructor function?",
    answer:
      "A constructor function is like a cookie cutter. You use it to make many special boxes (objects) that are all the same shape but can have different things inside.",
    syntax:
      "function Person(name) { this.name = name; }\nlet p = new Person('John');",
    example:
      "function Car(model) { this.model = model; }\nlet myCar = new Car('Toyota');",
    realTimeExample:
      "Like a cookie cutter: you use the same cutter to make many cookies, but each cookie can have different toppings.",
    codeExample:
      "function Person(name, age) {\n  this.name = name;\n  this.age = age;\n}\nlet person = new Person('John', 25);",
  },
  {
    id: 106,
    question: "What is a class in JavaScript?",
    answer:
      "A class is like a blueprint for making special boxes (objects). It says what the boxes should look like and what they can do. You can make many boxes from the same blueprint.",
    syntax: "class Person { constructor(name) { this.name = name; } }",
    example:
      "class Dog { constructor(name) { this.name = name; } }\nlet myDog = new Dog('Buddy');",
    realTimeExample:
      "Like a blueprint for a house: you can build many houses from the same plan, but each house can be painted a different color.",
    codeExample:
      "class Car {\n  constructor(model) {\n    this.model = model;\n  }\n}\nlet myCar = new Car('Tesla');",
  },
  {
    id: 107,
    question: "What is inheritance in JavaScript?",
    answer:
      "Inheritance lets one class (blueprint) get things from another class. It`s like getting your mom`s recipe book and adding your own recipes to it.",
    syntax: "class Child extends Parent { }",
    example:
      "class Animal { eat() { console.log('Eating...'); } }\nclass Dog extends Animal { bark() { console.log('Bark!'); } }",
    realTimeExample:
      "Like inheriting your mom`s recipe book and adding your own recipes to it.",
    codeExample:
      "class Vehicle {\n  start() { console.log('Starting...'); }\n}\nclass Car extends Vehicle {\n  honk() { console.log('Beep!'); }\n}",
  },
  {
    id: 108,
    question: "What is super() in JavaScript?",
    answer:
      "super() is like calling your mom to ask how to make her special sauce. It lets a child class use things from its parent class.",
    syntax: "super();\nsuper.method();",
    example:
      "class Dog extends Animal { constructor(name) { super(); this.name = name; } }",
    realTimeExample:
      "Like calling your mom to ask how to make her special sauce, then adding your own twist.",
    codeExample:
      "class Animal {\n  constructor(name) {\n    this.name = name;\n  }\n}\nclass Dog extends Animal {\n  constructor(name, breed) {\n    super(name);\n    this.breed = breed;\n  }\n}",
  },
  {
    id: 109,
    question: "What is a static method?",
    answer:
      "A static method is like a school rule. It belongs to the class (blueprint), not to the boxes (objects) made from it. You can use it without making a box.",
    syntax: "class Class { static method() { } }",
    example:
      "class MathUtils { static add(a, b) { return a + b; } }\nMathUtils.add(2, 3);",
    realTimeExample:
      "Like a school rule: it applies to everyone, not just one student.",
    codeExample:
      "class Circle {\n  static PI = 3.14;\n  static area(radius) {\n    return this.PI * radius * radius;\n  }\n}\nconsole.log(Circle.area(2));",
  },
  {
    id: 110,
    question: "What is a getter and setter?",
    answer:
      "Getters and setters let you control how people see or change things in your special box (object). A getter is like a window to look inside, and a setter is like a slot to put things in.",
    syntax:
      "get property() { return this._property; }\nset property(value) { this._property = value; }",
    example:
      "class Person { get name() { return this._name; } set name(value) { this._name = value; } }",
    realTimeExample:
      "Like a piggy bank: you can only put money in or take it out in certain ways.",
    codeExample:
      "class Person {\n  constructor(name) {\n    this._name = name;\n  }\n  get name() {\n    return this._name;\n  }\n  set name(value) {\n    this._name = value;\n  }\n}",
  },
  {
    id: 111,
    question: "What is the difference between let and var?",
    answer:
      "'let` is like a box you can only use in the room you made it. `var` is like a box you can use anywhere in the house. `let` is newer and safer.",
    syntax: "let x = 10;\nvar y = 20;",
    example:
      "if (true) { let x = 10; } // x is only here\nif (true) { var y = 20; } // y is everywhere",
    realTimeExample:
      "'let` is like a secret between friends. `var` is like a school announcement everyone hears.",
    codeExample:
      "for (let i = 0; i < 3; i++) {}\n// console.log(i); // Error: i is not defined\n\nfor (var j = 0; j < 3; j++) {}\nconsole.log(j); // 3",
  },
  {
    id: 112,
    question: "What is the difference between null and undefined?",
    answer:
      "'null` is like an empty box you put on the shelf on purpose. `undefined` is like a box that isn`t there yet or you forgot to put it on the shelf.",
    syntax: "let empty = null;\nlet notSet;",
    example: "let age = null;\nlet name;",
    realTimeExample:
      "null: an empty lunchbox because you chose not to bring lunch. undefined: forgetting to pack lunch at all.",
    codeExample:
      "let a = null;\nlet b;\nconsole.log(a); // null\nconsole.log(b); // undefined",
  },
  {
    id: 113,
    question: "What is the difference between == and ===?",
    answer:
      "`==` checks if two things are the same, but it changes types if needed. `===` checks if two things are the same AND the same type. It`s stricter and safer.",
    syntax: "value1 == value2\nvalue1 === value2",
    example: "5 == '5' // true\n5 === '5' // false",
    realTimeExample:
      "`==`: two boxes with the same number of apples, but one is red and one is green. `===`: both boxes must have the same number of apples AND the same color.",
    codeExample:
      "let num = 5;\nlet str = '5';\nconsole.log(num == str); // true\nconsole.log(num === str); // false",
  },
  {
    id: 114,
    question: "What is the difference between let and const?",
    answer:
      "'let` is like a box you can change what`s inside later. `const` is like a box you can`t change after you put something in it. Both are new ways to make boxes (variables).",
    syntax: "let changeable = 10;\nconst fixed = 20;",
    example:
      "let age = 10;\nage = 11; // OK\nconst name = 'John';\nname = 'Jane'; // Error!",
    realTimeExample:
      "'let` is like a pencil note: you can erase and write something new. `const` is like a permanent marker: once you write, you can`t change it.",
    codeExample:
      "let score = 0;\nscore = 10; // OK\n\nconst PI = 3.14;\nPI = 3.14159; // Error!",
  },
  {
    id: 115,
    question: "What is the difference between for and forEach?",
    answer:
      "'for` is like walking to each house on a street yourself. You control each step. `forEach` is like giving a robot a task for each house. The robot does the work for you.",
    syntax:
      "for (let i = 0; i < arr.length; i++)\narr.forEach(item => console.log(item))",
    example:
      "for (let i = 0; i < 3; i++) { console.log(i); }\n[1, 2, 3].forEach(item => console.log(item));",
    realTimeExample:
      "'for`: you control the steps, like walking to each house on a street. `forEach`: you give a task to a robot for each house.",
    codeExample:
      "let arr = [1, 2, 3];\nfor (let i = 0; i < arr.length; i++) {\n  console.log(arr[i]);\n}\n\narr.forEach(item => {\n  console.log(item);\n});",
  },
  {
    id: 116,
    question: "What is the difference between map and forEach?",
    answer:
      "'map` makes a new list with changed things. `forEach` just does something for each thing. `map` gives you a new list; `forEach` doesn`t.",
    syntax: "arr.map(item => item * 2)\narr.forEach(item => console.log(item))",
    example:
      "let doubled = [1, 2, 3].map(item => item * 2);\n[1, 2, 3].forEach(item => console.log(item));",
    realTimeExample:
      "'map`: making a new list of doubled numbers. `forEach`: just reading each number out loud.",
    codeExample:
      "let numbers = [1, 2, 3];\nlet doubled = numbers.map(num => num * 2); // [2, 4, 6]\n\nnumbers.forEach(num => {\n  console.log(num);\n});",
  },
  {
    id: 117,
    question: "What is the difference between slice and splice?",
    answer:
      "'slice` makes a copy of a part of a list (array) or a word (string). It doesn`t change the original. `splice` cuts out a part of a list and can add new things. It does change the original.",
    syntax: "arr.slice(start, end)\narr.splice(start, deleteCount, items)",
    example: "let part = arr.slice(0, 2);\narr.splice(1, 0, 'new');",
    realTimeExample:
      "'slice`: making a copy of a page from a book. `splice`: cutting out a page and maybe adding a new one.",
    codeExample:
      "let arr = [1, 2, 3, 4];\nlet sliced = arr.slice(1, 3); // [2, 3]\narr.splice(1, 2, 'a', 'b'); // arr is [1, 'a', 'b', 4]",
  },
  {
    id: 118,
    question: "What is the difference between push and pop?",
    answer:
      "'push` adds something to the end of a list (array). `pop` removes the last thing from a list. They work at the end of the list.",
    syntax: "arr.push(item)\narr.pop()",
    example: "let arr = [1, 2, 3];\narr.push(4);\nlet last = arr.pop();",
    realTimeExample:
      "'push`: adding a new book to the end of a shelf. `pop`: taking the last book off the shelf.",
    codeExample:
      "let stack = [];\nstack.push(1); // [1]\nstack.push(2); // [1, 2]\nlet item = stack.pop(); // item is 2, stack is [1]",
  },
  {
    id: 119,
    question: "What is the difference between shift and unshift?",
    answer:
      "'shift` removes the first thing from a list (array). `unshift` adds something to the start of a list. They work at the beginning of the list.",
    syntax: "arr.shift()\narr.unshift(item)",
    example: "let arr = [1, 2, 3];\nlet first = arr.shift();\narr.unshift(0);",
    realTimeExample:
      "'shift`: taking the first card from a deck. `unshift`: adding a new card to the top of the deck.",
    codeExample:
      "let queue = [];\nqueue.unshift(1); // [1]\nqueue.unshift(2); // [2, 1]\nlet item = queue.shift(); // item is 2, queue is [1]",
  },
  {
    id: 120,
    question: "What is the difference between find and filter?",
    answer:
      "'find` gives you the first thing in a list (array) that matches your rule. `filter` gives you all the things that match your rule in a new list.",
    syntax: "arr.find(item => item > 2)\narr.filter(item => item > 2)",
    example:
      "let firstBig = [1, 2, 3].find(item => item > 2);\nlet allBig = [1, 2, 3].filter(item => item > 2);",
    realTimeExample:
      "'find`: finding the first red sock in a drawer. `filter`: taking out all red socks.",
    codeExample:
      "let numbers = [1, 2, 3, 4];\nlet firstEven = numbers.find(num => num % 2 === 0); // 2\nlet allEven = numbers.filter(num => num % 2 === 0); // [2, 4]",
  },
  {
    id: 121,
    question: "What is the difference between some and every?",
    answer:
      "'some` checks if at least one thing in a list (array) matches your rule. `every` checks if all things in the list match your rule.",
    syntax: "arr.some(item => item > 2)\narr.every(item => item > 2)",
    example:
      "let hasBig = [1, 2, 3].some(item => item > 2);\nlet allBig = [1, 2, 3].every(item => item > 2);",
    realTimeExample:
      "'some`: checking if at least one friend brought a ball. `every`: making sure every friend brought a ball.",
    codeExample:
      "let numbers = [1, 2, 3];\nlet hasEven = numbers.some(num => num % 2 === 0); // true\nlet allEven = numbers.every(num => num % 2 === 0); // false",
  },
  {
    id: 122,
    question: "What is the difference between includes and indexOf?",
    answer:
      "'includes` checks if something is in a list (array) and says `yes` or `no`. `indexOf` tells you where it is in the list, or -1 if it`s not there.",
    syntax: "arr.includes(2)\narr.indexOf(2)",
    example:
      "let hasTwo = [1, 2, 3].includes(2);\nlet position = [1, 2, 3].indexOf(2);",
    realTimeExample:
      "'includes`: checking if your favorite candy is in the jar. `indexOf`: finding the page number of a chapter in a book.",
    codeExample:
      "let fruits = ['apple', 'banana'];\nlet hasApple = fruits.includes('apple'); // true\nlet index = fruits.indexOf('banana'); // 1",
  },
  {
    id: 123,
    question: "What is the difference between concat and join?",
    answer:
      "'concat` joins two lists (arrays) together and makes a new list. `join` turns a list into a word (string) with something in between each thing.",
    syntax: "arr1.concat(arr2)\narr.join(',')",
    example:
      "let newArr = [1, 2].concat([3, 4]);\nlet text = [1, 2, 3].join('-');",
    realTimeExample:
      "'concat`: combining two trains into one. `join`: writing all the train car numbers on a sign.",
    codeExample:
      "let arr1 = [1, 2];\nlet arr2 = [3, 4];\nlet combined = arr1.concat(arr2); // [1, 2, 3, 4]\n\nlet words = ['Hello', 'world'];\nlet sentence = words.join(' '); // 'Hello world'",
  },
  {
    id: 124,
    question: "What is the difference between split and slice?",
    answer:
      "'split` turns a word (string) into a list (array) by cutting it at certain spots. `slice` copies a part of a list or a word without changing the original.",
    syntax: "'1,2,3'.split(',')\n'hello'.slice(0, 2)",
    example: "let arr = '1-2-3'.split('-');\nlet part = 'hello'.slice(0, 2);",
    realTimeExample:
      "'split`: cutting a string of paper dolls into individual dolls. `slice`: copying a part of a page from a book.",
    codeExample:
      "let sentence = 'Hello world';\nlet words = sentence.split(' '); // ['Hello', 'world']\n\nlet word = 'JavaScript';\nlet sub = word.slice(0, 4); // 'Java'",
  },
  {
    id: 125,
    question: "What is the difference between Math.floor and Math.ceil?",
    answer:
      "'Math.floor` rounds a number down to the nearest whole number. `Math.ceil` rounds a number up to the nearest whole number.",
    syntax: "Math.floor(3.7)\nMath.ceil(3.2)",
    example: "let floor = Math.floor(3.7);\nlet ceil = Math.ceil(3.2);",
    realTimeExample:
      "'Math.floor`: always stepping down to the lower floor. `Math.ceil`: always stepping up to the next floor.",
    codeExample:
      "let num1 = 3.7;\nlet num2 = 3.2;\nconsole.log(Math.floor(num1)); // 3\nconsole.log(Math.ceil(num2)); // 4",
  },
  {
    id: 126,
    question: "What is the difference between localStorage and sessionStorage?",
    answer:
      "'localStorage` keeps your data forever, even after you close the browser. `sessionStorage` keeps your data only while the tab is open. When you close the tab, the data is gone.",
    syntax:
      "localStorage.setItem('key', 'value')\nsessionStorage.setItem('key', 'value')",
    example:
      "localStorage.setItem('name', 'John');\nsessionStorage.setItem('name', 'John');",
    realTimeExample:
      "'localStorage`: writing in a permanent notebook. `sessionStorage`: writing on a whiteboard that gets erased after class.",
    codeExample:
      "localStorage.setItem('user', 'Alice');\nsessionStorage.setItem('temp', '123');",
  },
  {
    id: 127,
    question: "What is the difference between import and require?",
    answer:
      "'import` is the new way to use code from another file (module). `require` is the old way, mostly used in Node.js. `import` is like using a modern phone charger; `require` is like using an old one.",
    syntax: "import { name } from 'module'\nconst name = require('module')",
    example:
      "import { add } from './math.js';\nconst add = require('./math.js');",
    realTimeExample:
      "'import`: using a modern phone charger. `require`: using an old phone charger.",
    codeExample:
      "// ES6\nimport { multiply } from './math.js';\n\n// CommonJS\nconst multiply = require('./math.js');",
  },
  {
    id: 128,
    question: "What is the difference between Promise and async/await?",
    answer:
      "A Promise is like ordering food and getting a call when it`s ready. You use .then() to say what to do next. async/await makes it look like your code runs step by step, even though it`s still waiting for things like Promises.",
    syntax:
      "new Promise((resolve, reject) => { })\nasync function() { let result = await promise; }",
    example:
      "fetch('url').then(res => res.json());\nasync function getData() { let data = await fetch('url'); }",
    realTimeExample:
      "Promise: ordering food and getting a call when it`s ready. async/await: waiting at the counter for your food.",
    codeExample:
      "// Promise\nfetch('https://api.example.com/data')\n  .then(response => response.json())\n  .then(data => console.log(data))\n  .catch(error => console.error(error))\n\n// async/await\nasync function fetchData() {\n  try {\n    let response = await fetch('https://api.example.com/data');\n    let data = await response.json();\n    console.log(data);\n  } catch (error) {\n    console.error(error);\n  }\n}",
  },
  {
    id: 129,
    question: "What is the difference between let and var in a loop?",
    answer:
      "'let` makes a new box (variable) for each time the loop runs. `var` makes one box and changes it each time. This can cause problems if you use `var` in loops with delays.",
    syntax: "for (let i = 0; i < 3; i++)\nfor (var i = 0; i < 3; i++)",
    example:
      "for (let i = 0; i < 3; i++) { setTimeout(() => console.log(i), 100); } // 0, 1, 2\nfor (var i = 0; i < 3; i++) { setTimeout(() => console.log(i), 100); } // 3, 3, 3",
    realTimeExample:
      "'let`: each loop has its own counter, like each student in a line gets their own number. `var`: all loops share the same counter, like everyone sharing one number.",
    codeExample:
      "for (let i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 100);\n} // logs 0, 1, 2\n\nfor (var j = 0; j < 3; j++) {\n  setTimeout(() => console.log(j), 100);\n} // logs 3, 3, 3",
  },
  {
    id: 130,
    question: "What is the difference between == and === in if statements?",
    answer:
      "`==` checks if two things are the same, but it changes types if needed. `===` checks if two things are the same AND the same type. It`s stricter and safer.",
    syntax: "if (value == '5')\nif (value === 5)",
    example:
      "if (age == '25') // might be true\nif (age === 25) // only true if age is a number",
    realTimeExample:
      "`==`: two boxes with the same number of apples, but one is red and one is green. `===`: both boxes must have the same number of apples AND the same color.",
    codeExample:
      "let num = 5;\nlet str = '5';\nif (num == str) console.log('Equal with =='); // runs\nif (num === str) console.log('Equal with ==='); // doesn't run",
  },
  {
    id: 131,
    question: "What is the difference between null and undefined in objects?",
    answer:
      "'null` means the small box (property) exists but is empty on purpose. `undefined` means the small box doesn`t exist at all or wasn`t set.",
    syntax: "let obj = { age: null };\nlet obj = { }; // name is undefined",
    example:
      "let person = { age: null };\nlet person = { }; // name is undefined",
    realTimeExample: "null: a labeled empty box. undefined: no box at all.",
    codeExample:
      "let obj1 = { age: null };\nlet obj2 = { };\nconsole.log(obj1.age); // null\nconsole.log(obj2.name); // undefined",
  },
  {
    id: 132,
    question:
      "What is the difference between for...in and for...of for arrays?",
    answer:
      "'for...in` gives you the numbers (indices) of each thing in a list (array). `for...of` gives you the things themselves.",
    syntax: "for (let key in arr)\nfor (let value of arr)",
    example:
      "for (let i in [10, 20, 30]) { console.log(i); } // 0, 1, 2\nfor (let num of [10, 20, 30]) { console.log(num); } // 10, 20, 30",
    realTimeExample:
      "'for...in`: listing the page numbers in a book. `for...of`: reading the content on each page.",
    codeExample:
      "let arr = ['a', 'b', 'c'];\nfor (let i in arr) console.log(i); // 0, 1, 2\nfor (let val of arr) console.log(val); // 'a', 'b', 'c'",
  },
  {
    id: 133,
    question: "What is the difference between Array and Object?",
    answer:
      "An Array is a list of things in order, like a shopping list. An Object is a special box with labeled small boxes inside, like a profile card with name, age, etc.",
    syntax: "let arr = [1, 2, 3];\nlet obj = { name: 'John', age: 25 };",
    example:
      "let fruits = ['apple', 'banana'];\nlet person = { name: 'John', age: 25 };",
    realTimeExample:
      "Array: a list of groceries. Object: a profile card with name, age, etc.",
    codeExample:
      "let colors = ['red', 'green', 'blue'];\nlet person = { name: 'Alice', age: 30 };",
  },
  {
    id: 134,
    question: "What is the difference between push and concat?",
    answer:
      "'push` adds something to the end of a list (array). `concat` joins two lists together and makes a new list, without changing the original lists.",
    syntax: "arr.push(item)\narr1.concat(arr2)",
    example:
      "let arr = [1, 2]; arr.push(3);\nlet newArr = [1, 2].concat([3, 4]);",
    realTimeExample:
      "'push`: adding a new book to your shelf. `concat`: combining your shelf with a friend`s shelf to make a new shelf.",
    codeExample:
      "let arr1 = [1, 2];\narr1.push(3); // arr1 is [1, 2, 3]\n\nlet arr2 = [4, 5];\nlet combined = arr1.concat(arr2); // [1, 2, 3, 4, 5]",
  },
  {
    id: 135,
    question: "What is the difference between pop and shift?",
    answer:
      "'pop` removes the last thing from a list (array). `shift` removes the first thing from a list.",
    syntax: "arr.pop()\narr.shift()",
    example:
      "let arr = [1, 2, 3]; let last = arr.pop();\nlet first = arr.shift();",
    realTimeExample:
      "'pop`: taking the top pancake from a stack. `shift`: taking the first card from a deck.",
    codeExample:
      "let arr = [1, 2, 3];\nlet last = arr.pop(); // 3, arr is [1, 2]\nlet first = arr.shift(); // 1, arr is [2]",
  },
  {
    id: 136,
    question: "What is the difference between unshift and push?",
    answer:
      "'unshift` adds something to the start of a list (array). `push` adds something to the end of a list.",
    syntax: "arr.unshift(item)\narr.push(item)",
    example: "let arr = [1, 2]; arr.unshift(0);\narr.push(3);",
    realTimeExample:
      "'unshift`: adding a new chapter at the start of a book. `push`: adding a new chapter at the end of a book.",
    codeExample:
      "let arr = [2, 3];\narr.unshift(1); // [1, 2, 3]\narr.push(4); // [1, 2, 3, 4]",
  },
  {
    id: 137,
    question: "What is the difference between findIndex and indexOf?",
    answer:
      "'findIndex` uses a rule (function) to find the first thing in a list (array) that matches. `indexOf` looks for a specific thing in the list.",
    syntax: "arr.findIndex(item => item > 2)\narr.indexOf(2)",
    example:
      "let index = [1, 2, 3].findIndex(item => item > 2);\nlet position = [1, 2, 3].indexOf(2);",
    realTimeExample:
      "'findIndex`: finding the first page with more than 10 words. `indexOf`: finding the page numbered 2.",
    codeExample:
      "let numbers = [1, 2, 3, 4];\nlet index1 = numbers.findIndex(num => num > 2); // 2\nlet index2 = numbers.indexOf(3); // 2",
  },
  {
    id: 138,
    question: "What is the difference between some and includes?",
    answer:
      "'some` uses a rule (function) to check if at least one thing in a list (array) matches. `includes` checks if a specific thing is in the list.",
    syntax: "arr.some(item => item > 2)\narr.includes(2)",
    example:
      "let hasBig = [1, 2, 3].some(item => item > 2);\nlet hasTwo = [1, 2, 3].includes(2);",
    realTimeExample:
      "'some`: checking if any cookie has chocolate chips. `includes`: checking if you have a chocolate chip cookie.",
    codeExample:
      "let numbers = [1, 2, 3];\nlet hasEven = numbers.some(num => num % 2 === 0); // true\nlet hasTwo = numbers.includes(2); // true",
  },
  {
    id: 139,
    question: "What is the difference between every and includes?",
    answer:
      "'every` checks if all things in a list (array) match a rule (function). `includes` checks if a specific thing is in the list.",
    syntax: "arr.every(item => item > 2)\narr.includes(2)",
    example:
      "let allBig = [3, 4, 5].every(item => item > 2);\nlet hasTwo = [1, 2, 3].includes(2);",
    realTimeExample:
      "'every`: making sure all cookies have chocolate chips. `includes`: checking if you have a chocolate chip cookie.",
    codeExample:
      "let numbers = [2, 4, 6];\nlet allEven = numbers.every(num => num % 2 === 0); // true\nlet hasThree = numbers.includes(3); // false",
  },
  {
    id: 140,
    question: "What is the difference between for and while loops?",
    answer:
      "'for` runs a set number of times. You say how many times to repeat. `while` runs until something is no longer true. You say when to stop.",
    syntax: "for (let i = 0; i < 3; i++)\nwhile (condition)",
    example:
      "for (let i = 0; i < 3; i++) { console.log(i); }\nlet i = 0; while (i < 3) { console.log(i); i++; }",
    realTimeExample:
      "'for`: counting from 1 to 10. `while`: eating cookies until the jar is empty.",
    codeExample:
      "// for loop\nfor (let i = 0; i < 3; i++) {\n  console.log(i);\n}\n\n// while loop\nlet j = 0;\nwhile (j < 3) {\n  console.log(j);\n  j++;\n}",
  },
  {
    id: 141,
    question: "What is the difference between do...while and while loops?",
    answer:
      "'do...while` runs the code at least once, then checks if it should keep going. `while` checks first, so it might not run at all.",
    syntax: "do { // code } while (condition)\nwhile (condition) { // code }",
    example:
      "let i = 0; do { console.log(i); i++; } while (i < 3);\nlet i = 0; while (i < 3) { console.log(i); i++; }",
    realTimeExample:
      "'do...while`: singing a song at least once, even if you don`t like it. `while`: only singing if you like the song.",
    codeExample:
      "// do...while\nlet i = 0;\ndo {\n  console.log(i);\n  i++;\n} while (i < 3);\n\n// while\nlet j = 0;\nwhile (j < 3) {\n  console.log(j);\n  j++;\n}",
  },
  {
    id: 142,
    question: "What is the difference between break and continue?",
    answer:
      "'break` stops the whole loop right now. `continue` skips just this one time and goes to the next one.",
    syntax: "break;\ncontinue;",
    example:
      "for (let i = 0; i < 3; i++) { if (i === 1) break; }\nfor (let i = 0; i < 3; i++) { if (i === 1) continue; }",
    realTimeExample:
      "'break`: stopping a game. `continue`: skipping a turn in a game.",
    codeExample:
      "// break\nfor (let i = 0; i < 5; i++) {\n  if (i === 2) break;\n  console.log(i);\n} // logs 0, 1\n\n// continue\nfor (let i = 0; i < 5; i++) {\n  if (i === 2) continue;\n  console.log(i);\n} // logs 0, 1, 3, 4",
  },
  {
    id: 143,
    question:
      "What is the difference between function declaration and function expression?",
    answer:
      "A function declaration can be used before it`s made. A function expression must be made first. Declarations are like recipes you can use anytime; expressions are like recipes you have to write down first.",
    syntax: "function name() { }\nconst name = function() { };",
    example:
      "sayHi(); function sayHi() { console.log('Hi!'); }\nsayHi(); const sayHi = function() { console.log('Hi!'); };",
    realTimeExample:
      "Declaration: you can call a friend before you know their number. Expression: you need to save their number first.",
    codeExample:
      "// Declaration\nsayHello();\nfunction sayHello() {\n  console.log('Hello!');\n}\n\n// Expression\nsayHi(); // Error!\nconst sayHi = function() {\n  console.log('Hi!');\n};",
  },
  {
    id: 144,
    question:
      "What is the difference between arrow functions and regular functions?",
    answer:
      "Arrow functions are shorter and don`t have their own `this`. Regular functions can have their own `this` and can be used in more ways.",
    syntax: "const name = () => { }\nfunction name() { }",
    example:
      "const add = (a, b) => a + b;\nfunction add(a, b) { return a + b; }",
    realTimeExample:
      "Arrow function: a quick note. Regular function: a full letter.",
    codeExample:
      "// Arrow function\nconst greet = name => `Hi, ${name}!`;\n\n// Regular function\nfunction greet(name) {\n  return `Hi, ${name}!`;\n}",
  },
  {
    id: 145,
    question: "What is the difference between null and 0?",
    answer:
      "'null` means `nothing` on purpose. It`s like an empty box. `0` is a number, like zero apples in a box.",
    syntax: "let empty = null;\nlet zero = 0;",
    example: "let age = null;\nlet count = 0;",
    realTimeExample:
      "null: an empty lunchbox because you chose not to bring lunch. 0: a lunchbox with zero apples.",
    codeExample:
      "let a = null;\nlet b = 0;\nconsole.log(a == b); // false\nconsole.log(a === b); // false",
  },
  {
    id: 146,
    question: "What is the difference between undefined and null?",
    answer:
      "'undefined` means a box (variable) doesn`t exist yet or you forgot to put something in it. `null` means you put `nothing` in the box on purpose.",
    syntax: "let notSet;\nlet empty = null;",
    example: "let name;\nlet age = null;",
    realTimeExample:
      "undefined: forgetting to pack lunch. null: choosing not to pack lunch.",
    codeExample:
      "let x;\nlet y = null;\nconsole.log(x); // undefined\nconsole.log(y); // null",
  },
  {
    id: 147,
    question: "What is the difference between == and === in type checking?",
    answer:
      "`==` checks if two things are the same, but it changes types if needed. `===` checks if two things are the same AND the same type. It`s stricter and safer.",
    syntax: "value == '5'\nvalue === 5",
    example:
      "if (age == '25') // might be true\nif (age === 25) // only true if age is a number",
    realTimeExample:
      "`==`: two boxes with the same number of apples, but one is red and one is green. `===`: both boxes must have the same number of apples AND the same color.",
    codeExample:
      "let num = 5;\nlet str = '5';\nconsole.log(num == str); // true\nconsole.log(num === str); // false",
  },
  {
    id: 148,
    question: "What is the difference between let and const in loops?",
    answer:
      "'let` makes a new box (variable) for each time the loop runs. `const` makes a box you can`t change, but you can make a new box each time.",
    syntax:
      "for (let i = 0; i < 3; i++)\nfor (const i = 0; i < 3; i++) // Error!",
    example:
      "for (let i = 0; i < 3; i++) { console.log(i); }\nfor (const i = 0; i < 3; i++) { console.log(i); } // Error!",
    realTimeExample:
      "'let`: counting steps as you walk. `const`: trying to count steps with a fixed number.",
    codeExample:
      "// Works\nfor (let i = 0; i < 3; i++) {\n  console.log(i);\n}\n\n// Error!\nfor (const j = 0; j < 3; j++) {\n  console.log(j);\n}",
  },
  {
    id: 149,
    question:
      "What is the difference between for...in and for...of for strings?",
    answer:
      "'for...in` gives you the numbers (indices) of each letter in a word (string). `for...of` gives you the letters themselves.",
    syntax: "for (let i in 'hello')\nfor (let char of 'hello')",
    example:
      "for (let i in 'hello') { console.log(i); } // 0, 1, 2, 3, 4\nfor (let char of 'hello') { console.log(char); } // h, e, l, l, o",
    realTimeExample:
      "'for...in`: listing the positions of letters in a word. `for...of`: reading each letter in a word.",
    codeExample:
      "let word = 'hello';\nfor (let i in word) console.log(i); // 0, 1, 2, 3, 4\nfor (let char of word) console.log(char); // h, e, l, l, o",
  },
  {
    id: 150,
    question: "What is the difference between Array.isArray() and typeof?",
    answer:
      "'Array.isArray()` checks if something is a list (array). `typeof` tells you the type of something, but for lists it says `object`.",
    syntax: "Array.isArray(value)\ntypeof value",
    example: "Array.isArray([1, 2, 3]); // true\ntypeof [1, 2, 3]; // 'object'",
    realTimeExample:
      "'Array.isArray()`: asking if something is a list. `typeof`: asking what type of thing it is (number, string, etc.).",
    codeExample:
      "let list = [1, 2, 3];\nlet obj = { a: 1 };\nconsole.log(Array.isArray(list)); // true\nconsole.log(Array.isArray(obj)); // false\nconsole.log(typeof list); // 'object'\nconsole.log(typeof obj); // 'object'",
  },
];

// Make data available globally
window.beginner = beginner;
