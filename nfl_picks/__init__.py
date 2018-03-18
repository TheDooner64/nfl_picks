# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from flask import Flask
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy

# App
app = Flask(__name__)

# Database
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://postgres@localhost/nfl_picks'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
migrate = Migrate(app, db)

# Views
from . import views  # NOQA
