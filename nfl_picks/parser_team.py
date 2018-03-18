# -*- coding: utf-8 -*-
from __future__ import unicode_literals


class TeamSummary(object):

    def __init__(self, nfl_teams_root):
        self.nfl_teams_root = nfl_teams_root

    @property
    def division_roots(self):
        division_xpath = '//div[contains(@class, "mod-teams-list-medium")]'
        return self.nfl_teams_root.xpath(division_xpath)

    def divisions(self):
        return [Division(division_root) for division_root in self.division_roots]


class Division(object):

    def __init__(self, division_root):
        self.division_root = division_root

    @property
    def division(self):
        division_xpath = './div/h4/text()'
        return self.division_root.xpath(division_xpath)[0]

    @property
    def team_roots(self):
        team_xpath = './div[contains(@class, "mod-content")]/ul/li'
        return self.division_root.xpath(team_xpath)

    def teams(self):
        return [Team(self.division, team_root) for team_root in self.team_roots]


class Team(object):

    def __init__(self, division, team_root):
        self.division = division
        self.team_root = team_root

    @property
    def conference(self):
        if 'AFC' in self.division:
            return 'AFC'
        elif 'NFC' in self.division:
            return 'NFC'

    @property
    def team_name(self):
        team_name_xpath = './div/h5/a/text()'
        return self.team_root.xpath(team_name_xpath)[0]

    @property
    def short_name(self):
        return self.team_name.split(' ')[-1]

    @property
    def location(self):
        return ' '.join(self.team_name.split(' ')[0:-1])

    @property
    def team_link(self):
        team_link_xpath = './div/h5/a/@href'
        return self.team_root.xpath(team_link_xpath)[0]

    @property
    def team_code(self):
        return self.team_link.split('/')[-2]

    def to_dict(self):
        return {
            'name': self.team_name,
            'short_name': self.short_name,
            'location': self.location,
            'team_code': self.team_code,
            'conference': self.conference,
            'division': self.division,
        }
