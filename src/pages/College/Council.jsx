import React from "react";
import { FileText } from "lucide-react";

const CollegeCouncil = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#f3efe3] to-[#e6f4ea] py-24 px-6 md:px-24 space-y-16 text-[#1c2c4c]">
      <div className="space-y-6" data-aos="fade-up">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1c2c4c]">College Council</h1>
        <div className="text-lg">
          <p><strong>College Council Committee-38</strong></p>
          <p><strong>Date:</strong> 25-01-2021</p>
          <p><strong>Time:</strong> 11:00 AM</p>
          <p><strong>Venue:</strong> Meeting Hall</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12" data-aos="fade-up">
        <div>
          <h2 className="text-2xl font-semibold mb-4">In Attendance</h2>
          <ul className="space-y-2 list-disc list-inside">
            {[
              "Prof. Mukesh Rai (HOD, Rachana Sharir)",
              "Dr. Chhaya Gupta (HOD, Rasa Shastra)",
              "Dr. Suvarana Kale (HOD, Stri Prasooti)",
              "Dr. Asha Ram Verma (HOD, Agad Tantra)",
              "Dr. Priyanka Rai (HOD, Bal-Roga)",
              "Dr. Hariom Singh (HOD, Shalya)",
              "Dr. Pawan Sharma (HOD, Shalakya)",
              "Dr. Vinod Kumar Singh (HOD, Kaya Chikitsa)",
              "Dr. Ravi Shukla (HOD, Kriya Sharir)",
              "Dr. Monika Agrawal (HOD, Panchkarma)",
              "Dr. V.N. Tripathi (HOD, Swasth Vritta)"
            ].map((member, idx) => (
              <li key={idx}>{member}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Guests</h2>
          <ul className="space-y-2 list-disc list-inside">
            {[
              "Dr. Ashok Kumar Pandey (Chairman)",
              "Dr. D.N. Sharma (Principal/Medical Superintendent)",
              "Dr. Geeta Pandey (Gen. Secretary)",
              "Dr. Anish Pandey (Society Member)",
              "Dr. Yash Pandey (Society Member)"
            ].map((guest, idx) => (
              <li key={idx}>{guest}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="space-y-6" data-aos="fade-up">
        <h2 className="text-2xl font-semibold">Agenda</h2>
        <p className="text-lg">
          In this meeting, all faculty members and society members decided to increase the fee for BAMS as per the government letter of AYUSH, Lucknow dated 15-01-2021. It was resolved to set the fee for the 2020-21 batch at <strong>₹2,55,500</strong> and also include an extra one-time admission fee over the 4½ years.
        </p>
        <a
          href="http://sasayurveda.com/wp-content/uploads/2023/07/Fee-adjustment-1-1.pdf"
          className="inline-flex items-center gap-2 text-red-600 font-semibold hover:underline"
        >
          <FileText className="w-5 h-5" /> Click To See Govt. Letter of AYUSH, Lucknow
        </a>
      </div>

      <div className="space-y-6" data-aos="fade-up">
        <h2 className="text-2xl font-semibold">Fee Structure</h2>
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <table className="w-full text-left border border-gray-300">
            <thead className="bg-gray-100 text-[#1c2c4c]">
              <tr>
                <th className="px-6 py-3 border-b">Description</th>
                <th className="px-6 py-3 border-b">Amount</th>
              </tr>
            </thead>
            <tbody className="text-[#1c2c4c]">
              {[
                ["Tuition Fee (Per Year)", "₹2,55,500"],
                ["Hostel Fee (Incl. Mess, Non-AC) Per Year", "₹85,000"],
                ["Lab Fee (One-time)", "₹5,000"],
                ["Cultural/Sports Fee (One-time)", "₹6,000"],
                ["Warmer Allowance (Optional, Per Year)", "₹12,500"],
                ["Security Money (Refundable)", "₹50,000"],
                ["Prospectus Fee", "₹1,000"]
              ].map(([desc, amount], idx) => (
                <tr key={idx} className="border-t">
                  <td className="px-6 py-4 border-b">{desc}</td>
                  <td className="px-6 py-4 border-b font-medium">{amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default CollegeCouncil;
