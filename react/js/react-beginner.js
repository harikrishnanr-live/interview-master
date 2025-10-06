// React Beginner Level Q&A Data

let beginner = [
  {
    id: 1,
    question: "What is React?",
    answer:
      "React is a JavaScript library for building user interfaces, particularly web applications.",
  },
  {
    id: 2,
    question: "What is JSX?",
    answer:
      "JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files.",
  },
  {
    id: 3,
    question: "What are React components?",
    answer:
      "Components are the building blocks of any React application. They are reusable pieces of code that return JSX.",
  },
  {
    id: 4,
    question: "What is state in React?",
    answer:
      "State is a built-in object that stores data about the component that can change over time.",
  },
  {
    id: 5,
    question: "What are props in React?",
    answer:
      "Props (short for properties) are how you pass data from one component to another.",
  },
  {
    id: 6,
    question: "How do you handle events in React?",
    answer:
      "Events in React are handled using camelCase syntax, like onClick, onChange, etc. You pass a function as the event handler.",
  },
  {
    id: 7,
    question: "What is the difference between controlled and uncontrolled components?",
    answer:
      "Controlled components have their value controlled by React state, while uncontrolled components maintain their own internal state.",
  },
  {
    id: 8,
    question: "How do you conditionally render elements in React?",
    answer:
      "You can use conditional rendering with if statements, ternary operators, or logical && operator in JSX.",
  },
  {
    id: 9,
    question: "What are keys in React and why are they important?",
    answer:
      "Keys are special attributes that help React identify which items have changed, been added, or removed in lists.",
  },
  {
    id: 10,
    question: "How do you pass data from child to parent component?",
    answer:
      "You pass a function as a prop from parent to child, and the child calls that function with the data.",
  },
  {
    id: 11,
    question: "What is the purpose of the useState hook?",
    answer:
      "useState allows functional components to have state variables that persist between renders.",
  },
  {
    id: 12,
    question: "How do you update state in React?",
    answer:
      "You use the setter function returned by useState, and React will re-render the component with the new state.",
  },
  {
    id: 13,
    question: "What happens when you call setState?",
    answer:
      "setState schedules a re-render of the component and its children with the updated state.",
  },
  {
    id: 14,
    question: "Can you have multiple useState hooks in one component?",
    answer:
      "Yes, you can have as many useState hooks as you need in a single component.",
  },
  {
    id: 15,
    question: "What is the virtual DOM in React?",
    answer:
      "The virtual DOM is a lightweight representation of the actual DOM that React uses to optimize rendering.",
  },
  {
    id: 16,
    question: "Why is the virtual DOM faster than direct DOM manipulation?",
    answer:
      "React can batch updates and only update the parts of the DOM that actually changed, rather than re-rendering everything.",
  },
  {
    id: 17,
    question: "What are React fragments?",
    answer:
      "Fragments let you group multiple elements without adding extra nodes to the DOM.",
  },
  {
    id: 18,
    question: "How do you create a React component?",
    answer:
      "You can create components as functions or classes. Functional components are preferred in modern React.",
  },
  {
    id: 19,
    question: "What is prop drilling and how can you avoid it?",
    answer:
      "Prop drilling is passing props through multiple levels. You can avoid it using Context API or state management libraries.",
  },
  {
    id: 20,
    question: "How do you handle forms in React?",
    answer:
      "You can handle forms using controlled components where form data is managed by React state.",
  },
  {
    id: 21,
    question: "What is the difference between props and state?",
    answer:
      "Props are passed from parent components and are read-only, while state is managed within the component and can be changed.",
  },
  {
    id: 22,
    question: "How do you render a list of items in React?",
    answer:
      "You use the map() function to iterate over an array and return JSX elements, providing a unique key for each item.",
  },
  {
    id: 23,
    question: "What are default props in React?",
    answer:
      "Default props allow you to set default values for props that aren't passed by the parent component.",
  },
  {
    id: 24,
    question: "How do you validate props in React?",
    answer:
      "You can use PropTypes to validate the type and presence of props passed to components.",
  },
  {
    id: 25,
    question: "What is the component lifecycle in class components?",
    answer:
      "Class components have lifecycle methods like constructor, componentDidMount, componentDidUpdate, and componentWillUnmount.",
  },
  {
    id: 26,
    question: "How do you make an API call in a React component?",
    answer:
      "You typically make API calls in useEffect hook for functional components or componentDidMount for class components.",
  },
  {
    id: 27,
    question: "What is the purpose of useEffect hook?",
    answer:
      "useEffect allows you to perform side effects like API calls, subscriptions, or DOM manipulations in functional components.",
  },
  {
    id: 28,
    question: "How do you clean up in useEffect?",
    answer:
      "You return a cleanup function from useEffect that will be called when the component unmounts or before the effect runs again.",
  },
  {
    id: 29,
    question: "What are refs in React?",
    answer:
      "Refs provide a way to access DOM nodes or React elements created in the render method.",
  },
  {
    id: 30,
    question: "When should you use refs?",
    answer:
      "Use refs for accessing DOM elements directly, managing focus, or integrating with third-party DOM libraries.",
  },
  {
    id: 31,
    question: "How do you create a ref in functional components?",
    answer:
      "You use the useRef hook to create refs in functional components.",
  },
  {
    id: 32,
    question: "What is the difference between useRef and createRef?",
    answer:
      "useRef is for functional components and persists across re-renders, while createRef creates a new ref on every render.",
  },
  {
    id: 33,
    question: "How do you style React components?",
    answer:
      "You can style React components using CSS classes, inline styles, CSS modules, or styled-components library.",
  },
  {
    id: 34,
    question: "What are CSS modules in React?",
    answer:
      "CSS modules allow you to write CSS that's scoped locally to a component, avoiding global CSS conflicts.",
  },
  {
    id: 35,
    question: "How do you handle errors in React?",
    answer:
      "You can use error boundaries to catch JavaScript errors anywhere in the component tree and display fallback UI.",
  },
  {
    id: 36,
    question: "What is an error boundary?",
    answer:
      "Error boundaries are React components that catch JavaScript errors in their child component tree and display a fallback UI.",
  },
  {
    id: 37,
    question: "How do you create an error boundary?",
    answer:
      "You create a class component that implements componentDidCatch lifecycle method or use the ErrorBoundary component from react-error-boundary.",
  },
  {
    id: 38,
    question: "What is React.StrictMode?",
    answer:
      "StrictMode is a development tool that highlights potential problems in your application.",
  },
  {
    id: 39,
    question: "How do you optimize React performance?",
    answer:
      "You can optimize by using React.memo, useMemo, useCallback, avoiding unnecessary re-renders, and code splitting.",
  },
  {
    id: 40,
    question: "What is React.memo?",
    answer:
      "React.memo is a higher-order component that memoizes functional components to prevent unnecessary re-renders.",
  },
  {
    id: 41,
    question: "When should you use React.memo?",
    answer:
      "Use React.memo when a component re-renders too often with the same props, and the re-render is expensive.",
  },
  {
    id: 42,
    question: "What is the difference between useMemo and useCallback?",
    answer:
      "useMemo memoizes values, while useCallback memoizes functions. Both help prevent unnecessary re-computations.",
  },
  {
    id: 43,
    question: "How do you handle side effects in class components?",
    answer:
      "In class components, you handle side effects in lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount.",
  },
  {
    id: 44,
    question: "What is the purpose of componentDidMount?",
    answer:
      "componentDidMount is called after the component is rendered to the DOM, perfect for API calls or subscriptions.",
  },
  {
    id: 45,
    question: "What is componentWillUnmount used for?",
    answer:
      "componentWillUnmount is called before the component is removed from the DOM, used for cleanup like canceling subscriptions.",
  },
  {
    id: 46,
    question: "How do you pass children to a component?",
    answer:
      "You can pass children using the children prop, which contains the content between opening and closing tags.",
  },
  {
    id: 47,
    question: "What are portals in React?",
    answer:
      "Portals allow you to render children into a DOM node that exists outside the parent component's DOM hierarchy.",
  },
  {
    id: 48,
    question: "When would you use React portals?",
    answer:
      "Use portals for modals, tooltips, or any UI that needs to break out of the normal component hierarchy.",
  },
  {
    id: 49,
    question: "How do you create a portal?",
    answer:
      "You use ReactDOM.createPortal(child, container) to render the child into a different DOM node.",
  },
  {
    id: 50,
    question: "What is the difference between React and ReactDOM?",
    answer:
      "React contains the core functionality for creating components, while ReactDOM handles rendering React components to the DOM.",
  },
  {
    id: 51,
    question: "How do you handle accessibility in React?",
    answer:
      "Use semantic HTML, ARIA attributes, and ensure keyboard navigation works properly.",
  },
  {
    id: 52,
    question: "What are ARIA attributes?",
    answer:
      "ARIA (Accessible Rich Internet Applications) attributes provide additional information to assistive technologies.",
  },
  {
    id: 53,
    question: "How do you make a component focusable?",
    answer:
      "You can make elements focusable by adding a tabIndex attribute or using semantic elements like button and input.",
  },
  {
    id: 54,
    question: "What is the purpose of the key prop in lists?",
    answer:
      "The key prop helps React identify which items have changed, are added, or are removed, improving rendering performance.",
  },
  {
    id: 55,
    question: "How do you handle asynchronous operations in React?",
    answer:
      "Use async/await with useEffect for API calls, or libraries like Redux Saga for complex async flows.",
  },
  {
    id: 56,
    question: "What is JSX and why is it useful?",
    answer:
      "JSX is a syntax extension that allows writing HTML-like code in JavaScript, making component creation more intuitive and readable.",
  },
  {
    id: 57,
    question: "How do you embed JavaScript expressions in JSX?",
    answer:
      "Use curly braces {} to embed JavaScript expressions like variables, function calls, or calculations within JSX.",
  },
  {
    id: 58,
    question: "What are JSX attributes and how do they work?",
    answer:
      "JSX attributes are similar to HTML attributes but use camelCase naming and can accept JavaScript expressions.",
  },
  {
    id: 59,
    question: "How do you render nothing in JSX?",
    answer:
      "Return null or false from a component to render nothing, or use conditional rendering to avoid rendering.",
  },
  {
    id: 60,
    question: "What is component composition in React?",
    answer:
      "Component composition is the practice of combining smaller components to build more complex UIs, promoting reusability.",
  },
  {
    id: 61,
    question: "How do you create reusable components?",
    answer:
      "Design components to accept props for customization, keep them focused on single responsibilities, and make them generic.",
  },
  {
    id: 62,
    question: "What are presentational and container components?",
    answer:
      "Presentational components focus on UI, container components handle logic and data fetching.",
  },
  {
    id: 63,
    question: "How do you handle multiple event handlers in React?",
    answer:
      "You can define separate functions for each event or use arrow functions inline, but prefer separate functions for complex logic.",
  },
  {
    id: 64,
    question: "What is event pooling in React?",
    answer:
      "Event pooling was a performance optimization where event objects were reused, but it's been removed in React 17+.",
  },
  {
    id: 65,
    question: "How do you prevent default behavior in React events?",
    answer:
      "Call event.preventDefault() in your event handler to prevent the default browser behavior.",
  },
  {
    id: 66,
    question: "What is the difference between onClick and onClickCapture?",
    answer:
      "onClickCapture uses event capturing phase, while onClick uses bubbling phase. Capturing happens before bubbling.",
  },
  {
    id: 67,
    question: "How do you handle form submission in React?",
    answer:
      "Use onSubmit on the form element and call event.preventDefault() to handle submission with JavaScript.",
  },
  {
    id: 68,
    question: "What are controlled inputs in forms?",
    answer:
      "Controlled inputs have their value controlled by React state, providing full control over form data.",
  },
  {
    id: 69,
    question: "How do you handle multiple form inputs efficiently?",
    answer:
      "Use a single state object with computed property names or libraries like Formik for complex forms.",
  },
  {
    id: 70,
    question: "What is the key prop and why is it important in lists?",
    answer:
      "The key prop helps React identify which items have changed, improving rendering performance and preventing bugs.",
  },
  {
    id: 71,
    question: "How do you render conditional content in lists?",
    answer:
      "Use filter() to conditionally include items, or use conditional rendering within the map function.",
  },
  {
    id: 72,
    question: "What are the different ways to apply conditional rendering?",
    answer:
      "Use if statements, ternary operators, logical && operator, or switch statements for conditional rendering.",
  },
  {
    id: 73,
    question: "How do you handle loading states in React?",
    answer:
      "Use state to track loading status and conditionally render loading indicators or actual content.",
  },
  {
    id: 74,
    question: "What is prop spreading and when should you use it?",
    answer:
      "Prop spreading uses ... to pass all props at once. Use it for passing unrelated props to child components.",
  },
  {
    id: 75,
    question: "How do you set default values for props?",
    answer:
      "Use defaultProps on the component or default parameters in functional components.",
  },
  {
    id: 76,
    question: "What is children prop in React?",
    answer:
      "The children prop contains the content between opening and closing component tags.",
  },
  {
    id: 77,
    question: "How do you access component instances in functional components?",
    answer:
      "Use useRef to create refs and forwardRef to pass refs to child components.",
  },
  {
    id: 78,
    question: "What is the difference between useRef and regular variables?",
    answer:
      "useRef persists across re-renders without causing re-renders, while regular variables reset on each render.",
  },
  {
    id: 79,
    question: "How do you focus an input element in React?",
    answer:
      "Create a ref with useRef, attach it to the input, and call ref.current.focus() when needed.",
  },
  {
    id: 80,
    question: "What are inline styles in React?",
    answer:
      "Inline styles are JavaScript objects passed to the style prop, with camelCase CSS properties.",
  },
  {
    id: 81,
    question: "How do you apply CSS classes conditionally?",
    answer:
      "Use template literals, classnames library, or clsx for conditional class application.",
  },
  {
    id: 82,
    question: "What is CSS-in-JS and how does it work?",
    answer:
      "CSS-in-JS allows writing CSS in JavaScript, providing scoped styles and dynamic styling capabilities.",
  },
  {
    id: 83,
    question: "How do you handle CSS modules in React?",
    answer:
      "Import CSS files as modules, and use the imported object to access class names.",
  },
  {
    id: 84,
    question: "What are error boundaries and how do you implement them?",
    answer:
      "Error boundaries catch JavaScript errors in the component tree. Implement componentDidCatch in class components.",
  },
  {
    id: 85,
    question: "How do you create error boundaries for functional components?",
    answer:
      "Use error boundary libraries or create wrapper components that use the error boundary pattern.",
  },
  {
    id: 86,
    question: "What is React.StrictMode?",
    answer:
      "StrictMode highlights potential problems in development by running effects twice and checking for deprecated features.",
  },
  {
    id: 87,
    question: "How do you optimize component re-renders?",
    answer:
      "Use React.memo, useMemo, useCallback, and avoid creating new objects/functions in render.",
  },
  {
    id: 88,
    question: "What is the purpose of React.memo?",
    answer:
      "React.memo prevents re-rendering when props haven't changed, similar to PureComponent for functional components.",
  },
  {
    id: 89,
    question: "How do you compare objects as props for memoization?",
    answer:
      "Use custom comparison functions with React.memo or move objects outside components when possible.",
  },
  {
    id: 90,
    question: "What is the useCallback hook used for?",
    answer:
      "useCallback memoizes functions to prevent unnecessary re-renders of child components that depend on function props.",
  },
  {
    id: 91,
    question: "What is the useMemo hook used for?",
    answer:
      "useMemo memoizes expensive computations to avoid recalculating them on every render.",
  },
  {
    id: 92,
    question: "How do you handle component unmounting in useEffect?",
    answer:
      "Return a cleanup function from useEffect that will run when the component unmounts.",
  },
  {
    id: 93,
    question: "What is the dependency array in useEffect?",
    answer:
      "The dependency array tells React when to re-run the effect based on changes to specified values.",
  },
  {
    id: 94,
    question: "How do you run useEffect only once?",
    answer:
      "Pass an empty dependency array [] to run the effect only on mount and cleanup on unmount.",
  },
  {
    id: 95,
    question: "What happens if you omit the dependency array in useEffect?",
    answer:
      "The effect runs after every render, which can cause performance issues or infinite loops.",
  },
  {
    id: 96,
    question: "How do you handle accessibility in React components?",
    answer:
      "Use semantic HTML, ARIA attributes, keyboard navigation, and screen reader friendly markup.",
  },
  {
    id: 97,
    question: "What are ARIA roles and how are they used?",
    answer:
      "ARIA roles define the type of UI element, helping assistive technologies understand the interface.",
  },
  {
    id: 98,
    question: "How do you make React apps keyboard accessible?",
    answer:
      "Handle keyboard events, provide focus management, and ensure all interactive elements are keyboard accessible.",
  },
  {
    id: 99,
    question: "What is the importance of semantic HTML in React?",
    answer:
      "Semantic HTML provides meaning to content, improving accessibility and SEO.",
  },
  {
    id: 100,
    question: "How do you handle focus management in React?",
    answer:
      "Use refs to programmatically focus elements, manage tab order, and handle focus trapping in modals.",
  },
  {
    id: 101,
    question: "What are React Fragments and when to use them?",
    answer:
      "Fragments group multiple elements without adding DOM nodes. Use them when you need to return multiple elements.",
  },
  {
    id: 102,
    question: "How do you create short syntax for Fragments?",
    answer:
      "Use <>...</> instead of <React.Fragment>...</> for cleaner JSX.",
  },
  {
    id: 103,
    question: "What is prop validation in React?",
    answer:
      "Prop validation ensures components receive correct prop types using PropTypes or TypeScript.",
  },
  {
    id: 104,
    question: "How do you use PropTypes for validation?",
    answer:
      "Import PropTypes and define propTypes object on the component with validation rules.",
  },
  {
    id: 105,
    question: "What are the benefits of using PropTypes?",
    answer:
      "PropTypes catch bugs by validating prop types and providing helpful error messages in development.",
  },
  {
    id: 106,
    question: "How do you handle default props in class components?",
    answer:
      "Set defaultProps as a static property on the class component.",
  },
  {
    id: 107,
    question: "What is the render method in class components?",
    answer:
      "The render method returns the JSX that should be rendered for the component.",
  },
  {
    id: 108,
    question: "How do you initialize state in class components?",
    answer:
      "Initialize state in the constructor with this.state = { ... } or use class field syntax.",
  },
  {
    id: 109,
    question: "What is the difference between state and props in class components?",
    answer:
      "State is managed internally, props are passed from parent. State can be changed with setState, props are read-only.",
  },
  {
    id: 110,
    question: "How do you bind event handlers in class components?",
    answer:
      "Bind in constructor with this.handler = this.handler.bind(this) or use arrow functions.",
  },
  {
    id: 111,
    question: "What are lifecycle methods in class components?",
    answer:
      "Methods like componentDidMount, componentDidUpdate, componentWillUnmount that run at specific points in component lifecycle.",
  },
  {
    id: 112,
    question: "When does componentDidMount execute?",
    answer:
      "componentDidMount executes once after the component is mounted to the DOM.",
  },
  {
    id: 113,
    question: "When does componentDidUpdate execute?",
    answer:
      "componentDidUpdate executes after re-renders caused by props or state changes.",
  },
  {
    id: 114,
    question: "What is componentWillUnmount used for?",
    answer:
      "componentWillUnmount runs before component removal, used for cleanup like canceling subscriptions.",
  },
  {
    id: 115,
    question: "How do you force a component to re-render?",
    answer:
      "Call this.forceUpdate(), but it's generally not recommended. Better to use state changes.",
  },
  {
    id: 116,
    question: "What is the difference between PureComponent and regular Component?",
    answer:
      "PureComponent implements shallow comparison of props and state to prevent unnecessary re-renders.",
  },
  {
    id: 117,
    question: "How do you implement shouldComponentUpdate?",
    answer:
      "Return true to re-render, false to skip. Compare current and next props/state.",
  },
  {
    id: 118,
    question: "What is the context of 'this' in React event handlers?",
    answer:
      "'this' refers to the component instance. Bind handlers or use arrow functions to maintain correct context.",
  },
  {
    id: 119,
    question: "How do you pass methods as props to child components?",
    answer:
      "Define methods in parent component and pass them as props to children.",
  },
  {
    id: 120,
    question: "What is the children prop in class components?",
    answer:
      "this.props.children contains the content between opening and closing component tags.",
  },
  {
    id: 121,
    question: "How do you create Higher-Order Components?",
    answer:
      "Create a function that takes a component and returns an enhanced component with additional functionality.",
  },
  {
    id: 122,
    question: "What are the benefits of Higher-Order Components?",
    answer:
      "HOCs enable code reuse, logic abstraction, and prop manipulation across components.",
  },
  {
    id: 123,
    question: "How do you avoid prop name collisions in HOCs?",
    answer:
      "Use displayName property and careful prop naming to avoid conflicts.",
  },
  {
    id: 124,
    question: "What is render props pattern?",
    answer:
      "A pattern where a component receives a function as a prop that returns JSX to render.",
  },
  {
    id: 125,
    question: "When should you use render props?",
    answer:
      "Use render props when you need to share logic between components but want flexibility in rendering.",
  },
  {
    id: 126,
    question: "How do you implement render props?",
    answer:
      "Pass a function as a prop (often called render or children) that receives data and returns JSX.",
  },
  {
    id: 127,
    question: "What are the advantages of hooks over class components?",
    answer:
      "Hooks allow state and lifecycle in functional components, reduce code duplication, and are easier to test.",
  },
  {
    id: 128,
    question: "Can you use hooks in class components?",
    answer:
      "No, hooks can only be used in functional components or custom hooks.",
  },
  {
    id: 129,
    question: "What is the rules of hooks?",
    answer:
      "Only call hooks at the top level, not inside loops, conditions, or nested functions.",
  },
  {
    id: 130,
    question: "Why can't hooks be called conditionally?",
    answer:
      "Hooks rely on call order for state management. Conditional calls break this order.",
  },
  {
    id: 131,
    question: "How do you handle multiple state variables?",
    answer:
      "Use multiple useState calls or combine related state into objects.",
  },
  {
    id: 132,
    question: "What is state batching in React?",
    answer:
      "React groups multiple state updates into a single re-render for performance.",
  },
  {
    id: 133,
    question: "How do you update state based on previous state?",
    answer:
      "Pass a function to setState that receives the previous state as parameter.",
  },
  {
    id: 134,
    question: "What is the difference between useState and useReducer?",
    answer:
      "useState for simple state, useReducer for complex state logic with multiple sub-values.",
  },
  {
    id: 135,
    question: "How do you share state between components?",
    answer:
      "Lift state up to common parent or use Context API for global state.",
  },
  {
    id: 136,
    question: "What is prop drilling?",
    answer:
      "Passing props through multiple component levels to reach deeply nested components.",
  },
  {
    id: 137,
    question: "How do you avoid prop drilling?",
    answer:
      "Use Context API, state management libraries, or component composition.",
  },
  {
    id: 138,
    question: "What is the Context API?",
    answer:
      "Context provides a way to pass data through component tree without prop drilling.",
  },
  {
    id: 139,
    question: "How do you create a context?",
    answer:
      "Use React.createContext() to create context, then use Provider and Consumer.",
  },
  {
    id: 140,
    question: "How do you consume context in functional components?",
    answer:
      "Use the useContext hook to access context values in functional components.",
  },
  {
    id: 141,
    question: "What are context consumers?",
    answer:
      "Context.Consumer is the render prop way to consume context in class components.",
  },
  {
    id: 142,
    question: "How do you handle context re-renders?",
    answer:
      "Split contexts by concern and use memoization to prevent unnecessary re-renders.",
  },
  {
    id: 143,
    question: "What is the Provider component?",
    answer:
      "Provider makes context available to all child components in the tree.",
  },
  {
    id: 144,
    question: "Can you have multiple providers for the same context?",
    answer:
      "Yes, inner providers override outer ones for their subtree.",
  },
  {
    id: 145,
    question: "How do you set default context values?",
    answer:
      "Pass a default value to React.createContext(defaultValue).",
  },
  {
    id: 146,
    question: "What is the use of defaultValue in context?",
    answer:
      "defaultValue is used when no Provider is found in the component tree.",
  },
  {
    id: 147,
    question: "How do you test React components?",
    answer:
      "Use testing libraries like Jest and React Testing Library for unit and integration tests.",
  },
  {
    id: 148,
    question: "What is React Testing Library?",
    answer:
      "A testing utility that encourages testing components the way users interact with them.",
  },
  {
    id: 149,
    question: "How do you test user interactions?",
    answer:
      "Use fireEvent or userEvent from testing libraries to simulate user actions.",
  },
  {
    id: 150,
    question: "How do you mock functions in tests?",
    answer:
      "Use Jest's mock functions or libraries like jest.mock() for external dependencies.",
  },
  {
    id: 151,
    question: "How would you debug if a React component is not rendering?",
    answer:
      "Check if the component is being imported and used correctly, verify props are passed properly, and ensure there are no syntax errors in JSX.",
  },
  {
    id: 152,
    question: "What would you do if your useState hook isn't updating the UI?",
    answer:
      "Ensure you're using the setter function returned by useState, check for typos in variable names, and verify the component is re-rendering.",
  },
  {
    id: 153,
    question: "How do you handle a 'Cannot read property of undefined' error?",
    answer:
      "Check if the object exists before accessing its properties using optional chaining (?.) or conditional rendering.",
  },
  {
    id: 154,
    question: "What if your onClick handler isn't working?",
    answer:
      "Verify the function is properly bound, check for typos in event handler names, and ensure the element is not disabled.",
  },
  {
    id: 155,
    question: "How would you fix a component that renders but shows nothing?",
    answer:
      "Check if the return statement includes the JSX, verify there are no early returns, and ensure CSS isn't hiding the content.",
  },
  {
    id: 156,
    question: "What to do if props are undefined in a child component?",
    answer:
      "Check if props are being passed from the parent component, verify prop names match, and consider using default props.",
  },
  {
    id: 157,
    question: "How do you handle a 'Too many re-renders' error?",
    answer:
      "Avoid calling state setters or effects inside render, move them to event handlers or useEffect with proper dependencies.",
  },
  {
    id: 158,
    question: "What if your useEffect runs infinitely?",
    answer:
      "Add proper dependencies to the dependency array or use an empty array [] if it should run only once.",
  },
  {
    id: 159,
    question: "How would you debug styling issues in React?",
    answer:
      "Use browser DevTools to inspect elements, check if CSS classes are applied correctly, and verify CSS imports.",
  },
  {
    id: 160,
    question: "What to do if a list doesn't render all items?",
    answer:
      "Ensure each list item has a unique key prop, check the array data, and verify the map function returns JSX.",
  },
  {
    id: 161,
    question: "How do you handle form input that doesn't update state?",
    answer:
      "Ensure the input has value and onChange props for controlled components, or use defaultValue for uncontrolled.",
  },
  {
    id: 162,
    question: "What if your component doesn't re-render when data changes?",
    answer:
      "Verify state is being updated with the setter function, check if the data is actually changing, and ensure no memoization is preventing re-renders.",
  },
  {
    id: 163,
    question: "How would you fix a 'Objects are not valid as a React child' error?",
    answer:
      "Convert objects to strings using JSON.stringify() or access specific properties, don't render objects directly in JSX.",
  },
  {
    id: 164,
    question: "What to do if console.log doesn't show expected values?",
    answer:
      "Check if the code is executing, verify variable scopes, and ensure the component is mounting or re-rendering as expected.",
  },
  {
    id: 165,
    question: "How do you handle API errors in a React component?",
    answer:
      "Use try-catch in async functions, set error state, and display error messages to users.",
  },
  {
    id: 166,
    question: "What if your ref is always null?",
    answer:
      "Ensure the ref is attached to a DOM element, not a custom component, and access it after the component mounts.",
  },
  {
    id: 167,
    question: "How would you debug a component that renders twice?",
    answer:
      "Check for StrictMode in development, verify useEffect dependencies, and ensure no duplicate renders from parent components.",
  },
  {
    id: 168,
    question: "What to do if CSS classes aren't applying?",
    answer:
      "Verify className prop is used (not class), check CSS imports, and ensure class names match between JSX and CSS.",
  },
  {
    id: 169,
    question: "How do you handle a component that crashes the app?",
    answer:
      "Wrap it in an error boundary to catch errors and display fallback UI instead of crashing the whole app.",
  },
  {
    id: 170,
    question: "What if your conditional rendering isn't working?",
    answer:
      "Check the condition logic, ensure variables are defined, and verify the JSX structure for correct conditional rendering.",
  },
];

// Make data available globally
window.beginner = beginner;
