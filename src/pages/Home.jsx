import React, { useState, useEffect } from "react";
import HomeBanner from "../components/home/HomeBanner";
import About from "../components/home/About";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Events from "../components/home/EventsCarousel";
import Divider from "../components/home/DividerSection";
import ServiceSection from "../components/home/ServiceSection";
import Recognition from "../components/home/Recognition";
import PopUpForm from "../components/home/PopUpForm";

const Home = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  // 👉 Prevent background scrolling when form is open
  useEffect(() => {
    if (isFormOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup in case the component unmounts
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isFormOpen]);

  return (
    <div>
    <HomeBanner onApplyClick={() => setIsFormOpen(true)} />
      {isFormOpen && <PopUpForm onClose={() => setIsFormOpen(false)} />}
      <About />
      <Divider onApplyClick={() => setIsFormOpen(true)} />
        {isFormOpen && <PopUpForm onClose={() => setIsFormOpen(false)} />}
      <WhyChooseUs />
      <Events />
      <Recognition />
      <ServiceSection />
    </div>
  );
};

export default Home;
