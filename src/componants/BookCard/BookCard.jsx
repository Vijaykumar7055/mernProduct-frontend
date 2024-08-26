import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const BookCard = ({ data, favourite }) => {
  console.log(data);
  const headers= {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
    bookid: data._id,
  }
  const handleRemoveBook = async () => {
      const response = await axios.put(
        "https://mernproduct-1.orender.com/api/v1/add-book-to-favorite",
        {
          headers
        }
      );
      alert(response.data.message);
  };

  return (
    <div>
      <Link
        to={`/view-book-details/${data._id}`}
        className="block no-underline px-5"
      >
        <div className="bg-zinc-800 pb-3 rounded-lg  flex flex-col w-full hover:bg-zinc-700 transition-colors duration-300">
          <div className="bg-zinc-900 rounded-lg overflow-hidden flex items-center justify-center mb-4">
            <img
              src={data.url}
              className="object-cover w-full h-48 md:h-60 lg:h-72 transform transition-transform duration-300 hover:scale-110"
              alt={data.title}
            />
          </div>
          <div className="flex mx-2  items-center justify-between   flex-grow">
            <h2 className="text-xl text-zinc-200 font-semibold truncate">
              {data.title}
            </h2>
            <p className="mt-1 text-zinc-200 font-medium text-lg truncate">
              {data.author}
            </p>
           
          </div>
          <p className="mt-2 ms-2 text-zinc-200 font-bold text-xl">
              ₹{data.price}
            </p>
          <p className="mt-2 ms-2 text-zinc-200 font-bold text-xl">
              ₹{data.rom}
            </p>
          <p className="mt-2 ms-2 text-zinc-200 font-bold text-xl">
              ₹{data.rem}
            </p>
          <p className="mt-2 ms-2 text-zinc-200 font-bold text-xl">
              ₹{data.battery}
            </p>
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
