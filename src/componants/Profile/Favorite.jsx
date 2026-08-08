import React, { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "../BookCard/BookCard";

const Favorite = () => {
  const [favouriteBooks, setFavouriteBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const headers = {
    id: localStorage.getItem("id"),
    'Authorization': `Bearer ${localStorage.getItem("token")}`,
  };

  useEffect(() => {
    const fetchFavouriteBooks = async () => {
      if (!headers.id || !headers.Authorization) {
        setError("User is not authenticated. Please log in.");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get("https://store-backend-mw2q.onrender.com/api/v1/get-favorite-books", { headers });
        console.log(response.data);
        setFavouriteBooks(response.data || []);
      } catch (err) {
        console.error("Error fetching favorite books:", err.message);
        if (err.response) {
          console.error("Response:", err.response);
        }
        setError("Failed to fetch favorite books. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchFavouriteBooks();
  }, []); // Consider adding headers to the dependency array if they change dynamically

  if (loading) return <p className="text-center text-white">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
      {favouriteBooks.length === 0 ? (
        <p className="col-span-full text-center text-gray-500">No favorites</p>
      ) : (
        favouriteBooks.map((book) => (
          <div key={book.id}> {/* Use a unique identifier if possible */}
            <BookCard data={book} favourite={true} />
          </div>
        ))
      )}
    </div>
  );
};

export default Favorite;
