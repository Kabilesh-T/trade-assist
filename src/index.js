import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import App from './components/App';
import { AuthProvider } from "./components/Auth/Auth";
import './style/style.scss'

render(
  <AuthProvider>
    <Router>
      <App />
    </Router>
  </AuthProvider>
  , document.getElementById('root')
);
