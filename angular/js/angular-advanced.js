// Angular Advanced Level Q&A Data

let advanced = [
  {
    id: 1,
    question: "What is Angular Universal?",
    answer:
      "Angular Universal makes websites on the server first, then sends them to the browser. This makes sites faster and better for search engines.",
    example: "Angular Universal renders pages on the server first, then sends HTML to the browser, making sites load faster and better for search engines.",
    realTimeExample: "Angular Universal is like a chef preparing food in the kitchen before serving. It cooks the page on the server, so when you order, it's ready quickly. This helps websites appear faster and be found easier by Google."
  },
  {
    id: 2,
    question: "What is Change Detection in Angular?",
    answer:
      "Change Detection is the mechanism by which Angular determines what parts of the user interface need to be updated when application data changes.",
    example: "When data changes, Angular checks the view and updates only what's needed.",
    realTimeExample: "Change detection is like a mirror that reflects changes. When you change your shirt, the mirror shows the new look. Angular checks data changes and updates the screen like a smart mirror."
  },
  {
    id: 3,
    question: "What is Zone.js in Angular?",
    answer:
      "Zone.js is a library used by Angular to detect asynchronous operations and trigger change detection automatically.",
  },
  {
    id: 4,
    question: "What are Angular Schematics?",
    answer:
      "Schematics are templates for code scaffolding, used by Angular CLI to generate components, services, and modules quickly.",
  },
  {
    id: 5,
    question:
      "What is the difference between Reactive and Template-driven forms?",
    answer: [
      {
        term: "Reactive Forms",
        definition:
          "They provide more control, use explicit and immutable data structures, and are built around RxJS observables.",
      },
      {
        term: "Template-driven Forms",
        definition:
          "They are simpler, rely on directives in the template, and use two-way binding with ngModel.",
      },
    ],
  },
  {
    id: 6,
    question: "What are Angular Animations?",
    answer:
      "Angular Animations allow the creation of sophisticated animations via the Angular animation library using states and transitions.",
  },
  {
    id: 7,
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
    id: 8,
    question: "What is the difference between ngOnInit() and constructor()?",
    answer: [
      {
        aspect: "constructor",
        definition: "Used to initialize class members and inject dependencies.",
      },
      {
        aspect: "ngOnInit",
        definition:
          "A lifecycle hook called by Angular after Angular first displays the component's data-bound properties.",
      },
    ],
  },
  {
    id: 9,
    question: "What is the use of ngOnChanges() lifecycle hook?",
    answer:
      "ngOnChanges() is invoked when an input-bound property in a directive or component changes.",
  },
  {
    id: 10,
    question: "What are Angular Material components?",
    answer:
      "Angular Material provides pre-built UI components such as buttons, dialogs, toolbars, and form controls, following Material Design guidelines.",
  },
  {
    id: 11,
    question: "What is ViewEncapsulation in Angular?",
    answer:
      "ViewEncapsulation determines how styles defined in a component affect the DOM. Angular provides options: Emulated, None, and ShadowDom.",
  },
  {
    id: 12,
    question: "What are standalone components in Angular?",
    answer:
      "Standalone components are Angular components that can exist independently without needing to be declared inside a module.",
  },
  {
    id: 13,
    question: "What is the difference between TemplateRef and ViewChild?",
    answer: [
      {
        term: "TemplateRef",
        definition:
          "Represents an embedded Angular template that can be programmatically rendered.",
      },
      {
        term: "ViewChild",
        definition:
          "A decorator that gives access to a child component, directive, or DOM element inside a parent component.",
      },
    ],
  },
  {
    id: 14,
    question: "What is trackBy in Angular ngFor?",
    answer:
      "trackBy is used in *ngFor to optimize rendering by tracking items with a unique identifier, preventing the re-rendering of unchanged DOM elements.",
  },
  {
    id: 15,
    question: "What is Angular RouterModule?",
    answer:
      "RouterModule is a library in Angular responsible for routing and navigation between different components in a single-page application.",
  },
  {
    id: 16,
    question: "What are Angular Resolvers?",
    answer:
      "Resolvers in Angular are used to pre-fetch data before navigating to a route, ensuring that the required data is available when the component loads.",
  },
  {
    id: 17,
    question: "What is ngZone in Angular?",
    answer:
      "ngZone is a service that helps Angular track and manage asynchronous operations and run change detection whenever an async task completes.",
  },
  {
    id: 18,
    question:
      "What is the difference between BehaviorSubject and Subject in RxJS?",
    answer: [
      {
        aspect: "Subject",
        definition:
          "Does not hold a current value and only emits new values to subscribers.",
      },
      {
        aspect: "BehaviorSubject",
        definition:
          "Stores the latest value and emits it immediately to new subscribers.",
      },
    ],
  },
  {
    id: 19,
    question: "What is tree-shaking in Angular?",
    answer:
      "Tree-shaking is a process of removing unused code during the build process, leading to smaller bundle sizes.",
  },
  {
    id: 20,
    question: "What are Angular Signals?",
    answer:
      "Signals are a reactive state management system introduced in Angular 16 that provide fine-grained reactivity without heavy reliance on change detection.",
  },
  {
    id: 21,
    question: "What are Angular ErrorHandlers?",
    answer:
      "ErrorHandler is a global service in Angular that captures unhandled exceptions across the whole application, allowing custom error logging and processing.",
  },
  {
    id: 22,
    question: "What is Angular's OnPush change detection strategy?",
    answer:
      "OnPush change detection strategy tells Angular to check a component's view only when its inputs change or an event triggers inside it, reducing unnecessary checks.",
  },
  {
    id: 23,
    question: "What is Angular's Control Flow Syntax?",
    answer:
      "Control Flow Syntax is a new way to handle conditional rendering and loops in templates using @if, @for, and @switch directives.",
  },
  {
    id: 24,
    question: "What is Angular's deferrable views?",
    answer:
      "Deferrable views allow loading parts of the template only when needed, improving initial load performance.",
  },
  {
    id: 25,
    question: "What is Angular's inject() function?",
    answer:
      "inject() is a function used in standalone components and services to inject dependencies without constructors.",
  },
  {
    id: 26,
    question: "What is Angular's standalone API?",
    answer:
      "Standalone API allows building Angular applications without NgModules, using standalone components, directives, and pipes.",
  },
  {
    id: 27,
    question: "What is Angular's new control flow?",
    answer:
      "New control flow uses @if, @for, @switch, @defer for better template syntax and performance.",
  },
  {
    id: 28,
    question: "What is Angular's hydration?",
    answer:
      "Hydration is the process of attaching event listeners and making server-rendered pages interactive on the client.",
  },
  {
    id: 29,
    question: "What is Angular's incremental hydration?",
    answer:
      "Incremental hydration loads and hydrates parts of the application progressively, improving performance.",
  },
  {
    id: 30,
    question: "What is Angular's non-destructive hydration?",
    answer:
      "Non-destructive hydration preserves server-rendered DOM and adds interactivity without re-rendering.",
  },
  {
    id: 31,
    question: "What is Angular's partial hydration?",
    answer:
      "Partial hydration hydrates only interactive parts of the page, leaving static parts as-is.",
  },
  {
    id: 32,
    question: "What is Angular's server-side rendering (SSR)?",
    answer:
      "SSR renders Angular applications on the server, sending HTML to the client for faster initial loads and better SEO.",
  },
];

// Make data available globally
window.advanced = advanced;
