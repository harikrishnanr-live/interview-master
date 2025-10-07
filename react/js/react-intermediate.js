// React Intermediate Level Q&A Data

let intermediate = [
  {
    id: 1,
    question: "What are React Hooks?",
    answer:
      "React Hooks are special tools that React gave us starting from version 16.8. These tools let you use important features of React in simple function components without needing to write class components. Before hooks, you had to use class components for things like keeping track of data that changes, or doing actions when the component loads. Hooks let function components do these things too. For example, useState helps you keep and change data inside a component, like counting how many times a button is clicked. useEffect lets you do things like getting data from a server when the component first shows up. Hooks make your code easier to read, reuse, and understand. In a real app, you might use useState to remember what the user typed in a form, or useEffect to load a list of messages when a chat page opens. Hooks help you write cleaner code and make components more flexible.",
  },
  {
    id: 2,
    question: "What is useState?",
    answer:
      "useState is a special hook in React that lets you add and manage changing data inside a function component. It gives you two things: the current value of the data, and a way to change that value. For example, if you write `const [count, setCount] = useState(0);`, it starts the count at 0, and setCount is a function you can call to change the count. When you change the state with setCount, React will update the component on the screen to show the new value. This is helpful for things like keeping track of what a user types in a box, or if a button is on or off. In a real app, like a shopping list, you could use useState to keep the list of items and add new ones when the user clicks a button to submit.",
  },
  {
    id: 3,
    question: "What is useEffect?",
    answer:
      "useEffect is a hook that lets you do extra actions in a function component, like getting data from a server, setting up timers, or changing the webpage directly. It runs after the component shows up on the screen. You can tell it when to run by giving it a list of things to watch for changes. For example, if you write `useEffect(() => { getUserData(); }, []);`, it will get the user data only once when the component first loads. The empty list means it doesn't watch for any changes. In a real app, you might use useEffect to connect to a live chat server to get new messages, and disconnect when the user leaves the page. It helps you handle things that happen outside of just showing the component.",
  },
  {
    id: 4,
    question: "What is the Context API?",
    answer:
      "The Context API is a way in React to share information between many components without having to pass that information through each component in between. Normally, if a parent component has some data, and a grandchild component needs it, you have to pass it through the child component too, which is called prop drilling and can be messy. Context lets you skip that and give the data directly to the components that need it. It's good for things that many parts of the app need, like the color theme of the app, or if the user is logged in. You make a context with `React.createContext()`, wrap your app with a Provider that gives the data, and any component can get it with `useContext`. For example, a theme context can let all buttons and text know if they should be dark or light. In a real app, you might use context to keep track of the user's login status on every page without passing it around.",
  },
  {
    id: 5,
    question: "What is React Router?",
    answer:
      "React Router is a helpful library that helps you manage different pages in a React app. It lets you set up different paths, like /home or /about, and show different components based on the web address. For example, when someone goes to /profile/123, it can show the profile for user 123. It gives you tools like BrowserRouter to wrap your app, Route to define what shows on each path, Link to make clickable links, and useNavigate to change pages with code. In a real online store app, React Router helps switch between the list of products, a single product page, and the cart page without reloading the whole site.",
  },
  {
    id: 6,
    question: "What are custom hooks in React?",
    answer:
      "Custom hooks are special functions you make yourself in React that start with 'use' and can use other hooks inside them. They help you take code that you use in many components and put it in one place so you can reuse it. For example, you could make a custom hook called `useFetch` that handles getting data from a server, using useState to keep the data and useEffect to load it. This makes your components cleaner and easier to read. In a real app like a dashboard, you might make a custom hook `useWindowSize` that watches how big the window is and tells components when it changes, so they can adjust their size.",
  },
  {
    id: 7,
    question: "How do you create a custom hook?",
    answer:
      "To make a custom hook, you write a function that starts with 'use' and inside it, you use other hooks and your own code. For example, you can make a function like this:\n\n```js\nfunction useCounter(startValue = 0) {\n  const [number, setNumber] = useState(startValue);\n  const addOne = () => setNumber(n => n + 1);\n  return { number, addOne };\n}\n```\n\nThen, in any component, you can call `useCounter` and get the number and the function to increase it. This lets you share the counting logic between different parts of your app. In a real voting app, you might make a custom hook `useVote` that keeps track of votes and sends them to the server when someone votes.",
  },
  {
    id: 8,
    question: "What is useReducer and when should you use it?",
    answer:
      "useReducer is another hook like useState, but it's better for managing more complicated data that has many parts or changes in tricky ways. It uses a special function called a reducer that takes the current data and an action, and gives back the new data. For example, if you have a form with many fields, or a game with player position and score, useReducer helps keep everything organized. You use it when the new state depends on the old state, or when there are many related pieces of data. In a real game app, useReducer could handle actions like moving the player or adding points, making sure all the game data updates correctly together.",
  },
  {
    id: 9,
    question: "How do you use useReducer?",
    answer:
      "useReducer needs two things: a reducer function and the starting data. It gives you the current data and a dispatch function to send messages. Here's how it works:\n\n```js\nconst [data, sendMessage] = useReducer(reducerFunction, startData);\n\nfunction reducerFunction(data, message) {\n  switch(message.type) {\n    case 'add':\n      return { number: data.number + 1 };\n    case 'subtract':\n      return { number: data.number - 1 };\n    default:\n      return data;\n  }\n}\n```\n\nYou call sendMessage with an object like `sendMessage({ type: 'add' })` to change the data. In a real shopping cart app, useReducer could handle messages for adding products, removing them, or changing how many you want, keeping the cart data neat.",
  },
  {
    id: 10,
    question: "What is the difference between useState and useReducer?",
    answer:
      "useState is easy and good for simple data that doesn't change in complicated ways, like a single number or true/false. useReducer is better when your data is more complex, with many parts that change together, or when the new value depends on the old one. useState works for things that stand alone, but useReducer is great for connected data. For example, use useState for turning a light on or off, but useReducer for a whole form with many fields and rules. In a real chat app, useReducer could manage the chat by handling actions like sending a message, showing someone is typing, or updating online status, keeping all the chat info in one place.",
  },
  {
    id: 11,
    question: "What is useCallback and why is it useful?",
    answer:
      "useCallback is a hook that remembers a function so it doesn't get made new every time the component updates. It only makes a new function if the things it depends on change. This stops extra re-drawing of parts of the screen that don't need it. It's helpful when you give functions to child components that are set up to not re-render unless needed. For example, `const clickHandler = useCallback(() => { setCount(c => c + 1); }, []);` keeps the same function each time. In a real list app, useCallback stops list items from re-drawing when the main list changes but the click action stays the same.",
  },
  {
    id: 12,
    question: "What is useMemo and how does it work?",
    answer:
      "useMemo is a hook that remembers the result of a hard calculation so it doesn't have to do it again every time the component updates. It only re-does the calculation if the things it depends on change. It gives back the remembered value. For example, `const bigResult = useMemo(() => doHardMath(a, b), [a, b]);` only calculates again if a or b changes. This makes the app faster by not wasting time on work that doesn't need to be done. In a real chart app, useMemo could keep sorted data in memory so it doesn't sort the list every time something small changes.",
  },
  {
    id: 13,
    question: "When should you use useMemo?",
    answer:
      "Use useMemo when you have calculations that take a lot of time or computer power and don't need to happen every time the component shows. It's good for things like sorting big lists, doing math with many steps, or changing data in big ways. Don't use it for easy things because the extra work of remembering might not be worth it. In a real stock app, useMemo could remember the total value of your stocks so it doesn't add them up every second, only when prices actually change.",
  },
  {
    id: 14,
    question: "How do you implement lazy loading in React?",
    answer:
      "Lazy loading means loading parts of your app only when they are needed, to make it start faster. In React, you use React.lazy() to import a component later, and Suspense to show something while it's loading. For example:\n\n```js\nconst SlowComponent = React.lazy(() => import('./SlowComponent'));\n\nfunction MyApp() {\n  return (\n    <Suspense fallback={<div>Please wait...</div>}>\n      <SlowComponent />\n    </Suspense>\n  );\n}\n```\n\nThis way, the slow part only loads when the user gets to it. In a real blog app, lazy loading could wait to load the comments or pictures until the user scrolls down to see them.",
  },
  {
    id: 15,
    question: "What is code splitting in React?",
    answer:
      "Code splitting is a way to break your app's code into smaller pieces that load separately. This makes the app start faster because it doesn't load everything at once. React.lazy() and importing things when needed help with this. For example, you can split the code so each page of your app loads its own part. In a real social media app, code splitting could put the news feed in one piece, the user profile in another, and messages in a third, so only the feed loads first, and the others load when the user goes to them.",
  },
  {
    id: 16,
    question: "How do you handle routing with parameters in React Router?",
    answer:
      "In React Router, you can make routes that change based on parts of the web address. You use :name in the path to mark where the changing part is, and get it with the useParams hook. For example:\n\n```js\n<Route path=\"/user/:userId\" element={<UserPage />} />\n\nfunction UserPage() {\n  const { userId } = useParams();\n  // Now you can use userId to get the right user info\n}\n```\n\nThis lets the same page show different users. In a real store app, you might have `/product/:itemNumber` to show different products based on the number in the address.",
  },
  {
    id: 17,
    question: "What is the useParams hook?",
    answer:
      "useParams is a hook from React Router that gives you an object with the changing parts from the web address. For example, if the address is `/user/123`, `useParams()` gives you `{ id: '123' }`. It's helpful for getting the special parts of the URL that change. In a real news app, useParams could get the article number from `/article/:storyId` so you can load and show the right story.",
  },
  {
    id: 18,
    question: "How do you programmatically navigate in React Router?",
    answer:
      "Programmatic navigation means changing pages with code instead of clicking links. Use the useNavigate hook for this. For example:\n\n```js\nconst goTo = useNavigate();\n\nfunction afterSubmit() {\n  // Send the form\n  goTo('/thank-you');\n}\n```\n\nThis is good for going to new pages after doing something, like after logging in. In a real login system, after the user signs in, you can use navigate to take them to their main page automatically.",
  },
  {
    id: 19,
    question: "What is the difference between Link and NavLink?",
    answer:
      "Link is a basic way to make a clickable link that takes you to another page in React Router. NavLink is like Link but can also style itself to show if it's the current page. NavLink adds a special class when the link matches the page you're on. For example:\n\n```js\n<NavLink to=\"/home\" className={({ isActive }) => isActive ? 'bold' : 'normal'}>\n  Home\n</NavLink>\n```\n\nIn a real menu, NavLink can make the current page link look different, like bold or colored, so users know where they are.",
  },
  {
    id: 20,
    question: "How do you protect routes in React Router?",
    answer:
      "To protect routes, make a special component that checks if the user is allowed to see the page, and sends them away if not. For example:\n\n```js\nfunction SafeRoute({ children }) {\n  const loggedIn = checkIfLoggedIn();\n  return loggedIn ? children : <Navigate to=\"/login\" />;\n}\n```\n\nPut this around the routes that need protection. In a real admin area, this makes sure only logged-in users can see the important pages, and others get sent to the login page.",
  },
  {
    id: 21,
    question: "What is the Context API used for?",
    answer:
      "The Context API is a feature in React that lets you share information between many components without having to pass that information through each component in between. Normally, if a parent component has some data that a grandchild needs, you have to pass it through the child component first, which can be annoying and is called prop drilling. Context lets you skip that step and give the data directly to the components that need it. It's useful for things that many parts of your app need, like the theme (dark or light mode) or whether the user is logged in.",
  },
  {
    id: 22,
    question: "How do you create a context?",
    answer:
      "To create a context in React, you use React.createContext() to make a new context object. Then, you wrap your components with a Provider component that gives the data to all the components inside it. Any component inside can get the data using the useContext hook. This way, you can share things like user settings or app themes across your whole app without passing props everywhere.",
  },
  {
    id: 23,
    question: "What are context consumers?",
    answer:
      "Context consumers are components that get the data from a context. In older React code, you might use a Consumer component to get the context value. But in modern React with function components, you use the useContext hook instead, which is simpler. The consumer listens for changes in the context and updates when the data changes.",
  },
  {
    id: 24,
    question: "How do you optimize context performance?",
    answer:
      "To make context work faster, you can split contexts into smaller ones for different parts of your app, like one for theme and one for user data. Use useMemo to remember context values so they don't change every time. Also, wrap components that use context with React.memo to stop them from re-drawing when they don't need to. This helps your app run smoother.",
  },
  {
    id: 25,
    question: "What is React Suspense?",
    answer:
      "React Suspense is a feature that lets components wait for something to finish before they show on the screen. It's used with lazy loading, where you load parts of your app only when needed, and it shows a loading message while waiting. It can also be used for getting data from servers. Suspense makes your app feel faster by showing placeholders while things load in the background.",
  },
  {
    id: 26,
    question: "How do you handle loading states with Suspense?",
    answer:
      "To handle loading with Suspense, you wrap your lazy-loaded components in a Suspense component. You give Suspense a fallback prop, which is what shows while the component is loading, like a spinner or 'Loading...' text. This way, users see something nice instead of a blank screen while waiting for the slow parts to load.",
  },
  {
    id: 27,
    question: "What are compound components?",
    answer:
      "Compound components are a way to build React components where several smaller components work together as a group. They share data between them without you having to pass props around. For example, a Tabs component might have Tab and TabPanel sub-components that know about each other. This makes your code cleaner and easier to use.",
  },
  {
    id: 28,
    question: "How do you implement compound components?",
    answer:
      "To make compound components, you can use the Context API to share data between the related components. Or, you can use React.cloneElement to add props to child components automatically. This lets the parent component control the children without the user having to pass props. It's good for things like menus or form groups where parts need to talk to each other.",
  },
  {
    id: 29,
    question: "What is render props pattern?",
    answer:
      "The render props pattern is a way in React where you pass a function as a prop to a component, and that function returns the JSX to render. This lets you share logic between components but control how they look. For example, a Mouse component might pass mouse position to a render prop function, so you can show different things based on the mouse.",
  },
  {
    id: 30,
    question: "When should you use render props?",
    answer:
      "Use render props when you have logic that many components need, but you want each component to decide how to show the result. It's good when you need to share behavior like mouse tracking or data fetching, but let each component render differently. It's more flexible than higher-order components for some cases.",
  },
  {
    id: 31,
    question: "How do you test React components?",
    answer:
      "To test React components, you use tools like Jest for running tests and React Testing Library for testing how components work from a user's view. You write unit tests for small parts and integration tests for how parts work together. This helps make sure your app works right and doesn't break when you change things.",
  },
  {
    id: 32,
    question: "What is React Testing Library?",
    answer:
      "React Testing Library is a tool for testing React components that focuses on testing them like real users would. Instead of testing the code details, it tests what users see and do, like clicking buttons or reading text. This makes tests more reliable and helps catch real problems users might face.",
  },
  {
    id: 33,
    question: "How do you test hooks?",
    answer:
      "To test hooks, you can use the React Hooks Testing Library, which lets you test hooks directly. Or, you can test them inside component tests by rendering a test component that uses the hook. This way, you can check if the hook works right, like if useState updates correctly or useEffect runs at the right times.",
  },
  {
    id: 34,
    question: "What is the act() function in testing?",
    answer:
      "The act() function in testing makes sure that all the changes from a test action are finished before you check the results. It's like waiting for React to update the screen after you click a button. This prevents tests from failing because they check too early, before the component has updated.",
  },
  {
    id: 35,
    question: "How do you mock API calls in tests?",
    answer:
      "To mock API calls in tests, you can use Jest's built-in mocking to fake the fetch or axios functions. Or, use libraries like MSW (Mock Service Worker) to pretend to be a real server. This lets you test your components without needing a real backend, and control what data they get.",
  },
  {
    id: 36,
    question: "What is the useLayoutEffect hook?",
    answer:
      "useLayoutEffect is a hook like useEffect, but it runs right after React changes the DOM, before the browser paints the screen. It's used for things that need to measure or change the layout, like getting the size of an element or moving things around. It's synchronous, so it can block the screen update if it takes time.",
  },
  {
    id: 37,
    question: "When should you use useLayoutEffect instead of useEffect?",
    answer:
      "Use useLayoutEffect instead of useEffect when you need to read something from the DOM layout, like the height of an element, and then update the component right away. Since it runs before the screen updates, you can make changes that affect how things look without flickering. But use it carefully because it can slow down your app.",
  },
  {
    id: 38,
    question: "What is the useImperativeHandle hook?",
    answer:
      "useImperativeHandle lets you control what methods or values a parent component can access when it uses a ref on your component. It's used with forwardRef to expose specific functions, like play or pause on a video component. This way, the parent can call methods on the child without knowing the details.",
  },
  {
    id: 39,
    question: "How do you handle form validation in React?",
    answer:
      "To handle form validation in React, you can use controlled components where you manage the input values and check them as the user types. You can write your own rules, like checking if an email looks right. Or, use libraries like Formik or React Hook Form, which make it easier to handle complex forms with many fields and rules.",
  },
  {
    id: 40,
    question: "What is React Hook Form?",
    answer:
      "React Hook Form is a popular library for handling forms in React. It manages the form data and validation without causing extra re-renders of your components. It uses hooks to register inputs and handle errors, making forms faster and easier to build. It's good for forms with many fields or complex validation rules.",
  },
  {
    id: 41,
    question: "How do you handle file uploads in React?",
    answer:
      "To handle file uploads in React, you use a controlled input with type 'file'. When the user picks a file, you can get it from the event and send it to the server using FormData. FormData lets you package the file with other data. You can show a progress bar while uploading. In a real app, like a photo sharing site, you might let users choose images and upload them to save on the server.",
  },
  {
    id: 42,
    question: "What is the useDeferredValue hook?",
    answer:
      "useDeferredValue is a hook that lets you delay updating a less important part of the screen so that more important updates can happen first. It's useful when you have a big list that needs to filter, and you want the search box to update right away, but the list can wait a bit. This makes the app feel faster. For example, in a search page, the search input updates immediately, but the results list updates a second later.",
  },
  {
    id: 43,
    question: "What is the useTransition hook?",
    answer:
      "useTransition is a hook that lets you mark some updates as not super important, so React can do them without stopping more urgent things. It gives you a function to start the non-urgent update and a flag to show if it's still working. This is good for things like switching between tabs where you don't want the screen to freeze. In a real app, you might use it to load a new page in the background while the user is still on the old one.",
  },
  {
    id: 44,
    question: "How do you implement infinite scrolling?",
    answer:
      "Infinite scrolling means loading more content as the user scrolls down, like on social media feeds. You can use the Intersection Observer API to watch when the user gets near the bottom, then load more data. Or, listen to scroll events and check if they're close to the bottom. This way, the page keeps adding new items without the user clicking 'next page'. In a real news app, it loads more articles as you scroll, so you can keep reading without stopping.",
  },
  {
    id: 45,
    question: "What is the useId hook?",
    answer:
      "useId is a hook that creates unique IDs that stay the same even if the component is rendered on the server and then on the client. This is important for things like form labels and accessibility, where IDs need to match. It helps avoid problems with server-side rendering. For example, in a form with many inputs, useId makes sure each label connects to the right input box.",
  },
  {
    id: 46,
    question: "How do you handle authentication in React?",
    answer:
      "To handle authentication in React, you can use the Context API to keep track of if the user is logged in across the app. You make protected routes that check if the user has permission before showing the page. For API calls, you add interceptors to include the login token in requests. In a real app, like a bank site, this makes sure only logged-in users can see their account info and sends their token with every request to the server.",
  },
  {
    id: 47,
    question: "What is the useContext hook?",
    answer:
      "useContext is a hook that lets function components get data from a context. Instead of using a Consumer component, you just call useContext with the context object and get the value directly. It's simpler and cleaner. For example, if you have a theme context, any component can use useContext to know if it should be light or dark mode.",
  },
  {
    id: 48,
    question: "How do you handle global state without Redux?",
    answer:
      "To handle global state without Redux, you can use the Context API combined with useReducer for more complex data. Or, use smaller libraries like Zustand or Jotai that make it easy to share state across components. This way, you don't need a big setup like Redux. For example, in a shopping app, you can keep the cart items in global state so all pages know what's in the cart.",
  },
  {
    id: 49,
    question: "What is the difference between useEffect and useLayoutEffect?",
    answer:
      "useEffect runs after the component shows on the screen, and it's asynchronous, so it doesn't block the screen update. useLayoutEffect runs right after React changes the DOM but before the browser draws it, and it's synchronous, so it can slow things down. Use useEffect for most things, like getting data. Use useLayoutEffect when you need to measure or change the layout immediately.",
  },
  {
    id: 50,
    question: "How do you debug React applications?",
    answer:
      "To debug React apps, use React DevTools to see the component tree and state. Add console.log to see what's happening. Wrap parts in React.StrictMode to catch problems. Use error boundaries to catch crashes. In a real app, if something isn't working, you can open DevTools, look at the components, and see what props or state they have.",
  },
  {
    id: 51,
    question: "What is the React Profiler?",
    answer:
      "The React Profiler is a tool in React DevTools that measures how long components take to render and finds slow parts. It shows a flame graph of what renders when. This helps you make the app faster by finding bottlenecks. For example, if a list is slow, the profiler can show which part is taking too long, so you can fix it.",
  },
  {
    id: 52,
    question: "How do you handle race conditions in API calls?",
    answer:
      "Race conditions happen when multiple API calls finish in the wrong order. To handle them, use cleanup functions in useEffect to cancel old requests. Or, use libraries like SWR that automatically handle this. For example, if you search quickly, the old search might finish after the new one, showing wrong results. Cleanup prevents that.",
  },
  {
    id: 53,
    question: "What is optimistic UI updates?",
    answer:
      "Optimistic UI updates mean showing the change right away, even before the server confirms it. If the server says no, you undo the change. This makes the app feel fast. For example, when you like a post, it shows the heart filled immediately, and if the server fails, it empties it later. In a real chat app, messages appear instantly, even if sending fails.",
  },
  {
    id: 54,
    question: "How do you implement drag and drop in React?",
    answer:
      "To implement drag and drop in React, you can use the HTML5 drag and drop API with React event handlers like onDragStart and onDrop. Or, use libraries like react-dnd that make it easier. This lets users move things around on the screen. For example, in a task list app, you can drag tasks to reorder them.",
  },
  {
    id: 55,
    question: "What is the useDebugValue hook?",
    answer:
      "useDebugValue is a hook used in custom hooks to show a label in React DevTools. It helps debug what the hook is doing. For example, in a custom hook that fetches data, useDebugValue can show 'loading' or 'loaded' in DevTools. It's only for development and doesn't affect the app.",
  },
  {
    id: 56,
    question: "How do you create a custom hook for API calls?",
    answer:
      "To create a custom hook for API calls, make a function that starts with 'use' and uses useState for data and loading, and useEffect to fetch. It returns the data and status. This way, you can reuse the fetching logic. For example, a useFetch hook can take a URL and return the data, so any component can use it to get info from the server.",
  },
  {
    id: 57,
    question: "What is the useReducer hook and when to use it?",
    answer:
      "useReducer is a hook for managing complex state using a reducer function, like in Redux. It's good when the state has many parts or depends on the old state. You use it for things like forms or games where actions change the state in specific ways. For example, in a counter app with add, subtract, and reset, useReducer handles all the actions neatly.",
  },
  {
    id: 58,
    question: "How do you dispatch actions in useReducer?",
    answer:
      "To dispatch actions in useReducer, you call the dispatch function with an object that has a type and maybe a payload. The reducer function sees the type and updates the state. For example, dispatch({ type: 'add', payload: 5 }) tells the reducer to add 5 to the number. This is how you trigger state changes.",
  },
  {
    id: 59,
    question: "What is the difference between useState and useReducer for state management?",
    answer:
      "useState is for simple state like a number or string. useReducer is for complex state with many parts or when the new state depends on the old one. useState is easier for basic things, useReducer is better for logic-heavy state. For example, use useState for a toggle, useReducer for a shopping cart with add, remove, and update.",
  },
  {
    id: 60,
    question: "How do you handle async operations with useReducer?",
    answer:
      "To handle async operations with useReducer, dispatch actions for starting, succeeding, or failing. You can do the async work in the component and dispatch based on the result. Or, use action creators that handle the async part. For example, dispatch 'loading', then after the API call, dispatch 'success' with data or 'error' with the problem.",
  },
  {
    id: 61,
    question: "What is useCallback and how does it prevent re-renders?",
    answer:
      "useCallback is a hook that remembers a function so it doesn't get created new every time the component updates. It only makes a new function if the things it depends on change. This stops child components from re-drawing when they don't need to, because the function prop stays the same. For example, if you have a button that calls a function, useCallback keeps that function the same unless something it uses changes, so the button doesn't re-render extra times.",
  },
  {
    id: 62,
    question: "When should you use useCallback over useMemo?",
    answer:
      "Use useCallback when you need to remember a function, and useMemo when you need to remember the result of a calculation. useCallback is for functions that you pass to other components, to stop them from re-rendering. useMemo is for expensive math or data changes that you want to avoid doing again. For example, use useCallback for an onClick handler, useMemo for sorting a list.",
  },
  {
    id: 63,
    question: "How do you optimize useCallback dependencies?",
    answer:
      "To optimize useCallback, list all the variables or state that the function uses in the dependency array. But don't add extra things that don't change the function's behavior, because that would make it re-create the function too often. For example, if your function uses 'count' and 'name', put [count, name] in the dependencies. This way, the function only changes when those values change.",
  },
  {
    id: 64,
    question: "What is useMemo and how does it improve performance?",
    answer:
      "useMemo is a hook that saves the result of a slow calculation and only re-does it when the inputs change. This makes your app faster by not wasting time on work that's already done. For example, if you have a big list that needs sorting every time, useMemo can remember the sorted list and only sort again when the list changes. This helps when the calculation is heavy and happens often.",
  },
  {
    id: 65,
    question: "How do you decide what to memoize with useMemo?",
    answer:
      "Decide to use useMemo for things that take a lot of computer power, like big math problems, changing arrays in complex ways, or making new objects. Only use it if the work happens every time the component shows, and it's slow. Don't use it for simple things like adding two numbers. For example, useMemo for filtering a long list of items, but not for just showing a name.",
  },
  {
    id: 66,
    question: "What is lazy loading and how do you implement it in React?",
    answer:
      "Lazy loading means waiting to load parts of your app until the user needs them, to make the app start faster. In React, you use React.lazy() to import a component only when it's used, and wrap it in Suspense to show a loading message. For example, if you have a big chart component, lazy load it so it only loads when the user clicks to see the chart. This splits the code into smaller pieces.",
  },
  {
    id: 67,
    question: "How do you handle loading states with React.lazy?",
    answer:
      "To handle loading with React.lazy, put the lazy component inside a Suspense component and give it a fallback, like a spinner or 'Loading...' text. This shows something while the component is being loaded. For example, <Suspense fallback={<div>Loading...</div>}><LazyComponent /></Suspense>. This way, users see feedback instead of a blank screen.",
  },
  {
    id: 68,
    question: "What is code splitting and why is it important?",
    answer:
      "Code splitting breaks your app's code into smaller groups that load when needed, instead of loading everything at once. This makes the app start faster because users download less code first. It's important for big apps where loading all code would be slow. For example, split the code so the login page loads first, and the dashboard loads later when the user logs in.",
  },
  {
    id: 69,
    question: "How do you implement route-based code splitting?",
    answer:
      "To implement route-based code splitting, use React.lazy to load route components only when the user goes to that route. For example, const Home = lazy(() => import('./Home')); then use it in your routes. This way, each page's code loads separately, making the initial load smaller. In a big app, this means the home page loads fast, and other pages load when visited.",
  },
  {
    id: 70,
    question: "What is React Router and how does it work?",
    answer:
      "React Router is a library that lets you show different components based on the web address, like having different pages. It works by watching the URL and matching it to routes you define, then showing the right component. For example, if the URL is /about, it shows the About component. It uses BrowserRouter to wrap your app and Route components to define what shows where.",
  },
  {
    id: 71,
    question: "How do you set up routing in a React app?",
    answer:
      "To set up routing, wrap your main App component with BrowserRouter. Then, use Routes and Route to define paths and components. For navigation, use Link or NavLink. For example, <BrowserRouter><Routes><Route path='/home' element={<Home />} /></Routes></BrowserRouter>. This lets users click links to change pages without reloading.",
  },
  {
    id: 72,
    question: "What is the difference between BrowserRouter and HashRouter?",
    answer:
      "BrowserRouter uses the modern HTML5 history API for clean URLs like /app/page, which look normal. HashRouter uses the hash part of the URL like /app#/page, which works on older browsers but looks different. BrowserRouter is better for new apps, HashRouter for older browser support. For example, BrowserRouter makes URLs look like a normal website.",
  },
  {
    id: 73,
    question: "How do you handle dynamic routes in React Router?",
    answer:
      "Dynamic routes use :param in the path to match changing parts, like /user/:id for different users. Use the useParams hook to get the value. For example, <Route path='/user/:userId' element={<User />} />, then in User component, const { userId } = useParams(); to get the id. This lets one component show different data based on the URL.",
  },
  {
    id: 74,
    question: "What is useParams and how do you use it?",
    answer:
      "useParams is a hook that gives you an object with the dynamic parts from the URL. You call it in a component that matches a route with parameters. For example, if the route is /product/:id, useParams() returns { id: '123' }. You use it to get data for that specific item. In a product page, it gets the product id to fetch the right info.",
  },
  {
    id: 75,
    question: "How do you navigate programmatically in React Router?",
    answer:
      "Programmatic navigation means changing the page with code, not a click. Use the useNavigate hook to do this. For example, const navigate = useNavigate(); navigate('/dashboard'); after login. It's useful for redirects, like after submitting a form. This lets you control navigation based on app logic.",
  },
  {
    id: 76,
    question: "What is the difference between Link and NavLink?",
    answer:
      "Link is basic navigation that changes the URL when clicked. NavLink is like Link but can style itself to show if it's the current page, like making it bold. For example, <NavLink to='/home' className={({isActive}) => isActive ? 'active' : ''}>Home</NavLink>. This helps users know which page they're on.",
  },
  {
    id: 77,
    question: "How do you implement nested routes?",
    answer:
      "Nested routes let you have routes inside routes, like /dashboard/settings. Use the Outlet component in the parent to show child routes. For example, in Dashboard, have <Routes><Route path='settings' element={<Settings />} /></Routes> and <Outlet /> to render it. This creates a hierarchy of pages.",
  },
  {
    id: 78,
    question: "What is route protection in React Router?",
    answer:
      "Route protection means checking if the user can access a page, and redirecting if not. Make a component that wraps protected routes and checks login status. For example, if not logged in, redirect to /login. This keeps private pages safe. In a real app, protect the profile page so only logged-in users can see it.",
  },
  {
    id: 79,
    question: "How do you handle 404 pages in React Router?",
    answer:
      "To handle 404 pages, add a route with path='*' at the end that catches any unmatched URLs and shows a 'Not Found' component. For example, <Route path='*' element={<NotFound />} />. This way, if someone types a wrong URL, they see a nice error page instead of a blank screen.",
  },
  {
    id: 80,
    question: "What is the Context API and when should you use it?",
    answer:
      "The Context API lets you share data across many components without passing props down each level. Use it for things that many parts of the app need, like the theme color or user login info. For example, a theme context can let all buttons know if to use dark or light colors. It's good when prop drilling gets messy.",
  },
  {
    id: 81,
    question: "How do you create and provide context?",
    answer:
      "To create context, use React.createContext() to make a new context object. Then, wrap the parts of your app that need the data with a Provider component from that context, and give it a value prop with the data. For example, const ThemeContext = React.createContext(); then <ThemeContext.Provider value={{ theme: 'dark' }}><App /></ThemeContext.Provider>. This lets any component inside get the theme data.",
  },
  {
    id: 82,
    question: "How do you consume context in functional components?",
    answer:
      "In functional components, use the useContext hook to get the context value. Pass the context object to useContext. For example, const theme = useContext(ThemeContext); then you can use theme to style your component. This is the modern way to get context data without extra components.",
  },
  {
    id: 83,
    question: "What are context consumers in class components?",
    answer:
      "In class components, use Context.Consumer to get the context value. It's a component that uses render props. For example, <ThemeContext.Consumer>{(value) => <div style={{ background: value.theme }}>Content</div>}</ThemeContext.Consumer>. The function inside gets the context value and returns JSX. This is how class components access context.",
  },
  {
    id: 84,
    question: "How do you optimize context performance?",
    answer:
      "To make context faster, split into smaller contexts for different things, like one for theme and one for user. Use React.memo on components that use context to stop extra re-renders. Also, use useMemo for the context value so it doesn't change every time. For example, don't put a new object in value every render; memoize it.",
  },
  {
    id: 85,
    question: "What is the useContext hook?",
    answer:
      "useContext is a hook that lets functional components get and react to context changes. You pass it the context object, and it returns the current value. When the context value changes, the component re-renders. For example, const user = useContext(UserContext); now user has the current user data and updates when it changes.",
  },
  {
    id: 86,
    question: "Can you have multiple contexts in an app?",
    answer:
      "Yes, you can have many contexts in one app. Each context handles different data, like one for theme colors, one for user login info, and one for app settings. This keeps things organized and prevents one big context. For example, ThemeContext for dark/light mode, UserContext for login status, and SettingsContext for preferences.",
  },
  {
    id: 87,
    question: "How do you handle context and re-renders?",
    answer:
      "To avoid extra re-renders with context, use useMemo to keep the context value stable. Wrap components that use context with React.memo so they only re-render when their props change. For example, if the context value is an object, memoize it with useMemo(() => ({ theme }), [theme]) so it doesn't create a new object each time.",
  },
  {
    id: 88,
    question: "What is React Suspense?",
    answer:
      "React Suspense is a feature that lets components pause and wait for something to finish before they show. It's used with lazy loading to show a loading screen while code loads. In the future, it will also work with data fetching. For example, wrap a lazy component in Suspense to show 'Loading...' until it's ready.",
  },
  {
    id: 89,
    question: "How do you use Suspense with lazy loading?",
    answer:
      "To use Suspense with lazy loading, wrap the lazy component in Suspense and give it a fallback for loading. For example, const LazyComp = lazy(() => import('./Comp')); then <Suspense fallback={<div>Loading...</div>}><LazyComp /></Suspense>. This shows the fallback while the component loads, then switches to the component.",
  },
  {
    id: 90,
    question: "What are compound components?",
    answer:
      "Compound components are a way to build components that work as a group, sharing state without you passing props. They use context to share data between related parts. For example, a Tabs component with Tab and TabPanel sub-components that know which tab is active. This makes the API cleaner for users.",
  },
  {
    id: 91,
    question: "How do you implement compound components?",
    answer:
      "To implement compound components, use context to share state between the components. The parent component provides the context, and child components consume it. For example, Tabs provides a context with the active tab, and Tab and TabPanel use it to know what to show. This lets users compose the components flexibly.",
  },
  {
    id: 92,
    question: "What is the render props pattern?",
    answer:
      "The render props pattern is when you pass a function as a prop to a component, and that function returns the JSX to render. The component calls the function with some data. For example, a Mouse component might pass mouse position to a render prop, so you can render different things based on the mouse. It's a way to share logic but control the output.",
  },
  {
    id: 93,
    question: "When should you use render props?",
    answer:
      "Use render props when you have logic that many components need, but each component wants to render the result differently. It's good for sharing behavior like mouse tracking or data fetching, but letting each component decide how to show it. For example, a data fetching component can pass data to a render prop, so different components can display it their way.",
  },
  {
    id: 94,
    question: "How do you implement render props?",
    answer:
      "To implement render props, pass a function as a prop, often called 'render' or 'children'. The component calls this function with data. For example, <DataFetcher render={(data) => <div>{data.name}</div>} />. Inside DataFetcher, it calls props.render(data) to render the JSX. This lets the parent control how the data is shown.",
  },
  {
    id: 95,
    question: "What is the difference between render props and HOCs?",
    answer:
      "Render props give more control over how things render because you pass a function that returns JSX. HOCs (Higher-Order Components) wrap components and add logic, but the rendering is fixed. Render props are better when you need different outputs, HOCs for adding features like logging. For example, render props for custom lists, HOCs for adding error boundaries.",
  },
  {
    id: 96,
    question: "How do you test custom hooks?",
    answer:
      "To test custom hooks, use the React Hooks Testing Library's renderHook function to test the hook directly. Or, test it inside a component test by rendering a test component that uses the hook. For example, const { result } = renderHook(() => useCounter()); then check result.current. This lets you verify the hook's behavior without a full component.",
  },
  {
    id: 97,
    question: "What is React Testing Library?",
    answer:
      "React Testing Library is a tool for testing React components that focuses on how users interact with them, not the code details. It encourages testing what users see and do, like clicking buttons or reading text. For example, instead of checking if a function was called, it checks if the right text appears on screen after a click.",
  },
  {
    id: 98,
    question: "How do you test asynchronous operations in React?",
    answer:
      "To test async operations, use async/await and the waitFor utility from React Testing Library. waitFor waits until something happens, like data loading. For example, after clicking a button that fetches data, use await waitFor(() => expect(screen.getByText('Data loaded')).toBeInTheDocument()); to wait for the text to appear.",
  },
  {
    id: 99,
    question: "What is the act() utility in testing?",
    answer:
      "The act() utility in testing makes sure all React updates from a test action are done before you check the results. It's like waiting for React to finish updating the screen after you do something. For example, wrap a button click in act(() => fireEvent.click(button)); then check the new state. This prevents tests from failing because they checked too soon.",
  },
  {
    id: 100,
    question: "How do you mock API calls in React tests?",
    answer:
      "To mock API calls in tests, use Jest to mock the fetch function or axios. Or, use MSW (Mock Service Worker) to pretend to be a real server. For example, jest.mock('axios'); then mock the get method to return fake data. This lets you test components without real network calls, making tests faster and reliable.",
  },
  {
    id: 101,
    question: "What is the useLayoutEffect hook?",
    answer:
      "useLayoutEffect is a special hook in React that works like useEffect, but it runs right after React changes the DOM (the structure of the webpage) and before the browser shows those changes on the screen. It's useful when you need to measure or change things on the page that depend on the layout, like getting the height of an element or moving something around. Since it runs before the screen updates, it can prevent flickering or jumping. For example, if you have a tooltip that needs to position itself based on where another element is, useLayoutEffect can measure the position and set the tooltip's place before anything shows. In a real app, you might use it to adjust a dropdown menu so it fits inside the screen without going off the edge. Remember, it can slow down your app if overused, so only use it when you really need synchronous updates.",
  },
  {
    id: 102,
    question: "When should you use useLayoutEffect instead of useEffect?",
    answer:
      "You should use useLayoutEffect instead of useEffect when you need to read something from the webpage's layout, like the size or position of an element, and then update the component right away before the browser draws the screen. This prevents the screen from showing wrong things briefly. For example, if you're building a chart that needs to fit exactly in a box, useLayoutEffect can measure the box size and adjust the chart before it appears. In a real app, like a responsive grid, you might use it to rearrange items based on the window size without the user seeing a flash of the old layout. Use useEffect for most other things, like getting data or setting timers, because useLayoutEffect can make your app feel slower if not needed.",
  },
  {
    id: 103,
    question: "What is the useImperativeHandle hook?",
    answer:
      "useImperativeHandle is a hook that lets you control what methods or properties a parent component can access when it uses a ref on your component. It's used with forwardRef to expose specific functions, like play or pause, instead of the whole component. For example, if you have a video player component, you can use useImperativeHandle to let the parent call play() or pause() on it. In a real app, like a music player, the parent component can have buttons that control the player without knowing the details inside. This keeps the component's API clean and focused.",
  },
  {
    id: 104,
    question: "How do you use forwardRef?",
    answer:
      "To use forwardRef, you wrap your component function with React.forwardRef, and it takes two parameters: props and ref. Inside the component, you can pass the ref to a child element or use it with useImperativeHandle. For example, const MyInput = React.forwardRef((props, ref) => <input ref={ref} {...props} />); then in the parent, <MyInput ref={inputRef} />. This lets the parent get direct access to the input element. In a real app, like a form library, this helps focus inputs or get their values from outside the component.",
  },
  {
    id: 105,
    question: "What is the useDeferredValue hook?",
    answer:
      "useDeferredValue is a hook that lets you delay updating parts of the screen that aren't super important, so that more urgent updates can happen first. It gives you a deferred version of a value that updates later. For example, if you have a search box and a list of results, the search box updates right away, but the list can wait a bit. In a real app, like a big table with filters, useDeferredValue can make the filter input feel fast while the table updates in the background. This makes the app feel more responsive.",
  },
  {
    id: 106,
    question: "What is the useTransition hook?",
    answer:
      "useTransition is a hook that lets you mark some state updates as not very important, so React can do them without stopping more urgent things. It gives you a function to start the non-urgent update and a flag to show if it's still working. For example, when switching between tabs in a big app, you can use startTransition to load the new tab's data without freezing the current one. In a real app, like an email client, it can switch folders smoothly without blocking typing in a search box.",
  },
  {
    id: 107,
    question: "How do you implement optimistic updates?",
    answer:
      "Optimistic updates mean showing the change on the screen right away, as if the server already agreed, and then fixing it if the server says no. To implement, update the local state first, send the request, and if it fails, put the state back. For example, when liking a post, show the heart filled immediately, and if the server fails, empty it later. In a real app, like a todo list, check off a task right away, and uncheck if saving fails. This makes the app feel fast and responsive.",
  },
  {
    id: 108,
    question: "What is the useId hook?",
    answer:
      "useId is a hook that creates unique IDs that stay the same even if the component is rendered on the server first and then on the client. This is important for things like connecting form labels to inputs or accessibility attributes. For example, const id = useId(); then <label htmlFor={id}>Name</label><input id={id} />. In a real app, like a form with many fields, it ensures screen readers can match labels to inputs correctly, even with server-side rendering.",
  },
  {
    id: 109,
    question: "How do you handle form validation in React?",
    answer:
      "To handle form validation in React, you can use controlled components where you manage the input values and check them as the user types or submits. You can write your own rules, like checking if an email looks right or if a field is empty. For complex forms, use libraries like Formik or React Hook Form, which handle validation, errors, and submission easily. For example, in a signup form, check if the password is strong enough and show error messages. In a real app, like an order form, validate the address and payment info before submitting.",
  },
  {
    id: 110,
    question: "What is React Hook Form?",
    answer:
      "React Hook Form is a popular library for handling forms in React that manages the form data and validation without causing extra re-renders of your components. It uses hooks to register inputs and handle errors, making forms faster and easier to build. It's good for forms with many fields or complex validation rules. For example, it can validate a whole form and show errors only for the fields that are wrong. In a real app, like a survey, it can handle many questions and submit all at once efficiently.",
  },
  {
    id: 111,
    question: "How do you handle file uploads in React?",
    answer:
      "To handle file uploads in React, use a controlled input with type 'file' to get the file from the user. Then, use FormData to package the file with other data for sending to the server. You can show upload progress using XMLHttpRequest or fetch with progress events. For example, when a user picks a photo, create FormData, add the file, and send it. In a real app, like a profile picture uploader, show a progress bar while the file uploads to the server.",
  },
  {
    id: 112,
    question: "What is infinite scrolling and how do you implement it?",
    answer:
      "Infinite scrolling is a way to load more content automatically as the user scrolls down the page, instead of clicking 'next page'. To implement, use the Intersection Observer API to watch when the user gets near the bottom, then load more data. Or, listen to scroll events and check if they're close to the bottom. For example, in a social media feed, load more posts when the user scrolls near the end. In a real app, like a news site, it keeps adding articles so the user can keep reading without stopping.",
  },
  {
    id: 113,
    question: "How do you implement virtual scrolling?",
    answer:
      "Virtual scrolling means only showing the items that are visible on the screen, even if there are thousands of items, to make it fast. Calculate which items should be shown based on the scroll position, and add or remove them from the DOM as needed. For example, in a long list of contacts, only render the 10 visible ones, and swap them as you scroll. In a real app, like a spreadsheet, it can handle millions of rows without slowing down.",
  },
  {
    id: 114,
    question: "What is the useDebugValue hook used for?",
    answer:
      "useDebugValue is a hook used in custom hooks to show a custom label or value in React DevTools, helping you debug what the hook is doing. It only works in development mode. For example, in a custom hook that fetches data, useDebugValue can show 'loading' or the number of items loaded. In a real app, it makes debugging easier by giving more info in the DevTools without affecting the app.",
  },
  {
    id: 115,
    question: "How do you handle authentication in React apps?",
    answer:
      "To handle authentication in React, use the Context API to keep track of if the user is logged in across the app. Make protected routes that check login status and redirect if not. Use JWT tokens for API calls, and add interceptors to include the token in requests. For example, store the token in localStorage and add it to headers. In a real app, like a bank, this ensures only logged-in users see their accounts and sends their token with every request.",
  },
  {
    id: 116,
    question: "What is the useContext hook?",
    answer:
      "useContext is a hook that lets functional components get data from a context without using the Consumer component. You pass it the context object, and it returns the current value. When the context changes, the component updates. For example, const theme = useContext(ThemeContext); gives you the current theme. In a real app, like a settings page, it lets all components know the user's preferences instantly.",
  },
  {
    id: 117,
    question: "How do you handle global state without Redux?",
    answer:
      "To handle global state without Redux, you can use the Context API combined with useReducer for more complex data, or use smaller libraries like Zustand, Jotai, or Recoil that make it easy to share state across components. For example, create a context for the shopping cart and use it in the header and checkout. In a real app, like a music player, keep the current song and playlist in global state so all parts update together.",
  },
  {
    id: 118,
    question: "What is the difference between useEffect and useLayoutEffect?",
    answer:
      "useEffect runs after the component renders, and it's asynchronous, meaning it doesn't block the screen from updating. useLayoutEffect runs right after React changes the DOM but before the browser paints the screen, and it's synchronous, so it can slow things down. Use useEffect for most side effects like data fetching, useLayoutEffect for layout measurements that need to happen before the screen updates. For example, use useEffect to load user data, useLayoutEffect to position a tooltip based on element size.",
  },
  {
    id: 119,
    question: "How do you debug React applications effectively?",
    answer:
      "To debug React apps effectively, use React DevTools to see the component tree and state. Add console.log to see what's happening. Wrap parts in React.StrictMode to catch problems. Use error boundaries to catch crashes. Profile performance with the Profiler. For example, if a component isn't updating, check its props in DevTools. In a real app, like a buggy form, use console.log to see what values are being set.",
  },
  {
    id: 120,
    question: "What is the React Profiler?",
    answer:
      "The React Profiler is a tool in React DevTools that measures how long components take to render and finds slow parts. It shows a flame graph of what renders when, helping you make the app faster. For example, if a list is slow, the profiler shows which part is taking too long, so you can fix it. In a real app, like a dashboard, use it to see why loading takes time and optimize the slow components.",
  },
  {
    id: 121,
    question: "How do you handle race conditions in API calls?",
    answer:
      "Race conditions occur when multiple asynchronous API calls complete in an unexpected order, potentially causing the UI to display outdated or incorrect data. To handle this, you can use cleanup functions in useEffect to ignore responses from outdated requests, implement request cancellation with AbortController, or use libraries like SWR or React Query that automatically manage race conditions. For example, in a search input, if a user types quickly, multiple API calls might be in flight; using cleanup ensures only the latest response updates the state. In a real-world app, like an autocomplete search for products, this prevents showing results for an old query after the user has typed a new one. Always check if the component is still mounted before updating state to avoid memory leaks.",
  },

  {
    id: 122,
    question: "What is optimistic UI updates?",
    answer:
      "Optimistic UI updates involve showing changes to the user interface immediately upon user interaction, assuming the operation will succeed on the server, and then reverting the change if the server responds with an error. This technique makes the app feel more responsive. For example, when a user likes a post, the heart icon fills instantly, and if the server fails, it empties later with an error message. In a real-world app, like a collaborative document editor, optimistic updates allow users to see their edits right away, even before they're saved, improving the perceived speed and user experience.",
  },

  {
    id: 122,
    question: "What is optimistic UI updates?",
    answer:
      "Optimistic UI shows changes immediately, then reverts if server operation fails.",
  },

  {
    id: 122,
    question: "What is optimistic UI updates?",
    answer:
      "Optimistic UI shows changes immediately, then reverts if server operation fails.",
  },

  {
    id: 122,
    question: "What is optimistic UI updates?",
    answer:
      "Optimistic UI updates involve showing changes to the user interface immediately upon user interaction, assuming the operation will succeed on the server, and then reverting the change if the server responds with an error. This technique makes the app feel more responsive. For example, when a user likes a post, the heart icon fills instantly, and if the server fails, it empties later with an error message. In a real-world app, like a collaborative document editor, optimistic updates allow users to see their edits right away, even before they're saved, improving the perceived speed and user experience.",
  },

  {
    id: 123,
    question: "How do you implement drag and drop in React?",
    answer:
      "Use HTML5 drag and drop API with React event handlers, or libraries like react-dnd.",
  },

  {
    id: 123,
    question: "How do you implement drag and drop in React?",
    answer:
      "Use HTML5 drag and drop API with React event handlers, or libraries like react-dnd.",
  },

  {
    id: 124,
    question: "What is the useInsertionEffect hook?",
    answer:
      "useInsertionEffect runs before DOM mutations, used by CSS-in-JS libraries for style injection.",
  },

  {
    id: 124,
    question: "What is the useInsertionEffect hook?",
    answer:
      "useInsertionEffect runs before DOM mutations, used by CSS-in-JS libraries for style injection.",
  },

  {
    id: 125,
    question: "How do you handle server state in React?",
    answer:
      "Use libraries like React Query, SWR, or Apollo Client for caching, synchronization, and background updates.",
  },

  {
    id: 125,
    question: "How do you handle server state in React?",
    answer:
      "Use libraries like React Query, SWR, or Apollo Client for caching, synchronization, and background updates.",
  },

  {
    id: 126,
    question: "What is React Query?",
    answer:
      "React Query is a data synchronization library for React that handles server state management.",
  },

  {
    id: 126,
    question: "What is React Query?",
    answer:
      "React Query is a data synchronization library for React that handles server state management.",
  },

  {
    id: 127,
    question: "How does React Query differ from Redux?",
    answer:
      "React Query manages server state with automatic caching and synchronization, Redux manages client state.",
  },

  {
    id: 127,
    question: "How does React Query differ from Redux?",
    answer:
      "React Query manages server state with automatic caching and synchronization, Redux manages client state.",
  },

  {
    id: 128,
    question: "What is SWR (stale-while-revalidate)?",
    answer:
      "SWR is a React data fetching library that implements stale-while-revalidate caching strategy.",
  },

  {
    id: 128,
    question: "What is SWR (stale-while-revalidate)?",
    answer:
      "SWR is a React data fetching library that implements stale-while-revalidate caching strategy.",
  },

  {
    id: 129,
    question: "How do you implement real-time features in React?",
    answer:
      "Use WebSockets, Server-Sent Events, or libraries like Socket.io for real-time communication.",
  },

  {
    id: 129,
    question: "How do you implement real-time features in React?",
    answer:
      "Use WebSockets, Server-Sent Events, or libraries like Socket.io for real-time communication.",
  },

  {
    id: 130,
    question: "What is Concurrent Mode in React?",
    answer:
      "Concurrent Mode allows React to interrupt rendering for high-priority updates.",
  },

  {
    id: 130,
    question: "What is Concurrent Mode in React?",
    answer:
      "Concurrent Mode allows React to interrupt rendering for high-priority updates.",
  },

  {
    id: 131,
    question: "What are the benefits of Concurrent Mode?",
    answer:
      "Better user experience with responsive UIs, ability to interrupt non-urgent updates.",
  },

  {
    id: 131,
    question: "What are the benefits of Concurrent Mode?",
    answer:
      "Concurrent Mode provides better user experience by enabling responsive UIs, allowing React to interrupt non-urgent updates for high-priority tasks like user input. It supports features like Suspense for data fetching and improves perceived performance. For example, typing in a search box remains smooth even if the app is loading data in the background. In a real-world app, like a photo editor, it prevents freezing during image processing.",
  },

  {
    id: 132,
    question: "How do you enable Concurrent Mode?",
    answer:
      "Use ReactDOM.createRoot() instead of ReactDOM.render() to enable concurrent features.",
  },

  {
    id: 132,
    question: "How do you enable Concurrent Mode?",
    answer:
      "Use ReactDOM.createRoot() instead of ReactDOM.render() to enable concurrent features.",
  },

  {
    id: 133,
    question: "What is React 18 and its new features?",
    answer:
      "React 18 introduces Concurrent Mode, automatic batching, new Suspense features, and createRoot API.",
  },

  {
    id: 133,
    question: "What is React 18 and its new features?",
    answer:
      "React 18 introduces Concurrent Mode, automatic batching, new Suspense features, and createRoot API.",
  },

  {
    id: 134,
    question: "What is automatic batching in React 18?",
    answer:
      "Automatic batching groups multiple state updates into single re-render, even in promises and event handlers.",
  },

  {
    id: 134,
    question: "What is automatic batching in React 18?",
    answer:
      "Automatic batching groups multiple state updates into single re-render, even in promises and event handlers.",
  },

  {
    id: 135,
    question: "How do you migrate to React 18?",
    answer:
      "Replace ReactDOM.render with ReactDOM.createRoot, gradually adopt new features.",
  },

  {
    id: 135,
    question: "How do you migrate to React 18?",
    answer:
      "Replace ReactDOM.render with ReactDOM.createRoot, gradually adopt new features.",
  },

  {
    id: 136,
    question: "What are React Server Components?",
    answer:
      "Server Components run on server, reducing bundle size and enabling direct database access.",
  },

  {
    id: 136,
    question: "What are React Server Components?",
    answer:
      "Server Components run on server, reducing bundle size and enabling direct database access.",
  },

  {
    id: 137,
    question: "How do Server Components differ from SSR?",
    answer:
      "Server Components run on server and don't hydrate, while SSR hydrates on client.",
  },

  {
    id: 137,
    question: "How do Server Components differ from SSR?",
    answer:
      "Server Components run on server and don't hydrate, while SSR hydrates on client.",
  },

  {
    id: 138,
    question: "What is the future of React?",
    answer:
      "React is moving towards concurrent features, better performance, and improved developer experience.",
  },

  {
    id: 138,
    question: "What is the future of React?",
    answer:
      "React is moving towards concurrent features, better performance, and improved developer experience.",
  },

  {
    id: 139,
    question: "How do you handle accessibility in React?",
    answer:
      "Use semantic HTML, ARIA attributes, keyboard navigation, and screen reader support.",
  },

  {
    id: 139,
    question: "How do you handle accessibility in React?",
    answer:
      "Use semantic HTML, ARIA attributes, keyboard navigation, and screen reader support.",
  },

  {
    id: 140,
    question: "What are ARIA attributes?",
    answer:
      "ARIA attributes provide additional information to assistive technologies about UI elements.",
  },

  {
    id: 140,
    question: "What are ARIA attributes?",
    answer:
      "ARIA attributes provide additional information to assistive technologies about UI elements.",
  },

  {
    id: 141,
    question: "How do you make React components keyboard accessible?",
    answer:
      "Handle keyboard events, manage focus, provide skip links, and ensure logical tab order.",
  },

  {
    id: 141,
    question: "How do you make React components keyboard accessible?",
    answer:
      "Handle keyboard events, manage focus, provide skip links, and ensure logical tab order.",
  },

  {
    id: 142,
    question: "What is the use of role attribute in React?",
    answer:
      "Role attribute defines the type of UI element for assistive technologies.",
  },

  {
    id: 142,
    question: "What is the use of role attribute in React?",
    answer:
      "Role attribute defines the type of UI element for assistive technologies.",
  },

  {
    id: 143,
    question: "How do you handle focus management in React?",
    answer:
      "Use refs for programmatic focus, manage tab order, and implement focus trapping in modals.",
  },

  {
    id: 143,
    question: "How do you handle focus management in React?",
    answer:
      "Use refs for programmatic focus, manage tab order, and implement focus trapping in modals.",
  },

  {
    id: 144,
    question: "What is the importance of semantic HTML in React?",
    answer:
      "Semantic HTML provides meaning and improves accessibility and SEO.",
  },

  {
    id: 144,
    question: "What is the importance of semantic HTML in React?",
    answer:
      "Semantic HTML provides meaning and improves accessibility and SEO.",
  },

  {
    id: 145,
    question: "How do you test accessibility in React?",
    answer:
      "Use axe-core, jest-axe, or React Testing Library's accessibility matchers.",
  },

  {
    id: 145,
    question: "How do you test accessibility in React?",
    answer:
      "Use axe-core, jest-axe, or React Testing Library's accessibility matchers.",
  },

  {
    id: 146,
    question: "What is the useRef hook?",
    answer:
      "useRef creates mutable ref object that persists across re-renders, used for DOM access or storing mutable values.",
  },

  {
    id: 146,
    question: "What is the useRef hook?",
    answer:
      "useRef creates mutable ref object that persists across re-renders, used for DOM access or storing mutable values.",
  },

  {
    id: 147,
    question: "How do you access DOM elements with useRef?",
    answer:
      "Create ref with useRef, attach to element with ref prop, access via ref.current.",
  },

  {
    id: 147,
    question: "How do you access DOM elements with useRef?",
    answer:
      "Create ref with useRef, attach to element with ref prop, access via ref.current.",
  },

  {
    id: 148,
    question: "What is the difference between useRef and useState?",
    answer:
      "useRef doesn't trigger re-renders when changed, useState does.",
  },

  {
    id: 148,
    question: "What is the difference between useRef and useState?",
    answer:
      "useRef doesn't trigger re-renders when changed, useState does.",
  },

  {
    id: 149,
    question: "How do you create mutable variables with useRef?",
    answer:
      "Use useRef to store values that persist across renders without causing re-renders.",
  },

  {
    id: 149,
    question: "How do you create mutable variables with useRef?",
    answer:
      "Use useRef to store values that persist across renders without causing re-renders.",
  },

  {
    id: 150,
    question: "What is forwardRef and when to use it?",
    answer:
      "forwardRef passes ref from parent to child component, useful for exposing child DOM nodes.",
  },

  {
    id: 150,
    question: "What is forwardRef and when to use it?",
    answer:
      "forwardRef passes ref from parent to child component, useful for exposing child DOM nodes.",
  },

  {
    id: 151,
    question: "How would you debug a component that doesn't update when context changes?",
    answer:
      "Check if the component is wrapped in the Provider, verify useContext is used correctly, and ensure context value is actually changing.",
  },

  {
    id: 151,
    question: "How would you debug a component that doesn't update when context changes?",
    answer:
      "Check if the component is wrapped in the Provider, verify useContext is used correctly, and ensure context value is actually changing.",
  },

  {
    id: 152,
    question: "What if your useReducer causes infinite loops?",
    answer:
      "Ensure reducer is pure, avoid mutating state, and check for circular dependencies in state updates.",
  },

  {
    id: 152,
    question: "What if your useReducer causes infinite loops?",
    answer:
      "Ensure reducer is pure, avoid mutating state, and check for circular dependencies in state updates.",
  },

  {
    id: 153,
    question: "How do you handle memory leaks in useEffect?",
    answer:
      "Always return cleanup functions to cancel subscriptions, timers, and remove event listeners.",
  },

  {
    id: 153,
    question: "How do you handle memory leaks in useEffect?",
    answer:
      "Always return cleanup functions to cancel subscriptions, timers, and remove event listeners.",
  },

  {
    id: 154,
    question: "What to do if lazy-loaded components don't render?",
    answer:
      "Ensure Suspense wrapper is present, check for import errors, and verify the component export is correct.",
  },

  {
    id: 154,
    question: "What to do if lazy-loaded components don't render?",
    answer:
      "Ensure Suspense wrapper is present, check for import errors, and verify the component export is correct.",
  },

  {
    id: 155,
    question: "How would you debug routing issues in React Router?",
    answer:
      "Check route order, ensure paths match, verify Link components are used correctly, and check for nested route issues.",
  },

  {
    id: 155,
    question: "How would you debug routing issues in React Router?",
    answer:
      "Check route order, ensure paths match, verify Link components are used correctly, and check for nested route issues.",
  },

  {
    id: 156,
    question: "What if your custom hook causes re-render loops?",
    answer:
      "Ensure dependencies in useEffect are stable, avoid creating new objects/functions in render, and use useCallback/useMemo appropriately.",
  },

  {
    id: 156,
    question: "What if your custom hook causes re-render loops?",
    answer:
      "Ensure dependencies in useEffect are stable, avoid creating new objects/functions in render, and use useCallback/useMemo appropriately.",
  },

  {
    id: 157,
    question: "How do you handle stale closures in React hooks?",
    answer:
      "Use functional updates with setState, include all dependencies in useEffect, or restructure to avoid stale values.",
  },

  {
    id: 157,
    question: "How do you handle stale closures in React hooks?",
    answer:
      "Use functional updates with setState, include all dependencies in useEffect, or restructure to avoid stale values.",
  },

  {
    id: 158,
    question: "What to do if useMemo isn't improving performance?",
    answer:
      "Verify dependencies are correct, ensure the computation is actually expensive, and check if memoization overhead outweighs benefits.",
  },

  {
    id: 158,
    question: "What to do if useMemo isn't improving performance?",
    answer:
      "Verify dependencies are correct, ensure the computation is actually expensive, and check if memoization overhead outweighs benefits.",
  },

  {
    id: 159,
    question: "How would you debug a component that renders too often?",
    answer:
      "Use React.memo, check prop changes with console.log, use useCallback for functions, and profile with React DevTools.",
  },

  {
    id: 159,
    question: "How would you debug a component that renders too often?",
    answer:
      "Use React.memo, check prop changes with console.log, use useCallback for functions, and profile with React DevTools.",
  },

  {
    id: 160,
    question: "What if your context consumers re-render unnecessarily?",
    answer:
      "Split contexts by domain, use useMemo for context values, and wrap consumers with React.memo.",
  },

  {
    id: 160,
    question: "What if your context consumers re-render unnecessarily?",
    answer:
      "Split contexts by domain, use useMemo for context values, and wrap consumers with React.memo.",
  },

  {
    id: 161,
    question: "How do you handle race conditions in async operations?",
    answer:
      "Use cleanup functions, request cancellation, or libraries like SWR that handle race conditions automatically.",
  },

  {
    id: 161,
    question: "How do you handle race conditions in async operations?",
    answer:
      "Use cleanup functions, request cancellation, or libraries like SWR that handle race conditions automatically.",
  },

  {
    id: 162,
    question: "What to do if useTransition doesn't prevent blocking?",
    answer:
      "Ensure the update is marked as non-urgent with startTransition, and check if the component supports concurrent features.",
  },

  {
    id: 162,
    question: "What to do if useTransition doesn't prevent blocking?",
    answer:
      "Ensure the update is marked as non-urgent with startTransition, and check if the component supports concurrent features.",
  },

  {
    id: 163,
    question: "How would you debug authentication flow issues?",
    answer:
      "Check token storage, verify API calls include auth headers, ensure protected routes redirect correctly, and test token expiration.",
  },

  {
    id: 163,
    question: "How would you debug authentication flow issues?",
    answer:
      "Check token storage, verify API calls include auth headers, ensure protected routes redirect correctly, and test token expiration.",
  },

  {
    id: 164,
    question: "What if your form validation isn't working with React Hook Form?",
    answer:
      "Ensure register is called on inputs, check validation rules, verify form submission handler, and use watch/errors from the hook.",
  },

  {
    id: 164,
    question: "What if your form validation isn't working with React Hook Form?",
    answer:
      "Ensure register is called on inputs, check validation rules, verify form submission handler, and use watch/errors from the hook.",
  },

  {
    id: 165,
    question: "How do you handle infinite scrolling performance issues?",
    answer:
      "Implement virtualization, use pagination, debounce scroll events, and avoid rendering too many items at once.",
  },

  {
    id: 165,
    question: "How do you handle infinite scrolling performance issues?",
    answer:
      "Implement virtualization, use pagination, debounce scroll events, and avoid rendering too many items at once.",
  },

  {
    id: 166,
    question: "What to do if useDeferredValue causes UI flickering?",
    answer:
      "Ensure the deferred value is used for non-critical UI parts, and consider if the update really needs deferring.",
  },

  {
    id: 166,
    question: "What to do if useDeferredValue causes UI flickering?",
    answer:
      "Ensure the deferred value is used for non-critical UI parts, and consider if the update really needs deferring.",
  },

  {
    id: 167,
    question: "How would you debug a component that doesn't unmount properly?",
    answer:
      "Check for missing cleanup in useEffect, verify component is actually unmounting, and ensure refs are cleared.",
  },

  {
    id: 167,
    question: "How would you debug a component that doesn't unmount properly?",
    answer:
      "Check for missing cleanup in useEffect, verify component is actually unmounting, and ensure refs are cleared.",
  },

  {
    id: 168,
    question: "What if your server state library causes excessive re-renders?",
    answer:
      "Use selectors to pick specific data, implement proper caching, and avoid unnecessary data fetching.",
  },

  {
    id: 168,
    question: "What if your server state library causes excessive re-renders?",
    answer:
      "Use selectors to pick specific data, implement proper caching, and avoid unnecessary data fetching.",
  },

  {
    id: 169,
    question: "How do you handle WebSocket connection issues in React?",
    answer:
      "Implement reconnection logic, handle connection states, use useEffect for setup/cleanup, and manage connection lifecycle.",
  },

  {
    id: 169,
    question: "How do you handle WebSocket connection issues in React?",
    answer:
      "Implement reconnection logic, handle connection states, use useEffect for setup/cleanup, and manage connection lifecycle.",
  },

  {
    id: 170,
    question: "What to do if Concurrent Mode breaks your existing code?",
    answer:
      "Check for side effects that assume synchronous execution, update to use concurrent-safe patterns, and test thoroughly.",
  },

  {
    id: 170,
    question: "What to do if Concurrent Mode breaks your existing code?",
    answer:
      "Check for side effects that assume synchronous execution, update to use concurrent-safe patterns, and test thoroughly.",
  },
  {
    id: 122,
    question: "What is optimistic UI updates?",
    answer:
      "Optimistic UI shows changes immediately, then reverts if server operation fails.",
  },
  {
    id: 123,
    question: "How do you implement drag and drop in React?",
    answer:
      "Use HTML5 drag and drop API with React event handlers, or libraries like react-dnd.",
  },
  {
    id: 124,
    question: "What is the useInsertionEffect hook?",
    answer:
      "useInsertionEffect runs before DOM mutations, used by CSS-in-JS libraries for style injection.",
  },
  {
    id: 125,
    question: "How do you handle server state in React?",
    answer:
      "Use libraries like React Query, SWR, or Apollo Client for caching, synchronization, and background updates.",
  },
  {
    id: 126,
    question: "What is React Query?",
    answer:
      "React Query is a data synchronization library for React that handles server state management.",
  },
  {
    id: 127,
    question: "How does React Query differ from Redux?",
    answer:
      "React Query manages server state with automatic caching and synchronization, Redux manages client state.",
  },
  {
    id: 128,
    question: "What is SWR (stale-while-revalidate)?",
    answer:
      "SWR is a React data fetching library that implements stale-while-revalidate caching strategy.",
  },
  {
    id: 129,
    question: "How do you implement real-time features in React?",
    answer:
      "Use WebSockets, Server-Sent Events, or libraries like Socket.io for real-time communication.",
  },
  {
    id: 130,
    question: "What is Concurrent Mode in React?",
    answer:
      "Concurrent Mode allows React to interrupt rendering for high-priority updates.",
  },
  {
    id: 131,
    question: "What are the benefits of Concurrent Mode?",
    answer:
      "Better user experience with responsive UIs, ability to interrupt non-urgent updates.",
  },
  {
    id: 132,
    question: "How do you enable Concurrent Mode?",
    answer:
      "Use ReactDOM.createRoot() instead of ReactDOM.render() to enable concurrent features.",
  },
  {
    id: 133,
    question: "What is React 18 and its new features?",
    answer:
      "React 18 introduces Concurrent Mode, automatic batching, new Suspense features, and createRoot API.",
  },
  {
    id: 134,
    question: "What is automatic batching in React 18?",
    answer:
      "Automatic batching groups multiple state updates into single re-render, even in promises and event handlers.",
  },
  {
    id: 135,
    question: "How do you migrate to React 18?",
    answer:
      "Replace ReactDOM.render with ReactDOM.createRoot, gradually adopt new features.",
  },
  {
    id: 136,
    question: "What are React Server Components?",
    answer:
      "Server Components run on server, reducing bundle size and enabling direct database access.",
  },
  {
    id: 137,
    question: "How do Server Components differ from SSR?",
    answer:
      "Server Components run on server and don't hydrate, while SSR hydrates on client.",
  },
  {
    id: 138,
    question: "What is the future of React?",
    answer:
      "React is moving towards concurrent features, better performance, and improved developer experience.",
  },
  {
    id: 139,
    question: "How do you handle accessibility in React?",
    answer:
      "Use semantic HTML, ARIA attributes, keyboard navigation, and screen reader support.",
  },
  {
    id: 140,
    question: "What are ARIA attributes?",
    answer:
      "ARIA attributes provide additional information to assistive technologies about UI elements.",
  },
  {
    id: 141,
    question: "How do you make React components keyboard accessible?",
    answer:
      "Handle keyboard events, manage focus, provide skip links, and ensure logical tab order.",
  },
  {
    id: 142,
    question: "What is the use of role attribute in React?",
    answer:
      "Role attribute defines the type of UI element for assistive technologies.",
  },
  {
    id: 143,
    question: "How do you handle focus management in React?",
    answer:
      "Use refs for programmatic focus, manage tab order, and implement focus trapping in modals.",
  },
  {
    id: 144,
    question: "What is the importance of semantic HTML in React?",
    answer:
      "Semantic HTML provides meaning and improves accessibility and SEO.",
  },
  {
    id: 145,
    question: "How do you test accessibility in React?",
    answer:
      "Use axe-core, jest-axe, or React Testing Library's accessibility matchers.",
  },
  {
    id: 146,
    question: "What is the useRef hook?",
    answer:
      "useRef creates mutable ref object that persists across re-renders, used for DOM access or storing mutable values.",
  },
  {
    id: 147,
    question: "How do you access DOM elements with useRef?",
    answer:
      "Create ref with useRef, attach to element with ref prop, access via ref.current.",
  },
  {
    id: 148,
    question: "What is the difference between useRef and useState?",
    answer:
      "useRef doesn't trigger re-renders when changed, useState does.",
  },
  {
    id: 149,
    question: "How do you create mutable variables with useRef?",
    answer:
      "Use useRef to store values that persist across renders without causing re-renders.",
  },
  {
    id: 150,
    question: "What is forwardRef and when to use it?",
    answer:
      "forwardRef passes ref from parent to child component, useful for exposing child DOM nodes.",
  },
  {
    id: 151,
    question: "How would you debug a component that doesn't update when context changes?",
    answer:
      "Check if the component is wrapped in the Provider, verify useContext is used correctly, and ensure context value is actually changing.",
  },
  {
    id: 152,
    question: "What if your useReducer causes infinite loops?",
    answer:
      "Ensure reducer is pure, avoid mutating state, and check for circular dependencies in state updates.",
  },
  {
    id: 153,
    question: "How do you handle memory leaks in useEffect?",
    answer:
      "Always return cleanup functions to cancel subscriptions, timers, and remove event listeners.",
  },
  {
    id: 154,
    question: "What to do if lazy-loaded components don't render?",
    answer:
      "Ensure Suspense wrapper is present, check for import errors, and verify the component export is correct.",
  },
  {
    id: 155,
    question: "How would you debug routing issues in React Router?",
    answer:
      "Check route order, ensure paths match, verify Link components are used correctly, and check for nested route issues.",
  },
  {
    id: 156,
    question: "What if your custom hook causes re-render loops?",
    answer:
      "Ensure dependencies in useEffect are stable, avoid creating new objects/functions in render, and use useCallback/useMemo appropriately.",
  },
  {
    id: 157,
    question: "How do you handle stale closures in React hooks?",
    answer:
      "Use functional updates with setState, include all dependencies in useEffect, or restructure to avoid stale values.",
  },
  {
    id: 158,
    question: "What to do if useMemo isn't improving performance?",
    answer:
      "Verify dependencies are correct, ensure the computation is actually expensive, and check if memoization overhead outweighs benefits.",
  },
  {
    id: 159,
    question: "How would you debug a component that renders too often?",
    answer:
      "Use React.memo, check prop changes with console.log, use useCallback for functions, and profile with React DevTools.",
  },
  {
    id: 160,
    question: "What if your context consumers re-render unnecessarily?",
    answer:
      "Split contexts by domain, use useMemo for context values, and wrap consumers with React.memo.",
  },
  {
    id: 161,
    question: "How do you handle race conditions in async operations?",
    answer:
      "Use cleanup functions, request cancellation, or libraries like SWR that handle race conditions automatically.",
  },
  {
    id: 162,
    question: "What to do if useTransition doesn't prevent blocking?",
    answer:
      "Ensure the update is marked as non-urgent with startTransition, and check if the component supports concurrent features.",
  },
  {
    id: 163,
    question: "How would you debug authentication flow issues?",
    answer:
      "Check token storage, verify API calls include auth headers, ensure protected routes redirect correctly, and test token expiration.",
  },
  {
    id: 164,
    question: "What if your form validation isn't working with React Hook Form?",
    answer:
      "Ensure register is called on inputs, check validation rules, verify form submission handler, and use watch/errors from the hook.",
  },
  {
    id: 165,
    question: "How do you handle infinite scrolling performance issues?",
    answer:
      "Implement virtualization, use pagination, debounce scroll events, and avoid rendering too many items at once.",
  },
  {
    id: 166,
    question: "What to do if useDeferredValue causes UI flickering?",
    answer:
      "Ensure the deferred value is used for non-critical UI parts, and consider if the update really needs deferring.",
  },
  {
    id: 167,
    question: "How would you debug a component that doesn't unmount properly?",
    answer:
      "Check for missing cleanup in useEffect, verify component is actually unmounting, and ensure refs are cleared.",
  },
  {
    id: 168,
    question: "What if your server state library causes excessive re-renders?",
    answer:
      "Use selectors to pick specific data, implement proper caching, and avoid unnecessary data fetching.",
  },
  {
    id: 169,
    question: "How do you handle WebSocket connection issues in React?",
    answer:
      "Implement reconnection logic, handle connection states, use useEffect for setup/cleanup, and manage connection lifecycle.",
  },
  {
    id: 170,
    question: "What to do if Concurrent Mode breaks your existing code?",
    answer:
      "Check for side effects that assume synchronous execution, update to use concurrent-safe patterns, and test thoroughly.",
  },
];

// Make data available globally
window.intermediate = intermediate;
