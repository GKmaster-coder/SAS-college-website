import React from "react";
import { Link } from "react-router-dom";

const PageBanner = ({ title, backgroundImage }) => {
  return (
    <div
      className="relative h-64 flex items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-white text-4xl font-bold">{title}</h1>
        <p className="text-gray-300 mt-2 font-semibold">
          <Link to="/" className="text-orange-400 hover:underline font-bold">Home</Link> / <span className="font-bold">{title}</span>
        </p>
      </div>
    </div>
  );
};

export default PageBanner;

