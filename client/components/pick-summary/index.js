import PickNav from 'components/pick-nav'
import PickWeek from 'components/pick-week'
import React from 'react'
import styles from './styles.scss'

const PickSummary = () =>
  <div className={`${styles.pickSummaryContainer}`}>
    <h5>
      {'Picks'}
    </h5>
    <PickNav />
    <PickWeek />
    <PickWeek />
    <PickWeek />
    <PickWeek />
    <PickWeek />
    <PickWeek />
    <PickWeek />
    <PickWeek />
    <PickWeek />
  </div>

export default PickSummary
