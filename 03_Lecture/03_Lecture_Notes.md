# Lecture 03: Understanding Basic Website Functionality, SPA vs. MPA, Node Modules and Bootstrap

## Overview

In this lecture, I covered how a basic website works, learned the key differences between Single-Page Applications (SPA) and Multi-Page Applications (MPA), explored Node Modules in React projects, and took a glimpse into Bootstrap for styling React apps.

## 🌐 How a Basic Website Works

A website is essentially a collection of files (HTML, CSS, JavaScript, images, etc.) served by a server and displayed on a browser. Here’s a basic flow:

- **Client (Browser):** The user sends a request (e.g., by entering a URL).
- **Server:** The server processes the request and sends the appropriate files (HTML, CSS, JS, etc.).
- **Rendering:** The browser renders the HTML, applies the CSS for styling, and runs JavaScript for interactivity.
  
This basic flow forms the backbone of web applications, whether simple websites or more advanced web apps.

---

## 🔄 Multi-Page Application (MPA) vs. Single-Page Application (SPA)

### Multi-Page Application (MPA)

In an MPA, every time the user clicks on a link, the browser makes a request to the server, and a new HTML page is loaded. Each page is independent of the other.

#### Features:

- Multiple full-page reloads.
- Suitable for larger applications with lots of content.
- SEO-friendly due to server-rendered pages.

#### Diagram:

```
+---------+        Request Page 1      +----------+
| Browser |  ---------------------->   |  Server  |
+---------+        Load Page 1          +----------+
   ⬇                                     ⬆
+---------+        Request Page 2      +----------+
| Browser |  ---------------------->   |  Server  |
+---------+        Load Page 2          +----------+
```

Every user interaction that requires navigation triggers a server request, resulting in multiple full-page reloads.

### Single-Page Application (SPA)

In an SPA, the entire website is loaded as a single HTML page. After the initial load, the application dynamically updates the content based on user interaction without reloading the entire page.

#### Features:

- No full-page reloads; only parts of the page are updated.
- Faster and more interactive experience.
- Less server load after the initial load.
- Content is rendered dynamically using React.

#### Diagram:
```

+---------+        Initial Load       +----------+
| Browser |  ---------------------->  |  Server  |
+---------+       Load SPA Shell       +----------+
   ⬇                                     ⬆
  User Navigates       Update Content (without page reload)
```

In an SPA, once the page is loaded, the client-side JavaScript (like React) handles the content update, providing a smooth user experience.

---

## 📦 Node Modules in React

### What Are Node Modules?

When you create a React app using create-react-app, a folder called node_modules is created. This folder contains all the packages (libraries and dependencies) that the project relies on. These packages are downloaded using the Node Package Manager (npm).

### Key Points About node_modules:

- **Not included in version control:** The node_modules folder is typically added to .gitignore because it is huge and can be re-generated using npm install by anyone who clones the project.
  
- **Dependencies and Sub-dependencies:** It contains not only the main dependencies you install (like React) but also the dependencies of those dependencies.

## How It Works in React:

- **package.json:** This file lists all the project’s dependencies. When you run npm install, it reads this file and installs the required modules inside node_modules.

### Example from package.json:

```
"dependencies": {
  "react": "^18.0.0",
  "react-dom": "^18.0.0"
}
```

- **node_modules:** This folder contains all the installed packages. It’s crucial for running and building our React app, but it is automatically generated based on package.json.

---

## 🎨 Introduction to Bootstrap

### What is Bootstrap?

Bootstrap is a popular open-source CSS framework that helps developers quickly design responsive and mobile-first websites. It provides a collection of pre-built CSS classes and JavaScript components that you can use to create a professional-looking website without writing a lot of custom CSS.

## Key Features:

- **Responsive Grid System:** Helps in creating layouts that adjust to different screen sizes.
- **Pre-designed Components:** Includes buttons, forms, navigation bars, modals, and more.
- **Customization:** You can easily customize the default Bootstrap styles.

By adding Bootstrap, we can quickly style our React components without spending much time on custom CSS.

## Contact

If you have any questions, suggestions, or would like to discuss OS concepts, feel free to reach out:

- GitHub: https://github.com/ankita34359
- Linkedin: https://www.linkedin.com/in/ankita-gupta-34359abcd/
  
Stay tuned as I add more content and practical examples to deepen my understanding of React Js! 
