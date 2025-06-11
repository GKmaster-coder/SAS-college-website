import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="bg-[#fefaf6] py-16 px-4 md:px-10 lg:px-20">
      <div className="flex flex-col lg:flex-row items-center gap-12">

        {/* Left Side: Images + Experience */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col lg:w-1/2 gap-6 relative"
        >
          <img
            src="https://bams-admissions.com/wp-content/uploads/2024/05/SAS-Ayurvedic-Medical-College-and-Hospital-Varanasi.jpeg"
            className="rounded-xl shadow-xl w-full h-auto border border-[#e2d8cc]"
            alt="College"
          />
          <div className="flex gap-6 items-center">
            <img
              src="https://images.pexels.com/photos/32275471/pexels-photo-32275471/free-photo-of-college-students-collaborating-outdoors-in-dimapur.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Students"
              className="w-auto h-32 rounded-lg shadow-md object-cover"
            />
            <div>
              <h2 className="text-4xl font-extrabold text-[#6d4c41]">
                25<sup className="text-lg text-[#bc6c25]">th</sup>
              </h2>
              <p className="text-lg font-semibold text-gray-700">
                Years of Excellence
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:w-1/2 text-center lg:text-left"
        >
          <p className="text-[#bc6c25] font-semibold text-lg tracking-wide">
            About Our College
          </p>
          <h2 className="text-4xl font-bold text-[#2f2f2f] mt-2 mb-4 leading-snug">
            A Legacy of Knowledge, Growth & Opportunity
          </h2>
          <blockquote className="text-gray-600 italic border-l-4 border-[#e76f51] pl-4 mb-6">
            “Education is not just preparation for life; education is life
            itself.”
          </blockquote>
          <p className="text-gray-700 mb-8 leading-relaxed">
            Our college stands as a pillar of academic excellence, innovation,
            and holistic development. With a vibrant campus, experienced
            faculty, and a legacy of producing leaders, we strive to create an
            environment where students thrive intellectually and socially.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#about"
              className="bg-[#bc6c25] text-white px-6 py-3 rounded-md shadow-md hover:bg-[#a45a1d] transition-colors"
            >
              Learn More
            </motion.a>
            <div className="flex items-center gap-4">
              <img src="./phone.png" alt="Phone" className="h-20 w-20" />
              <div>
                <p className="font-bold text-[#333]">Call Us Now</p>
                <p className="text-gray-600">+91-9876543210</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
