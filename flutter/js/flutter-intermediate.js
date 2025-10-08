let intermediate = [
  {
    id: 1,
    question: "What is the pubspec.yaml file?",
    answer:
      "pubspec.yaml is the configuration file for Flutter projects. It defines the app's metadata, dependencies, assets, and other resources required to build and run the app.",
    example:
      "You declare dependencies like http, provider, or flutter_bloc in pubspec.yaml to use them in your project.",
    realTimeExample:
      "pubspec.yaml is like a recipe book for your app. It lists all the ingredients (dependencies) and instructions (configuration) needed to cook (build) your app.",
    realTimeExample2:
      "Think of pubspec.yaml as a project blueprint. It outlines the materials (assets) and tools (dependencies) required to construct your app.",
    syntax: `
      dependencies:
        flutter:
          sdk: flutter
        http: ^0.13.4
        provider: ^6.0.2
      assets:
        - images/logo.png
        - fonts/CustomFont.ttf
    `,
    codeExample: `
      // pubspec.yaml
      name: my_app
      description: A Flutter project
      version: 1.0.0

      dependencies:
        flutter:
          sdk: flutter
        http: ^0.13.4
        provider: ^6.0.2

      assets:
        - images/logo.png
        - fonts/CustomFont.ttf
    `,
  },
  {
    id: 2,
    question: "What is hot reload in Flutter?",
    answer:
      "Hot reload is a Flutter feature that allows you to see code changes instantly in your running app without restarting it. It preserves the app's state and is ideal for UI tweaks and bug fixes.",
    example:
      "Use hot reload to adjust UI elements, like changing colors or layouts, without losing the app's current state.",
    realTimeExample:
      "Hot reload is like editing a live TV broadcast. You can make changes on the fly without stopping the show (app).",
    realTimeExample2:
      "Think of hot reload as a magic eraser. You can erase and redraw parts of your app without starting over.",
    syntax: "Press 'r' in the terminal during debug mode.",
    codeExample: "N/A",
  },
  {
    id: 3,
    question: "What are async and await in Dart?",
    answer:
      "async and await are Dart keywords for asynchronous programming. async marks a function as asynchronous, allowing it to perform non-blocking operations. await pauses the execution until a Future completes, making async code easier to read.",
    example:
      "Use async/await to fetch data from an API without blocking the UI thread.",
    realTimeExample:
      "async/await is like ordering food at a restaurant. You place your order (async function), wait for it to be ready (await), and then enjoy your meal (result).",
    realTimeExample2:
      "Think of async/await as a background worker. It lets your app continue running (UI thread) while waiting for a task (Future) to complete.",
    syntax: `
      Future<void> fetchData() async {
        var data = await http.get(Uri.parse('https://api.example.com/data'));
        print(data.body);
      }
    `,
    codeExample: `
      Future<void> fetchUserData() async {
        try {
          final response = await http.get(Uri.parse('https://api.example.com/users'));
          print('User data: \${response.body}');
        } catch (e) {
          print('Error: $e');
        }
      }
    `,
  },
  {
    id: 4,
    question: "What is a Future in Dart?",
    answer:
      "A Future in Dart represents a potential value or error that will be available at some time in the future. It is commonly used for asynchronous operations like network requests or file I/O.",
    example:
      "Use Future to handle operations that take time, such as fetching data from a server or reading a file.",
    realTimeExample:
      "A Future is like a pizza delivery. You order a pizza (initiate a Future), and it arrives (completes) at your doorstep (callback) after some time.",
    realTimeExample2:
      "Think of a Future as a promise. It guarantees that you’ll receive a result (value or error) eventually, even if it’s not immediately available.",
    syntax: "Future<String> fetchData() async { ... }",
    codeExample: `
      Future<String> fetchGreeting() async {
        await Future.delayed(Duration(seconds: 2));
        return 'Hello, Future!';
      }
    `,
  },
  {
    id: 5,
    question: "What is the difference between const and final in Dart?",
    answer:
      "const and final are used to declare immutable variables in Dart. const variables are compile-time constants and must be initialized with a constant value. final variables are runtime constants and can be initialized with a non-constant value.",
    example:
      "Use const for values known at compile time, like mathematical constants. Use final for values determined at runtime, like user input.",
    realTimeExample:
      "const is like a tattoo. It’s permanent and set at birth (compile time). final is like a name tag. It’s set once (runtime) and doesn’t change afterward.",
    realTimeExample2:
      "Think of const as a frozen meal. It’s prepared (initialized) before you buy it (compile time). final is like a freshly cooked meal. It’s prepared (initialized) when you order it (runtime).",
    syntax: "const pi = 3.14;\nfinal name = getUserName();",
    codeExample: `
      const double pi = 3.14159;
      final String userName = fetchUserName(); // Assume fetchUserName() is a function
    `,
  },
  {
    id: 6,
    question: "What are mixins in Dart?",
    answer:
      "Mixins in Dart are a way to reuse code across multiple class hierarchies. They allow you to add functionality to classes without using inheritance, promoting code reuse and modularity.",
    example:
      "Use mixins to share common behavior between unrelated classes, like logging or validation.",
    realTimeExample:
      "Mixins are like Lego bricks. You can attach them (mixins) to different Lego sets (classes) to add new features (behavior).",
    realTimeExample2:
      "Think of mixins as plugins. They add extra functionality (methods) to classes without changing their core structure (inheritance).",
    syntax: "mixin Logger {\n  void log(String message) { print(message); }\n}",
    codeExample: `
      mixin Logger {
        void log(String message) {
          print('Log: $message');
        }
      }

      class User with Logger {
        void greet() {
          log('User greeted!');
        }
      }
    `,
  },
  {
    id: 7,
    question: "What is BLoC pattern in Flutter?",
    answer:
      "BLoC (Business Logic Component) is a state management pattern that separates business logic from UI. It uses streams to manage state and react to user inputs, making it ideal for complex apps.",
    example:
      "Use BLoC to manage state in apps with complex business logic, like e-commerce or social media apps.",
    realTimeExample:
      "BLoC is like a traffic controller. It manages the flow of data (traffic) between the UI (roads) and business logic (control room).",
    realTimeExample2:
      "Think of BLoC as a project manager. It coordinates tasks (state changes) and ensures the UI (team) stays updated with the latest information (state).",
    syntax: "BlocBuilder<CounterBloc, int>(builder: (context, state) { ... })",
    codeExample: `
      class CounterBloc extends Bloc<CounterEvent, int> {
        CounterBloc() : super(0) {
          on<Increment>((event, emit) => emit(state + 1));
        }
      }

      BlocBuilder<CounterBloc, int>(
        builder: (context, count) {
          return Text('Count: $count');
        },
      )
    `,
  },
  {
    id: 8,
    question: "How to implement Provider for state management?",
    answer:
      "Provider is a state management solution that wraps InheritedWidget for efficient state distribution. Use MultiProvider to wrap your app, create ChangeNotifier classes for state, and use Consumer or context.watch to access state.",
    example:
      "Use Provider to share user authentication state or app themes across your app.",
    realTimeExample:
      "Provider is like a central water supply. It delivers data (water) to all widgets (houses) that need it, without each widget fetching its own water (state).",
    realTimeExample2:
      "Think of Provider as a radio station. It broadcasts data (music) to all widgets (listeners) tuned in, ensuring everyone hears the same song (state).",
    syntax: `
      MultiProvider(
        providers: [
          ChangeNotifierProvider(create: (_) => CounterModel()),
        ],
        child: MyApp(),
      )
    `,
    codeExample: `
      class CounterModel extends ChangeNotifier {
        int _count = 0;
        int get count => _count;
        void increment() {
          _count++;
          notifyListeners();
        }
      }

      Consumer<CounterModel>(
        builder: (context, counter, child) {
          return Text('Count: \${counter.count}');
        },
      )
    `,
  },
  {
    id: 9,
    question: "What is Riverpod?",
    answer:
      "Riverpod is a state management library for Flutter that improves upon Provider with better type safety, testability, and compile-time safety. It supports both simple and complex state management scenarios.",
    example:
      "Use Riverpod for scalable state management in apps of any size, from small to enterprise-level.",
    realTimeExample:
      "Riverpod is like a river. It flows (provides) data to all parts of your app (ecosystem) efficiently and safely.",
    realTimeExample2:
      "Think of Riverpod as a power grid. It delivers electricity (state) to all connected devices (widgets) reliably and without errors (type safety).",
    syntax: "final counterProvider = StateProvider<int>((ref) => 0);",
    codeExample: `
      final counterProvider = StateProvider<int>((ref) => 0);

      // Usage in widget:
      final count = ref.watch(counterProvider);
      ElevatedButton(
        onPressed: () => ref.read(counterProvider.notifier).state++,
        child: Text('Count: $count'),
      )
    `,
  },
  {
    id: 10,
    question: "How to create custom widgets?",
    answer:
      "To create custom widgets in Flutter, extend StatelessWidget or StatefulWidget, override the build method, and return your custom UI. You can also accept parameters in the constructor for flexibility.",
    example:
      "Create reusable custom widgets like buttons, cards, or dialogs with consistent styling and behavior.",
    realTimeExample:
      "Creating a custom widget is like designing a custom Lego piece. You define its shape (UI) and connectors (parameters) so it fits perfectly in your Lego set (app).",
    realTimeExample2:
      "Think of custom widgets as custom furniture. You design it (UI) to match your home’s (app’s) style and needs (parameters).",
    syntax:
      "class CustomButton extends StatelessWidget {\n  final String text;\n  CustomButton({required this.text});\n  @override\n  Widget build(BuildContext context) { ... }\n}",
    codeExample: `
      class CustomButton extends StatelessWidget {
        final String text;
        final VoidCallback onPressed;

        const CustomButton({required this.text, required this.onPressed});

        @override
        Widget build(BuildContext context) {
          return ElevatedButton(
            onPressed: onPressed,
            style: ElevatedButton.styleFrom(primary: Colors.blue),
            child: Text(text),
          );
        }
      }
    `,
  },
  {
    id: 11,
    question: "What is InheritedWidget?",
    answer:
      "InheritedWidget is a Flutter widget that efficiently propagates data down the widget tree. It allows descendant widgets to access shared data without passing it explicitly through constructors.",
    example:
      "Use InheritedWidget to share app-wide data like themes, user authentication, or localization settings.",
    realTimeExample:
      "InheritedWidget is like a family heirloom. It passes down data (heirloom) through generations (widget tree) for all descendants (widgets) to use.",
    realTimeExample2:
      "Think of InheritedWidget as a water pipe. It delivers data (water) from the source (root) to all connected widgets (faucets) in the tree.",
    syntax:
      "class MyInheritedWidget extends InheritedWidget {\n  final int data;\n  MyInheritedWidget({required this.data, required Widget child}) : super(child: child);\n  static MyInheritedWidget? of(BuildContext context) { ... }\n}",
    codeExample: `
      class MyInheritedWidget extends InheritedWidget {
        final int data;
        MyInheritedWidget({required this.data, required Widget child}) : super(child: child);

        static MyInheritedWidget? of(BuildContext context) {
          return context.dependOnInheritedWidgetOfExactType<MyInheritedWidget>();
        }

        @override
        bool updateShouldNotify(MyInheritedWidget oldWidget) => oldWidget.data != data;
      }
    `,
  },
  {
    id: 12,
    question: "How to use Streams in Flutter?",
    answer:
      "Streams in Flutter represent a sequence of asynchronous events. Use StreamBuilder to listen to streams and rebuild the UI when new data is emitted. You can also subscribe to streams manually using stream.listen().",
    example:
      "Use streams for real-time data like chat messages, stock prices, or sensor data.",
    realTimeExample:
      "Streams are like a live sports commentator. They provide a continuous play-by-play (data) of the game (events) as it happens.",
    realTimeExample2:
      "Think of streams as a news ticker. They continuously update the headlines (UI) as news (data) comes in.",
    syntax: "Stream<int>.periodic(Duration(seconds: 1), (i) => i).take(10)",
    codeExample: `
      Stream<int> countStream = Stream.periodic(Duration(seconds: 1), (i) => i).take(10);

      StreamBuilder<int>(
        stream: countStream,
        builder: (context, snapshot) {
          if (snapshot.hasData) {
            return Text('Count: \${snapshot.data}');
          } else {
            return CircularProgressIndicator();
          }
        },
      )
    `,
  },
  {
    id: 13,
    question: "What is RxDart?",
    answer:
      "RxDart is a reactive programming library for Dart that extends the capabilities of streams. It provides additional operators for transforming, combining, and managing streams, making it easier to work with complex asynchronous data flows.",
    example:
      "Use RxDart to debounce search inputs, combine multiple streams, or handle backpressure in real-time apps.",
    realTimeExample:
      "RxDart is like a Swiss Army knife for streams. It provides extra tools (operators) to manipulate and combine data flows (streams).",
    realTimeExample2:
      "Think of RxDart as a DJ mixer. It lets you mix, transform, and control multiple streams (tracks) of data (music).",
    syntax: "stream.debounceTime(Duration(milliseconds: 500))",
    codeExample: `
      final searchSubject = PublishSubject<String>();
      searchSubject
          .debounceTime(Duration(milliseconds: 500))
          .listen((query) => print('Searching for: $query'));
    `,
  },
  {
    id: 14,
    question: "How to handle errors in Flutter?",
    answer:
      "In Flutter, handle errors using try-catch blocks for synchronous code and catchError for Futures and Streams. Use ErrorWidget.builder to customize error UI, and ensure proper error handling in async operations to prevent app crashes.",
    example:
      "Handle errors when fetching data from an API or reading local files to provide a smooth user experience.",
    realTimeExample:
      "Error handling is like a safety net. It catches errors (falls) so your app doesn’t crash (hit the ground).",
    realTimeExample2:
      "Think of error handling as a backup plan. If something goes wrong (exception), you have a plan B (catch block) to keep things running.",
    syntax: "try { ... } catch (e) { ... }\nFuture.catchError((e) { ... })",
    codeExample: `
      try {
        final response = await http.get(Uri.parse('https://api.example.com/data'));
        print(response.body);
      } catch (e) {
        print('Error: $e');
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text('Failed to fetch data')),
        );
      }
    `,
  },
  {
    id: 15,
    question: "What is Dio for HTTP requests?",
    answer:
      "Dio is a powerful HTTP client for Dart that supports interceptors, form data, file downloads/uploads, and advanced request/response handling. It is highly customizable and suitable for complex networking needs.",
    example:
      "Use Dio for REST API calls, file uploads, or intercepting requests/responses for logging or authentication.",
    realTimeExample:
      "Dio is like a premium delivery service. It handles all types of packages (requests/responses) with extra features like tracking (interceptors) and special handling (form data).",
    realTimeExample2:
      "Think of Dio as a high-end car. It offers advanced features (interceptors, form data) for a smooth and customizable ride (HTTP requests).",
    syntax: "Dio().get('https://api.example.com/data')",
    codeExample: `
      final dio = Dio();
      final response = await dio.get(
        'https://api.example.com/users',
        options: Options(headers: {'Authorization': 'Bearer token'}),
      );
      print(response.data);
    `,
  },
  {
    id: 16,
    question: "How to use Hive for local storage?",
    answer:
      "Hive is a lightweight and fast NoSQL database for Flutter. To use Hive, initialize it, register adapters for custom objects, open a box (database), and use put/get methods for CRUD operations.",
    example:
      "Use Hive to store user preferences, app settings, or cached data locally.",
    realTimeExample:
      "Hive is like a treasure chest. You store your valuables (data) in boxes (Hive boxes) and retrieve them quickly when needed.",
    realTimeExample2:
      "Think of Hive as a filing cabinet. It organizes your documents (data) into drawers (boxes) for easy access and management.",
    syntax: "Hive.openBox('myBox')\nbox.put('key', value)\nbox.get('key')",
    codeExample: `
      await Hive.initFlutter();
      var box = await Hive.openBox('userBox');
      box.put('username', 'JohnDoe');
      String? username = box.get('username');
    `,
  },
  {
    id: 17,
    question: "What is sqflite?",
    answer:
      "sqflite is a SQLite plugin for Flutter that allows you to perform local database operations using SQL queries. It is ideal for apps that require structured data storage and complex queries.",
    example:
      "Use sqflite to store and query structured data like user profiles, messages, or app settings.",
    realTimeExample:
      "sqflite is like a library database. It stores books (data) in an organized manner (tables) and lets you search (query) for specific titles (records).",
    realTimeExample2:
      "Think of sqflite as a spreadsheet. It organizes data into tables (sheets) and allows you to perform calculations (queries) on the data.",
    syntax: "openDatabase('my_db.db')\ndatabase.execute('CREATE TABLE ...')",
    codeExample: `
      final database = openDatabase(
        join(await getDatabasesPath(), 'my_database.db'),
        onCreate: (db, version) {
          return db.execute(
            'CREATE TABLE users(id INTEGER PRIMARY KEY, name TEXT, age INTEGER)',
          );
        },
        version: 1,
      );
    `,
  },
  {
    id: 18,
    question: "How to write unit tests in Flutter?",
    answer:
      "To write unit tests in Flutter, use the test package, create test functions with expect() assertions, and run tests with flutter test. Focus on testing individual functions, classes, or widgets in isolation.",
    example:
      "Write unit tests for business logic, utility functions, or widget behavior to ensure reliability and catch bugs early.",
    realTimeExample:
      "Unit testing is like a spelling test. It checks if each word (function) is correct (behaves as expected) before you write an essay (app).",
    realTimeExample2:
      "Think of unit testing as a quality control check. It ensures each part (unit) of your product (app) meets the standards (passes tests).",
    syntax: "test('description', () { expect(actual, expected); });",
    codeExample: `
      test('Counter increments correctly', () {
        final counter = Counter();
        counter.increment();
        expect(counter.value, 1);
      });
    `,
  },
  {
    id: 19,
    question: "What is widget testing?",
    answer:
      "Widget testing in Flutter verifies the behavior and appearance of UI components by pumping widgets into a test environment and checking their properties, interactions, and rendered output.",
    example:
      "Use widget testing to ensure buttons trigger actions, lists display items correctly, or forms validate input as expected.",
    realTimeExample:
      "Widget testing is like a dress rehearsal for a play. It checks if each actor (widget) performs their role (behavior) correctly before the show (app release).",
    realTimeExample2:
      "Think of widget testing as a car inspection. It ensures all parts (widgets) function properly before you hit the road (deploy the app).",
    syntax: "testWidgets('description', (WidgetTester tester) async { ... })",
    codeExample: `
      testWidgets('Counter increments smoke test', (WidgetTester tester) async {
        await tester.pumpWidget(MyApp());
        await tester.tap(find.byIcon(Icons.add));
        await tester.pump();
        expect(find.text('1'), findsOneWidget);
      });
    `,
  },
  {
    id: 20,
    question: "How to mock dependencies in tests?",
    answer:
      "To mock dependencies in Flutter tests, use the mockito package to create mock objects, define their behavior with when().thenReturn(), and inject them into your classes or widgets for isolated testing.",
    example:
      "Mock API clients, databases, or services to test widget behavior without relying on real implementations.",
    realTimeExample:
      "Mocking dependencies is like using a stunt double. The mock (stunt double) stands in for the real dependency (actor) during testing (filming).",
    realTimeExample2:
      "Think of mocking as a practice dummy. It simulates the behavior of real dependencies (opponents) so you can test your moves (code) safely.",
    syntax: "when(mockDependency.method()).thenReturn(value);",
    codeExample: `
      class MockApiClient extends Mock implements ApiClient {}

      void main() {
        final mockApi = MockApiClient();
        when(mockApi.fetchData()).thenAnswer((_) async => {'key': 'value'});

        testWidgets('Test with mock API', (WidgetTester tester) async {
          await tester.pumpWidget(MyWidget(api: mockApi));
          // Test widget behavior
        });
      }
    `,
  },
  {
    id: 21,
    question: "What is integration testing?",
    answer:
      "Integration testing in Flutter verifies the interaction between multiple components or the entire app. It runs on real devices or emulators, testing user interactions, navigation, and app workflows.",
    example:
      "Use integration testing to ensure features like login flows, payment processes, or data synchronization work as expected across the app.",
    realTimeExample:
      "Integration testing is like a full-band rehearsal. It checks how all musicians (components) play together (interact) before the concert (app release).",
    realTimeExample2:
      "Think of integration testing as a system check. It ensures all parts (features) of your machine (app) work together smoothly.",
    syntax:
      "integration_test('description', (WidgetTester tester) async { ... })",
    codeExample: `
      void main() {
        IntegrationTestWidgetsFlutterBinding.ensureInitialized();
        testWidgets('Login flow test', (WidgetTester tester) async {
          await tester.pumpWidget(MyApp());
          await tester.enterText(find.byType(TextField), 'username');
          await tester.tap(find.text('Login'));
          await tester.pumpAndSettle();
          expect(find.text('Welcome'), findsOneWidget);
        });
      }
    `,
  },
  {
    id: 22,
    question: "How to optimize Flutter app performance?",
    answer:
      "To optimize Flutter app performance, use const constructors to avoid unnecessary rebuilds, optimize images, use ListView.builder for large lists, and profile your app with DevTools to identify bottlenecks.",
    example:
      "Optimize performance for smooth animations, fast load times, and responsive UI, especially in complex or data-heavy apps.",
    realTimeExample:
      "Optimizing performance is like tuning a car. You adjust parts (code) to make it run faster (smoother) and more efficiently (less resource usage).",
    realTimeExample2:
      "Think of performance optimization as decluttering your workspace. You remove unnecessary items (widgets) and organize what’s left for maximum efficiency.",
    syntax: "const MyWidget()\nListView.builder(itemBuilder: ...)",
    codeExample: `
      // Use const constructors
      const MyStatelessWidget();

      // Use ListView.builder for large lists
      ListView.builder(
        itemCount: items.length,
        itemBuilder: (context, index) => ListTile(title: Text(items[index])),
      )
    `,
  },
  {
    id: 23,
    question: "What is const constructor?",
    answer:
      "A const constructor in Dart creates compile-time constant objects. It ensures that the object and all its fields are immutable, improving performance by allowing Flutter to reuse widget instances.",
    example:
      "Use const constructors for widgets with fixed properties, like icons, colors, or static text, to optimize rendering.",
    realTimeExample:
      "A const constructor is like a frozen meal. It’s prepared (initialized) once and can be reused (shared) without changing.",
    realTimeExample2:
      "Think of const constructors as a stamp. Once made, you can use it repeatedly to create identical copies (widgets) without remaking it.",
    syntax: "const MyWidget({Key? key}) : super(key: key);",
    codeExample: `
      class MyStatelessWidget extends StatelessWidget {
        final String text;
        const MyStatelessWidget(this.text, {Key? key}) : super(key: key);

        @override
        Widget build(BuildContext context) {
          return Text(text);
        }
      }
    `,
  },
  {
    id: 24,
    question: "How to use keys in Flutter?",
    answer:
      "Keys in Flutter help identify widgets uniquely during rebuilds. Use Key subclasses like ValueKey, ObjectKey, or UniqueKey to preserve widget state or optimize performance in lists.",
    example:
      "Use keys in dynamic lists to maintain the state of items, like checkboxes or text fields, during reordering or updates.",
    realTimeExample:
      "Keys are like name tags at a conference. They help Flutter recognize widgets (attendees) even if their positions change.",
    realTimeExample2:
      "Think of keys as unique IDs for widgets. They ensure Flutter can track each widget (student) even if the class (list) is reshuffled.",
    syntax: "ValueKey('unique_id')\nObjectKey(myObject)",
    codeExample: `
      ListView(
        children: [
          ListTile(key: ValueKey('item_1'), title: Text('Item 1')),
          ListTile(key: ValueKey('item_2'), title: Text('Item 2')),
        ],
      )
    `,
  },
  {
    id: 25,
    question: "What is GlobalKey?",
    answer:
      "GlobalKey in Flutter uniquely identifies a widget across the entire app, allowing access to its state or context from anywhere in the widget tree. It is useful for managing form states or accessing widget properties globally.",
    example:
      "Use GlobalKey to validate a form, access a Scaffold’s state, or control a widget from outside its subtree.",
    realTimeExample:
      "GlobalKey is like a VIP pass. It gives you access to a widget’s backstage (state/context) from anywhere in the app (venue).",
    realTimeExample2:
      "Think of GlobalKey as a master key. It unlocks a widget’s state (room) no matter where you are in the building (widget tree).",
    syntax: "GlobalKey<MyWidgetState>()",
    codeExample: `
      final GlobalKey<FormState> _formKey = GlobalKey<FormState>();

      Form(
        key: _formKey,
        child: Column(
          children: [
            TextFormField(validator: (value) => value!.isEmpty ? 'Required' : null),
            ElevatedButton(
              onPressed: () {
                if (_formKey.currentState!.validate()) {
                  // Form is valid
                }
              },
              child: Text('Submit'),
            ),
          ],
        ),
      )
    `,
  },
  {
    id: 26,
    question: "How to implement navigation with named routes?",
    answer:
      "To implement navigation with named routes in Flutter, define routes in MaterialApp using routes: {}, use Navigator.pushNamed() to navigate, and pass arguments with onGenerateRoute or RouteSettings.",
    example:
      "Use named routes for cleaner navigation code, especially in apps with many screens or deep linking.",
    realTimeExample:
      "Named routes are like street addresses. You use the address (route name) to navigate to a specific location (screen) in the city (app).",
    realTimeExample2:
      "Think of named routes as a map. You follow the marked paths (routes) to reach your destination (screen) without getting lost.",
    syntax: `
      MaterialApp(
        routes: {
          '/home': (context) => HomeScreen(),
          '/details': (context) => DetailsScreen(),
        },
      )
      Navigator.pushNamed(context, '/details', arguments: {'id': 1});
    `,
    codeExample: `
      MaterialApp(
        initialRoute: '/',
        routes: {
          '/': (context) => HomeScreen(),
          '/details': (context) => DetailsScreen(),
        },
        onGenerateRoute: (settings) {
          if (settings.name == '/details') {
            final args = settings.arguments as Map;
            return MaterialPageRoute(
              builder: (context) => DetailsScreen(id: args['id']),
            );
          }
          return null;
        },
      )
    `,
  },
  {
    id: 27,
    question: "What is Hero animation?",
    answer:
      "Hero animation in Flutter creates smooth transitions between screens for shared elements, like images or icons. It uses the Hero widget with matching tags to animate the element’s movement from one screen to another.",
    example:
      "Use Hero animations to enhance user experience during screen transitions, such as zooming into a product image or profile picture.",
    realTimeExample:
      "Hero animation is like a superhero flying between buildings. It smoothly transitions a shared element (hero) from one screen (building) to another.",
    realTimeExample2:
      "Think of Hero animation as a magic portal. It seamlessly moves a widget (object) from one place (screen) to another with a visual effect.",
    syntax: "Hero(tag: 'hero_tag', child: MyWidget())",
    codeExample: `
      // First screen
      Hero(
        tag: 'product_image',
        child: Image.network('https://example.com/product.jpg'),
      )

      // Second screen
      Hero(
        tag: 'product_image',
        child: Image.network('https://example.com/product.jpg'),
      )
    `,
  },
  {
    id: 28,
    question: "How to create custom animations?",
    answer:
      "To create custom animations in Flutter, use AnimationController to control the animation, Tween to define the range of values, and AnimatedBuilder to rebuild the widget tree during the animation. You can also use physics-based animations with AnimationController and Curves.",
    example:
      "Create custom animations for splash screens, loading indicators, or interactive UI elements to engage users.",
    realTimeExample:
      "Custom animations are like a puppet show. You control the puppet’s (widget’s) movements (animation) with strings (AnimationController).",
    realTimeExample2:
      "Think of custom animations as a stop-motion film. You define each frame (Tween) and control the playback (AnimationController) to create smooth motion.",
    syntax: "AnimationController(vsync: this, duration: Duration(seconds: 1))",
    codeExample: `
      class MyAnimation extends StatefulWidget {
        @override
        _MyAnimationState createState() => _MyAnimationState();
      }

      class _MyAnimationState extends State<MyAnimation> with SingleTickerProviderStateMixin {
        late AnimationController _controller;
        late Animation<double> _animation;

        @override
        void initState() {
          super.initState();
          _controller = AnimationController(
            vsync: this,
            duration: Duration(seconds: 2),
          );
          _animation = Tween(begin: 0.0, end: 1.0).animate(_controller);
          _controller.forward();
        }

        @override
        Widget build(BuildContext context) {
          return AnimatedBuilder(
            animation: _animation,
            builder: (context, child) {
              return Opacity(
                opacity: _animation.value,
                child: Container(width: 100, height: 100, color: Colors.blue),
              );
            },
          );
        }

        @override
        void dispose() {
          _controller.dispose();
          super.dispose();
        }
      }
    `,
  },
  {
    id: 29,
    question: "What is TweenAnimationBuilder?",
    answer:
      "TweenAnimationBuilder in Flutter animates a widget between two values using a Tween and a builder function. It simplifies creating animations by handling the animation controller and state internally.",
    example:
      "Use TweenAnimationBuilder for simple animations like fading, scaling, or moving widgets without managing an AnimationController manually.",
    realTimeExample:
      "TweenAnimationBuilder is like a dimmer switch. It smoothly transitions a widget’s property (brightness) from one value (off) to another (on).",
    realTimeExample2:
      "Think of TweenAnimationBuilder as a volume knob. It gradually changes the volume (property) from low (start) to high (end).",
    syntax:
      "TweenAnimationBuilder<double>(tween: Tween(begin: 0, end: 1), duration: Duration(seconds: 1), builder: (context, value, child) { ... })",
    codeExample: `
      TweenAnimationBuilder<double>(
        tween: Tween(begin: 0.0, end: 1.0),
        duration: Duration(seconds: 1),
        builder: (context, value, child) {
          return Opacity(
            opacity: value,
            child: Container(width: 100, height: 100, color: Colors.red),
          );
        },
      )
    `,
  },
  {
    id: 30,
    question: "How to use GestureDetector for custom gestures?",
    answer:
      "GestureDetector in Flutter detects a variety of user gestures, such as tap, double tap, long press, pan, and scale. Wrap any widget with GestureDetector and provide callbacks for the gestures you want to handle.",
    example:
      "Use GestureDetector to create custom interactive widgets, like swipeable cards, zoomable images, or drag-and-drop interfaces.",
    realTimeExample:
      "GestureDetector is like a touchscreen. It detects and responds to your touches (gestures) on any widget (screen).",
    realTimeExample2:
      "Think of GestureDetector as a magic wand. It makes any widget respond to your gestures (spells) with custom actions.",
    syntax:
      "GestureDetector(onTap: () {}, onDoubleTap: () {}, child: MyWidget())",
    codeExample: `
      GestureDetector(
        onTap: () => print('Single tap'),
        onDoubleTap: () => print('Double tap'),
        onLongPress: () => print('Long press'),
        child: Container(width: 200, height: 200, color: Colors.blue),
      )
    `,
  },
  {
    id: 31,
    question: "What is CustomPainter?",
    answer:
      "CustomPainter in Flutter allows you to draw custom shapes, paths, and graphics on a canvas. It is used with the CustomPaint widget to create complex or unique visual elements.",
    example:
      "Use CustomPainter to create custom charts, animations, or artistic UI elements that are not available in standard widgets.",
    realTimeExample:
      "CustomPainter is like an artist’s canvas. It lets you draw (paint) anything you imagine using code (brushes).",
    realTimeExample2:
      "Think of CustomPainter as a sketchbook. It gives you the freedom to create custom designs (shapes) from scratch.",
    syntax: "CustomPaint(painter: MyPainter(), child: MyWidget())",
    codeExample: `
      class MyPainter extends CustomPainter {
        @override
        void paint(Canvas canvas, Size size) {
          final paint = Paint()
            ..color = Colors.blue
            ..style = PaintingStyle.fill;
          canvas.drawCircle(Offset(size.width / 2, size.height / 2), 50, paint);
        }

        @override
        bool shouldRepaint(CustomPainter oldDelegate) => false;
      }

      CustomPaint(
        painter: MyPainter(),
        size: Size(200, 200),
      )
    `,
  },
  {
    id: 32,
    question: "How to draw custom shapes?",
    answer:
      "To draw custom shapes in Flutter, override the paint() method in a CustomPainter class. Use the Canvas object to draw shapes like rectangles, circles, or paths with methods like drawRect, drawCircle, or drawPath.",
    example:
      "Draw custom shapes for icons, backgrounds, or interactive graphics to create unique UI elements.",
    realTimeExample:
      "Drawing custom shapes is like sculpting clay. You mold (draw) the clay (canvas) into any shape (widget) you desire.",
    realTimeExample2:
      "Think of drawing custom shapes as origami. You fold (draw) the paper (canvas) into intricate designs (shapes).",
    syntax:
      "canvas.drawPath(path, paint)\ncanvas.drawCircle(center, radius, paint)",
    codeExample: `
      class StarPainter extends CustomPainter {
        @override
        void paint(Canvas canvas, Size size) {
          final paint = Paint()
            ..color = Colors.yellow
            ..style = PaintingStyle.fill;

          final path = Path();
          // Draw a star shape
          path.moveTo(size.width / 2, 0);
          path.lineTo(size.width * 0.6, size.height * 0.4);
          // ... add more points to complete the star
          path.close();

          canvas.drawPath(path, paint);
        }

        @override
        bool shouldRepaint(CustomPainter oldDelegate) => false;
      }
    `,
  },
  {
    id: 33,
    question: "What is Platform channels?",
    answer:
      "Platform channels in Flutter enable communication between Dart code and native platform code (Android/iOS). MethodChannel allows invoking native methods, while EventChannel allows receiving events from native code.",
    example:
      "Use platform channels to access platform-specific APIs, like sensors, Bluetooth, or custom native modules.",
    realTimeExample:
      "Platform channels are like a phone call between Flutter and native code. They allow both sides to talk (send/receive data) and collaborate.",
    realTimeExample2:
      "Think of platform channels as a bridge. They connect Flutter (one side) to native code (the other side) for two-way communication.",
    syntax:
      "const MethodChannel('channel_name')\nconst EventChannel('channel_name')",
    codeExample: `
      // Dart code
      const platform = MethodChannel('com.example/app');
      final String result = await platform.invokeMethod('getBatteryLevel');

      // Native code (Android)
      MethodChannel(flutterView, "com.example/app").setMethodCallHandler(
        (call, result) -> {
          if (call.method.equals("getBatteryLevel")) {
            result.success(getBatteryLevel());
          }
        }
      );
    `,
  },
  {
    id: 34,
    question: "How to access device camera?",
    answer:
      "To access the device camera in Flutter, use the camera plugin. Initialize a CameraController, request permissions, and display the camera preview using the CameraPreview widget.",
    example:
      "Use the camera plugin to build features like QR code scanners, photo capture, or video recording in your app.",
    realTimeExample:
      "Accessing the device camera is like opening a window. It lets your app (room) see the outside world (camera feed).",
    realTimeExample2:
      "Think of the camera plugin as a pair of binoculars. It brings the outside view (camera feed) into your app (viewfinder).",
    syntax:
      "CameraController(cameraDescription, ResolutionPreset.high)\nCameraPreview(controller)",
    codeExample: `
      final cameras = await availableCameras();
      final controller = CameraController(cameras[0], ResolutionPreset.high);
      await controller.initialize();

      CameraPreview(controller)
    `,
  },
  {
    id: 35,
    question: "What is MethodChannel?",
    answer:
      "MethodChannel in Flutter is a platform channel that allows Dart code to invoke native platform methods (Android/iOS) and receive results asynchronously. It is used for one-time method calls.",
    example:
      "Use MethodChannel to call native APIs for features not available in Flutter, like custom sensors or platform-specific UI.",
    realTimeExample:
      "MethodChannel is like a walkie-talkie. You send a message (method call) to native code and wait for a response (result).",
    realTimeExample2:
      "Think of MethodChannel as a messenger. It delivers your request (method) to native code and brings back the reply (result).",
    syntax:
      "const MethodChannel('channel_name').invokeMethod('methodName', arguments)",
    codeExample: `
      const platform = MethodChannel('com.example/app');
      try {
        final int batteryLevel = await platform.invokeMethod('getBatteryLevel');
        print('Battery level: $batteryLevel');
      } on PlatformException catch (e) {
        print('Error: \${e.message}');
      }
    `,
  },
  {
    id: 36,
    question: "How to handle permissions?",
    answer:
      "To handle permissions in Flutter, use the permission_handler package. Request permissions at runtime, check their status, and handle user responses (granted/denied).",
    example:
      "Request permissions for camera, location, or storage to access device features securely and respect user privacy.",
    realTimeExample:
      "Handling permissions is like asking for a key. You request access (permission) to a room (feature), and the user decides whether to give you the key (grant) or not (deny).",
    realTimeExample2:
      "Think of permissions as a bouncer at a club. You ask for entry (permission), and the bouncer (user) decides if you can go in (access feature).",
    syntax: "Permission.camera.request()\nPermission.status.isGranted",
    codeExample: `
      final status = await Permission.camera.request();
      if (status.isGranted) {
        // Permission granted, access camera
      } else {
        // Permission denied
      }
    `,
  },
  {
    id: 37,
    question: "What is flutter_secure_storage?",
    answer:
      "flutter_secure_storage is a Flutter plugin for securely storing sensitive data, like tokens or passwords, using platform-specific secure storage (Keychain on iOS, Keystore on Android).",
    example:
      "Use flutter_secure_storage to store authentication tokens, API keys, or other sensitive user data securely.",
    realTimeExample:
      "flutter_secure_storage is like a safe. It securely stores your valuables (data) and protects them from unauthorized access.",
    realTimeExample2:
      "Think of flutter_secure_storage as a vault. It keeps your secrets (data) locked away and only accessible with the right key (authentication).",
    syntax:
      "FlutterSecureStorage().write(key: 'token', value: 'abc123')\nFlutterSecureStorage().read(key: 'token')",
    codeExample: `
      final storage = FlutterSecureStorage();
      await storage.write(key: 'auth_token', value: 'user_token_123');
      final token = await storage.read(key: 'auth_token');
    `,
  },
  {
    id: 38,
    question: "How to implement push notifications?",
    answer:
      "To implement push notifications in Flutter, use the firebase_messaging package for Firebase Cloud Messaging (FCM). Handle background messages, display notifications using flutter_local_notifications, and manage user subscriptions to topics.",
    example:
      "Use push notifications to alert users about new messages, updates, or events in real-time.",
    realTimeExample:
      "Push notifications are like a doorbell. They alert you (user) when someone (app) is at the door (new message/event).",
    realTimeExample2:
      "Think of push notifications as a news alert. They deliver breaking news (updates) directly to your device (user).",
    syntax:
      "FirebaseMessaging.onMessage.listen((message) { ... })\nflutterLocalNotificationsPlugin.show(...)",
    codeExample: `
      FirebaseMessaging.onMessage.listen((RemoteMessage message) {
        flutterLocalNotificationsPlugin.show(
          0,
          message.notification?.title,
          message.notification?.body,
          NotificationDetails(...),
        );
      });
    `,
  },
  {
    id: 39,
    question: "What is Firebase in Flutter?",
    answer:
      "Firebase is a Backend-as-a-Service (BaaS) platform by Google that provides a suite of cloud-based services for Flutter apps, including authentication, databases, analytics, and push notifications.",
    example:
      "Use Firebase to add backend functionality to your app without managing servers, such as user authentication, real-time databases, or cloud storage.",
    realTimeExample:
      "Firebase is like a toolbox for your app’s backend. It provides all the tools (services) you need to build and scale your app without setting up a workshop (server).",
    realTimeExample2:
      "Think of Firebase as a Swiss Army knife for developers. It offers multiple blades (services) for different tasks (auth, database, storage).",
    syntax:
      "Firebase.initializeApp()\nFirebaseAuth.instance.signInWithEmailAndPassword(email: 'user@example.com', password: 'password')",
    codeExample: `
      await Firebase.initializeApp();
      try {
        final userCredential = await FirebaseAuth.instance.signInWithEmailAndPassword(
          email: 'user@example.com',
          password: 'password123',
        );
        print('User logged in: \${userCredential.user?.uid}');
      } catch (e) {
        print('Error: $e');
      }
    `,
  },
  {
    id: 40,
    question: "How to use Firebase Auth?",
    answer:
      "Firebase Auth in Flutter provides backend services to authenticate users using email/password, phone numbers, or third-party providers like Google or Facebook. It handles user sessions, password resets, and email verification.",
    example:
      "Use Firebase Auth to implement user sign-up, login, and account management in your app.",
    realTimeExample:
      "Firebase Auth is like a bouncer at a club. It checks your ID (credentials) and decides if you can enter (access the app).",
    realTimeExample2:
      "Think of Firebase Auth as a security guard. It verifies your identity (authentication) and grants you access (session) to the building (app).",
    syntax:
      "FirebaseAuth.instance.signInWithEmailAndPassword(email: 'user@example.com', password: 'password')",
    codeExample: `
      try {
        final userCredential = await FirebaseAuth.instance.createUserWithEmailAndPassword(
          email: 'user@example.com',
          password: 'password123',
        );
        print('User created: \${userCredential.user?.uid}');
      } on FirebaseAuthException catch (e) {
        print('Error: \${e.message}');
      }
    `,
  },
  {
    id: 41,
    question: "What is Cloud Firestore?",
    answer:
      "Cloud Firestore is a NoSQL document database by Firebase that syncs data in real-time across client apps. It supports offline data persistence, automatic scaling, and powerful querying.",
    example:
      "Use Cloud Firestore to store and sync user data, app settings, or chat messages across devices in real-time.",
    realTimeExample:
      "Cloud Firestore is like a shared whiteboard. Everyone (clients) sees the same notes (data) in real-time, and changes are synced automatically.",
    realTimeExample2:
      "Think of Cloud Firestore as a live sports scoreboard. It updates scores (data) in real-time for all viewers (clients).",
    syntax:
      "FirebaseFirestore.instance.collection('users').doc('user_id').set({'name': 'John'})",
    codeExample: `
      final docRef = FirebaseFirestore.instance.collection('users').doc('user123');
      await docRef.set({
        'name': 'John Doe',
        'email': 'john@example.com',
      });
      docRef.snapshots().listen((snapshot) {
        print('User data: \${snapshot.data()}');
      });
    `,
  },
  {
    id: 42,
    question: "How to implement offline support?",
    answer:
      "To implement offline support in Flutter, enable Firestore’s offline persistence or use local storage solutions like Hive or shared_preferences. Cache data locally and sync with the server when connectivity is restored.",
    example:
      "Use offline support to ensure your app remains functional without an internet connection, such as in field work or travel apps.",
    realTimeExample:
      "Offline support is like a backup generator. It keeps your app (house) running (functional) even when the power (internet) is out.",
    realTimeExample2:
      "Think of offline support as a water bottle. It stores data (water) locally so you can use it (app) even when you’re offline (no refill).",
    syntax:
      "FirebaseFirestore.instance.settings = Settings(persistenceEnabled: true)",
    codeExample: `
      // Enable Firestore offline persistence
      FirebaseFirestore.instance.settings = Settings(persistenceEnabled: true);

      // Use Hive for local caching
      final box = await Hive.openBox('cache');
      box.put('data', {'key': 'value'});
    `,
  },
  {
    id: 43,
    question: "What is flutter_bloc?",
    answer:
      "flutter_bloc is a Flutter library for implementing the BLoC (Business Logic Component) pattern. It provides widgets like BlocBuilder, BlocListener, and BlocProvider to manage state reactively and efficiently.",
    example:
      "Use flutter_bloc to separate business logic from UI, making your app more maintainable and testable.",
    realTimeExample:
      "flutter_bloc is like a project manager for your app. It organizes tasks (state) and ensures the UI (team) stays updated with the latest information (state changes).",
    realTimeExample2:
      "Think of flutter_bloc as a traffic controller. It manages the flow of data (traffic) between the UI (roads) and business logic (control room).",
    syntax: "BlocProvider(create: (context) => CounterBloc(), child: MyApp())",
    codeExample: `
      class CounterBloc extends Bloc<CounterEvent, int> {
        CounterBloc() : super(0) {
          on<Increment>((event, emit) => emit(state + 1));
        }
      }

      BlocProvider(
        create: (context) => CounterBloc(),
        child: BlocBuilder<CounterBloc, int>(
          builder: (context, count) {
            return Text('Count: $count');
          },
        ),
      )
    `,
  },
  {
    id: 44,
    question: "How to use Cubit?",
    answer:
      "Cubit is a simplified state management solution from the BLoC library. It extends Cubit<State> and uses emit() to update state, making it easier to manage state without the complexity of full BLoC.",
    example:
      "Use Cubit for simple state management scenarios, like counters, toggles, or form states.",
    realTimeExample:
      "Cubit is like a light switch. It toggles the state (light) on and off (emit) with a simple flick (method call).",
    realTimeExample2:
      "Think of Cubit as a volume knob. It adjusts the state (volume) up or down (emit) as needed.",
    syntax: "Cubit<int>(0)\nemit(newState)",
    codeExample: `
      class CounterCubit extends Cubit<int> {
        CounterCubit() : super(0);
        void increment() => emit(state + 1);
      }

      BlocProvider(
        create: (context) => CounterCubit(),
        child: BlocBuilder<CounterCubit, int>(
          builder: (context, count) {
            return ElevatedButton(
              onPressed: () => context.read<CounterCubit>().increment(),
              child: Text('Count: $count'),
            );
          },
        ),
      )
    `,
  },
  {
    id: 45,
    question: "What is MobX in Flutter?",
    answer:
      "MobX is a state management library for Flutter that uses observables, actions, and reactions for reactive programming. It automatically tracks dependencies and updates the UI when the state changes.",
    example:
      "Use MobX to manage complex state with minimal boilerplate, such as user sessions, app themes, or real-time data.",
    realTimeExample:
      "MobX is like a smart home system. It automatically reacts (updates UI) to changes (state) in your home (app).",
    realTimeExample2:
      "Think of MobX as a domino effect. Changing one observable (domino) triggers reactions (falling dominos) throughout your app.",
    syntax: "@observable\n@action\n@computed",
    codeExample: `
      class Counter = _Counter with _$Counter;
      abstract class _Counter with Store {
        @observable
        int count = 0;
        @action
        void increment() => count++;
      }

      final counter = Counter();
      Observer(
        builder: (_) => Text('Count: \${counter.count}'),
      )
    `,
  },
  {
    id: 46,
    question: "How to implement Redux?",
    answer:
      "Redux in Flutter is a predictable state container that manages app state using a single store, actions, and reducers. Use the redux package to implement Redux, and connect your widgets to the store using StoreProvider and StoreConnector.",
    example:
      "Use Redux for large apps with complex state management needs, ensuring predictable state changes and easy debugging.",
    realTimeExample:
      "Redux is like a central library. It stores all the books (state) and ensures everyone (widgets) has access to the same information (single source of truth).",
    realTimeExample2:
      "Think of Redux as a ledger. It keeps a single, accurate record (state) of all transactions (changes) in your app.",
    syntax:
      "Store<AppState>(reducer, initialState: AppState())\nStoreProvider(store: store, child: MyApp())",
    codeExample: `
      final store = Store<AppState>(
        appReducer,
        initialState: AppState.initial(),
      );

      StoreProvider(
        store: store,
        child: StoreConnector<AppState, int>(
          converter: (store) => store.state.counter,
          builder: (context, count) {
            return Text('Count: $count');
          },
        ),
      )
    `,
  },
  {
    id: 47,
    question: "What is GetX?",
    answer:
      "GetX is a lightweight and powerful library for Flutter that combines state management, dependency injection, and navigation. It is designed for high performance and minimal boilerplate, making it ideal for both small and large apps.",
    example:
      "Use GetX for fast state management, route navigation, and dependency injection without context or complex setup.",
    realTimeExample:
      "GetX is like a Swiss Army knife. It’s a single tool (library) with multiple functions (state, navigation, DI) for all your needs.",
    realTimeExample2:
      "Think of GetX as a fast car. It gets you (state, navigation) where you need to go quickly and efficiently.",
    syntax:
      "Get.put(MyController())\nGet.find<MyController>()\nGet.to(NextScreen())",
    codeExample: `
      class MyController extends GetxController {
        var count = 0.obs;
        void increment() => count++;
      }

      Get.put(MyController());
      final controller = Get.find<MyController>();
      Obx(() => Text('Count: \${controller.count}'));
      ElevatedButton(
        onPressed: () => Get.to(NextScreen()),
        child: Text('Go to Next Screen'),
      )
    `,
  },
  {
    id: 48,
    question: "How to use dependency injection in Flutter?",
    answer:
      "Dependency injection in Flutter involves providing dependencies (services, repositories) to classes or widgets from an external source, rather than creating them internally. Use packages like get_it or injectable to register and inject dependencies.",
    example:
      "Use dependency injection to manage service lifecycles, mock dependencies in tests, and decouple components for better maintainability.",
    realTimeExample:
      "Dependency injection is like a butler. It provides (injects) what you need (dependencies) when you need it, without you having to fetch it yourself.",
    realTimeExample2:
      "Think of dependency injection as a vending machine. You request a service (snack), and it delivers (injects) it to you (class/widget).",
    syntax:
      "get_it.registerSingleton<MyService>(MyService())\nget_it<MyService>()",
    codeExample: `
      final getIt = GetIt.instance;
      getIt.registerSingleton<MyService>(MyService());

      class MyWidget extends StatelessWidget {
        final myService = getIt<MyService>();
        // ...
      }
    `,
  },
  {
    id: 49,
    question: "What is injectable package?",
    answer:
      "injectable is a Flutter package that generates dependency injection code at build time, reducing boilerplate and ensuring type safety. It works with get_it to provide a clean and scalable DI solution.",
    example:
      "Use injectable to simplify dependency registration and injection, especially in large apps with many services.",
    realTimeExample:
      "injectable is like a personal assistant. It prepares (generates) everything you need (DI code) before you even ask, so you can focus on your work (app logic).",
    realTimeExample2:
      "Think of injectable as a 3D printer. It creates (generates) the exact parts (DI code) you need for your project (app) automatically.",
    syntax: "@injectable\n@module\ngetIt.init()",
    codeExample: `
      @injectable
      class MyService {}

      @module
      class MyModule {
        @singleton
        MyService myService() => MyService();
      }

      void main() {
        getIt.init();
        runApp(MyApp());
      }
    `,
  },
  {
    id: 50,
    question: "How to implement clean architecture?",
    answer:
      "Clean architecture in Flutter separates the app into layers: presentation (UI), domain (business logic), and data (repositories, APIs). It enforces dependency rules, making the app more maintainable, testable, and scalable.",
    example:
      "Use clean architecture to build apps with clear boundaries between UI, business logic, and data access, ensuring flexibility and ease of testing.",
    realTimeExample:
      "Clean architecture is like a well-organized kitchen. Each layer (presentation, domain, data) has its own space (responsibility), and ingredients (data) flow in one direction (dependency rule).",
    realTimeExample2:
      "Think of clean architecture as a modular bookshelf. Each shelf (layer) holds specific types of books (code), and you can rearrange shelves (layers) without mixing genres (responsibilities).",
    syntax: "N/A (Architectural pattern)",
    codeExample: `
      // Presentation layer (UI)
      class MyWidget extends StatelessWidget {
        final GetUserUseCase getUserUseCase;
        MyWidget(this.getUserUseCase);
        // ...
      }

      // Domain layer (Business logic)
      abstract class GetUserUseCase {
        Future<User> call(int id);
      }

      // Data layer (Repositories, APIs)
      class UserRepositoryImpl implements UserRepository {
        final ApiClient apiClient;
        UserRepositoryImpl(this.apiClient);
        // ...
      }
    `,
  },
  {
    id: 51,
    question: "What is MVVM in Flutter?",
    answer:
      "MVVM (Model-View-ViewModel) is an architectural pattern that separates the UI (View) from the business logic (ViewModel). The ViewModel exposes data streams to the View and handles user actions, while the Model represents the data.",
    example:
      "Use MVVM to create maintainable and testable Flutter apps, especially for complex UIs or data-driven apps.",
    realTimeExample:
      "MVVM is like a restaurant. The View (dining area) displays the food (data), the ViewModel (chef) prepares it, and the Model (ingredients) is the raw data.",
    realTimeExample2:
      "Think of MVVM as a TV show. The View (screen) displays the show (UI), the ViewModel (director) controls the scenes (logic), and the Model (script) is the data.",
    syntax: "N/A (Architectural pattern)",
    codeExample: `
      // ViewModel
      class CounterViewModel extends ChangeNotifier {
        int _count = 0;
        int get count => _count;
        void increment() {
          _count++;
          notifyListeners();
        }
      }

      // View
      class CounterView extends StatelessWidget {
        @override
        Widget build(BuildContext context) {
          final viewModel = Provider.of<CounterViewModel>(context);
          return ElevatedButton(
            onPressed: viewModel.increment,
            child: Text('Count: \${viewModel.count}'),
          );
        }
      }
    `,
  },
  {
    id: 52,
    question: "How to use Repository pattern?",
    answer:
      "The Repository pattern in Flutter abstracts data access logic, providing a clean API for the rest of the app. It acts as a mediator between the data layer (APIs, databases) and the business logic, making it easier to switch data sources.",
    example:
      "Use the Repository pattern to manage data from multiple sources, like APIs and local databases, in a unified way.",
    realTimeExample:
      "The Repository pattern is like a librarian. It finds the book (data) you need, whether it’s on the shelf (API) or in the archive (local database).",
    realTimeExample2:
      "Think of the Repository pattern as a personal shopper. It fetches items (data) from different stores (sources) so you don’t have to.",
    syntax:
      "abstract class UserRepository {\n  Future<User> getUser(int id);\n}",
    codeExample: `
      abstract class UserRepository {
        Future<User> getUser(int id);
      }

      class UserRepositoryImpl implements UserRepository {
        final ApiClient apiClient;
        final LocalDatabase localDatabase;

        UserRepositoryImpl(this.apiClient, this.localDatabase);

        @override
        Future<User> getUser(int id) async {
          try {
            return await apiClient.getUser(id);
          } catch (e) {
            return await localDatabase.getUser(id);
          }
        }
      }
    `,
  },
  {
    id: 53,
    question: "What is Singleton pattern?",
    answer:
      "The Singleton pattern ensures that a class has only one instance and provides a global point of access to it. It is useful for managing shared resources like database connections or service locators.",
    example:
      "Use the Singleton pattern for services that should have a single instance, such as a logging service or a shared preferences manager.",
    realTimeExample:
      "The Singleton pattern is like a monarch. There’s only one king (instance) ruling the kingdom (app) at a time.",
    realTimeExample2:
      "Think of the Singleton pattern as a unique key. There’s only one key (instance) that can open a specific lock (resource).",
    syntax: "static final Singleton _instance = Singleton._internal();",
    codeExample: `
      class Singleton {
        static final Singleton _instance = Singleton._internal();
        factory Singleton() => _instance;
        Singleton._internal();
      }
    `,
  },
  {
    id: 54,
    question: "How to handle app lifecycle?",
    answer:
      "To handle the app lifecycle in Flutter, implement WidgetsBindingObserver and override didChangeAppLifecycleState. This allows you to respond to app state changes like paused, resumed, or detached.",
    example:
      "Use app lifecycle handling to pause animations, save state, or release resources when the app is in the background.",
    realTimeExample:
      "Handling app lifecycle is like a security guard. It monitors the app’s state (paused/resumed) and takes action (save state) when needed.",
    realTimeExample2:
      "Think of app lifecycle handling as a caretaker. It ensures the app (house) is secure (state saved) when you’re away (background) and ready when you return (foreground).",
    syntax:
      "WidgetsBinding.instance.addObserver(this)\n@override\nvoid didChangeAppLifecycleState(AppLifecycleState state) { ... }",
    codeExample: `
      class MyWidget extends StatefulWidget {
        @override
        _MyWidgetState createState() => _MyWidgetState();
      }

      class _MyWidgetState extends State<MyWidget> with WidgetsBindingObserver {
        @override
        void initState() {
          super.initState();
          WidgetsBinding.instance.addObserver(this);
        }

        @override
        void didChangeAppLifecycleState(AppLifecycleState state) {
          if (state == AppLifecycleState.paused) {
            print('App paused');
          }
        }

        @override
        void dispose() {
          WidgetsBinding.instance.removeObserver(this);
          super.dispose();
        }
      }
    `,
  },
  {
    id: 55,
    question: "What is WidgetsBindingObserver?",
    answer:
      "WidgetsBindingObserver in Flutter is an interface for observing app lifecycle changes. By implementing it, widgets can respond to events like app pause, resume, or inactivity.",
    example:
      "Use WidgetsBindingObserver to manage resources, save user progress, or adjust UI based on the app’s state.",
    realTimeExample:
      "WidgetsBindingObserver is like a lifeguard. It watches over the app (pool) and responds to changes (lifecycle events) to keep everything safe (state managed).",
    realTimeExample2:
      "Think of WidgetsBindingObserver as a weather station. It monitors conditions (app state) and triggers alerts (callbacks) when changes occur (e.g., storm/pause).",
    syntax:
      "with WidgetsBindingObserver\nWidgetsBinding.instance.addObserver(this)",
    codeExample: `
      class LifecycleAwareWidget extends StatefulWidget {
        @override
        _LifecycleAwareWidgetState createState() => _LifecycleAwareWidgetState();
      }

      class _LifecycleAwareWidgetState extends State<LifecycleAwareWidget> with WidgetsBindingObserver {
        @override
        void initState() {
          super.initState();
          WidgetsBinding.instance.addObserver(this);
        }

        @override
        void didChangeAppLifecycleState(AppLifecycleState state) {
          print('App state changed to: $state');
        }

        @override
        void dispose() {
          WidgetsBinding.instance.removeObserver(this);
          super.dispose();
        }
      }
    `,
  },
  {
    id: 56,
    question: "How to implement dark mode?",
    answer:
      "To implement dark mode in Flutter, use ThemeMode.system or manually toggle between light and dark ThemeData in MaterialApp. Provide custom themes for both modes and use MediaQuery to detect user preferences.",
    example:
      "Use dark mode to improve accessibility, reduce eye strain, and follow system-wide theme preferences.",
    realTimeExample:
      "Dark mode is like sunglasses for your app. It adjusts the colors (theme) to reduce glare (eye strain) in low light.",
    realTimeExample2:
      "Think of dark mode as a night light. It dims the brightness (theme) to make the app (room) more comfortable at night.",
    syntax: "ThemeMode.system\nThemeData.dark()",
    codeExample: `
      MaterialApp(
        theme: ThemeData.light(),
        darkTheme: ThemeData.dark(),
        themeMode: ThemeMode.system,
        home: MyHomePage(),
      )
    `,
  },
  {
    id: 57,
    question: "What is Theme extension?",
    answer:
      "Theme extension in Flutter allows you to add custom properties to ThemeData, enabling app-specific theming beyond the default Material Design properties. It is useful for defining custom colors, typography, or other design tokens.",
    example:
      "Use theme extensions to create a consistent and customizable design system for your app.",
    realTimeExample:
      "Theme extension is like a custom paint palette. It lets you define unique colors (properties) for your app (canvas).",
    realTimeExample2:
      "Think of theme extension as a wardrobe. It provides custom outfits (themes) for your app (model) to wear.",
    syntax: "ThemeData(extensions: [MyThemeExtension(myColor: Colors.blue)])",
    codeExample: `
      class MyThemeExtension extends ThemeExtension<MyThemeExtension> {
        final Color myColor;
        MyThemeExtension({required this.myColor});
        @override
        MyThemeExtension copyWith({Color? myColor}) => MyThemeExtension(myColor: myColor ?? this.myColor);
        @override
        MyThemeExtension lerp(ThemeExtension<MyThemeExtension>? other, double t) => this;
      }

      MaterialApp(
        theme: ThemeData(
          extensions: [MyThemeExtension(myColor: Colors.blue)],
        ),
        home: MyHomePage(),
      )
    `,
  },
  {
    id: 58,
    question: "How to use custom fonts?",
    answer:
      "To use custom fonts in Flutter, add the font files to your project’s assets, declare them in pubspec.yaml, and use the fontFamily property in TextStyle to apply them to text widgets.",
    example:
      "Use custom fonts to enhance your app’s branding and typography, making it stand out and align with your design system.",
    realTimeExample:
      "Custom fonts are like handwriting styles. They give your app (letter) a unique personality (branding) and voice (typography).",
    realTimeExample2:
      "Think of custom fonts as outfits. They change the appearance (text) of your app (person) to match the occasion (brand).",
    syntax: `
      fonts:
        - family: MyFont
          fonts:
            - asset: fonts/MyFont-Regular.ttf
            - asset: fonts/MyFont-Bold.ttf
              weight: 700
    `,
    codeExample: `
      // pubspec.yaml
      flutter:
        fonts:
          - family: MyFont
            fonts:
              - asset: fonts/MyFont-Regular.ttf
              - asset: fonts/MyFont-Bold.ttf
                weight: 700

      // Usage
      Text(
        'Hello, Custom Font!',
        style: TextStyle(fontFamily: 'MyFont', fontWeight: FontWeight.bold),
      )
    `,
  },
  {
    id: 59,
    question: "What is flutter_svg?",
    answer:
      "flutter_svg is a Flutter plugin for displaying SVG (Scalable Vector Graphics) images. It allows you to render high-quality, scalable vector graphics in your app, which are ideal for icons, logos, and complex illustrations.",
    example:
      "Use flutter_svg for app icons, logos, or illustrations that need to scale perfectly on all screen sizes.",
    realTimeExample:
      "flutter_svg is like a sticker sheet. It lets you place scalable stickers (SVG images) anywhere in your app (notebook).",
    realTimeExample2:
      "Think of flutter_svg as a stamp collection. It provides high-quality stamps (SVG images) that can be resized without losing detail.",
    syntax:
      "SvgPicture.asset('images/logo.svg')\nSvgPicture.network('https://example.com/logo.svg')",
    codeExample: `
      SvgPicture.asset(
        'images/logo.svg',
        width: 100,
        height: 100,
        color: Colors.blue,
      )
    `,
  },
  {
    id: 60,
    question: "How to implement localization?",
    answer:
      "To implement localization in Flutter, use the flutter_localizations package, create .arb files for translations, and use the Intl.message() function or the GeneratedLocalizations class to access localized strings.",
    example:
      "Use localization to support multiple languages in your app, making it accessible to a global audience.",
    realTimeExample:
      "Localization is like a universal translator. It converts your app’s language (text) to match the user’s preferred language (locale).",
    realTimeExample2:
      "Think of localization as a menu with multiple languages. It lets users choose their preferred language (translation) for the dishes (app content).",
    syntax: "flutter_localizations:\n  sdk: flutter\nintl: ^0.17.0",
    codeExample: `
      // pubspec.yaml
      dependencies:
        flutter_localizations:
          sdk: flutter
        intl: ^0.17.0

      // arb file (app_en.arb)
      {
        "helloWorld": "Hello, World!",
        "@helloWorld": {
          "description": "A greeting displayed on the home screen."
        }
      }

      // Usage
      Text(AppLocalizations.of(context)!.helloWorld)
    `,
  },
  {
    id: 61,
    question: "What is intl package?",
    answer:
      "The intl package in Dart provides internationalization and localization utilities, including message translation, date/number formatting, and plural/gender handling. It is commonly used with flutter_localizations for full app localization.",
    example:
      "Use intl to format dates, numbers, and messages according to the user’s locale, ensuring a localized experience.",
    realTimeExample:
      "The intl package is like a cultural guide. It helps your app (tourist) adapt to local customs (locales) like dates, numbers, and greetings.",
    realTimeExample2:
      "Think of intl as a language tutor. It teaches your app (student) how to speak (format) and write (translate) in different languages (locales).",
    syntax: "Intl.message('Hello', name: 'greeting')",
    codeExample: `
      import 'package:intl/intl.dart';
      String formattedDate = DateFormat.yMMMd().format(DateTime.now());
      String greeting = Intl.message('Hello, World!', name: 'greeting');
    `,
  },
  {
    id: 62,
    question: "How to handle different screen sizes?",
    answer:
      "To handle different screen sizes in Flutter, use MediaQuery for screen dimensions, LayoutBuilder for constraints, and responsive design techniques like Flexible, Expanded, or AspectRatio. You can also use packages like flutter_screenutil for scalable UI.",
    example:
      "Use responsive design to ensure your app looks great on all devices, from phones to tablets.",
    realTimeExample:
      "Handling screen sizes is like tailoring clothes. You adjust the fit (UI) to match the body (screen) perfectly.",
    realTimeExample2:
      "Think of responsive design as a stretchy fabric. It expands or shrinks (UI) to fit any frame (screen size).",
    syntax:
      "MediaQuery.of(context).size\nLayoutBuilder(builder: (context, constraints) { ... })",
    codeExample: `
      // Using MediaQuery
      final screenWidth = MediaQuery.of(context).size.width;

      // Using LayoutBuilder
      LayoutBuilder(
        builder: (context, constraints) {
          return Container(
            width: constraints.maxWidth * 0.8,
            height: constraints.maxHeight * 0.5,
            color: Colors.blue,
          );
        },
      )
    `,
  },
  {
    id: 63,
    question: "What is LayoutBuilder?",
    answer:
      "LayoutBuilder in Flutter provides the constraints of its parent widget, allowing you to build widgets that adapt to the available space. It is useful for creating responsive and flexible layouts.",
    example:
      "Use LayoutBuilder to create widgets that resize or rearrange based on their parent’s constraints, such as responsive grids or adaptive containers.",
    realTimeExample:
      "LayoutBuilder is like a chameleon. It adapts its appearance (layout) based on its environment (parent constraints).",
    realTimeExample2:
      "Think of LayoutBuilder as a shape-shifter. It changes its form (widget) to fit the space (constraints) available.",
    syntax: "LayoutBuilder(builder: (context, constraints) { ... })",
    codeExample: `
      LayoutBuilder(
        builder: (context, constraints) {
          return Container(
            width: constraints.maxWidth,
            height: constraints.maxHeight / 2,
            color: Colors.green,
          );
        },
      )
    `,
  },
  {
    id: 64,
    question: "How to implement responsive design?",
    answer:
      "To implement responsive design in Flutter, use MediaQuery for screen dimensions, OrientationBuilder for orientation changes, and conditional layouts based on breakpoints. Packages like flutter_screenutil can also help with scalable UI.",
    example:
      "Use responsive design to ensure your app adapts to different screen sizes and orientations, providing an optimal experience on all devices.",
    realTimeExample:
      "Responsive design is like a responsive friend. It adjusts its behavior (UI) to fit the situation (screen size).",
    realTimeExample2:
      "Think of responsive design as a liquid. It flows (UI) to fill any container (screen) perfectly.",
    syntax:
      "MediaQuery.of(context).size\nOrientationBuilder(builder: (context, orientation) { ... })",
    codeExample: `
      // Responsive layout based on screen width
      final screenWidth = MediaQuery.of(context).size.width;
      final isMobile = screenWidth < 600;

      if (isMobile) {
        return MobileLayout();
      } else {
        return DesktopLayout();
      }
    `,
  },
  {
    id: 65,
    question: "What is flutter_screenutil?",
    answer:
      "flutter_screenutil is a Flutter plugin that provides utilities for responsive UI design. It allows you to adapt screen sizes and font sizes based on the device’s dimensions, making it easier to create apps that look consistent across devices.",
    example:
      "Use flutter_screenutil to scale your UI elements proportionally, ensuring a uniform look on phones, tablets, and desktops.",
    realTimeExample:
      "flutter_screenutil is like a universal adapter. It adjusts your UI (plug) to fit any screen size (outlet).",
    realTimeExample2:
      "Think of flutter_screenutil as a tailor. It measures the screen (body) and adjusts the UI (clothes) for a perfect fit.",
    syntax: "ScreenUtil.init(context)\n100.w (width)\n20.h (height)",
    codeExample: `
      void main() {
        runApp(MyApp());
      }

      class MyApp extends StatelessWidget {
        @override
        Widget build(BuildContext context) {
          ScreenUtil.init(context);
          return MaterialApp(
            home: Scaffold(
              body: Container(
                width: 100.w,
                height: 100.h,
                color: Colors.blue,
              ),
            ),
          );
        }
      }
    `,
  },
  {
    id: 66,
    question: "How to use Sliver widgets?",
    answer:
      "Sliver widgets in Flutter are used within CustomScrollView to create advanced scrolling effects. Common slivers include SliverList, SliverGrid, SliverAppBar, and SliverToBoxAdapter, which allow for complex and customizable scrollable layouts.",
    example:
      "Use Sliver widgets to create scrollable layouts with multiple sections, like a list with a header, grid, and footer.",
    realTimeExample:
      "Sliver widgets are like a collage. They let you arrange different pieces (slivers) in a scrollable canvas (CustomScrollView).",
    realTimeExample2:
      "Think of Sliver widgets as a playlist. They combine different tracks (slivers) into a seamless listening experience (scrollable layout).",
    syntax: "CustomScrollView(slivers: [...])",
    codeExample: `
      CustomScrollView(
        slivers: [
          SliverAppBar(
            title: Text('Sliver Demo'),
            expandedHeight: 200,
          ),
          SliverList(
            delegate: SliverChildBuilderDelegate(
              (context, index) => ListTile(title: Text('Item $index')),
              childCount: 20,
            ),
          ),
        ],
      )
    `,
  },
  {
    id: 67,
    question: "What is CustomScrollView?",
    answer:
      "CustomScrollView in Flutter creates scrollable views with multiple slivers, allowing for complex and customizable scrolling behaviors. It is ideal for combining different scrollable widgets, like lists, grids, and app bars, into a single scrollable area.",
    example:
      "Use CustomScrollView to create advanced UI patterns, such as a profile screen with a collapsible header, a list of posts, and a grid of photos.",
    realTimeExample:
      "CustomScrollView is like a custom playlist. You can mix and match different songs (slivers) to create a unique listening experience (scroll effect).",
    realTimeExample2:
      "Think of CustomScrollView as a scrapbook. It lets you arrange different pieces (slivers) in a scrollable layout (book).",
    syntax: "CustomScrollView(slivers: [...])",
    codeExample: `
      CustomScrollView(
        slivers: [
          SliverAppBar(
            title: Text('Custom Scroll'),
            expandedHeight: 200,
            flexibleSpace: FlexibleSpaceBar(background: Image.network('https://picsum.photos/200/300')),
          ),
          SliverList(
            delegate: SliverChildBuilderDelegate(
              (context, index) => ListTile(title: Text('Item $index')),
              childCount: 20,
            ),
          ),
        ],
      )
    `,
  },
  {
    id: 68,
    question: "How to implement pull to refresh?",
    answer:
      "To implement pull-to-refresh in Flutter, wrap a scrollable widget with RefreshIndicator and provide an onRefresh callback. The callback should return a Future that completes when the refresh operation is done.",
    example:
      "Use pull-to-refresh to update data in lists, feeds, or dashboards when the user pulls down the screen.",
    realTimeExample:
      "Pull-to-refresh is like a faucet. You pull the handle (indicator) to refresh the water (content).",
    realTimeExample2:
      "Think of pull-to-refresh as a window shade. You pull it down (indicator) to let in fresh air (new data).",
    syntax:
      "RefreshIndicator(onRefresh: () async { ... }, child: ListView(...))",
    codeExample: `
      RefreshIndicator(
        onRefresh: () async {
          await Future.delayed(Duration(seconds: 1));
          // Fetch new data
        },
        child: ListView.builder(
          itemCount: items.length,
          itemBuilder: (context, index) => ListTile(title: Text(items[index])),
        ),
      )
    `,
  },
  {
    id: 69,
    question: "What is Dismissible?",
    answer:
      "Dismissible in Flutter allows widgets to be dismissed with a swipe gesture, typically used in lists to enable swipe-to-delete functionality. It provides visual feedback and callbacks for the dismissal action.",
    example:
      "Use Dismissible to let users remove items from a list, such as emails, tasks, or messages.",
    realTimeExample:
      "Dismissible is like a trash can. You swipe an item (paper) to dismiss (throw away) it.",
    realTimeExample2:
      "Think of Dismissible as a magic trick. You swipe (wave your wand) to make an item (object) disappear.",
    syntax:
      "Dismissible(key: Key('item'), onDismissed: (direction) { ... }, child: MyWidget())",
    codeExample: `
      Dismissible(
        key: Key('item_$index'),
        onDismissed: (direction) {
          setState(() {
            items.removeAt(index);
          });
        },
        child: ListTile(title: Text(items[index])),
      )
    `,
  },
  {
    id: 70,
    question: "How to implement search functionality?",
    answer:
      "To implement search functionality in Flutter, use a TextField for user input, filter a list of items based on the query, and update the UI with the filtered results. You can also use packages like flutter_typeahead for autocomplete suggestions.",
    example:
      "Use search functionality to let users find specific items in a list, such as products, contacts, or articles.",
    realTimeExample:
      "Search functionality is like a library catalog. You type a query (search term) and it finds the books (items) that match.",
    realTimeExample2:
      "Think of search functionality as a metal detector. It scans through data (sand) to find the items (treasures) you’re looking for.",
    syntax:
      "TextField(onChanged: (query) { ... })\nListView.builder(itemBuilder: ...)",
    codeExample: `
      TextField(
        onChanged: (query) {
          final filteredItems = items.where((item) => item.contains(query)).toList();
          setState(() => this.filteredItems = filteredItems);
        },
      ),
      ListView.builder(
        itemCount: filteredItems.length,
        itemBuilder: (context, index) => ListTile(title: Text(filteredItems[index])),
      )
    `,
  },
  {
    id: 71,
    question: "What is flutter_typeahead?",
    answer:
      "flutter_typeahead is a Flutter package that provides autocomplete functionality for text inputs. It displays suggestions as the user types, improving the search and input experience.",
    example:
      "Use flutter_typeahead for search bars, form inputs, or any text field where autocomplete suggestions would enhance usability.",
    realTimeExample:
      "flutter_typeahead is like a predictive text feature. It suggests completions (suggestions) as you type (query).",
    realTimeExample2:
      "Think of flutter_typeahead as a helpful librarian. It suggests books (suggestions) based on the title (query) you’re typing.",
    syntax:
      "TypeAheadField(textFieldConfiguration: ..., suggestionsCallback: (pattern) async { ... }, itemBuilder: (context, suggestion) { ... })",
    codeExample: `
      TypeAheadField(
        textFieldConfiguration: TextFieldConfiguration(
          decoration: InputDecoration(hintText: 'Search...'),
        ),
        suggestionsCallback: (pattern) async {
          return await getSuggestions(pattern);
        },
        itemBuilder: (context, suggestion) {
          return ListTile(title: Text(suggestion));
        },
        onSuggestionSelected: (suggestion) {
          // Handle selection
        },
      )
    `,
  },
  {
    id: 72,
    question: "How to use camera plugin?",
    answer:
      "To use the camera plugin in Flutter, add the camera dependency, request camera permissions, initialize a CameraController, and display the camera preview using CameraPreview. Handle lifecycle events to manage the camera resource properly.",
    example:
      "Use the camera plugin to implement features like QR code scanning, photo capture, or video recording.",
    realTimeExample:
      "Using the camera plugin is like opening a window. It lets your app (room) see the outside world (camera feed).",
    realTimeExample2:
      "Think of the camera plugin as a pair of binoculars. It brings the outside view (camera feed) into your app (viewfinder).",
    syntax:
      "CameraController(availableCameras[0], ResolutionPreset.high)\nCameraPreview(controller)",
    codeExample: `
      final cameras = await availableCameras();
      final controller = CameraController(cameras[0], ResolutionPreset.high);
      await controller.initialize();

      @override
      Widget build(BuildContext context) {
        if (!controller.value.isInitialized) return Container();
        return CameraPreview(controller);
      }

      @override
      void dispose() {
        controller.dispose();
        super.dispose();
      }
    `,
  },
  {
    id: 73,
    question: "What is image_picker?",
    answer:
      "image_picker is a Flutter plugin that allows users to pick images from the device’s gallery or take photos using the camera. It provides a simple API to access images and videos.",
    example:
      "Use image_picker to let users upload profile pictures, share photos, or attach images to messages.",
    realTimeExample:
      "image_picker is like a photo album. It lets users pick photos (images) from their collection (gallery) or take new ones (camera).",
    realTimeExample2:
      "Think of image_picker as a camera roll. It provides access to all the photos (images) stored on the device (gallery).",
    syntax: "ImagePicker().pickImage(source: ImageSource.gallery)",
    codeExample: `
      final picker = ImagePicker();
      final pickedFile = await picker.pickImage(source: ImageSource.gallery);
      if (pickedFile != null) {
        final image = File(pickedFile.path);
        // Use the image
      }
    `,
  },
  {
    id: 74,
    question: "How to implement video playback?",
    answer:
      "To implement video playback in Flutter, use the video_player plugin. Initialize a VideoPlayerController with a video source (network or asset), and display the video using VideoPlayer. Handle lifecycle events to manage resources.",
    example:
      "Use video playback to show tutorials, product demos, or user-generated content in your app.",
    realTimeExample:
      "Video playback is like a movie projector. It plays videos (films) from a source (reel) and displays them on a screen (app).",
    realTimeExample2:
      "Think of video playback as a DVD player. It reads the disc (video source) and plays the movie (video) on your TV (app).",
    syntax:
      "VideoPlayerController.network('https://example.com/video.mp4')\nVideoPlayer(controller)",
    codeExample: `
      final controller = VideoPlayerController.network('https://example.com/video.mp4');
      await controller.initialize();

      @override
      Widget build(BuildContext context) {
        return controller.value.isInitialized
            ? VideoPlayer(controller)
            : CircularProgressIndicator();
      }

      @override
      void dispose() {
        controller.dispose();
        super.dispose();
      }
    `,
  },
  {
    id: 75,
    question: "What is video_player?",
    answer:
      "video_player is a Flutter plugin for playing videos from assets, files, or the internet. It provides controls for playback, seeking, and volume, and supports full-screen and inline video display.",
    example:
      "Use video_player to embed video content in your app, such as tutorials, ads, or user-generated videos.",
    realTimeExample:
      "video_player is like a TV remote. It gives you control (play, pause, seek) over the video (show) being displayed (app).",
    realTimeExample2:
      "Think of video_player as a film reel. It contains the video (film) and plays it frame by frame (stream) in your app (theater).",
    syntax:
      "VideoPlayerController.asset('videos/sample.mp4')\nVideoPlayer(controller)",
    codeExample: `
      final controller = VideoPlayerController.asset('videos/sample.mp4');
      await controller.initialize();

      VideoPlayer(controller)
    `,
  },
  {
    id: 76,
    question: "How to use maps in Flutter?",
    answer:
      "To use maps in Flutter, add the google_maps_flutter plugin, obtain an API key from Google Cloud Console, and display a map using GoogleMap. Customize the map with markers, polylines, and other overlays.",
    example:
      "Use maps to show locations, provide directions, or visualize geographic data in your app.",
    realTimeExample:
      "Using maps in Flutter is like unfolding a treasure map. It shows you locations (treasures) and helps you navigate (directions) to them.",
    realTimeExample2:
      "Think of maps as a GPS device. It displays your position (location) and guides you (directions) to your destination (app feature).",
    syntax:
      "GoogleMap(initialCameraPosition: CameraPosition(target: LatLng(lat, lng), zoom: 12))",
    codeExample: `
      GoogleMap(
        initialCameraPosition: CameraPosition(
          target: LatLng(37.42796133580664, -122.085749655962),
          zoom: 12,
        ),
        markers: {
          Marker(
            markerId: MarkerId('place1'),
            position: LatLng(37.42796133580664, -122.085749655962),
          ),
        },
      )
    `,
  },
  {
    id: 77,
    question: "What is google_maps_flutter?",
    answer:
      "google_maps_flutter is a Flutter plugin that integrates Google Maps into Flutter apps. It provides widgets and controllers to display maps, add markers, and handle user interactions like taps and drags.",
    example:
      "Use google_maps_flutter to embed interactive maps in your app, such as for location-based services or navigation.",
    realTimeExample:
      "google_maps_flutter is like a window to the world. It lets your app (room) display maps (views) of any location (place).",
    realTimeExample2:
      "Think of google_maps_flutter as a globe. It shows you the world (map) and lets you explore it (interact) from your app (desk).",
    syntax:
      "GoogleMap(onMapCreated: (controller) { ... }, initialCameraPosition: CameraPosition(...))",
    codeExample: `
      late GoogleMapController mapController;
      final LatLng _center = LatLng(37.42796133580664, -122.085749655962);

      GoogleMap(
        onMapCreated: (controller) => mapController = controller,
        initialCameraPosition: CameraPosition(target: _center, zoom: 12),
      )
    `,
  },
  {
    id: 78,
    question: "How to implement chat functionality?",
    answer:
      "To implement chat functionality in Flutter, use WebSockets or Firebase for real-time messaging. Display messages in a ListView, handle user input with a TextField, and sync messages across devices using a backend service.",
    example:
      "Use chat functionality to enable real-time communication between users, such as in messaging apps or customer support features.",
    realTimeExample:
      "Chat functionality is like a walkie-talkie. It lets users send (messages) and receive (updates) information in real-time.",
    realTimeExample2:
      "Think of chat functionality as a telephone. It connects users (callers) for instant communication (messages).",
    syntax:
      "StreamBuilder<QuerySnapshot>(stream: FirebaseFirestore.instance.collection('messages').snapshots(), builder: ...)",
    codeExample: `
      // Sending a message
      FirebaseFirestore.instance.collection('messages').add({
        'text': messageText,
        'sender': userId,
        'timestamp': FieldValue.serverTimestamp(),
      });

      // Displaying messages
      StreamBuilder<QuerySnapshot>(
        stream: FirebaseFirestore.instance.collection('messages').orderBy('timestamp').snapshots(),
        builder: (context, snapshot) {
          if (!snapshot.hasData) return CircularProgressIndicator();
          return ListView.builder(
            itemCount: snapshot.data!.docs.length,
            itemBuilder: (context, index) {
              final message = snapshot.data!.docs[index];
              return ListTile(title: Text(message['text']));
            },
          );
        },
      )
    `,
  },
  {
    id: 79,
    question: "What is socket.io?",
    answer:
      "socket.io is a library that enables real-time, bidirectional communication between web clients and servers. It is commonly used for chat apps, live updates, and collaborative features, supporting fallback options for different transport mechanisms.",
    example:
      "Use socket.io in Flutter with the socket_io_client package to implement real-time features like chat, notifications, or live data feeds.",
    realTimeExample:
      "socket.io is like a live radio broadcast. It sends (emits) and receives (listens) messages in real-time between the server (station) and clients (listeners).",
    realTimeExample2:
      "Think of socket.io as a walkie-talkie network. It allows instant communication (messages) between all connected devices (users).",
    syntax:
      "io.socket('http://your-server.com')\nsocket.on('event', (data) { ... })\nsocket.emit('event', data)",
    codeExample: `
      final socket = io.io('http://your-server.com', <String, dynamic>{
        'transports': ['websocket'],
      });

      socket.on('connect', (_) => print('Connected'));
      socket.on('message', (data) => print('Message: $data'));
      socket.emit('message', 'Hello from Flutter!');
    `,
  },
  {
    id: 80,
    question: "How to use WebSockets?",
    answer:
      "To use WebSockets in Flutter, use the web_socket_channel package to establish a WebSocket connection, send and receive messages, and handle connection events like open, close, and errors.",
    example:
      "Use WebSockets for real-time features like live chat, stock tickers, or multiplayer game updates.",
    realTimeExample:
      "WebSockets are like a telephone line. They keep the connection (call) open for real-time communication (messages).",
    realTimeExample2:
      "Think of WebSockets as a live feed. They continuously stream (messages) updates (data) to your app (viewer).",
    syntax:
      "WebSocketChannel.connect(Uri.parse('wss://your-server.com'))\nchannel.stream.listen((message) { ... })",
    codeExample: `
      final channel = WebSocketChannel.connect(Uri.parse('wss://echo.websocket.org'));
      channel.stream.listen((message) {
        print('Received: $message');
      });
      channel.sink.add('Hello from Flutter!');
    `,
  },
  {
    id: 81,
    question: "What is flutter_webrtc?",
    answer:
      "flutter_webrtc is a Flutter plugin that enables WebRTC (Web Real-Time Communication) functionality for video calling, voice calling, and peer-to-peer data sharing. It provides APIs to access the device’s camera and microphone, and establish peer connections.",
    example:
      "Use flutter_webrtc to implement video conferencing, live streaming, or peer-to-peer communication in your app.",
    realTimeExample:
      "flutter_webrtc is like a video call app. It connects users (peers) for real-time video (communication) and audio (voice) interactions.",
    realTimeExample2:
      "Think of flutter_webrtc as a walkie-talkie with video. It lets users (peers) see and talk to each other (communicate) in real-time.",
    syntax: "RTCPeerConnection\nRTCVideoRenderer",
    codeExample: `
      final Map<String, dynamic> configuration = {
        "iceServers": [
          {"url": "stun:stun.l.google.com:19302"},
        ]
      };
      final peerConnection = await createPeerConnection(configuration);
      final renderer = RTCVideoRenderer();
      await renderer.initialize();
    `,
  },
  {
    id: 82,
    question: "How to implement barcode scanning?",
    answer:
      "To implement barcode scanning in Flutter, use packages like qr_code_scanner or mobile_scanner. Request camera permissions, initialize the scanner, and handle the scanned data in your app.",
    example:
      "Use barcode scanning for features like QR code payments, ticket validation, or inventory management.",
    realTimeExample:
      "Barcode scanning is like a supermarket scanner. It reads the code (barcode) and identifies the product (data).",
    realTimeExample2:
      "Think of barcode scanning as a secret decoder. It translates the code (barcode) into meaningful information (data).",
    syntax: "QRViewController\nBarcodeScanner.scan()",
    codeExample: `
      final qrKey = GlobalKey(debugLabel: 'QR');
      QRView(
        key: qrKey,
        onQRViewCreated: (controller) {
          controller.scannedDataStream.listen((scanData) {
            print('Scanned: \${scanData.code}');
          });
        },
      )
    `,
  },
  {
    id: 83,
    question: "What is qr_flutter?",
    answer:
      "qr_flutter is a Flutter package for generating QR codes as widgets. It allows you to create customizable QR codes with different colors, sizes, and error correction levels.",
    example:
      "Use qr_flutter to generate QR codes for sharing links, contact information, or payment details in your app.",
    realTimeExample:
      "qr_flutter is like a label maker. It creates QR codes (labels) that encode information (text) for easy sharing (scanning).",
    realTimeExample2:
      "Think of qr_flutter as a barcode generator. It produces scannable codes (QR) that store data (information).",
    syntax:
      "QrImage(data: 'https://example.com', version: QrVersions.auto, size: 200)",
    codeExample: `
      QrImage(
        data: 'https://example.com',
        version: QrVersions.auto,
        size: 200,
        backgroundColor: Colors.white,
      )
    `,
  },
  {
    id: 84,
    question: "How to use NFC?",
    answer:
      "To use NFC (Near Field Communication) in Flutter, use the nfc_manager package. Check for NFC availability, read or write NFC tags, and handle NFC events in your app.",
    example:
      "Use NFC for contactless payments, access control, or data transfer between devices.",
    realTimeExample:
      "Using NFC is like tapping a contactless card. It allows your app (device) to read or write data (tags) with a simple tap.",
    realTimeExample2:
      "Think of NFC as a digital handshake. It enables devices (apps) to exchange information (data) when they’re close together.",
    syntax:
      "NfcManager.instance.startSession()\nNfcManager.instance.stopSession()",
    codeExample: `
      NfcManager.instance.startSession(
        onDiscovered: (NfcTag tag) async {
          print('NFC Tag: \${tag.data}');
        },
      );
    `,
  },
  {
    id: 85,
    question: "What is nfc_manager?",
    answer:
      "nfc_manager is a Flutter plugin for reading and writing NFC (Near Field Communication) tags. It provides APIs to start and stop NFC sessions, and handle tag discovery events.",
    example:
      "Use nfc_manager to implement features like contactless payments, access cards, or data sharing via NFC tags.",
    realTimeExample:
      "nfc_manager is like a digital keychain. It lets your app (device) interact with NFC tags (keys) to unlock features (data).",
    realTimeExample2:
      "Think of nfc_manager as a scanner. It reads (scans) information from NFC tags (barcodes) and processes it in your app (system).",
    syntax:
      "NfcManager.instance.startSession(onDiscovered: (NfcTag tag) { ... })",
    codeExample: `
      bool _supported = false;
      String _result = '';

      @override
      void initState() {
        super.initState();
        NfcManager.instance.isAvailable().then((available) {
          setState(() => _supported = available);
        });
      }

      void _startSession() {
        NfcManager.instance.startSession(
          onDiscovered: (NfcTag tag) async {
            setState(() => _result = 'Tag found: \${tag.data}');
            await NfcManager.instance.stopSession();
          },
        );
      }
    `,
  },
  {
    id: 86,
    question: "How to implement biometric authentication?",
    answer:
      "To implement biometric authentication in Flutter, use the local_auth package. Check for available biometric methods (fingerprint, face recognition), authenticate the user, and handle success or failure.",
    example:
      "Use biometric authentication to secure sensitive app features, like logging in or confirming payments.",
    realTimeExample:
      "Biometric authentication is like a fingerprint lock. It uses your unique print (biometric) to grant access (authenticate).",
    realTimeExample2:
      "Think of biometric authentication as a facial recognition door. It scans your face (biometric) to unlock the door (app).",
    syntax:
      "LocalAuthentication().authenticate(localizedReason: 'Scan your fingerprint')",
    codeExample: `
      final localAuth = LocalAuthentication();
      bool canCheckBiometrics = await localAuth.canCheckBiometrics;
      bool authenticated = await localAuth.authenticate(
        localizedReason: 'Scan your fingerprint to authenticate',
      );
      if (authenticated) {
        print('Authenticated!');
      }
    `,
  },
  {
    id: 87,
    question: "What is local_auth?",
    answer:
      "local_auth is a Flutter plugin for authenticating users with biometric methods, such as fingerprint scanning or facial recognition. It provides a simple API to check for biometric support and perform authentication.",
    example:
      "Use local_auth to add an extra layer of security to your app, ensuring only authorized users can access sensitive features.",
    realTimeExample:
      "local_auth is like a bouncer with a biometric scanner. It checks your credentials (fingerprint/face) before letting you into the club (app).",
    realTimeExample2:
      "Think of local_auth as a personal bodyguard. It verifies your identity (biometric) before granting access (authentication) to your app (safe).",
    syntax: "LocalAuthentication().authenticate(localizedReason: 'Reason')",
    codeExample: `
      final localAuth = LocalAuthentication();
      try {
        bool authenticated = await localAuth.authenticate(
          localizedReason: 'Authenticate to access the app',
          options: AuthenticationOptions(biometricOnly: true),
        );
        print('Authenticated: $authenticated');
      } catch (e) {
        print('Error: $e');
      }
    `,
  },
  {
    id: 88,
    question: "How to use device sensors?",
    answer:
      "To use device sensors in Flutter, add the sensors_plus package. Access sensor data like accelerometer, gyroscope, or magnetometer readings, and use streams to receive real-time updates.",
    example:
      "Use device sensors to implement features like motion detection, orientation tracking, or augmented reality.",
    realTimeExample:
      "Device sensors are like a compass and a speedometer. They provide data (direction, speed) about the device’s (car’s) movement and orientation.",
    realTimeExample2:
      "Think of device sensors as a fitness tracker. They monitor the device’s (body’s) activity (movement) and provide real-time feedback (data).",
    syntax: "accelerometerEvents.listen((AccelerometerEvent event) { ... })",
    codeExample: `
      final accelerometerStream = sensors.accelerometerEvents;
      final subscription = accelerometerStream.listen((AccelerometerEvent event) {
        print('Accelerometer: x=\${event.x}, y=\${event.y}, z=\${event.z}');
      });
      // Cancel subscription when done
      subscription.cancel();
    `,
  },
  {
    id: 89,
    question: "What is sensors_plus?",
    answer:
      "sensors_plus is a Flutter plugin that provides access to device sensors, such as the accelerometer, gyroscope, and magnetometer. It offers streams of sensor data for real-time processing and analysis.",
    example:
      "Use sensors_plus to build apps that respond to device motion, like fitness trackers, games, or AR experiences.",
    realTimeExample:
      "sensors_plus is like a dashboard in a car. It provides real-time data (speed, direction) from the device’s sensors (instruments).",
    realTimeExample2:
      "Think of sensors_plus as a pilot’s control panel. It displays critical flight data (sensor readings) to help navigate (build features).",
    syntax: "sensors.accelerometerEvents\nsensors.gyroscopeEvents",
    codeExample: `
      StreamSubscription<AccelerometerEvent>? _subscription;
      void _listenToAccelerometer() {
        _subscription = sensors.accelerometerEvents.listen((event) {
          print('Accelerometer: x=\${event.x}, y=\${event.y}, z=\${event.z}');
        });
      }
      @override
      void dispose() {
        _subscription?.cancel();
        super.dispose();
      }
    `,
  },
  {
    id: 90,
    question: "How to implement background tasks?",
    answer:
      "To implement background tasks in Flutter, use the workmanager package for periodic tasks or flutter_background_service for long-running services. Register tasks, handle callbacks, and ensure proper initialization and cleanup.",
    example:
      "Use background tasks to sync data, fetch updates, or perform maintenance while the app is in the background or closed.",
    realTimeExample:
      "Background tasks are like a housekeeper. They work (sync, fetch) even when you’re not at home (app is closed), keeping everything tidy (updated).",
    realTimeExample2:
      "Think of background tasks as a background musician. They play (perform tasks) continuously, even when the main show (app) is on a break.",
    syntax:
      "Workmanager().registerPeriodicTask('taskName', 'simpleTask', frequency: Duration(hours: 1))",
    codeExample: `
      void callbackDispatcher() {
        Workmanager().executeTask((task, inputData) async {
          print('Background task running');
          return Future.value(true);
        });
      }

      void main() {
        WidgetsFlutterBinding.ensureInitialized();
        Workmanager().initialize(callbackDispatcher);
        Workmanager().registerPeriodicTask(
          'task1',
          'simpleTask',
          frequency: Duration(hours: 1),
        );
        runApp(MyApp());
      }
    `,
  },
  {
    id: 91,
    question: "What is workmanager?",
    answer:
      "workmanager is a Flutter plugin for scheduling background tasks that run periodically, even when the app is closed. It is ideal for tasks like syncing data, fetching updates, or performing maintenance.",
    example:
      "Use workmanager to ensure your app stays up-to-date with the latest data, even when users aren’t actively using it.",
    realTimeExample:
      "workmanager is like a scheduled cleaning service. It performs tasks (cleaning) on a regular basis (frequency), even when you’re not home (app is closed).",
    realTimeExample2:
      "Think of workmanager as a cron job. It runs tasks (jobs) at specified intervals (frequency) in the background (server).",
    syntax:
      "Workmanager().registerPeriodicTask('taskName', 'simpleTask', frequency: Duration(hours: 1))",
    codeExample: `
      void callbackDispatcher() {
        Workmanager().executeTask((task, inputData) async {
          print('Background task: $task');
          return Future.value(true);
        });
      }

      void main() {
        WidgetsFlutterBinding.ensureInitialized();
        Workmanager().initialize(callbackDispatcher);
        Workmanager().registerPeriodicTask(
          'task1',
          'simpleTask',
          frequency: Duration(hours: 1),
        );
        runApp(MyApp());
      }
    `,
  },
  {
    id: 92,
    question: "How to use isolates?",
    answer:
      "Isolates in Dart are separate threads of execution that allow you to run code concurrently. Use Isolate.spawn() to create a new isolate, and communicate between isolates using SendPort and ReceivePort for message passing.",
    example:
      "Use isolates to perform heavy computations, like image processing or data analysis, without blocking the main UI thread.",
    realTimeExample:
      "Isolates are like separate workers in a factory. Each worker (isolate) performs a task (computation) independently, and they communicate via notes (messages).",
    realTimeExample2:
      "Think of isolates as parallel universes. Each universe (isolate) runs its own timeline (code), and they send letters (messages) to each other to share information.",
    syntax: "Isolate.spawn(myFunction, message)\nReceivePort()\nSendPort",
    codeExample: `
      void heavyComputation(SendPort sendPort) {
        // Perform computation
        sendPort.send('Result');
      }

      void main() {
        final receivePort = ReceivePort();
        Isolate.spawn(heavyComputation, receivePort.sendPort);
        receivePort.listen((message) {
          print('Received: $message');
        });
      }
    `,
  },
  {
    id: 93,
    question: "What is compute function?",
    answer:
      "The compute function in Flutter runs a function in a separate isolate, allowing you to perform computationally intensive tasks without blocking the main UI thread. It is a simpler alternative to manually managing isolates.",
    example:
      "Use compute for tasks like parsing large JSON files, processing images, or performing complex calculations.",
    realTimeExample:
      "The compute function is like hiring a temporary assistant. You give them a task (function), they work on it separately (isolate), and return the result (output) to you.",
    realTimeExample2:
      "Think of compute as a background chef. They prepare a dish (computation) away from the dining area (UI thread), so your guests (users) aren’t kept waiting.",
    syntax: "compute(heavyFunction, inputData)",
    codeExample: `
      int heavyFunction(int input) {
        // Simulate heavy computation
        return input * 2;
      }

      final result = await compute(heavyFunction, 10);
      print('Result: $result');
    `,
  },
  {
    id: 94,
    question: "How to implement caching?",
    answer:
      "To implement caching in Flutter, use packages like flutter_cache_manager for HTTP caching or Hive for local data caching. Store responses or data locally and serve them when offline or to improve performance.",
    example:
      "Use caching to reduce load times, save bandwidth, and provide offline access to previously fetched data.",
    realTimeExample:
      "Caching is like a pantry. It stores frequently used ingredients (data) so you don’t have to go to the store (fetch from server) every time you cook (load data).",
    realTimeExample2:
      "Think of caching as a memory. It remembers (stores) things (data) you’ve seen before, so you can recall (access) them quickly later.",
    syntax:
      "DefaultCacheManager().getSingleFile('https://example.com/image.jpg')\nHive.box('cache').put('key', data)",
    codeExample: `
      // Using flutter_cache_manager
      final file = await DefaultCacheManager().getSingleFile('https://example.com/image.jpg');
      Image.file(file);

      // Using Hive
      final cacheBox = await Hive.openBox('cache');
      cacheBox.put('data_key', {'key': 'value'});
      final cachedData = cacheBox.get('data_key');
    `,
  },
  {
    id: 95,
    question: "What is flutter_cache_manager?",
    answer:
      "flutter_cache_manager is a Flutter plugin for caching and managing files, especially images and HTTP responses. It provides a simple API to download, store, and retrieve files, with configurable cache policies and expiration.",
    example:
      "Use flutter_cache_manager to cache images, videos, or API responses, improving performance and reducing data usage.",
    realTimeExample:
      "flutter_cache_manager is like a librarian. It keeps track of books (files), stores them (caches) for quick access, and removes old ones (expires cache) to make space.",
    realTimeExample2:
      "Think of flutter_cache_manager as a DVR. It records (caches) shows (files) so you can watch them (access) later without downloading again.",
    syntax:
      "DefaultCacheManager().getSingleFile('https://example.com/image.jpg')",
    codeExample: `
      final fileInfo = await DefaultCacheManager().getFileFromCache('https://example.com/image.jpg');
      if (fileInfo != null) {
        Image.file(fileInfo.file);
      } else {
        final file = await DefaultCacheManager().getSingleFile('https://example.com/image.jpg');
        Image.file(file);
      }
    `,
  },
  {
    id: 96,
    question: "How to use shared preferences advanced?",
    answer:
      "For advanced use of shared_preferences in Flutter, store complex data as JSON strings, manage multiple preference files, and use encryption for sensitive data. This allows you to handle more than just simple key-value pairs.",
    example:
      "Use advanced shared_preferences to store user profiles, app configurations, or encrypted tokens securely.",
    realTimeExample:
      "Advanced shared_preferences is like a secure vault. It not only stores your valuables (data) but also organizes them (JSON) and locks them up (encryption).",
    realTimeExample2:
      "Think of advanced shared_preferences as a smart notebook. It doesn’t just jot down notes (simple data), but also organizes them into sections (JSON) and protects sensitive pages (encryption).",
    syntax:
      "SharedPreferences.getInstance()\nprefs.setString('user', jsonEncode(userMap))",
    codeExample: `
      final prefs = await SharedPreferences.getInstance();
      final userMap = {'name': 'John', 'age': 30};
      await prefs.setString('user', jsonEncode(userMap));

      final userString = prefs.getString('user');
      final userData = jsonDecode(userString!);
    `,
  },
  {
    id: 97,
    question: "What is path_provider?",
    answer:
      "path_provider is a Flutter plugin that provides access to commonly used locations on the device’s filesystem, such as the documents directory, temporary directory, and application support directory.",
    example:
      "Use path_provider to save files, cache data, or store app-specific documents in the correct location for the platform.",
    realTimeExample:
      "path_provider is like a real estate agent. It helps you find the right location (directory) to store your belongings (files) on the device (property).",
    realTimeExample2:
      "Think of path_provider as a tour guide. It shows you where to store your files (documents, cache) on the device’s filesystem (city).",
    syntax: "getApplicationDocumentsDirectory()\ngetTemporaryDirectory()",
    codeExample: `
      final directory = await getApplicationDocumentsDirectory();
      final file = File('\${directory.path}/my_file.txt');
      await file.writeAsString('Hello, path_provider!');
    `,
  },
  {
    id: 98,
    question: "How to implement file operations?",
    answer:
      "To implement file operations in Flutter, use the dart:io library for file I/O, path_provider to get file paths, and the File class to read, write, and manage files on the device’s filesystem.",
    example:
      "Use file operations to save user-generated content, log data, or cache resources locally.",
    realTimeExample:
      "File operations are like using a filing cabinet. You can create (write), read, update, and delete (manage) files (documents) as needed.",
    realTimeExample2:
      "Think of file operations as a notebook. You can write (save), read (load), and erase (delete) notes (files) in your notebook (filesystem).",
    syntax:
      "File('path/to/file.txt').writeAsString('content')\nFile('path/to/file.txt').readAsString()",
    codeExample: `
      final directory = await getApplicationDocumentsDirectory();
      final file = File('\${directory.path}/data.txt');
      await file.writeAsString('Hello, file operations!');
      final content = await file.readAsString();
      print(content);
    `,
  },
  {
    id: 99,
    question: "What is flutter_downloader?",
    answer:
      "flutter_downloader is a Flutter plugin for managing file downloads with support for progress tracking, background downloads, and multiple tasks. It is ideal for downloading large files or multiple files simultaneously.",
    example:
      "Use flutter_downloader to implement features like file downloads, app updates, or media downloads in your app.",
    realTimeExample:
      "flutter_downloader is like a download manager. It handles multiple downloads (tasks), tracks progress (percentage), and works even when the app is closed (background).",
    realTimeExample2:
      "Think of flutter_downloader as a delivery service. It fetches files (packages) from the server (warehouse) and delivers them to your app (doorstep), with real-time tracking (progress).",
    syntax:
      "FlutterDownloader.enqueue(url: 'https://example.com/file.zip', savedDir: 'Downloads')",
    codeExample: `
      final taskId = await FlutterDownloader.enqueue(
        url: 'https://example.com/file.zip',
        savedDir: (await getExternalStorageDirectory())!.path,
        showNotification: true,
        openFileFromNotification: true,
      );
    `,
  },
  {
    id: 100,
    question: "How to implement in-app purchases?",
    answer:
      "To implement in-app purchases in Flutter, use the in_app_purchase package. Configure your products in the app stores (Google Play, App Store), connect to the package, and handle purchase flows, subscriptions, and receipt validation.",
    example:
      "Use in-app purchases to monetize your app with one-time purchases, subscriptions, or consumable items.",
    realTimeExample:
      "In-app purchases are like a vending machine. Users insert money (pay) to get a product (feature) from your app (machine).",
    realTimeExample2:
      "Think of in-app purchases as a ticket booth. Users buy tickets (purchases) to access premium features (events) in your app (venue).",
    syntax:
      "InAppPurchase.instance.queryProductDetails({'product_id'})\nInAppPurchase.instance.buyNonConsumable(purchaseParam: ...)",
    codeExample: `
      final bool available = await InAppPurchase.instance.isAvailable();
      if (!available) return;

      final ProductDetailsResponse response = await InAppPurchase.instance.queryProductDetails({'premium_upgrade'});
      if (response.notFoundIDs.isNotEmpty) return;

      final PurchaseParam purchaseParam = PurchaseParam(productDetails: response.productDetails.first);
      await InAppPurchase.instance.buyNonConsumable(purchaseParam: purchaseParam);
    `,
  },
  {
    id: 101,
    question: "What is in_app_purchase?",
    answer:
      "in_app_purchase is a Flutter plugin that provides APIs for in-app purchases and subscriptions on both Android (Google Play) and iOS (App Store). It handles product queries, purchase flows, and receipt validation.",
    example:
      "Use in_app_purchase to sell digital goods, premium features, or subscriptions within your app.",
    realTimeExample:
      "in_app_purchase is like a cash register. It processes payments (purchases) and keeps track of sales (receipts) in your app (store).",
    realTimeExample2:
      "Think of in_app_purchase as a subscription service. It manages user purchases (subscriptions) and ensures access to premium content (features).",
    syntax:
      "InAppPurchase.instance.queryProductDetails({'product_id'})\nInAppPurchase.instance.buyConsumable(purchaseParam: ...)",
    codeExample: `
      final ProductDetailsResponse response = await InAppPurchase.instance.queryProductDetails({'premium_subscription'});
      if (response.productDetails.isEmpty) return;

      final PurchaseParam purchaseParam = PurchaseParam(productDetails: response.productDetails.first);
      InAppPurchase.instance.buyConsumable(purchaseParam: purchaseParam);
    `,
  },
  {
    id: 102,
    question: "How to use advertising?",
    answer:
      "To use advertising in Flutter, integrate the google_mobile_ads package. Initialize the MobileAds SDK, load and display banner, interstitial, or rewarded ads, and handle ad events like impressions and clicks.",
    example:
      "Use advertising to monetize your app with ads, such as banners in free apps or rewarded ads for premium content.",
    realTimeExample:
      "Advertising in apps is like a billboard. It displays ads (messages) to users (audience) and generates revenue (income) for the app (business).",
    realTimeExample2:
      "Think of app advertising as a commercial break. It shows ads (commercials) during the app’s usage (show) to fund the content (app features).",
    syntax:
      "MobileAds.instance.initialize()\nBannerAd(listener: ..., adUnitId: 'ca-app-pub-...', size: AdSize.banner)",
    codeExample: `
      await MobileAds.instance.initialize();
      final BannerAd bannerAd = BannerAd(
        adUnitId: 'ca-app-pub-3940256099942544/6300978111',
        size: AdSize.banner,
        request: AdRequest(),
        listener: BannerAdListener(),
      );
      bannerAd.load();
    `,
  },
  {
    id: 103,
    question: "What is google_mobile_ads?",
    answer:
      "google_mobile_ads is a Flutter plugin for integrating Google Mobile Ads SDK, enabling display of banner, interstitial, rewarded, and native ads in Flutter apps. It supports ad mediation and advanced targeting.",
    example:
      "Use google_mobile_ads to monetize your app with ads from Google AdMob, Ad Manager, or other mediated networks.",
    realTimeExample:
      "google_mobile_ads is like an ad agency. It connects your app (client) with advertisers (ads) and manages the ad campaigns (display).",
    realTimeExample2:
      "Think of google_mobile_ads as a billboard operator. It displays ads (billboards) in your app (city) and handles the logistics (targeting, mediation).",
    syntax:
      "MobileAds.instance.initialize()\nInterstitialAd.load(adUnitId: 'ca-app-pub-...', request: AdRequest(), adLoadCallback: ...)",
    codeExample: `
      await MobileAds.instance.initialize();
      InterstitialAd.load(
        adUnitId: 'ca-app-pub-3940256099942544/1033173712',
        request: AdRequest(),
        adLoadCallback: InterstitialAdLoadCallback(
          onAdLoaded: (ad) => ad.show(),
          onAdFailedToLoad: (error) => print('Ad failed to load: $error'),
        ),
      );
    `,
  },
  {
    id: 104,
    question: "How to implement analytics?",
    answer:
      "To implement analytics in Flutter, use the firebase_analytics package. Log events like screen views, user actions, or custom events, and view the data in the Firebase console to gain insights into user behavior.",
    example:
      "Use analytics to track user engagement, feature usage, and conversion funnels, helping you make data-driven decisions to improve your app.",
    realTimeExample:
      "Analytics is like a fitness tracker. It records your app’s activity (events) and provides insights (data) into its performance (health).",
    realTimeExample2:
      "Think of analytics as a black box recorder. It logs every action (event) in your app (flight) for later analysis (improvement).",
    syntax:
      "FirebaseAnalytics.instance.logEvent(name: 'screen_view', parameters: {'screen_name': 'home'})",
    codeExample: `
      await FirebaseAnalytics.instance.logEvent(
        name: 'login',
        parameters: {'method': 'email'},
      );
      await FirebaseAnalytics.instance.setAnalyticsCollectionEnabled(true);
    `,
  },
  {
    id: 105,
    question: "What is firebase_analytics?",
    answer:
      "firebase_analytics is a Flutter plugin for Google Analytics for Firebase. It allows you to log custom events, set user properties, and track screen views, providing detailed insights into app usage and user behavior.",
    example:
      "Use firebase_analytics to understand how users interact with your app, which features are popular, and where users drop off.",
    realTimeExample:
      "firebase_analytics is like a spyglass. It gives you a clear view (insights) of what’s happening (user behavior) in your app (ship).",
    realTimeExample2:
      "Think of firebase_analytics as a detective. It gathers clues (data) about user actions (events) to solve the mystery (improve app).",
    syntax:
      "FirebaseAnalytics.instance.logEvent(name: 'event_name', parameters: {'key': 'value'})",
    codeExample: `
      await FirebaseAnalytics.instance.logLogin(loginMethod: 'email');
      await FirebaseAnalytics.instance.setUserProperty(name: 'user_type', value: 'premium');
    `,
  },
  {
    id: 106,
    question: "How to deploy Flutter app?",
    answer:
      "To deploy a Flutter app, build the app for the target platform (APK for Android, IPA for iOS, or web), test it thoroughly, and publish it to the respective app stores (Google Play, App Store) or hosting services. Use tools like fastlane for automation.",
    example:
      "Deploy your app to make it available to users on their devices, ensuring it meets all platform guidelines and requirements.",
    realTimeExample:
      "Deploying a Flutter app is like launching a rocket. You prepare the payload (app), count down (build), and launch it (publish) into orbit (app store).",
    realTimeExample2:
      "Think of app deployment as opening a new store. You stock the shelves (build), decorate the space (test), and open the doors (publish) for customers (users).",
    syntax: "flutter build apk\nflutter build ios\nflutter build web",
    codeExample: `
      // Build commands
      flutter build apk --release
      flutter build ios --release
      flutter build web
    `,
  },
  {
    id: 107,
    question: "What is fastlane?",
    answer:
      "fastlane is a tool for automating mobile app deployment processes, such as building, testing, and releasing apps to the App Store and Google Play. It streamlines repetitive tasks and ensures consistent deployments.",
    example:
      "Use fastlane to automate your release workflow, from code signing to app store submissions, saving time and reducing errors.",
    realTimeExample:
      "fastlane is like a conveyor belt in a factory. It automates the assembly (build), quality check (test), and packaging (release) of your app (product).",
    realTimeExample2:
      "Think of fastlane as a personal assistant. It handles all the repetitive tasks (build, deploy) so you can focus on improving your app (business).",
    syntax: "fastlane init\nfastlane supply (Android)\nfastlane pilot (iOS)",
    codeExample: `
      // Fastfile (fastlane configuration)
      lane :release do
        build_app(scheme: "MyApp")
        upload_to_app_store
        upload_to_play_store
      end
    `,
  },
  {
    id: 108,
    question: "How to use CI/CD with Flutter?",
    answer:
      "To use CI/CD (Continuous Integration/Continuous Deployment) with Flutter, set up workflows in services like GitHub Actions, GitLab CI, or Codemagic. Configure build, test, and deployment steps to automate the release process.",
    example:
      "Use CI/CD to ensure your app is automatically built, tested, and deployed whenever you push code changes, improving reliability and speeding up releases.",
    realTimeExample:
      "CI/CD is like an assembly line. It automates the process of building (assembling), testing (quality check), and deploying (packaging) your app (product).",
    realTimeExample2:
      "Think of CI/CD as a robot chef. It follows your recipe (workflow) to prepare (build), taste-test (test), and serve (deploy) your app (dish) perfectly every time.",
    syntax:
      "name: CI/CD Pipeline\non: [push]\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v2\n      - uses: subosito/flutter-action@v2\n      - run: flutter build apk",
    codeExample: `
      // GitHub Actions workflow (.github/workflows/flutter.yml)
      name: Flutter CI/CD
      on: [push]
      jobs:
        build:
          runs-on: ubuntu-latest
          steps:
            - uses: actions/checkout@v2
            - uses: subosito/flutter-action@v2
            - run: flutter pub get
            - run: flutter test
            - run: flutter build apk
            - uses: actions/upload-artifact@v2
              with:
                name: app-release.apk
                path: build/app/outputs/flutter-apk/app-release.apk
    `,
  },
  {
    id: 109,
    question: "What is Codemagic?",
    answer:
      "Codemagic is a CI/CD service specifically designed for Flutter apps. It automates building, testing, and publishing Flutter apps to app stores, supporting both Android and iOS platforms with minimal configuration.",
    example:
      "Use Codemagic to streamline your Flutter app’s release process, from code push to app store deployment, with built-in support for Flutter and native builds.",
    realTimeExample:
      "Codemagic is like a magic wand for app deployment. It automates the entire process (build, test, deploy) with a wave (configuration) of your hand.",
    realTimeExample2:
      "Think of Codemagic as a fairy godmother. It transforms your code (pumpkin) into a fully deployed app (carriage) ready for the ball (app store).",
    syntax: "codemagic.yaml (configuration file)",
    codeExample: `
      # codemagic.yaml
      workflows:
        flutter-workflow:
          name: Flutter Workflow
          instance_type: mac_mini
          max_build_duration: 60
          environment:
            flutter: stable
          scripts:
            - flutter packages pub get
            - flutter test
            - flutter build apk --release
          artifacts:
            - build/**/outputs/**/*.apk
    `,
  },
  {
    id: 110,
    question: "How to implement deep linking?",
    answer:
      "To implement deep linking in Flutter, use the uni_links package to handle incoming links, configure Android Intent Filters and iOS Universal Links, and parse the incoming URL to navigate to the appropriate screen in your app.",
    example:
      "Use deep linking to allow users to open specific screens in your app directly from emails, websites, or other apps.",
    realTimeExample:
      "Deep linking is like a GPS coordinate. It takes users directly to a specific location (screen) in your app (map) from an external link (address).",
    realTimeExample2:
      "Think of deep linking as a teleportation device. It instantly transports users (click) to a precise spot (screen) in your app (universe).",
    syntax:
      "uni_links.getInitialLink()\nuni_links.uriLinkStream.listen((Uri? uri) { ... })",
    codeExample: `
      // Handle initial link
      final initialUri = await getInitialUri();
      if (initialUri != null) {
        navigateToScreen(initialUri.path);
      }

      // Listen for incoming links
      uriLinkStream.listen((Uri? uri) {
        if (uri != null) {
          navigateToScreen(uri.path);
        }
      });
    `,
  },
  {
    id: 111,
    question: "What is uni_links?",
    answer:
      "uni_links is a Flutter plugin for handling deep links and universal links. It provides streams for incoming links and methods to retrieve the initial link that launched the app, supporting both Android and iOS platforms.",
    example:
      "Use uni_links to implement deep linking, allowing users to open specific content in your app from external sources like emails or websites.",
    realTimeExample:
      "uni_links is like a receptionist. It receives incoming calls (links) and directs them (navigates) to the right department (screen) in your app (office).",
    realTimeExample2:
      "Think of uni_links as a mail sorter. It reads the address (URL) on each letter (link) and delivers it to the correct mailbox (screen).",
    syntax: "getInitialUri()\nuriLinkStream.listen((Uri? uri) { ... })",
    codeExample: `
      // Check initial URI
      final initialUri = await getInitialUri();
      if (initialUri != null) {
        print('Initial URI: $initialUri');
      }

      // Listen for URI changes
      final subscription = uriLinkStream.listen((Uri? uri) {
        if (uri != null) {
          print('New URI: $uri');
        }
      });

      // Cancel subscription when done
      subscription.cancel();
    `,
  },
  {
    id: 112,
    question: "How to use dynamic links?",
    answer:
      "To use dynamic links in Flutter, integrate the firebase_dynamic_links package. Create dynamic links in the Firebase console, handle incoming links in your app, and navigate users to the appropriate content based on the link data.",
    example:
      "Use dynamic links to drive user engagement, such as sharing app content, referral programs, or deep linking to specific screens.",
    realTimeExample:
      "Dynamic links are like smart invitations. They take users directly to the event (content) in your app (venue), even if they don’t have the app installed yet (fallback URL).",
    realTimeExample2:
      "Think of dynamic links as magic portals. They transport users (click) to a specific place (screen) in your app (world), regardless of their starting point (installed/uninstalled).",
    syntax:
      "FirebaseDynamicLinks.instance.onLink.listen((dynamicLinkData) { ... })\nFirebaseDynamicLinks.instance.getInitialLink()",
    codeExample: `
      // Handle dynamic links
      FirebaseDynamicLinks.instance.onLink.listen((dynamicLinkData) {
        final Uri? deepLink = dynamicLinkData?.link;
        if (deepLink != null) {
          navigateToScreen(deepLink.path);
        }
      }).onError((error) {
        print('Error: $error');
      });

      // Check initial link
      final initialLink = await FirebaseDynamicLinks.instance.getInitialLink();
      if (initialLink != null) {
        navigateToScreen(initialLink.link.path);
      }
    `,
  },
  {
    id: 113,
    question: "What is firebase_dynamic_links?",
    answer:
      "firebase_dynamic_links is a Flutter plugin for creating and handling Firebase Dynamic Links. These links survive the app installation process, allowing users to open specific content in your app even if it’s not yet installed.",
    example:
      "Use firebase_dynamic_links to create shareable links for app content, referral programs, or promotional campaigns.",
    realTimeExample:
      "firebase_dynamic_links is like a homing pigeon. It carries a message (link) to the user, even if they’re not at home (app installed), and guides them back (installs app and opens content).",
    realTimeExample2:
      "Think of firebase_dynamic_links as a treasure map. It leads users (pirates) to the treasure (content) in your app (island), even if they start from a different location (uninstalled app).",
    syntax:
      "FirebaseDynamicLinks.instance.buildLink(DynamicLinkParameters(...))\nFirebaseDynamicLinks.instance.onLink.listen((dynamicLinkData) { ... })",
    codeExample: `
      final dynamicLinkParams = DynamicLinkParameters(
        uriPrefix: 'https://myapp.page.link',
        link: Uri.parse('https://myapp.com/content?id=123'),
        androidParameters: AndroidParameters(packageName: 'com.example.myapp'),
        iosParameters: IosParameters(bundleId: 'com.example.myapp'),
      );

      final dynamicLink = await FirebaseDynamicLinks.instance.buildLink(dynamicLinkParams);
      print('Dynamic link: \${dynamicLink.url}');
    `,
  },
  {
    id: 114,
    question: "How to implement app shortcuts?",
    answer:
      "To implement app shortcuts in Flutter, use the quick_actions package. Define shortcuts in the app’s manifest (Android) or Info.plist (iOS), handle shortcut activation in your app, and navigate users to the appropriate screen.",
    example:
      "Use app shortcuts to provide quick access to frequently used features, like composing a new message or opening a specific screen.",
    realTimeExample:
      "App shortcuts are like speed dial buttons. They let users quickly access (call) their favorite features (contacts) with a single tap (press).",
    realTimeExample2:
      "Think of app shortcuts as a remote control. They provide direct buttons (shortcuts) to jump to specific channels (screens) in your app (TV).",
    syntax:
      "QuickActions.setShortcutItems([...])\nQuickActions.initialize((shortcutType) { ... })",
    codeExample: `
      // Set shortcuts
      QuickActions.setShortcutItems([
        ShortcutItem(
          type: 'action_compose',
          localizedTitle: 'Compose',
          icon: 'ic_compose',
        ),
      ]);

      // Handle shortcut activation
      QuickActions.initialize((shortcutType) {
        if (shortcutType == 'action_compose') {
          Navigator.push(context, MaterialPageRoute(builder: (context) => ComposeScreen()));
        }
      });
    `,
  },
  {
    id: 115,
    question: "What is quick_actions?",
    answer:
      "quick_actions is a Flutter plugin for adding dynamic shortcuts to the home screen app icon. It allows users to quickly access specific features of your app by long-pressing the app icon (on Android) or using 3D Touch (on iOS).",
    example:
      "Use quick_actions to improve user experience by providing quick access to common actions, like creating a new note or starting a workout.",
    realTimeExample:
      "quick_actions is like a tool belt. It gives users quick access (shortcuts) to their most-used tools (features) without opening the toolbox (app).",
    realTimeExample2:
      "Think of quick_actions as a fast-food menu. It lets users order (access) their favorite items (features) quickly without browsing the full menu (app).",
    syntax: "QuickActions.setShortcutItems([ShortcutItem(...)])",
    codeExample: `
      QuickActions.setShortcutItems([
        ShortcutItem(
          type: 'action_search',
          localizedTitle: 'Search',
          icon: 'ic_search',
        ),
        ShortcutItem(
          type: 'action_share',
          localizedTitle: 'Share',
          icon: 'ic_share',
        ),
      ]);
    `,
  },
  {
    id: 116,
    question: "How to use flutter_intent?",
    answer:
      "flutter_intent is a Flutter plugin for launching external apps or system intents from your Flutter app. It allows you to open URLs, dial phone numbers, send emails, or launch other apps using platform intents.",
    example:
      "Use flutter_intent to integrate your app with other apps or system features, like opening a map, sending an SMS, or sharing content.",
    realTimeExample:
      "flutter_intent is like a concierge. It helps your app (guest) request services (intents) from other apps (hotel staff), like calling a taxi (dialer) or booking a table (map).",
    realTimeExample2:
      "Think of flutter_intent as a universal remote. It sends commands (intents) to other apps (devices) to perform actions (open, dial, share).",
    syntax:
      "AndroidIntent(action: 'action_view', data: 'tel:+1234567890')\nIntentUtils.launchUrl('https://example.com')",
    codeExample: `
      // Open a URL
      await IntentUtils.launchUrl('https://example.com');

      // Dial a phone number
      await AndroidIntent(
        action: 'action_view',
        data: 'tel:+1234567890',
      ).launch();
    `,
  },
];

// Make data available globally
window.intermediate = intermediate;
