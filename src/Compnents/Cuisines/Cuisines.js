import React from "react";
import { Link } from "react-router-dom";
import "./Cuisines.css";
function Cuisines() {
  const cuisinesArray = [
    {
      name: "Biryani",
      link: "https://res.cloudinary.com/dggryzgok/image/upload/v1697375981/ujtjub01uajgqfdqheur.jpg",
    },
    {
      name: "Burgers",
      link: "https://res.cloudinary.com/dggryzgok/image/upload/v1697375981/osi22tfbqkiqjyc3522c.jpg",
    },
    {
      name: "Bakery",
      link: "https://res.cloudinary.com/dggryzgok/image/upload/v1697375981/oudhixnymwtmg82xogcw.jpg",
    },

    {
      name: "Desserts",
      link: "https://res.cloudinary.com/dggryzgok/image/upload/v1697375981/uk2iu5bpmbwwb9x6qqdj.jpg",
    },
    {
      name: "Ice Cream",
      link: "https://res.cloudinary.com/dggryzgok/image/upload/v1697375981/edplot4ywnft3xhdfx6u.jpg",
    },
  ];
  return (
    <div>
      <div className="cuisineHeader">
        <span className="span1"> Popular</span>
        <span className="span2"> Cuisines</span>
      </div>
      <div className="cuisines">
        {cuisinesArray.map((item) => {
          return (
            <Link to={`cuisine/${item.name}`}>
              <img src={item.link} alt="cuisine" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Cuisines;
