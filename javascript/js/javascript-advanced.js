let advanced = [
  {
    id: 1,
    question: "How do you check if something is an array?",
    answer: "You can use a special tool called Array.isArray(variable).",
    syntax: "Array.isArray(variable);",
    example: "Array.isArray([1, 2, 3]); // true",
    realTimeExample: "Like checking if a box is a toy box or a lunch box.",
    codeExample:
      "const arr = [1, 2, 3];\nconsole.log(Array.isArray(arr)); // true",
  },
  {
    id: 2,
    question: "How can you copy an object?",
    answer:
      "You can copy it using Object.assign(), using the spread symbol (...), or another way using JSON.",
    syntax:
      "Object.assign({}, obj);\n{...obj};\nJSON.parse(JSON.stringify(obj));",
    example: "const copy = {...original};",
    realTimeExample:
      "Like making a photocopy of a page so you can write on it without ruining the original.",
    codeExample:
      "const original = {a: 1};\nconst copy = {...original};\nconsole.log(copy); // {a: 1}",
  },
  {
    id: 3,
    question: "What is the difference between a shallow copy and a deep copy?",
    answer:
      "A shallow copy only copies the outside layer; a deep copy copies everything inside, too.",
    syntax: "Shallow: {...obj}\nDeep: JSON.parse(JSON.stringify(obj))",
    example:
      "Shallow: const copy = {...obj};\nDeep: const deepCopy = JSON.parse(JSON.stringify(obj));",
    realTimeExample:
      "Shallow copy is like copying a folder but not the files inside. Deep copy is like copying the folder and all its files.",
    codeExample:
      "const obj = {a: {b: 1}};\nconst shallow = {...obj};\nconst deep = JSON.parse(JSON.stringify(obj));",
  },
  {
    id: 4,
    question: "What is a Symbol?",
    answer:
      "A Symbol is a special kind of value that is unique, like a superhero`s secret identity.",
    syntax: "const sym = Symbol();",
    example: "const id = Symbol('id');",
    realTimeExample:
      "Like a secret handshake that only you and your friend know.",
    codeExample:
      "const uniqueKey = Symbol('key');\nconst obj = {[uniqueKey]: 'value'};",
  },
  {
    id: 5,
    question: "What is a generator function?",
    answer:
      "It`s a fun kind of function that can stop and start again using the word yield.",
    syntax: "function* gen() { yield 1; }",
    example: "function* count() { yield 1; yield 2; }",
    realTimeExample:
      "Like a TV show that pauses after each episode and resumes when you press play.",
    codeExample:
      "function* gen() {\n  yield 1;\n  yield 2;\n}\nconst g = gen();\nconsole.log(g.next().value); // 1",
  },
  {
    id: 6,
    question: "What is the event loop in JavaScript?",
    answer:
      "It`s like a helper that makes sure things happen one at a time, especially when waiting for something to finish.",
    syntax: "N/A (Conceptual)",
    example: "setTimeout(() => console.log('Hi'), 1000);",
    realTimeExample:
      "Like a waiter taking orders and serving food one table at a time, even if some orders take longer to cook.",
    codeExample:
      "console.log('Start');\nsetTimeout(() => console.log('Timeout'), 0);\nconsole.log('End');",
  },
  {
    id: 7,
    question: "What is the difference between microtasks and macrotasks?",
    answer:
      "Microtasks (like promises) are little jobs that get done first, and macrotasks (like setTimeout) come after.",
    syntax:
      "Microtask: Promise.resolve().then(...)\nMacrotask: setTimeout(...)",
    example:
      "Promise.resolve().then(() => console.log('Microtask'));\nsetTimeout(() => console.log('Macrotask'), 0);",
    realTimeExample:
      "Microtasks are like quick phone calls; macrotasks are like scheduled meetings.",
    codeExample:
      "Promise.resolve().then(() => console.log('Promise'));\nsetTimeout(() => console.log('Timeout'), 0);",
  },
  {
    id: 8,
    question: "How do you turn an object into JSON?",
    answer: "You can use a magic spell called JSON.stringify().",
    syntax: "JSON.stringify(obj);",
    example: "JSON.stringify({name: 'Alice'});",
    realTimeExample:
      "Like packing your toys into a box so you can send them to a friend.",
    codeExample:
      "const obj = {name: 'Alice'};\nconst json = JSON.stringify(obj);\nconsole.log(json); // '{\"name\":\"Alice\"}'",
  },
  {
    id: 9,
    question: "How do you turn JSON back into an object?",
    answer: "You use JSON.parse(); it`s like unwrapping a gift.",
    syntax: "JSON.parse(jsonString);",
    example: 'JSON.parse(\'{"name":"Alice"}\');',
    realTimeExample: "Like opening a gift box to see what`s inside.",
    codeExample:
      'const json = \'{"name":"Alice"}\';\nconst obj = JSON.parse(json);\nconsole.log(obj.name); // Alice',
  },
  {
    id: 10,
    question: "What is debouncing?",
    answer:
      "It means waiting a little bit before doing something again so it doesn't happen too fast.",
    syntax: "N/A (Implementation required)",
    example: "Debounce search input to avoid too many API calls.",
    realTimeExample:
      "Like waiting for someone to finish typing before you start searching for what they wrote.",
    codeExample:
      "let timeout;\nfunction debounce(func, delay) {\n  clearTimeout(timeout);\n  timeout = setTimeout(func, delay);\n}",
  },
  {
    id: 11,
    question: "What is throttling?",
    answer:
      "It means only doing something once in a while, even if someone keeps asking.",
    syntax: "N/A (Implementation required)",
    example: "Throttle scroll events to avoid too many function calls.",
    realTimeExample:
      "Like only checking your mailbox once an hour, even if letters keep arriving.",
    codeExample:
      "let lastCall = 0;\nfunction throttle(func, limit) {\n  const now = Date.now();\n  if (now - lastCall >= limit) {\n    func();\n    lastCall = now;\n  }\n}",
  },
  {
    id: 12,
    question: "What are higher-order functions?",
    answer:
      "They are special functions that can take other functions or give back new ones.",
    syntax: "function higherOrder(func) { return func(); }",
    example: "const twice = (f) => (x) => f(f(x));",
    realTimeExample:
      "Like a teacher who gives you a worksheet and tells you how to fill it out.",
    codeExample:
      "const twice = (f) => (x) => f(f(x));\nconst add3 = (x) => x + 3;\nconsole.log(twice(add3)(7)); // 13",
  },
  {
    id: 13,
    question: "What is the difference between map() and forEach()?",
    answer:
      "map() makes a new list with things in it, while forEach() doesn't give you anything back.",
    syntax: "arr.map((x) => x * 2);\narr.forEach((x) => console.log(x));",
    example: "const doubled = [1, 2].map(x => x * 2);",
    realTimeExample:
      "map() is like making a new shopping list with doubled quantities; forEach() is like just reading the list aloud.",
    codeExample:
      "const arr = [1, 2, 3];\nconst doubled = arr.map(x => x * 2);\narr.forEach(x => console.log(x));",
  },
  {
    id: 14,
    question: "What is the filter() method?",
    answer:
      "It makes a new list only with the things that match the rules you set.",
    syntax: "arr.filter((x) => x > 2);",
    example: "const evens = [1, 2, 3].filter(x => x % 2 === 0);",
    realTimeExample: "Like picking only the red marbles from a bag of marbles.",
    codeExample:
      "const numbers = [1, 2, 3, 4];\nconst evens = numbers.filter(x => x % 2 === 0);\nconsole.log(evens); // [2, 4]",
  },
  {
    id: 15,
    question: "What is the reduce() method?",
    answer:
      "It takes a list and squashes it down to a single value, like counting all your candies.",
    syntax: "arr.reduce((acc, x) => acc + x, 0);",
    example: "const sum = [1, 2, 3].reduce((acc, x) => acc + x, 0);",
    realTimeExample: "Like adding up all your pocket money for the month.",
    codeExample:
      "const sum = [1, 2, 3].reduce((acc, x) => acc + x, 0);\nconsole.log(sum); // 6",
  },
  {
    id: 16,
    question: "What is the difference between splice() and slice()?",
    answer: "splice() changes the original list, but slice() makes a new list.",
    syntax: "arr.splice(1, 1);\narr.slice(1, 3);",
    example:
      "const removed = arr.splice(1, 1);\nconst subArr = arr.slice(1, 3);",
    realTimeExample:
      "splice() is like cutting a piece out of a pizza; slice() is like making a copy of a few slices.",
    codeExample:
      "const arr = [1, 2, 3, 4];\nconst removed = arr.splice(1, 1);\nconst subArr = arr.slice(1, 3);",
  },
  {
    id: 17,
    question: "What is JSONP?",
    answer: "It`s a way to get data from another place, even if it`s tricky.",
    syntax: "N/A (Uses script tag)",
    example: "Using a callback function to fetch data from a different domain.",
    realTimeExample:
      "Like asking a friend to bring you a book from another library because you can`t go there yourself.",
    codeExample:
      "const script = document.createElement('script');\nscript.src = 'https://example.com/data?callback=handleData';\ndocument.body.appendChild(script);",
  },
  {
    id: 18,
    question: "What is a service worker?",
    answer:
      "It`s like an invisible helper that looks after things when you're offline.",
    syntax: "navigator.serviceWorker.register('/sw.js');",
    example: "Caching assets for offline use.",
    realTimeExample:
      "Like a butler who serves you tea even if the power goes out.",
    codeExample:
      "if ('serviceWorker' in navigator) {\n  navigator.serviceWorker.register('/sw.js');\n}",
  },
  {
    id: 19,
    question: "What is strict equality?",
    answer: "It checks if two things are exactly the same in type and value.",
    syntax: "a === b;",
    example: "5 === '5'; // false",
    realTimeExample:
      "Like checking if two keys open the same lock, not just look the same.",
    codeExample:
      "console.log(5 === '5'); // false\nconsole.log(5 === 5); // true",
  },
  {
    id: 20,
    question: "What is the difference between a primitive and an object?",
    answer:
      "Primitives are simple values like numbers, while objects are like toy boxes that hold lots of values.",
    syntax: "Primitive: let num = 5;\nObject: let obj = {a: 1};",
    example: "let age = 25;\nlet person = {name: 'Alice'};",
    realTimeExample:
      "A primitive is like a single Lego brick; an object is like a Lego castle made of many bricks.",
    codeExample:
      "let num = 5;\nlet obj = {a: 1};\nconsole.log(typeof num); // number\nconsole.log(typeof obj); // object",
  },
  {
    id: 21,
    question: "What is the difference between undefined and undeclared?",
    answer:
      "undefined means something exists but has no value; undeclared means something hasn`t been created yet.",
    syntax: "let a;\nconsole.log(b); // ReferenceError",
    example:
      "let a;\nconsole.log(a); // undefined\nconsole.log(b); // ReferenceError",
    realTimeExample:
      "undefined is like an empty box; undeclared is like a box that doesn`t exist at all.",
    codeExample:
      "let a;\nconsole.log(a); // undefined\nconsole.log(b); // ReferenceError: b is not defined",
  },
  {
    id: 22,
    question: "What is a weak reference in JavaScript?",
    answer:
      "It`s a type of reference that doesn't stop things from being cleaned up if no one needs them anymore.",
    syntax: "const weakRef = new WeakRef(obj);",
    example: "const weakRef = new WeakRef({a: 1});",
    realTimeExample:
      "Like a sticky note that falls off if the thing it`s stuck to is thrown away.",
    codeExample:
      "let obj = {a: 1};\nconst weakRef = new WeakRef(obj);\nobj = null;\nconsole.log(weakRef.deref()); // undefined",
  },
  {
    id: 23,
    question: "What is the difference between WeakMap and Map?",
    answer:
      "WeakMap can only use objects as keys, while Map can use any type of value.",
    syntax: "new WeakMap();\nnew Map();",
    example: "const weakMap = new WeakMap();\nconst map = new Map();",
    realTimeExample:
      "WeakMap is like a secret drawer that only opens for certain keys; Map is like a regular drawer that opens for any key.",
    codeExample:
      "const weakMap = new WeakMap();\nconst map = new Map();\nmap.set('key', 'value');",
  },
  {
    id: 24,
    question: "What is the use of Object.freeze()?",
    answer: "It locks an object so no one can change its properties.",
    syntax: "Object.freeze(obj);",
    example: "const frozen = Object.freeze({a: 1});",
    realTimeExample:
      "Like putting your phone in a case so no one can change its settings.",
    codeExample:
      "const obj = {a: 1};\nObject.freeze(obj);\nobj.a = 2; // fails silently in non-strict mode",
  },
  {
    id: 25,
    question: "What are modules?",
    answer: "Modules are like boxes of code that you can use anywhere.",
    syntax: "import { func } from './module.js';\nexport const a = 1;",
    example: "import { sum } from './math.js';",
    realTimeExample:
      "Like Lego sets that you can combine to build anything you want.",
    codeExample:
      "// math.js\nexport const sum = (a, b) => a + b;\n// app.js\nimport { sum } from './math.js';",
  },
  {
    id: 26,
    question: "What are the benefits of using ES6 modules?",
    answer: "They help keep code organized and let you share code easily.",
    syntax: "import/export",
    example: "import { func } from 'module';",
    realTimeExample:
      "Like using labeled boxes to organize your tools, so you can find what you need quickly.",
    codeExample:
      "// module.js\nexport const pi = 3.14;\n// app.js\nimport { pi } from './module.js';",
  },
  {
    id: 27,
    question:
      "What is the difference between synchronous and asynchronous functions?",
    answer:
      "Synchronous functions wait for each task to finish one by one; asynchronous functions can do other things while waiting.",
    syntax: "Sync: function() { ... }\nAsync: async function() { ... }",
    example: "Async: fetch(url).then(...);",
    realTimeExample:
      "Synchronous is like waiting in line for coffee; asynchronous is like ordering coffee and doing something else while it`s being made.",
    codeExample:
      "// Sync\nfunction sync() { return 1; }\n// Async\nasync function asyncFunc() { return Promise.resolve(1); }",
  },
  {
    id: 28,
    question: "What is a promise chain?",
    answer:
      "It`s a line of promises that helps manage tasks that happen one after the other.",
    syntax: "promise.then(...).then(...).catch(...);",
    example:
      "fetch(url).then(res => res.json()).then(data => console.log(data));",
    realTimeExample:
      "Like a relay race where each runner passes the baton to the next.",
    codeExample:
      "fetch(url)\n  .then(res => res.json())\n  .then(data => console.log(data))\n  .catch(err => console.error(err));",
  },
  {
    id: 29,
    question: "What is async/await error handling?",
    answer: "It`s a way to catch mistakes when using promises in your code.",
    syntax: "try { await promise; } catch (err) { ... }",
    example:
      "try { const data = await fetch(url); } catch (err) { console.error(err); }",
    realTimeExample: "Like having a safety net when walking on a tightrope.",
    codeExample:
      "async function getData() {\n  try {\n    const res = await fetch(url);\n    const data = await res.json();\n  } catch (err) {\n    console.error(err);\n  }\n}",
  },
  {
    id: 30,
    question:
      "What is the difference between Promise.all() and Promise.race()?",
    answer:
      "Promise.all() waits for everything to finish, while Promise.race() goes with the first one to finish.",
    syntax: "Promise.all([p1, p2]);\nPromise.race([p1, p2]);",
    example: "Promise.all([fetch(url1), fetch(url2)]);",
    realTimeExample:
      "Promise.all() is like waiting for all your friends to arrive; Promise.race() is like going with the first friend who shows up.",
    codeExample:
      "const p1 = Promise.resolve(1);\nconst p2 = Promise.resolve(2);\nPromise.all([p1, p2]).then(values => console.log(values));",
  },
  {
    id: 31,
    question: "What is the Proxy object?",
    answer:
      "It`s a tool that allows you to control how other objects are used.",
    syntax: "new Proxy(obj, { get: (obj, prop) => ... });",
    example:
      "const proxy = new Proxy(obj, { get: (obj, prop) => obj[prop] || 'default' });",
    realTimeExample:
      "Like a bouncer who decides who can enter a club and who can`t.",
    codeExample:
      "const obj = {a: 1};\nconst proxy = new Proxy(obj, {\n  get: (obj, prop) => obj[prop] || 'default'\n});\nconsole.log(proxy.b); // 'default'",
  },
  {
    id: 32,
    question: "What is Reflect API?",
    answer: "It gives you tools to make changes to objects easily.",
    syntax: "Reflect.get(obj, 'prop');",
    example: "Reflect.set(obj, 'a', 2);",
    realTimeExample:
      "Like a remote control that lets you change TV channels without touching the TV.",
    codeExample:
      "const obj = {a: 1};\nReflect.set(obj, 'a', 2);\nconsole.log(obj.a); // 2",
  },
  {
    id: 33,
    question:
      "What is the difference between Object.keys() and Object.getOwnPropertyNames()?",
    answer:
      "Object.keys() shows only the properties that can be seen; Object.getOwnPropertyNames() shows everything.",
    syntax: "Object.keys(obj);\nObject.getOwnPropertyNames(obj);",
    example: "Object.keys({a: 1, [Symbol()]: 2}); // ['a']",
    realTimeExample:
      "Object.keys() is like listing the books on a shelf; Object.getOwnPropertyNames() is like listing all the books, even the hidden ones.",
    codeExample:
      "const obj = {a: 1, [Symbol()]: 2};\nconsole.log(Object.keys(obj)); // ['a']\nconsole.log(Object.getOwnPropertyNames(obj)); // ['a']",
  },
  {
    id: 34,
    question: "What is the use of Object.defineProperty()?",
    answer: "It lets you create a new property or change an existing one.",
    syntax: "Object.defineProperty(obj, 'a', { value: 1, writable: false });",
    example:
      "Object.defineProperty(obj, 'a', { value: 1, enumerable: false });",
    realTimeExample:
      "Like putting a secret compartment in a drawer that only you know about.",
    codeExample:
      "const obj = {};\nObject.defineProperty(obj, 'a', { value: 1, enumerable: false });\nconsole.log(obj.a); // 1",
  },
  {
    id: 35,
    question: "What is a decorator in JavaScript?",
    answer: "It`s a special function that changes how something works.",
    syntax: "@decorator\nclass MyClass {}",
    example: "@log\nclass MyClass { method() {} }",
    realTimeExample:
      "Like putting a sticker on a notebook to remind you it`s important.",
    codeExample:
      "function log(target, name, descriptor) {\n  const original = descriptor.value;\n  descriptor.value = function() {\n    console.log(`Calling ${name}`);\n    return original.apply(this, arguments);\n  };\n  return descriptor;\n}\nclass MyClass {\n  @log\n  method() {}\n}",
  },
  {
    id: 36,
    question: "What is the difference between class and function constructors?",
    answer:
      "Class constructors are used with classes; function constructors are regular functions that make things.",
    syntax: "class MyClass { constructor() {} }\nfunction MyFunc() {}",
    example: "class Person { constructor(name) { this.name = name; } }",
    realTimeExample:
      "A class is like a blueprint for a house; a function constructor is like a carpenter who builds the house step by step.",
    codeExample:
      "// Class\nclass Person {\n  constructor(name) { this.name = name; }\n}\n// Function\nfunction Person(name) { this.name = name; }",
  },
  {
    id: 37,
    question: "What is the super keyword?",
    answer: "It`s used to call something from a parent class.",
    syntax: "super.method();",
    example: "class Child extends Parent {\n  method() { super.method(); }\n}",
    realTimeExample:
      "Like calling your parent for advice before making a decision.",
    codeExample:
      "class Parent {\n  greet() { return 'Hello'; }\n}\nclass Child extends Parent {\n  greet() { return super.greet() + ', world!'; }\n}",
  },
  {
    id: 38,
    question: "What is method overriding?",
    answer:
      "It`s when a child class makes its own version of a method that exists in its parent class.",
    syntax: "class Child extends Parent {\n  method() { ... }\n}",
    example: "class Child extends Parent {\n  greet() { return 'Hi!'; }\n}",
    realTimeExample:
      "Like changing the recipe for a family dish to suit your taste.",
    codeExample:
      "class Parent {\n  greet() { return 'Hello'; }\n}\nclass Child extends Parent {\n  greet() { return 'Hi!'; }\n}",
  },
  {
    id: 39,
    question: "What is the difference between static and instance methods?",
    answer:
      "Static methods belong to the class; instance methods belong to the individual objects created from that class.",
    syntax: "static method() {}\nmethod() {}",
    example:
      "class MyClass {\n  static staticMethod() {}\n  instanceMethod() {}\n}",
    realTimeExample:
      "Static methods are like rules for the whole school; instance methods are like rules for each classroom.",
    codeExample:
      "class MyClass {\n  static staticMethod() { return 'static'; }\n  instanceMethod() { return 'instance'; }\n}\nconst obj = new MyClass();\nconsole.log(MyClass.staticMethod()); // 'static'",
  },
  {
    id: 40,
    question: "What is the use of getters and setters?",
    answer:
      "Getters help you retrieve values, and setters help you change values with some checks.",
    syntax:
      "get prop() { return this._prop; }\nset prop(value) { this._prop = value; }",
    example:
      "class Person {\n  get name() { return this._name; }\n  set name(value) { this._name = value; }\n}",
    realTimeExample:
      "Like a thermostat that lets you set the temperature but only within a safe range.",
    codeExample:
      "class Person {\n  get name() { return this._name; }\n  set name(value) { this._name = value; }\n}\nconst p = new Person();\np.name = 'Alice';",
  },
  {
    id: 41,
    question: "What is the difference between for...in and for...of?",
    answer:
      "for...in looks at the keys of an object; for...of looks at the values of an array.",
    syntax: "for (let key in obj) {}\nfor (let value of arr) {}",
    example:
      "for (let key in {a: 1, b: 2}) {}\nfor (let value of [1, 2, 3]) {}",
    realTimeExample:
      "for...in is like reading the labels on drawers; for...of is like taking out the clothes from each drawer.",
    codeExample:
      "const obj = {a: 1, b: 2};\nfor (let key in obj) { console.log(key); }\nconst arr = [1, 2, 3];\nfor (let value of arr) { console.log(value); }",
  },
  {
    id: 42,
    question: "What is the spread operator used for?",
    answer: "It spreads out items from an array or properties from an object.",
    syntax: "[...arr];\n{...obj};",
    example: "const newArr = [...oldArr];\nconst newObj = {...oldObj};",
    realTimeExample: "Like scattering toys from a box onto the floor.",
    codeExample:
      "const arr1 = [1, 2];\nconst arr2 = [...arr1, 3];\nconst obj1 = {a: 1};\nconst obj2 = {...obj1, b: 2};",
  },
  {
    id: 43,
    question: "What is the rest parameter?",
    answer:
      "It collects the leftovers into an array when you`re calling a function.",
    syntax: "function(...args) {}",
    example:
      "function sum(...args) { return args.reduce((a, b) => a + b, 0); }",
    realTimeExample: "Like gathering all the leftover candies into one bag.",
    codeExample:
      "function sum(...args) {\n  return args.reduce((a, b) => a + b, 0);\n}\nconsole.log(sum(1, 2, 3)); // 6",
  },
  {
    id: 44,
    question: "What is destructuring assignment?",
    answer:
      "It takes values from arrays or objects and puts them into separate variables.",
    syntax: "const [a, b] = arr;\nconst {x, y} = obj;",
    example:
      "const [first, second] = [1, 2];\nconst {name, age} = {name: 'Alice', age: 25};",
    realTimeExample:
      "Like unpacking groceries and putting each item in its place.",
    codeExample:
      "const [a, b] = [1, 2];\nconst {name, age} = {name: 'Alice', age: 25};",
  },
  {
    id: 45,
    question: "What is the use of default parameters?",
    answer: "They give a value if no value was given when calling a function.",
    syntax: "function(a = 1) {}",
    example: "function greet(name = 'Guest') { return `Hello, ${name}`; }",
    realTimeExample:
      "Like having a default ringtone if you don`t pick your own.",
    codeExample:
      "function greet(name = 'Guest') {\n  return `Hello, ${name}`;\n}\nconsole.log(greet()); // 'Hello, Guest'",
  },
  {
    id: 46,
    question: "What is the difference between let, const, and var?",
    answer:
      "var can go anywhere; let and const are limited to a certain area, and const can't be changed later.",
    syntax: "let a = 1;\nconst b = 2;\nvar c = 3;",
    example:
      "if (true) { let a = 1; const b = 2; var c = 3; }\nconsole.log(c); // 3\nconsole.log(a); // ReferenceError",
    realTimeExample:
      "var is like a global announcement; let and const are like whispers in a room.",
    codeExample:
      "if (true) {\n  let a = 1;\n  const b = 2;\n  var c = 3;\n}\nconsole.log(c); // 3\nconsole.log(a); // ReferenceError",
  },
  {
    id: 47,
    question: "What is the temporal dead zone?",
    answer:
      "It's the time right after entering a place where you can't use let or const until they are declared.",
    syntax: "N/A (Conceptual)",
    example: "console.log(a); // ReferenceError\nlet a = 1;",
    realTimeExample: "Like trying to use a ticket before you`ve bought it.",
    codeExample:
      "console.log(a); // ReferenceError: Cannot access 'a' before initialization\nlet a = 1;",
  },
  {
    id: 48,
    question: "What is the use of the 'use strict' directive?",
    answer: "It helps catch mistakes and makes you write better code.",
    syntax: "'use strict';",
    example: "'use strict';\na = 1; // ReferenceError: a is not defined",
    realTimeExample: "Like a spell checker that points out your typos.",
    codeExample: "'use strict';\na = 1; // ReferenceError: a is not defined",
  },
  {
    id: 49,
    question: "What is the difference between == and ===?",
    answer:
      "== can change types to compare; === checks if both type and value are the same.",
    syntax: "a == b;\na === b;",
    example: "5 == '5'; // true\n5 === '5'; // false",
    realTimeExample:
      "== is like saying two things are similar; === is like saying they are identical twins.",
    codeExample:
      "console.log(5 == '5'); // true\nconsole.log(5 === '5'); // false",
  },
  {
    id: 50,
    question: "What is type coercion?",
    answer:
      "It`s when JavaScript automatically changes types of values to compare them.",
    syntax: "N/A (Conceptual)",
    example: "'5' - 1; // 4\n'5' + 1; // '51'",
    realTimeExample:
      "Like automatically converting dollars to euros when you travel.",
    codeExample: "console.log('5' - 1); // 4\nconsole.log('5' + 1); // '51'",
  },
  {
    id: 51,
    question: "What is the difference between null and undefined?",
    answer:
      "null means empty on purpose; undefined means it doesn`t have a value set yet.",
    syntax: "let a = null;\nlet b;",
    example: "console.log(a); // null\nconsole.log(b); // undefined",
    realTimeExample:
      "null is like an empty box you put on the shelf; undefined is like a shelf with no box at all.",
    codeExample:
      "let a = null;\nlet b;\nconsole.log(a); // null\nconsole.log(b); // undefined",
  },
  {
    id: 52,
    question: "What is NaN?",
    answer:
      "It stands for Not-a-Number and means there's an error in a number.",
    syntax: "NaN",
    example: "console.log(0/0); // NaN",
    realTimeExample:
      "Like trying to count how many apples are in an empty box labeled 'oranges'.",
    codeExample: "console.log(0/0); // NaN\nconsole.log(Number('abc')); // NaN",
  },
  {
    id: 53,
    question: "How to check if something is NaN?",
    answer: "Use Number.isNaN() or isNaN() to check if it`s Not-a-Number.",
    syntax: "Number.isNaN(value);\nisNaN(value);",
    example: "Number.isNaN(NaN); // true\nisNaN('abc'); // true",
    realTimeExample:
      "Like checking if a coin is fake by testing its weight and material.",
    codeExample:
      "console.log(Number.isNaN(NaN)); // true\nconsole.log(isNaN('abc')); // true",
  },
  {
    id: 54,
    question: "What is the difference between primitive and reference types?",
    answer:
      "Primitive types hold simple values; reference types hold complex things like objects.",
    syntax: "Primitive: let num = 5;\nReference: let obj = {a: 1};",
    example: "let num = 5;\nlet obj = {a: 1};",
    realTimeExample:
      "A primitive is like a single Lego brick; a reference type is like a Lego castle made of many bricks.",
    codeExample:
      "let num = 5;\nlet obj = {a: 1};\nconsole.log(typeof num); // number\nconsole.log(typeof obj); // object",
  },
  {
    id: 55,
    question: "What is the prototype chain?",
    answer:
      "It`s a chain that shows how things are related to each other in JavaScript.",
    syntax: "obj.__proto__;\nObject.getPrototypeOf(obj);",
    example:
      "const obj = {};\nconsole.log(obj.__proto__ === Object.prototype); // true",
    realTimeExample:
      "Like a family tree that shows how you are related to your grandparents and great-grandparents.",
    codeExample:
      "const obj = {};\nconsole.log(obj.__proto__ === Object.prototype); // true",
  },
  {
    id: 56,
    question: "What is the __proto__ property?",
    answer: "It`s a property that shows what the prototype of an object is.",
    syntax: "obj.__proto__;",
    example: "const obj = {};\nconsole.log(obj.__proto__); // Object.prototype",
    realTimeExample: "Like a label on a box that tells you where it came from.",
    codeExample:
      "const obj = {};\nconsole.log(obj.__proto__); // [Object: null prototype] {}",
  },
  {
    id: 57,
    question: "What is Object.create()?",
    answer: "It makes a new object using an existing one as a model.",
    syntax: "Object.create(proto);",
    example: "const newObj = Object.create({a: 1});",
    realTimeExample:
      "Like using a cookie cutter to make cookies that all look the same.",
    codeExample:
      "const proto = {a: 1};\nconst obj = Object.create(proto);\nconsole.log(obj.a); // 1",
  },
  {
    id: 58,
    question: "What is the difference between hasOwnProperty and in?",
    answer:
      "'in' checks if a property exists anywhere; hasOwnProperty checks if it exists on that object only.",
    syntax: "'prop' in obj;\nobj.hasOwnProperty('prop');",
    example:
      "'toString' in {}; // true\n{}.hasOwnProperty('toString'); // false",
    realTimeExample:
      "'in' is like checking if a book is in the library; hasOwnProperty is like checking if the book is on your personal shelf.",
    codeExample:
      "const obj = {};\nconsole.log('toString' in obj); // true\nconsole.log(obj.hasOwnProperty('toString')); // false",
  },
  {
    id: 59,
    question: "What is the use of Object.seal()?",
    answer:
      "It stops you from adding new properties but lets you change existing ones.",
    syntax: "Object.seal(obj);",
    example:
      "const sealed = Object.seal({a: 1});\nsealed.a = 2; // works\nsealed.b = 3; // fails silently",
    realTimeExample:
      "Like sealing a letter so you can`t add more pages, but you can still edit what`s written.",
    codeExample:
      "const obj = {a: 1};\nObject.seal(obj);\nobj.a = 2;\nobj.b = 3; // fails silently\nconsole.log(obj); // {a: 2}",
  },
  {
    id: 60,
    question: "What is the use of Object.preventExtensions()?",
    answer: "It stops you from adding new properties to an object.",
    syntax: "Object.preventExtensions(obj);",
    example:
      "const obj = {a: 1};\nObject.preventExtensions(obj);\nobj.b = 2; // fails silently",
    realTimeExample: "Like putting a 'no more stickers' rule on your notebook.",
    codeExample:
      "const obj = {a: 1};\nObject.preventExtensions(obj);\nobj.b = 2; // fails silently\nconsole.log(obj); // {a: 1}",
  },
  {
    id: 61,
    question:
      "What is the difference between Object.freeze() and Object.seal()?",
    answer:
      "freeze() locks everything; seal() lets you change what`s already there.",
    syntax: "Object.freeze(obj);\nObject.seal(obj);",
    example:
      "Object.freeze({a: 1}); // can't change or add\nObject.seal({a: 1}); // can change, can't add",
    realTimeExample:
      "freeze() is like putting your phone in a locked box; seal() is like putting it in a box with a hole for the charger.",
    codeExample:
      "const frozen = Object.freeze({a: 1});\nfrozen.a = 2; // fails silently\nconst sealed = Object.seal({a: 1});\nsealed.a = 2; // works",
  },
  {
    id: 62,
    question: "What is a WeakSet?",
    answer:
      "A collection that only keeps weak references to objects, so they can be garbage collected if needed.",
    syntax: "new WeakSet();",
    example: "const weakSet = new WeakSet();\nweakSet.add({a: 1});",
    realTimeExample:
      "Like a guest list that automatically removes names of people who leave the party.",
    codeExample:
      "const weakSet = new WeakSet();\nconst obj = {a: 1};\nweakSet.add(obj);\nconsole.log(weakSet.has(obj)); // true",
  },
  {
    id: 63,
    question: "What is a WeakMap?",
    answer: "A map that keeps weak references to key objects.",
    syntax: "new WeakMap();",
    example: "const weakMap = new WeakMap();\nweakMap.set({a: 1}, 'value');",
    realTimeExample:
      "Like a treasure map that only works if the treasure still exists.",
    codeExample:
      "const weakMap = new WeakMap();\nconst key = {a: 1};\nweakMap.set(key, 'value');\nconsole.log(weakMap.get(key)); // 'value'",
  },
  {
    id: 64,
    question: "What is the use of Symbol.iterator?",
    answer: "It helps make an object easy to loop through like an array.",
    syntax: "[Symbol.iterator]() { ... }",
    example:
      "const iterable = {\n  [Symbol.iterator]() {\n    return { next() { return { done: true, value: 1 }; } };\n  }\n};",
    realTimeExample:
      "Like adding wheels to a suitcase so you can roll it instead of carrying it.",
    codeExample:
      "const iterable = {\n  [Symbol.iterator]() {\n    let i = 0;\n    return {\n      next() {\n        i++;\n        return { done: i > 3, value: i };\n      }\n    };\n  }\n};\nfor (const val of iterable) console.log(val); // 1, 2, 3",
  },
  {
    id: 65,
    question: "What is the for...of loop?",
    answer: "It lets you go through items in an array or a string one by one.",
    syntax: "for (let value of iterable) { ... }",
    example: "for (let num of [1, 2, 3]) { console.log(num); }",
    realTimeExample: "Like reading each page of a book one after the other.",
    codeExample:
      "const arr = [1, 2, 3];\nfor (let num of arr) {\n  console.log(num);\n}",
  },
  {
    id: 66,
    question: "What is the difference between for...of and for...in?",
    answer: "for...of gets the values; for...in gets the keys.",
    syntax: "for (let value of arr) {}\nfor (let key in obj) {}",
    example: "for (let num of [1, 2, 3]) {}\nfor (let key in {a: 1, b: 2}) {}",
    realTimeExample:
      "for...of is like eating each candy in a bag; for...in is like reading the labels on the bag.",
    codeExample:
      "const arr = [1, 2, 3];\nfor (let num of arr) { console.log(num); }\nconst obj = {a: 1, b: 2};\nfor (let key in obj) { console.log(key); }",
  },
  {
    id: 67,
    question: "What is the use of Array.from()?",
    answer: "It turns something that looks like an array into an actual array.",
    syntax: "Array.from(arrayLike);",
    example: "Array.from('hello'); // ['h', 'e', 'l', 'l', 'o']",
    realTimeExample: "Like turning a pile of loose photos into a photo album.",
    codeExample:
      "console.log(Array.from('hello')); // ['h', 'e', 'l', 'l', 'o']\nconsole.log(Array.from({length: 3, 0: 'a', 1: 'b', 2: 'c'})); // ['a', 'b', 'c']",
  },
  {
    id: 68,
    question: "What is the use of Array.of()?",
    answer: "It makes a new array from whatever items you give it.",
    syntax: "Array.of(...items);",
    example: "Array.of(1, 2, 3); // [1, 2, 3]",
    realTimeExample: "Like making a new playlist from your favorite songs.",
    codeExample:
      "console.log(Array.of(1, 2, 3)); // [1, 2, 3]\nconsole.log(Array.of(undefined)); // [undefined]",
  },
  {
    id: 69,
    question: "What is the difference between find() and findIndex()?",
    answer:
      "find() gives you the item; findIndex() gives you the location in the list.",
    syntax: "arr.find((x) => x > 2);\narr.findIndex((x) => x > 2);",
    example:
      "[1, 2, 3].find(x => x > 2); // 3\n[1, 2, 3].findIndex(x => x > 2); // 2",
    realTimeExample:
      "find() is like finding your favorite book on a shelf; findIndex() is like finding the shelf number where the book is.",
    codeExample:
      "const arr = [1, 2, 3];\nconsole.log(arr.find(x => x > 2)); // 3\nconsole.log(arr.findIndex(x => x > 2)); // 2",
  },
  {
    id: 70,
    question: "What is the use of flat() method?",
    answer: "It squishes down nested arrays to make them flat.",
    syntax: "arr.flat();\narr.flat(depth);",
    example: "[1, [2, [3]]].flat(2); // [1, 2, 3]",
    realTimeExample:
      "Like unfolding all the boxes inside a big box so everything is in one layer.",
    codeExample:
      "const arr = [1, [2, [3]]];\nconsole.log(arr.flat(2)); // [1, 2, 3]",
  },
  {
    id: 71,
    question: "What is the use of flatMap() method?",
    answer: "It changes each item and then makes the result flat.",
    syntax: "arr.flatMap((x) => [x, x*2]);",
    example: "[1, 2].flatMap(x => [x, x*2]); // [1, 2, 2, 4]",
    realTimeExample:
      "Like making a copy of each photo and then putting all the photos in one album.",
    codeExample:
      "const arr = [1, 2];\nconsole.log(arr.flatMap(x => [x, x*2])); // [1, 2, 2, 4]",
  },
  {
    id: 72,
    question: "What is the use of Array.prototype.fill()?",
    answer: "It fills all spots in an array with the same value.",
    syntax: "arr.fill(value);\narr.fill(value, start, end);",
    example: "[1, 2, 3].fill(0); // [0, 0, 0]",
    realTimeExample: "Like coloring all the squares on a grid the same color.",
    codeExample:
      "const arr = [1, 2, 3];\narr.fill(0);\nconsole.log(arr); // [0, 0, 0]",
  },
  {
    id: 73,
    question: "What is the use of Array.prototype.copyWithin()?",
    answer:
      "It takes parts of the array and puts them somewhere else in the same array.",
    syntax: "arr.copyWithin(target, start, end);",
    example: "[1, 2, 3, 4].copyWithin(0, 2); // [3, 4, 3, 4]",
    realTimeExample:
      "Like cutting a section of a tape and pasting it somewhere else on the same tape.",
    codeExample:
      "const arr = [1, 2, 3, 4];\narr.copyWithin(0, 2);\nconsole.log(arr); // [3, 4, 3, 4]",
  },
  {
    id: 74,
    question: "What is the use of String.prototype.includes()?",
    answer: "It checks if a string has a certain piece inside it.",
    syntax: "'hello'.includes('ell');",
    example: "'hello world'.includes('world'); // true",
    realTimeExample: "Like checking if a word is in a sentence.",
    codeExample: "console.log('hello world'.includes('world')); // true",
  },
  {
    id: 75,
    question: "What is the use of String.prototype.startsWith()?",
    answer: "It checks if a string begins with a certain piece.",
    syntax: "'hello'.startsWith('he');",
    example: "'hello world'.startsWith('hello'); // true",
    realTimeExample:
      "Like checking if a book starts with a certain chapter title.",
    codeExample: "console.log('hello world'.startsWith('hello')); // true",
  },
  {
    id: 76,
    question: "What is the use of String.prototype.endsWith()?",
    answer: "It checks if a string ends with a certain piece.",
    syntax: "'hello'.endsWith('lo');",
    example: "'hello world'.endsWith('world'); // true",
    realTimeExample: "Like checking if a movie ends with a certain scene.",
    codeExample: "console.log('hello world'.endsWith('world')); // true",
  },
  {
    id: 77,
    question: "What is the use of String.prototype.padStart()?",
    answer:
      "It puts extra spaces at the start of the string to make it a certain length.",
    syntax: "'abc'.padStart(5, ' ');",
    example: "'5'.padStart(3, '0'); // '005'",
    realTimeExample:
      "Like adding zeros at the start of a number to make it three digits long.",
    codeExample: "console.log('5'.padStart(3, '0')); // '005'",
  },
  {
    id: 78,
    question: "What is the use of String.prototype.padEnd()?",
    answer:
      "It adds extra spaces at the end of a string to make it a certain length.",
    syntax: "'abc'.padEnd(5, ' ');",
    example: "'5'.padEnd(3, '0'); // '500'",
    realTimeExample:
      "Like adding spaces at the end of a word to make it fit in a box.",
    codeExample: "console.log('5'.padEnd(3, '0')); // '500'",
  },
  {
    id: 79,
    question: "What is the use of String.prototype.repeat()?",
    answer: "It makes a string repeat many times.",
    syntax: "'ha'.repeat(3);",
    example: "'ha'.repeat(3); // 'hahaha'",
    realTimeExample: "Like copying the same sticker over and over on a page.",
    codeExample: "console.log('ha'.repeat(3)); // 'hahaha'",
  },
  {
    id: 80,
    question: "What is the use of String.prototype.trimStart()?",
    answer: "It removes empty spaces from the start of a string.",
    syntax: "'  hello'.trimStart();",
    example: "'  hello'.trimStart(); // 'hello'",
    realTimeExample: "Like trimming the blank edges off a piece of paper.",
    codeExample: "console.log('  hello'.trimStart()); // 'hello'",
  },
  {
    id: 81,
    question: "What is the use of String.prototype.trimEnd()?",
    answer: "It removes empty spaces from the end of a string.",
    syntax: "'hello  '.trimEnd();",
    example: "'hello  '.trimEnd(); // 'hello'",
    realTimeExample: "Like cutting off the extra fabric at the end of a cloth.",
    codeExample: "console.log('hello  '.trimEnd()); // 'hello'",
  },
  {
    id: 82,
    question: "What is the use of Number.isInteger()?",
    answer: "It checks if a number is a whole number.",
    syntax: "Number.isInteger(5);",
    example: "Number.isInteger(5.0); // true\nNumber.isInteger(5.5); // false",
    realTimeExample:
      "Like checking if you have a whole number of apples, not half an apple.",
    codeExample:
      "console.log(Number.isInteger(5.0)); // true\nconsole.log(Number.isInteger(5.5)); // false",
  },
  {
    id: 83,
    question: "What is the use of Number.isSafeInteger()?",
    answer: "It checks if a number is safe to use without losing precision.",
    syntax: "Number.isSafeInteger(9007199254740991);",
    example:
      "Number.isSafeInteger(9007199254740991); // true\nNumber.isSafeInteger(9007199254740992); // false",
    realTimeExample:
      "Like checking if a bridge can safely hold a certain weight.",
    codeExample:
      "console.log(Number.isSafeInteger(9007199254740991)); // true\nconsole.log(Number.isSafeInteger(9007199254740992)); // false",
  },
  {
    id: 84,
    question: "What is the use of Math.trunc()?",
    answer:
      "It cuts off the decimal part of a number, only keeping the whole number.",
    syntax: "Math.trunc(5.7);",
    example: "Math.trunc(5.7); // 5\nMath.trunc(-5.7); // -5",
    realTimeExample:
      "Like chopping off the fractional part of a pizza slice count.",
    codeExample:
      "console.log(Math.trunc(5.7)); // 5\nconsole.log(Math.trunc(-5.7)); // -5",
  },
  {
    id: 85,
    question: "What is the use of Math.sign()?",
    answer: "It tells you if a number is positive, negative, or zero.",
    syntax: "Math.sign(-5);",
    example: "Math.sign(5); // 1\nMath.sign(-5); // -1\nMath.sign(0); // 0",
    realTimeExample:
      "Like checking if a bank transaction is a deposit, withdrawal, or neutral.",
    codeExample:
      "console.log(Math.sign(5)); // 1\nconsole.log(Math.sign(-5)); // -1\nconsole.log(Math.sign(0)); // 0",
  },
  {
    id: 86,
    question: "What is the use of Math.cbrt()?",
    answer: "It finds the cube root of a number.",
    syntax: "Math.cbrt(27);",
    example: "Math.cbrt(27); // 3",
    realTimeExample:
      "Like finding the length of the side of a cube if you know its volume.",
    codeExample: "console.log(Math.cbrt(27)); // 3",
  },
  {
    id: 87,
    question: "What is the use of Math.hypot()?",
    answer: "It calculates the distance based on the given numbers.",
    syntax: "Math.hypot(3, 4);",
    example: "Math.hypot(3, 4); // 5",
    realTimeExample:
      "Like calculating the diagonal of a rectangle using the lengths of its sides.",
    codeExample: "console.log(Math.hypot(3, 4)); // 5",
  },
  {
    id: 88,
    question: "What is the use of Date.now()?",
    answer:
      "It tells you how many milliseconds have passed since January 1, 1970.",
    syntax: "Date.now();",
    example: "const now = Date.now();",
    realTimeExample:
      "Like checking the odometer on a car to see how many miles it has traveled since it was made.",
    codeExample: "console.log(Date.now()); // e.g., 1634567890123",
  },
  {
    id: 89,
    question: "What is the use of Date.prototype.toISOString()?",
    answer: "It gives you a string that shows the date in a standard format.",
    syntax: "new Date().toISOString();",
    example: "new Date().toISOString(); // '2025-10-07T12:00:00.000Z'",
    realTimeExample:
      "Like writing a date in a format that everyone in the world can understand.",
    codeExample:
      "console.log(new Date().toISOString()); // e.g., '2025-10-07T12:00:00.000Z'",
  },
  {
    id: 90,
    question: "What is the use of RegExp.prototype.test()?",
    answer: "It checks if a string matches a pattern you give it.",
    syntax: "/abc/.test('abc123');",
    example: "/hello/.test('hello world'); // true",
    realTimeExample: "Like checking if a word is in a dictionary.",
    codeExample: "console.log(/hello/.test('hello world')); // true",
  },
  {
    id: 91,
    question: "What is the use of RegExp.prototype.exec()?",
    answer: "It looks for a match in a string using a pattern.",
    syntax: "/abc/.exec('abc123');",
    example: "/\\d+/.exec('123abc'); // ['123']",
    realTimeExample:
      "Like searching for a specific word in a book and getting its location.",
    codeExample: "console.log(/d+/.exec('123abc')); // ['123']",
  },
  {
    id: 92,
    question: "What is the use of String.prototype.match()?",
    answer: "It finds matches of a string against a pattern.",
    syntax: "'abc123'.match(/\\d+/);",
    example: "'123abc'.match(/\\d+/); // ['123']",
    realTimeExample: "Like highlighting all the numbers in a paragraph.",
    codeExample: "console.log('123abc'.match(/d+/)); // ['123']",
  },
  {
    id: 93,
    question: "What is the use of String.prototype.replace()?",
    answer: "It changes parts of a string based on a pattern.",
    syntax: "'abc'.replace('a', 'A');",
    example: "'hello world'.replace('world', 'there'); // 'hello there'",
    realTimeExample:
      "Like using 'find and replace' in a document to change all instances of a word.",
    codeExample:
      "console.log('hello world'.replace('world', 'there')); // 'hello there'",
  },
  {
    id: 94,
    question: "What is the use of String.prototype.search()?",
    answer: "It looks for a match between a pattern and a string.",
    syntax: "'abc123'.search(/\\d+/);",
    example: "'hello world'.search('world'); // 6",
    realTimeExample:
      "Like searching for a word in a book and getting the page number.",
    codeExample: "console.log('hello world'.search('world')); // 6",
  },
  {
    id: 95,
    question: "What is the use of String.prototype.split()?",
    answer: "It breaks a string into pieces and makes them into an array.",
    syntax: "'a,b,c'.split(',');",
    example: "'apple,banana'.split(','); // ['apple', 'banana']",
    realTimeExample: "Like cutting a cake into slices.",
    codeExample:
      "console.log('apple,banana'.split(',')); // ['apple', 'banana']",
  },
  {
    id: 96,
    question: "What is the use of Function.prototype.bind()?",
    answer: "It makes a new function that has a specific value for this.",
    syntax: "func.bind(thisArg);",
    example: "const boundFunc = func.bind(obj);",
    realTimeExample: "Like setting a default recipient for all your emails.",
    codeExample:
      "const obj = {name: 'Alice'};\nfunction greet() { console.log(`Hello, ${this.name}`); }\nconst boundGreet = greet.bind(obj);\nboundGreet(); // 'Hello, Alice'",
  },
  {
    id: 97,
    question: "What is the use of Function.prototype.call()?",
    answer: "It runs a function with specified values for this and arguments.",
    syntax: "func.call(thisArg, arg1, arg2);",
    example: "func.call(obj, 1, 2);",
    realTimeExample:
      "Like calling a friend and telling them to bring two things when they come over.",
    codeExample:
      "const obj = {name: 'Alice'};\nfunction greet(greeting) { console.log(`${greeting}, ${this.name}`); }\ngreet.call(obj, 'Hi'); // 'Hi, Alice'",
  },
  {
    id: 98,
    question: "What is the use of Function.prototype.apply()?",
    answer:
      "It runs a function with specified values and an array of arguments.",
    syntax: "func.apply(thisArg, [arg1, arg2]);",
    example: "func.apply(obj, [1, 2]);",
    realTimeExample:
      "Like giving a list of ingredients to a chef and asking them to make a dish.",
    codeExample:
      "const obj = {name: 'Alice'};\nfunction greet(greeting, punctuation) { console.log(`${greeting}, ${this.name}${punctuation}`); }\ngreet.apply(obj, ['Hi', '!']); // 'Hi, Alice!'",
  },
  {
    id: 99,
    question: "What is the difference between import and require?",
    answer:
      "import is the new way to bring in code for ES6; require is the old way used in Node.js.",
    syntax: "import { func } from 'module';\nconst func = require('module');",
    example:
      "import { sum } from './math.js';\nconst sum = require('./math.js').sum;",
    realTimeExample:
      "import is like using a modern key card to enter a building; require is like using an old metal key.",
    codeExample:
      "// ES6\nimport { sum } from './math.js';\n// CommonJS\nconst sum = require('./math.js').sum;",
  },
  {
    id: 100,
    question: "What is tree shaking?",
    answer:
      "It`s a way to clean out unused code during the building of an app.",
    syntax: "N/A (Build tool feature)",
    example:
      "Using import/export to allow tree shaking in bundlers like Webpack or Rollup.",
    realTimeExample:
      "Like removing all the unused tools from a toolbox before a trip so it`s lighter to carry.",
    codeExample:
      "// Only the used functions are included in the final bundle\nimport { usedFunction } from 'module';",
  },
  {
    id: 101,
    question:
      "What is the difference between module bundlers and module loaders?",
    answer:
      "Bundlers combine code into one file; loaders help load code when needed.",
    syntax: "N/A (Conceptual)",
    example: "Webpack (bundler) vs. SystemJS (loader)",
    realTimeExample:
      "A bundler is like packing all your clothes into one suitcase; a loader is like having a butler bring you clothes as you need them.",
    codeExample:
      "// Bundler: Webpack config\n// Loader: System.import('module')",
  },
  {
    id: 102,
    question: "What is the use of the Intl API?",
    answer:
      "It helps format numbers and dates according to different languages.",
    syntax: "new Intl.DateTimeFormat('en-US').format(date);",
    example: "new Intl.NumberFormat('de-DE').format(1000); // '1.000'",
    realTimeExample:
      "Like writing a date or number in a way that makes sense to people in different countries.",
    codeExample:
      "console.log(new Intl.NumberFormat('de-DE').format(1000)); // '1.000'",
  },
  {
    id: 103,
    question: "What is the difference between localStorage and sessionStorage?",
    answer:
      "localStorage keeps data forever; sessionStorage only holds it while the tab is open.",
    syntax:
      "localStorage.setItem('key', 'value');\nsessionStorage.setItem('key', 'value');",
    example: "localStorage.getItem('key');\nsessionStorage.getItem('key');",
    realTimeExample:
      "localStorage is like a permanent tattoo; sessionStorage is like a sticker that falls off when you wash your hands.",
    codeExample:
      "localStorage.setItem('theme', 'dark');\nsessionStorage.setItem('temp', 'data');",
  },
  {
    id: 104,
    question: "What is the use of the Intersection Observer API?",
    answer: "It watches when elements enter or leave the view.",
    syntax: "new IntersectionObserver(callback, options);",
    example: "const observer = new IntersectionObserver((entries) => { ... });",
    realTimeExample:
      "Like a security camera that alerts you when someone walks into a room.",
    codeExample:
      "const observer = new IntersectionObserver((entries) => {\n  entries.forEach(entry => {\n    if (entry.isIntersecting) console.log('Element is visible');\n  });\n});\nobserver.observe(document.querySelector('#target'));",
  },
  {
    id: 105,
    question: "What is the use of the Resize Observer API?",
    answer: "It watches when the size of elements changes.",
    syntax: "new ResizeObserver(callback);",
    example: "const observer = new ResizeObserver((entries) => { ... });",
    realTimeExample:
      "Like a sensor that tells you when a window is opened or closed.",
    codeExample:
      "const observer = new ResizeObserver((entries) => {\n  for (let entry of entries) {\n    console.log(entry.contentRect.width);\n  }\n});\nobserver.observe(document.querySelector('#target'));",
  },
  {
    id: 106,
    question:
      "What is the difference between requestAnimationFrame and setTimeout?",
    answer:
      "requestAnimationFrame is meant for smooth animations and goes just before the screen updates; setTimeout is a more general timer.",
    syntax: "requestAnimationFrame(callback);\nsetTimeout(callback, delay);",
    example:
      "requestAnimationFrame(() => { ... });\nsetTimeout(() => { ... }, 1000);",
    realTimeExample:
      "requestAnimationFrame is like a conductor keeping the orchestra in perfect time; setTimeout is like a clock alarm that rings after a set time.",
    codeExample:
      "requestAnimationFrame(() => {\n  console.log('Before repaint');\n});\nsetTimeout(() => {\n  console.log('After delay');\n}, 1000);",
  },
  {
    id: 107,
    question: "What is the use of the Performance API?",
    answer: "It gives you information about how well the page is doing.",
    syntax: "performance.now();",
    example:
      "const start = performance.now();\n// ... code ...\nconst end = performance.now();\nconsole.log(end - start);",
    realTimeExample:
      "Like using a stopwatch to time how fast a runner completes a lap.",
    codeExample:
      "const start = performance.now();\nfor (let i = 0; i < 1000000; i++) {}\nconst end = performance.now();\nconsole.log(`Time taken: ${end - start} ms`);",
  },
  {
    id: 108,
    question: "What is the difference between a polyfill and a transpiler?",
    answer:
      "A polyfill allows you to use new features in old browsers; a transpiler changes new code to an older style.",
    syntax: "N/A (Conceptual)",
    example: "Using core-js for polyfills; using Babel for transpiling.",
    realTimeExample:
      "A polyfill is like a translator that helps old radios play new music; a transpiler is like rewriting a modern book in old English.",
    codeExample:
      "// Polyfill example: import 'core-js/stable';\n// Transpiler example: Babel config to convert ES6 to ES5",
  },
  {
    id: 109,
    question: "What is the use of the Proxy revocable function?",
    answer: "It lets you create a Proxy that you can turn off later.",
    syntax: "Proxy.revocable(target, handler);",
    example: "const { proxy, revoke } = Proxy.revocable({}, {});\nrevoke();",
    realTimeExample:
      "Like giving someone a temporary key to your house that you can deactivate later.",
    codeExample:
      "const target = {};\nconst { proxy, revoke } = Proxy.revocable(target, {});\nrevoke();\nconsole.log(proxy); // TypeError if used after revoke",
  },
  {
    id: 110,
    question:
      "What is the difference between Object.entries() and Object.values()?",
    answer:
      "Object.entries() gives key/value pairs; Object.values() gives just the values.",
    syntax: "Object.entries(obj);\nObject.values(obj);",
    example:
      "Object.entries({a: 1, b: 2}); // [['a', 1], ['b', 2]]\nObject.values({a: 1, b: 2}); // [1, 2]",
    realTimeExample:
      "Object.entries() is like getting both the labels and the contents of drawers; Object.values() is like just getting the contents.",
    codeExample:
      "const obj = {a: 1, b: 2};\nconsole.log(Object.entries(obj)); // [['a', 1], ['b', 2]]\nconsole.log(Object.values(obj)); // [1, 2]",
  },
  {
    id: 111,
    question: "What is the use of the globalThis object?",
    answer:
      "It helps you access the global object no matter where you are in JavaScript.",
    syntax: "globalThis.myVar;",
    example: "globalThis.myGlobal = 'value';",
    realTimeExample:
      "Like having a universal remote that works with any TV in any room.",
    codeExample:
      "globalThis.myGlobal = 'value';\nconsole.log(myGlobal); // 'value'",
  },
  {
    id: 112,
    question:
      "What is the difference between a generator function and an async function?",
    answer:
      "Generator functions can stop and restart; async functions always return a promise.",
    syntax:
      "function* gen() { yield 1; }\nasync function asyncFunc() { return 1; }",
    example:
      "function* gen() { yield 1; }\nasync function asyncFunc() { return Promise.resolve(1); }",
    realTimeExample:
      "A generator is like a book you can put down and pick up later; an async function is like a promise to deliver a package by a certain time.",
    codeExample:
      "function* gen() {\n  yield 1;\n}\nasync function asyncFunc() {\n  return 1;\n}",
  },
  {
    id: 113,
    question: "What is the use of the Optional Chaining operator (?.)?",
    answer:
      "It helps you safely access properties of objects without throwing errors if something is missing.",
    syntax: "obj?.prop;\nobj?.method();",
    example: "const value = obj?.nested?.prop;",
    realTimeExample:
      "Like asking for a friend`s friend`s phone number, but not getting upset if they don`t have one.",
    codeExample:
      "const obj = {a: {b: 1}};\nconsole.log(obj?.a?.b); // 1\nconsole.log(obj?.x?.y); // undefined",
  },
  {
    id: 114,
    question: "What is the use of the Nullish Coalescing operator (??)?",
    answer:
      "It gives the second value if the first is null or undefined, not just if it`s false.",
    syntax: "a ?? b;",
    example: "const value = null ?? 'default'; // 'default'",
    realTimeExample:
      "Like choosing a backup plan only if the first plan is canceled, not just because it`s not your favorite.",
    codeExample:
      "const a = null;\nconst b = undefined;\nconst c = 0;\nconsole.log(a ?? 'default'); // 'default'\nconsole.log(b ?? 'default'); // 'default'\nconsole.log(c ?? 'default'); // 0",
  },
  {
    id: 115,
    question: "What is the difference between a Map and a Set?",
    answer: "A Map holds key/value pairs; a Set only holds unique values.",
    syntax: "new Map();\nnew Set();",
    example:
      "const map = new Map([['a', 1]]);\nconst set = new Set([1, 2, 2]);",
    realTimeExample:
      "A Map is like a dictionary with words and definitions; a Set is like a list of unique items in a collection.",
    codeExample:
      "const map = new Map([['a', 1]]);\nconst set = new Set([1, 2, 2]);\nconsole.log(map.get('a')); // 1\nconsole.log([...set]); // [1, 2]",
  },
  {
    id: 116,
    question: "What is the use of the Array.prototype.at() method?",
    answer:
      "It gets the item at a specific index, even if you use negative numbers to count back from the end.",
    syntax: "arr.at(index);",
    example: "[1, 2, 3].at(-1); // 3",
    realTimeExample:
      "Like picking the last cookie from a jar without counting all the cookies.",
    codeExample: "const arr = [1, 2, 3];\nconsole.log(arr.at(-1)); // 3",
  },
  {
    id: 117,
    question:
      "What is the difference between a shallow comparison and a deep comparison?",
    answer:
      "A shallow comparison looks at the first layer; a deep comparison checks everything, even down the layers.",
    syntax: "N/A (Conceptual)",
    example:
      "Shallow: {a: 1} === {a: 1} // false\nDeep: JSON.stringify(obj1) === JSON.stringify(obj2)",
    realTimeExample:
      "Shallow is like checking if two gift boxes look the same from the outside; deep is like opening both boxes to see if the contents are identical.",
    codeExample:
      "const obj1 = {a: 1};\nconst obj2 = {a: 1};\nconsole.log(obj1 === obj2); // false (shallow)\nconsole.log(JSON.stringify(obj1) === JSON.stringify(obj2)); // true (deep)",
  },
  {
    id: 118,
    question: "What is the use of the structuredClone() function?",
    answer:
      "It makes a complete copy of something, even if it has lots of layers inside.",
    syntax: "structuredClone(obj);",
    example: "const copy = structuredClone({a: {b: 1}});",
    realTimeExample:
      "Like making a perfect clone of a toy with all its moving parts and details.",
    codeExample:
      "const obj = {a: {b: 1}};\nconst copy = structuredClone(obj);\nconsole.log(copy); // {a: {b: 1}}",
  },
];

// Make data available globally
window.advanced = advanced;
