from flask import Flask
app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello World!"

@app.route("/juan")
def hello2():
    return "Hello Juan como estas?"

if __name__ == '__main__':
    app.run(debug=True)