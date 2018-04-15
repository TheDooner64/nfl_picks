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
  const selectedTeam = picks[fullPickId]

  // Calculate availableTeams prop in the container file based on the state of "picks" (state != props)
  const availableTeams = _.pickBy(TEAMS, (team) => {
    return selectedTeam === team.teamCode || !(team.teamCode in selectedTeams)
  })

  return {
    availableTeams,
    // Dynamically set form name to fullPickId
    form: fullPickId,
    // Set initialValues to the current pick so we persist the values when tabbing between half1 and half2
    initialValues: {[fullPickId]: selectedTeam},
    picks,
    selectedTeam
  }
}

const mapDispatchToProps = (dispatch) => {
  return {actions: bindActionCreators({selectTeam}, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(Pick)
