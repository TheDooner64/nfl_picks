# -*- coding: utf-8 -*-
from __future__ import unicode_literals

import requests
from lxml import etree


def get_nfl_teams():
    """
    Retrieve NFL team data from ESPN
    """

    url = 'http://www.espn.com/nfl/teams'
    res = requests.get(url)
    res_text = res.text
    root = etree.HTML(res_text)

    return root
