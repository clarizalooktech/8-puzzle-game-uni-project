from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__, instance_relative_config=True)
app.config["SECRET_KEY"] = '583ebf2csa2900kdjn'
app.config["SQLALCHEMY_DATABASE_URI"] = 'sqlite:///tile_swapping_db.db'
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db = SQLAlchemy(app)
 
from app import routes
from app import models