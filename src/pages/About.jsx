import React from 'react';
import NavBar from '../components/NavBar';

const About = () => {
  return (
    <>
      <NavBar />
      <div className="bg-blue-50 min-h-screen flex flex-col items-center justify-center px-4 py-10">
        <div className="max-w-4xl text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">About NewsApp</h1>
          <p className="text-lg text-gray-700 mb-6">
            NewsApp is your trusted source for breaking news, exclusive stories, and real-time updates across politics,
            sports, technology, and more. Our goal is to keep you informed and connected with the world around you.
          </p>

          <p className="text-md text-gray-600 mb-10">
            Whether you're looking for top headlines or in-depth reporting, NewsApp brings the world to your fingertips — fast, accurate, and accessible.
          </p>

        </div>
      </div>
    </>
  );
};

export default About;
