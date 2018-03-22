import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.scss'

const Team = ({name}) =>
  <div className={`${styles.team}`}>
    <li>
      {name}
    </li>
  </div>

Team.propTypes = {name: PropTypes.string.isRequired}

export default Team
