// keys need to be unique for all actions
export const UPDATE_NEW_ITEM = '[Item] Update'
export const CREATE_ITEM = '[Items] Create'
export const HOVER_ITEM = '[Item] Hover'

export const updateNewItem = newItemValue => {
  return {
    type: UPDATE_NEW_ITEM,
    payload: newItemValue
  }
}

export const createItem = newItemValue => {
  return {
    type: CREATE_ITEM
    // value for payload is already in the state
  }
}

export const hoverItem = newItemValue => {
  return {
    type: HOVER_ITEM,
    payload: newItemValue
  }
}
