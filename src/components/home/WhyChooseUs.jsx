import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section className="w-full px-6 md:px-20 py-16 bg-[#f4f4f4] text-gray-800">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="md:w-1/2"
        >
          <h2 className="text-[#006d77] text-2xl font-semibold mb-2">
            Why Choose Us
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Building a Future on Ancient Wisdom
          </h3>
          <p className="text-lg text-gray-700 mb-4">
            The SAS Ayurvedic Medical College & Hospital was established in 2013
            by Dr. Ashok Pandey to promote the Indian System of Medicine. Initially
            founded as “SAS Ayurvedic Hospital” under the “Society of Advanced Studies”,
            the institution now runs a full-fledged Ayurvedic College in Varanasi.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Our objective is to spread health awareness and treatment through Ayurveda —
            a system known for minimal side effects and cost-effective healing.
            We offer a Bachelor of Ayurvedic Medicine and Surgery (B.A.M.S.),
            recognized by the NCISM and affiliated with Mahayogi Guru Gorakhnath
            AYUSH University, Gorakhpur.
          </p>

          {/* Feature List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-[16px]">
            {[
              "Recognized by NCISM",
              "Affiliated with AYUSH University (AUVA005)",
              "14 Departments with Labs and Museums",
              "Focus on Traditional & Scientific Knowledge",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-2">
                <FaCheckCircle className="text-[#f28b64] mt-1" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="md:w-[45%] h-[360px] md:h-[480px] rounded-xl overflow-hidden shadow-xl"
        >
          <img
            src="https://sasayurveda.com/wp-content/uploads/2019/05/IMG-20190430-WA0003.jpg"
            alt="SAS Ayurvedic Campus"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </div>

      {/* Stats Section */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 text-center gap-10">
        <div>
          <h3 className="text-5xl font-extrabold text-gray-900">
            <CountUp end={720} duration={2.5} />+
          </h3>
          <p className="text-lg font-medium mt-2">Happy Patients</p>
        </div>
        <div>
          <h3 className="text-5xl font-extrabold text-gray-900">
            <CountUp end={85} duration={2.5} />+
          </h3>
          <p className="text-lg font-medium mt-2">Qualified Staff</p>
        </div>
        <div>
          <h3 className="text-5xl font-extrabold text-gray-900">
            <CountUp end={15} duration={2.5} />
            <sup className="text-xl font-semibold text-[#f28b64]">th</sup>
          </h3>
          <p className="text-lg font-medium mt-2">Years of Experience</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
