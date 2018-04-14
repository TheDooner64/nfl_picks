import Division from './division'
import PropTypes from 'prop-types'
import React from 'react'
import _ from 'lodash'
import styles from './styles.scss'

const TeamSummary = ({divisions, selectedTeams}) => {
  return (
    <div className={`${styles.teamSummaryContainer}`}>
      <h5>
        {'Teams'}
      </h5>
      <div className={`${styles.teamSummary}`}>
        <div className="row">
          {
            _.map(divisions, (teams, division) => {
              return (
                <Division
                  division={division} key={division} selectedTeams={selectedTeams} teams={teams}
                />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

TeamSummary.propTypes = {
  divisions: PropTypes.shape().isRequired,
  selectedTeams: PropTypes.shape().isRequired
}

export default TeamSummary
