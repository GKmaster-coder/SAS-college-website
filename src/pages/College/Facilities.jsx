import React from 'react';

const CollegeFacilities = () => {
  return (
    <div className="w-full bg-gradient-to-b from-[#f3efe3] to-[#e6f4ea] py-24 px-6 md:px-24 space-y-16 text-[#1c2c4c]">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12">College & Hostel Facilities</h2>

      <section data-aos="fade-up" className="space-y-6">
        <h3 className="text-2xl md:text-3xl font-bold border-l-4 border-[#d90429] pl-4">Clinical Facility</h3>
        <p className="text-lg md:text-xl leading-relaxed">
          SAS Ayurvedic College operates a fully equipped 60-bed hospital within the campus. All departments are available with state-of-the-art amenities.
          A dedicated Panchkarma unit is established as a standalone facility to provide classical Ayurvedic therapies.
        </p>
      </section>

      <section data-aos="fade-up" className="space-y-6">
        <h3 className="text-2xl md:text-3xl font-bold border-l-4 border-[#d90429] pl-4">Laboratories</h3>
        <p className="text-lg md:text-xl leading-relaxed">
          The college features well-equipped laboratories tailored to subjects such as Physiology, Pathology, Anatomy, Pharmacognosy, Pharmacy, and Panchkarma.
          Each lab is furnished with adequate instruments and materials required for hands-on learning.
        </p>
      </section>

      <section data-aos="fade-up" className="space-y-6">
        <h3 className="text-2xl md:text-3xl font-bold border-l-4 border-[#d90429] pl-4">Library</h3>
        <p className="text-lg md:text-xl leading-relaxed">
          With over 7,500 books on Ayurveda and modern medicine, our library offers vast knowledge resources.
          The space includes digital systems with Wi-Fi and computer access for seamless research, subscriptions to medical journals and magazines are being planned to support academic excellence.
        </p>
      </section>

      <section data-aos="fade-up" className="space-y-6">
        <h3 className="text-2xl md:text-3xl font-bold border-l-4 border-[#d90429] pl-4">Herbal Garden</h3>
        <p className="text-lg md:text-xl leading-relaxed">
          Spanning 2680.4 sq. meters, the herbal garden hosts over 200 medicinal plants and features a small nursery and demonstration room.
          The garden helps students learn identification and uses of herbs essential to Ayurvedic practice.
        </p>
      </section>
    </div>
  );
};

export default CollegeFacilities;
