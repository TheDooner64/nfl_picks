# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from flask import render_template, jsonify

from nfl_picks import app, models


@app.route('/<path:path>', methods=['GET'])
@app.route('/', methods=['GET'], defaults={'path': ''})
def index(path):
    return render_template('index.html')


@app.route('/teams', methods=['GET'])
def get_teams():
    """
    JSON endpoint to retrieve all teams
    """

    teams = models.get_teams()
    return jsonify({'data': teams})
