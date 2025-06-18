import React from "react";
import { motion } from "framer-motion";
import PageBanner from "../../components/Shared/PageBanner";
import AboutSlider from "../../components/Shared/AboutSlider";
import About from "../../components/home/About";
import States from "../../components/Shared/CollegeStatesSection";

const aboutBg =
  "https://i.pinimg.com/736x/5f/4b/52/5f4b52469868262ddb70c68765969995.jpg";

const Introduction = () => {
  return (
    <div>
      <PageBanner title="About Us" backgroundImage={aboutBg} />

      {/* Intro Section */}
      <section className="py-15 px-6 md:px-10 bg-[#fefaf6]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#885548]">
              <span className="relative pb-2">
                Introduction
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#885548]"></span>
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full bg-white p-8 md:p-10 rounded-lg shadow-sm"
          >
            <p className="text-lg md:text-xl leading-relaxed text-gray-800 space-y-6">
              <span>
                The <strong className="text-[#885548] font-semibold">SAS Ayurvedic Medical College & Hospital</strong> was
                established in 2013 by Dr. Ashok Pandey as "SAS Ayurvedic Hospital,"
                governed by the <strong className="text-[#885548] font-semibold">Society of Advanced Studies</strong>.
              </span>

              <span className="block">
                Initially founded to enhance research in the Indian System of
                Medicine, the management later expanded its mission by establishing
                the college at Rameshwar Road, Harhua, Varanasi, Uttar Pradesh (Pin:
                221105).
              </span>

              <span className="block">
                The primary goal of the society is to promote health
                awareness and care through the Ayurvedic system — an ancient,
                holistic approach known for its accessibility and minimal side
                effects compared to western medicine.
              </span>

              <span className="block">
                The college offers a{" "}
                <strong className="text-[#885548] font-semibold">
                  Bachelor of Ayurvedic Medicine and Surgery (B.A.M.S.)
                </strong>{" "}
                degree, recognized by the{" "}
                <strong className="text-[#885548] font-semibold">
                  National Commission for Indian System of Medicine (N.C.I.S.M), New
                  Delhi
                </strong>
                , and affiliated with{" "}
                <strong className="text-[#885548] font-semibold">
                  Mahayogi Guru Gorakhnath AYUSH University, Gorakhpur
                </strong>{" "}
                (College Code: <strong className="text-[#885548] font-semibold">AUVA005</strong>), with full recognition from
                the Government of Uttar Pradesh.
              </span>

              <span className="block">
                The institution proudly houses{" "}
                <strong className="text-[#885548] font-semibold">14 fully-equipped departments</strong> featuring modern
                laboratories and museums to ensure a comprehensive learning
                experience.
              </span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section-01 */}
      <About />
      {/* Section-02 */}
      <States />
      {/* Section-03 */}
      <AboutSlider />
    </div>
  );
};

export default Introduction;
