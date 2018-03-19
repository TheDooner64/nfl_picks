# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from flask import Flask
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy
from flask_webpack import Webpack

# App
app = Flask(__name__)
app.config['DEV_MODE'] = True
app.config['DEBUG'] = True
app.config['FLASK_DEBUG'] = True
app.config['FLASK_APP'] = 'picks'

# Webpack wrapper
app.config['WEBPACK_MANIFEST_PATH'] = './manifest.json'
webpack = Webpack()
webpack.init_app(app)

# Database
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://postgres@localhost/nfl_picks'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
migrate = Migrate(app, db)

# Views
from nfl_picks import views  # NOQA

# Models
from nfl_picks import models  # NOQA
