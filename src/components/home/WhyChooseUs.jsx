import React from "react";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 bg-gradient-to-b from-[#f0f4f8] to-[#e0e7ef] text-gray-900 relative rounded overflow-hidden">
      {/* Title  */}
      <h2
        className="text-center text-4xl md:text-5xl font-bold text-[#2c3e50] tracking-wide mb-14 drop-shadow-sm"
      >
        Why Choose Our College?
      </h2>

      <div className="flex flex-wrap md:flex-nowrap gap-12 items-stretch relative">
        {/* Text Card */}
        <div
          tabIndex={0}
          className="text-center md:text-left bg-white relative z-10 rounded-3xl shadow-xl p-6 sm:p-10 flex-1 text-base sm:text-lg leading-7 max-h-[520px] overflow-y-auto md:overflow-visible border border-gray-200"
        >
          <h3
            className="text-2xl sm:text-3xl font-bold text-[#456789] mb-4 sm:mb-6"
          >
            What we do and why we are exceptional
          </h3>
          <p
            className="mb-4 text-gray-700 tracking-wide leading-relaxed"
          >
            🌟 Our college goes beyond textbooks. We offer hands-on experiences, real-world projects, and a culture of creativity.
            <br /><br />
            🚀 From state-of-the-art labs to student-led clubs, we nurture leaders, not just learners. Our dedicated faculty ensures every student is mentored to excel personally and professionally.
            <br /><br />
            ❤️ Join a vibrant community that celebrates diversity, innovation, and holistic growth.
          </p>
        </div>

        {/* Image Card */}
        <div
          aria-hidden="true"
          className="relative md:static w-full md:w-[480px] h-[300px] md:h-[520px] flex-shrink-0 rounded-3xl overflow-hidden shadow-xl border-[10px] border-white bg-gray-300 -mt-16 md:mt-0 z-0 sm:z-10 sm:absolute sm:bottom-[-30px] sm:right-[-10px]"
        >
          <img
            src="https://i.pinimg.com/736x/fa/f1/c8/faf1c8ad5a0f94000dabb367113d3292.jpg"
            alt="Modern college campus"
            className="w-full h-full object-cover grayscale-0"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
