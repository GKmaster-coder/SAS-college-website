import React, { useState } from "react";

const OurTeam = () => {
  const [expandedMember, setExpandedMember] = useState(null);

  const toggleMember = (index) => {
    setExpandedMember(expandedMember === index ? null : index);
  };

  const teamData = [
    {
      image: "https://cdn.hexahealth.com/Image/webp/480x480/2d658464-30f5-496c-98c6-e7ec81921ba5.webp",
      title: "Dr. Geeta Pandey",
      role: "Ayurvedic Specialist",
      details: "Dr. Geeta Pandey has over 15 years of experience in Ayurvedic medicine. She specializes in Panchakarma therapies and has treated thousands of patients with chronic conditions.",
      specialty: "Panchakarma, Chronic Conditions",
      education: "MD in Ayurveda, BAMS"
    },
    {
      image: "https://staticimg.amarujala.com/assets/images/2021/06/16/l-b-aa_1623836732.jpeg",
      title: "Professor Anand Kumar Tyagi",
      role: "Professor of Surgery",
      details: "Prof. Tyagi is a renowned surgeon with 25+ years of experience. He has published numerous research papers and trained hundreds of medical students in advanced surgical techniques.",
      specialty: "Advanced Surgical Techniques",
      education: "MS in General Surgery, PhD"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoQedtAEkun_Q_MXHFBR5C235a-v98HR_1ow&s",
      title: "Dr.(Smt.) Sunita Pandey",
      role: "Therapy Expert",
      details: "Dr. Sunita Pandey is a certified therapy expert specializing in physical rehabilitation. Her innovative approaches have helped patients recover mobility faster than traditional methods.",
      specialty: "Physical Rehabilitation",
      education: "DPT, MPT in Orthopedics"
    },
    {
      image: "https://www.rgsayurvedcollege.in/images/vc_mggau.jpeg",
      title: "Prof Dr Awadhesh Kumar Singh",
      role: "Research Head",
      details: "Prof. Singh leads our research division with a focus on evidence-based Ayurveda. Under his guidance, the team has developed several novel treatment protocols that combine ancient wisdom with modern science.",
      specialty: "Evidence-Based Ayurveda",
      education: "MD in Ayurveda, PhD in Pharmacology"
    },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">Meet Our Expert Team</h1>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Our dedicated professionals bring years of experience and expertise to provide you with the best care possible.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamData.map((member, index) => (
            <div key={index} className="group relative">
              {/* Main Card */}
              <div 
                className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 h-full flex flex-col ${
                  expandedMember === index 
                    ? "ring-2 ring-indigo-500 shadow-xl" 
                    : "hover:shadow-xl hover:-translate-y-2"
                }`}
              >
                <div className="p-6 flex flex-col items-center">
                  <div className="relative mb-5">
                    <img
                      src={member.image}
                      alt={member.title}
                      className="w-36 h-36 rounded-full object-cover border-4 border-white shadow-md"
                    />
                    <div className="absolute inset-0 rounded-full border-2 border-indigo-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 text-center">{member.title}</h3>
                  <p className="text-indigo-600 font-medium mt-1">{member.role}</p>
                  
                  <div className="mt-3 text-sm text-gray-500 text-center">
                    <p><span className="font-semibold">Specialty:</span> {member.specialty}</p>
                  </div>
                </div>

                {/* Expand Button */}
                <div className="mt-auto px-6 pb-4">
                  <button
                    onClick={() => toggleMember(index)}
                    className={`w-full py-2 px-4 rounded-lg flex items-center justify-center transition-all ${
                      expandedMember === index
                        ? "bg-indigo-100 text-indigo-700"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    <span className="mr-2 font-medium">
                      {expandedMember === index ? "Less Info" : "More Info"}
                    </span>
                    <svg
                      className={`w-4 h-4 transform transition-transform ${
                        expandedMember === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>

                {/* Expanded Content (inside card) */}
                <div
                  className={`px-6 pb-6 transition-all duration-500 overflow-hidden ${
                    expandedMember === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pt-4 border-t border-gray-100">
                    <h4 className="font-semibold text-gray-700 mb-2">About</h4>
                    <p className="text-gray-600 text-sm mb-4">{member.details}</p>
                    
                    <h4 className="font-semibold text-gray-700 mb-2">Education</h4>
                    <p className="text-gray-600 text-sm mb-4">{member.education}</p>
                
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;