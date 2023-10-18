import { Star } from "@mui/icons-material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./SingleRestarent.css";
import WifiLoader from "../Loaders/WifiLoader";
function SingleRestarent() {
  const [SingleRestaurentdata, setSingleRestaurentdata] = useState(null);
  const { id } = useParams();
  useEffect(
    function () {
      axios
        .get(`http://localhost:3500/restarent/${id}`)
        .then((response) => setSingleRestaurentdata(response.data))
        .catch((err) => {
          console.log(err);
        });
    },
    [id]
  );

  return !SingleRestaurentdata ? (
    <WifiLoader />
  ) : (
    <div className="single">
      <div className="restaurent-data">
        <div className="data">
          <h1>{SingleRestaurentdata.name}</h1>
          <p>{SingleRestaurentdata.cuisines.join(",")}</p>

          <p>{SingleRestaurentdata.locality}</p>
        </div>
        <div>
          <h1>
            {SingleRestaurentdata.avgRating}
            <Star />
          </h1>
        </div>
      </div>
      <h5>{SingleRestaurentdata.costForTwo}</h5>
    </div>
  );
}

export default SingleRestarent;
