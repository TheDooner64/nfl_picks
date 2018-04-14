import * as constants from './constants'

// Weeks / picks are constant. Each pick will hold a unique NFL team, or null
const initialState = {
  week1pick1: null,
  week1pick2: null,
  week1pick3: null,
  week1pick4: null,
  week2pick1: null,
  week2pick2: null,
  week2pick3: null,
  week2pick4: null,
  week3pick1: null,
  week3pick2: null,
  week3pick3: null,
  week3pick4: null,
  week4pick1: null,
  week4pick2: null,
  week4pick3: null,
  week4pick4: null,
  week5pick1: null,
  week5pick2: null,
  week5pick3: null,
  week5pick4: null,
  week6pick1: null,
  week6pick2: null,
  week6pick3: null,
  week6pick4: null,
  week7pick1: null,
  week7pick2: null,
  week7pick3: null,
  week7pick4: null,
  week8pick1: null,
  week8pick2: null,
  week8pick3: null,
  week8pick4: null,
  week9pick1: null,
  week9pick2: null,
  week9pick3: null,
  week9pick4: null,
  week10pick1: null,
  week10pick2: null,
  week10pick3: null,
  week10pick4: null,
  week11pick1: null,
  week11pick2: null,
  week11pick3: null,
  week11pick4: null,
  week12pick1: null,
  week12pick2: null,
  week12pick3: null,
  week12pick4: null,
  week13pick1: null,
  week13pick2: null,
  week13pick3: null,
  week13pick4: null,
  week14pick1: null,
  week14pick2: null,
  week14pick3: null,
  week14pick4: null,
  week15pick1: null,
  week15pick2: null,
  week15pick3: null,
  week15pick4: null,
  week16pick1: null,
  week16pick2: null,
  week16pick3: null,
  week16pick4: null,
  week17pick1: null,
  week17pick2: null,
  week17pick3: null,
  week17pick4: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.TEAM_SELECTED:
      return {
        ...state,
        [action.payload.fullPickId]: action.payload.teamCode
      }
    default:
      return state
  }
}

export default reducer
