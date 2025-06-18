import React, { useState } from 'react';
import teachingStaff from "./teachingstaff";

const Teaching = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleStaff = showAll ? teachingStaff : teachingStaff.slice(0, 9);

  return (
    <section className="bg-[#e9e3d4] py-16">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-[#283e49] mb-12">
          Our Teaching Staff
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {visibleStaff.map((staff, index) => (
            <div
              key={index}
              className="bg-white border border-[#d4cdbb] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-[#283e49] mb-1">{staff.name}</h3>
              <p className="text-[#3b5a66] font-medium">{staff.designation}</p>
              <p className="text-sm text-gray-700 mt-1">{staff.department}</p>
              <p className="text-xs text-gray-500 mt-2">Code: {staff.code}</p>
            </div>
          ))}
        </div>

        {/* Button */}
        {teachingStaff.length > 9 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-[#283e49] hover:bg-[#1e2e35] text-[#e9e3d4] px-6 py-2 rounded-md font-medium shadow-md transition-all"
            >
              {showAll ? "Show Less" : "See More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Teaching;

