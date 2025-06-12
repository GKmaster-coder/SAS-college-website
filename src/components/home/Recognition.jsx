import React from 'react';

const Image1 = "https://cdn.brandfetch.io/id_jtYn8cb/w/1280/h/719/theme/dark/logo.png?c=1dxbfHSJFAPEGdCLU4o5B";
const Image2 = "https://cdn.brandfetch.io/idjqzBzUgL/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1747226553113";
const Image3 ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN-b-3eunXTy4z91cL3SSkPQ19FJJdytaS1g&s";
const Image4 = "https://www.mggaugkp.ac.in/images/mggaulogo.png";

const Recognition = () => {
  return (
    <section
      id="recognition"
      className="py-20 px-4 sm:px-6 bg-gradient-to-br from-yellow-100 to-yellow-50 text-gray-900"
      aria-labelledby="recognition-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            id="recognition-heading"
            className="text-center text-3xl md:text-4xl font-extrabold text-yellow-600 mb-4"
          >
            Regulatory Approvals & Recognitions
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {[{
            img: Image1,
            alt: "NCISM Logo",
            title: "NCISM – Indian System of Medicine",
            desc: "The NCISM Act, 2020 provides for quality medical education, research, and institutional assessment in Indian Systems of Medicine. It replaces the 1970 Indian Medicine Central Council Act to modernize the framework for medical professionals and grievance redressal.",
            schema: "https://schema.org/GovernmentOrganization"
          }, {
            img: Image2,
            alt: "AYUSH Ministry Logo",
            title: "Ministry of AYUSH",
            desc: "Established on 9th November 2014, the Ministry of AYUSH promotes Ayurveda, Yoga, Unani, Siddha, and Homeopathy. Previously ISM&H (1995) and AYUSH Department (2003), it drives education and research across these systems.",
            schema: "https://schema.org/GovernmentOrganization"
          }, {
            img: Image3,
            alt: "MGKVP University Logo",
            title: "Mahatma Gandhi Kashi Vidyapith",
            desc: "Renamed in 1995, MGKVP is a historic institution tied to India's freedom and socialist movements. Founded by Babu Shiva Prasad Gupt with inspiration from Mahatma Gandhi and Dr. Bhagwan Das.",
            schema: "https://schema.org/CollegeOrUniversity"
          }, {
            img: Image4,
            alt: "Gorakhnath AYUSH University Logo",
            title: "Mahayogi Guru Gorakhnath AYUSH University",
            desc: "Spearheaded by CM Yogi Adityanath, this AYUSH university spans 52 hectares and supports Ayurveda, Unani, Homeopathy, Yoga, Siddha, and other disciplines with quality education, training, and research.",
            schema: "https://schema.org/CollegeOrUniversity"
          }].map((card, idx) => (
            <article
              key={idx}
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col h-full"
              itemScope
              itemType={card.schema}
            >
              <div className="p-6 flex flex-col items-center text-center h-full">
                <div className="bg-yellow-50 p-4 rounded-full mb-6 border-2 border-yellow-100">
                  <img
                    src={card.img}
                    alt={card.alt}
                    className="h-16 w-16 object-contain"
                    loading="lazy"
                    itemProp="logo"
                  />
                </div>
                <h3 
                  className="text-xl font-bold text-gray-800 mb-4 leading-tight" 
                  itemProp="name"
                >
                  {card.title}
                </h3>
                <p 
                  className="text-gray-600 mb-6 flex-grow" 
                  itemProp="description"
                >
                  {card.desc}
                </p>
                <div className="mt-auto w-full">
                  <div className="bg-yellow-500 text-white text-xs font-semibold px-3 py-1 rounded-full inline-block">
                    {card.schema.includes("Government") ? "Government" : "University"}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recognition;