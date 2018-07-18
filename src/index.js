import React from 'react' // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom'
import './index.css'
import App from './App' // eslint-disable-line no-unused-vars
import registerServiceWorker from './registerServiceWorker'

import { createStore } from 'redux'
import { Provider } from 'react-redux' // eslint-disable-line no-unused-vars
import { rootReducer } from './store/reducers'

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}><App/></Provider>,
  document.getElementById('root')
)
registerServiceWorker()
