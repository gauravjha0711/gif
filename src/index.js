import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


//npm i axios


//npm install -D tailwindcss
//npx tailwindcss init
// put below part in tailwind.config.js
// "./src/**/*.{js,jsx,ts,tsx}",
//@tailwind base;
// @tailwind components;
// @tailwind utilities;
//npm run start