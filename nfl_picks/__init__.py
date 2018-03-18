# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from flask import Flask
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy

# App
app = Flask(__name__)

# Database
db = SQLAlchemy(app)
migrate = Migrate(app, db)

# Views
from . import views  # NOQA
