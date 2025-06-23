import React from "react";

const OurTeam = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-center text-4xl md:text-5xl font-bold text-gray-800 mb-3">Meet Our Expert Team</h1>
          <div className="w-30 h- h-1.5 rounded bg-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Our dedicated professionals bring years of experience and expertise to provide you with the best care possible.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-between h-[320px]">
            <img
              src="https://cdn.hexahealth.com/Image/webp/480x480/2d658464-30f5-496c-98c6-e7ec81921ba5.webp"
              alt="Dr. Geeta Pandey"
              className="w-35 h-35 object-cover rounded-full border-4 border-indigo-100 mb-4"
            />
            <h3 className="text-lg font-bold text-gray-800">Dr. Geeta Pandey</h3>
            <p className="text-indigo-600 text-sm font-medium">Gen. Secretary</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-between h-[320px]">
            <img
              src="https://staticimg.amarujala.com/assets/images/2021/06/16/l-b-aa_1623836732.jpeg"
              alt="Professor Anand Kumar Tyagi"
              className="w-35 h-35 object-cover rounded-full border-4 border-indigo-100 mb-4"
            />
            <h3 className="text-lg font-bold text-gray-800">Professor Anand Kumar Tyagi</h3>
            <p className="text-indigo-600 text-sm font-medium">Vice Chancellor</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-between h-[320px]">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoQedtAEkun_Q_MXHFBR5C235a-v98HR_1ow&s"
              alt="Dr.(Smt.) Sunita Pandey"
              className="w-35 h-35 object-top rounded-full border-4 border-indigo-100 mb-4"
            />
            <h3 className="text-lg font-bold text-gray-800">Dr.(Smt.) Sunita Pandey</h3>
            <p className="text-indigo-600 text-sm font-medium">Registrar/Controller of Examination</p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-between h-[320px]">
            <img
              src="https://www.rgsayurvedcollege.in/images/vc_mggau.jpeg"
              alt="Prof Dr Awadhesh Kumar Singh"
              className="w-35 h-35 object-top rounded-full border-4 border-indigo-100 mb-4"
            />
            <h3 className="text-lg font-bold text-gray-800">Prof Dr Awadhesh Kumar Singh</h3>
            <p className="text-indigo-600 text-sm font-medium">Vice Chanceller(MGGAU)</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurTeam;

