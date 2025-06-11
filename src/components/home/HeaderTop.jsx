import { PhoneCall, Mail, Clock } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export default function HeaderTop() {
  return (
    <div className="w-full bg-[rgb(244,225,182)] text-[#2c2c2c] text-xs sm:text-sm shadow-sm border-b border-[#e0c97d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-1.5 sm:py-3 flex flex-col md:flex-row items-center justify-between gap-2 sm:gap-6">

        {/* Left Section */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-8">
          <div className="flex items-center gap-2 text-[11px] sm:text-sm">
            <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#a87d28]" />
            <span className="font-medium">Open Hours: <span className="font-semibold">9am to 4pm</span></span>
          </div>

          <div className="hidden md:flex items-center gap-2 text-[11px] sm:text-sm">
            <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#a87d28]" />
            <a
              href="mailto:abc3435r.org"
              className="hover:text-[#b63e3e] font-semibold transition-colors duration-200"
            >
              abc3435r.org
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-[11px] sm:text-sm">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-[#a87d28]">Admission Enquiry:</span>
            <PhoneCall className="w-4 h-4 sm:w-5 sm:h-5 text-[#a87d28]" />
            <a
              href="tel:+917054750612"
              className="hover:text-[#b63e3e] font-bold transition-colors duration-200"
            >
              +91-7054750612
            </a>
          </div>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/917054750612?text=Hello%2C%20I%20have%20an%20enquiry%20regarding%20admission."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 sm:py-2 bg-[#25D366] text-white font-semibold uppercase rounded-full hover:bg-[#1fcf5b] hover:scale-105 transition-all duration-200"
          >
            <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}




