import React from "react";
import { downloadSections } from "../../data/downloadsdata";
import { Download } from "lucide-react";

const Downloads = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#f3efe3] to-[#e6f4ea] py-20 px-6 md:px-24">
      <div className="max-w-5xl mx-auto space-y-16">
        {downloadSections.map((section, index) => (
          <div key={index} className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1c2c4c] border-b-2 border-[#d90429] pb-2">
              {section.heading}
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {section.items.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-white hover:bg-gray-100 border border-transparent hover:border-[#d90429] transition-all rounded-lg p-4 shadow-sm"
                  >
                    <Download className="w-6 h-6 text-[#d90429]" />
                    <span className="text-lg font-medium text-[#1c2c4c]">
                      {item.title}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Downloads;
