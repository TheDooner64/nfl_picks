# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from nfl_picks import web, parser_team, models


def get_nfl_teams():
    nfl_teams_root = web.get_nfl_teams()
    nfl_teams_summary = parser_team.TeamSummary(nfl_teams_root)

    for division in nfl_teams_summary.divisions():
        for team in division.teams():
            models.insert_or_update_team(team.to_dict())
            print('Inserted %s' % team.team_name)
