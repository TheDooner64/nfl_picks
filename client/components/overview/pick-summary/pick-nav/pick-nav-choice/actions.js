import {HALF_SELECTED} from './constants'

export const selectHalf = (selectedHalf) => {
  return {
    payload: selectedHalf,
    type: HALF_SELECTED
  }
}
