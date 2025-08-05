// src/components/Notice.jsx
import React from "react";
import notices from "../../data/noticedata";

const Notice = () => {
  return (
    <section className="bg-[#fdfaf3] text-[#1c2c4c] py-20 px-6 md:px-24 space-y-10 min-h-screen">
      <h2 className="text-4xl font-bold text-center mb-10">Important Notices</h2>

      <div className="space-y-12">
        {notices.map((notice, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 space-y-4 border-l-4 border-[#d90429]">
            <h3 className="text-xl font-semibold">{notice.title}</h3>

            {notice.type === "link" && (
              <a
                href={notice.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline font-medium"
              >
                Click here to view
              </a>
            )}

            {notice.type === "pdf" && (
              <iframe
                src={notice.pdf}
                className="w-full h-[500px] border"
                title={`notice-pdf-${index}`}
              ></iframe>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Notice;
