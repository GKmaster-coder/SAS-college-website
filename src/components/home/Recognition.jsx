import React from 'react';
import { motion } from 'framer-motion';

const Image1 = "https://cdn.brandfetch.io/id_jtYn8cb/w/1280/h/719/theme/dark/logo.png?c=1dxbfHSJFAPEGdCLU4o5B";
const Image2 = "https://cdn.brandfetch.io/idjqzBzUgL/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1747226553113";
const Image3 ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN-b-3eunXTy4z91cL3SSkPQ19FJJdytaS1g&s";
const Image4 = "https://mgug.ac.in/Photo/largelogo.jpg";

const Recognition = () => {
  const cards = [
    {
      img: Image1,
      alt: "NCISM Logo",
      title: "NCISM – Indian System of Medicine",
      desc: "The NCISM Act, 2020 provides for quality medical education, research, and institutional assessment in Indian Systems of Medicine. It replaces the 1970 Indian Medicine Central Council Act to modernize the framework for medical professionals and grievance redressal.",
      schema: "https://schema.org/GovernmentOrganization"
    }, 
    {
      img: Image2,
      alt: "AYUSH Ministry Logo",
      title: "Ministry of AYUSH",
      desc: "Established on 9th November 2014, the Ministry of AYUSH promotes Ayurveda, Yoga, Unani, Siddha, and Homeopathy. Previously ISM&H (1995) and AYUSH Department (2003), it drives education and research across these systems.",
      schema: "https://schema.org/GovernmentOrganization"
    }, 
    {
      img: Image3,
      alt: "MGKVP University Logo",
      title: "Mahatma Gandhi Kashi Vidyapith",
      desc: "Renamed in 1995, MGKVP is a historic institution tied to India's freedom and socialist movements. Founded by Babu Shiva Prasad Gupt with inspiration from Mahatma Gandhi and Dr. Bhagwan Das.",
      schema: "https://schema.org/CollegeOrUniversity"
    }, 
    {
      img: Image4,
      alt: "Gorakhnath AYUSH University Logo",
      title: "Mahayogi Guru Gorakhnath AYUSH University",
      desc: "Spearheaded by CM Yogi Adityanath, this AYUSH university spans 52 hectares and supports Ayurveda, Unani, Homeopathy, Yoga, Siddha, and other disciplines with quality education, training, and research.",
      schema: "https://schema.org/CollegeOrUniversity"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
    }
  };

  return (
    <section
      id="recognition"
      className="py-24 px-4 sm:px-6 bg-gradient-to-br from-yellow-50 to-amber-50 text-gray-900 relative overflow-hidden"
      aria-labelledby="recognition-heading"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-amber-200 blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-yellow-200 blur-xl"></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full bg-amber-100 blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            id="recognition-heading"
            className="text-center text-4xl md:text-5xl font-bold text-amber-800 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Regulatory Approvals & Recognitions
          </motion.h2>
          <motion.div 
            className="w-32 h-1.5 bg-gradient-to-r from-amber-400 to-yellow-600 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          ></motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {cards.map((card, idx) => (
            <motion.article
              key={idx}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-amber-100 flex flex-col h-full relative"
              itemScope
              itemType={card.schema}
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-yellow-600"></div>
              
              <div className="p-8 flex flex-col items-center text-center h-full">
                <div className="relative mb-8">
                  <div className="absolute -inset-4 bg-amber-100 rounded-full opacity-30"></div>
                  <div className="relative bg-white p-4 rounded-full border-2 border-amber-50 shadow-sm">
                    <img
                      src={card.img}
                      alt={card.alt}
                      className="h-16 w-16 object-contain"
                      loading="lazy"
                      itemProp="logo"
                    />
                  </div>
                </div>
                
                <h3 
                  className="text-xl font-bold text-gray-800 mb-4 leading-tight relative"
                  itemProp="name"
                >
                  <span className="bg-gradient-to-r from-amber-500 to-yellow-600 bg-clip-text text-transparent">
                    {card.title}
                  </span>
                </h3>
                
                <p 
                  className="text-gray-600 mb-6 flex-grow text-left"
                  itemProp="description"
                >
                  {card.desc}
                </p>
                
                <div className="mt-auto w-full">
                  <span className={`text-xs font-semibold px-3 py-1.5 rounded-full ${
                    card.schema.includes("Government") 
                      ? "bg-amber-100 text-amber-800" 
                      : "bg-yellow-100 text-yellow-800"
                  }`}>
                    {card.schema.includes("Government") ? "Government Body" : "University"}
                  </span>
                </div>
              </div>
              
              {/* Corner accent */}
              <div className="absolute bottom-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-amber-50 rounded-tl-full"></div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Recognition;