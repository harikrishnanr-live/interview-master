// Angular Q&A Data - Categorized by difficulty

let beginner = [
  {
    id: 1,
    question: "What is Angular?",
    answer: "Angular is a TypeScript-based free and open-source web application framework led by Google.",
  },
  {
    id: 2,
    question: "How to enable AnimationsModule in Angular?",
    answer: "To enable AnimationsModule, you need to import BrowserAnimationsModule in your app.module.ts.",
  },
  {
    id: 3,
    question: "How to disable AnimationsModule in Angular?",
    answer: "To disable animations, you import NoopAnimationsModule in your app.module.ts instead of BrowserAnimationsModule.",
  },
  {
    id: 4,
    question: "What is @NgModule in app.module.ts?",
    answer: "@NgModule is one of the decorators in Angular. It takes a metadata object that tells Angular how to compile and launch the application.",
  },
  {
    id: 6,
    question: "What are declarations in Angular in app.module.ts?",
    answer: "Declarations in Angular list the components, directives, and pipes that belong to this module.",
  },
  {
    id: 7,
    question: "What are the imports in Angular in app.module.ts?",
    answer: "The imports array in app.module.ts is where you include other Angular modules that your module depends on.",
  },
  {
    id: 8,
    question: "What are the providers in app.module.ts?",
    answer: "Providers are services or classes that Angular can inject into components and other services. They are listed in the providers array.",
  },
  {
    id: 9,
    question: "What is BrowserModule in app.module.ts?",
    answer: "BrowserModule is required for running your Angular application in a browser. It is imported from @angular/platform-browser.",
  },
  {
    id: 10,
    question: "What is CommonModule in app.module.ts?",
    answer: "CommonModule is used when you want to use basic Angular directives like NgIf, NgFor in your modules.",
  },
  {
    id: 12,
    question: "What is dependency injection in Angular?",
    answer: "Dependency injection is a design pattern where components and services are provided with their dependencies, typically services, without creating them directly.",
  },
  {
    id: 13,
    question: "How to serve in production mode?",
    answer: "To serve the application in production mode, run the command 'ng serve --prod'.",
  },
  {
    id: 16,
    question: "What are decorators in Angular?",
    answer: "Decorators are functions used to add metadata to classes, methods, or properties. In Angular, common decorators include @Component, @Injectable, and @NgModule.",
  },
  {
    id: 17,
    question: "What are Observables in Angular?",
    answer: "Observables are streams of data that can emit multiple values over time. Angular uses Observables for asynchronous operations like HTTP requests.",
  },
  {
    id: 18,
    question: "What are Promises?",
    answer: "A Promise is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value. Unlike Observables, Promises emit a single value.",
  },
  {
    id: 19,
    question: "What is DOM?",
    answer: "The Document Object Model (DOM) is an interface for web documents. It allows JavaScript to manipulate the structure, style, and content of web pages.",
  },
  {
    id: 20,
    question: "What are DOM elements?",
    answer: "DOM elements in Angular typically refer to HTML elements that are manipulated using ElementRef and TemplateRef in templates.",
  },
  {
    id: 21,
    question: "Explain the syntax of app.module.ts",
    answer: "@NgModule({declarations: [], imports: [], providers: [], bootstrap: [AppComponent]})",
  },
  {
    id: 22,
    question: "Explain the syntax of app.component.ts",
    answer: "@Component({selector: 'app-dashboard', templateUrl: '', styleUrls: ['']})",
  },
  {
    id: 23,
    question: "Explain the syntax of services.",
    answer: "@Injectable({providedIn: 'root'}) export class ApiServicesService { }",
  },
  {
    id: 26,
    question: "What are Directives in Angular?",
    answer: "Directives are classes that modify the DOM in Angular applications. There are three types: Component Directives, Structural Directives, and Attribute Directives.",
  },
  {
    id: 27,
    question: "What is data binding?",
    answer: "Data binding in Angular is the mechanism of connecting a component's data to its template and vice versa.",
  },
  {
    id: 28,
    question: "What are the forms of data binding?",
    answer: [
      "String interpolation: {{ expression }}",
      "Property binding: [property]='expression'",
      "Event binding: (event)='method()'",
      "Two-way binding: [(ngModel)]='property'",
    ],
  },
  {
    id: 29,
    question: "What is String Interpolation in Angular?",
    answer: "String Interpolation is a type of one-way data binding where data from the component is displayed in the HTML view, using the syntax {{ data }}.",
  },
  {
    id: 30,
    question: "What is property binding?",
    answer: "Property binding is a one-way binding mechanism in Angular where data from the component is passed to the HTML element's property, such as [src]='imageUrl'.",
  },
  {
    id: 31,
    question: "What is event binding?",
    answer: "Event binding is used to listen for events in the template, such as (click)='method()'. It allows you to trigger a method in the component when a specific event happens.",
  },
  {
    id: 32,
    question: "What is two-way binding?",
    answer: "Two-way binding allows automatic synchronization of data between the component and the view. It is implemented with the [(ngModel)] directive.",
  },
  {
    id: 33,
    question: "What are modules?",
    answer: "Modules in Angular are used to organize an application. They group components, directives, pipes, and services into cohesive blocks of functionality.",
  },
  {
    id: 35,
    question: "What are lifecycle hooks in Angular?",
    answer: "Lifecycle hooks are methods that Angular calls during different phases of a component's lifecycle, such as ngOnInit, ngOnDestroy, ngOnChanges, etc.",
  },
  {
    id: 36,
    question: "What are components in Angular?",
    answer: "Components are the basic building blocks of an Angular application. Each component consists of a TypeScript class, an HTML template, and a CSS file.",
  },
  {
    id: 37,
    question: "What are pipes in Angular?",
    answer: "Pipes are used to transform data in Angular templates. They can format dates, numbers, and other types of data.",
  },
  {
    id: 39,
    question: "What is a parameterized pipe?",
    answer: "A parameterized pipe takes arguments to modify the data before displaying it, such as a custom pipe that transforms a value based on parameters.",
  },
  {
    id: 40,
    question: "What is the purpose of AsyncPipe in Angular?",
    answer: "AsyncPipe subscribes to an Observable or a Promise and returns the latest value emitted by it. It also handles unsubscription automatically.",
  },
  {
    id: 41,
    question: "What are filters in Angular?",
    answer: "Filters in Angular allow for transforming the display value of expressions in templates, such as filtering arrays or formatting text.",
  },
  {
    id: 43,
    question: "What is a Wildcard Route in Angular?",
    answer: "The Wildcard Route is used in Angular applications to handle invalid URLs, redirecting them to a 404 or a default route.",
  },
  {
    id: 46,
    question: "What are interfaces in Angular?",
    answer: "Interfaces are used at compile-time to define a contract for class instances, ensuring that expected data follows a particular structure.",
  },
  {
    id: 47,
    question: "What is a Built-in directive?",
    answer: "Some common built-in directives are ngIf, ngSwitch, ngFor, ngStyle, ngClass, ngModel.",
  },
  {
    id: 48,
    question: "What is an Angular custom directive?",
    answer: "Angular allows us to create custom directives when we need additional behavior not provided by the built-in directives.",
  },
  {
    id: 78,
    question: "What are Angular services?",
    answer: "Services in Angular are singleton objects used to organize and share data, logic, or functions across components in an application.",
  },
  {
    id: 99,
    question: "What are Angular templates?",
    answer: "Templates in Angular define a component's view using HTML, Angular directives, and binding syntax.",
  },
];

