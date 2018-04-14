import {PICK_LAYOUT} from '../constants'
import PickNavChoice from './pick-nav-choice/container'
import React from 'react'
import styles from './styles.scss'

const PickNav = () => {
  const halves = Object.keys(PICK_LAYOUT)
  return (
    <div className={`${styles.pickNav}`}>
      <ul className="nav nav-pills">
        {
          halves.map((halfId) => {
            return (
              <PickNavChoice halfId={halfId} key={halfId} />
            )
          })
        }
      </ul>
    </div>
  )
}

export default PickNav
