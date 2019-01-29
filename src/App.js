import React from 'react'
import { Root, Routes } from 'react-static'
import Header from './components/header'

import './app.css'

function App() {
  return (
    <Root>
      <Header />
      <div className="content">
        <Routes />
      </div>
    </Root>
  )
}

export default App
