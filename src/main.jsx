import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HashRouter as Router } from "react-router-dom";
import './index.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>
);



