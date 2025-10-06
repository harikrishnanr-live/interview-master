// React Advanced Level Q&A Data

let advanced = [
  {
    id: 1,
    question: "What is Redux?",
    answer:
      "Redux is a predictable state container for JavaScript applications, commonly used with React.",
  },
  {
    id: 2,
    question: "What are Higher-Order Components (HOCs)?",
    answer:
      "Higher-Order Components are functions that take a component and return a new component with additional props or behavior.",
  },
  {
    id: 3,
    question: "What is React.memo?",
    answer:
      "React.memo is a higher-order component that memoizes the result of a component render.",
  },
  {
    id: 4,
    question: "What is server-side rendering in React?",
    answer:
      "Server-side rendering (SSR) is the process of rendering React components on the server and sending the HTML to the client.",
  },
  {
    id: 5,
    question: "What are React Portals?",
    answer:
      "Portals provide a way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.",
  },
  {
    id: 6,
    question: "What is Redux and why is it used?",
    answer:
      "Redux is a predictable state container for JavaScript apps, used for managing complex application state in a predictable way.",
  },
  {
    id: 7,
    question: "What are the core principles of Redux?",
    answer:
      "Single source of truth, state is read-only, changes are made with pure functions (reducers).",
  },
  {
    id: 8,
    question: "What is a Redux store?",
    answer:
      "The store holds the application state, allows access to state via getState(), updates via dispatch(), and registers listeners via subscribe().",
  },
  {
    id: 9,
    question: "What is a Redux action?",
    answer:
      "Actions are plain JavaScript objects that describe what happened, with a required 'type' property.",
  },
  {
    id: 10,
    question: "What is a Redux reducer?",
    answer:
      "Reducers are pure functions that take the current state and an action, and return the new state.",
  },
  {
    id: 11,
    question: "How do you connect React components to Redux?",
    answer:
      "Use the connect() higher-order component or useSelector/useDispatch hooks from react-redux.",
  },
  {
    id: 12,
    question: "What is Redux Toolkit?",
    answer:
      "Redux Toolkit is the official, opinionated, batteries-included toolset for efficient Redux development.",
  },
  {
    id: 13,
    question: "What is Redux Saga?",
    answer:
      "Redux Saga is a library that aims to make application side effects easier to manage, more efficient to execute, and better at testing.",
  },
  {
    id: 14,
    question: "What is Redux Thunk?",
    answer:
      "Redux Thunk is a middleware that allows you to write action creators that return a function instead of an action.",
  },
  {
    id: 15,
    question: "How do you handle asynchronous operations in Redux?",
    answer:
      "Use middleware like Redux Thunk or Redux Saga to handle async operations.",
  },
  {
    id: 16,
    question: "What is server-side rendering (SSR) in React?",
    answer:
      "SSR is the process of rendering React components on the server and sending the HTML to the client.",
  },
  {
    id: 17,
    question: "What are the benefits of SSR?",
    answer:
      "Better SEO, faster initial page loads, and improved performance on slow devices/connections.",
  },
  {
    id: 18,
    question: "How do you implement SSR with React?",
    answer:
      "Use frameworks like Next.js or set up your own SSR with ReactDOMServer.renderToString().",
  },
  {
    id: 19,
    question: "What is Next.js?",
    answer:
      "Next.js is a React framework that provides SSR, static site generation, and other production-ready features.",
  },
  {
    id: 20,
    question: "What is static site generation (SSG)?",
    answer:
      "SSG generates HTML at build time, providing fast loading and good SEO without a server.",
  },
  {
    id: 21,
    question: "How do you optimize React app performance?",
    answer:
      "Use code splitting, lazy loading, memoization, avoid unnecessary re-renders, optimize images, and use CDN.",
  },
  {
    id: 22,
    question: "What is React Profiler API?",
    answer:
      "React Profiler API allows measuring rendering performance of React components.",
  },
  {
    id: 23,
    question: "How do you identify performance bottlenecks in React?",
    answer:
      "Use React DevTools Profiler, Chrome DevTools, and performance monitoring tools.",
  },
  {
    id: 24,
    question: "What is React Fiber?",
    answer:
      "React Fiber is the new reconciliation algorithm that enables incremental rendering and better performance.",
  },
  {
    id: 25,
    question: "What is Concurrent Mode in React?",
    answer:
      "Concurrent Mode allows React to interrupt rendering to handle high-priority updates.",
  },
  {
    id: 26,
    question:
      "What is the difference between Concurrent Mode and Blocking Mode?",
    answer:
      "Concurrent Mode allows interruption for urgent updates, Blocking Mode prioritizes synchronous rendering.",
  },
  {
    id: 27,
    question: "How do you implement internationalization (i18n) in React?",
    answer:
      "Use libraries like react-i18next or react-intl to handle multiple languages and locales.",
  },
  {
    id: 28,
    question: "What is TypeScript and how does it work with React?",
    answer:
      "TypeScript is a typed superset of JavaScript. It provides static typing for React components and props.",
  },
  {
    id: 29,
    question: "How do you type React components in TypeScript?",
    answer:
      "Use React.FC for function components, define prop interfaces, and use generics for hooks.",
  },
  {
    id: 30,
    question: "What is GraphQL?",
    answer:
      "GraphQL is a query language for APIs that allows clients to request exactly the data they need.",
  },
  {
    id: 31,
    question: "How do you integrate GraphQL with React?",
    answer:
      "Use libraries like Apollo Client or Relay to manage GraphQL queries and caching.",
  },
  {
    id: 32,
    question: "What is Apollo Client?",
    answer:
      "Apollo Client is a comprehensive state management library for JavaScript that enables you to manage both local and remote data with GraphQL.",
  },
  {
    id: 33,
    question: "What is micro-frontends architecture?",
    answer:
      "Micro-frontends is an architectural style where independently deliverable frontend applications are composed into a greater whole.",
  },
  {
    id: 34,
    question: "How do you implement micro-frontends with React?",
    answer:
      "Use module federation with Webpack 5, or iframe-based composition, or build-time integration.",
  },
  {
    id: 35,
    question: "What is WebAssembly and how can it be used with React?",
    answer:
      "WebAssembly allows running high-performance code in browsers. It can be used for computationally intensive tasks in React apps.",
  },
  {
    id: 36,
    question: "How do you handle security in React applications?",
    answer:
      "Sanitize user inputs, use HTTPS, implement proper authentication, avoid direct DOM manipulation, and use security headers.",
  },
  {
    id: 37,
    question:
      "What is Cross-Site Scripting (XSS) and how to prevent it in React?",
    answer:
      "XSS is injecting malicious scripts. React automatically escapes content, but be careful with dangerouslySetInnerHTML.",
  },
  {
    id: 38,
    question: "How do you implement authentication in React?",
    answer:
      "Use JWT tokens, OAuth, or session-based auth with protected routes and HTTP interceptors.",
  },
  {
    id: 39,
    question: "What is React Query (TanStack Query)?",
    answer:
      "React Query is a powerful data synchronization library for React that makes fetching, caching, and updating server state easy.",
  },
  {
    id: 40,
    question: "How does React Query differ from Redux?",
    answer:
      "React Query focuses on server state, while Redux manages client state. React Query handles caching, background updates, and synchronization automatically.",
  },
  {
    id: 41,
    question: "What is SWR (stale-while-revalidate)?",
    answer:
      "SWR is a React Hooks library for data fetching, similar to React Query, that implements the stale-while-revalidate caching strategy.",
  },
  {
    id: 42,
    question: "How do you implement real-time features in React?",
    answer:
      "Use WebSockets, Server-Sent Events, or libraries like Socket.io for real-time communication.",
  },
  {
    id: 43,
    question: "What is Progressive Web App (PWA)?",
    answer:
      "PWAs are web apps that can be installed on devices and work offline, providing native app-like experiences.",
  },
  {
    id: 44,
    question: "How do you make a React app a PWA?",
    answer:
      "Implement service workers for caching, add a web app manifest, and ensure HTTPS.",
  },
  {
    id: 45,
    question: "What is React Native?",
    answer:
      "React Native is a framework for building native mobile apps using React and JavaScript.",
  },
  {
    id: 46,
    question: "How does React Native differ from React?",
    answer:
      "React Native uses native components instead of web components, and renders to mobile platforms instead of the DOM.",
  },
  {
    id: 47,
    question: "What is the bridge in React Native?",
    answer:
      "The bridge is the communication layer between JavaScript and native threads in React Native.",
  },
  {
    id: 48,
    question: "How do you handle platform-specific code in React Native?",
    answer:
      "Use Platform module or file extensions like .ios.js and .android.js for platform-specific implementations.",
  },
  {
    id: 49,
    question: "What is React 18 and what are its new features?",
    answer:
      "React 18 introduces Concurrent Features, automatic batching, new Suspense features, and the new root API.",
  },
  {
    id: 50,
    question: "What is the new root API in React 18?",
    answer:
      "ReactDOM.createRoot() enables Concurrent Mode and provides better error handling compared to the legacy render method.",
  },
  {
    id: 51,
    question: "What is automatic batching in React 18?",
    answer:
      "Automatic batching groups multiple state updates into a single re-render for better performance.",
  },
  {
    id: 52,
    question: "How do you migrate from React 17 to React 18?",
    answer:
      "Replace ReactDOM.render with ReactDOM.createRoot, and gradually adopt new features like Suspense.",
  },
  {
    id: 53,
    question: "What is React Server Components?",
    answer:
      "Server Components allow rendering components on the server, reducing bundle size and improving performance.",
  },
  {
    id: 54,
    question: "How do Server Components differ from SSR?",
    answer:
      "Server Components run on the server and don't hydrate on the client, while SSR hydrates on the client.",
  },
  {
    id: 55,
    question: "What is the future of React?",
    answer:
      "React is moving towards more concurrent features, better performance, and improved developer experience with features like Server Components and concurrent rendering.",
  },
  {
    id: 56,
    question: "What is Redux Middleware?",
    answer:
      "Redux middleware provides a third-party extension point between dispatching an action and the moment it reaches the reducer.",
  },
  {
    id: 57,
    question: "How do you create custom Redux middleware?",
    answer:
      "Create a function that returns a function that returns a function, following the (store) => (next) => (action) => {} pattern.",
  },
  {
    id: 58,
    question: "What is Redux DevTools?",
    answer:
      "Redux DevTools is a browser extension that provides powerful debugging capabilities for Redux applications.",
  },
  {
    id: 59,
    question: "How do you set up Redux DevTools?",
    answer:
      "Install the browser extension and configure the store with composeWithDevTools from redux-devtools-extension.",
  },
  {
    id: 60,
    question: "What is Redux Persist?",
    answer:
      "Redux Persist is a library that allows persisting and rehydrating a Redux store.",
  },
  {
    id: 61,
    question: "How do you handle complex async logic in Redux?",
    answer:
      "Use Redux Saga for complex async workflows or Redux Thunk for simpler async operations.",
  },
  {
    id: 62,
    question: "What is Redux Saga?",
    answer:
      "Redux Saga is a library that aims to make application side effects easier to manage, more efficient to execute, and better at testing.",
  },
  {
    id: 63,
    question: "How do you create sagas in Redux Saga?",
    answer:
      "Use generator functions with yield effects like call(), put(), takeEvery(), etc.",
  },
  {
    id: 64,
    question: "What is the difference between call and put in Redux Saga?",
    answer:
      "call invokes a function (like API calls), put dispatches an action to the Redux store.",
  },
  {
    id: 65,
    question: "How do you test Redux Saga?",
    answer:
      "Use redux-saga-test-plan or test sagas by iterating through generator and asserting yielded effects.",
  },
  {
    id: 66,
    question: "What is Reselect and why is it used?",
    answer:
      "Reselect is a selector library for Redux that memoizes derived state, improving performance.",
  },
  {
    id: 67,
    question: "How do you create selectors with Reselect?",
    answer:
      "Use createSelector function with input selectors and a transform function.",
  },
  {
    id: 68,
    question: "What is Normalized State in Redux?",
    answer:
      "Normalized state stores data in a flat structure with relationships, avoiding nested data structures.",
  },
  {
    id: 69,
    question: "How do you normalize Redux state?",
    answer:
      "Use libraries like normalizr or manually structure state with entities and IDs.",
  },
  {
    id: 70,
    question: "What is Redux Toolkit Query (RTK Query)?",
    answer:
      "RTK Query is a powerful data fetching and caching tool built into Redux Toolkit.",
  },
  {
    id: 71,
    question: "How do you set up RTK Query?",
    answer:
      "Create an API slice with createApi, define endpoints, and use generated hooks.",
  },
  {
    id: 72,
    question: "What are the benefits of RTK Query over Redux Thunk?",
    answer:
      "RTK Query provides automatic caching, background updates, and optimistic updates out of the box.",
  },
  {
    id: 73,
    question: "How do you handle caching in RTK Query?",
    answer:
      "RTK Query automatically caches data and provides cache invalidation strategies.",
  },
  {
    id: 74,
    question: "What is Server-Side Rendering (SSR) in detail?",
    answer:
      "SSR renders React components on the server, sending HTML to the client for faster initial loads and better SEO.",
  },
  {
    id: 75,
    question: "What are the challenges of SSR?",
    answer:
      "Complex setup, handling client-server differences, managing state hydration, and performance overhead.",
  },
  {
    id: 76,
    question: "How do you implement SSR with Next.js?",
    answer:
      "Next.js provides built-in SSR. Use getServerSideProps for server-side data fetching.",
  },
  {
    id: 77,
    question: "What is Static Site Generation (SSG)?",
    answer:
      "SSG generates HTML at build time, providing fast loading without server-side rendering.",
  },
  {
    id: 78,
    question: "How do you implement SSG in Next.js?",
    answer:
      "Use getStaticProps to fetch data at build time and getStaticPaths for dynamic routes.",
  },
  {
    id: 79,
    question: "What is Incremental Static Regeneration (ISR)?",
    answer:
      "ISR allows updating static pages after build time without rebuilding the entire site.",
  },
  {
    id: 80,
    question: "How do you optimize Next.js applications?",
    answer:
      "Use Image component, code splitting, bundle analyzer, and implement proper caching strategies.",
  },
  {
    id: 81,
    question: "What is the Next.js Image component?",
    answer:
      "Next.js Image component provides automatic image optimization, lazy loading, and responsive images.",
  },
  {
    id: 82,
    question: "How do you handle API routes in Next.js?",
    answer:
      "Create files in pages/api/ directory that export functions handling HTTP methods.",
  },
  {
    id: 83,
    question: "What is the App Router in Next.js 13+?",
    answer:
      "App Router is a new routing system using app/ directory with layouts, loading states, and server components.",
  },
  {
    id: 84,
    question: "How do you migrate from Pages Router to App Router?",
    answer:
      "Gradually move routes to app/ directory, update data fetching methods, and adapt component structure.",
  },
  {
    id: 85,
    question: "What is React Server Components?",
    answer:
      "Server Components run on the server, reducing bundle size and enabling direct data access.",
  },
  {
    id: 86,
    question: "How do Server Components differ from Client Components?",
    answer:
      "Server Components run on server and can't use browser APIs, Client Components run on client with full React API.",
  },
  {
    id: 87,
    question: "What is the 'use client' directive?",
    answer:
      "'use client' marks components as client components in Next.js App Router.",
  },
  {
    id: 88,
    question: "How do you share state between Server and Client Components?",
    answer:
      "Use URL state, cookies, or pass data through component props and context.",
  },
  {
    id: 89,
    question: "What is Concurrent React?",
    answer:
      "Concurrent React allows multiple versions of UI to be rendered simultaneously.",
  },
  {
    id: 90,
    question: "What is the startTransition API?",
    answer:
      "startTransition marks updates as non-urgent, allowing urgent updates to interrupt them.",
  },
  {
    id: 91,
    question: "How do you use startTransition?",
    answer:
      "Wrap non-urgent updates in startTransition callback to allow interruption by urgent updates.",
  },
  {
    id: 92,
    question: "What is Suspense for data fetching?",
    answer:
      "Suspense allows components to wait for data before rendering, providing loading states.",
  },
  {
    id: 93,
    question: "How do you implement Suspense for data fetching?",
    answer:
      "Use libraries that support Suspense or create custom data fetching with Suspense boundaries.",
  },
  {
    id: 94,
    question: "What is the useDeferredValue hook?",
    answer:
      "useDeferredValue defers re-rendering of non-urgent parts of UI, allowing urgent updates first.",
  },
  {
    id: 95,
    question: "When should you use useDeferredValue?",
    answer:
      "Use for expensive components that don't need immediate updates, like search results or lists.",
  },
  {
    id: 96,
    question: "What is React 18's automatic batching?",
    answer:
      "Automatic batching groups multiple state updates into single re-render, even across async boundaries.",
  },
  {
    id: 97,
    question: "How does automatic batching improve performance?",
    answer:
      "Reduces number of re-renders by batching updates that happen in same tick or async operation.",
  },
  {
    id: 98,
    question: "What is the new root API in React 18?",
    answer:
      "ReactDOM.createRoot() enables concurrent features and provides better error handling.",
  },
  {
    id: 99,
    question: "How do you handle hydration mismatches in SSR?",
    answer:
      "Ensure server and client render the same content, use suppressHydrationWarning for intentional differences.",
  },
  {
    id: 100,
    question: "What is React Fast Refresh?",
    answer:
      "Fast Refresh preserves component state during development when editing code.",
  },
  {
    id: 101,
    question: "How does Fast Refresh work?",
    answer:
      "Fast Refresh patches components in place, preserving state and avoiding full re-mounts.",
  },
  {
    id: 102,
    question: "What is the React Compiler?",
    answer:
      "React Compiler is an experimental compiler that automatically optimizes React code.",
  },
  {
    id: 103,
    question: "How do you optimize bundle size in React apps?",
    answer:
      "Use code splitting, tree shaking, dynamic imports, and analyze bundles with webpack-bundle-analyzer.",
  },
  {
    id: 104,
    question: "What is tree shaking?",
    answer:
      "Tree shaking removes unused code from bundles during build process.",
  },
  {
    id: 105,
    question: "How do you implement code splitting in webpack?",
    answer:
      "Use dynamic imports with import() syntax and split chunks in webpack configuration.",
  },
  {
    id: 106,
    question: "What is the React Profiler API?",
    answer:
      "Profiler API allows measuring rendering performance programmatically.",
  },
  {
    id: 107,
    question: "How do you use the Profiler component?",
    answer:
      "Wrap components with <Profiler> and provide onRender callback for performance data.",
  },
  {
    id: 108,
    question: "What is the useMemo hook for performance?",
    answer:
      "useMemo memoizes expensive computations to avoid recalculating on every render.",
  },
  {
    id: 109,
    question: "What is the useCallback hook for performance?",
    answer:
      "useCallback memoizes function references to prevent unnecessary re-renders of child components.",
  },
  {
    id: 110,
    question: "How do you optimize context re-renders?",
    answer:
      "Split contexts, use useMemo for context values, and memoize context consumers.",
  },
  {
    id: 111,
    question: "What is React.memo and when to use it?",
    answer:
      "React.memo prevents re-rendering when props haven't changed, useful for expensive components.",
  },
  {
    id: 112,
    question: "How do you implement custom comparison in React.memo?",
    answer:
      "Pass a custom comparison function as second argument to React.memo.",
  },
  {
    id: 113,
    question: "What is the difference between React.memo and useMemo?",
    answer:
      "React.memo memoizes components, useMemo memoizes values within components.",
  },
  {
    id: 114,
    question: "How do you handle large lists in React?",
    answer:
      "Use virtualization with libraries like react-window or react-virtualized.",
  },
  {
    id: 115,
    question: "What is windowing in React?",
    answer:
      "Windowing renders only visible items in large lists, improving performance.",
  },
  {
    id: 116,
    question: "How do you implement virtual scrolling?",
    answer:
      "Calculate visible range based on scroll position and render only those items.",
  },
  {
    id: 117,
    question: "What is React's reconciliation algorithm?",
    answer:
      "React's algorithm determines what changes are needed when component state changes.",
  },
  {
    id: 118,
    question: "What is the role of keys in reconciliation?",
    answer:
      "Keys help React identify which items have changed, been added, or removed.",
  },
  {
    id: 119,
    question: "How does React handle component updates?",
    answer:
      "React compares virtual DOM with previous version and updates only changed parts.",
  },
  {
    id: 120,
    question: "What is the Fiber architecture?",
    answer:
      "Fiber is React's new reconciliation engine that enables incremental rendering and better performance.",
  },
  {
    id: 121,
    question: "What are the phases of Fiber?",
    answer:
      "Render phase (reconciles) and Commit phase (applies changes to DOM).",
  },
  {
    id: 122,
    question: "How does Concurrent Mode work internally?",
    answer:
      "Concurrent Mode uses cooperative scheduling to interrupt and resume rendering work.",
  },
  {
    id: 123,
    question: "What is time slicing in React?",
    answer:
      "Time slicing allows breaking rendering work into chunks over multiple frames.",
  },
  {
    id: 124,
    question: "How do you handle memory leaks in React?",
    answer:
      "Clean up subscriptions, timers, and event listeners in useEffect cleanup functions.",
  },
  {
    id: 125,
    question: "What is the StrictMode component?",
    answer:
      "StrictMode highlights potential problems in development by running effects twice.",
  },
  {
    id: 126,
    question: "How do you debug React applications?",
    answer:
      "Use React DevTools, console logging, debugger statements, and performance profiling.",
  },
  {
    id: 127,
    question: "What is the React DevTools Profiler?",
    answer:
      "Profiler tab in DevTools allows recording and analyzing component rendering performance.",
  },
  {
    id: 128,
    question: "How do you identify wasted renders?",
    answer:
      "Use Profiler to see components that render without prop/state changes.",
  },
  {
    id: 129,
    question: "What is the Components tab in React DevTools?",
    answer:
      "Components tab shows component tree, props, state, and allows inspecting component hierarchy.",
  },
  {
    id: 130,
    question: "How do you inspect hooks in React DevTools?",
    answer:
      "Use Components tab to see hooks state and navigate through component tree.",
  },
  {
    id: 131,
    question: "What is error boundary debugging?",
    answer:
      "Error boundaries catch errors and display fallback UI, helping identify crash locations.",
  },
  {
    id: 132,
    question: "How do you handle runtime errors in production?",
    answer:
      "Use error boundaries, error reporting services like Sentry, and proper logging.",
  },
  {
    id: 133,
    question: "What is TypeScript and why use it with React?",
    answer:
      "TypeScript adds static typing to JavaScript, catching errors at compile time and improving developer experience.",
  },
  {
    id: 134,
    question: "How do you type React components in TypeScript?",
    answer:
      "Use React.FC for function components, define prop interfaces, and use generics for hooks.",
  },
  {
    id: 135,
    question: "What is the React.FC type?",
    answer:
      "React.FC is a generic type for function components that includes children prop.",
  },
  {
    id: 136,
    question: "How do you type event handlers in TypeScript?",
    answer:
      "Use React event types like React.MouseEvent<HTMLButtonElement> for proper typing.",
  },
  {
    id: 137,
    question: "How do you type useState in TypeScript?",
    answer:
      "Type the initial value or use generic: useState<string>('') or const [state, setState] = useState('').",
  },
  {
    id: 138,
    question: "What is the useRef type in TypeScript?",
    answer:
      "useRef<T>(initialValue) where T is the type of the referenced value.",
  },
  {
    id: 139,
    question: "How do you type custom hooks in TypeScript?",
    answer:
      "Define return type explicitly or let TypeScript infer from implementation.",
  },
  {
    id: 140,
    question: "What is GraphQL?",
    answer:
      "GraphQL is a query language for APIs that allows clients to request exactly the data they need.",
  },
  {
    id: 141,
    question: "How does GraphQL differ from REST?",
    answer:
      "GraphQL uses single endpoint with flexible queries, REST uses multiple endpoints with fixed responses.",
  },
  {
    id: 142,
    question: "What is Apollo Client?",
    answer:
      "Apollo Client is a comprehensive state management library for GraphQL, providing caching and data management.",
  },
  {
    id: 143,
    question: "How do you set up Apollo Client?",
    answer:
      "Create ApolloClient instance with URI, wrap app with ApolloProvider.",
  },
  {
    id: 144,
    question: "What is the useQuery hook?",
    answer:
      "useQuery executes GraphQL queries and manages loading, error, and data states.",
  },
  {
    id: 145,
    question: "What is the useMutation hook?",
    answer: "useMutation executes GraphQL mutations for data modifications.",
  },
  {
    id: 146,
    question: "How do you handle caching in Apollo Client?",
    answer:
      "Apollo Client automatically caches query results and provides cache management APIs.",
  },
  {
    id: 147,
    question: "What is Apollo Client's cache normalization?",
    answer:
      "Cache normalization stores data by type and ID, enabling efficient updates and cache consistency.",
  },
  {
    id: 148,
    question: "How do you update cache after mutations?",
    answer:
      "Use cache.modify(), cache.writeQuery(), or refetchQueries to update cache.",
  },
  {
    id: 149,
    question: "What is Apollo Link?",
    answer:
      "Apollo Link is a modular network layer for Apollo Client, allowing custom request handling.",
  },
  {
    id: 150,
    question: "How do you handle authentication with Apollo Client?",
    answer:
      "Use Apollo Link with auth link to add authorization headers to requests.",
  },
  {
    id: 151,
    question: "What is Relay?",
    answer:
      "Relay is a framework for building data-driven React applications with GraphQL.",
  },
  {
    id: 152,
    question: "How does Relay differ from Apollo Client?",
    answer:
      "Relay provides more opinionated patterns, better performance optimizations, and stronger typing.",
  },
  {
    id: 153,
    question: "What is micro-frontend architecture?",
    answer:
      "Micro-frontends decompose frontend monolith into smaller, independently deployable applications.",
  },
  {
    id: 154,
    question: "How do you implement micro-frontends with React?",
    answer:
      "Use module federation with webpack 5, iframe composition, or build-time integration.",
  },
  {
    id: 155,
    question: "What is webpack Module Federation?",
    answer:
      "Module Federation allows sharing code between different webpack builds at runtime.",
  },
  {
    id: 156,
    question: "How do you set up Module Federation?",
    answer:
      "Configure ModuleFederationPlugin in webpack config with exposes, remotes, and shared dependencies.",
  },
  {
    id: 157,
    question: "What is WebAssembly (WASM)?",
    answer:
      "WebAssembly is a binary instruction format that allows running high-performance code in browsers.",
  },
  {
    id: 158,
    question: "How can WebAssembly be used with React?",
    answer:
      "Use WASM for computationally intensive tasks like image processing or cryptography in React apps.",
  },
  {
    id: 159,
    question: "What is the security considerations in React apps?",
    answer:
      "Prevent XSS with proper sanitization, use HTTPS, implement proper authentication, avoid direct DOM manipulation.",
  },
  {
    id: 160,
    question: "How do you prevent XSS attacks in React?",
    answer:
      "React automatically escapes content, but be careful with dangerouslySetInnerHTML and validate user input.",
  },
  {
    id: 161,
    question: "What is Content Security Policy (CSP)?",
    answer:
      "CSP is a security standard that helps prevent XSS and other code injection attacks.",
  },
  {
    id: 162,
    question: "How do you implement CSP in React apps?",
    answer:
      "Set CSP headers on server, use nonce for inline scripts, and avoid eval() and inline event handlers.",
  },
  {
    id: 163,
    question: "What is JWT and how is it used in React?",
    answer:
      "JWT is a compact token format for securely transmitting information. Used for authentication in React apps.",
  },
  {
    id: 164,
    question: "How do you handle JWT token refresh?",
    answer:
      "Use HTTP interceptors to automatically refresh expired tokens before making requests.",
  },
  {
    id: 165,
    question: "What is OAuth and how does it work?",
    answer:
      "OAuth is an authorization framework that allows third-party access to resources without sharing credentials.",
  },
  {
    id: 166,
    question: "How do you implement OAuth in React?",
    answer:
      "Use OAuth libraries like react-oauth2 or implement authorization code flow with redirects.",
  },
  {
    id: 167,
    question: "What is Progressive Web App (PWA)?",
    answer:
      "PWAs are web apps that can be installed on devices and work offline, providing native app-like experiences.",
  },
  {
    id: 168,
    question: "How do you make a React app a PWA?",
    answer:
      "Implement service workers for caching, add web app manifest, ensure HTTPS, and handle offline functionality.",
  },
  {
    id: 169,
    question: "What is a service worker?",
    answer:
      "Service worker is a script that runs in background, enabling offline functionality and background sync.",
  },
  {
    id: 170,
    question: "How do you register a service worker in React?",
    answer:
      "Use navigator.serviceWorker.register() in component or create custom hook for registration.",
  },
  {
    id: 171,
    question: "What is the Cache API?",
    answer:
      "Cache API allows storing request/response pairs for offline access and performance.",
  },
  {
    id: 172,
    question: "How do you implement caching strategies?",
    answer:
      "Use cache-first, network-first, or stale-while-revalidate strategies based on app needs.",
  },
  {
    id: 173,
    question: "What is the Web App Manifest?",
    answer:
      "Manifest is a JSON file that defines how PWA appears when installed on device.",
  },
  {
    id: 174,
    question: "How do you handle push notifications in PWAs?",
    answer:
      "Use Push API and Notification API with service workers to handle push messages.",
  },
  {
    id: 175,
    question: "What is React Native?",
    answer:
      "React Native is a framework for building native mobile apps using React and JavaScript.",
  },
  {
    id: 176,
    question: "How does React Native differ from React?",
    answer:
      "React Native uses native components instead of web components and renders to mobile platforms.",
  },
  {
    id: 177,
    question: "What is the React Native bridge?",
    answer:
      "Bridge is the communication layer between JavaScript thread and native threads in React Native.",
  },
  {
    id: 178,
    question: "How do you handle platform-specific code in React Native?",
    answer:
      "Use Platform module, file extensions (.ios.js/.android.js), or conditional rendering.",
  },
  {
    id: 179,
    question: "What is Expo in React Native?",
    answer:
      "Expo is a platform for building React Native apps with pre-configured tools and services.",
  },
  {
    id: 180,
    question: "How do you navigate in React Native?",
    answer:
      "Use React Navigation library with Stack, Tab, and Drawer navigators.",
  },
  {
    id: 181,
    question: "What is React Navigation?",
    answer:
      "React Navigation is a routing and navigation library for React Native apps.",
  },
  {
    id: 182,
    question: "How do you handle state in React Native?",
    answer:
      "Use React hooks (useState, useReducer) or state management libraries like Redux or Context API.",
  },
  {
    id: 183,
    question: "What is the difference between React Native and Flutter?",
    answer:
      "React Native uses JavaScript/React, Flutter uses Dart. React Native has larger ecosystem, Flutter has better performance.",
  },
  {
    id: 184,
    question: "How do you optimize React Native performance?",
    answer:
      "Use FlatList with optimizations, avoid unnecessary renders, optimize images, and use Hermes engine.",
  },
  {
    id: 185,
    question: "What is Hermes engine?",
    answer:
      "Hermes is a JavaScript engine optimized for React Native, providing faster startup and smaller app size.",
  },
  {
    id: 186,
    question: "How do you handle gestures in React Native?",
    answer:
      "Use PanGestureHandler from react-native-gesture-handler or built-in touchable components.",
  },
  {
    id: 187,
    question: "What is the React Native Reanimated library?",
    answer:
      "Reanimated is a library for creating smooth animations and interactions in React Native.",
  },
  {
    id: 188,
    question: "How do you handle async storage in React Native?",
    answer:
      "Use AsyncStorage for key-value storage or SQLite for more complex data storage.",
  },
  {
    id: 189,
    question: "What is the React Native CLI?",
    answer:
      "React Native CLI is a command-line tool for creating and managing React Native projects.",
  },
  {
    id: 190,
    question: "How do you debug React Native apps?",
    answer:
      "Use Flipper, React Native Debugger, or Chrome DevTools for debugging React Native applications.",
  },
  {
    id: 191,
    question: "What is Flipper?",
    answer:
      "Flipper is a platform for debugging mobile apps, providing plugins for React Native debugging.",
  },
  {
    id: 192,
    question: "How do you test React Native components?",
    answer:
      "Use Jest for unit tests and Detox for end-to-end testing of React Native apps.",
  },
  {
    id: 193,
    question: "What is Detox?",
    answer:
      "Detox is an end-to-end testing framework for React Native apps that runs on real devices.",
  },
  {
    id: 194,
    question: "How do you deploy React Native apps?",
    answer:
      "Use fastlane for iOS, Gradle for Android, or services like CodePush for over-the-air updates.",
  },
  {
    id: 195,
    question: "What is CodePush?",
    answer:
      "CodePush is a service for deploying mobile app updates directly to users' devices.",
  },
  {
    id: 196,
    question: "How do you handle deep linking in React Native?",
    answer:
      "Use React Navigation's linking configuration or libraries like react-native-deep-linking.",
  },
  {
    id: 197,
    question: "What is the React Native Paper library?",
    answer:
      "React Native Paper is a material design component library for React Native.",
  },
  {
    id: 198,
    question: "How do you handle theming in React Native?",
    answer:
      "Use Context API for theme state or libraries like styled-components for theme management.",
  },
  {
    id: 199,
    question: "What is the future of React Native?",
    answer:
      "React Native is moving towards better performance, new architecture (Fabric), and improved developer experience.",
  },
  {
    id: 200,
    question: "What is the new React Native architecture?",
    answer:
      "New architecture (Fabric) uses JSI for direct JavaScript-native communication, improving performance.",
  },
  {
    id: 201,
    question: "How would you debug a sudden production outage in a React app?",
    answer:
      "Check error monitoring tools (e.g., Sentry), review recent deployments, analyze logs, reproduce issue locally, and use React DevTools Profiler to identify performance bottlenecks.",
  },
  {
    id: 202,
    question: "How do you handle a memory leak in a React application?",
    answer:
      "Identify leaks using profiling tools, ensure cleanup of subscriptions and timers in useEffect cleanup, avoid unnecessary re-renders, and optimize component unmounting.",
  },
  {
    id: 203,
    question: "What steps would you take if a React component is rendering slowly?",
    answer:
      "Use React Profiler to identify slow components, memoize components with React.memo, optimize expensive calculations with useMemo, and avoid unnecessary state updates.",
  },
  {
    id: 204,
    question: "How would you handle a situation where a React app is not SEO friendly?",
    answer:
      "Implement server-side rendering (SSR) with frameworks like Next.js, use prerendering, and ensure proper meta tags and structured data are included.",
  },
  {
    id: 205,
    question: "How do you debug hydration mismatches in SSR React apps?",
    answer:
      "Compare server and client rendered HTML, check for non-deterministic rendering, use suppressHydrationWarning for intentional differences, and ensure consistent data fetching.",
  },
  {
    id: 206,
    question: "What would you do if a React app's bundle size is too large?",
    answer:
      "Analyze bundle with tools like webpack-bundle-analyzer, implement code splitting and lazy loading, remove unused dependencies, and optimize images and assets.",
  },
  {
    id: 207,
    question: "How do you handle race conditions in React API calls?",
    answer:
      "Use abort controllers to cancel outdated requests, manage state updates carefully, and use libraries like React Query or SWR that handle race conditions.",
  },
  {
    id: 208,
    question: "How would you approach migrating a large React class component codebase to hooks?",
    answer:
      "Incrementally refactor components, start with simple ones, ensure tests cover functionality, and replace lifecycle methods with appropriate hooks.",
  },
  {
    id: 209,
    question: "What would you do if a React app's state management becomes too complex?",
    answer:
      "Evaluate state management needs, consider using Redux, MobX, or Context API with useReducer, and split state into smaller, manageable slices.",
  },
  {
    id: 210,
    question: "How do you handle accessibility issues found in a React app?",
    answer:
      "Use tools like axe-core to identify issues, fix semantic HTML, add ARIA attributes, ensure keyboard navigation, and test with screen readers.",
  },
  {
    id: 211,
    question: "How would you debug a React app that crashes on certain user interactions?",
    answer:
      "Reproduce the issue, check error boundaries, review console errors, use React DevTools to inspect component state, and add logging to isolate the problem.",
  },
  {
    id: 212,
    question: "What steps would you take if a React app's performance degrades after adding a new feature?",
    answer:
      "Profile the app to identify bottlenecks, optimize new feature code, memoize components, and consider code splitting or lazy loading.",
  },
  {
    id: 213,
    question: "How do you handle form validation errors in React?",
    answer:
      "Use controlled components, validate inputs on change or submit, display error messages, and consider libraries like Formik or React Hook Form.",
  },
  {
    id: 214,
    question: "How would you debug a React app that works in development but fails in production?",
    answer:
      "Check production build logs, verify environment variables, test minified code, and use source maps to trace errors.",
  },
  {
    id: 215,
    question: "What would you do if a React app's third-party library causes performance issues?",
    answer:
      "Profile to confirm, consider replacing with lighter alternatives, lazy load the library, or isolate its usage to minimize impact.",
  },
  {
    id: 216,
    question: "How do you handle internationalization bugs in a React app?",
    answer:
      "Verify translation files, check locale detection logic, test with different locales, and use i18n debugging tools.",
  },
  {
    id: 217,
    question: "How would you approach debugging a React app with intermittent network failures?",
    answer:
      "Implement retry logic, use offline support with service workers, log network errors, and provide user feedback for connectivity issues.",
  },
  {
    id: 218,
    question: "What steps would you take if a React app's CSS is not applying correctly?",
    answer:
      "Check CSS specificity, ensure styles are imported correctly, verify CSS modules or styled-components usage, and inspect elements in browser DevTools.",
  },
  {
    id: 219,
    question: "How do you handle state synchronization issues between React components?",
    answer:
      "Lift state up to common ancestor, use Context API or state management libraries, and ensure unidirectional data flow.",
  },
  {
    id: 220,
    question: "How would you debug a React app that has memory leaks?",
    answer:
      "Use browser profiling tools, check for uncleaned subscriptions or timers, and ensure proper cleanup in useEffect hooks.",
  },
];

// Make data available globally
window.advanced = advanced;
