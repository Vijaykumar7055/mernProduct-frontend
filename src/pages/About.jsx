import React from "react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 to-black p-6 text-white">
      <div className="w-full max-w-6xl bg-opacity-20 rounded-lg shadow-2xl backdrop-blur-md p-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600">
            About Us
          </h1>
          <p className="text-lg text-gray-300">
            At [Your Company/Project Name], we are passionate about [your core mission or vision]. Since our founding in [Year], we’ve been on a mission to deliver excellence.
          </p>
        </div>

        {/* Our Journey Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          <img
            src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
            alt="Our journey"
            className="rounded-lg shadow-lg transform transition duration-500 hover:scale-105 object-cover w-full h-64 md:h-auto"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-600">
              Our Journey
            </h2>
            <p className="text-gray-300">
              [Company/Project Name] was started by [Founder Name(s)] with a simple idea: [describe the initial idea]. As we've grown, we've remained committed to our roots and core values of [list a few core values].
            </p>
          </div>
        </div>

        {/* Our Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          <div className="flex flex-col justify-center order-2 md:order-1">
            <h2 className="text-4xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600">
              Our Mission
            </h2>
            <p className="text-gray-300">
              We aim to [describe your mission]. We believe in [mention core beliefs], and are dedicated to [mention key commitments].
            </p>
          </div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDo890dsxpB5UCLQFdVBWmK4qVxTrsrLEEUg&s"
            alt="Our mission"
            className="rounded-lg shadow-lg transform transition duration-500 hover:scale-105 object-cover w-full h-64 md:h-auto order-1 md:order-2"
          />
        </div>

        {/* Our Values Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-600">
            Our Values
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            We believe in integrity, innovation, and customer satisfaction. Our values guide us in every decision and action we take.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-6 bg-zinc-800 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-500">
                Integrity
              </h3>
              <p className="text-gray-300">
                We maintain the highest standards of honesty and transparency in all our interactions.
              </p>
            </div>
            <div className="p-6 bg-zinc-800 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-500">
                Innovation
              </h3>
              <p className="text-gray-300">
                We are constantly seeking new ways to improve and innovate in our industry.
              </p>
            </div>
            <div className="p-6 bg-zinc-800 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">
                Customer Focus
              </h3>
              <p className="text-gray-300">
                Our customers are at the heart of everything we do, and their satisfaction is our top priority.
              </p>
            </div>
          </div>
        </div>

        {/* Our Achievements Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
            Our Achievements
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Over the years, we have achieved numerous milestones that have solidified our position as a leader in the industry.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-6 bg-zinc-800 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-500">
                100+ Projects
              </h3>
              <p className="text-gray-300">
                Successfully completed over 100 projects with a high client satisfaction rate.
              </p>
            </div>
            <div className="p-6 bg-zinc-800 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-500">
                50+ Awards
              </h3>
              <p className="text-gray-300">
                Recognized with over 50 industry awards for excellence in service and innovation.
              </p>
            </div>
            <div className="p-6 bg-zinc-800 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">
                Global Reach
              </h3>
              <p className="text-gray-300">
                Expanded our services to clients in over 20 countries worldwide.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            We are proud of the relationships we’ve built with our clients and the positive feedback they’ve shared.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-6 bg-zinc-800 rounded-lg shadow-lg">
              <p className="text-gray-300">
                "Working with [Your Company] has been a game-changer for our business. Their dedication and expertise are unmatched."
              </p>
              <p className="text-sm text-yellow-300 mt-4">- Client Name</p>
            </div>
            <div className="p-6 bg-zinc-800 rounded-lg shadow-lg">
              <p className="text-gray-300">
                "Exceptional service and results. We couldn’t be happier with the outcome of our project."
              </p>
              <p className="text-sm text-yellow-300 mt-4">- Client Name</p>
            </div>
            <div className="p-6 bg-zinc-800 rounded-lg shadow-lg">
              <p className="text-gray-300">
                "A fantastic team that delivers on its promises. Highly recommend!"
              </p>
              <p className="text-sm text-yellow-300 mt-4">- Client Name</p>
            </div>
          </div>
        </div>

        {/* Meet the Team Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600">
            Meet the Team
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            We are a group of passionate individuals dedicated to [briefly describe your team's dedication or skills]. Our team is made up of experienced professionals who are committed to [describe commitment].
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-6 bg-zinc-800 rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/150"
                alt="Team member 1"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">Team Member 1</h3>
              <p className="text-gray-400">Role/Position</p>
            </div>
            <div className="p-6 bg-zinc-800 rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/150"
                alt="Team member 2"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">Team Member 2</h3>
              <p className="text-gray-400">Role/Position</p>
            </div>
            <div className="p-6 bg-zinc-800 rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/150"
                alt="Team member 3"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">Team Member 3</h3>
              <p className="text-gray-400">Role/Position</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full shadow-lg hover:opacity-90 transition duration-300 transform hover:-translate-y-1">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
