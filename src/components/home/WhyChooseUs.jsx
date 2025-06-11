import React from "react";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 bg-gradient-to-br from-[#e0f7f4] via-[#d7eff2] to-[#cce3eb] text-gray-800 relative rounded-xl overflow-hidden shadow-inner">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center text-4xl md:text-5xl font-extrabold text-[#264653] tracking-wide mb-14 drop-shadow"
      >
        Why Choose Our College?
      </motion.h2>

      <div className="flex flex-wrap md:flex-nowrap gap-12 items-stretch relative">
        {/* Text Card */}
        <motion.div
          tabIndex={0}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white/70 backdrop-blur-md border border-white/40 shadow-lg rounded-3xl p-6 sm:p-10 flex-1 text-base sm:text-lg leading-7 text-[#34495e] max-h-[520px] overflow-y-auto md:overflow-visible"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-[#2a9d8f] mb-4 sm:mb-6">
            Discover What Sets Us Apart
          </h3>
          <p className="mb-4 tracking-wide leading-relaxed">
            💡 <strong>Experiential Learning:</strong> We believe in learning by doing—from real-world projects to creative labs.
            <br /><br />
            🌍 <strong>Global Perspective:</strong> Our curriculum is designed to help you lead in a rapidly changing world.
            <br /><br />
            🤝 <strong>Supportive Community:</strong> Our faculty and peers foster a culture of care, curiosity, and collaboration.
            <br /><br />
            🚀 <strong>Career Focused:</strong> With personalized mentorship and strong industry ties, we shape future-ready leaders.
          </p>
        </motion.div>

        {/* Image Card */}
        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative w-full md:w-[480px] h-[300px] md:h-[520px] flex-shrink-0 rounded-3xl overflow-hidden shadow-2xl border-8 border-white bg-[#b5e0dc] z-0"
        >
          <img
            src="https://i.pinimg.com/736x/fa/f1/c8/faf1c8ad5a0f94000dabb367113d3292.jpg"
            alt="Modern college campus"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
