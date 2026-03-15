import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-12 px-6 md:px-16 font-sans relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left Section: Logo & Brand (Seven Business Style) */}
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-1 bg-red-500"></div>
            <h2 className="text-white text-3xl font-bold leading-tight">
              The Software <br /> Engineers
            </h2>
          </div>
          <div className="flex space-x-4 mt-4">
            <a
              href="#"
              className="hover:text-white border border-gray-700 p-2 rounded-full transition"
            >
              <FaFacebookF size={14} />
            </a>
            <a
              href="#"
              className="hover:text-white border border-gray-700 p-2 rounded-full transition"
            >
              <FaLinkedinIn size={14} />
            </a>
          </div>
        </div>

        {/* Middle Section: Services (TSE Content) */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-6">Services</h3>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-white cursor-pointer transition">
              Software Development
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Web Solution
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Multimedia Solution
            </li>
          </ul>
        </div>

        {/* Right Section: Contact (Seven Business Layout + TSE Info) */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-6">Contact</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start space-x-3">
              <FaEnvelope className="text-green-500 mt-1" />
              <span>infos@tsebd.com</span>
            </li>
            <li className="flex items-start space-x-3">
              <FaPhoneAlt className="text-green-500 mt-1" />
              <span>+880 1574 885 570</span>
            </li>
            <li className="flex items-start space-x-3">
              <FaMapMarkerAlt className="text-green-500 mt-1" />
              <span>
                House 6, Road 2, Block D, <br />
                Banasree, Rampura, Dhaka.
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
        <p>© The Software Engineers – 2026. All rights reserved.</p>

        {/* Back to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 bg-gray-400/30  p-3 rounded hover:bg-gray-500/50 transition shadow-lg"
        >
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
