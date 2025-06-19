import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.2,
      ease: "easeOut",
    },
  }),
};

const AboutCard = ({ title, description, className, custom }) => {
  return (
    <motion.div
      custom={custom}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={cardVariants}
      className={`relative max-w-sm w-full bg-white/60 backdrop-blur-md border border-white/70 rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105 ${className}`}
    >
      <div className="p-8">
        <h2 className="text-2xl font-bold uppercase text-center text-[#885548] tracking-widest mb-4">
          {title}
        </h2>
        <p className="text-base text-gray-700 text-justify leading-relaxed max-h-[280px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 px-1">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const AboutCards = () => {
  const sections = [
    {
      title: "Mission",
      description:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima repellat quas alias saepe nobis quia, quaerat corrupti ratione nemo ut sint dolor accusantium facilis fuga tenetur ullam architecto! Quae, quis.Lore Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima repellat quas alias saepe nobis quia, quaerat corrupti ratione nemo ut sint dolor accusantium facilis fuga tenetur ullam architecto! Quae, quis.Lore",
    },
    {
      title: "Vision",
      description:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima repellat quas alias saepe nobis quia, quaerat corrupti ratione nemo ut sint dolor accusantium facilis fuga tenetur ullam architecto! Quae, quis.Lore Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima repellat quas alias saepe nobis quia, quaerat corrupti ratione nemo ut sint dolor accusantium facilis fuga tenetur ullam architecto! Quae, quis.Lore",
    },
    {
      title: "History",
      description:
        "E Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima repellat quas alias saepe nobis quia, quaerat corrupti ratione nemo ut sint dolor accusantium facilis fuga tenetur ullam architecto! Quae, quis.Lore Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima repellat quas alias saepe nobis quia, quaerat corrupti ratione nemo ut sint dolor accusantium facilis fuga tenetur ullam architecto! Quae, quis.Lore",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-[#fefaf6] to-[#ece7df] py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex flex-col md:flex-row justify-center items-start gap-8 md:gap-10">
          {sections.map((item, index) => (
            <AboutCard
              key={index}
              title={item.title}
              description={item.description}
              className={
                index === 0
                  ? "z-0 mt-10 md:-mr-6"
                  : index === 1
                  ? "z-10 scale-105 shadow-2xl border border-white/90 bg-white/70"
                  : "z-0 mt-10 md:-ml-6"
              }
              custom={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutCards;

