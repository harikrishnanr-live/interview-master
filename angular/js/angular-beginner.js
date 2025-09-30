// Angular Beginner Level Q&A Data

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
    id: 5,
    question: "What are declarations in Angular in app.module.ts?",
    answer: "Declarations in Angular list the components, directives, and pipes that belong to this module.",
  },
  {
    id: 6,
    question: "What are the imports in Angular in app.module.ts?",
    answer: "The imports array in app.module.ts is where you include other Angular modules that your module depends on.",
  },
  {
    id: 7,
    question: "What are the providers in app.module.ts?",
    answer: "Providers are services or classes that Angular can inject into components and other services. They are listed in the providers array.",
  },
  {
    id: 8,
    question: "What is BrowserModule in app.module.ts?",
    answer: "BrowserModule is required for running your Angular application in a browser. It is imported from @angular/platform-browser.",
  },
  {
    id: 9,
    question: "What is CommonModule in app.module.ts?",
    answer: "CommonModule is used when you want to use basic Angular directives like NgIf, NgFor in your modules.",
  },
  {
    id: 10,
    question: "What is dependency injection in Angular?",
    answer: "Dependency injection is a design pattern where components and services are provided with their dependencies, typically services, without creating them directly.",
  },
  {
    id: 11,
    question: "How to serve in production mode?",
    answer: "To serve the application in production mode, run the command 'ng serve --prod'.",
  },
  {
    id: 12,
    question: "What are decorators in Angular?",
    answer: "Decorators are functions used to add metadata to classes, methods, or properties. In Angular, common decorators include @Component, @Injectable, and @NgModule.",
  },
  {
    id: 13,
    question: "What are Observables in Angular?",
    answer: "Observables are streams of data that can emit multiple values over time. Angular uses Observables for asynchronous operations like HTTP requests.",
  },
  {
    id: 14,
    question: "What are Promises?",
    answer: "A Promise is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value. Unlike Observables, Promises emit a single value.",
  },
  {
    id: 15,
    question: "What is DOM?",
    answer: "The Document Object Model (DOM) is an interface for web documents. It allows JavaScript to manipulate the structure, style, and content of web pages.",
  },
  {
    id: 16,
    question: "What are DOM elements?",
    answer: "DOM elements in Angular typically refer to HTML elements that are manipulated using ElementRef and TemplateRef in templates.",
  },
  {
    id: 17,
    question: "Explain the syntax of app.module.ts",
    answer: "@NgModule({declarations: [], imports: [], providers: [], bootstrap: [AppComponent]})",
  },
  {
    id: 18,
    question: "Explain the syntax of app.component.ts",
    answer: "@Component({selector: 'app-dashboard', templateUrl: '', styleUrls: ['']})",
  },
  {
    id: 19,
    question: "Explain the syntax of services.",
    answer: "@Injectable({providedIn: 'root'}) export class ApiServicesService { }",
  },
  {
    id: 20,
    question: "What are Directives in Angular?",
    answer: "Directives are classes that modify the DOM in Angular applications. There are three types: Component Directives, Structural Directives, and Attribute Directives.",
  },
  {
    id: 21,
    question: "What is data binding?",
    answer: "Data binding in Angular is the mechanism of connecting a component's data to its template and vice versa.",
  },
  {
    id: 22,
    question: "What are the forms of data binding?",
    answer: [
      "String interpolation: {{ expression }}",
      "Property binding: [property]='expression'",
      "Event binding: (event)='method()'",
      "Two-way binding: [(ngModel)]='property'",
    ],
  },
  {
    id: 23,
    question: "What is String Interpolation in Angular?",
    answer: "String Interpolation is a type of one-way data binding where data from the component is displayed in the HTML view, using the syntax {{ data }}.",
  },
  {
    id: 24,
    question: "What is property binding?",
    answer: "Property binding is a one-way binding mechanism in Angular where data from the component is passed to the HTML element's property, such as [src]='imageUrl'.",
  },
  {
    id: 25,
    question: "What is event binding?",
    answer: "Event binding is used to listen for events in the template, such as (click)='method()'. It allows you to trigger a method in the component when a specific event happens.",
  },
  {
    id: 26,
    question: "What is two-way binding?",
    answer: "Two-way binding allows automatic synchronization of data between the component and the view. It is implemented with the [(ngModel)] directive.",
  },
  {
    id: 27,
    question: "What are modules?",
    answer: "Modules in Angular are used to organize an application. They group components, directives, pipes, and services into cohesive blocks of functionality.",
  },
  {
    id: 28,
    question: "What are lifecycle hooks in Angular?",
    answer: "Lifecycle hooks are methods that Angular calls during different phases of a component's lifecycle, such as ngOnInit, ngOnDestroy, ngOnChanges, etc.",
  },
  {
    id: 29,
    question: "What are components in Angular?",
    answer: "Components are the basic building blocks of an Angular application. Each component consists of a TypeScript class, an HTML template, and a CSS file.",
  },
  {
    id: 30,
    question: "What are pipes in Angular?",
    answer: "Pipes are used to transform data in Angular templates. They can format dates, numbers, and other types of data.",
  },
  {
    id: 31,
    question: "What is a parameterized pipe?",
    answer: "A parameterized pipe takes arguments to modify the data before displaying it, such as a custom pipe that transforms a value based on parameters.",
  },
  {
    id: 32,
    question: "What is the purpose of AsyncPipe in Angular?",
    answer: "AsyncPipe subscribes to an Observable or a Promise and returns the latest value emitted by it. It also handles unsubscription automatically.",
  },
  {
    id: 33,
    question: "What are filters in Angular?",
    answer: "Filters in Angular allow for transforming the display value of expressions in templates, such as filtering arrays or formatting text.",
  },
  {
    id: 34,
    question: "What is a Wildcard Route in Angular?",
    answer: "The Wildcard Route is used in Angular applications to handle invalid URLs, redirecting them to a 404 or a default route.",
  },
  {
    id: 35,
    question: "What are interfaces in Angular?",
    answer: "Interfaces are used at compile-time to define a contract for class instances, ensuring that expected data follows a particular structure.",
  },
  {
    id: 36,
    question: "What is a Built-in directive?",
    answer: "Some common built-in directives are ngIf, ngSwitch, ngFor, ngStyle, ngClass, ngModel.",
  },
  {
    id: 37,
    question: "What is an Angular custom directive?",
    answer: "Angular allows us to create custom directives when we need additional behavior not provided by the built-in directives.",
  },
  {
    id: 38,
    question: "What are Angular services?",
    answer: "Services in Angular are singleton objects used to organize and share data, logic, or functions across components in an application.",
  },
  {
    id: 39,
    question: "What are Angular templates?",
    answer: "Templates in Angular define a component's view using HTML, Angular directives, and binding syntax.",
  },
];

// Make data available globally
window.beginner = beginner;