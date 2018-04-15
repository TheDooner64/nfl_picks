import PickHalf from './index'
import {TEAMS} from '../../constants'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
  // We can also reference the static team data here, and retrieve the latest odds data
  const {picks, selectedHalf} = state

  // TODO: Come up w/ a better structure for the pick layout so I don't need to do all of these transformations
  const selectedHalfInt = parseInt(selectedHalf.slice(-1))

  // TODO: Figure out how to get linter to ignore this

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

  // TODO: Investigate if half1 and half2 should have different state variables

  // Set the available teams prop in the container file based on the state of "picks" (state != props)
  const availableTeams = Object.keys(TEAMS)
    .filter((teamCode) => {
      return !selectedTeams.includes(teamCode)
    })
    .reduce((prev, teamCode) => {
      prev[teamCode] = TEAMS[teamCode]
      return prev
    }, {})

  return {
    availableTeams,
    picks,
    selectedTeams
  }
}

export default connect(mapStateToProps)(PickHalf)
