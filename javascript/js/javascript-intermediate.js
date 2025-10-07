let intermediate = [
  {
    id: 1,
    question: "What is event bubbling?",
    answer:
      "Event bubbling is when an event starts at the target element and 'bubbles up' to its ancestors, like a bubble rising in water. If you click a button inside a div, the click event happens on the button, then the div, then the body, and so on, unless you stop it.",
    syntax:
      "element.addEventListener('click', function(event) {\n  console.log('Bubbled up to:', event.currentTarget);\n});",
    example:
      "document.querySelector('button').addEventListener('click', function(e) {\n  console.log('Button clicked!');\n});\n// Parent div will also log if you click the button, due to bubbling.",
    realTimeExample:
      "Imagine a set of Russian dolls. If you tap the smallest doll, the tap is also felt by the bigger dolls that contain it. That’s bubbling: the event starts at the smallest element and moves up to the bigger ones.",
    codeExample:
      "<div id='parent'>\n  <button id='child'>Click me</button>\n</div>\n\n<script>\n  document.getElementById('parent').addEventListener('click', () => {\n    console.log('Parent clicked!');\n  });\n  document.getElementById('child').addEventListener('click', () => {\n    console.log('Child clicked!');\n  });\n  // Clicking the button logs both 'Child clicked!' and 'Parent clicked!' due to bubbling.\n</script>",
  },
  {
    id: 2,
    question: "What is event capturing?",
    answer:
      "Event capturing is the opposite of bubbling. The event starts at the top (like the window) and goes down to the target. You don’t see it often because most events use bubbling by default, but you can turn it on with a special option in addEventListener.",
    syntax:
      "element.addEventListener('click', function(event) {\n  console.log('Captured at:', event.currentTarget);\n}, true); // true enables capturing",
    example:
      "document.querySelector('div').addEventListener('click', function(e) {\n  console.log('Div captured!');\n}, true);",
    realTimeExample:
      "Imagine a net falling from the sky to catch a ball. The net starts at the top and moves down to the ball. That’s capturing: the event starts at the top element and moves down to the target.",
    codeExample:
      "<div id='parent'>\n  <button id='child'>Click me</button>\n</div>\n\n<script>\n  document.getElementById('parent').addEventListener('click', () => {\n    console.log('Parent captured!');\n  }, true);\n  document.getElementById('child').addEventListener('click', () => {\n    console.log('Child clicked!');\n  });\n  // Clicking the button logs 'Parent captured!' first, then 'Child clicked!' if capturing is enabled.\n</script>",
  },
  {
    id: 3,
    question: "How do you stop event propagation?",
    answer:
      "To stop an event from bubbling up or capturing down, use `event.stopPropagation()`. If you also want to stop other event listeners on the same element, use `event.stopImmediatePropagation()`. It’s like putting a lid on the bubble so it doesn’t rise further.",
    syntax:
      "element.addEventListener('click', function(event) {\n  event.stopPropagation();\n});",
    example:
      "document.querySelector('button').addEventListener('click', function(e) {\n  e.stopPropagation();\n  console.log('Button clicked, but parent won’t know!');\n});",
    realTimeExample:
      "Imagine you have a set of Russian dolls. If you put a lid on the smallest doll, tapping it won’t make the bigger dolls feel it. That’s stopping propagation: the event doesn’t move up or down.",
    codeExample:
      "<div id='parent'>\n  <button id='child'>Click me</button>\n</div>\n\n<script>\n  document.getElementById('parent').addEventListener('click', () => {\n    console.log('Parent clicked!');\n  });\n  document.getElementById('child').addEventListener('click', (e) => {\n    e.stopPropagation();\n    console.log('Child clicked!');\n  });\n  // Clicking the button logs only 'Child clicked!' because propagation is stopped.\n</script>",
  },
  {
    id: 4,
    question: "What is a promise?",
    answer:
      "A Promise is like a promise in real life. It says, ‘I will do this thing, and I’ll tell you if it worked or not.’ It can be in three states: waiting (pending), done (fulfilled), or failed (rejected). You use `.then()` to say what to do if it works, and `.catch()` if it fails.",
    syntax:
      "let promise = new Promise((resolve, reject) => {\n  if (success) resolve('Yay!');\n  else reject('Oops!');\n});\npromise.then(result => console.log(result))\n       .catch(error => console.log(error));",
    example:
      "let fetchData = new Promise((resolve, reject) => {\n  let success = true;\n  if (success) resolve('Data fetched!');\n  else reject('Error fetching data');\n});\nfetchData.then(data => console.log(data))\n         .catch(err => console.log(err));",
    realTimeExample:
      "Imagine ordering food online. The app promises to deliver your pizza. It will either call you when it’s at your door (fulfilled) or if there’s a problem (rejected). You don’t have to wait at the door; you can do other things while waiting.",
    codeExample:
      "let promise = new Promise((resolve, reject) => {\n  setTimeout(() => resolve('Done!'), 1000);\n});\npromise.then(result => console.log(result)); // 'Done!' after 1 second",
  },
  {
    id: 5,
    question: "What are the states of a promise?",
    answer:
      "A Promise can be in one of three states: **pending** (waiting for something to finish), **fulfilled** (the thing worked, and the Promise has a result), or **rejected** (the thing failed, and the Promise has an error). Once a Promise is fulfilled or rejected, it can’t change again.",
    syntax:
      "let promise = new Promise((resolve, reject) => {\n  // pending\n  if (success) resolve('Fulfilled!');\n  else reject('Rejected!');\n});",
    example:
      "let promise = new Promise((resolve, reject) => {\n  let success = Math.random() > 0.5;\n  if (success) resolve('Success!');\n  else reject('Failed!');\n});\npromise.then(result => console.log(result))\n       .catch(error => console.log(error));",
    realTimeExample:
      "Imagine waiting for a package. At first, it’s ‘pending’ (on the way). Then it’s either ‘fulfilled’ (delivered to your door) or ‘rejected’ (lost in transit). Once delivered or lost, it won’t change again.",
    codeExample:
      "let promise = new Promise((resolve, reject) => {\n  setTimeout(() => {\n    if (Math.random() > 0.5) resolve('Success!');\n    else reject('Failed!');\n  }, 1000);\n});\npromise.then(result => console.log(result))\n       .catch(error => console.log(error));",
  },
  {
    id: 6,
    question: "How do you create a promise?",
    answer:
      "To create a Promise, use the `new Promise()` constructor. Inside, you give it a function with two arguments: `resolve` (to say it worked) and `reject` (to say it failed). You do your work inside, and call `resolve` or `reject` when done.",
    syntax:
      "let promise = new Promise((resolve, reject) => {\n  // Do something\n  if (success) resolve(result);\n  else reject(error);\n});",
    example:
      "let fetchUser = new Promise((resolve, reject) => {\n  let user = { name: 'John', age: 25 };\n  if (user) resolve(user);\n  else reject('User not found');\n});\nfetchUser.then(user => console.log(user.name))\n         .catch(err => console.log(err));",
    realTimeExample:
      "Imagine promising to bake a cake. You start baking (pending). If the cake turns out well, you call your friend to say ‘come get it!’ (resolve). If it burns, you call to say ‘sorry, no cake’ (reject).",
    codeExample:
      "let promise = new Promise((resolve, reject) => {\n  let success = true;\n  setTimeout(() => {\n    if (success) resolve('Cake is ready!');\n    else reject('Cake burned!');\n  }, 2000);\n});\npromise.then(message => console.log(message))\n       .catch(error => console.log(error));",
  },
  {
    id: 7,
    question: "What is async/await?",
    answer:
      "async/await is a way to write Promises in a simpler, more readable way. You mark a function with `async`, and inside, you can `await` a Promise. It makes your code look like it runs step by step, even though it’s still waiting for things like Promises.",
    syntax:
      "async function myFunc() {\n  let result = await somePromise;\n  console.log(result);\n}",
    example:
      "async function fetchData() {\n  let response = await fetch('https://api.example.com/data');\n  let data = await response.json();\n  console.log(data);\n}\nfetchData();",
    realTimeExample:
      "Imagine ordering food at a restaurant. With async/await, you can say ‘wait for the pizza to arrive, then eat it, then wait for the bill, then pay’—all in a nice, easy-to-read order, without nesting callbacks.",
    codeExample:
      "async function getUser() {\n  let response = await fetch('https://api.example.com/user');\n  let user = await response.json();\n  console.log(user.name);\n}\ngetUser();",
  },
  {
    id: 8,
    question: "What is a closure?",
    answer:
      "A closure is a function that remembers where it was born. Even if you take it somewhere else, it can still see and use the things from its birthplace. It’s like a backpack: no matter where you go, you can still use what’s inside your backpack.",
    syntax:
      "function outer() {\n  let x = 10;\n  return function inner() {\n    console.log(x); // remembers x\n  };\n}\nlet innerFunc = outer();\ninnerFunc(); // logs 10",
    example:
      "function makeCounter() {\n  let count = 0;\n  return function() {\n    count++;\n    return count;\n  };\n}\nlet counter = makeCounter();\nconsole.log(counter()); // 1\nconsole.log(counter()); // 2",
    realTimeExample:
      "Imagine you have a secret note in your backpack. Even if you go to a different room, you can still read the note. That’s a closure: the inner function can still see the variables from its outer function, even after the outer function has finished running.",
    codeExample:
      "function greet(name) {\n  return function() {\n    console.log(`Hello, ${name}!`);\n  };\n}\nlet greetJohn = greet('John');\ngreetJohn(); // 'Hello, John!'",
  },
  {
    id: 9,
    question: "What is the difference between local and global scope?",
    answer:
      "Local scope is like a room: only things inside that room can see and use what’s inside. Global scope is like the whole house: everyone can see and use what’s there. Variables made inside a function are local; variables made outside are global.",
    syntax:
      "let globalVar = 'I am global';\nfunction myFunc() {\n  let localVar = 'I am local';\n  console.log(globalVar); // OK\n}\nconsole.log(localVar); // Error: localVar is not defined",
    example:
      "let name = 'John'; // global\nfunction sayHi() {\n  let greeting = 'Hello'; // local\n  console.log(greeting + ' ' + name);\n}\nsayHi();\nconsole.log(greeting); // Error",
    realTimeExample:
      "Imagine your house is the global scope. Your bedroom is a local scope. Things in your bedroom (like your diary) can’t be seen from the kitchen, but things in the kitchen (like the fridge) can be seen from anywhere in the house.",
    codeExample:
      "let global = 'I am everywhere';\nfunction test() {\n  let local = 'I am only here';\n  console.log(global); // OK\n}\ntest();\nconsole.log(local); // Error",
  },
  {
    id: 10,
    question: "What is lexical scoping?",
    answer:
      "Lexical scoping means that a function can see and use things from where it was born, not where it runs. It’s like a child remembering their hometown, even if they move away. The function looks for things in its birthplace first, then outside, then globally.",
    syntax:
      "function outer() {\n  let x = 10;\n  function inner() {\n    console.log(x); // can see x from outer\n  }\n  inner();\n}\nouter();",
    example:
      "let name = 'John';\nfunction greet() {\n  let greeting = 'Hello';\n  function sayHi() {\n    console.log(greeting + ' ' + name);\n  }\n  sayHi();\n}\ngreet();",
    realTimeExample:
      "Imagine you move to a new city, but you still remember your old friends and places from your hometown. That’s lexical scoping: a function remembers where it was made, even if it’s used somewhere else.",
    codeExample:
      "function outer() {\n  let secret = '123';\n  function inner() {\n    console.log(secret); // '123'\n  }\n  return inner;\n}\nlet innerFunc = outer();\ninnerFunc(); // still remembers 'secret'",
  },
  {
    id: 11,
    question: "What is the this keyword?",
    answer:
      "'this’ is like a pronoun. It means ‘this thing’ or ‘this object’. What ‘this’ refers to depends on how a function is called. If you call a function as a method of an object, ‘this’ is the object. If you call it alone, ‘this’ is the global object (like ‘window’ in browsers).",
    syntax:
      "let obj = {\n  name: 'John',\n  greet() {\n    console.log('Hello, ' + this.name);\n  }\n};\nobj.greet(); // 'Hello, John'",
    example:
      "let person = {\n  name: 'Alice',\n  sayName() {\n    console.log(this.name);\n  }\n};\nperson.sayName(); // 'Alice'",
    realTimeExample:
      "Imagine you’re in a group photo. If you say ‘this is me’, ‘this’ is you. If your friend says ‘this is me’, ‘this’ is your friend. In code, ‘this’ is the object that’s calling the function.",
    codeExample:
      "let car = {\n  brand: 'Toyota',\n  showBrand() {\n    console.log(this.brand);\n  }\n};\ncar.showBrand(); // 'Toyota'",
  },
  {
    id: 12,
    question: "How does 'this' behave in arrow functions?",
    answer:
      "Arrow functions don’t have their own ‘this’. They use ‘this’ from the place where they were born. It’s like a child always saying ‘my mom’s house’ instead of ‘my house’, even if they move out.",
    syntax:
      "let obj = {\n  name: 'John',\n  greet: () => {\n    console.log('Hello, ' + this.name); // this is not obj!\n  }\n};\nobj.greet(); // this is global/window",
    example:
      "let person = {\n  name: 'Alice',\n  greet: () => {\n    console.log(this.name); // undefined or global.name\n  }\n};\nperson.greet();",
    realTimeExample:
      "Imagine you have a pet that always says ‘my owner’s home’ instead of ‘my home’. Even if you take the pet to a new place, it still talks about your home. That’s how arrow functions treat ‘this’.",
    codeExample:
      "let obj = {\n  value: 42,\n  getValue: () => {\n    console.log(this.value); // undefined (or global.value)\n  }\n};\nobj.getValue();",
  },
  {
    id: 13,
    question: "What is prototype inheritance?",
    answer:
      "Prototype inheritance is like a family tree. Objects can inherit things (properties and methods) from their parent objects. If an object doesn’t have something, it looks up to its parent, and so on. It’s how JavaScript objects share and reuse code.",
    syntax:
      "let parent = { greet() { return 'Hello'; } };\nlet child = Object.create(parent);\nconsole.log(child.greet()); // 'Hello'",
    example:
      "let animal = { eat() { console.log('Eating...'); } };\nlet dog = Object.create(animal);\ndog.eat(); // 'Eating...'",
    realTimeExample:
      "Imagine your family recipes. If you don’t know how to make a dish, you ask your mom. If she doesn’t know, she asks her mom. That’s prototype inheritance: objects ask their parents for things they don’t have.",
    codeExample:
      "let vehicle = {\n  start() {\n    console.log('Engine started');\n  }\n};\nlet car = Object.create(vehicle);\ncar.start(); // 'Engine started'",
  },
  {
    id: 14,
    question: "What is the difference between call(), apply(), and bind()?",
    answer:
      "`call()` and `apply()` let you call a function with a specific ‘this’ and arguments. `call()` takes arguments one by one; `apply()` takes them as an array. `bind()` makes a new function with a fixed ‘this’ and arguments, but doesn’t call it right away.",
    syntax:
      "func.call(thisArg, arg1, arg2);\nfunc.apply(thisArg, [argsArray]);\nlet boundFunc = func.bind(thisArg, arg1, arg2);",
    example:
      "let person = { name: 'John' };\nfunction greet(greeting) {\n  console.log(greeting + ', ' + this.name);\n}\ngreet.call(person, 'Hello'); // 'Hello, John'\ngreet.apply(person, ['Hi']); // 'Hi, John'\nlet boundGreet = greet.bind(person, 'Hey');\nboundGreet(); // 'Hey, John'",
    realTimeExample:
      "Imagine you have a phone and want to call a friend. `call()` is like dialing their number and speaking. `apply()` is like sending a list of things to say. `bind()` is like saving their number with a preset message, so you can call them later with that message.",
    codeExample:
      "let user = { name: 'Alice' };\nfunction say(phrase) {\n  console.log(phrase + ', ' + this.name);\n}\nsay.call(user, 'Hello'); // 'Hello, Alice'\nsay.apply(user, ['Hi']); // 'Hi, Alice'\nlet boundSay = say.bind(user, 'Hey');\nboundSay(); // 'Hey, Alice'",
  },
  {
    id: 15,
    question: "What is the difference between an expression and a statement?",
    answer:
      "An expression is like a question that gives you an answer (a value). A statement is like a command that does something. Expressions can be part of statements, but not the other way around.",
    syntax:
      "// Expression: produces a value\n1 + 2\n// Statement: performs an action\nlet x = 1 + 2;",
    example:
      "// Expression\n3 * 4 // 12\n// Statement\nif (x > 0) { console.log('Positive'); }",
    realTimeExample:
      "Imagine you’re in a kitchen. ‘What’s 2 + 2?’ is an expression (answer: 4). ‘Put the flour in the bowl’ is a statement (action).",
    codeExample:
      "// Expression\nlet sum = 2 + 3; // 5\n\n// Statement\nif (sum > 0) {\n  console.log('Sum is positive');\n}",
  },
  {
    id: 16,
    question: "What is NaN compared to undefined?",
    answer:
      "`NaN` means ‘Not a Number’. It’s a special number that means something went wrong in math. `undefined` means a box (variable) exists but nothing is inside it. `NaN` is a number type; `undefined` is its own type.",
    syntax: "let notNumber = 'hello' / 2; // NaN\nlet notSet; // undefined",
    example:
      "console.log(typeof NaN); // 'number'\nconsole.log(typeof undefined); // 'undefined'",
    realTimeExample:
      "Imagine you have a calculator. If you try to add ‘apple’ and ‘orange’, the calculator says ‘NaN’ (not a number). If you forget to put any numbers in, it says ‘undefined’ (nothing there).",
    codeExample:
      "let a = 'apple' / 2;\nlet b;\nconsole.log(a); // NaN\nconsole.log(b); // undefined\nconsole.log(typeof a); // 'number'\nconsole.log(typeof b); // 'undefined'",
  },
  {
    id: 17,
    question: "What is the difference between null and undefined?",
    answer:
      "`null` means ‘nothing’ on purpose. You put ‘nothing’ in the box. `undefined` means the box exists but you didn’t put anything in it yet, or it doesn’t exist at all.",
    syntax: "let empty = null;\nlet notSet;",
    example:
      "let age = null; // intentionally empty\nlet name; // not set yet\nconsole.log(age === null); // true\nconsole.log(name === undefined); // true",
    realTimeExample:
      "null: an empty lunchbox because you chose not to bring lunch. undefined: forgetting to pack lunch at all.",
    codeExample:
      "let a = null;\nlet b;\nconsole.log(a === null); // true\nconsole.log(b === undefined); // true",
  },
  {
    id: 18,
    question: "How can you convert a string to a number?",
    answer:
      "You can turn a word (string) into a number using `Number()`, `parseInt()`, `parseFloat()`, or just putting a `+` before it. Each has its own rules for what happens if the word isn’t a number.",
    syntax: "Number('123');\nparseInt('123');\nparseFloat('123.45');\n+'123';",
    example:
      "let num1 = Number('123'); // 123\nlet num2 = parseInt('123.45'); // 123\nlet num3 = parseFloat('123.45'); // 123.45\nlet num4 = +'123'; // 123",
    realTimeExample:
      "Imagine you have a piece of paper with ‘123’ written on it. You can turn it into a real number using different tools: a magic wand (`Number`), scissors (`parseInt`), or a stamp (`+`).",
    codeExample:
      "let str = '123.45';\nlet num1 = Number(str); // 123.45\nlet num2 = parseInt(str); // 123\nlet num3 = +str; // 123.45",
  },
  {
    id: 19,
    question: "What is event delegation?",
    answer:
      "Event delegation is like having one security guard for a whole building. Instead of putting a click listener on every button, you put one on the parent. When a button is clicked, the event bubbles up, and the parent checks which button was clicked and acts accordingly.",
    syntax:
      "document.getElementById('parent').addEventListener('click', function(e) {\n  if (e.target.matches('button')) {\n    console.log('Button clicked:', e.target.id);\n  }\n});",
    example:
      "<div id='toolbar'>\n  <button id='btn1'>Button 1</button>\n  <button id='btn2'>Button 2</button>\n</div>\n\n<script>\n  document.getElementById('toolbar').addEventListener('click', function(e) {\n    if (e.target.tagName === 'BUTTON') {\n      console.log('Button ' + e.target.id + ' clicked');\n    }\n  });\n</script>",
    realTimeExample:
      "Imagine a school with many doors. Instead of a teacher at each door, there’s one at the main entrance. When a bell rings, the teacher checks which door it came from and acts. That’s event delegation: one listener for many elements.",
    codeExample:
      "<ul id='list'>\n  <li>Item 1</li>\n  <li>Item 2</li>\n  <li>Item 3</li>\n</ul>\n\n<script>\n  document.getElementById('list').addEventListener('click', function(e) {\n    if (e.target.tagName === 'LI') {\n      console.log('Clicked:', e.target.textContent);\n    }\n  });\n</script>",
  },
  {
    id: 20,
    question: "What is a template literal?",
    answer:
      "A template literal is a special way to write words (strings) in JavaScript. You use backticks (``) instead of quotes, and you can put boxes (variables) right inside using `${}. It makes it easy to mix words and boxes together.",
    syntax: "`Hello, ${name}!`",
    example:
      "let name = 'John';\nlet greeting = `Hello, ${name}!`; // 'Hello, John!'",
    realTimeExample:
      "Imagine writing a greeting card. Instead of writing ‘Dear [name]’, you can write ‘Dear ${name}’, and it fills in the name automatically.",
    codeExample:
      "let user = 'Alice';\nlet message = `Welcome back, ${user}!`;\nconsole.log(message); // 'Welcome back, Alice!'",
  },
  {
    id: 21,
    question: "What is destructuring assignment?",
    answer:
      "Destructuring is like unpacking a box. You can take things out of a list (array) or a special box (object) and put them into their own boxes (variables) all at once. It makes your code shorter and cleaner.",
    syntax:
      "let [a, b] = [1, 2];\nlet { name, age } = { name: 'John', age: 25 };",
    example:
      "let numbers = [1, 2, 3];\nlet [first, second] = numbers; // first = 1, second = 2\n\nlet person = { name: 'Alice', age: 30 };\nlet { name, age } = person; // name = 'Alice', age = 30",
    realTimeExample:
      "Imagine unpacking your school bag. You take out your notebook, pencil, and lunchbox all at once, instead of one by one.",
    codeExample:
      "let colors = ['red', 'green', 'blue'];\nlet [firstColor, secondColor] = colors;\n\nlet user = { name: 'John', age: 25 };\nlet { name, age } = user;",
  },
  {
    id: 22,
    question: "What are default parameters?",
    answer:
      "Default parameters are like backup plans for your function. If someone doesn’t give you something (an argument), you use the backup (default) instead. It’s like saying ‘if you don’t bring a pencil, I’ll give you one’.",
    syntax:
      "function greet(name = 'Guest') {\n  console.log(`Hello, ${name}!`);\n}",
    example:
      "function multiply(a, b = 2) {\n  return a * b;\n}\nconsole.log(multiply(3)); // 6 (3 * 2)",
    realTimeExample:
      "Imagine you’re hosting a party. If a guest doesn’t bring a gift, you have a default gift ready for them.",
    codeExample:
      "function createUser(name, role = 'user') {\n  return { name, role };\n}\nlet user = createUser('John');\nconsole.log(user.role); // 'user'",
  },
  {
    id: 23,
    question: "What is the spread operator?",
    answer:
      "The spread operator (`...`) is like spreading out all the things in a list or a special box. You can use it to copy, combine, or spread out things. It’s like emptying a bag of marbles onto the table.",
    syntax: "[...arr]\n{...obj}",
    example:
      "let arr1 = [1, 2, 3];\nlet arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]\n\nlet obj1 = { a: 1, b: 2 };\nlet obj2 = { ...obj1, c: 3 }; // { a: 1, b: 2, c: 3 }",
    realTimeExample:
      "Imagine you have a bag of red marbles and a bag of blue marbles. You can spread them all out on the table to see them together, or mix them into one big bag.",
    codeExample:
      "let oldArray = [1, 2, 3];\nlet newArray = [...oldArray, 4, 5];\n\nlet oldObj = { a: 1, b: 2 };\nlet newObj = { ...oldObj, c: 3 };",
  },
  {
    id: 24,
    question: "What is the rest parameter?",
    answer:
      "The rest parameter (`...`) lets you collect all the things people give to your function into one list (array). It’s like saying ‘put all the extra gifts in this bag’.",
    syntax:
      "function func(...args) {\n  console.log(args); // args is an array\n}",
    example:
      "function sum(...numbers) {\n  return numbers.reduce((a, b) => a + b);\n}\nconsole.log(sum(1, 2, 3)); // 6",
    realTimeExample:
      "Imagine you’re collecting gifts at a party. Instead of carrying each gift one by one, you put all the extra gifts in one big bag.",
    codeExample:
      "function logAll(...items) {\n  items.forEach(item => console.log(item));\n}\nlogAll(1, 2, 3); // logs 1, 2, 3",
  },
  {
    id: 25,
    question: "How do you create a class in JavaScript?",
    answer:
      "A class is like a blueprint for making special boxes (objects). You use the `class` keyword, and inside, you write what the boxes should look like and what they can do. You can make many boxes from the same blueprint.",
    syntax: "class MyClass {\n  constructor() { }\n  method() { }\n}",
    example:
      "class Person {\n  constructor(name) {\n    this.name = name;\n  }\n  greet() {\n    console.log(`Hello, ${this.name}!`);\n  }\n}\nlet person = new Person('John');\nperson.greet(); // 'Hello, John!'",
    realTimeExample:
      "Imagine a blueprint for a house. You can build many houses from the same plan, but each house can be painted a different color or have different furniture inside.",
    codeExample:
      "class Car {\n  constructor(model) {\n    this.model = model;\n  }\n  start() {\n    console.log(`${this.model} started!`);\n  }\n}\nlet myCar = new Car('Tesla');\nmyCar.start(); // 'Tesla started!'",
  },
  {
    id: 26,
    question: "What is a constructor?",
    answer:
      "A constructor is a special method in a class. It’s like the first step in a recipe. When you make a new box (object) from the class, the constructor runs and sets up the box with the things you give it.",
    syntax:
      "class MyClass {\n  constructor(param) {\n    this.property = param;\n  }\n}",
    example:
      "class Dog {\n  constructor(name) {\n    this.name = name;\n  }\n}\nlet myDog = new Dog('Buddy');\nconsole.log(myDog.name); // 'Buddy'",
    realTimeExample:
      "Imagine you’re building a toy car. The constructor is like the first step: you put in the wheels and the body. Every time you build a new car, you start with those steps.",
    codeExample:
      "class User {\n  constructor(name, email) {\n    this.name = name;\n    this.email = email;\n  }\n}\nlet user = new User('Alice', 'alice@example.com');",
  },
  {
    id: 27,
    question: "What is inheritance in classes?",
    answer:
      "Inheritance lets one class (blueprint) get things from another class. It’s like getting your mom’s recipe book and adding your own recipes. The child class gets all the things from the parent, and can add its own.",
    syntax: "class Child extends Parent {\n  // new things\n}",
    example:
      "class Animal {\n  eat() {\n    console.log('Eating...');\n  }\n}\nclass Dog extends Animal {\n  bark() {\n    console.log('Bark!');\n  }\n}\nlet myDog = new Dog();\nmyDog.eat(); // 'Eating...'\nmyDog.bark(); // 'Bark!'",
    realTimeExample:
      "Imagine your family recipes. Your mom has a recipe book, and you get a copy. You can add your own recipes to your copy, but you still have all of hers too.",
    codeExample:
      "class Vehicle {\n  start() {\n    console.log('Engine started');\n  }\n}\nclass Car extends Vehicle {\n  honk() {\n    console.log('Beep!');\n  }\n}\nlet myCar = new Car();\nmyCar.start(); // 'Engine started'\nmyCar.honk(); // 'Beep!'",
  },
  {
    id: 28,
    question: "What is a module in JavaScript?",
    answer:
      "A module is like a separate page in your notebook. You can write code on one page and use it on another page. It helps keep your code organized and easy to find. You use `import` and `export` to share code between pages.",
    syntax:
      "// math.js\nexport const add = (a, b) => a + b;\n\n// main.js\nimport { add } from './math.js';",
    example:
      "// utils.js\nexport function greet(name) {\n  return `Hello, ${name}!`;\n}\n\n// app.js\nimport { greet } from './utils.js';\nconsole.log(greet('John')); // 'Hello, John!'",
    realTimeExample:
      "Imagine you have a notebook with different sections: one for math, one for science. You can write in one section and use what you wrote in another section. Modules are like those sections.",
    codeExample:
      "// math.js\nexport const multiply = (a, b) => a * b;\n\n// app.js\nimport { multiply } from './math.js';\nconsole.log(multiply(2, 3)); // 6",
  },
  {
    id: 29,
    question:
      "What is the difference between synchronous and asynchronous code?",
    answer:
      "Synchronous code runs step by step, like following a recipe. Asynchronous code can do other things while waiting for slow things (like loading data). It’s like ordering food and doing other things while waiting for it to arrive.",
    syntax:
      "// Synchronous\nconsole.log('Start');\nconsole.log('Middle');\nconsole.log('End');\n\n// Asynchronous\nconsole.log('Start');\nsetTimeout(() => console.log('Middle'), 1000);\nconsole.log('End');",
    example:
      "// Synchronous\nfunction syncTask() {\n  console.log('Task 1');\n  console.log('Task 2');\n}\n\n// Asynchronous\nfunction asyncTask() {\n  console.log('Task 1');\n  setTimeout(() => console.log('Task 2'), 1000);\n}\nsyncTask(); // 'Task 1', 'Task 2'\nasyncTask(); // 'Task 1', then 'Task 2' after 1 second",
    realTimeExample:
      "Imagine you’re cooking. Synchronous is like cooking one thing at a time: boil water, then add pasta, then drain. Asynchronous is like boiling water, then while waiting, you chop vegetables, then when the water boils, you add pasta.",
    codeExample:
      "// Synchronous\nconsole.log('Start');\nfor (let i = 0; i < 1e6; i++) {}\nconsole.log('End');\n\n// Asynchronous\nconsole.log('Start');\nsetTimeout(() => console.log('End'), 0);\nconsole.log('Middle');",
  },
  {
    id: 30,
    question: "How do you handle errors in JavaScript?",
    answer:
      "You can handle errors using `try...catch` blocks. You put the code that might fail in `try`, and if it fails, `catch` runs instead. For Promises, you use `.catch()` to handle errors.",
    syntax:
      "try {\n  // code that might fail\n} catch (error) {\n  // what to do if it fails\n}\n\npromise.then(result => {})\n       .catch(error => {});",
    example:
      "try {\n  let result = riskyOperation();\n  console.log(result);\n} catch (error) {\n  console.log('Error:', error.message);\n}\n\nfetch('url').then(res => res.json())\n           .catch(err => console.log('Fetch error:', err));",
    realTimeExample:
      "Imagine you’re trying to open a jar. You try (turn the lid), but if it’s too tight (error), you catch it (ask for help). With Promises, it’s like ordering food: if the delivery fails, you get a call to say what went wrong.",
    codeExample:
      "try {\n  let data = JSON.parse('not json');\n} catch (e) {\n  console.log('Invalid JSON');\n}\n\nPromise.reject('Oops').catch(e => console.log(e));",
  },
  {
    id: 31,
    question: "What is the use of 'use strict'?",
    answer:
      "'use strict' makes JavaScript stricter and safer. It catches more mistakes and doesn’t let you do things that might cause problems, like using variables without declaring them. It’s like a strict teacher who makes sure you follow all the rules.",
    syntax: "'use strict';\n// code here",
    example:
      "'use strict';\nx = 5; // Error: x is not defined\nlet y = 10; // OK",
    realTimeExample:
      "Imagine you’re in a strict classroom. If you try to cheat or break the rules, the teacher catches you right away. ‘use strict’ does the same for your code.",
    codeExample:
      "'use strict';\nfunction test() {\n  undeclaredVar = 10; // Error!\n}\ntest();",
  },
  {
    id: 32,
    question:
      "What is the difference between function declaration and function expression?",
    answer:
      "A function declaration is like a recipe you can use before you write it down. A function expression is like a recipe you have to write down first. Declarations are hoisted (moved to the top); expressions are not.",
    syntax:
      "// Declaration\nfunction sayHi() {}\n\n// Expression\nconst sayHi = function() {};",
    example:
      "sayHi(); // OK\nfunction sayHi() {\n  console.log('Hi!');\n}\n\nsayHello(); // Error\nconst sayHello = function() {\n  console.log('Hello!');\n};",
    realTimeExample:
      "Imagine you can call a friend before you know their number (declaration), but for another friend, you have to save their number first (expression).",
    codeExample:
      "// Declaration\nsayBye();\nfunction sayBye() {\n  console.log('Bye!');\n}\n\n// Expression\nsayHello(); // Error\nconst sayHello = function() {\n  console.log('Hello!');\n};",
  },
  {
    id: 33,
    question: "What is hoisting?",
    answer:
      "Hoisting is like moving all the boxes (variables) and recipes (functions) to the top of the room before the code runs. So you can use them before they’re made, but they might be empty. Only declarations are hoisted, not initializations.",
    syntax:
      "console.log(x); // undefined\nvar x = 5;\n\nsayHi(); // 'Hi!'\nfunction sayHi() {\n  console.log('Hi!');\n}",
    example:
      "console.log(y); // undefined\nvar y = 10;\n\nsayHello(); // Error\nconst sayHello = function() {\n  console.log('Hello!');\n};",
    realTimeExample:
      "Imagine a teacher calling your name before you raise your hand. You’re already in the room (hoisted), even if you haven’t answered yet (initialized).",
    codeExample:
      "console.log(a); // undefined\nvar a = 1;\n\nb(); // 'Hello'\nfunction b() {\n  console.log('Hello');\n}",
  },
  {
    id: 34,
    question: "What is an Immediately Invoked Function Expression (IIFE)?",
    answer:
      "An IIFE is a function that runs right after it’s made. It’s like writing a note and reading it immediately. You wrap the function in parentheses and add `()` at the end to call it. It’s often used to keep things private.",
    syntax: "(function() {\n  // code here\n})();",
    example:
      "(function() {\n  let secret = '123';\n  console.log(secret);\n})();\n// console.log(secret); // Error: secret is not defined",
    realTimeExample:
      "Imagine you write a secret message on a piece of paper and read it right away, then tear it up. No one else can see the message.",
    codeExample:
      "(function() {\n  let count = 0;\n  console.log(count++);\n})();\n// console.log(count); // Error",
  },
  {
    id: 35,
    question:
      "What is the difference between null, undefined, and empty string?",
    answer:
      "`null` means ‘nothing’ on purpose. `undefined` means a box (variable) exists but nothing is inside it, or it doesn’t exist at all. An empty string (`''`) is a string with nothing in it—it’s still a string, just empty.",
    syntax: "let empty = null;\nlet notSet;\nlet emptyString = '';",
    example:
      "let a = null;\nlet b;\nlet c = '';\nconsole.log(a === null); // true\nconsole.log(b === undefined); // true\nconsole.log(c === ''); // true",
    realTimeExample:
      "Imagine three lunchboxes: one is empty on purpose (`null`), one is missing (`undefined`), and one has an empty sandwich inside (`''`).",
    codeExample:
      "let x = null;\nlet y;\nlet z = '';\nconsole.log(x); // null\nconsole.log(y); // undefined\nconsole.log(z); // ''",
  },
  {
    id: 36,
    question: "What is the event loop?",
    answer:
      "The event loop is like a manager in JavaScript. It helps your code do many things at once, like waiting for clicks or data. It makes sure everything runs smoothly and in the right order, even if some things take longer than others.",
    syntax: "N/A (conceptual)",
    example:
      "console.log('Start');\nsetTimeout(() => console.log('Timeout'), 0);\nconsole.log('End');\n// Output: 'Start', 'End', 'Timeout'",
    realTimeExample:
      "Imagine a teacher managing a classroom. She helps students one by one, even if some need more time. The event loop is like that teacher, making sure everything gets done in order.",
    codeExample:
      "console.log('First');\nsetTimeout(() => console.log('Second'), 0);\nPromise.resolve().then(() => console.log('Third'));\nconsole.log('Fourth');\n// Output order: First, Fourth, Third, Second",
  },
  {
    id: 37,
    question: "What is the call stack?",
    answer:
      "The call stack is like a stack of plates. When a function runs, it’s put on the stack. When it’s done, it’s taken off. The last function put on is the first one taken off. If the stack gets too big, you get an error (stack overflow).",
    syntax: "N/A (conceptual)",
    example:
      "function first() {\n  second();\n}\nfunction second() {\n  third();\n}\nfunction third() {\n  console.log('Done!');\n}\nfirst();",
    realTimeExample:
      "Imagine a stack of plates. You put a plate on top, then another, then another. When you take them off, you start with the top one. That’s the call stack: functions are added and removed in order.",
    codeExample:
      "function a() {\n  b();\n}\nfunction b() {\n  c();\n}\nfunction c() {\n  console.log('Stack trace:');\n  console.trace();\n}\na();",
  },
  {
    id: 38,
    question: "What is the callback queue?",
    answer:
      "The callback queue is like a waiting line for things that take time, like clicks or data loading. When the main code is done, the event loop checks the queue and runs the next thing in line. It’s how JavaScript handles things that happen later.",
    syntax: "N/A (conceptual)",
    example:
      "console.log('Start');\nsetTimeout(() => console.log('Timeout'), 0);\nconsole.log('End');\n// Output: 'Start', 'End', 'Timeout'",
    realTimeExample:
      "Imagine you’re at a bank. The teller helps people one by one. If someone needs to wait for something (like a manager), they go to a waiting area (callback queue) and are helped when it’s their turn.",
    codeExample:
      "console.log('First');\nsetTimeout(() => console.log('Second'), 0);\nconsole.log('Third');\n// Output: First, Third, Second",
  },
  {
    id: 39,
    question: "What is a microtask?",
    answer:
      "A microtask is like a VIP in the waiting line. It gets to go before the regular callbacks, even if it came after. Promises use microtasks, so their callbacks run before things like `setTimeout`.",
    syntax: "N/A (conceptual)",
    example:
      "console.log('Start');\nsetTimeout(() => console.log('Timeout'), 0);\nPromise.resolve().then(() => console.log('Promise'));\nconsole.log('End');\n// Output: 'Start', 'End', 'Promise', 'Timeout'",
    realTimeExample:
      "Imagine a VIP line at a concert. Even if you arrive after others, you get in before the regular line. That’s a microtask: it runs before the regular callback queue.",
    codeExample:
      "console.log('Start');\nPromise.resolve().then(() => console.log('Microtask'));\nsetTimeout(() => console.log('Macrotask'), 0);\nconsole.log('End');\n// Output: Start, End, Microtask, Macrotask",
  },
  {
    id: 40,
    question: "What is the difference between setTimeout and setInterval?",
    answer:
      "`setTimeout` runs a function once after a delay. `setInterval` runs a function over and over, every so often. It’s like setting a one-time alarm (`setTimeout`) versus a repeating alarm (`setInterval`).",
    syntax: "setTimeout(() => {}, delay);\nsetInterval(() => {}, interval);",
    example:
      "// Runs once after 1 second\nsetTimeout(() => console.log('Once!'), 1000);\n\n// Runs every second\nlet interval = setInterval(() => console.log('Every second!'), 1000);\n// To stop: clearInterval(interval);",
    realTimeExample:
      "Imagine setting an alarm. `setTimeout` is like setting your alarm for 7 AM tomorrow. `setInterval` is like setting your alarm to go off every morning at 7 AM.",
    codeExample:
      "setTimeout(() => console.log('Tick'), 1000);\nlet timer = setInterval(() => console.log('Tock'), 1000);\n// clearInterval(timer); // to stop",
  },
  {
    id: 41,
    question: "What is debouncing?",
    answer:
      "Debouncing is like waiting for someone to stop knocking before you open the door. It makes sure a function only runs after a certain amount of time has passed without it being called again. It’s useful for things like search boxes or window resizing.",
    syntax:
      "let debounce = (func, delay) => {\n  let timeout;\n  return (...args) => {\n    clearTimeout(timeout);\n    timeout = setTimeout(() => func(...args), delay);\n  };\n};",
    example:
      "let debouncedSearch = debounce(search, 300);\ninput.addEventListener('keyup', debouncedSearch);",
    realTimeExample:
      "Imagine you’re typing in a search box. Instead of searching on every letter, you wait until the user stops typing for half a second, then search. That’s debouncing.",
    codeExample:
      "function debounce(func, delay) {\n  let timeout;\n  return function(...args) {\n    clearTimeout(timeout);\n    timeout = setTimeout(() => func.apply(this, args), delay);\n  };\n}\nlet debouncedFn = debounce(() => console.log('Debounced!'), 300);\ndebouncedFn(); // runs after 300ms if not called again",
  },
  {
    id: 42,
    question: "What is throttling?",
    answer:
      "Throttling is like a bouncer at a club: only one person can enter every so often, no matter how many are in line. It makes sure a function only runs once every certain amount of time, even if it’s called many times. It’s useful for things like scrolling or resizing.",
    syntax:
      "let throttle = (func, limit) => {\n  let lastFunc;\n  let lastRan;\n  return (...args) => {\n    if (!lastRan) {\n      func(...args);\n      lastRan = Date.now();\n    } else {\n      clearTimeout(lastFunc);\n      lastFunc = setTimeout(() => {\n        if ((Date.now() - lastRan) >= limit) {\n          func(...args);\n          lastRan = Date.now();\n        }\n      }, limit - (Date.now() - lastRan));\n    }\n  };\n};",
    example:
      "let throttledScroll = throttle(handleScroll, 1000);\nwindow.addEventListener('scroll', throttledScroll);",
    realTimeExample:
      "Imagine you’re scrolling on a webpage. Instead of running a function every time you scroll a tiny bit, you only run it once per second. That’s throttling.",
    codeExample:
      "function throttle(func, limit) {\n  let lastFunc;\n  let lastRan;\n  return function(...args) {\n    if (!lastRan) {\n      func.apply(this, args);\n      lastRan = Date.now();\n    } else {\n      clearTimeout(lastFunc);\n      lastFunc = setTimeout(() => {\n        if ((Date.now() - lastRan) >= limit) {\n          func.apply(this, args);\n          lastRan = Date.now();\n        }\n      }, limit - (Date.now() - lastRan));\n    }\n  };\n}\nlet throttledFn = throttle(() => console.log('Throttled!'), 1000);\nthrottledFn(); // runs once per second, no matter how many times called",
  },
  {
    id: 43,
    question: "What is the fetch API?",
    answer:
      "The fetch API is a modern way to get data from the internet. It returns a Promise, so you can use `.then()` or `async/await` to work with the data. It’s like ordering food online: you ask for data, and it promises to bring it to you.",
    syntax:
      "fetch('url')\n  .then(response => response.json())\n  .then(data => console.log(data))\n  .catch(error => console.log(error));",
    example:
      "fetch('https://api.example.com/data')\n  .then(response => response.json())\n  .then(data => console.log(data))\n  .catch(error => console.log('Error:', error));",
    realTimeExample:
      "Imagine you’re ordering pizza online. You send your order (fetch), the restaurant promises to make it (Promise), and then they deliver it (data) or tell you if something went wrong (error).",
    codeExample:
      "async function getData() {\n  try {\n    let response = await fetch('https://api.example.com/data');\n    let data = await response.json();\n    console.log(data);\n  } catch (error) {\n    console.log('Error:', error);\n  }\n}\ngetData();",
  },
  {
    id: 44,
    question: "How do you make a GET request with fetch?",
    answer:
      "To make a GET request with fetch, you just give it the URL. It returns a Promise with the response. You can then turn the response into JSON or text, and use the data.",
    syntax:
      "fetch('url')\n  .then(response => response.json())\n  .then(data => console.log(data))\n  .catch(error => console.log(error));",
    example:
      "fetch('https://api.example.com/users')\n  .then(response => response.json())\n  .then(users => console.log(users))\n  .catch(error => console.log('Error:', error));",
    realTimeExample:
      "Imagine you’re asking a librarian for a book. You tell them the title (URL), they go get it (fetch), and bring it back to you (response). Then you open the book (json) and read it (data).",
    codeExample:
      "fetch('https://jsonplaceholder.typicode.com/posts/1')\n  .then(response => response.json())\n  .then(post => console.log(post.title))\n  .catch(error => console.log('Error:', error));",
  },
  {
    id: 45,
    question: "What is the difference between fetch and XMLHttpRequest?",
    answer:
      "`fetch` is the modern way to get data from the internet. It uses Promises and is simpler. `XMLHttpRequest` is the old way. It uses callbacks and is more complicated. `fetch` is like ordering food with an app; `XMLHttpRequest` is like calling the restaurant on the phone.",
    syntax:
      "// fetch\nfetch('url').then(response => response.json());\n\n// XMLHttpRequest\nlet xhr = new XMLHttpRequest();\nxhr.open('GET', 'url');\nxhr.onload = function() {\n  console.log(JSON.parse(xhr.response));\n};\nxhr.send();",
    example:
      "// fetch\nfetch('https://api.example.com/data')\n  .then(response => response.json())\n  .then(data => console.log(data));\n\n// XMLHttpRequest\nlet xhr = new XMLHttpRequest();\nxhr.open('GET', 'https://api.example.com/data');\nxhr.onload = function() {\n  console.log(JSON.parse(xhr.response));\n};\nxhr.send();",
    realTimeExample:
      "Imagine you want to order pizza. With `fetch`, you use an app: tap, tap, done. With `XMLHttpRequest`, you call the restaurant, talk to the person, give your order, wait for confirmation, etc. `fetch` is much simpler.",
    codeExample:
      "// fetch\nfetch('https://api.example.com/data')\n  .then(res => res.json())\n  .then(data => console.log(data))\n  .catch(err => console.log(err));\n\n// XMLHttpRequest\nlet xhr = new XMLHttpRequest();\nxhr.open('GET', 'https://api.example.com/data');\nxhr.onload = () => console.log(JSON.parse(xhr.response));\nxhr.onerror = () => console.log('Error');\nxhr.send();",
  },
  {
    id: 46,
    question: "What is JSON?",
    answer:
      "JSON is like a special way to write down data so it’s easy to send or save. It looks like a JavaScript object or list, but it’s written as a string. You can turn it into real data with `JSON.parse()`, and turn data into JSON with `JSON.stringify()`.",
    syntax:
      "let obj = { name: 'John', age: 25 };\nlet json = JSON.stringify(obj);\nlet data = JSON.parse(json);",
    example:
      "let person = { name: 'Alice', age: 30 };\nlet jsonString = JSON.stringify(person);\nlet personAgain = JSON.parse(jsonString);\nconsole.log(personAgain.name); // 'Alice'",
    realTimeExample:
      "Imagine you’re writing a letter. You turn your thoughts (data) into words (JSON string) so you can send them. When you get a letter, you turn the words back into thoughts (data).",
    codeExample:
      "let user = { name: 'John', age: 25 };\nlet json = JSON.stringify(user);\nlet parsed = JSON.parse(json);\nconsole.log(parsed.name); // 'John'",
  },
  {
    id: 47,
    question: "How do you parse JSON?",
    answer:
      "To turn a JSON string back into real data (like an object or list), you use `JSON.parse()`. It reads the string and makes the real thing, so you can use it in your code.",
    syntax: "let data = JSON.parse(jsonString);",
    example:
      'let jsonString = \'{"name":"John","age":25}\';\nlet person = JSON.parse(jsonString);\nconsole.log(person.name); // \'John\'',
    realTimeExample:
      "Imagine you get a letter in the mail. You open it and read the words (JSON string), then you understand the message (data). `JSON.parse()` is like reading the letter.",
    codeExample:
      'let json = \'{"name":"Alice","age":30}\';\nlet data = JSON.parse(json);\nconsole.log(data.age); // 30',
  },
  {
    id: 48,
    question: "How do you stringify JSON?",
    answer:
      "To turn real data (like an object or list) into a JSON string, you use `JSON.stringify()`. It writes down the data as text, so you can send or save it.",
    syntax: "let jsonString = JSON.stringify(data);",
    example:
      'let person = { name: \'Alice\', age: 30 };\nlet jsonString = JSON.stringify(person);\nconsole.log(jsonString); // \'{"name":"Alice","age":30}\'',
    realTimeExample:
      "Imagine you’re writing a letter. You turn your thoughts (data) into words (JSON string) on paper, so you can send it to someone else.",
    codeExample:
      'let user = { name: \'John\', age: 25 };\nlet json = JSON.stringify(user);\nconsole.log(json); // \'{"name":"John","age":25}\'',
  },
  {
    id: 49,
    question: "What is localStorage?",
    answer:
      "localStorage is like a magic notebook in your browser. You can write things in it, and they stay there even after you close the page or the browser. You can save words, numbers, or even lists. It’s great for remembering things like user settings or login info.",
    syntax:
      "localStorage.setItem('key', 'value');\nlet value = localStorage.getItem('key');",
    example:
      "localStorage.setItem('username', 'JohnDoe');\nlet username = localStorage.getItem('username');\nconsole.log(username); // 'JohnDoe'",
    realTimeExample:
      "Imagine you have a notebook where you write down important things. Even if you close the notebook, the next time you open it, everything is still there. That’s localStorage: it remembers things between visits.",
    codeExample:
      "localStorage.setItem('theme', 'dark');\nlet theme = localStorage.getItem('theme');\nconsole.log(theme); // 'dark'",
  },
  {
    id: 50,
    question: "What is sessionStorage?",
    answer:
      "sessionStorage is like a whiteboard in your browser. You can write things on it, but when you close the tab, everything is erased. It’s like localStorage, but only for one session (tab).",
    syntax:
      "sessionStorage.setItem('key', 'value');\nlet value = sessionStorage.getItem('key');",
    example:
      "sessionStorage.setItem('tempData', '123');\nlet data = sessionStorage.getItem('tempData');\nconsole.log(data); // '123'",
    realTimeExample:
      "Imagine you’re writing notes on a whiteboard during a meeting. When the meeting is over and you leave the room, the notes are erased. That’s sessionStorage: it’s there while you’re using the tab, but gone when you close it.",
    codeExample:
      "sessionStorage.setItem('cart', '[1, 2, 3]');\nlet cart = sessionStorage.getItem('cart');\nconsole.log(cart); // '[1, 2, 3]'",
  },
  {
    id: 51,
    question: "What is a cookie?",
    answer:
      "A cookie is like a small note your browser saves. It can remember things like your login info or preferences. Cookies are sent with every request to the website, so the website knows who you are. You can set, read, and delete cookies in JavaScript.",
    syntax:
      "document.cookie = 'name=value; expires=date; path=path';\nlet cookies = document.cookie;",
    example:
      "document.cookie = 'username=JohnDoe; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/';\nlet allCookies = document.cookie;\nconsole.log(allCookies);",
    realTimeExample:
      "Imagine you get a name tag at a party. Every time you talk to someone, they see your name tag and know who you are. Cookies are like name tags for websites: they help the website remember you.",
    codeExample:
      "document.cookie = 'theme=dark; max-age=3600'; // expires in 1 hour\nlet theme = document.cookie.split(';').find(c => c.trim().startsWith('theme='))?.split('=')[1];\nconsole.log(theme); // 'dark'",
  },
  {
    id: 52,
    question: "How do you set a cookie?",
    answer:
      "To set a cookie, you use `document.cookie`. You give it a name, a value, and options like when it expires and where it works. It’s like writing a note and putting it in a jar with a label.",
    syntax: "document.cookie = 'name=value; expires=date; path=path';",
    example:
      "document.cookie = 'username=JohnDoe; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/';",
    realTimeExample:
      "Imagine you’re writing a note with your name and putting it in a jar labeled ‘username’. You can also write when it expires and where it works.",
    codeExample:
      "document.cookie = 'preferredLanguage=en; max-age=86400'; // expires in 1 day\nconsole.log(document.cookie);",
  },
  {
    id: 53,
    question: "What is CORS?",
    answer:
      "CORS (Cross-Origin Resource Sharing) is like a security guard at a party. It decides who can come in and who can’t. If a website tries to get data from another website, the browser checks CORS rules. If the rules allow it, the data is shared; if not, the browser blocks it.",
    syntax: "N/A (conceptual, handled by server headers)",
    example:
      "fetch('https://other-site.com/data')\n  .then(response => response.json())\n  .catch(error => console.log('CORS error:', error));",
    realTimeExample:
      "Imagine you’re at a party and want to get a drink from the neighbor’s house. The neighbor’s security guard (CORS) checks if you’re allowed. If yes, you get the drink; if no, you’re stopped at the door.",
    codeExample:
      "// This will fail unless the server allows CORS\nfetch('https://api.other-site.com/data')\n  .then(res => res.json())\n  .catch(err => console.log('Blocked by CORS:', err));",
  },
  {
    id: 54,
    question: "What is the same-origin policy?",
    answer:
      "The same-origin policy is like a rule that says you can only talk to people in your own house. A webpage can only get data from the same website (same origin) unless the other website says it’s okay (CORS). It’s a security rule to keep things safe.",
    syntax: "N/A (browser security policy)",
    example:
      "// This works if the API is on the same origin\nfetch('/api/data')\n  .then(response => response.json())\n  .then(data => console.log(data));\n\n// This may be blocked if not same origin\nfetch('https://other-site.com/api/data')\n  .catch(error => console.log('Blocked by same-origin policy:', error));",
    realTimeExample:
      "Imagine you’re in your house and can talk to anyone inside. But if you try to talk to someone in another house, the door is locked unless they invite you in. That’s the same-origin policy: you can only get data from your own website unless the other website allows it.",
    codeExample:
      "// Same origin: OK\nfetch('/api/data')\n  .then(res => res.json())\n  .then(data => console.log(data))\n  .catch(err => console.log(err));\n\n// Cross-origin: may be blocked\nfetch('https://other-site.com/api/data')\n  .catch(err => console.log('Blocked:', err));",
  },
  {
    id: 55,
    question: "What is a service worker?",
    answer:
      "A service worker is like a butler for your webpage. It runs in the background, even when the page is closed. It can do things like cache files so your page works offline, or show notifications. It’s a powerful tool for making web apps work faster and offline.",
    syntax:
      "// Register a service worker\nif ('serviceWorker' in navigator) {\n  navigator.serviceWorker.register('/sw.js');\n}",
    example:
      "// sw.js\nself.addEventListener('install', event => {\n  event.waitUntil(\n    caches.open('v1').then(cache => {\n      return cache.addAll([\n        '/',\n        '/index.html',\n        '/styles.css'\n      ]);\n    })\n  );\n});",
    realTimeExample:
      "Imagine you have a butler who remembers your favorite drinks and snacks. Even if you’re not home, the butler can prepare things for when you return. That’s a service worker: it works in the background to make your web app ready and fast.",
    codeExample:
      "// Register the service worker\nif ('serviceWorker' in navigator) {\n  window.addEventListener('load', () => {\n    navigator.serviceWorker.register('/sw.js')\n      .then(registration => console.log('SW registered:', registration.scope))\n      .catch(err => console.log('SW registration failed:', err));\n  });\n}",
  },
  {
    id: 56,
    question: "What is the Web Worker API?",
    answer:
      "The Web Worker API lets you run code in the background, so your main webpage doesn’t get slow. It’s like having a helper who does heavy work while you keep doing other things. Workers can’t change the webpage directly, but they can send messages back and forth.",
    syntax:
      "// main.js\nlet worker = new Worker('worker.js');\nworker.postMessage('Hello');\nworker.onmessage = function(e) {\n  console.log('Message from worker:', e.data);\n};\n\n// worker.js\nself.onmessage = function(e) {\n  self.postMessage('Hello back!');\n};",
    example:
      "// main.js\nlet worker = new Worker('worker.js');\nworker.postMessage({ cmd: 'calculate', data: [1, 2, 3] });\nworker.onmessage = function(e) {\n  console.log('Result:', e.data);\n};\n\n// worker.js\nself.onmessage = function(e) {\n  let sum = e.data.data.reduce((a, b) => a + b, 0);\n  self.postMessage(sum);\n};",
    realTimeExample:
      "Imagine you’re cooking and have a helper in the kitchen. You ask the helper to chop vegetables (heavy work), while you keep stirring the pot. The helper can’t serve the food, but can tell you when the veggies are ready. That’s a Web Worker: it does work in the background and sends you the result.",
    codeExample:
      "// main.js\nlet worker = new Worker('worker.js');\nworker.postMessage({ numbers: [1, 2, 3, 4] });\nworker.onmessage = function(e) {\n  console.log('Sum:', e.data); // 10\n};\n\n// worker.js\nself.onmessage = function(e) {\n  let sum = e.data.numbers.reduce((a, b) => a + b, 0);\n  self.postMessage(sum);\n};",
  },
  {
    id: 57,
    question: "What is the Geolocation API?",
    answer:
      "The Geolocation API lets your webpage ask the user for their location (like GPS). If the user says yes, you can get their latitude and longitude. It’s like asking someone ‘where are you?’ and getting their address.",
    syntax:
      "navigator.geolocation.getCurrentPosition(\n  position => {\n    console.log(position.coords.latitude, position.coords.longitude);\n  },\n  error => {\n    console.log('Error:', error.message);\n  }\n);",
    example:
      "if (navigator.geolocation) {\n  navigator.geolocation.getCurrentPosition(\n    position => {\n      console.log('Latitude:', position.coords.latitude);\n      console.log('Longitude:', position.coords.longitude);\n    },\n    error => {\n      console.log('Error:', error.message);\n    }\n  );\n} else {\n  console.log('Geolocation not supported');\n}",
    realTimeExample:
      "Imagine you’re using a maps app. The app asks ‘Can we see your location?’ If you say yes, it shows you on the map. That’s the Geolocation API: it asks for and uses your location.",
    codeExample:
      "if (navigator.geolocation) {\n  navigator.geolocation.getCurrentPosition(\n    (position) => {\n      console.log(`Lat: ${position.coords.latitude}, Long: ${position.coords.longitude}`);\n    },\n    (error) => {\n      console.log(`Error: ${error.message}`);\n    }\n  );\n} else {\n  console.log('Geolocation not available');\n}",
  },
  {
    id: 58,
    question: "What is the Canvas API?",
    answer:
      "The Canvas API lets you draw pictures, shapes, and animations on a webpage. It’s like having a digital canvas and paintbrush. You can draw lines, shapes, text, and even make games or animations.",
    syntax:
      "let canvas = document.getElementById('myCanvas');\nlet ctx = canvas.getContext('2d');\nctx.fillStyle = 'red';\nctx.fillRect(10, 10, 50, 50);",
    example:
      "<canvas id='myCanvas' width='200' height='100'></canvas>\n<script>\n  let canvas = document.getElementById('myCanvas');\n  let ctx = canvas.getContext('2d');\n  ctx.fillStyle = 'blue';\n  ctx.fillRect(10, 10, 100, 50);\n</script>",
    realTimeExample:
      "Imagine you have a blank sheet of paper and colored pencils. You can draw anything you want. The Canvas API is like that, but on a webpage: you can draw shapes, write text, and make animations.",
    codeExample:
      "<canvas id='drawing' width='200' height='200'></canvas>\n<script>\n  let canvas = document.getElementById('drawing');\n  let ctx = canvas.getContext('2d');\n  ctx.fillStyle = 'green';\n  ctx.fillRect(50, 50, 100, 100);\n  ctx.strokeStyle = 'black';\n  ctx.strokeRect(50, 50, 100, 100);\n</script>",
  },
  {
    id: 59,
    question: "What is the WebSocket API?",
    answer:
      "The WebSocket API lets your webpage talk to a server in real time, like a phone call. Unlike regular requests (like letters), WebSockets keep the connection open, so both sides can send messages anytime. It’s great for chat apps or live updates.",
    syntax:
      "let socket = new WebSocket('wss://example.com/socket');\nsocket.onopen = () => socket.send('Hello');\nsocket.onmessage = (event) => console.log('Message:', event.data);",
    example:
      "let socket = new WebSocket('wss://echo.websocket.org');\nsocket.onopen = () => {\n  socket.send('Hello WebSocket!');\n};\nsocket.onmessage = (event) => {\n  console.log('Server says:', event.data);\n};",
    realTimeExample:
      "Imagine you’re on a phone call. You can talk and listen at the same time, and the call stays open until you hang up. WebSockets are like that: your webpage and the server can send messages back and forth in real time.",
    codeExample:
      "let ws = new WebSocket('wss://echo.websocket.org');\nws.onopen = () => {\n  ws.send('Hello!');\n};\nws.onmessage = (e) => {\n  console.log('Received:', e.data);\n};\nws.onclose = () => {\n  console.log('Connection closed');\n};",
  },
  {
    id: 60,
    question: "What is the Intersection Observer API?",
    answer:
      "The Intersection Observer API lets you watch if an element on your webpage is visible on the screen. It’s like a security camera that tells you when someone walks into view. It’s great for lazy loading images or infinite scroll.",
    syntax:
      "let observer = new IntersectionObserver(callback, options);\nobserver.observe(element);",
    example:
      "let observer = new IntersectionObserver((entries) => {\n  entries.forEach(entry => {\n    if (entry.isIntersecting) {\n      console.log(entry.target, 'is visible!');\n    }\n  });\n});\nobserver.observe(document.getElementById('myElement'));",
    realTimeExample:
      "Imagine you’re watching a security monitor. When a person walks into the camera’s view, you get an alert. The Intersection Observer API does that for webpage elements: it tells you when an element is visible on the screen.",
    codeExample:
      "let observer = new IntersectionObserver((entries) => {\n  entries.forEach(entry => {\n    if (entry.isIntersecting) {\n      entry.target.style.backgroundColor = 'yellow';\n    } else {\n      entry.target.style.backgroundColor = '';\n    }\n  });\n}, { threshold: 0.5 });\n\nlet elements = document.querySelectorAll('.lazy-load');\nelements.forEach(el => observer.observe(el));",
  },
  {
    id: 61,
    question: "What is the Resize Observer API?",
    answer:
      "The Resize Observer API lets you watch if an element on your webpage changes size. It’s like a ruler that tells you when something gets bigger or smaller. It’s useful for responsive designs or dynamic layouts.",
    syntax:
      "let observer = new ResizeObserver(callback);\nobserver.observe(element);",
    example:
      "let observer = new ResizeObserver(entries => {\n  for (let entry of entries) {\n    console.log('Element size:', entry.contentRect.width, entry.contentRect.height);\n  }\n});\nobserver.observe(document.getElementById('myElement'));",
    realTimeExample:
      "Imagine you have a window with a size sensor. Every time the window size changes, the sensor tells you the new size. The Resize Observer API does that for webpage elements: it tells you when their size changes.",
    codeExample:
      "let observer = new ResizeObserver(entries => {\n  for (let entry of entries) {\n    console.log('New size:', entry.contentRect.width, 'x', entry.contentRect.height);\n  }\n});\n\nlet box = document.getElementById('resizable-box');\nobserver.observe(box);",
  },
  {
    id: 62,
    question: "What is the Performance API?",
    answer:
      "The Performance API lets you measure how fast your webpage or code is running. It’s like a stopwatch for your webpage. You can check how long things take, so you can make your page faster.",
    syntax:
      "let start = performance.now();\n// code to measure\nlet end = performance.now();\nconsole.log(`Time taken: ${end - start} milliseconds`);",
    example:
      "let start = performance.now();\nfor (let i = 0; i < 1000000; i++) {}\nlet end = performance.now();\nconsole.log(`Loop took ${end - start} ms`);",
    realTimeExample:
      "Imagine you’re timing how long it takes to run a race. The Performance API is like a stopwatch: you start it, run your code, then stop it to see how long it took.",
    codeExample:
      "let start = performance.now();\n// Simulate work\nlet sum = 0;\nfor (let i = 0; i < 1000000; i++) {\n  sum += i;\n}\nlet end = performance.now();\nconsole.log(`Calculation took ${end - start} ms`);",
  },
  {
    id: 63,
    question: "What is the Battery API?",
    answer:
      "The Battery API lets your webpage check the battery status of the device (like a phone or laptop). It can tell you how much battery is left and if it’s charging. It’s useful for saving battery or warning the user.",
    syntax:
      "navigator.getBattery().then(battery => {\n  console.log('Battery level:', battery.level * 100 + '%');\n  console.log('Charging:', battery.charging);\n});",
    example:
      "if ('getBattery' in navigator) {\n  navigator.getBattery().then(battery => {\n    console.log('Battery level:', battery.level * 100 + '%');\n    battery.addEventListener('levelchange', () => {\n      console.log('New battery level:', battery.level * 100 + '%');\n    });\n  });\n}",
    realTimeExample:
      "Imagine you have a battery meter on your phone. It tells you how much battery is left and if it’s charging. The Battery API does that for your webpage: it can check and react to the device’s battery status.",
    codeExample:
      "if ('getBattery' in navigator) {\n  navigator.getBattery().then(battery => {\n    console.log(`Battery: ${battery.level * 100}%`);\n    console.log(`Charging: ${battery.charging ? 'Yes' : 'No'}`);\n    battery.addEventListener('chargingchange', () => {\n      console.log(`Now charging: ${battery.charging ? 'Yes' : 'No'}`);\n    });\n  });\n}",
  },
  {
    id: 64,
    question: "What is the Vibration API?",
    answer:
      "The Vibration API lets your webpage make the device vibrate, like a phone. It’s useful for alerts or games. You can make the device vibrate for a certain amount of time or in a pattern.",
    syntax:
      "navigator.vibrate(200); // vibrate for 200ms\nnavigator.vibrate([100, 30, 100]); // pattern: vibrate, wait, vibrate",
    example:
      "if ('vibrate' in navigator) {\n  navigator.vibrate(1000); // vibrate for 1 second\n}",
    realTimeExample:
      "Imagine your phone vibrating when you get a message. The Vibration API lets your webpage do that: it can make the device vibrate to get the user’s attention.",
    codeExample:
      "if ('vibrate' in navigator) {\n  // Vibrate for 1 second\n  navigator.vibrate(1000);\n  \n  // Vibrate pattern: 200ms on, 100ms off, 200ms on\n  navigator.vibrate([200, 100, 200]);\n}",
  },
  {
    id: 65,
    question: "What is the Device Orientation API?",
    answer:
      "The Device Orientation API lets your webpage know how the device is tilted or moved. It can tell you if the device is tilted left/right, forward/backward, or rotated. It’s great for games or apps that react to how you hold your phone.",
    syntax:
      "window.addEventListener('deviceorientation', (event) => {\n  console.log('Alpha (rotation):', event.alpha);\n  console.log('Beta (front/back):', event.beta);\n  console.log('Gamma (left/right):', event.gamma);\n});",
    example:
      "if (window.DeviceOrientationEvent) {\n  window.addEventListener('deviceorientation', (event) => {\n    console.log('Tilt left/right:', event.gamma);\n    console.log('Tilt front/back:', event.beta);\n  });\n}",
    realTimeExample:
      "Imagine you’re playing a racing game on your phone. You tilt the phone left to turn left, and right to turn right. The Device Orientation API tells the game how you’re tilting your phone.",
    codeExample:
      "if (window.DeviceOrientationEvent) {\n  window.addEventListener('deviceorientation', (e) => {\n    document.getElementById('orientation').innerHTML =\n      `Alpha: ${e.alpha}, Beta: ${e.beta}, Gamma: ${e.gamma}`;\n  });\n}",
  },
  {
    id: 66,
    question:
      "What is the difference between Promise.all() and Promise.race()?",
    answer:
      "`Promise.all()` waits for all promises to finish and gives you an array of results. If any promise fails, it fails right away. `Promise.race()` waits for the first promise to finish (win or fail) and gives you that result, ignoring the rest.",
    syntax:
      "Promise.all([promise1, promise2])\n  .then(results => console.log(results));\n\nPromise.race([promise1, promise2])\n  .then(result => console.log(result));",
    example:
      "let p1 = Promise.resolve(1);\nlet p2 = Promise.resolve(2);\nPromise.all([p1, p2]).then(values => console.log(values)); // [1, 2]\nPromise.race([p1, p2]).then(value => console.log(value)); // 1",
    realTimeExample:
      "Imagine you’re waiting for two friends to arrive. `Promise.all()` waits for both to arrive before you leave. `Promise.race()` leaves with the first friend who arrives, no matter who it is.",
    codeExample:
      "let fast = new Promise(resolve => setTimeout(resolve, 100, 'fast'));\nlet slow = new Promise(resolve => setTimeout(resolve, 500, 'slow'));\n\nPromise.all([fast, slow]).then(values => console.log(values)); // ['fast', 'slow'] after 500ms\nPromise.race([fast, slow]).then(value => console.log(value)); // 'fast' after 100ms",
  },
  {
    id: 67,
    question:
      "What is the difference between Promise.allSettled() and Promise.all()?",
    answer:
      "`Promise.all()` fails if any promise fails. `Promise.allSettled()` waits for all promises to finish, no matter if they succeed or fail, and gives you an array of results with their status (fulfilled/rejected).",
    syntax:
      "Promise.allSettled([promise1, promise2])\n  .then(results => results.forEach(result => console.log(result.status)));",
    example:
      "let p1 = Promise.resolve(1);\nlet p2 = Promise.reject('Error');\nPromise.all([p1, p2]).catch(e => console.log(e)); // 'Error'\nPromise.allSettled([p1, p2]).then(results => console.log(results));\n// [{status: 'fulfilled', value: 1}, {status: 'rejected', reason: 'Error'}]",
    realTimeExample:
      "Imagine you’re waiting for two friends to arrive. `Promise.all()` cancels the trip if either friend can’t come. `Promise.allSettled()` waits for both, then tells you who came and who didn’t.",
    codeExample:
      "let success = Promise.resolve('Success');\nlet failure = Promise.reject('Failure');\n\nPromise.allSettled([success, failure])\n  .then(results => console.log(results));\n// [{status: 'fulfilled', value: 'Success'}, {status: 'rejected', reason: 'Failure'}]",
  },
  {
    id: 68,
    question:
      "What is the difference between Promise.any() and Promise.race()?",
    answer:
      "`Promise.race()` gives you the first promise that finishes, whether it succeeds or fails. `Promise.any()` gives you the first promise that succeeds, ignoring any that fail unless all fail.",
    syntax:
      "Promise.any([promise1, promise2])\n  .then(result => console.log(result));\n\nPromise.race([promise1, promise2])\n  .then(result => console.log(result));",
    example:
      "let p1 = Promise.reject('Error 1');\nlet p2 = Promise.resolve('Success');\nPromise.race([p1, p2]).then(result => console.log(result)); // 'Success'\nPromise.any([p1, p2]).then(result => console.log(result)); // 'Success'",
    realTimeExample:
      "Imagine you’re waiting for two friends to arrive. `Promise.race()` leaves with the first friend who arrives, no matter if they’re happy or sad. `Promise.any()` leaves with the first happy friend, even if the other is sad, unless both are sad.",
    codeExample:
      "let fastFail = Promise.reject('Fast fail');\nlet slowSuccess = new Promise(resolve => setTimeout(resolve, 100, 'Slow success'));\n\nPromise.race([fastFail, slowSuccess])\n  .then(result => console.log(result)) // 'Fast fail'\n  .catch(e => console.log(e));\n\nPromise.any([fastFail, slowSuccess])\n  .then(result => console.log(result)); // 'Slow success'",
  },
  {
    id: 69,
    question:
      "What is the difference between async functions and regular functions?",
    answer:
      "Async functions always return a Promise, even if you don’t write one. You can use `await` inside them to wait for Promises. Regular functions don’t have these features.",
    syntax:
      "async function myAsyncFunc() {\n  let result = await somePromise;\n  return result;\n}",
    example:
      "async function fetchData() {\n  let response = await fetch('url');\n  return response.json();\n}\nfetchData().then(data => console.log(data));",
    realTimeExample:
      "Imagine you’re ordering food. An async function is like ordering with an app: you can wait for each step (order, cook, deliver). A regular function is like calling the restaurant: you have to keep calling to check the status.",
    codeExample:
      "async function getUser() {\n  let response = await fetch('https://api.example.com/user');\n  let user = await response.json();\n  return user;\n}\ngetUser().then(user => console.log(user.name));",
  },
  {
    id: 70,
    question: "What is the difference between for...in and for...of loops?",
    answer:
      "`for...in` loops over the names of things (keys) in an object or array. `for...of` loops over the values in an iterable (like arrays, strings, maps).",
    syntax: "for (let key in object) {}\nfor (let value of iterable) {}",
    example:
      "let obj = { a: 1, b: 2 };\nfor (let key in obj) console.log(key); // 'a', 'b'\n\nlet arr = [1, 2, 3];\nfor (let value of arr) console.log(value); // 1, 2, 3",
    realTimeExample:
      "Imagine you have a box of tools. `for...in` is like reading the labels on the drawers. `for...of` is like taking out each tool and using it.",
    codeExample:
      "let person = { name: 'John', age: 25 };\nfor (let key in person) console.log(key); // 'name', 'age'\n\nlet colors = ['red', 'green', 'blue'];\nfor (let color of colors) console.log(color); // 'red', 'green', 'blue'",
  },
  {
    id: 71,
    question:
      "What is the difference between Object.keys() and Object.values()?",
    answer:
      "`Object.keys()` gives you an array of an object’s keys (names). `Object.values()` gives you an array of an object’s values.",
    syntax: "Object.keys(obj);\nObject.values(obj);",
    example:
      "let obj = { a: 1, b: 2 };\nconsole.log(Object.keys(obj)); // ['a', 'b']\nconsole.log(Object.values(obj)); // [1, 2]",
    realTimeExample:
      "Imagine you have a toolbox. `Object.keys()` is like listing the names of the tools. `Object.values()` is like listing the tools themselves.",
    codeExample:
      "let car = { make: 'Toyota', model: 'Camry' };\nconsole.log(Object.keys(car)); // ['make', 'model']\nconsole.log(Object.values(car)); // ['Toyota', 'Camry']",
  },
  {
    id: 72,
    question:
      "What is the difference between Object.freeze() and Object.seal()?",
    answer:
      "`Object.freeze()` makes an object completely unchangeable: you can’t add, remove, or change any properties. `Object.seal()` lets you change existing properties, but you can’t add or remove any.",
    syntax: "Object.freeze(obj);\nObject.seal(obj);",
    example:
      "let obj = { a: 1 };\nObject.freeze(obj);\nobj.a = 2; // Fails in strict mode\n\nlet obj2 = { a: 1 };\nObject.seal(obj2);\nobj2.a = 2; // OK\nobj2.b = 2; // Fails in strict mode",
    realTimeExample:
      "Imagine you have a box. `Object.freeze()` is like putting it in a glass case: you can’t touch anything. `Object.seal()` is like locking the box: you can move things inside, but you can’t add or remove anything.",
    codeExample:
      "let frozen = Object.freeze({ a: 1 });\nfrozen.a = 2; // silently fails or throws error in strict mode\n\nlet sealed = Object.seal({ a: 1 });\nsealed.a = 2; // OK\nsealed.b = 2; // silently fails or throws error in strict mode",
  },
  {
    id: 73,
    question: "What is the difference between Array.map() and Array.forEach()?",
    answer:
      "`Array.map()` makes a new array with the results of calling a function on each element. `Array.forEach()` just runs a function for each element and doesn’t make a new array.",
    syntax:
      "arr.map(element => element * 2);\narr.forEach(element => console.log(element));",
    example:
      "let arr = [1, 2, 3];\nlet doubled = arr.map(x => x * 2); // [2, 4, 6]\narr.forEach(x => console.log(x)); // logs 1, 2, 3",
    realTimeExample:
      "Imagine you have a list of numbers. `map()` is like making a new list with each number doubled. `forEach()` is like reading each number out loud, but not making a new list.",
    codeExample:
      "let numbers = [1, 2, 3];\nlet squares = numbers.map(num => num * num); // [1, 4, 9]\nnumbers.forEach(num => console.log(num)); // logs 1, 2, 3",
  },
  {
    id: 74,
    question: "What is the difference between Array.filter() and Array.find()?",
    answer:
      "`Array.filter()` makes a new array with all elements that pass a test. `Array.find()` gives you the first element that passes the test.",
    syntax:
      "arr.filter(element => element > 2);\narr.find(element => element > 2);",
    example:
      "let arr = [1, 2, 3, 4];\nlet big = arr.filter(x => x > 2); // [3, 4]\nlet firstBig = arr.find(x => x > 2); // 3",
    realTimeExample:
      "Imagine you have a bag of marbles. `filter()` is like picking out all the red marbles. `find()` is like picking out the first red marble you see.",
    codeExample:
      "let numbers = [1, 2, 3, 4, 5];\nlet evens = numbers.filter(num => num % 2 === 0); // [2, 4]\nlet firstEven = numbers.find(num => num % 2 === 0); // 2",
  },
  {
    id: 75,
    question: "What is the difference between Array.some() and Array.every()?",
    answer:
      "`Array.some()` checks if at least one element passes a test. `Array.every()` checks if all elements pass a test.",
    syntax:
      "arr.some(element => element > 2);\narr.every(element => element > 2);",
    example:
      "let arr = [1, 2, 3];\nlet hasBig = arr.some(x => x > 2); // true\nlet allBig = arr.every(x => x > 2); // false",
    realTimeExample:
      "Imagine you have a class of students. `some()` is like checking if at least one student passed the test. `every()` is like checking if all students passed the test.",
    codeExample:
      "let scores = [80, 90, 70];\nlet somePassed = scores.some(score => score >= 80); // true\nlet allPassed = scores.every(score => score >= 80); // false",
  },
  {
    id: 76,
    question:
      "What is the difference between Array.reduce() and Array.reduceRight()?",
    answer:
      "`Array.reduce()` goes from left to right, applying a function to each element and the accumulated result. `Array.reduceRight()` goes from right to left.",
    syntax:
      "arr.reduce((acc, element) => acc + element, 0);\narr.reduceRight((acc, element) => acc + element, 0);",
    example:
      "let arr = [1, 2, 3];\nlet sum = arr.reduce((a, b) => a + b, 0); // 6\nlet sumRight = arr.reduceRight((a, b) => a + b, 0); // 6 (same for addition)",
    realTimeExample:
      "Imagine you have a line of people. `reduce()` is like passing a ball from left to right. `reduceRight()` is like passing it from right to left. For addition, it doesn’t matter, but for subtraction or other operations, it does.",
    codeExample:
      "let numbers = [1, 2, 3];\nlet left = numbers.reduce((a, b) => a - b, 0); // -6\nlet right = numbers.reduceRight((a, b) => a - b, 0); // -2",
  },
  {
    id: 77,
    question:
      "What is the difference between Array.includes() and Array.indexOf()?",
    answer:
      "`Array.includes()` checks if an element is in the array and returns true or false. `Array.indexOf()` tells you the index of the element, or -1 if it’s not there.",
    syntax: "arr.includes(2);\narr.indexOf(2);",
    example:
      "let arr = [1, 2, 3];\nlet hasTwo = arr.includes(2); // true\nlet index = arr.indexOf(2); // 1",
    realTimeExample:
      "Imagine you have a list of names. `includes()` is like asking ‘Is John on the list?’. `indexOf()` is like asking ‘What number is John on the list?’.",
    codeExample:
      "let fruits = ['apple', 'banana', 'orange'];\nlet hasBanana = fruits.includes('banana'); // true\nlet bananaIndex = fruits.indexOf('banana'); // 1",
  },
  {
    id: 78,
    question:
      "What is the difference between Array.slice() and Array.splice()?",
    answer:
      "`Array.slice()` copies a part of the array without changing the original. `Array.splice()` cuts out a part of the array and can add new elements, changing the original array.",
    syntax: "arr.slice(start, end);\narr.splice(start, deleteCount, items);",
    example:
      "let arr = [1, 2, 3, 4];\nlet sliced = arr.slice(1, 3); // [2, 3], arr is [1, 2, 3, 4]\nlet spliced = arr.splice(1, 2, 'a', 'b'); // [2, 3], arr is [1, 'a', 'b', 4]",
    realTimeExample:
      "Imagine you have a line of people. `slice()` is like taking a photo of some people in the line. `splice()` is like asking some people to leave and others to join the line.",
    codeExample:
      "let numbers = [1, 2, 3, 4];\nlet part = numbers.slice(1, 3); // [2, 3]\nnumbers.splice(1, 2, 'a', 'b'); // numbers is [1, 'a', 'b', 4]",
  },
  {
    id: 79,
    question:
      "What is the difference between Array.push() and Array.unshift()?",
    answer:
      "`Array.push()` adds an element to the end of the array. `Array.unshift()` adds an element to the beginning of the array.",
    syntax: "arr.push(element);\narr.unshift(element);",
    example:
      "let arr = [1, 2];\narr.push(3); // [1, 2, 3]\narr.unshift(0); // [0, 1, 2, 3]",
    realTimeExample:
      "Imagine you have a line of people. `push()` is like adding a person to the end of the line. `unshift()` is like adding a person to the front of the line.",
    codeExample:
      "let fruits = ['apple', 'banana'];\nfruits.push('orange'); // ['apple', 'banana', 'orange']\nfruits.unshift('kiwi'); // ['kiwi', 'apple', 'banana', 'orange']",
  },
  {
    id: 80,
    question: "What is the difference between Array.pop() and Array.shift()?",
    answer:
      "`Array.pop()` removes the last element from the array. `Array.shift()` removes the first element from the array.",
    syntax: "arr.pop();\narr.shift();",
    example:
      "let arr = [1, 2, 3];\nlet last = arr.pop(); // 3, arr is [1, 2]\nlet first = arr.shift(); // 1, arr is [2]",
    realTimeExample:
      "Imagine you have a stack of plates. `pop()` is like taking the top plate. `shift()` is like taking the bottom plate.",
    codeExample:
      "let numbers = [1, 2, 3];\nlet last = numbers.pop(); // 3, numbers is [1, 2]\nlet first = numbers.shift(); // 1, numbers is [2]",
  },
  {
    id: 81,
    question: "What is the difference between Map and Object in JavaScript?",
    answer:
      "A Map is like a special box where you can use anything as a key (like objects, functions, or numbers). An Object can only use strings or symbols as keys. Maps also keep their keys in order, and are better for frequent additions and deletions.",
    syntax:
      "let map = new Map();\nmap.set(key, value);\n\nlet obj = {};\nobj[key] = value;",
    example:
      "let map = new Map();\nmap.set({}, 'object key');\nmap.set(1, 'number key');\n\nlet obj = {};\nobj[{}] = 'object key'; // becomes '[object Object]'",
    realTimeExample:
      "Imagine you have a box of tools. An Object is like a toolbox where you can only label the drawers with words. A Map is like a toolbox where you can label the drawers with anything: a picture, a number, or even another toolbox.",
    codeExample:
      "let map = new Map();\nlet key1 = {};\nlet key2 = function() {};\nmap.set(key1, 'object key');\nmap.set(key2, 'function key');\n\nlet obj = {};\nobj[key1] = 'object key'; // becomes '[object Object]'",
  },
  {
    id: 82,
    question: "What is the difference between Set and Array in JavaScript?",
    answer:
      "A Set is like a special list where everything is unique. You can’t have the same thing twice. An Array can have duplicates. Sets are better for checking if something exists, and don’t have indices.",
    syntax:
      "let set = new Set([1, 2, 2, 3]); // {1, 2, 3}\nlet arr = [1, 2, 2, 3]; // [1, 2, 2, 3]",
    example:
      "let set = new Set([1, 2, 2, 3]);\nconsole.log(set.has(2)); // true\n\nlet arr = [1, 2, 2, 3];\nconsole.log(arr.includes(2)); // true",
    realTimeExample:
      "Imagine you have a list of guests for a party. A Set is like a list where each guest is only listed once, no matter how many times they RSVP. An Array is like a list where you write down every RSVP, even if it’s the same person.",
    codeExample:
      "let unique = new Set([1, 2, 2, 3]);\nconsole.log(unique); // Set {1, 2, 3}\n\nlet list = [1, 2, 2, 3];\nconsole.log(list); // [1, 2, 2, 3]",
  },
  {
    id: 83,
    question: "What is the difference between WeakMap and Map in JavaScript?",
    answer:
      "A WeakMap is like a Map, but it only lets you use objects as keys, and it doesn’t stop the garbage collector from removing keys if nothing else references them. This helps prevent memory leaks.",
    syntax: "let weakMap = new WeakMap();\nlet map = new Map();",
    example:
      "let weakMap = new WeakMap();\nlet key = {};\nweakMap.set(key, 'value');\n\nlet map = new Map();\nmap.set(key, 'value');",
    realTimeExample:
      "Imagine you have a keychain. A Map is like a keychain where you can hang any type of key, and the keys stay there forever. A WeakMap is like a keychain where you can only hang special keys, and if you lose the original key, the copy on the keychain disappears too.",
    codeExample:
      "let weakMap = new WeakMap();\nlet map = new Map();\nlet key = {};\n\nweakMap.set(key, 'weak value');\nmap.set(key, 'strong value');\n\nkey = null; // weakMap's key may be garbage collected, map's key remains",
  },
  {
    id: 84,
    question: "What is the difference between WeakSet and Set in JavaScript?",
    answer:
      "A WeakSet is like a Set, but it only lets you add objects, and it doesn’t stop the garbage collector from removing them if nothing else references them. This helps prevent memory leaks.",
    syntax: "let weakSet = new WeakSet();\nlet set = new Set();",
    example:
      "let weakSet = new WeakSet();\nlet set = new Set();\nlet obj = {};\nweakSet.add(obj);\nset.add(obj);",
    realTimeExample:
      "Imagine you have a guest list. A Set is like a list where you write down every guest’s name, and it stays there forever. A WeakSet is like a list where you only write down guests who are currently at the party, and if they leave, their name disappears from the list.",
    codeExample:
      "let weakSet = new WeakSet();\nlet set = new Set();\nlet obj = {};\n\nweakSet.add(obj);\nset.add(obj);\n\nobj = null; // weakSet's obj may be garbage collected, set's obj remains",
  },
  {
    id: 85,
    question: "What is the difference between Symbol and string in JavaScript?",
    answer:
      "A Symbol is a unique and immutable primitive value. It’s like a secret code that’s always different, even if you make two with the same description. Strings can be the same and are used for text. Symbols are often used as unique object keys.",
    syntax: "let sym = Symbol('description');\nlet str = 'description';",
    example:
      "let sym1 = Symbol('key');\nlet sym2 = Symbol('key');\nconsole.log(sym1 === sym2); // false\n\nlet str1 = 'key';\nlet str2 = 'key';\nconsole.log(str1 === str2); // true",
    realTimeExample:
      "Imagine you have two identical-looking keys. If they’re strings, they’re the same key. If they’re Symbols, they’re different keys, even if they look the same.",
    codeExample:
      "let id1 = Symbol('id');\nlet id2 = Symbol('id');\nconsole.log(id1 === id2); // false\n\nlet name1 = 'name';\nlet name2 = 'name';\nconsole.log(name1 === name2); // true",
  },
  {
    id: 86,
    question:
      "What is the difference between Object.assign() and the spread operator?",
    answer:
      "`Object.assign()` copies properties from one or more source objects to a target object. The spread operator (`...`) does the same thing in a more concise way, and can also be used with arrays.",
    syntax:
      "Object.assign(target, source1, source2);\nlet newObj = { ...source1, ...source2 };",
    example:
      "let target = {};\nlet source = { a: 1, b: 2 };\nObject.assign(target, source); // target is { a: 1, b: 2 }\n\nlet newObj = { ...source }; // { a: 1, b: 2 }",
    realTimeExample:
      "Imagine you’re copying notes from one notebook to another. `Object.assign()` is like copying each page one by one. The spread operator is like photocopying the whole notebook at once.",
    codeExample:
      "let obj1 = { a: 1 };\nlet obj2 = { b: 2 };\nlet merged = Object.assign({}, obj1, obj2); // { a: 1, b: 2 }\nlet mergedSpread = { ...obj1, ...obj2 }; // { a: 1, b: 2 }",
  },
  {
    id: 87,
    question:
      "What is the difference between Array.from() and the spread operator?",
    answer:
      "`Array.from()` can turn any iterable or array-like object into an array, and you can map each element. The spread operator (`...`) can only turn iterables into arrays, but is more concise.",
    syntax: "Array.from(arrayLike, mapFn);\n[...iterable];",
    example:
      "let arrayLike = { 0: 'a', 1: 'b', length: 2 };\nlet arr1 = Array.from(arrayLike, x => x.toUpperCase()); // ['A', 'B']\n\nlet iterable = 'hello';\nlet arr2 = [...iterable]; // ['h', 'e', 'l', 'l', 'o']",
    realTimeExample:
      "Imagine you have a list of names written on a blackboard. `Array.from()` is like copying each name and changing it (like making them uppercase). The spread operator is like copying all the names as they are.",
    codeExample:
      "let arrayLike = { 0: 1, 1: 2, length: 2 };\nlet arr1 = Array.from(arrayLike, x => x * 2); // [2, 4]\n\nlet str = 'hello';\nlet arr2 = [...str]; // ['h', 'e', 'l', 'l', 'o']",
  },
  {
    id: 88,
    question:
      "What is the difference between Object.entries() and Object.keys()?",
    answer:
      "`Object.entries()` gives you an array of key-value pairs. `Object.keys()` gives you an array of just the keys.",
    syntax: "Object.entries(obj);\nObject.keys(obj);",
    example:
      "let obj = { a: 1, b: 2 };\nconsole.log(Object.entries(obj)); // [['a', 1], ['b', 2]]\nconsole.log(Object.keys(obj)); // ['a', 'b']",
    realTimeExample:
      "Imagine you have a toolbox. `Object.entries()` is like listing each drawer and what’s inside. `Object.keys()` is like listing just the names of the drawers.",
    codeExample:
      "let person = { name: 'John', age: 25 };\nconsole.log(Object.entries(person)); // [['name', 'John'], ['age', 25]]\nconsole.log(Object.keys(person)); // ['name', 'age']",
  },
  {
    id: 89,
    question:
      "What is the difference between Object.values() and Object.entries()?",
    answer:
      "`Object.values()` gives you an array of just the values. `Object.entries()` gives you an array of key-value pairs.",
    syntax: "Object.values(obj);\nObject.entries(obj);",
    example:
      "let obj = { a: 1, b: 2 };\nconsole.log(Object.values(obj)); // [1, 2]\nconsole.log(Object.entries(obj)); // [['a', 1], ['b', 2]]",
    realTimeExample:
      "Imagine you have a toolbox. `Object.values()` is like listing just the tools. `Object.entries()` is like listing each drawer and what’s inside.",
    codeExample:
      "let car = { make: 'Toyota', model: 'Camry' };\nconsole.log(Object.values(car)); // ['Toyota', 'Camry']\nconsole.log(Object.entries(car)); // [['make', 'Toyota'], ['model', 'Camry']]",
  },
  {
    id: 90,
    question: "What is the difference between Array.isArray() and typeof?",
    answer:
      "`Array.isArray()` checks if something is an array. `typeof` tells you the type of something, but for arrays it says ‘object’ because arrays are a type of object in JavaScript.",
    syntax: "Array.isArray(value);\ntypeof value;",
    example:
      "console.log(Array.isArray([1, 2, 3])); // true\nconsole.log(typeof [1, 2, 3]); // 'object'",
    realTimeExample:
      "Imagine you have a box. `Array.isArray()` is like asking ‘Is this a list?’. `typeof` is like asking ‘What is this made of?’ and it says ‘object’ even if it’s a list.",
    codeExample:
      "let list = [1, 2, 3];\nlet obj = { a: 1 };\nconsole.log(Array.isArray(list)); // true\nconsole.log(Array.isArray(obj)); // false\nconsole.log(typeof list); // 'object'\nconsole.log(typeof obj); // 'object'",
  },
  {
    id: 91,
    question:
      "What is the difference between Array.of() and the Array constructor?",
    answer:
      "`Array.of()` makes an array from its arguments. The Array constructor can make an array from a single number (which makes an empty array of that length) or from multiple arguments.",
    syntax: "Array.of(1, 2, 3);\nnew Array(3);\nnew Array(1, 2, 3);",
    example:
      "console.log(Array.of(3)); // [3]\nconsole.log(new Array(3)); // [empty × 3]\nconsole.log(new Array(1, 2, 3)); // [1, 2, 3]",
    realTimeExample:
      "Imagine you’re making a list. `Array.of()` is like writing down each item you’re given. The Array constructor is like making a list with a certain number of blank lines if you give it one number, or writing down the items if you give it more.",
    codeExample:
      "let arr1 = Array.of(5); // [5]\nlet arr2 = new Array(5); // [empty × 5]\nlet arr3 = new Array(1, 2, 3); // [1, 2, 3]",
  },
  {
    id: 92,
    question: "What is the difference between Array.fill() and Array.map()?",
    answer:
      "`Array.fill()` fills all elements of an array with a static value. `Array.map()` creates a new array with the results of calling a function on each element.",
    syntax: "arr.fill(value);\narr.map(element => element * 2);",
    example:
      "let arr = [1, 2, 3];\narr.fill(0); // [0, 0, 0]\nlet doubled = arr.map(x => x * 2); // [0, 0, 0] (after fill)",
    realTimeExample:
      "Imagine you have a row of empty boxes. `fill()` is like putting the same thing in every box. `map()` is like putting something different in each box based on a rule.",
    codeExample:
      "let numbers = [1, 2, 3];\nnumbers.fill(0); // [0, 0, 0]\nlet squares = numbers.map(num => num * num); // [0, 0, 0]",
  },
  {
    id: 93,
    question:
      "What is the difference between Array.findIndex() and Array.indexOf()?",
    answer:
      "`Array.findIndex()` uses a function to find the index of the first element that passes a test. `Array.indexOf()` finds the index of the first element that is equal to a given value.",
    syntax: "arr.findIndex(element => element > 2);\narr.indexOf(2);",
    example:
      "let arr = [1, 2, 3, 4];\nlet index1 = arr.findIndex(x => x > 2); // 2\nlet index2 = arr.indexOf(2); // 1",
    realTimeExample:
      "Imagine you have a list of numbers. `findIndex()` is like finding the first number greater than 2. `indexOf()` is like finding the first number that is exactly 2.",
    codeExample:
      "let numbers = [1, 2, 3, 4];\nlet firstBigIndex = numbers.findIndex(num => num > 2); // 2\nlet twoIndex = numbers.indexOf(2); // 1",
  },
  {
    id: 94,
    question:
      "What is the difference between Array.flat() and Array.flatMap()?",
    answer:
      "`Array.flat()` flattens a nested array by one level. `Array.flatMap()` first maps each element with a function, then flattens the result by one level.",
    syntax: "arr.flat();\narr.flatMap(element => [element * 2]);",
    example:
      "let arr = [1, [2, 3]];\nconsole.log(arr.flat()); // [1, 2, 3]\n\nlet arr2 = [1, 2, 3];\nconsole.log(arr2.flatMap(x => [x, x * 2])); // [1, 2, 2, 4, 3, 6]",
    realTimeExample:
      "Imagine you have boxes inside boxes. `flat()` is like opening all the inner boxes and putting everything in one big box. `flatMap()` is like first changing what’s in each box, then opening the inner boxes.",
    codeExample:
      "let nested = [1, [2, 3], 4];\nlet flat = nested.flat(); // [1, 2, 3, 4]\n\nlet numbers = [1, 2, 3];\nlet mappedAndFlat = numbers.flatMap(num => [num, num * 2]); // [1, 2, 2, 4, 3, 6]",
  },
  {
    id: 95,
    question:
      "What is the difference between Array.sort() and Array.reverse()?",
    answer:
      "`Array.sort()` orders the elements of an array according to a sort function. `Array.reverse()` reverses the order of the elements in the array.",
    syntax: "arr.sort((a, b) => a - b);\narr.reverse();",
    example:
      "let arr = [3, 1, 4, 2];\narr.sort((a, b) => a - b); // [1, 2, 3, 4]\narr.reverse(); // [4, 3, 2, 1]",
    realTimeExample:
      "Imagine you have a line of people by height. `sort()` is like ordering them from shortest to tallest. `reverse()` is like turning the line around so the tallest is first.",
    codeExample:
      "let numbers = [3, 1, 4, 2];\nnumbers.sort((a, b) => a - b); // [1, 2, 3, 4]\nnumbers.reverse(); // [4, 3, 2, 1]",
  },
  {
    id: 96,
    question:
      "What is the difference between Array.join() and Array.toString()?",
    answer:
      "`Array.join()` combines all array elements into a string, with a separator you choose. `Array.toString()` converts the array to a string with elements separated by commas.",
    syntax: "arr.join('-');\narr.toString();",
    example:
      "let arr = [1, 2, 3];\nconsole.log(arr.join('-')); // '1-2-3'\nconsole.log(arr.toString()); // '1,2,3'",
    realTimeExample:
      "Imagine you have a list of numbers. `join()` is like writing them down with a dash between each. `toString()` is like writing them down with a comma between each.",
    codeExample:
      "let fruits = ['apple', 'banana', 'orange'];\nconsole.log(fruits.join(' and ')); // 'apple and banana and orange'\nconsole.log(fruits.toString()); // 'apple,banana,orange'",
  },
  {
    id: 97,
    question:
      "What is the difference between String.includes() and String.indexOf()?",
    answer:
      "`String.includes()` checks if a substring is in the string and returns true or false. `String.indexOf()` tells you the index of the substring, or -1 if it’s not there.",
    syntax: "str.includes('sub');\nstr.indexOf('sub');",
    example:
      "let str = 'hello world';\nconsole.log(str.includes('world')); // true\nconsole.log(str.indexOf('world')); // 6",
    realTimeExample:
      "Imagine you have a sentence. `includes()` is like asking ‘Is the word “world” in this sentence?’. `indexOf()` is like asking ‘Where does the word “world” start in this sentence?’.",
    codeExample:
      "let sentence = 'The quick brown fox';\nconsole.log(sentence.includes('quick')); // true\nconsole.log(sentence.indexOf('quick')); // 4",
  },
  {
    id: 98,
    question:
      "What is the difference between String.slice() and String.substring()?",
    answer:
      "`String.slice()` and `String.substring()` both extract parts of a string, but `slice()` can take negative indices (counting from the end), while `substring()` cannot.",
    syntax: "str.slice(start, end);\nstr.substring(start, end);",
    example:
      "let str = 'hello';\nconsole.log(str.slice(1, 3)); // 'el'\nconsole.log(str.slice(-2)); // 'lo'\nconsole.log(str.substring(1, 3)); // 'el'\nconsole.log(str.substring(-2)); // 'hello' (treats negative as 0)",
    realTimeExample:
      "Imagine you have a piece of paper with a word. `slice()` is like cutting out a part, and you can count from the end if you want. `substring()` is like cutting out a part, but you can only count from the start.",
    codeExample:
      "let word = 'JavaScript';\nconsole.log(word.slice(0, 4)); // 'Java'\nconsole.log(word.slice(-6)); // 'Script'\nconsole.log(word.substring(0, 4)); // 'Java'\nconsole.log(word.substring(-6)); // 'JavaScript' (same as substring(0))",
  },
  {
    id: 99,
    question: "What is the difference between String.split() and Array.join()?",
    answer:
      "`String.split()` turns a string into an array by cutting it at certain spots. `Array.join()` turns an array into a string by putting a separator between each element.",
    syntax: "'a,b,c'.split(',');\n['a', 'b', 'c'].join('-');",
    example:
      "let str = 'a,b,c';\nlet arr = str.split(','); // ['a', 'b', 'c']\nlet newStr = arr.join('-'); // 'a-b-c'",
    realTimeExample:
      "Imagine you have a string of beads. `split()` is like cutting the string to get individual beads. `join()` is like threading the beads onto a new string with a different knot between each bead.",
    codeExample:
      "let csv = 'one,two,three';\nlet array = csv.split(','); // ['one', 'two', 'three']\nlet newCsv = array.join('|'); // 'one|two|three'",
  },
  {
    id: 100,
    question:
      "What is the difference between String.trim() and String.replace()?",
    answer:
      "`String.trim()` removes whitespace from the start and end of a string. `String.replace()` replaces a substring with another substring, anywhere in the string.",
    syntax: "'  hello  '.trim();\n'hello'.replace('l', 'x');",
    example:
      "let str1 = '  hello  ';\nconsole.log(str1.trim()); // 'hello'\n\nlet str2 = 'hello';\nconsole.log(str2.replace('l', 'x')); // 'hexlo'",
    realTimeExample:
      "Imagine you have a piece of paper with a word. `trim()` is like trimming the extra space around the edges. `replace()` is like using correction tape to change a letter in the middle of the word.",
    codeExample:
      "let messy = '   hello world   ';\nlet clean = messy.trim(); // 'hello world'\n\nlet text = 'hello';\nlet newText = text.replace('l', 'X'); // 'heXlo'",
  },
];
window.intermediate = intermediate;
