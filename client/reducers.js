import PickReducer from './components/overview/pick-summary/pick-half/pick-week/pick/reducer'
import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'

const reducers = combineReducers(
  {
    form: formReducer,
    picks: PickReducer
  }
)

export default reducers
