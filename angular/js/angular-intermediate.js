// Angular Intermediate Level Q&A Data

let intermediate = [
  {
    id: 1,
    question: "Differentiate between var, const, and let variables.",
    answer:
      "Var can be changed and redeclared. Let can be changed but not redeclared. Const can't be changed or redeclared.",
    example:
      "var x = 1; x = 2; var x = 3; // ok, let y = 1; y = 2; // ok, but let y = 3; // error, const z = 1; z = 2; // error",
    realTimeExample:
      "Variables are like boxes for storing things. Var is like an old box that lets you change what's inside and even replace the box. Let is like a new box that lets you change inside but not replace the box. Const is like a locked box that you can't change at all.",
    realTimeExample2:
      "Think of var as a chalkboard where you can write, erase, and rewrite anything. Let is like a notebook where you can write and erase, but you can't replace the whole notebook. Const is like a tattoo—once it's there, it stays exactly as it is.",
    syntax: "var x = 1; let y = 2; const z = 3;",
    codeExample:
      "var x = 1;\nx = 2;\nvar x = 3; // ok\n\nlet y = 1;\ny = 2; // ok\nlet y = 3; // error\n\nconst z = 1;\nz = 2; // error",
  },
  {
    id: 2,
    question: "Differentiate between Angular and AngularJS",
    answer:
      "Angular uses TypeScript and supports mobile devices. AngularJS uses JavaScript and doesn't support mobile devices. Angular has components, AngularJS has MVC. Angular has dependency injection, AngularJS doesn't.",
    example:
      "AngularJS uses JavaScript like plain talk, Angular uses TypeScript like typed talk for better checks.",
    realTimeExample:
      "Angular is like a modern car with safety features, AngularJS is like an old car without them. Angular supports phones, AngularJS doesn't. Angular has parts like Lego blocks, AngularJS has a different way.",
    realTimeExample2:
      "Imagine Angular as a smartphone with apps (components) and security (TypeScript). AngularJS is like a flip phone with basic features (MVC) and no app store. Angular is designed for today's needs, while AngularJS was built for an earlier time.",
    syntax: "N/A (Conceptual)",
    codeExample:
      "// AngularJS\nangular.module('app', []);\n\n// Angular\nimport { NgModule } from '@angular/core';\n@NgModule({})\nexport class AppModule {}",
  },
  {
    id: 3,
    question: "List out some commands.",
    answer: [
      "ng build --prod: Builds the application in production mode.",
      "ng serve --prod: Serves the application in production mode.",
      "ng generate component my-component: Creates a new component.",
      "ng generate service my-service: Creates a new service.",
      "ng test: Runs unit tests.",
      "ng e2e: Runs end-to-end tests.",
    ],
    example:
      "ng build --prod creates a ready-to-use version of your app, ng serve --prod runs it for testing.",
    realTimeExample:
      "Commands are like instructions to a robot. Ng build --prod tells the robot to make a clean, fast version of the app. Ng serve --prod tells it to show the app in a special way for checking.",
    realTimeExample2:
      "Think of commands as buttons on a remote control. Each button (command) tells your TV (Angular CLI) to do something specific, like change the channel (generate a component) or adjust the volume (build for production). The remote makes it easy to control your app's development without manual work.",
    syntax:
      "ng build --prod, ng serve --prod, ng generate component my-component",
    codeExample:
      "ng build --prod\nng serve --prod --port 4200\nng generate component my-component",
  },
  {
    id: 4,
    question: "What is Eager and Lazy Loading?",
    answer: [
      {
        term: "Eager Loading",
        definition:
          "Eager loading means loading all the modules upfront before the application starts.",
      },
      {
        term: "Lazy Loading",
        definition:
          "Lazy loading loads modules only when they are needed, improving the initial load time of the application.",
      },
    ],
    example:
      "Eager: all modules load at start. Lazy: modules load when needed.",
    realTimeExample:
      "Eager loading is like unpacking all toys at once, lazy loading is like unpacking toys only when you want to play with them.",
    realTimeExample2:
      "Imagine eager loading as a buffet where all the food is laid out at once. Lazy loading is like a restaurant where dishes are prepared and served only when you order them. Both get you fed, but lazy loading is more efficient and keeps things fresh.",
    syntax: "loadChildren: () => import('path').then(m => m.ModuleName)",
    codeExample:
      "// Lazy Loading\nconst routes: Routes = [\n  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }\n];",
  },
  {
    id: 5,
    question: "How to set cookies in Angular?",
    answer: [
      {
        term: "set",
        definition: "cookies.set('cookieName', 'cookieValue')",
      },
      {
        term: "get",
        definition: "cookies.get('cookieName')",
      },
      {
        term: "delete",
        definition: "cookies.delete('cookieName')",
      },
    ],
    example: "Use CookieService to manage cookies.",
    realTimeExample:
      "Cookies are like notes that remember things on your computer. Setting a cookie saves information, getting it reads the note, deleting it throws the note away.",
    realTimeExample2:
      "Think of cookies as sticky notes on your fridge. Setting a cookie is like writing a note and sticking it up. Getting a cookie is like reading the note. Deleting a cookie is like throwing the note away when you don't need it anymore. Cookies help your app remember things between visits, just like notes help you remember tasks.",
    syntax:
      "this.cookies.set('name', 'value'); this.cookies.get('name'); this.cookies.delete('name');",
    codeExample:
      "import { CookieService } from 'ngx-cookie-service';\n\nconstructor(private cookies: CookieService) {}\n\nsetCookie() {\n  this.cookies.set('name', 'value');\n}\n\ngetCookie() {\n  return this.cookies.get('name');\n}\n\ndeleteCookie() {\n  this.cookies.delete('name');\n}",
  },
  {
    id: 6,
    question: "What is the difference between map and forEach?",
    answer: [
      {
        aspect: "Return value",
        map: "Returns a new array with transformed elements",
        foreach: "Returns undefined",
      },
      {
        aspect: "Use case",
        map: "Transforming array elements into a new array",
        foreach:
          "Performing operations on each element without returning a new array",
      },
    ],
    example:
      "[1, 2, 3].map(x => x * 2); // [2, 4, 6], [1, 2, 3].forEach(x => console.log(x)); // logs 1, 2, 3",
    realTimeExample:
      "Map is like a photocopier that changes each page as it copies, giving you a new set of pages. ForEach is like reading each page aloud but not making any copies. Map creates something new, ForEach just does something with what exists.",
    realTimeExample2:
      "Imagine map as a chef who takes each ingredient and transforms it into a new dish, creating a whole new meal. ForEach is like a food critic who tastes each dish but doesn't create anything new. Map produces a new array, ForEach just performs actions on the original.",
    syntax: "array.map(x => x * 2); array.forEach(x => console.log(x));",
    codeExample:
      "const numbers = [1, 2, 3];\nconst doubled = numbers.map(x => x * 2); // [2, 4, 6]\nnumbers.forEach(x => console.log(x)); // logs 1, 2, 3",
  },
  {
    id: 7,
    question: "What are SYNCHRONOUS and ASYNCHRONOUS?",
    answer: {
      SYNCHRONOUS:
        "Synchronous operations are executed one after another, blocking the execution of subsequent code until the current operation finishes.",
      ASYNCHRONOUS:
        "Asynchronous operations allow other code to execute while waiting for a task to finish, such as HTTP requests or timers.",
    },
    example:
      "Synchronous: console.log('A'); console.log('B'); // A, B, Asynchronous: console.log('A'); setTimeout(() => console.log('B'), 1000); // A, (waits 1 second), B",
    realTimeExample:
      "Synchronous is like waiting in line at a coffee shop: you order, wait for your coffee, then get it before the next person can order. Asynchronous is like ordering at a fast food drive-thru: you order, drive to the window, and while you wait, other cars can order too.",
    realTimeExample2:
      "Think of synchronous code as reading a book page by page. You can't skip ahead or do anything else until you finish the current page. Asynchronous code is like reading a magazine: you can skip around, read an article, put it down, do something else, and come back to it later. Both get you information, but in different ways.",
    syntax:
      "console.log('sync'); setTimeout(() => console.log('async'), 1000);",
    codeExample:
      "// Synchronous\nconsole.log('First');\nconsole.log('Second');\n\n// Asynchronous\nconsole.log('Start');\nsetTimeout(() => console.log('After 1 second'), 1000);\nconsole.log('End');",
  },
  {
    id: 8,
    question: "What is the difference between pure and impure pipes?",
    answer: [
      {
        aspect: "Reevaluation",
        pure: "Only when input data changes",
        impure: "Whenever any change occurs in the component",
      },
      {
        aspect: "Performance",
        pure: "Better performance, only recalculates when inputs change",
        impure:
          "Can cause performance issues, recalculates on every change detection cycle",
      },
    ],
    example:
      "@Pipe({ name: 'purePipe', pure: true }), @Pipe({ name: 'impurePipe', pure: false })",
    realTimeExample:
      "Pure pipes are like a calculator that only recalculates when you press equals again with new numbers. Impure pipes are like a calculator that recalculates every time you breathe near it, even if the numbers haven't changed.",
    realTimeExample2:
      "Imagine pure pipes as a thermometer that only updates when the temperature actually changes. Impure pipes are like a thermometer that updates every second, even if the temperature stays the same. Pure pipes are more efficient, while impure pipes are always checking for changes.",
    syntax: "@Pipe({ name: 'pipeName', pure: true|false })",
    codeExample:
      "// Pure Pipe\n@Pipe({ name: 'purePipe', pure: true })\nexport class PurePipe {}\n\n// Impure Pipe\n@Pipe({ name: 'impurePipe', pure: false })\nexport class ImpurePipe {}",
  },
  {
    id: 9,
    question: "What is the difference between AOT and JIT?",
    answer: [
      {
        aspect: "Timing",
        aot: "During build phase",
        jit: "At runtime",
      },
      {
        aspect: "Performance",
        aot: "Faster startup, smaller bundle",
        jit: "Slower startup, larger bundle",
      },
      {
        aspect: "Error Detection",
        aot: "Detects errors during build",
        jit: "Detects errors at runtime",
      },
    ],
    example: "AOT compiles during build, JIT compiles in the browser.",
    realTimeExample:
      "AOT is like baking a cake before the party: it's ready to serve when guests arrive. JIT is like baking the cake during the party: guests have to wait, and you might run out of ingredients (errors) while baking.",
    realTimeExample2:
      "Think of AOT as a pre-recorded TV show: everything is edited and ready to watch when it airs. JIT is like live TV: things can go wrong during the broadcast, and you have to fix them on the spot. AOT is more reliable, while JIT is more flexible but riskier.",
    syntax: "ng build --aot, ng serve --aot (default in production)",
    codeExample:
      "// Angular uses AOT by default in production builds\nng build --prod --aot",
  },
  {
    id: 10,
    question: "What is Bazel in Angular?",
    answer:
      "Bazel is an advanced build and test tool. It supports features like caching and parallel builds, making it suitable for large projects.",
    example:
      "Bazel can build and test only the parts of your project that changed, saving time.",
    realTimeExample:
      "Bazel is like a super-efficient factory manager. Instead of rebuilding the whole car every time you change a part, it only rebuilds the part you changed and reuses the rest. This makes the whole process much faster and more efficient.",
    realTimeExample2:
      "Imagine Bazel as a smart chef in a big kitchen. When you change one recipe, the chef only remakes that dish and reuses the others that are already prepared. This saves time and ingredients, making the kitchen (your build process) much more efficient, especially when cooking for a large party (big project).",
    syntax: "N/A (Build tool configuration)",
    codeExample:
      "// Bazel is configured in WORKSPACE and BUILD files\n// Example BUILD file\nload('@angular_bazel', 'ng_module')\n\ng_module(\n    name = 'app',\n    srcs = ['app.module.ts'],\n)",
  },
  {
    id: 11,
    question: "How to implement lazy loading in Angular?",
    answer:
      "Generate modules using 'ng generate module modulea --route a --module app.module'. Then configure routes in app-routing.module.ts for lazy loading.",
    example:
      "Lazy loading loads feature modules only when navigated to, improving initial load time.",
    realTimeExample:
      "Lazy loading is like a library where books are stored in the back room. When you ask for a book (navigate to a route), the librarian brings it out. This way, the library doesn't need to have all books on the shelves at once, making it easier to find what you need quickly.",
    realTimeExample2:
      "Think of lazy loading as a video game that loads levels as you play. You don't have to wait for the whole game to load at the start. Instead, each level loads when you reach it, making the game start faster and run smoother. Lazy loading does the same for your app's modules.",
    syntax: "loadChildren: () => import('path').then(m => m.ModuleName)",
    codeExample:
      "const routes: Routes = [\n  {\n    path: 'admin',\n    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)\n  }\n];",
  },
  {
    id: 12,
    question: "What are Operators in RxJS?",
    answer:
      "Operators are pure functions that take an Observable as input and return another Observable. Examples include map, first, interval, catchError, retry, retryWhen.",
    example:
      "Operators transform, filter, or combine Observables to create new data streams.",
    realTimeExample:
      "Operators are like kitchen appliances. Map is like a blender that changes ingredients into something new. Filter is like a strainer that lets only certain things through. Each operator processes your data (food) in a different way to give you the result (meal) you want.",
    realTimeExample2:
      "Imagine operators as tools in a workshop. Map is like a saw that cuts wood to size. First is like a clamp that holds the first piece. CatchError is like a safety net that catches mistakes. Each tool (operator) helps you shape your data (material) into the final product (Observable result) you need.",
    syntax: "observable.pipe(map(x => x * 2), filter(x => x > 10))",
    codeExample:
      "import { map, filter } from 'rxjs/operators';\n\nobservable.pipe(\n  map(x => x * 2),\n  filter(x => x > 10)\n).subscribe(console.log);",
  },
  {
    id: 13,
    question: "What is an Observable in RxJS?",
    answer:
      "An Observable in RxJS is a stream that can emit multiple values over time, such as data from HTTP requests or user interactions.",
    example:
      "Observables can represent anything from button clicks to data from a server, emitting values as they become available.",
    realTimeExample:
      "An Observable is like a news channel that broadcasts updates as they happen. You can tune in (subscribe) to get the latest news (data) as it's reported. If you change the channel (unsubscribe), you stop getting updates from that source.",
    realTimeExample2:
      "Think of an Observable as a garden hose. When you turn on the water (subscribe), a steady stream (data) comes out. You can attach different nozzles (operators) to change how the water comes out. When you turn off the hose (unsubscribe), the water stops flowing. Observables provide a steady stream of data that you can control and transform.",
    syntax: "new Observable(subscriber => { subscriber.next(value); });",
    codeExample:
      "import { Observable } from 'rxjs';\n\nconst observable = new Observable(subscriber => {\n  subscriber.next(1);\n  subscriber.next(2);\n  setTimeout(() => subscriber.next(3), 1000);\n});\n\nobservable.subscribe(console.log);",
  },
  {
    id: 14,
    question:
      "What is the difference between Cold and Hot Observables in RxJS?",
    answer:
      "Cold Observables produce data only when subscribed to, whereas Hot Observables emit data whether or not there are subscribers.",
    example:
      "Cold: HTTP request starts when you subscribe. Hot: Mouse moves emit even without subscribers.",
    realTimeExample:
      "Cold Observables are like a DVD that only plays when you press play (subscribe). Hot Observables are like a live TV broadcast that's always on, whether or not you're watching (subscribed).",
    realTimeExample2:
      "Imagine Cold Observables as a faucet that only runs when you turn it on. Hot Observables are like a waterfall that's always flowing, regardless of whether you're there to see it. Cold Observables start producing data when you subscribe, while Hot Observables produce data continuously, independent of subscribers.",
    syntax: "Cold: new Observable(), Hot: new Subject()",
    codeExample:
      "// Cold Observable\nconst cold = new Observable(subscriber => {\n  subscriber.next('Cold data');\n});\n\n// Hot Observable\nconst hot = new Subject();\nhot.next('Hot data');",
  },
  {
    id: 15,
    question: "What is the difference between scan() vs reduce()?",
    answer:
      "scan() emits all intermediate values from the source Observable, while reduce() emits only the final value after processing all emitted values.",
    example: "scan() is like a running total, reduce() is like a final sum.",
    realTimeExample:
      "Scan is like a pedometer that shows every step you take and the total so far. Reduce is like the pedometer showing only the total steps at the end of the day. Scan gives you ongoing updates, reduce gives you the final result.",
    realTimeExample2:
      "Imagine scan as a live sports scoreboard that updates after every play, showing the current score. Reduce is like the final score at the end of the game. Scan keeps you informed throughout the process, while reduce gives you the end result.",
    syntax:
      "observable.pipe(scan((acc, x) => acc + x, 0)), observable.pipe(reduce((acc, x) => acc + x, 0))",
    codeExample:
      "import { scan, reduce } from 'rxjs/operators';\n\nconst source = of(1, 2, 3);\n\nsource.pipe(scan((acc, x) => acc + x, 0)).subscribe(console.log); // 1, 3, 6\nsource.pipe(reduce((acc, x) => acc + x, 0)).subscribe(console.log); // 6",
  },
  {
    id: 16,
    question: "How to pass data between components?",
    answer: [
      {
        term: "Parent to Child",
        definition:
          "Use @Input() for passing data from parent to child component.",
      },
      {
        term: "Child to Parent",
        definition:
          "Use @Output() with EventEmitter to pass data from child to parent component.",
      },
      {
        term: "Unrelated Components",
        definition:
          "Use a shared service to pass data between unrelated components.",
      },
    ],
    example:
      "Parent to Child: <child [data]='parentData'></child>, Child to Parent: @Output() event = new EventEmitter();",
    realTimeExample:
      "Passing data is like sending letters. Parent to Child is like a parent sending a letter to their child. Child to Parent is like the child sending a letter back. Unrelated components are like friends sending letters through a mutual friend (shared service).",
    realTimeExample2:
      "Imagine data passing as a phone call. Parent to Child is like a parent calling their child's phone. Child to Parent is like the child calling back. Unrelated components are like two friends calling each other through a switchboard (shared service) that connects their calls.",
    syntax: "@Input() data: any; @Output() event = new EventEmitter();",
    codeExample:
      "// Parent to Child\n// Parent template\n<child [data]='parentData'></child>\n\n// Child component\n@Input() data: any;\n\n// Child to Parent\n// Child component\n@Output() event = new EventEmitter();\n\n// Parent template\n<child (event)='handleEvent($event)'></child>",
  },
  {
    id: 17,
    question: "What is TAP() in Angular?",
    answer:
      "The TAP() operator in RxJS allows you to perform side effects without affecting the stream of data.",
    example:
      "Tap is used for debugging or logging without changing the data flow.",
    realTimeExample:
      "Tap is like a security camera that watches and records what's happening but doesn't interfere with the process. It lets you see (log) what's going on without changing anything.",
    realTimeExample2:
      "Imagine tap as a mirror in a hallway. As people (data) walk by, the mirror (tap) shows their reflection (logs their value) but doesn't stop or change their path. It's a way to observe without interfering.",
    syntax: "observable.pipe(tap(x => console.log(x)))",
    codeExample:
      "import { tap } from 'rxjs/operators';\n\nobservable.pipe(\n  tap(x => console.log('Value:', x))\n).subscribe();",
  },
  {
    id: 18,
    question: "What is the pipe function in Angular?",
    answer:
      "The pipe function is used to chain multiple operators in RxJS and is essential for composing transformations in observables.",
    example: "Pipes let you combine operators to transform data in a sequence.",
    realTimeExample:
      "The pipe function is like an assembly line in a factory. Each operator is a station that does something to the product (data) as it moves along. The pipe connects all the stations in order, so the product is transformed step by step as it goes through the line.",
    realTimeExample2:
      "Imagine the pipe function as a recipe. Each operator is an instruction, like 'chop the onions' (map) or 'simmer for 10 minutes' (delay). The pipe puts all the instructions in order, so you follow them one after another to transform your ingredients (data) into a finished meal (result).",
    syntax: "observable.pipe(operator1(), operator2())",
    codeExample:
      "import { map, filter } from 'rxjs/operators';\n\nobservable.pipe(\n  map(x => x * 2),\n  filter(x => x > 10)\n).subscribe(console.log);",
  },
  {
    id: 19,
    question: "What are interceptors?",
    answer:
      "Interceptors are used to intercept and modify HTTP requests and responses in Angular, typically for adding headers or logging.",
    example:
      "Interceptors can add auth tokens to requests or log errors from responses.",
    realTimeExample:
      "Interceptors are like a postal service that checks every letter (request) before it's sent and every reply (response) before it's delivered. They can add stamps (headers), check the address (URL), or log any damaged letters (errors).",
    realTimeExample2:
      "Imagine interceptors as airport security. Every passenger (request) and their luggage (response) go through security (interceptor) before boarding (being sent) or after landing (being received). Security can add tags (headers), check contents (data), or flag suspicious items (errors).",
    syntax:
      "@Injectable()\nexport class MyInterceptor implements HttpInterceptor {\n  intercept(req: HttpRequest<any>, next: HttpHandler) { ... }\n}",
    codeExample:
      "@Injectable()\nexport class AuthInterceptor implements HttpInterceptor {\n  intercept(req: HttpRequest<any>, next: HttpHandler) {\n    const authReq = req.clone({\n      headers: req.headers.set('Authorization', 'Bearer token')\n    });\n    return next.handle(authReq);\n  }\n}",
  },
  {
    id: 20,
    question: "What is authguard?",
    answer:
      "AuthGuard is used in Angular to prevent or allow access to certain routes based on conditions, such as whether a user is logged in.",
    example: "AuthGuard can redirect unauthenticated users to a login page.",
    realTimeExample:
      "AuthGuard is like a bouncer at a club. They check your ID (auth status) before letting you in (accessing the route). If you don't have the right ID (not logged in), they send you to the ticket booth (login page) to get one.",
    realTimeExample2:
      "Imagine AuthGuard as a security gate at an office building. You need a badge (authentication) to enter certain floors (routes). If you don't have a badge, security directs you to the reception (login page) to get one. The gate ensures only authorized people can access restricted areas.",
    syntax:
      "@Injectable()\nexport class AuthGuard implements CanActivate {\n  canActivate() { return this.auth.isLoggedIn(); }\n}",
    codeExample:
      "@Injectable({\n  providedIn: 'root'\n})\nexport class AuthGuard implements CanActivate {\n  constructor(private auth: AuthService, private router: Router) {}\n\n  canActivate() {\n    if (this.auth.isLoggedIn()) {\n      return true;\n    } else {\n      this.router.navigate(['/login']);\n      return false;\n    }\n  }\n}",
  },
  {
    id: 21,
    question: "What is Angular CLI?",
    answer:
      "Angular CLI (Command Line Interface) is a tool used to automate common tasks in Angular development, such as creating components, services, and deploying applications.",
    example:
      "Angular CLI can generate components, services, and even whole applications with a single command.",
    realTimeExample:
      "Angular CLI is like a Swiss Army knife for developers. Need a new component? Use 'ng generate component'. Want to build your app? Use 'ng build'. It's a single tool with many functions that make development faster and easier.",
    realTimeExample2:
      "Think of Angular CLI as a personal assistant for your app. You tell it what you need, like 'create a new service' or 'run the tests', and it handles all the details for you. It's like having someone who takes care of the boring setup work, so you can focus on the creative parts of building your app.",
    syntax: "ng new project-name, ng generate component my-component, ng serve",
    codeExample:
      "ng new my-project\ncd my-project\nng generate component my-component\nng serve",
  },
  {
    id: 22,
    question: "What is ivy?",
    answer:
      "Ivy is Angular's next-generation rendering engine, which provides better performance, smaller bundle sizes, and improved debugging.",
    example:
      "Ivy makes Angular apps faster and easier to debug, with more intuitive templates.",
    realTimeExample:
      "Ivy is like upgrading from a dial-up internet connection to fiber optic. Pages load faster (better performance), files download quicker (smaller bundles), and it's easier to see what's happening (improved debugging). Everything works smoother and more efficiently.",
    realTimeExample2:
      "Imagine Ivy as a new, high-tech oven. It cooks your food (renders your app) faster (better performance), uses less energy (smaller bundles), and has a clear window so you can see exactly what's happening inside (improved debugging). It's a modern upgrade that makes cooking (developing) much more enjoyable.",
    syntax: "N/A (Enabled by default in Angular 9+)",
    codeExample:
      "// Ivy is enabled by default in Angular 9 and above\n// No special configuration needed",
  },
  {
    id: 23,
    question:
      "What is the difference between ElementRef, TemplateRef, and ViewContainerRef?",
    answer: [
      {
        term: "ElementRef",
        definition: "Provides a wrapper around a DOM element to access it.",
      },
      {
        term: "TemplateRef",
        definition:
          "Represents an Angular template that can be used in structural directives.",
      },
      {
        term: "ViewContainerRef",
        definition:
          "Represents a container where views can be dynamically inserted.",
      },
    ],
    example:
      "ElementRef accesses DOM elements, TemplateRef creates reusable templates, ViewContainerRef dynamically adds views.",
    realTimeExample:
      "ElementRef is like a magnifying glass that lets you look closely at a single object (DOM element). TemplateRef is like a blueprint that you can use to build many identical houses (views). ViewContainerRef is like a plot of land where you can build and remove houses (views) as needed.",
    realTimeExample2:
      "Imagine ElementRef as a spotlight that focuses on one actor (element) on stage. TemplateRef is like a script that can be performed by any actor. ViewContainerRef is like the stage itself, where you can add or remove actors (views) during the performance. Each plays a different role in creating the final show (app).",
    syntax:
      "@ViewChild('ref') ref: ElementRef; @ViewChild('template') template: TemplateRef<any>; @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef;",
    codeExample:
      "@ViewChild('myElement') myElement: ElementRef;\n@ViewChild('myTemplate') myTemplate: TemplateRef<any>;\n@ViewChild('myContainer', {read: ViewContainerRef}) myContainer: ViewContainerRef;",
  },
  {
    id: 24,
    question: "What is transpiling in Angular?",
    answer:
      "Transpiling refers to the process of converting TypeScript code to JavaScript, allowing it to run in any browser.",
    example:
      "Angular uses the TypeScript compiler to transpile .ts files to .js files during the build process.",
    realTimeExample:
      "Transpiling is like having a universal translator. You write in TypeScript (your language), and the transpiler converts it to JavaScript (a language all browsers understand). This lets your code run anywhere, just like a translator lets you communicate with people who speak different languages.",
    realTimeExample2:
      "Imagine transpiling as a recipe converter. You have a recipe written in metric units (TypeScript), and the converter changes it to imperial units (JavaScript) so that any cook (browser) can follow it. The dish (app) turns out the same, no matter which units the cook is used to.",
    syntax: "N/A (Handled by Angular CLI during build)",
    codeExample:
      "// TypeScript code\nconst message: string = 'Hello, World!';\n\n// Transpiled JavaScript\nvar message = 'Hello, World!';",
  },
  {
    id: 25,
    question: "List some of the tools for testing Angular applications",
    answer: [
      {
        name: "Karma",
        description: "Test runner for executing unit tests in browsers.",
      },
      {
        name: "Jasmine",
        description:
          "Behavior-driven development framework for testing JavaScript code.",
      },
      {
        name: "Protractor",
        description: "End-to-end testing framework for Angular applications.",
      },
      {
        name: "Mocha",
        description:
          "Flexible JavaScript test framework that can be used with Angular.",
      },
      {
        name: "Jest",
        description:
          "Delightful JavaScript testing framework with a focus on simplicity.",
      },
    ],
    example:
      "Karma runs unit tests, Protractor runs end-to-end tests, Jasmine provides test syntax.",
    realTimeExample:
      "Testing tools are like different types of inspectors for a building. Karma is like a structural inspector checking each room (unit test). Protractor is like a full building inspection (end-to-end test). Jasmine is like the checklist all inspectors use to make sure everything meets the standards.",
    realTimeExample2:
      "Imagine testing tools as a team of doctors. Karma is like a general practitioner checking your overall health (unit tests). Protractor is like a specialist doing a full-body scan (end-to-end tests). Jasmine is like the medical guidelines they all follow to diagnose issues. Each plays a role in keeping your app healthy.",
    syntax: "ng test (Karma), ng e2e (Protractor)",
    codeExample: "// Running tests with Angular CLI\nng test\nng e2e",
  },
  {
    id: 26,
    question: "What are some disadvantages of using Angular?",
    answer: [
      {
        aspect: "Learning Curve",
        description:
          "Angular has a steep learning curve due to its complexity and many features.",
      },
      {
        aspect: "Performance",
        description:
          "Can be slower for small applications due to its size and complexity.",
      },
      {
        aspect: "SEO",
        description:
          "Single-page applications can be challenging for SEO optimization.",
      },
      {
        aspect: "Verbosity",
        description:
          "Requires more boilerplate code compared to some other frameworks.",
      },
    ],
    example:
      "Angular's complexity can make it overkill for simple projects, and its size can slow down initial load times.",
    realTimeExample:
      "Using Angular for a small project is like using a semi-truck to deliver a pizza. It's powerful and can do the job, but it's more than you need, and it's harder to park (learn and maintain). For big deliveries (complex apps), it's perfect, but for small ones, a bicycle (simpler framework) might be better.",
    realTimeExample2:
      "Imagine Angular as a Swiss Army knife with 100 tools. It's great when you need many different tools, but if you only need to cut an apple (build a simple app), a small knife (simpler framework) would be easier and faster. Angular's many features are powerful but can be overwhelming for simple tasks.",
    syntax: "N/A (Conceptual)",
    codeExample: "N/A",
  },
  {
    id: 27,
    question: "What is HttpClient, and what are its benefits?",
    answer: [
      {
        aspect: "Purpose",
        description:
          "HttpClient is a service in Angular for making HTTP requests.",
      },
      {
        aspect: "Benefits",
        description: [
          "Supports request and response interception",
          "Provides typed responses",
          "Supports observables for async operations",
          "Simplifies error handling",
          "Supports JSON as a default",
        ],
      },
    ],
    example:
      "HttpClient can fetch data from a server and handle errors gracefully using observables.",
    realTimeExample:
      "HttpClient is like a professional courier service for your app. It can deliver packages (requests) to any address (URL), handle customs (interceptors), and make sure the package arrives safely (error handling). It even gives you a tracking number (observable) so you can follow the delivery in real time.",
    realTimeExample2:
      "Imagine HttpClient as a personal shopper. You give them a list (request), and they go to the store (server), pick up your items (data), handle any issues (errors), and bring everything to you (response). They even let you know when they're on their way (observable updates). It's a convenient way to get what you need without leaving your house (app).",
    syntax: "this.http.get(url), this.http.post(url, body)",
    codeExample:
      "constructor(private http: HttpClient) {}\n\nthis.http.get('/api/data').subscribe(data => {\n  console.log(data);\n});\n\nthis.http.post('/api/data', { key: 'value' }).subscribe(response => {\n  console.log(response);\n});",
  },
  {
    id: 28,
    question: "What is multicasting in Angular?",
    answer:
      "Multicasting in Angular allows sharing the same Observable execution between multiple subscribers, preventing duplicate requests.",
    example:
      "Multicasting is useful for sharing HTTP responses among multiple components without making separate requests.",
    realTimeExample:
      "Multicasting is like a shared taxi. Instead of each person (subscriber) calling their own taxi (making their own request), they all share one taxi (observable execution) that takes them to the same destination (data). This saves time and resources, just like sharing a taxi saves money and reduces traffic.",
    realTimeExample2:
      "Imagine multicasting as a live sports broadcast. Instead of each fan (subscriber) having their own camera crew (observable execution) at the game, everyone watches the same broadcast (shared observable). This way, all fans see the same game (data) at the same time, without needing multiple crews.",
    syntax: "observable.pipe(shareReplay())",
    codeExample:
      "import { shareReplay } from 'rxjs/operators';\n\nconst sharedObservable = this.http.get('/api/data').pipe(shareReplay(1));\n\nsharedObservable.subscribe(data => console.log('Subscriber 1:', data));\nsharedObservable.subscribe(data => console.log('Subscriber 2:', data));",
  },
  {
    id: 29,
    question: "What are HttpInterceptors in Angular?",
    answer:
      "HttpInterceptors allow you to inspect and transform HTTP requests and responses globally in your application, typically used for adding headers, logging, or error handling.",
    example:
      "Interceptors can add authentication tokens to every request or log all responses for debugging.",
    realTimeExample:
      "HttpInterceptors are like a postal service's sorting facility. Every letter (request) and reply (response) passes through the facility (interceptor), where workers can add postmarks (headers), check addresses (URLs), or flag suspicious mail (errors). This central processing ensures all mail is handled consistently and efficiently.",
    realTimeExample2:
      "Imagine HttpInterceptors as airport security for all flights (requests and responses). Every passenger (request) and their luggage (response) go through security (interceptor), where officers can add tags (headers), check passports (authentication), or confiscate prohibited items (errors). This ensures all flights meet the same safety standards before taking off or after landing.",
    syntax:
      "@Injectable()\nexport class MyInterceptor implements HttpInterceptor {\n  intercept(req: HttpRequest<any>, next: HttpHandler) { ... }\n}",
    codeExample:
      "@Injectable()\nexport class AuthInterceptor implements HttpInterceptor {\n  intercept(req: HttpRequest<any>, next: HttpHandler) {\n    const authReq = req.clone({\n      headers: req.headers.set('Authorization', 'Bearer token')\n    });\n    return next.handle(authReq);\n  }\n}",
  },
  {
    id: 30,
    question:
      "What is the difference between an Annotation and a Decorator in Angular?",
    answer: [
      {
        aspect: "Annotation",
        definition:
          "Metadata used to annotate classes, functions, or properties. In Angular, decorators are the implementation of annotations.",
      },
      {
        aspect: "Decorator",
        definition:
          "A special kind of declaration that can be attached to classes, methods, or properties to modify their behavior.",
      },
    ],
    example:
      "@Component is a decorator that adds metadata to a class, turning it into an Angular component.",
    realTimeExample:
      "Annotations are like sticky notes you put on files to describe what's inside. Decorators are like special folders that change how the files inside behave. The sticky note (annotation) tells you it's a 'Contract', and the folder (decorator) makes the contract legally binding and enforceable.",
    realTimeExample2:
      "Imagine annotations as labels on boxes. The label (annotation) says 'Fragile', but it doesn't change the box. Decorators are like special packaging that makes the box shockproof and temperature-controlled. The label describes the box, while the decorator changes how the box functions.",
    syntax: "@Component({...}), @Injectable(), @Input(), @Output()",
    codeExample:
      "@Component({\n  selector: 'app-example',\n  template: '<p>Example Component</p>'\n})\nexport class ExampleComponent {}\n\n@Injectable()\nexport class ExampleService {}",
  },
  {
    id: 31,
    question: "@Injectable",
    answer:
      "@Injectable decorator tells Angular that a class can be used for dependency injection, making it available to other components or services.",
    example:
      "@Injectable allows Angular to inject a service into a component's constructor.",
    realTimeExample:
      "@Injectable is like a name tag that says 'I can help!' When a component needs help (a service), Angular looks for classes with this tag and knows it can use them. It's like a badge that tells Angular, 'This class is ready to be used wherever it's needed.'",
    realTimeExample2:
      "Think of @Injectable as a 'Help Wanted' sign. When a component needs a service, Angular looks for classes with this sign and knows they're available to be 'hired' (injected). It's a way to mark classes as ready and willing to be used for dependency injection throughout your app.",
    syntax: "@Injectable({ providedIn: 'root' })",
    codeExample:
      "@Injectable({\n  providedIn: 'root'\n})\nexport class DataService {\n  constructor(private http: HttpClient) {}\n}",
  },
  {
    id: 32,
    question: "@Inject()",
    answer:
      "@Inject() manually specifies how Angular should inject a dependency into a constructor, allowing for more control over the injection process.",
    example:
      "@Inject() can be used to inject dependencies by token or to specify optional dependencies.",
    realTimeExample:
      "@Inject() is like asking for a specific tool by name. Instead of just asking for 'a screwdriver' (normal injection), you say '@Inject() I need a Phillips head screwdriver, size 2' (specific injection). This gives you more control over exactly what you get.",
    realTimeExample2:
      "Imagine @Inject() as a custom order at a coffee shop. Instead of just asking for 'coffee' (normal injection), you specify '@Inject() I want a double espresso with oat milk' (custom injection). This ensures you get exactly what you need, even if it's not the default option.",
    syntax: "constructor(@Inject('token') private dependency) {}",
    codeExample:
      "constructor(@Inject('API_URL') private apiUrl: string) {\n  console.log('API URL:', this.apiUrl);\n}",
  },
  {
    id: 33,
    question: "What do you understand as an observer in Angular?",
    answer:
      "An observer in Angular listens for notifications from an Observable, reacting to data changes or events by executing callback functions.",
    example:
      "Observers define what to do when an Observable emits a value, completes, or errors.",
    realTimeExample:
      "An observer is like a security guard watching monitors. When something happens on a screen (Observable emits), the guard (observer) reacts by following procedures: call for backup (next), sound the alarm (error), or log the event (complete). The guard is always ready to respond to whatever appears on the monitors.",
    realTimeExample2:
      "Imagine an observer as a lifeguard at a pool. They watch the water (Observable) and are ready to jump in (next) if someone needs help, blow their whistle (error) if there's danger, or note the time (complete) when the pool closes. The lifeguard is always attentive, ready to respond to any event in the pool.",
    syntax:
      "observable.subscribe({\n  next: (value) => console.log(value),\n  error: (err) => console.error(err),\n  complete: () => console.log('Done')\n});",
    codeExample:
      "observable.subscribe({\n  next: value => console.log('Received:', value),\n  error: err => console.error('Error:', err),\n  complete: () => console.log('Completed')\n});",
  },
  {
    id: 34,
    question: "What is a router outlet?",
    answer:
      "The RouterOutlet directive in Angular serves as a placeholder in templates where the router will display the activated components based on the current route.",
    example:
      "RouterOutlet dynamically swaps components as users navigate through the app.",
    realTimeExample:
      "RouterOutlet is like a stage in a theater. Different acts (components) perform on the stage based on the program (route). When the audience (users) chooses a show from the program, the stage manager (router) brings the right act onto the stage. The stage itself doesn't change, just what's presented on it.",
    realTimeExample2:
      "Imagine RouterOutlet as a picture frame in a gallery. The frame stays the same, but the picture inside changes based on which artwork (component) the curator (router) decides to display. Visitors (users) can walk through the gallery (app) and see different artworks in the same frame as they move from room to room (navigate between routes).",
    syntax: "<router-outlet></router-outlet>",
    codeExample:
      "<!-- In your app component template -->\n<router-outlet></router-outlet>",
  },
  {
    id: 35,
    question: "Explain the use of the 'this' operator in JavaScript",
    answer:
      "The 'this' operator in JavaScript refers to the current execution context, typically the object that a function is a property of. Its value depends on how a function is called.",
    example:
      "In a method, 'this' refers to the object. In a function, 'this' refers to the global object (or undefined in strict mode).",
    realTimeExample:
      "'this' is like a pronoun in a conversation. When you say 'I went to the store', 'I' refers to you (the object). But if someone else says the same sentence, 'I' refers to them. Similarly, 'this' refers to the current object, which changes depending on who's 'speaking' (which object the function belongs to).",
    realTimeExample2:
      "Imagine 'this' as a name tag at a conference. When you're wearing the tag, 'this' refers to you. If you pass your tag to someone else, 'this' now refers to them. The meaning of 'this' changes based on who's wearing the tag (the execution context) at any given time.",
    syntax: "function() { console.log(this); }",
    codeExample:
      "const person = {\n  name: 'Alice',\n  greet: function() {\n    console.log('Hello, ' + this.name);\n  }\n};\n\nperson.greet(); // Hello, Alice\n\nconst greet = person.greet;\ngreet(); // Hello, undefined (or global object in non-strict mode)",
  },
  {
    id: 36,
    question: "What do you understand by 'Closure' in JavaScript?",
    answer:
      "A closure in JavaScript is a function that retains access to its lexical scope, even when the function is executed outside that scope. This allows the function to 'remember' the environment in which it was created.",
    example:
      "Closures are often used for data privacy and creating function factories.",
    realTimeExample:
      "A closure is like a backpack you get at the start of a hike. Even when you're far from the trailhead (original scope), you can still access what's in the backpack (variables from the outer function). The backpack goes with you wherever the function goes, keeping its contents available.",
    realTimeExample2:
      "Imagine a closure as a time capsule. When you create a function inside another function, the inner function captures and remembers the environment (variables) at that moment, like sealing items in a capsule. No matter when or where you open the capsule (call the function), it still contains the original items (variables).",
    syntax:
      "function outer() {\n  const outerVar = 'I am outside!';\n  return function inner() {\n    console.log(outerVar);\n  }\n}",
    codeExample:
      "function createCounter() {\n  let count = 0;\n  return {\n    increment: function() {\n      count++;\n      return count;\n    },\n    getCount: function() {\n      return count;\n    }\n  };\n}\n\nconst counter = createCounter();\nconsole.log(counter.increment()); // 1\nconsole.log(counter.getCount()); // 1",
  },
  {
    id: 37,
    question: "Explain the use of the 'TypeOf' operator in JavaScript.",
    answer:
      "The 'typeof' operator in JavaScript returns a string indicating the type of a variable or expression. It's useful for checking the type of a value before performing operations on it.",
    example:
      "'typeof' can distinguish between primitive types but has limitations with objects and null.",
    realTimeExample:
      "'typeof' is like a label checker at a recycling plant. It quickly tells you whether something is plastic (number), paper (string), or metal (function), so you can sort it correctly. But it might get confused with some items, like mistaking a soda can (null) for a piece of paper (object).",
    realTimeExample2:
      "Imagine 'typeof' as a fruit inspector at a market. It can tell you if a fruit is an apple (number), banana (string), or orange (function). But it might call an avocado (null) a vegetable (object) because of its unique characteristics. It's a quick way to categorize, but not always perfect.",
    syntax: "typeof variable",
    codeExample:
      "console.log(typeof 42); // 'number'\nconsole.log(typeof 'hello'); // 'string'\nconsole.log(typeof function() {}); // 'function'\nconsole.log(typeof null); // 'object' (historical bug)",
  },
  {
    id: 38,
    question: "What are guards in Angular?",
    answer:
      "Guards in Angular are interfaces that allow you to control navigation to and from routes. They can prevent or allow route activation based on conditions like user authentication or data loading.",
    example:
      "Guards include CanActivate, CanDeactivate, CanLoad, and Resolve, each serving a different purpose in route protection.",
    realTimeExample:
      "Guards are like security checkpoints at different entrances of a building. CanActivate is like the front desk checking your ID before letting you in. CanDeactivate is like a guard making sure you've returned your visitor badge before leaving. CanLoad is like security clearing a delivery before it enters the building. Each guard protects a different part of the navigation process.",
    realTimeExample2:
      "Imagine guards as different types of locks on doors. CanActivate is a keypad lock that only opens if you know the code (are authenticated). CanDeactivate is a chain lock that prevents the door from opening if something isn't done (like saving a form). CanLoad is a master lock that controls access to a whole wing of the building (lazy-loaded module). Each lock serves a specific security purpose.",
    syntax:
      "@Injectable()\nexport class MyGuard implements CanActivate {\n  canActivate() { return boolean; }\n}",
    codeExample:
      "@Injectable({\n  providedIn: 'root'\n})\nexport class AuthGuard implements CanActivate {\n  constructor(private auth: AuthService, private router: Router) {}\n\n  canActivate() {\n    if (this.auth.isLoggedIn()) {\n      return true;\n    } else {\n      this.router.navigate(['/login']);\n      return false;\n    }\n  }\n}",
  },
  {
    id: 39,
    question: "What are the different types of guards in Angular?",
    answer: [
      {
        name: "CanActivate",
        description: "Determines if a route can be activated (visited).",
      },
      {
        name: "CanActivateChild",
        description: "Determines if child routes can be activated.",
      },
      {
        name: "CanDeactivate",
        description: "Determines if a user can leave a route.",
      },
      {
        name: "Resolve",
        description: "Pre-fetches data before activating a route.",
      },
      {
        name: "CanLoad",
        description: "Determines if a lazy-loaded module can be loaded.",
      },
    ],
    example:
      "Each guard type serves a unique purpose in controlling navigation and data loading.",
    realTimeExample:
      "The different guards are like different security personnel at an event. CanActivate is the door security checking tickets. CanActivateChild is security inside checking access to VIP areas. CanDeactivate is like a coat check ensuring you have your belongings before leaving. Resolve is like a concierge who has your special requests ready when you arrive. CanLoad is like security clearing a special delivery before it enters the event.",
    realTimeExample2:
      "Imagine the guards as different types of traffic signals. CanActivate is a green light allowing you to proceed to a destination. CanActivateChild is a signal controlling access to a specific lane. CanDeactivate is a red light preventing you from leaving until conditions are met. Resolve is a pre-timed light that ensures everything is ready before you can go. CanLoad is a signal controlling access to a whole new highway (lazy-loaded module).",
    syntax: "CanActivate, CanActivateChild, CanDeactivate, Resolve, CanLoad",
    codeExample:
      "// Example of CanActivate guard\n@Injectable({\n  providedIn: 'root'\n})\nexport class AuthGuard implements CanActivate {\n  canActivate() {\n    return this.auth.isLoggedIn();\n  }\n}",
  },
  {
    id: 40,
    question: "What is Change Detection in Angular?",
    answer:
      "Change detection in Angular is the process by which Angular checks for changes in component data and updates the DOM accordingly. It ensures that the view always reflects the current state of the data.",
    example:
      "Angular's change detection can be triggered by events, timers, or HTTP responses, and it compares current and previous values to determine if the view needs updating.",
    realTimeExample:
      "Change detection is like a security camera system that constantly monitors a room (component). When it detects movement (data change), it alerts the guards (Angular) to check the monitors (update the view). The system ensures that the guards always have an accurate picture of what's happening in the room.",
    realTimeExample2:
      "Imagine change detection as a teacher watching students during a test. The teacher (Angular) constantly scans the room (component) for any changes, like a student raising their hand (data change). When a change is detected, the teacher updates their records (view) to reflect the new situation, ensuring everything stays accurate and up-to-date.",
    syntax: "N/A (Automatic in Angular)",
    codeExample:
      "// Change detection is automatic, but you can trigger it manually\nthis.ref.detectChanges(); // Using ChangeDetectorRef",
  },
  {
    id: 41,
    question: "What is OnPush Change Detection Strategy?",
    answer:
      "OnPush is a change detection strategy in Angular that only checks a component when its input properties change or when an event originates from the component or one of its children. This improves performance by reducing the number of checks.",
    example:
      "OnPush is useful for components that don't change often or have complex data that doesn't need frequent checking.",
    realTimeExample:
      "OnPush is like a motion-activated security light. It only turns on (checks for changes) when someone moves nearby (input changes) or when there's activity in the area (component events). This saves energy (improves performance) compared to a light that's always on (default change detection).",
    realTimeExample2:
      "Imagine OnPush as a library's 'new books' alert system. You only get notified (change detection runs) when new books arrive in your favorite section (input changes) or when you request a book (component event). This is more efficient than checking every shelf every day (default change detection).",
    syntax: "changeDetection: ChangeDetectionStrategy.OnPush",
    codeExample:
      "@Component({\n  selector: 'app-example',\n  template: `...`,\n  changeDetection: ChangeDetectionStrategy.OnPush\n})\nexport class ExampleComponent {}",
  },
  {
    id: 42,
    question: "What is the difference between Subject and BehaviorSubject?",
    answer: [
      {
        aspect: "Initial Value",
        subject:
          "No initial value; subscribers only receive new values after subscription.",
        behaviorSubject:
          "Requires an initial value; new subscribers immediately receive the current value.",
      },
      {
        aspect: "Use Case",
        subject:
          "Good for event streams where subscribers should only get new events.",
        behaviorSubject:
          "Good for representing 'current value' over time, like state management.",
      },
    ],
    example:
      "BehaviorSubject is often used for state management, while Subject is used for event emission.",
    realTimeExample:
      "Subject is like a live sports broadcast. If you tune in late, you only see the game from that point forward. BehaviorSubject is like a sports channel that shows the current score when you tune in, so you're immediately up to date, even if you missed the beginning.",
    realTimeExample2:
      "Imagine Subject as a chat room. You only see messages sent after you join. BehaviorSubject is like a chat room that shows you the last message when you enter, so you have context for the current conversation. Both keep you informed, but BehaviorSubject gives you immediate context.",
    syntax: "new Subject(); new BehaviorSubject(initialValue);",
    codeExample:
      "// Subject\nconst subject = new Subject();\nsubject.subscribe(console.log);\nsubject.next('Hello'); // Only subscribers after this line will see 'Hello'\n\n// BehaviorSubject\nconst behaviorSubject = new BehaviorSubject('Initial');\nbehaviorSubject.subscribe(console.log); // Logs 'Initial' immediately",
  },
  {
    id: 43,
    question: "What is the purpose of ngZone?",
    answer:
      "NgZone in Angular is a service for executing functions inside or outside of the Angular zone. It helps Angular detect when asynchronous operations (like timers or AJAX calls) complete and trigger change detection.",
    example:
      "NgZone is used to optimize performance by controlling when change detection runs, especially for operations outside Angular's normal flow.",
    realTimeExample:
      "NgZone is like a border control at a country's entrance. Operations inside the border (Angular zone) automatically trigger customs checks (change detection). Operations outside the border need to go through customs manually. NgZone helps manage this process, ensuring that all relevant operations are properly checked.",
    realTimeExample2:
      "Imagine NgZone as a stage manager in a theater. Performances on stage (inside Angular zone) automatically get applause (change detection). Performances backstage (outside Angular zone) need to be announced to the audience. NgZone helps coordinate these announcements, making sure the audience reacts appropriately to all performances.",
    syntax:
      "constructor(private ngZone: NgZone) {}\nthis.ngZone.run(() => { ... });",
    codeExample:
      "constructor(private ngZone: NgZone) {}\n\nthis.ngZone.runOutsideAngular(() => {\n  setTimeout(() => {\n    this.ngZone.run(() => {\n      // This will trigger change detection\n      this.data = 'Updated!';\n    });\n  }, 1000);\n});",
  },
  {
    id: 44,
    question: "What is the difference between ngOnInit and ngAfterViewInit?",
    answer: [
      {
        aspect: "Timing",
        ngOnInit:
          "Called once after the first ngOnChanges. Used for component initialization.",
        ngAfterViewInit:
          "Called once after the component's view is fully initialized.",
      },
      {
        aspect: "View Access",
        ngOnInit: "ViewChild elements are not yet available.",
        ngAfterViewInit:
          "ViewChild elements are available and fully initialized.",
      },
    ],
    example:
      "ngOnInit is for setting up the component, ngAfterViewInit is for working with the rendered view.",
    realTimeExample:
      "ngOnInit is like the morning of your first day at a new job. You set up your desk (initialize component) and prepare for the day. ngAfterViewInit is like after lunch on that first day, when you've met your team (view is ready) and can start collaborating with them.",
    realTimeExample2:
      "Imagine ngOnInit as the pre-flight checklist for a plane. You verify all systems (initialize component) before takeoff. ngAfterViewInit is like after reaching cruising altitude, when all systems are running (view is ready) and you can start serving passengers (interact with the view).",
    syntax: "ngOnInit() { ... }, ngAfterViewInit() { ... }",
    codeExample:
      "ngOnInit() {\n  // Initialization logic\n  this.loadData();\n}\n\nngAfterViewInit() {\n  // View manipulation logic\n  this.scrollToElement();\n}",
  },
  {
    id: 45,
    question: "What is the purpose of ViewChild?",
    answer:
      "ViewChild in Angular is a decorator that allows you to get a reference to a child component, directive, or DOM element from the parent component class. This enables direct interaction with child elements.",
    example:
      "ViewChild is commonly used to access child components or DOM elements for direct manipulation or to call their methods.",
    realTimeExample:
      "ViewChild is like having a direct phone line to a specific department in a company. Instead of going through the main switchboard (DOM queries), you can call that department (child element) directly to get information or give instructions. This makes communication faster and more precise.",
    realTimeExample2:
      "Imagine ViewChild as a remote control for a specific TV in a large house. Instead of walking to each room to change the channel, you can directly control the TV in the living room (child component) from your bedroom (parent component). This gives you direct access to specific elements without affecting others.",
    syntax:
      "@ViewChild(ChildComponent) child: ChildComponent;\n@ViewChild('element') element: ElementRef;",
    codeExample:
      "@ViewChild(MyChildComponent) childComponent: MyChildComponent;\n@ViewChild('myInput') inputElement: ElementRef;\n\nngAfterViewInit() {\n  this.childComponent.someMethod();\n  this.inputElement.nativeElement.focus();\n}",
  },
  {
    id: 46,
    question: "What is Content Projection?",
    answer:
      "Content Projection in Angular is a technique that allows you to insert content from a parent component into a child component's template at a location specified by the <ng-content> tag. This enables the creation of more flexible and reusable components.",
    example:
      "Content projection is used to create wrapper components that can display dynamic content provided by their parent.",
    realTimeExample:
      "Content projection is like a picture frame with a removable back. You can insert any photo (content) you want into the frame (child component), and the frame will display it beautifully. The frame doesn't care what photo you use; it just provides a nice way to show it off.",
    realTimeExample2:
      "Imagine content projection as a sandwich. The bread (child component) stays the same, but you can put any filling (content) inside that you like. The sandwich component provides the structure, while the filling is provided by whoever is making the sandwich (parent component).",
    syntax: "<ng-content></ng-content>",
    codeExample:
      "// Child component template\n<div class='fancy-border'>\n  <ng-content></ng-content>\n</div>\n\n<!-- Parent component template -->\n<app-fancy-border>\n  <p>This content is projected!</p>\n</app-fancy-border>",
  },
  {
    id: 47,
    question: "What is the difference between ng-content and ng-template?",
    answer: [
      {
        aspect: "Purpose",
        ngContent:
          "Used for content projection; inserts external content into a component's template.",
        ngTemplate:
          "Defines a template that can be instantiated and inserted dynamically.",
      },
      {
        aspect: "Usage",
        ngContent:
          "Used in component templates to mark where projected content should appear.",
        ngTemplate:
          "Used to define reusable chunks of template that can be created dynamically.",
      },
    ],
    example:
      "ng-content is for static content projection, while ng-template is for dynamic template creation.",
    realTimeExample:
      "ng-content is like a blank spot on a form where you write your name. The form (child component) provides the structure, and you fill in your specific information (content). ng-template is like a stamp that you can use to create identical copies of a signature whenever you need them.",
    realTimeExample2:
      "Imagine ng-content as a socket in a lamp. You can plug in any compatible bulb (content), and the lamp will shine with that bulb's light. ng-template is like a mold for making light bulbs. You can use the mold to create identical bulbs whenever you need to insert them into different lamps.",
    syntax:
      "<ng-content></ng-content>, <ng-template #templateRef>...</ng-template>",
    codeExample:
      "// Using ng-content\n<!-- Child component -->\n<div>\n  <ng-content></ng-content>\n</div>\n\n<!-- Parent component -->\n<child-component>\n  <p>Projected content</p>\n</child-component>\n\n// Using ng-template\n<ng-template #myTemplate>\n  <p>Template content</p>\n</ng-template>",
  },
  {
    id: 48,
    question: "What is the purpose of HostBinding?",
    answer:
      "HostBinding in Angular is a decorator that allows you to bind a property of the host element (the element that matches the component's selector) to a property of the component class. This is useful for dynamically setting attributes, classes, or styles on the host element.",
    example:
      "HostBinding can be used to add classes or styles to the host element based on component state.",
    realTimeExample:
      "HostBinding is like a name tag that changes color based on your status. If you're 'available' (component state), the tag turns green. If you're 'busy', it turns red. The tag (host element) automatically updates to reflect your current status (component property).",
    realTimeExample2:
      "Imagine HostBinding as a chameleon that changes its skin color based on its environment. The chameleon (host element) automatically matches the color of the leaf it's on (component property), blending in seamlessly. This dynamic adaptation makes the chameleon (host element) always appropriate for its current situation.",
    syntax:
      "@HostBinding('class.active') isActive = true;\n@HostBinding('attr.role') role = 'button';",
    codeExample:
      "@Component({\n  selector: 'app-example',\n  template: `...`\n})\nexport class ExampleComponent {\n  @HostBinding('class.active') isActive = false;\n  @HostBinding('style.color') textColor = 'black';\n\n  toggleActive() {\n    this.isActive = !this.isActive;\n  }\n}",
  },
  {
    id: 49,
    question: "What is HostListener?",
    answer:
      "HostListener in Angular is a decorator that allows you to listen for events on the host element of a component or directive. When the event occurs, the decorated method is called with the event object.",
    example:
      "HostListener is commonly used to handle DOM events like click, mouseover, or keydown on the host element.",
    realTimeExample:
      "HostListener is like a doorbell on your front door (host element). When someone rings the bell (event occurs), you hear it (method is called) and can respond appropriately, like opening the door or checking who's there. It's a way to react to events happening on your component's main element.",
    realTimeExample2:
      "Imagine HostListener as a security alarm system in a house. Each sensor (event listener) is placed on doors and windows (host element). When a sensor is triggered (event occurs), the alarm sounds (method is called), alerting you to take action. This system keeps you informed about what's happening to your house (component).",
    syntax: "@HostListener('event') onEvent(event: Event) { ... }",
    codeExample:
      "@Directive({\n  selector: '[appHighlight]'\n})\nexport class HighlightDirective {\n  @HostListener('mouseenter') onMouseEnter() {\n    this.highlight('yellow');\n  }\n\n  @HostListener('mouseleave') onMouseLeave() {\n    this.highlight('');\n  }\n\n  private highlight(color: string) {\n    this.el.nativeElement.style.backgroundColor = color;\n  }\n}",
  },
];
// Make data available globally
window.intermediate = intermediate;
