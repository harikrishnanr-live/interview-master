// Flutter Advanced Level Q&A Data
let advanced = [
  {
    id: 1,
    question: "What is the BLoC pattern in Flutter and when should you use it?",
    answer:
      "BLoC (Business Logic Component) is a **state management pattern** that separates UI from business logic using **streams**. It’s ideal for complex apps with multiple data sources or real-time updates (e.g., chat apps, live dashboards).",
    example:
      "Example: A weather app where temperature updates in real-time. BLoC manages the data flow from API to UI without direct coupling.",
    realTimeExample:
      "Think of BLoC as a **traffic controller**: It directs data (cars) from sources (roads) to the UI (destination) without congestion.",
    realTimeExample2:
      "Like a **customer service desk**: The UI (customer) requests data, and BLoC (desk) fetches and delivers it from the backend (warehouse).",
    syntax: "Stream<State>, Sink<Event>, BlocProvider, BlocBuilder",
    codeExample: `
      class CounterBloc extends Bloc<CounterEvent, int> {
        CounterBloc() : super(0) {
          on<Increment>((event, emit) => emit(state + 1));
        }
      }
    `,
  },
  {
    id: 2,
    question: "How does Provider simplify state management in Flutter?",
    answer:
      "Provider is a **wrapper around InheritedWidget**, offering a simple way to **share and update state** across the widget tree. It’s lightweight and ideal for small to medium apps.",
    example:
      "Example: A theme switcher where the theme state is shared across all screens without prop drilling.",
    realTimeExample:
      "Provider is like a **central power grid**: Widgets (houses) plug into it to access state (electricity) without direct wiring.",
    realTimeExample2:
      "Think of it as a **library**: Widgets (readers) borrow state (books) from Provider (librarian) and return updated copies.",
    syntax: "ChangeNotifierProvider, Consumer, Provider.of<T>(context)",
    codeExample: `
      ChangeNotifierProvider(
        create: (context) => ThemeModel(),
        child: Consumer<ThemeModel>(
          builder: (context, theme, child) => Text(
            'Current theme: \${theme.isDark ? "Dark" : "Light"}',
          ),
        ),
      )
    `,
  },
  {
    id: 3,
    question: "How do color shades like `Colors.blueGrey[50]` work in Flutter?",
    answer:
      "Flutter’s `Colors` class provides **material design color swatches** with shades from 50 (lightest) to 900 (darkest). `Colors.blueGrey` defaults to shade 500 (medium).",
    example:
      "Example: `Colors.blueGrey[50]` is almost white, while `Colors.blueGrey[900]` is nearly black.",
    realTimeExample:
      "Imagine color shades as **paint buckets**: 50 is watered-down paint, 900 is undiluted.",
    realTimeExample2:
      "Like a **volume knob**: 50 is whisper-quiet, 900 is maximum volume.",
    syntax: "Colors.blueGrey[50], Colors.blueGrey[400], Colors.blueGrey[900]",
    codeExample: `
      Container(
        color: Colors.blueGrey[100], // Light background
        child: Text(
          'Hello',
          style: TextStyle(color: Colors.blueGrey[800]), // Dark text
        ),
      )
    `,
  },
  {
    id: 4,
    question: "What is the role of Scaffold in Flutter’s widget hierarchy?",
    answer:
      "Scaffold is a **high-level widget** that provides a **framework for Material Design layouts**, including app bars, drawers, and bottom navigation. It’s the ‘skeleton’ of your screen.",
    example:
      "Example: A home screen with an app bar, floating action button, and bottom navigation bar.",
    realTimeExample:
      "Scaffold is like a **building’s blueprint**: It defines where walls (app bars), doors (buttons), and rooms (content) go.",
    realTimeExample2:
      "Think of it as a **car chassis**: It holds all components (engine, seats) in place.",
    syntax:
      "Scaffold(appBar: AppBar(), body: Widget(), floatingActionButton: FAB())",
    codeExample: `
      Scaffold(
        appBar: AppBar(title: Text('Home')),
        body: Center(child: Text('Welcome!')),
        floatingActionButton: FloatingActionButton(
          onPressed: () {},
          child: Icon(Icons.add),
        ),
      )
    `,
  },
  {
    id: 5,
    question: "Why doesn’t Dart have a `!==` operator like JavaScript?",
    answer:
      "Dart’s `==` and `!=` operators are **strict by default** (no type coercion). JavaScript’s `===` and `!==` exist to enforce strict comparison, but Dart doesn’t need them.",
    example:
      "Example: In Dart, `'5' != 5` is `true` because types differ. In JavaScript, `'5' != 5` is `false` (type coercion).",
    realTimeExample:
      "Dart’s comparison is like a **bouncer**: Only identical IDs (types + values) get in. JavaScript’s `==` lets in imposters (type coercion).",
    realTimeExample2:
      "Think of `==` in Dart as a **fingerprint scan**: It matches both value and type precisely.",
    syntax: "== (equality), != (inequality)",
    codeExample: `
      void main() {
        print('5' == 5); // false (Dart)
        print('5' != 5); // true (Dart)
      }
    `,
  },
  {
    id: 6,
    question: "What’s the difference between `null` and empty (`''`) in Dart?",
    answer:
      "`null` means **no value assigned**, while `''` is an **empty string** (a value exists but is empty). Checking both ensures a field isn’t ignored or blank.",
    example:
      "Example: `if (value == null || value.isEmpty)` catches both uninitialized and blank inputs.",
    realTimeExample:
      "`null` is an **empty mailbox**, while `''` is a mailbox with a **blank letter** inside.",
    realTimeExample2:
      "Like a **parking spot**: `null` is vacant, `''` has an invisible car.",
    syntax: "value == null, value.isEmpty",
    codeExample: `
      String? input;
      if (input == null || input.isEmpty) {
        print('Please enter a value!');
      }
    `,
  },
  {
    id: 7,
    question: "What is RenderObject and how does it work in Flutter?",
    answer:
      "RenderObject is the **base class for Flutter’s render tree**, handling **layout, painting, and hit testing**. It’s the bridge between widgets (UI) and the actual rendering on screen.",
    example:
      "Example: Custom shapes or animations that require direct control over rendering.",
    realTimeExample:
      "RenderObject is like a **puppeteer**: It pulls strings (layout/paint logic) to make widgets (puppets) move.",
    realTimeExample2:
      "Think of it as a **movie director**: It coordinates where and how actors (widgets) appear on screen.",
    syntax: "RenderBox, RenderSliver, performLayout(), paint()",
    codeExample: `
      class CustomRenderBox extends RenderBox {
        @override
        void performLayout() {
          size = constraints.constrain(Size(100, 100));
        }
        @override
        void paint(PaintingContext context, Offset offset) {
          context.canvas.drawRect(offset & size, Paint()..color = Colors.blue);
        }
      }
    `,
  },
  {
    id: 8,
    question: "How do you create a custom RenderObject in Flutter?",
    answer:
      "To create a custom RenderObject: **1) Extend `RenderObject`**, **2) Override `performLayout()` and `paint()`**, and **3) Handle sizing and painting logic**. Use `RenderBox` for box-like objects.",
    example: "Example: A custom progress bar with unique animations.",
    realTimeExample:
      "Like **building a custom Lego piece**: You define its shape (layout) and color (paint).",
    realTimeExample2:
      "Think of it as **designing a stamp**: You carve the shape (layout) and ink it (paint).",
    syntax: "RenderObject, performLayout(), paint(), hitTest()",
    codeExample: `
      class CircleRenderBox extends RenderBox {
        @override
        void performLayout() {
          size = constraints.constrain(Size(50, 50));
        }
        @override
        void paint(PaintingContext context, Offset offset) {
          context.canvas.drawCircle(offset + size.center(Offset.zero), 25, Paint()..color = Colors.red);
        }
      }
    `,
  },
  {
    id: 9,
    question: "What are Shaders in Flutter and how are they used?",
    answer:
      "Shaders are **GPU programs** (written in GLSL) that apply **visual effects** like gradients, blurs, or distortions. Use `ShaderMask` or `CustomPaint` to apply them.",
    example: "Example: A live video filter or a gradient overlay on an image.",
    realTimeExample:
      "Shaders are like **Instagram filters**: They transform raw pixels (photos) into styled visuals.",
    realTimeExample2:
      "Think of them as **stage lighting**: They change how the audience (users) perceives the scene (UI).",
    syntax: "FragmentShader, ShaderMask, CustomPaint",
    codeExample: `
      final shader = FragmentShader.fromAsset('shaders/gradient.frag');
      ShaderMask(
        shaderCallback: (bounds) => shader,
        child: Container(width: 100, height: 100),
      )
    `,
  },
  {
    id: 10,
    question: "How do you implement custom shaders in Flutter?",
    answer:
      "To implement custom shaders: **1) Write GLSL code**, **2) Load it with `FragmentProgram`**, and **3) Apply it to widgets using `ShaderMask` or `CustomPaint`.",
    example: "Example: A ripple effect shader for a button press animation.",
    realTimeExample:
      "Like **writing a recipe (GLSL)** for a chef (GPU) to cook (render) a dish (effect).",
    realTimeExample2:
      "Think of it as **programming a 3D printer**: You define the design (GLSL), and it creates the object (effect).",
    syntax: "FragmentProgram, FragmentShader, shaderCallback",
    codeExample: `
      final program = await FragmentProgram.fromAsset('shaders/ripple.frag');
      CustomPaint(
        painter: ShaderPainter(program),
        size: Size(200, 200),
      )
    `,
  },
  {
    id: 11,
    question: "What is the Flutter engine and what does it do?",
    answer:
      "The Flutter engine is the **runtime** that executes Dart code, handles **rendering (Skia)**, and provides **platform integration** (e.g., camera, sensors). It’s the core of Flutter apps.",
    example:
      "Example: The engine compiles Dart to native code and renders UI at 60/120 FPS.",
    realTimeExample:
      "The engine is like a **car engine**: It powers everything (Dart code) and connects to the road (platform).",
    realTimeExample2:
      "Think of it as a **translator**: It converts Dart (language) into actions the device (platform) understands.",
    syntax: "FlutterEngine, Skia, Dart VM",
    codeExample: "N/A",
  },
  {
    id: 12,
    question: "How does Flutter’s rendering pipeline work?",
    answer:
      "Flutter’s rendering pipeline: **1) Build phase** (widget tree), **2) Layout phase** (RenderObject tree), **3) Paint phase** (Skia), **4) Composite phase** (GPU). This ensures smooth UI updates.",
    example:
      "Example: Animating a list item triggers layout/paint only for that item, not the whole screen.",
    realTimeExample:
      "Like an **assembly line**: Each phase (station) adds a layer (layout/paint) to the final product (UI).",
    realTimeExample2:
      "Think of it as a **movie production**: Script (build) → Set design (layout) → Filming (paint) → Editing (composite).",
    syntax: "build(), layout(), paint(), composite",
    codeExample: "N/A",
  },
  {
    id: 13,
    question: "What is PlatformView and why is it used?",
    answer:
      "PlatformView **embeds native platform views** (e.g., Android `View`, iOS `UIView`) into Flutter’s widget tree. Use it for features not yet supported in Flutter (e.g., Maps, WebView).",
    example: "Example: Embedding Google Maps or a native video player.",
    realTimeExample:
      "PlatformView is like a **window into another world**: Flutter (your room) looks into native (outside).",
    realTimeExample2:
      "Think of it as a **TV in a painting**: The painting (Flutter) frames the TV (native view).",
    syntax: "AndroidView, UiKitView, TextureLayer",
    codeExample: `
      AndroidView(
        viewType: 'maps',
        creationParams: {'lat': 37.427, 'lng': -122.084},
        creationParamsCodec: StandardMessageCodec(),
      )
    `,
  },
  {
    id: 14,
    question: "How do you implement PlatformView in Flutter?",
    answer:
      "To implement PlatformView: **1) Register the view type**, **2) Create platform-specific implementations**, and **3) Use `AndroidView`/`UiKitView` in Flutter.",
    example: "Example: Embedding a native calendar view.",
    realTimeExample:
      "Like **hiring a specialist**: Flutter (manager) delegates tasks (views) to native experts (Android/iOS).",
    realTimeExample2:
      "Think of it as **building a bridge**: Flutter (one side) connects to native (other side).",
    syntax: "PlatformViewRegistry, AndroidView, UiKitView",
    codeExample: `
      // Android
      registry.registerViewFactory('calendar', (context) => CalendarView(context));
      // Flutter
      AndroidView(viewType: 'calendar')
    `,
  },
  {
    id: 15,
    question: "How does Flutter manage memory?",
    answer:
      "Flutter uses **Dart’s garbage collector** (generational GC) and techniques like **object pooling** and **weak references** to manage memory. Avoid leaks by disposing controllers and streams.",
    example:
      "Example: Using `dispose()` in `State` to clean up `AnimationController`.",
    realTimeExample:
      "Memory management is like **housekeeping**: You toss trash (unreachable objects) and reuse containers (object pooling).",
    realTimeExample2:
      "Think of it as a **library**: Return books (objects) when done to avoid clutter (leaks).",
    syntax: "dispose(), WeakReference, finalize",
    codeExample: `
      @override
      void dispose() {
        _controller.dispose(); // Clean up AnimationController
        super.dispose();
      }
    `,
  },
  {
    id: 16,
    question: "How do you profile a Flutter app’s performance?",
    answer:
      "Use **DevTools** for timeline, memory, and CPU analysis. Run `flutter build --profile` for optimized builds. Focus on **jank (UI stutter)** and **memory leaks**.",
    example: "Example: Identifying slow widget builds in the timeline view.",
    realTimeExample:
      "Profiling is like a **doctor’s checkup**: It finds bottlenecks (symptoms) and prescribes fixes (optimizations).",
    realTimeExample2:
      "Think of it as a **car tune-up**: You test speed (FPS) and fuel efficiency (memory).",
    syntax: "DevTools, Timeline, Memory tab, --profile",
    codeExample: `
      // Run in terminal:
      flutter run --profile
      // Open DevTools:
      dart devtools
    `,
  },
  {
    id: 17,
    question: "What is Observatory in Dart/Flutter?",
    answer:
      "Observatory is a **debugging and profiling tool** for Dart apps. It provides insights into **memory usage, CPU, and object allocation** during development.",
    example: "Example: Tracking memory leaks in a long-running app.",
    realTimeExample:
      "Observatory is like a **detective’s magnifying glass**: It reveals hidden clues (memory issues).",
    realTimeExample2:
      "Think of it as a **fitness tracker**: It monitors your app’s health (performance).",
    syntax: "Observatory, VM Service, --observe",
    codeExample: `
      // Start with observatory:
      flutter run --observe
      // Open http://localhost:8100
    `,
  },
  {
    id: 18,
    question: "How do you create and publish a custom Flutter package?",
    answer:
      "To create a package: **1) Run `flutter create --template=package`**, **2) Implement functionality**, **3) Document APIs**, and **4) Publish to pub.dev**.",
    example: "Example: A package for custom animations or utilities.",
    realTimeExample:
      "Like **writing a cookbook**: You share recipes (code) for others to use in their kitchens (apps).",
    realTimeExample2:
      "Think of it as **building a Lego set**: Others can snap your pieces (package) into their creations (apps).",
    syntax: "flutter create --template=package, pubspec.yaml, pub publish",
    codeExample: `
      // pubspec.yaml
      name: my_package
      version: 1.0.0
      # Publish with:
      # pub publish
    `,
  },
  {
    id: 19,
    question: "What is Flutter for Web and how does it work?",
    answer:
      "Flutter for Web **compiles Dart to JavaScript**, allowing Flutter apps to run in browsers. It uses **HTML renderer** (for compatibility) or **CanvasKit** (for high fidelity).",
    example:
      "Example: A Flutter app deployed to a website with interactive elements.",
    realTimeExample:
      "Flutter Web is like a **chameleon**: It adapts (compiles) to blend into the web environment.",
    realTimeExample2:
      "Think of it as a **universal remote**: One codebase (Dart) controls multiple platforms (mobile/web).",
    syntax: "flutter build web, CanvasKit, HTML renderer",
    codeExample: `
      // Build for web:
      flutter build web
      // Deploy to Firebase Hosting:
      firebase deploy
    `,
  },
  {
    id: 20,
    question: "How do you center a widget in Flutter?",
    answer:
      "Use the `Center` widget to align its child both **horizontally and vertically**. For custom alignment, use `Align` or `Padding`.",
    example: "Example: Centering a loading spinner or title text.",
    realTimeExample:
      "Center is like a **bullseye**: It places your widget (arrow) in the exact middle (target).",
    realTimeExample2:
      "Think of it as a **balancing scale**: It ensures your widget is perfectly centered (balanced).",
    syntax: "Center(child: Widget()), Align(alignment: Alignment.center)",
    codeExample: `
      Center(
        child: CircularProgressIndicator(),
      )
    `,
  },
  {
    id: 21,
    question: "What is Flutter for Desktop and what are its use cases?",
    answer:
      "Flutter for Desktop enables building **native apps** for Windows, macOS, and Linux from a single codebase. Use cases: **productivity tools, utilities, and cross-platform apps**.",
    example: "Example: A note-taking app that works on mobile and desktop.",
    realTimeExample:
      "Flutter Desktop is like a **Swiss Army knife**: One tool (codebase) for multiple jobs (platforms).",
    realTimeExample2:
      "Think of it as a **universal adapter**: Plug your app into any desktop OS.",
    syntax: "flutter create --platforms windows,macos,linux",
    codeExample: `
      // Build for desktop:
      flutter build windows
      flutter build macos
    `,
  },
  {
    id: 22,
    question: "How do you handle platform-specific code in Flutter?",
    answer:
      "Use **conditional imports** (`import 'package:flutter/foundation.dart'`), **`Platform.isX` checks**, or **platform channels** for native code. Organize code with `if (kIsWeb) { ... }`.",
    example: "Example: Loading different APIs for Android/iOS/web.",
    realTimeExample:
      "Platform checks are like a **traffic cop**: They direct code (traffic) based on platform (road rules).",
    realTimeExample2:
      "Think of it as a **multilingual translator**: It speaks the right language (code) for each platform.",
    syntax: "kIsWeb, Platform.isAndroid, Platform.isIOS",
    codeExample: `
      if (kIsWeb) {
        // Web-specific code
      } else if (Platform.isAndroid) {
        // Android-specific code
      }
    `,
  },
  {
    id: 23,
    question: "What is embedded Flutter and when should you use it?",
    answer:
      "Embedded Flutter integrates the **Flutter engine into existing native apps** (Android/iOS). Use it to **add Flutter features** (e.g., animations, UI) to legacy apps.",
    example: "Example: Adding a Flutter dashboard to a native e-commerce app.",
    realTimeExample:
      "Embedded Flutter is like a **modular kitchen**: You add Flutter (a new appliance) to your existing setup (native app).",
    realTimeExample2:
      "Think of it as a **plugin**: It extends your app’s capabilities without a full rewrite.",
    syntax: "FlutterFragment (Android), FlutterViewController (iOS)",
    codeExample: `
      // Android
      FlutterFragment flutterFragment = FlutterFragment.createDefault();
      // iOS
      FlutterViewController *flutterVC = [[FlutterViewController alloc] init];
    `,
  },
  {
    id: 24,
    question: "How do you implement custom gestures in Flutter?",
    answer:
      "Extend `GestureRecognizer` or use `RawGestureDetector` to **detect complex gestures** (e.g., multi-finger swipes). Override methods like `handleEvent` and `acceptGesture`.",
    example: "Example: A custom 3-finger swipe to trigger a secret menu.",
    realTimeExample:
      "Custom gestures are like **secret handshakes**: Only specific actions (gestures) unlock features.",
    realTimeExample2:
      "Think of it as **teaching a robot**: You define how it should react to touch (gestures).",
    syntax: "GestureRecognizer, RawGestureDetector, onTap, onPanUpdate",
    codeExample: `
      class TripleTapRecognizer extends TapGestureRecognizer {
        @override
        void handleTapDown(TapDownDetails details) {
          if (tapCount == 3) {
            // Trigger action
          }
        }
      }
    `,
  },
  {
    id: 25,
    question: "What are physics-based animations in Flutter?",
    answer:
      "Physics-based animations use **real-world physics** (e.g., springs, gravity) for natural motion. Flutter provides `SpringSimulation`, `GravitySimulation`, and `FrictionSimulation` for this.",
    example: "Example: A bouncing ball or a pull-to-refresh effect.",
    realTimeExample:
      "Physics animations are like a **trampoline**: The harder you pull (gesture), the higher the bounce (animation).",
    realTimeExample2:
      "Think of it as a **pendulum**: It swings naturally based on initial force (user input).",
    syntax: "SpringSimulation, AnimationController, CurvedAnimation",
    codeExample: `
      final simulation = SpringSimulation(
        SpringDescription(mass: 1, stiffness: 100, damping: 10),
        0,  // start
        300, // end
        50,  // velocity
      );
      _controller.animateWith(simulation);
    `,
  },
  {
    id: 26,
    question: "How do you implement spring animations in Flutter?",
    answer:
      "Use `SpringSimulation` with `AnimationController` to create **bounce or spring effects**. Adjust `stiffness`, `damping`, and `mass` for different behaviors.",
    example: "Example: A button that bounces when pressed.",
    realTimeExample:
      "Spring animations are like a **pogo stick**: They compress (press) and release (bounce) with energy.",
    realTimeExample2:
      "Think of it as a **mattress**: The heavier the object (mass), the more it sinks (stiffness/damping).",
    syntax: "SpringSimulation, SpringDescription, animateWith()",
    codeExample: `
      final spring = SpringSimulation(
        SpringDescription(stiffness: 200, damping: 20, mass: 1),
        0,  // start
        100, // end
        10,  // velocity
      );
      _controller.animateWith(spring);
    `,
  },
  {
    id: 27,
    question: "What is CustomClipper in Flutter?",
    answer:
      "CustomClipper defines **custom clipping paths** for widgets using `ClipPath`. Override `getClip()` to return a `Path` object for shapes like polygons or waves.",
    example: "Example: A star-shaped button or a wavy header.",
    realTimeExample:
      "CustomClipper is like **scissors**: It cuts (clips) widgets into custom shapes (paths).",
    realTimeExample2:
      "Think of it as a **cookie cutter**: It stamps out shapes from dough (widgets).",
    syntax: "CustomClipper<Path>, getClip(), ClipPath",
    codeExample: `
      class WaveClipper extends CustomClipper<Path> {
        @override
        Path getClip(Size size) {
          final path = Path();
          path.lineTo(0, size.height * 0.7);
          // Add wave curves
          return path;
        }
        @override
        bool shouldReclip(CustomClipper<Path> oldClipper) => false;
      }
    `,
  },
  {
    id: 28,
    question: "How do you create complex clipping paths in Flutter?",
    answer:
      "Override `getClip()` in `CustomClipper` and use `Path` methods like `lineTo`, `quadraticBezierTo`, or `arcTo` to define **custom shapes**. Combine paths for intricate designs.",
    example: "Example: A hexagonal profile picture or a custom dialog shape.",
    realTimeExample:
      "Complex clipping is like **origami**: You fold (combine paths) to create intricate shapes.",
    realTimeExample2:
      "Think of it as **sculpting**: You carve away (clip) to reveal the final form.",
    syntax: "Path(), lineTo(), quadraticBezierTo(), close()",
    codeExample: `
      @override
      Path getClip(Size size) {
        final path = Path();
        path.moveTo(0, 0);
        path.lineTo(size.width * 0.7, 0);
        path.quadraticBezierTo(...); // Custom curves
        return path;
      }
    `,
  },
  {
    id: 29,
    question: "What is advanced theming in Flutter?",
    answer:
      "Advanced theming involves **custom `ThemeExtension`s**, **dynamic themes** (light/dark mode), and **theme inheritance**. Use `ThemeData` and `copyWith` for granular control.",
    example:
      "Example: A theme that changes colors based on user preferences or time of day.",
    realTimeExample:
      "Advanced theming is like a **wardrobe**: You mix and match (extend themes) for different occasions (user preferences).",
    realTimeExample2:
      "Think of it as **interior design**: You choose colors (palette) and styles (fonts) to set the mood (UI).",
    syntax: "ThemeData, ThemeExtension, copyWith, Theme.of(context)",
    codeExample: `
      class CustomColors extends ThemeExtension<CustomColors> {
        final Color? success;
        CustomColors({this.success});
        @override
        CustomColors copyWith({Color? success}) => CustomColors(success: success ?? this.success);
      }
    `,
  },
  {
    id: 30,
    question: "How do you implement dynamic themes in Flutter?",
    answer:
      "Use `ThemeProvider` (e.g., `provider` package) or `Bloc` to **manage theme state**. Rebuild the app with `ThemeData` changes using `MaterialApp.theme`.",
    example: "Example: A settings screen to toggle between light/dark mode.",
    realTimeExample:
      "Dynamic themes are like a **mood ring**: They change (theme) based on user interaction (preferences).",
    realTimeExample2:
      "Think of it as a **chameleon**: It adapts (theme) to its environment (user choice).",
    syntax: "ThemeData, BlocProvider, ChangeNotifierProvider",
    codeExample: `
      BlocBuilder<ThemeBloc, ThemeData>(
        builder: (context, theme) => MaterialApp(theme: theme),
      )
    `,
  },
  {
    id: 31,
    question: "What is advanced internationalization (i18n) in Flutter?",
    answer:
      "Advanced i18n includes **pluralization**, **gender-specific translations**, and **context-aware messages**. Use the `intl` package with `.arb` files for localization.",
    example:
      "Example: ‘You have 1 message’ vs. ‘You have 5 messages’ (pluralization).",
    realTimeExample:
      "Advanced i18n is like a **UN translator**: It handles nuances (plurals/gender) for global audiences.",
    realTimeExample2:
      "Think of it as a **menu translation**: It adapts dishes (messages) for local tastes (languages).",
    syntax: "intl, .arb files, Intl.message(), plural/gender",
    codeExample: `
      // en.arb
      "messages": "{count, plural, =1{You have 1 message} other{You have {count} messages}}"
    `,
  },
  {
    id: 32,
    question: "How do you implement accessibility in Flutter?",
    answer:
      "Use `Semantics` widgets to **label UI elements** for screen readers. Test with **TalkBack (Android)** or **VoiceOver (iOS)**. Follow WCAG guidelines for contrast and navigation.",
    example: "Example: Adding labels to icons for visually impaired users.",
    realTimeExample:
      "Accessibility is like a **ramp**: It ensures everyone (users) can access the building (app).",
    realTimeExample2:
      "Think of it as **Braille**: It translates visuals (UI) into touchable text (semantics).",
    syntax: "Semantics, ExcludeSemantics, MergeSemantics, label",
    codeExample: `
      Semantics(
        label: 'Settings button',
        child: IconButton(icon: Icon(Icons.settings), onPressed: () {}),
      )
    `,
  },
  {
    id: 33,
    question: "What are the key aspects of security in Flutter?",
    answer:
      "Flutter security involves **secure storage** (e.g., `flutter_secure_storage`), **HTTPS**, **certificate pinning**, and **avoiding hardcoded secrets**. Use platform channels cautiously.",
    example:
      "Example: Storing API keys in secure storage instead of shared preferences.",
    realTimeExample:
      "Security is like a **vault**: It protects valuables (data) from thieves (hackers).",
    realTimeExample2:
      "Think of it as a **firewall**: It blocks unauthorized access (attacks) to your app (network).",
    syntax: "flutter_secure_storage, HttpClient, certificate pinning",
    codeExample: `
      final storage = FlutterSecureStorage();
      await storage.write(key: 'token', value: 'abc123');
    `,
  },
  {
    id: 34,
    question: "How do you implement certificate pinning in Flutter?",
    answer:
      "Use the `http` package with a **custom `HttpClient`** that pins certificates. Compare server certificates against embedded hashes to prevent MITM attacks.",
    example:
      "Example: Pinning your backend’s SSL certificate in a banking app.",
    realTimeExample:
      "Certificate pinning is like a **sealed envelope**: Only the intended recipient (app) can open it (verify the certificate).",
    realTimeExample2:
      "Think of it as a **handshake**: The app (you) recognizes the server (friend) by its grip (certificate).",
    syntax: "HttpClient, SecurityContext, X509Certificate",
    codeExample: `
      final client = HttpClient()
        ..badCertificateCallback = (cert, host, port) => cert.pem == expectedPem;
    `,
  },
  {
    id: 35,
    question: "What is advanced testing in Flutter?",
    answer:
      "Advanced testing includes **integration tests** (full app flows), **golden tests** (UI snapshots), and **automated UI tests** (using `flutter_driver`). Mock dependencies for reliability.",
    example: "Example: Testing a login flow from UI to API response.",
    realTimeExample:
      "Advanced testing is like a **flight simulator**: It replicates real conditions (user flows) to find issues (bugs).",
    realTimeExample2:
      "Think of it as a **dress rehearsal**: It ensures the app (play) performs flawlessly (no bugs).",
    syntax: "flutter_test, testWidgets, flutter_driver, matchesGoldenFile",
    codeExample: `
      testWidgets('Login flow', (tester) async {
        await tester.pumpWidget(MyApp());
        await tester.enterText(find.byType(TextField), 'user');
        await tester.tap(find.text('Login'));
        expect(find.text('Welcome'), findsOneWidget);
      });
    `,
  },
  {
    id: 36,
    question: "How do you write golden tests in Flutter?",
    answer:
      "Golden tests compare **UI snapshots** against reference images using `matchesGoldenFile`. Use `flutter_test` and `golden_toolkit` for pixel-perfect validation.",
    example:
      "Example: Ensuring a custom widget renders correctly across devices.",
    realTimeExample:
      "Golden tests are like a **photo ID check**: They verify the UI (photo) matches the expected appearance (ID).",
    realTimeExample2:
      "Think of it as a **blueprint comparison**: It ensures the built UI (house) matches the design (blueprint).",
    syntax: "matchesGoldenFile, GoldenToolkit, testGoldens",
    codeExample: `
      await tester.pumpWidget(MyWidget());
      await expectLater(
        find.byType(MyWidget),
        matchesGoldenFile('my_widget.png'),
      );
    `,
  },
  {
    id: 37,
    question: "What is CI/CD for Flutter and how do you set it up?",
    answer:
      "CI/CD automates **building, testing, and deploying** Flutter apps. Use **GitHub Actions**, **Codemagic**, or **Bitrise** for workflows like `flutter test` and `flutter build apk`.",
    example:
      "Example: Auto-deploying to Firebase App Distribution on every Git push.",
    realTimeExample:
      "CI/CD is like a **conveyor belt**: It automates (builds/tests/deploys) your app (product) from code (raw materials) to release (finished goods).",
    realTimeExample2:
      "Think of it as a **robot chef**: It follows your recipe (workflow) to cook (build) and serve (deploy) the app (meal).",
    syntax: "GitHub Actions, Codemagic, Bitrise, flutter build --release",
    codeExample: `
      # GitHub Actions example
      - run: flutter test
      - run: flutter build apk --release
    `,
  },
  {
    id: 38,
    question: "How do you implement code generation in Flutter?",
    answer:
      "Use `build_runner` with annotations like `@JsonSerializable` to **auto-generate boilerplate code**. Define models, run `flutter pub run build_runner build`, and use generated files.",
    example: "Example: Generating JSON serialization code for API models.",
    realTimeExample:
      "Code generation is like a **3D printer**: You design the model (annotations), and it prints (generates) the code.",
    realTimeExample2:
      "Think of it as a **clone machine**: It replicates (generates) code based on a template (annotations).",
    syntax: "build_runner, @JsonSerializable, part 'file.g.dart'",
    codeExample: `
      @JsonSerializable()
      class User {
        final String name;
        User({required this.name});
        factory User.fromJson(Map<String, dynamic> json) => _$UserFromJson(json);
      }
    `,
  },
  {
    id: 39,
    question: "What is source_gen in Flutter?",
    answer:
      "source_gen is a **code generation library** for Dart. It generates code at **build time** using annotations (e.g., `@JsonSerializable`). Part of the `build_runner` ecosystem.",
    example: "Example: Generating serialization code for API responses.",
    realTimeExample:
      "source_gen is like a **scribe**: It transcribes (generates) code based on your notes (annotations).",
    realTimeExample2:
      "Think of it as a **photocopier**: It duplicates (generates) code from a master (template).",
    syntax: "source_gen, build.yaml, @annotations",
    codeExample: `
      // build.yaml
      targets:
        $default:
          builders:
            json_serializable: ^6.0.0
    `,
  },
  {
    id: 40,
    question: "How do you implement custom builders in Flutter?",
    answer:
      "Extend `Builder` from the `build` package to **generate custom code**. Define input/output types and override `build` to emit Dart code.",
    example: "Example: A builder that generates route navigation code.",
    realTimeExample:
      "Custom builders are like **custom tailors**: They craft (generate) code to fit your exact needs (specs).",
    realTimeExample2:
      "Think of it as a **custom car factory**: You design the process (builder), and it assembles (generates) the code (car).",
    syntax: "Builder, buildStep, AssetId, LibraryBuilder",
    codeExample: `
      class RouteBuilder implements Builder {
        @override
        Future<void> build(BuildStep buildStep) async {
          final input = buildStep.inputId;
          final output = input.changeExtension('.routes.dart');
          // Generate code
        }
      }
    `,
  },
  {
    id: 41,
    question: "What is Flutter plugin development?",
    answer:
      "Flutter plugins provide **platform-specific functionality** (e.g., camera, sensors) via Dart APIs. They consist of **Dart code** (API) and **native implementations** (Android/iOS).",
    example: "Example: A plugin to access device battery level.",
    realTimeExample:
      "Plugin development is like **building a bridge**: Dart (one side) connects to native (other side) for data (traffic).",
    realTimeExample2:
      "Think of it as a **universal remote**: One interface (Dart) controls multiple devices (platforms).",
    syntax: "MethodChannel, EventChannel, Pigeon, PlatformInterface",
    codeExample: `
      const channel = MethodChannel('battery');
      final int level = await channel.invokeMethod('getBatteryLevel');
    `,
  },
  {
    id: 42,
    question: "How do you create platform channels in Flutter?",
    answer:
      "Define a `MethodChannel` in Dart, implement handlers in **platform-specific code** (Kotlin/Swift), and communicate asynchronously. Use `Pigeon` for type-safe channels.",
    example:
      "Example: Sending a message from Dart to native and receiving a response.",
    realTimeExample:
      "Platform channels are like **walkie-talkies**: Dart (sender) talks to native (receiver) and waits for a reply.",
    realTimeExample2:
      "Think of it as a **telephone**: You dial (invokeMethod) and wait for an answer (result).",
    syntax: "MethodChannel, invokeMethod, setMethodCallHandler",
    codeExample: `
      // Dart
      const channel = MethodChannel('demo');
      final String result = await channel.invokeMethod('greet', {'name': 'Alice'});
      // Android
      channel.setMethodCallHandler { call, result ->
        if (call.method == "greet") result.success("Hello, \${call.argument(
          "name"
        )}")
      }
    `,
  },
  {
    id: 43,
    question: "What is EventChannel in Flutter?",
    answer:
      "EventChannel enables **streaming data** from native to Flutter (e.g., sensor updates). Use `EventChannel` in Dart and `EventSink` to send continuous events.",
    example: "Example: Streaming accelerometer data from native to Flutter.",
    realTimeExample:
      "EventChannel is like a **live news feed**: Native (reporter) sends updates (events) to Flutter (audience).",
    realTimeExample2:
      "Think of it as a **radio station**: Native (broadcaster) streams data (music) to Flutter (listeners).",
    syntax: "EventChannel, Stream, EventSink, receiveBroadcastStream",
    codeExample: `
      // Dart
      const channel = EventChannel('sensors');
      final stream = channel.receiveBroadcastStream();
      // Android
      channel.setStreamHandler(object : EventChannel.StreamHandler {
        override fun onListen(args: Any?, sink: EventSink) {
          sensorManager.registerListener({ sink.success(it) })
        }
      })
    `,
  },
  {
    id: 44,
    question: "How do you handle platform exceptions in Flutter?",
    answer:
      "Catch `PlatformException` in Dart and handle errors gracefully. Use `try/catch` blocks and check `exception.code` for specific errors (e.g., `PERMISSION_DENIED`).",
    example: "Example: Handling a camera permission denial.",
    realTimeExample:
      "Platform exceptions are like **traffic tickets**: You handle (catch) them to avoid penalties (crashes).",
    realTimeExample2:
      "Think of it as a **safety net**: It catches (handles) errors before they fall (crash the app).",
    syntax: "PlatformException, try/catch, exception.code",
    codeExample: `
      try {
        await channel.invokeMethod('openCamera');
      } on PlatformException catch (e) {
        if (e.code == 'PERMISSION_DENIED') {
          print('Please enable camera permissions');
        }
      }
    `,
  },
  {
    id: 45,
    question: "What is Flutter isolate communication?",
    answer:
      "Isolates are **Dart’s concurrency model**. They communicate via `SendPort`/`ReceivePort` to avoid blocking the UI thread. Use `compute` for simple tasks or custom ports for complex data.",
    example: "Example: Processing a large file in the background.",
    realTimeExample:
      "Isolate communication is like **passing notes**: Isolates (students) exchange messages (notes) without talking (shared memory).",
    realTimeExample2:
      "Think of it as a **postal service**: Isolates (offices) send letters (data) via mailboxes (ports).",
    syntax: "Isolate, SendPort, ReceivePort, compute",
    codeExample: `
      final result = await compute(heavyTask, inputData);
      // Or with ports:
      final port = ReceivePort();
      await Isolate.spawn(_isolateEntry, port.sendPort);
    `,
  },
  {
    id: 46,
    question: "How do you implement background processing in Flutter?",
    answer:
      "Use **isolates** for Dart computation, **workmanager** for scheduled tasks, or **platform-specific background services** (e.g., Android `ForegroundService`).",
    example: "Example: Syncing data periodically even when the app is closed.",
    realTimeExample:
      "Background processing is like a **butler**: It works (syncs data) quietly in the background (app closed).",
    realTimeExample2:
      "Think of it as a **heartbeat**: It keeps the app (body) alive (updated) without conscious effort (user interaction).",
    syntax: "Isolate, workmanager, android_alarm_manager, BackgroundFetch",
    codeExample: `
      // Using workmanager
      Workmanager().registerPeriodicTask('sync', 'dataSync', frequency: Duration(hours: 1));
    `,
  },
  {
    id: 47,
    question: "What is Flutter’s rendering pipeline?",
    answer:
      "The rendering pipeline: **1) Build** (widget tree), **2) Layout** (RenderObject tree), **3) Paint** (Skia), **4) Composite** (GPU). Optimize by minimizing layout/paint passes.",
    example: "Example: Using `RepaintBoundary` to isolate animations.",
    realTimeExample:
      "The pipeline is like a **factory line**: Each station (phase) adds a layer (layout/paint) to the final product (UI).",
    realTimeExample2:
      "Think of it as a **movie studio**: Script (build) → Set design (layout) → Filming (paint) → Editing (composite).",
    syntax: "build(), layout(), paint(), composite",
    codeExample: "N/A",
  },
  {
    id: 48,
    question: "How do you optimize layout performance in Flutter?",
    answer:
      "Optimize layouts by: **1) Using `const` constructors**, **2) Avoiding deep widget trees**, **3) Using `RepaintBoundary`**, and **4) Minimizing `setState` calls.",
    example:
      "Example: Wrapping a complex widget in `RepaintBoundary` to limit repaints.",
    realTimeExample:
      "Layout optimization is like **decluttering**: You remove (simplify) unnecessary items (widgets) to speed up (performance) the process.",
    realTimeExample2:
      "Think of it as a **race car**: You strip (optimize) weight (widgets) to go faster (60 FPS).",
    syntax: "const, RepaintBoundary, LayoutBuilder, addRepaintBoundary",
    codeExample: `
      RepaintBoundary(
        child: HeavyWidget(), // Isolates repaints
      )
    `,
  },
  {
    id: 49,
    question: "What is RepaintBoundary in Flutter?",
    answer:
      "RepaintBoundary **isolates repaints** to a subtree, preventing unnecessary repaints of parent/child widgets. Use it for complex or animated widgets.",
    example:
      "Example: A list with animated items where only the animated item repaints.",
    realTimeExample:
      "RepaintBoundary is like a **quarantine zone**: It contains (isolates) repaints to prevent spread (performance hits).",
    realTimeExample2:
      "Think of it as a **sandbox**: Kids (widgets) play (animate) without messing up the whole yard (UI).",
    syntax: "RepaintBoundary, addRepaintBoundary",
    codeExample: `
      ListView.builder(
        itemBuilder: (context, index) => RepaintBoundary(
          child: AnimatedItem(index: index),
        ),
      )
    `,
  },
  {
    id: 50,
    question: "How do you implement custom scroll physics in Flutter?",
    answer:
      "Extend `ScrollPhysics` and override methods like `applyPhysicsToUserOffset` to **customize scroll behavior** (e.g., snap, bounce). Use `BouncingScrollPhysics` as a reference.",
    example: "Example: A scroll view that snaps to items like a carousel.",
    realTimeExample:
      "Custom scroll physics are like **rollercoaster tracks**: You design the path (physics) for the ride (scroll).",
    realTimeExample2:
      "Think of it as a **trampoline**: You adjust tension (physics) to change the bounce (scroll).",
    syntax: "ScrollPhysics, applyPhysicsToUserOffset, BouncingScrollPhysics",
    codeExample: `
      class SnapScrollPhysics extends ScrollPhysics {
        @override
        SnapScrollPhysics applyTo(ScrollPhysics? ancestor) => SnapScrollPhysics();
        @override
        double applyPhysicsToUserOffset(ScrollMetrics position, double offset) {
          return offset; // Custom logic
        }
      }
    `,
  },
  {
    id: 51,
    question: "What is Flutter’s widget lifecycle?",
    answer:
      "Widget lifecycle: **1) Create** (`Constructor`), **2) Build** (`build`), **3) Update** (`didUpdateWidget`), **4) Dispose** (`dispose`). Stateful widgets add `initState` and `dispose`.",
    example:
      "Example: Initializing a controller in `initState` and cleaning it up in `dispose`.",
    realTimeExample:
      "The lifecycle is like a **plant**: Seed (create) → Grow (build/update) → Wilt (dispose).",
    realTimeExample2:
      "Think of it as a **human life**: Birth (create) → Living (build/update) → Death (dispose).",
    syntax: "initState, build, didUpdateWidget, dispose",
    codeExample: `
      @override
      void initState() {
        super.initState();
        _controller = AnimationController(vsync: this);
      }
      @override
      void dispose() {
        _controller.dispose();
        super.dispose();
      }
    `,
  },
  {
    id: 52,
    question: "How do you handle widget disposal in Flutter?",
    answer:
      "Override `dispose()` in `State` to **clean up resources** like streams, controllers, or timers. Always call `super.dispose()`.",
    example: "Example: Canceling a `StreamSubscription` to avoid memory leaks.",
    realTimeExample:
      "Disposal is like **turning off lights**: You save energy (memory) and prevent fires (leaks).",
    realTimeExample2:
      "Think of it as **closing a book**: You mark your place (clean up) before putting it away (dispose).",
    syntax:
      "dispose(), StreamSubscription.cancel(), AnimationController.dispose()",
    codeExample: `
      final subscription = stream.listen((data) {});
      @override
      void dispose() {
        subscription.cancel();
        super.dispose();
      }
    `,
  },
  {
    id: 53,
    question: "What is the role of Keys in advanced Flutter scenarios?",
    answer:
      "Keys **preserve widget identity** across rebuilds, crucial for **animated lists** and **state preservation**. Use `ValueKey`, `ObjectKey`, or `GlobalKey` for control.",
    example: "Example: Maintaining scroll position in a dynamic list.",
    realTimeExample:
      "Keys are like **name tags**: They help Flutter (teacher) recognize widgets (students) even if they move (rebuild).",
    realTimeExample2:
      "Think of them as **bookmarks**: They save your place (state) in a list (widget tree).",
    syntax: "Key, ValueKey, ObjectKey, GlobalKey",
    codeExample: `
      ListView(
        children: [
          for (var item in items)
            ListTile(key: ValueKey(item.id), title: Text(item.name)),
        ],
      )
    `,
  },
  {
    id: 54,
    question: "How do you implement custom Keys in Flutter?",
    answer:
      "Extend `Key` or use factory constructors like `ValueKey('id')` or `ObjectKey(object)`. Override `operator ==` and `hashCode` for custom logic.",
    example:
      "Example: A key that combines multiple values for unique identification.",
    realTimeExample:
      "Custom keys are like **custom barcodes**: They uniquely identify (widgets) items (products) in a store (widget tree).",
    realTimeExample2:
      "Think of them as **DNA**: They distinguish (widgets) even if they look identical (same type).",
    syntax: "Key, ValueKey, ObjectKey, operator ==",
    codeExample: `
      class CompositeKey extends Key {
        final String type;
        final int id;
        CompositeKey(this.type, this.id) : super('\${type}_$id');
      }
    `,
  },
  {
    id: 55,
    question: "What are Flutter’s build modes and how do they differ?",
    answer:
      "Flutter has **three build modes**: **Debug** (hot reload, assertions), **Profile** (optimized for performance testing), and **Release** (fully optimized for production).",
    example: "Example: Running `flutter run --profile` to test performance.",
    realTimeExample:
      "Build modes are like **clothing**: Debug (sweatpants), Profile (athleisure), Release (suit).",
    realTimeExample2:
      "Think of them as **gears in a car**: Debug (1st gear), Profile (3rd gear), Release (5th gear).",
    syntax: "--debug, --profile, --release, assert()",
    codeExample: `
      // Debug-only code
      assert(user != null, 'User must not be null');
      // Build commands:
      flutter run --release
    `,
  },
  {
    id: 56,
    question: "How do you analyze app size in Flutter?",
    answer:
      "Run `flutter build apk --analyze-size` to generate a **size breakdown**. Use `--split-debug-info` to reduce release size. Optimize with tree shaking and asset compression.",
    example: "Example: Identifying large assets or unused libraries.",
    realTimeExample:
      "App size analysis is like a **diet plan**: You identify (analyze) and cut (optimize) excess weight (code/assets).",
    realTimeExample2:
      "Think of it as a **luggage check**: You remove (optimize) unnecessary items (dependencies) to meet the weight limit (size).",
    syntax: "--analyze-size, --split-debug-info, tree shaking",
    codeExample: `
      flutter build apk --analyze-size --split-debug-info=./symbols
    `,
  },
  {
    id: 57,
    question: "What is tree shaking in Flutter?",
    answer:
      "Tree shaking is a **compiler optimization** that removes **unused code** during release builds, reducing app size. Dart’s tree shaking is automatic but can be tuned.",
    example: "Example: Excluding unused libraries with `--exclude-packages`.",
    realTimeExample:
      "Tree shaking is like **pruning a tree**: You remove dead branches (unused code) to help it grow (performance).",
    realTimeExample2:
      "Think of it as **spring cleaning**: You toss (remove) unused items (code) to declutter (optimize).",
    syntax: "--exclude-packages, --tree-shake-icons, release mode",
    codeExample: "N/A",
  },
  {
    id: 58,
    question: "How do you implement lazy loading of assets in Flutter?",
    answer:
      "Use `AssetBundle.load()` to **load assets on demand**. Cache results and dispose of unused assets to save memory.",
    example:
      "Example: Loading high-res images only when a user scrolls to them.",
    realTimeExample:
      "Lazy loading is like **on-demand streaming**: You load (assets) only what’s being watched (viewed).",
    realTimeExample2:
      "Think of it as a **buffet**: You serve (load) dishes (assets) only when requested (needed).",
    syntax: "AssetBundle, load(), cache, dispose",
    codeExample: `
      final image = await rootBundle.load('assets/large_image.png');
      // Use image.data
    `,
  },
  {
    id: 59,
    question: "What is Flutter’s internationalization (i18n) system?",
    answer:
      "Flutter’s i18n uses **ARB files** (for translations) and the `intl` package (for code generation). Supports plurals, genders, and RTL languages.",
    example: "Example: Translating ‘Hello’ to ‘Hola’ based on locale.",
    realTimeExample:
      "i18n is like a **UN translator**: It converts messages (UI text) into the user’s language (locale).",
    realTimeExample2:
      "Think of it as a **menu translation**: It adapts dishes (text) for local tastes (languages).",
    syntax: ".arb files, intl, Intl.message(), Localizations",
    codeExample: `
      // app_en.arb
      "hello": "Hello, {name}!"
      // Dart
      String get hello => Intl.message('Hello, {name}!', name: 'hello');
    `,
  },
  {
    id: 60,
    question: "How do you handle RTL (right-to-left) layouts in Flutter?",
    answer:
      "Wrap widgets in `Directionality(textDirection: TextDirection.rtl)` or use `MaterialApp` with `rtl: true`. Test with RTL languages like Arabic or Hebrew.",
    example: "Example: Mirroring a layout for Arabic users.",
    realTimeExample:
      "RTL support is like a **mirror**: It flips (layout) the image (UI) for RTL languages.",
    realTimeExample2:
      "Think of it as **driving on the left**: The UI (road) adapts to the locale’s (country’s) rules.",
    syntax: "Directionality, TextDirection.rtl, MaterialApp.rtl",
    codeExample: `
      Directionality(
        textDirection: TextDirection.rtl,
        child: Text('مرحبا'), // Arabic for 'Hello'
      )
    `,
  },
  {
    id: 61,
    question: "What is Flutter’s accessibility tree?",
    answer:
      "The accessibility tree is a **semantic representation** of the UI for screen readers. Flutter builds it from `Semantics` widgets and platform APIs (e.g., TalkBack, VoiceOver).",
    example: "Example: Labeling a button ‘Submit’ for screen readers.",
    realTimeExample:
      "The accessibility tree is like a **map for the blind**: It describes (semantics) the UI (terrain) in a navigable way.",
    realTimeExample2:
      "Think of it as **subtitles**: It translates visuals (UI) into audio (semantics).",
    syntax: "Semantics, MergeSemantics, ExcludeSemantics, label",
    codeExample: `
      Semantics(
        label: 'Submit form',
        child: ElevatedButton(onPressed: () {}, child: Text('Submit')),
      )
    `,
  },
  {
    id: 62,
    question: "How do you implement custom semantics in Flutter?",
    answer:
      "Use `Semantics` with properties like `label`, `hint`, and `value` to **enhance accessibility**. Combine with `MergeSemantics` or `BlockSemantics` for complex widgets.",
    example: "Example: Adding a custom hint for a slider (‘Adjust volume’).",
    realTimeExample:
      "Custom semantics are like **audio descriptions**: They explain (hints) what’s happening (UI) for visually impaired users.",
    realTimeExample2:
      "Think of it as **sign language**: It conveys (semantics) meaning (UI) without visuals.",
    syntax: "Semantics, label, hint, value, enabled",
    codeExample: `
      Semantics(
        label: 'Volume slider',
        hint: 'Double-tap to adjust',
        child: Slider(value: _volume, onChanged: (v) => setState(() => _volume = v)),
      )
    `,
  },
  {
    id: 63,
    question: "What is Flutter’s security model?",
    answer:
      "Flutter apps run in a **sandboxed environment** with platform-specific security (e.g., Android’s SELinux, iOS’s App Sandbox). Use HTTPS, secure storage, and code obfuscation.",
    example:
      "Example: Storing tokens in `flutter_secure_storage` instead of `shared_preferences`.",
    realTimeExample:
      "Flutter’s security model is like a **fortress**: It protects (sandbox) the app (castle) from attacks (malware).",
    realTimeExample2:
      "Think of it as a **vault**: It safeguards (secure storage) valuables (data) with locks (encryption).",
    syntax: "flutter_secure_storage, HTTPS, obfuscation, integrity checks",
    codeExample: `
      // Avoid:
      SharedPreferences prefs = await SharedPreferences.getInstance();
      prefs.setString('token', apiToken); // Insecure!
      // Use:
      await FlutterSecureStorage().write(key: 'token', value: apiToken);
    `,
  },
  {
    id: 64,
    question: "How do you secure API keys in Flutter?",
    answer:
      "Avoid hardcoding keys. Use **environment variables** (e.g., `--dart-define`), **secure storage**, or a **backend proxy** to fetch keys at runtime.",
    example:
      "Example: Passing API keys via `--dart-define=API_KEY=abc123` during build.",
    realTimeExample:
      "Securing API keys is like **hiding a spare key**: You don’t leave it under the mat (hardcoded) but in a safe place (backend).",
    realTimeExample2:
      "Think of it as a **treasure map**: The key (API key) is hidden (secure storage) and only accessible to those with the map (app).",
    syntax: "--dart-define, flutter_secure_storage, backend proxy",
    codeExample: `
      // In Dart:
      const apiKey = String.fromEnvironment('API_KEY');
      // Build command:
      flutter run --dart-define=API_KEY=abc123
    `,
  },
  {
    id: 65,
    question: "What is Flutter’s testing pyramid?",
    answer:
      "The testing pyramid prioritizes: **Unit tests** (base, fast), **Widget tests** (middle, UI components), **Integration tests** (top, full app flows). Aim for 70% unit, 20% widget, 10% integration.",
    example:
      "Example: Testing a single function (unit), a button (widget), and a login flow (integration).",
    realTimeExample:
      "The testing pyramid is like a **diet**: Unit tests (veggies) are healthy and abundant, integration tests (desserts) are rare but satisfying.",
    realTimeExample2:
      "Think of it as a **house foundation**: Unit tests (base) support widget (walls) and integration (roof) tests.",
    syntax: "test(), testWidgets(), flutter_driver, mockito",
    codeExample: `
      // Unit test
      test('Counter increments', () {
        final counter = Counter();
        counter.increment();
        expect(counter.value, 1);
      });
    `,
  },
  {
    id: 66,
    question: "How do you test platform channels in Flutter?",
    answer:
      "Use `MethodChannel.setMockMethodCallHandler` to **mock native responses** in tests. Verify Dart code handles platform exceptions and data correctly.",
    example:
      "Example: Testing a battery level plugin with mocked native responses.",
    realTimeExample:
      "Testing platform channels is like a **dress rehearsal**: You simulate (mock) the native (actors) responses before the real show (production).",
    realTimeExample2:
      "Think of it as a **flight simulator**: You practice (test) platform interactions (flights) without leaving the ground (native code).",
    syntax: "setMockMethodCallHandler, TestDefaultBinaryMessenger",
    codeExample: `
      setUp(() {
        TestDefaultBinaryMessengerBinding.instance.defaultBinaryMessenger
          .setMockMethodCallHandler(channel, (call) async => 42);
      });
    `,
  },
  {
    id: 67,
    question: "What is Flutter Driver and how is it used?",
    answer:
      "Flutter Driver is a **tool for integration testing**. It drives the app from outside, simulating user interactions and verifying UI states. Use `flutter_driver` package.",
    example:
      "Example: Testing a full login flow from UI to backend validation.",
    realTimeExample:
      "Flutter Driver is like a **remote control**: It operates (tests) the app (TV) from a distance (outside process).",
    realTimeExample2:
      "Think of it as a **puppeteer**: It controls (drives) the app (puppet) to perform actions (tests).",
    syntax: "flutter_driver, SerializableFinder, testDriver",
    codeExample: `
      test('Login flow', () async {
        await driver.tap(find.byValueKey('loginButton'));
        expect(await driver.getText(find.byValueKey('welcome')), 'Welcome!');
      });
    `,
  },
  {
    id: 68,
    question: "How do you implement A/B testing in Flutter?",
    answer:
      "Use **Firebase Remote Config** or a **custom backend** to serve feature flags. Dynamically change UI/behavior based on user groups (e.g., `if (isFeatureEnabled) { ... }`).",
    example: "Example: Testing a new checkout button color for 10% of users.",
    realTimeExample:
      "A/B testing is like a **fashion show**: You showcase (test) different outfits (features) to see what the audience (users) prefers.",
    realTimeExample2:
      "Think of it as a **taste test**: You offer (A/B) two flavors (features) to find the favorite (winner).",
    syntax: "Firebase Remote Config, feature flags, shared_preferences",
    codeExample: `
      final remoteConfig = FirebaseRemoteConfig.instance;
      await remoteConfig.fetchAndActivate();
      final isNewFeatureEnabled = remoteConfig.getBool('new_feature');
    `,
  },
  {
    id: 69,
    question: "What is Flutter’s hot reload mechanism?",
    answer:
      "Hot reload **injects updated code** into the running Dart VM without restarting the app. It preserves app state but doesn’t handle native code changes.",
    example: "Example: Tweaking UI colors or layouts without losing app state.",
    realTimeExample:
      "Hot reload is like a **magic eraser**: It changes (code) the drawing (UI) without starting over (restart).",
    realTimeExample2:
      "Think of it as a **live edit**: It updates (code) the broadcast (app) in real-time.",
    syntax: "flutter run --hot-reload, VM service, state preservation",
    codeExample: `
      // After saving code changes:
      // Press 'r' in the terminal for hot reload.
    `,
  },
  {
    id: 70,
    question: "How do you debug layout issues in Flutter?",
    answer:
      "Use **Debug Paint** (`debugPaintSizeEnabled = true`), **Layout Explorer** in DevTools, and the **widget inspector** to visualize layout bounds and constraints.",
    example: "Example: Identifying why a widget overflows its parent.",
    realTimeExample:
      "Debugging layouts is like an **X-ray**: It reveals (debug paint) hidden issues (overflows) in the UI (body).",
    realTimeExample2:
      "Think of it as a **blueprint check**: You measure (inspector) to ensure everything fits (constraints).",
    syntax: "debugPaintSizeEnabled, Layout Explorer, widget inspector",
    codeExample: `
      void main() {
        debugPaintSizeEnabled = true; // Enable debug paint
        runApp(MyApp());
      }
    `,
  },
  {
    id: 71,
    question: "What is Flutter’s widget inspector?",
    answer:
      "The widget inspector is a **tool in DevTools** that visualizes the widget tree, properties, and rendering. Use it to debug UI issues and understand widget hierarchies.",
    example: "Example: Inspecting why a widget isn’t rendering as expected.",
    realTimeExample:
      "The widget inspector is like a **microscope**: It zooms into (inspects) the UI (specimen) to analyze (debug) its structure.",
    realTimeExample2:
      "Think of it as a **family tree**: It shows (widget tree) how widgets (family members) are related (nested).",
    syntax: "DevTools, widget inspector, select widget mode",
    codeExample: `
      // Open DevTools during app execution:
      dart devtools
      // Click 'Widget Inspector' tab.
    `,
  },
  {
    id: 72,
    question: "How do you profile memory usage in Flutter?",
    answer:
      "Use **DevTools’ Memory tab** to track allocations, detect leaks, and analyze heap snapshots. Monitor **GC activity** and object retention.",
    example: "Example: Finding memory leaks in a long-running app.",
    realTimeExample:
      "Memory profiling is like a **financial audit**: It tracks (allocations) where money (memory) is spent (leaked).",
    realTimeExample2:
      "Think of it as a **garbage collector**: It identifies (leaks) and removes (frees) trash (unused objects).",
    syntax: "DevTools, Memory tab, GC, heap snapshot",
    codeExample: `
      // Open DevTools:
      dart devtools
      // Navigate to 'Memory' tab.
    `,
  },
  {
    id: 73,
    question: "What is Flutter’s garbage collection (GC) mechanism?",
    answer:
      "Dart uses a **generational GC**: New objects go to the **new generation** (scavenged frequently), long-lived objects move to the **old generation** (scavenged rarely).",
    example:
      "Example: Short-lived widgets (new gen) vs. global singletons (old gen).",
    realTimeExample:
      "GC is like a **recycling plant**: It sorts (generations) and processes (scavenges) waste (objects) efficiently.",
    realTimeExample2:
      "Think of it as a **janitor**: It cleans up (collects) unused items (objects) regularly (scavenges).",
    syntax: "new generation, old generation, scavenger, mark-sweep",
    codeExample: "N/A",
  },
  {
    id: 74,
    question: "How do you avoid memory leaks in Flutter?",
    answer:
      "Avoid leaks by: **1) Disposing controllers/streams**, **2) Canceling subscriptions**, **3) Avoiding global variables**, and **4) Using weak references where possible.",
    example: "Example: Disposing an `AnimationController` in `dispose()`.",
    realTimeExample:
      "Avoiding leaks is like **turning off faucets**: You prevent (dispose) water (memory) from dripping (leaking).",
    realTimeExample2:
      "Think of it as **unplugging appliances**: You save (memory) by cutting power (references) when not in use.",
    syntax: "dispose(), cancel(), WeakReference, finalize",
    codeExample: `
      final subscription = stream.listen((data) {});
      @override
      void dispose() {
        subscription.cancel(); // Prevent leak
        super.dispose();
      }
    `,
  },
  {
    id: 75,
    question: "What is Flutter’s compilation process?",
    answer:
      "Flutter compiles Dart to **native ARM/x64 code** (AOT) for mobile/desktop or **JavaScript** (for web). Debug mode uses JIT for hot reload, release mode uses AOT for performance.",
    example:
      "Example: Running `flutter build apk` to compile to native Android code.",
    realTimeExample:
      "Compilation is like **translating a book**: Dart (original) becomes native code (translation) for the target (platform).",
    realTimeExample2:
      "Think of it as a **chef’s recipe**: Dart (ingredients) becomes a dish (native code) for the diner (device).",
    syntax: "AOT, JIT, dart2js, dart2native",
    codeExample: `
      // Build commands:
      flutter build apk --release  // AOT for Android
      flutter build web            // JS for web
    `,
  },
  {
    id: 76,
    question: "How do you implement custom fonts in Flutter?",
    answer:
      "Add font files to `assets/`, declare in `pubspec.yaml`, and use `fontFamily` in `TextStyle`. Support variable fonts and custom weights.",
    example: "Example: Using a custom brand font for app text.",
    realTimeExample:
      "Custom fonts are like **handwriting**: They give your app (letter) a unique style (personality).",
    realTimeExample2:
      "Think of it as a **wardrobe**: You pick (fontFamily) the right outfit (font) for the occasion (UI).",
    syntax: "pubspec.yaml, fontFamily, TextStyle, variable fonts",
    codeExample: `
      // pubspec.yaml
      fonts:
        - family: CustomFont
          fonts:
            - asset: assets/fonts/CustomFont-Regular.ttf
      // Usage
      Text('Hello', style: TextStyle(fontFamily: 'CustomFont'))
    `,
  },
  {
    id: 77,
    question: "What is Flutter’s text rendering system?",
    answer:
      "Flutter uses **Skia** for text rendering, supporting **custom fonts**, **RTL**, and **complex scripts**. Text is rendered as glyphs with precise control over layout and style.",
    example: "Example: Rendering Arabic text with proper RTL support.",
    realTimeExample:
      "Text rendering is like **typesetting**: It arranges (layouts) letters (glyphs) for clear reading (UI).",
    realTimeExample2:
      "Think of it as a **printer**: It takes text (input) and produces (renders) a document (UI).",
    syntax: "Text, RichText, TextSpan, Skia",
    codeExample: `
      Text(
        'مرحبا',
        textDirection: TextDirection.rtl,
        style: TextStyle(fontFamily: 'ArabicFont'),
      )
    `,
  },
  {
    id: 78,
    question: "How do you implement custom text spans in Flutter?",
    answer:
      "Use `TextSpan` with `TextStyle` and `GestureRecognizer` to create **rich text** (e.g., clickable links, mixed styles). Nest spans for complex layouts.",
    example: "Example: A paragraph with bold, italic, and clickable text.",
    realTimeExample:
      "Custom text spans are like **highlighting**: You emphasize (style) parts of the text (content) for clarity (UI).",
    realTimeExample2:
      "Think of it as a **collage**: You combine (nest) different pieces (spans) into one artwork (text).",
    syntax: "TextSpan, TextStyle, recognizer, children",
    codeExample: `
      Text.rich(
        TextSpan(
          children: [
            TextSpan(text: 'Hello ', style: TextStyle(fontWeight: FontWeight.bold)),
            TextSpan(
              text: 'click here',
              style: TextStyle(color: Colors.blue),
              recognizer: TapGestureRecognizer()..onTap = () => print('Tapped!'),
            ),
          ],
        ),
      )
    `,
  },
  {
    id: 79,
    question: "What is Flutter’s gesture system?",
    answer:
      "Flutter’s gesture system uses **pointer events** and **gesture recognizers** (e.g., `TapGestureRecognizer`) to handle touch, mouse, and stylus input. Gestures are routed through the widget tree.",
    example: "Example: Detecting a double-tap on an image to zoom in.",
    realTimeExample:
      "The gesture system is like a **switchboard**: It routes (recognizers) touch signals (events) to the right widget (receiver).",
    realTimeExample2:
      "Think of it as a **piano**: Pressing keys (gestures) produces notes (actions).",
    syntax: "GestureDetector, RawGestureDetector, onTap, onDoubleTap",
    codeExample: `
      GestureDetector(
        onDoubleTap: () => print('Zoom in!'),
        child: Image.network('https://example.com/image.jpg'),
      )
    `,
  },
  {
    id: 80,
    question: "How do you implement multi-touch gestures in Flutter?",
    answer:
      "Use `ScaleGestureRecognizer` (pinch/zoom), `PanGestureRecognizer` (drag), or `MultiTapGestureRecognizer` (multi-finger taps). Combine recognizers for complex interactions.",
    example: "Example: A photo editor with pinch-to-zoom and rotate gestures.",
    realTimeExample:
      "Multi-touch gestures are like **orchestra conducting**: Each finger (instrument) contributes to the action (music).",
    realTimeExample2:
      "Think of it as a **dance**: Partners (fingers) move together (gestures) to create a performance (action).",
    syntax: "ScaleGestureRecognizer, PanGestureRecognizer, onScaleUpdate",
    codeExample: `
      GestureDetector(
        onScaleStart: (details) => print('Scale started'),
        onScaleUpdate: (details) => print('Scale: \${details.scale}'),
        child: Container(width: 200, height: 200, color: Colors.blue),
      )
    `,
  },
  {
    id: 81,
    question: "What is Flutter’s animation system?",
    answer:
      "Flutter’s animation system uses `AnimationController`, `Tween`, and `Curve` to create **smooth transitions**. Animations are driven by the scheduler and rendered at 60/120 FPS.",
    example: "Example: A button that fades in when the app loads.",
    realTimeExample:
      "The animation system is like a **film reel**: It plays (animates) frames (UI) smoothly (60 FPS).",
    realTimeExample2:
      "Think of it as a **puppet show**: The controller (AnimationController) moves the puppet (widget) via strings (tweens).",
    syntax: "AnimationController, Tween, Curve, addListener",
    codeExample: `
      final controller = AnimationController(
        vsync: this,
        duration: Duration(seconds: 1),
      );
      final animation = Tween(begin: 0.0, end: 1.0).animate(controller);
      // Start animation
      controller.forward();
    `,
  },
  {
    id: 82,
    question: "How do you chain animations in Flutter?",
    answer:
      "Chain animations using `AnimationController` with multiple `Tween`s and **staggered timing**. Use `addStatusListener` to trigger sequential animations.",
    example: "Example: A logo that fades in, then slides up, then rotates.",
    realTimeExample:
      "Chaining animations is like a **domino effect**: Each animation (domino) triggers the next (fall).",
    realTimeExample2:
      "Think of it as a **recipe**: Steps (animations) are followed in order (chained) to create the dish (final UI).",
    syntax: "AnimationController, TweenSequence, addStatusListener",
    codeExample: `
      final controller = AnimationController(vsync: this, duration: Duration(seconds: 3));
      final fadeIn = Tween(begin: 0.0, end: 1.0).animate(
        CurvedAnimation(parent: controller, curve: Interval(0.0, 0.33)),
      );
      final slideUp = Tween(begin: Offset(0, 100), end: Offset.zero).animate(
        CurvedAnimation(parent: controller, curve: Interval(0.33, 0.66)),
      );
      controller.forward();
    `,
  },
  {
    id: 83,
    question: "What is Flutter’s layout system?",
    answer:
      "Flutter’s layout system uses **constraints** (min/max width/height) passed down the widget tree. Widgets **negotiate size** with parents and children during the layout phase.",
    example: "Example: A `Container` that expands to fill available space.",
    realTimeExample:
      "The layout system is like a **negotiation**: Widgets (parties) agree on size (terms) based on constraints (rules).",
    realTimeExample2:
      "Think of it as a **puzzle**: Pieces (widgets) fit together (layout) based on their shapes (constraints).",
    syntax: "BoxConstraints, LayoutBuilder, IntrinsicWidth/Height",
    codeExample: `
      LayoutBuilder(
        builder: (context, constraints) => Container(
          width: constraints.maxWidth,
          height: constraints.maxHeight / 2,
        ),
      )
    `,
  },
  {
    id: 84,
    question: "How do you debug layout overflows in Flutter?",
    answer:
      "Use `OverflowBox` to diagnose overflows, `LayoutBuilder` to inspect constraints, and `debugPaintSizeEnabled` to visualize bounds. Fix by adjusting constraints or wrapping in `SingleChildScrollView`.",
    example:
      "Example: Wrapping a large widget in `SingleChildScrollView` to prevent overflow.",
    realTimeExample:
      "Debugging overflows is like **solving a jigsaw puzzle**: You adjust (constraints) pieces (widgets) to fit (layout).",
    realTimeExample2:
      "Think of it as a **parking lot**: You resize (constraints) spots (widgets) to avoid overflow (double parking).",
    syntax:
      "OverflowBox, LayoutBuilder, debugPaintSizeEnabled, SingleChildScrollView",
    codeExample: `
      SingleChildScrollView(
        child: Container(width: 2000, height: 2000), // No overflow
      )
    `,
  },
  {
    id: 85,
    question: "What is Flutter’s painting system?",
    answer:
      "Flutter’s painting system uses **Skia** to render widgets onto a **canvas**. Each `RenderObject` implements `paint()` to draw itself, supporting custom shapes, gradients, and effects.",
    example: "Example: Drawing a custom pie chart with `CustomPaint`.",
    realTimeExample:
      "The painting system is like an **artist’s studio**: It provides tools (Skia) to create (paint) artwork (UI).",
    realTimeExample2:
      "Think of it as a **printer**: It takes digital designs (widgets) and produces (paints) physical copies (UI).",
    syntax: "CustomPaint, Canvas, Paint, Path",
    codeExample: `
      CustomPaint(
        painter: PieChartPainter(),
        size: Size(200, 200),
      )
    `,
  },
  {
    id: 86,
    question: "How do you implement custom painters in Flutter?",
    answer:
      "Extend `CustomPainter` and override `paint()` to draw on a `Canvas`. Use `Path`, `Paint`, and `Offset` to create shapes, gradients, and effects.",
    example: "Example: Drawing a custom progress bar with gradients.",
    realTimeExample:
      "Custom painters are like **graffiti artists**: They use tools (Canvas) to create (paint) unique designs (UI).",
    realTimeExample2:
      "Think of it as **sculpting**: You carve (paint) shapes (UI) from a block (Canvas).",
    syntax: "CustomPainter, Canvas, Paint, Path, Offset",
    codeExample: `
      class MyPainter extends CustomPainter {
        @override
        void paint(Canvas canvas, Size size) {
          final paint = Paint()..color = Colors.blue;
          canvas.drawCircle(Offset(size.width/2, size.height/2), 50, paint);
        }
        @override
        bool shouldRepaint(MyPainter oldDelegate) => false;
      }
    `,
  },
  {
    id: 87,
    question: "What is Flutter’s compositing system?",
    answer:
      "Compositing combines **layers** (e.g., widgets, images) into a single scene for rendering. Flutter uses **Skia’s compositing engine** to optimize performance and apply effects like opacity and blends.",
    example:
      "Example: Applying a blur effect to a widget using `BackdropFilter`.",
    realTimeExample:
      "Compositing is like **photoshop layers**: It merges (composites) elements (layers) into a final image (UI).",
    realTimeExample2:
      "Think of it as a **sandwich**: It stacks (layers) ingredients (widgets) to create the final product (UI).",
    syntax: "Layer, BackdropFilter, Opacity, CompositeOperation",
    codeExample: `
      BackdropFilter(
        filter: ImageFilter.blur(sigmaX: 5, sigmaY: 5),
        child: Container(color: Colors.white.withOpacity(0.5)),
      )
    `,
  },
  {
    id: 88,
    question: "How do you implement backdrop filters in Flutter?",
    answer:
      "Use `BackdropFilter` with `ImageFilter` (e.g., blur, matrix) to apply **visual effects** to widgets. Wrap the filter and child in a `Stack` for proper layering.",
    example: "Example: Frosted glass effect for a modal dialog.",
    realTimeExample:
      "Backdrop filters are like **sunglasses**: They alter (blur) how you see (UI) the world (background).",
    realTimeExample2:
      "Think of it as a **camera lens**: It applies effects (filters) to the view (UI).",
    syntax: "BackdropFilter, ImageFilter.blur, Stack",
    codeExample: `
      Stack(
        children: [
          // Background content
          BackdropFilter(
            filter: ImageFilter.blur(sigmaX: 10, sigmaY: 10),
            child: Container(color: Colors.black.withOpacity(0.1)),
          ),
        ],
      )
    `,
  },
  {
    id: 89,
    question: "What is Flutter’s focus system?",
    answer:
      "Flutter’s focus system manages **keyboard navigation** and **input focus** (e.g., text fields). Use `FocusNode`, `FocusScope`, and `FocusTraversalPolicy` to control focus order.",
    example: "Example: Custom tab order for a form with multiple fields.",
    realTimeExample:
      "The focus system is like a **spotlight**: It highlights (focuses) one actor (widget) at a time on stage (UI).",
    realTimeExample2:
      "Think of it as a **remote control**: It selects (focuses) channels (widgets) for interaction (input).",
    syntax: "FocusNode, FocusScope, FocusTraversalPolicy, requestFocus",
    codeExample: `
      final focusNode = FocusNode();
      TextField(
        focusNode: focusNode,
        onSubmitted: (_) => FocusScope.of(context).nextFocus(),
      )
    `,
  },
  {
    id: 90,
    question: "How do you implement custom focus traversal in Flutter?",
    answer:
      "Extend `FocusTraversalPolicy` and override `next()`/`previous()` to define **custom focus order**. Assign the policy to a `FocusScope`.",
    example: "Example: A form where focus jumps logically between fields.",
    realTimeExample:
      "Custom focus traversal is like a **treasure hunt**: You define the path (order) to follow (focus).",
    realTimeExample2:
      "Think of it as a **maze**: You design the route (traversal) for the explorer (user).",
    syntax: "FocusTraversalPolicy, FocusScope, next, previous",
    codeExample: `
      class CustomTraversalPolicy extends FocusTraversalPolicy {
        @override
        Widget? next(FocusScopeNode current, Widget? node) {
          // Custom logic
        }
      }
      FocusScope(
        traversalPolicy: CustomTraversalPolicy(),
        child: Column(children: [TextField(), TextField()]),
      )
    `,
  },
  {
    id: 91,
    question: "What is Flutter’s input system?",
    answer:
      "Flutter’s input system handles **touch, mouse, and keyboard events** via `GestureDetector`, `Listener`, and `Focus`. Events are routed through the widget tree and processed by recognizers.",
    example: "Example: Detecting keyboard shortcuts in a desktop app.",
    realTimeExample:
      "The input system is like a **switchboard operator**: It connects (routes) calls (events) to the right line (widget).",
    realTimeExample2:
      "Think of it as a **piano**: Keys (input) produce notes (actions) when pressed (events).",
    syntax: "GestureDetector, Listener, RawKeyboardListener, onKey",
    codeExample: `
      RawKeyboardListener(
        focusNode: FocusNode(),
        onKey: (event) {
          if (event.isKeyPressed(LogicalKeyboardKey.enter)) {
            print('Enter pressed!');
          }
        },
        child: Container(),
      )
    `,
  },
  {
    id: 92,
    question: "How do you handle raw keyboard events in Flutter?",
    answer:
      "Use `RawKeyboardListener` or `FocusNode.onKey` to listen for **low-level keyboard events**. Check `LogicalKeyboardKey` for specific keys (e.g., Ctrl+C).",
    example: "Example: Implementing a global shortcut for ‘Save’ (Ctrl+S).",
    realTimeExample:
      "Raw keyboard events are like **Morse code**: Each key (dot/dash) sends a signal (event) to the app (receiver).",
    realTimeExample2:
      "Think of it as a **piano keyboard**: Pressing keys (events) produces sounds (actions).",
    syntax: "RawKeyboardListener, FocusNode.onKey, LogicalKeyboardKey",
    codeExample: `
      Focus(
        onKey: (node, event) {
          if (event is RawKeyDownEvent && event.logicalKey == LogicalKeyboardKey.keyS && event.isControlPressed) {
            print('Save shortcut pressed!');
            return KeyEventResult.handled;
          }
          return KeyEventResult.ignored;
        },
        child: Container(),
      )
    `,
  },
  {
    id: 93,
    question: "What is Flutter’s plugin architecture?",
    answer:
      "Flutter’s plugin architecture allows **Dart code** to call **platform-specific APIs** (Android/iOS) via `MethodChannel` or `EventChannel`. Plugins are published to `pub.dev` for reuse.",
    example: "Example: A plugin to access device contacts.",
    realTimeExample:
      "The plugin architecture is like a **universal adapter**: It connects Dart (plug) to native (socket) for power (APIs).",
    realTimeExample2:
      "Think of it as a **bridge**: It links (channels) two sides (Dart/native) for communication (API calls).",
    syntax: "MethodChannel, EventChannel, Pigeon, PlatformInterface",
    codeExample: `
      // Dart
      const channel = MethodChannel('contacts');
      final List<Contact> contacts = await channel.invokeMethod('getContacts');
      // Android
      channel.setMethodCallHandler { call, result ->
        if (call.method == "getContacts") result.success(getContacts())
      }
    `,
  },
  {
    id: 94,
    question: "How do you develop federated plugins in Flutter?",
    answer:
      "Federated plugins use **platform interfaces** to define a common API across platforms. Implement platform-specific logic in separate modules (e.g., `android/` and `ios/`).",
    example:
      "Example: A plugin with shared Dart API but separate Android/iOS implementations.",
    realTimeExample:
      "Federated plugins are like a **franchise**: Each location (platform) follows the same menu (API) but sources ingredients (code) locally.",
    realTimeExample2:
      "Think of it as a **modular phone**: You swap (platforms) components (code) without changing the core (API).",
    syntax: "PlatformInterface, MethodChannel, federated architecture",
    codeExample: `
      // Shared Dart API
      abstract class BatteryPlatform {
        Future<int> getBatteryLevel();
      }
      // Android implementation
      class BatteryPlugin extends BatteryPlatform {
        @override
        Future<int> getBatteryLevel() async => _channel.invokeMethod('getLevel');
      }
    `,
  },
  {
    id: 95,
    question: "What is Flutter’s embedding API?",
    answer:
      "Flutter’s embedding API allows **integrating Flutter into existing native apps** (Android/iOS). Use `FlutterFragment` (Android) or `FlutterViewController` (iOS) to host Flutter modules.",
    example: "Example: Adding a Flutter dashboard to a native Android app.",
    realTimeExample:
      "The embedding API is like a **window**: It frames (hosts) Flutter (view) within a native app (wall).",
    realTimeExample2:
      "Think of it as a **nesting doll**: Flutter (small doll) fits inside the native app (larger doll).",
    syntax: "FlutterFragment, FlutterViewController, addToParent",
    codeExample: `
      // Android
      FlutterFragment flutterFragment = FlutterFragment.createDefault();
      getSupportFragmentManager().beginTransaction()
        .add(R.id.flutter_container, flutterFragment)
        .commit();
    `,
  },
  {
    id: 96,
    question: "How do you implement Flutter in existing native apps?",
    answer:
      "Use `FlutterEngine` and `FlutterViewController` (iOS) or `FlutterFragment` (Android) to **embed Flutter**. Pass data via `MethodChannel` and handle lifecycle events.",
    example:
      "Example: Embedding a Flutter chat module in a native e-commerce app.",
    realTimeExample:
      "Embedding Flutter is like **adding a room**: You expand (native app) the house (features) with a new space (Flutter module).",
    realTimeExample2:
      "Think of it as a **plugin**: You enhance (native app) the core (Flutter) without rebuilding.",
    syntax: "FlutterEngine, FlutterViewController, MethodChannel",
    codeExample: `
      // iOS
      let flutterEngine = FlutterEngine(name: "chat_engine");
      flutterEngine.run();
      let flutterVC = FlutterViewController(engine: flutterEngine, nibName: nil, bundle: nil);
      present(flutterVC, animated: true);
    `,
  },
  {
    id: 97,
    question: "What is Flutter’s module system?",
    answer:
      "Flutter modules allow **building Flutter as an AAR (Android) or XCFramework (iOS)** for integration into native apps. Use `flutter build aar` or `flutter build ios-framework`.",
    example: "Example: Building a Flutter module for a native Android app.",
    realTimeExample:
      "Flutter modules are like **LEGO sets**: You build (module) a piece (feature) to attach to a larger structure (native app).",
    realTimeExample2:
      "Think of it as a **puzzle piece**: It fits (module) into the bigger picture (native app).",
    syntax: "flutter build aar, flutter build ios-framework, --module-name",
    codeExample: `
      flutter build aar --module-name=chat_module
      flutter build ios-framework --output=../ios/FlutterModules/
    `,
  },
  {
    id: 98,
    question: "How do you build Flutter modules?",
    answer:
      "Run `flutter create --template=module` to create a module. Build with `flutter build aar` (Android) or `flutter build ios-framework` (iOS). Integrate the output into native projects.",
    example: "Example: Creating a Flutter module for a shared auth screen.",
    realTimeExample:
      "Building modules is like **packaging a gift**: You prepare (build) the module (gift) for delivery (integration).",
    realTimeExample2:
      "Think of it as a **prefab wall**: You construct (build) it separately (module) to install (integrate) later.",
    syntax:
      "flutter create --template=module, flutter build aar, flutter build ios-framework",
    codeExample: `
      // Create module
      flutter create --template=module auth_module
      // Build for Android
      cd auth_module
      flutter build aar
    `,
  },
  {
    id: 99,
    question: "What is Flutter’s build system?",
    answer:
      "Flutter’s build system uses **Gradle (Android)** and **Xcode (iOS)** for native builds, and **Dart’s compiler** for Flutter code. It supports flavors, build modes, and custom scripts.",
    example:
      "Example: Configuring different API endpoints for dev/staging/prod flavors.",
    realTimeExample:
      "The build system is like a **factory assembly line**: It assembles (builds) the app (product) from parts (code/assets).",
    realTimeExample2:
      "Think of it as a **chef’s kitchen**: It combines (builds) ingredients (code) into a meal (app).",
    syntax: "build.gradle, Podfile, flavors, --flavor, dart2native",
    codeExample: `
      // Android flavors
      android {
        flavorDimensions "env"
        productFlavors {
          dev { dimension "env"; applicationIdSuffix ".dev" }
          prod { dimension "env" }
        }
      }
    `,
  },
  {
    id: 100,
    question: "How do you customize Flutter builds?",
    answer:
      "Customize builds by modifying `build.gradle` (Android), `Podfile` (iOS), or using **build flavors** and **environment variables**. Use `--dart-define` for runtime configuration.",
    example: "Example: Setting different app icons for dev and prod builds.",
    realTimeExample:
      "Customizing builds is like **tailoring a suit**: You adjust (configure) the fit (build) for the occasion (environment).",
    realTimeExample2:
      "Think of it as a **car customization**: You modify (build) features (flavors) for performance (prod) or comfort (dev).",
    syntax: "build.gradle, Podfile, --flavor, --dart-define",
    codeExample: `
      // Customize app name per flavor
      android {
        productFlavors {
          dev { resValue "string", "app_name", "MyApp Dev" }
          prod { resValue "string", "app_name", "MyApp" }
        }
      }
      // Dart
      const appName = String.fromEnvironment('APP_NAME');
    `,
  },
  {
    id: 101,
    question: "What is Flutter’s app bundle?",
    answer:
      "An app bundle is a **publishing format** for Android that generates **optimized APKs** per device configuration. Use `flutter build appbundle` to create one for Google Play.",
    example:
      "Example: Reducing app size by excluding unused device-specific resources.",
    realTimeExample:
      "An app bundle is like a **modular toolkit**: Google Play (store) assembles (APKs) only the tools (resources) needed for the job (device).",
    realTimeExample2:
      "Think of it as a **buffet**: Users (devices) get only the dishes (resources) they need (support).",
    syntax: "flutter build appbundle, bundletool, Google Play",
    codeExample: `
      flutter build appbundle --target-platform android-arm,android-arm64
    `,
  },
  {
    id: 102,
    question: "How do you implement app bundles in Flutter?",
    answer:
      "Run `flutter build appbundle` to generate an `.aab` file. Upload to Google Play, which dynamically serves optimized APKs to users.",
    example: "Example: Building and uploading an app bundle for a Flutter app.",
    realTimeExample:
      "Implementing app bundles is like **shipping a puzzle**: Google Play (user) receives only the pieces (APK) that fit their device (table).",
    realTimeExample2:
      "Think of it as a **custom tailor**: The store (Google Play) delivers (APK) clothes (app) that fit (device) perfectly.",
    syntax: "flutter build appbundle, bundletool, Google Play Console",
    codeExample: `
      # Build app bundle
      flutter build appbundle
      # Upload to Google Play Console
    `,
  },
  {
    id: 103,
    question: "What is Flutter’s code push?",
    answer:
      "Code push allows **updating app logic** without app store submissions. Use services like **Microsoft CodePush** or **Shorebird** to deploy Dart code updates to users.",
    example:
      "Example: Fixing a critical bug without waiting for app store review.",
    realTimeExample:
      "Code push is like a **software update**: It patches (updates) the app (car) without a full recall (store submission).",
    realTimeExample2:
      "Think of it as a **news ticker**: It updates (code) the headline (app) in real-time.",
    syntax: "CodePush, Shorebird, flutter pub global activate shorebird",
    codeExample: `
      # Install Shorebird CLI
      dart pub global activate shorebird
      # Release update
      shorebird release
    `,
  },
  {
    id: 104,
    question: "How do you implement code push in Flutter?",
    answer:
      "Use **Shorebird** or **CodePush** to deploy updates. For Shorebird: 1) Install CLI, 2) Initialize project, 3) Release updates. Users receive updates on next app launch.",
    example: "Example: Pushing a UI fix to all users instantly.",
    realTimeExample:
      "Implementing code push is like **updating a website**: Changes (code) go live (app) immediately without downtime (store review).",
    realTimeExample2:
      "Think of it as a **live broadcast**: The show (app) updates (code) in real-time for viewers (users).",
    syntax: "shorebird init, shorebird release, codepush",
    codeExample: `
      # Initialize Shorebird
      shorebird init
      # Release a patch
      shorebird release --patch
    `,
  },
  {
    id: 105,
    question: "What is Flutter’s AOT compilation?",
    answer:
      "AOT (Ahead-of-Time) compilation **pre-compiles Dart to native code** (ARM/x64) for fast startup and performance. Used in **release mode** for mobile/desktop apps.",
    example:
      "Example: Building a release APK with AOT for optimal performance.",
    realTimeExample:
      "AOT compilation is like **pre-cooking a meal**: It’s ready (native code) to serve (run) instantly (fast startup).",
    realTimeExample2:
      "Think of it as a **compiled playlist**: Songs (code) are ready (native) to play (execute) without buffering (JIT).",
    syntax: "AOT, dart2native, --release, flutter build apk",
    codeExample: `
      flutter build apk --release  # Uses AOT
    `,
  },
  {
    id: 106,
    question: "How do JIT and AOT compilation differ in Flutter?",
    answer:
      "JIT (Just-in-Time) compiles **on device** (used in **debug mode** for hot reload). AOT compiles **ahead of time** (used in **release mode** for performance).",
    example:
      "Example: Using JIT for development (hot reload) and AOT for production (speed).",
    realTimeExample:
      "JIT vs. AOT is like **cooking vs. meal prepping**: JIT cooks (compiles) on demand (debug), AOT preps (compiles) ahead (release).",
    realTimeExample2:
      "Think of it as **interpreting vs. translating**: JIT interprets (compiles) live (debug), AOT translates (compiles) in advance (release).",
    syntax: "JIT, AOT, --debug, --release",
    codeExample: `
      flutter run --debug    # JIT
      flutter run --release # AOT
    `,
  },
  {
    id: 107,
    question: "What is Flutter’s tree shaking?",
    answer:
      "Tree shaking **removes unused code** during compilation, reducing app size. Dart’s tree shaking is automatic but can be optimized with `--exclude-packages`.",
    example: "Example: Excluding unused Firebase modules to reduce APK size.",
    realTimeExample:
      "Tree shaking is like **packing for a trip**: You leave behind (remove) what you won’t use (code).",
    realTimeExample2:
      "Think of it as **pruning a tree**: You cut (remove) dead branches (unused code) for healthier growth (app).",
    syntax: "tree shaking, --exclude-packages, release mode",
    codeExample: `
      flutter build apk --release --exclude-packages=unused_package
    `,
  },
  {
    id: 108,
    question: "How do you optimize app startup in Flutter?",
    answer:
      "Optimize startup by: **1) Deferring initialization**, **2) Using `const` constructors**, **3) Minimizing synchronous work**, and **4) Preloading critical resources.**",
    example: "Example: Lazy-loading non-critical features after the app loads.",
    realTimeExample:
      "Optimizing startup is like **warming up a car**: You prepare (defer) everything (init) for a smooth drive (launch).",
    realTimeExample2:
      "Think of it as a **morning routine**: You prioritize (optimize) tasks (code) to start the day (app) faster.",
    syntax: "deferred loading, const, isolate, Future.delayed",
    codeExample: `
      void main() {
        runApp(MyApp());
        // Defer non-critical init
        Future.delayed(Duration(seconds: 1), () => _initAnalytics());
      }
    `,
  },
  {
    id: 109,
    question: "What is Flutter’s deferred loading?",
    answer:
      "Deferred loading **loads libraries on demand** using `deferred as` and `loadLibrary()`. Reduces initial load time by splitting code into chunks.",
    example:
      "Example: Loading a heavy image editor only when the user taps ‘Edit’.",
    realTimeExample:
      "Deferred loading is like **on-demand streaming**: You load (code) only the episode (library) the user wants to watch (use).",
    realTimeExample2:
      "Think of it as a **buffet**: You serve (load) dishes (libraries) only when requested (needed).",
    syntax: "deferred as, loadLibrary(), import",
    codeExample: `
      import 'package:my_app/editor.dart' deferred as editor;
      // Load later
      Future<void> openEditor() async {
        await editor.loadLibrary();
        editor.editImage();
      }
    `,
  },
  {
    id: 110,
    question: "How do you implement deferred loading in Flutter?",
    answer:
      "Use `import deferred as` and call `loadLibrary()` when needed. Wrap deferred code in `try/catch` to handle load failures.",
    example: "Example: Loading a game level only when the player reaches it.",
    realTimeExample:
      "Implementing deferred loading is like **packing for a hike**: You carry (load) gear (libraries) only for the trail (feature) you’re on.",
    realTimeExample2:
      "Think of it as a **modular phone**: You attach (load) modules (libraries) as needed (on demand).",
    syntax: "import deferred as, loadLibrary(), try/catch",
    codeExample: `
      import 'package:my_app/level2.dart' deferred as level2;
      Future<void> startLevel2() async {
        try {
          await level2.loadLibrary();
          level2.play();
        } catch (e) {
          print('Failed to load level: $e');
        }
      }
    `,
  },
  {
    id: 111,
    question: "What are Flutter’s isolate groups?",
    answer:
      "Isolate groups allow **isolates to share memory** (e.g., for large data). Use `Isolate.spawnUri` with the same group ID for shared state.",
    example:
      "Example: Processing a large dataset in parallel isolates with shared memory.",
    realTimeExample:
      "Isolate groups are like a **shared workspace**: Team members (isolates) collaborate (share memory) on a project (data).",
    realTimeExample2:
      "Think of it as a **family meal**: Everyone (isolates) shares (memory) the same dishes (data).",
    syntax: "Isolate, IsolateGroup, spawnUri, SendPort",
    codeExample: `
      final group = IsolateGroup.create();
      final isolate = await Isolate.spawnUri(
        Uri(path: 'worker.dart'),
        [], // args
        group: group,
      );
    `,
  },
  {
    id: 112,
    question: "How do you use isolate groups in Flutter?",
    answer:
      "Create an `IsolateGroup` and spawn isolates within it using `Isolate.spawnUri`. Use `ReceivePort` for communication and shared memory for data.",
    example:
      "Example: Parallel processing of image filters with shared pixel data.",
    realTimeExample:
      "Using isolate groups is like **teamwork**: Isolates (team members) share (memory) resources (data) to complete a task (computation).",
    realTimeExample2:
      "Think of it as a **orchestra**: Musicians (isolates) play (process) in harmony (shared memory) under a conductor (group).",
    syntax: "IsolateGroup, spawnUri, ReceivePort, SendPort",
    codeExample: `
      final group = IsolateGroup.create();
      final receivePort = ReceivePort();
      await Isolate.spawnUri(
        Uri(path: 'worker.dart'),
        [receivePort.sendPort],
        group: group,
      );
    `,
  },
  {
    id: 113,
    question: "What is Flutter’s FFI (Foreign Function Interface)?",
    answer:
      "FFI allows **calling C/C++ code from Dart** using `dart:ffi`. Use it for performance-critical tasks or leveraging existing native libraries.",
    example: "Example: Integrating a C library for image processing.",
    realTimeExample:
      "FFI is like a **translator**: It converts (binds) C (foreign language) to Dart (native language) for communication.",
    realTimeExample2:
      "Think of it as a **bridge**: It connects (FFI) two islands (Dart/C) for trade (data).",
    syntax: "dart:ffi, DynamicLibrary, typedef, NativeFunction",
    codeExample: `
      import 'dart:ffi';
      typedef NativeFunction = Int32 Function(Int32, Int32);
      final lib = DynamicLibrary.open('native_lib.so');
      final sum = lib.lookupFunction<NativeFunction, int Function(int, int)>('sum');
      print(sum(2, 3)); // 5
    `,
  },
  {
    id: 114,
    question: "How do you use FFI in Flutter?",
    answer:
      "1) Define native functions in C, 2) Load the dynamic library in Dart, 3) Bind functions using `dart:ffi`, and 4) Call them from Dart. Use `ffi` package for complex types.",
    example: "Example: Calling a C function to compute a checksum.",
    realTimeExample:
      "Using FFI is like **hiring a specialist**: You delegate (call) complex tasks (C functions) to an expert (native code).",
    realTimeExample2:
      "Think of it as a **tool rental**: You use (FFI) a tool (C function) for a specific job (task) without buying it (rewriting).",
    syntax: "dart:ffi, DynamicLibrary, typedef, Struct, Pointer",
    codeExample: `
      // C header (native_lib.h)
      int sum(int a, int b);
      // Dart
      final lib = DynamicLibrary.open('native_lib.so');
      final sum = lib.lookupFunction<Int32 Function(Int32, Int32), int Function(int, int)>('sum');
      print(sum(5, 7)); // 12
    `,
  },
  {
    id: 115,
    question: "What is Flutter’s plugin development kit (PDK)?",
    answer:
      "The PDK provides **tools and templates** for creating, testing, and publishing Flutter plugins. It includes `pigeon` for type-safe platform channels and testing utilities.",
    example:
      "Example: Generating a plugin with `flutter create --template=plugin --platforms=android,ios`.",
    realTimeExample:
      "The PDK is like a **plugin factory**: It provides (tools) everything to build (plugins) and test (QA) your product.",
    realTimeExample2:
      "Think of it as a **starter kit**: It includes (PDK) all essentials (tools) to begin (plugin development).",
    syntax: "flutter create --template=plugin, pigeon, plugin testing",
    codeExample: `
      flutter create --template=plugin --platforms=android,ios my_plugin
      cd my_plugin
      flutter pub get
    `,
  },
  {
    id: 116,
    question: "How do you test Flutter plugins?",
    answer:
      "Test plugins by: **1) Mocking platform channels** in Dart tests, **2) Writing platform-specific tests** (Android/iOS), and **3) Using `integration_test` for end-to-end validation.",
    example: "Example: Mocking a battery level plugin to return fixed values.",
    realTimeExample:
      "Testing plugins is like **quality control**: You check (test) each part (platform) to ensure the product (plugin) works.",
    realTimeExample2:
      "Think of it as a **dress rehearsal**: You practice (test) all scenes (platforms) before the show (release).",
    syntax:
      "setMockMethodCallHandler, integration_test, TestDefaultBinaryMessenger",
    codeExample: `
      setUp(() {
        TestDefaultBinaryMessengerBinding.instance.defaultBinaryMessenger
          .setMockMethodCallHandler(channel, (call) async => 80);
      });
      test('getBatteryLevel returns 80', () async {
        expect(await Battery().level, 80);
      });
    `,
  },
];
window.advanced = advanced;
