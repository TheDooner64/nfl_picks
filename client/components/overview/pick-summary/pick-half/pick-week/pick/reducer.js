import * as constants from './constants'

// Weeks / picks are constant. Each pick will hold a unique NFL team, or null
const initialState = {
  week1pick1: '',
  week1pick2: '',
  week1pick3: '',
  week1pick4: '',
  week2pick1: '',
  week2pick2: '',
  week2pick3: '',
  week2pick4: '',
  week3pick1: '',
  week3pick2: '',
  week3pick3: '',
  week3pick4: '',
  week4pick1: '',
  week4pick2: '',
  week4pick3: '',
  week4pick4: '',
  week5pick1: '',
  week5pick2: '',
  week5pick3: '',
  week5pick4: '',
  week6pick1: '',
  week6pick2: '',
  week6pick3: '',
  week6pick4: '',
  week7pick1: '',
  week7pick2: '',
  week7pick3: '',
  week7pick4: '',
  week8pick1: '',
  week8pick2: '',
  week8pick3: '',
  week8pick4: '',
  week9pick1: '',
  week9pick2: '',
  week9pick3: '',
  week9pick4: '',
  week10pick1: '',
  week10pick2: '',
  week10pick3: '',
  week10pick4: '',
  week11pick1: '',
  week11pick2: '',
  week11pick3: '',
  week11pick4: '',
  week12pick1: '',
  week12pick2: '',
  week12pick3: '',
  week12pick4: '',
  week13pick1: '',
  week13pick2: '',
  week13pick3: '',
  week13pick4: '',
  week14pick1: '',
  week14pick2: '',
  week14pick3: '',
  week14pick4: '',
  week15pick1: '',
  week15pick2: '',
  week15pick3: '',
  week15pick4: '',
  week16pick1: '',
  week16pick2: '',
  week16pick3: '',
  week16pick4: '',
  week17pick1: '',
  week17pick2: '',
  week17pick3: '',
  week17pick4: ''
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
