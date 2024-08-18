import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { FiShoppingCart, FiHeart } from "react-icons/fi";
import { useSelector } from "react-redux";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Modal from "../Model/Model";

const ViewBookDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalMessage, setModalMessage] = useState(""); // State for modal message
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const role = useSelector((state) => state.auth.role);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`https://mernproduct-1.onrender.com/api/v1/get-book-by-id/${id}`);
        setData(response.data.data);
      } catch (error) {
        setError("Error fetching book details");
        console.error("Error fetching book details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
    bookid: id,
  };

  const handleFavorite = async () => {
    try {
      const response = await axios.put("https://mernproduct-1.onrender.com/api/v1/add-book-to-favorite", {}, { headers });
      setModalMessage(response.data.message);
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error adding book to favorites:", error);
      setModalMessage("Error adding book to favorites");
      setIsModalOpen(true);
    }
  };

  const handleFCard = async () => {
    try {
      const response = await axios.put("https://mernproduct-1.onrender.com/api/v1/add-to-cart", {}, { headers });
      setModalMessage(response.data.message);
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error adding book to cart:", error);
      setModalMessage("Error adding book to cart");
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (loading) return <div className="text-center text-white mt-10">Loading...</div>;
  if (error) return <div className="text-center text-red-500 mt-10">{error}</div>;
  if (!data) return <div className="text-center text-white mt-10">No book found</div>;

  return (
    <div className="p-4 bg-zinc-900 flex flex-col md:flex-row gap-8 min-h-screen items-center justify-center">
      <div className="relative bg-zinc-800 gap-4 rounded-lg p-6 flex flex-col md:flex-row items-center justify-center w-full md:w-1/2 h-auto md:h-[80vh] shadow-lg">
        <img src={data.url} alt={data.title} className="w-full h-auto max-h-[75vh] rounded-lg object-cover" />

        {isLoggedIn === true && role === "user" && (
          <div className="flex flex-row items-center justify-center md:flex-col space-y-3 gap-4">
            <button onClick={handleFCard} className="rounded-full mt-2 bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 transition duration-300">
              <FiShoppingCart className="mr-2 text-4xl md:text-xl" />
            </button>
            <button onClick={handleFavorite} className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition duration-300">
              <FiHeart className="mr-2 text-4xl md:text-xl" />
            </button>
          </div>
        )}

        {isLoggedIn === true && role === "admin" && (
          <div className="flex flex-row items-center justify-center md:flex-col space-y-3 gap-4">
            <button className="rounded-full mt-2 bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 transition duration-300">
              <FaEdit className="mr-2 text-4xl md:text-xl" />
            </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition duration-300">
              <MdDelete className="mr-2 text-4xl md:text-xl" />
            </button>
          </div>
        )}
      </div>

      <div className="p-4 md:p-6 w-full md:w-1/2 text-white bg-zinc-800 rounded-lg h-auto md:h-[80vh] shadow-lg">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 md:mb-6 text-yellow-300">{data.title}</h1>
        <p className="text-lg md:text-2xl mb-2 md:mb-4 font-semibold">
          Author: <span className="text-yellow-200">{data.author}</span>
        </p>
        <p className="text-lg md:text-2xl mb-2 md:mb-4 font-semibold">
          Price: <span className="text-yellow-200">₹{data.price}</span>
        </p>
        <p className="text-sm md:text-lg mb-4 text-gray-300">{data.desc}</p>
        {/* Add more book details as needed */}
      </div>

      {/* Modal */}
      {isModalOpen && <Modal message={modalMessage} onClose={closeModal} />}
    </div>
  );
};

export default ViewBookDetails;
