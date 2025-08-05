import React from 'react';
import PageBanner from "../../components/Shared/PageBanner";

const CollegeInfrastructure = () => {
  const bgimg = "/divider-img.jpg";

  // Replace with your actual image paths
  const firstImage = "/infrastructure.png";
  const secondImage = "/infrastructure2.png";

  return (
    <>
      <PageBanner title="College Infrastructure" backgroundImage={bgimg} />
      <section className="bg-[#e9e3d4] py-24 text-[#283e49]">
        <div className="max-w-screen-xl mx-auto px-6 text-center space-y-12">
          <h1 className="text-4xl sm:text-5xl font-bold">College Infrastructure</h1>

          {/* First Image */}
          <div>
            <img
              src={firstImage}
              alt="College Infrastructure 1"
              className="w-full max-w-4xl mx-auto rounded-xl shadow-md"
            />
          </div>

          {/* Second Image with same size as first */}
          <div>
            <img
              src={secondImage}
              alt="College Infrastructure 2"
              className="w-full max-w-4xl mx-auto rounded-xl shadow-md"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default CollegeInfrastructure;
