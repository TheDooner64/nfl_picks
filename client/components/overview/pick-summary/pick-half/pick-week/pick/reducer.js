import * as constants from './constants'

// Weeks / picks are constant. Each pick will hold a unique NFL team, or null
const initialState = {
  week1pick1: {
    half: 1,
    pick: 1,
    teamCode: '',
    week: 1
  },
  week1pick2: {
    half: 1,
    pick: 2,
    teamCode: '',
    week: 1
  },
  week1pick3: {
    half: 1,
    pick: 3,
    teamCode: '',
    week: 1
  },
  week1pick4: {
    half: 1,
    pick: 4,
    teamCode: '',
    week: 1
  },
  week2pick1: {
    half: 1,
    pick: 1,
    teamCode: '',
    week: 2
  },
  week2pick2: {
    half: 1,
    pick: 2,
    teamCode: '',
    week: 2
  },
  week2pick3: {
    half: 1,
    pick: 3,
    teamCode: '',
    week: 2
  },
  week2pick4: {
    half: 1,
    pick: 4,
    teamCode: '',
    week: 2
  },
  week3pick1: {
    half: 1,
    pick: 1,
    teamCode: '',
    week: 3
  },
  week3pick2: {
    half: 1,
    pick: 2,
    teamCode: '',
    week: 3
  },
  week3pick3: {
    half: 1,
    pick: 3,
    teamCode: '',
    week: 3
  },
  week3pick4: {
    half: 1,
    pick: 4,
    teamCode: '',
    week: 3
  },
  week4pick1: {
    half: 1,
    pick: 1,
    teamCode: '',
    week: 4
  },
  week4pick2: {
    half: 1,
    pick: 2,
    teamCode: '',
    week: 4
  },
  week4pick3: {
    half: 1,
    pick: 3,
    teamCode: '',
    week: 4
  },
  week4pick4: {
    half: 1,
    pick: 4,
    teamCode: '',
    week: 4
  },
  week5pick1: {
    half: 1,
    pick: 1,
    teamCode: '',
    week: 5
  },
  week5pick2: {
    half: 1,
    pick: 2,
    teamCode: '',
    week: 5
  },
  week5pick3: {
    half: 1,
    pick: 3,
    teamCode: '',
    week: 5
  },
  week5pick4: {
    half: 1,
    pick: 4,
    teamCode: '',
    week: 5
  },
  week6pick1: {
    half: 1,
    pick: 1,
    teamCode: '',
    week: 6
  },
  week6pick2: {
    half: 1,
    pick: 2,
    teamCode: '',
    week: 6
  },
  week6pick3: {
    half: 1,
    pick: 3,
    teamCode: '',
    week: 6
  },
  week6pick4: {
    half: 1,
    pick: 4,
    teamCode: '',
    week: 6
  },
  week7pick1: {
    half: 1,
    pick: 1,
    teamCode: '',
    week: 7
  },
  week7pick2: {
    half: 1,
    pick: 2,
    teamCode: '',
    week: 7
  },
  week7pick3: {
    half: 1,
    pick: 3,
    teamCode: '',
    week: 7
  },
  week7pick4: {
    half: 1,
    pick: 4,
    teamCode: '',
    week: 7
  },
  week8pick1: {
    half: 1,
    pick: 1,
    teamCode: '',
    week: 8
  },
  week8pick2: {
    half: 1,
    pick: 2,
    teamCode: '',
    week: 8
  },
  week8pick3: {
    half: 1,
    pick: 3,
    teamCode: '',
    week: 8
  },
  week8pick4: {
    half: 1,
    pick: 4,
    teamCode: '',
    week: 8
  },
  week9pick1: {
    half: 2,
    pick: 1,
    teamCode: '',
    week: 9
  },
  week9pick2: {
    half: 2,
    pick: 2,
    teamCode: '',
    week: 9
  },
  week9pick3: {
    half: 2,
    pick: 3,
    teamCode: '',
    week: 9
  },
  week9pick4: {
    half: 2,
    pick: 4,
    teamCode: '',
    week: 9
  },
  week10pick1: {
    half: 2,
    pick: 1,
    teamCode: '',
    week: 10
  },
  week10pick2: {
    half: 2,
    pick: 2,
    teamCode: '',
    week: 10
  },
  week10pick3: {
    half: 2,
    pick: 3,
    teamCode: '',
    week: 10
  },
  week10pick4: {
    half: 2,
    pick: 4,
    teamCode: '',
    week: 10
  },
  week11pick1: {
    half: 2,
    pick: 1,
    teamCode: '',
    week: 11
  },
  week11pick2: {
    half: 2,
    pick: 2,
    teamCode: '',
    week: 11
  },
  week11pick3: {
    half: 2,
    pick: 3,
    teamCode: '',
    week: 11
  },
  week11pick4: {
    half: 2,
    pick: 4,
    teamCode: '',
    week: 11
  },
  week12pick1: {
    half: 2,
    pick: 1,
    teamCode: '',
    week: 12
  },
  week12pick2: {
    half: 2,
    pick: 2,
    teamCode: '',
    week: 12
  },
  week12pick3: {
    half: 2,
    pick: 3,
    teamCode: '',
    week: 12
  },
  week12pick4: {
    half: 2,
    pick: 4,
    teamCode: '',
    week: 12
  },
  week13pick1: {
    half: 2,
    pick: 1,
    teamCode: '',
    week: 13
  },
  week13pick2: {
    half: 2,
    pick: 2,
    teamCode: '',
    week: 13
  },
  week13pick3: {
    half: 2,
    pick: 3,
    teamCode: '',
    week: 13
  },
  week13pick4: {
    half: 2,
    pick: 4,
    teamCode: '',
    week: 13
  },
  week14pick1: {
    half: 2,
    pick: 1,
    teamCode: '',
    week: 14
  },
  week14pick2: {
    half: 2,
    pick: 2,
    teamCode: '',
    week: 14
  },
  week14pick3: {
    half: 2,
    pick: 3,
    teamCode: '',
    week: 14
  },
  week14pick4: {
    half: 2,
    pick: 4,
    teamCode: '',
    week: 14
  },
  week15pick1: {
    half: 2,
    pick: 1,
    teamCode: '',
    week: 15
  },
  week15pick2: {
    half: 2,
    pick: 2,
    teamCode: '',
    week: 15
  },
  week15pick3: {
    half: 2,
    pick: 3,
    teamCode: '',
    week: 15
  },
  week15pick4: {
    half: 2,
    pick: 4,
    teamCode: '',
    week: 15
  },
  week16pick1: {
    half: 2,
    pick: 1,
    teamCode: '',
    week: 16
  },
  week16pick2: {
    half: 2,
    pick: 2,
    teamCode: '',
    week: 16
  },
  week16pick3: {
    half: 2,
    pick: 3,
    teamCode: '',
    week: 16
  },
  week16pick4: {
    half: 2,
    pick: 4,
    teamCode: '',
    week: 16
  },
  week17pick1: {
    half: 2,
    pick: 1,
    teamCode: '',
    week: 17
  },
  week17pick2: {
    half: 2,
    pick: 2,
    teamCode: '',
    week: 17
  },
  week17pick3: {
    half: 2,
    pick: 3,
    teamCode: '',
    week: 17
  },
  week17pick4: {
    half: 2,
    pick: 4,
    teamCode: '',
    week: 17
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.TEAM_SELECTED:
      return {
        ...state,
        [action.payload.fullPickId]: action.payload.pick
      }
    default:
      return state
  }
}

export default reducer
