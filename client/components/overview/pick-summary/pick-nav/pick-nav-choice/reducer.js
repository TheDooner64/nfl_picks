import * as constants from './constants'

const reducer = (state = 'half1', action) => {
  switch (action.type) {
    case constants.HALF_SELECTED:
      return action.payload
    default:
      return state
  }
}

export default reducer
