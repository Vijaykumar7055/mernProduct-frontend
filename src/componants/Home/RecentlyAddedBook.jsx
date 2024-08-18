import React, { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "../BookCard/BookCard";

const RecentlyAddedBook = () => {
  const [data, setData] = useState([]); // Initialize as an empty array

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          "https://mernproduct-1.onrender.com/api/v1/get-recent-books"
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
    <div className="mt-8 px-4">
      <h1 className="text-3xl text-yellow-100">Recently Added Product</h1>
      <div className="my-8 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {data.length > 0 ? (
          data.map((item, i) => (
            <div key={i}>
              <BookCard data={item} />
            </div>
          ))
        ) : (
          <p>No books available</p> // Handle empty state
        )}
      </div>
    </div>
  );
};

export default RecentlyAddedBook;
