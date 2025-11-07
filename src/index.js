import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 1. Import the Provider
import { Provider } from 'react-redux';
// 2. Import your store
import { store } from './app/store';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    {/* 3. Wrap your <App /> component with the <Provider> */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();