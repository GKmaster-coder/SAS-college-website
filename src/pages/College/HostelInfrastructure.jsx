import React from "react";
import PageBanner from "../../components/Shared/PageBanner";

const HostelInfrastructure = () => {
  const bgimg = "/divider-img.jpg";

  return (
    <>
      <PageBanner title="Hostel Infrastructure" backgroundImage={bgimg} />

      <section className="bg-[#e9e3d4] text-[#283e49] py-24 px-6 md:px-20 space-y-32">
        {/* Intro */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Infrastructure of Hostel</h2>
          <p className="text-lg leading-relaxed">
            SAS Ayurvedic Medical College provides safe, clean, and resourceful hostel facilities for both boys and girls inside the campus. Hostels are managed with care, comfort, and convenience of students in mind.
          </p>
        </div>

        {/* Girls Hostel Section */}
        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* Overview Box */}
          <div className="w-full md:w-1/2 bg-white p-8 border border-[#d4cdbb] rounded-2xl shadow-md">
            <h3 className="text-3xl font-semibold mb-4">👩‍🎓 Girls Hostel</h3>
            <p className="text-lg mb-6">Located in Harhua Campus • Established 2017</p>
            <p className="text-base mb-4">
              A peaceful, safe, and vibrant environment for girls to live and grow. Full attention is given to safety, discipline, and cleanliness. Managed with compassion and quality.
            </p>
            <h4 className="text-xl font-semibold mb-2">Facilities:</h4>
            <ul className="list-disc list-inside space-y-2 text-base">
              <li>45 rooms (2-bed capacity each) + dormitory for 10 students</li>
              <li>Study hall, mess, kitchen, and guest room</li>
              <li>Common room with LCD TV and indoor games</li>
              <li>Purified borewell water with cooler</li>
              <li>Student-managed mess with hygienic food</li>
              <li>24×7 cleaning & maintenance staff</li>
            </ul>
            <div className="mt-6">
              <p className="font-medium">🏫 Hostel Warden:</p>
              <p>Mrs. Dolly – <a href="tel:+918765624982" className="text-blue-700 underline">+91 87656 24982</a></p>
            </div>
          </div>

          {/* Imaginary Image or Card */}
          <div className="w-full md:w-1/2 h-full rounded-2xl overflow-hidden border border-[#d4cdbb] shadow-md bg-white p-6">
            <h4 className="text-xl font-semibold mb-4">Life in Girls Hostel</h4>
            <p className="text-base">
              The hostel provides a structured routine, well-managed food, and peer learning environment.
              Students enjoy indoor activities, supportive surroundings, and focus-oriented space with all required amenities.
            </p>
          </div>
        </div>

        {/* Boys Hostel Section */}
        <div className="flex flex-col md:flex-row-reverse gap-10 items-start">
          {/* Overview Box */}
          <div className="w-full md:w-1/2 bg-white p-8 border border-[#d4cdbb] rounded-2xl shadow-md">
            <h3 className="text-3xl font-semibold mb-4">👨‍🎓 Boys Hostel</h3>
            <p className="text-lg mb-6">Located in Harhua Campus • Established 2019</p>
            <p className="text-base mb-4">
              Designed to give male students a well-structured and encouraging environment. Spacious rooms, supportive infrastructure, and focused academic living.
            </p>
            <h4 className="text-xl font-semibold mb-2">Facilities:</h4>
            <ul className="list-disc list-inside space-y-2 text-base">
              <li>37 rooms (2-bed capacity each)</li>
              <li>Study hall, mess, kitchen, and guest room</li>
              <li>Common room with LCD TV and indoor games</li>
              <li>Outdoor games (Volleyball, Badminton)</li>
              <li>Purified water with cooler</li>
              <li>Cleanliness and maintenance round the clock</li>
            </ul>
            <div className="mt-6">
              <p className="font-medium">🏫 Hostel Warden:</p>
              <p>Mr. Ajit – <a href="tel:+918765624985" className="text-blue-700 underline">+91 87656 24985</a></p>
            </div>
          </div>

          {/* Imaginary Image or Card */}
          <div className="w-full md:w-1/2 h-full rounded-2xl overflow-hidden border border-[#d4cdbb] shadow-md bg-white p-6">
            <h4 className="text-xl font-semibold mb-4">Life in Boys Hostel</h4>
            <p className="text-base">
              The boys’ hostel is energetic, disciplined, and structured. Students participate in both academics and recreation. The outdoor ground and peer network foster growth and teamwork.
            </p>
          </div>
        </div>

        {/* Extra Section: Hostel Benefits */}
        <div className="text-center max-w-4xl mx-auto space-y-10">
          <h3 className="text-3xl font-semibold">🌟 Why Our Hostels Stand Out?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            <div className="bg-white border border-[#d4cdbb] rounded-2xl p-6 shadow">
              <h4 className="font-semibold text-xl mb-2">🔒 Safety First</h4>
              <p>Hostels are inside the campus with full security & supervision. Safety of students is our priority.</p>
            </div>
            <div className="bg-white border border-[#d4cdbb] rounded-2xl p-6 shadow">
              <h4 className="font-semibold text-xl mb-2">🍽️ Quality Food</h4>
              <p>Mess is run with student involvement and provides nutritious, hygienic, and timely meals.</p>
            </div>
            <div className="bg-white border border-[#d4cdbb] rounded-2xl p-6 shadow">
              <h4 className="font-semibold text-xl mb-2">📚 Academic Support</h4>
              <p>Dedicated study halls ensure students have a calm and quiet place to focus on academics.</p>
            </div>
            <div className="bg-white border border-[#d4cdbb] rounded-2xl p-6 shadow">
              <h4 className="font-semibold text-xl mb-2">⚽ Recreation</h4>
              <p>Indoor games and outdoor fields ensure balanced development beyond classroom.</p>
            </div>
          </div>
        </div>

        {/* Extra Section: Hostel Rules Preview (optional) */}
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h3 className="text-3xl font-semibold">📜 Hostel Rules & Regulations</h3>
          <p className="text-base leading-relaxed">
            All students are required to follow the hostel discipline strictly. This includes maintaining cleanliness,
            attending roll call, following entry/exit timings, and participating in mess duties (where applicable).
            Violations may lead to disciplinary action.
          </p>
          <p>
          </p>
        </div>
      </section>
    </>
  );
};

export default HostelInfrastructure;
