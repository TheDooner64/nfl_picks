import GameSummary from 'components/game-summary'
import PickSummary from 'components/pick-summary'
import PropTypes from 'prop-types'
import React from 'react'
import TeamSummary from 'components/team-summary'
import styles from './styles.scss'

const Overview = ({conferences}) =>
  <div className={`container-fluid ${styles.overview}`}>
    <div className="row">
      <div className="col-md-3">
        <TeamSummary conferences={conferences} />
      </div>
      <div className="col-md-9">
        <div className="row">
          <PickSummary />
        </div>
        <div className="row">
          <GameSummary />
        </div>
      </div>
    </div>
  </div>

Overview.propTypes = {
  conferences: PropTypes.arrayOf(
    PropTypes.object.isRequired
  ).isRequired
}

export default Overview
