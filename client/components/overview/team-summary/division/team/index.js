import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.scss'

const Team = ({selectedTeams, team}) => {
  // Conditional formatting based on the team being available
  const teamAvailability = `${team.teamCode in selectedTeams ?
    styles.selectedTeam :
    ''}`

  return (
    <div className={styles.team}>
      <li className={teamAvailability}>
        {team.teamName}
      </li>
    </div>
  )
}

Team.propTypes = {
  selectedTeams: PropTypes.shape().isRequired,
  team: PropTypes.shape().isRequired
}

export default Team
