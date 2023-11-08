import { DeleteForever } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { remove } from "../../Redux/CartSlice";
import "./cart.css";
const NotEmptyCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.allreducers.cart);
  const userInfo = useSelector((state) => state.allreducers.user);
  const [wholeTotal, setWholeTotal] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    const total = cart.reduce((total, ele) => {
      return (total += ele.quantity * ele.cost);
    }, 0);
    setWholeTotal(total);
  }, [cart]);

  return (
    <div className="cart">
      {cart.map((item, index) => {
        return (
          <div className="cart-item" key={item.id}>
            <div className="item-details">
              <h1>
                {index + 1}. {item.name}
              </h1>
              <h2>Rs. {item.cost}</h2>
              <h3>Quantity: {item.quantity}</h3>
              <h3>Total: Rs. {item.cost * item.quantity}</h3>
            </div>
            <div>
              <button
                className="remove-btn"
                onClick={() => {
                  dispatch(remove({ id: item.id }));
                }}
              >
                Remove <DeleteForever />
              </button>
            </div>
          </div>
        );
      })}
      <hr />
      <div className="total">
        <h1>Cart Value: Rs. {wholeTotal}</h1>
        <button
          className="btn"
          onClick={() => {
            !userInfo.name ? navigate("/login") : navigate("/address");
          }}
        >
          Proceed to checkout
        </button>
      </div>
    </div>
  );
};

export default NotEmptyCart;
