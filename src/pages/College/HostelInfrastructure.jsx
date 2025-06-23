import React from 'react';
import PageBanner from "../../components/Shared/PageBanner";

const HostelInfrastructure = () => {
   const bgimg = "/divider-img.jpg";
  return (
    <>
    <PageBanner title="Hostel Infrastructure" backgroundImage={bgimg} />
    <section className="bg-[#e9e3d4] text-[#283e49] py-16 px-4">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Infrastructure of Hostel</h2>

        <div className="mb-16">
          <h3 className="text-3xl font-semibold mb-4">🏢 General Information</h3>
          <p className="text-lg leading-relaxed">
            SAS Ayurvedic Medical College has two separate hostels as per the requirement of students. Boys and Girls Hostel are situated within the college campus.
          </p>
        </div>

        {/* Girls Hostel */}
        <div className="mb-16 bg-white border border-[#d4cdbb] rounded-2xl p-6 shadow">
          <h3 className="text-3xl font-semibold mb-4 text-[#283e49]">👩‍🎓 Girls Hostel</h3>
          <p className="text-lg mb-4">Located inside the college campus at Harhua, established in 2017.</p>
          <h4 className="text-2xl font-semibold mb-2">Facilities</h4>
          <ul className="list-disc list-inside space-y-2 text-base">
            <li>45 rooms (2-bed capacity each), plus a dormitory for 10 students</li>
            <li>Study hall, mess hall, kitchen, and a guest room</li>
            <li>Mess facility managed with participation of students</li>
            <li>24x7 cleaning staff availability</li>
            <li>Borewell water with purifier & cooler available on campus</li>
            <li>Common room with LCD TV and indoor games</li>
          </ul>
          <div className="mt-4">
            <p className="font-medium">🏫 Hostel Warden:</p>
            <p className="text-base">Mrs. Dolly – <a href="tel:+918765624982" className="text-blue-700 hover:underline">+91 87656 24982</a></p>
          </div>
        </div>

        {/* Boys Hostel */}
        <div className="mb-4 bg-white border border-[#d4cdbb] rounded-2xl p-6 shadow">
          <h3 className="text-3xl font-semibold mb-4 text-[#283e49]">👨‍🎓 Boys Hostel</h3>
          <p className="text-lg mb-4">Located inside the college campus at Harhua, established in 2019.</p>
          <h4 className="text-2xl font-semibold mb-2">Facilities</h4>
          <ul className="list-disc list-inside space-y-2 text-base">
            <li>37 rooms (2-bed capacity each)</li>
            <li>Study hall, mess hall, kitchen, and a guest room</li>
            <li>Mess facility managed with participation of students</li>
            <li>24x7 cleaning staff availability</li>
            <li>Borewell water with purifier & cooler available on campus</li>
            <li>Common room with LCD TV and indoor games</li>
            <li>Outdoor games like Volleyball available</li>
          </ul>
          <div className="mt-4">
            <p className="font-medium">🏫 Hostel Warden:</p>
            <p className="text-base">Mr. Ajit – <a href="tel:+918765624985" className="text-blue-700 hover:underline">+91 87656 24985</a></p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default HostelInfrastructure;


