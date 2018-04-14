import Pick from './index'
import {TEAMS} from '../../../../constants'
import _ from 'lodash'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {selectTeam} from './actions'

const mapStateToProps = (state, ownProps) => {
  // We can also reference the static team data here, and retrieve the latest odds data
  const {picks} = state
  const {fullPickId} = ownProps
  const selectedTeams = _.invert(picks)

  // Calculate availableTeams prop in the container file based on the state of "picks" (state != props)
  const availableTeams = _.pickBy(TEAMS, (team) => {
    return picks[fullPickId] === team.teamCode || !(team.teamCode in selectedTeams)
  })

  return {
    availableTeams,
    picks
  }
}

const mapDispatchToProps = (dispatch) => {
  return {actions: bindActionCreators({selectTeam}, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(Pick)
