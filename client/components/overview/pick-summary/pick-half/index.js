import PickWeek from './pick-week'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.scss'

const PickHalf = ({half}) => {
  return (
    <div>
      {
        Object.keys(half).map((weekId) => {
          return (
            <PickWeek key={weekId} week={half[weekId]} weekId={weekId} />
          )
        })
      }
    </div>
  )
}

PickHalf.propTypes = {half: PropTypes.shape().isRequired}

export default PickHalf
