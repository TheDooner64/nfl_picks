import Division from 'components/division'
import PropTypes from 'prop-types'
import React from 'react'

const Conference = ({divisions}) =>
  <div className="col-md-6">
    {
      divisions.map(
        (division) => <Division key={division.id} name={division.name} teams={division.teams} />
      )
    }
  </div>

Conference.propTypes = {
  divisions: PropTypes.arrayOf(
    PropTypes.object.isRequired
  ).isRequired
}

export default Conference
