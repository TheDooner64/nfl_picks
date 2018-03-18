# -*- coding: utf-8 -*-
from __future__ import unicode_literals

import re
import os
from setuptools import setup, find_packages


def local_file(f):
    return open(os.path.join(os.path.dirname(__file__), f)).read()


def parse_requirements():
    try:
        requirements = \
            map(str.strip, local_file('requirements.txt').splitlines())
    except IOError:
        raise RuntimeError("Make sure you have a requirements.txt file!")

    links = []
    packages = []

    for requirement in requirements:
        if not requirement:
            continue

        if 'http:' in requirement or 'https:' in requirement:
            links.append(requirement)
            name, version = re.findall("\#egg=([^\-]+)-(.+$)", requirement)[0]
            packages.append('{0}=={1}'.format(name, version))
        else:
            packages.append(requirement)

    return packages, links


install_requires, dependency_links = parse_requirements()

if __name__ == '__main__':

    setup(
        name="nfl_picks",
        version='0.0.1',
        description="Web application to help determine weekly choices for a football picks league",
        long_description=local_file('README.md'),
        author='Robert Muldoon',
        author_email='robert.muldoon.1@gmail.com',
        url='https://github.com/TheDooner64/nfl_picks',
        packages=find_packages(exclude=['*tests*']),
        install_requires=install_requires,
        include_package_data=True,
        dependency_links=dependency_links,
        classifiers=['Programming Language :: Python'],
        zip_safe=False,
    )
