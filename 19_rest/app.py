from flask import Flask, render_template
import urllib.request as urllib2, json
app = Flask(__name__)

@app.route("/")
def root():
    file = open("key_nasa.txt", "r")
    key = "https://api.nasa.gov/planetary/apod?api_key=" + file.read()
    u = urllib2.urlopen(key)
    response = u.read()
    data = json.loads (response)
    return render_template("main.html", pic = data['url'], text = data["explanation"])

if __name__ == "__main__":
    app.debug = True
    app.run()
