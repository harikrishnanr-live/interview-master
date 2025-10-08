// Flutter Beginner Level Q&A Data

let beginner = [
  {
    id: 1,
    question: "What is Flutter?",
    answer:
      "Flutter is Google's open-source UI toolkit for building natively compiled, cross-platform applications (mobile, web, desktop) from a single codebase. It uses the Dart programming language and provides a rich set of pre-designed widgets for fast, beautiful, and customizable app development.",
    example:
      "Flutter allows you to write one codebase and deploy it to both iOS and Android, saving time and effort.",
    realTimeExample:
      "Think of Flutter as a universal remote control. Instead of needing separate remotes for your TV, AC, and music system, you use one remote (Flutter) to control all your devices (platforms).",
    realTimeExample2:
      "Imagine Flutter as a Lego set. You have a box of pre-made Lego blocks (widgets) that you can snap together in any way you want to build anything—from a simple house to a complex spaceship (apps).",
    syntax: "N/A",
    codeExample: `
      import 'package:flutter/material.dart';
      void main() {
        runApp(MyApp());
      }
      class MyApp extends StatelessWidget {
        @override
        Widget build(BuildContext context) {
          return MaterialApp(
            home: Scaffold(
              appBar: AppBar(title: Text('Hello Flutter!')),
              body: Center(child: Text('Welcome to Flutter!')),
            ),
          );
        }
      }
    `,
  },
  {
    id: 2,
    question: "What is Dart?",
    answer:
      "Dart is the programming language used to develop Flutter applications. It is object-oriented, supports async/await for asynchronous programming, and is optimized for building mobile and web apps.",
    example: "Dart is used to write the logic and UI of Flutter apps.",
    realTimeExample:
      "Dart is like the engine of a car. Just as the engine powers the car, Dart powers Flutter apps, making them run smoothly and efficiently.",
    realTimeExample2:
      "Think of Dart as the script of a play. It tells the actors (widgets) what to do and when, ensuring the performance (app) runs as intended.",
    syntax: "Dart files use the `.dart` extension.",
    codeExample: `
      void main() {
        print('Hello, Dart!');
      }
    `,
  },
  {
    id: 3,
    question: "What are widgets in Flutter?",
    answer:
      "Widgets are the fundamental building blocks of a Flutter app's user interface. Everything in Flutter is a widget—buttons, text, layouts, and even the app itself. Widgets can be combined to create complex UIs.",
    example:
      "A button, a text label, or a layout container are all widgets. You nest widgets inside each other to build your app's UI.",
    realTimeExample:
      "Think of widgets as Lego bricks. You combine different bricks (widgets) to build anything you imagine, from a simple wall to a detailed castle.",
    realTimeExample2:
      "Widgets are like ingredients in a recipe. You mix and match ingredients (widgets) to create a delicious dish (your app).",
    syntax:
      "Widgets are classes that extend StatelessWidget or StatefulWidget.",
    codeExample: `
      // Stateless Widget Example
      class Greeting extends StatelessWidget {
        @override
        Widget build(BuildContext context) {
          return Text('Hello, Flutter!');
        }
      }
      // Stateful Widget Example
      class Counter extends StatefulWidget {
        @override
        _CounterState createState() => _CounterState();
      }
      class _CounterState extends State<Counter> {
        int count = 0;
        @override
        Widget build(BuildContext context) {
          return ElevatedButton(
            onPressed: () => setState(() => count++),
            child: Text('Count: $count'),
          );
        }
      }
    `,
  },
  {
    id: 4,
    question: "What is the difference between Stateless and Stateful widgets?",
    answer:
      "Stateless widgets are immutable and do not change over time. Stateful widgets can change dynamically, as they maintain state that can be updated during the widget's lifetime.",
    example:
      "A static label is a StatelessWidget, while a counter that increments on button press is a StatefulWidget.",
    realTimeExample:
      "A StatelessWidget is like a printed photograph—it never changes. A StatefulWidget is like a digital photo frame—it can display different images over time.",
    realTimeExample2:
      "StatelessWidget is like a signpost on the road—it always shows the same information. StatefulWidget is like a traffic light—it changes its state (red, yellow, green) based on timing.",
    syntax:
      "StatelessWidget: @override Widget build(BuildContext context)\nStatefulWidget: @override _WidgetState createState() => _WidgetState()",
    codeExample: `
      // StatelessWidget
      class StaticText extends StatelessWidget {
        @override
        Widget build(BuildContext context) {
          return Text('This text never changes.');
        }
      }
      // StatefulWidget
      class DynamicCounter extends StatefulWidget {
        @override
        _DynamicCounterState createState() => _DynamicCounterState();
      }
      class _DynamicCounterState extends State<DynamicCounter> {
        int count = 0;
        @override
        Widget build(BuildContext context) {
          return ElevatedButton(
            onPressed: () => setState(() => count++),
            child: Text('Count: $count'),
          );
        }
      }
    `,
  },
  {
    id: 5,
    question: "What is the BuildContext?",
    answer:
      "BuildContext is a handle to the location of a widget within the widget tree. It allows access to theme data, navigation, and inherited widgets. It is passed to the build method of every widget.",
    example:
      "BuildContext is used to access the theme of the app or to navigate to a new screen.",
    realTimeExample:
      "BuildContext is like your current location on a map. It helps you find nearby places (widgets) and navigate to them.",
    realTimeExample2:
      "Think of BuildContext as a family tree. It helps you trace your ancestors (parent widgets) and descendants (child widgets).",
    syntax: "BuildContext context",
    codeExample: `
      @override
      Widget build(BuildContext context) {
        return Text(
          'Current theme color: \${Theme.of(context).primaryColor}',
        );
      }
    `,
  },
  {
    id: 6,
    question: "What is a MaterialApp widget?",
    answer:
      "MaterialApp is a convenience widget that wraps several widgets required for Material Design applications. It provides navigation, theming, and localization support out of the box.",
    example: "MaterialApp is usually the root widget of a Flutter app.",
    realTimeExample:
      "MaterialApp is like the foundation of a house. It provides the structure and basic utilities (navigation, theme) for the rest of the app (house).",
    realTimeExample2:
      "Think of MaterialApp as the operating system of a smartphone. It manages the apps (widgets) and provides essential services (themes, navigation).",
    syntax: "MaterialApp(home: MyHomePage(), theme: ThemeData(...))",
    codeExample: `
      MaterialApp(
        title: 'My App',
        theme: ThemeData(primarySwatch: Colors.blue),
        home: MyHomePage(),
      )
    `,
  },
  {
    id: 7,
    question: "What are keys in Flutter?",
    answer:
      "Keys are identifiers for widgets that help Flutter identify which widgets have changed, been added, or removed. They are useful for preserving the state of widgets during rebuilds.",
    example:
      "Keys are often used in lists to improve performance and maintain state.",
    realTimeExample:
      "Keys are like name tags at a conference. They help the organizer (Flutter) recognize attendees (widgets) even if they move around.",
    realTimeExample2:
      "Think of keys as unique IDs for widgets, similar to how each student in a class has a unique roll number.",
    syntax: "Key myKey = UniqueKey();\nWidget(child: MyWidget(), key: myKey)",
    codeExample: `
      ListView(
        children: [
          ListTile(key: ValueKey('item1'), title: Text('Item 1')),
          ListTile(key: ValueKey('item2'), title: Text('Item 2')),
        ],
      )
    `,
  },
  {
    id: 8,
    question:
      "What is the difference between Future<List<Product>> and List<Product>?",
    answer:
      "Future<List<Product>> represents a list that will be available asynchronously (e.g., after a network call). List<Product> is a list that is immediately available in memory. Future is used for operations that take time, like fetching data from an API.",
    example:
      "Use Future<List<Product>> when loading products from a server. Use List<Product> when you already have the products in memory.",
    realTimeExample:
      "Future<List<Product>> is like ordering food for delivery. You get a promise (Future) that your food (List<Product>) will arrive later. List<Product> is like having food already on your table—ready to eat.",
    realTimeExample2:
      "Future<List<Product>> is like waiting for a train to arrive at the station. You know it’s coming, but you have to wait. List<Product> is like having the train already at the platform—you can board immediately.",
    syntax:
      "Future<List<Product>> productFuture = fetchProducts();\nList<Product> productList = [Product('Shirt'), Product('Pants')];",
    codeExample: `
      Future<List<Product>> fetchProducts() async {
        // Simulate network call
        return [Product('Shirt'), Product('Pants')];
      }
      List<Product> productList = [Product('Shoes'), Product('Hat')];
    `,
  },
  {
    id: 9,
    question: "How do you install Flutter?",
    answer:
      "To install Flutter, download the Flutter SDK from the official website, extract it to a desired location, add the Flutter bin directory to your PATH, and run 'flutter doctor' to check for any missing dependencies.",
    example:
      "After installation, you can create and run Flutter projects from the command line.",
    realTimeExample:
      "Installing Flutter is like setting up a new kitchen. You need the right tools (SDK), a workspace (PATH), and a recipe book (documentation) to start cooking (developing).",
    realTimeExample2:
      "Think of installing Flutter as assembling a new bike. You need all the parts (SDK), the right tools (PATH), and a manual (flutter doctor) to ensure everything is ready to ride (develop).",
    syntax: "flutter doctor",
    codeExample: "N/A",
  },
  {
    id: 10,
    question: "What is the pubspec.yaml file?",
    answer:
      "pubspec.yaml is the configuration file for a Flutter project. It defines the app's name, version, dependencies, assets, and other metadata.",
    example:
      "You add dependencies and assets in pubspec.yaml to use them in your app.",
    realTimeExample:
      "pubspec.yaml is like the ingredient list and instructions on a food package. It tells you what’s inside (dependencies) and how to use it (configuration).",
    realTimeExample2:
      "Think of pubspec.yaml as the blueprint of a building. It lists all the materials (dependencies) and rooms (assets) needed to construct the building (app).",
    syntax: "dependencies:\n  flutter:\n    sdk: flutter\n  http: ^0.13.4",
    codeExample: `
      name: my_app
      description: A new Flutter project
      version: 1.0.0
      dependencies:
        flutter:
          sdk: flutter
        http: ^0.13.4
      assets:
        - images/logo.png
    `,
  },
  {
    id: 11,
    question: "What are some basic layout widgets in Flutter?",
    answer:
      "Basic layout widgets include Container (for styling and positioning), Row (for horizontal arrangement), Column (for vertical arrangement), Stack (for overlapping widgets), and Expanded (for flexible sizing).",
    example:
      "Use Row to place widgets side by side, and Column to stack them vertically.",
    realTimeExample:
      "Row and Column are like shelves. Row is a horizontal shelf, and Column is a vertical shelf. You place items (widgets) on them to organize your space (UI).",
    realTimeExample2:
      "Think of Stack as a pile of transparent papers. You can layer widgets (papers) on top of each other to create complex layouts.",
    syntax:
      "Row(children: [...]), Column(children: [...]), Stack(children: [...])",
    codeExample: `
      Row(
        children: [
          Container(color: Colors.red, width: 50, height: 50),
          Container(color: Colors.green, width: 50, height: 50),
        ],
      )
      Column(
        children: [
          Container(color: Colors.blue, width: 50, height: 50),
          Container(color: Colors.yellow, width: 50, height: 50),
        ],
      )
    `,
  },
  {
    id: 12,
    question: "How do you run a Flutter app?",
    answer:
      "To run a Flutter app, navigate to the project directory in the terminal, connect a device or start an emulator, and run 'flutter run'. For web, use 'flutter run -d chrome'.",
    example: "You can run your app on a physical device or an emulator.",
    realTimeExample:
      "Running a Flutter app is like starting a car. You turn the key (flutter run) and choose the road (device/emulator) to drive on.",
    realTimeExample2:
      "Think of running a Flutter app as launching a rocket. You prepare the launchpad (project directory), fuel the rocket (code), and press the launch button (flutter run).",
    syntax: "flutter run\nflutter run -d chrome",
    codeExample: "N/A",
  },
  {
    id: 13,
    question: "What is hot reload in Flutter?",
    answer:
      "Hot reload is a feature that allows you to quickly see changes in your app without restarting it. Press 'r' in the terminal or use the IDE button to hot reload after making code changes.",
    example:
      "Hot reload is useful for UI adjustments and bug fixes during development.",
    realTimeExample:
      "Hot reload is like editing a live TV broadcast. You can make changes on the fly without stopping the show (app).",
    realTimeExample2:
      "Think of hot reload as a magic eraser. You can erase and redraw parts of your drawing (app) without starting over.",
    syntax: "Press 'r' in the terminal during debug mode.",
    codeExample: "N/A",
  },
  {
    id: 14,
    question: "What is a Text widget in Flutter?",
    answer:
      "The Text widget is used to display text in Flutter. It takes a string as input and can be styled with properties like fontSize, color, fontWeight, etc.",
    example:
      "Use Text to show labels, headings, or any text content in your app.",
    realTimeExample:
      "Text widget is like a label maker. You type in the text, choose the style (font, color), and stick it wherever you want in your app.",
    realTimeExample2:
      "Think of Text as a signboard. You can change its size, color, and font to make it stand out or blend in.",
    syntax: "Text('Hello, Flutter!', style: TextStyle(fontSize: 20))",
    codeExample: `
      Text(
        'Welcome to Flutter!',
        style: TextStyle(
          fontSize: 24,
          color: Colors.blue,
          fontWeight: FontWeight.bold,
        ),
      )
    `,
  },
  {
    id: 15,
    question: "How do you add an image in Flutter?",
    answer:
      "To add an image, use the Image widget. You can load images from assets, network, or memory. For assets, add the image to pubspec.yaml and use Image.asset('path').",
    example:
      "Images can be used for icons, backgrounds, or any visual content.",
    realTimeExample:
      "Adding an image is like hanging a painting on a wall. You need the painting (image file) and a nail (Image widget) to hang it.",
    realTimeExample2:
      "Think of Image.asset as a photo frame. You place your photo (image file) inside the frame (Image widget) to display it.",
    syntax:
      "Image.asset('images/logo.png')\nImage.network('https://example.com/image.jpg')",
    codeExample: `
      Image.asset('images/logo.png', width: 100, height: 100)
      Image.network('https://picsum.photos/200/300')
    `,
  },
  {
    id: 16,
    question: "What is an Icon widget?",
    answer:
      "The Icon widget displays an icon from the Material Design icon set. It takes an IconData and can be customized with size and color.",
    example: "Icons are often used in buttons, app bars, and navigation menus.",
    realTimeExample:
      "Icon widget is like an emoji. It conveys meaning or action (like a heart for 'like') in a small, visual format.",
    realTimeExample2:
      "Think of Icon as a traffic sign. It quickly communicates a message (e.g., home, back, favorite) to the user.",
    syntax: "Icon(Icons.favorite, color: Colors.red, size: 30)",
    codeExample: `
      Icon(
        Icons.star,
        color: Colors.yellow,
        size: 40,
      )
    `,
  },
  {
    id: 17,
    question: "How to create a button in Flutter?",
    answer:
      "Use ElevatedButton, TextButton, or OutlinedButton. For example, ElevatedButton(onPressed: () {}, child: Text('Press me')).",
    example:
      "Buttons are used to trigger actions, like submitting a form or navigating to a new screen.",
    realTimeExample:
      "A button is like a doorbell. Pressing it (onPressed) triggers an action (e.g., opening the door).",
    realTimeExample2:
      "Think of a button as a light switch. Flipping it (tapping) turns something on or off (executes a function).",
    syntax: "ElevatedButton(onPressed: () {}, child: Text('Click Me'))",
    codeExample: `
      ElevatedButton(
        onPressed: () {
          print('Button pressed!');
        },
        child: Text('Submit'),
      )
    `,
  },
  {
    id: 18,
    question: "What is Padding in Flutter?",
    answer:
      "Padding adds space around a widget. Use the Padding widget with EdgeInsets to specify padding on all sides or specific sides.",
    example:
      "Padding is used to create space between widgets or around the edges of a widget.",
    realTimeExample:
      "Padding is like the frame around a photo. It adds space between the photo (widget) and the edge of the frame (parent widget).",
    realTimeExample2:
      "Think of Padding as bubble wrap. It adds a protective layer (space) around your item (widget).",
    syntax: "Padding(padding: EdgeInsets.all(10), child: MyWidget())",
    codeExample: `
      Padding(
        padding: EdgeInsets.symmetric(horizontal: 20, vertical: 10),
        child: Text('Padded Text'),
      )
    `,
  },
  {
    id: 19,
    question: "What is Margin in Flutter?",
    answer:
      "Flutter doesn't have a Margin widget; use Padding or Container with margin property to add space outside the widget.",
    example:
      "Margin is the space outside a widget, while padding is the space inside.",
    realTimeExample:
      "Margin is like the space between furniture and the wall. It keeps things from touching each other.",
    realTimeExample2:
      "Think of margin as a personal bubble. It keeps other widgets (people) at a comfortable distance.",
    syntax: "Container(margin: EdgeInsets.all(10), child: MyWidget())",
    codeExample: `
      Container(
        margin: EdgeInsets.all(15),
        child: Text('Text with Margin'),
      )
    `,
  },
  {
    id: 20,
    question: "How to center a widget?",
    answer:
      "Use the Center widget to center its child within itself. For example, Center(child: Text('Centered')).",
    example:
      "Centering is useful for titles, icons, or any widget that needs to be in the middle of the screen or container.",
    realTimeExample:
      "Center widget is like the bullseye on a target. It places your widget (arrow) right in the center.",
    realTimeExample2:
      "Think of Center as a balancing scale. It ensures your widget is perfectly balanced in the middle.",
    syntax: "Center(child: MyWidget())",
    codeExample: `
      Center(
        child: Text('I am centered!'),
      )
    `,
  },
  {
    id: 21,
    question: "What is Align widget?",
    answer:
      "Align widget positions its child within itself using alignment properties like topLeft, center, bottomRight.",
    example:
      "Use Align to place a widget at a specific position within its parent.",
    realTimeExample:
      "Align is like a GPS. It helps you position your widget (destination) exactly where you want it in the parent (map).",
    realTimeExample2:
      "Think of Align as a magnet. It pulls your widget to a specific spot (alignment) within its container.",
    syntax: "Align(alignment: Alignment.center, child: MyWidget())",
    codeExample: `
      Align(
        alignment: Alignment.topRight,
        child: Icon(Icons.star),
      )
    `,
  },
  {
    id: 22,
    question: "What is SizedBox?",
    answer:
      "SizedBox is used to give a fixed size to its child or to add space. It can constrain width and height.",
    example: "Use SizedBox to create fixed-size gaps or containers.",
    realTimeExample:
      "SizedBox is like a picture frame. It sets a fixed size for your photo (widget).",
    realTimeExample2:
      "Think of SizedBox as a parking spot. It reserves a specific space (size) for your car (widget).",
    syntax: "SizedBox(width: 100, height: 50, child: MyWidget())",
    codeExample: `
      SizedBox(
        width: 200,
        height: 100,
        child: Container(color: Colors.blue),
      )
    `,
  },
  {
    id: 23,
    question: "What is Expanded widget?",
    answer:
      "Expanded makes its child fill the available space in a Row or Column, taking up remaining space.",
    example:
      "Use Expanded to distribute space evenly among widgets in a Row or Column.",
    realTimeExample:
      "Expanded is like a stretchy rubber band. It expands to fill the available space in a Row or Column.",
    realTimeExample2:
      "Think of Expanded as a sponge. It absorbs all the extra space in its container.",
    syntax: "Expanded(child: MyWidget())",
    codeExample: `
      Row(
        children: [
          Expanded(child: Container(color: Colors.red)),
          Expanded(child: Container(color: Colors.green)),
        ],
      )
    `,
  },
  {
    id: 24,
    question: "What is Flexible widget?",
    answer:
      "Flexible is similar to Expanded but allows the child to be smaller than the available space if needed.",
    example:
      "Use Flexible to give widgets flexibility in sizing within a Row or Column.",
    realTimeExample:
      "Flexible is like a yoga instructor. It allows your widget to stretch but not beyond its comfort zone (available space).",
    realTimeExample2:
      "Think of Flexible as a bungee cord. It can stretch, but it won’t break if the space is limited.",
    syntax: "Flexible(flex: 1, child: MyWidget())",
    codeExample: `
      Row(
        children: [
          Flexible(child: Container(color: Colors.red, width: 100)),
          Flexible(child: Container(color: Colors.green, width: 100)),
        ],
      )
    `,
  },
  {
    id: 25,
    question: "What is ListView?",
    answer:
      "ListView displays a scrollable list of widgets. It can be built from a list of children or dynamically with ListView.builder.",
    example:
      "Use ListView to display long lists of items, like messages or products.",
    realTimeExample:
      "ListView is like a shopping list. You can scroll through it to see all the items (widgets).",
    realTimeExample2:
      "Think of ListView as a roll of film. You scroll through it to see all the photos (widgets) one by one.",
    syntax: "ListView(children: [...])",
    codeExample: `
      ListView(
        children: [
          ListTile(title: Text('Item 1')),
          ListTile(title: Text('Item 2')),
        ],
      )
    `,
  },
  {
    id: 26,
    question: "What is GridView?",
    answer:
      "GridView displays widgets in a grid layout. It supports crossAxisCount for columns and can be built dynamically.",
    example:
      "Use GridView to display items in a grid, like a photo gallery or product catalog.",
    realTimeExample:
      "GridView is like a chessboard. It arranges your widgets (pieces) in rows and columns.",
    realTimeExample2:
      "Think of GridView as a bookshelf. It organizes your books (widgets) in neat rows and columns.",
    syntax: "GridView.count(crossAxisCount: 2, children: [...])",
    codeExample: `
      GridView.count(
        crossAxisCount: 2,
        children: [
          Container(color: Colors.red),
          Container(color: Colors.green),
        ],
      )
    `,
  },
  {
    id: 27,
    question: "What is Scaffold?",
    answer:
      "Scaffold provides a framework for implementing Material Design visual layout structure, including AppBar, body, and FloatingActionButton.",
    example:
      "Scaffold is the root widget for most Flutter apps, providing a consistent layout structure.",
    realTimeExample:
      "Scaffold is like the skeleton of a building. It provides the basic structure (AppBar, body) for your app.",
    realTimeExample2:
      "Think of Scaffold as a stage. It sets up the space (AppBar, body) for your actors (widgets) to perform.",
    syntax: "Scaffold(appBar: AppBar(), body: MyWidget())",
    codeExample: `
      Scaffold(
        appBar: AppBar(title: Text('My App')),
        body: Center(child: Text('Hello, Scaffold!')),
      )
    `,
  },
  {
    id: 28,
    question: "What is AppBar?",
    answer:
      "AppBar is a Material Design app bar that appears at the top of the screen, typically containing a title and actions.",
    example:
      "Use AppBar to provide navigation, titles, and actions at the top of the screen.",
    realTimeExample:
      "AppBar is like the dashboard of a car. It provides essential controls (title, actions) at the top of your app.",
    realTimeExample2:
      "Think of AppBar as the header of a newspaper. It gives you the title and main actions upfront.",
    syntax: "AppBar(title: Text('My App'), actions: [...])",
    codeExample: `
      AppBar(
        title: Text('My App'),
        actions: [
          IconButton(icon: Icon(Icons.search), onPressed: () {}),
        ],
      )
    `,
  },
  {
    id: 29,
    question: "What is BottomNavigationBar?",
    answer:
      "BottomNavigationBar provides navigation between different sections of an app, displayed at the bottom.",
    example:
      "Use BottomNavigationBar for apps with multiple main sections, like a social media app with Home, Search, and Profile tabs.",
    realTimeExample:
      "BottomNavigationBar is like the control panel of a music player. It lets you switch between songs (sections) easily.",
    realTimeExample2:
      "Think of BottomNavigationBar as a menu in a restaurant. It helps you navigate to different courses (sections) of your meal (app).",
    syntax: "BottomNavigationBar(items: [...])",
    codeExample: `
      BottomNavigationBar(
        items: [
          BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),
          BottomNavigationBarItem(icon: Icon(Icons.search), label: 'Search'),
        ],
      )
    `,
  },
  {
    id: 30,
    question: "What is Drawer?",
    answer:
      "Drawer is a panel that slides in from the left or right edge, often used for navigation menus.",
    example:
      "Use Drawer to provide access to additional navigation options or settings.",
    realTimeExample:
      "Drawer is like a closet. You slide it open to access items (navigation options) stored inside.",
    realTimeExample2:
      "Think of Drawer as a secret compartment. It hides until you need it, then slides out to reveal its contents.",
    syntax: "Drawer(child: ListView(children: [...]))",
    codeExample: `
      Drawer(
        child: ListView(
          children: [
            ListTile(title: Text('Home'), onTap: () {}),
            ListTile(title: Text('Settings'), onTap: () {}),
          ],
        ),
      )
    `,
  },
  {
    id: 31,
    question: "What is TabBar?",
    answer:
      "TabBar displays tabs at the top or bottom, allowing users to switch between different views.",
    example:
      "Use TabBar to organize content into tabs, like in a settings screen or a news app.",
    realTimeExample:
      "TabBar is like the tabs in a filing cabinet. Each tab (view) holds different documents (content).",
    realTimeExample2:
      "Think of TabBar as a notebook with dividers. Each divider (tab) separates different sections (views).",
    syntax: "TabBar(tabs: [...])",
    codeExample: `
      TabBar(
        tabs: [
          Tab(text: 'Tab 1'),
          Tab(text: 'Tab 2'),
        ],
      )
    `,
  },
  {
    id: 32,
    question: "What is FloatingActionButton?",
    answer:
      "FloatingActionButton is a circular button that floats above the content, typically used for primary actions.",
    example:
      "Use FloatingActionButton for actions like adding a new item or composing a message.",
    realTimeExample:
      "FloatingActionButton is like a help button in a store. It’s always visible and ready for the main action (e.g., 'Add to Cart').",
    realTimeExample2:
      "Think of FloatingActionButton as a lifebuoy. It floats above everything else, ready to save you (perform the primary action).",
    syntax: "FloatingActionButton(onPressed: () {}, child: Icon(Icons.add))",
    codeExample: `
      FloatingActionButton(
        onPressed: () {},
        child: Icon(Icons.add),
      )
    `,
  },
  {
    id: 33,
    question: "What is SnackBar?",
    answer:
      "SnackBar displays brief messages at the bottom of the screen, often for feedback after an action.",
    example:
      "Use SnackBar to show notifications like 'Item added to cart' or 'Message sent'.",
    realTimeExample:
      "SnackBar is like a toast notification on your phone. It pops up briefly to give you a message, then disappears.",
    realTimeExample2:
      "Think of SnackBar as a sticky note. It briefly shows you a reminder, then you can dismiss it.",
    syntax:
      "ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text('Message')))",
    codeExample: `
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Item added to cart!')),
      )
    `,
  },
  {
    id: 34,
    question: "What is AlertDialog?",
    answer:
      "AlertDialog displays a dialog with a title, content, and actions, used for user confirmations.",
    example:
      "Use AlertDialog to ask for confirmation before deleting an item or logging out.",
    realTimeExample:
      "AlertDialog is like a pop-up question. It asks for your confirmation before proceeding with an action.",
    realTimeExample2:
      "Think of AlertDialog as a roadblock. It stops you and asks if you’re sure before you proceed.",
    syntax:
      "showDialog(context: context, builder: (context) => AlertDialog(...))",
    codeExample: `
      showDialog(
        context: context,
        builder: (context) => AlertDialog(
          title: Text('Confirm'),
          content: Text('Are you sure?'),
          actions: [
            TextButton(onPressed: () => Navigator.pop(context), child: Text('Cancel')),
            TextButton(onPressed: () {}, child: Text('OK')),
          ],
        ),
      )
    `,
  },
  {
    id: 35,
    question: "What is BottomSheet?",
    answer:
      "BottomSheet slides up from the bottom to show additional content or options.",
    example:
      "Use BottomSheet to display more options or details without navigating to a new screen.",
    realTimeExample:
      "BottomSheet is like a drawer at the bottom of your desk. You pull it up to access more tools (options).",
    realTimeExample2:
      "Think of BottomSheet as a hidden compartment in a suitcase. It slides out to reveal extra space (content).",
    syntax:
      "showModalBottomSheet(context: context, builder: (context) => MyWidget())",
    codeExample: `
      showModalBottomSheet(
        context: context,
        builder: (context) => Container(
          height: 200,
          child: Center(child: Text('Bottom Sheet Content')),
        ),
      )
    `,
  },
  {
    id: 36,
    question: "What is ThemeData?",
    answer:
      "ThemeData defines the colors, fonts, and other visual properties for the app's theme.",
    example:
      "Use ThemeData to customize the look and feel of your app globally.",
    realTimeExample:
      "ThemeData is like the interior design of a house. It sets the color scheme, fonts, and style for your entire app.",
    realTimeExample2:
      "Think of ThemeData as a dress code. It ensures all your widgets (employees) follow the same style (theme).",
    syntax: "ThemeData(primaryColor: Colors.blue, fontFamily: 'Roboto')",
    codeExample: `
      MaterialApp(
        theme: ThemeData(
          primaryColor: Colors.blue,
          fontFamily: 'Roboto',
        ),
        home: MyHomePage(),
      )
    `,
  },
  {
    id: 37,
    question: "How to change app theme?",
    answer:
      "Wrap MaterialApp with Theme and provide a ThemeData object with custom colors, fonts, etc.",
    example:
      "Change the theme to dark mode or customize colors and fonts for your brand.",
    realTimeExample:
      "Changing the app theme is like redecorating your room. You pick new colors (ThemeData) to give it a fresh look.",
    realTimeExample2:
      "Think of changing the theme as switching outfits. You change the colors and style (ThemeData) to match your mood (app’s purpose).",
    syntax: "Theme(data: ThemeData(darkTheme: true), child: MaterialApp(...))",
    codeExample: `
      MaterialApp(
        theme: ThemeData(
          brightness: Brightness.dark,
          primaryColor: Colors.black,
        ),
        home: MyHomePage(),
      )
    `,
  },
  {
    id: 38,
    question: "What are assets in Flutter?",
    answer:
      "Assets are files like images, fonts, or data files bundled with the app. They are declared in pubspec.yaml.",
    example: "Use assets for app icons, images, or custom fonts.",
    realTimeExample:
      "Assets are like the tools in a toolbox. They are resources (images, fonts) you use to build your app.",
    realTimeExample2:
      "Think of assets as ingredients in a recipe. You list them (pubspec.yaml) before you start cooking (building the app).",
    syntax: "assets:\n  - images/logo.png",
    codeExample: `
      // pubspec.yaml
      flutter:
        assets:
          - images/logo.png
          - fonts/CustomFont.ttf
    `,
  },
  {
    id: 39,
    question: "How to add images to assets?",
    answer:
      "Add the image path to the assets section in pubspec.yaml, then use Image.asset('path/to/image.png').",
    example: "Add your app logo or background images as assets.",
    realTimeExample:
      "Adding images to assets is like adding photos to a photo album. You list them (pubspec.yaml) so you can view them later (Image.asset).",
    realTimeExample2:
      "Think of adding images as packing a suitcase. You list what’s inside (pubspec.yaml) so you can use them during your trip (app).",
    syntax: "Image.asset('images/logo.png')",
    codeExample: `
      Image.asset('images/logo.png', width: 100, height: 100)
    `,
  },
  {
    id: 40,
    question: "What is pub.dev?",
    answer:
      "pub.dev is the official package repository for Dart and Flutter packages.",
    example:
      "Use pub.dev to find and add packages like http, provider, or shared_preferences to your app.",
    realTimeExample:
      "pub.dev is like an app store for Flutter packages. You browse and download packages (apps) to add features to your project.",
    realTimeExample2:
      "Think of pub.dev as a library. It’s a collection of books (packages) you can borrow to enhance your knowledge (app).",
    syntax: "N/A",
    codeExample: "N/A",
  },
  {
    id: 41,
    question: "How to add dependencies?",
    answer:
      "Add package names and versions to the dependencies section in pubspec.yaml, then run flutter pub get.",
    example:
      "Add dependencies like http for API calls or provider for state management.",
    realTimeExample:
      "Adding dependencies is like adding ingredients to a shopping list. You list what you need (pubspec.yaml), then go shopping (flutter pub get).",
    realTimeExample2:
      "Think of adding dependencies as inviting guests to a party. You list their names (pubspec.yaml), then send out invitations (flutter pub get).",
    syntax: "dependencies:\n  http: ^0.13.4",
    codeExample: `
      // pubspec.yaml
      dependencies:
        flutter:
          sdk: flutter
        http: ^0.13.4
        provider: ^6.0.2
    `,
  },
  {
    id: 42,
    question: "What is flutter pub get?",
    answer:
      "flutter pub get downloads and installs dependencies listed in pubspec.yaml.",
    example:
      "Run flutter pub get after adding new dependencies to your project.",
    realTimeExample:
      "flutter pub get is like a delivery service. It fetches all the items (dependencies) you ordered (listed in pubspec.yaml).",
    realTimeExample2:
      "Think of flutter pub get as a librarian. It finds and brings you all the books (packages) you requested.",
    syntax: "flutter pub get",
    codeExample: "N/A",
  },
  {
    id: 43,
    question: "What is hot restart?",
    answer:
      "Hot restart restarts the app and reloads the code, useful when hot reload isn't sufficient.",
    example:
      "Use hot restart when you change the app’s state or configuration that hot reload can’t handle.",
    realTimeExample:
      "Hot restart is like rebooting your computer. It refreshes everything to apply major changes.",
    realTimeExample2:
      "Think of hot restart as a reset button. It starts your app fresh with the latest code.",
    syntax: "Press 'R' in the terminal during debug mode.",
    codeExample: "N/A",
  },
  {
    id: 44,
    question: "What is debug mode?",
    answer:
      "Debug mode is used during development, with debugging features enabled.",
    example:
      "Run your app in debug mode to use hot reload, inspect widgets, and debug issues.",
    realTimeExample:
      "Debug mode is like a practice session. You can make mistakes, see what went wrong, and fix them before the real performance (release).",
    realTimeExample2:
      "Think of debug mode as a rough draft. It lets you edit and improve your work before finalizing it.",
    syntax: "flutter run --debug",
    codeExample: "N/A",
  },
  {
    id: 45,
    question: "What is release mode?",
    answer:
      "Release mode is optimized for production, with debugging disabled and performance optimizations.",
    example: "Build your app in release mode for publishing to app stores.",
    realTimeExample:
      "Release mode is like the final performance. Everything is polished and ready for the audience (users).",
    realTimeExample2:
      "Think of release mode as a published book. It’s been edited, proofread, and is ready for readers (users).",
    syntax: "flutter run --release",
    codeExample: "N/A",
  },
  {
    id: 46,
    question: "What is APK?",
    answer:
      "APK is the file format for Android applications, used to install apps on Android devices.",
    example: "Generate an APK to distribute your Flutter app to Android users.",
    realTimeExample:
      "APK is like a boxed product. It contains everything needed to install and run your app on Android.",
    realTimeExample2:
      "Think of APK as a sealed envelope. It holds all the contents (app code) needed to deliver your message (app) to Android users.",
    syntax: "flutter build apk",
    codeExample: "N/A",
  },
  {
    id: 47,
    question: "What is IPA?",
    answer:
      "IPA is the file format for iOS applications, used to install apps on iOS devices.",
    example: "Generate an IPA to distribute your Flutter app to iOS users.",
    realTimeExample:
      "IPA is like a special key. It unlocks your app for iOS users to install and use.",
    realTimeExample2:
      "Think of IPA as a ticket. It grants access to your app for iOS users.",
    syntax: "flutter build ipa",
    codeExample: "N/A",
  },
  {
    id: 48,
    question: "What is flutter doctor?",
    answer:
      "flutter doctor checks the Flutter installation and reports any issues with dependencies.",
    example:
      "Run flutter doctor to ensure your environment is set up correctly for Flutter development.",
    realTimeExample:
      "flutter doctor is like a health check-up. It diagnoses any issues in your Flutter setup and suggests fixes.",
    realTimeExample2:
      "Think of flutter doctor as a car diagnostic tool. It scans your Flutter environment and reports what needs attention.",
    syntax: "flutter doctor",
    codeExample: "N/A",
  },
  {
    id: 49,
    question: "What is flutter create?",
    answer:
      "flutter create generates a new Flutter project with the basic structure.",
    example: "Use flutter create to start a new Flutter project from scratch.",
    realTimeExample:
      "flutter create is like setting up a new canvas. It prepares the space (project structure) for you to start painting (coding).",
    realTimeExample2:
      "Think of flutter create as laying the foundation for a new house. It sets up the basic structure (project files) for you to build on.",
    syntax: "flutter create my_app",
    codeExample: "N/A",
  },
  {
    id: 50,
    question: "What is flutter build?",
    answer:
      "flutter build compiles the app for a specific platform, like flutter build apk for Android.",
    example:
      "Use flutter build to generate installable files for Android, iOS, or web.",
    realTimeExample:
      "flutter build is like baking a cake. It takes your ingredients (code) and turns them into a finished product (app).",
    realTimeExample2:
      "Think of flutter build as assembling a product. It puts all the parts (code) together into a final package (app).",
    syntax: "flutter build apk\nflutter build ios",
    codeExample: "N/A",
  },
  {
    id: 51,
    question: "What is flutter clean?",
    answer:
      "flutter clean deletes build artifacts and caches to free up space.",
    example: "Run flutter clean to resolve build issues or free up disk space.",
    realTimeExample:
      "flutter clean is like cleaning your workspace. It removes clutter (build files) so you can start fresh.",
    realTimeExample2:
      "Think of flutter clean as a reset button. It clears out old files to avoid conflicts and start anew.",
    syntax: "flutter clean",
    codeExample: "N/A",
  },
  {
    id: 52,
    question: "What is flutter upgrade?",
    answer: "flutter upgrade updates Flutter to the latest version.",
    example: "Run flutter upgrade to get the latest features and bug fixes.",
    realTimeExample:
      "flutter upgrade is like updating your phone’s OS. It gives you the latest features and improvements.",
    realTimeExample2:
      "Think of flutter upgrade as upgrading your tools. It ensures you have the best and newest equipment (Flutter version) for your work.",
    syntax: "flutter upgrade",
    codeExample: "N/A",
  },
  {
    id: 53,
    question: "What is flutter channel?",
    answer:
      "flutter channel switches between Flutter release channels like stable, beta, dev.",
    example:
      "Use flutter channel to switch to the beta channel for testing new features.",
    realTimeExample:
      "flutter channel is like changing TV channels. Each channel (stable, beta) offers different content (features).",
    realTimeExample2:
      "Think of flutter channel as a radio dial. You tune in to different stations (channels) for different music (features).",
    syntax: "flutter channel stable\nflutter channel beta",
    codeExample: "N/A",
  },
  {
    id: 54,
    question: "What is flutter devices?",
    answer: "flutter devices lists connected devices and emulators.",
    example:
      "Run flutter devices to see all available devices for testing your app.",
    realTimeExample:
      "flutter devices is like a guest list. It shows all the devices (guests) available to attend your app’s party (testing).",
    realTimeExample2:
      "Think of flutter devices as a roll call. It lists all the devices (students) ready to participate in your app’s class (testing).",
    syntax: "flutter devices",
    codeExample: "N/A",
  },
  {
    id: 55,
    question: "What is flutter emulators?",
    answer:
      "flutter emulators lists available emulators and allows launching them.",
    example: "Use flutter emulators to start an emulator for testing your app.",
    realTimeExample:
      "flutter emulators is like a list of test tracks. You can pick an emulator (track) to test drive your app (car).",
    realTimeExample2:
      "Think of flutter emulators as a list of virtual labs. You can launch an emulator (lab) to experiment with your app (project).",
    syntax: "flutter emulators\nflutter emulators --launch [emulator_id]",
    codeExample: "N/A",
  },
  {
    id: 56,
    question: "What is flutter logs?",
    answer: "flutter logs shows the logs from a running Flutter app.",
    example:
      "Use flutter logs to debug issues by viewing real-time logs from your app.",
    realTimeExample:
      "flutter logs is like a black box in an airplane. It records everything happening in your app (flight) for review.",
    realTimeExample2:
      "Think of flutter logs as a diary. It keeps a real-time record of your app’s activities and events.",
    syntax: "flutter logs",
    codeExample: "N/A",
  },
  {
    id: 57,
    question: "What is flutter analyze?",
    answer:
      "flutter analyze checks the code for potential issues and style violations.",
    example:
      "Run flutter analyze to catch errors and improve code quality before building your app.",
    realTimeExample:
      "flutter analyze is like a spell checker. It scans your code (document) for errors (spelling mistakes) and suggests fixes.",
    realTimeExample2:
      "Think of flutter analyze as a code inspector. It reviews your code (building) for compliance with standards (best practices).",
    syntax: "flutter analyze",
    codeExample: "N/A",
  },
  {
    id: 58,
    question: "What is flutter test?",
    answer: "flutter test runs the unit and widget tests in the project.",
    example:
      "Use flutter test to ensure your code works as expected and catch bugs early.",
    realTimeExample:
      "flutter test is like a practice exam. It tests your code (knowledge) to make sure it’s ready for the real thing (production).",
    realTimeExample2:
      "Think of flutter test as a dress rehearsal. It runs through your code (performance) to catch any issues before the big show (release).",
    syntax: "flutter test",
    codeExample: "N/A",
  },
  {
    id: 59,
    question: "What is flutter format?",
    answer:
      "flutter format formats the Dart code according to the Dart style guide.",
    example:
      "Run flutter format to automatically format your code for consistency and readability.",
    realTimeExample:
      "flutter format is like a tidy-up service. It organizes your code (room) to make it neat and presentable.",
    realTimeExample2:
      "Think of flutter format as an editor. It ensures your code (manuscript) follows the correct style (grammar) and formatting.",
    syntax: "flutter format .",
    codeExample: "N/A",
  },
  {
    id: 60,
    question: "What is flutter pub outdated?",
    answer:
      "flutter pub outdated shows which dependencies have newer versions available.",
    example:
      "Run flutter pub outdated to check for updates to your project’s dependencies.",
    realTimeExample:
      "flutter pub outdated is like a software update notification. It tells you which packages (apps) have newer versions available.",
    realTimeExample2:
      "Think of flutter pub outdated as a library catalog. It shows you which books (packages) have new editions (versions).",
    syntax: "flutter pub outdated",
    codeExample: "N/A",
  },
  {
    id: 61,
    question: "What is flutter pub upgrade?",
    answer:
      "flutter pub upgrade updates dependencies to their latest versions within constraints.",
    example:
      "Run flutter pub upgrade to update your project’s dependencies to their latest compatible versions.",
    realTimeExample:
      "flutter pub upgrade is like updating your apps. It ensures you have the latest features and security patches for your dependencies (apps).",
    realTimeExample2:
      "Think of flutter pub upgrade as upgrading your tools. It replaces old tools (packages) with newer, better versions.",
    syntax: "flutter pub upgrade",
    codeExample: "N/A",
  },
  {
    id: 62,
    question: "What is flutter pub add?",
    answer:
      "flutter pub add adds a new dependency to pubspec.yaml and installs it.",
    example:
      "Use flutter pub add to quickly add a new package to your project.",
    realTimeExample:
      "flutter pub add is like adding a new app to your phone. It installs the package (app) and updates your list (pubspec.yaml).",
    realTimeExample2:
      "Think of flutter pub add as adding a new ingredient to your recipe. It updates your shopping list (pubspec.yaml) and stocks your pantry (project).",
    syntax: "flutter pub add http",
    codeExample: "N/A",
  },
  {
    id: 63,
    question: "What is flutter pub remove?",
    answer: "flutter pub remove removes a dependency from pubspec.yaml.",
    example:
      "Use flutter pub remove to clean up unused dependencies from your project.",
    realTimeExample:
      "flutter pub remove is like uninstalling an app. It removes the package (app) and updates your list (pubspec.yaml).",
    realTimeExample2:
      "Think of flutter pub remove as removing an ingredient from your recipe. It updates your shopping list (pubspec.yaml) and cleans out your pantry (project).",
    syntax: "flutter pub remove http",
    codeExample: "N/A",
  },
  {
    id: 64,
    question: "What is setState in Flutter?",
    answer:
      "setState is a method in StatefulWidget that notifies the framework that the internal state has changed, triggering a rebuild of the widget.",
    example:
      "Use setState to update the UI when the state of your widget changes, like incrementing a counter.",
    realTimeExample:
      "setState is like pressing the refresh button on a webpage. It updates the view (UI) to reflect the latest changes (state).",
    realTimeExample2:
      "Think of setState as a director calling 'Action!' It tells the widget (actor) to update its performance (UI) based on the new script (state).",
    syntax: "setState(() { count++; })",
    codeExample: `
      int count = 0;
      // ...
      setState(() {
        count++;
      });
    `,
  },
  {
    id: 65,
    question: "How does state management work in StatefulWidget?",
    answer:
      "StatefulWidget has a State class where state is managed. Use setState to update state variables and rebuild the UI.",
    example:
      "Manage state like a counter, user input, or data fetched from an API in a StatefulWidget.",
    realTimeExample:
      "State management in StatefulWidget is like a notebook. You write down (setState) changes, and the notebook (UI) updates to reflect them.",
    realTimeExample2:
      "Think of state management as a whiteboard. You erase and rewrite (setState) information, and the board (UI) updates for everyone to see.",
    syntax: "setState(() { stateVariable = newValue; })",
    codeExample: `
      class Counter extends StatefulWidget {
        @override
        _CounterState createState() => _CounterState();
      }
      class _CounterState extends State<Counter> {
        int count = 0;
        @override
        Widget build(BuildContext context) {
          return ElevatedButton(
            onPressed: () => setState(() => count++),
            child: Text('Count: $count'),
          );
        }
      }
    `,
  },
  {
    id: 66,
    question: "What is Provider in Flutter?",
    answer:
      "Provider is a state management solution that uses InheritedWidget to provide data to descendant widgets.",
    example:
      "Use Provider to share data like user authentication or app settings across your app.",
    realTimeExample:
      "Provider is like a central water supply. It delivers data (water) to all the widgets (houses) that need it.",
    realTimeExample2:
      "Think of Provider as a radio station. It broadcasts data (music) to all the widgets (listeners) tuned in.",
    syntax: "Provider<MyModel>(create: (context) => MyModel(), child: MyApp())",
    codeExample: `
      void main() {
        runApp(
          ChangeNotifierProvider(
            create: (context) => CounterModel(),
            child: MyApp(),
          ),
        );
      }
    `,
  },
  {
    id: 67,
    question: "How to navigate between screens?",
    answer:
      "Use Navigator.push() to go to a new screen and Navigator.pop() to go back.",
    example:
      "Navigate between screens like moving from a login screen to a home screen.",
    realTimeExample:
      "Navigation is like turning pages in a book. You move from one page (screen) to the next using Navigator.push (turning the page).",
    realTimeExample2:
      "Think of navigation as using a remote control. You press buttons (Navigator.push/pop) to change channels (screens).",
    syntax:
      "Navigator.push(context, MaterialPageRoute(builder: (context) => NewScreen()))",
    codeExample: `
      Navigator.push(
        context,
        MaterialPageRoute(builder: (context) => SecondScreen()),
      );
      // To go back:
      Navigator.pop(context);
    `,
  },
  {
    id: 68,
    question: "What is Navigator?",
    answer:
      "Navigator manages a stack of Route objects to handle screen transitions.",
    example:
      "Use Navigator to move between screens and manage the navigation stack.",
    realTimeExample:
      "Navigator is like a tour guide. It keeps track of where you’ve been (stack) and takes you to new places (screens).",
    realTimeExample2:
      "Think of Navigator as a browser’s back and forward buttons. It manages your history (stack) and lets you move between pages (screens).",
    syntax: "Navigator.push(context, route)\nNavigator.pop(context)",
    codeExample: "N/A",
  },
  {
    id: 69,
    question: "What is MaterialPageRoute?",
    answer:
      "MaterialPageRoute is a route that uses Material Design transitions for screen navigation.",
    example:
      "Use MaterialPageRoute for standard screen transitions in Material Design apps.",
    realTimeExample:
      "MaterialPageRoute is like a sliding door. It smoothly transitions you from one room (screen) to another.",
    realTimeExample2:
      "Think of MaterialPageRoute as a scene transition in a movie. It fades or slides to the next scene (screen) seamlessly.",
    syntax: "MaterialPageRoute(builder: (context) => NewScreen())",
    codeExample: `
      Navigator.push(
        context,
        MaterialPageRoute(builder: (context) => SecondScreen()),
      );
    `,
  },
  {
    id: 70,
    question: "What is CupertinoPageRoute?",
    answer:
      "CupertinoPageRoute is a route that uses iOS-style transitions for screen navigation.",
    example:
      "Use CupertinoPageRoute for iOS-style screen transitions in your app.",
    realTimeExample:
      "CupertinoPageRoute is like an iPhone’s screen transition. It mimics the native iOS look and feel.",
    realTimeExample2:
      "Think of CupertinoPageRoute as a MacBook’s smooth animations. It provides a familiar experience for iOS users.",
    syntax: "CupertinoPageRoute(builder: (context) => NewScreen())",
    codeExample: `
      Navigator.push(
        context,
        CupertinoPageRoute(builder: (context) => SecondScreen()),
      );
    `,
  },
  {
    id: 71,
    question: "How to pass data between screens?",
    answer:
      "Pass data in the constructor of the destination widget or use arguments in the route.",
    example: "Pass user data or settings from one screen to another.",
    realTimeExample:
      "Passing data between screens is like sending a letter. You put the data (letter) in an envelope (constructor/arguments) and send it to the recipient (screen).",
    realTimeExample2:
      "Think of passing data as handing over a baton in a relay race. The data (baton) is passed from one runner (screen) to the next.",
    syntax:
      "NewScreen(data: myData)\nMaterialPageRoute(builder: (context) => NewScreen(data: myData))",
    codeExample: `
      Navigator.push(
        context,
        MaterialPageRoute(
          builder: (context) => SecondScreen(data: 'Hello from First Screen!'),
        ),
      );
    `,
  },
  {
    id: 72,
    question: "What is TextField?",
    answer: "TextField is a widget for entering text input from the user.",
    example: "Use TextField for forms, search bars, or any text input.",
    realTimeExample:
      "TextField is like a blank sheet of paper. Users can write (input) their thoughts or information on it.",
    realTimeExample2:
      "Think of TextField as a notepad. It lets users jot down (input) notes or messages.",
    syntax:
      "TextField(onChanged: (text) {}, decoration: InputDecoration(hintText: 'Enter text'))",
    codeExample: `
      TextField(
        onChanged: (text) {
          print('User typed: $text');
        },
        decoration: InputDecoration(
          hintText: 'Enter your name',
          border: OutlineInputBorder(),
        ),
      )
    `,
  },
  {
    id: 73,
    question: "What is TextFormField?",
    answer: "TextFormField is a TextField integrated with Form for validation.",
    example:
      "Use TextFormField in forms to validate user input, like email or password fields.",
    realTimeExample:
      "TextFormField is like a form at the doctor’s office. It ensures you fill in all the required fields (validation) correctly.",
    realTimeExample2:
      "Think of TextFormField as a quiz. It checks your answers (input) to make sure they’re correct (valid).",
    syntax:
      "TextFormField(validator: (value) { if (value.isEmpty) return 'Required'; })",
    codeExample: `
      TextFormField(
        validator: (value) {
          if (value == null || value.isEmpty) {
            return 'Please enter some text';
          }
          return null;
        },
      )
    `,
  },
  {
    id: 74,
    question: "What is Form widget?",
    answer: "Form widget groups input widgets and manages their validation.",
    example:
      "Use Form to group and validate multiple input fields, like in a registration form.",
    realTimeExample:
      "Form is like a checklist. It groups all the tasks (input fields) and checks them off (validates) as you complete them.",
    realTimeExample2:
      "Think of Form as a survey. It collects all the responses (input) and ensures they’re complete and correct (valid).",
    syntax: "Form(child: Column(children: [...]))",
    codeExample: `
      Form(
        child: Column(
          children: [
            TextFormField(validator: (value) {}),
            ElevatedButton(
              onPressed: () {
                if (Form.of(context).validate()) {
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
    id: 75,
    question: "How to validate forms?",
    answer:
      "Use FormState.validate() or individual field validators to check input validity.",
    example: "Validate user input in a login form before submission.",
    realTimeExample:
      "Validating forms is like a teacher checking homework. It ensures all the answers (inputs) are correct before submission.",
    realTimeExample2:
      "Think of form validation as a security check. It verifies your credentials (inputs) before granting access (submission).",
    syntax: "Form.of(context).validate()",
    codeExample: `
      if (Form.of(context).validate()) {
        // All inputs are valid
      }
    `,
  },
  {
    id: 76,
    question: "What is GestureDetector?",
    answer:
      "GestureDetector detects gestures like tap, double tap, long press, etc.",
    example: "Use GestureDetector to make any widget respond to user gestures.",
    realTimeExample:
      "GestureDetector is like a touchscreen. It detects and responds to your touches (gestures) on any widget.",
    realTimeExample2:
      "Think of GestureDetector as a magic wand. It makes any widget respond to your gestures (spells).",
    syntax: "GestureDetector(onTap: () {}, child: MyWidget())",
    codeExample: `
      GestureDetector(
        onTap: () {
          print('Widget tapped!');
        },
        child: Container(width: 100, height: 100, color: Colors.blue),
      )
    `,
  },
  {
    id: 77,
    question: "What is InkWell?",
    answer: "InkWell provides Material Design ripple effect on tap gestures.",
    example:
      "Use InkWell to add a visual feedback effect when a user taps a widget.",
    realTimeExample:
      "InkWell is like ripples in water. It creates a visual effect when you tap (drop a stone) on a widget (water).",
    realTimeExample2:
      "Think of InkWell as a button with a splash effect. It gives feedback when pressed, like a stone creating ripples in a pond.",
    syntax: "InkWell(onTap: () {}, child: MyWidget())",
    codeExample: `
      InkWell(
        onTap: () {
          print('Tapped!');
        },
        child: Container(width: 100, height: 100, color: Colors.red),
      )
    `,
  },
  {
    id: 78,
    question: "What is Hero widget?",
    answer:
      "Hero widget creates a hero animation between two screens for shared elements.",
    example:
      "Use Hero to animate the transition of an image or icon from one screen to another.",
    realTimeExample:
      "Hero is like a superhero flying between buildings. It smoothly transitions a widget (hero) from one screen (building) to another.",
    realTimeExample2:
      "Think of Hero as a teleportation device. It seamlessly moves a widget (object) from one place (screen) to another.",
    syntax: "Hero(tag: 'heroTag', child: MyWidget())",
    codeExample: `
      // First Screen
      Hero(tag: 'imageHero', child: Image.asset('images/logo.png'))
      // Second Screen
      Hero(tag: 'imageHero', child: Image.asset('images/logo.png'))
    `,
  },
  {
    id: 79,
    question: "What is AnimatedContainer?",
    answer:
      "AnimatedContainer automatically animates changes to its properties over time.",
    example:
      "Use AnimatedContainer to animate size, color, or padding changes.",
    realTimeExample:
      "AnimatedContainer is like a shape-shifter. It smoothly changes its appearance (properties) over time.",
    realTimeExample2:
      "Think of AnimatedContainer as a chameleon. It gradually changes its colors (properties) to blend in or stand out.",
    syntax:
      "AnimatedContainer(duration: Duration(seconds: 1), color: Colors.blue)",
    codeExample: `
      AnimatedContainer(
        duration: Duration(seconds: 1),
        color: isBlue ? Colors.blue : Colors.red,
        width: isBig ? 200 : 100,
        height: isBig ? 200 : 100,
      )
    `,
  },
  {
    id: 80,
    question: "What is Tween?",
    answer: "Tween defines the range of values for an animation.",
    example:
      "Use Tween to specify the start and end values for animations, like fading in or moving a widget.",
    realTimeExample:
      "Tween is like a ruler. It measures the distance (range of values) your animation will travel from start to end.",
    realTimeExample2:
      "Think of Tween as a timeline. It marks the beginning and end (values) of your animation’s journey.",
    syntax: "Tween(begin: 0.0, end: 1.0)",
    codeExample: `
      final Tween<double> opacityTween = Tween(begin: 0.0, end: 1.0);
    `,
  },
  {
    id: 81,
    question: "What is AnimationController?",
    answer: "AnimationController controls the animation playback.",
    example: "Use AnimationController to start, stop, or reverse animations.",
    realTimeExample:
      "AnimationController is like a remote control for your TV. It lets you play, pause, or stop your animation (show).",
    realTimeExample2:
      "Think of AnimationController as a conductor. It directs the pace and flow of your animation (orchestra).",
    syntax: "AnimationController(vsync: this, duration: Duration(seconds: 1))",
    codeExample: `
      late AnimationController _controller;
      @override
      void initState() {
        super.initState();
        _controller = AnimationController(
          vsync: this,
          duration: Duration(seconds: 1),
        );
      }
    `,
  },
  {
    id: 82,
    question: "What is Platform.isAndroid?",
    answer:
      "Platform.isAndroid is a boolean that checks if the app is running on Android.",
    example:
      "Use Platform.isAndroid to implement platform-specific code for Android devices.",
    realTimeExample:
      "Platform.isAndroid is like a signpost. It tells you if you’re on the Android road (platform) or not.",
    realTimeExample2:
      "Think of Platform.isAndroid as a detector. It checks if the device (car) is running on Android fuel (platform).",
    syntax: "if (Platform.isAndroid) { ... }",
    codeExample: `
      if (Platform.isAndroid) {
        print('Running on Android!');
      }
    `,
  },
  {
    id: 83,
    question: "What is Platform.isIOS?",
    answer:
      "Platform.isIOS is a boolean that checks if the app is running on iOS.",
    example:
      "Use Platform.isIOS to implement platform-specific code for iOS devices.",
    realTimeExample:
      "Platform.isIOS is like a compass. It points you to the iOS direction (platform) if that’s where you are.",
    realTimeExample2:
      "Think of Platform.isIOS as a language detector. It checks if the device (person) speaks iOS (language).",
    syntax: "if (Platform.isIOS) { ... }",
    codeExample: `
      if (Platform.isIOS) {
        print('Running on iOS!');
      }
    `,
  },
  {
    id: 84,
    question: "What is MethodChannel?",
    answer:
      "MethodChannel allows communication between Flutter and native platform code.",
    example:
      "Use MethodChannel to call native functions from Flutter or vice versa.",
    realTimeExample:
      "MethodChannel is like a phone call between Flutter and native code. It lets them talk to each other and share information.",
    realTimeExample2:
      "Think of MethodChannel as a bridge. It connects Flutter (one side) to native code (the other side) for two-way communication.",
    syntax: "const MethodChannel('channel_name')",
    codeExample: `
      const platform = MethodChannel('com.example/app');
      final String result = await platform.invokeMethod('getBatteryLevel');
    `,
  },
  {
    id: 85,
    question: "What is EventChannel?",
    answer: "EventChannel allows sending events from native code to Flutter.",
    example:
      "Use EventChannel to listen for native events, like sensor data or notifications.",
    realTimeExample:
      "EventChannel is like a radio station. Native code (broadcaster) sends events (music) to Flutter (listeners).",
    realTimeExample2:
      "Think of EventChannel as a news feed. Native code (source) streams events (news) to Flutter (subscribers).",
    syntax: "const EventChannel('channel_name')",
    codeExample: `
      const EventChannel('com.example/events');
      eventChannel.receiveBroadcastStream().listen((event) {
        print('Received event: $event');
      });
    `,
  },
  {
    id: 86,
    question: "What is shared_preferences?",
    answer:
      "shared_preferences is a package for storing simple key-value pairs locally.",
    example: "Use shared_preferences to save user preferences or settings.",
    realTimeExample:
      "shared_preferences is like a notebook. You jot down (save) important notes (key-value pairs) to remember later.",
    realTimeExample2:
      "Think of shared_preferences as a cookie jar. It stores small pieces of data (cookies) for quick access.",
    syntax: "SharedPreferences prefs = await SharedPreferences.getInstance();",
    codeExample: `
      final prefs = await SharedPreferences.getInstance();
      await prefs.setString('userName', 'John Doe');
      final userName = prefs.getString('userName');
    `,
  },
  {
    id: 87,
    question: "How to store data locally?",
    answer:
      "Use shared_preferences for simple data or sqflite for SQLite database.",
    example:
      "Store user settings with shared_preferences or app data with sqflite.",
    realTimeExample:
      "Storing data locally is like using a filing cabinet. shared_preferences is for quick notes (files), and sqflite is for organized folders (database).",
    realTimeExample2:
      "Think of local storage as a pantry. shared_preferences is for snacks (small data), and sqflite is for meals (structured data).",
    syntax:
      "SharedPreferences prefs = await SharedPreferences.getInstance();\nsqflite.openDatabase('my_db.db')",
    codeExample: `
      // Using shared_preferences
      final prefs = await SharedPreferences.getInstance();
      await prefs.setInt('counter', 10);
      // Using sqflite
      final database = openDatabase('my_db.db');
    `,
  },
  {
    id: 88,
    question: "What is http package?",
    answer: "http package provides functions for making HTTP requests.",
    example: "Use http to fetch data from APIs or send data to a server.",
    realTimeExample:
      "http package is like a postal service. It delivers (fetches/sends) letters (data) between your app and the server.",
    realTimeExample2:
      "Think of http as a messenger. It carries requests (messages) to the server and brings back responses (replies).",
    syntax: "http.get(Uri.parse('https://example.com'))",
    codeExample: `
      final response = await http.get(Uri.parse('https://jsonplaceholder.typicode.com/posts/1'));
      print(response.body);
    `,
  },
  {
    id: 89,
    question: "How to make HTTP requests?",
    answer:
      "Use http.get(), http.post(), etc., to fetch or send data to a server.",
    example: "Fetch user data from an API or submit a form to a server.",
    realTimeExample:
      "Making HTTP requests is like ordering food. You send your order (request) to the kitchen (server) and wait for your meal (response).",
    realTimeExample2:
      "Think of HTTP requests as sending a letter. You write your message (request), send it (http.post), and wait for a reply (response).",
    syntax:
      "http.get(Uri.parse('url'))\nhttp.post(Uri.parse('url'), body: {'key': 'value'})",
    codeExample: `
      final response = await http.post(
        Uri.parse('https://example.com/api'),
        body: {'name': 'John', 'age': '30'},
      );
    `,
  },
  {
    id: 90,
    question: "What is json.decode?",
    answer: "json.decode parses a JSON string into a Dart object.",
    example:
      "Use json.decode to convert JSON responses from APIs into Dart objects.",
    realTimeExample:
      "json.decode is like a translator. It converts JSON (foreign language) into Dart objects (your language).",
    realTimeExample2:
      "Think of json.decode as a decoder ring. It turns coded messages (JSON) into readable text (Dart objects).",
    syntax: "json.decode(jsonString)",
    codeExample: `
      final jsonString = '{"name": "John", "age": 30}';
      final Map<String, dynamic> data = json.decode(jsonString);
    `,
  },
  {
    id: 91,
    question: "What is json.encode?",
    answer: "json.encode converts a Dart object into a JSON string.",
    example: "Use json.encode to send Dart objects as JSON to a server.",
    realTimeExample:
      "json.encode is like a translator in reverse. It converts Dart objects (your language) into JSON (foreign language).",
    realTimeExample2:
      "Think of json.encode as an encoder. It turns readable text (Dart objects) into coded messages (JSON).",
    syntax: "json.encode(dartObject)",
    codeExample: `
      final data = {'name': 'John', 'age': 30};
      final jsonString = json.encode(data);
    `,
  },
  {
    id: 92,
    question: "What is try-catch in Dart?",
    answer: "try-catch handles exceptions in Dart code.",
    example:
      "Use try-catch to gracefully handle errors, like network failures or invalid input.",
    realTimeExample:
      "try-catch is like a safety net. It catches errors (falls) so your app doesn’t crash (hit the ground).",
    realTimeExample2:
      "Think of try-catch as a backup plan. If something goes wrong (exception), you have a plan B (catch block).",
    syntax: "try { ... } catch (e) { ... }",
    codeExample: `
      try {
        final response = await http.get(Uri.parse('https://example.com'));
      } catch (e) {
        print('Error: $e');
      }
    `,
  },
  {
    id: 93,
    question: "What is FutureBuilder?",
    answer: "FutureBuilder builds widgets based on the state of a Future.",
    example:
      "Use FutureBuilder to display loading indicators or data from asynchronous operations.",
    realTimeExample:
      "FutureBuilder is like a chef preparing a dish. While the food (Future) is cooking, it shows a 'preparing' sign (loading). When ready, it serves the dish (data).",
    realTimeExample2:
      "Think of FutureBuilder as a weather forecast. It shows a loading symbol (cloudy) while waiting for the forecast (Future) to complete, then displays the weather (data).",
    syntax:
      "FutureBuilder(future: myFuture, builder: (context, snapshot) { ... })",
    codeExample: `
      FutureBuilder(
        future: fetchData(),
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return CircularProgressIndicator();
          } else if (snapshot.hasError) {
            return Text('Error: \${snapshot.error}');
          } else {
            return Text('Data: \${snapshot.data}');
          }
        },
      )
    `,
  },
  {
    id: 94,
    question: "What is StreamBuilder?",
    answer: "StreamBuilder builds widgets based on the state of a Stream.",
    example:
      "Use StreamBuilder to display real-time data, like chat messages or live updates.",
    realTimeExample:
      "StreamBuilder is like a live sports commentator. It updates the score (UI) in real-time as the game (Stream) progresses.",
    realTimeExample2:
      "Think of StreamBuilder as a news ticker. It continuously updates the headlines (UI) as news (Stream) comes in.",
    syntax:
      "StreamBuilder(stream: myStream, builder: (context, snapshot) { ... })",
    codeExample: `
      StreamBuilder(
        stream: myStream,
        builder: (context, snapshot) {
          if (snapshot.hasData) {
            return Text('Data: \${snapshot.data}');
          } else {
            return CircularProgressIndicator();
          }
        },
      )
    `,
  },
  {
    id: 95,
    question: "What is ValueNotifier?",
    answer: "ValueNotifier notifies listeners when its value changes.",
    example:
      "Use ValueNotifier to update widgets when a value changes, like a counter or theme setting.",
    realTimeExample:
      "ValueNotifier is like a bell. When its value (bell) rings (changes), all listeners (widgets) pay attention (update).",
    realTimeExample2:
      "Think of ValueNotifier as a loudspeaker. It announces changes (value) to all listeners (widgets) in the room.",
    syntax: "ValueNotifier<int>(0)",
    codeExample: `
      final counter = ValueNotifier<int>(0);
      counter.addListener(() {
        print('Counter changed to \${counter.value}');
      });
      counter.value = 1;
    `,
  },
  {
    id: 96,
    question: "What is ChangeNotifier?",
    answer:
      "ChangeNotifier is a class that provides change notification to listeners.",
    example:
      "Use ChangeNotifier to manage state and notify widgets of changes.",
    realTimeExample:
      "ChangeNotifier is like a news anchor. It broadcasts updates (changes) to all subscribers (listeners).",
    realTimeExample2:
      "Think of ChangeNotifier as a town crier. It shouts out changes (news) for all to hear (listen).",
    syntax: "class MyModel extends ChangeNotifier { ... }",
    codeExample: `
      class CounterModel extends ChangeNotifier {
        int _count = 0;
        int get count => _count;
        void increment() {
          _count++;
          notifyListeners();
        }
      }
    `,
  },
  {
    id: 97,
    question: "What is Consumer widget?",
    answer:
      "Consumer widget listens to a Provider and rebuilds when data changes.",
    example:
      "Use Consumer to efficiently rebuild only the widgets that depend on specific data.",
    realTimeExample:
      "Consumer is like a subscriber to a magazine. It gets updates (rebuilds) only when a new issue (data change) arrives.",
    realTimeExample2:
      "Think of Consumer as a thermostat. It reacts (rebuilds) only when the temperature (data) changes.",
    syntax: "Consumer<MyModel>(builder: (context, model, child) { ... })",
    codeExample: `
      Consumer<CounterModel>(
        builder: (context, counter, child) {
          return Text('Count: \${counter.count}');
        },
      )
    `,
  },
  {
    id: 98,
    question: "What is Selector widget?",
    answer:
      "Selector widget rebuilds only when specific parts of the data change.",
    example:
      "Use Selector to optimize performance by rebuilding only when necessary.",
    realTimeExample:
      "Selector is like a filter. It only lets through (rebuilds) the changes (data) you’re interested in.",
    realTimeExample2:
      "Think of Selector as a security guard. It only allows updates (rebuilds) that match the criteria (specific data changes).",
    syntax:
      "Selector<MyModel, int>(selector: (_, model) => model.count, builder: (_, count, __) { ... })",
    codeExample: `
      Selector<CounterModel, int>(
        selector: (_, counter) => counter.count,
        builder: (_, count, __) {
          return Text('Count: $count');
        },
      )
    `,
  },
  {
    id: 99,
    question: "What is Bloc pattern?",
    answer: "Bloc is a state management pattern using streams and sinks.",
    example:
      "Use Bloc to manage complex state and business logic in large apps.",
    realTimeExample:
      "Bloc is like a traffic controller. It manages the flow of data (traffic) and ensures everything runs smoothly (state).",
    realTimeExample2:
      "Think of Bloc as a project manager. It coordinates tasks (state changes) and keeps the project (app) on track.",
    syntax: "BlocBuilder<CounterBloc, int>(builder: (context, count) { ... })",
    codeExample: `
      class CounterBloc extends Bloc<CounterEvent, int> {
        CounterBloc() : super(0) {
          on<Increment>((event, emit) => emit(state + 1));
        }
      }
    `,
  },
  {
    id: 100,
    question: "What is Riverpod?",
    answer:
      "Riverpod is a state management library for Flutter, successor to Provider.",
    example:
      "Use Riverpod for scalable and testable state management in Flutter apps.",
    realTimeExample:
      "Riverpod is like a river. It flows (provides) data to all parts of your app (ecosystem) efficiently.",
    realTimeExample2:
      "Think of Riverpod as a power grid. It delivers electricity (state) to all connected devices (widgets) reliably.",
    syntax: "final counterProvider = StateProvider<int>((ref) => 0);",
    codeExample: `
      final counterProvider = StateProvider<int>((ref) => 0);
      // Usage:
      final count = ref.watch(counterProvider);
    `,
  },
  {
    id: 101,
    question: "What is GetX?",
    answer:
      "GetX is a state management, navigation, and dependency injection library.",
    example:
      "Use GetX for fast and lightweight state management and navigation.",
    realTimeExample:
      "GetX is like a Swiss Army knife. It’s a single tool (library) with multiple functions (state, navigation, DI).",
    realTimeExample2:
      "Think of GetX as a fast car. It gets you (state, navigation) where you need to go quickly and efficiently.",
    syntax: "Get.put(CounterController())\nGet.find<CounterController>()",
    codeExample: `
      class CounterController extends GetxController {
        var count = 0.obs;
        void increment() => count++;
      }
      // Usage:
      Get.put(CounterController());
      final controller = Get.find<CounterController>();
    `,
  },
  {
    id: 102,
    question: "What is MobX?",
    answer:
      "MobX is a state management library using observables and reactions.",
    example: "Use MobX to manage state reactively and efficiently.",
    realTimeExample:
      "MobX is like a smart home system. It automatically reacts (updates UI) to changes (state) in your home (app).",
    realTimeExample2:
      "Think of MobX as a domino effect. Changing one observable (domino) triggers reactions (falling dominos) throughout your app.",
    syntax:
      "Observable<int> count = 0.observable;\nreaction((_) => count.value, (count) { ... })",
    codeExample: `
      class Counter = _Counter with _$Counter;
      abstract class _Counter with Store {
        @observable
        int count = 0;
        @action
        void increment() => count++;
      }
    `,
  },
  {
    id: 103,
    question: "What is Redux?",
    answer: "Redux is a predictable state container for managing app state.",
    example: "Use Redux for large apps with complex state management needs.",
    realTimeExample:
      "Redux is like a central library. It stores all the books (state) and ensures everyone (widgets) has access to the same information.",
    realTimeExample2:
      "Think of Redux as a ledger. It keeps a single, accurate record (state) of all transactions (changes) in your app.",
    syntax:
      "Store<AppState> store = Store<AppState>(reducer, initialState: AppState())",
    codeExample: `
      final store = Store<AppState>(
        appReducer,
        initialState: AppState.initial(),
      );
    `,
  },
  {
    id: 104,
    question: "What is InheritedWidget?",
    answer: "InheritedWidget propagates data down the widget tree efficiently.",
    example:
      "Use InheritedWidget to share data like themes or user settings across your app.",
    realTimeExample:
      "InheritedWidget is like a family heirloom. It passes down data (heirloom) through generations (widget tree).",
    realTimeExample2:
      "Think of InheritedWidget as a water pipe. It delivers data (water) from the source (root) to all connected widgets (faucets).",
    syntax: "class MyInheritedWidget extends InheritedWidget { ... }",
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
    id: 105,
    question: "What is MediaQuery?",
    answer:
      "MediaQuery provides information about the device's screen size and orientation.",
    example:
      "Use MediaQuery to create responsive layouts that adapt to different screen sizes.",
    realTimeExample:
      "MediaQuery is like a tailor’s measuring tape. It measures the screen (fabric) so your layout (clothes) fits perfectly.",
    realTimeExample2:
      "Think of MediaQuery as a GPS for your screen. It tells you the dimensions (location) so you can navigate (layout) accordingly.",
    syntax: "MediaQuery.of(context).size",
    codeExample: `
      final screenWidth = MediaQuery.of(context).size.width;
      final screenHeight = MediaQuery.of(context).size.height;
    `,
  },
  {
    id: 106,
    question: "What is LayoutBuilder?",
    answer:
      "LayoutBuilder builds widgets based on the parent widget's constraints.",
    example:
      "Use LayoutBuilder to create widgets that adapt to their parent’s size.",
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
            color: Colors.blue,
          );
        },
      )
    `,
  },
  {
    id: 107,
    question: "What is OrientationBuilder?",
    answer: "OrientationBuilder builds widgets based on device orientation.",
    example:
      "Use OrientationBuilder to create layouts that adapt to portrait or landscape mode.",
    realTimeExample:
      "OrientationBuilder is like a compass. It helps your layout (ship) navigate based on the device’s orientation (direction).",
    realTimeExample2:
      "Think of OrientationBuilder as a weather vane. It changes your layout (direction) based on the device’s orientation (wind).",
    syntax: "OrientationBuilder(builder: (context, orientation) { ... })",
    codeExample: `
      OrientationBuilder(
        builder: (context, orientation) {
          return orientation == Orientation.portrait
              ? PortraitLayout()
              : LandscapeLayout();
        },
      )
    `,
  },
  {
    id: 108,
    question: "What is AspectRatio?",
    answer: "AspectRatio sizes its child to a specific aspect ratio.",
    example:
      "Use AspectRatio to maintain consistent proportions for images or videos.",
    realTimeExample:
      "AspectRatio is like a photo frame. It ensures your image (child) fits perfectly without stretching (maintaining aspect ratio).",
    realTimeExample2:
      "Think of AspectRatio as a widescreen TV. It keeps the picture (child) in the correct proportions (aspect ratio).",
    syntax: "AspectRatio(aspectRatio: 16 / 9, child: MyWidget())",
    codeExample: `
      AspectRatio(
        aspectRatio: 16 / 9,
        child: Container(color: Colors.blue),
      )
    `,
  },
  {
    id: 109,
    question: "What is FractionallySizedBox?",
    answer:
      "FractionallySizedBox sizes its child as a fraction of the available space.",
    example:
      "Use FractionallySizedBox to create widgets that scale with their parent’s size.",
    realTimeExample:
      "FractionallySizedBox is like a pie chart. It allocates a fraction (slice) of the space (pie) to its child (slice).",
    realTimeExample2:
      "Think of FractionallySizedBox as a zoom lens. It adjusts the size of its child (focus) relative to the available space (frame).",
    syntax: "FractionallySizedBox(widthFactor: 0.5, child: MyWidget())",
    codeExample: `
      FractionallySizedBox(
        widthFactor: 0.5,
        child: Container(color: Colors.red),
      )
    `,
  },
  {
    id: 110,
    question: "What is ConstrainedBox?",
    answer: "ConstrainedBox imposes additional constraints on its child.",
    example:
      "Use ConstrainedBox to enforce minimum or maximum sizes for a widget.",
    realTimeExample:
      "ConstrainedBox is like a cage. It sets boundaries (constraints) for its child (animal) to move within.",
    realTimeExample2:
      "Think of ConstrainedBox as a fence. It limits how far its child (widget) can expand or shrink.",
    syntax:
      "ConstrainedBox(constraints: BoxConstraints(minWidth: 100), child: MyWidget())",
    codeExample: `
      ConstrainedBox(
        constraints: BoxConstraints(minWidth: 100, minHeight: 100),
        child: Container(color: Colors.green),
      )
    `,
  },
  {
    id: 111,
    question: "What is UnconstrainedBox?",
    answer: "UnconstrainedBox allows its child to be as large as it wants.",
    example:
      "Use UnconstrainedBox to let a widget ignore its parent’s constraints.",
    realTimeExample:
      "UnconstrainedBox is like an open field. It lets its child (widget) grow as big as it wants without restrictions.",
    realTimeExample2:
      "Think of UnconstrainedBox as a blank canvas. It gives its child (widget) complete freedom to express itself (size).",
    syntax: "UnconstrainedBox(child: MyWidget())",
    codeExample: `
      UnconstrainedBox(
        child: Container(width: 300, height: 300, color: Colors.purple),
      )
    `,
  },
  {
    id: 112,
    question: "What is OverflowBox?",
    answer:
      "OverflowBox allows its child to overflow the parent's constraints.",
    example:
      "Use OverflowBox to create effects where widgets extend beyond their parent’s boundaries.",
    realTimeExample:
      "OverflowBox is like a balloon. It lets its child (widget) expand beyond its container (parent’s constraints).",
    realTimeExample2:
      "Think of OverflowBox as a magic hat. It allows its child (widget) to pop out and surprise you (overflow).",
    syntax: "OverflowBox(minWidth: 0, minHeight: 0, child: MyWidget())",
    codeExample: `
      OverflowBox(
        minWidth: 0,
        minHeight: 0,
        child: Container(width: 200, height: 200, color: Colors.orange),
      )
    `,
  },
  {
    id: 113,
    question: "What is SizedOverflowBox?",
    answer: "SizedOverflowBox sizes its child and allows overflow.",
    example:
      "Use SizedOverflowBox to give a widget a specific size while allowing it to overflow.",
    realTimeExample:
      "SizedOverflowBox is like a picture frame with a magnifying glass. It sets a size (frame) but lets the image (child) extend beyond it (overflow).",
    realTimeExample2:
      "Think of SizedOverflowBox as a window. It defines the view (size) but lets the scenery (child) extend beyond the frame (overflow).",
    syntax: "SizedOverflowBox(size: Size(100, 100), child: MyWidget())",
    codeExample: `
      SizedOverflowBox(
        size: Size(100, 100),
        child: Container(width: 150, height: 150, color: Colors.pink),
      )
    `,
  },
  {
    id: 114,
    question: "What is LimitedBox?",
    answer: "LimitedBox limits the maximum size of its child.",
    example: "Use LimitedBox to prevent a widget from growing too large.",
    realTimeExample:
      "LimitedBox is like a speed limit. It prevents its child (widget) from exceeding a certain size (speed).",
    realTimeExample2:
      "Think of LimitedBox as a leash. It keeps its child (widget) from wandering too far (growing too large).",
    syntax: "LimitedBox(maxWidth: 200, child: MyWidget())",
    codeExample: `
      LimitedBox(
        maxWidth: 200,
        child: Container(width: 300, height: 100, color: Colors.cyan),
      )
    `,
  },
  {
    id: 115,
    question: "What is IntrinsicWidth?",
    answer: "IntrinsicWidth sizes its child to its intrinsic width.",
    example:
      "Use IntrinsicWidth to make a widget as wide as its content requires.",
    realTimeExample:
      "IntrinsicWidth is like a tailor. It measures the child’s natural width (intrinsic width) and sets the widget’s width accordingly.",
    realTimeExample2:
      "Think of IntrinsicWidth as a custom frame. It adjusts to fit the exact width of the picture (child) inside.",
    syntax: "IntrinsicWidth(child: MyWidget())",
    codeExample: `
      IntrinsicWidth(
        child: Column(
          children: [
            Container(width: 100, height: 50, color: Colors.red),
            Container(width: 150, height: 50, color: Colors.green),
          ],
        ),
      )
    `,
  },
  {
    id: 116,
    question: "What is IntrinsicHeight?",
    answer: "IntrinsicHeight sizes its child to its intrinsic height.",
    example:
      "Use IntrinsicHeight to make a widget as tall as its content requires.",
    realTimeExample:
      "IntrinsicHeight is like a measuring tape. It finds the child’s natural height (intrinsic height) and sets the widget’s height to match.",
    realTimeExample2:
      "Think of IntrinsicHeight as a custom shelf. It adjusts to the exact height of the items (child) placed on it.",
    syntax: "IntrinsicHeight(child: MyWidget())",
    codeExample: `
      IntrinsicHeight(
        child: Row(
          children: [
            Container(width: 50, height: 100, color: Colors.blue),
            Container(width: 50, height: 150, color: Colors.yellow),
          ],
        ),
      )
    `,
  },
  {
    id: 117,
    question: "What is Baseline?",
    answer: "Baseline aligns widgets along a baseline.",
    example:
      "Use Baseline to align text or icons along a common baseline for consistent layouts.",
    realTimeExample:
      "Baseline is like a ruler. It helps you align widgets (words) along a straight line (baseline) for neatness.",
    realTimeExample2:
      "Think of Baseline as a musical staff. It aligns notes (widgets) along lines (baseline) for harmony (consistent layout).",
    syntax:
      "Baseline(baseline: 20, baselineType: TextBaseline.alphabetic, child: MyWidget())",
    codeExample: `
      Baseline(
        baseline: 50,
        baselineType: TextBaseline.alphabetic,
        child: Text('Hello', style: TextStyle(fontSize: 30)),
      )
    `,
  },
  {
    id: 118,
    question: "What is Positioned?",
    answer: "Positioned positions a child of a Stack.",
    example:
      "Use Positioned to place widgets at specific coordinates within a Stack.",
    realTimeExample:
      "Positioned is like a GPS coordinate. It places your widget (destination) at an exact location (x, y) within the Stack (map).",
    realTimeExample2:
      "Think of Positioned as a pin on a bulletin board. It fixes your widget (note) at a specific spot (coordinates) in the Stack (board).",
    syntax: "Positioned(top: 10, left: 20, child: MyWidget())",
    codeExample: `
      Stack(
        children: [
          Positioned(
            top: 10,
            left: 20,
            child: Container(width: 50, height: 50, color: Colors.red),
          ),
        ],
      )
    `,
  },
  {
    id: 119,
    question: "What is CompositedTransformFollower?",
    answer: "CompositedTransformFollower follows a CompositedTransformTarget.",
    example:
      "Use CompositedTransformFollower to create advanced animations or effects where one widget follows another.",
    realTimeExample:
      "CompositedTransformFollower is like a shadow. It follows the movements (transforms) of its target (CompositedTransformTarget).",
    realTimeExample2:
      "Think of CompositedTransformFollower as a puppy. It follows its owner (target) wherever they go (transform).",
    syntax: "CompositedTransformFollower(link: LayerLink(), child: MyWidget())",
    codeExample: `
      // Target
      CompositedTransformTarget(
        link: _layerLink,
        child: Container(width: 50, height: 50, color: Colors.red),
      )
      // Follower
      CompositedTransformFollower(
        link: _layerLink,
        child: Container(width: 30, height: 30, color: Colors.blue),
      )
    `,
  },
  {
    id: 120,
    question: "What is CompositedTransformTarget?",
    answer:
      "CompositedTransformTarget provides a link for CompositedTransformFollower.",
    example:
      "Use CompositedTransformTarget to mark a widget as the target for a follower.",
    realTimeExample:
      "CompositedTransformTarget is like a beacon. It marks the location (widget) for the follower (CompositedTransformFollower) to track.",
    realTimeExample2:
      "Think of CompositedTransformTarget as a lighthouse. It guides the follower (ship) to its location (widget).",
    syntax: "CompositedTransformTarget(link: LayerLink(), child: MyWidget())",
    codeExample: `
      final LayerLink _layerLink = LayerLink();
      CompositedTransformTarget(
        link: _layerLink,
        child: Container(width: 50, height: 50, color: Colors.red),
      )
    `,
  },
  {
    id: 121,
    question: "What is CustomPaint?",
    answer: "CustomPaint allows custom drawing on the canvas.",
    example: "Use CustomPaint to create custom shapes, paths, or animations.",
    realTimeExample:
      "CustomPaint is like a blank canvas. It lets you draw (paint) anything you imagine using code (brushes).",
    realTimeExample2:
      "Think of CustomPaint as a sketchbook. It gives you the freedom to create custom designs (shapes) from scratch.",
    syntax: "CustomPaint(painter: MyPainter(), child: MyWidget())",
    codeExample: `
      class MyPainter extends CustomPainter {
        @override
        void paint(Canvas canvas, Size size) {
          final paint = Paint()..color = Colors.blue;
          canvas.drawCircle(Offset(50, 50), 30, paint);
        }
        @override
        bool shouldRepaint(CustomPainter oldDelegate) => false;
      }
      CustomPaint(painter: MyPainter())
    `,
  },
  {
    id: 122,
    question: "What is CustomClipper?",
    answer: "CustomClipper defines custom clipping paths.",
    example: "Use CustomClipper to create custom shapes by clipping widgets.",
    realTimeExample:
      "CustomClipper is like a cookie cutter. It cuts (clips) your widget (dough) into custom shapes (cookies).",
    realTimeExample2:
      "Think of CustomClipper as scissors. It trims your widget (paper) into the shape you want (clip path).",
    syntax: "ClipPath(clipper: MyClipper(), child: MyWidget())",
    codeExample: `
      class MyClipper extends CustomClipper<Path> {
        @override
        Path getClip(Size size) {
          final path = Path();
          path.lineTo(size.width, 0);
          path.lineTo(size.width, size.height);
          path.close();
          return path;
        }
        @override
        bool shouldReclip(CustomClipper<Path> oldClipper) => false;
      }
      ClipPath(clipper: MyClipper(), child: Container(color: Colors.blue))
    `,
  },
  {
    id: 123,
    question: "What is ClipPath?",
    answer: "ClipPath clips its child to a custom path.",
    example: "Use ClipPath to create custom-shaped widgets using paths.",
    realTimeExample:
      "ClipPath is like a stencil. It cuts (clips) your widget (paper) into the shape defined by the path (stencil).",
    realTimeExample2:
      "Think of ClipPath as a jigsaw puzzle piece. It shapes your widget (piece) to fit a specific outline (path).",
    syntax: "ClipPath(clipper: MyClipper(), child: MyWidget())",
    codeExample: `
      ClipPath(
        clipper: MyClipper(),
        child: Container(color: Colors.green, width: 100, height: 100),
      )
    `,
  },
  {
    id: 124,
    question: "What is ClipRect?",
    answer: "ClipRect clips its child to a rectangle.",
    example:
      "Use ClipRect to hide parts of a widget outside a rectangular area.",
    realTimeExample:
      "ClipRect is like a picture frame. It shows only the part of the image (widget) that fits within the frame (rectangle).",
    realTimeExample2:
      "Think of ClipRect as a window. It lets you see only the part of the scenery (widget) within the window’s borders (rectangle).",
    syntax: "ClipRect(child: MyWidget())",
    codeExample: `
      ClipRect(
        child: Container(width: 100, height: 100, color: Colors.orange),
      )
    `,
  },
  {
    id: 125,
    question: "What is ClipOval?",
    answer: "ClipOval clips its child to an oval.",
    example: "Use ClipOval to create circular or oval-shaped widgets.",
    realTimeExample:
      "ClipOval is like a magnifying glass. It shows your widget (image) as an oval (magnified circle).",
    realTimeExample2:
      "Think of ClipOval as a porthole. It frames your widget (view) in a circular or oval shape.",
    syntax: "ClipOval(child: MyWidget())",
    codeExample: `
      ClipOval(
        child: Container(width: 100, height: 100, color: Colors.purple),
      )
    `,
  },
  {
    id: 126,
    question: "What is ClipRRect?",
    answer: "ClipRRect clips its child to rounded rectangles.",
    example: "Use ClipRRect to create widgets with rounded corners.",
    realTimeExample:
      "ClipRRect is like a rounded picture frame. It clips your widget (photo) to fit within rounded corners (frame).",
    realTimeExample2:
      "Think of ClipRRect as a pill bottle. It shapes your widget (content) with smooth, rounded edges.",
    syntax:
      "ClipRRect(borderRadius: BorderRadius.circular(10), child: MyWidget())",
    codeExample: `
      ClipRRect(
        borderRadius: BorderRadius.circular(20),
        child: Container(width: 100, height: 100, color: Colors.pink),
      )
    `,
  },
  {
    id: 127,
    question: "What is BackdropFilter?",
    answer: "BackdropFilter applies a filter to the area behind its child.",
    example:
      "Use BackdropFilter to create effects like blur or color filters behind widgets.",
    realTimeExample:
      "BackdropFilter is like a camera lens filter. It applies effects (blur, color) to the background (backdrop) behind your widget (subject).",
    realTimeExample2:
      "Think of BackdropFilter as a stained glass window. It colors or blurs the light (background) behind the glass (widget).",
    syntax:
      "BackdropFilter(filter: ImageFilter.blur(sigmaX: 5, sigmaY: 5), child: MyWidget())",
    codeExample: `
      BackdropFilter(
        filter: ImageFilter.blur(sigmaX: 5, sigmaY: 5),
        child: Container(color: Colors.black.withOpacity(0.1)),
      )
    `,
  },
  {
    id: 128,
    question: "What is Opacity?",
    answer: "Opacity makes its child partially transparent.",
    example:
      "Use Opacity to create fade-in/out effects or semi-transparent widgets.",
    realTimeExample:
      "Opacity is like a sheer curtain. It makes your widget (view) partially see-through (transparent).",
    realTimeExample2:
      "Think of Opacity as sunglasses. It darkens (reduces opacity) or lightens (increases opacity) your widget (view).",
    syntax: "Opacity(opacity: 0.5, child: MyWidget())",
    codeExample: `
      Opacity(
        opacity: 0.5,
        child: Container(color: Colors.blue, width: 100, height: 100),
      )
    `,
  },
  {
    id: 129,
    question: "What is ShaderMask?",
    answer: "ShaderMask applies a shader to its child.",
    example: "Use ShaderMask to create gradient or color effects on widgets.",
    realTimeExample:
      "ShaderMask is like a colored lens. It applies a color or gradient effect (shader) to your widget (view).",
    realTimeExample2:
      "Think of ShaderMask as a spotlight. It highlights or colors your widget (stage) with a specific effect (shader).",
    syntax:
      "ShaderMask(shaderCallback: (bounds) => LinearGradient(colors: [Colors.red, Colors.blue]).createShader(bounds), child: MyWidget())",
    codeExample: `
      ShaderMask(
        shaderCallback: (bounds) => LinearGradient(
          colors: [Colors.red, Colors.blue],
        ).createShader(bounds),
        child: Text('Hello', style: TextStyle(fontSize: 40, color: Colors.white)),
      )
    `,
  },
  {
    id: 130,
    question: "What is ColorFiltered?",
    answer: "ColorFiltered applies a color filter to its child.",
    example:
      "Use ColorFiltered to change the color of widgets or images dynamically.",
    realTimeExample:
      "ColorFiltered is like a photo filter. It changes the colors (filter) of your widget (photo) to create different moods.",
    realTimeExample2:
      "Think of ColorFiltered as a pair of colored glasses. It alters how you see (color) your widget (view).",
    syntax:
      "ColorFiltered(colorFilter: ColorFilter.mode(Colors.red, BlendMode.modulate), child: MyWidget())",
    codeExample: `
      ColorFiltered(
        colorFilter: ColorFilter.mode(Colors.red, BlendMode.modulate),
        child: Image.asset('images/logo.png'),
      )
    `,
  },
  {
    id: 131,
    question: "What is Transform?",
    answer: "Transform applies matrix transformations to its child.",
    example: "Use Transform to rotate, scale, or translate widgets.",
    realTimeExample:
      "Transform is like a magic wand. It can rotate, resize (scale), or move (translate) your widget (object) with a wave (code).",
    realTimeExample2:
      "Think of Transform as a 3D printer. It can manipulate your widget (model) in multiple dimensions (transformations).",
    syntax:
      "Transform.rotate(angle: pi / 4, child: MyWidget())\nTransform.scale(scale: 1.5, child: MyWidget())",
    codeExample: `
      Transform.rotate(
        angle: pi / 4,
        child: Container(width: 100, height: 100, color: Colors.green),
      )
    `,
  },
  {
    id: 132,
    question: "What is RotatedBox?",
    answer: "RotatedBox rotates its child by quarter turns.",
    example: "Use RotatedBox to rotate widgets in 90-degree increments.",
    realTimeExample:
      "RotatedBox is like turning a page. It rotates your widget (page) by 90 degrees (quarter turn).",
    realTimeExample2:
      "Think of RotatedBox as a revolving door. It turns your widget (door) in fixed steps (quarter turns).",
    syntax: "RotatedBox(quarterTurns: 1, child: MyWidget())",
    codeExample: `
      RotatedBox(
        quarterTurns: 1,
        child: Text('Rotated Text'),
      )
    `,
  },
  {
    id: 133,
    question: "What is FittedBox?",
    answer: "FittedBox scales and positions its child within itself.",
    example:
      "Use FittedBox to fit a widget into a specific space while maintaining its aspect ratio.",
    realTimeExample:
      "FittedBox is like a photo editor. It scales (resizes) and positions your widget (photo) to fit the frame (space).",
    realTimeExample2:
      "Think of FittedBox as a projector. It adjusts the size (scale) and position of your widget (image) to fit the screen (space).",
    syntax: "FittedBox(fit: BoxFit.contain, child: MyWidget())",
    codeExample: `
      FittedBox(
        fit: BoxFit.contain,
        child: Container(width: 200, height: 100, color: Colors.blue),
      )
    `,
  },
  {
    id: 134,
    question: "What is SingleChildScrollView?",
    answer: "SingleChildScrollView makes its child scrollable.",
    example:
      "Use SingleChildScrollView to allow vertical or horizontal scrolling for a single child widget.",
    realTimeExample:
      "SingleChildScrollView is like a scroll of parchment. You can roll (scroll) through the content (child) to see more.",
    realTimeExample2:
      "Think of SingleChildScrollView as a telescope. It lets you scroll (pan) to see different parts of your widget (sky).",
    syntax: "SingleChildScrollView(child: MyWidget())",
    codeExample: `
      SingleChildScrollView(
        child: Column(
          children: [
            Container(height: 200, color: Colors.red),
            Container(height: 200, color: Colors.green),
          ],
        ),
      )
    `,
  },
  {
    id: 135,
    question: "What is NestedScrollView?",
    answer:
      "NestedScrollView coordinates scrolling between nested scrollable widgets.",
    example:
      "Use NestedScrollView to create complex scrolling effects with multiple scrollable areas.",
    realTimeExample:
      "NestedScrollView is like a book with chapters. Each chapter (nested scrollable) can be scrolled independently, but they’re all part of the same book (view).",
    realTimeExample2:
      "Think of NestedScrollView as a set of Russian dolls. Each doll (scrollable) can be opened (scrolled) independently, but they’re all nested together.",
    syntax:
      "NestedScrollView(headerSliverBuilder: (context, innerBoxIsScrolled) { ... }, body: MyWidget())",
    codeExample: `
      NestedScrollView(
        headerSliverBuilder: (context, innerBoxIsScrolled) {
          return [
            SliverAppBar(
              title: Text('Nested Scroll'),
              expandedHeight: 200,
            ),
          ];
        },
        body: ListView.builder(
          itemCount: 20,
          itemBuilder: (context, index) => ListTile(title: Text('Item $index')),
        ),
      )
    `,
  },
  {
    id: 136,
    question: "What is CustomScrollView?",
    answer: "CustomScrollView creates custom scroll effects with slivers.",
    example:
      "Use CustomScrollView to combine different scrollable widgets, like a list with a header.",
    realTimeExample:
      "CustomScrollView is like a custom playlist. You can mix and match different songs (slivers) to create a unique listening experience (scroll effect).",
    realTimeExample2:
      "Think of CustomScrollView as a collage. It lets you arrange different pieces (slivers) in a scrollable canvas (view).",
    syntax: "CustomScrollView(slivers: [...])",
    codeExample: `
      CustomScrollView(
        slivers: [
          SliverAppBar(title: Text('Custom Scroll')),
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
    id: 137,
    question: "What is SliverList?",
    answer: "SliverList displays a list of widgets in a CustomScrollView.",
    example:
      "Use SliverList to create scrollable lists within a CustomScrollView.",
    realTimeExample:
      "SliverList is like a chapter in a book. It’s part of the larger story (CustomScrollView) and contains a list of paragraphs (widgets).",
    realTimeExample2:
      "Think of SliverList as a train carriage. It’s one part of the train (CustomScrollView) and carries a list of passengers (widgets).",
    syntax: "SliverList(delegate: SliverChildBuilderDelegate(...))",
    codeExample: `
      SliverList(
        delegate: SliverChildBuilderDelegate(
          (context, index) => ListTile(title: Text('Item $index')),
          childCount: 20,
        ),
      )
    `,
  },
  {
    id: 138,
    question: "What is SliverGrid?",
    answer: "SliverGrid displays a grid of widgets in a CustomScrollView.",
    example:
      "Use SliverGrid to create scrollable grids within a CustomScrollView.",
    realTimeExample:
      "SliverGrid is like a grid of photos on a wall. It organizes your widgets (photos) in rows and columns within the larger space (CustomScrollView).",
    realTimeExample2:
      "Think of SliverGrid as a chessboard. It arranges your widgets (pieces) in a grid pattern within the game (CustomScrollView).",
    syntax:
      "SliverGrid(delegate: SliverChildBuilderDelegate(...), gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(crossAxisCount: 2))",
    codeExample: `
      SliverGrid(
        delegate: SliverChildBuilderDelegate(
          (context, index) => Container(color: Colors.blue),
          childCount: 20,
        ),
        gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(crossAxisCount: 2),
      )
    `,
  },
  {
    id: 139,
    question: "What is SliverAppBar?",
    answer: "SliverAppBar creates an app bar that can scroll with the content.",
    example:
      "Use SliverAppBar to create collapsible or flexible app bars in a CustomScrollView.",
    realTimeExample:
      "SliverAppBar is like a retractable awning. It expands or collapses (scrolls) as you move under it (content).",
    realTimeExample2:
      "Think of SliverAppBar as a telescope. It zooms in or out (expands/collapses) as you scroll through the stars (content).",
    syntax: "SliverAppBar(title: Text('Title'), expandedHeight: 200)",
    codeExample: `
      SliverAppBar(
        title: Text('Sliver App Bar'),
        expandedHeight: 200,
        flexibleSpace: FlexibleSpaceBar(background: Image.network('https://picsum.photos/200/300')),
      )
    `,
  },
  {
    id: 140,
    question: "What is SliverToBoxAdapter?",
    answer:
      "SliverToBoxAdapter adapts a box widget for use in a CustomScrollView.",
    example:
      "Use SliverToBoxAdapter to include non-sliver widgets, like a Container or Text, in a CustomScrollView.",
    realTimeExample:
      "SliverToBoxAdapter is like an adapter plug. It lets you use a box widget (foreign plug) in a CustomScrollView (foreign outlet).",
    realTimeExample2:
      "Think of SliverToBoxAdapter as a translator. It allows box widgets (one language) to communicate with CustomScrollView (another language).",
    syntax: "SliverToBoxAdapter(child: MyWidget())",
    codeExample: `
      SliverToBoxAdapter(
        child: Container(height: 100, color: Colors.red),
      )
    `,
  },
  {
    id: 141,
    question: "What is SliverPadding?",
    answer: "SliverPadding adds padding around a sliver.",
    example:
      "Use SliverPadding to add space around slivers in a CustomScrollView.",
    realTimeExample:
      "SliverPadding is like a picture mat. It adds space (padding) around your sliver (picture) for a better fit.",
    realTimeExample2:
      "Think of SliverPadding as a cushion. It provides extra space (padding) around your sliver (widget) for comfort.",
    syntax: "SliverPadding(padding: EdgeInsets.all(10), sliver: MySliver())",
    codeExample: `
      SliverPadding(
        padding: EdgeInsets.all(20),
        sliver: SliverList(
          delegate: SliverChildBuilderDelegate(
            (context, index) => ListTile(title: Text('Item $index')),
            childCount: 20,
          ),
        ),
      )
    `,
  },
  {
    id: 142,
    question: "What is SliverFillRemaining?",
    answer:
      "SliverFillRemaining fills the remaining space in a CustomScrollView.",
    example:
      "Use SliverFillRemaining to fill any leftover space with a sliver, like a list or grid.",
    realTimeExample:
      "SliverFillRemaining is like a stretchy band. It expands to fill any remaining space in the CustomScrollView (container).",
    realTimeExample2:
      "Think of SliverFillRemaining as a sponge. It soaks up (fills) all the extra space in the CustomScrollView (container).",
    syntax: "SliverFillRemaining(child: MyWidget())",
    codeExample: `
      SliverFillRemaining(
        child: SliverList(
          delegate: SliverChildBuilderDelegate(
            (context, index) => ListTile(title: Text('Item $index')),
            childCount: 20,
          ),
        ),
      )
    `,
  },
  {
    id: 143,
    question: "What is PageView?",
    answer: "PageView displays a scrollable list of pages.",
    example:
      "Use PageView to create swipeable pages, like in a photo gallery or onboarding screens.",
    realTimeExample:
      "PageView is like a flipbook. You swipe (scroll) through the pages (widgets) to see the story (content).",
    realTimeExample2:
      "Think of PageView as a carousel. It lets you swipe (scroll) through different slides (pages) one at a time.",
    syntax: "PageView(children: [...])",
    codeExample: `
      PageView(
        children: [
          Container(color: Colors.red),
          Container(color: Colors.green),
          Container(color: Colors.blue),
        ],
      )
    `,
  },
  {
    id: 144,
    question: "What is TabBarView?",
    answer: "TabBarView displays content for each tab.",
    example: "Use TabBarView to show different pages for each tab in a TabBar.",
    realTimeExample:
      "TabBarView is like a filing cabinet. Each tab (drawer) opens to reveal different documents (content).",
    realTimeExample2:
      "Think of TabBarView as a notebook with tabs. Each tab (section) contains different notes (content).",
    syntax: "TabBarView(children: [...])",
    codeExample: `
      TabBarView(
        children: [
          Center(child: Text('Tab 1 Content')),
          Center(child: Text('Tab 2 Content')),
        ],
      )
    `,
  },
  {
    id: 145,
    question: "What is CarouselSlider?",
    answer: "CarouselSlider is a package for creating image carousels.",
    example:
      "Use CarouselSlider to create auto-scrolling or swipeable image galleries.",
    realTimeExample:
      "CarouselSlider is like a merry-go-round. It rotates through images (horses) in a circular motion (carousel).",
    realTimeExample2:
      "Think of CarouselSlider as a slideshow. It automatically or manually cycles through slides (images).",
    syntax: "CarouselSlider(items: [...])",
    codeExample: `
      CarouselSlider(
        items: [
          Image.network('https://picsum.photos/200/300'),
          Image.network('https://picsum.photos/200/301'),
        ],
        options: CarouselOptions(autoPlay: true),
      )
    `,
  },
  {
    id: 146,
    question: "What is RefreshIndicator?",
    answer: "RefreshIndicator shows a refresh indicator when pulled down.",
    example:
      "Use RefreshIndicator to implement pull-to-refresh functionality in a ListView.",
    realTimeExample:
      "RefreshIndicator is like a pull-cord light. You pull it down (refresh) to turn on the light (update content).",
    realTimeExample2:
      "Think of RefreshIndicator as a faucet. You pull the handle (indicator) to refresh the water (content).",
    syntax: "RefreshIndicator(onRefresh: () async {}, child: ListView(...))",
    codeExample: `
      RefreshIndicator(
        onRefresh: () async {
          await Future.delayed(Duration(seconds: 1));
        },
        child: ListView.builder(
          itemCount: 20,
          itemBuilder: (context, index) => ListTile(title: Text('Item $index')),
        ),
      )
    `,
  },
  {
    id: 147,
    question: "What is Dismissible?",
    answer: "Dismissible allows swiping to dismiss items.",
    example:
      "Use Dismissible to create swipe-to-delete functionality in lists.",
    realTimeExample:
      "Dismissible is like a trash can. You swipe an item (paper) to dismiss (throw away) it.",
    realTimeExample2:
      "Think of Dismissible as a magic trick. You swipe (wave your wand) to make an item (object) disappear.",
    syntax:
      "Dismissible(key: Key('item'), onDismissed: (direction) {}, child: MyWidget())",
    codeExample: `
      Dismissible(
        key: Key('item_$index'),
        onDismissed: (direction) {
          // Remove item
        },
        child: ListTile(title: Text('Item $index')),
      )
    `,
  },
  {
    id: 148,
    question: "What is Draggable?",
    answer: "Draggable makes a widget draggable.",
    example: "Use Draggable to create drag-and-drop interfaces.",
    realTimeExample:
      "Draggable is like a magnet. You can drag it (widget) and drop it anywhere.",
    realTimeExample2:
      "Think of Draggable as a puzzle piece. You can pick it up (drag) and place it (drop) where it fits.",
    syntax:
      "Draggable(child: MyWidget(), feedback: MyWidget(), onDraggableCanceled: (velocity, offset) {})",
    codeExample: `
      Draggable(
        child: Container(width: 100, height: 100, color: Colors.red),
        feedback: Container(width: 80, height: 80, color: Colors.red.withOpacity(0.5)),
        onDraggableCanceled: (velocity, offset) {},
      )
    `,
  },
  {
    id: 149,
    question: "What is DragTarget?",
    answer: "DragTarget accepts draggable widgets.",
    example: "Use DragTarget to create drop zones for draggable widgets.",
    realTimeExample:
      "DragTarget is like a mailbox. It accepts (receives) draggable items (letters) dropped into it.",
    realTimeExample2:
      "Think of DragTarget as a basket. It catches (accepts) draggable items (balls) thrown into it.",
    syntax:
      "DragTarget(onAccept: (data) {}, builder: (context, candidateData, rejectedData) { ... })",
    codeExample: `
      DragTarget(
        onAccept: (data) {
          print('Item dropped: $data');
        },
        builder: (context, candidateData, rejectedData) {
          return Container(width: 200, height: 200, color: Colors.blue);
        },
      )
    `,
  },
  {
    id: 150,
    question: "What is LongPressDraggable?",
    answer: "LongPressDraggable starts dragging on long press.",
    example:
      "Use LongPressDraggable to require a long press before dragging a widget.",
    realTimeExample:
      "LongPressDraggable is like a safety lock. You need to press and hold (long press) before you can drag (unlock) the widget.",
    realTimeExample2:
      "Think of LongPressDraggable as a ripe fruit. You need to squeeze (long press) it gently before you can pick (drag) it.",
    syntax:
      "LongPressDraggable(child: MyWidget(), feedback: MyWidget(), onDraggableCanceled: (velocity, offset) {})",
    codeExample: `
      LongPressDraggable(
        child: Container(width: 100, height: 100, color: Colors.green),
        feedback: Container(width: 80, height: 80, color: Colors.green.withOpacity(0.5)),
        onDraggableCanceled: (velocity, offset) {},
      )
    `,
  },
  {
    id: 151,
    question: "What is ReorderableListView?",
    answer: "ReorderableListView allows reordering items by dragging.",
    example: "Use ReorderableListView to let users rearrange items in a list.",
    realTimeExample:
      "ReorderableListView is like a playlist. You can drag songs (items) to reorder them.",
    realTimeExample2:
      "Think of ReorderableListView as a deck of cards. You can shuffle (reorder) the cards (items) as you like.",
    syntax:
      "ReorderableListView(onReorder: (oldIndex, newIndex) {}, children: [...])",
    codeExample: `
      ReorderableListView(
        onReorder: (oldIndex, newIndex) {
          setState(() {
            // Reorder items
          });
        },
        children: [
          ListTile(key: Key('item_0'), title: Text('Item 0')),
          ListTile(key: Key('item_1'), title: Text('Item 1')),
        ],
      )
    `,
  },
  {
    id: 152,
    question: "What is DataTable?",
    answer: "DataTable displays data in a tabular format.",
    example:
      "Use DataTable to show structured data, like in a spreadsheet or database view.",
    realTimeExample:
      "DataTable is like an Excel sheet. It organizes data (numbers, text) into rows and columns (table).",
    realTimeExample2:
      "Think of DataTable as a menu. It lists items (data) in a structured format (table) for easy reading.",
    syntax: "DataTable(columns: [...], rows: [...])",
    codeExample: `
      DataTable(
        columns: [
          DataColumn(label: Text('Name')),
          DataColumn(label: Text('Age')),
        ],
        rows: [
          DataRow(cells: [DataCell(Text('John')), DataCell(Text('30'))]),
          DataRow(cells: [DataCell(Text('Jane')), DataCell(Text('25'))]),
        ],
      )
    `,
  },
  {
    id: 153,
    question: "What is PaginatedDataTable?",
    answer: "PaginatedDataTable displays data with pagination.",
    example:
      "Use PaginatedDataTable to show large datasets in pages, like in a database admin panel.",
    realTimeExample:
      "PaginatedDataTable is like a book. It divides data (content) into pages for easier reading (navigation).",
    realTimeExample2:
      "Think of PaginatedDataTable as a photo album. It organizes photos (data) into pages for easy browsing.",
    syntax:
      "PaginatedDataTable(header: Text('Header'), columns: [...], source: MyDataSource())",
    codeExample: `
      PaginatedDataTable(
        header: Text('Users'),
        columns: [
          DataColumn(label: Text('Name')),
          DataColumn(label: Text('Age')),
        ],
        source: MyDataSource(),
      )
    `,
  },
  {
    id: 154,
    question: "What is Stepper?",
    answer: "Stepper displays a sequence of steps.",
    example:
      "Use Stepper to guide users through multi-step processes, like a checkout flow.",
    realTimeExample:
      "Stepper is like a recipe. It breaks down a process (checkout) into clear steps (instructions).",
    realTimeExample2:
      "Think of Stepper as a staircase. It guides users (steps) through a process (floor by floor).",
    syntax: "Stepper(steps: [...])",
    codeExample: `
      Stepper(
        steps: [
          Step(title: Text('Step 1'), content: Text('Content for Step 1')),
          Step(title: Text('Step 2'), content: Text('Content for Step 2')),
        ],
      )
    `,
  },
  {
    id: 155,
    question: "What is ExpansionPanel?",
    answer: "ExpansionPanel creates expandable panels.",
    example:
      "Use ExpansionPanel to hide or show additional content, like in a FAQ section.",
    realTimeExample:
      "ExpansionPanel is like an accordion. It expands to reveal content (notes) and collapses to save space.",
    realTimeExample2:
      "Think of ExpansionPanel as a foldable map. It expands to show details (content) and folds up for easy carrying (space-saving).",
    syntax:
      "ExpansionPanel(headerBuilder: (context, isExpanded) { ... }, body: MyWidget(), isExpanded: true)",
    codeExample: `
      ExpansionPanelList(
        children: [
          ExpansionPanel(
            headerBuilder: (context, isExpanded) => ListTile(title: Text('Panel 1')),
            body: ListTile(title: Text('Content for Panel 1')),
            isExpanded: true,
          ),
        ],
      )
    `,
  },
  {
    id: 156,
    question: "What is ExpansionTile?",
    answer: "ExpansionTile creates expandable tiles.",
    example:
      "Use ExpansionTile to create collapsible sections in a list, like in a settings menu.",
    realTimeExample:
      "ExpansionTile is like a foldable chair. It expands to provide a seat (content) and folds up to save space.",
    realTimeExample2:
      "Think of ExpansionTile as a collapsible umbrella. It opens to cover content (rain) and closes when not needed.",
    syntax: "ExpansionTile(title: Text('Title'), children: [...])",
    codeExample: `
      ExpansionTile(
        title: Text('Tile 1'),
        children: [
          ListTile(title: Text('Content for Tile 1')),
        ],
      )
    `,
  },
  {
    id: 157,
    question: "What is Tooltip?",
    answer: "Tooltip shows a tooltip on long press.",
    example:
      "Use Tooltip to provide additional information when users long-press a widget.",
    realTimeExample:
      "Tooltip is like a sticky note. It pops up (shows) to give you extra information (note) when you press (long press).",
    realTimeExample2:
      "Think of Tooltip as a tour guide. It provides helpful hints (tooltips) when you linger (long press) on a point of interest (widget).",
    syntax: "Tooltip(message: 'This is a tooltip', child: MyWidget())",
    codeExample: `
      Tooltip(
        message: 'This is a tooltip',
        child: IconButton(icon: Icon(Icons.info), onPressed: () {}),
      )
    `,
  },
  {
    id: 158,
    question: "What is PopupMenuButton?",
    answer: "PopupMenuButton shows a popup menu.",
    example:
      "Use PopupMenuButton to provide a menu of options when a user taps a button.",
    realTimeExample:
      "PopupMenuButton is like a restaurant menu. It pops up to show a list of options (dishes) when you tap (open) it.",
    realTimeExample2:
      "Think of PopupMenuButton as a toolbox. It opens to reveal a set of tools (options) when you need them.",
    syntax: "PopupMenuButton(itemBuilder: (context) => [...])",
    codeExample: `
      PopupMenuButton(
        itemBuilder: (context) => [
          PopupMenuItem(child: Text('Option 1')),
          PopupMenuItem(child: Text('Option 2')),
        ],
      )
    `,
  },
  {
    id: 159,
    question: "What is DropdownButton?",
    answer: "DropdownButton shows a dropdown list.",
    example:
      "Use DropdownButton to let users select an option from a list, like a country or category.",
    realTimeExample:
      "DropdownButton is like a vending machine. It drops down (shows) a list of options (snacks) for you to choose from.",
    realTimeExample2:
      "Think of DropdownButton as a dropdown menu in a restaurant. It lists all the dishes (options) you can order.",
    syntax: "DropdownButton(items: [...], onChanged: (value) {})",
    codeExample: `
      DropdownButton<String>(
        items: [
          DropdownMenuItem(child: Text('Option 1'), value: '1'),
          DropdownMenuItem(child: Text('Option 2'), value: '2'),
        ],
        onChanged: (value) {
          print('Selected: $value');
        },
      )
    `,
  },
  {
    id: 160,
    question: "What is Checkbox?",
    answer: "Checkbox allows selecting true/false values.",
    example:
      "Use Checkbox for binary choices, like agreeing to terms or toggling settings.",
    realTimeExample:
      "Checkbox is like a light switch. It toggles between on (true) and off (false).",
    realTimeExample2:
      "Think of Checkbox as a ballot box. You mark it (check) to make your choice (true/false).",
    syntax: "Checkbox(value: isChecked, onChanged: (value) {})",
    codeExample: `
      bool isChecked = false;
      Checkbox(
        value: isChecked,
        onChanged: (value) {
          setState(() => isChecked = value!);
        },
      )
    `,
  },
  {
    id: 161,
    question: "What is Radio?",
    answer: "Radio allows selecting one option from a group.",
    example:
      "Use Radio for mutually exclusive choices, like selecting a gender or payment method.",
    realTimeExample:
      "Radio is like a multiple-choice question. You can select only one option (answer) from the group.",
    realTimeExample2:
      "Think of Radio as a dial on a radio. You can tune to only one station (option) at a time.",
    syntax:
      "Radio(value: 'option1', groupValue: selectedOption, onChanged: (value) {})",
    codeExample: `
      String selectedOption = 'option1';
      Radio(
        value: 'option1',
        groupValue: selectedOption,
        onChanged: (value) {
          setState(() => selectedOption = value!);
        },
      )
    `,
  },
  {
    id: 162,
    question: "What is Switch?",
    answer: "Switch toggles between on/off states.",
    example:
      "Use Switch for binary settings, like enabling dark mode or notifications.",
    realTimeExample:
      "Switch is like a light switch. It toggles between on (true) and off (false).",
    realTimeExample2:
      "Think of Switch as a railway switch. It changes the track (state) to direct the train (app behavior).",
    syntax: "Switch(value: isOn, onChanged: (value) {})",
    codeExample: `
      bool isOn = false;
      Switch(
        value: isOn,
        onChanged: (value) {
          setState(() => isOn = value);
        },
      )
    `,
  },
  {
    id: 163,
    question: "What is Slider?",
    answer: "Slider selects a value from a range.",
    example:
      "Use Slider for settings that require a range of values, like volume or brightness.",
    realTimeExample:
      "Slider is like a volume knob. You slide it to increase or decrease the value (volume).",
    realTimeExample2:
      "Think of Slider as a dimmer switch. It lets you adjust the intensity (value) of your widget (light).",
    syntax: "Slider(value: currentValue, onChanged: (value) {})",
    codeExample: `
      double currentValue = 50;
      Slider(
        value: currentValue,
        min: 0,
        max: 100,
        onChanged: (value) {
          setState(() => currentValue = value);
        },
      )
    `,
  },
];

// Make data available globally
window.beginner = beginner;
