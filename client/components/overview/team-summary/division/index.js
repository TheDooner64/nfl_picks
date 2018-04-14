import PropTypes from 'prop-types'
import React from 'react'
import Team from './team'
import styles from './styles.scss'

const Division = ({selectedTeams, division, teams}) => {
  return (
    <div className={`${styles.division}`}>
      <ul>
        <h6>
          {division}
        </h6>
        <div>
          {
            teams.map((team) => {
              return (
                <Team key={team.teamCode} selectedTeams={selectedTeams} team={team} />
              )
            })
          }
        </div>
      </ul>
    </div>
  )
}

Division.propTypes = {
  division: PropTypes.string.isRequired,
  selectedTeams: PropTypes.shape().isRequired,
  teams: PropTypes.arrayOf(
    PropTypes.shape().isRequired
  ).isRequired
}

export default Division
