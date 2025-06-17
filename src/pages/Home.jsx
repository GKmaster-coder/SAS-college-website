import React from 'react'
import HomeBanner from "../components/home/HomeBanner"
import About from "../components/home/About";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Events from "../components/home/EventsCarousel";
import Divider from "../components/home/DividerSection";
import ServiceSection from "../components/home/ServiceSection";
import Recognition from "../components/home/Recognition";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <About />
      <Divider />
      <WhyChooseUs />
      <Events />
      <Recognition />
      <ServiceSection />
    </div>
  )
}

export default Home
