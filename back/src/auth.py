import os
import pathlib

import requests
from flask import Flask, session, abort, redirect, request
from google.oauth2 import id_token
from google_auth_oauthlib.flow import Flow
from pip._vendor import cachecontrol
import google.auth.transport.requests

app = Flask("Google Login App")
app.secret_key = "CodeSpecialist.com"


GOOGLE_CLIENT_ID= "1029856813168-edbs4ndfr23hfjes2ddlbav7nssepsff.apps.googleusercontent.com"
client_secrets_file = os.path.join(pathlib.Path(__file__).parent, "client_secret.json")

flow = Flow.from_client_secrets_file(
    client_secrets_file=client_secrets_file,
    scopes=["https://www.googleapis.com/auth/userinfo.profile", "https://www.googleapis.com/auth/userinfo.email", "openid"],
    redirect_uri="http://127.0.0.1:5000/callback"
)


def login_is_required(function):
    def wrapper(*args, **kwargs):
        if "google_id" not in session:
            return abort(401)  # Authorization required
        else:
            return function()

    return wrapper


@app.route("/login")
def login():
    authorization_url, state = flow.authorization_url()
    session["state"] = state
    return redirect(authorization_url)


@app.route("/callback")
def callback():
    pass


@app.route("/logout")
def logout():
    session.clear()
    return redirect ("/")


@app.route("/")
def index():
    return "Hello World <a href='/login'><button>Iniciar sesion</button></a>"


@app.route("/protected_area")
@login_is_required
def protected_area():
    return "Hello World <a href='/logout'><button>Cerrar sesion</button></a>"


if __name__ == "__main__":
    app.run(debug=True)