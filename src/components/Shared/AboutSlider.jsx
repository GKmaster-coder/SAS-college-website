import React from "react";
import { motion } from "framer-motion";

const sections = [
  {
    src: "https://picsum.photos/id/70/800/500",
    text: "1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, veritatis!",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat voluptatem, atque porro magnam, fuga hic modi tempore alias nobis amet cumque? Distinctio, quia.",
    reverse: false,
  },
  {
    src: "https://picsum.photos/id/83/800/500",
    text: "2. Tenetur recusandae nisi mollitia vel facere dolorem ad. Impedit quasi alias!",
    desc: "Tenetur recusandae nisi mollitia vel facere dolorem ad. Sed omnis vitae dolore numquam.",
    reverse: true,
  },
  {
    src: "https://picsum.photos/id/94/800/500",
    text: "3. Assumenda quod quisquam a qui voluptatem magni beatae. Nobis incidunt ducimus!",
    desc: "Assumenda quod quisquam a qui voluptatem magni beatae. Reprehenderit, tempora, quas! Ipsum, officia?",
    reverse: false,
  },
];

const AboutSlider = () => {
  return (
    <section className="bg-[#fefaf6] text-gray-800 py-20 px-6 md:px-8 lg:px-16">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-28">
        {sections.map((section, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className={`flex flex-col ${section.reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-12 md:gap-16`}
          >
            {/* Image - Maintains natural aspect ratio */}
            <div className={`w-full md:w-1/2 overflow-hidden rounded-2xl shadow-xl ${section.reverse ? "md:ml-8" : "md:mr-8"}`}>
              <motion.img
                src={section.src}
                alt={`Section ${idx + 1}`}
                className="w-full h-auto object-cover"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Text Content */}
            <div className="w-full md:w-1/2 space-y-6 max-w-lg">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-[#2d2d2d] leading-tight"
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: section.reverse ? 40 : -40 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <span className="text-[#885548]">{idx + 1}.</span> {section.text.split(' ').slice(1).join(' ')}
              </motion.h2>
              
              <motion.p 
                className="text-lg text-gray-700 leading-relaxed"
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                {section.desc}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutSlider;