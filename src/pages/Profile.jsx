import React, { useState, useEffect } from 'react';
import SideBar from '../componants/Profile/SideBar';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

const Profile = () => {
  //  const isLoggedIn =  useSelector();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`
  };

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get("https://mernproduct-1.onrender.com/api/v1/get-user-information", { headers });
        setProfile(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetch();
  }, []);

  if (loading) {
    return <div className="text-white">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  return (
    <div className='bg-zinc-900 px-2 md:px-12 flex flex-col md:flex-row  py-8 gap-4 text-white'>
      <div className='w-full md:w-1/6'>
        {profile && <SideBar data={profile} />}
      </div>
      <div className='w-full md:w-5/6'>
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;
