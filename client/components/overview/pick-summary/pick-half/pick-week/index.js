import Pick from './pick/container'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.scss'

const PickWeek = ({week, weekId}) => {
  return (
    <div className={`${styles.pickWeek}`}>
      <h6>
        {weekId}
      </h6>
      {
        Object.keys(week).map((pickId) => {
          const fullPickId = `${weekId}${pickId}`
          return (
            <Pick fullPickId={fullPickId} key={fullPickId} />
          )
        })
      }
    </div>
  )
}

PickWeek.propTypes = {
  week: PropTypes.shape().isRequired,
  weekId: PropTypes.string.isRequired
}

export default PickWeek
