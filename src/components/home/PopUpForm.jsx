import React, { useEffect, useState } from "react";
import stateCityData from "../../data/stateCityData";

const PopupForm = ({ onClose }) => {
  const [selectedState, setSelectedState] = useState("");
  const [cities, setCities] = useState([]);

  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => document.body.classList.remove("overflow-hidden");
  }, []);

  useEffect(() => {
    if (selectedState) {
      setCities(stateCityData[selectedState] || []);
    } else {
      setCities([]);
    }
  }, [selectedState]);

  return (
    <div className="fixed inset-0 z-50 bg-opacity-50 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-lg rounded-xl shadow-xl p-6 sm:p-8 relative animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-5 text-gray-500 hover:text-[#885548] text-2xl font-bold transition-colors duration-200"
        >
          &times;
        </button>

        <h3 className="text-xl sm:text-2xl font-bold mb-6 text-[#283e49] border-b-2 border-[#8da540] pb-2">
          Application Form
        </h3>

        <form className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label className="block text-sm sm:text-base text-gray-700 mb-1">First Name</label>
              <input
                type="text"
                name="firstName"
                required
                placeholder="John"
                className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8da540]"
              />
            </div>

            <div>
              <label className="block text-sm sm:text-base text-gray-700 mb-1">Last Name</label>
              <input
                type="text"
                name="lastName"
                required
                placeholder="Doe"
                className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8da540]"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm sm:text-base text-gray-700 mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              required
              placeholder="9876543210"
              className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8da540]"
            />
          </div>

          <div>
            <label className="block text-sm sm:text-base text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="user@example.com"
              className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8da540]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label className="block text-sm sm:text-base text-gray-700 mb-1">State</label>
              <select
                name="state"
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8da540] bg-white"
              >
                <option value="">Select State</option>
                {Object.keys(stateCityData).map((state) => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm sm:text-base text-gray-700 mb-1">City</label>
              <select
                name="city"
                disabled={!cities.length}
                className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8da540] bg-white"
              >
                <option value="">{cities.length ? "Select City" : "Select State First"}</option>
                {cities.map((city) => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm sm:text-base text-gray-700 mb-1">Address Line 1</label>
            <input
              type="text"
              name="address1"
              placeholder="House no., Street name"
              className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8da540]"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-[#885548] hover:bg-[#76473a] text-white py-3 rounded-lg font-semibold transition duration-300"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;