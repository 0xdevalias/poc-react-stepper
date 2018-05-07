import {Map, Set} from 'immutable'
import * as types from '../constants/ActionTypes'

const initialStepperState = Map({
  current: 0,
  done: Set([])
})

const stepperReducer = (state = initialStepperState, action) => {
  switch (action.type) {
    case types.STEPPER_PREV_STEP: {
      const newCur = state.get("current") - 1;

      if (!(newCur >= 0)) {
        return state
      }

      return state
        .update("done", v => v.delete(newCur))
        .set("current", newCur);
    }

    case types.STEPPER_NEXT_STEP: {
      const oldCur = state.get("current");
      const newCur = oldCur + 1;

      if (newCur >= action.payload.max) {
        return state
      }

      return state
        .update("done", v => v.add(oldCur))
        .set("current", newCur)
    }

    default:
      return state
  }
}

export default stepperReducer