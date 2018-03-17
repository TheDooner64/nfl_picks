# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from flask import render_template

from . import app

@app.route('/', methods=['GET'], defaults={'path': ''})
def index(path):
    return render_template('index.html')
