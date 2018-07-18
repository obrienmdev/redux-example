import * as actions from './actions'

const initialState = {
  newItem: '',
  hoverItem: undefined,
  items: []
}

// always one main reducer, usually called 'root'
// current state defaults to initial state
export const rootReducer = (currentState = initialState, action) => {
  switch (action.type) {
    case actions.UPDATE_NEW_ITEM: {
      return {
        ...currentState,
        newItem: action.payload
      }
    }
    case actions.CREATE_ITEM: {
      return {
        ...currentState,
        newItem: '',
        items: [...currentState.items, currentState.newItem]
      }
    }
    case actions.HOVER_ITEM: {
      return {
        ...currentState,
        hoverItem: action.payload
      }
    }
    default: {
      return currentState
    }
  }
}
