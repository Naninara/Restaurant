import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Orders.css";
function Orders() {
  const gmail = useSelector((state) => state.allreducers.user.email);
  const [orderData, setOrderData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3500/orders/${gmail}`)
      .then((response) => setOrderData(response.data))
      .catch((err) => console.log(err));
  }, [gmail]);

  return (
    <div className="orders">
      {orderData.map((ele, index) => {
        return (
          <Link to={`/${ele._id}`}>
            <div className="orderdata">
              <h4>
                {index + 1} {ele.OrderItems[0]?.name}...
              </h4>
              <p>Status : {ele.orderStatus}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Orders;
