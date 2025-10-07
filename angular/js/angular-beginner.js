// Angular Beginner Level Q&A Data

let beginner = [
  {
    id: 1,
    question: "What is Angular?",
    answer:
      "Angular is a special tool made by a company called Google. It helps people make websites and apps that work on the internet. It uses a language called TypeScript, which is like a way to talk to computers. Angular is free, and anyone can use it. It helps make websites that are fast and fun to use. Many big websites use Angular to work well.",
    example:
      "Imagine you are building a big toy house with lots of rooms. Angular is like a magic kit that gives you all the pieces you need, like doors, windows, and walls. You use it to make websites that look nice and do things when you click buttons. For example, you can make a website that shows pictures of animals. When you click a button that says 'more cats', the website brings new pictures of cats from the internet and shows them to you right away. It's like having a helper that brings toys when you ask for them.",
    realTimeExample:
      "Angular is like a big organizer for websites. It has parts called components that handle different jobs, like showing buttons or lists. Modules are like folders that group these parts together. Services are like helpers that share information. In real time, when you click a button, Angular checks the component, updates the data, and refreshes the screen. This happens quickly, like a team working together to show you new information right away.",
    codeExample:
      "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-root',\n  template: '<h1>Hello Angular</h1>'\n})\nexport class AppComponent {}",
  },
  {
    id: 2,
    question: "How to enable AnimationsModule in Angular?",
    answer:
      "To make things move on your website, like buttons jumping or pictures sliding, you need to turn on something called AnimationsModule. You do this by writing some special words in a file called app.module.ts. You tell the computer to bring in BrowserAnimationsModule, which is like a box of moving parts.",
    example:
      "Think of your website as a puppet show. The puppets need strings to move. AnimationsModule is like the strings. To make the puppets dance, you go to the control room, which is your app.module.ts file, and you say 'bring in the strings from the box called BrowserAnimationsModule'. You write: import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; Then you put it in the list of things to use. Now when you click a button, it can bounce like a ball or spin like a top. It's like giving life to your website pictures!",
    realTimeExample:
      "AnimationsModule is like a switch that turns on movement in websites. It uses BrowserAnimationsModule to make elements animate. In real time, when you click a button, the module checks the animation rules, calculates the movement, and updates the screen frame by frame. This creates smooth transitions, like a ball bouncing or a door opening slowly.",
    codeExample:
      "import { BrowserAnimationsModule } from '@angular/platform-browser/animations';\n\n@NgModule({\n  imports: [BrowserAnimationsModule]\n})\nexport class AppModule {}",
  },
  {
    id: 3,
    question: "How to disable AnimationsModule in Angular?",
    answer:
      "To disable animations, you import NoopAnimationsModule in your app.module.ts instead of BrowserAnimationsModule.",
    example:
      "Sometimes you don't want your website to have fancy animations, maybe to make it load faster or look simple. You can turn off the animation machine. In app.module.ts, you write: import { NoopAnimationsModule } from '@angular/platform-browser/animations'; Then, add NoopAnimationsModule to imports instead. It's like telling the toy to stop moving so you can play quietly.",
    realTimeExample:
      "NoopAnimationsModule is like a placeholder that skips animations. It replaces BrowserAnimationsModule to disable movements. In real time, when animations would run, this module does nothing, so the elements change instantly without transitions. This speeds up the app, like jumping directly to the end instead of walking step by step.",
    codeExample:
      "import { NoopAnimationsModule } from '@angular/platform-browser/animations';\n\n@NgModule({\n  imports: [NoopAnimationsModule]\n})\nexport class AppModule {}",
  },
  {
    id: 4,
    question: "What is @NgModule in app.module.ts?",
    answer:
      "@NgModule is one of the decorators in Angular. It takes a metadata object that tells Angular how to compile and launch the application.",
    example:
      "@NgModule is like the captain of a spaceship. It tells Angular what parts to bring on the trip. You write @NgModule({ declarations: [AppComponent], imports: [BrowserModule], providers: [], bootstrap: [AppComponent] }) and it says 'Hey Angular, use these components, bring these tools, and start with AppComponent!' Without it, Angular wouldn't know how to launch your app.",
    codeExample: "@NgModule({\n  declarations: [AppComponent],\n  imports: [BrowserModule],\n  providers: [],\n  bootstrap: [AppComponent]\n})\nexport class AppModule {}"
  },
  {
    id: 5,
    question: "What are declarations in Angular in app.module.ts?",
    answer:
      "Declarations in Angular list the components, directives, and pipes that belong to this module.",
    example:
      "Declarations are like telling your friends who is coming to the party. In app.module.ts, you list declarations: [AppComponent, HeaderComponent, FooterComponent]. This tells Angular 'These are my special parts: the main app, the header, and the footer.' Angular uses this list to know what to include in your website.",
    codeExample: "@NgModule({\n  declarations: [AppComponent, HeaderComponent, FooterComponent]\n})\nexport class AppModule {}"
  },
  {
    id: 6,
    question: "What are the imports in Angular in app.module.ts?",
    answer:
      "The imports array in app.module.ts is where you include other Angular modules that your module depends on.",
    example:
      "imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(routes)]",
  },
  {
    id: 7,
    question: "What are the providers in app.module.ts?",
    answer:
      "Providers are services or classes that Angular can inject into components and other services. They are listed in the providers array.",
    example: "providers: [DataService, AuthGuard]",
  },
  {
    id: 8,
    question: "What is BrowserModule in app.module.ts?",
    answer:
      "BrowserModule is required for running your Angular application in a browser. It is imported from @angular/platform-browser.",
    example: "import { BrowserModule } from '@angular/platform-browser';",
  },
  {
    id: 9,
    question: "What is CommonModule in app.module.ts?",
    answer:
      "CommonModule is used when you want to use basic Angular directives like NgIf, NgFor in your modules.",
    example: "import { CommonModule } from '@angular/common';",
  },
  {
    id: 10,
    question: "What is dependency injection in Angular?",
    answer:
      "Dependency injection is a design pattern where components and services are provided with their dependencies, typically services, without creating them directly.",
    example:
      "constructor(private http: HttpClient) { } // HttpClient is injected",
  },
  {
    id: 11,
    question: "How to serve in production mode?",
    answer:
      "To serve the application in production mode, run the command 'ng serve --prod'.",
    example: "ng serve --prod --port 4200",
  },
  {
    id: 12,
    question: "What are decorators in Angular?",
    answer:
      "Decorators are functions used to add metadata to classes, methods, or properties. In Angular, common decorators include @Component, @Injectable, and @NgModule.",
    example: "@Component({ selector: 'app-root', template: '<h1>Hello</h1>' })",
  },
  {
    id: 13,
    question: "What are Observables in Angular?",
    answer:
      "Observables are streams of data that can emit multiple values over time. Angular uses Observables for asynchronous operations like HTTP requests.",
    example: "this.http.get('/api/data').subscribe(data => console.log(data));",
  },
  {
    id: 14,
    question: "What are Promises?",
    answer:
      "A Promise is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value. Unlike Observables, Promises emit a single value.",
    example:
      "fetch('/api/data').then(response => response.json()).then(data => console.log(data));",
  },
  {
    id: 15,
    question: "What is DOM?",
    answer:
      "The Document Object Model (DOM) is an interface for web documents. It allows JavaScript to manipulate the structure, style, and content of web pages.",
    example: "document.getElementById('myDiv').innerHTML = 'Hello World';",
  },
  {
    id: 16,
    question: "What are DOM elements?",
    answer:
      "DOM elements in Angular typically refer to HTML elements that are manipulated using ElementRef and TemplateRef in templates.",
    example: "@ViewChild('myElement') myElement: ElementRef;",
  },
  {
    id: 17,
    question: "Explain the syntax of app.module.ts",
    answer:
      "@NgModule({declarations: [], imports: [], providers: [], bootstrap: [AppComponent]})",
    example:
      "@NgModule({ declarations: [AppComponent], imports: [BrowserModule], providers: [], bootstrap: [AppComponent] }) export class AppModule { }",
  },
  {
    id: 18,
    question: "Explain the syntax of app.component.ts",
    answer:
      "@Component({selector: 'app-dashboard', templateUrl: '', styleUrls: ['']})",
    example:
      "@Component({ selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.css'] }) export class AppComponent { title = 'My App'; }",
  },
  {
    id: 19,
    question: "Explain the syntax of services.",
    answer:
      "@Injectable({providedIn: 'root'}) export class ApiServicesService { }",
    example:
      "@Injectable({ providedIn: 'root' }) export class DataService { getData() { return this.http.get('/api/data'); } }",
  },
  {
    id: 20,
    question: "What are Directives in Angular?",
    answer:
      "Directives are classes that modify the DOM in Angular applications. There are three types: Component Directives, Structural Directives, and Attribute Directives.",
    example: "*ngIf='condition' (structural), ngClass='classes' (attribute)",
  },
  {
    id: 21,
    question: "What is data binding?",
    answer:
      "Data binding in Angular is the mechanism of connecting a component's data to its template and vice versa.",
    example:
      "{{ name }} (interpolation), [disabled]='isDisabled' (property), (click)='onClick()' (event)",
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
    example: "Name: {{ user.name }}, <input [(ngModel)]='user.name'>",
  },
  {
    id: 23,
    question: "What is String Interpolation in Angular?",
    answer:
      "String Interpolation is a type of one-way data binding where data from the component is displayed in the HTML view, using the syntax {{ data }}.",
    example: "<h1>Welcome {{ userName }}!</h1>",
  },
  {
    id: 24,
    question: "What is property binding?",
    answer:
      "Property binding is a one-way binding mechanism in Angular where data from the component is passed to the HTML element's property, such as [src]='imageUrl'.",
    example: "<img [src]='imageUrl' [alt]='imageAlt'>",
  },
  {
    id: 25,
    question: "What is event binding?",
    answer:
      "Event binding is used to listen for events in the template, such as (click)='method()'. It allows you to trigger a method in the component when a specific event happens.",
    example: "<button (click)='saveData()'>Save</button>",
  },
  {
    id: 26,
    question: "What is two-way binding?",
    answer:
      "Two-way binding allows automatic synchronization of data between the component and the view. It is implemented with the [(ngModel)] directive.",
    example: "<input [(ngModel)]='name'> <p>Hello {{ name }}!</p>",
  },
  {
    id: 27,
    question: "What are modules?",
    answer:
      "Modules in Angular are used to organize an application. They group components, directives, pipes, and services into cohesive blocks of functionality.",
    example:
      "@NgModule({ declarations: [AppComponent], imports: [BrowserModule] })",
  },
  {
    id: 28,
    question: "What are lifecycle hooks in Angular?",
    answer:
      "Lifecycle hooks are methods that Angular calls during different phases of a component's lifecycle, such as ngOnInit, ngOnDestroy, ngOnChanges, etc.",
    example:
      "ngOnInit() { this.loadData(); } ngOnDestroy() { this.subscription.unsubscribe(); }",
  },
  {
    id: 29,
    question: "What are components in Angular?",
    answer:
      "Components are the basic building blocks of an Angular application. Each component consists of a TypeScript class, an HTML template, and a CSS file.",
    example:
      "@Component({ selector: 'app-user', template: '<p>User: {{ name }}</p>' }) export class UserComponent { name = 'John'; }",
  },
  {
    id: 30,
    question: "What are pipes in Angular?",
    answer:
      "Pipes are used to transform data in Angular templates. They can format dates, numbers, and other types of data.",
    example: "{{ birthday | date:'shortDate' }}, {{ price | currency:'USD' }}",
  },
  {
    id: 31,
    question: "What is a parameterized pipe?",
    answer:
      "A parameterized pipe takes arguments to modify the data before displaying it, such as a custom pipe that transforms a value based on parameters.",
    example: "{{ text | slice:0:10 }}, {{ number | number:'1.2-2' }}",
  },
  {
    id: 32,
    question: "What is the purpose of AsyncPipe in Angular?",
    answer:
      "AsyncPipe subscribes to an Observable or a Promise and returns the latest value emitted by it. It also handles unsubscription automatically.",
    example: "<div *ngIf='data$ | async as data'>{{ data.name }}</div>",
  },
  {
    id: 33,
    question: "What are filters in Angular?",
    answer:
      "Filters in Angular allow for transforming the display value of expressions in templates, such as filtering arrays or formatting text.",
    example: "*ngFor='let item of items | filter:searchTerm'",
  },
  {
    id: 34,
    question: "What is a Wildcard Route in Angular?",
    answer:
      "The Wildcard Route is used in Angular applications to handle invalid URLs, redirecting them to a 404 or a default route.",
    example: "{ path: '**', redirectTo: '/not-found' }",
  },
  {
    id: 35,
    question: "What are interfaces in Angular?",
    answer:
      "Interfaces are used at compile-time to define a contract for class instances, ensuring that expected data follows a particular structure.",
    example: "interface User { id: number; name: string; }",
  },
  {
    id: 36,
    question: "What is a Built-in directive?",
    answer:
      "Some common built-in directives are ngIf, ngSwitch, ngFor, ngStyle, ngClass, ngModel.",
    example:
      "<div *ngIf='show'>Visible</div>, <div [ngClass]='classes'>Styled</div>",
  },
  {
    id: 37,
    question: "What is an Angular custom directive?",
    answer:
      "Angular allows us to create custom directives when we need additional behavior not provided by the built-in directives.",
    example:
      "@Directive({ selector: '[appHighlight]' }) export class HighlightDirective { ... }",
  },
  {
    id: 38,
    question: "What are Angular services?",
    answer:
      "Services in Angular are singleton objects used to organize and share data, logic, or functions across components in an application.",
    example:
      "@Injectable({ providedIn: 'root' }) export class UserService { getUsers() { return this.http.get('/api/users'); } }",
  },
  {
    id: 39,
    question: "What are Angular templates?",
    answer:
      "Templates in Angular define a component's view using HTML, Angular directives, and binding syntax.",
    example:
      "<div>{{ title }}</div><button (click)='onClick()'>Click me</button>",
  },
  {
    id: 40,
    question: "What is Angular CLI?",
    answer:
      "Angular CLI is like a helpful friend that makes building Angular apps easier. It's a special program you can run in your computer's command line. It helps you create new projects, add parts to your app, and even build and test your app without doing everything by hand. Think of it as a magic tool that speeds up your work!",
    example:
      "Imagine you're building a treehouse. Angular CLI is like a super smart robot helper. You say 'ng new my-treehouse' and it builds the whole base for you. Then 'ng generate component window' adds a window, and 'ng build --prod' makes it strong and ready for friends to play in. Without CLI, you'd have to hammer every nail yourself, but with it, it's like having a team of builders!",
  },
  {
    id: 41,
    question: "How do you create a new Angular project?",
    answer:
      "Creating a new Angular project is simple! You open your computer's command line or terminal, and type 'ng new project-name'. Replace 'project-name' with whatever you want to call your project, like 'my-awesome-app'. Then press enter, and Angular CLI will set up all the files and folders for you automatically. It's like starting a new drawing with a blank canvas!",
    example:
      "Picture this: You want to make a new game. You open the magic computer window and type 'ng new super-game --routing --style=scss'. The computer thinks for a bit, and poof! It creates folders for your game, sets up roads (routing) for players to move around, and makes it look colorful with styles. Now you can start adding levels and characters. It's like getting a ready-made playground to customize!",
  },
  {
    id: 42,
    question: "What is the difference between AngularJS and Angular?",
    answer:
      "AngularJS was the first version of Angular, like version 1. It was good, but had some problems. Angular (starting from version 2) is a completely new and better version. It uses TypeScript, which makes it stronger and faster. Angular is like a upgraded toy car that goes faster and has more cool features than the old one!",
    example:
      "AngularJS uses JavaScript, Angular uses TypeScript and has better performance.",
  },
  {
    id: 43,
    question: "What is a component selector?",
    answer:
      "A component selector is like a name tag for your component. It's a special word or phrase that tells Angular where to put your component in the HTML. For example, the main component uses 'app-root'. When you write <app-root> in your HTML, Angular knows to show that component there. It's like calling someone's name to get their attention!",
    example: "selector: 'app-header' used as <app-header></app-header>",
  },
  {
    id: 44,
    question: "What is the purpose of ngOnInit?",
    answer:
      "ngOnInit is like a starting signal in a race. It's a special method that Angular calls when a component is ready to start working. You put code here that needs to run right after the component is set up, like loading data from a server. It's the perfect place to do 'first things first' tasks!",
    example: "ngOnInit() { this.loadUserData(); }",
  },
  {
    id: 45,
    question: "What are structural directives?",
    answer:
      "Structural directives are like magic wands that can add or remove parts of your web page. They change the structure of the HTML. For example, *ngIf can hide or show a button, and *ngFor can repeat a list of items. They help make your page dynamic, like changing a Lego structure by adding or removing pieces!",
    example:
      "<div *ngIf='isVisible'>Show me</div>, <li *ngFor='let item of items'>{{ item }}</li>",
  },
  {
    id: 46,
    question: "What are attribute directives?",
    answer:
      "Attribute directives are like stickers you put on HTML elements to change how they look or act. They don't add or remove elements, but they can change colors, sizes, or behaviors. For example, ngClass can change the style of a button, and ngStyle can change its color. It's like decorating a cake with different toppings!",
    example:
      "<div [ngClass]='{ active: isActive }'>Styled div</div>, <p [ngStyle]='{ color: textColor }'>Colored text</p>",
  },
  {
    id: 47,
    question: "How to handle forms in Angular?",
    answer:
      "Forms in Angular are like questionnaires where users fill in information. Angular gives you two ways to handle them. One is template-driven forms, where you use simple things like ngModel in your HTML. The other is reactive forms, where you write more code in your component to control the form. It's like choosing between a simple coloring book or a detailed painting set!",
    example:
      "Template: <input [(ngModel)]='name'>, Reactive: this.form = new FormGroup({ name: new FormControl('') });",
  },
  {
    id: 48,
    question: "What is routing in Angular?",
    answer:
      "Routing in Angular is like having different rooms in a house. It lets users move from one part of your app to another without reloading the whole page. You use RouterModule to set up paths, like '/home' or '/about'. When someone clicks a link, Angular shows the right component. It's like teleporting between rooms in a video game!",
    example:
      "const routes: Routes = [{ path: 'home', component: HomeComponent }]; <router-outlet></router-outlet>",
    codeExample: "const routes: Routes = [\n  { path: 'home', component: HomeComponent },\n  { path: 'about', component: AboutComponent }\n];\n\n@NgModule({\n  imports: [RouterModule.forRoot(routes)]\n})\nexport class AppModule {}"
  },
  {
    id: 49,
    question: "What is the difference between constructor and ngOnInit?",
    answer:
      "The constructor is like the birth of a component. It's where Angular gives the component its 'tools' or services it needs, like a backpack full of supplies. ngOnInit happens right after, like the component waking up and getting ready. You use constructor for setup, and ngOnInit for starting tasks. It's like first getting dressed (constructor), then eating breakfast (ngOnInit)!",
    example:
      "constructor(private service: DataService) { }, ngOnInit() { this.service.getData().subscribe(...); }",
  },
  {
    id: 50,
    question: "What is Angular Material?",
    answer:
      "Angular Material is like a big box of ready-made building blocks for your Angular apps. It gives you cool parts like buttons that look nice, cards to show information, and dialogs for pop-up messages. You don't have to design them yourself; just use them! It's like having pre-cut shapes for a puzzle instead of drawing your own.",
    example:
      "import { MatButtonModule } from '@angular/material/button'; <button mat-raised-button>Click me</button>",
  },
  {
    id: 51,
    question: "How to install Angular CLI?",
    answer:
      "Installing Angular CLI is easy! You need to have Node.js and npm on your computer first. Then, open your terminal and type 'npm install -g @angular/cli'. The '-g' means it installs it for the whole computer. After it finishes, you can use commands like 'ng new' to create projects. It's like downloading a new app on your phone!",
    example: "npm install -g @angular/cli",
  },
  {
    id: 52,
    question: "What is the app.component.ts file?",
    answer:
      "The app.component.ts file is like the boss of your Angular app. It's the main component that holds everything together. It has the code for the root component, including its name, what it looks like, and what it does. Every Angular app starts with this file, like the captain of a team!",
    example:
      "@Component({ selector: 'app-root', templateUrl: './app.component.html' }) export class AppComponent { title = 'MyApp'; }",
  },
  {
    id: 53,
    question: "What is the main.ts file?",
    answer:
      "main.ts is like the starter button for your Angular app. It's the first file that runs when your app starts. It tells Angular to load the main module and get everything going. Without it, your app wouldn't know how to begin. It's like pressing 'play' on a video game!",
    example:
      "platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.error(err));",
  },
  {
    id: 54,
    question: "What is the index.html file?",
    answer:
      "index.html is the main page of your Angular app, like the cover of a book. It's a simple HTML file that includes a special tag <app-root> where Angular puts all your components. When you open your app in a browser, this is what loads first. It's like the front door to your house!",
    example: "<!DOCTYPE html><html><body><app-root></app-root></body></html>",
  },
  {
    id: 55,
    question: "What is the purpose of zone.js?",
    answer:
      "Zone.js is like a smart detective in your Angular app. It watches for changes in your app, like when data updates or buttons are clicked. It helps Angular know when to update the screen. Without it, Angular wouldn't know what to refresh. It's like having eyes everywhere to spot when something changes!",
    example:
      "Zone.js patches async operations like setTimeout, Promise, to trigger change detection.",
  },
  {
    id: 56,
    question: "What is RxJS?",
    answer:
      "RxJS is like a magical stream of water that carries information. It's a library that helps handle things that happen over time, like waiting for a server to respond. Angular uses it with Observables to manage async tasks. Imagine a river that brings messages from far away whenever they're ready!",
    example:
      "import { Observable } from 'rxjs'; const obs = new Observable(subscriber => { subscriber.next('Hello'); });",
  },
  {
    id: 57,
    question: "How to make HTTP requests in Angular?",
    answer:
      "Making HTTP requests in Angular is like sending a letter to a friend. You use the HttpClient service to ask for data from a server. First, you import it, then inject it into your component, and call methods like get() or post(). It's how your app talks to the internet, like chatting with a distant friend!",
    example:
      "this.http.get('/api/users').subscribe(users => this.users = users);",
  },
  {
    id: 58,
    question: "What is HttpClient?",
    answer:
      "HttpClient is like a messenger in your Angular app. It's a special service that lets you send requests to web servers and get responses back. You can use it to fetch data, send forms, or update information. It has easy methods like get, post, put, and delete. It's your app's way to communicate with the world!",
    example:
      "constructor(private http: HttpClient) {} this.http.post('/api/login', credentials).subscribe(...);",
  },
  {
    id: 59,
    question: "What is template reference variables?",
    answer:
      "Template reference variables are like nicknames for parts of your HTML. You put a # in front, like #myButton, and then you can use that name in your code to talk to that element. For example, you can check what a user typed in an input box. It's like giving a toy a name so you can play with it easily!",
    example:
      "<input #nameInput> <button (click)='submit(nameInput.value)'>Submit</button>",
  },
  {
    id: 60,
    question: "What is ViewEncapsulation?",
    answer:
      "ViewEncapsulation is like putting walls around each room in your house. It decides how styles (like colors) from one component affect others. In Angular, you can choose Emulated (default, like thin walls), None (no walls, styles mix), or ShadowDom (strong walls). It keeps your app's look organized, like separate bedrooms for different styles!",
    example:
      "@Component({ encapsulation: ViewEncapsulation.ShadowDom }) // Styles are isolated",
  },
  {
    id: 61,
    question: "What is the difference between ng-container and ng-template?",
    answer:
      "ng-container and ng-template are both like invisible helpers in your HTML. ng-container is used to group things together without adding any extra tags to the final page, like putting toys in a box that disappears. ng-template defines a template that you can use later, like a recipe card you save for cooking dinner. Use ng-container for organizing, and ng-template for reusable parts!",
    example:
      "<ng-container *ngIf='show'><p>Content</p></ng-container>, <ng-template #myTemplate><p>Reusable</p></ng-template>",
  },
  {
    id: 62,
    question: "What is router outlet?",
    answer:
      "Router outlet is like a magic door in your Angular app. It's a special spot in your template where different components appear based on the URL. When you click a link to go to '/home', the home component shows up in the router outlet. It's like changing TV channels; the outlet is the screen, and routes are the channels!",
    example:
      "<router-outlet></router-outlet> <!-- Components appear here based on route -->",
  },
  {
    id: 63,
    question: "What is lazy loading?",
    answer:
      "Lazy loading is like only unpacking the toys you need to play with right now. Instead of loading all parts of your Angular app at once, it waits until you need them. For example, the login page loads only when you go there. This makes your app start faster, like a game that loads levels one by one!",
    example:
      "const routes: Routes = [{ path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }];",
  },
  {
    id: 64,
    question: "What is a guard in Angular?",
    answer:
      "A guard in Angular is like a security guard at a party. It checks if someone can enter a certain part of your app. For example, a CanActivate guard might check if you're logged in before letting you see a secret page. There are different types like CanDeactivate (to stop leaving) and Resolve (to get data first). It's your app's bouncer!",
    example:
      "canActivate(route: ActivatedRouteSnapshot): boolean { return this.auth.isLoggedIn(); }",
  },
  {
    id: 65,
    question: "What is the difference between Observable and Subject?",
    answer:
      "Observable is like a radio station that broadcasts music. You tune in (subscribe) to listen. Subject is like a DJ who can both play music and let others join the broadcast. Observables are for receiving data, Subjects can send data to many listeners. Think of Observable as a one-way street, Subject as a busy intersection!",
    example:
      "const obs = of(1,2,3); obs.subscribe(x => console.log(x)); const subject = new Subject(); subject.subscribe(...); subject.next(1);",
  },
  {
    id: 66,
    question: "What is BehaviorSubject?",
    answer:
      "BehaviorSubject is like a friendly radio that remembers the last song it played. When a new listener tunes in, it immediately plays the current song. It always has a value ready. Imagine walking into a room where music is already playing; you hear it right away. That's BehaviorSubject!",
    example:
      "const subject = new BehaviorSubject(0); subject.subscribe(x => console.log(x)); // logs 0 immediately",
  },
  {
    id: 67,
    question: "What is trackBy in ngFor?",
    answer:
      "trackBy in *ngFor is like giving each item in a list a special ID card. When the list changes, Angular uses this ID to know which items are new, changed, or gone, instead of guessing. This makes updates faster and smoother. It's like labeling boxes so you know which one has your favorite toy!",
    example:
      "<li *ngFor='let item of items; trackBy: trackByFn'>{{ item.name }}</li> trackByFn(index, item) { return item.id; }",
  },
  {
    id: 68,
    question: "What is the difference between ngIf and hidden?",
    answer:
      "ngIf and hidden are both ways to hide things, but differently. ngIf completely removes the element from the page, like erasing a drawing. Hidden just makes it invisible with CSS, like covering it with a blanket. Use ngIf when you don't need it at all, hidden when you might show it again soon. It's like deleting vs. hiding a file on your computer!",
    example:
      "<div *ngIf='show'>Removed</div> vs <div [hidden]='!show'>Invisible</div>",
  },
  {
    id: 69,
    question: "What is ngSwitch?",
    answer:
      "ngSwitch is like a traffic light for your HTML. It checks a value and shows different things based on it. For example, if the value is 'red', show a stop sign; if 'green', show a go sign. It's a way to switch between options without lots of if-else. Imagine choosing outfits: if it's cold, wear a coat; if hot, wear shorts!",
    example:
      "<div [ngSwitch]='color'> <p *ngSwitchCase=''red'>Stop</p> <p *ngSwitchCase=''green'>Go</p> </div>",
  },
  {
    id: 70,
    question: "What is the purpose of ngOnChanges?",
    answer:
      "ngOnChanges is like a notification bell that rings when something changes. It's a lifecycle hook that Angular calls whenever the inputs to a component change, like when a parent sends new data. You can use it to react to changes, such as updating a display. It's your component's way of saying 'Hey, something new happened!'",
    example:
      "ngOnChanges(changes: SimpleChanges) { if (changes['inputProp']) { this.doSomething(); } }",
  },
  {
    id: 71,
    question: "What is ngOnDestroy?",
    answer:
      "ngOnDestroy is like a goodbye party for your component. It's a lifecycle hook that Angular calls just before it removes the component from the page. You use it to clean up things, like stopping timers or canceling subscriptions. It's the last chance to tidy up before the component goes away. Think of it as putting away your toys before bedtime!",
    example:
      "ngOnDestroy() { this.subscription.unsubscribe(); clearInterval(this.timer); }",
  },
  {
    id: 72,
    question:
      "What is the difference between providedIn: 'root' and providers array?",
    answer:
      "providedIn: 'root' and providers array are ways to share services. providedIn: 'root' makes the service available everywhere in the app, like a global toy box. The providers array in a module or component makes it available only in that part, like a private toy box. Use 'root' for app-wide services, providers for local ones. It's like sharing toys with everyone vs. just your room!",
    example:
      "@Injectable({ providedIn: 'root' }) vs providers: [MyService] in @NgModule or @Component",
  },
  {
    id: 73,
    question: "What is a singleton service?",
    answer:
      "A singleton service is like having only one copy of a favorite book. No matter how many people want it, there's just one instance shared by everyone. In Angular, it means the service is created once and reused, saving memory. Imagine a single ice cream scoop for the whole class instead of one per kid!",
    example:
      "@Injectable({ providedIn: 'root' }) ensures only one instance app-wide.",
  },
  {
    id: 74,
    question: "What is the purpose of @Input?",
    answer:
      "@Input is like a gift from a parent to a child. It lets parent components send data to child components. For example, a parent can pass a name or color to a child button. The child can then use that data. It's how components share information down the family tree!",
    example: "@Input() name: string; <child [name]='parentName'></child>",
  },
  {
    id: 75,
    question: "What is the purpose of @Output?",
    answer:
      "@Output is like a child telling a parent something important. It lets child components send messages or events back to parent components using EventEmitter. For example, a child button can tell the parent 'I was clicked!'. It's how children communicate up the family tree!",
    example:
      "@Output() clicked = new EventEmitter(); <child (clicked)='handleClick()'></child>",
  },
  {
    id: 76,
    question: "What is EventEmitter?",
    answer:
      "EventEmitter is like a messenger pigeon in your Angular app. It's a class that helps child components send custom events to parent components. You create an EventEmitter, and when something happens, you 'emit' a message. The parent listens and reacts. It's like sending a note in a bottle from child to parent!",
    example:
      "const emitter = new EventEmitter<string>(); emitter.emit('Hello from child!');",
  },
  {
    id: 77,
    question: "What is FormBuilder?",
    answer:
      "FormBuilder is like a helpful assistant for building forms. It's a service that makes creating reactive forms easier. Instead of writing lots of code, you use its methods to quickly make FormControls, FormGroups, and FormArrays. It's like having a kit that assembles a model car faster than doing it piece by piece!",
    example: "this.form = this.fb.group({ name: [''], email: [''] });",
  },
  {
    id: 78,
    question: "What is Validators?",
    answer:
      "Validators are like referees in a game. They check if the information in forms is correct. For example, 'required' makes sure a field isn't empty, 'minLength' checks if it's long enough. They help prevent bad data from being submitted. Imagine a teacher checking your homework before you turn it in!",
    example: "name: ['', [Validators.required, Validators.minLength(3)]]",
  },
  {
    id: 79,
    question: "What is the purpose of ngForm?",
    answer:
      "ngForm is like a wrapper around your form that keeps track of everything. In template-driven forms, it creates a FormGroup behind the scenes and connects it to your <form> tag. It helps manage validation and submission. It's like a coach who organizes the team and makes sure everyone plays by the rules!",
    example:
      "<form #f='ngForm' (ngSubmit)='onSubmit(f)'> <input ngModel name='name'> </form>",
  },
];

// Make data available globally
window.beginner = beginner;
