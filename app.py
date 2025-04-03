from flask import Flask, request, jsonify, render_template
from flask_socketio import SocketIO

app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins="*")


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/prediction', methods=['POST'])
def prediction():
    num = request.form.get('num')
    result = {'num': num}

    # Emit the data to all connected clients
    socketio.emit('new_prediction', result)

    return jsonify(result)


if __name__ == '__main__':
    # app.run(debug=True)
    socketio.run(app, host='0.0.0.0', debug=True)
