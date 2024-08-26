import React, { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "../BookCard/BookCard";

const RecentlyAddedBook = () => {
  const [data, setData] = useState([]); // Initialize as an empty array

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1010/api/v1/get-recent-books"
        );
        console.log(response);
        // Ensure response.data.data is an array
        if (Array.isArray(response.data.data)) {
          setData(response.data.data);
        } else {
          console.error("Unexpected data format:", response.data.data);
        }
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks(); // Call the function to fetch books
  }, []);

  return (
    <div className="mt-8 ">
      <h1 className="text-4xl text-yellow-100 font-bold text-center mb-12">
        Recently Added Products
      </h1>
      <div className="my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {data.length > 0 ? (
          data.map((item, i) => (
            <div key={i} className="transform hover:scale-105 transition duration-300">
              <BookCard data={item} />
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400 text-xl">No books available</p> // Handle empty state
        )}
      </div>
    </div>
  );
};

export default RecentlyAddedBook;
