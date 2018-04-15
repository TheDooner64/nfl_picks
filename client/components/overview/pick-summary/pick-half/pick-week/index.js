import Pick from './pick/container'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.scss'

const PickWeek = ({availableTeams, week, weekId}) => {
  return (
    <div className={`${styles.pickWeek}`}>
      <h6>
        {weekId}
      </h6>
      {
        Object.keys(week).map((pickId) => {
          const fullPickId = `${weekId}${pickId}`
          return (
            <Pick availableTeams={availableTeams} fullPickId={fullPickId} key={fullPickId} pick={week[pickId]} />
          )
        })
      }
    </div>
  )
}

PickWeek.propTypes = {
  availableTeams: PropTypes.shape().isRequired,
  week: PropTypes.shape().isRequired,
  weekId: PropTypes.string.isRequired
}

export default PickWeek
