# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from flask import Flask

# App
app = Flask(__name__)

# Views
from . import views  # NOQA
