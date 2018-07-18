// keys need to be unique for all actions
export const UPDATE_NEW_ITEM = '[Item] Update'
export const CREATE_ITEM = '[Items] Create'

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
