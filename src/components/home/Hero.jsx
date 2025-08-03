import React from 'react';

const Hero = () => {
  return (
    <div className="bg-blue-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left Text Content */}
        <div className="text-center md:text-left flex-1">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            Stay Updated with <span className="text-blue-600">Breaking News</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-xl">
            Get real-time headlines, politics, sports, technology and more. Your trusted news source at your fingertips.
          </p>
          
          {/* CTA Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:scale-105">
              Get Started
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:scale-105">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image or Illustration */}
        <div className="flex-1">
          <img
            src="https://img.freepik.com/free-vector/news-concept-illustration_114360-633.jpg"
            alt="News Illustration"
            className="w-full max-w-md mx-auto md:mx-0 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
