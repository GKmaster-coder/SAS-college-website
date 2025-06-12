import React from "react";
import ServiceCard from "../Shared/ServiceCard";
import { FaComments, FaSpa, FaLeaf, FaHands, FaHeartbeat, FaMortarPestle } from "react-icons/fa";

const services = [
  {
    icon: <FaComments />,
    title: "Consultation",
    description:
      "Ayurvedic practitioners conduct thorough consultations to assess your constitution (dosha) and identify imbalances.",
    link: "#consultation",
  },
  {
    icon: <FaSpa />,
    title: "Ayurvedic Massage",
    description:
      "Abhyanga therapy is used to promote energy flow, eliminate toxins, and relieve tension.",
    link: "#massage",
  },
  {
    icon: <FaLeaf />,
    title: "Herbal Medicine",
    description:
      "Herbal formulations tailored to your specific needs, addressing issues such as digestion and more.",
    link: "#herbal",
  },
  {
    icon: <FaHands />,
    title: "Panchakarma",
    description:
      "A detoxification process to cleanse the body and restore balance through therapeutic techniques.",
    link: "#panchakarma",
  },
  {
    icon: <FaHeartbeat />,
    title: "Lifestyle Guidance",
    description:
      "Personalized daily routines, diet plans, and sleep practices to support your Ayurvedic path.",
    link: "#lifestyle",
  },
  {
    icon: <FaMortarPestle />,
    title: "Dietary Advice",
    description:
      "Customized meal suggestions based on your dosha to improve health and maintain energy.",
    link: "#diet",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-[#ececec] py-20 px-6 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h4 className="text-lg font-semibold text-[#8da540]">Our Services</h4>
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mt-2 mb-4">
          Natural Care for Natural You
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Ayurvedic medicine offers a range of services to promote health and treat various conditions.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            link={service.link}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
