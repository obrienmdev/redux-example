import React, { Component } from 'react' // eslint-disable-line no-unused-vars
import ItemsList from './ItemsList' // eslint-disable-line no-unused-vars
import ItemInput from './ItemInput' // eslint-disable-line no-unused-vars
import './App.css'

class App extends Component {
  render () {
    return (
      <div>
        <ItemInput />
        <ItemsList />
      </div>
    )
  }
}

export default App
