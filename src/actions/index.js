import * as types from '../constants/ActionTypes'

// Ref: https://github.com/redux-utilities/flux-standard-action

const prevStep = () => ({
  type: types.STEPPER_PREV_STEP,
  payload: {}
})

const nextStep = (maxStep) => ({
  type: types.STEPPER_NEXT_STEP,
  payload: {max: maxStep}
})

const jumpStep = (jumpStep, maxStep) => ({
  type: types.STEPPER_JUMP_STEP,
  payload: {
    jump: jumpStep,
    max: maxStep,
  }
})

export {prevStep, nextStep, jumpStep}
