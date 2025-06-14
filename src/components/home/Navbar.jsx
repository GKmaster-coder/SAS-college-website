import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const NavBar = () => {
  const [dropdowns, setDropdowns] = useState({
    aboutus: false,
    faculty: false,
    studentzone: false,
    college: false,
    hospital: false,
    notices: false,
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = (key) => {
    setDropdowns((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const dropdownItems = {
    aboutus: ["Vision & Mission", "History", "Chairman Message"],
    faculty: ["Teaching Staff", "Non-Teaching Staff"],
    studentzone: ["Syllabus", "Time Table", "Academic Calendar"],
    college: ["Departments", "Infrastructure", "Library"],
    hospital: ["OPD", "IPD", "Facilities"],
    notices: ["General Notices", "Exam Notices"]
  };

  return (
    <header className="bg-white text-[#4b2e2e] shadow-md z-55">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <img
            src="./logo.png"
            alt="SAS Ayurvedic Medical College & Hospital"
            className="w-46 h-35 object-contain"
          />

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 items-center font-medium text-[17px]">
            <a href="/" className="hover:text-brown-700 transition">Home</a>

            {Object.keys(dropdownItems).map((key) => (
              <div key={key} className="relative">
                <button
                  onClick={() => toggleDropdown(key)}
                  className="flex items-center gap-1 hover:text-[#6b4c3b]"
                >
                  {key.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/^\w/, c => c.toUpperCase())} <ChevronDown className="w-4 h-4" />
                </button>
                {dropdowns[key] && (
                  <ul className="absolute left-0 mt-2 w-44 bg-[#6b4c3b] rounded-md shadow-lg z-50">
                    {dropdownItems[key].map((item) => (
                      <li key={item}>
                        <a
                          href={`/${key}/${item.toLowerCase().replace(/ /g, '-')}`}
                          className="block px-4 py-2 text-sm text-white hover:bg-[#a67c52] hover:text-white"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            <a href="/contact" className="hover:text-[#6b4c3b] transition">Contact Us</a>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? (
                <X className="w-8 h-8 text-[#6b4c3b]" />
              ) : (
                <Menu className="w-8 h-8 text-[#6b4c3b]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#f9f4f0] px-4 py-6 space-y-2 text-[#4b2e2e]">
          <a href="/" className="block px-3 py-2 rounded hover:bg-[#d9c2b0]">Home</a>

          {Object.keys(dropdownItems).map((key) => (
            <div key={key}>
              <button
                onClick={() => toggleDropdown(key)}
                className="w-full flex justify-between items-center px-3 py-2 hover:bg-[#d9c2b0]"
              >
                {key.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/^\w/, c => c.toUpperCase())} <ChevronDown className="w-4 h-4" />
              </button>
              {dropdowns[key] && (
                <div className="pl-4">
                  {dropdownItems[key].map((item) => (
                    <a
                      key={item}
                      href={`/${key}/${item.toLowerCase().replace(/ /g, '-')}`}
                      className="block px-3 py-1 rounded hover:bg-[#a67c52] hover:text-white"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}

          <a href="/contact" className="block px-3 py-2 rounded hover:bg-[#d9c2b0]">Contact Us</a>
        </div>
      )}
    </header>
  );
};

export default NavBar;



