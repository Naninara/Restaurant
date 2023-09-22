import React from "react";
import "./RestarentCard.css";

import { FmdGood, Star } from "@mui/icons-material";
function RestarentCard({
  name,
  locality,
  costForTwo,
  avgRating,
  cuisines,
  areaName,
  cloudinaryImageId,
}) {
  return (
    <div className="restarent-card">
      <div className="card-content">
        <img
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_220,w_310,h_220/${cloudinaryImageId}`}
          alt="card"
        />
        <div className="card-details">
          <div className="name">
            <span>{name}</span>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span>{avgRating}</span> <Star />
            </div>
          </div>
          <div className="location">
            <FmdGood />
            <span className="address">
              {locality},{areaName}
            </span>
          </div>
          <div className="cuisines">
            <span>
              {cuisines.length > 2
                ? cuisines[0] + "," + cuisines[1] + "....."
                : cuisines.join(",")}
            </span>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span>{costForTwo}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestarentCard;
