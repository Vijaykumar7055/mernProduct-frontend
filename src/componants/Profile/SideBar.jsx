import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FiLogOut } from 'react-icons/fi'; // Importing the logout icon
import { authActions } from '../Store/auth'; // Adjust the path based on your folder structure

const SideBar = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const role = useSelector((state) => state.auth.role);

  const handleLogout = () => {
    dispatch(authActions.logout());
    dispatch(authActions.changeRole("user")); // Ensure this action updates the role correctly
    localStorage.clear(); // Clear all items from local storage
    navigate("/"); // Use navigate instead of history
  };

  return (
    <div className='bg-zinc-900 pb-5 flex flex-col items-center h-full justify-start'>
      {/* User Profile Section */}
      <div className='p-6 rounded flex flex-col items-center w-full'>
        <img
          src={data.avatar || 'default-avatar.png'}
          onError={(e) => { e.target.src = 'default-avatar.png'; }}
          className='h-24 w-24 rounded-full border-4 border-zinc-700 shadow-lg'
          alt={`${data.username || 'Guest'}'s avatar`}
        />
        <p className='mt-4 text-2xl text-zinc-100 font-semibold'>{data.username || 'Guest'}</p>
        <p className='mt-1 text-base text-zinc-400'>{data.email || 'No email provided'}</p>
        <div className='h-[1px] mt-3 bg-zinc-500 w-full'></div>
      </div>

      {/* Navigation Links */}
      {role === 'user' && (
        <div className='w-full mt-6 flex flex-col items-center justify-center'>
          <nav className='w-full'>
            <ul className='flex flex-col items-center space-y-3 w-full'>
              <li className='w-full'>
                <Link
                  to='/profile/favorite'
                  className='text-xl text-zinc-100 hover:text-blue-400 transition-colors duration-300 ease-in-out block text-center w-full py-2'
                >
                  Favorites
                </Link>
              </li>
              <li className='w-full'>
                <Link
                  to='/profile/my-orders'
                  className='text-xl text-zinc-100 hover:text-blue-400 transition-colors duration-300 ease-in-out block text-center w-full py-2'
                >
                  My Orders
                </Link>
              </li>
              <li className='w-full'>
                <Link
                  to='/profile/setting'
                  className='text-xl text-zinc-100 hover:text-blue-400 transition-colors duration-300 ease-in-out block text-center w-full py-2'
                >
                  Settings
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}

      {role === 'admin' && (
        <div className='w-full mt-6 flex flex-col items-center justify-center'>
          <nav className='w-full'>
            <ul className='flex flex-col items-center space-y-3 w-full'>
              <li className='w-full'>
                <Link
                  to='/profile/allOrder'
                  className='text-xl text-zinc-100 hover:text-blue-400 transition-colors duration-300 ease-in-out block text-center w-full py-2'
                >
                  All Order History
                </Link>
              </li>
              <li className='w-full'>
                <Link
                  to='/profile/addBook'
                  className='text-xl text-zinc-100 hover:text-blue-400 transition-colors duration-300 ease-in-out block text-center w-full py-2'
                >
                  Add Book
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}

      {/* Logout Button */}
      <div className='mt-6 w-full flex justify-center'>
        <button
          onClick={handleLogout}
          className='text-xl text-red-500 hover:text-red-700 transition-colors duration-300 ease-in-out bg-zinc-700 hover:bg-zinc-600 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-lg px-6 py-2.5 shadow-lg transform transition-transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center w-full'
          aria-label='Log out'
        >
          <FiLogOut className="mr-2" /> Log Out
        </button>
      </div>
    </div>
  );
};

export default SideBar;
