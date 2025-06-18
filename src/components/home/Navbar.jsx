import React, { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom"; 

const NavBar = () => {
  const [dropdowns, setDropdowns] = useState({
    about: false,
    faculty: false,
    studentzone: false,
    college: false,
    hospital: false,
    notices: false,
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close all dropdowns on route change
  useEffect(() => {
    setDropdowns({
      about: false,
      faculty: false,
      studentzone: false,
      college: false,
      hospital: false,
      notices: false,
    });
    setMobileMenuOpen(false);
  }, [location]);

  const toggleDropdown = (key) => {
    setDropdowns((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const dropdownItems = {
    about: ["Introduction","Gallery"],
    faculty: ["Teaching Staff", "Non-Teaching Staff"],
    studentzone: ["Syllabus", "Time Table", "Academic Calendar"],
    college: ["College Infrastructure","Hostel Infrastructure"],
    hospital: ["OPD", "IPD", "Facilities"],
    notices: ["General Notices", "Exam Notices"],
  };

  // Check if a link is active
  const isActive = (path) => {
    return location.pathname === path || 
           (path !== '/' && location.pathname.startsWith(path));
  };

  // Check if any dropdown item is active
  const isDropdownActive = (key) => {
    return dropdownItems[key].some(item => {
      const path = `/${key}/${item.toLowerCase().replace(/ /g, '-')}`;
      return isActive(path);
    });
  };

  return (
    <header className="bg-white text-[#4b2e2e] shadow-md z-50 relative">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/">
            <img
              src="./logo.png"
              alt="SAS Ayurvedic Medical College & Hospital"
              className="w-36 h-20 object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 items-center font-medium text-[17px]">
            <Link 
              to="/" 
              className={`hover:text-[#6b4c3b] transition ${isActive('/') ? 'text-red-600 font-semibold' : ''}`}
            >
              Home
            </Link>

            {Object.keys(dropdownItems).map((key) => (
              <div key={key} className="relative">
                <button
                  onClick={() => toggleDropdown(key)}
                  className={`flex items-center gap-1 hover:text-[#6b4c3b] ${isDropdownActive(key) ? 'text-red-600 font-semibold' : ''}`}
                >
                  {key.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/^\w/, c => c.toUpperCase())}
                  <ChevronDown className="w-4 h-4" />
                </button>
                {dropdowns[key] && (
                  <ul className="absolute left-0 mt-2 w-44 bg-[#6b4c3b] rounded-md shadow-lg z-50">
                    {dropdownItems[key].map((item) => {
                      const path = `/${key}/${item.toLowerCase().replace(/ /g, '-')}`;
                      return (
                        <li key={item}>
                          <Link
                            to={path}
                            className={`block px-4 py-2 text-sm hover:bg-[#a67c52] ${isActive(path) ? 'bg-[#a67c52] font-medium' : 'text-white'}`}
                          >
                            {item}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            ))}

            <Link 
              to="/contact" 
              className={`hover:text-[#6b4c3b] transition ${isActive('/contact') ? 'text-red-600 font-semibold' : ''}`}
            >
              Contact Us
            </Link>
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
          <Link 
            to="/" 
            className={`block px-3 py-2 rounded hover:bg-[#d9c2b0] ${isActive('/') ? 'bg-[#d9c2b0] text-red-600 font-semibold' : ''}`}
          >
            Home
          </Link>

          {Object.keys(dropdownItems).map((key) => (
            <div key={key}>
              <button
                onClick={() => toggleDropdown(key)}
                className={`w-full flex justify-between items-center px-3 py-2 hover:bg-[#d9c2b0] ${isDropdownActive(key) ? 'bg-[#d9c2b0] text-red-600 font-semibold' : ''}`}
              >
                {key.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/^\w/, c => c.toUpperCase())}
                <ChevronDown className="w-4 h-4" />
              </button>
              {dropdowns[key] && (
                <div className="pl-4">
                  {dropdownItems[key].map((item) => {
                    const path = `/${key}/${item.toLowerCase().replace(/ /g, '-')}`;
                    return (
                      <Link
                        key={item}
                        to={path}
                        className={`block px-3 py-1 rounded hover:bg-[#a67c52] hover:text-white ${isActive(path) ? 'bg-[#a67c52] text-white font-medium' : ''}`}
                      >
                        {item}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          ))}

          <Link 
            to="/contact" 
            className={`block px-3 py-2 rounded hover:bg-[#d9c2b0] ${isActive('/contact') ? 'bg-[#d9c2b0] text-red-600 font-semibold' : ''}`}
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
};

export default NavBar;