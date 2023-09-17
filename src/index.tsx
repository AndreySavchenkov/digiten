import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/reset.scss';
import './styles/root.scss';
import './styles/font.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
