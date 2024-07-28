import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import axios from 'axios';
import './MyCalendar.css'

function MyCalendar({date, setDate}) {

  const apiUrl = process.env.REACT_APP_PUBLIC_API_URL;
  
  const formatShortWeekday = (locale, date) => ['S', 'M', 'T', 'W', 'T', 'F', 'S'][date.getDay()];
  
  return (
    <Calendar
      // onChange={onChange}
      value={date}
      onClickDay={setDate}
      prev2Label={null}
      next2Label={null}
      calendarType='gregory'
      minDate={new Date()}
      minDetail={"month"}
      maxDate={new Date(2025, 11, 31)}
      formatShortWeekday={formatShortWeekday}
      showNeighboringMonth={false}
      tileDisabled={({date}) => date.getDay() == 0 || date.getDay() == 6}
    />
  );
}

export default MyCalendar;
