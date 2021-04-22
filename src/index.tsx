import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { WeatherApp } from './WeatherApp'
import { store } from './store'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <WeatherApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister();
