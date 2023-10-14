import React from "react";
import "./Showcase.css";
import joints from "../../Assets/joints.png";
import wings from "../../Assets/wings.png";
import tandoori from "../../Assets/tandoori.png";

const ShowCase = () => {
  return (
    <div className="showcase">
      <div className="images">
        <img src={wings} className="image img-11" alt="wings" />
        <img src={joints} className="image img-33" alt="joints" />
        <img src={tandoori} className="image img-22" alt="tandoori" />
      </div>
      <div className="order-now">
        <button className="btn">Order Now</button>
      </div>
    </div>
  );
};

export default ShowCase;
