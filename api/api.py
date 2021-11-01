from flask import Flask

app = Flask(__name__)

@app.route('/status')
def get_status():
    return {'status': 'ok'}