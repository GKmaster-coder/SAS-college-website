import React, { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaClock,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";
import PageBanner from "../components/Shared/PageBanner";
import ContactForm from "../components/home/ContactFrom"

const pageBg =
  "/divider-img.jpg";

const ContactUs = () => {
  return (
    <div className="bg-[#e9e3d4]">
      <PageBanner title="Contact Us" backgroundImage={pageBg} />

      <section className="py-16 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md p-8 h-full"
            >
              <h3 className="text-2xl font-bold mb-6 text-[#283e49] border-b-2 border-[#8da540] pb-2">
                Contact Details
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <FaMapMarkerAlt className="text-[#885548] mt-1 text-xl" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Address</h4>
                    <p className="text-gray-700">
                      Rameshwar Road, Harhua, Varanasi, Uttar Pradesh (Pin: 221105)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <FaPhone className="text-[#885548] mt-1 text-xl" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Phone</h4>
                    <p className="text-gray-700">8765624982, 9415255771, 9657777459</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <FaWhatsapp className="text-[#885548] mt-1 text-xl" />
                  <div>
                    <h4 className="font-semibold text-gray-800">WhatsApp</h4>
                    <p className="text-gray-700">8765624982, 9657777459</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <FaEnvelope className="text-[#885548] mt-1 text-xl" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <p className="text-gray-700">info@sasayurvediccollege.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <FaClock className="text-[#885548] mt-1 text-xl" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Hours</h4>
                    <p className="text-gray-700">Mon-Sat: 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  <a href="#" className="text-[#283e49] hover:text-[#885548] text-2xl">
                    <FaFacebook />
                  </a>
                  <a href="#" className="text-[#283e49] hover:text-[#885548] text-2xl">
                    <FaTwitter />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <Suspense fallback={<div>Loading form...</div>}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;

