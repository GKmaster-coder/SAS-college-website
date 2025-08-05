import React from 'react';
import { CheckCircle } from 'lucide-react'; // For feature icons

const Introductioncollege = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#f3efe3] to-[#e6f4ea] py-24 px-6 md:px-24 text-[#1c2c4c] space-y-16">
      <div className="max-w-5xl mx-auto space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center underline decoration-[#1c2c4c] underline-offset-8">
          College & Hostel Introduction
        </h2>

        {/* College Intro Text */}
        <div className="space-y-6 text-lg md:text-xl leading-relaxed">
          <h3 className="text-3xl md:text-4xl font-semibold">College</h3>
          <p>
            SAS Ayurvedic Medical College is providing holistic development of students.
            SAS Ayurvedic College comprises highly qualified and experienced faculty drawn
            from the best Ayurvedic medical colleges like Banaras Hindu University,
            National Institute of Ayurveda, etc.
          </p>
          <p>
            Curriculum aligned with industry needs makes students employable and job-ready.
            SAS Ayurvedic College is committed to making students job-ready by providing
            skill-based value additions.
          </p>
          <p>
            All programmes are supported by laboratories, equipment, libraries, computer labs,
            and other infrastructure to meet academic demands.
          </p>
        </div>

        {/* Salient Features */}
        <div className="space-y-6">
          <h3 className="text-3xl md:text-4xl font-semibold">Salient Features:</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg md:text-xl">
            {[
              'A spacious college building with ultra-modern equipment and well-furnished departments',
              '60 bed Hospital Facility',
              'Highly qualified & experienced teaching staff',
              'A spacious & peaceful yoga hall',
              'A beautiful and resourceful herbal garden',
              'Separate hostel facility for boys & girls',
              'Research & Development Centre',
            ].map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="min-w-6 mt-1 text-[#1c2c4c]" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Introductioncollege;
