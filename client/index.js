import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/map'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.getElementById('map')
  )
})
