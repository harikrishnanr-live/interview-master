// React Intermediate Level Q&A Data

let intermediate = [
  {
    id: 1,
    question: "What are React Hooks?",
    answer:
      "React Hooks are special functions introduced in React 16.8 that allow you to use state and other React features without writing a class component. They enable functional components to have side effects, manage state, and access lifecycle methods. For example, useState lets you add state to a functional component, and useEffect lets you perform side effects like data fetching or subscriptions. Hooks make your components more reusable and easier to understand. In a real-time scenario, you might use useState in a counter component to track button clicks, or useEffect to fetch user data when a profile page loads.",
  },
  {
    id: 2,
    question: "What is useState?",
    answer:
      "useState is a Hook that lets you add state to functional components. It returns a stateful value and a function to update it. For example, `const [count, setCount] = useState(0);` initializes a count state at 0 and provides a function to update it. When you call setCount, React re-renders the component with the new state. This is useful for managing user input, toggles, counters, and more. In a real-time example, in a todo app, you could use useState to manage the list of todos and add new ones when the user submits a form.",
  },
  {
    id: 3,
    question: "What is useEffect?",
    answer:
      "useEffect is a Hook that lets you perform side effects in functional components, such as fetching data, setting up subscriptions, or manually changing the DOM. It runs after the component renders. You can specify dependencies so the effect runs only when those values change. For example, fetching user data when a component mounts: `useEffect(() => { fetchUser(); }, []);` The empty array means it runs only once on mount. In a real-time scenario, you might use useEffect to subscribe to a WebSocket for live chat messages, and clean up the subscription when the component unmounts.",
  },
  {
    id: 4,
    question: "What is the Context API?",
    answer:
      "The Context API allows you to share data across the entire component tree without passing props down manually at every level (prop drilling). It is useful for global data like themes, user authentication, or language settings. You create a context with `React.createContext()`, provide a value with a Provider component, and consume it in any child component using `useContext`. For example, a ThemeContext can provide a dark or light theme to all components. In a real-time app, you might use Context to manage user authentication state across multiple pages without passing props through every component.",
  },
  {
    id: 5,
    question: "What is React Router?",
    answer:
      "React Router is a popular library for handling routing in React applications. It allows you to define multiple routes in your app and navigate between different components based on the URL. For example, you can define routes for `/home`, `/about`, and `/profile/:id`. React Router provides components like `<BrowserRouter>`, `<Route>`, `<Link>`, and hooks like `useNavigate` to manage navigation programmatically. In a real-time e-commerce app, React Router could handle navigation between product listings, individual product pages, and the shopping cart.",
  },
  {
    id: 6,
    question: "What are custom hooks in React?",
    answer:
      "Custom hooks are JavaScript functions whose names start with 'use' and that can call other hooks. They allow you to extract and reuse component logic across multiple components. For example, you might create a custom hook `useFetch` to handle data fetching logic, which uses `useState` and `useEffect` internally. This promotes code reuse and cleaner components. In a real-time dashboard app, you could create a custom hook `useWindowSize` to track window dimensions and update components when the window resizes.",
  },
  {
    id: 7,
    question: "How do you create a custom hook?",
    answer:
      "To create a custom hook, define a function starting with 'use' that contains hook calls and logic. For example:\n\n```js\nfunction useCounter(initialValue = 0) {\n  const [count, setCount] = useState(initialValue);\n  const increment = () => setCount(c => c + 1);\n  return { count, increment };\n}\n```\n\nYou can then use `useCounter` in any functional component to get the count state and increment function. In a real-time voting app, you might create a custom hook `useVote` that manages vote counts and handles API calls to submit votes.",
  },
  {
    id: 8,
    question: "What is useReducer and when should you use it?",
    answer:
      "useReducer is a Hook alternative to useState for managing complex state logic, especially when the next state depends on the previous state or when multiple sub-values are involved. It uses a reducer function that takes the current state and an action, and returns a new state. For example, managing a form with multiple fields or complex state transitions is easier with useReducer. In a real-time game app, useReducer could manage game state with actions like 'move_player', 'update_score', handling complex interactions between different state properties.",
  },
  {
    id: 9,
    question: "How do you use useReducer?",
    answer:
      "useReducer takes two arguments: a reducer function and an initial state. It returns the current state and a dispatch function to send actions. Example:\n\n```js\nconst [state, dispatch] = useReducer(reducer, initialState);\n\nfunction reducer(state, action) {\n  switch(action.type) {\n    case 'increment':\n      return { count: state.count + 1 };\n    case 'decrement':\n      return { count: state.count - 1 };\n    default:\n      return state;\n  }\n}\n```\n\nYou dispatch actions like `dispatch({ type: 'increment' })`. In a real-time shopping cart, useReducer could handle actions for adding items, removing items, and updating quantities.",
  },
  {
    id: 10,
    question: "What is the difference between useState and useReducer?",
    answer:
      "useState is simpler for basic state, useReducer is better for complex state logic with multiple sub-values or related state transitions. useState is great for independent state variables, while useReducer shines when state changes depend on previous state or involve multiple related values. For example, use useState for a simple toggle, but useReducer for a form with validation logic. In a real-time chat app, useReducer might manage chat state with actions for sending messages, updating user status, and handling typing indicators.",
  },
  {
    id: 11,
    question: "What is useCallback and why is it useful?",
    answer:
      "useCallback returns a memoized callback function that only changes if one of its dependencies changes, preventing unnecessary re-renders. It's useful when passing callbacks to optimized child components. For example, `const handleClick = useCallback(() => { setCount(c => c + 1); }, []);` ensures the function reference stays the same across renders. In a real-time list app, useCallback prevents child list items from re-rendering when the parent state changes but the callback logic doesn't.",
  },
  {
    id: 12,
    question: "What is useMemo and how does it work?",
    answer:
      "useMemo memoizes expensive computations, recomputing only when dependencies change. It returns the memoized value. For example, `const expensiveValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);` only recalculates when a or b changes. This optimizes performance by avoiding unnecessary calculations on every render. In a real-time data visualization app, useMemo could cache filtered or sorted data to avoid recomputing on every render.",
  },
  {
    id: 13,
    question: "When should you use useMemo?",
    answer:
      "Use useMemo for expensive calculations that don't need to run on every render. It's ideal for computations like filtering large arrays, complex mathematical operations, or transforming data. Don't use it for simple operations as the memoization overhead might outweigh benefits. In a real-time stock trading app, useMemo could cache portfolio calculations that depend on multiple stock prices, updating only when prices change.",
  },
  {
    id: 14,
    question: "How do you implement lazy loading in React?",
    answer:
      "Use React.lazy() and Suspense to dynamically import components, splitting code for better performance. For example:\n\n```js\nconst LazyComponent = React.lazy(() => import('./LazyComponent'));\n\nfunction App() {\n  return (\n    <Suspense fallback={<div>Loading...</div>}>\n      <LazyComponent />\n    </Suspense>\n  );\n}\n```\n\nThis loads the component only when needed. In a real-time blog app, lazy loading could defer loading comment sections or image galleries until the user scrolls to them.",
  },
  {
    id: 15,
    question: "What is code splitting in React?",
    answer:
      "Code splitting allows you to split your code into smaller bundles that can be loaded on demand, improving initial load times. React.lazy() and dynamic imports enable this. For example, you can split route-based code so each page loads its own bundle. In a real-time social media app, code splitting could separate the feed, profile, and messaging features into different bundles, loading only what's needed initially.",
  },
  {
    id: 16,
    question: "How do you handle routing with parameters in React Router?",
    answer:
      "Use route parameters with :param syntax in the path, and access them via useParams hook. For example:\n\n```js\n<Route path=\"/user/:id\" element={<User />} />\n\nfunction User() {\n  const { id } = useParams();\n  // Use id to fetch user data\n}\n```\n\nThis allows dynamic routes. In a real-time e-commerce app, you might use `/product/:productId` to display different products based on the URL parameter.",
  },
  {
    id: 17,
    question: "What is the useParams hook?",
    answer:
      "useParams returns an object of key/value pairs of URL parameters from the current route. For example, for route `/user/123`, `useParams()` returns `{ id: '123' }`. It's useful for accessing dynamic segments of the URL. In a real-time news app, useParams could extract article IDs from URLs like `/article/:articleId` to fetch and display specific articles.",
  },
  {
    id: 18,
    question: "How do you programmatically navigate in React Router?",
    answer:
      "Use the useNavigate hook to programmatically change routes. For example:\n\n```js\nconst navigate = useNavigate();\n\nfunction handleSubmit() {\n  // Submit form\n  navigate('/success');\n}\n```\n\nThis is useful for redirects after actions. In a real-time authentication flow, after login, you might navigate to the dashboard programmatically.",
  },
  {
    id: 19,
    question: "What is the difference between Link and NavLink?",
    answer:
      "Link provides navigation, NavLink adds styling capabilities for active links. NavLink applies an 'active' class when the current route matches. For example:\n\n```js\n<NavLink to=\"/home\" className={({ isActive }) => isActive ? 'active' : ''}>\n  Home\n</NavLink>\n```\n\nIn a real-time navigation menu, NavLink highlights the current page automatically.",
  },
  {
    id: 20,
    question: "How do you protect routes in React Router?",
    answer:
      "Create a wrapper component that checks authentication and redirects if not authorized. For example:\n\n```js\nfunction ProtectedRoute({ children }) {\n  const isAuthenticated = useAuth();\n  return isAuthenticated ? children : <Navigate to=\"/login\" />;\n}\n```\n\nWrap protected routes with this component. In a real-time admin panel, this ensures only authenticated users access sensitive pages.",
  },
  {
    id: 21,
    question: "What is the Context API used for?",
    answer:
      "Context API allows sharing state across the component tree without prop drilling.",
  },
  {
    id: 22,
    question: "How do you create a context?",
    answer:
      "Use React.createContext() to create a context, then use Provider to provide values and useContext to consume them.",
  },
  {
    id: 23,
    question: "What are context consumers?",
    answer:
      "Context consumers subscribe to context changes. In functional components, use useContext hook instead.",
  },
  {
    id: 24,
    question: "How do you optimize context performance?",
    answer:
      "Split contexts by domain, use memoization, and avoid unnecessary re-renders by splitting providers.",
  },
  {
    id: 25,
    question: "What is React Suspense?",
    answer:
      "Suspense lets components 'wait' for something before rendering, used with lazy loading and data fetching.",
  },
  {
    id: 26,
    question: "How do you handle loading states with Suspense?",
    answer:
      "Wrap lazy components in Suspense with a fallback prop that renders while the component loads.",
  },
  {
    id: 27,
    question: "What are compound components?",
    answer:
      "Compound components are a pattern where multiple components work together, sharing implicit state.",
  },
  {
    id: 28,
    question: "How do you implement compound components?",
    answer:
      "Use React.cloneElement or Context API to pass props implicitly to child components.",
  },
  {
    id: 29,
    question: "What is render props pattern?",
    answer:
      "Render props is a pattern where a component's prop is a function that returns JSX, allowing code sharing.",
  },
  {
    id: 30,
    question: "When should you use render props?",
    answer:
      "Use render props when you need to share logic between components but want flexibility in rendering.",
  },
  {
    id: 31,
    question: "How do you test React components?",
    answer:
      "Use testing libraries like Jest and React Testing Library to write unit and integration tests.",
  },
  {
    id: 32,
    question: "What is React Testing Library?",
    answer:
      "React Testing Library is a testing utility that encourages testing components the way users interact with them.",
  },
  {
    id: 33,
    question: "How do you test hooks?",
    answer:
      "Use React Hooks Testing Library or test hooks within component tests.",
  },
  {
    id: 34,
    question: "What is the act() function in testing?",
    answer:
      "act() ensures that all updates related to a test have been processed before making assertions.",
  },
  {
    id: 35,
    question: "How do you mock API calls in tests?",
    answer:
      "Use Jest's mocking capabilities or libraries like MSW (Mock Service Worker) to mock API responses.",
  },
  {
    id: 36,
    question: "What is the useLayoutEffect hook?",
    answer:
      "useLayoutEffect runs synchronously after DOM mutations, used for DOM measurements and mutations.",
  },
  {
    id: 37,
    question: "When should you use useLayoutEffect instead of useEffect?",
    answer:
      "Use useLayoutEffect when you need to read layout from DOM and synchronously re-render.",
  },
  {
    id: 38,
    question: "What is the useImperativeHandle hook?",
    answer:
      "useImperativeHandle customizes the instance value exposed to parent components when using ref.",
  },
  {
    id: 39,
    question: "How do you handle form validation in React?",
    answer:
      "Use controlled components with validation logic, or libraries like Formik or React Hook Form.",
  },
  {
    id: 40,
    question: "What is React Hook Form?",
    answer:
      "React Hook Form is a performant library for managing form state and validation with minimal re-renders.",
  },
  {
    id: 41,
    question: "How do you handle file uploads in React?",
    answer:
      "Use controlled file inputs and FormData to send files to the server.",
  },
  {
    id: 42,
    question: "What is the useDeferredValue hook?",
    answer:
      "useDeferredValue defers updating a part of UI, allowing more urgent updates to happen first.",
  },
  {
    id: 43,
    question: "What is the useTransition hook?",
    answer:
      "useTransition allows marking state updates as non-urgent, preventing blocking of urgent updates.",
  },
  {
    id: 44,
    question: "How do you implement infinite scrolling?",
    answer:
      "Use intersection observer or scroll event listeners to detect when to load more data.",
  },
  {
    id: 45,
    question: "What is the useId hook?",
    answer:
      "useId generates unique IDs that are stable across server and client rendering.",
  },
  {
    id: 46,
    question: "How do you handle authentication in React?",
    answer:
      "Use context for auth state, protected routes, and HTTP interceptors for API authentication.",
  },
  {
    id: 47,
    question: "What is the useContext hook?",
    answer:
      "useContext allows functional components to consume context values.",
  },
  {
    id: 48,
    question: "How do you handle global state without Redux?",
    answer:
      "Use Context API with useReducer, or libraries like Zustand or Jotai.",
  },
  {
    id: 49,
    question: "What is the difference between useEffect and useLayoutEffect?",
    answer:
      "useEffect runs asynchronously after render, useLayoutEffect runs synchronously before browser paint.",
  },
  {
    id: 50,
    question: "How do you debug React applications?",
    answer:
      "Use React DevTools, console logging, React.StrictMode, and error boundaries.",
  },
  {
    id: 51,
    question: "What is the React Profiler?",
    answer:
      "React Profiler measures rendering performance and identifies performance bottlenecks.",
  },
  {
    id: 52,
    question: "How do you handle race conditions in API calls?",
    answer:
      "Use cleanup functions in useEffect or libraries like SWR that handle race conditions automatically.",
  },
  {
    id: 53,
    question: "What is optimistic UI updates?",
    answer:
      "Optimistic UI updates show changes immediately, then revert if the server request fails.",
  },
  {
    id: 54,
    question: "How do you implement drag and drop in React?",
    answer:
      "Use libraries like react-dnd or HTML5 drag and drop API with React event handlers.",
  },
  {
    id: 55,
    question: "What is the useDebugValue hook?",
    answer:
      "useDebugValue displays a label for custom hooks in React DevTools.",
  },
  {
    id: 56,
    question: "How do you create a custom hook for API calls?",
    answer:
      "Create a function starting with 'use' that uses useState and useEffect to manage API state and side effects.",
  },
  {
    id: 57,
    question: "What is the useReducer hook and when to use it?",
    answer:
      "useReducer manages complex state logic with a reducer function, useful when state depends on previous state or has multiple sub-values.",
  },
  {
    id: 58,
    question: "How do you dispatch actions in useReducer?",
    answer:
      "Call the dispatch function returned by useReducer with an action object containing type and payload.",
  },
  {
    id: 59,
    question: "What is the difference between useState and useReducer for state management?",
    answer:
      "useState for simple state, useReducer for complex state transitions that involve multiple values or depend on previous state.",
  },
  {
    id: 60,
    question: "How do you handle async operations with useReducer?",
    answer:
      "Dispatch actions for start, success, and error states, handling async logic in action creators or useEffect.",
  },
  {
    id: 61,
    question: "What is useCallback and how does it prevent re-renders?",
    answer:
      "useCallback memoizes functions, preventing child components that depend on function props from re-rendering unnecessarily.",
  },
  {
    id: 62,
    question: "When should you use useCallback over useMemo?",
    answer:
      "Use useCallback for functions, useMemo for expensive computations that return values.",
  },
  {
    id: 63,
    question: "How do you optimize useCallback dependencies?",
    answer:
      "Include all dependencies that the callback uses, but avoid over-inclusion that could cause unnecessary re-computations.",
  },
  {
    id: 64,
    question: "What is useMemo and how does it improve performance?",
    answer:
      "useMemo caches expensive computations, recomputing only when dependencies change, preventing unnecessary calculations.",
  },
  {
    id: 65,
    question: "How do you decide what to memoize with useMemo?",
    answer:
      "Memoize expensive operations like complex calculations, array transformations, or object creations that happen on every render.",
  },
  {
    id: 66,
    question: "What is lazy loading and how do you implement it in React?",
    answer:
      "Lazy loading defers component loading until needed. Use React.lazy() with Suspense for code splitting.",
  },
  {
    id: 67,
    question: "How do you handle loading states with React.lazy?",
    answer:
      "Wrap lazy components in Suspense with a fallback component that renders while the component loads.",
  },
  {
    id: 68,
    question: "What is code splitting and why is it important?",
    answer:
      "Code splitting divides code into smaller bundles loaded on demand, reducing initial bundle size and improving performance.",
  },
  {
    id: 69,
    question: "How do you implement route-based code splitting?",
    answer:
      "Use React.lazy for route components and load them dynamically based on the current route.",
  },
  {
    id: 70,
    question: "What is React Router and how does it work?",
    answer:
      "React Router provides routing capabilities for React apps, allowing navigation between different components based on URL.",
  },
  {
    id: 71,
    question: "How do you set up routing in a React app?",
    answer:
      "Wrap your app with BrowserRouter, define Routes with Route components, and use Link or NavLink for navigation.",
  },
  {
    id: 72,
    question: "What is the difference between BrowserRouter and HashRouter?",
    answer:
      "BrowserRouter uses HTML5 history API for clean URLs, HashRouter uses hash portion of URL for compatibility.",
  },
  {
    id: 73,
    question: "How do you handle dynamic routes in React Router?",
    answer:
      "Use route parameters with :param syntax in path, and access them with useParams hook.",
  },
  {
    id: 74,
    question: "What is useParams and how do you use it?",
    answer:
      "useParams returns an object with route parameters, allowing access to dynamic segments of the URL.",
  },
  {
    id: 75,
    question: "How do you navigate programmatically in React Router?",
    answer:
      "Use the useNavigate hook to change routes imperatively, useful for redirects after form submissions.",
  },
  {
    id: 76,
    question: "What is the difference between Link and NavLink?",
    answer:
      "Link provides basic navigation, NavLink adds styling capabilities for active route indication.",
  },
  {
    id: 77,
    question: "How do you implement nested routes?",
    answer:
      "Use Outlet component in parent routes to render child routes, creating nested route structures.",
  },
  {
    id: 78,
    question: "What is route protection in React Router?",
    answer:
      "Create wrapper components that check authentication and redirect unauthorized users.",
  },
  {
    id: 79,
    question: "How do you handle 404 pages in React Router?",
    answer:
      "Add a catch-all route with path='*' that renders a 404 component.",
  },
  {
    id: 80,
    question: "What is the Context API and when should you use it?",
    answer:
      "Context API shares data across component tree without prop drilling, useful for theme, user auth, or global app state.",
  },
  {
    id: 81,
    question: "How do you create and provide context?",
    answer:
      "Create context with React.createContext(), wrap components with Provider, and pass value prop.",
  },
  {
    id: 82,
    question: "How do you consume context in functional components?",
    answer:
      "Use useContext hook with the context object to access context values.",
  },
  {
    id: 83,
    question: "What are context consumers in class components?",
    answer:
      "Context.Consumer is a render prop component that provides context value to class components.",
  },
  {
    id: 84,
    question: "How do you optimize context performance?",
    answer:
      "Split contexts by domain, use React.memo on consumers, and avoid frequent value changes.",
  },
  {
    id: 85,
    question: "What is the useContext hook?",
    answer:
      "useContext allows functional components to subscribe to context changes and access context values.",
  },
  {
    id: 86,
    question: "Can you have multiple contexts in an app?",
    answer:
      "Yes, create multiple contexts for different concerns like theme, user, and app state.",
  },
  {
    id: 87,
    question: "How do you handle context and re-renders?",
    answer:
      "Use useMemo for context values and React.memo for context consumers to prevent unnecessary re-renders.",
  },
  {
    id: 88,
    question: "What is React Suspense?",
    answer:
      "Suspense lets components 'wait' for something before rendering, used with lazy loading and future data fetching features.",
  },
  {
    id: 89,
    question: "How do you use Suspense with lazy loading?",
    answer:
      "Wrap React.lazy components in Suspense with fallback prop for loading state.",
  },
  {
    id: 90,
    question: "What are compound components?",
    answer:
      "Compound components are a pattern where related components work together, sharing implicit state through context.",
  },
  {
    id: 91,
    question: "How do you implement compound components?",
    answer:
      "Use context to share state between related components, allowing flexible composition.",
  },
  {
    id: 92,
    question: "What is the render props pattern?",
    answer:
      "Render props is a pattern where a component receives a function as a prop that returns JSX.",
  },
  {
    id: 93,
    question: "When should you use render props?",
    answer:
      "Use render props when you need to share logic between components but want control over rendering.",
  },
  {
    id: 94,
    question: "How do you implement render props?",
    answer:
      "Pass a function as a prop (usually called render or children) that receives data and returns JSX.",
  },
  {
    id: 95,
    question: "What is the difference between render props and HOCs?",
    answer:
      "Render props provide more flexibility in rendering, HOCs are better for cross-cutting concerns.",
  },
  {
    id: 96,
    question: "How do you test custom hooks?",
    answer:
      "Use React Hooks Testing Library or test hooks within component tests using renderHook.",
  },
  {
    id: 97,
    question: "What is React Testing Library?",
    answer:
      "React Testing Library is a testing utility focused on testing components from user perspective.",
  },
  {
    id: 98,
    question: "How do you test asynchronous operations in React?",
    answer:
      "Use async/await with waitFor utility from React Testing Library to wait for async operations.",
  },
  {
    id: 99,
    question: "What is the act() utility in testing?",
    answer:
      "act() ensures all updates related to a test have been processed before making assertions.",
  },
  {
    id: 100,
    question: "How do you mock API calls in React tests?",
    answer:
      "Use Jest mocks, MSW (Mock Service Worker), or React Testing Library's custom render with mocked providers.",
  },
  {
    id: 101,
    question: "What is the useLayoutEffect hook?",
    answer:
      "useLayoutEffect runs synchronously after DOM mutations, used for DOM measurements and synchronous re-renders.",
  },
  {
    id: 102,
    question: "When should you use useLayoutEffect instead of useEffect?",
    answer:
      "Use useLayoutEffect when you need to read layout from DOM and re-render synchronously before browser paint.",
  },
  {
    id: 103,
    question: "What is the useImperativeHandle hook?",
    answer:
      "useImperativeHandle customizes the instance value exposed when using ref with forwardRef.",
  },
  {
    id: 104,
    question: "How do you use forwardRef?",
    answer:
      "Wrap component in forwardRef and pass ref as second parameter to access child component refs.",
  },
  {
    id: 105,
    question: "What is the useDeferredValue hook?",
    answer:
      "useDeferredValue defers updating less urgent parts of UI, allowing urgent updates to render first.",
  },
  {
    id: 106,
    question: "What is the useTransition hook?",
    answer:
      "useTransition marks state updates as non-urgent, preventing them from blocking urgent updates.",
  },
  {
    id: 107,
    question: "How do you implement optimistic updates?",
    answer:
      "Update UI immediately with expected result, then revert if server request fails.",
  },
  {
    id: 108,
    question: "What is the useId hook?",
    answer:
      "useId generates unique IDs stable across server and client rendering, useful for form labels and ARIA attributes.",
  },
  {
    id: 109,
    question: "How do you handle form validation in React?",
    answer:
      "Use controlled components with validation logic, or libraries like Formik, React Hook Form for complex forms.",
  },
  {
    id: 110,
    question: "What is React Hook Form?",
    answer:
      "React Hook Form is a performant library for form state management with minimal re-renders.",
  },
  {
    id: 111,
    question: "How do you handle file uploads in React?",
    answer:
      "Use controlled file inputs, FormData for multipart uploads, and handle progress with XMLHttpRequest or fetch.",
  },
  {
    id: 112,
    question: "What is infinite scrolling and how do you implement it?",
    answer:
      "Infinite scrolling loads more content as user scrolls. Use Intersection Observer API or scroll event listeners.",
  },
  {
    id: 113,
    question: "How do you implement virtual scrolling?",
    answer:
      "Render only visible items, calculate scroll position, and dynamically add/remove items from DOM.",
  },
  {
    id: 114,
    question: "What is the useDebugValue hook used for?",
    answer:
      "useDebugValue displays custom labels for custom hooks in React DevTools.",
  },
  {
    id: 115,
    question: "How do you handle authentication in React apps?",
    answer:
      "Use context for auth state, protected routes, JWT tokens, and HTTP interceptors for API authentication.",
  },
  {
    id: 116,
    question: "What is the useContext hook?",
    answer:
      "useContext allows functional components to consume context values without Consumer component.",
  },
  {
    id: 117,
    question: "How do you handle global state without Redux?",
    answer:
      "Use Context API with useReducer, or state management libraries like Zustand, Jotai, or Recoil.",
  },
  {
    id: 118,
    question: "What is the difference between useEffect and useLayoutEffect?",
    answer:
      "useEffect runs asynchronously after render, useLayoutEffect runs synchronously before browser paint.",
  },
  {
    id: 119,
    question: "How do you debug React applications effectively?",
    answer:
      "Use React DevTools, console logging, React.StrictMode, error boundaries, and performance profiling.",
  },
  {
    id: 120,
    question: "What is the React Profiler?",
    answer:
      "React Profiler measures rendering performance and helps identify performance bottlenecks.",
  },
  {
    id: 121,
    question: "How do you handle race conditions in API calls?",
    answer:
      "Use cleanup functions in useEffect, request cancellation, or libraries that handle race conditions.",
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
