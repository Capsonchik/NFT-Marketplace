import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {Users} from "./state/users.js"
import {Cards} from './state/cards.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <App users={Users} cards={Cards} />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
