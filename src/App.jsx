import React, { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Content from './components/Content'

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Content>
        <div>
          Hello world!
        </div>
      </Content>
    </>
  )
}

export default App
