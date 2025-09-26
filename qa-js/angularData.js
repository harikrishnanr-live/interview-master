let angularData = [
    {
        "id": 1,
        "question": "What is Angular?",
        "answer": "Angular is a TypeScript-based free and open-source web application framework led by Google."
    },
    {
        "id": 2,
        "question": "How to enable AnimationsModule in Angular?",
        "answer": "To enable AnimationsModule, you need to import BrowserAnimationsModule in your app.module.ts."
    },
    {
        "id": 3,
        "question": "How to disable AnimationsModule in Angular?",
        "answer": "To disable animations, you import NoopAnimationsModule in your app.module.ts instead of BrowserAnimationsModule."
    },
    {
        "id": 4,
        "question": "What is @NgModule in app.module.ts?",
        "answer": "@NgModule is one of the decorators in Angular. It takes a metadata object that tells Angular how to compile and launch the application."
    },
    {
        "id": 5,
        "question": "Differentiate between var, const, and let variables.",
        "answer": [
            {
                "term": "Var",
                "definition": "var variables can be re-declared and updated."
            },
            {
                "term": "Let",
                "definition": "let can be updated but not re-declared."
            },
            {
                "term": "Const",
                "definition": "const cannot be updated or re-declared."
            }
        ]
    },
    {
        "id": 6,
        "question": "What are declarations in Angular in app.module.ts?",
        "answer": "Declarations in Angular list the components, directives, and pipes that belong to this module."
    },
    {
        "id": 7,
        "question": "What are the imports in Angular in app.module.ts?",
        "answer": "The imports array in app.module.ts is where you include other Angular modules that your module depends on."
    },
    {
        "id": 8,
        "question": "What are the providers in app.module.ts?",
        "answer": "Providers are services or classes that Angular can inject into components and other services. They are listed in the providers array."
    },
    {
        "id": 9,
        "question": "What is BrowserModule in app.module.ts?",
        "answer": "BrowserModule is required for running your Angular application in a browser. It is imported from @angular/platform-browser."
    },
    {
        "id": 10,
        "question": "What is CommonModule in app.module.ts?",
        "answer": "CommonModule is used when you want to use basic Angular directives like NgIf, NgFor in your modules."
    },
    {
        "id": 11,
        "question": "Differentiate between Angular and AngularJS",
        "answer": [
            {
                "aspect": "Language",
                "angular": "TypeScript",
                "angularjs": "JavaScript"
            },
            {
                "aspect": "Mobile support",
                "angular": "Supports",
                "angularjs": "Not supported"
            },
            {
                "aspect": "Architecture",
                "angular": "Uses components and directives",
                "angularjs": "Model-View-Controller design"
            },
            {
                "aspect": "Dependency Injection",
                "angular": "Supports",
                "angularjs": "Doesn't support"
            }
        ]
    },
    {
        "id": 12,
        "question": "What is dependency injection in Angular?",
        "answer": "Dependency injection is a design pattern where components and services are provided with their dependencies, typically services, without creating them directly."
    },
    {
        "id": 13,
        "question": "How to serve in production mode?",
        "answer": "To serve the application in production mode, run the command 'ng serve --prod'."
    },
    {
        "id": 14,
        "question": "List out some commands.",
        "answer": [
            "ng build --prod: Builds the application in production mode.",
            "ng serve --prod: Serves the application in production mode."
        ]
    },
    {
        "id": 15,
        "question": "What is Eager and Lazy Loading?",
        "answer": [
            {
                "term": "Eager Loading",
                "definition": "Eager loading means loading all the modules upfront before the application starts."
            },
            {
                "term": "Lazy Loading",
                "definition": "Lazy loading loads modules only when they are needed, improving the initial load time of the application."
            }
        ]
    },
    {
        "id": 16,
        "question": "What are decorators in Angular?",
        "answer": "Decorators are functions used to add metadata to classes, methods, or properties. In Angular, common decorators include @Component, @Injectable, and @NgModule."
    },
    {
        "id": 17,
        "question": "What are Observables in Angular?",
        "answer": "Observables are streams of data that can emit multiple values over time. Angular uses Observables for asynchronous operations like HTTP requests."
    },
    {
        "id": 18,
        "question": "What are Promises?",
        "answer": "A Promise is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value. Unlike Observables, Promises emit a single value."
    },
    {
        "id": 19,
        "question": "What is DOM?",
        "answer": "The Document Object Model (DOM) is an interface for web documents. It allows JavaScript to manipulate the structure, style, and content of web pages."
    },
    {
        "id": 20,
        "question": "What are DOM elements?",
        "answer": "DOM elements in Angular typically refer to HTML elements that are manipulated using ElementRef and TemplateRef in templates."
    },
    {
        "id": 21,
        "question": "Explain the syntax of app.module.ts",
        "answer": "@NgModule({declarations: [], imports: [], providers: [], bootstrap: [AppComponent]})"
    },
    {
        "id": 22,
        "question": "Explain the syntax of app.component.ts",
        "answer": "@Component({selector: 'app-dashboard', templateUrl: '', styleUrls: ['']})"
    },
    {
        "id": 23,
        "question": "Explain the syntax of services.",
        "answer": "@Injectable({providedIn: 'root'}) export class ApiServicesService { }"
    },
    {
        "id": 24,
        "question": "How to set cookies in Angular?",
        "answer": [
            {
                "term": "set",
                "definition": "cookies.set('cookieName', 'cookieValue')"
            },
            {
                "term": "get",
                "definition": "cookies.get('cookieName')"
            },
            {
                "term": "delete",
                "definition": "cookies.delete('cookieName')"
            }
        ]
    },
    {
        "id": 25,
        "question": "What is the difference between map and foreach?",
        "answer": [
            {
                "aspect": "Return value",
                "map": "Returns a new array",
                "foreach": "Returns undefined"
            },
            {
                "aspect": "Use case",
                "map": "Transforming array elements",
                "foreach": "Performing side effects on elements"
            }
        ]
    },
    {
        "id": 26,
        "question": "What are Directives in Angular?",
        "answer": "Directives are classes that modify the DOM in Angular applications. There are three types: Component Directives, Structural Directives, and Attribute Directives."
    },
    {
        "id": 27,
        "question": "What is data binding?",
        "answer": "Data binding in Angular is the mechanism of connecting a component's data to its template and vice versa."
    },
    {
        "id": 28,
        "question": "What are the forms of data binding?",
        "answer": [
            "String interpolation: {{ expression }}",
            "Property binding: [property]='expression'",
            "Event binding: (event)='method()'",
            "Two-way binding: [(ngModel)]='property'"
        ]
    },
    {
        "id": 29,
        "question": "What is String Interpolation in Angular?",
        "answer": "String Interpolation is a type of one-way data binding where data from the component is displayed in the HTML view, using the syntax {{ data }}."
    },
    {
        "id": 30,
        "question": "What is property binding?",
        "answer": "Property binding is a one-way binding mechanism in Angular where data from the component is passed to the HTML element's property, such as [src]='imageUrl'."
    },
    {
        "id": 31,
        "question": "What is event binding?",
        "answer": "Event binding is used to listen for events in the template, such as (click)='method()'. It allows you to trigger a method in the component when a specific event happens."
    },
    {
        "id": 32,
        "question": "What is two-way binding?",
        "answer": "Two-way binding allows automatic synchronization of data between the component and the view. It is implemented with the [(ngModel)] directive."
    },
    {
        "id": 33,
        "question": "What are modules?",
        "answer": "Modules in Angular are used to organize an application. They group components, directives, pipes, and services into cohesive blocks of functionality."
    },
    {
        "id": 34,
        "question": "What are SYNCHRONOUS and ASYNCHRONOUS?",
        "answer": {
            "SYNCHRONOUS": "Synchronous operations are executed one after another, blocking the execution of subsequent code until the current operation finishes.",
            "ASYNCHRONOUS": "Asynchronous operations allow other code to execute while waiting for a task to finish, such as HTTP requests or timers."
        }
    },
    {
        "id": 35,
        "question": "What are lifecycle hooks in Angular?",
        "answer": "Lifecycle hooks are methods that Angular calls during different phases of a component's lifecycle, such as ngOnInit, ngOnDestroy, ngOnChanges, etc."
    },
    {
        "id": 36,
        "question": "What are components in Angular?",
        "answer": "Components are the basic building blocks of an Angular application. Each component consists of a TypeScript class, an HTML template, and a CSS file."
    },
    {
        "id": 37,
        "question": "What are pipes in Angular?",
        "answer": "Pipes are used to transform data in Angular templates. They can format dates, numbers, and other types of data."
    },
    {
        "id": 38,
        "question": "What is the difference between pure and impure pipes?",
        "answer": [
            {
                "aspect": "Reevaluation",
                "pure": "Only when input data changes",
                "impure": "Whenever any change occurs in the component"
            }
        ]
    },
    {
        "id": 39,
        "question": "What is a parameterized pipe?",
        "answer": "A parameterized pipe takes arguments to modify the data before displaying it, such as a custom pipe that transforms a value based on parameters."
    },
    {
        "id": 40,
        "question": "What is the purpose of AsyncPipe in Angular?",
        "answer": "AsyncPipe subscribes to an Observable or a Promise and returns the latest value emitted by it. It also handles unsubscription automatically."
    },
    {
        "id": 41,
        "question": "What are filters in Angular?",
        "answer": "Filters in Angular allow for transforming the display value of expressions in templates, such as filtering arrays or formatting text."
    },
    {
        "id": 42,
        "question": "What is the difference between AOT and JIT?",
        "answer": [
            {
                "aspect": "Timing",
                "aot": "During build phase",
                "jit": "At runtime"
            },
            {
                "aspect": "Performance",
                "aot": "Faster startup, smaller bundle",
                "jit": "Slower startup, larger bundle"
            }
        ]
    },
    {
        "id": 43,
        "question": "What is a Wildcard Route in Angular?",
        "answer": "The Wildcard Route is used in Angular applications to handle invalid URLs, redirecting them to a 404 or a default route."
    },
    {
        "id": 44,
        "question": "What is Bazel in Angular?",
        "answer": "Bazel is an advanced build and test tool. It supports a lot of features suitable for large projects, such as caching and parallel builds."
    },
    {
        "id": 45,
        "question": "How to implement lazy loading in Angular?",
        "answer": "Generate 2 modules named 'a' and 'b' using the following command: ng generate module modulea --route a --module app.module. Then configure routes in app-routing.module.ts for lazy loading:"
    },
    {
        "id": 46,
        "question": "What are interfaces in Angular?",
        "answer": "Interfaces are used at compile-time to define a contract for class instances, ensuring that expected data follows a particular structure."
    },
    {
        "id": 47,
        "question": "What is a Built-in directive?",
        "answer": "Some common built-in directives are ngIf, ngSwitch, ngFor, ngStyle, ngClass, ngModel."
    },
    {
        "id": 48,
        "question": "What is an Angular custom directive?",
        "answer": "Angular allows us to create custom directives when we need additional behavior not provided by the built-in directives."
    },
    {
        "id": 49,
        "question": "What are Operators in RxJS?",
        "answer": "Operators are pure functions that take an Observable as input and return another Observable. Examples include map, first, interval, catchError, retry, retryWhen."
    },
    {
        "id": 50,
        "question": "What is an Observable in RxJS?",
        "answer": "An Observable in RxJS is a stream that can emit multiple values over time, such as data from HTTP requests or user interactions."
    },
    {
        "id": 51,
        "question": "What is the difference between Cold and Hot Observables in RxJS?",
        "answer": "Cold Observables produce data only when subscribed to, whereas Hot Observables emit data whether or not there are subscribers."
    },
    {
        "id": 52,
        "question": "What is the difference between scan() vs reduce()?",
        "answer": "scan() emits all values from the source Observable, while reduce() emits only the final value after processing all emitted values."
    },
    {
        "id": 53,
        "question": "How to pass data between components?",
        "answer": [
            {
                "term": "Parent to Child",
                "definition": "Use @Input() for passing data from parent to child component."
            },
            {
                "term": "Child to Parent",
                "definition": "Use @Output() with EventEmitter to pass data from child to parent component."
            },
            {
                "term": "Unrelated Components",
                "definition": "Use a shared service to pass data between unrelated components."
            }
        ]
    },
    {
        "id": 54,
        "question": "What is TAP() in Angular?",
        "answer": "The TAP() operator in RxJS allows you to perform side effects without affecting the stream of data."
    },
    {
        "id": 55,
        "question": "What is the pipe function in Angular?",
        "answer": "The pipe function is used to chain multiple operators in RxJS and is essential for composing transformations in observables."
    },
    {
        "id": 56,
        "question": "What are interceptors?",
        "answer": "Interceptors are used to intercept and modify HTTP requests and responses in Angular, typically for adding headers or logging."
    },
    {
        "id": 57,
        "question": "What is authguard?",
        "answer": "AuthGuard is used in Angular to prevent or allow access to certain routes based on conditions, such as whether a user is logged in."
    },
    {
        "id": 58,
        "question": "What is Angular CLI?",
        "answer": "Angular CLI (Command Line Interface) is a tool used to automate common tasks in Angular development, such as creating components, services, and deploying applications."
    },
    {
        "id": 59,
        "question": "What is ivy?",
        "answer": "Ivy is Angular's next-generation rendering engine, which provides better performance, smaller bundle sizes, and improved debugging."
    },
    {
        "id": 60,
        "question": "What is the difference between ElementRef, TemplateRef, and ViewContainerRef?",
        "answer": [
            {
                "term": "ElementRef",
                "definition": "Provides a wrapper around a DOM element to access it."
            },
            {
                "term": "TemplateRef",
                "definition": "Represents an Angular template that can be used in structural directives."
            },
            {
                "term": "ViewContainerRef",
                "definition": "Represents a container where views can be dynamically inserted."
            }
        ]
    },
    {
        "id": 61,
        "question": "What is transpiling in Angular?",
        "answer": "Transpiling refers to the process of converting TypeScript code to JavaScript, allowing it to run in any browser."
    },
    {
        "id": 62,
        "question": "List some of the tools for testing Angular applications",
        "answer": [
            "Karma",
            "Mocha",
            "Jasmine",
            "Protractor"
        ]
    },
    {
        "id": 63,
        "question": "What are some disadvantages of using Angular?",
        "answer": "Some disadvantages include slower load times for smaller applications, the complexity of learning and using all its features, and difficulties with SEO optimization."
    },
    {
        "id": 64,
        "question": "What is HttpClient, and what are its benefits?",
        "answer": "HttpClient is a service in Angular for making HTTP requests, offering features like request/response interceptors, error handling, and response transformation."
    },
    {
        "id": 65,
        "question": "What is multicasting in Angular?",
        "answer": "Multicasting in Angular allows sharing the same Observable execution between multiple subscribers."
    },
    {
        "id": 66,
        "question": "What are HttpInterceptors in Angular?",
        "answer": "HttpInterceptors allow you to inspect and transform HTTP requests and responses globally in your application."
    },
    {
        "id": 67,
        "question": "What is the difference between an Annotation and a Decorator in Angular?",
        "answer": "Annotations are metadata used to annotate classes, while decorators are used to modify class behavior without altering the original source code."
    },
    {
        "id": 68,
        "question": "@Injectable",
        "answer": "@Injectable decorator tells Angular that a class can be used for dependency injection."
    },
    {
        "id": 69,
        "question": "@Inject()",
        "answer": "It manually specifies how Angular should inject a dependency into a constructor."
    },
    {
        "id": 70,
        "question": "What do you understand as an observer in Angular?",
        "answer": "An observer listens for notifications from an Observable, reacting to data changes or events."
    },
    {
        "id": 71,
        "question": "What is a router outlet?",
        "answer": "The RouterOutlet directive in Angular serves as a placeholder in templates where the router will display the activated components."
    },
    {
        "id": 72,
        "question": "Explain the use of the 'this' operator in JavaScript",
        "answer": "The 'this' operator refers to the current context in which a function is executed, often used to reference the object the function is a part of."
    },
    {
        "id": 73,
        "question": "What do you understand by 'Closure' in JavaScript?",
        "answer": "A closure is a function that retains access to its lexical scope, even when the function is executed outside that scope."
    },
    {
        "id": 74,
        "question": "Explain the use of the 'TypeOf' operator in JavaScript.",
        "answer": "The 'typeof' operator is used to determine the type of a variable or expression and returns a string indicating the type."
    },
    {
        "id": 75,
        "question": "What are guards in angular?",
        "answer": "Guards are used to control access to routes. They can prevent or allow route activation based on conditions like user authentication."
    },
    {
        "id": 76,
        "question": "What are the different types of guards in Angular?",
        "answer": [
            "CanActivate",
            "CanActivateChild",
            "CanDeactivate",
            "Resolve",
            "CanLoad"
        ]
    }
];

// Make data available globally
window.angularData = angularData;
