import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import RestarentCard from "../Compnents/Cards/RestarentCard";
import WifiLoader from "../Compnents/Loaders/WifiLoader";

function CuisinePage() {
  const [Restaurents, setRestauRents] = useState([]);
  const { name } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:3500/cuisine/${name}`)
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
  }, [name]);
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

export default CuisinePage;