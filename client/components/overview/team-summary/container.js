import {TEAMS} from '../constants'
import TeamSummary from './index'
import _ from 'lodash'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
  const {picks} = state
  const selectedTeams = _.invert(picks)

  const divisions = _.groupBy(TEAMS, (team) => {
    return team.division
  })

  return {
    divisions,
    picks,
    selectedTeams
  }
}

export default connect(mapStateToProps)(TeamSummary)
