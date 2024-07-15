import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Button from './components/Button.js';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <div className="body">
    <div className="home-page">
      <div className="topbar">
        <h1 className="name">Ron Chim</h1>
        <p className="appointment">Book 30-minute appointment</p>
        <hr/>
      </div>
      <div className="calendar-title">
        <p className="calendar-title">
          SELECT A DAY
        </p>
      </div>
      <div className="calendar-app">
        <App/>
      </div>
      <button type="submit" className="next">
        <span>Next</span>
      </button>
    </div>
  </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
