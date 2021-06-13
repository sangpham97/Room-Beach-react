import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { RoomProvider } from '../src/components/context'
ReactDOM.render(
  <RoomProvider>
    <Router>
      <App />
    </Router>
  </RoomProvider>,
  document.getElementById('root')
)

//Mở rộng nhà cung cấp ra khắp cả tree
