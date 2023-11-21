import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import WifiLoader from "../Compnents/Loaders/WifiLoader";
import "./SingleOrder.css";
function SingleOrder() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  useEffect(
    function () {
      axios
        .get(`http://localhost:3500/orders/single/${id}`)
        .then((response) => {
          setData(response.data);
        })
        .catch((err) => console.log(err));
    },
    [id]
  );
  return !data ? (
    <WifiLoader />
  ) : (
    <div className="single-order">
      <div>
        {data.OrderItems.map((ele) => {
          return (
            <>
              <h1>Name : {ele.name}</h1>
              <h3>cost : Rs. {ele.cost}</h3>
              <h2>Quantity : {ele.quantity}</h2>
            </>
          );
        })}
      </div>
      <div className="orderData">
        <h1>Total Cost : {data.OrderCost}</h1>
        <hr />
        <h1>Ordered By : {data.Address.name}</h1>
        <h2>Phone Number : {data.Address.phoneNumber}</h2>
        <h3>Delivering to : {data.Address.address}</h3>
      </div>
    </div>
  );
}

export default SingleOrder;
