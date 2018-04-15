import PickSummary from './pick-summary/container'
import React from 'react'
import TeamSummary from './team-summary/container'
import styles from './styles.scss'

const Overview = () => {
  return (
    <div className={`container-fluid ${styles.overview}`}>
      <div className="row">
        <div className="col-md-3">
          <TeamSummary />
        </div>
        <div className="col-md-9">
          <div className="row">
            <div>
              <PickSummary />
            </div>
          </div>
          <div className="row">
            <div>
              {'GameSummary'}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overview
