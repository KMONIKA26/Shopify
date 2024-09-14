// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Optional: Include any global CSS styles here
import App from './App'; // Import the main App component
import { BrowserRouter as Router } from 'react-router-dom';

// Render the App component inside a Router (for handling routes)
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')  // Assuming the root element exists in the HTML file
);
