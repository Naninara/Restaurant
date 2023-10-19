import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestarentCard from "../Compnents/Cards/RestarentCard";
import WifiLoader from "../Compnents/Loaders/WifiLoader";
import "./Restaurents.css";
function Restaurents() {
  const [Restaurents, setRestauRents] = useState([]);
  useEffect(() => {
    axios
      .get("https://restarentbackend.onrender.com/restarent")
      .then((response) => {
        setRestauRents(response.data);
      })
      .catch((err) => {
        if (!err.response) {
          alert("server not working");
        } else {
          alert("something went wrong");
        }
      });
  }, []);
  return Restaurents.length === 0 ? (
    <WifiLoader />
  ) : (
    <div className="restarents">
      {Restaurents.map((cardItem, index) => {
        return (
          <Link to={`single/${cardItem.id}`} key={index + 1}>
            <RestarentCard {...cardItem} />
          </Link>
        );
      })}
    </div>
  );
}

export default Restaurents;
