/**
 * Namaste React - Learning React Fundamentals
 *
 * This file demonstrates the core concepts of React without JSX.
 * It shows how React creates a virtual DOM using React.createElement()
 * and renders it to the actual DOM.
 *
 * Target HTML Structure:
 * <div id="parent">
 *   <div id="child">
 *     <h1>I'm h1 tag</h1>
 *     <h2>I'm h2 tag</h2>
 *   </div>
 *   <div id="child2">
 *     <h1>I'm h1 tag</h1>
 *     <h2>I'm h2 tag</h2>
 *   </div>
 * </div>
 *
 * Flow: ReactElement (JavaScript Object) => HTML (Browser Understands)
 */

// Create a nested React element structure using React.createElement API
// React.createElement(type, props, ...children)
const parent = React.createElement("div", { id: "parent" }, [
  // First child div containing two heading elements
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
  // Second child div containing two heading elements
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
]);

// Log the parent element to console - it's a JavaScript object (ReactElement)
console.log(parent); // This will show the React element object structure

// Create another React element with custom props
const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" }, // Props object with id and custom attribute
  "Hello World from React !",
);

// Get the root DOM element and create a React root
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the parent React element to the DOM
// This converts the React element object into actual HTML elements
root.render(parent);
