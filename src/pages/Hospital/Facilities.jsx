import React from "react";

const Facilities = () => {
  return (
    <div className="p-6 bg-white min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center animate-fade-in">
        Facilities Overview
      </h2>

      <div className="w-full h-[80vh] shadow-xl rounded-md overflow-hidden">
        <iframe
          src={"/sas.pdf"}
          title="Facilities PDF"
          width="100%"
          height="100%"
          className="border rounded-md"
        />
      </div>
    </div>
  );
};

export default Facilities;