let intermediate = [
  {
    id: 5,
    question: "Differentiate between var, const, and let variables.",
    answer: [
      {
        term: "Var",
        definition: "var variables can be re-declared and updated.",
      },
      {
        term: "Let",
        definition: "let can be updated but not re-declared.",
      },
      {
        term: "Const",
        definition: "const cannot be updated or re-declared.",
      },
    ],
  },
  {
    id: 11,
    question: "Differentiate between Angular and AngularJS",
    answer: [
      {
        aspect: "Language",
        angular: "TypeScript",
        angularjs: "JavaScript",
      },
      {
        aspect: "Mobile support",
        angular: "Supports",
        angularjs: "Not supported",
      },
      {
        aspect: "Architecture",
        angular: "Uses components and directives",
        angularjs: "Model-View-Controller design",
      },
      {
        aspect: "Dependency Injection",
        angular: "Supports",
        angularjs: "Doesn't support",
      },
    ],
  },
  {
    id: 14,
    question: "List out some commands.",
    answer: [
      "ng build --prod: Builds the application in production mode.",
      "ng serve --prod: Serves the application in production mode.",
    ],
  },
  {
    id: 15,
    question: "What is Eager and Lazy Loading?",
    answer: [
      {
        term: "Eager Loading",
        definition: "Eager loading means loading all the modules upfront before the application starts.",
      },
      {
        term: "Lazy Loading",
        definition: "Lazy loading loads modules only when they are needed, improving the initial load time of the application.",
      },
    ],
  },
  {
    id: 24,
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
  },
  {
    id: 25,
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
    id: 34,
    question: "What are SYNCHRONOUS and ASYNCHRONOUS?",
    answer: {
      SYNCHRONOUS: "Synchronous operations are executed one after another, blocking the execution of subsequent code until the current operation finishes.",
      ASYNCHRONOUS: "Asynchronous operations allow other code to execute while waiting for a task to finish, such as HTTP requests or timers.",
    },
  },
  {
    id: 38,
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
    id: 42,
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
    id: 44,
    question: "What is Bazel in Angular?",
    answer: "Bazel is an advanced build and test tool. It supports a lot of features suitable for large projects, such as caching and parallel builds.",
  },
  {
    id: 45,
    question: "How to implement lazy loading in Angular?",
    answer: "Generate 2 modules named 'a' and 'b' using the following command: ng generate module modulea --route a --module app.module. Then configure routes in app-routing.module.ts for lazy loading:",
  },
  {
    id: 49,
    question: "What are Operators in RxJS?",
    answer: "Operators are pure functions that take an Observable as input and return another Observable. Examples include map, first, interval, catchError, retry, retryWhen.",
  },
  {
    id: 50,
    question: "What is an Observable in RxJS?",
    answer: "An Observable in RxJS is a stream that can emit multiple values over time, such as data from HTTP requests or user interactions.",
  },
  {
    id: 51,
    question: "What is the difference between Cold and Hot Observables in RxJS?",
    answer: "Cold Observables produce data only when subscribed to, whereas Hot Observables emit data whether or not there are subscribers.",
  },
  {
    id: 52,
    question: "What is the difference between scan() vs reduce()?",
    answer: "scan() emits all values from the source Observable, while reduce() emits only the final value after processing all emitted values.",
  },
  {
    id: 53,
    question: "How to pass data between components?",
    answer: [
      {
        term: "Parent to Child",
        definition: "Use @Input() for passing data from parent to child component.",
      },
      {
        term: "Child to Parent",
        definition: "Use @Output() with EventEmitter to pass data from child to parent component.",
      },
      {
        term: "Unrelated Components",
        definition: "Use a shared service to pass data between unrelated components.",
      },
    ],
  },
  {
    id: 54,
    question: "What is TAP() in Angular?",
    answer: "The TAP() operator in RxJS allows you to perform side effects without affecting the stream of data.",
  },
  {
    id: 55,
    question: "What is the pipe function in Angular?",
    answer: "The pipe function is used to chain multiple operators in RxJS and is essential for composing transformations in observables.",
  },
  {
    id: 56,
    question: "What are interceptors?",
    answer: "Interceptors are used to intercept and modify HTTP requests and responses in Angular, typically for adding headers or logging.",
  },
  {
    id: 57,
    question: "What is authguard?",
    answer: "AuthGuard is used in Angular to prevent or allow access to certain routes based on conditions, such as whether a user is logged in.",
  },
  {
    id: 58,
    question: "What is Angular CLI?",
    answer: "Angular CLI (Command Line Interface) is a tool used to automate common tasks in Angular development, such as creating components, services, and deploying applications.",
  },
  {
    id: 59,
    question: "What is ivy?",
    answer: "Ivy is Angular's next-generation rendering engine, which provides better performance, smaller bundle sizes, and improved debugging.",
  },
  {
    id: 60,
    question: "What is the difference between ElementRef, TemplateRef, and ViewContainerRef?",
    answer: [
      {
        term: "ElementRef",
        definition: "Provides a wrapper around a DOM element to access it.",
      },
      {
        term: "TemplateRef",
        definition: "Represents an Angular template that can be used in structural directives.",
      },
      {
        term: "ViewContainerRef",
        definition: "Represents a container where views can be dynamically inserted.",
      },
    ],
  },
  {
    id: 61,
    question: "What is transpiling in Angular?",
    answer: "Transpiling refers to the process of converting TypeScript code to JavaScript, allowing it to run in any browser.",
  },
  {
    id: 62,
    question: "List some of the tools for testing Angular applications",
    answer: ["Karma", "Mocha", "Jasmine", "Protractor"],
  },
  {
    id: 63,
    question: "What are some disadvantages of using Angular?",
    answer: "Some disadvantages include slower load times for smaller applications, the complexity of learning and using all its features, and difficulties with SEO optimization.",
  },
  {
    id: 64,
    question: "What is HttpClient, and what are its benefits?",
    answer: "HttpClient is a service in Angular for making HTTP requests, offering features like request/response interceptors, error handling, and response transformation.",
  },
  {
    id: 65,
    question: "What is multicasting in Angular?",
    answer: "Multicasting in Angular allows sharing the same Observable execution between multiple subscribers.",
  },
  {
    id: 66,
    question: "What are HttpInterceptors in Angular?",
    answer: "HttpInterceptors allow you to inspect and transform HTTP requests and responses globally in your application.",
  },
  {
    id: 67,
    question: "What is the difference between an Annotation and a Decorator in Angular?",
    answer: "Annotations are metadata used to annotate classes, while decorators are used to modify class behavior without altering the original source code.",
  },
  {
    id: 68,
    question: "@Injectable",
    answer: "@Injectable decorator tells Angular that a class can be used for dependency injection.",
  },
  {
    id: 69,
    question: "@Inject()",
    answer: "It manually specifies how Angular should inject a dependency into a constructor.",
  },
  {
    id: 70,
    question: "What do you understand as an observer in Angular?",
    answer: "An observer listens for notifications from an Observable, reacting to data changes or events.",
  },
  {
    id: 71,
    question: "What is a router outlet?",
    answer: "The RouterOutlet directive in Angular serves as a placeholder in templates where the router will display the activated components.",
  },
  {
    id: 72,
    question: "Explain the use of the 'this' operator in JavaScript",
    answer: "The 'this' operator refers to the current context in which a function is executed, often used to reference the object the function is a part of.",
  },
  {
    id: 73,
    question: "What do you understand by 'Closure' in JavaScript?",
    answer: "A closure is a function that retains access to its lexical scope, even when the function is executed outside that scope.",
  },
  {
    id: 74,
    question: "Explain the use of the 'TypeOf' operator in JavaScript.",
    answer: "The 'typeof' operator is used to determine the type of a variable or expression and returns a string indicating the type.",
  },
  {
    id: 75,
    question: "What are guards in angular?",
    answer: "Guards are used to control access to routes. They can prevent or allow route activation based on conditions like user authentication.",
  },
  {
    id: 76,
    question: "What are the different types of guards in Angular?",
    answer: [
      "CanActivate",
      "CanActivateChild",
      "CanDeactivate",
      "Resolve",
      "CanLoad",
    ],
  },
];

