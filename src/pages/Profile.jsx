import React, { useState, useEffect } from "react";
import SideBar from "../componants/Profile/SideBar";
import { Outlet } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const userId = localStorage.getItem("id");
      const token = localStorage.getItem("token");
      console.log("User ID:", userId); // Debugging: Log user ID
      console.log("Token:", token); // Debugging: Log token


      if (!userId || !token) {
        setError("User not authenticated. Please log in.");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(
          "https://store-backend-mw2q.onrender.com/api/v1/get-user-information",
          {
            headers: {
              id: userId,
              Authorization: `Bearer ${token}`, // ✅ Ensure correct casing
            },
          }
        );
        setProfile(response.data);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch profile.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) return <div className="text-white">Loading...</div>;

  if (error) return <div className="text-red-500">Error: {error}</div>;

  return (
    <div className="bg-zinc-900 px-2 md:px-12 flex flex-col md:flex-row py-8 gap-4 text-white">
      <div className="w-full md:w-1/6">{profile && <SideBar data={profile} />}</div>
      <div className="w-full md:w-5/6">
        <Outlet />
      </div>
    </div>
  );
j};

export default Profile;
