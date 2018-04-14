import React from 'react'
import styles from './styles.scss'

const PickNav = () => {
  return (
    <div className={`${styles.pickNav}`}>
      <ul className="nav nav-pills">
        <li className="nav-item">
          <a className="nav-link active" href="#">
            {'1st half'}
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            {'2nd half'}
          </a>
        </li>
      </ul>
    </div>
  )
}

export default PickNav
