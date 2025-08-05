import React from 'react';
import { pdfLinks } from './pdflinks';

const HospitalStaff = () => {
  return (
    <div className="w-full min-h-screen px-6 md:px-24 py-16 space-y-16 bg-[#fdfcf7] text-[#1c2c4c]">
      <h1 className="text-3xl md:text-5xl font-bold text-center">Hospital Staff Documents</h1>

      <div className="w-full">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">List of Hospital Staff Department wise</h2>
        <iframe
          src={pdfLinks.Listofstaff}
          title="Medical Staff PDF"
          className="w-full h-[600px] border-2 border-[#ccc] rounded-lg shadow-md"
        />
      </div>

      <div className="w-full">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Monthly Attendance of Hospital Staff</h2>
        <iframe
          src={pdfLinks.attendence}
          title="Support Staff PDF"
          className="w-full h-[600px] border-2 border-[#ccc] rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default HospitalStaff;
