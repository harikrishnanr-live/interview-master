// PHP Advanced Level Q&A Data

let advanced = [
  {
    id: 1,
    question:
      "What is the difference between abstract classes and interfaces in PHP?",
    answer:
      "Abstract classes can contain both abstract and concrete methods, as well as properties. Interfaces can only declare method signatures (no implementation or properties). A class can implement multiple interfaces but extend only one abstract class.",
    example:
      "// Abstract Class\nabstract class Animal {\n  abstract public function makeSound();\n  public function sleep() {\n    echo 'Sleeping...';\n  }\n}\n\n// Interface\ninterface Flyable {\n  public function fly();\n}\n\nclass Bird extends Animal implements Flyable {\n  public function makeSound() {\n    echo 'Chirp';\n  }\n  public function fly() {\n    echo 'Flying...';\n  }\n}",
    realTimeExample:
      "An abstract class is like a blueprint for a house: it defines the structure (methods) and can include some built-in features (concrete methods). An interface is like a contract: it only lists what must be done (method signatures), not how to do it.",
    realTimeExample2:
      "Imagine an abstract class as a recipe with some steps already done (concrete methods), while an interface is just a list of ingredients (method signatures) you must use, but the cooking steps are up to you.",
    syntax:
      "// Abstract Class\nabstract class ClassName {\n  abstract public function method();\n  public function concreteMethod() { ... }\n}\n\n// Interface\ninterface InterfaceName {\n  public function method();\n}",
    codeExample:
      "abstract class Vehicle {\n  abstract public function start();\n  public function stop() {\n    echo 'Vehicle stopped.';\n  }\n}\n\ninterface Electric {\n  public function charge();\n}\n\nclass Tesla extends Vehicle implements Electric {\n  public function start() {\n    echo 'Tesla started silently.';\n  }\n  public function charge() {\n    echo 'Charging battery.';\n  }\n}",
  },
  {
    id: 2,
    question: "What is autoloading in PHP?",
    answer:
      "Autoloading automatically loads class files when they are first used, eliminating the need for manual include/require statements. It is implemented using spl_autoload_register.",
    example:
      "spl_autoload_register(function ($class) {\n  include 'classes/' . $class . '.php';\n});",
    realTimeExample:
      "Autoloading is like a butler: when you ask for a tool (class), the butler (autoloader) fetches it for you without you needing to know where it is stored.",
    realTimeExample2:
      "Imagine autoloading as a vending machine: you select a snack (class), and the machine (autoloader) delivers it automatically.",
    syntax: "spl_autoload_register(callable $autoload_function): bool",
    codeExample:
      "spl_autoload_register(function ($className) {\n  $file = __DIR__ . '/src/' . str_replace('\\', '/', $className) . '.php';\n  if (file_exists($file)) {\n    require $file;\n  }\n});\n\n$user = new AppModelsUser();",
  },
  {
    id: 3,
    question: "What is Composer in PHP?",
    answer:
      "Composer is a dependency management tool for PHP. It allows you to declare project dependencies, and it manages their installation and updates. It uses composer.json and composer.lock files.",
    example:
      "// composer.json\n{\n  'require': {\n    'monolog/monolog': '^2.0'\n  }\n}\n// Install dependencies:\ncomposer install",
    realTimeExample:
      "Composer is like a personal shopper: you give it a list of items (dependencies), and it fetches and organizes them for you.",
    realTimeExample2:
      "Imagine Composer as a librarian: you request books (libraries), and the librarian delivers them to your project.",
    syntax:
      "composer require vendor/package\ncomposer install\ncomposer update",
    codeExample:
      "// composer.json\n{\n  'require': {\n    'phpmailer/phpmailer': '^6.0',\n    'guzzlehttp/guzzle': '^7.0'\n  }\n}\n// Run in terminal:\ncomposer install",
  },
  {
    id: 4,
    question: "What are namespaces in PHP?",
    answer:
      "Namespaces encapsulate classes, functions, and constants to avoid name collisions and organize code logically. They are declared using the namespace keyword.",
    example:
      "namespace AppControllers;\nclass UserController { ... }\n// Usage:\nuse AppControllersUserController;\n$controller = new UserController();",
    realTimeExample:
      "Namespaces are like folders on your computer: you can have files with the same name in different folders without confusion.",
    realTimeExample2:
      "Imagine namespaces as departments in a company: each department can have an employee named John, but they are distinct individuals.",
    syntax: "namespace MyNamespace;\nuse AnotherNamespaceClassName;",
    codeExample:
      "namespace AppModels;\n\nclass User {\n  public function getName() {\n    return 'John Doe';\n  }\n}\n\n// In another file:\nuse AppModelsUser;\n$user = new User();\necho $user->getName();",
  },
  {
    id: 5,
    question: "What is the difference between GET and POST methods?",
    answer:
      "GET appends data to the URL and is less secure, suitable for retrieving data. POST sends data in the request body, making it more secure for sensitive data.",
    example:
      "// GET request (URL: example.com?name=Alice&age=25)\n$_GET['name'];\n\n// POST request (data sent in request body)\n$_POST['name'];",
    realTimeExample:
      "GET is like sending a postcard: everyone can see the message. POST is like sending a sealed letter: only the recipient can see the message.",
    realTimeExample2:
      "Imagine GET as a public announcement and POST as a private conversation.",
    syntax:
      "// HTML Form (GET)\n<form method='GET' action='process.php'>\n  <input type='text' name='name'>\n</form>\n\n// HTML Form (POST)\n<form method='POST' action='process.php'>\n  <input type='password' name='password'>\n</form>",
    codeExample:
      "// process.php (GET)\nif (isset($_GET['name'])) {\n  echo 'Hello, ' . htmlspecialchars($_GET['name']);\n}\n\n// process.php (POST)\nif (isset($_POST['password'])) {\n  // Process password securely\n}",
  },
  {
    id: 6,
    question: "What is dependency injection in PHP?",
    answer:
      "Dependency injection is a design pattern where an object receives its dependencies from an external source, promoting loose coupling and easier testing.",
    example:
      "class UserService {\n  private $logger;\n  public function __construct(Logger $logger) {\n    $this->logger = $logger;\n  }\n}\n// Usage:\n$logger = new Logger();\n$userService = new UserService($logger);",
    realTimeExample:
      "Dependency injection is like a chef receiving pre-chopped vegetables from a supplier, rather than chopping them themselves.",
    realTimeExample2:
      "Imagine dependency injection as a car receiving its engine from the factory, allowing for easy engine swaps.",
    syntax:
      "class ClassName {\n  private $dependency;\n  public function __construct(Dependency $dependency) {\n    $this->dependency = $dependency;\n  }\n}",
    codeExample:
      "interface Logger {\n  public function log(string $message);\n}\n\nclass FileLogger implements Logger {\n  public function log(string $message) {\n    file_put_contents('log.txt', $message, FILE_APPEND);\n  }\n}\n\nclass UserService {\n  private $logger;\n  public function __construct(Logger $logger) {\n    $this->logger = $logger;\n  }\n  public function createUser(string $name) {\n    $this->logger->log('User created: ' . $name);\n  }\n}\n\n$logger = new FileLogger();\n$userService = new UserService($logger);\n$userService->createUser('Alice');",
  },
  {
    id: 7,
    question: "What is the use of traits in PHP?",
    answer:
      "Traits are a mechanism for code reuse in single inheritance languages. They allow methods to be included in multiple classes without inheritance.",
    example:
      "trait Loggable {\n  public function log($message) {\n    echo 'Log: ' . $message;\n  }\n}\nclass User {\n  use Loggable;\n}\n$user = new User();\n$user->log('User created');",
    realTimeExample:
      "Traits are like mixins at an ice cream shop: you can add sprinkles to any flavor of ice cream.",
    realTimeExample2:
      "Imagine traits as plug-ins for software: you can add the same plug-in to different programs.",
    syntax:
      "trait TraitName {\n  public function method() { ... }\n}\nclass ClassName {\n  use TraitName;\n}",
    codeExample:
      "trait Serializable {\n  public function serialize() {\n    return serialize($this);\n  }\n}\n\nclass Product {\n  use Serializable;\n}\n\n$product = new Product();\necho $product->serialize();",
  },
  {
    id: 8,
    question: "What is the use of the spl_autoload_register function?",
    answer:
      "spl_autoload_register registers a custom autoloader function, which is called when a class is used but not yet loaded. It enables automatic class loading.",
    example:
      "spl_autoload_register(function ($class) {\n  include 'classes/' . $class . '.php';\n});",
    realTimeExample:
      "spl_autoload_register is like a butler who fetches the right tool when you ask for it.",
    realTimeExample2:
      "Imagine it as a vending machine: you select a snack, and the machine delivers it automatically.",
    syntax: "spl_autoload_register(callable $autoload_function): bool",
    codeExample:
      "spl_autoload_register(function ($className) {\n  $file = __DIR__ . '/src/' . str_replace('\\', '/', $className) . '.php';\n  if (file_exists($file)) {\n    require $file;\n  }\n});\n\n$user = new AppModelsUser();",
  },
  {
    id: 9,
    question: "What is the use of the ReflectionClass in PHP?",
    answer:
      "ReflectionClass allows you to reverse-engineer classes, interfaces, functions, and methods, providing information about their structure and enabling dynamic invocation.",
    example:
      "$reflection = new ReflectionClass('MyClass');\n$methods = $reflection->getMethods();\nforeach ($methods as $method) {\n  echo $method->getName();\n}",
    realTimeExample:
      "ReflectionClass is like an X-ray machine: it lets you see inside a class and examine its structure without modifying the code.",
    realTimeExample2:
      "Imagine ReflectionClass as a detective: it investigates a class and reports back all the details it finds.",
    syntax:
      "$reflection = new ReflectionClass(string $className);\n$reflection->getMethods();\n$reflection->getProperties();",
    codeExample:
      "class User {\n  private $name;\n  public function getName() {\n    return $this->name;\n  }\n}\n\n$reflection = new ReflectionClass('User');\n$properties = $reflection->getProperties();\nforeach ($properties as $property) {\n  echo $property->getName();\n}",
  },
  {
    id: 10,
    question: "What is the use of the Generator in PHP?",
    answer:
      "Generators provide a memory-efficient way to iterate over large datasets by yielding values on-the-fly, rather than loading everything into memory at once.",
    example:
      "function numberGenerator($max) {\n  for ($i = 1; $i <= $max; $i++) {\n    yield $i;\n  }\n}\nforeach (numberGenerator(10) as $number) {\n  echo $number;\n}",
    realTimeExample:
      "Generators are like a water tap: you get water as you need it, without storing all the water in a giant tank.",
    realTimeExample2:
      "Imagine a generator as a book reader: you read one page at a time, rather than loading the entire book into your mind at once.",
    syntax: "function generatorName() {\n  yield value;\n}",
    codeExample:
      "function readLargeFile($file) {\n  $handle = fopen($file, 'r');\n  while (!feof($handle)) {\n    yield fgets($handle);\n  }\n  fclose($handle);\n}\n\nforeach (readLargeFile('huge_log.txt') as $line) {\n  echo $line;\n}",
  },
  {
    id: 11,
    question: "What is the use of the __invoke magic method in PHP?",
    answer:
      "__invoke allows an object to be called as a function, enabling objects to be used as callables.",
    example:
      "class Greeter {\n  public function __invoke($name) {\n    echo 'Hello, ' . $name;\n  }\n}\n$greet = new Greeter();\n$greet('Alice');",
    realTimeExample:
      "__invoke is like a phone that can also be used as a walkie-talkie: you can call it like a function.",
    realTimeExample2:
      "Imagine __invoke as a Swiss Army knife: it's a tool, but you can also use it as a screwdriver when needed.",
    syntax: "class ClassName {\n  public function __invoke($args) { ... }\n}",
    codeExample:
      "class Adder {\n  public function __invoke($a, $b) {\n    return $a + $b;\n  }\n}\n\n$add = new Adder();\necho $add(2, 3);",
  },
  {
    id: 12,
    question:
      "What is the use of the __call and __callStatic magic methods in PHP?",
    answer:
      "__call is called when an inaccessible method is invoked on an object, while __callStatic is called for inaccessible static methods. They enable dynamic method handling.",
    example:
      "class DynamicMethods {\n  public function __call($name, $args) {\n    echo 'Called method: ' . $name;\n  }\n  public static function __callStatic($name, $args) {\n    echo 'Called static method: ' . $name;\n  }\n}\n$obj = new DynamicMethods();\n$obj->undefinedMethod();\nDynamicMethods::undefinedStaticMethod();",
    realTimeExample:
      "__call and __callStatic are like a customer service hotline: if you ask for a service that doesn't exist, the hotline handles your request.",
    realTimeExample2:
      "Imagine __call and __callStatic as a universal remote: if you press a button that isn't assigned, the remote still responds in a default way.",
    syntax:
      "class ClassName {\n  public function __call($name, $args) { ... }\n  public static function __callStatic($name, $args) { ... }\n}",
    codeExample:
      "class ApiClient {\n  public function __call($method, $args) {\n    echo 'Making API call: ' . $method;\n  }\n}\n\n$client = new ApiClient();\n$client->getUser(1);",
  },
  {
    id: 13,
    question: "What is the use of the __debugInfo magic method in PHP?",
    answer:
      "__debugInfo customizes the properties displayed when using var_dump() on an object, allowing you to control what debug information is exposed.",
    example:
      "class User {\n  private $password;\n  public function __debugInfo() {\n    return ['username' => $this->username];\n  }\n}\n$user = new User();\nvar_dump($user);",
    realTimeExample:
      "__debugInfo is like a privacy filter: you choose what information to share when someone asks for your details.",
    realTimeExample2:
      "Imagine __debugInfo as a resume: you only include the relevant details you want the employer to see.",
    syntax:
      "class ClassName {\n  public function __debugInfo() {\n    return ['property1' => $this->property1];\n  }\n}",
    codeExample:
      "class Product {\n  private $price;\n  public function __debugInfo() {\n    return ['name' => $this->name];\n  }\n}\n\n$product = new Product();\n$product->name = 'Laptop';\nvar_dump($product);",
  },
  {
    id: 14,
    question: "What is the use of the __clone magic method in PHP?",
    answer:
      "__clone customizes the cloning process when an object is cloned using the clone keyword, allowing you to copy properties that would otherwise be shared.",
    example:
      "class User {\n  public $name;\n  public function __clone() {\n    $this->name = 'Copy of ' . $this->name;\n  }\n}\n$user1 = new User();\n$user1->name = 'Alice';\n$user2 = clone $user1;\necho $user2->name;",
    realTimeExample:
      "__clone is like a photocopier: you can add a stamp to the copy to distinguish it from the original.",
    realTimeExample2:
      "Imagine __clone as a twin: you can give the twin a unique name or feature to tell them apart from the original.",
    syntax:
      "class ClassName {\n  public function __clone() {\n    // Custom cloning logic\n  }\n}",
    codeExample:
      "class DatabaseConnection {\n  private $connection;\n  public function __construct() {\n    $this->connection = 'Connected';\n  }\n  public function __clone() {\n    $this->connection = 'New Connection';\n  }\n}\n\n$conn1 = new DatabaseConnection();\n$conn2 = clone $conn1;\necho $conn2->connection;",
  },
  {
    id: 15,
    question:
      "What is the use of the __serialize and __unserialize magic methods in PHP?",
    answer:
      "__serialize and __unserialize customize the serialization and unserialization of objects, allowing you to control what data is included and how it is restored.",
    example:
      "class User {\n  private $password;\n  public function __serialize(): array {\n    return ['username' => $this->username];\n  }\n  public function __unserialize(array $data): void {\n    $this->username = $data['username'];\n  }\n}\n$user = new User();\n$user->username = 'Alice';\n$serialized = serialize($user);\n$unserialized = unserialize($serialized);",
    realTimeExample:
      "__serialize and __unserialize are like packing and unpacking a suitcase: you choose what to pack and how to unpack, ensuring only the necessary items are included.",
    realTimeExample2:
      "Imagine __serialize as creating a backup of your phone: you select what to back up and exclude private files.",
    syntax:
      "class ClassName {\n  public function __serialize(): array { ... }\n  public function __unserialize(array $data): void { ... }\n}",
    codeExample:
      "class SecureUser {\n  private $password;\n  public function __serialize(): array {\n    return ['username' => $this->username];\n  }\n  public function __unserialize(array $data): void {\n    $this->username = $data['username'];\n  }\n}\n\n$user = new SecureUser();\n$user->username = 'Alice';\n$serialized = serialize($user);\n$unserialized = unserialize($serialized);",
  },
  {
    id: 16,
    question: "What is the use of the __toString magic method in PHP?",
    answer:
      "__toString allows a class to define how it will be represented as a string, such as when using echo or print.",
    example:
      "class User {\n  public function __toString() {\n    return 'User: ' . $this->name;\n  }\n}\n$user = new User();\n$user->name = 'Alice';\necho $user;",
    realTimeExample:
      "__toString is like a business card: when someone asks who you are, you hand them your card with your details.",
    realTimeExample2:
      "Imagine __toString as a name tag: when you introduce yourself, people see your name tag instead of just seeing you.",
    syntax:
      "class ClassName {\n  public function __toString() {\n    return 'string representation';\n  }\n}",
    codeExample:
      "class Book {\n  public $title;\n  public function __toString() {\n    return 'Book: ' . $this->title;\n  }\n}\n\n$book = new Book();\n$book->title = 'PHP for Beginners';\necho $book;",
  },
  {
    id: 17,
    question: "What is the use of the __get and __set magic methods in PHP?",
    answer:
      "__get is called when accessing an inaccessible property, and __set is called when setting an inaccessible property. They enable dynamic property handling.",
    example:
      "class User {\n  private $data = [];\n  public function __get($name) {\n    return $this->data[$name] ?? null;\n  }\n  public function __set($name, $value) {\n    $this->data[$name] = $value;\n  }\n}\n$user = new User();\n$user->name = 'Alice';\necho $user->name;",
    realTimeExample:
      "__get and __set are like a receptionist: when you ask for something or give something, the receptionist handles the request.",
    realTimeExample2:
      "Imagine __get and __set as a smart assistant: when you ask for a file or save a file, the assistant finds or stores it for you.",
    syntax:
      "class ClassName {\n  public function __get($name) { ... }\n  public function __set($name, $value) { ... }\n}",
    codeExample:
      "class DynamicObject {\n  private $properties = [];\n  public function __get($name) {\n    return $this->properties[$name] ?? null;\n  }\n  public function __set($name, $value) {\n    $this->properties[$name] = $value;\n  }\n}\n\n$obj = new DynamicObject();\n$obj->color = 'red';\necho $obj->color;",
  },
  {
    id: 18,
    question:
      "What is the use of the __isset and __unset magic methods in PHP?",
    answer:
      "__isset is called when isset() is used on an inaccessible property, and __unset is called when unset() is used on an inaccessible property. They allow you to customize the behavior of these functions.",
    example:
      "class User {\n  private $data = [];\n  public function __isset($name) {\n    return isset($this->data[$name]);\n  }\n  public function __unset($name) {\n    unset($this->data[$name]);\n  }\n}\n$user = new User();\n$user->name = 'Alice';\nisset($user->name); // true\nunset($user->name);",
    realTimeExample:
      "__isset and __unset are like a security guard: when you check if something exists or try to remove it, the guard verifies and handles the request.",
    realTimeExample2:
      "Imagine __isset and __unset as a file manager: when you check for a file or delete it, the manager ensures the action is performed correctly.",
    syntax:
      "class ClassName {\n  public function __isset($name) { ... }\n  public function __unset($name) { ... }\n}",
    codeExample:
      "class DynamicObject {\n  private $properties = [];\n  public function __isset($name) {\n    return isset($this->properties[$name]);\n  }\n  public function __unset($name) {\n    unset($this->properties[$name]);\n  }\n}\n\n$obj = new DynamicObject();\n$obj->color = 'red';\nisset($obj->color); // true\nunset($obj->color);",
  },
  {
    id: 19,
    question:
      "What is the use of the __sleep and __wakeup magic methods in PHP?",
    answer:
      "__sleep is called before serialization and allows you to specify which properties should be serialized. __wakeup is called after unserialization and allows you to restore resources or perform other tasks.",
    example:
      "class User {\n  private $password;\n  public function __sleep() {\n    return ['username'];\n  }\n  public function __wakeup() {\n    $this->password = '';\n  }\n}\n$user = new User();\n$user->username = 'Alice';\n$serialized = serialize($user);\n$unserialized = unserialize($serialized);",
    realTimeExample:
      "__sleep and __wakeup are like packing and unpacking for a trip: you choose what to pack (__sleep) and what to do when you arrive (__wakeup).",
    realTimeExample2:
      "Imagine __sleep as creating a backup and __wakeup as restoring from backup, ensuring everything is set up correctly.",
    syntax:
      "class ClassName {\n  public function __sleep() {\n    return ['property1', 'property2'];\n  }\n  public function __wakeup() { ... }\n}",
    codeExample:
      "class SecureUser {\n  private $password;\n  public function __sleep() {\n    return ['username'];\n  }\n  public function __wakeup() {\n    $this->password = '';\n  }\n}\n\n$user = new SecureUser();\n$user->username = 'Alice';\n$serialized = serialize($user);\n$unserialized = unserialize($serialized);",
  },
  {
    id: 20,
    question: "What is the use of the __set_state magic method in PHP?",
    answer:
      "__set_state is a static method called when var_export() is used on an object. It allows you to customize how the object is reconstructed from its exported state.",
    example:
      "class User {\n  public $username;\n  public static function __set_state(array $properties) {\n    $user = new User();\n    $user->username = $properties['username'];\n    return $user;\n  }\n}\n$user = new User();\n$user->username = 'Alice';\n$exported = var_export($user, true);\neval('$reconstructed = ' . $exported . ';');",
    realTimeExample:
      "__set_state is like a blueprint: it defines how to rebuild an object from its exported parts, ensuring everything is set up correctly.",
    realTimeExample2:
      "Imagine __set_state as a recipe: it tells you how to recreate a dish (object) from its ingredients (exported properties).",
    syntax:
      "class ClassName {\n  public static function __set_state(array $properties) {\n    $object = new ClassName();\n    // Set properties\n    return $object;\n  }\n}",
    codeExample:
      "class Product {\n  public $name;\n  public static function __set_state(array $properties) {\n    $product = new Product();\n    $product->name = $properties['name'];\n    return $product;\n  }\n}\n\n$product = new Product();\n$product->name = 'Laptop';\n$exported = var_export($product, true);\neval('$reconstructed = ' . $exported . ';');",
  },
  {
    id: 21,
    question: "What is the use of the __destruct magic method in PHP?",
    answer:
      "__destruct is called when an object is destroyed or the script ends. It allows you to perform cleanup tasks, such as closing database connections or releasing resources.",
    example:
      "class Database {\n  public function __destruct() {\n    echo 'Closing database connection.';\n  }\n}\n$db = new Database();\n// Script ends, __destruct is called",
    realTimeExample:
      "__destruct is like a cleanup crew: when the event (script) is over, the crew (method) cleans up and closes everything properly.",
    realTimeExample2:
      "Imagine __destruct as a shutdown routine: when you turn off your computer (script ends), it performs tasks like saving files and closing programs (cleanup).",
    syntax: "class ClassName {\n  public function __destruct() { ... }\n}",
    codeExample:
      "class FileHandler {\n  private $file;\n  public function __construct($filename) {\n    $this->file = fopen($filename, 'r');\n  }\n  public function __destruct() {\n    if ($this->file) {\n      fclose($this->file);\n    }\n  }\n}\n\n$handler = new FileHandler('data.txt');",
  },
  {
    id: 22,
    question: "What is the use of the __callStatic magic method in PHP?",
    answer:
      "__callStatic is called when an inaccessible or non-existent static method is invoked. It enables dynamic handling of static method calls.",
    example:
      "class DynamicMethods {\n  public static function __callStatic($name, $args) {\n    echo 'Called static method: ' . $name;\n  }\n}\nDynamicMethods::undefinedStaticMethod();",
    realTimeExample:
      "__callStatic is like a customer service hotline for static methods: if you ask for a service that doesn't exist, the hotline handles your request.",
    realTimeExample2:
      "Imagine __callStatic as a universal remote for static methods: if you press a button that isn't assigned, the remote still responds in a default way.",
    syntax:
      "class ClassName {\n  public static function __callStatic($name, $args) { ... }\n}",
    codeExample:
      "class ApiClient {\n  public static function __callStatic($method, $args) {\n    echo 'Making static API call: ' . $method;\n  }\n}\n\nApiClient::getUser(1);",
  },
  {
    id: 23,
    question: "What is the use of the __debugInfo magic method in PHP?",
    answer:
      "__debugInfo customizes the properties displayed when using var_dump() on an object, allowing you to control what debug information is exposed.",
    example:
      "class User {\n  private $password;\n  public function __debugInfo() {\n    return ['username' => $this->username];\n  }\n}\n$user = new User();\nvar_dump($user);",
    realTimeExample:
      "__debugInfo is like a privacy filter: you choose what information to share when someone asks for your details.",
    realTimeExample2:
      "Imagine __debugInfo as a resume: you only include the relevant details you want the employer to see.",
    syntax:
      "class ClassName {\n  public function __debugInfo() {\n    return ['property1' => $this->property1];\n  }\n}",
    codeExample:
      "class Product {\n  private $price;\n  public function __debugInfo() {\n    return ['name' => $this->name];\n  }\n}\n\n$product = new Product();\n$product->name = 'Laptop';\nvar_dump($product);",
  },
  {
    id: 24,
    question: "What is the use of the __clone magic method in PHP?",
    answer:
      "__clone customizes the cloning process when an object is cloned using the clone keyword, allowing you to copy properties that would otherwise be shared.",
    example:
      "class User {\n  public $name;\n  public function __clone() {\n    $this->name = 'Copy of ' . $this->name;\n  }\n}\n$user1 = new User();\n$user1->name = 'Alice';\n$user2 = clone $user1;\necho $user2->name;",
    realTimeExample:
      "__clone is like a photocopier: you can add a stamp to the copy to distinguish it from the original.",
    realTimeExample2:
      "Imagine __clone as a twin: you can give the twin a unique name or feature to tell them apart from the original.",
    syntax:
      "class ClassName {\n  public function __clone() {\n    // Custom cloning logic\n  }\n}",
    codeExample:
      "class DatabaseConnection {\n  private $connection;\n  public function __construct() {\n    $this->connection = 'Connected';\n  }\n  public function __clone() {\n    $this->connection = 'New Connection';\n  }\n}\n\n$conn1 = new DatabaseConnection();\n$conn2 = clone $conn1;\necho $conn2->connection;",
  },
  {
    id: 25,
    question:
      "What is the use of the __serialize and __unserialize magic methods in PHP?",
    answer:
      "__serialize and __unserialize customize the serialization and unserialization of objects, allowing you to control what data is included and how it is restored.",
    example:
      "class User {\n  private $password;\n  public function __serialize(): array {\n    return ['username' => $this->username];\n  }\n  public function __unserialize(array $data): void {\n    $this->username = $data['username'];\n  }\n}\n$user = new User();\n$user->username = 'Alice';\n$serialized = serialize($user);\n$unserialized = unserialize($serialized);",
    realTimeExample:
      "__serialize and __unserialize are like packing and unpacking a suitcase: you choose what to pack and how to unpack, ensuring only the necessary items are included.",
    realTimeExample2:
      "Imagine __serialize as creating a backup of your phone: you select what to back up and exclude private files.",
    syntax:
      "class ClassName {\n  public function __serialize(): array { ... }\n  public function __unserialize(array $data): void { ... }\n}",
    codeExample:
      "class SecureUser {\n  private $password;\n  public function __serialize(): array {\n    return ['username' => $this->username];\n  }\n  public function __unserialize(array $data): void {\n    $this->username = $data['username'];\n  }\n}\n\n$user = new SecureUser();\n$user->username = 'Alice';\n$serialized = serialize($user);\n$unserialized = unserialize($serialized);",
  },
  {
    id: 26,
    question: "What is the use of the __toString magic method in PHP?",
    answer:
      "__toString allows a class to define how it will be represented as a string, such as when using echo or print.",
    example:
      "class User {\n  public function __toString() {\n    return 'User: ' . $this->name;\n  }\n}\n$user = new User();\n$user->name = 'Alice';\necho $user;",
    realTimeExample:
      "__toString is like a business card: when someone asks who you are, you hand them your card with your details.",
    realTimeExample2:
      "Imagine __toString as a name tag: when you introduce yourself, people see your name tag instead of just seeing you.",
    syntax:
      "class ClassName {\n  public function __toString() {\n    return 'string representation';\n  }\n}",
    codeExample:
      "class Book {\n  public $title;\n  public function __toString() {\n    return 'Book: ' . $this->title;\n  }\n}\n\n$book = new Book();\n$book->title = 'PHP for Beginners';\necho $book;",
  },
  {
    id: 27,
    question: "What is the use of the __get and __set magic methods in PHP?",
    answer:
      "__get is called when accessing an inaccessible property, and __set is called when setting an inaccessible property. They enable dynamic property handling.",
    example:
      "class User {\n  private $data = [];\n  public function __get($name) {\n    return $this->data[$name] ?? null;\n  }\n  public function __set($name, $value) {\n    $this->data[$name] = $value;\n  }\n}\n$user = new User();\n$user->name = 'Alice';\necho $user->name;",
    realTimeExample:
      "__get and __set are like a receptionist: when you ask for something or give something, the receptionist handles the request.",
    realTimeExample2:
      "Imagine __get and __set as a smart assistant: when you ask for a file or save a file, the assistant finds or stores it for you.",
    syntax:
      "class ClassName {\n  public function __get($name) { ... }\n  public function __set($name, $value) { ... }\n}",
    codeExample:
      "class DynamicObject {\n  private $properties = [];\n  public function __get($name) {\n    return $this->properties[$name] ?? null;\n  }\n  public function __set($name, $value) {\n    $this->properties[$name] = $value;\n  }\n}\n\n$obj = new DynamicObject();\n$obj->color = 'red';\necho $obj->color;",
  },
  {
    id: 28,
    question:
      "What is the use of the __isset and __unset magic methods in PHP?",
    answer:
      "__isset is called when isset() is used on an inaccessible property, and __unset is called when unset() is used on an inaccessible property. They allow you to customize the behavior of these functions.",
    example:
      "class User {\n  private $data = [];\n  public function __isset($name) {\n    return isset($this->data[$name]);\n  }\n  public function __unset($name) {\n    unset($this->data[$name]);\n  }\n}\n$user = new User();\n$user->name = 'Alice';\nisset($user->name); // true\nunset($user->name);",
    realTimeExample:
      "__isset and __unset are like a security guard: when you check if something exists or try to remove it, the guard verifies and handles the request.",
    realTimeExample2:
      "Imagine __isset and __unset as a file manager: when you check for a file or delete it, the manager ensures the action is performed correctly.",
    syntax:
      "class ClassName {\n  public function __isset($name) { ... }\n  public function __unset($name) { ... }\n}",
    codeExample:
      "class DynamicObject {\n  private $properties = [];\n  public function __isset($name) {\n    return isset($this->properties[$name]);\n  }\n  public function __unset($name) {\n    unset($this->properties[$name]);\n  }\n}\n\n$obj = new DynamicObject();\n$obj->color = 'red';\nisset($obj->color); // true\nunset($obj->color);",
  },
  {
    id: 29,
    question:
      "What is the use of the __sleep and __wakeup magic methods in PHP?",
    answer:
      "__sleep is called before serialization and allows you to specify which properties should be serialized. __wakeup is called after unserialization and allows you to restore resources or perform other tasks.",
    example:
      "class User {\n  private $password;\n  public function __sleep() {\n    return ['username'];\n  }\n  public function __wakeup() {\n    $this->password = '';\n  }\n}\n$user = new User();\n$user->username = 'Alice';\n$serialized = serialize($user);\n$unserialized = unserialize($serialized);",
    realTimeExample:
      "__sleep and __wakeup are like packing and unpacking for a trip: you choose what to pack (__sleep) and what to do when you arrive (__wakeup).",
    realTimeExample2:
      "Imagine __sleep as creating a backup and __wakeup as restoring from backup, ensuring everything is set up correctly.",
    syntax:
      "class ClassName {\n  public function __sleep() {\n    return ['property1', 'property2'];\n  }\n  public function __wakeup() { ... }\n}",
    codeExample:
      "class SecureUser {\n  private $password;\n  public function __sleep() {\n    return ['username'];\n  }\n  public function __wakeup() {\n    $this->password = '';\n  }\n}\n\n$user = new SecureUser();\n$user->username = 'Alice';\n$serialized = serialize($user);\n$unserialized = unserialize($serialized);",
  },
  {
    id: 30,
    question: "What is the use of the __set_state magic method in PHP?",
    answer:
      "__set_state is a static method called when var_export() is used on an object. It allows you to customize how the object is reconstructed from its exported state.",
    example:
      "class User {\n  public $username;\n  public static function __set_state(array $properties) {\n    $user = new User();\n    $user->username = $properties['username'];\n    return $user;\n  }\n}\n$user = new User();\n$user->username = 'Alice';\n$exported = var_export($user, true);\neval('$reconstructed = ' . $exported . ';');",
    realTimeExample:
      "__set_state is like a blueprint: it defines how to rebuild an object from its exported parts, ensuring everything is set up correctly.",
    realTimeExample2:
      "Imagine __set_state as a recipe: it tells you how to recreate a dish (object) from its ingredients (exported properties).",
    syntax:
      "class ClassName {\n  public static function __set_state(array $properties) {\n    $object = new ClassName();\n    // Set properties\n    return $object;\n  }\n}",
    codeExample:
      "class Product {\n  public $name;\n  public static function __set_state(array $properties) {\n    $product = new Product();\n    $product->name = $properties['name'];\n    return $product;\n  }\n}\n\n$product = new Product();\n$product->name = 'Laptop';\n$exported = var_export($product, true);\neval('$reconstructed = ' . $exported . ';');",
  },
  {
    id: 31,
    question: "What is the use of the __destruct magic method in PHP?",
    answer:
      "__destruct is called when an object is destroyed or the script ends. It allows you to perform cleanup tasks, such as closing database connections or releasing resources.",
    example:
      "class Database {\n  public function __destruct() {\n    echo 'Closing database connection.';\n  }\n}\n$db = new Database();\n// Script ends, __destruct is called",
    realTimeExample:
      "__destruct is like a cleanup crew: when the event (script) is over, the crew (method) cleans up and closes everything properly.",
    realTimeExample2:
      "Imagine __destruct as a shutdown routine: when you turn off your computer (script ends), it performs tasks like saving files and closing programs (cleanup).",
    syntax: "class ClassName {\n  public function __destruct() { ... }\n}",
    codeExample:
      "class FileHandler {\n  private $file;\n  public function __construct($filename) {\n    $this->file = fopen($filename, 'r');\n  }\n  public function __destruct() {\n    if ($this->file) {\n      fclose($this->file);\n    }\n  }\n}\n\n$handler = new FileHandler('data.txt');",
  },
  {
    id: 32,
    question: "What is the use of the __callStatic magic method in PHP?",
    answer:
      "__callStatic is called when an inaccessible or non-existent static method is invoked. It enables dynamic handling of static method calls.",
    example:
      "class DynamicMethods {\n  public static function __callStatic($name, $args) {\n    echo 'Called static method: ' . $name;\n  }\n}\nDynamicMethods::undefinedStaticMethod();",
    realTimeExample:
      "__callStatic is like a customer service hotline for static methods: if you ask for a service that doesn't exist, the hotline handles your request.",
    realTimeExample2:
      "Imagine __callStatic as a universal remote for static methods: if you press a button that isn't assigned, the remote still responds in a default way.",
    syntax:
      "class ClassName {\n  public static function __callStatic($name, $args) { ... }\n}",
    codeExample:
      "class ApiClient {\n  public static function __callStatic($method, $args) {\n    echo 'Making static API call: ' . $method;\n  }\n}\n\nApiClient::getUser(1);",
  },
  {
    id: 33,
    question: "What is the use of the __debugInfo magic method in PHP?",
    answer:
      "__debugInfo customizes the properties displayed when using var_dump() on an object, allowing you to control what debug information is exposed.",
    example:
      "class User {\n  private $password;\n  public function __debugInfo() {\n    return ['username' => $this->username];\n  }\n}\n$user = new User();\nvar_dump($user);",
    realTimeExample:
      "__debugInfo is like a privacy filter: you choose what information to share when someone asks for your details.",
    realTimeExample2:
      "Imagine __debugInfo as a resume: you only include the relevant details you want the employer to see.",
    syntax:
      "class ClassName {\n  public function __debugInfo() {\n    return ['property1' => $this->property1];\n  }\n}",
    codeExample:
      "class Product {\n  private $price;\n  public function __debugInfo() {\n    return ['name' => $this->name];\n  }\n}\n\n$product = new Product();\n$product->name = 'Laptop';\nvar_dump($product);",
  },
  {
    id: 34,
    question: "What is the use of the __clone magic method in PHP?",
    answer:
      "__clone customizes the cloning process when an object is cloned using the clone keyword, allowing you to copy properties that would otherwise be shared.",
    example:
      "class User {\n  public $name;\n  public function __clone() {\n    $this->name = 'Copy of ' . $this->name;\n  }\n}\n$user1 = new User();\n$user1->name = 'Alice';\n$user2 = clone $user1;\necho $user2->name;",
    realTimeExample:
      "__clone is like a photocopier: you can add a stamp to the copy to distinguish it from the original.",
    realTimeExample2:
      "Imagine __clone as a twin: you can give the twin a unique name or feature to tell them apart from the original.",
    syntax:
      "class ClassName {\n  public function __clone() {\n    // Custom cloning logic\n  }\n}",
    codeExample:
      "class DatabaseConnection {\n  private $connection;\n  public function __construct() {\n    $this->connection = 'Connected';\n  }\n  public function __clone() {\n    $this->connection = 'New Connection';\n  }\n}\n\n$conn1 = new DatabaseConnection();\n$conn2 = clone $conn1;\necho $conn2->connection;",
  },
  {
    id: 35,
    question:
      "What is the use of the __serialize and __unserialize magic methods in PHP?",
    answer:
      "__serialize and __unserialize customize the serialization and unserialization of objects, allowing you to control what data is included and how it is restored.",
    example:
      "class User {\n  private $password;\n  public function __serialize(): array {\n    return ['username' => $this->username];\n  }\n  public function __unserialize(array $data): void {\n    $this->username = $data['username'];\n  }\n}\n$user = new User();\n$user->username = 'Alice';\n$serialized = serialize($user);\n$unserialized = unserialize($serialized);",
    realTimeExample:
      "__serialize and __unserialize are like packing and unpacking a suitcase: you choose what to pack and how to unpack, ensuring only the necessary items are included.",
    realTimeExample2:
      "Imagine __serialize as creating a backup of your phone: you select what to back up and exclude private files.",
    syntax:
      "class ClassName {\n  public function __serialize(): array { ... }\n  public function __unserialize(array $data): void { ... }\n}",
    codeExample:
      "class SecureUser {\n  private $password;\n  public function __serialize(): array {\n    return ['username' => $this->username];\n  }\n  public function __unserialize(array $data): void {\n    $this->username = $data['username'];\n  }\n}\n\n$user = new SecureUser();\n$user->username = 'Alice';\n$serialized = serialize($user);\n$unserialized = unserialize($serialized);",
  },
  {
    id: 36,
    question: "What is the use of the __toString magic method in PHP?",
    answer:
      "__toString allows a class to define how it will be represented as a string, such as when using echo or print.",
    example:
      "class User {\n  public function __toString() {\n    return 'User: ' . $this->name;\n  }\n}\n$user = new User();\n$user->name = 'Alice';\necho $user;",
    realTimeExample:
      "__toString is like a business card: when someone asks who you are, you hand them your card with your details.",
    realTimeExample2:
      "Imagine __toString as a name tag: when you introduce yourself, people see your name tag instead of just seeing you.",
    syntax:
      "class ClassName {\n  public function __toString() {\n    return 'string representation';\n  }\n}",
    codeExample:
      "class Book {\n  public $title;\n  public function __toString() {\n    return 'Book: ' . $this->title;\n  }\n}\n\n$book = new Book();\n$book->title = 'PHP for Beginners';\necho $book;",
  },
  {
    id: 37,
    question: "What is the use of the __get and __set magic methods in PHP?",
    answer:
      "__get is called when accessing an inaccessible property, and __set is called when setting an inaccessible property. They enable dynamic property handling.",
    example:
      "class User {\n  private $data = [];\n  public function __get($name) {\n    return $this->data[$name] ?? null;\n  }\n  public function __set($name, $value) {\n    $this->data[$name] = $value;\n  }\n}\n$user = new User();\n$user->name = 'Alice';\necho $user->name;",
    realTimeExample:
      "__get and __set are like a receptionist: when you ask for something or give something, the receptionist handles the request.",
    realTimeExample2:
      "Imagine __get and __set as a smart assistant: when you ask for a file or save a file, the assistant finds or stores it for you.",
    syntax:
      "class ClassName {\n  public function __get($name) { ... }\n  public function __set($name, $value) { ... }\n}",
    codeExample:
      "class DynamicObject {\n  private $properties = [];\n  public function __get($name) {\n    return $this->properties[$name] ?? null;\n  }\n  public function __set($name, $value) {\n    $this->properties[$name] = $value;\n  }\n}\n\n$obj = new DynamicObject();\n$obj->color = 'red';\necho $obj->color;",
  },
  {
    id: 38,
    question:
      "What is the use of the __isset and __unset magic methods in PHP?",
    answer:
      "__isset is called when isset() is used on an inaccessible property, and __unset is called when unset() is used on an inaccessible property. They allow you to customize the behavior of these functions.",
    example:
      "class User {\n  private $data = [];\n  public function __isset($name) {\n    return isset($this->data[$name]);\n  }\n  public function __unset($name) {\n    unset($this->data[$name]);\n  }\n}\n$user = new User();\n$user->name = 'Alice';\nisset($user->name); // true\nunset($user->name);",
    realTimeExample:
      "__isset and __unset are like a security guard: when you check if something exists or try to remove it, the guard verifies and handles the request.",
    realTimeExample2:
      "Imagine __isset and __unset as a file manager: when you check for a file or delete it, the manager ensures the action is performed correctly.",
    syntax:
      "class ClassName {\n  public function __isset($name) { ... }\n  public function __unset($name) { ... }\n}",
    codeExample:
      "class DynamicObject {\n  private $properties = [];\n  public function __isset($name) {\n    return isset($this->properties[$name]);\n  }\n  public function __unset($name) {\n    unset($this->properties[$name]);\n  }\n}\n\n$obj = new DynamicObject();\n$obj->color = 'red';\nisset($obj->color); // true\nunset($obj->color);",
  },
  {
    id: 39,
    question:
      "What is the use of the __sleep and __wakeup magic methods in PHP?",
    answer:
      "__sleep is called before serialization and allows you to specify which properties should be serialized. __wakeup is called after unserialization and allows you to restore resources or perform other tasks.",
    example:
      "class User {\n  private $password;\n  public function __sleep() {\n    return ['username'];\n  }\n  public function __wakeup() {\n    $this->password = '';\n  }\n}\n$user = new User();\n$user->username = 'Alice';\n$serialized = serialize($user);\n$unserialized = unserialize($serialized);",
    realTimeExample:
      "__sleep and __wakeup are like packing and unpacking for a trip: you choose what to pack (__sleep) and what to do when you arrive (__wakeup).",
    realTimeExample2:
      "Imagine __sleep as creating a backup and __wakeup as restoring from backup, ensuring everything is set up correctly.",
    syntax:
      "class ClassName {\n  public function __sleep() {\n    return ['property1', 'property2'];\n  }\n  public function __wakeup() { ... }\n}",
    codeExample:
      "class SecureUser {\n  private $password;\n  public function __sleep() {\n    return ['username'];\n  }\n  public function __wakeup() {\n    $this->password = '';\n  }\n}\n\n$user = new SecureUser();\n$user->username = 'Alice';\n$serialized = serialize($user);\n$unserialized = unserialize($serialized);",
  },
  {
    id: 40,
    question: "What is the use of the __set_state magic method in PHP?",
    answer:
      "__set_state is a static method called when var_export() is used on an object. It allows you to customize how the object is reconstructed from its exported state.",
    example:
      "class User {\n  public $username;\n  public static function __set_state(array $properties) {\n    $user = new User();\n    $user->username = $properties['username'];\n    return $user;\n  }\n}\n$user = new User();\n$user->username = 'Alice';\n$exported = var_export($user, true);\neval('$reconstructed = ' . $exported . ';');",
    realTimeExample:
      "__set_state is like a blueprint: it defines how to rebuild an object from its exported parts, ensuring everything is set up correctly.",
    realTimeExample2:
      "Imagine __set_state as a recipe: it tells you how to recreate a dish (object) from its ingredients (exported properties).",
    syntax:
      "class ClassName {\n  public static function __set_state(array $properties) {\n    $object = new ClassName();\n    // Set properties\n    return $object;\n  }\n}",
    codeExample:
      "class Product {\n  public $name;\n  public static function __set_state(array $properties) {\n    $product = new Product();\n    $product->name = $properties['name'];\n    return $product;\n  }\n}\n\n$product = new Product();\n$product->name = 'Laptop';\n$exported = var_export($product, true);\neval('$reconstructed = ' . $exported . ';');",
  },
];

// Make data available globally
window.advanced = advanced;
