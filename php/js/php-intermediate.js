let intermediate = [
  // ... (your existing 20 questions)
  {
    id: 21,
    question: "What is the difference between include and require in PHP?",
    answer:
      "Both include and require are used to include files, but require will cause a fatal error and stop script execution if the file is not found, while include will only emit a warning and continue execution.",
    example:
      "// include\ninclude 'header.php'; // Warning if missing\n// require\nrequire 'config.php'; // Fatal error if missing",
    realTimeExample:
      "include is like inviting a friend to a party: if they don’t show up, the party continues. require is like a mandatory guest: if they don’t come, the party is canceled.",
    realTimeExample2:
      "Imagine include as a recipe ingredient: if you’re missing salt, you can still cook. require is like missing the main ingredient: you can’t make the dish at all.",
    syntax: "include 'file.php';\nrequire 'file.php';",
    codeExample:
      "require 'database.php'; // Script stops if missing\ninclude 'analytics.php'; // Script continues if missing",
  },
  {
    id: 22,
    question: "What is the use of the array_map function in PHP?",
    answer:
      "array_map applies a callback function to each element of an array and returns a new array with the results. It is useful for transforming array values without loops.",
    example:
      "$numbers = [1, 2, 3];\n$squares = array_map(function($n) { return $n * $n; }, $numbers);\n// $squares = [1, 4, 9]",
    realTimeExample:
      "array_map is like a factory assembly line: each item (array element) goes through the same process (callback) and comes out transformed.",
    realTimeExample2:
      "Imagine array_map as a photo filter: you apply the same filter (callback) to every photo (array element) in your album.",
    syntax: "array_map(callable $callback, array $array): array",
    codeExample:
      "$names = ['Alice', 'Bob', 'Charlie'];\n$uppercase = array_map('strtoupper', $names);\n// $uppercase = ['ALICE', 'BOB', 'CHARLIE']",
  },
  {
    id: 23,
    question: "What is the use of the array_reduce function in PHP?",
    answer:
      "array_reduce iterates over an array and reduces it to a single value using a callback function. It is useful for aggregating data, like summing values or concatenating strings.",
    example:
      "$sum = array_reduce([1, 2, 3], function($carry, $item) { return $carry + $item; }, 0);\n// $sum = 6",
    realTimeExample:
      "array_reduce is like a cashier adding up your grocery bill: each item (array element) is added to the total (carry) until you get the final amount.",
    realTimeExample2:
      "Imagine array_reduce as a snowball rolling downhill: it picks up more snow (array elements) and grows (carry) until it’s one big snowball (result).",
    syntax:
      "array_reduce(array $array, callable $callback, mixed $initial = null): mixed",
    codeExample:
      "$words = ['Hello', 'World'];\n$sentence = array_reduce($words, function($carry, $word) { return $carry . ' ' . $word; }, '');\n// $sentence = 'Hello World'",
  },
  {
    id: 24,
    question: "What is the use of the array_filter function in PHP?",
    answer:
      "array_filter filters elements of an array using a callback function. It returns a new array containing only the elements for which the callback returns true.",
    example:
      "$even = array_filter([1, 2, 3, 4], function($n) { return $n % 2 === 0; });\n// $even = [2, 4]",
    realTimeExample:
      "array_filter is like a sieve: you pour in mixed items (array elements) and only the ones that fit (callback returns true) come out.",
    realTimeExample2:
      "Imagine array_filter as a bouncer at a club: only people who meet the criteria (callback) are allowed in (result array).",
    syntax: "array_filter(array $array, callable $callback = null): array",
    codeExample:
      "$ages = [15, 20, 25, 30];\n$adults = array_filter($ages, function($age) { return $age >= 18; });\n// $adults = [20, 25, 30]",
  },
  {
    id: 25,
    question: "What is the use of the array_merge function in PHP?",
    answer:
      "array_merge merges one or more arrays into a single array. If the input arrays have the same string keys, the later values overwrite the previous ones.",
    example:
      "$merged = array_merge(['a', 'b'], ['c', 'd']);\n// $merged = ['a', 'b', 'c', 'd']",
    realTimeExample:
      "array_merge is like combining two decks of cards: you shuffle them together into one deck (merged array).",
    realTimeExample2:
      "Imagine array_merge as merging two rivers: the waters (array elements) flow together into one larger river (merged array).",
    syntax: "array_merge(array ...$arrays): array",
    codeExample:
      "$user1 = ['name' => 'Alice', 'age' => 25];\n$user2 = ['name' => 'Bob', 'city' => 'New York'];\n$merged = array_merge($user1, $user2);\n// $merged = ['name' => 'Bob', 'age' => 25, 'city' => 'New York']",
  },
  {
    id: 26,
    question:
      "What is the use of the json_encode and json_decode functions in PHP?",
    answer:
      "json_encode converts a PHP value (array, object) to a JSON string, while json_decode converts a JSON string to a PHP value. These functions are essential for working with APIs and data interchange.",
    example:
      "$json = json_encode(['name' => 'Alice', 'age' => 25]);\n// $json = '{\"name\":\"Alice\",\"age\":25}'\n$data = json_decode($json);\n// $data = stdClass Object ( [name] => 'Alice' [age] => 25 )",
    realTimeExample:
      "json_encode is like packing a suitcase: you put your clothes (PHP data) into a standardized format (JSON) for travel. json_decode is like unpacking: you take the clothes out and use them again (PHP value).",
    realTimeExample2:
      "Imagine json_encode as translating a letter into a universal language (JSON), and json_decode as translating it back into your native language (PHP).",
    syntax:
      "json_encode(mixed $value, int $flags = 0, int $depth = 512): string\njson_decode(string $json, bool $assoc = false, int $depth = 512, int $flags = 0): mixed",
    codeExample:
      "$user = ['name' => 'Alice', 'age' => 25];\n$json = json_encode($user);\n$decoded = json_decode($json, true);\n// $decoded = ['name' => 'Alice', 'age' => 25]",
  },
  {
    id: 27,
    question: "What is the use of the header function in PHP?",
    answer:
      "The header function sends a raw HTTP header to the browser. It is commonly used for redirects, setting cookies, and controlling caching.",
    example: "header('Location: https://example.com'); // Redirect\nexit;",
    realTimeExample:
      "header is like a traffic cop: it directs the browser (traffic) to go to a new location (redirect) or follow a specific rule (HTTP header).",
    realTimeExample2:
      "Imagine header as a signpost: it tells the browser (traveler) which way to go (redirect) or what to expect (content type).",
    syntax:
      "header(string $header, bool $replace = true, int $http_response_code = 0): void",
    codeExample:
      "header('Content-Type: application/json');\necho json_encode(['success' => true]);",
  },
  {
    id: 28,
    question: "What is the use of the file_get_contents function in PHP?",
    answer:
      "file_get_contents reads an entire file into a string. It is commonly used for reading local files or fetching remote content via URLs.",
    example:
      "$content = file_get_contents('data.txt');\n// or\n$html = file_get_contents('https://example.com');",
    realTimeExample:
      "file_get_contents is like reading a book: you open it (file) and read the entire content (string) at once.",
    realTimeExample2:
      "Imagine file_get_contents as a photocopier: you put in a document (file/URL) and get a copy (string) of its content.",
    syntax:
      "file_get_contents(string $filename, bool $use_include_path = false, resource $context = null, int $offset = 0, int $maxlen = null): string|false",
    codeExample:
      "$json = file_get_contents('https://api.example.com/data');\n$data = json_decode($json, true);",
  },
  {
    id: 29,
    question: "What is the use of the cURL library in PHP?",
    answer:
      "cURL is a library for making HTTP requests from PHP. It supports various protocols and is used for interacting with APIs, scraping web pages, and more.",
    example:
      "$ch = curl_init('https://api.example.com');\ncurl_setopt($ch, CURLOPT_RETURNTRANSFER, true);\n$response = curl_exec($ch);\ncurl_close($ch);",
    realTimeExample:
      "cURL is like a postal service: you send a request (letter) to a server (address) and receive a response (reply) in return.",
    realTimeExample2:
      "Imagine cURL as a phone call: you dial a number (URL), ask a question (request), and get an answer (response).",
    syntax:
      "$ch = curl_init(string $url);\ncurl_setopt($ch, int $option, mixed $value): bool\nmixed curl_exec(resource $ch)\nvoid curl_close(resource $ch)",
    codeExample:
      "$ch = curl_init('https://api.example.com/users');\ncurl_setopt($ch, CURLOPT_RETURNTRANSFER, true);\n$response = curl_exec($ch);\ncurl_close($ch);\n$users = json_decode($response, true);",
  },
  {
    id: 30,
    question: "What is the use of the Composer dependency manager in PHP?",
    answer:
      "Composer is a tool for dependency management in PHP. It allows you to declare the libraries your project depends on and manages their installation and updates.",
    example:
      "// composer.json\n{\n  'require': {\n    'monolog/monolog': '^2.0'\n  }\n}\n// Install dependencies:\ncomposer install",
    realTimeExample:
      "Composer is like a personal shopper: you give it a list (composer.json) of what you need, and it fetches all the items (libraries) for you.",
    realTimeExample2:
      "Imagine Composer as a librarian: you request books (dependencies), and the librarian finds and delivers them to your desk (project).",
    syntax:
      "composer require vendor/package\ncomposer install\ncomposer update",
    codeExample:
      "// composer.json\n{\n  'require': {\n    'phpmailer/phpmailer': '^6.0'\n  }\n}\n// Run in terminal:\ncomposer install",
  },
];

// Make data available globally
window.intermediate = intermediate;
