import { DeleteForever } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../../Redux/CartSlice";
import "./cart.css";
const NotEmptyCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.allreducers.cart);
  const [wholeTotal, setWholeTotal] = useState(0);
  useEffect(() => {
    const total = cart.reduce((total, ele) => {
      return (total += ele.quantity * ele.cost);
    }, 0);
    setWholeTotal(total);
  }, [cart]);
  return (
    <div className="cart">
      {cart.map((item) => {
        return (
          <div className="cart-item" key={item.id}>
            <div>
              <h1>{item.name}</h1>
              <h1>Rs. {item.cost}</h1>
              <h1>Quantity: {item.quantity}</h1>
              <h1>Total: {item.cost * item.quantity}</h1>
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
        <h1>Cart Value:{wholeTotal}</h1>
        <button className="btn">Proceed to checkout</button>
      </div>
    </div>
  );
};

export default NotEmptyCart;
