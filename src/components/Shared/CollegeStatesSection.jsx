import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const collegeStats = [
  { value: 12, suffix: "+", label: "Years of Excellence" },
  { value: 1400, suffix: "+", label: "Happy Patients Treated" },
  { value: 90, suffix: "+", label: "Qualified Faculty & Staff" },
  { value: 14, suffix: "", label: "Fully-Equipped Departments" },
];

const statItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const CollegeStatsSection = () => {
  return (
    <section className="bg-gradient-to-br from-[#f8f5f0] to-[#e9e3d4] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {collegeStats.map((stat, index) => (
            <motion.div
              key={index}
              className="group"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={statItemVariants}
              custom={index}
            >
              <div className="p-6 rounded-xl bg-white/50 backdrop-blur-sm border border-white/70 shadow-sm group-hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                <div className="text-5xl font-bold text-[#2d2d2d] flex justify-center items-baseline mb-3">
                  <CountUp 
                    end={stat.value} 
                    duration={2.5} 
                    enableScrollSpy
                    scrollSpyOnce
                    className="text-transparent bg-clip-text bg-gradient-to-r from-[#885548] to-[#b37a6b]"
                  />
                  {stat.suffix && (
                    <span className="text-[#885548] text-2xl ml-1">{stat.suffix}</span>
                  )}
                </div>
                <p className="text-lg font-medium text-[#555]">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollegeStatsSection;
