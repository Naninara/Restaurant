import Button from "@mui/material/Button";
import { ShoppingCart } from "@mui/icons-material";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./SingleRestarent.css";
import { useDispatch } from "react-redux";
import { add } from "../../Redux/CartSlice";

function SingleRestarent() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  function updateQuantity(isIncrease) {
    isIncrease
      ? setQuantity((prevState) => prevState + 1)
      : setQuantity((prevState) => prevState - 1);
  }
  useEffect(
    function () {
      axios
        .get(`https://restarentbackend.onrender.com/menu/${id}`)
        .then((response) => {
          console.log(response);
          setItem(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    [id]
  );
  return (
    item && (
      <div className="item">
        <div className="item-img">
          <img
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_220,w_310,h_220/${item.cloudinaryImageId}`}
            alt="itemImage"
          />
        </div>
        <div className="item-info">
          <h1>Name: {item.name}</h1>
          <h2>Price : Rs. {item.cost} </h2>
          <div className="quantity">
            <button
              className="btn"
              onClick={() => {
                updateQuantity(true);
              }}
            >
              +
            </button>
            <span className="quantityNo">{quantity} No.</span>
            <button
              className="btn"
              onClick={() => {
                if (quantity > 1) updateQuantity(false);
              }}
            >
              -
            </button>
          </div>

          <Button
            variant="contained"
            className="addToCartButton"
            endIcon={<ShoppingCart />}
            onClick={() => {
              dispatch(add({ ...item, quantity }));
            }}
          >
            Add To Cart
          </Button>
        </div>
      </div>
    )
  );
}

export default SingleRestarent;