let advanced = [
  {
    id: 77,
    question: "What is Angular Universal?",
    answer: "Angular Universal is a technology used for server-side rendering (SSR) of Angular applications, improving performance and SEO.",
  },
  {
    id: 79,
    question: "What is Change Detection in Angular?",
    answer: "Change Detection is the mechanism by which Angular determines what parts of the user interface need to be updated when application data changes.",
  },
  {
    id: 80,
    question: "What is Zone.js in Angular?",
    answer: "Zone.js is a library used by Angular to detect asynchronous operations and trigger change detection automatically.",
  },
  {
    id: 81,
    question: "What are Angular Schematics?",
    answer: "Schematics are templates for code scaffolding, used by Angular CLI to generate components, services, and modules quickly.",
  },
  {
    id: 82,
    question: "What is the difference between Reactive and Template-driven forms?",
    answer: [
      {
        term: "Reactive Forms",
        definition: "They provide more control, use explicit and immutable data structures, and are built around RxJS observables.",
      },
      {
        term: "Template-driven Forms",
        definition: "They are simpler, rely on directives in the template, and use two-way binding with ngModel.",
      },
    ],
  },
  {
    id: 83,
    question: "What are Angular Animations?",
    answer: "Angular Animations allow the creation of sophisticated animations via the Angular animation library using states and transitions.",
  },
  {
    id: 84,
    question: "How do you optimize performance in Angular applications?",
    answer: [
      "Use Ahead-of-Time (AOT) compilation",
      "Implement Lazy Loading",
      "Use OnPush change detection strategy",
      "Avoid unnecessary watchers and pipes",
      "Enable server-side rendering with Angular Universal",
    ],
  },
  {
    id: 85,
    question: "What is the difference between ngOnInit() and constructor()?",
    answer: [
      {
        aspect: "constructor",
        definition: "Used to initialize class members and inject dependencies.",
      },
      {
        aspect: "ngOnInit",
        definition: "A lifecycle hook called by Angular after Angular first displays the component's data-bound properties.",
      },
    ],
  },
  {
    id: 86,
    question: "What is the use of ngOnChanges() lifecycle hook?",
    answer: "ngOnChanges() is invoked when an input-bound property in a directive or component changes.",
  },
  {
    id: 87,
    question: "What are Angular Material components?",
    answer: "Angular Material provides pre-built UI components such as buttons, dialogs, toolbars, and form controls, following Material Design guidelines.",
  },
  {
    id: 88,
    question: "What is ViewEncapsulation in Angular?",
    answer: "ViewEncapsulation determines how styles defined in a component affect the DOM. Angular provides options: Emulated, None, and ShadowDom.",
  },
  {
    id: 89,
    question: "What are standalone components in Angular?",
    answer: "Standalone components are Angular components that can exist independently without needing to be declared inside a module.",
  },
  {
    id: 90,
    question: "What is the difference between TemplateRef and ViewChild?",
    answer: [
      {
        term: "TemplateRef",
        definition: "Represents an embedded Angular template that can be programmatically rendered.",
      },
      {
        term: "ViewChild",
        definition: "A decorator that gives access to a child component, directive, or DOM element inside a parent component.",
      },
    ],
  },
  {
    id: 91,
    question: "What is trackBy in Angular ngFor?",
    answer: "trackBy is used in *ngFor to optimize rendering by tracking items with a unique identifier, preventing the re-rendering of unchanged DOM elements.",
  },
  {
    id: 92,
    question: "What is Angular RouterModule?",
    answer: "RouterModule is a library in Angular responsible for routing and navigation between different components in a single-page application.",
  },
  {
    id: 93,
    question: "What are Angular Resolvers?",
    answer: "Resolvers in Angular are used to pre-fetch data before navigating to a route, ensuring that the required data is available when the component loads.",
  },
  {
    id: 94,
    question: "What is ngZone in Angular?",
    answer: "ngZone is a service that helps Angular track and manage asynchronous operations and run change detection whenever an async task completes.",
  },
  {
    id: 95,
    question: "What is the difference between BehaviorSubject and Subject in RxJS?",
    answer: [
      {
        aspect: "Subject",
        definition: "Does not hold a current value and only emits new values to subscribers.",
      },
      {
        aspect: "BehaviorSubject",
        definition: "Stores the latest value and emits it immediately to new subscribers.",
      },
    ],
  },
  {
    id: 96,
    question: "What is tree-shaking in Angular?",
    answer: "Tree-shaking is a process of removing unused code during the build process, leading to smaller bundle sizes.",
  },
  {
    id: 97,
    question: "What are Angular Signals?",
    answer: "Signals are a reactive state management system introduced in Angular 16 that provide fine-grained reactivity without heavy reliance on change detection.",
  },
  {
    id: 98,
    question: "What are Angular ErrorHandlers?",
    answer: "ErrorHandler is a global service in Angular that captures unhandled exceptions across the whole application, allowing custom error logging and processing.",
  },
  {
    id: 100,
    question: "What is Angular's OnPush change detection strategy?",
    answer: "OnPush change detection strategy tells Angular to check a component's view only when its inputs change or an event triggers inside it, reducing unnecessary checks.",
  },
];

// Make data available globally
window.beginner = beginner;
window.intermediate = intermediate;
window.advanced = advanced;
