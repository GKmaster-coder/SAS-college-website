import React from 'react';
import PageBanner from "../../components/Shared/PageBanner";

const CollegeInfrastructure = () => {
  const bgimg = "https://i.pinimg.com/736x/5f/4b/52/5f4b52469868262ddb70c68765969995.jpg";

  const infrastructure = [
    { title: 'Administrative Wing', area: '156.64 sq. mtr.' },
    { title: 'Lecturer Halls (Total)', area: '326.24 sq. mtr.' },
    { title: 'Auditorium / Seminar / Exam Hall', area: '151.42 sq. mtr.' },
    { title: 'Central Library', area: '165.22 sq. mtr.' },
    { title: 'Teaching Pharmacy & Quality Testing Lab', area: '102.66 sq. mtr.' },
    { title: 'Common Rooms (Boys & Girls)', area: '51.64 sq. mtr.' },
    { title: 'Canteen', area: '56.22 sq. mtr.' },
    { title: 'Total Common Area', area: '1010.04 sq. mtr.' },
  ];

  const hostel = [
    { category: 'Boys Hostel', rooms: 38, capacity: 76 },
    { category: 'Girls Hostel', rooms: 18, capacity: 36 },
  ];

  const herbalGarden = {
    area: '2680.84 sq. mtr.',
    species: 252,
    plants: 433,
    demoRoom: 'Yes (52.44 sq. mtr.)',
    irrigation: 'Yes',
  };

  const transport = { available: 'Yes', vehicles: 2 };
  const sports = { available: 'Yes' };
  const library = {
    books: 7511, ayurveda: 7357, modern: 151,
    journals: 3, seats: 50, computers: 2,
  };

  return (
    <>
      <PageBanner title="College Infrastructure" backgroundImage={bgimg} />
      <section className="bg-[#e9e3d4] py-20 text-[#283e49]">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16">College Infrastructure</h2>

          {/* Common Infrastructure */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {infrastructure.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-[#d4cdbb] rounded-2xl p-6 shadow-md hover:shadow-xl transition-all"
              >
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-base text-gray-700">Area: {item.area}</p>
              </div>
            ))}
          </div>

          {/* Library */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-6">Library</h3>
            <div className="bg-white rounded-2xl border border-[#d4cdbb] p-6 shadow">
              <p className="text-lg"><strong>📚 Total Books:</strong> {library.books}</p>
              <p className="mt-1">📘 Ayurveda: {library.ayurveda}</p>
              <p>🩺 Modern Medicine: {library.modern}</p>
              <p>📖 Journals: {library.journals}</p>
              <p>💺 Reading Room Seats: {library.seats}</p>
              <p>💻 Computers with Internet: {library.computers}</p>
            </div>
          </div>

          {/* Hostel Info */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-6">Hostel</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {hostel.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-[#d4cdbb] p-6 shadow"
                >
                  <h4 className="text-xl font-semibold">{item.category}</h4>
                  <p className="text-base mt-1">Rooms: {item.rooms}</p>
                  <p className="text-base">Capacity: {item.capacity}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Herbal Garden */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-6">Herbal Garden</h3>
            <div className="bg-white rounded-2xl border border-[#d4cdbb] p-6 shadow">
              <p className="text-lg">🌿 Area: {herbalGarden.area}</p>
              <p>🌱 Species Available: {herbalGarden.species}</p>
              <p>🌿 Medicinal Plants: {herbalGarden.plants}</p>
              <p>🏫 Demonstration Room: {herbalGarden.demoRoom}</p>
              <p>💧 Irrigation Facility: {herbalGarden.irrigation}</p>
            </div>
          </div>

          {/* Transport & Sports */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-[#d4cdbb] p-6 shadow">
              <h3 className="text-2xl font-bold mb-3">Transport</h3>
              <p className="text-base">🚍 Available: {transport.available}</p>
              <p className="text-base">🚌 Vehicles: {transport.vehicles}</p>
            </div>
            <div className="bg-white rounded-2xl border border-[#d4cdbb] p-6 shadow">
              <h3 className="text-2xl font-bold mb-3">Sports & Games</h3>
              <p className="text-base">🏏 Facility Available: {sports.available}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CollegeInfrastructure;
