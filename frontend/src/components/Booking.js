import React, { useState, useEffect } from 'react';
import './Booking.css';
import MyCalendar from './MyCalendar.js'

function Booking() {
  // Interact with backend
  const apiUrl = process.env.REACT_APP_PUBLIC_API_URL;
  
  // Change selected date on user click
  const [date, setDate] = useState(new Date());
  function onClickDay(date) {
    setDate(date);
  }
  
  return (
    <div className="app">
      <MyCalendar value={date} setDate={onClickDay}/>
      {/* <form onSubmit={createBooking}>
        <button type="submit" className="next">
          <span>Next</span>
        </button>
      </form> */}
      <button type="submit" className="next">
          <span>Next</span>
      </button>
    </div>
  );
}

export default Booking;
