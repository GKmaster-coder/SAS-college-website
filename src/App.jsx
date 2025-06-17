import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/home/Navbar";
import Home from "./pages/Home";
import HeaderTop from "./components/home/HeaderTop";
import Footer from "./components/home/Footer";

//Import for the About Pages 
import Vision from "./pages/About-us/Vision";
import History from "./pages/About-us/History";
import Chairman from "./pages/About-us/Chairman"
const App = () => {
  return (
    <Router>
      <HeaderTop />
      <Navbar />
      <Routes>
         <Route path="/" element={<Home />} />

          {/* About */}
        <Route path="/about/vision" element={<Vision />} />
        <Route path="/about/history" element={<History />} />
        <Route path="/about/chairman" element={<Chairman />} />
        
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
