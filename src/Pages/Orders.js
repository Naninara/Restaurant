import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import WifiLoader from "../Compnents/Loaders/WifiLoader";
import "./Orders.css";
function Orders() {
  const gmail = useSelector((state) => state.allreducers.user.email);
  const [orderData, setOrderData] = useState([]);
  const [response, setResponse] = useState(false);
  useEffect(() => {
    axios
      .get(`https://restarentbackend.onrender.com/orders/${gmail}`)
      .then((response) => {
        setResponse(true);
        setOrderData(response.data);
      })
      .catch((err) => console.log(err));
  }, [gmail]);

  return !gmail ? (
    <div style={{ height: "83vh" }}>
      <h1 style={{ textAlign: "center", fontFamily: "Montserrat" }}>
        You Must Login To See Your Orders
      </h1>
    </div>
  ) : !response ? (
    <WifiLoader />
  ) : orderData.length === 0 ? (
    <h1 style={{ textAlign: "center", fontFamily: "Montserrat" }}>
      OOOPS!! No Orders Found
    </h1>
  ) : (
    <div className="orders">
      {orderData.map((ele, index) => {
        return (
          <Link to={`/order/${ele._id}`} key={ele._id}>
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
