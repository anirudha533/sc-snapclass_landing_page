import os

from flask import Flask, render_template

app = Flask(__name__)
app.config["SNAPCLASS_PORTAL_URL"] = os.getenv(
    "SNAPCLASS_PORTAL_URL", "http://localhost:8501"
)


@app.get("/")
def index():
    return render_template("index.html", portal_url=app.config["SNAPCLASS_PORTAL_URL"])
