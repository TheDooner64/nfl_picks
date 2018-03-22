import PropTypes from 'prop-types'
import React from 'react'
import Team from 'components/team'
import styles from './styles.scss'

const Division = ({name, teams}) =>
  <div className={`${styles.division}`}>
    <ul>
      <h6>
        {name}
      </h6>
      {
        teams.map(
          (team) => <Team key={team.id} name={team.name} />
        )
      }
    </ul>
  </div>

Division.propTypes = {
  name: PropTypes.string.isRequired,
  teams: PropTypes.arrayOf(
    PropTypes.object.isRequired
  ).isRequired
}

export default Division
