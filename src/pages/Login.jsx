import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {authActions} from "../componants/Store/auth"
import {useDispatch} from "react-redux"
const Login = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Handle input changes
  const change = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add logic to submit form data
    console.log("Form submitted", values);

    try {
      if (values.username === "" || values.password === "") {
        alert("All fields are required");
      } else {
        const response = await axios.post(
          "http://localhost:1010/api/v1/sign-in",
          values
        );
        console.log(response.data);
        setValues({
          username: "",
          password: "",
        });
       dispatch(authActions.login())
       dispatch(authActions.changeRole(response.data.role))
        localStorage.setItem("id", response.data.Id);
        localStorage.setItem("token", response.data.token)
        localStorage.setItem("role", response.data.role)
        navigate("/profile")
      }
    } catch (error) {
      setError("Login failed. Please try again.");
      alert(error.response.data.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-semibold mb-6 text-center">Log In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium mb-1">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={values.username}
              onChange={change}
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={change}
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
          >
            Log In
          </button>
          {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-400">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Sign up here
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
