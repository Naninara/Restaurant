import React from "react";
import "./MenuCard.css";
function MenuCard({ name, cost, cloudinaryImageId, type }) {
  return (
    <div className="restarent-card">
      <div className="card-content">
        <img
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_220,w_310,h_220/${cloudinaryImageId}`}
          alt="card"
          loading="lazy"
        />
        <div className="card-details">
          <div className="name">
            <span>{name}</span>
            <div style={{ display: "flex", alignItems: "center" }}></div>
          </div>
          <div className="location">
            <span className="type">{`Type: ${type}`}</span>
          </div>
          <div className="cuisines">
            <div className="costDiv">
              <span>{`₹ ${cost}`}</span>
              <span className="mrp">{` ${+cost + 100}.00`}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuCard;
