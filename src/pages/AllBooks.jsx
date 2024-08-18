import React, { useEffect, useState } from "react";
import axios from "axios";
import { FiSearch } from "react-icons/fi"; // Import search icon
import BookCard from "../componants/BookCard/BookCard";

const AllBooks = () => {
  const [data, setData] = useState([]); // Initialize as an empty array
  const [searchTerm, setSearchTerm] = useState(""); // State to hold the search term
  const [currentPage, setCurrentPage] = useState(1); // State for the current page
  const booksPerPage = 8; // Define how many books to display per page

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          "https://mernproduct-1.onrender.com/api/v1/get-all-books"
        );
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

  // Filter the books based on the search term
  const filteredBooks = data.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate the books to display on the current page
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

  // Calculate total number of pages
  const totalPages = Math.ceil(filteredBooks.length / booksPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="h-auto px-4">
      <h1 className="text-3xl text-yellow-100">All Products</h1>
      <div className="relative my-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search product"
          className="w-full pl-4 pr-10 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500 text-black"
        />
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-transparent border-none p-0 m-0"
          onClick={() => console.log("Search initiated")}
        >
          <FiSearch className="text-gray-400" size={20} />
        </button>
      </div>
      <div className="my-8 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {currentBooks.length > 0 ? (
          currentBooks.map((item, i) => (
            <div key={i}>
              <BookCard data={item} />
            </div>
          ))
        ) : (
          <p>No books available</p> // Handle empty state
        )}
      </div>
      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center my-4">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`mx-1 px-3 py-1 rounded ${
                currentPage === i + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-black"
              } hover:bg-blue-400 transition-colors duration-300`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllBooks;
