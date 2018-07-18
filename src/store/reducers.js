import * as actions from './actions'

const initialState = {
  newItem: ''
}

// always one main reducer, usually called 'root'
// current state defaults to initial state
export const rootReducer = (currentState = initialState, action) => {
  switch (action.type) {
    case actions.UPDATE_NEW_ITEM: {
      return {
        newItem: action.payload
      }
    }
    default: {
      // no nothing
    }
  }
  return currentState
}
