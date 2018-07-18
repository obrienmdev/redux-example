import React from 'react' // eslint-disable-line no-unused-vars
import Item from './Item' // eslint-disable-line no-unused-vars
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
