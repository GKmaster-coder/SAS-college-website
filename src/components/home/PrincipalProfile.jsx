import React from "react";

const PrincipalProfile = () => {
  return (
    <div className="bg-gradient-to-br from-white via-blue-50 to-blue-100 p-6 md:p-10 rounded-2xl shadow-lg max-w-5xl mx-auto my-12 border border-blue-50">
      <div className="grid md:grid-cols-3 gap-8 items-start">
        {/* Left: Details */}
        <div className="md:col-span-2 space-y-5">
          <div className="border-l-4 border-[#007EA7] pl-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[#007EA7]">
              Prof. Devendra Kumar Singh{" "}
              <span className="block sm:inline text-sm md:text-base italic text-[#087521] mt-1 sm:mt-0">
                (Principal / Medical Superintendent)
              </span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <Detail label="Date of birth" value="07-Jul-1972" />
            <Detail label="Mobile No" value="8787026697, 9452349931" />
            <Detail label="Email ID" value="principalsasamch@gmail.com" />
            <Detail
              label="Address"
              value="S-2/1-C-3, Bhuvneshwar Nagar Colony, Orderly Bazar, Varanasi"
              fullWidth
            />
            <Detail
              label="Qualification"
              value="BAMS, M.D. (Rognidana evam Vikrti Vigyan)"
              fullWidth
            />
            <Detail
              label="Date of joining"
              value="13-Jan-2024 (As Principal / Medical Superintendent)"
              fullWidth
            />
            <Detail label="Registration no" value="46710" />
            <Detail label="Experience in teaching" value="More Than 13 years" />
          </div>

          <div className="pt-4 bg-blue-50/50 p-4 rounded-lg">
            <h3 className="font-semibold text-[#087521] text-lg mb-2">Message:</h3>
            <p className="text-sm md:text-base text-justify leading-relaxed text-gray-700">
              It is our dreams, which is gradually unfolding. Endeavors are there to build up
              institute which may stand alone for its quality of education and service. Presently,
              this institute is the first of its type to provide a degree in Ayurvedic Course in
              Varanasi districts. The Institute along with its faculty members is determined to be
              the best in Uttar Pradesh.
            </p>
          </div>
        </div>

        {/* Right: Image */}
        <div className="flex flex-col items-center md:items-end space-y-4">
          <div className="relative">
            <img
              src="/principal.png"
              alt="Prof. Devendra Kumar Singh"
              className="w-48 h-48 md:w-64 md:h-64 rounded-xl object-cover shadow-md border-4 border-white"
            />
            <div className="absolute inset-0 rounded-xl border-2 border-blue-200/50 pointer-events-none"></div>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-600 italic">"Leadership in Ayurvedic Education"</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Detail = ({ label, value, fullWidth = false }) => (
  <div className={fullWidth ? "sm:col-span-2" : ""}>
    <p className="text-sm md:text-base">
      <span className="font-semibold text-[#97660c] block mb-1">{label}</span>
      <span className="text-gray-700">{value}</span>
    </p>
  </div>
);

export default PrincipalProfile;