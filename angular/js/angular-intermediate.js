// Angular Intermediate Level Q&A Data

let intermediate = [
  {
    id: 1,
    question: "Differentiate between var, const, and let variables.",
    answer: "Var can be changed and made again. Let can be changed but not made again. Const can't be changed or made again.",
    example: "var x = 1; x = 2; var x = 3; // ok, let y = 1; y = 2; // ok, but let y = 3; // error, const z = 1; z = 2; // error",
    realTimeExample: "Variables are like boxes for storing things. Var is like an old box that lets you change what's inside and even replace the box. Let is like a new box that lets you change inside but not replace the box. Const is like a locked box that you can't change at all.",
    codeExample: "var x = 1;\nvar x = 2; // ok\nlet y = 1;\nlet y = 2; // error\nconst z = 1;\nz = 2; // error"
  },
  {
    id: 2,
    question: "Differentiate between Angular and AngularJS",
    answer: "Angular uses TypeScript and supports phones. AngularJS uses JavaScript and doesn't support phones. Angular has components, AngularJS has MVC. Angular has dependency injection, AngularJS doesn't.",
    example: "AngularJS uses JavaScript like plain talk, Angular uses TypeScript like typed talk for better checks.",
    realTimeExample: "Angular is like a modern car with safety features, AngularJS is like an old car without them. Angular supports phones, AngularJS doesn't. Angular has parts like Lego blocks, AngularJS has a different way.",
    codeExample: "// AngularJS\nangular.module('app', []);\n\n// Angular\nimport { NgModule } from '@angular/core';\n@NgModule({})\nexport class AppModule {}"
  },
  {
    id: 3,
    question: "List out some commands.",
    answer: [
      "ng build --prod: Builds the application in production mode.",
      "ng serve --prod: Serves the application in production mode.",
    ],
    example: "ng build --prod creates a ready-to-use version of your app, ng serve --prod runs it for testing.",
    realTimeExample: "Commands are like instructions to a robot. Ng build --prod tells the robot to make a clean, fast version of the app. Ng serve --prod tells it to show the app in a special way for checking.",
    codeExample: "ng build --prod\nng serve --prod --port 4200"
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
    example: "Eager: all modules load at start. Lazy: modules load when needed.",
    realTimeExample: "Eager loading is like unpacking all toys at once, lazy loading is like unpacking toys only when you want to play with them.",
    codeExample: "// Lazy Loading\nconst routes: Routes = [\n  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }\n];"
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
    realTimeExample: "Cookies are like notes that remember things on your computer. Setting a cookie saves information, getting it reads the note, deleting it throws the note away.",
    codeExample: "import { CookieService } from 'ngx-cookie-service';\n\nconstructor(private cookies: CookieService) {}\n\nsetCookie() {\n  this.cookies.set('name', 'value');\n}\n\ngetCookie() {\n  return this.cookies.get('name');\n}\n\ndeleteCookie() {\n  this.cookies.delete('name');\n}"
  },
  {
    id: 6,
    question: "What is the difference between map and foreach?",
    answer: [
      {
        aspect: "Return value",
        map: "Returns a new array",
        foreach: "Returns undefined",
      },
      {
        aspect: "Use case",
        map: "Transforming array elements",
        foreach: "Performing side effects on elements",
      },
    ],
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
    ],
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
    ],
  },
  {
    id: 10,
    question: "What is Bazel in Angular?",
    answer:
      "Bazel is an advanced build and test tool. It supports a lot of features suitable for large projects, such as caching and parallel builds.",
  },
  {
    id: 11,
    question: "How to implement lazy loading in Angular?",
    answer:
      "Generate 2 modules named 'a' and 'b' using the following command: ng generate module modulea --route a --module app.module. Then configure routes in app-routing.module.ts for lazy loading:",
  },
  {
    id: 12,
    question: "What are Operators in RxJS?",
    answer:
      "Operators are pure functions that take an Observable as input and return another Observable. Examples include map, first, interval, catchError, retry, retryWhen.",
  },
  {
    id: 13,
    question: "What is an Observable in RxJS?",
    answer:
      "An Observable in RxJS is a stream that can emit multiple values over time, such as data from HTTP requests or user interactions.",
  },
  {
    id: 14,
    question:
      "What is the difference between Cold and Hot Observables in RxJS?",
    answer:
      "Cold Observables produce data only when subscribed to, whereas Hot Observables emit data whether or not there are subscribers.",
  },
  {
    id: 15,
    question: "What is the difference between scan() vs reduce()?",
    answer:
      "scan() emits all values from the source Observable, while reduce() emits only the final value after processing all emitted values.",
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
  },
  {
    id: 17,
    question: "What is TAP() in Angular?",
    answer:
      "The TAP() operator in RxJS allows you to perform side effects without affecting the stream of data.",
  },
  {
    id: 18,
    question: "What is the pipe function in Angular?",
    answer:
      "The pipe function is used to chain multiple operators in RxJS and is essential for composing transformations in observables.",
  },
  {
    id: 19,
    question: "What are interceptors?",
    answer:
      "Interceptors are used to intercept and modify HTTP requests and responses in Angular, typically for adding headers or logging.",
  },
  {
    id: 20,
    question: "What is authguard?",
    answer:
      "AuthGuard is used in Angular to prevent or allow access to certain routes based on conditions, such as whether a user is logged in.",
  },
  {
    id: 21,
    question: "What is Angular CLI?",
    answer:
      "Angular CLI (Command Line Interface) is a tool used to automate common tasks in Angular development, such as creating components, services, and deploying applications.",
  },
  {
    id: 22,
    question: "What is ivy?",
    answer:
      "Ivy is Angular's next-generation rendering engine, which provides better performance, smaller bundle sizes, and improved debugging.",
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
  },
  {
    id: 24,
    question: "What is transpiling in Angular?",
    answer:
      "Transpiling refers to the process of converting TypeScript code to JavaScript, allowing it to run in any browser.",
  },
  {
    id: 25,
    question: "List some of the tools for testing Angular applications",
    answer: ["Karma", "Mocha", "Jasmine", "Protractor"],
  },
  {
    id: 26,
    question: "What are some disadvantages of using Angular?",
    answer:
      "Some disadvantages include slower load times for smaller applications, the complexity of learning and using all its features, and difficulties with SEO optimization.",
  },
  {
    id: 27,
    question: "What is HttpClient, and what are its benefits?",
    answer:
      "HttpClient is a service in Angular for making HTTP requests, offering features like request/response interceptors, error handling, and response transformation.",
  },
  {
    id: 28,
    question: "What is multicasting in Angular?",
    answer:
      "Multicasting in Angular allows sharing the same Observable execution between multiple subscribers.",
  },
  {
    id: 29,
    question: "What are HttpInterceptors in Angular?",
    answer:
      "HttpInterceptors allow you to inspect and transform HTTP requests and responses globally in your application.",
  },
  {
    id: 30,
    question:
      "What is the difference between an Annotation and a Decorator in Angular?",
    answer:
      "Annotations are metadata used to annotate classes, while decorators are used to modify class behavior without altering the original source code.",
  },
  {
    id: 31,
    question: "@Injectable",
    answer:
      "@Injectable decorator tells Angular that a class can be used for dependency injection.",
  },
  {
    id: 32,
    question: "@Inject()",
    answer:
      "It manually specifies how Angular should inject a dependency into a constructor.",
  },
  {
    id: 33,
    question: "What do you understand as an observer in Angular?",
    answer:
      "An observer listens for notifications from an Observable, reacting to data changes or events.",
  },
  {
    id: 34,
    question: "What is a router outlet?",
    answer:
      "The RouterOutlet directive in Angular serves as a placeholder in templates where the router will display the activated components.",
  },
  {
    id: 35,
    question: "Explain the use of the 'this' operator in JavaScript",
    answer:
      "The 'this' operator refers to the current context in which a function is executed, often used to reference the object the function is a part of.",
  },
  {
    id: 36,
    question: "What do you understand by 'Closure' in JavaScript?",
    answer:
      "A closure is a function that retains access to its lexical scope, even when the function is executed outside that scope.",
  },
  {
    id: 37,
    question: "Explain the use of the 'TypeOf' operator in JavaScript.",
    answer:
      "The 'typeof' operator is used to determine the type of a variable or expression and returns a string indicating the type.",
  },
  {
    id: 38,
    question: "What are guards in angular?",
    answer:
      "Guards are used to control access to routes. They can prevent or allow route activation based on conditions like user authentication.",
  },
  {
    id: 39,
    question: "What are the different types of guards in Angular?",
    answer: [
      "CanActivate",
      "CanActivateChild",
      "CanDeactivate",
      "Resolve",
      "CanLoad",
    ],
  },
  {
    id: 40,
    question: "What is Change Detection in Angular?",
    answer:
      "Change detection is the process Angular uses to check when data changes and update the view accordingly.",
  },
  {
    id: 41,
    question: "What is OnPush Change Detection Strategy?",
    answer:
      "OnPush strategy only checks for changes when input properties change or when an event occurs, improving performance.",
  },
  {
    id: 42,
    question: "What is the difference between Subject and BehaviorSubject?",
    answer:
      "Subject does not have an initial value, while BehaviorSubject has an initial value and emits it to new subscribers.",
  },
  {
    id: 43,
    question: "What is the purpose of ngZone?",
    answer:
      "NgZone helps Angular run change detection when asynchronous operations occur outside Angular's context.",
  },
  {
    id: 44,
    question: "What is the difference between ngOnInit and ngAfterViewInit?",
    answer:
      "ngOnInit is called after component initialization, ngAfterViewInit after the view and child views are initialized.",
  },
  {
    id: 45,
    question: "What is the purpose of ViewChild?",
    answer:
      "ViewChild decorator allows accessing child components or DOM elements in the component class.",
  },
  {
    id: 46,
    question: "What is Content Projection?",
    answer:
      "Content projection allows passing content from parent to child components using ng-content.",
  },
  {
    id: 47,
    question: "What is the difference between ng-content and ng-template?",
    answer:
      "ng-content projects content into a component, ng-template defines reusable templates.",
  },
  {
    id: 48,
    question: "What is the purpose of HostBinding?",
    answer:
      "HostBinding binds a property to the host element of a directive or component.",
  },
  {
    id: 49,
    question: "What is HostListener?",
    answer:
      "HostListener listens for events on the host element and calls a method when they occur.",
  },
];

// Make data available globally
window.intermediate = intermediate;
