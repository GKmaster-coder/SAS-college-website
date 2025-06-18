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
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
