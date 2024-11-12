import React, { useState } from 'react'
import Nav from './components/shared/Nav'
import './App.css'
import Hero from './components/shared/Hero'
import Footer from './components/shared/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>
      <Hero/>
      <Footer/>
    </>
  )
}

export default App
