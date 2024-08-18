import React from "react";
import heroImg from "./hero.png";

const Hero = () => {
  return (
    <div className="h-full  flex flex-col lg:flex-row bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 p-8">
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-6">
        <h1 className="text-5xl lg:text-7xl font-bold text-yellow-200">
          Discover Your Next Great Read
        </h1>
        <p className="mt-4 text-lg lg:text-xl text-zinc-300 max-w-lg">
          Dive into a world of endless possibilities with our curated selection of books. Explore stories that captivate, inspire, and transport you to another world.
        </p>
        <button className="mt-8 py-3 px-6 text-yellow-200 text-lg lg:text-xl rounded-lg bg-yellow-600 hover:bg-yellow-700 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg">
          Discover product
        </button>
      </div>
      <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-center lg:justify-end">
        <img src={heroImg} className="rounded-lg shadow-2xl max-h-[75vh]" alt="Hero" />
      </div>
    </div>
  );
};

export default Hero;
