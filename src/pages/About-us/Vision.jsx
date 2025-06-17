import React from 'react';

const Vision = () => {
  return (
    <section
      className="w-full bg-gradient-to-r from-blue-50 via-white to-blue-100 text-gray-800 py-24 px-6 sm:px-12 lg:px-24 overflow-hidden"
      aria-labelledby="vision-title"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-screen-xl mx-auto items-center">
        {/* Left Content */}
        <div className="relative z-10 flex flex-col justify-center">
          <div className="flex items-center space-x-3 mb-6">
            <span className="w-12 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded"></span>
            <h2
              id="vision-title"
              className="text-4xl sm:text-5xl font-extrabold tracking-wide text-blue-800"
            >
              Our Vision
            </h2>
          </div>
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8 max-w-lg tracking-wide">
            At <strong className="text-blue-700">MedPro Medical College</strong>, our vision is to cultivate a community of compassionate and innovative healthcare leaders dedicated to transforming global medicine. We inspire excellence, nurture lifelong curiosity, and empower our students to heal with integrity, innovate with courage, and serve with unwavering dedication.
          </p>
          <button
            type="button"
            className="self-start bg-blue-600 hover:bg-blue-700 transition-all duration-300 rounded-full px-8 py-3 text-white font-semibold shadow-md focus:outline-none focus:ring-4 focus:ring-blue-300"
            aria-label="Learn More About Our Vision"
          >
            Learn More
          </button>
        </div>

        {/* Right Image & Animation */}
        <div className="relative flex justify-center">
          <div className="absolute -top-10 -right-16 w-72 h-72 bg-blue-300 rounded-full opacity-20 blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-16 -left-20 w-96 h-96 bg-cyan-200 rounded-full opacity-20 blur-3xl animate-blob animation-delay-4000"></div>

          <img
            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5c5aeb56-17f2-4cd9-b849-adf2513c6475.png"
            alt="Medical vision illustration"
            className="relative rounded-3xl shadow-xl max-w-full h-auto object-cover z-20"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src = 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/88cfa960-a1de-49d8-8781-1e440231bc5e.png';
            }}
          />
        </div>
      </div>

      {/* Blob animation keyframes */}
      <style>
        {`
          @keyframes blob {
            0% {
              transform: translate(0px, 0px) scale(1);
            }
            33% {
              transform: translate(30px, -20px) scale(1.1);
            }
            66% {
              transform: translate(-20px, 30px) scale(0.9);
            }
            100% {
              transform: translate(0px, 0px) scale(1);
            }
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }
        `}
      </style>
    </section>
  );
};

export default Vision;
