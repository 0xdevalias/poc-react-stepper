import {combineReducers} from 'redux'

import appReducer from './appReducer'
import stepperReducer from './stepperReducer'

export default combineReducers({
  app: appReducer,
  stepper: stepperReducer,
})
