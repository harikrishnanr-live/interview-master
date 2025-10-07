// Angular Beginner Level Q&A Data

const beginner = [
  {
    id: 1,
    question: "What is Angular?",
    answer:
      "Angular is a special tool made by a company called Google. It helps people make websites and apps that work on the internet. It uses a language called TypeScript, which is like a way to talk to computers. Angular is free, and anyone can use it. It helps make websites that are fast and fun to use. Many big websites use Angular to work well.",
    example:
      "Imagine you are building a big toy house with lots of rooms. Angular is like a magic kit that gives you all the pieces you need, like doors, windows, and walls. You use it to make websites that look nice and do things when you click buttons. For example, you can make a website that shows pictures of animals. When you click a button that says 'more cats', the website brings new pictures of cats from the internet and shows them to you right away. It's like having a helper that brings toys when you ask for them.",
    realTimeExample:
      "Angular is like a big organizer for websites. It has parts called components that handle different jobs, like showing buttons or lists. Modules are like folders that group these parts together. Services are like helpers that share information. In real time, when you click a button, Angular checks the component, updates the data, and refreshes the screen. This happens quickly, like a team working together to show you new information right away.",
    realTimeExample2:
      "Think of Angular as a restaurant kitchen. The chef (Angular) uses recipes (components) to make dishes (web pages). When a customer (user) orders something (clicks a button), the chef quickly prepares the dish (updates the view) using ingredients (data) from the pantry (services). The kitchen (Angular) makes sure everything is ready fast and looks good, just like a restaurant serving delicious food quickly.",
    syntax: "N/A (Conceptual)",
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
    realTimeExample2:
      "Imagine you have a toy robot. Without batteries, it just sits there. BrowserAnimationsModule is like putting in the batteries. Now, when you press a button, the robot can move its arms, blink its lights, and even dance. The animations are like the robot's movements, making your website interactive and fun, just like a toy that responds to your commands.",
    syntax:
      "import { BrowserAnimationsModule } from '@angular/platform-browser/animations';",
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
    realTimeExample2:
      "Think of NoopAnimationsModule as a mute button for animations. When you press mute on a TV, you still see the picture, but there's no sound. Similarly, with NoopAnimationsModule, you still see the elements, but they don't move or fade. It's like watching a silent movie where everything happens instantly, making your app feel snappier and more responsive.",
    syntax:
      "import { NoopAnimationsModule } from '@angular/platform-browser/animations';",
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
    realTimeExample:
      "@NgModule is like a blueprint for a building. It tells the builders (Angular) what rooms (components) to create, what materials (modules) to use, and where to start (bootstrap). In real time, when you run the app, Angular reads the blueprint and builds everything according to the plan, making sure all parts fit together perfectly.",
    realTimeExample2:
      "Imagine @NgModule as a recipe book for baking a cake. The recipe lists all the ingredients (imports), the steps (declarations), and the tools (providers) you need. When you follow the recipe, you get a delicious cake (your app). Without the recipe, you might forget something, and the cake won't turn out right. @NgModule makes sure everything is included and ready to go.",
    syntax:
      "@NgModule({ declarations: [], imports: [], providers: [], bootstrap: [] })",
    codeExample:
      "@NgModule({\n  declarations: [AppComponent],\n  imports: [BrowserModule],\n  providers: [],\n  bootstrap: [AppComponent]\n})\nexport class AppModule {}",
  },
  {
    id: 5,
    question: "What are declarations in Angular in app.module.ts?",
    answer:
      "Declarations in Angular list the components, directives, and pipes that belong to this module.",
    example:
      "Declarations are like telling your friends who is coming to the party. In app.module.ts, you list declarations: [AppComponent, HeaderComponent, FooterComponent]. This tells Angular 'These are my special parts: the main app, the header, and the footer.' Angular uses this list to know what to include in your website.",
    realTimeExample:
      "Declarations are like a guest list for a party. You write down all the people (components, directives, pipes) who are invited. When Angular throws the party (runs the app), it only lets the people on the list come in. This keeps everything organized and makes sure only the right parts are included.",
    realTimeExample2:
      "Think of declarations as a toolbox. Each tool (component, directive, pipe) has a specific job. When you list them in declarations, you're telling Angular, 'Here are all the tools I need to build my project.' Just like you wouldn't build a house without a hammer or a saw, Angular needs to know what tools to use to build your app correctly.",
    syntax: "declarations: [Component1, Component2, Directive1, Pipe1]",
    codeExample:
      "@NgModule({\n  declarations: [AppComponent, HeaderComponent, FooterComponent]\n})\nexport class AppModule {}",
  },
  {
    id: 6,
    question: "What are the imports in Angular in app.module.ts?",
    answer:
      "The imports array in app.module.ts is where you include other Angular modules that your module depends on.",
    example:
      "imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(routes)]",
    realTimeExample:
      "Imports are like inviting other teams to help with your project. Each team (module) has special skills, like BrowserModule for showing things on the screen or HttpClientModule for talking to the internet. When you import them, you're saying, 'I need your help to make my app work!'",
    realTimeExample2:
      "Imagine imports as ingredients for a recipe. BrowserModule is like flour, HttpClientModule is like sugar, and RouterModule is like eggs. You need all these ingredients to bake a cake (your app). Without them, your cake might not turn out right. Imports make sure you have everything you need to create a successful app.",
    syntax: "imports: [Module1, Module2, Module3]",
    codeExample:
      "@NgModule({\n  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(routes)]\n})\nexport class AppModule {}",
  },
  {
    id: 7,
    question: "What are the providers in app.module.ts?",
    answer:
      "Providers are services or classes that Angular can inject into components and other services. They are listed in the providers array.",
    example: "providers: [DataService, AuthGuard]",
    realTimeExample:
      "Providers are like helpers you hire for your party. DataService is like a waiter who brings food (data), and AuthGuard is like a bouncer who checks invitations (permissions). You list them in providers so Angular knows who to call when their help is needed.",
    realTimeExample2:
      "Think of providers as a team of experts. DataService is like a chef who cooks the food, AuthGuard is like a security guard who checks IDs, and other services are like cleaners or entertainers. When you list them in providers, you're telling Angular, 'Here are the experts I want to hire for my app.' This way, whenever a part of your app needs help, Angular knows exactly who to call.",
    syntax: "providers: [Service1, Service2]",
    codeExample:
      "@NgModule({\n  providers: [DataService, AuthGuard]\n})\nexport class AppModule {}",
  },
  {
    id: 8,
    question: "What is BrowserModule in app.module.ts?",
    answer:
      "BrowserModule is required for running your Angular application in a browser. It is imported from @angular/platform-browser.",
    example: "import { BrowserModule } from '@angular/platform-browser';",
    realTimeExample:
      "BrowserModule is like the foundation of a house. It's the first thing you need to build anything that will be seen in a browser. Without it, your app wouldn't know how to show anything on the screen, just like a house can't stand without a foundation.",
    realTimeExample2:
      "Imagine BrowserModule as the stage for a play. It sets up everything needed for the actors (your app) to perform. Without the stage, the actors wouldn't have a place to stand, and the audience (users) wouldn't be able to see the show. BrowserModule makes sure your app has a place to shine in the browser.",
    syntax: "import { BrowserModule } from '@angular/platform-browser';",
    codeExample:
      "import { BrowserModule } from '@angular/platform-browser';\n\n@NgModule({\n  imports: [BrowserModule]\n})\nexport class AppModule {}",
  },
  {
    id: 9,
    question: "What is CommonModule in app.module.ts?",
    answer:
      "CommonModule is used when you want to use basic Angular directives like NgIf, NgFor in your modules.",
    example: "import { CommonModule } from '@angular/common';",
    realTimeExample:
      "CommonModule is like a basic toolkit. It has all the simple tools you need, like NgIf (a switch to turn things on and off) and NgFor (a copier to make many copies of something). You use it when you need these simple tools in parts of your app that aren't the main app.",
    realTimeExample2:
      "Think of CommonModule as a Swiss Army knife. It has lots of small, useful tools like scissors (NgIf), a can opener (NgFor), and a screwdriver (NgClass). You don't need it for big jobs, but it's perfect for small, everyday tasks in your app. It's handy to have around for quick fixes and simple jobs.",
    syntax: "import { CommonModule } from '@angular/common';",
    codeExample:
      "import { CommonModule } from '@angular/common';\n\n@NgModule({\n  imports: [CommonModule]\n})\nexport class AppModule {}",
  },
  {
    id: 10,
    question: "What is dependency injection in Angular?",
    answer:
      "Dependency injection is a design pattern where components and services are provided with their dependencies, typically services, without creating them directly.",
    example:
      "constructor(private http: HttpClient) { } // HttpClient is injected",
    realTimeExample:
      "Dependency injection is like a waiter bringing you exactly what you need. When you sit at a table (component), the waiter (Angular) brings you a menu (service) without you having to go to the kitchen to get it. You just ask for it, and it appears, ready to use.",
    realTimeExample2:
      "Imagine dependency injection as a vending machine. You press a button (declare a dependency), and the machine (Angular) gives you the snack (service) you want. You don't have to make the snack yourself or even know how the machine works. You just ask for what you need, and Angular provides it automatically.",
    syntax: "constructor(private service: ServiceName) { }",
    codeExample:
      "constructor(private http: HttpClient) { }\n// HttpClient is now available in this component",
  },
  {
    id: 11,
    question: "How to serve in production mode?",
    answer:
      "To serve the application in production mode, run the command 'ng serve --prod'.",
    example: "ng serve --prod --port 4200",
    realTimeExample:
      "Serving in production mode is like putting on your best clothes for a special event. Your app is optimized to look its best and perform well for all your users. It's like the difference between wearing pajamas at home and wearing a suit to a party—everything is polished and ready for the public.",
    realTimeExample2:
      "Think of production mode as the final version of a video game. During development, the game might have bugs and unfinished parts, but in production mode, everything is fixed, optimized, and ready for players (users) to enjoy. It's like releasing the game to the world after all the testing and improvements are done.",
    syntax: "ng serve --prod",
    codeExample: "ng serve --prod --port 4200",
  },
  {
    id: 12,
    question: "What are decorators in Angular?",
    answer:
      "Decorators are functions used to add metadata to classes, methods, or properties. In Angular, common decorators include @Component, @Injectable, and @NgModule.",
    example: "@Component({ selector: 'app-root', template: '<h1>Hello</h1>' })",
    realTimeExample:
      "Decorators are like labels you put on boxes. The label tells you what's inside the box (class) and how to use it. @Component says 'this box is a part of the website', @Injectable says 'this box can be shared with others', and @NgModule says 'this box holds other boxes'. They help Angular understand and organize your code.",
    realTimeExample2:
      "Imagine decorators as name tags at a conference. @Component is like a tag that says 'Speaker', @Injectable is like a tag that says 'Helper', and @NgModule is like a tag that says 'Organizer'. Each tag tells you the role of the person (class) and how to interact with them. Decorators do the same for your Angular code, making it clear what each part does.",
    syntax: "@DecoratorName({ options })",
    codeExample:
      "@Component({\n  selector: 'app-root',\n  template: '<h1>Hello</h1>'\n})\nexport class AppComponent {}",
  },
  {
    id: 13,
    question: "What are Observables in Angular?",
    answer:
      "Observables are streams of data that can emit multiple values over time. Angular uses Observables for asynchronous operations like HTTP requests.",
    example: "this.http.get('/api/data').subscribe(data => console.log(data));",
    realTimeExample:
      "Observables are like a river that keeps flowing. You can dip your cup (subscribe) into the river to get water (data) whenever you're thirsty. The river might give you many cups of water over time, and you can drink (use the data) each time you get a new cup. It's perfect for things that happen again and again, like updates from a server.",
    realTimeExample2:
      "Think of Observables as a Netflix subscription. You subscribe to get new episodes (data) of your favorite show as they become available. You don't know exactly when new episodes will arrive, but when they do, Netflix (the Observable) delivers them to you automatically. This way, you always have the latest content without having to check manually.",
    syntax: "observable.subscribe(value => { ... });",
    codeExample:
      "this.http.get('/api/data').subscribe(data => {\n  console.log(data);\n});",
  },
  {
    id: 14,
    question: "What are Promises?",
    answer:
      "A Promise is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value. Unlike Observables, Promises emit a single value.",
    example:
      "fetch('/api/data').then(response => response.json()).then(data => console.log(data));",
    realTimeExample:
      "Promises are like ordering a pizza. You call the pizza place (make a request), and they promise to deliver your pizza (data) when it's ready. You don't get updates on how the pizza is being made; you just get one delivery when it's done. If something goes wrong, like the pizza gets burned, you get an error instead of a pizza.",
    realTimeExample2:
      "Imagine a Promise as a treasure chest. You're given a key (the Promise) and told that when the chest is ready, you can open it to find the treasure (data) inside. You can only open the chest once, and you'll either find treasure or a note saying the treasure is lost (error). It's a one-time deal, unlike a treasure map that could lead to many chests over time (Observable).",
    syntax: "promise.then(value => { ... });",
    codeExample:
      "fetch('/api/data')\n  .then(response => response.json())\n  .then(data => console.log(data));",
  },
  {
    id: 15,
    question: "What is DOM?",
    answer:
      "The Document Object Model (DOM) is an interface for web documents. It allows JavaScript to manipulate the structure, style, and content of web pages.",
    example: "document.getElementById('myDiv').innerHTML = 'Hello World';",
    realTimeExample:
      "The DOM is like a tree made of Lego blocks. Each block is a part of your webpage, like a paragraph or a button. You can add, remove, or change blocks to update the webpage. When you use JavaScript or Angular to change something, you're rearranging these Lego blocks to make the page look or act differently.",
    realTimeExample2:
      "Think of the DOM as a family tree. Each person (element) has a relationship with others, like parents, children, and siblings. You can ask a person to change their clothes (style) or move to a different room (position). Angular and JavaScript help you talk to these family members and make changes to the tree, which updates how the webpage looks and behaves.",
    syntax: "document.getElementById('id');",
    codeExample: "document.getElementById('myDiv').innerHTML = 'Hello World';",
  },
  {
    id: 16,
    question: "What are DOM elements?",
    answer:
      "DOM elements in Angular typically refer to HTML elements that are manipulated using ElementRef and TemplateRef in templates.",
    example: "@ViewChild('myElement') myElement: ElementRef;",
    realTimeExample:
      "DOM elements are like individual bricks in a building. Each brick (element) can be a button, a picture, or a paragraph. In Angular, you can give a brick a name (reference) and then use tools like ElementRef to inspect or change that brick. It's like having a magnifying glass to look closely at one brick and a hammer to make changes to it.",
    realTimeExample2:
      "Imagine DOM elements as actors on a stage. Each actor (element) has a role, like the hero, the villain, or the narrator. With ElementRef, you can talk directly to an actor, ask them to say a different line (change content), or move to a new spot on the stage (change position). It's your way of directing individual actors to make the whole play (webpage) perfect.",
    syntax: "@ViewChild('refName') refName: ElementRef;",
    codeExample:
      "@ViewChild('myElement') myElement: ElementRef;\n// Access the native element with myElement.nativeElement",
  },
  {
    id: 17,
    question: "Explain the syntax of app.module.ts",
    answer:
      "@NgModule({declarations: [], imports: [], providers: [], bootstrap: [AppComponent]})",
    example:
      "@NgModule({ declarations: [AppComponent], imports: [BrowserModule], providers: [], bootstrap: [AppComponent] }) export class AppModule { }",
    realTimeExample:
      "The syntax of app.module.ts is like a shopping list for building a house. Declarations are the rooms you want, imports are the materials you need, providers are the workers you hire, and bootstrap is the first room you build. Angular uses this list to gather everything needed to build your app, just like a builder uses a shopping list to gather everything for a house.",
    realTimeExample2:
      "Think of app.module.ts as a recipe card. Declarations are the ingredients, imports are the kitchen tools, providers are the helpers, and bootstrap is the first step. Just like a recipe tells you how to make a dish, app.module.ts tells Angular how to make your app. Without the recipe, you might forget something important, and your dish (app) won't turn out right.",
    syntax:
      "@NgModule({ declarations: [], imports: [], providers: [], bootstrap: [] })",
    codeExample:
      "@NgModule({\n  declarations: [AppComponent],\n  imports: [BrowserModule],\n  providers: [],\n  bootstrap: [AppComponent]\n})\nexport class AppModule {}",
  },
  {
    id: 18,
    question: "Explain the syntax of app.component.ts",
    answer:
      "@Component({selector: 'app-dashboard', templateUrl: '', styleUrls: ['']})",
    example:
      "@Component({ selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.css'] }) export class AppComponent { title = 'My App'; }",
    realTimeExample:
      "The syntax of app.component.ts is like a name tag and instructions for a robot. The selector is the robot's name, templateUrl is what the robot looks like, and styleUrls is how it's decorated. The class is the robot's brain, telling it what to do. When you use the robot's name in your HTML, Angular brings the robot to life with its looks and actions.",
    realTimeExample2:
      "Imagine app.component.ts as a character sheet for a video game hero. The selector is the hero's name, templateUrl is their appearance, and styleUrls is their costume. The class is the hero's abilities and personality. When you call the hero's name in the game, they appear with their unique look and skills, ready for action.",
    syntax: "@Component({ selector: '', templateUrl: '', styleUrls: [] })",
    codeExample:
      "@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {\n  title = 'My App';\n}",
  },
  {
    id: 19,
    question: "Explain the syntax of services.",
    answer:
      "@Injectable({providedIn: 'root'}) export class ApiServicesService { }",
    example:
      "@Injectable({ providedIn: 'root' }) export class DataService { getData() { return this.http.get('/api/data'); } }",
    realTimeExample:
      "The syntax of services is like a job description for a helper. @Injectable tells Angular this helper can be used anywhere in the app. providedIn: 'root' means there's only one helper for the whole app, like a butler in a mansion. The class describes what the helper can do, like fetching data or saving information. When a component needs help, Angular knows exactly who to call.",
    realTimeExample2:
      "Think of a service as a superhero. @Injectable is the superhero's badge, showing they're official and ready to help. providedIn: 'root' means the superhero can fly anywhere in the city (app) to help. The class is the superhero's powers, like super strength (getting data) or speed (saving data). When there's trouble, components call the superhero to save the day.",
    syntax: "@Injectable({ providedIn: 'root' })",
    codeExample:
      "@Injectable({\n  providedIn: 'root'\n})\nexport class DataService {\n  constructor(private http: HttpClient) {}\n  getData() {\n    return this.http.get('/api/data');\n  }\n}",
  },
  {
    id: 20,
    question: "What are Directives in Angular?",
    answer:
      "Directives are classes that modify the DOM in Angular applications. There are three types: Component Directives, Structural Directives, and Attribute Directives.",
    example: "*ngIf='condition' (structural), ngClass='classes' (attribute)",
    realTimeExample:
      "Directives are like special commands for your webpage. Structural directives are like 'build a wall here' or 'remove this door', changing the structure of the page. Attribute directives are like 'paint this wall blue' or 'make this button shiny', changing how things look or act. They help you control your webpage without writing lots of code.",
    realTimeExample2:
      "Imagine directives as magic spells. Structural directives are big spells that change the landscape, like creating a forest (*ngFor) or making a mountain disappear (*ngIf). Attribute directives are smaller spells that change details, like turning a rock into gold (ngClass) or making a flower glow (ngStyle). You cast these spells in your HTML to make your webpage magical and interactive.",
    syntax: "*ngIf='condition', [ngClass]='classes', [ngStyle]='styles'",
    codeExample:
      "<div *ngIf='isVisible'>Visible</div>\n<div [ngClass]='{ active: isActive }'>Styled</div>",
  },
  {
    id: 21,
    question: "What is data binding?",
    answer:
      "Data binding in Angular is the mechanism of connecting a component's data to its template and vice versa.",
    example:
      "{{ name }} (interpolation), [disabled]='isDisabled' (property), (click)='onClick()' (event)",
    realTimeExample:
      "Data binding is like a telephone line between your component and your template. When you talk into the phone in the component (change data), the template hears it and updates. When the template talks (user clicks a button), the component hears it and reacts. It's a two-way conversation that keeps everything in sync.",
    realTimeExample2:
      "Think of data binding as a bridge between two islands. One island is your component (logic), and the other is your template (view). The bridge lets people (data) travel both ways. When someone on the component island shouts a message, people on the template island hear it and react. When someone on the template island sends a signal, the component island responds. This keeps both islands working together smoothly.",
    syntax:
      "{{ expression }} (interpolation), [property]='expression' (property binding), (event)='method()' (event binding)",
    codeExample:
      "<p>{{ name }}</p>\n<button [disabled]='isDisabled' (click)='onClick()'>Click</button>",
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
    realTimeExample:
      "The forms of data binding are like different ways to send messages. String interpolation is like reading a sign (show data). Property binding is like turning a switch (set a property). Event binding is like pressing a doorbell (call a method). Two-way binding is like a walkie-talkie (sync both ways). Each type helps your component and template communicate in different situations.",
    realTimeExample2:
      "Imagine data binding as different types of mail. String interpolation is a postcard (one-way, just showing info). Property binding is a package (one-way, sending info). Event binding is a reply card (one-way, sending an action). Two-way binding is a pen pal (two-way, constant communication). Each type of mail helps your component and template stay connected and share information.",
    syntax:
      "{{ expression }}, [property]='expression', (event)='method()', [(ngModel)]='property'",
    codeExample:
      "<p>Name: {{ user.name }}</p>\n<input [(ngModel)]='user.name'>",
  },
  {
    id: 23,
    question: "What is String Interpolation in Angular?",
    answer:
      "String Interpolation is a type of one-way data binding where data from the component is displayed in the HTML view, using the syntax {{ data }}.",
    example: "<h1>Welcome {{ userName }}!</h1>",
    realTimeExample:
      "String interpolation is like a magic window that shows what's inside your component. When you write {{ userName }}, it's like looking through the window to see the value of userName. If userName changes, the window updates to show the new value. It's a simple way to show data without any extra steps.",
    realTimeExample2:
      "Think of string interpolation as a name tag. When you write {{ userName }}, it's like putting a name tag on someone that always shows their current name. If the person changes their name, the tag updates automatically. It's a quick and easy way to display information that might change over time, like a name tag that always stays up to date.",
    syntax: "{{ expression }}",
    codeExample: "<h1>Welcome {{ userName }}!</h1>",
  },
  {
    id: 24,
    question: "What is property binding?",
    answer:
      "Property binding is a one-way binding mechanism in Angular where data from the component is passed to the HTML element's property, such as [src]='imageUrl'.",
    example: "<img [src]='imageUrl' [alt]='imageAlt'>",
    realTimeExample:
      "Property binding is like giving instructions to a robot. When you write [src]='imageUrl', you're telling the image robot, 'Show the picture from this address.' If imageUrl changes, the robot updates to show the new picture. It's a way to control HTML elements directly from your component.",
    realTimeExample2:
      "Imagine property binding as a remote control. When you press a button on the remote ([src]='imageUrl'), the TV (HTML element) changes to show the channel (image) you selected. If you press a different button (change imageUrl), the TV updates to show the new channel. It's a direct way to control what the TV displays from your component.",
    syntax: "[property]='expression'",
    codeExample: "<img [src]='imageUrl' [alt]='imageAlt'>",
  },
  {
    id: 25,
    question: "What is event binding?",
    answer:
      "Event binding is used to listen for events in the template, such as (click)='method()'. It allows you to trigger a method in the component when a specific event happens.",
    example: "<button (click)='saveData()'>Save</button>",
    realTimeExample:
      "Event binding is like setting up a trap that calls you when it's triggered. When you write (click)='saveData()', you're saying, 'When someone clicks this button, call me at saveData().' It's how your template tells your component that something happened, like a phone call when someone rings the doorbell.",
    realTimeExample2:
      "Think of event binding as a doorbell. When you write (click)='saveData()', you're connecting the doorbell button to a chime in your component. When someone presses the button (clicks), the chime rings (saveData() is called), and you know someone is at the door. It's a way for your template to notify your component when something important happens.",
    syntax: "(event)='method()'",
    codeExample: "<button (click)='saveData()'>Save</button>",
  },
  {
    id: 26,
    question: "What is two-way binding?",
    answer:
      "Two-way binding allows automatic synchronization of data between the component and the view. It is implemented with the [(ngModel)] directive.",
    example: "<input [(ngModel)]='name'> <p>Hello {{ name }}!</p>",
    realTimeExample:
      "Two-way binding is like having a walkie-talkie between your component and template. When you talk into the walkie-talkie in the template (type in the input), the component hears it and updates. When the component talks (changes the name), the template hears it and updates. It's a constant conversation that keeps both sides in perfect sync.",
    realTimeExample2:
      "Imagine two-way binding as a mirror. When you move your hand in front of the mirror (change the input), the reflection (component data) moves too. If someone moves the reflection (changes the data in the component), your hand seems to move as well. It's a perfect synchronization where changes on one side are instantly reflected on the other, keeping everything matched up.",
    syntax: "[(ngModel)]='property'",
    codeExample: "<input [(ngModel)]='name'>\n<p>Hello {{ name }}!</p>",
  },
  {
    id: 27,
    question: "What are modules?",
    answer:
      "Modules in Angular are used to organize an application. They group components, directives, pipes, and services into cohesive blocks of functionality.",
    example:
      "@NgModule({ declarations: [AppComponent], imports: [BrowserModule] })",
    realTimeExample:
      "Modules are like chapters in a book. Each chapter (module) has its own story (components, services) and characters (directives, pipes). The book (app) is made up of all these chapters working together. When you read the book, you go through each chapter in order, and everything makes sense as a whole story.",
    realTimeExample2:
      "Think of modules as departments in a company. The sales department (module) has its own team (components) and tools (services). The marketing department has its own team and tools. Each department works on its own tasks but also collaborates with others to make the company (app) successful. Modules help organize your app into focused teams that work together.",
    syntax:
      "@NgModule({ declarations: [], imports: [], providers: [], bootstrap: [] })",
    codeExample:
      "@NgModule({\n  declarations: [AppComponent],\n  imports: [BrowserModule]\n})\nexport class AppModule {}",
  },
  {
    id: 28,
    question: "What are lifecycle hooks in Angular?",
    answer:
      "Lifecycle hooks are methods that Angular calls during different phases of a component's lifecycle, such as ngOnInit, ngOnDestroy, ngOnChanges, etc.",
    example:
      "ngOnInit() { this.loadData(); } ngOnDestroy() { this.subscription.unsubscribe(); }",
    realTimeExample:
      "Lifecycle hooks are like milestones in a person's life. ngOnInit is like starting school, where you prepare for what's ahead. ngOnChanges is like moving to a new grade, where you adjust to new information. ngOnDestroy is like graduating, where you clean up and say goodbye. Each milestone is a chance to do something important at that stage of life (component).",
    realTimeExample2:
      "Imagine lifecycle hooks as stations on a train journey. ngOnInit is the first station where you board the train and get settled. ngOnChanges is a station where you might change seats or get new supplies. ngOnDestroy is the final station where you gather your things and leave the train. Each station gives you a chance to do something important during the journey (component's life).",
    syntax: "ngOnInit(), ngOnDestroy(), ngOnChanges(changes: SimpleChanges)",
    codeExample:
      "ngOnInit() {\n  this.loadData();\n}\nngOnDestroy() {\n  this.subscription.unsubscribe();\n}",
  },
  {
    id: 29,
    question: "What are components in Angular?",
    answer:
      "Components are the basic building blocks of an Angular application. Each component consists of a TypeScript class, an HTML template, and a CSS file.",
    example:
      "@Component({ selector: 'app-user', template: '<p>User: {{ name }}</p>' }) export class UserComponent { name = 'John'; }",
    realTimeExample:
      "Components are like Lego bricks. Each brick (component) has its own shape (template), color (styles), and function (class). You can snap bricks together to build anything you want, like a house or a spaceship. Each brick does its own job, but together they make something amazing.",
    realTimeExample2:
      "Think of components as actors in a play. Each actor (component) has their own script (class), costume (styles), and lines (template). The director (Angular) tells each actor when to come on stage and what to do. Together, all the actors perform the play (app), each doing their part to make the story come to life.",
    syntax: "@Component({ selector: '', template: '', styleUrls: [] })",
    codeExample:
      "@Component({\n  selector: 'app-user',\n  template: '<p>User: {{ name }}</p>'\n})\nexport class UserComponent {\n  name = 'John';\n}",
  },
  {
    id: 30,
    question: "What are pipes in Angular?",
    answer:
      "Pipes are used to transform data in Angular templates. They can format dates, numbers, and other types of data.",
    example: "{{ birthday | date:'shortDate' }}, {{ price | currency:'USD' }}",
    realTimeExample:
      "Pipes are like filters for your data. When you have a messy room (raw data), you can use a filter (pipe) to clean it up. The date pipe arranges your dates neatly, the currency pipe organizes your money values, and custom pipes can do special cleaning jobs. They make your data look nice and ready to use.",
    realTimeExample2:
      "Imagine pipes as translators. You have information in one language (raw data), and the pipe translates it into another language (formatted data) that's easier to understand. The date pipe translates timestamps into readable dates. The currency pipe translates numbers into money formats. Pipes help your data speak the language your users understand best.",
    syntax: "{{ value | pipeName:param }}",
    codeExample:
      "<p>{{ birthday | date:'shortDate' }}</p>\n<p>{{ price | currency:'USD' }}</p>",
  },
  {
    id: 31,
    question: "What is a parameterized pipe?",
    answer:
      "A parameterized pipe takes arguments to modify the data before displaying it, such as a custom pipe that transforms a value based on parameters.",
    example: "{{ text | slice:0:10 }}, {{ number | number:'1.2-2' }}",
    realTimeExample:
      "Parameterized pipes are like giving instructions to a chef. You don't just say 'cook the food' (use a pipe), you say 'cook the food for 10 minutes at 200 degrees' (use a pipe with parameters). This lets you control exactly how the food (data) is prepared (transformed) before it's served (displayed).",
    realTimeExample2:
      "Think of parameterized pipes as camera settings. You can take a photo (use a pipe) with default settings, or you can adjust the focus, exposure, and zoom (parameters) to get exactly the picture (transformed data) you want. Parameters give you fine control over how your data is presented, just like camera settings give you control over your photos.",
    syntax: "{{ value | pipeName:param1:param2 }}",
    codeExample:
      "<p>{{ text | slice:0:10 }}</p>\n<p>{{ number | number:'1.2-2' }}</p>",
  },
  {
    id: 32,
    question: "What is the purpose of AsyncPipe in Angular?",
    answer:
      "AsyncPipe subscribes to an Observable or a Promise and returns the latest value emitted by it. It also handles unsubscription automatically.",
    example: "<div *ngIf='data$ | async as data'>{{ data.name }}</div>",
    realTimeExample:
      "AsyncPipe is like a personal assistant for your data. When you have a busy friend (Observable) who sends you updates, the assistant (AsyncPipe) collects each update and gives you the latest one. The assistant also remembers to stop listening when you're done, so you don't get updates you don't need anymore. It's a convenient way to stay up to date without extra work.",
    realTimeExample2:
      "Imagine AsyncPipe as a mailbox for letters (data) from a pen pal (Observable). Each time you get a new letter, the mailbox shows you the latest one. When you move houses (component is destroyed), the mailbox automatically cancels your mail subscription so you don't keep getting letters at your old address. It's a smart way to handle ongoing communications.",
    syntax: "{{ observable$ | async }}",
    codeExample:
      "<div *ngIf='data$ | async as data'>\n  {{ data.name }}\n</div>",
  },
  {
    id: 33,
    question: "What are filters in Angular?",
    answer:
      "Filters in Angular allow for transforming the display value of expressions in templates, such as filtering arrays or formatting text.",
    example: "*ngFor='let item of items | filter:searchTerm'",
    realTimeExample:
      "Filters are like sieves for your data. When you have a bowl of mixed fruits (data), you can use a sieve (filter) to pick out only the apples (specific items). This lets you show just the data you want, making it easier to find and use what's important. Filters help you focus on the relevant parts of your data.",
    realTimeExample2:
      "Think of filters as sunglasses. On a bright day (lots of data), sunglasses (filters) help you see better by blocking out some of the light (irrelevant data). You can choose different lenses (filter types) to see exactly what you need. Filters help you view your data in a way that's comfortable and useful for your current task.",
    syntax: "*ngFor='let item of items | pipeName:param'",
    codeExample:
      "<div *ngFor='let item of items | filter:searchTerm'>\n  {{ item }}\n</div>",
  },
  {
    id: 34,
    question: "What is a Wildcard Route in Angular?",
    answer:
      "The Wildcard Route is used in Angular applications to handle invalid URLs, redirecting them to a 404 or a default route.",
    example: "{ path: '**', redirectTo: '/not-found' }",
    realTimeExample:
      "A Wildcard Route is like a catch-all basket at the post office. When a letter (URL) arrives with an unknown address, the post office puts it in the basket (wildcard route) and sends it to the 'address unknown' department (404 page). This makes sure no letters get lost, and users always see a helpful message instead of a blank page.",
    realTimeExample2:
      "Imagine the Wildcard Route as a safety net at a circus. If an acrobat (user) tries to jump to a platform (route) that isn't there, the safety net (wildcard) catches them and gently lowers them to a safe spot (404 page). This keeps users from getting 'lost' in your app and always gives them a way to get back on track.",
    syntax: "{ path: '**', redirectTo: '/path' }",
    codeExample:
      "const routes: Routes = [\n  { path: '**', redirectTo: '/not-found' }\n];",
  },
  {
    id: 35,
    question: "What are interfaces in Angular?",
    answer:
      "Interfaces are used at compile-time to define a contract for class instances, ensuring that expected data follows a particular structure.",
    example: "interface User { id: number; name: string; }",
    realTimeExample:
      "Interfaces are like blueprints for a house. They say 'this house must have a kitchen, two bedrooms, and a bathroom' (properties). When you build a house (class), you follow the blueprint to make sure it has all the right rooms (properties). This way, anyone who uses the house knows exactly what to expect inside.",
    realTimeExample2:
      "Think of interfaces as a menu at a restaurant. The menu lists all the dishes (properties) that should be available. When the chef (class) prepares a meal, they make sure it includes all the items listed on the menu. This way, customers (other parts of the app) know exactly what they'll get when they order something from your code.",
    syntax: "interface Name { property: type; }",
    codeExample: "interface User {\n  id: number;\n  name: string;\n}",
  },
  {
    id: 36,
    question: "What is a Built-in directive?",
    answer:
      "Some common built-in directives are ngIf, ngSwitch, ngFor, ngStyle, ngClass, ngModel.",
    example:
      "<div *ngIf='show'>Visible</div>, <div [ngClass]='classes'>Styled</div>",
    realTimeExample:
      "Built-in directives are like pre-programmed buttons on a remote control. *ngIf is the power button (turns things on/off). *ngFor is the channel up button (repeats things). ngClass is the color button (changes styles). Each button does a specific job to control your TV (webpage), making it easy to change what you see without rewiring anything.",
    realTimeExample2:
      "Imagine built-in directives as tools in a toolbox. *ngIf is a hammer (adds/removes elements). *ngFor is a screwdriver (repeats elements). ngClass is a paintbrush (styles elements). Each tool has a specific purpose, and you can use them to build or modify your webpage just like you'd use tools to build or fix something in real life.",
    syntax:
      "*ngIf='condition', *ngFor='let item of items', [ngClass]='classes'",
    codeExample:
      "<div *ngIf='show'>Visible</div>\n<div [ngClass]='{ active: isActive }'>Styled</div>",
  },
  {
    id: 37,
    question: "What is an Angular custom directive?",
    answer:
      "Angular allows us to create custom directives when we need additional behavior not provided by the built-in directives.",
    example:
      "@Directive({ selector: '[appHighlight]' }) export class HighlightDirective { ... }",
    realTimeExample:
      "Custom directives are like inventing your own tool when the ones you have don't do exactly what you need. If you need a tool that both hammers and measures (highlight and track), you can create a custom tool (directive) that does both. This lets you add special behaviors to your webpage that are unique to your app.",
    realTimeExample2:
      "Think of custom directives as custom spells in a video game. The game comes with basic spells like fireball (ngIf) and heal (ngClass), but sometimes you need a special spell that does something unique, like turning enemies into allies. Custom directives let you create these special spells to make your webpage do exactly what you want.",
    syntax: "@Directive({ selector: '[directiveName]' })",
    codeExample:
      "@Directive({\n  selector: '[appHighlight]'\n})\nexport class HighlightDirective {\n  constructor(private el: ElementRef) {\n    el.nativeElement.style.backgroundColor = 'yellow';\n  }\n}",
  },
  {
    id: 38,
    question: "What are Angular services?",
    answer:
      "Services in Angular are singleton objects used to organize and share data, logic, or functions across components in an application.",
    example:
      "@Injectable({ providedIn: 'root' }) export class UserService { getUsers() { return this.http.get('/api/users'); } }",
    realTimeExample:
      "Services are like shared helpers in your app. If you have a chef (service) who makes pizza, any part of your restaurant (app) can ask the chef to make a pizza (data). The chef is shared by everyone, so the pizza is always made the same way, and everyone gets the same delicious result. Services help keep your app consistent and organized.",
    realTimeExample2:
      "Imagine services as utility companies in a city. The water company (service) provides water to all the houses (components). The electricity company provides power. Each house can use these services without knowing how they work. Services in Angular do the same, providing data or functions to all parts of your app without each part having to know how to get them.",
    syntax: "@Injectable({ providedIn: 'root' })",
    codeExample:
      "@Injectable({\n  providedIn: 'root'\n})\nexport class UserService {\n  constructor(private http: HttpClient) {}\n  getUsers() {\n    return this.http.get('/api/users');\n  }\n}",
  },
  {
    id: 39,
    question: "What are Angular templates?",
    answer:
      "Templates in Angular define a component's view using HTML, Angular directives, and binding syntax.",
    example:
      "<div>{{ title }}</div><button (click)='onClick()'>Click me</button>",
    realTimeExample:
      "Templates are like the script for a play. They tell the actors (components) what to say (show) and do (actions). The script includes stage directions (directives) and cues (bindings) that tell the actors how to perform. When the play is performed (app runs), the actors follow the script to create the story (user interface).",
    realTimeExample2:
      "Think of templates as blueprints for a building. The blueprint shows where the walls (HTML), doors (directives), and windows (bindings) go. When the building is constructed (app runs), everything is placed according to the blueprint, creating a structure that's both functional and good-looking. Templates help you design how your app will look and behave.",
    syntax: "<html-element [property]='expression' (event)='method()'>",
    codeExample:
      "<div>{{ title }}</div>\n<button (click)='onClick()'>Click me</button>",
  },
  {
    id: 40,
    question: "What is Angular CLI?",
    answer:
      "Angular CLI is like a helpful friend that makes building Angular apps easier. It's a special program you can run in your computer's command line. It helps you create new projects, add parts to your app, and even build and test your app without doing everything by hand. Think of it as a magic tool that speeds up your work!",
    example:
      "Imagine you're building a treehouse. Angular CLI is like a super smart robot helper. You say 'ng new my-treehouse' and it builds the whole base for you. Then 'ng generate component window' adds a window, and 'ng build --prod' makes it strong and ready for friends to play in. Without CLI, you'd have to hammer every nail yourself, but with it, it's like having a team of builders!",
    realTimeExample:
      "Angular CLI is like a Swiss Army knife for developers. Need a new project? Use 'ng new'. Need a component? Use 'ng generate component'. Need to build for production? Use 'ng build --prod'. Each command is a different tool in your pocket, ready to help you build your app quickly and correctly. It's your all-in-one tool for Angular development.",
    realTimeExample2:
      "Think of Angular CLI as a personal assistant for your app. You tell it what you need, like 'create a new service' or 'run the tests', and it does all the setup work for you. It's like having someone who handles all the boring details so you can focus on the creative parts of building your app. With Angular CLI, you spend less time on setup and more time making your app amazing.",
    syntax:
      "ng new project-name, ng generate component name, ng serve, ng build",
    codeExample: "ng new my-project\ncd my-project\nng serve",
  },
  {
    id: 41,
    question: "How do you create a new Angular project?",
    answer:
      "Creating a new Angular project is simple! You open your computer's command line or terminal, and type 'ng new project-name'. Replace 'project-name' with whatever you want to call your project, like 'my-awesome-app'. Then press enter, and Angular CLI will set up all the files and folders for you automatically. It's like starting a new drawing with a blank canvas!",
    example:
      "Picture this: You want to make a new game. You open the magic computer window and type 'ng new super-game --routing --style=scss'. The computer thinks for a bit, and poof! It creates folders for your game, sets up roads (routing) for players to move around, and makes it look colorful with styles. Now you can start adding levels and characters. It's like getting a ready-made playground to customize!",
    realTimeExample:
      "Creating a new Angular project is like getting a new sketchbook. You start with a blank book (project) and all the basic tools (files and folders) you need to draw. The CLI sets up the cover (package.json), the first page (app component), and even some colored pencils (styles). Now you're ready to start drawing (coding) your masterpiece (app).",
    realTimeExample2:
      "Imagine creating a new Angular project as planting a seed. You use the CLI to plant the seed ('ng new'), and it grows into a sapling with roots (node_modules), a trunk (src folder), and leaves (components). You water it with your code, and it grows into a strong tree (app). The CLI gives you everything you need to start growing your project from a tiny seed to a mighty tree.",
    syntax: "ng new project-name [options]",
    codeExample: "ng new super-game --routing --style=scss",
  },
  {
    id: 42,
    question: "What is the difference between AngularJS and Angular?",
    answer:
      "AngularJS was the first version of Angular, like version 1. It was good, but had some problems. Angular (starting from version 2) is a completely new and better version. It uses TypeScript, which makes it stronger and faster. Angular is like a upgraded toy car that goes faster and has more cool features than the old one!",
    example:
      "AngularJS uses JavaScript, Angular uses TypeScript and has better performance.",
    realTimeExample:
      "The difference between AngularJS and Angular is like the difference between a flip phone and a smartphone. AngularJS (flip phone) could make calls and send texts, but Angular (smartphone) can do all that plus run apps, take great photos, and connect to the internet faster. Angular is a modern upgrade with more power and features.",
    realTimeExample2:
      "Think of AngularJS as a bicycle and Angular as a motorcycle. The bicycle (AngularJS) gets you where you need to go, but it's slow and you have to pedal hard. The motorcycle (Angular) is faster, more powerful, and has features like a radio (TypeScript) and a GPS (better tooling). Both can take you places, but the motorcycle makes the trip much easier and more enjoyable.",
    syntax: "N/A (Conceptual)",
    codeExample: "N/A",
  },
  {
    id: 43,
    question: "What is a component selector?",
    answer:
      "A component selector is like a name tag for your component. It's a special word or phrase that tells Angular where to put your component in the HTML. For example, the main component uses 'app-root'. When you write <app-root> in your HTML, Angular knows to show that component there. It's like calling someone's name to get their attention!",
    example: "selector: 'app-header' used as <app-header></app-header>",
    realTimeExample:
      "A component selector is like a secret handshake. When you use the handshake (<app-header>) in your HTML, Angular recognizes it and knows to bring in the right component, just like a secret handshake tells your friends it's really you. It's a unique identifier that connects your component to your HTML.",
    realTimeExample2:
      "Think of a component selector as a book title. When you see 'Harry Potter' on a bookshelf, you know exactly what story to expect inside. Similarly, when Angular sees <app-header>, it knows exactly what component to load. The selector is like the title on the spine of your component's book, making it easy to find and use.",
    syntax: "selector: 'app-component-name'",
    codeExample:
      "@Component({\n  selector: 'app-header'\n})\nexport class HeaderComponent {}",
  },
  {
    id: 44,
    question: "What is the purpose of ngOnInit?",
    answer:
      "ngOnInit is like a starting signal in a race. It's a special method that Angular calls when a component is ready to start working. You put code here that needs to run right after the component is set up, like loading data from a server. It's the perfect place to do 'first things first' tasks!",
    example: "ngOnInit() { this.loadUserData(); }",
    realTimeExample:
      "ngOnInit is like the first day of school. It's when you get your schedule (component is ready) and start your first class (load data). You wouldn't try to take a test before the first day; similarly, you put initialization code in ngOnInit to make sure everything is ready before you start working with your component.",
    realTimeExample2:
      "Think of ngOnInit as the 'open' sign at a store. When the sign is turned on (ngOnInit is called), the store (component) is ready for business. This is when you stock the shelves (load data) and greet the first customers (start interactions). It's the official start of your component's work, just like the 'open' sign signals the start of a business day.",
    syntax: "ngOnInit() { ... }",
    codeExample: "ngOnInit() {\n  this.loadUserData();\n}",
  },
  {
    id: 45,
    question: "What are structural directives?",
    answer:
      "Structural directives are like magic wands that can add or remove parts of your web page. They change the structure of the HTML. For example, *ngIf can hide or show a button, and *ngFor can repeat a list of items. They help make your page dynamic, like changing a Lego structure by adding or removing pieces!",
    example:
      "<div *ngIf='isVisible'>Show me</div>, <li *ngFor='let item of items'>{{ item }}</li>",
    realTimeExample:
      "Structural directives are like a director in a play. *ngIf is like telling an actor to enter or exit the stage. *ngFor is like telling a group of dancers to perform the same moves in sequence. The director (Angular) uses these commands to control who is on stage (in the DOM) and when, creating a dynamic and engaging performance (webpage).",
    realTimeExample2:
      "Imagine structural directives as a construction crew. *ngIf is like telling the crew to build or demolish a wall. *ngFor is like telling them to build multiple identical rooms. The crew (Angular) follows your instructions to change the structure of the building (DOM) as needed, making sure everything is in the right place at the right time.",
    syntax: "*ngIf='condition', *ngFor='let item of items'",
    codeExample:
      "<div *ngIf='isVisible'>Show me</div>\n<li *ngFor='let item of items'>{{ item }}</li>",
  },
  {
    id: 46,
    question: "What are attribute directives?",
    answer:
      "Attribute directives are like stickers you put on HTML elements to change how they look or act. They don't add or remove elements, but they can change colors, sizes, or behaviors. For example, ngClass can change the style of a button, and ngStyle can change its color. It's like decorating a cake with different toppings!",
    example:
      "<div [ngClass]='{ active: isActive }'>Styled div</div>, <p [ngStyle]='{ color: textColor }'>Colored text</p>",
    realTimeExample:
      "Attribute directives are like makeup for your HTML elements. ngClass is like choosing an outfit (class) for your element to wear. ngStyle is like applying specific colors or styles. You can change the look without changing the element itself, just like you can change someone's appearance with makeup without changing who they are.",
    realTimeExample2:
      "Think of attribute directives as seasonings for food. ngClass is like choosing a spice blend that changes the overall flavor (style) of the dish (element). ngStyle is like adding specific spices to highlight certain tastes. You're not changing the food itself, just enhancing or altering its presentation and flavor, making it more appealing or suitable for different occasions.",
    syntax: "[ngClass]='classes', [ngStyle]='styles'",
    codeExample:
      "<div [ngClass]='{ active: isActive }'>Styled div</div>\n<p [ngStyle]='{ color: textColor }'>Colored text</p>",
  },
  {
    id: 47,
    question: "How to handle forms in Angular?",
    answer:
      "Forms in Angular are like questionnaires where users fill in information. Angular gives you two ways to handle them. One is template-driven forms, where you use simple things like ngModel in your HTML. The other is reactive forms, where you write more code in your component to control the form. It's like choosing between a simple coloring book or a detailed painting set!",
    example:
      "Template: <input [(ngModel)]='name'>, Reactive: this.form = new FormGroup({ name: new FormControl('') });",
    realTimeExample:
      "Handling forms in Angular is like choosing between two types of art classes. Template-driven forms are like a painting class where the teacher (Angular) gives you a canvas and some guidelines, and you paint freely. Reactive forms are like a sculpture class where you have more control, shaping the clay (form) exactly how you want with your hands (code). Both let you create something beautiful, but with different levels of control.",
    realTimeExample2:
      "Think of handling forms as planning a trip. Template-driven forms are like a guided tour where someone else handles the details, and you just fill in your preferences. Reactive forms are like planning your own itinerary, where you decide each stop and activity. Both get you to your destination (collect user input), but with different amounts of planning and control.",
    syntax: "Template: [(ngModel)]='property', Reactive: new FormGroup({})",
    codeExample:
      "<!-- Template-driven -->\n<input [(ngModel)]='name'>\n\n// Reactive\nthis.form = this.fb.group({\n  name: ['']\n});",
  },
  {
    id: 48,
    question: "What is routing in Angular?",
    answer:
      "Routing in Angular is like having different rooms in a house. It lets users move from one part of your app to another without reloading the whole page. You use RouterModule to set up paths, like '/home' or '/about'. When someone clicks a link, Angular shows the right component. It's like teleporting between rooms in a video game!",
    example:
      "const routes: Routes = [{ path: 'home', component: HomeComponent }]; <router-outlet></router-outlet>",
    realTimeExample:
      "Routing in Angular is like a map for a treasure hunt. Each path ('/home', '/about') is a clue leading to a different location (component). When users follow a clue (click a link), they're taken to the right spot to find the treasure (content). The map (RouterModule) makes sure they can move around easily without getting lost or starting over.",
    realTimeExample2:
      "Imagine routing as channels on a TV. Each channel (route) shows a different show (component). When you change the channel (navigate), the TV (Angular) quickly switches to show you the new program without turning off. It's a seamless way to enjoy different content without interruption, just like routing lets users enjoy different parts of your app smoothly.",
    syntax: "const routes: Routes = [{ path: 'path', component: Component }];",
    codeExample:
      "const routes: Routes = [\n  { path: 'home', component: HomeComponent },\n  { path: 'about', component: AboutComponent }\n];\n\n@NgModule({\n  imports: [RouterModule.forRoot(routes)]\n})\nexport class AppModule {}",
  },
  {
    id: 49,
    question: "What is the difference between constructor and ngOnInit?",
    answer:
      "The constructor is like the birth of a component. It's where Angular gives the component its 'tools' or services it needs, like a backpack full of supplies. ngOnInit happens right after, like the component waking up and getting ready. You use constructor for setup, and ngOnInit for starting tasks. It's like first getting dressed (constructor), then eating breakfast (ngOnInit)!",
    example:
      "constructor(private service: DataService) { }, ngOnInit() { this.service.getData().subscribe(...); }",
    realTimeExample:
      "The difference between constructor and ngOnInit is like the difference between being born and starting school. The constructor is your birth, where you get your basic needs (services) like a name and a body. ngOnInit is your first day of school, where you start learning and doing things with what you have. Both are important, but they happen at different times in your life (component's lifecycle).",
    realTimeExample2:
      "Think of constructor and ngOnInit as steps in building a house. The constructor is like laying the foundation and framing the walls, setting up the basic structure (injecting services). ngOnInit is like moving in and arranging the furniture, starting to use the house for its purpose. Both steps are necessary, but they serve different roles in creating a functional home (component).",
    syntax: "constructor(private service: ServiceName) { }, ngOnInit() { ... }",
    codeExample:
      "constructor(private service: DataService) { }\nngOnInit() {\n  this.service.getData().subscribe(data => {\n    this.data = data;\n  });\n}",
  },
  {
    id: 50,
    question: "What is Angular Material?",
    answer:
      "Angular Material is like a big box of ready-made building blocks for your Angular apps. It gives you cool parts like buttons that look nice, cards to show information, and dialogs for pop-up messages. You don't have to design them yourself; just use them! It's like having pre-cut shapes for a puzzle instead of drawing your own.",
    example:
      "import { MatButtonModule } from '@angular/material/button'; <button mat-raised-button>Click me</button>",
    realTimeExample:
      "Angular Material is like a set of high-quality furniture for your app. Instead of building your own chairs (buttons) and tables (cards), you can use beautifully designed pieces that match and work well together. This saves you time and makes your app look professional and polished, just like nice furniture makes a house look great.",
    realTimeExample2:
      "Think of Angular Material as a collection of pre-made outfits. Instead of sewing your own clothes (designing UI elements), you can choose from a variety of stylish, ready-to-wear options. This lets you focus on accessorizing (adding functionality) rather than stitching (designing), making it easier to create a fashionable app that looks good and fits well.",
    syntax: "import { MatModuleName } from '@angular/material/module-name';",
    codeExample:
      "import { MatButtonModule } from '@angular/material/button';\n\n@NgModule({\n  imports: [MatButtonModule]\n})\nexport class AppModule {}\n\n<!-- In template -->\n<button mat-raised-button>Click me</button>",
  },
  {
    id: 51,
    question: "How to install Angular CLI?",
    answer:
      "Installing Angular CLI is easy! You need to have Node.js and npm on your computer first. Then, open your terminal and type 'npm install -g @angular/cli'. The '-g' means it installs it for the whole computer. After it finishes, you can use commands like 'ng new' to create projects. It's like downloading a new app on your phone!",
    example: "npm install -g @angular/cli",
    realTimeExample:
      "Installing Angular CLI is like getting a new power tool for your workshop. Once you have it, you can use it to build all kinds of projects (apps) quickly and easily. The '-g' flag is like plugging it into a power strip that the whole workshop (computer) can use, so the tool is always available when you need it.",
    realTimeExample2:
      "Think of installing Angular CLI as hiring a personal assistant. This assistant ('ng') can help you with many tasks, like creating new projects ('ng new') or adding features ('ng generate'). The '-g' flag means the assistant is always on call, ready to help with any project on your computer. It's like having a helpful expert available anytime to make your work easier and faster.",
    syntax: "npm install -g @angular/cli",
    codeExample: "npm install -g @angular/cli",
  },
  {
    id: 52,
    question: "What is the app.component.ts file?",
    answer:
      "The app.component.ts file is like the boss of your Angular app. It's the main component that holds everything together. It has the code for the root component, including its name, what it looks like, and what it does. Every Angular app starts with this file, like the captain of a team!",
    example:
      "@Component({ selector: 'app-root', templateUrl: './app.component.html' }) export class AppComponent { title = 'MyApp'; }",
    realTimeExample:
      "The app.component.ts file is like the main character in a story. It's the first one you meet, and it introduces you to the world (app) and the other characters (components). This character has a name (selector), a look (template), and a personality (class). As the main character, it guides you through the story and connects you to all the other parts.",
    realTimeExample2:
      "Think of app.component.ts as the root of a tree. It's the starting point from which all the branches (other components) grow. The root provides the foundation and nutrients (data and structure) that help the whole tree (app) grow strong and healthy. Just like a tree needs a strong root to thrive, your app needs a well-defined app.component.ts to succeed.",
    syntax: "@Component({ selector: '', templateUrl: '', styleUrls: [] })",
    codeExample:
      "@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {\n  title = 'MyApp';\n}",
  },
  {
    id: 53,
    question: "What is the main.ts file?",
    answer:
      "main.ts is like the starter button for your Angular app. It's the first file that runs when your app starts. It tells Angular to load the main module and get everything going. Without it, your app wouldn't know how to begin. It's like pressing 'play' on a video game!",
    example:
      "platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.error(err));",
    realTimeExample:
      "The main.ts file is like the ignition in a car. When you turn the key (run the app), the ignition (main.ts) starts the engine (Angular) and gets everything moving. Without it, the car wouldn't start, and you wouldn't go anywhere. It's the essential first step that gets your app up and running.",
    realTimeExample2:
      "Think of main.ts as the opening scene of a movie. It sets the stage, introduces the main characters (modules), and starts the story (app) rolling. Without this scene, the movie wouldn't begin, and the audience would just see a blank screen. main.ts is what starts the show and gets your app's story underway.",
    syntax: "platformBrowserDynamic().bootstrapModule(AppModule);",
    codeExample:
      "platformBrowserDynamic().bootstrapModule(AppModule)\n  .catch(err => console.error(err));",
  },
  {
    id: 54,
    question: "What is the index.html file?",
    answer:
      "index.html is the main page of your Angular app, like the cover of a book. It's a simple HTML file that includes a special tag <app-root> where Angular puts all your components. When you open your app in a browser, this is what loads first. It's like the front door to your house!",
    example: "<!DOCTYPE html><html><body><app-root></app-root></body></html>",
    realTimeExample:
      "The index.html file is like the lobby of a building. It's the first place visitors (users) see when they arrive. The <app-root> tag is like a door to the rest of the building (app). When visitors walk through this door, they can explore all the rooms (components) inside. Without this lobby and door, visitors wouldn't know where to go.",
    realTimeExample2:
      "Imagine index.html as the title page of a book. It's the first thing readers (users) see, and it invites them into the story (app). The <app-root> tag is like the first sentence that hooks the reader and draws them into the rest of the book. This page sets the tone and starts the reader's journey through your app's content.",
    syntax: "<!DOCTYPE html><html><body><app-root></app-root></body></html>",
    codeExample:
      "<!DOCTYPE html>\n<html>\n  <body>\n    <app-root></app-root>\n  </body>\n</html>",
  },
  {
    id: 55,
    question: "What is the purpose of zone.js?",
    answer:
      "Zone.js is like a smart detective in your Angular app. It watches for changes in your app, like when data updates or buttons are clicked. It helps Angular know when to update the screen. Without it, Angular wouldn't know what to refresh. It's like having eyes everywhere to spot when something changes!",
    example:
      "Zone.js patches async operations like setTimeout, Promise, to trigger change detection.",
    realTimeExample:
      "Zone.js is like a security camera system in a store. It watches all the aisles (async operations) and tells the manager (Angular) when something changes, like a product being moved (data updated). This way, the manager can update the inventory (screen) and keep everything accurate and up to date.",
    realTimeExample2:
      "Think of Zone.js as a referee in a sports game. It watches all the players (async operations) and blows the whistle (triggers change detection) when something important happens, like a goal (data change) being scored. This keeps the game (app) fair and running smoothly, with everyone knowing what's happening at all times.",
    syntax: "N/A (Automatically included in Angular projects)",
    codeExample: "N/A",
  },
  {
    id: 56,
    question: "What is RxJS?",
    answer:
      "RxJS is like a magical stream of water that carries information. It's a library that helps handle things that happen over time, like waiting for a server to respond. Angular uses it with Observables to manage async tasks. Imagine a river that brings messages from far away whenever they're ready!",
    example:
      "import { Observable } from 'rxjs'; const obs = new Observable(subscriber => { subscriber.next('Hello'); });",
    realTimeExample:
      "RxJS is like a conveyor belt in a factory. Items (data) come down the belt at different times, and workers (your code) can take items as they arrive. The belt keeps moving, bringing new items as they're ready. This is perfect for handling things that happen at unpredictable times, like user inputs or server responses.",
    realTimeExample2:
      "Imagine RxJS as a radio station. You can tune in (subscribe) to hear music (data) as it's played. The station keeps broadcasting new songs over time, and you hear each one as it plays. If you change the channel (unsubscribe), you stop hearing that station. RxJS lets you listen to streams of data in the same way, getting updates as they happen.",
    syntax: "new Observable(subscriber => { subscriber.next(value); });",
    codeExample:
      "import { Observable } from 'rxjs';\nconst obs = new Observable(subscriber => {\n  subscriber.next('Hello');\n});\nobs.subscribe(value => console.log(value));",
  },
  {
    id: 57,
    question: "How to make HTTP requests in Angular?",
    answer:
      "Making HTTP requests in Angular is like sending a letter to a friend. You use the HttpClient service to ask for data from a server. First, you import it, then inject it into your component, and call methods like get() or post(). It's how your app talks to the internet, like chatting with a distant friend!",
    example:
      "this.http.get('/api/users').subscribe(users => this.users = users);",
    realTimeExample:
      "Making HTTP requests is like ordering food at a restaurant. You tell the waiter (HttpClient) what you want (URL), and they go to the kitchen (server) to get it. When the food (data) is ready, the waiter brings it to your table (component). If there's a problem, like the kitchen being closed, the waiter tells you (error handling).",
    realTimeExample2:
      "Think of HTTP requests as making a phone call. You dial a number (URL) and wait for someone (server) to answer. When they do, you ask for information (data) and they send it back to you. If the line is busy (server error), you get a busy signal (error). HttpClient handles these calls for your app, making it easy to communicate with servers.",
    syntax: "this.http.get(url).subscribe(response => { ... });",
    codeExample:
      "this.http.get('/api/users').subscribe(users => {\n  this.users = users;\n});",
  },
  {
    id: 58,
    question: "What is HttpClient?",
    answer:
      "HttpClient is like a messenger in your Angular app. It's a special service that lets you send requests to web servers and get responses back. You can use it to fetch data, send forms, or update information. It has easy methods like get, post, put, and delete. It's your app's way to communicate with the world!",
    example:
      "constructor(private http: HttpClient) {} this.http.post('/api/login', credentials).subscribe(...);",
    realTimeExample:
      "HttpClient is like a postal service for your app. You can send letters (GET requests) to ask for information, send packages (POST requests) with new data, or update addresses (PUT requests). The postal service handles all the delivery details, making sure your letters and packages reach the right place and bringing back responses when needed.",
    realTimeExample2:
      "Imagine HttpClient as a diplomat for your app. It can send envoys (GET) to gather information, deliver treaties (POST) to establish new agreements, or send updates (PUT) to existing pacts. The diplomat handles all the negotiations and communications, making sure your app can interact smoothly with other systems (servers) around the world.",
    syntax: "this.http.get(url), this.http.post(url, body)",
    codeExample:
      "constructor(private http: HttpClient) {}\nthis.http.post('/api/login', credentials).subscribe(response => {\n  console.log(response);\n});",
  },
  {
    id: 59,
    question: "What is template reference variables?",
    answer:
      "Template reference variables are like nicknames for parts of your HTML. You put a # in front, like #myButton, and then you can use that name in your code to talk to that element. For example, you can check what a user typed in an input box. It's like giving a toy a name so you can play with it easily!",
    example:
      "<input #nameInput> <button (click)='submit(nameInput.value)'>Submit</button>",
    realTimeExample:
      "Template reference variables are like name tags at a conference. When you see someone with a tag that says 'John' (#nameInput), you can call them by name in conversation (code). This makes it easy to refer to specific people (elements) without confusion. It's a simple way to identify and interact with individual parts of your template.",
    realTimeExample2:
      "Think of template reference variables as bookmarks in a book. You can mark a specific page (#nameInput) and then quickly turn to it later in your code. This lets you easily find and work with that page (element) without having to search through the whole book (template) each time you need it.",
    syntax: "<element #refName>",
    codeExample:
      "<input #nameInput>\n<button (click)='submit(nameInput.value)'>Submit</button>",
  },
  {
    id: 60,
    question: "What is ViewEncapsulation?",
    answer:
      "ViewEncapsulation is like putting walls around each room in your house. It decides how styles (like colors) from one component affect others. In Angular, you can choose Emulated (default, like thin walls), None (no walls, styles mix), or ShadowDom (strong walls). It keeps your app's look organized, like separate bedrooms for different styles!",
    example:
      "@Component({ encapsulation: ViewEncapsulation.ShadowDom }) // Styles are isolated",
    realTimeExample:
      "ViewEncapsulation is like soundproofing in a music studio. Emulated is like basic soundproofing that mostly works but might let some noise through. None is like having no soundproofing at all, where all sounds mix together. ShadowDom is like a professional sound booth where no outside noise gets in or out. Each option gives you different levels of style isolation for your components.",
    realTimeExample2:
      "Imagine ViewEncapsulation as fences between gardens. Emulated is like a picket fence that mostly keeps things separate but might let some plants (styles) spread through. None is like no fence at all, where all gardens blend together. ShadowDom is like a solid brick wall that completely separates each garden, keeping their plants (styles) entirely distinct and contained.",
    syntax: "encapsulation: ViewEncapsulation.Emulated|None|ShadowDom",
    codeExample:
      "@Component({\n  selector: 'app-example',\n  template: '<p>Styled</p>',\n  styles: ['p { color: red; }'],\n  encapsulation: ViewEncapsulation.ShadowDom\n})\nexport class ExampleComponent {}",
  },
  {
    id: 61,
    question: "What is the difference between ng-container and ng-template?",
    answer:
      "ng-container and ng-template are both like invisible helpers in your HTML. ng-container is used to group things together without adding any extra tags to the final page, like putting toys in a box that disappears. ng-template defines a template that you can use later, like a recipe card you save for cooking dinner. Use ng-container for organizing, and ng-template for reusable parts!",
    example:
      "<ng-container *ngIf='show'><p>Content</p></ng-container>, <ng-template #myTemplate><p>Reusable</p></ng-template>",
    realTimeExample:
      "ng-container is like a clear plastic bag that holds items together but isn't visible itself. ng-template is like a recipe card that you can use to create something when needed. The bag helps organize items without adding bulk, while the card lets you make the same dish over and over without rewriting the recipe each time.",
    realTimeExample2:
      "Think of ng-container as a ghost that can hold things but can't be seen. ng-template is like a blueprint that you can use to build something when you need it. The ghost helps you group and organize elements without adding anything visible to the page, while the blueprint lets you create reusable structures whenever they're needed.",
    syntax:
      "<ng-container *ngIf='condition'>...</ng-container>, <ng-template #refName>...</ng-template>",
    codeExample:
      "<ng-container *ngIf='show'>\n  <p>Content</p>\n</ng-container>\n\n<ng-template #myTemplate>\n  <p>Reusable</p>\n</ng-template>",
  },
  {
    id: 62,
    question: "What is router outlet?",
    answer:
      "Router outlet is like a magic door in your Angular app. It's a special spot in your template where different components appear based on the URL. When you click a link to go to '/home', the home component shows up in the router outlet. It's like changing TV channels; the outlet is the screen, and routes are the channels!",
    example:
      "<router-outlet></router-outlet> <!-- Components appear here based on route -->",
    realTimeExample:
      "Router outlet is like a stage in a theater. Different acts (components) perform on the stage based on the program (route). When the audience (users) chooses a show from the program, the stage manager (router) brings the right act onto the stage. The stage itself doesn't change, just what's presented on it.",
    realTimeExample2:
      "Imagine router outlet as a picture frame in a gallery. The frame stays the same, but the picture inside changes based on which artwork (component) the curator (router) decides to display. Visitors (users) can walk through the gallery (app) and see different artworks in the same frame as they move from room to room (navigate between routes).",
    syntax: "<router-outlet></router-outlet>",
    codeExample: "<router-outlet></router-outlet>",
  },
  {
    id: 63,
    question: "What is lazy loading?",
    answer:
      "Lazy loading is like only unpacking the toys you need to play with right now. Instead of loading all parts of your Angular app at once, it waits until you need them. For example, the login page loads only when you go there. This makes your app start faster, like a game that loads levels one by one!",
    example:
      "const routes: Routes = [{ path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }];",
    realTimeExample:
      "Lazy loading is like a buffet where food is brought out in batches. Instead of putting all the dishes out at once (loading everything upfront), the restaurant (app) brings out new dishes as people ask for them. This keeps the buffet table from getting too crowded and makes sure food is fresh when it's served, just like lazy loading keeps your app fast and responsive.",
    realTimeExample2:
      "Think of lazy loading as a library with books on demand. Instead of putting all books on the shelves at once, the library brings books from the back room when someone asks for them. This makes the library seem less overwhelming and ensures that popular books are always available quickly, just like lazy loading makes your app feel faster and more manageable.",
    syntax: "loadChildren: () => import('path').then(m => m.ModuleName)",
    codeExample:
      "const routes: Routes = [\n  {\n    path: 'admin',\n    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)\n  }\n];",
  },
  {
    id: 64,
    question: "What is a guard in Angular?",
    answer:
      "A guard in Angular is like a security guard at a party. It checks if someone can enter a certain part of your app. For example, a CanActivate guard might check if you're logged in before letting you see a secret page. There are different types like CanDeactivate (to stop leaving) and Resolve (to get data first). It's your app's bouncer!",
    example:
      "canActivate(route: ActivatedRouteSnapshot): boolean { return this.auth.isLoggedIn(); }",
    realTimeExample:
      "Guards are like bouncers at different sections of a club. CanActivate is like checking IDs at the VIP entrance—only those on the list (logged in) get in. CanDeactivate is like stopping someone from leaving if they haven't paid their tab. Resolve is like making sure the VIP lounge is stocked with drinks (data) before letting anyone in. Each guard protects different parts of your app.",
    realTimeExample2:
      "Imagine guards as traffic cops at intersections. CanActivate is like a cop checking if you have the right to turn left (access a route). CanDeactivate is like a cop making sure you've followed all the rules before letting you proceed. Resolve is like a cop directing traffic to ensure the road ahead is clear (data is ready) before you continue. Each guard helps manage the flow through your app safely and efficiently.",
    syntax: "canActivate: [GuardClass], canDeactivate: [GuardClass]",
    codeExample:
      "@Injectable({\n  providedIn: 'root'\n})\nexport class AuthGuard implements CanActivate {\n  canActivate() {\n    return this.auth.isLoggedIn();\n  }\n}",
  },
  {
    id: 65,
    question: "What is the difference between Observable and Subject?",
    answer:
      "Observable is like a radio station that broadcasts music. You tune in (subscribe) to listen. Subject is like a DJ who can both play music and let others join the broadcast. Observables are for receiving data, Subjects can send data to many listeners. Think of Observable as a one-way street, Subject as a busy intersection!",
    example:
      "const obs = of(1,2,3); obs.subscribe(x => console.log(x)); const subject = new Subject(); subject.subscribe(...); subject.next(1);",
    realTimeExample:
      "Observables are like newsletters you subscribe to. You receive updates when they're sent, but you can't send messages back. Subjects are like group chats where you can both receive and send messages. In a group chat (Subject), everyone can talk and listen, while a newsletter (Observable) is just for reading. Both keep you informed, but with different levels of interaction.",
    realTimeExample2:
      "Imagine Observables as a one-way street where cars (data) drive by and you watch them pass. Subjects are like a roundabout where cars can enter from any direction and you can also drive your own car into the traffic. Observables let you watch the flow of data, while Subjects let you both watch and contribute to the flow, making them more interactive and dynamic.",
    syntax: "new Observable(), new Subject()",
    codeExample:
      "const obs = of(1, 2, 3);\nobs.subscribe(x => console.log(x));\n\nconst subject = new Subject();\nsubject.subscribe(x => console.log(x));\nsubject.next(1);",
  },
  {
    id: 66,
    question: "What is BehaviorSubject?",
    answer:
      "BehaviorSubject is like a friendly radio that remembers the last song it played. When a new listener tunes in, it immediately plays the current song. It always has a value ready. Imagine walking into a room where music is already playing; you hear it right away. That's BehaviorSubject!",
    example:
      "const subject = new BehaviorSubject(0); subject.subscribe(x => console.log(x)); // logs 0 immediately",
    realTimeExample:
      "BehaviorSubject is like a scoreboard that always shows the current score. When new fans (subscribers) look at the board, they see the latest score right away, not just future updates. This is helpful when you want everyone to know the current state, like the score in a game or the status of a process, as soon as they start paying attention.",
    realTimeExample2:
      "Think of BehaviorSubject as a bulletin board in an office. When you pin a note (value) to the board, everyone who looks at it sees that note immediately. If you change the note, everyone sees the update right away. It's a shared space where the current information is always visible to all observers, making it easy to stay informed about the latest updates.",
    syntax: "new BehaviorSubject(initialValue)",
    codeExample:
      "const subject = new BehaviorSubject(0);\nsubject.subscribe(x => console.log(x)); // logs 0 immediately",
  },
  {
    id: 67,
    question: "What is trackBy in ngFor?",
    answer:
      "trackBy in *ngFor is like giving each item in a list a special ID card. When the list changes, Angular uses this ID to know which items are new, changed, or gone, instead of guessing. This makes updates faster and smoother. It's like labeling boxes so you know which one has your favorite toy!",
    example:
      "<li *ngFor='let item of items; trackBy: trackByFn'>{{ item.name }}</li> trackByFn(index, item) { return item.id; }",
    realTimeExample:
      "trackBy is like giving each student in a class a unique ID number. When the teacher calls attendance, they can quickly see who is present, absent, or new by checking the IDs, rather than trying to recognize each student by face. This makes the process faster and more accurate, especially in large classes (lists) where students might look similar (items might have similar data).",
    realTimeExample2:
      "Imagine trackBy as a library catalog system. Each book (item) has a unique call number (ID) that helps the librarian (Angular) quickly find, add, or remove books without having to scan every shelf (re-render every item). This system makes managing the library (updating the list) much more efficient, especially when the collection is large or changes frequently.",
    syntax: "*ngFor='let item of items; trackBy: trackByFn'",
    codeExample:
      "<li *ngFor='let item of items; trackBy: trackByFn'>\n  {{ item.name }}\n</li>\n\ntrackByFn(index: number, item: any) {\n  return item.id;\n}",
  },
  {
    id: 68,
    question: "What is the difference between ngIf and hidden?",
    answer:
      "ngIf and hidden are both ways to hide things, but differently. ngIf completely removes the element from the page, like erasing a drawing. Hidden just makes it invisible with CSS, like covering it with a blanket. Use ngIf when you don't need it at all, hidden when you might show it again soon. It's like deleting vs. hiding a file on your computer!",
    example:
      "<div *ngIf='show'>Removed</div> vs <div [hidden]='!show'>Invisible</div>",
    realTimeExample:
      "ngIf is like unplugging a lamp—it's completely gone from the circuit, using no power (resources). Hidden is like turning the lamp off with the switch—it's still there, still connected, just not visible or using light (not rendered but taking up space). Use ngIf when you want to save resources, and hidden when you want to keep the element's space reserved.",
    realTimeExample2:
      "Think of ngIf as closing a tab in your browser—the page is completely gone until you open it again. Hidden is like minimizing the window—the page is still open and using memory, but you can't see it. ngIf is better for performance when you don't need the element, while hidden is better for quickly toggling visibility without losing the element's place in the layout.",
    syntax: "*ngIf='condition', [hidden]='condition'",
    codeExample:
      "<div *ngIf='show'>Removed</div>\n<div [hidden]='!show'>Invisible</div>",
  },
  {
    id: 69,
    question: "What is ngSwitch?",
    answer:
      "ngSwitch is like a traffic light for your HTML. It checks a value and shows different things based on it. For example, if the value is 'red', show a stop sign; if 'green', show a go sign. It's a way to switch between options without lots of if-else. Imagine choosing outfits: if it's cold, wear a coat; if hot, wear shorts!",
    example:
      "<div [ngSwitch]='color'> <p *ngSwitchCase=''red'>Stop</p> <p *ngSwitchCase=''green'>Go</p> </div>",
    realTimeExample:
      "ngSwitch is like a vending machine. You put in a code (value), and the machine gives you the item (HTML) that matches that code. Each code corresponds to a different item, just like each case in ngSwitch corresponds to a different piece of HTML. It's a clean way to select between multiple options based on a single value.",
    realTimeExample2:
      "Imagine ngSwitch as a jukebox. You select a song (value), and the jukebox plays the record (HTML) that matches your selection. Each song has its own record, just like each case in ngSwitch has its own HTML. It's an efficient way to play different 'songs' (show different content) based on the user's selection (value).",
    syntax: "[ngSwitch]='expression', *ngSwitchCase='value'",
    codeExample:
      "<div [ngSwitch]='color'>\n  <p *ngSwitchCase=\"'red'\">Stop</p>\n  <p *ngSwitchCase=\"'green'\">Go</p>\n</div>",
  },
  {
    id: 70,
    question: "What is the purpose of ngOnChanges?",
    answer:
      "ngOnChanges is like a notification bell that rings when something changes. It's a lifecycle hook that Angular calls whenever the inputs to a component change, like when a parent sends new data. You can use it to react to changes, such as updating a display. It's your component's way of saying 'Hey, something new happened!'",
    example:
      "ngOnChanges(changes: SimpleChanges) { if (changes['inputProp']) { this.doSomething(); } }",
    realTimeExample:
      "ngOnChanges is like a security system that alerts you when a door or window is opened. Each input is like a sensor, and when its state changes (new data), the system (ngOnChanges) notifies you so you can check what's happening. This helps you respond quickly to any changes in your component's environment.",
    realTimeExample2:
      "Think of ngOnChanges as a news ticker that updates whenever there's breaking news. Each input is like a news source, and when there's an update (change), the ticker (ngOnChanges) displays the latest information. This keeps you informed about all the changes happening in your component, so you can react appropriately to each update.",
    syntax: "ngOnChanges(changes: SimpleChanges) { ... }",
    codeExample:
      "ngOnChanges(changes: SimpleChanges) {\n  if (changes['inputProp']) {\n    this.doSomething();\n  }\n}",
  },
  {
    id: 71,
    question: "What is ngOnDestroy?",
    answer:
      "ngOnDestroy is like a goodbye party for your component. It's a lifecycle hook that Angular calls just before it removes the component from the page. You use it to clean up things, like stopping timers or canceling subscriptions. It's the last chance to tidy up before the component goes away. Think of it as putting away your toys before bedtime!",
    example:
      "ngOnDestroy() { this.subscription.unsubscribe(); clearInterval(this.timer); }",
    realTimeExample:
      "ngOnDestroy is like the closing time at a store. Before the store closes (component is destroyed), the staff (ngOnDestroy) makes sure all the lights are off, the cash register is balanced (subscriptions are canceled), and everything is put away neatly. This ensures the store is ready to open clean and organized the next time it's needed.",
    realTimeExample2:
      "Imagine ngOnDestroy as the end credits of a movie. Before the credits roll (component is destroyed), the crew (ngOnDestroy) makes sure all the sets are struck, the actors have left the stage, and all equipment is returned. This final cleanup ensures that everything is ready for the next production (component instance) to start fresh.",
    syntax: "ngOnDestroy() { ... }",
    codeExample:
      "ngOnDestroy() {\n  this.subscription.unsubscribe();\n  clearInterval(this.timer);\n}",
  },
  {
    id: 72,
    question:
      "What is the difference between providedIn: 'root' and providers array?",
    answer:
      "providedIn: 'root' and providers array are ways to share services. providedIn: 'root' makes the service available everywhere in the app, like a global toy box. The providers array in a module or component makes it available only in that part, like a private toy box. Use 'root' for app-wide services, providers for local ones. It's like sharing toys with everyone vs. just your room!",
    example:
      "@Injectable({ providedIn: 'root' }) vs providers: [MyService] in @NgModule or @Component",
    realTimeExample:
      "providedIn: 'root' is like a public library where everyone in the city (app) can check out books (use the service). The providers array is like a personal bookshelf where only people in your house (module/component) can access the books. Both provide books, but with different levels of access and sharing.",
    realTimeExample2:
      "Think of providedIn: 'root' as a city-wide WiFi network that anyone can connect to. The providers array is like a private WiFi network that only works in your home. Both provide internet access (services), but one is available globally while the other is limited to a specific area, giving you control over who can connect.",
    syntax: "@Injectable({ providedIn: 'root' }), providers: [ServiceName]",
    codeExample:
      "@Injectable({\n  providedIn: 'root'\n})\nexport class MyService {}\n\n// or\n\n@NgModule({\n  providers: [MyService]\n})\nexport class AppModule {}",
  },
  {
    id: 73,
    question: "What is a singleton service?",
    answer:
      "A singleton service is like having only one copy of a favorite book. No matter how many people want it, there's just one instance shared by everyone. In Angular, it means the service is created once and reused, saving memory. Imagine a single ice cream scoop for the whole class instead of one per kid!",
    example:
      "@Injectable({ providedIn: 'root' }) ensures only one instance app-wide.",
    realTimeExample:
      "A singleton service is like a community garden. Everyone in the neighborhood (app) can enjoy the garden (service), but there's only one garden that everyone shares. This saves space (memory) and ensures that everyone is working with the same plants (data), making the community (app) more cohesive and efficient.",
    realTimeExample2:
      "Imagine a singleton service as a public park. There's only one park in the city (app), and all residents (components) can visit it. The park provides the same amenities (methods and properties) to everyone, and any changes made to the park are visible to all visitors. This shared space promotes consistency and collaboration throughout the city.",
    syntax: "@Injectable({ providedIn: 'root' })",
    codeExample:
      "@Injectable({\n  providedIn: 'root'\n})\nexport class MyService {}",
  },
  {
    id: 74,
    question: "What is the purpose of @Input?",
    answer:
      "@Input is like a gift from a parent to a child. It lets parent components send data to child components. For example, a parent can pass a name or color to a child button. The child can then use that data. It's how components share information down the family tree!",
    example: "@Input() name: string; <child [name]='parentName'></child>",
    realTimeExample:
      "@Input is like passing a note in class. The parent (sender) writes a message (data) on a note and passes it to the child (receiver). The child can read the note and use the information, like instructions or updates. It's a simple way for parents to communicate specific information to their children without shouting across the room.",
    realTimeExample2:
      "Think of @Input as a package delivery. The parent (sender) prepares a package (data) with the child's name (@Input) on it and sends it. The child (component) receives the package and can use what's inside. This delivery system ensures that children get exactly what their parents send, making communication between components reliable and direct.",
    syntax: "@Input() propertyName: type;",
    codeExample:
      "@Input() name: string;\n\n<!-- Parent -->\n<child [name]='parentName'></child>",
  },
  {
    id: 75,
    question: "What is the purpose of @Output?",
    answer:
      "@Output is like a child telling a parent something important. It lets child components send messages or events back to parent components using EventEmitter. For example, a child button can tell the parent 'I was clicked!'. It's how children communicate up the family tree!",
    example:
      "@Output() clicked = new EventEmitter(); <child (clicked)='handleClick()'></child>",
    realTimeExample:
      "@Output is like a child raising their hand in class to ask a question. The child (component) signals to the parent (parent component) that they have something to say (event to emit). The parent can then respond appropriately, like calling on the child to speak. It's a way for children to get their parents' attention and communicate their needs or actions.",
    realTimeExample2:
      "Imagine @Output as a walkie-talkie. The child (component) has a walkie-talkie with a button that, when pressed (@Output event), sends a message to the parent's walkie-talkie. The parent can then respond to the message. This two-way communication device allows children to easily notify parents about important events or requests.",
    syntax: "@Output() eventName = new EventEmitter<type>();",
    codeExample:
      "@Output() clicked = new EventEmitter<string>();\n\n// Child\nthis.clicked.emit('Hello from child!');\n\n<!-- Parent -->\n<child (clicked)='handleClick($event)'></child>",
  },
  {
    id: 76,
    question: "What is EventEmitter?",
    answer:
      "EventEmitter is like a messenger pigeon in your Angular app. It's a class that helps child components send custom events to parent components. You create an EventEmitter, and when something happens, you 'emit' a message. The parent listens and reacts. It's like sending a note in a bottle from child to parent!",
    example:
      "const emitter = new EventEmitter<string>(); emitter.emit('Hello from child!');",
    realTimeExample:
      "EventEmitter is like a flare gun. When something important happens in the child component, it fires a flare (emits an event) into the sky. The parent component sees the flare and knows to take action, like sending help or celebrating. It's a clear signal that something noteworthy has occurred and requires attention.",
    realTimeExample2:
      "Think of EventEmitter as a bat signal. When the child component needs the parent's attention, it shines the bat signal (emits an event) into the night sky. The parent sees the signal and responds appropriately, like Batman answering the call for help. It's a dramatic but effective way to communicate urgent messages from child to parent components.",
    syntax: "new EventEmitter<type>(); emitter.emit(value);",
    codeExample:
      "@Output() message = new EventEmitter<string>();\nthis.message.emit('Hello from child!');",
  },
  {
    id: 77,
    question: "What is FormBuilder?",
    answer:
      "FormBuilder is like a helpful assistant for building forms. It's a service that makes creating reactive forms easier. Instead of writing lots of code, you use its methods to quickly make FormControls, FormGroups, and FormArrays. It's like having a kit that assembles a model car faster than doing it piece by piece!",
    example: "this.form = this.fb.group({ name: [''], email: [''] });",
    realTimeExample:
      "FormBuilder is like a meal kit service. Instead of shopping for individual ingredients and measuring everything out, you get pre-measured ingredients and simple instructions to quickly create a meal (form). This saves time and reduces errors, making it easier to prepare complex dishes (forms) with consistent results.",
    realTimeExample2:
      "Imagine FormBuilder as a Lego set with easy-to-follow instructions. Instead of sorting through loose bricks and figuring out how they fit together, you have a step-by-step guide that helps you quickly build a specific model (form). This makes the building process faster and more enjoyable, with less chance of mistakes or missing pieces.",
    syntax: "this.fb.group({ controlName: [initialValue, validators] })",
    codeExample:
      "this.form = this.fb.group({\n  name: ['', Validators.required],\n  email: ['', [Validators.required, Validators.email]]\n});",
  },
  {
    id: 78,
    question: "What is Validators?",
    answer:
      "Validators are like referees in a game. They check if the information in forms is correct. For example, 'required' makes sure a field isn't empty, 'minLength' checks if it's long enough. They help prevent bad data from being submitted. Imagine a teacher checking your homework before you turn it in!",
    example: "name: ['', [Validators.required, Validators.minLength(3)]]",
    realTimeExample:
      "Validators are like bouncers at a club. Each has specific rules for who can enter: one checks for ID (required), another checks the dress code (minLength), and another checks the guest list (pattern). Only data that meets all the rules is allowed in, keeping your form data high-quality and valid, just like a bouncer keeps the club crowd appropriate and safe.",
    realTimeExample2:
      "Think of Validators as spelling and grammar checkers. As you type your essay (fill out the form), they underline mistakes (invalid data) and suggest corrections. Required checks for missing words, minLength checks for sentence fragments, and other validators check for specific writing rules. This helps ensure your final essay (submitted data) is well-written and error-free.",
    syntax:
      "Validators.required, Validators.minLength(n), Validators.email, etc.",
    codeExample:
      "this.form = this.fb.group({\n  name: ['', [Validators.required, Validators.minLength(3)]]\n});",
  },
  {
    id: 79,
    question: "What is the purpose of ngForm?",
    answer:
      "ngForm is like a wrapper around your form that keeps track of everything. In template-driven forms, it creates a FormGroup behind the scenes and connects it to your <form> tag. It helps manage validation and submission. It's like a coach who organizes the team and makes sure everyone plays by the rules!",
    example:
      "<form #f='ngForm' (ngSubmit)='onSubmit(f)'> <input ngModel name='name'> </form>",
    realTimeExample:
      "ngForm is like a team captain in a relay race. It keeps track of all the runners (form controls), makes sure they're ready to go (valid), and coordinates the baton hand-offs (data binding). When the race starts (form is submitted), the captain ensures everything runs smoothly and the team crosses the finish line successfully (form data is submitted correctly).",
    realTimeExample2:
      "Imagine ngForm as a project manager. It oversees all the tasks (form controls), ensures they're completed correctly (validated), and coordinates their results into a final deliverable (form submission). The project manager keeps everything organized and on track, making sure the project (form) is successful and meets all requirements.",
    syntax: "#formRef='ngForm', (ngSubmit)='method(formRef)'",
    codeExample:
      "<form #f='ngForm' (ngSubmit)='onSubmit(f)'>\n  <input ngModel name='name'>\n</form>",
  },
];

// Make data available globally
window.beginner = beginner;
