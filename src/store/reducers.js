import * as actions from './actions'

const initialState = {
  newItem: '',
  items: []
}

// always one main reducer, usually called 'root'
// current state defaults to initial state
export const rootReducer = (currentState = initialState, action) => {
  switch (action.type) {
    case actions.UPDATE_NEW_ITEM: {
      return {
        newItem: action.payload,
        items: currentState.items
      }
    }
    case actions.CREATE_ITEM: {
      return {
        newItem: '',
        items: [...currentState.items, currentState.newItem]
      }
    }
    default: {
      // no nothing
    }
  }
  return currentState
}
