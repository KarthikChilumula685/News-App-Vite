import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import NavBar from "../components/NavBar";

const Contact = () => {
  return (
    <>
      <NavBar />
      <div className="w-full px-4 py-10 flex justify-center items-center bg-white">
        <div className="max-w-2xl w-full bg-blue-50 rounded-2xl shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Contact Me</h2>
          <p className="text-gray-600 mb-8">
            I'd love to connect! Feel free to reach out through the platforms
            below.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {/* Instagram Card */}
            <a
              href="https://www.instagram.com/karthik_chilumula"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white hover:bg-pink-50 transition-all duration-300 px-4 py-3 rounded-xl shadow-md w-full sm:w-auto"
            >
              <div className="bg-pink-500 p-2 rounded-full text-white">
                <FaInstagram size={24} />
              </div>
              <span className="text-lg font-medium text-pink-700">
                @karthik_chilumula
              </span>
            </a>

            {/* LinkedIn Card */}
            <a
              href="https://www.linkedin.com/in/karthik-chilumula-63a50a31b/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white hover:bg-blue-50 transition-all duration-300 px-4 py-3 rounded-xl shadow-md w-full sm:w-auto"
            >
              <div className="bg-blue-600 p-2 rounded-full text-white">
                <FaLinkedin size={24} />
              </div>
              <span className="text-lg font-medium text-blue-700">
                LinkedIn Profile
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
