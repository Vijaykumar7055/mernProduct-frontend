import React, { useState, useEffect } from "react";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await axios.get("https://mernproduct-1.onrender.com/api/v1/get-user-cart", { headers });
        setCart(res.data.data);
        // Calculate total
        const totalPrice = res.data.data.reduce((acc, item) => acc + (item.price || 0), 0);
        setTotal(totalPrice);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

  const handleDelete = async (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
    // Update the cart on the server
    try {
      await axios.post('https://mernproduct-1.onrender.com/api/v1/update-user-cart', newCart, { headers });
      const newTotal = newCart.reduce((acc, item) => acc + (item.price || 0), 0);
      setTotal(newTotal);
    } catch (error) {
      setError("Failed to update cart on server");
    }
  };

  const placeOrder = async () => {
    try {
      const response = await axios.post("https://mernproduct-1.onrender.com/api/v1/place-order", { order: cart }, { headers });
      alert(response.data.message);
      navigate("/profile/MyOrder");
    } catch (error) {
      alert("Failed to place order");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-gray-300 text-xl">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-red-400 text-xl">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-gray-100 p-4 sm:p-6 lg:p-8">
      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-400 mb-4">Your Cart is Empty</h1>
          <img src="/images/empty-cart.png" alt="Empty Cart" className="w-3/4 sm:w-1/2 max-w-sm" />
        </div>
      ) : (
        <div className="max-w-3xl mx-auto">
          {cart.map((item, index) => (
            <div key={index} className="flex flex-col sm:flex-row items-start sm:items-center bg-gray-900 shadow-lg rounded-lg mb-4 p-4">
              <img
                src={item.url}
                alt={item.title}
                className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-lg mr-0 sm:mr-4 border border-gray-700 mb-4 sm:mb-0"
              />
              <div className="flex-grow">
                <h2 className="text-lg sm:text-xl font-semibold mb-1">{item.title}</h2>
                <p className="text-gray-400 mb-2">{item.desc.slice(0, 100)}...</p>
                <p className="text-gray-300 font-semibold mb-2">${item.price.toFixed(2)}</p>
              </div>
              <div className="flex items-center">
                <MdDelete
                  onClick={() => handleDelete(index)}
                  className="text-red-400 cursor-pointer text-5xl md:text-6xl p-2 rounded-full hover:bg-red-600 hover:text-white transition duration-300"
                />
              </div>
            </div>
          ))}
          <div className="bg-gray-900 shadow-lg rounded-lg p-4 mt-6">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">Total: ${total.toFixed(2)}</h2>
            <button onClick={placeOrder} className="bg-teal-500 text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-teal-600 transition duration-300">Place Order</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
