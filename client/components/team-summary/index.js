import Conference from 'components/conference'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.scss'

const TeamSummary = ({conferences}) =>
  <div className={`${styles.teamSummaryContainer}`}>
    <h5>
      {'Teams'}
    </h5>
    <div className={`${styles.teamSummary}`}>
      <div className="row">
        {
          conferences.map(
            (conference) => <Conference divisions={conference.divisions} key={conference.id} />
          )
        }
      </div>
    </div>
  </div>

TeamSummary.propTypes = {
  conferences: PropTypes.arrayOf(
    PropTypes.object.isRequired
  ).isRequired
}

export default TeamSummary
