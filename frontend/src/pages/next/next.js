import './next.css'
import React from 'react';
import ListTimes from '../../components/ListTimes';

function Next({ selectedDate }) {
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
                        Please select a time
                    </p>
                </div>
            <div className="container-display-times">
                <ListTimes selectedDate={selectedDate}/>
            </div>
      </div>
    </div>
    );
}

export default Next;