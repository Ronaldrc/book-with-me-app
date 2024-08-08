import axios from 'axios';

const createBooking = async () => {
    const apiUrl = process.env.REACT_APP_PUBLIC_API_URL;
  
  // First, search for specific DATE and START_TIME
  // if doesn't exist, insert into database
  var start_date = new Date(2025, 5, 5, 12, 0, 0, 0);   // June 5, 2025 at noon
  var end_date = new Date(2025, 5, 5, 12, 30, 0, 0);   // June 5, 2025 at 12:30 pm EST
    for (var i = 0; i < 200; i++) {
        for (var j = 0; j < 10; j++) {      // increment by 0.5 hours, last range is 4:30 - 5pm
            var dayOfWeek = start_date.getDay();
            if (dayOfWeek !== 0 && dayOfWeek !== 6) {
                try {
                    var send_date = start_date.toISOString().split("T")[0];
                    var start_time = start_date.toISOString();
                    var end_time = end_date.toISOString();
                    end_date.setMinutes(end_date.getMinutes() + 30);
                    start_date.setMinutes(start_date.getMinutes() + 30);
                    const response = await axios.post(`http://${apiUrl}:5000/api/booking/users/date_time`, 
                        {
                            'date': send_date,
                            'start_time': start_time,
                            'end_time': end_time,
                            'is_available' : true
                        }).then(function (response) {
                            // handle success
                            // console.log(response);
                        }).catch(function (error) {
                            // handle error
                            console.log("Error posting date_time: ",error);
                        });
                } catch (error) {
                    console.error("Error creating date_time: ", error);
                    return;
                }
            }
        }
        start_date.setDate(start_date.getDate() + 1);     // Next day
        start_date.setHours(12, 0, 0, 0);    // Time set to noon
        end_date.setDate(end_date.getDate() + 1);     // Next day
        end_date.setHours(12, 30, 0, 0);    // Time set to 12:30pm EST
    }
}

export default createBooking;