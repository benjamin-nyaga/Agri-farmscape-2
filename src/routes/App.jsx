import React from 'react'
import Nav from '../components/shared/Nav'
import '../App.css'
import Footer from '../components/shared/Footer'
import { Outlet } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import Hero from '../components/Hero'

function App() {

  return (
    <>
      <Nav/>
      <Hero/>
      <Outlet/>
      <Footer/>
      <Analytics/>
    </>
  )
}

export default App
