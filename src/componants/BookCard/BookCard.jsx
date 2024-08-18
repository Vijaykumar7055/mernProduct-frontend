import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const BookCard = ({ data, favourite }) => {
  console.log(data);

  const handleRemoveBook = async () => {
   const headers= {
      id: localStorage.getItem("id"),
      authorization: `Bearer ${localStorage.getItem("token")}`,
      bookid: data._id,
    }
    try {
      const response = await axios.put(
        "https://mernproduct-1.onrender.com/api/v1/remove-book-from-favorite",
        {}, // You can send an empty object if there's no body data to send
        {
          headers
        }
      );
      alert(response.data.message);
    } catch (error) {
      console.log("Error removing book:", error);
      alert("Failed to remove the book from favorites.");
    }
  };

  return (
    <div>
      <Link
        to={`/view-book-details/${data._id}`}
        className="block no-underline"
      >
        <div className="bg-zinc-800 rounded-lg p-4 flex flex-col hover:bg-zinc-700 transition-colors duration-300">
          <div className="bg-zinc-900 rounded-lg overflow-hidden flex items-center justify-center mb-4">
            <img
              src={data.url}
              className="object-cover w-full h-48 md:h-60 lg:h-72 transform transition-transform duration-300 hover:scale-110"
              alt={data.title}
            />
          </div>
          <div className="flex flex-col flex-grow">
            <h2 className="text-xl text-zinc-200 font-semibold truncate">
              {data.title}
            </h2>
            <p className="mt-1 text-zinc-200 font-medium text-lg truncate">
              {data.author}
            </p>
            <p className="mt-2 text-zinc-200 font-bold text-xl">
              ₹{data.price}
            </p>
          </div>
        </div>
      </Link>
      {favourite && (
        <button
          onClick={handleRemoveBook}
          className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white text-xl font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition-transform transform hover:scale-105"
        >
          Remove from Favorites
        </button>
      )}
    </div>
  );
};

export default BookCard;
