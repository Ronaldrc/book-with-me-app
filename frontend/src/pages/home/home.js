import './home.css'
import React from 'react';
import Booking from '../../components/Booking';
import createBooking from '../../components/PopulateDateTime';

function Home({ selectedDate, setSelectedDate }) {
    return(
        <div className="body">
            <div className="home-page">
                <div className="topbar">
                    <h1 className="name">Ron Chim</h1>
                    <p className="appointment">Book a 30-minute appointment</p>
                    <hr/>
                </div>
                <div className="calendar-title">
                    <p className="calendar-title">
                        Please select a day
                    </p>
                </div>
            <div className="calendar-app">
          <Booking selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
        </div>
      </div>
    </div>
    );
}

export default Home;

// CreateBooking() function will populate the datebase
//  a range of dates with times I am available
// createBooking();
