import {TEAMS} from '../constants'
import TeamSummary from './index'
import _ from 'lodash'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
  const {picks, selectedHalf} = state

  // TODO: Don't redo all of this same logic!!

  // TODO: Come up w/ a better structure for the pick layout so I don't need to do all of these transformations
  const selectedHalfInt = parseInt(selectedHalf.slice(-1))

  // TODO: Figure out how to get linter to ignore this

  // TODO: Refactor this so we don't need to create a new object from an array, etc

  // Determine the selected teams for the selected half of the season
  const selectedTeams = Object.keys(picks)
    .filter((fullPickId) => {
      return picks[fullPickId].half === selectedHalfInt
    })
    .filter((fullPickId) => {
      if (fullPickId === 'week1pick1') {
      }
      return Boolean(picks[fullPickId].teamCode)
    })
    .map((fullPickId) => {
      return picks[fullPickId].teamCode
    })
    .reduce((prev, teamCode) => {
      prev[teamCode] = teamCode
      return prev
    }, {})

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
