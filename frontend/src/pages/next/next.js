import './next.css'
import React, { useState } from 'react';

function Next({ selectedDate }) {

    return (
        <div className="body">
            <h1>next page</h1>
            <h1>{selectedDate.toISOString()}</h1>
            {/* get a date and time from datebase.
                then compare date/time with the date/time displayed on this page */}
            <h1>{selectedDate.toLocaleTimeString()}</h1>
        </div>
    );
}

export default Next;