import { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from './componants/Store/auth';

import Home from './pages/Home';
import Navbar from './componants/Navbar/Navbar';
import Footer from './componants/Footer/Footer';
import Spinner from './componants/Spinners/Spinners';
import About from './pages/About';
import AllBooks from './pages/AllBooks';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import ViewBookDetails from './componants/ViewBookDetails/ViewBookDetails';
import Favorite from './componants/Profile/Favorite'; // Removed unnecessary braces
import MyOrder from './componants/Profile/MyOrder';
import Setting from './componants/Profile/Setting';
import Cart from './pages/Cart';
import AllOrders from './pages/AllOrders';
import AddBook from './pages/AddBook';
import Newsletter from './componants/Footer/NewsLetter';

const App = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const role = useSelector((state) => state.auth.role);

  // Show spinner on route change
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [location]);

  // Check for authentication details in local storage
  useEffect(() => {
    const userId = localStorage.getItem("id");
    const token = localStorage.getItem("token");
    const userRole = localStorage.getItem("role");

    if (userId && token && userRole) {
      dispatch(authActions.login());
      dispatch(authActions.changeRole(userRole));
    }
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/all-books" element={<AllBooks />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/view-book-details/:id" element={<ViewBookDetails />} />
            <Route path="/profile" element={<Profile />}>
              {role === "user" ? <Route index path='favorite' element={<Favorite />} /> : <Route index path='allOrder'  element={<AllOrders />} />}
            {role === 'admin' &&   <Route path="addBook" element={<AddBook />} />}
            <Route path="my-orders" element={<MyOrder />} />
              <Route path="setting" element={<Setting />} />
            </Route>
          </Routes>
          <Newsletter/>
          <Footer />
        </>
      )}
    </div>
  );
};
export default App;
