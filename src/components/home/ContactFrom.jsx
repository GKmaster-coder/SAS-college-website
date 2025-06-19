import React from "react";

const ContactForm = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 lg:col-span-2 h-full w-full">
      <h3 className="text-xl sm:text-2xl font-bold mb-6 text-[#283e49] border-b-2 border-[#8da540] pb-2">
        Send Us a Message
      </h3>

      <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {/* Full Name */}
        <div className="col-span-1">
          <label className="block text-sm sm:text-base text-gray-700 mb-1">Full Name</label>
          <input
            type="text"
            placeholder="Your full name"
            className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8da540]"
          />
        </div>

        {/* Email */}
        <div className="col-span-1">
          <label className="block text-sm sm:text-base text-gray-700 mb-1">Email</label>
          <input
            type="email"
            placeholder="your@example.com"
            className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8da540]"
          />
        </div>

        {/* Phone */}
        <div className="col-span-1">
          <label className="block text-sm sm:text-base text-gray-700 mb-1">Phone</label>
          <input
            type="tel"
            placeholder="+91-XXXXXXXXXX"
            className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8da540]"
          />
        </div>

        {/* Subject */}
        <div className="col-span-1">
          <label className="block text-sm sm:text-base text-gray-700 mb-1">Subject</label>
          <input
            type="text"
            placeholder="Subject of your message"
            className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8da540]"
          />
        </div>

        {/* Message */}
        <div className="col-span-1 sm:col-span-2">
          <label className="block text-sm sm:text-base text-gray-700 mb-1">Message</label>
          <textarea
            rows="5"
            placeholder="Write your message here..."
            className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8da540]"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="col-span-1 sm:col-span-2">
          <button
            type="submit"
            className="w-full bg-[#885548] hover:bg-[#76473a] text-white py-3 rounded-lg font-semibold transition duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
