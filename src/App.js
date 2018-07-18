import React, { Component } from 'react'
import ItemsList from './ItemsList'
import ItemInput from './ItemInput'
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
