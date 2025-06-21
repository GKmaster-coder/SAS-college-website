import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import { FaCheckCircle } from "react-icons/fa";

const eligibilitySteps = [
  "12th pass with PCB subjects",
  "Minimum 50% aggregate in PCB",
  "Qualified NEET or equivalent exam",
  "Counselling via Central (15%) / State (85%) seats"
];

const tabs = {
  "Course Details": (
    <div className="space-y-5 text-amber-900 leading-relaxed text-lg">
      <p>
        <strong className="font-bold text-amber-800 text-xl">Course:</strong> Bachelor of Ayurvedic Medicine and Surgery (B.A.M.S)
      </p>
      <p>
        <strong className="font-bold text-amber-800 text-xl">Duration:</strong> 4.5 years + 1 year Internship
      </p>
      <p className="pt-2">
        <strong className="font-bold text-amber-800 text-xl">Examining Body:</strong>
        <ul className="list-disc pl-8 pt-3 space-y-2 text-lg">
          <li>Mahatma Gandhi Kashi Vidyapeeth, Varanasi (2017–2021)</li>
          <li>Mahayogi Guru Gorakhnath AYUSH University, Gorakhpur (From 2021–22)</li>
        </ul>
      </p>
    </div>
  ),
  "Eligibility & Admission": (
    <div className="space-y-7">
      <ol className="relative border-l-[6px] border-amber-700 ml-3 pl-7">
        {eligibilitySteps.map((step, idx) => (
          <li key={idx} className="mb-6 flex items-start gap-4">
            <FaCheckCircle className="text-amber-700 mt-1.5 shrink-0 text-xl" />
            <span className="text-amber-900 text-lg">{step}</span>
          </li>
        ))}
      </ol>
    </div>
  ),
  "Fee Structure": (
    <div className="text-amber-900 space-y-5 leading-relaxed text-lg">
      <p><strong className="font-bold text-amber-800 text-xl">Course Fee:</strong> ₹2,55,500 per annum</p>
      <p><strong className="font-bold text-amber-800 text-xl">Examination Fee:</strong> As decided by the University</p>
      <p><strong className="font-bold text-amber-800 text-xl">Security Money:</strong> ₹50,000 (Refundable)</p>
      <p><strong className="font-bold text-amber-800 text-xl">Development Fee:</strong> ₹50,000 (Non-refundable)</p>
      <p><strong className="font-bold text-amber-800 text-xl">Miscellaneous Fee:</strong> ₹50,000 (Non-refundable)</p>
    </div>
  )
};

export default function CourseCard() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section className="bg-gradient-to-br from-amber-50 to-amber-100 py-20 px-6 sm:px-12 lg:px-28">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-amber-900 mb-4">
          Course & <span className="text-amber-700">Fee</span>
        </h2>
        <p className="text-amber-800 text-xl max-w-3xl mx-auto font-medium">
          Explore the B.A.M.S. program, eligibility requirements, and a clear breakdown of course fees.
        </p>
      </div>

      <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
        <Tab.List className="flex flex-wrap gap-5 justify-center mb-12">
          {Object.keys(tabs).map((tab) => (
            <Tab
              key={tab}
              className={({ selected }) =>
                `px-7 py-3.5 rounded-full text-lg font-bold transition duration-300 ease-in-out ${
                  selected
                    ? "bg-amber-800 text-amber-50 shadow-lg"
                    : "bg-white border-2 border-amber-300 text-amber-800 hover:bg-amber-100 hover:text-amber-800"
                }`
              }
            >
              {tab}
            </Tab>
          ))}
        </Tab.List>

        <Tab.Panels className="max-w-5xl mx-auto">
          {Object.values(tabs).map((content, idx) => (
            <Tab.Panel
              key={idx}
              className="bg-amber-50 rounded-2xl shadow-xl p-10 ring-2 ring-amber-200"
            >
              {content}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </section>
  );
}