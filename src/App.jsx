import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/home/Navbar";
import Home from "./pages/Home";
import HeaderTop from "./components/home/HeaderTop";
import Footer from "./components/home/Footer";

//Import for the About Pages
import Gallery from "./pages/About-us/Gallery";
import Introduction from "./pages/About-us/Introduction";
import Contact from "./pages/ContactUs"
//Import from the Faculty
import Teaching from "./pages/Faculty/Teaching"
import NonTeaching from "./pages/Faculty/Nonteaching"
import NotFound from "./pages/NotFound"

import CollegeInfrastructure from "./pages/College/CollegeInfrastructure";
import HostelInfrastructure from "./pages/College/HostelInfrastructure";
import FloatingContactButton from "./components/Shared/FloatingContactButton"

const App = () => {
  return (
    <Router>
      <HeaderTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        < Route path='/contact'  element={<Contact/>}/>
        {/* About */}
        <Route path="/about/introduction" element={<Introduction />} />
        <Route path="/about/gallery" element={<Gallery />} />
         {/* Faculty */}
         <Route path="/faculty/teaching-staff" element={<Teaching />} />
         <Route path="/faculty/non-teaching-staff" element={<NonTeaching />} />

         {/* College */}
          <Route path="/college/college-infrastructure" element={<CollegeInfrastructure />} />
           <Route path="/college/hostel-infrastructure" element={<HostelInfrastructure />} />

          <Route path="*" element={<NotFound />} />
      </Routes>
       
       <FloatingContactButton/>
      <Footer />
    </Router>
  );
};

export default App;
