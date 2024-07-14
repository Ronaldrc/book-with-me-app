from flask import Flask, request, jsonify, make_response
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from dotenv import load_dotenv
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
    
with app.app_context():
    db.create_all()

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

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)