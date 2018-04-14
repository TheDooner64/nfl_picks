import {TEAM_SELECTED} from './constants'

export const selectTeam = (pick) => {
  return {
    payload: pick,
    type: TEAM_SELECTED
  }
}
