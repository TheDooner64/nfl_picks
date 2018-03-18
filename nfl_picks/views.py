# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from flask import render_template, jsonify

from . import app

@app.route('/', methods=['GET'], defaults={'path': ''})
def index(path):
    return render_template('index.html')


@app.route('/teams', methods=['GET'])
def get_teams():
    """
    JSON endpoint to retrieve all teams
    """

    # teams = models.get_teams()

    teams = [
        {
            'name': 'New York Jets',
            'conference': 'AFC',
            'division': 'AFC East',
        }, {
            'name': 'Miami Dolphins',
            'conference': 'AFC',
            'division': 'AFC East',
        }
    ]

    return jsonify({'data': teams})
