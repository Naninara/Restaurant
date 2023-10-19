import React from "react";
import { Link } from "react-router-dom";
import "./Showcase.css";

const ShowCase = () => {
  return (
    <div className="showcase">
      <div className="images">
        <img
          src="https://res.cloudinary.com/dggryzgok/image/upload/v1697641670/RestaurentAssests/o2qxbnl0tylvol5wcc4r.png"
          className="image img-11"
          alt="wings"
        />
        <img
          src="https://res.cloudinary.com/dggryzgok/image/upload/f_auto,q_auto/v1/RestaurentAssests/zkfluru6jupso1gqcgco"
          className="image img-33"
          alt="joints"
        />
        <img
          src="https://res.cloudinary.com/dggryzgok/image/upload/v1697641670/RestaurentAssests/plykttmmurplycj2gtak.png"
          className="image img-22"
          alt="tandoori"
        />
      </div>
      <div className="order-now">
        <Link to="/restarents">
          <button className="btn">Order Now</button>
        </Link>
      </div>
    </div>
  );
};

export default ShowCase;
