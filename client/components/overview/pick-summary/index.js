import {PICK_LAYOUT} from './constants'
import PickHalf from './pick-half/container'
import PickNav from './pick-nav/container'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.scss'

const PickSummary = ({selectedHalf}) => {
  return (
    <div className={`${styles.pickSummaryContainer}`}>
      <h5>
        {'Picks'}
      </h5>
      <PickNav />
      <PickHalf half={PICK_LAYOUT[selectedHalf]} />
    </div>
  )
}

PickSummary.propTypes = {selectedHalf: PropTypes.string.isRequired}

export default PickSummary
