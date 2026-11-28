import os
from urllib.parse import parse_qsl, urlencode, urlsplit

from flask import Flask, render_template

app = Flask(__name__)
app.config["SNAPCLASS_PORTAL_URL"] = os.getenv(
    "SNAPCLASS_PORTAL_URL", "https://snapclasses-anirudh.streamlit.app/"
)


@app.get("/")
def index():
    portal_url = app.config["SNAPCLASS_PORTAL_URL"]
    portal = urlsplit(portal_url)
    demo_query = dict(parse_qsl(portal.query, keep_blank_values=True))
    demo_query["demo"] = "1"
    guest_demo_url = portal._replace(query=urlencode(demo_query)).geturl()
    return render_template("index.html", portal_url=portal_url, guest_demo_url=guest_demo_url)
