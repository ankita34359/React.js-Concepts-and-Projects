# Lecture 01: Introduction to React & Installation

## 2. React Installation

To set up React locally, follow these steps:

### Step 1: Install Node.js and npm
React requires Node.js and npm (Node Package Manager) for its build process.

To check if Node.js and npm are installed:
- node -v
- npm -v

### Step 2: Create a New React Application
React offers an easy-to-use tool called Create React App to quickly scaffold a new React project.

Command to create a new React application:
**npx create-react-app my-first-app**

- *npx:* A package runner tool that comes with npm 5.2+.
- *create-react-app:* A tool to generate a new React project with all the necessary configurations and dependencies.
- *my-first-app:* The name of the folder where our new React project will be created.

Navigate into the new project directory:
**cd my-first-app**

### Step 3: Running the React Application

Once the project is set up, you can start the development server by running:
**npm start**

This will start a local server and open the React app in your default web browser at http://localhost:3000/. The page will automatically reload whenever you make changes to your code.

### 3. Project Structure Overview

After running create-react-app, the project folder structure looks like this:

my-first-app/

```
├── node_modules/          # Dependency packages

├── public/                # Static assets (e.g., index.html)

├── src/                   # Source code for the app

│   ├── App.js             # Main component

│   ├── index.js           # Entry point for React

│   └── ...

├── .gitignore             # Git ignored files

├── package.json           # Project metadata and dependencies

└── README.md              # Project documentation

- public/: Contains the static assets such as index.html and icons. This is where the root HTML file resides.
- src/: Contains all the React components, styles, and business logic.
- App.js is the main component that gets rendered by index.js.

By following these notes, you can quickly set up React on your local machine and understand the foundational concepts of how React works.

## Contact
If you have any questions, suggestions, or would like to discuss OS concepts, feel free to reach out:

- GitHub: https://github.com/ankita34359
- Linkedin: https://www.linkedin.com/in/ankita-gupta-34359abcd/
  
Stay tuned as I add more content and practical examples to deepen my understanding of React Js! 
