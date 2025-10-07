// Angular Advanced Level Q&A Data

let advanced = [
  {
    id: 1,
    question: "What is Angular Universal?",
    answer:
      "Angular Universal makes websites on the server first, then sends them to the browser. This makes sites faster and better for search engines.",
    example:
      "Angular Universal renders pages on the server first, then sends HTML to the browser, making sites load faster and better for search engines.",
    realTimeExample:
      "Angular Universal is like a chef preparing food in the kitchen before serving. It cooks the page on the server, so when you order, it's ready quickly. This helps websites appear faster and be found easier by Google.",
    realTimeExample2:
      "Imagine Angular Universal as a movie that's pre-recorded before the premiere. When you arrive at the theater, the movie starts immediately because it's already prepared. This is faster than waiting for the movie to be filmed live as you watch, just like Universal serves pre-rendered pages for quicker loading.",
    syntax: "ng add @nguniversal/express-engine",
    codeExample:
      "// Install Angular Universal\nng add @nguniversal/express-engine\n\n// Server-side rendering setup\nimport { ngExpressEngine } from '@nguniversal/express-engine';\nimport * as express from 'express';\n\nconst app = express();\napp.engine('html', ngExpressEngine({\n  bootstrap: AppServerModule\n}));",
  },
  {
    id: 2,
    question: "What is Change Detection in Angular?",
    answer:
      "Change Detection is the mechanism by which Angular determines what parts of the user interface need to be updated when application data changes.",
    example:
      "When data changes, Angular checks the view and updates only what's needed.",
    realTimeExample:
      "Change detection is like a mirror that reflects changes. When you change your shirt, the mirror shows the new look. Angular checks data changes and updates the screen like a smart mirror.",
    realTimeExample2:
      "Think of change detection as a security camera that only records when it detects motion. When data (motion) changes, Angular (camera) records the new state and updates the view (monitor) to show the latest image, ensuring you always see the current situation.",
    syntax: "ChangeDetectionStrategy.Default, ChangeDetectionStrategy.OnPush",
    codeExample:
      "@Component({\n  selector: 'app-example',\n  template: `...`,\n  changeDetection: ChangeDetectionStrategy.OnPush\n})\nexport class ExampleComponent {\n  // Component logic\n}",
  },
  {
    id: 3,
    question: "What is Zone.js in Angular?",
    answer:
      "Zone.js is a library used by Angular to detect asynchronous operations and trigger change detection automatically.",
    example:
      "Zone.js patches setTimeout, Promise, etc., to run change detection.",
    realTimeExample:
      "Zone.js is like a watchman that notices when things happen in the background, like waiting for a server response, and tells Angular to update the screen.",
    realTimeExample2:
      "Imagine Zone.js as a personal assistant who monitors all your background tasks. When an async operation completes (like a phone call ends), the assistant notifies Angular to check for updates, just like an assistant would remind you to follow up after a meeting.",
    syntax: "import 'zone.js/dist/zone';",
    codeExample:
      "// Zone.js is included automatically in Angular projects\n// It patches async operations to trigger change detection\nsetTimeout(() => {\n  // This will trigger change detection\n  this.data = 'Updated!';\n}, 1000);",
  },
  {
    id: 4,
    question: "What are Angular Schematics?",
    answer:
      "Schematics are templates for code scaffolding, used by Angular CLI to generate components, services, and modules quickly.",
    example: "ng generate component my-component uses schematics.",
    realTimeExample:
      "Schematics are like cookie cutters that shape code. They help create new parts of your app quickly, like cutting out shapes for a puzzle.",
    realTimeExample2:
      "Think of schematics as blueprints for building. Instead of designing each room from scratch, you use pre-made plans to quickly add new rooms (components) to your house (app), ensuring they fit perfectly with the existing structure.",
    syntax: "ng generate schematic my-schematic",
    codeExample:
      "// Create a custom schematic\nng generate schematic my-schematic\n\n// Use it to generate code\nng generate my-schematic:component my-component",
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
    example:
      "Reactive: this.form = new FormGroup({ name: new FormControl('') });, Template: <input [(ngModel)]='name'>",
    realTimeExample:
      "Reactive forms are like building with Lego blocks where you have precise control over each piece. Template-driven forms are like playing with Play-Doh where you shape things more freely with less structure.",
    realTimeExample2:
      "Imagine reactive forms as a spreadsheet where you control each cell's formula and data. Template-driven forms are like a notebook where you jot down information as it comes, with less structure but more flexibility. Both collect data, but with different approaches to control and structure.",
    syntax: "Reactive: new FormGroup({}), Template: [(ngModel)]",
    codeExample:
      "// Reactive Form\nthis.form = this.fb.group({\n  name: ['', Validators.required]\n});\n\n<!-- Template-driven Form -->\n<input [(ngModel)]='name' required>",
  },
  {
    id: 6,
    question: "What are Angular Animations?",
    answer:
      "Angular Animations allow the creation of sophisticated animations via the Angular animation library using states and transitions.",
    example:
      "Animations can be defined using triggers, states, and transitions in component metadata.",
    realTimeExample:
      "Angular Animations are like a puppet show where you can make the puppets move smoothly from one position to another. You define how they should move (states) and when (transitions), creating a fluid performance.",
    realTimeExample2:
      "Think of Angular Animations as a flipbook. Each page (state) shows a slightly different image, and flipping through them quickly (transitions) creates the illusion of motion. You control the sequence and timing to create engaging visual effects in your app.",
    syntax: "animations: [trigger('name', [state(), transition()])]",
    codeExample:
      "@Component({\n  selector: 'app-example',\n  template: `<div [@slideInOut]='isVisible'>Content</div>`,\n  animations: [\n    trigger('slideInOut', [\n      state('true', style({ transform: 'translateX(0)' })),\n      state('false', style({ transform: 'translateX(-100%)' })),\n      transition('false <=> true', animate('300ms ease-in'))\n    ])\n  ]\n})\nexport class ExampleComponent {\n  isVisible = true;\n}",
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
      "Use tree-shaking to eliminate dead code",
      "Optimize images and assets",
      "Use Web Workers for CPU-intensive tasks",
    ],
    example: "AOT compilation reduces bundle size and improves startup time.",
    realTimeExample:
      "Optimizing performance is like tuning a car. AOT is like using premium fuel for better efficiency. Lazy loading is like only carrying the luggage you need for each trip. OnPush is like a fuel-efficient engine that only uses power when needed. All these make your app run smoother and faster.",
    realTimeExample2:
      "Think of performance optimization as preparing for a marathon. AOT is like wearing lightweight shoes. Lazy loading is like only carrying water for the current segment. OnPush is like conserving energy by only sprinting when necessary. Universal is like starting the race closer to the finish line. Together, they help you run faster and finish stronger.",
    syntax:
      "ng build --prod --aot, { path: 'lazy', loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule) }",
    codeExample:
      '// Enable AOT in angular.json\n"configurations": {\n  "production": {\n    "aot": true\n  }\n}\n\n// Lazy loading in routes\nconst routes: Routes = [\n  {\n    path: \'dashboard\',\n    loadChildren: () => import(\'./dashboard/dashboard.module\').then(m => m.DashboardModule)\n  }\n];',
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
    example:
      "constructor() is for dependency injection, ngOnInit() is for component initialization logic.",
    realTimeExample:
      "Constructor is like getting dressed in the morning - you put on your clothes (inject dependencies) before you start your day. ngOnInit is like eating breakfast - you're ready to start your activities (initialize component logic) after you've prepared yourself.",
    realTimeExample2:
      "Think of constructor as the foundation of a house being built. You lay the groundwork (inject services) before you can build the walls. ngOnInit is like moving into the finished house and arranging your furniture (setting up component logic) after the structure is complete.",
    syntax:
      "constructor(private service: MyService) {}, ngOnInit() { this.loadData(); }",
    codeExample:
      "constructor(private dataService: DataService) {}\n\nngOnInit() {\n  this.dataService.getData().subscribe(data => {\n    this.data = data;\n  });\n}",
  },
  {
    id: 9,
    question: "What is the use of ngOnChanges() lifecycle hook?",
    answer:
      "ngOnChanges() is invoked when an input-bound property in a directive or component changes.",
    example:
      "ngOnChanges() receives a SimpleChanges object containing current and previous values of changed inputs.",
    realTimeExample:
      "ngOnChanges is like a security system that alerts you when someone opens a door or window. It tells you exactly which door (input) was opened and what the previous state was, so you can respond appropriately.",
    realTimeExample2:
      "Imagine ngOnChanges as a stock market ticker that updates whenever a stock (input) price changes. It shows you both the old and new prices, so you can make informed decisions about buying or selling based on the latest information.",
    syntax:
      "ngOnChanges(changes: SimpleChanges) { if (changes['prop']) { ... } }",
    codeExample:
      "ngOnChanges(changes: SimpleChanges) {\n  if (changes['userId']) {\n    const current = changes['userId'].currentValue;\n    const previous = changes['userId'].previousValue;\n    this.loadUserData(current);\n  }\n}",
  },
  {
    id: 10,
    question: "What are Angular Material components?",
    answer:
      "Angular Material provides pre-built UI components such as buttons, dialogs, toolbars, and form controls, following Material Design guidelines.",
    example:
      "Material components like mat-button, mat-card, and mat-dialog provide consistent, good-looking UI elements.",
    realTimeExample:
      "Angular Material components are like IKEA furniture. They're pre-designed, match well together, and easy to assemble in your app. You don't have to build everything from scratch; you just pick what you need and it fits right in.",
    realTimeExample2:
      "Think of Angular Material as a set of Lego blocks designed by an architect. Each block (component) has a specific purpose and style, and they all work together seamlessly. You can quickly build professional-looking interfaces without needing to design each piece yourself.",
    syntax: "import { MatButtonModule } from '@angular/material/button';",
    codeExample:
      "// Import in your module\nimport { MatButtonModule } from '@angular/material/button';\n\n@NgModule({\n  imports: [MatButtonModule]\n})\nexport class AppModule {}\n\n<!-- Use in template -->\n<button mat-raised-button color='primary'>Click me</button>",
  },
  {
    id: 11,
    question: "What is ViewEncapsulation in Angular?",
    answer:
      "ViewEncapsulation determines how styles defined in a component affect the DOM. Angular provides options: Emulated, None, and ShadowDom.",
    example:
      "Emulated (default) adds unique attributes to component elements, None applies styles globally, ShadowDom uses browser's native encapsulation.",
    realTimeExample:
      "ViewEncapsulation is like choosing how to decorate your apartment. Emulated is like painting your walls but making sure the paint doesn't bleed into neighboring apartments. None is like painting with no regard for others. ShadowDom is like having your own separate dimension where your decor doesn't affect others at all.",
    realTimeExample2:
      "Imagine ViewEncapsulation as different types of fences between gardens. Emulated is a see-through fence that keeps plants mostly separate but might let some vines creep through. None is no fence at all, where plants can spread freely. ShadowDom is a solid wall that completely separates each garden, keeping styles entirely contained.",
    syntax: "encapsulation: ViewEncapsulation.Emulated|None|ShadowDom",
    codeExample:
      "@Component({\n  selector: 'app-example',\n  template: `<p>Styled content</p>`,\n  styles: ['p { color: red; }'],\n  encapsulation: ViewEncapsulation.ShadowDom\n})\nexport class ExampleComponent {}",
  },
  {
    id: 12,
    question: "What are standalone components in Angular?",
    answer:
      "Standalone components are Angular components that can exist independently without needing to be declared inside a module.",
    example:
      "Standalone components simplify the application structure by eliminating the need for NgModules in many cases.",
    realTimeExample:
      "Standalone components are like Lego bricks that can connect directly to each other without needing a baseplate. You can build structures by snapping bricks together without worrying about organizing them into separate boxes (modules).",
    realTimeExample2:
      "Think of standalone components as independent apps on your phone. Each app works on its own without needing to be part of a larger suite. You can use them individually or combine them as needed, just like standalone components can be used independently or together in your application.",
    syntax: "standalone: true",
    codeExample:
      "@Component({\n  selector: 'app-standalone',\n  template: `...`,\n  standalone: true,\n  imports: [CommonModule, MatButtonModule]\n})\nexport class StandaloneComponent {}",
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
    example:
      "TemplateRef is used to create dynamic views, ViewChild is used to access and manipulate child elements.",
    realTimeExample:
      "TemplateRef is like a recipe card that you can use to cook a meal whenever you want. ViewChild is like a direct phone line to your child who's cooking in another room, letting you give them instructions or check on their progress.",
    realTimeExample2:
      "Imagine TemplateRef as a blueprint for a house. You can use the blueprint to build many identical houses whenever needed. ViewChild is like a walkie-talkie that lets you communicate directly with someone in one specific house you've already built, to ask them to open a window or turn on a light.",
    syntax:
      "@ViewChild('template') template: TemplateRef<any>; @ViewChild(ChildComponent) child: ChildComponent;",
    codeExample:
      "@ViewChild('myTemplate') myTemplate: TemplateRef<any>;\n@ViewChild(MyChildComponent) childComponent: MyChildComponent;\n\nngAfterViewInit() {\n  // Render the template\n  this.viewContainer.createEmbeddedView(this.myTemplate);\n\n  // Access child component\n  this.childComponent.doSomething();\n}",
  },
  {
    id: 14,
    question: "What is trackBy in Angular ngFor?",
    answer:
      "trackBy in *ngFor optimizes rendering by tracking items with a unique identifier, preventing the re-rendering of unchanged DOM elements.",
    example:
      "trackBy helps Angular identify which items have changed, added, or removed, improving performance.",
    realTimeExample:
      "trackBy is like giving each student in a class a unique ID number. When the teacher takes attendance, they can quickly see who's new, who's missing, and who's just moved seats, without having to check everyone's face. This makes roll call much faster and more efficient.",
    realTimeExample2:
      "Imagine trackBy as a library's book tracking system. Each book has a unique barcode. When books are returned or new ones are added, the system quickly scans the barcodes to update the catalog without having to manually check each book's title and author, making inventory management much more efficient.",
    syntax: "*ngFor='let item of items; trackBy: trackByFn'",
    codeExample:
      "<div *ngFor='let user of users; trackBy: trackByUserId'>\n  {{ user.name }}\n</div>\n\ntrackByUserId(index: number, user: User): number {\n  return user.id;\n}",
  },
  {
    id: 15,
    question: "What is Angular RouterModule?",
    answer:
      "RouterModule is a library in Angular responsible for routing and navigation between different components in a single-page application.",
    example:
      "RouterModule.forRoot(routes) sets up routing for the entire application.",
    realTimeExample:
      "RouterModule is like a map that shows how to go from one room to another in a house. It helps users move between pages without reloading the whole site, like walking through different rooms in a house without going outside.",
    realTimeExample2:
      "Think of RouterModule as a subway system map. Each line (route) connects different stations (components). When you want to go somewhere (navigate), you follow the map to take the right train (route) to your destination (component), all without leaving the subway system (single-page app).",
    syntax: "RouterModule.forRoot(routes), RouterModule.forChild(routes)",
    codeExample:
      "import { RouterModule, Routes } from '@angular/router';\n\nconst routes: Routes = [\n  { path: 'home', component: HomeComponent },\n  { path: 'about', component: AboutComponent }\n];\n\n@NgModule({\n  imports: [RouterModule.forRoot(routes)],\n  exports: [RouterModule]\n})\nexport class AppRoutingModule {}",
  },
  {
    id: 16,
    question: "What are Angular Resolvers?",
    answer:
      "Resolvers in Angular are used to pre-fetch data before navigating to a route, ensuring that the required data is available when the component loads.",
    example:
      "Resolvers can fetch user data before the profile page loads, preventing empty states.",
    realTimeExample:
      "Resolvers are like a butler who prepares everything before you enter a room. When you walk into your study (route), your favorite book (data) is already on the desk, your drink is poured, and the fire is lit. Everything is ready for you to use immediately.",
    realTimeExample2:
      "Imagine resolvers as a restaurant's reservation system. When you arrive for your reservation (route), your table is ready, your napkin is folded, and your water is poured. The kitchen has already started preparing your order (data) so it arrives quickly after you sit down, ensuring a smooth dining experience.",
    syntax: "resolve: { data: MyResolver }",
    codeExample:
      "@Injectable({\n  providedIn: 'root'\n})\nexport class UserResolver implements Resolve<User> {\n  constructor(private userService: UserService) {}\n\n  resolve(route: ActivatedRouteSnapshot): Observable<User> {\n    return this.userService.getUser(route.params['id']);\n  }\n}\n\nconst routes: Routes = [\n  {\n    path: 'user/:id',\n    component: UserComponent,\n    resolve: { user: UserResolver }\n  }\n];",
  },
  {
    id: 17,
    question: "What is ngZone in Angular?",
    answer:
      "ngZone in Angular is a service that helps Angular track and manage asynchronous operations and run change detection whenever an async task completes.",
    example:
      "ngZone.run() executes code inside Angular's zone, while ngZone.runOutsideAngular() executes code outside it.",
    realTimeExample:
      "ngZone is like a project manager who keeps track of all tasks. When an async task (like waiting for a delivery) completes, the manager (ngZone) notifies the team (Angular) to update their status boards (views). This ensures everyone is always working with the latest information.",
    realTimeExample2:
      "Imagine ngZone as an air traffic controller. When a plane (async operation) lands or takes off, the controller (ngZone) coordinates with the airport (Angular) to update flight boards (views) and direct ground crew (change detection). This keeps all airport operations running smoothly and efficiently.",
    syntax:
      "constructor(private ngZone: NgZone) {}\nthis.ngZone.run(() => { ... });",
    codeExample:
      "constructor(private ngZone: NgZone) {}\n\nthis.ngZone.runOutsideAngular(() => {\n  setTimeout(() => {\n    this.ngZone.run(() => {\n      // This update will trigger change detection\n      this.data = 'Updated via ngZone';\n    });\n  }, 1000);\n});",
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
    example:
      "BehaviorSubject is useful for state management as it provides the current value to new subscribers, while Subject is better for event streams.",
    realTimeExample:
      "Subject is like a live radio broadcast. If you tune in late, you only hear what's being said from that moment onward. BehaviorSubject is like a radio that immediately tells you the current song and artist when you tune in, so you're never out of context.",
    realTimeExample2:
      "Imagine Subject as a chat room where you only see messages sent after you join. BehaviorSubject is like a chat room that shows you the last message when you enter, so you have context for the current conversation. Both keep you informed, but BehaviorSubject gives you immediate context.",
    syntax: "new Subject(), new BehaviorSubject(initialValue)",
    codeExample:
      "// Subject\nconst subject = new Subject();\nsubject.subscribe(value => console.log('Subject:', value));\nsubject.next('Hello'); // Only new subscribers will see this\n\n// BehaviorSubject\nconst behaviorSubject = new BehaviorSubject('Initial');\nbehaviorSubject.subscribe(value => console.log('BehaviorSubject:', value)); // Logs 'Initial' immediately",
  },
  {
    id: 19,
    question: "What is tree-shaking in Angular?",
    answer:
      "Tree-shaking in Angular is a process of removing unused code during the build process, leading to smaller bundle sizes and improved load times.",
    example:
      "Tree-shaking eliminates dead code that isn't imported or used in your application.",
    realTimeExample:
      "Tree-shaking is like packing for a trip. You only take the clothes you'll actually wear, leaving behind anything you won't need. This makes your suitcase lighter and easier to carry, just like tree-shaking makes your app smaller and faster to load.",
    realTimeExample2:
      "Imagine tree-shaking as pruning a tree. You remove the dead branches (unused code) so the tree (your app) is healthier and uses its resources more efficiently. The remaining branches (used code) get more nutrients (resources) and grow stronger, just like your optimized app performs better.",
    syntax: "Optimized by Angular CLI during production builds",
    codeExample:
      '// Tree-shaking is automatic in production builds\n// Configure in tsconfig.json\n"compilerOptions": {\n  "module": "es2015",\n  "moduleResolution": "node"\n}',
  },
  {
    id: 20,
    question: "What are Angular Signals?",
    answer:
      "Angular Signals are a reactive state management system introduced in Angular 16 that provide fine-grained reactivity without heavy reliance on change detection.",
    example:
      "Signals allow components to react to state changes more efficiently, updating only what's necessary.",
    realTimeExample:
      "Angular Signals are like smart light bulbs that only turn on when someone enters the room and only illuminate the area that's being used. This is more efficient than traditional lights that flood the whole room whenever they're on, just like Signals update only what's needed rather than triggering full change detection.",
    realTimeExample2:
      "Imagine Signals as a smartwatch that only updates the display when you need to see new information, like a message or your heart rate. It conserves battery by not constantly refreshing everything, similar to how Signals optimize performance by only updating what's necessary in your app.",
    syntax:
      "const count = signal(0);\neffect(() => { console.log(count()); });",
    codeExample:
      "import { signal, effect } from '@angular/core';\n\n@Component({\n  // ...\n})\nexport class CounterComponent {\n  count = signal(0);\n\n  constructor() {\n    effect(() => {\n      console.log(`Count: ${this.count()}`);\n    });\n  }\n\n  increment() {\n    this.count.update(v => v + 1);\n  }\n}",
  },
  {
    id: 21,
    question: "What are Angular ErrorHandlers?",
    answer:
      "ErrorHandler in Angular is a global service that captures unhandled exceptions across the whole application, allowing custom error logging and processing.",
    example:
      "You can extend ErrorHandler to log errors to a remote server or display user-friendly messages.",
    realTimeExample:
      "ErrorHandler is like a building's fire alarm system. When something goes wrong (an error occurs) anywhere in the building (app), the system (ErrorHandler) detects it and can trigger appropriate responses, like notifying the fire department (logging) or guiding people to safety (user-friendly messages).",
    realTimeExample2:
      "Imagine ErrorHandler as an air traffic control system. When a plane (part of your app) encounters trouble (error), the system detects it and can coordinate emergency responses, reroute other planes (recover gracefully), and log the incident for future analysis, keeping the whole airport (app) running smoothly.",
    syntax:
      "class MyErrorHandler implements ErrorHandler {\n  handleError(error: any) { ... }\n}",
    codeExample:
      "@Injectable()\nexport class GlobalErrorHandler implements ErrorHandler {\n  constructor(private errorLoggingService: ErrorLoggingService) {}\n\n  handleError(error: any) {\n    this.errorLoggingService.log(error);\n    // Show user-friendly message\n  }\n}\n\n// Provide in your app module\n{ provide: ErrorHandler, useClass: GlobalErrorHandler }",
  },
  {
    id: 22,
    question: "What is Angular's OnPush change detection strategy?",
    answer:
      "OnPush change detection strategy in Angular tells Angular to check a component's view only when its input properties change or when an event triggers inside it, reducing unnecessary checks and improving performance.",
    example:
      "OnPush is particularly useful for components that don't change often or have complex data that doesn't need frequent checking.",
    realTimeExample:
      "OnPush is like a motion-activated security light. It only turns on (checks for changes) when someone moves nearby (input changes) or when there's activity in the area (component events). This saves energy (improves performance) compared to a light that's always on (default change detection).",
    realTimeExample2:
      "Imagine OnPush as a library's 'new books' alert system. You only get notified (change detection runs) when new books arrive in your favorite section (input changes) or when you request a book (component event). This is more efficient than checking every shelf every day (default change detection), saving time and resources.",
    syntax: "changeDetection: ChangeDetectionStrategy.OnPush",
    codeExample:
      "@Component({\n  selector: 'app-example',\n  template: `...`,\n  changeDetection: ChangeDetectionStrategy.OnPush\n})\nexport class ExampleComponent {\n  @Input() data: any;\n\n  updateData() {\n    // This won't trigger change detection by itself\n    this.data.newProp = 'value';\n    // To trigger change detection:\n    this.data = {...this.data};\n  }\n}",
  },
  {
    id: 23,
    question: "What is Angular's Control Flow Syntax?",
    answer:
      "Angular's new Control Flow Syntax uses @if, @for, and @switch directives for better template syntax, improved performance, and more intuitive conditional rendering and loops.",
    example:
      "The new syntax is more declarative and integrates better with Angular's reactivity system.",
    realTimeExample:
      "Control Flow Syntax is like using a modern GPS with clear voice directions (@if, @for) instead of reading a paper map with complex symbols. It gives you clearer instructions and gets you to your destination more efficiently, with less chance of getting lost in complex template logic.",
    realTimeExample2:
      "Imagine the new Control Flow Syntax as a smart home system. Instead of manually flipping switches (ngIf, ngFor), you can say '@lights on' or '@thermostat to 72' and the system handles it intelligently. It's more natural and efficient, with better integration with your home's (app's) other smart features.",
    syntax:
      "@if (condition) { ... } @else { ... }, @for (item of items; track item.id) { ... }",
    codeExample:
      "@Component({\n  template: `\n    @if (isLoggedIn) {\n      <p>Welcome back!</p>\n    } @else {\n      <p>Please log in.</p>\n    }\n    \n    @for (user of users; track user.id) {\n      <div>{{ user.name }}</div>\n    }\n  `\n})\nexport class ExampleComponent {\n  isLoggedIn = true;\n  users = [{id: 1, name: 'Alice'}, {id: 2, name: 'Bob'}];\n}",
  },
  {
    id: 24,
    question: "What is Angular's deferrable views?",
    answer:
      "Angular's deferrable views allow loading parts of the template only when needed, improving initial load performance by delaying the rendering of non-critical sections.",
    example:
      "Deferrable views can be triggered by conditions, interactions, or when they come into view.",
    realTimeExample:
      "Deferrable views are like a restaurant that only prepares certain dishes when they're ordered, rather than cooking everything at once. This means popular items (critical views) are ready immediately, while specialty dishes (non-critical views) are made fresh when requested, reducing waste and improving service speed.",
    realTimeExample2:
      "Imagine deferrable views as a streaming service that only downloads the next episode when you're about to watch it, rather than downloading the whole season at once. This saves bandwidth (improves load time) and ensures you always have what you need when you need it, without waiting for unnecessary content to load.",
    syntax: "@defer (on condition) { ... }",
    codeExample:
      "@Component({\n  template: `\n    @defer (on viewport) {\n      <heavy-component></heavy-component>\n    }\n    \n    @defer (on hover) {\n      <tooltip></tooltip>\n    }\n  `\n})\nexport class ExampleComponent {}",
  },
  {
    id: 25,
    question: "What is Angular's inject() function?",
    answer:
      "Angular's inject() function allows injecting dependencies in standalone components, directives, and pipes without using constructors, providing a more flexible way to get dependencies.",
    example:
      "inject() can be used in factory functions, property initializers, and field declarations.",
    realTimeExample:
      "The inject() function is like a butler who can bring you anything you need without you having to go to the kitchen yourself. Whether you're in the living room (constructor), study (factory function), or garden (property initializer), you can simply ask the butler for what you need and it will be provided.",
    realTimeExample2:
      "Imagine inject() as a universal remote control. No matter where you are in your house (component), you can use the remote to access any device (service) you need - turn on the TV (constructor injection), adjust the thermostat (factory function), or open the garage door (property initializer) - all without moving from your current location.",
    syntax: "const service = inject(MyService);",
    codeExample:
      "import { inject } from '@angular/core';\nimport { MyService } from './my.service';\n\n@Component({\n  // ...\n})\nexport class ExampleComponent {\n  private service = inject(MyService);\n  \n  // Can also be used in factory functions\n  static factory() {\n    const service = inject(MyService);\n    return new ExampleComponent(service);\n  }\n}",
  },
  {
    id: 26,
    question: "What is Angular's standalone API?",
    answer:
      "Angular's standalone API allows building applications without NgModules, using standalone components, directives, and pipes that can declare their own dependencies.",
    example:
      "Standalone components simplify the application structure by eliminating the need for NgModules in many cases, making the code more modular and easier to understand.",
    realTimeExample:
      "The standalone API is like building with Lego bricks that can connect directly to each other without needing a baseplate. You can create complex structures by snapping bricks together without worrying about organizing them into separate boxes (modules), making your builds more flexible and easier to modify.",
    realTimeExample2:
      "Imagine the standalone API as a toolbox where each tool (component, directive, pipe) can work independently without needing to be part of a larger tool set (module). You can use each tool on its own or combine them as needed, making your workflow more efficient and your projects more organized.",
    syntax: "standalone: true, imports: [CommonModule, ...]",
    codeExample:
      "@Component({\n  selector: 'app-standalone',\n  template: `...`,\n  standalone: true,\n  imports: [CommonModule, MatButtonModule]\n})\nexport class StandaloneComponent {\n  // Component logic\n}",
  },
  {
    id: 27,
    question: "What is Angular's new control flow?",
    answer:
      "Angular's new control flow uses @if, @for, @switch, and @defer directives for better template syntax, improved performance, and more intuitive conditional rendering and loops.",
    example:
      "The new syntax is more declarative, integrates better with Angular's reactivity system, and provides built-in tracking for better performance.",
    realTimeExample:
      "The new control flow is like using voice commands with a smart home system. Instead of manually flipping switches (@if instead of *ngIf), you can naturally say what you want to happen, and the system understands and executes your requests more efficiently, with better integration with other smart features in your home (app).",
    realTimeExample2:
      "Imagine the new control flow as a modern GPS navigation system. Instead of reading complex road signs (*ngFor), you get clear turn-by-turn directions (@for) that adapt to traffic conditions (reactivity) and suggest the most efficient routes, making your journey (development) smoother and more enjoyable.",
    syntax:
      "@if (condition) { ... } @else { ... }, @for (item of items; track item.id) { ... }, @switch (condition) { @case (value) { ... } }",
    codeExample:
      "@Component({\n  template: `\n    @if (user) {\n      <p>Welcome, {{ user.name }}!</p>\n    } @else {\n      <p>Please log in.</p>\n    }\n    \n    @for (item of items; track item.id) {\n      <div>{{ item.name }}</div>\n    }\n    \n    @switch (status) {\n      @case ('active') { <p>Active</p> }\n      @case ('inactive') { <p>Inactive</p> }\n      @default { <p>Unknown</p> }\n    }\n  `\n})\nexport class ExampleComponent {\n  user = { name: 'Alice' };\n  items = [{id: 1, name: 'Item 1'}, {id: 2, name: 'Item 2'}];\n  status = 'active';\n}",
  },
  {
    id: 28,
    question: "What is Angular's hydration?",
    answer:
      "Angular's hydration is the process of attaching event listeners and making server-rendered pages interactive on the client side, bringing static HTML to life.",
    example:
      "Hydration makes server-rendered content interactive without full re-rendering, improving performance and user experience.",
    realTimeExample:
      "Hydration is like a puppet show where the puppets are already on stage when you arrive, but they only start moving when the puppeteer (client-side JavaScript) begins controlling them. The show (page) is visible immediately, but becomes fully interactive as the puppeteer brings each character to life.",
    realTimeExample2:
      "Imagine hydration as a magic painting that's already on the canvas when you walk into the gallery. As you approach, the painting begins to move and respond to your presence, transforming from a static image to an interactive experience without the artist having to repaint the entire scene.",
    syntax: "Automatic in Angular Universal applications",
    codeExample:
      "// Hydration happens automatically when using Angular Universal\n// Server-side rendering generates static HTML\n// Client-side hydration adds interactivity\n\n// In your server.ts\nserver.get('*', (req, res) => {\n  res.render(indexHtml, {\n    req,\n    providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }]\n  });\n});",
  },
  {
    id: 29,
    question: "What is Angular's incremental hydration?",
    answer:
      "Incremental hydration in Angular loads and hydrates parts of the application progressively, improving performance by prioritizing visible and interactive elements first.",
    example:
      "Incremental hydration allows users to start interacting with the page sooner, as critical parts become interactive while less important sections load in the background.",
    realTimeExample:
      "Incremental hydration is like a restaurant that serves appetizers first while the main course is being prepared. You can start enjoying parts of your meal immediately, while the rest is being cooked to perfection in the background, ensuring you're never left waiting with an empty plate for long.",
    realTimeExample2:
      "Imagine incremental hydration as a progressive download for a video game. The first level becomes playable quickly while the rest of the game downloads in the background. You can start playing immediately with the available content, and the game expands as more sections become ready, providing a seamless experience without long wait times.",
    syntax: "Automatic with Angular's hydration system",
    codeExample:
      "// Incremental hydration is handled automatically by Angular\n// Components can be marked for priority hydration\n@Component({\n  selector: 'app-priority',\n  template: `...`,\n  standalone: true,\n  // Angular automatically prioritizes hydration for\n  // components that are visible in the viewport\n})\nexport class PriorityComponent {}",
  },
  {
    id: 30,
    question: "What is Angular's non-destructive hydration?",
    answer:
      "Non-destructive hydration in Angular preserves the server-rendered DOM and adds interactivity without re-rendering, maintaining the initial state and improving performance.",
    example:
      "Non-destructive hydration attaches event listeners and makes elements interactive while keeping the existing DOM structure intact.",
    realTimeExample:
      "Non-destructive hydration is like a museum where the exhibits are already perfectly arranged when you enter. Instead of rearranging everything, the museum simply turns on interactive displays and audio guides, enhancing your experience without changing the carefully curated layout.",
    realTimeExample2:
      "Imagine non-destructive hydration as a smart home system in a fully furnished house. The furniture and decor (server-rendered DOM) are already in place, and the system simply activates the smart features (interactivity) - turning on lights, adjusting thermostats, and enabling voice control - without moving any of the existing furniture or redecorating.",
    syntax: "Automatic in Angular Universal applications",
    codeExample: `
      // Server-side rendered template (index.html or server template)
      <h1>Welcome {{ userName }}</h1>
      <button id="counter">Clicked 0 times</button>

      // Client-side component with non-destructive hydration
      @Component({
        selector: 'app-root',
        template: \`
          <h1>Welcome {{ userName }}</h1>
          <button id="counter" (click)="increment()">Clicked {{ count }} times</button>
        \`,
        standalone: true
      })
      export class AppComponent {
        userName = 'John'; // Matches server-rendered value
        count = 0; // Will be hydrated from server-rendered value

        increment() {
          this.count++;
        }
      }

      // In your server.ts (Angular Universal)
      server.get('*', (req, res) => {
        res.render(indexHtml, {
          req,
          providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }],
          // The server renders the initial HTML with the correct values
          // Client-side hydration will attach event listeners without re-rendering
        });
      });
    `,
  },
  {
    id: 31,
    question: "What is Angular's partial hydration?",
    answer:
      "Partial hydration in Angular hydrates only interactive parts of the page, leaving static content as-is, which improves performance by reducing the amount of client-side processing needed.",
    example:
      "Partial hydration focuses resources on making interactive elements functional while leaving static content in its server-rendered state.",
    realTimeExample:
      "Partial hydration is like a hybrid car that only uses electricity for acceleration and braking, while coasting on momentum for steady speeds. The interactive parts (acceleration, braking) get full power, while static content (coasting) requires no additional energy, making the whole system more efficient.",
    realTimeExample2:
      "Imagine partial hydration as a smart city where only the traffic lights and public transport (interactive elements) are electronically controlled, while buildings and parks (static content) remain as they are. This focuses resources on what needs to be dynamic, making the city more efficient without sacrificing functionality.",
    syntax: "@defer (on interaction) { ... }",
    codeExample:
      "@Component({\n  template: `\n    <!-- Static content remains as-is -->\n    <h1>Welcome to our site</h1>\n    <p>This is static information that doesn't need hydration.</p>\n    \n    <!-- Interactive element gets hydrated -->\n    @defer (on viewport) {\n      <interactive-component></interactive-component>\n    }\n  `,\n  standalone: true\n})\nexport class PartialHydrationComponent {}",
  },
  {
    id: 32,
    question: "What is Angular's server-side rendering (SSR)?",
    answer:
      "Angular's server-side rendering (SSR) renders Angular applications on the server, sending fully rendered HTML to the client for faster initial loads and better SEO.",
    example:
      "SSR improves perceived performance by showing content immediately while the client-side app loads, and helps search engines index content that would otherwise be hidden in a single-page application.",
    realTimeExample:
      "SSR is like receiving a fully assembled model kit in the mail. You can see and admire the complete model immediately, while the instructions (client-side app) are still being delivered. This is much faster than receiving a box of parts and having to assemble everything yourself before you can see the final product.",
    realTimeExample2:
      "Imagine SSR as a movie that's already playing when you arrive at the theater. You see the current scene immediately while the projector (client-side app) is still warming up. This is more engaging than arriving to a blank screen and waiting for the movie to start, just like SSR provides immediate content while the full app loads.",
    syntax: "ng add @nguniversal/express-engine",
    codeExample:
      "// Install SSR\nng add @nguniversal/express-engine\n\n// Server-side rendering setup\nimport { ngExpressEngine } from '@nguniversal/express-engine';\nimport * as express from 'express';\n\nconst app = express();\napp.engine('html', ngExpressEngine({\n  bootstrap: AppServerModule\n}));\n\napp.get('*', (req, res) => {\n  res.render('index', { req, providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }] });\n});",
  },
];

// Make data available globally
window.advanced = advanced;
