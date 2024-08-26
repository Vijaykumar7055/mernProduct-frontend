import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const BookCard = ({ data, favourite }) => {
  console.log(data);

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  const handleRemoveBook = async () => {
    try {
      const response = await axios.put(
        "https://mernproduct-1.onrender.com/api/v1/remove-book-from-favorite", // Ensure this is the correct endpoint
        { bookid: data._id },
        { headers }
      );
      alert(response.data.message);
    } catch (error) {
      alert(error.response?.data?.message || "An error occurred.");
    }
  };

  return (
    <div className="bg-zinc-900 rounded-lg shadow-lg overflow-hidden">
      <Link to={`/view-book-details/${data._id}`} className="block no-underline">
        <div className="relative">
          <img
            src={data.url}
            className="object-cover w-full h-64 md:h-72 lg:h-80 shadow-md"
            alt={data.title}
          />
        </div>
        <div className="py-4 px-2">
          <div className="flex flex-row justify-between mb-4">
            <h2 className="text-xl font-semibold text-white truncate">{data.title}</h2>
            <p className="text-lg font-medium text-gray-300 truncate text-right">{data.author}</p>
          </div>
          <p className="text-lg font-bold text-white mt-2 mb-4">₹{data.price}</p>
          <div className="flex flex-row text-gray-400 text-sm">
            <div className="flex-1">
              <p className="flex items-center mb-1">📸 Camera: {data.camera}</p>
              <p className="flex items-center">🧠 RAM: {data.rem}</p>
            </div>
            <div className="flex-1">
              <p className="flex items-center mb-1">💾 ROM: {data.rom}</p>
              <p className="flex items-center">🔋 Battery: {data.battery}</p>
            </div>
          </div>
        </div>
      </Link>
      {favourite && (
        <button
          onClick={handleRemoveBook}
          className="w-full bg-blue-500 text-white text-lg font-semibold px-4 py-2 rounded-b-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-transform transform hover:scale-105"
        >
          Remove from Favorites
        </button>
      )}
    </div>
  );
};

export default BookCard;
