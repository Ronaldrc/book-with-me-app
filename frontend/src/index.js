import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="body">
    <div className="topbar">
      <h1 className="topbar">Ron Chim</h1>
      <p className="topbar">Book 30-minute appointment</p>
    </div>
    <div className="background">
      <div className="home-page">
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </div>
    </div>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
