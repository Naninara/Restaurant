import React from "react";
import "./Home.css";

const arrow = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 -960 960 960"
    width="24"
  >
    <path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z" />
  </svg>
);

const Home = () => {
  return (
    <div className="home">
      <img
        src="https://res.cloudinary.com/dggryzgok/image/upload/v1697641670/RestaurentAssests/sd2dbnf3esf3sgelhsrr.png"
        className="img-1 img"
        alt="Chicken"
      />
      <img
        src="https://res.cloudinary.com/dggryzgok/image/upload/v1697641670/RestaurentAssests/mr98kp8ddilznzurnigd.png"
        className="img-2 img"
        alt="samsosa"
      />
      <img
        src="https://res.cloudinary.com/dggryzgok/image/upload/v1695195020/Landing2.png"
        className="img-3 img"
        alt="joints"
      />
      <div className="content">
        <h1>Fresh, Fast, and Powerful!</h1>

        <h3 style={{ marginTop: "30px" }}>Scroll for more</h3>
        <div className="arrow"> {arrow}</div>
      </div>
    </div>
  );
};

export default Home;
