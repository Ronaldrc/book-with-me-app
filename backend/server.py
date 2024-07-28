from flask import Flask, request, jsonify, make_response
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from dotenv import load_dotenv
from json import JSONEncoder
import datetime
import json
import os

load_dotenv("./.env")

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL')

## Create connection object
db = SQLAlchemy(app)

## Create table 'booking' if it does not exist
class Booking(db.Model):
    __tablename__ = 'booking'
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(100), nullable=False)

    def json(self):
        return {
            'id' : self.id,
            'first_name' : self.first_name,
            'last_name' : self.last_name,
            'email' : self.email
        }

## Create table 'date_time'
class DateTime(db.Model):
    __tablename__ = 'date_time'
    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.Date(), nullable=False)
    start_time = db.Column(db.DateTime(timezone=True), nullable=False)
    end_time = db.Column(db.DateTime(timezone=True), nullable=False)
    is_available = db.Column(db.Boolean, default=True)

    def json(self):
        return {
            'id' : self.id,
            'date' : self.date,
            'start_time' : self.start_time,
            'end_time' : self.end_time,
            'is_available' : self.is_available
        }

# Create tables 'booking' and 'date_time'
with app.app_context():
    db.create_all()

# Add 1 month
def add_month(year, month):
    if month == 12:
        return datetime.datetime(year + 1, 1, 1)
    else:
        return datetime.datetime(year, month + 1, 1)

# Convert all DateTime objects into strings
def convert_list_of_datetime_to_json(bookings_list):
    list_of_jsons_booking = []
    for date in bookings_list:
        list_of_jsons_booking.append(date.json())
    return list_of_jsons_booking

# Test route
@app.route('/test', methods = ['GET'])
def test():
    return jsonify({
        "Test" : "Successful"
    }, 200)

@app.route('/api/booking/users', methods = ['POST'])
def create_booking():
    try:
        data = request.get_json()
        new_booking = Booking(first_name=data['first_name'],
                              last_name=data['last_name'],
                              email=data['email'])
        db.session.add(new_booking)
        db.session.commit()
        return jsonify({
            'first_name' : new_booking.first_name,
            'last_name' : new_booking.last_name,
            'email' : new_booking.email
        })
    except Exception as e:
        return make_response({
            'message' : 'error creating booking',
            'error' : str(e)
        })

## FIXME: DELETE this function once the 'date_time' table is populated
@app.route('/api/booking/users/date_time', methods = ['POST'])
def create_date_time():
    try:
        data = request.get_json()
        new_time = DateTime(date=data['date'],
                            start_time=data['start_time'],
                            end_time=data['end_time'],
                            is_available=data['is_available'])
        db.session.add(new_time)
        db.session.commit()
        return jsonify({
            'date' : new_time.date,
            'start_time' : new_time.start_time,
            'end_time' : new_time.end_time,
            'is_available' : new_time.is_available
        }, 201)
    except Exception as e:
        return make_response(jsonify({
            'message' : 'error creating date_time',
            'error' : str(e)
        }), 500)
    
@app.route('/api/booking/available_times/<int:year>/<int:month>', methods = ['GET'])
def get_available_times(year, month):
    # retrieve using date
    search_date = datetime.datetime(year, month, 1)
    search_date_plus_one_month = add_month(year, month)
    try:
        booking_list = DateTime.query.filter((DateTime.date >= search_date) & (DateTime.date < search_date_plus_one_month) & (DateTime.is_available == True)).all()
        if booking_list:
            # Convert all DateTime objects into strings
            list_of_jsons_booking = convert_list_of_datetime_to_json(booking_list)
            return make_response(jsonify({
                'data' : list_of_jsons_booking
            }), 201)
        return make_response(jsonify({
            'message' : 'availability data not found'
        }), 500)
    except Exception as e:
        return make_response(jsonify({
            'message' : 'error getting availability data',
            'error' : str(e)
        }), 500)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)