import React from 'react';
import ReactDOM from 'react-dom'; // Importa ReactDOM correctamente
import App from './App';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router } from 'react-router-dom';

import 'core-js/stable/array/includes';
import 'core-js/stable/array/fill';
import 'core-js/stable/string/includes';
import 'core-js/stable/string/trim';
import 'core-js/stable/object/values';


const root = ReactDOM.createRoot(document.getElementById('root')); // Utiliza ReactDOM.createRoot
root.render(
  <Router>
    <App />
  </Router>
);

reportWebVitals();
