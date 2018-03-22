import Pick from 'components/pick'
import React from 'react'
import styles from './styles.scss'

const PickWeek = () =>
  <div className={`${styles.pickWeek}`}>
    <h6>
      {'Week 1'}
    </h6>
    <Pick />
    <Pick />
    <Pick />
    <Pick />
  </div>

export default PickWeek
