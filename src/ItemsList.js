import React from 'react'
import Item from './Item'
import { connect } from 'react-redux'

const ItemsList = props => (
  <ul>
    {props.items.map(i => <Item key={i} item={i}/>)}
  </ul>
)

const mapStateToProps = state => {
  return {
    items: state.items
  }
}

// no need to map dispatch
export default connect(
  mapStateToProps
)(ItemsList)
