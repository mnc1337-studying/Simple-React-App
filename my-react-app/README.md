# Simple React App

A simple project built with React + Vite. It contains two components, `Button` and `Input`, which accept props and event handlers. In `App.jsx`, they are used to assemble a simple sign-up form.

Preview: https://simple-react-app-mnc1337.netlify.app.

## Running

Node.js version 20.19+ is required.

```
git clone https://github.com/mnc1337-studying/Simple-React-App.git
cd Simple-React-App
npm install
npm run dev
```

The site will open at http://localhost:5173.

## Components

`Button` accepts `text` (the button label), `type` (`button`, `submit`, or `reset`), and `onClick`. If `type` is not specified, the default value, `button`, is used.

`Input` accepts `type` (`text`, `email`, `number`, `password`, etc.), `placeholder`, and `onChange`. If `type` is not specified, the default value, `text`, is used.

The form has four fields and three buttons. Whatever is typed into the fields is printed to the browser console. "Sign up" (`submit`) shows a message, "Clear" (`reset`) clears the fields, "Help" (`button`) shows a hint.

## Structure

```
src/
  components/
    Button.jsx
    Input.jsx
  App.jsx
  main.jsx
  index.css
```