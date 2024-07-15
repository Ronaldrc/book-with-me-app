import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import './App.css';
import axios from 'axios';

function App() {
  // Interact with backend
  const apiUrl = process.env.REACT_APP_PUBLIC_API_URL
  
  const formatShortWeekday = (locale, date) => ['S', 'M', 'T', 'W', 'T', 'F', 'S'][date.getDay()];

  const [date, setDate] = useState(new Date());

  function onChange(nextValue) {
    setDate(nextValue);
  }

  return (
    <Calendar
      onChange={onChange}
      value={date}
      onClickDay={onChange}
      prev2Label={null}
      next2Label={null}
      calendarType='gregory'
      minDate={new Date()}
      minDetail={"month"}
      formatShortWeekday={formatShortWeekday}
      showNeighboringMonth={false}
    />
  );
}

export default App;
