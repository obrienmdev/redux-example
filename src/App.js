import React, { Component } from 'react' // eslint-disable-line no-unused-vars
import ItemsList from './ItemsList' // eslint-disable-line no-unused-vars
import ItemInput from './ItemInput' // eslint-disable-line no-unused-vars
import './App.css'

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {items: []}

    this.onAddItem = this.onAddItem.bind(this)
  }

  onAddItem () {
    this.setState({
      items: [...this.state.items, this.state.newItem]
    })
  }

  render () {
    return (
      <div>
        <ItemInput onAddItem={this.onAddItem} />
        <ItemsList items={this.state.items}/>
      </div>
    )
  }
}

export default App
