import React, { useState } from 'react';
import PageBanner from '../../components/Shared/PageBanner';

const studentData = [
  {
    heading: 'Student List Batch (2022–2024)',
    pdfUrl: '/pdfs/student-list-2022-2024.pdf',
  },
  {
    heading: 'Student List Batch (2021–2023)',
    pdfUrl: '/pdfs/student-list-2021-2023.pdf',
  },
  {
    heading: 'Student List Batch (2020–2022)',
    pdfUrl: '/pdfs/student-list-2020-2022.pdf',
  },
];

const ListofStudent = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const togglePDF = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
      <PageBanner title="List Of Students" backgroundImage="/divider-img.jpg" />

      <div className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-[#4b2e2e]">Student List PDFs</h1>

        {studentData.map((item, index) => (
          <div key={index} className="mb-6">
            <button
              onClick={() => togglePDF(index)}
              className="w-full text-left bg-[#6b4c3b] text-white px-4 py-3 rounded-md hover:bg-[#a67c52] font-medium transition"
            >
              {item.heading}
            </button>

            {activeIndex === index && (
              <div className="mt-4 border rounded-md overflow-hidden">
                <iframe
                  src={item.pdfUrl}
                  title={item.heading}
                  width="100%"
                  height="600px"
                  className="w-full"
                ></iframe>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default ListofStudent;
