// PHP Beginner Level Q&A Data

let beginner = [
  {
    id: 1,
    question: "What is PHP?",
    answer:
      "PHP (Hypertext Preprocessor) is a server-side scripting language designed for web development and can be embedded into HTML.",
    example: "<?php echo 'Hello, World!'; ?>",
    realTimeExample:
      "PHP is like a chef in a restaurant kitchen (server). When you order food (request a webpage), the chef prepares it (PHP processes the script) and serves it to you (sends HTML to your browser).",
    realTimeExample2:
      "Imagine PHP as a translator: it takes your instructions (code), talks to the database and server, and delivers the result (webpage) in a language your browser understands (HTML).",
    syntax: "<?php ... ?>",
    codeExample: "<?php\necho 'Hello, World!';\n?>",
  },
  {
    id: 2,
    question: "What are the different types of variables in PHP?",
    answer:
      "PHP supports several data types: strings, integers, floats, booleans, arrays, objects, NULL, and resources.",
    example:
      "$name = 'Alice'; $age = 25; $isStudent = true; $prices = [1.99, 2.49];",
    realTimeExample:
      "Think of variables as labeled boxes: $name is a box with a name tag, $age is a box with a number, and $isStudent is a box with a yes/no card.",
    realTimeExample2:
      "Like a grocery list: $name is the item, $age is the quantity, $isStudent is a checkbox for 'on sale'.",
    syntax: "$variableName = value;",
    codeExample: "$username = 'john_doe';\n$score = 95.5;\n$isActive = false;",
  },
  {
    id: 3,
    question: "What is the difference between == and === in PHP?",
    answer:
      "== compares values after type coercion, while === compares both value and type (strict comparison).",
    example: "5 == '5' // true\n5 === '5' // false",
    realTimeExample:
      "== is like saying 'both are apples' (even if one is a real apple and the other is a plastic apple). === is like saying 'both are real apples'.",
    realTimeExample2:
      "== checks if two boxes have the same number of items, regardless of the box type. === checks if both the number and the box type are identical.",
    syntax: "$a == $b; // loose comparison\n$a === $b; // strict comparison",
    codeExample:
      "if ($num == '10') { echo 'Loose match!'; }\nif ($num === 10) { echo 'Strict match!'; }",
  },
  {
    id: 4,
    question: "What are superglobals in PHP?",
    answer:
      "Superglobals are built-in variables that are always available in all scopes: $_GET, $_POST, $_SESSION, $_COOKIE, $_SERVER, $_FILES, $_ENV, $_REQUEST.",
    example:
      "echo $_SERVER['SERVER_NAME']; // outputs the server's domain name",
    realTimeExample:
      "Superglobals are like global toolboxes in a workshop. No matter where you are, you can always access the same set of tools ($_GET, $_POST, etc.).",
    realTimeExample2:
      "Imagine superglobals as public bulletin boards in a school: everyone can read and post notices ($_SESSION, $_COOKIE) no matter which classroom they're in.",
    syntax: "$_GET['param'], $_POST['param'], etc.",
    codeExample:
      "if (isset($_GET['id'])) {\n  echo 'ID is: ' . $_GET['id'];\n}",
  },
  {
    id: 5,
    question: "What is the difference between include and require in PHP?",
    answer:
      "Both include files, but require produces a fatal error if the file is not found, while include only produces a warning.",
    example:
      "include 'header.php'; // continues if file missing\nrequire 'header.php'; // stops if file missing",
    realTimeExample:
      "include is like inviting a friend to a party: if they don't show up, the party goes on. require is like needing the DJ: if they don't show, the party is canceled.",
    realTimeExample2:
      "include is like a recipe suggestion: if you don't have an ingredient, you can still cook. require is like a must-have ingredient: without it, the dish is ruined.",
    syntax: "include 'file.php'; or require 'file.php';",
    codeExample: "include 'config.php';\n// vs.\nrequire 'config.php';",
  },
  {
    id: 6,
    question: "How do you declare a variable in PHP?",
    answer:
      "Variables in PHP are declared using the $ symbol followed by the variable name, e.g., $name = 'John';. PHP is loosely typed, so you don't need to specify the data type.",
    example: "$name = 'John'; $age = 30;",
    realTimeExample:
      "Declaring a variable is like putting a label on a box. The box ($name) can hold anything, and you can change what's inside later.",
    realTimeExample2:
      "Like writing a name on a sticky note and placing it on a file folder. The folder can hold any type of document, and you can update the contents anytime.",
    syntax: "$variableName = value;",
    codeExample: "$username = 'jane_doe';\n$score = 100;",
  },
  {
    id: 7,
    question: "What is the echo statement used for in PHP?",
    answer:
      "The echo statement is used to output text or variables to the browser. It can output strings, numbers, and HTML. For example, echo 'Hello World';",
    example: "echo 'Hello, World!';",
    realTimeExample:
      "echo is like a loudspeaker: whatever you say into it is broadcasted to everyone in the room (the browser).",
    realTimeExample2:
      "Imagine echo as a printer: it takes your text or variable and prints it on the webpage.",
    syntax: "echo 'text';\necho $variable;",
    codeExample: "$greeting = 'Hello';\necho $greeting, ' World!';",
  },
  {
    id: 8,
    question: "How do you create comments in PHP?",
    answer:
      "Single-line comments use // or #, and multi-line comments use /* */. Comments are ignored by the PHP interpreter and are used for code documentation.",
    example:
      "// This is a single-line comment\n# This is also a single-line comment\n/* This is a\n   multi-line comment */",
    realTimeExample:
      "Comments are like sticky notes on your code: they help you remember why you wrote something, but the computer ignores them.",
    realTimeExample2:
      "Think of comments as stage directions in a play script: they guide the actors (developers) but are not spoken aloud (executed).",
    syntax: "// comment\n# comment\n/* comment */",
    codeExample:
      "// Calculate total price\n$total = $price * $quantity;\n/*\n  This function validates user input\n  and returns true if valid.\n*/",
  },
  {
    id: 9,
    question: "What are arrays in PHP?",
    answer:
      "Arrays are used to store multiple values in a single variable. They can be indexed arrays, associative arrays, or multidimensional. Example: $fruits = array('apple', 'banana');",
    example: "$fruits = ['apple', 'banana', 'cherry'];",
    realTimeExample:
      "An array is like a fruit basket: you can put many fruits (values) in one basket (variable), and each fruit has its own spot (index or key).",
    realTimeExample2:
      "Imagine an array as a bookshelf: each book (value) has a specific position (index) or label (key).",
    syntax:
      "$array = ['value1', 'value2'];\n$array = ['key1' => 'value1', 'key2' => 'value2'];",
    codeExample:
      "$colors = ['red', 'green', 'blue'];\n$person = ['name' => 'Alice', 'age' => 25];",
  },
  {
    id: 10,
    question: "How do you loop through an array in PHP?",
    answer:
      "You can use a foreach loop: foreach ($array as $value) { echo $value; }. For indexed arrays, you can also use for loops with count($array).",
    example: "foreach ($fruits as $fruit) { echo $fruit; }",
    realTimeExample:
      "Looping through an array is like going through a stack of pancakes one by one, doing something with each pancake (value).",
    realTimeExample2:
      "Imagine you have a playlist (array): foreach is like playing each song (value) in order.",
    syntax:
      "foreach ($array as $value) { ... }\nfor ($i = 0; $i < count($array); $i++) { ... }",
    codeExample:
      "$numbers = [1, 2, 3];\nforeach ($numbers as $num) {\n  echo $num;\n}",
  },
  {
    id: 11,
    question: "What is a function in PHP?",
    answer:
      "A function is a block of code that performs a specific task and can be reused. Functions help organize code and make it modular.",
    example: "function greet() { echo 'Hello!'; }",
    realTimeExample:
      "A function is like a vending machine: you put in something (input/parameters), press a button (call the function), and get something out (output/return value).",
    realTimeExample2:
      "Think of a function as a recipe: you follow the steps (code) with given ingredients (parameters) to make a dish (result).",
    syntax: "function functionName($param1, $param2) { ... }",
    codeExample:
      "function add($a, $b) {\n  return $a + $b;\n}\necho add(2, 3); // outputs 5",
  },
  {
    id: 12,
    question: "How do you define a function in PHP?",
    answer:
      "Use the function keyword: function myFunction($param) { // code here }. Functions can take parameters and return values using the return statement.",
    example: "function add($a, $b) { return $a + $b; }",
    realTimeExample:
      "Defining a function is like writing a step-by-step guide: you name it (function name), list what you need (parameters), and describe the steps (code).",
    realTimeExample2:
      "Imagine defining a function as programming a robot: you give it a name, tell it what inputs to expect, and what to do with them.",
    syntax: "function name($param) { return value; }",
    codeExample:
      "function greet($name) {\n  return 'Hello, ' . $name;\n}\necho greet('Alice');",
  },
  {
    id: 13,
    question: "What is the difference between GET and POST methods in PHP?",
    answer:
      "GET sends data via URL parameters, visible and limited in size. POST sends data in the request body, hidden and can handle larger data, used for forms.",
    example:
      "// GET: URL looks like page.php?name=John\n// POST: Data is sent in the request body, not visible in URL",
    realTimeExample:
      "GET is like sending a postcard: everyone can see the message (data in URL). POST is like sending a sealed letter: only the recipient sees the message (data in request body).",
    realTimeExample2:
      "GET is like ordering food at a counter where everyone hears your order. POST is like writing your order on a slip and handing it to the cashier.",
    syntax: "<form method='get' ...> or <form method='post' ...>",
    codeExample:
      "<form method='post' action='process.php'>\n  <input type='text' name='username'>\n</form>",
  },
  {
    id: 14,
    question: "How do you connect to a MySQL database in PHP?",
    answer:
      "Use mysqli_connect(): $conn = mysqli_connect('host', 'username', 'password', 'database');. Always handle connection errors.",
    example:
      "$conn = mysqli_connect('localhost', 'root', '', 'mydb'); if (!$conn) { die('Connection failed'); }",
    realTimeExample:
      "Connecting to a database is like calling a friend on the phone: you need the right number (host), their name (username), and a secret code (password) to start talking (querying).",
    realTimeExample2:
      "Imagine it as logging into your email: you need the server address, your username, and password to access your messages (data).",
    syntax: "$conn = mysqli_connect('host', 'user', 'pass', 'db');",
    codeExample:
      "$link = mysqli_connect('localhost', 'my_user', 'my_password', 'my_db');\nif (!$link) {\n  die('Connect Error: ' . mysqli_connect_error());\n}",
  },
  {
    id: 15,
    question: "What is a session in PHP?",
    answer:
      "Sessions store user data across multiple pages. Start with session_start(), store data in $_SESSION array, and access it on other pages.",
    example:
      "session_start(); $_SESSION['user'] = 'Alice'; // later, echo $_SESSION['user'];",
    realTimeExample:
      "A session is like a shopping cart: you add items (data) as you browse (visit pages), and the cart (session) keeps track of everything until you check out (end session).",
    realTimeExample2:
      "Think of a session as a library card: it remembers which books (data) you've checked out (stored) no matter which section (page) of the library you're in.",
    syntax: "session_start();\n$_SESSION['key'] = value;",
    codeExample:
      "session_start();\n$_SESSION['loggedin'] = true;\n// On another page:\nif ($_SESSION['loggedin']) { echo 'Welcome back!'; }",
  },
  {
    id: 16,
    question: "What are constants in PHP?",
    answer:
      "Constants are identifiers for values that cannot be changed. Defined using define() function, e.g., define('PI', 3.14);. Accessed without $ symbol.",
    example: "define('PI', 3.14159); echo PI;",
    realTimeExample:
      "A constant is like a tattoo: once you put it there (define it), it doesn't change. You can always see it (access it), but you can't alter it.",
    realTimeExample2:
      "Imagine a constant as a speed limit sign: the number is always the same, no matter who looks at it or how many times.",
    syntax: "define('NAME', value);",
    codeExample:
      "define('SITE_NAME', 'MyWebsite');\necho SITE_NAME; // outputs 'MyWebsite'",
  },
  {
    id: 17,
    question: "How do you check if a variable is set in PHP?",
    answer:
      "Use isset() function: if (isset($var)) { // code }. It returns true if the variable is declared and not null.",
    example: "if (isset($name)) { echo 'Name is set!'; }",
    realTimeExample:
      "isset() is like checking if a seat at a table is occupied: if someone is sitting there (variable is set), you know it's taken.",
    realTimeExample2:
      "Think of isset() as checking if a light switch is on: if it's on (variable is set), the light is available (can be used).",
    syntax: "isset($variable);",
    codeExample:
      "$username = 'Alice';\nif (isset($username)) {\n  echo 'Username is set.';\n}",
  },
  {
    id: 18,
    question: "What is the difference between if and switch statements?",
    answer:
      "if checks conditions sequentially, switch compares a value against multiple cases. Switch is better for many conditions on the same variable.",
    example:
      "// if\nif ($day == 'Mon') { ... }\n// switch\nswitch ($day) { case 'Mon': ... break; }",
    realTimeExample:
      "if is like asking a series of yes/no questions to find the right door. switch is like a revolving door with labels: you go directly to the right section based on your label (value).",
    realTimeExample2:
      "if is like flipping through a menu item by item. switch is like a menu with tabs: you go straight to the tab (case) you want.",
    syntax: "if (condition) { ... }\nswitch ($var) { case val: ... break; }",
    codeExample:
      "$grade = 'A';\nswitch ($grade) {\n  case 'A': echo 'Excellent!'; break;\n  case 'B': echo 'Good!'; break;\n}",
  },
  {
    id: 19,
    question: "How do you concatenate strings in PHP?",
    answer:
      "Use the . operator: $full = $first . ' ' . $last;. Or use double quotes with variables: \"$first $last\".",
    example: "$fullName = $firstName . ' ' . $lastName;",
    realTimeExample:
      "Concatenation is like linking train cars: each car (string) is connected with a coupler (.) to form a longer train (combined string).",
    realTimeExample2:
      "Imagine concatenation as making a bead necklace: you string beads (words) together with a thread (.) to make a complete necklace (sentence).",
    syntax: '$str1 . $str2\n"$var1 $var2"',
    codeExample:
      "$greeting = 'Hello';\n$name = 'Alice';\necho $greeting . ', ' . $name;",
  },
  {
    id: 20,
    question: "What are PHP operators?",
    answer:
      "Operators perform operations: arithmetic (+, -, *, /), comparison (==, ===, >), logical (&&, ||, !), assignment (=, +=).",
    example:
      "$sum = $a + $b; // arithmetic\n$isEqual = ($a == $b); // comparison",
    realTimeExample:
      "Operators are like tools in a toolbox: + is a hammer (adds things together), == is a measuring tape (checks if things are equal), && is a connector (links conditions).",
    realTimeExample2:
      "Think of operators as kitchen tools: + is a mixing bowl (combines ingredients), === is a scale (checks exact weight), ! is a 'not' sign (inverts the recipe).",
    syntax: "$a + $b, $a == $b, $a && $b, etc.",
    codeExample:
      "$x = 10;\n$y = 5;\n$sum = $x + $y; // 15\n$isGreater = ($x > $y); // true",
  },
  {
    id: 21,
    question: "How do you handle errors in PHP?",
    answer:
      "Use try-catch for exceptions, or check return values. Enable error reporting with error_reporting(E_ALL);.",
    example:
      "try { // risky code } catch (Exception $e) { echo $e->getMessage(); }",
    realTimeExample:
      "Error handling is like having a safety net at a circus: if something goes wrong (exception), the net (catch) is there to prevent a disaster.",
    realTimeExample2:
      "Think of error handling as a spell check: it catches mistakes (errors) and suggests fixes (error messages).",
    syntax: "try { ... } catch (Exception $e) { ... }\nerror_reporting(E_ALL);",
    codeExample:
      "error_reporting(E_ALL);\ntry {\n  $result = 10 / 0;\n} catch (Exception $e) {\n  echo 'Error: ' . $e->getMessage();\n}",
  },
  {
    id: 22,
    question: "What is a cookie in PHP?",
    answer:
      "Cookies store data on the client. Set with setcookie(), retrieve from $_COOKIE. Used for user preferences or sessions.",
    example: "setcookie('user', 'Alice', time() + 3600); // expires in 1 hour",
    realTimeExample:
      "A cookie is like a loyalty card: the store (server) gives you a card (cookie) with your preferences, and you bring it back (send cookie) on your next visit.",
    realTimeExample2:
      "Imagine a cookie as a bookmark: the library (server) gives you a bookmark (cookie) to remember your page (preferences), and you bring it back next time.",
    syntax: "setcookie('name', 'value', $expire);\n$_COOKIE['name']",
    codeExample:
      "setcookie('theme', 'dark', time() + 86400);\nif (isset($_COOKIE['theme'])) {\n  echo 'Theme: ' . $_COOKIE['theme'];\n}",
  },
  {
    id: 23,
    question: "How do you read a file in PHP?",
    answer:
      "Use fopen() to open, fread() or fgets() to read, fclose() to close. Or file_get_contents() for simple reading.",
    example: "$content = file_get_contents('file.txt');",
    realTimeExample:
      "Reading a file is like opening a book: you open it (fopen), read the pages (fread), and close it (fclose) when done.",
    realTimeExample2:
      "Imagine reading a file as watching a movie: you start the film (fopen), watch the scenes (fread), and turn it off (fclose) at the end.",
    syntax:
      "$file = fopen('file.txt', 'r');\n$content = fread($file, filesize('file.txt'));\nfclose($file);",
    codeExample: "$data = file_get_contents('data.txt');\necho $data;",
  },
  {
    id: 24,
    question: "What is the date() function used for?",
    answer:
      "Formats a timestamp into a readable date string. Example: echo date('Y-m-d'); outputs current date.",
    example: "echo date('l, F j, Y'); // outputs 'Tuesday, October 14, 2025'",
    realTimeExample:
      "date() is like asking a clock for the time: you can ask for the time in different formats (analog, digital, 12-hour, 24-hour).",
    realTimeExample2:
      "Imagine date() as a calendar: you can ask it to show you the date in different styles (day/month/year, month/day/year, etc.).",
    syntax: "date('format');",
    codeExample:
      "echo date('H:i:s'); // outputs current time, e.g., '14:30:45'",
  },
  {
    id: 25,
    question: "How do you create a form in PHP?",
    answer:
      "Use HTML <form> tag with method='post' or 'get', input fields, and submit button. Process in PHP with $_POST or $_GET.",
    example:
      "<form method='post' action='process.php'><input type='text' name='username'><input type='submit'></form>",
    realTimeExample:
      "Creating a form is like making a survey: you write questions (input fields), give options (radio buttons, checkboxes), and collect answers (submit button).",
    realTimeExample2:
      "Imagine a form as a mailbox: you provide slots (input fields) for letters (data), and a flag (submit button) to notify the postman (server) to pick them up.",
    syntax: "<form method='post' action='script.php'> ... </form>",
    codeExample:
      "<form method='post' action='welcome.php'>\n  <input type='text' name='name'>\n  <input type='submit' value='Submit'>\n</form>",
  },
  {
    id: 26,
    question: "What is an associative array?",
    answer:
      "Arrays with named keys: $person = array('name' => 'John', 'age' => 30);. Access with $person['name'].",
    example:
      "$person = ['name' => 'Alice', 'age' => 25]; echo $person['name'];",
    realTimeExample:
      "An associative array is like a phone's contact list: each contact (value) has a name (key) for easy lookup.",
    realTimeExample2:
      "Imagine an associative array as a menu: each dish (value) has a name (key) for ordering.",
    syntax: "$array = ['key1' => 'value1', 'key2' => 'value2'];",
    codeExample:
      "$user = ['id' => 1, 'email' => 'user@example.com'];\necho $user['email'];",
  },
  {
    id: 27,
    question: "How do you sort an array in PHP?",
    answer:
      "Use sort() for indexed, asort() for associative, ksort() for keys. Example: sort($array); sorts in ascending order.",
    example: "$numbers = [3, 1, 4]; sort($numbers); // [1, 3, 4]",
    realTimeExample:
      "Sorting an array is like organizing a bookshelf: you can arrange books by size (sort), by title (asort), or by color (ksort).",
    realTimeExample2:
      "Imagine sorting as arranging a deck of cards: you can sort by number (sort), by suit (asort), or by both (ksort).",
    syntax: "sort($array);\nasort($array);\nksort($array);",
    codeExample:
      "$fruits = ['banana', 'apple', 'cherry'];\nsort($fruits);\n// $fruits is now ['apple', 'banana', 'cherry']",
  },
  {
    id: 28,
    question: "What is a class in PHP?",
    answer:
      "A blueprint for objects. Defined with class keyword, contains properties and methods. Example: class Car { public $color; }",
    example: "class Car { public $color; }",
    realTimeExample:
      "A class is like a blueprint for a house: it defines what rooms (properties) and features (methods) the house will have, but it's not a house itself (object).",
    realTimeExample2:
      "Imagine a class as a cookie cutter: it defines the shape (properties and methods), but you need dough (object) to make actual cookies.",
    syntax: "class ClassName { public $property; }",
    codeExample:
      "class Person {\n  public $name;\n  public function greet() {\n    return 'Hello, ' . $this->name;\n  }\n}",
  },
  {
    id: 29,
    question: "How do you create an object in PHP?",
    answer:
      "Use new keyword: $car = new Car();. Then access properties: $car->color = 'red';",
    example: "$car = new Car(); $car->color = 'red';",
    realTimeExample:
      "Creating an object is like building a house from a blueprint (class): you follow the plan to make a real house (object).",
    realTimeExample2:
      "Imagine creating an object as baking a cake from a recipe (class): you gather ingredients (properties) and follow steps (methods) to make a cake (object).",
    syntax: "$object = new ClassName();\n$object->property = value;",
    codeExample:
      "$person = new Person();\n$person->name = 'Alice';\necho $person->greet();",
  },
  {
    id: 30,
    question: "What is inheritance in PHP?",
    answer:
      "A class can inherit properties and methods from another using extends. Child class gets parent's features.",
    example: "class Child extends Parent { }",
    realTimeExample:
      "Inheritance is like a family tree: a child (child class) inherits traits (properties/methods) from their parents (parent class).",
    realTimeExample2:
      "Imagine inheritance as a franchise: each new store (child class) gets the brand's recipes and decor (parent class features), but can add its own specials.",
    syntax: "class ChildClass extends ParentClass { }",
    codeExample:
      "class Animal {\n  public function eat() { echo 'Eating...'; }\n}\nclass Dog extends Animal {\n  public function bark() { echo 'Bark!'; }\n}",
  },
  {
    id: 31,
    question: "How do you use the for loop in PHP?",
    answer:
      "for ($i = 0; $i < 10; $i++) { echo $i; }. Initializes, checks condition, increments each iteration.",
    example: "for ($i = 1; $i <= 5; $i++) { echo $i; } // outputs 12345",
    realTimeExample:
      "A for loop is like counting steps as you climb stairs: you start at the first step (initialize), check if you've reached the top (condition), and move to the next step (increment).",
    realTimeExample2:
      "Imagine a for loop as a music playlist: you start at the first song (initialize), check if the playlist is over (condition), and move to the next song (increment).",
    syntax: "for ($i = start; $i < end; $i++) { ... }",
    codeExample: "for ($x = 0; $x < 10; $x++) {\n  echo 'Number: ' . $x;\n}",
  },
  {
    id: 32,
    question: "What is the while loop?",
    answer:
      "Executes code while condition is true: while ($x < 10) { $x++; }. Check condition before each iteration.",
    example: "$i = 1; while ($i <= 5) { echo $i; $i++; } // outputs 12345",
    realTimeExample:
      "A while loop is like waiting for a bus: you keep checking (condition) if the bus has arrived, and you keep waiting (loop) until it does.",
    realTimeExample2:
      "Imagine a while loop as a game of musical chairs: the music plays (condition is true) and you keep walking (loop) until the music stops (condition is false).",
    syntax: "while (condition) { ... }",
    codeExample:
      "$count = 0;\nwhile ($count < 3) {\n  echo 'Count: ' . $count;\n  $count++;\n}",
  },
  {
    id: 33,
    question: "How do you break out of a loop?",
    answer:
      "Use break; to exit the loop immediately. Use continue; to skip the current iteration and proceed to the next.",
    example:
      "for ($i = 0; $i < 10; $i++) { if ($i == 5) break; echo $i; } // outputs 01234",
    realTimeExample:
      "break is like an emergency exit: you leave the building (loop) immediately. continue is like skipping a song: you move to the next track (iteration).",
    realTimeExample2:
      "Imagine break as pressing the stop button on a DVD: the movie (loop) ends right away. continue is like pressing next: you skip to the next chapter (iteration).",
    syntax: "break;\ncontinue;",
    codeExample:
      "for ($i = 0; $i < 10; $i++) {\n  if ($i == 5) break;\n  echo $i;\n}",
  },
  {
    id: 34,
    question: "What is a multidimensional array?",
    answer:
      "An array containing other arrays. Example: $matrix = array(array(1,2), array(3,4)); Access with $matrix[0][1].",
    example: "$matrix = [[1, 2], [3, 4]]; echo $matrix[0][1]; // outputs 2",
    realTimeExample:
      "A multidimensional array is like a spreadsheet: you have rows and columns, and you can access any cell by its row and column number.",
    realTimeExample2:
      "Imagine a multidimensional array as a building with floors and rooms: you can find any room by its floor number and room number.",
    syntax: "$array = [[val1, val2], [val3, val4]];",
    codeExample:
      "$students = [\n  ['name' => 'Alice', 'age' => 20],\n  ['name' => 'Bob', 'age' => 22]\n];\necho $students[0]['name']; // outputs 'Alice'",
  },
  {
    id: 35,
    question: "How do you check the length of an array?",
    answer:
      "Use count() function: echo count($array);. Returns the number of elements in the array.",
    example: "$fruits = ['apple', 'banana']; echo count($fruits); // outputs 2",
    realTimeExample:
      "count() is like counting the number of eggs in a carton: you open the carton (array) and count how many eggs (elements) are inside.",
    realTimeExample2:
      "Imagine count() as checking the number of songs in a playlist: you look at the list (array) and see how many songs (elements) it contains.",
    syntax: "count($array);",
    codeExample:
      "$colors = ['red', 'green', 'blue'];\necho count($colors); // outputs 3",
  },
  {
    id: 36,
    question: "What is the explode() function?",
    answer:
      "Splits a string into an array by a delimiter. Example: $parts = explode(' ', 'Hello World'); results in ['Hello', 'World'].",
    example:
      "$words = explode(' ', 'Hello World'); // $words is ['Hello', 'World']",
    realTimeExample:
      "explode() is like cutting a cake into slices: you use a knife (delimiter) to separate the cake (string) into pieces (array elements).",
    realTimeExample2:
      "Imagine explode() as splitting a sentence into words: you use spaces (delimiter) to separate the words (array elements).",
    syntax: "explode('delimiter', 'string');",
    codeExample:
      "$data = 'apple,banana,cherry';\n$fruits = explode(',', $data);\n// $fruits is ['apple', 'banana', 'cherry']",
  },
  {
    id: 37,
    question: "What is the implode() function?",
    answer:
      "Joins array elements into a string with a glue. Example: $string = implode(', ', $array);.",
    example:
      "$fruits = ['apple', 'banana']; $list = implode(', ', $fruits); // 'apple, banana'",
    realTimeExample:
      "implode() is like stringing beads into a necklace: you use a thread (glue) to connect the beads (array elements) into a single necklace (string).",
    realTimeExample2:
      "Imagine implode() as making a sentence from words: you use spaces (glue) to connect the words (array elements) into a sentence (string).",
    syntax: "implode('glue', $array);",
    codeExample:
      "$colors = ['red', 'green', 'blue'];\n$colorString = implode('-', $colors);\n// $colorString is 'red-green-blue'",
  },
  {
    id: 38,
    question: "How do you handle file uploads in PHP?",
    answer:
      "Use <input type='file'> in form, enctype='multipart/form-data'. Access in PHP via $_FILES array, move with move_uploaded_file().",
    example:
      "<form enctype='multipart/form-data' method='post'><input type='file' name='file'><input type='submit'></form>",
    realTimeExample:
      "Handling file uploads is like receiving mail: the user sends a package (file), you check the label ($_FILES), and then put it in the right mailbox (move_uploaded_file).",
    realTimeExample2:
      "Imagine file uploads as a photo booth: the user takes a photo (selects a file), the booth (form) sends it to the printer (server), and you get a printout (saved file).",
    syntax:
      "<form enctype='multipart/form-data' ...>\nmove_uploaded_file($_FILES['file']['tmp_name'], 'target/path');",
    codeExample:
      "if (isset($_FILES['file'])) {\n  move_uploaded_file($_FILES['file']['tmp_name'], 'uploads/' . $_FILES['file']['name']);\n}",
  },
  {
    id: 39,
    question: "What is the difference between die() and exit()?",
    answer:
      "Both terminate script execution. die() is an alias for exit(), can output a message: die('Error message');",
    example: "if (!$file) { die('File not found!'); }",
    realTimeExample:
      "die() and exit() are like emergency stop buttons: pressing either one stops the machine (script) immediately. die() can also announce why the machine stopped (error message).",
    realTimeExample2:
      "Imagine die() and exit() as pulling the plug on a computer: the program stops right away. die() can also display a message (like a note saying 'out of order').",
    syntax: "die('message');\nexit('message');",
    codeExample: "$file = fopen('data.txt', 'r') or die('Cannot open file!');",
  },
  {
    id: 40,
    question: "How do you redirect in PHP?",
    answer:
      "Use header('Location: newpage.php'); before any output. Must be called before HTML or echo statements.",
    example: "header('Location: welcome.php');",
    realTimeExample:
      "Redirecting is like giving someone directions: you tell them (header) where to go (newpage.php) before they start walking (output is sent).",
    realTimeExample2:
      "Imagine a redirect as a detour sign: you put up the sign (header) before any cars (output) start moving, so they know where to go (new page).",
    syntax: "header('Location: page.php');",
    codeExample:
      "if (!$loggedIn) {\n  header('Location: login.php');\n  exit;\n}",
  },
  {
    id: 41,
    question: "What is the rand() function?",
    answer:
      "Generates a random integer. Example: rand(1, 100); returns a number between 1 and 100.",
    example: "$random = rand(1, 10); // $random is a number between 1 and 10",
    realTimeExample:
      "rand() is like rolling a dice: you get a random number within the dice's range (e.g., 1-6).",
    realTimeExample2:
      "Imagine rand() as a lottery machine: it picks a random number from a set range (e.g., 1-100).",
    syntax: "rand($min, $max);",
    codeExample: "$diceRoll = rand(1, 6);\necho 'You rolled: ' . $diceRoll;",
  },
  {
    id: 42,
    question: "How do you define a default parameter in a function?",
    answer:
      "function greet($name = 'Guest') { echo 'Hello ' . $name; }. If no argument passed, uses default value.",
    example: "function sayHello($name = 'Guest') { echo 'Hello, ' . $name; }",
    realTimeExample:
      "Default parameters are like a restaurant's daily special: if you don't order anything (pass an argument), you get the special (default value).",
    realTimeExample2:
      "Imagine default parameters as a default ringtone: if you don't set a custom one (pass an argument), your phone uses the default (default value).",
    syntax: "function name($param = defaultValue) { ... }",
    codeExample:
      "function welcome($user = 'Visitor') {\n  echo 'Welcome, ' . $user;\n}\nwelcome(); // outputs 'Welcome, Visitor'",
  },
  {
    id: 43,
    question: "What is the scope of a variable in PHP?",
    answer:
      "Variables have local scope by default. Use global keyword to access global variables inside functions.",
    example:
      "$globalVar = 'I am global'; function test() { global $globalVar; echo $globalVar; }",
    realTimeExample:
      "Variable scope is like rooms in a house: a local variable is only known in its room (function), while a global variable is known throughout the house (script).",
    realTimeExample2:
      "Imagine scope as a school: a local variable is only known in its classroom (function), while a global variable is announced over the PA system (entire script).",
    syntax: "global $variable;",
    codeExample:
      "$outside = 'Global';\nfunction show() {\n  global $outside;\n  echo $outside;\n}",
  },
  {
    id: 44,
    question: "How do you use the ternary operator?",
    answer:
      "$result = ($condition) ? 'true value' : 'false value';. Shorthand for if-else.",
    example: "$status = ($age >= 18) ? 'Adult' : 'Minor';",
    realTimeExample:
      "The ternary operator is like a traffic light: if the light is green (condition is true), you go (true value); if red (false), you stop (false value).",
    realTimeExample2:
      "Imagine the ternary operator as a coin flip: heads (true) you get a prize (true value), tails (false) you get a consolation (false value).",
    syntax: "$var = (condition) ? trueValue : falseValue;",
    codeExample:
      "$score = 85;\n$grade = ($score >= 80) ? 'A' : 'B';\necho $grade; // outputs 'A'",
  },
  {
    id: 45,
    question: "What is the strpos() function?",
    answer:
      "Finds the position of a substring. Example: strpos('Hello World', 'World'); returns 6. Returns false if not found.",
    example: "$position = strpos('Hello World', 'World'); // $position is 6",
    realTimeExample:
      "strpos() is like finding a word in a book: you look for the word (substring) and note the page number (position) where it appears.",
    realTimeExample2:
      "Imagine strpos() as a treasure hunt: you search for a clue (substring) and mark its location (position) on the map (string).",
    syntax: "strpos($haystack, $needle);",
    codeExample:
      "$text = 'Find me';\n$pos = strpos($text, 'me');\nif ($pos !== false) {\n  echo 'Found at position: ' . $pos;\n}",
  },
  {
    id: 46,
    question: "How do you convert a string to lowercase?",
    answer:
      "Use strtolower(): $lower = strtolower('HELLO'); results in 'hello'.",
    example: "$lowercase = strtolower('HELLO WORLD'); // 'hello world'",
    realTimeExample:
      "strtolower() is like using a steamroller on uppercase letters: it flattens them (converts) to lowercase.",
    realTimeExample2:
      "Imagine strtolower() as a translator: it converts SHOUTING (UPPERCASE) into normal speech (lowercase).",
    syntax: "strtolower($string);",
    codeExample:
      "$upper = 'PHP IS FUN';\necho strtolower($upper); // outputs 'php is fun'",
  },
  {
    id: 47,
    question: "What is the trim() function?",
    answer:
      "Removes whitespace from beginning and end of string. Example: trim('  hello  '); becomes 'hello'.",
    example: "$clean = trim('  hello  '); // $clean is 'hello'",
    realTimeExample:
      "trim() is like trimming the edges of a piece of paper: you remove the extra (whitespace) to make it neat.",
    realTimeExample2:
      "Imagine trim() as tidying up a room: you remove the clutter (whitespace) from the edges (start/end) to make the room (string) look clean.",
    syntax: "trim($string);",
    codeExample:
      "$input = '  user  ';\n$username = trim($input);\necho $username; // outputs 'user'",
  },
  {
    id: 48,
    question: "How do you check if a string contains a substring?",
    answer:
      "Use strpos() !== false: if (strpos($haystack, $needle) !== false) { // found }.",
    example: "if (strpos('Hello World', 'World') !== false) { echo 'Found!'; }",
    realTimeExample:
      "Checking for a substring is like searching for a word in a word search puzzle: you scan the puzzle (string) for the word (substring).",
    realTimeExample2:
      "Imagine it as looking for a friend in a crowd: you scan the crowd (string) for your friend's face (substring).",
    syntax: "strpos($string, $substring) !== false",
    codeExample:
      "$text = 'Learn PHP';\nif (strpos($text, 'PHP') !== false) {\n  echo 'PHP found!';\n}",
  },
  {
    id: 49,
    question: "What is the difference between print and echo?",
    answer:
      "Both output text, but echo is slightly faster and can take multiple arguments. print returns 1, echo doesn't.",
    example:
      "echo 'Hello', ' ', 'World!'; // outputs 'Hello World!'\n$result = print 'Hello'; // $result is 1",
    realTimeExample:
      "echo is like a loudspeaker: you can say multiple things at once (multiple arguments). print is like a walkie-talkie: you say one thing at a time and get a confirmation (returns 1).",
    realTimeExample2:
      "Imagine echo as a bulletin board: you can pin up multiple notices (arguments) at once. print is like a receipt: you get a confirmation (return value) after printing one thing.",
    syntax: "echo 'text';\nprint 'text';",
    codeExample:
      "echo 'Welcome', ' ', 'user!';\n// vs.\nprint 'Welcome user!';",
  },
  {
    id: 50,
    question: "How do you get the current timestamp?",
    answer: "Use time(): echo time(); returns seconds since Unix epoch.",
    example:
      "$timestamp = time(); echo $timestamp; // outputs current Unix timestamp",
    realTimeExample:
      "time() is like asking a stopwatch for the current time: it tells you how many seconds have passed since a fixed starting point (Unix epoch).",
    realTimeExample2:
      "Imagine time() as a mileage counter: it shows how many miles (seconds) you've traveled since the car (Unix epoch) was first driven.",
    syntax: "time();",
    codeExample: "$now = time();\necho 'Current timestamp: ' . $now;",
  },
  {
    id: 51,
    question: "What is the use of the array_push() function?",
    answer:
      "array_push() adds one or more elements to the end of an array. It returns the new number of elements in the array.",
    example:
      "$fruits = ['apple', 'banana']; array_push($fruits, 'orange', 'mango'); // $fruits now has 4 elements.",
    realTimeExample:
      "Think of array_push() as adding new books to the end of a bookshelf. The shelf (array) grows as you add more books (elements).",
    realTimeExample2:
      "Like a queue at a ticket counter, array_push() adds new people (elements) to the end of the line (array).",
    syntax: "array_push($array, $value1, $value2, ...);",
    codeExample:
      "$stack = ['a', 'b']; array_push($stack, 'c', 'd'); // $stack is now ['a', 'b', 'c', 'd']",
  },
  {
    id: 52,
    question: "How do you remove an element from an array?",
    answer:
      "Use unset() to remove an element by its key, or array_pop() to remove the last element.",
    example:
      "$colors = ['red', 'green', 'blue']; unset($colors[1]); // removes 'green'",
    realTimeExample:
      "Removing an element with unset() is like taking a specific book off a shelf, while array_pop() is like taking the last book from the end.",
    realTimeExample2:
      "Like deleting a specific contact from your phone (unset) or deleting the last message in a chat (array_pop).",
    syntax: "unset($array[$key]); or $last = array_pop($array);",
    codeExample:
      "$fruits = ['apple', 'banana', 'cherry']; unset($fruits[0]); // removes 'apple'",
  },
  {
    id: 53,
    question: "What is the use of the array_merge() function?",
    answer:
      "array_merge() combines two or more arrays into one. If keys are the same, the later value overwrites the previous.",
    example:
      "$a1 = [1, 2]; $a2 = [3, 4]; $result = array_merge($a1, $a2); // [1, 2, 3, 4]",
    realTimeExample:
      "array_merge() is like combining two decks of cards into one big deck.",
    realTimeExample2:
      "Like merging two playlists into one, with duplicates being overwritten by the last occurrence.",
    syntax: "$newArray = array_merge($array1, $array2, ...);",
    codeExample:
      "$arr1 = ['a', 'b']; $arr2 = ['c', 'd']; $merged = array_merge($arr1, $arr2);",
  },
  {
    id: 54,
    question: "How do you check if a key exists in an array?",
    answer:
      "Use array_key_exists() or isset() to check if a key is present in an array.",
    example:
      "$person = ['name' => 'Alice', 'age' => 25]; if (array_key_exists('name', $person)) { echo 'Name exists!'; }",
    realTimeExample:
      "Checking if a key exists is like looking for a specific drawer label in a cabinet.",
    realTimeExample2:
      "Like checking if a student's name is on the class attendance sheet.",
    syntax: "array_key_exists($key, $array); or isset($array[$key]);",
    codeExample:
      "$data = ['user' => 'John']; if (isset($data['user'])) { echo 'User found!'; }",
  },
  {
    id: 55,
    question: "What is the use of the header() function?",
    answer:
      "header() sends a raw HTTP header to the browser. It must be called before any output is sent.",
    example:
      "header('Content-Type: text/plain'); // tells browser to expect plain text",
    realTimeExample:
      "header() is like a traffic cop directing cars (HTTP requests) to the right lane (response type).",
    realTimeExample2:
      "Like a receptionist telling visitors (browsers) where to go (what kind of data to expect).",
    syntax: "header('Header-Name: value');",
    codeExample: "header('Location: welcome.php'); // redirects to welcome.php",
  },
  {
    id: 56,
    question: "How do you start and destroy a session in PHP?",
    answer: "Start with session_start(), and destroy with session_destroy().",
    example:
      "session_start(); $_SESSION['user'] = 'Alice'; // later, session_destroy();",
    realTimeExample:
      "Starting a session is like getting a library card, and destroying it is like returning the card and all borrowed books.",
    realTimeExample2:
      "Like logging into a website (session_start) and logging out (session_destroy).",
    syntax: "session_start(); ... session_destroy();",
    codeExample:
      "session_start(); $_SESSION['loggedin'] = true; // ... session_destroy();",
  },
  {
    id: 57,
    question: "What is the use of the empty() function?",
    answer:
      "empty() checks if a variable is empty (false, 0, '', null, array(), etc.).",
    example: "$name = ''; if (empty($name)) { echo 'Name is empty!'; }",
    realTimeExample:
      "empty() is like checking if a glass is empty before pouring a drink.",
    realTimeExample2:
      "Like checking if a shopping cart is empty before checkout.",
    syntax: "empty($variable);",
    codeExample:
      "$input = ''; if (empty($input)) { echo 'Please enter a value.'; }",
  },
  {
    id: 58,
    question: "How do you include a PHP file only once?",
    answer:
      "Use include_once or require_once to include a file only if it hasn't been included before.",
    example:
      "include_once 'config.php'; // includes config.php only once, even if called multiple times",
    realTimeExample:
      "include_once is like making sure you only add salt to your food once, no matter how many times you pick up the shaker.",
    realTimeExample2:
      "Like ensuring a library book is only checked out once, even if requested multiple times.",
    syntax: "include_once 'file.php'; or require_once 'file.php';",
    codeExample:
      "require_once 'database.php'; // ensures database.php is loaded only once",
  },
  {
    id: 59,
    question: "What is the use of the in_array() function?",
    answer: "in_array() checks if a value exists in an array.",
    example:
      "$colors = ['red', 'green', 'blue']; if (in_array('green', $colors)) { echo 'Found!'; }",
    realTimeExample:
      "in_array() is like searching for a specific color in a box of crayons.",
    realTimeExample2:
      "Like checking if a song is in your playlist before adding it again.",
    syntax: "in_array($needle, $haystack);",
    codeExample:
      "$fruits = ['apple', 'banana']; if (in_array('apple', $fruits)) { echo 'Apple is here!'; }",
  },
  {
    id: 60,
    question: "How do you get the type of a variable?",
    answer: "Use gettype() to get the type of a variable as a string.",
    example: "$num = 42; echo gettype($num); // outputs 'integer'",
    realTimeExample:
      "gettype() is like asking what kind of fruit you have—apple, orange, or banana.",
    realTimeExample2:
      "Like checking the label on a box to see if it contains books, toys, or clothes.",
    syntax: "gettype($variable);",
    codeExample: "$value = 3.14; echo gettype($value); // outputs 'double'",
  },
];

// Make data available globally
window.beginner = beginner;
