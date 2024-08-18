import React from "react";

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-gray-900 to-black">
      <div className="bg-white bg-opacity-10 rounded-lg shadow-xl w-full max-w-5xl p-8 backdrop-blur-md">
        <h1 className="text-4xl font-extrabold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          About Us
        </h1>
        <p className="text-lg text-gray-300 mb-8 text-center">
          Welcome to [Your Company/Project Name], where we are committed to
          [briefly state your mission or vision]. Our journey began in [Year
          founded], and since then, we have been dedicated to providing
          exceptional services and products to our customers.
        </p>
        <div className="flex flex-col md:flex-row items-center mb-8 space-y-4 md:space-y-0">
          <img
            src="[your-image-url.jpg]"
            alt="Team photo"
            className="w-full md:w-1/2 rounded-lg shadow-lg mb-4 md:mb-0 md:mr-6 transform transition duration-500 hover:scale-105 object-cover"
          />
          <div className="md:w-1/2 text-gray-300">
            <h2 className="text-3xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-500">
              Our Story
            </h2>
            <p>
              [Company/Project Name] was founded by [Founder Name(s)] with a
              vision to [describe the initial vision or problem you aimed to
              solve]. Over the years, we have evolved to meet the changing
              needs of our clients, while staying true to our core values of
              [list a few core values or principles].
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center mb-8 space-y-4 md:space-y-0">
          <div className="md:w-1/2 text-gray-300 mb-4 md:mb-0 md:mr-6">
            <h2 className="text-3xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-yellow-500">
              Our Mission
            </h2>
            <p>
              Our mission is to [describe your mission]. We believe in
              [briefly talk about what you believe in], and we are dedicated to
              [describe what you are dedicated to doing].
            </p>
          </div>
          <img
            src="[another-image-url.jpg]"
            alt="Company mission"
            className="w-full md:w-1/2 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 object-cover"
          />
        </div>
        <div className="text-center text-gray-300">
          <h2 className="text-3xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600">
            Meet Our Team
          </h2>
          <p className="mb-8">
            We are a group of passionate individuals dedicated to [briefly
            describe your team's dedication or skills]. Our team is made up of
            experienced professionals who are committed to [describe commitment].
          </p>
          <div className="flex justify-center">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition duration-300 transform hover:-translate-y-1">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
