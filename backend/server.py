import psycopg2
import os
from dotenv import load_dotenv
from flask import Flask, request, jsonify

load_dotenv("../.env.backend")

app = Flask(__name__)

@app.route('/test', methods = ['GET'])
def test():
    # Delete database 'users'
    # Create database 'users'
    return jsonify({
        "Test" : "Successful"
    }, 200)

@app.route('/api/booking/users', methods = ['POST'])
def create_booking():
    ## Check if table 'users' already exists
    return jsonify({
        "create_booking() POST " : "finish function"
    }, 200)

@app.route('/api/users', methods = ['GET'])
def get_booking():
    return jsonify({
        "get_booking() GET ": "finish function"
    }, 200)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)