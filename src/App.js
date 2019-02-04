import React from 'react'
import { Root, Routes } from 'react-static'
import Header from './components/header'
import Footer from './components/footer'

import 'bootstrap/dist/css/bootstrap.min.css'
import './app.css'

function App() {
  return (
    <Root>
      <Header />
      <div className="content">
        <Routes />
      </div>
      <Footer />
    </Root>
  )
}

export default App
