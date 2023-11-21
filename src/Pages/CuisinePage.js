import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import MenuCard from "../Compnents/Cards/menuCard";
import WifiLoader from "../Compnents/Loaders/WifiLoader";

function CuisinePage() {
  const [Restaurents, setRestauRents] = useState([]);
  const [response, setResponse] = useState(false);
  const { name } = useParams();
  useEffect(() => {
    axios
      .get(`https://restarentbackend.onrender.com/cuisine/${name}`)
      .then((response) => {
        setRestauRents(response.data);
        setResponse(true);
      })
      .catch((err) => {
        setResponse(true);
        if (!err.response) {
          alert("server not working");
        } else {
          alert("something went wrong");
        }
      });
  }, [name]);
  return !response ? (
    <WifiLoader />
  ) : response && Restaurents.length === 0 ? (
    <h1 style={{ textAlign: "center", fontFamily: "Montserrat" }}>
      We Are Adding Soon..... ☺️
    </h1>
  ) : (
    <div className="restarents">
      {Restaurents.map((cardItem, index) => {
        return (
          <Link to={`single/${cardItem.id}`} key={index + 1}>
            <MenuCard {...cardItem} />
          </Link>
        );
      })}
    </div>
  );
}

export default CuisinePage;
