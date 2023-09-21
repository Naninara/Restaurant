import { Typography } from "@mui/material";
import React from "react";
import "./Offers.css";
function Offers() {
  return (
    <div className="offers">
      <div className="offers-heading">
        <Typography
          variant="h3"
          fontFamily="system-ui"
          fontWeight="700"
          color="#ff5733"
        >
          Latest
        </Typography>
        <Typography variant="h3" fontFamily="system-ui" fontWeight="700">
          Offers
        </Typography>
      </div>
      <div className="offer-cards"></div>
    </div>
  );
}

export default Offers;
