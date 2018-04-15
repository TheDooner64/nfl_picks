import PickWeek from './pick-week'
import PropTypes from 'prop-types'
import React from 'react'

const PickHalf = ({availableTeams, half}) => {
  return (
    <div>
      {
        Object.keys(half).map((weekId) => {
          return (
            <PickWeek availableTeams={availableTeams} key={weekId} week={half[weekId]} weekId={weekId} />
          )
        })
      }
    </div>
  )
}

PickHalf.propTypes = {
  availableTeams: PropTypes.shape().isRequired,
  half: PropTypes.shape().isRequired
}

export default PickHalf
