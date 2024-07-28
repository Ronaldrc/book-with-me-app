import React, { useState, useEffect } from 'react';
import './Booking.css';
import MyCalendar from './MyCalendar.js'
import { useNavigate } from 'react-router-dom';

function Booking({ selectedDate, setSelectedDate }) {
  // Interact with backend
  const apiUrl = process.env.REACT_APP_PUBLIC_API_URL;
  
  // Change selected date on user click
  const [date, setDate] = useState(new Date());
  function onClickDay(date) {
    setSelectedDate(date);    // selected date will be passed to another component
    setDate(date);
  }

  const navigate = useNavigate();
  function onClickNext() {
    if (selectedDate !== null) {
      navigate("/next");
    }
  }
  
  return (
    <div className="app">
      <MyCalendar value={date} setDate={onClickDay}/>
      {/* <form onSubmit={createBooking}>
        <button type="submit" className="next">
          <span>Next</span>
        </button>
      </form> */}
      <button type="submit" className="next" onClick={onClickNext}>
          <span>Next</span>
      </button>
    </div>
  );
}

export default Booking;
