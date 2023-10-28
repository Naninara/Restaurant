import React from "react";
import { useSelector } from "react-redux";
import EmptyCart from "../Compnents/CartComponents/EmptyCart";
import NotEmptyCart from "../Compnents/CartComponents/NotEmptyCart";
const Cart = () => {
  const cart = useSelector((state) => state.allreducers.cart);
  return <div>{cart.length === 0 ? <EmptyCart /> : <NotEmptyCart />}</div>;
};

export default Cart;
