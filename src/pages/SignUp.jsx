import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    address: '',
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Handle input changes
  const change = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!values.username || !values.email || !values.password || !values.address) {
      alert("All fields are required");
      return;
    }

    try {
      const response = await axios.post("https://mernproduct-1.onrender.com/api/v1/sign-up", values);
      console.log(response.data);
      navigate("/login");
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code outside of the 2xx range
        console.error('Response error:', error.response.data);
        setError(error.response.data.message || 'Error occurred during signup.');
      } else if (error.request) {
        // The request was made but no response was received
        console.error('Request error:', error.request);
        setError('No response received from the server.');
      } else {
        // Something else happened in making the request that triggered an error
        console.error('Error', error.message);
        setError('Error occurred during signup.');
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-semibold mb-6 text-center">Create an Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium mb-1">Username</label>
            <input
              type="text"
              name="username"
              value={values.username}
              onChange={change}
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={change}
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={change}
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-sm font-medium mb-1">Address</label>
            <textarea
              name="address"
              value={values.address}
              onChange={change}
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring focus:ring-blue-500"
              rows="3"
            ></textarea>
          </div>
          {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-400">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-500 hover:underline">
              Log in here
            </Link>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
