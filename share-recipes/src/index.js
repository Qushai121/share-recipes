import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import axios from 'axios'
import { UserAccContextProvider } from './context/userAcc';

axios.defaults.withCredentials = true
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <UserAccContextProvider>
    <App />
  </UserAccContextProvider>
  </React.StrictMode>
);


