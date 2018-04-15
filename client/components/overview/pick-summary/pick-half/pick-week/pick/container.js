import Pick from './index'
import {TEAMS} from '../../../../constants'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {selectTeam} from './actions'

const mapStateToProps = (state, ownProps) => {
  // We can also reference the static team data here, and retrieve the latest odds data
  const {picks} = state
  const {availableTeams, fullPickId} = ownProps
  const selectedTeamCode = picks[fullPickId].teamCode
  const selectedTeam = TEAMS[selectedTeamCode]

  // TODO: Come up w/ a better name than myAvailableTeams

  // Add the current selected team to the availableTeams
  const myAvailableTeams = selectedTeam ?
    {
      [selectedTeamCode]: selectedTeam,
      ...availableTeams
    } :
    availableTeams

  return {
    // Dynamically set form name to fullPickId
    form: fullPickId,
    // Set initialValues to the current pick so we persist the values when tabbing between half1 and half2
    initialValues: {[fullPickId]: selectedTeamCode},
    myAvailableTeams
  }
}

const mapDispatchToProps = (dispatch) => {
  return {actions: bindActionCreators({selectTeam}, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(Pick)
