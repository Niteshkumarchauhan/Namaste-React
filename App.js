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

// Import React and ReactDOM from npm packages (managed by Parcel)
import React from "react";
import ReactDOM from "react-dom/client";

// Create a nested React element structure using React.createElement API
// React.createElement(type, props, ...children)
// Each child in a list needs a unique "key" prop for React's reconciliation
const parent = React.createElement("div", { id: "parent" }, [
  // First child div containing two heading elements
  React.createElement("div", { id: "child", key: "child1" }, [
    React.createElement("h1", { key: "h1-1" }, "This is namaste react"),
    React.createElement("h2", { key: "h2-1" }, "Created by Nitesh"),
  ]),
  // Second child div containing two heading elements
  React.createElement("div", { id: "child2", key: "child2" }, [
    React.createElement("h1", { key: "h1-2" }, "Build skills"),
    React.createElement(
      "h2",
      { key: "h2-2" },
      "And also build my brain to improve",
    ),
  ]),
]);

// Log the parent element to console - it's a JavaScript object (ReactElement)
console.log(parent); // This will show the React element object structure

// Create another React element with custom props
// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" }, // Props object with id and custom attribute
//   "Hello World from React !",
// );

// Get the root DOM element and create a React root
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the parent React element to the DOM
// This converts the React element object into actual HTML elements
root.render(parent);
