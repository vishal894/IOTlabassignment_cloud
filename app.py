from flask import Flask
from datetime import date,datetime
from flask.globals import request
from flask.helpers import make_response

from flask.json import jsonify

app = Flask(__name__)

def timeStamp():
    currentdate = datetime.now()
    return f"API called at {currentdate}"

@app.route('/getRequest',methods=['GET'])
def getRequest():
    ts = timeStamp()
    return make_response(f"{ts} and request body contains {request.json or ''}",200)

@app.route('/postRequest',methods=['POST'])
def postRequest():
    ts = timeStamp()
    return make_response(f"{ts} and request body contains {request.json or ''}",201)

@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def invalidRoute(path):
    return make_response(f"API endpoint {path} not found",404)
    

app.run()