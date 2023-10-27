import React, { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Content from './components/Content'
import Projetos from './components/Projetos'

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Content>
        <Projetos/>
      </Content>
    </>
  )
}

export default App
