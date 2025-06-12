import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { HiOutlineGlobeAlt } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="bg-[#364d56] text-gray-200 p-6 sm:p-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16">
        {/* Google Map */}
        <div className="w-full md:w-1/2 h-64 md:h-80 rounded-lg overflow-hidden shadow-xl border-2 border-[#4a5f6b] hover:border-[#5d7a8a] transition-colors duration-300">
          <iframe
            title="SAS Ayurvedic Medical College Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.5232403720246!2d82.96812347458815!3d25.30766802911213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e318f6f20bd71%3A0xf7dca13f64868f4d!2sSAS%20Ayurvedic%20Medical%20College%20%26%20Hospital!5e0!3m2!1sen!2sin!4v1718000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="opacity-90 hover:opacity-100 transition-opacity duration-300"
          />
        </div>

        {/* Info Section */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h2 className="text-xl font-bold uppercase text-white tracking-wider">
            SAS Ayurvedic Medical College and Hospital
          </h2>

          <div className="space-y-3">
            <p className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-sm sm:text-base">
              <FaMapMarkerAlt className="text-[#8ab4c1]" />
              Harauva, Varanasi
            </p>

            <p className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-sm sm:text-base">
              <FaPhone className="text-[#8ab4c1]" />
              <span className="font-medium">Contact:</span> 8765624982, 9415255771, 9657777459
            </p>

            <p className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-sm sm:text-base">
              <FaWhatsapp className="text-[#8ab4c1]" />
              <span className="font-medium">Whatsapp No:</span> 8765624982, 9657777459
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-6 pt-2">
            <a
              href="#"
              aria-label="Facebook"
              className="text-[#8ab4c1] hover:text-white transition-colors duration-300 text-2xl"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-[#8ab4c1] hover:text-white transition-colors duration-300 text-2xl"
            >
              <FaTwitter />
            </a>
          </div>

          {/* Important Sites */}
          <div className="text-sm mt-4 space-y-2">
            <strong className="flex items-center justify-center md:justify-start gap-1">
              <HiOutlineGlobeAlt className="text-[#8ab4c1]" />
              IMP Sites:
            </strong>
            <div className="flex flex-wrap justify-center md:justify-start gap-x-2 gap-y-1">
              {[
                { name: "ncismindia.org", url: "https://ncismindia.org" },
                { name: "ayush.gov.in", url: "https://ayush.gov.in" },
                { name: "india.gov.in", url: "https://india.gov.in" },
                { name: "ayurvedup.in", url: "https://ayurvedup.in" },
                { name: "up.gov.in", url: "https://up.gov.in" },
                { name: "mggaugkp.ac.in", url: "https://mggaugkp.ac.in" },
              ].map((site, index) => (
                <React.Fragment key={site.url}>
                  <a
                    href={site.url}
                    className="text-blue-300 hover:text-blue-100 underline transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {site.name}
                  </a>
                  {index < 5 && (
                    <span className="hidden sm:inline text-gray-400">|</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <p className="text-xs text-gray-400 mt-6">
            © 2017 - {new Date().getFullYear()} SAS Ayurvedic Medical College. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
