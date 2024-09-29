# Lecture 04: Understanding Basic Website Functionality, SPA vs. MPA, Node Modules and Bootstrap

## Overview

In this lecture, I covered how a basic website works, learned the key differences between Single-Page Applications (SPA) and Multi-Page Applications (MPA), explored Node Modules in React projects, and took a glimpse into Bootstrap for styling React apps.

## 🌐 How a Basic Website Works

A website is essentially a collection of files (HTML, CSS, JavaScript, images, etc.) served by a server and displayed on a browser. Here’s a basic flow:

- **Client (Browser):** The user sends a request (e.g., by entering a URL).
- **Server:** The server processes the request and sends the appropriate files (HTML, CSS, JS, etc.).
- **Rendering:** The browser renders the HTML, applies the CSS for styling, and runs JavaScript for interactivity.
  
This basic flow forms the backbone of web applications, whether simple websites or more advanced web apps.

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
