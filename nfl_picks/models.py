# -*- coding: utf-8 -*-
from __future__ import unicode_literals

import datetime

from nfl_picks import db


class Team(db.Model):
    __tablename__ = 'team'
    id = db.Column(db.Integer(), primary_key=True)
    name = db.Column(db.String(100), unique=True, nullable=False)
    short_name = db.Column(db.String(100), unique=True, nullable=False)
    team_code = db.Column(db.String(5), unique=True, nullable=False)
    location = db.Column(db.String(100), nullable=False)
    conference = db.Column(db.String(100), nullable=False)
    division = db.Column(db.String(100), nullable=False)
    date_added = db.Column(db.DateTime(), default=datetime.datetime.utcnow)
    date_updated = db.Column(db.DateTime(), default=datetime.datetime.utcnow, onupdate=datetime.datetime.utcnow)


def insert_or_update_team(team_data):
    team_name = team_data.get('name')
    existing_record = get_team(team_name)

    if existing_record:
        db.session.execute(db.update(Team).where(Team.id == existing_record.id).values(team_data))
    else:
        db.session.execute(db.insert(Team, team_data))

    db.session.commit()

    return get_team(team_name)


def get_team(team_name):
    return Team.query.filter_by(name=team_name).first()


def get_teams():
    return Team.query.all()
