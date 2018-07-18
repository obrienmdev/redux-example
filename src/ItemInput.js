import React from 'react'
import { connect } from 'react-redux'
import { updateNewItem, createItem } from './store/actions'

const ItemInput = props => (
  <div>
    <input type="text" onChange={props.onItemChanged} value={props.newItem}/>
    <button onClick={props.onAddItem}>Add</button>
  </div>
)

// output of this function is given as props to ItemInput()
const mapStateToProps = state => {
  return {
    newItem: state.newItem
  }
}

// this function's output is too
const mapDispatchToProps = dispatch => {
  return {
    onItemChanged: ev => dispatch(updateNewItem(ev.target.value)),
    onAddItem: () => dispatch(createItem())
  }
}

// map function names are named thus by convention
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemInput)
