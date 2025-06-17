import React from 'react';
import { motion } from 'framer-motion';

const data = [
  {
    img: "https://cdn.brandfetch.io/id_jtYn8cb/w/1280/h/719/theme/dark/logo.png?c=1dxbfHSJFAPEGdCLU4o5B",
    title: "NCISM",
    subtitle: "Indian System of Medicine",
    desc: "The NCISM Act, 2020 modernizes medical education and institutional quality for Indian Systems of Medicine.",
    type: "Government Body"
  },
  {
    img: "https://cdn.brandfetch.io/idjqzBzUgL/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1747226553113",
    title: "Ministry of AYUSH",
    subtitle: "Government of India",
    desc: "Promotes Ayurveda, Yoga, Unani, Siddha, and Homeopathy through education and research since 2014.",
    type: "Government Body"
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN-b-3eunXTy4z91cL3SSkPQ19FJJdytaS1g&s",
    title: "MGKVP",
    subtitle: "Mahatma Gandhi Kashi Vidyapith",
    desc: "Renowned university supporting freedom and socialism in India, founded by Babu Shiva Prasad Gupt.",
    type: "University"
  },
  {
    img: "https://www.mggaugkp.ac.in/images/mggaulogo.png",
    title: "Gorakhnath AYUSH University",
    subtitle: "Mahayogi Guru Gorakhnath",
    desc: "Established by CM Yogi Adityanath to support education and research in Ayurveda and allied sciences.",
    type: "University"
  }
];

const Recognition2 = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-tr from-[#0f0f0f] to-[#1c1c1c] text-white relative overflow-hidden">
      <div className="text-center mb-16">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-white"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Approvals & Partnerships
        </motion.h2>
        <p className="text-gray-400 max-w-2xl mx-auto mt-4">
          Recognized by prestigious bodies that ensure educational excellence and regulatory compliance.
        </p>
      </div>

      <motion.ul
        className="space-y-12 max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.3 } } }}
        viewport={{ once: true }}
      >
        {data.map((item, idx) => (
          <motion.li
            key={idx}
            className="flex flex-col md:flex-row items-center gap-8 md:gap-12 border-b border-gray-800 pb-12"
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          >
            <div className="w-28 h-28 flex-shrink-0">
              <img src={item.img} alt={item.title} className="w-full h-full object-contain" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white">{item.title}</h3>
              <p className="text-sm text-pink-400 mb-2">{item.subtitle}</p>
              <p className="text-gray-400 max-w-2xl">{item.desc}</p>
              <span className="mt-3 inline-block bg-pink-900 text-pink-200 text-xs font-semibold py-1 px-3 rounded-full">
                {item.type}
              </span>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};

export default Recognition2;
