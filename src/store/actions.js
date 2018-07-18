// needs to be unique for all actions
export const UPDATE_NEW_ITEM = '[Item] Update'

export const updateNewItem = newItemValue => {
  return {
    type: UPDATE_NEW_ITEM,
    payload: newItemValue
  }
}
