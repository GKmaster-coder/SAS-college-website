import React from 'react'
import Header from './components/home/Header'
import HomeBanner from './components/home/HomeBanner'
import Navbar from './components/home/Navbar'
import About from './components/home/About'
import Footer from './components/home/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <HomeBanner/>
      <About/>
      <Footer />
    </div>
  )
}

export default App
