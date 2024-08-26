import React, { useEffect, useState } from "react";
import axios from "axios";
const MyOrder = () => {
  const [orderHistory, setOrderHistory] = useState();

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1010/api/v1/get-order-history",
          { headers }
        );
        console.log(response);
        setOrderHistory(response.data); // Update state with order history data
      } catch (error) {
        console.error("Error fetching order history:", error);
      }
    };
    fetch();
  }, []);

  return <div>MyOrder</div>;
};

export default MyOrder;
