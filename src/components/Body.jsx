import React from 'react';
import Navbar from './Navbar';
import heroImage from '../assets/images/hero.png';
import '../style.css'; // Ensure you import the custom styles

const Body = () => {
  return (
    <>
      <div className="background-effect relative">
        <div className="slanting-line"></div>
        <div className="ray-effect"></div>
        <Navbar /> {/* No container-fluid class here */}
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="text-left ml-11 mt-10 pl-4 p-4 lg:w-1/2">
            <a href="/" className="bg- border-1 my-3 border-blue-300 bg-cyan-200 mt-10 no-underline text-black py-2 px-4 rounded-full">
              Lorem ipsum.
            </a>
            <h1 className="text-7xl mt-5 font-bold">Welcome to Your Healthy Place.</h1>
            <p className="text-gray-800 mt-2 pt-2 mr-8 pr-9">
              A Seamless Experience from Click to Care Because <br />Your Health Can’t Wait.
            </p>
            <div className="relative mt-2 lg:w-3/4 w-full input-container">
              <input
                type="email"
                className="pt-3 pb-3 pl-3 pr-36 border-2 border-gray-300 bg-sky-100 rounded-full w-full"
                placeholder="Enter your work email"
              />
              <button className="absolute top-1/2 transform -translate-y-1/2 right-3 px-6 py-2 bg-blue-500 text-white rounded-full">
                Book Now
              </button>
            </div>
          </div>
          <div className="p-0 lg:w-1/2">
            <img
              src={heroImage}
              alt="Healthcare"
              className="w-full lg:w-full h-auto lg:h-screen object-cover"
              style={{ marginRight: '-50px' }} // Adjust the margin as needed
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
