import React from 'react'
import Header from './components/home/Header'
import HomeBanner from './components/home/HomeBanner'
import Navbar from './components/home/Navbar'
import About from './components/home/About'
import WhyChooseUs from './components/home/WhyChooseUs'
import Footer from './components/home/Footer'
import HeaderTop from './components/home/HeaderTop'
import Events from './components/home/EventsCarousel'


const App = () => {
  return (
    <div>
      <HeaderTop/>
      <Navbar/>
      <HomeBanner/>
      <About/>
      <WhyChooseUs/>
      <Events/>
      <Footer />
      
    </div>
  )
}

export default App
