import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

// Custom hook to detect if an element is in viewport
function useInView(ref, options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setIsIntersecting(entry.isIntersecting),
      options
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, options]);
  return isIntersecting;
}

const IntroductionwithInfrastructure = () => {
  // Refs for the two headings
  const opdBlockRef = useRef(null);
  const opdHoursRef = useRef(null);
  const opdBlockInView = useInView(opdBlockRef, { threshold: 0.2 });
  const opdHoursInView = useInView(opdHoursRef, { threshold: 0.2 });

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8e4b4] via-white to-blue-50 text-gray-800 font-sans p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 md:mb-10">
          <motion.h1
            className="text-3xl md:text-4xl font-bold text-green-800 mb-3 md:mb-4"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Introduction with Infrastructure
          </motion.h1>

          <p className="text-base md:text-lg text-gray-700">
            The SAS Ayurvedic Hospital consists of a 60 bedded Hospital with OPD and IPD Facilities, Panchakarma Unit, Central Laboratory,
            Primary Emergency Care Unit, General Wards, Operation Theatres, Consultation Rooms, X-ray Room, ECG Room,
            Sonography Room, Physio Therapy Facility, etc.
          </p>

          <p className="text-base md:text-lg text-gray-700 mt-3 md:mt-4">
            The main objective of the Hospitals is to provide medical care through Ayurvedic System of Medicine to the suffering humanity
            and the Institute is doing excellent activities in the field of Patient Care Activities through its OPD, IPD, Panchakarma Therapies,
            Primary Emergency Care Unit, Central Laboratory, many Specialty Clinics and facilities like Pathological Tests, Bio-chemical Tests,
            X-ray, ECG, Ultra Sound, Treatment of Anorectal, Jalokavacharan, Agnikarma, Pregnancy Test, Vaccination Unit, etc.
            Special treatment facilities are available for various eye diseases and disorders, other ENT related disorders.
            There is an Ambulance available in the hospital to take care of patients in emergency situation.
          </p>
        </div>

        <motion.h2
          className="text-xl md:text-2xl font-semibold text-blue-900 mb-4 md:mb-6 text-center"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Infrastructure:
        </motion.h2>

        <div className="overflow-x-auto">
          <table className="w-full border border-green-500 text-sm md:text-base">
            <thead>
              <tr className="bg-green-200">
                <th className="border border-green-500 px-2 py-1 md:px-4 md:py-2">S.No</th>
                <th className="border border-green-500 px-2 py-1 md:px-4 md:py-2">Name of the Departments</th>
                <th className="border border-green-500 px-2 py-1 md:px-4 md:py-2">Available Area (in Sq. mtr.)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="border px-2 py-1 md:px-4 md:py-2">1</td>
                <td className="border px-2 py-1 md:px-4 md:py-2">Superintendent Room</td>
                <td className="border px-2 py-1 md:px-4 md:py-2">20</td>
              </tr>
              <tr className="bg-blue-50">
                <td className="border px-2 py-1 md:px-4 md:py-2">2</td>
                <td className="border px-2 py-1 md:px-4 md:py-2">Deputy Superintendent Room</td>
                <td className="border px-2 py-1 md:px-4 md:py-2">10</td>
              </tr>
              <tr className="bg-white">
                <td className="border px-2 py-1 md:px-4 md:py-2">3</td>
                <td className="border px-2 py-1 md:px-4 md:py-2">Medical Officers Room (For 2 Resident Medical / Surgical Officer)</td>
                <td className="border px-2 py-1 md:px-4 md:py-2">15</td>
              </tr>
              <tr className="bg-blue-50">
                <td className="border px-2 py-1 md:px-4 md:py-2">4</td>
                <td className="border px-2 py-1 md:px-4 md:py-2">Matron Room</td>
                <td className="border px-2 py-1 md:px-4 md:py-2">10</td>
              </tr>
              <tr className="bg-blue-50">
                <td className="border px-2 py-1 md:px-4 md:py-2">5</td>
                <td className="border px-2 py-1 md:px-4 md:py-2">Assistant Matron Room (For 2)</td>
                <td className="border px-2 py-1 md:px-4 md:py-2">10</td>
              </tr>
              <tr className="bg-blue-50">
                <td className="border px-2 py-1 md:px-4 md:py-2">6</td>
                <td className="border px-2 py-1 md:px-4 md:py-2">Reception & Registration Room</td>
                <td className="border px-2 py-1 md:px-4 md:py-2">40</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Hospital OPD Block Details Section */}
        <motion.h2
          ref={opdBlockRef}
          className="text-xl md:text-2xl font-semibold text-blue-900 mt-8 md:mt-12 mb-4 md:mb-6 text-center"
          initial={{ x: 100, opacity: 0 }}
          animate={opdBlockInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Hospital OPD Block Details
        </motion.h2>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ y: -8, boxShadow: '0 8px 16px 0 rgba(34,197,94,0.15)' }}
          className="w-full mb-6 md:mb-8 shadow-lg md:shadow-2xl rounded-lg bg-white/90 cursor-pointer"
        >
          <div className="overflow-x-auto">
            <table className="w-full border border-green-500 rounded-lg overflow-hidden text-sm md:text-base">
              <thead>
                <tr className="bg-green-200">
                  <th className="border border-green-500 px-2 py-1 md:px-4 md:py-2">S.No</th>
                  <th className="border border-green-500 px-2 py-1 md:px-4 md:py-2">Name of the Departments</th>
                  <th className="border border-green-500 px-2 py-1 md:px-4 md:py-2">Available Area (in Sq. mtr.)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white hover:bg-green-100 transition-colors"><td className="border px-2 py-1 md:px-4 md:py-2">1</td><td className="border px-2 py-1 md:px-4 md:py-2">Kayachikitsa OPD</td><td className="border px-2 py-1 md:px-4 md:py-2">20</td></tr>
                <tr className="bg-blue-50 hover:bg-green-100 transition-colors"><td className="border px-2 py-1 md:px-4 md:py-2">2</td><td className="border px-2 py-1 md:px-4 md:py-2">Shalya OPD</td><td className="border px-2 py-1 md:px-4 md:py-2">20</td></tr>
                <tr className="bg-white hover:bg-green-100 transition-colors"><td className="border px-2 py-1 md:px-4 md:py-2">3</td><td className="border px-2 py-1 md:px-4 md:py-2">Shalakya OPD</td><td className="border px-2 py-1 md:px-4 md:py-2">20</td></tr>
                <tr className="bg-blue-50 hover:bg-green-100 transition-colors"><td className="border px-2 py-1 md:px-4 md:py-2">4</td><td className="border px-2 py-1 md:px-4 md:py-2">Stree Roga Evam Prasuti Tantra OPD</td><td className="border px-2 py-1 md:px-4 md:py-2">20</td></tr>
                <tr className="bg-white hover:bg-green-100 transition-colors"><td className="border px-2 py-1 md:px-4 md:py-2">5</td><td className="border px-2 py-1 md:px-4 md:py-2">Kaumarbhritya (Balroga)</td><td className="border px-2 py-1 md:px-4 md:py-2">15</td></tr>
                <tr className="bg-blue-50 hover:bg-green-100 transition-colors"><td className="border px-2 py-1 md:px-4 md:py-2">6</td><td className="border px-2 py-1 md:px-4 md:py-2">Swastharakshan & Yoga OPD</td><td className="border px-2 py-1 md:px-4 md:py-2">15</td></tr>
                <tr className="bg-white hover:bg-green-100 transition-colors"><td className="border px-2 py-1 md:px-4 md:py-2">7</td><td className="border px-2 py-1 md:px-4 md:py-2">Atyayik (Casualty) Section</td><td className="border px-2 py-1 md:px-4 md:py-2">20</td></tr>
                <tr className="bg-blue-50 hover:bg-green-100 transition-colors"><td className="border px-2 py-1 md:px-4 md:py-2">8</td><td className="border px-2 py-1 md:px-4 md:py-2">Dressing & First-Aid Room, Ksharsutra Room</td><td className="border px-2 py-1 md:px-4 md:py-2">20</td></tr>
                <tr className="bg-white hover:bg-green-100 transition-colors"><td className="border px-2 py-1 md:px-4 md:py-2">9</td><td className="border px-2 py-1 md:px-4 md:py-2">Dispensary</td><td className="border px-2 py-1 md:px-4 md:py-2">20</td></tr>
                <tr className="bg-blue-50 hover:bg-green-100 transition-colors"><td className="border px-2 py-1 md:px-4 md:py-2">10</td><td className="border px-2 py-1 md:px-4 md:py-2">Waiting space for patients</td><td className="border px-2 py-1 md:px-4 md:py-2">90</td></tr>
                <tr className="bg-white hover:bg-green-100 transition-colors"><td className="border px-2 py-1 md:px-4 md:py-2">11</td><td className="border px-2 py-1 md:px-4 md:py-2">Store</td><td className="border px-2 py-1 md:px-4 md:py-2">10</td></tr>
                <tr className="bg-blue-50 hover:bg-green-100 transition-colors"><td className="border px-2 py-1 md:px-4 md:py-2">12</td><td className="border px-2 py-1 md:px-4 md:py-2">Male & Female Toilet for Patients</td><td className="border px-2 py-1 md:px-4 md:py-2">30</td></tr>
                <tr className="bg-white font-semibold hover:bg-green-200 transition-colors"><td className="border px-2 py-1 md:px-4 md:py-2" colSpan={2}>Total Constructed Area in OPD Block (in Sq. mtr)</td><td className="border px-2 py-1 md:px-4 md:py-2">300.00</td></tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Working Hours of OPD Section */}
        <div className="mt-6 md:mt-8 mb-6 md:mb-8">
          <motion.h3
            ref={opdHoursRef}
            className="text-lg md:text-xl font-semibold text-blue-900 mb-2"
            initial={{ x: 100, opacity: 0 }}
            animate={opdHoursInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Working Hours of OPD:
          </motion.h3>
          <div className="text-base md:text-lg font-bold text-green-800">8 AM to 2 PM</div>
        </div>

        {/* Hospital IPD Block Details Section */}
        <h2 className="text-xl md:text-2xl font-semibold text-blue-900 mt-8 md:mt-12 mb-4 md:mb-6 text-center">Hospital IPD Block Details</h2>
        <div className="w-full mb-6 md:mb-8 shadow-lg md:shadow-2xl rounded-lg bg-white/90">
          <div className="overflow-x-auto">
            <table className="w-full border border-green-500 rounded-lg overflow-hidden text-sm md:text-base">
              <thead>
                <tr className="bg-green-200">
                  <th className="border border-green-500 px-2 py-1 md:px-4 md:py-2">S.No</th>
                  <th className="border border-green-500 px-2 py-1 md:px-4 md:py-2">Name of the Departments</th>
                  <th className="border border-green-500 px-2 py-1 md:px-4 md:py-2">Available Area (in Sq. mtr.)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white"><td className="border px-2 py-1 md:px-4 md:py-2">1</td><td className="border px-2 py-1 md:px-4 md:py-2">Kayachikitsa Male Ward</td><td className="border px-2 py-1 md:px-4 md:py-2">200</td></tr>
                <tr className="bg-blue-50"><td className="border px-2 py-1 md:px-4 md:py-2">2</td><td className="border px-2 py-1 md:px-4 md:py-2">Kayachikitsa Female Ward</td><td className="border px-2 py-1 md:px-4 md:py-2">100</td></tr>
                <tr className="bg-white"><td className="border px-2 py-1 md:px-4 md:py-2">3</td><td className="border px-2 py-1 md:px-4 md:py-2">Panchakarma Male Ward</td><td className="border px-2 py-1 md:px-4 md:py-2">50</td></tr>
                <tr className="bg-blue-50"><td className="border px-2 py-1 md:px-4 md:py-2">4</td><td className="border px-2 py-1 md:px-4 md:py-2">Panchakarma Female Ward</td><td className="border px-2 py-1 md:px-4 md:py-2">50</td></tr>
                <tr className="bg-white"><td className="border px-2 py-1 md:px-4 md:py-2">5</td><td className="border px-2 py-1 md:px-4 md:py-2">Shalya Male Ward</td><td className="border px-2 py-1 md:px-4 md:py-2">75</td></tr>
                <tr className="bg-blue-50"><td className="border px-2 py-1 md:px-4 md:py-2">6</td><td className="border px-2 py-1 md:px-4 md:py-2">Shalya Female Ward</td><td className="border px-2 py-1 md:px-4 md:py-2">75</td></tr>
                <tr className="bg-white"><td className="border px-2 py-1 md:px-4 md:py-2">7</td><td className="border px-2 py-1 md:px-4 md:py-2">Shalakya Tantra Ward</td><td className="border px-2 py-1 md:px-4 md:py-2">75</td></tr>
                <tr className="bg-blue-50"><td className="border px-2 py-1 md:px-4 md:py-2">8</td><td className="border px-2 py-1 md:px-4 md:py-2">Prasooti evum Stri Roga Ward</td><td className="border px-2 py-1 md:px-4 md:py-2">150</td></tr>
                <tr className="bg-white"><td className="border px-2 py-1 md:px-4 md:py-2">9</td><td className="border px-2 py-1 md:px-4 md:py-2">Kaumar Bhritiya (Balaroga) Ward</td><td className="border px-2 py-1 md:px-4 md:py-2">50</td></tr>
                <tr className="bg-blue-50"><td className="border px-2 py-1 md:px-4 md:py-2">10</td><td className="border px-2 py-1 md:px-4 md:py-2">Doctors duty room one for each department</td><td className="border px-2 py-1 md:px-4 md:py-2">25</td></tr>
                <tr className="bg-white"><td className="border px-2 py-1 md:px-4 md:py-2">11</td><td className="border px-2 py-1 md:px-4 md:py-2">Nursing staff duty rooms, one in each ward</td><td className="border px-2 py-1 md:px-4 md:py-2">25</td></tr>
                <tr className="bg-blue-50"><td className="border px-2 py-1 md:px-4 md:py-2">12</td><td className="border px-2 py-1 md:px-4 md:py-2">Store room for linen, etc.</td><td className="border px-2 py-1 md:px-4 md:py-2">25</td></tr>
                <tr className="bg-white font-semibold"><td className="border px-2 py-1 md:px-4 md:py-2" colSpan={2}>Total Constructed Area in IPD Block (in Sq. mtr)</td><td className="border px-2 py-1 md:px-4 md:py-2">900.00</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Operation Theatre Block Details Section */}
        <div className="w-full mb-6 md:mb-8 rounded-lg bg-white/90 p-1">
          <h2 className="text-xl md:text-2xl font-semibold text-blue-900 mb-4 md:mb-6 text-center">Operation Theatre Block Details</h2>
          <div className="rounded-lg p-1">
            <div className="overflow-x-auto">
              <table className="w-full border border-green-500 rounded-lg overflow-hidden text-sm md:text-base">
                <thead>
                  <tr className="bg-green-200">
                    <th className="border border-green-500 px-2 py-1 md:px-4 md:py-2">S.No</th>
                    <th className="border border-green-500 px-2 py-1 md:px-4 md:py-2">Name of the Departments</th>
                    <th className="border border-green-500 px-2 py-1 md:px-4 md:py-2">Available Area (in Sq. mtr.)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white"><td className="border px-2 py-1 md:px-4 md:py-2">1</td><td className="border px-2 py-1 md:px-4 md:py-2">Major Operation Theatre</td><td className="border px-2 py-1 md:px-4 md:py-2">30</td></tr>
                  <tr className="bg-blue-50"><td className="border px-2 py-1 md:px-4 md:py-2">2</td><td className="border px-2 py-1 md:px-4 md:py-2">Minor Operation Theatre</td><td className="border px-2 py-1 md:px-4 md:py-2">20</td></tr>
                  <tr className="bg-white"><td className="border px-2 py-1 md:px-4 md:py-2">3</td><td className="border px-2 py-1 md:px-4 md:py-2">Shalakya Operation Theatre</td><td className="border px-2 py-1 md:px-4 md:py-2">10</td></tr>
                  <tr className="bg-blue-50"><td className="border px-2 py-1 md:px-4 md:py-2">4</td><td className="border px-2 py-1 md:px-4 md:py-2">Labour Room with attached toilet and bath room</td><td className="border px-2 py-1 md:px-4 md:py-2">20</td></tr>
                  <tr className="bg-white"><td className="border px-2 py-1 md:px-4 md:py-2">5</td><td className="border px-2 py-1 md:px-4 md:py-2">Neonatal care room</td><td className="border px-2 py-1 md:px-4 md:py-2">15</td></tr>
                  <tr className="bg-blue-50"><td className="border px-2 py-1 md:px-4 md:py-2">6</td><td className="border px-2 py-1 md:px-4 md:py-2">Central sterilisation/autoclave unit</td><td className="border px-2 py-1 md:px-4 md:py-2">10</td></tr>
                  <tr className="bg-white"><td className="border px-2 py-1 md:px-4 md:py-2">7</td><td className="border px-2 py-1 md:px-4 md:py-2">Scrub room</td><td className="border px-2 py-1 md:px-4 md:py-2">15</td></tr>
                  <tr className="bg-blue-50"><td className="border px-2 py-1 md:px-4 md:py-2">8</td><td className="border px-2 py-1 md:px-4 md:py-2">Two Recovery room</td><td className="border px-2 py-1 md:px-4 md:py-2">10</td></tr>
                  <tr className="bg-white"><td className="border px-2 py-1 md:px-4 md:py-2">9</td><td className="border px-2 py-1 md:px-4 md:py-2">Doctors duty room with attached toilet and bath room</td><td className="border px-2 py-1 md:px-4 md:py-2">10</td></tr>
                  <tr className="bg-blue-50"><td className="border px-2 py-1 md:px-4 md:py-2">10</td><td className="border px-2 py-1 md:px-4 md:py-2">Interns/house officer/resident doctors room with attached toilet and bath room</td><td className="border px-2 py-1 md:px-4 md:py-2">10</td></tr>
                  <tr className="bg-white"><td className="border px-2 py-1 md:px-4 md:py-2">11</td><td className="border px-2 py-1 md:px-4 md:py-2">Nursing staff room with attached toilet and bath room</td><td className="border px-2 py-1 md:px-4 md:py-2">10</td></tr>
                  <tr className="bg-white font-semibold"><td className="border px-2 py-1 md:px-4 md:py-2" colSpan={2}>Total Constructed Area in Operation Theatre Block (in Sq. mtr)</td><td className="border px-2 py-1 md:px-4 md:py-2">160.00</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Panchkarma Department Details Section */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full mt-8 md:mt-12 shadow-lg md:shadow-2xl rounded-lg bg-white/90"
        >
          <h2 className="text-xl md:text-2xl font-semibold text-blue-900 mb-4 md:mb-6 text-center">Panchkarma Department Details</h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-green-500 rounded-lg overflow-hidden text-sm md:text-base">
              <thead>
                <tr className="bg-green-200">
                  <th className="border border-green-500 px-2 py-1 md:px-4 md:py-2">S.No</th>
                  <th className="border border-green-500 px-2 py-1 md:px-4 md:py-2">Name of the Departments</th>
                  <th className="border border-green-500 px-2 py-1 md:px-4 md:py-2">Available Area (in Sq. mtr.)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white"><td className="border px-2 py-1 md:px-4 md:py-2">1</td><td className="border px-2 py-1 md:px-4 md:py-2">Snehana Kaksha (Male)</td><td className="border px-2 py-1 md:px-4 md:py-2">15</td></tr>
                <tr className="bg-blue-50"><td className="border px-2 py-1 md:px-4 md:py-2">2</td><td className="border px-2 py-1 md:px-4 md:py-2">Snehana Kaksha (Female)</td><td className="border px-2 py-1 md:px-4 md:py-2">15</td></tr>
                <tr className="bg-white"><td className="border px-2 py-1 md:px-4 md:py-2">3</td><td className="border px-2 py-1 md:px-4 md:py-2">Swedana Kaksha(Male)</td><td className="border px-2 py-1 md:px-4 md:py-2">15</td></tr>
                <tr className="bg-blue-50"><td className="border px-2 py-1 md:px-4 md:py-2">4</td><td className="border px-2 py-1 md:px-4 md:py-2">Swedana Kaksha(Female)</td><td className="border px-2 py-1 md:px-4 md:py-2">15</td></tr>
                <tr className="bg-white"><td className="border px-2 py-1 md:px-4 md:py-2">5</td><td className="border px-2 py-1 md:px-4 md:py-2">Shirodhara Kaksha(Male)</td><td className="border px-2 py-1 md:px-4 md:py-2">15</td></tr>
                <tr className="bg-blue-50"><td className="border px-2 py-1 md:px-4 md:py-2">6</td><td className="border px-2 py-1 md:px-4 md:py-2">Shirodhara Kaksha(Female)</td><td className="border px-2 py-1 md:px-4 md:py-2">15</td></tr>
                <tr className="bg-white"><td className="border px-2 py-1 md:px-4 md:py-2">7</td><td className="border px-2 py-1 md:px-4 md:py-2">Vamana Kaksha(Male)</td><td className="border px-2 py-1 md:px-4 md:py-2">10</td></tr>
                <tr className="bg-blue-50"><td className="border px-2 py-1 md:px-4 md:py-2">8</td><td className="border px-2 py-1 md:px-4 md:py-2">Vamana Kaksha(Female)</td><td className="border px-2 py-1 md:px-4 md:py-2">10</td></tr>
                <tr className="bg-white"><td className="border px-2 py-1 md:px-4 md:py-2">9</td><td className="border px-2 py-1 md:px-4 md:py-2">Virechana Kaksha(Male)</td><td className="border px-2 py-1 md:px-4 md:py-2">10</td></tr>
                <tr className="bg-blue-50"><td className="border px-2 py-1 md:px-4 md:py-2">10</td><td className="border px-2 py-1 md:px-4 md:py-2">Virechana Kaksha(Female)</td><td className="border px-2 py-1 md:px-4 md:py-2">10</td></tr>
                <tr className="bg-white"><td className="border px-2 py-1 md:px-4 md:py-2">11</td><td className="border px-2 py-1 md:px-4 md:py-2">Basti Kaksha(Male)</td><td className="border px-2 py-1 md:px-4 md:py-2">10</td></tr>
                <tr className="bg-blue-50"><td className="border px-2 py-1 md:px-4 md:py-2">12</td><td className="border px-2 py-1 md:px-4 md:py-2">Basti Kaksha(Female)</td><td className="border px-2 py-1 md:px-4 md:py-2">10</td></tr>
                <tr className="bg-white"><td className="border px-2 py-1 md:px-4 md:py-2">13</td><td className="border px-2 py-1 md:px-4 md:py-2">Rakta Mokshana, Jalaukavacharana, Agnikarma, Prachanna etc Kaksha</td><td className="border px-2 py-1 md:px-4 md:py-2">10</td></tr>
                <tr className="bg-blue-50"><td className="border px-2 py-1 md:px-4 md:py-2">14</td><td className="border px-2 py-1 md:px-4 md:py-2">Panchakarma therapist/Physician's room</td><td className="border px-2 py-1 md:px-4 md:py-2">20</td></tr>
                <tr className="bg-white"><td className="border px-2 py-1 md:px-4 md:py-2">15</td><td className="border px-2 py-1 md:px-4 md:py-2">Panchakarma store room</td><td className="border px-2 py-1 md:px-4 md:py-2">10</td></tr>
                <tr className="bg-blue-50"><td className="border px-2 py-1 md:px-4 md:py-2">16</td><td className="border px-2 py-1 md:px-4 md:py-2">Four attached toilet-baths for males and four for females with wash basin and geyser facility in each. These will be in addition to the toilets of wards.</td><td className="border px-2 py-1 md:px-4 md:py-2">20</td></tr>
                <tr className="bg-white font-semibold"><td className="border px-2 py-1 md:px-4 md:py-2" colSpan={2}>Total Constructed Area in Panchkarma Block (in Sq. mtr)</td><td className="border px-2 py-1 md:px-4 md:py-2">210.00</td></tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.h2
          className="text-xl md:text-2xl font-semibold text-blue-900 mb-4 md:mb-6 text-center"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hospital Physiotherapy Unit Details
        </motion.h2>

        <div className="overflow-x-auto">
          <table className="w-full border border-green-500 text-sm md:text-base">
            <thead>
              <tr className="bg-green-200">
                <th className="border border-green-500 px-2 py-1 md:px-4 md:py-2">S.No</th>
                <th className="border border-green-500 px-2 py-1 md:px-4 md:py-2">Name of the Departments</th>
                <th className="border border-green-500 px-2 py-1 md:px-4 md:py-2">Available Area (in Sq. mtr.)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="border px-2 py-1 md:px-4 md:py-2">1</td>
                <td className="border px-2 py-1 md:px-4 md:py-2">Physiotherapy Room</td>
                <td className="border px-2 py-1 md:px-4 md:py-2">50</td>
              </tr>
              <tr className="bg-blue-50">
                <td className="border px-2 py-1 md:px-4 md:py-2">2</td>
                <td className="border px-2 py-1 md:px-4 md:py-2">Physiotherapist Room</td>
                <td className="border px-2 py-1 md:px-4 md:py-2">25</td>
              </tr>
              <tr className="bg-white font-semibold">
                <td className="border px-2 py-1 md:px-4 md:py-2" colSpan={2}>Total Constructed Area in Physiotherapy Unit (in Sq. mtr)</td>
                <td className="border px-2 py-1 md:px-4 md:py-2">75.00</td>
              </tr>
            </tbody>
          </table>
        </div>

        <motion.h2
          className="text-xl md:text-2xl font-semibold text-blue-900 mt-8 md:mt-12 mb-4 md:mb-6 text-center"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hospital Clinical Laboratory Details
        </motion.h2>

        <div className="overflow-x-auto">
          <table className="w-full border border-green-500 text-sm md:text-base">
            <thead>
              <tr className="bg-green-200">
                <th className="border border-green-500 px-2 py-1 md:px-4 md:py-2">S.No</th>
                <th className="border border-green-500 px-2 py-1 md:px-4 md:py-2">Name of the Departments</th>
                <th className="border border-green-500 px-2 py-1 md:px-4 md:py-2">Available Area (in Sq. mtr.)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="border px-2 py-1 md:px-4 md:py-2">1</td>
                <td className="border px-2 py-1 md:px-4 md:py-2">Well equipped and spacious area of hundred square meter with separate sections for Pathology, Biochemistry and Micro-biology</td>
                <td className="border px-2 py-1 md:px-4 md:py-2">75</td>
              </tr>
              <tr className="bg-blue-50">
                <td className="border px-2 py-1 md:px-4 md:py-2">2</td>
                <td className="border px-2 py-1 md:px-4 md:py-2">Attached toilet shall be there for collection of urine samples</td>
                <td className="border px-2 py-1 md:px-4 md:py-2">5</td>
              </tr>
              <tr className="bg-white">
                <td className="border px-2 py-1 md:px-4 md:py-2">3</td>
                <td className="border px-2 py-1 md:px-4 md:py-2">Other diagnostic tools for ECG or TMT etc</td>
                <td className="border px-2 py-1 md:px-4 md:py-2">20</td>
              </tr>
              <tr className="bg-white font-semibold">
                <td className="border px-2 py-1 md:px-4 md:py-2" colSpan={2}>Total Constructed Area in Clinical Laboratory (in Sq. mtr)</td>
                <td className="border px-2 py-1 md:px-4 md:py-2">100.00</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full mt-8 md:mt-12 shadow-lg md:shadow-2xl rounded-lg bg-white/90"
        >
          <h2 className="text-xl md:text-2xl font-semibold text-blue-900 mb-4 md:mb-6 text-center">Radiology/Sonography Block Details</h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-green-500 rounded-lg overflow-hidden text-sm md:text-base">
              <thead>
                <tr className="bg-green-200">
                  <th className="border border-green-500 px-2 py-1 md:px-4 md:py-2">S.No</th>
                  <th className="border border-green-500 px-2 py-1 md:px-4 md:py-2">Name of the Departments</th>
                  <th className="border border-green-500 px-2 py-1 md:px-4 md:py-2">Available Area (in Sq. mtr.)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white"><td className="border px-2 py-1 md:px-4 md:py-2">1</td><td className="border px-2 py-1 md:px-4 md:py-2">Radiologist chamber</td><td className="border px-2 py-1 md:px-4 md:py-2">5</td></tr>
                <tr className="bg-blue-50"><td className="border px-2 py-1 md:px-4 md:py-2">2</td><td className="border px-2 py-1 md:px-4 md:py-2">X-ray room</td><td className="border px-2 py-1 md:px-4 md:py-2">15</td></tr>
                <tr className="bg-white"><td className="border px-2 py-1 md:px-4 md:py-2">3</td><td className="border px-2 py-1 md:px-4 md:py-2">Dark room</td><td className="border px-2 py-1 md:px-4 md:py-2">5</td></tr>
                <tr className="bg-blue-50"><td className="border px-2 py-1 md:px-4 md:py-2">4</td><td className="border px-2 py-1 md:px-4 md:py-2">Film drying room</td><td className="border px-2 py-1 md:px-4 md:py-2">5</td></tr>
                <tr className="bg-white"><td className="border px-2 py-1 md:px-4 md:py-2">5</td><td className="border px-2 py-1 md:px-4 md:py-2">Store room</td><td className="border px-2 py-1 md:px-4 md:py-2">5</td></tr>
                <tr className="bg-blue-50"><td className="border px-2 py-1 md:px-4 md:py-2">6</td><td className="border px-2 py-1 md:px-4 md:py-2">Ultra Sonography Room</td><td className="border px-2 py-1 md:px-4 md:py-2">5</td></tr>
                <tr className="bg-white"><td className="border px-2 py-1 md:px-4 md:py-2">7</td><td className="border px-2 py-1 md:px-4 md:py-2">Patients waiting and dressing room</td><td className="border px-2 py-1 md:px-4 md:py-2">5</td></tr>
                <tr className="bg-blue-50"><td className="border px-2 py-1 md:px-4 md:py-2">8</td><td className="border px-2 py-1 md:px-4 md:py-2">Reception or registration or report room</td><td className="border px-2 py-1 md:px-4 md:py-2">5</td></tr>
                <tr className="bg-white font-semibold"><td className="border px-2 py-1 md:px-4 md:py-2" colSpan={2}>Total Constructed Area in Radiology/Sonography Block (in Sq. mtr)</td><td className="border px-2 py-1 md:px-4 md:py-2">50.00</td></tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full mt-8 md:mt-12 shadow-lg md:shadow-2xl rounded-lg bg-white/90"
        >
          <h2 className="text-xl md:text-2xl font-semibold text-blue-900 mb-4 md:mb-6 text-center">Hospital Store/Mortuary Block Details</h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-green-500 rounded-lg overflow-hidden text-sm md:text-base">
              <thead>
                <tr className="bg-green-200">
                  <th className="border border-green-500 px-2 py-1 md:px-4 md:py-2">S.No</th>
                  <th className="border border-green-500 px-2 py-1 md:px-4 md:py-2">Name of the Departments</th>
                  <th className="border border-green-500 px-2 py-1 md:px-4 md:py-2">Available Area (in Sq. mtr.)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white"><td className="border px-2 py-1 md:px-4 md:py-2">1</td><td className="border px-2 py-1 md:px-4 md:py-2">Store/Mortuary</td><td className="border px-2 py-1 md:px-4 md:py-2">25</td></tr>
                <tr className="bg-white font-semibold"><td className="border px-2 py-1 md:px-4 md:py-2" colSpan={2}>Total Constructed Area in Store/Mortuary Block (in Sq. mtr)</td><td className="border px-2 py-1 md:px-4 md:py-2">25.00</td></tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full mt-8 md:mt-12 shadow-lg md:shadow-2xl rounded-lg bg-white/90"
        >
          <div className="overflow-x-auto">
            <table className="w-full border border-green-500 rounded-lg overflow-hidden text-sm md:text-base">
              <tbody>
                <tr className="bg-white font-semibold"><td className="border px-2 py-1 md:px-4 md:py-2" colSpan={2}>Grand Total Constructed Area of the Hospital (in Sq. mtr):</td><td className="border px-2 py-1 md:px-4 md:py-2">2025.00</td></tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full mt-8 md:mt-12 shadow-lg md:shadow-2xl rounded-lg bg-white/90 mb-8 md:mb-12"
        >
          <h2 className="text-xl md:text-2xl font-semibold text-blue-900 mb-4 md:mb-6 text-center">Other Infrastructure Details</h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-green-500 rounded-lg overflow-hidden text-sm md:text-base">
              <thead>
                <tr className="bg-green-200">
                  <th className="border border-green-500 px-2 py-1 md:px-4 md:py-2">S.No</th>
                  <th className="border border-green-500 px-2 py-1 md:px-4 md:py-2">Name of the Departments</th>
                  <th className="border border-green-500 px-2 py-1 md:px-4 md:py-2">Available (Y/N)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white"><td className="border px-2 py-1 md:px-4 md:py-2">1</td><td className="border px-2 py-1 md:px-4 md:py-2">Ambulance Service</td><td className="border px-2 py-1 md:px-4 md:py-2">Yes</td></tr>
                <tr className="bg-blue-50"><td className="border px-2 py-1 md:px-4 md:py-2">2</td><td className="border px-2 py-1 md:px-4 md:py-2">Sitting arrangement for internees/students in Various Out Patient Department</td><td className="border px-2 py-1 md:px-4 md:py-2">Yes</td></tr>
                <tr className="bg-white"><td className="border px-2 py-1 md:px-4 md:py-2">3</td><td className="border px-2 py-1 md:px-4 md:py-2">Animal House</td><td className="border px-2 py-1 md:px-4 md:py-2">Not Available</td></tr>
                <tr className="bg-blue-50"><td className="border px-2 py-1 md:px-4 md:py-2">4</td><td className="border px-2 py-1 md:px-4 md:py-2">Central Research Laboratory</td><td className="border px-2 py-1 md:px-4 md:py-2">Not Available</td></tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default IntroductionwithInfrastructure;