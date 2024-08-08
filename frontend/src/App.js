import React, { useState } from 'react';
import './App.js'
import Contact from './pages/contact/contact.js'
import Home from './pages/home/home.js'
import Next from './pages/next/next.js'

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>}/>
        {
          selectedDate !== null &&
          <Route path="/next" element={<Next selectedDate={selectedDate}/>}/>
        }
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default App;