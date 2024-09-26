# Lecture 02: Understanding JSX in React

## Overview

In this lecture, we delved into JSX, which stands for JavaScript XML. JSX is a syntax extension for JavaScript that looks similar to HTML but allows you to write UI elements directly in JavaScript. It plays a crucial role in how we build and structure components in React.

## Key Concepts of JSX

### 1. What is JSX?

JSX stands for JavaScript XML. It lets us write HTML-like code directly inside JavaScript, making it easier to create React components. Even though it looks like HTML, JSX is actually JavaScript under the hood.

Example of JSX:

```
const element = <h1>Hello, world!</h1>;

```

This line of code looks like HTML but is converted by React into JavaScript that the browser can understand.

## Key Points About JSX

### 1. Embedding JavaScript in JSX

You can insert JavaScript values, variables, or functions directly into JSX using curly braces {}.

For example:

```
const name = "Ankita";
const element = <h1>Hello, {name}!</h1>;

```

In this case, the {name} will be replaced with the value of the name variable, which is "Ankita", so it will display Hello, Ankita!.

### 2. JSX Needs One Parent Element

JSX elements must be wrapped in a single parent element. If you have multiple elements, they must all be inside one parent, like a div or a fragment (<> </>).

Example:

```
// Correct way
return (
  <div>
    <h1>Title</h1>
    <p>This is a paragraph.</p>
  </div>
);

```

Alternatively, you can use a fragment to avoid extra div tags:

```
return (
  <>
    <h1>Title</h1>
    <p>This is a paragraph.</p>
  </>
);

```
