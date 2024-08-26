import React, { useState } from "react";
import axios from "axios";

const AddBook = () => {
  const [bookData, setBookData] = useState({
    url: "",
    title: "",
    author: "",
    price: "",
    desc: "",
    ram: "", // New field for RAM
    rom: "", // New field for ROM
    battery: "", // New field for Battery
  });

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData({
      ...bookData,
      [name]: value,
    });
  };

  const submit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      // Check if any required fields are empty
      if (
        bookData.url === "" ||
        bookData.title === "" ||
        bookData.author === "" ||
        bookData.price === "" ||
        bookData.desc === "" ||
      
        bookData.ram === "" || // Check new fields
        bookData.rom === "" || // Check new fields
        bookData.battery === "" // Check new fields
      ) {
        alert("Please fill out all fields.");
        return;
      }

      const response = await axios.post(
        "https://mernproduct-1.onrender.com/api/v1/add-book",
        bookData,
        { headers }
      );

      // Clear form after submission
      setBookData({
        url: "",
        title: "",
        author: "",
       
        price: "",
        desc: "",
        ram: "", // Clear new fields
        rom: "", // Clear new fields
        battery: "", // Clear new fields
      });

      alert("Book added successfully!");
    } catch (error) {
      alert(error.response?.data?.message || "An error occurred.");
    }
  };

  return (
    <div className="flex justify-center items-center py-3 bg-zinc-800">
      <div className="rounded m-4 shadow-md w-full p-6 bg-zinc-700">
        <h1 className="text-2xl font-bold mb-4 text-center text-white">
          Add a New Book
        </h1>
        <form onSubmit={submit} className="space-y-4">
          {/* Existing fields for URL, Title, Author, Language, Price, and Description */}
          <div>
            <label htmlFor="url" className="block text-sm font-medium text-gray-300">
              Image URL:
            </label>
            <input
              type="text"
              id="url"
              name="url"
              value={bookData.url}
              onChange={handleChange}
              className="mt-1 p-3 block w-full rounded-md border-gray-700 bg-zinc-900 text-white placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Enter image URL"
            />
          </div>
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-300">
              Title:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={bookData.title}
              onChange={handleChange}
              required
              className="mt-1 p-3 block w-full rounded-md border-gray-700 bg-zinc-900 text-white placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Enter book title"
            />
          </div>
          <div>
            <label htmlFor="author" className="block text-sm font-medium text-gray-300">
              Author:
            </label>
            <input
              type="text"
              id="author"
              name="author"
              value={bookData.author}
              onChange={handleChange}
              required
              className="mt-1 p-3 block w-full rounded-md border-gray-700 bg-zinc-900 text-white placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Enter author name"
            />
          </div>
          <div className="flex gap-10 w-full">
          <div>
            <label htmlFor="ram" className="block text-sm font-medium text-gray-300">
              RAM:
            </label>
            <input
              type="text"
              id="ram"
              name="ram"
              value={bookData.ram}
              onChange={handleChange}
              required
              className="mt-1 p-3 block w-full rounded-md border-gray-700 bg-zinc-900 text-white placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Enter RAM"
            />
          </div>
            <div className="w-full">
              <label htmlFor="price" className="block text-sm font-medium text-gray-300">
                Price:
              </label>
              <input
                type="text"
                id="price"
                name="price"
                value={bookData.price}
                onChange={handleChange}
                required
                className="mt-1 p-3 block w-full rounded-md border-gray-700 bg-zinc-900 text-white placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Enter price"
              />
            </div>
          </div>
          <div>
            <label htmlFor="desc" className="block text-sm font-medium text-gray-300">
              Description:
            </label>
            <textarea
              id="desc"
              name="desc"
              value={bookData.desc}
              onChange={handleChange}
              required
              className="mt-1 p-3 block w-full rounded-md border-gray-700 bg-zinc-900 text-white placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Enter book description"
            />
          </div>
          {/* New fields for RAM, ROM, and Battery */}
         
          <div>
            <label htmlFor="rom" className="block text-sm font-medium text-gray-300">
              ROM:
            </label>
            <input
              type="text"
              id="rom"
              name="rom"
              value={bookData.rom}
              onChange={handleChange}
              required
              className="mt-1 p-3 block w-full rounded-md border-gray-700 bg-zinc-900 text-white placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Enter ROM"
            />
          </div>
          <div>
            <label htmlFor="battery" className="block text-sm font-medium text-gray-300">
              Battery:
            </label>
            <input
              type="text"
              id="battery"
              name="battery"
              value={bookData.battery}
              onChange={handleChange}
              required
              className="mt-1 p-3 block w-full rounded-md border-gray-700 bg-zinc-900 text-white placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Enter Battery"
            />
          </div>
          {/* Submit button */}
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
