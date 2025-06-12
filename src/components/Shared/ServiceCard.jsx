import React from "react";

const ServiceCard = ({ icon, title, description, link }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#8da540] hover:shadow-xl transition-all">
      <div className="mb-4">
        <div className="w-12 h-12 rounded-full bg-[#e59572] flex items-center justify-center text-white text-xl">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a
        href={link}
        className="text-[#8da540] font-semibold inline-flex items-center group"
      >
        → READ MORE
      </a>
    </div>
  );
};

export default ServiceCard;
