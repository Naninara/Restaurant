import React from "react";
import "./Advertisement.css";
import add1 from "../../Assets/add1.png";
import add2 from "../../Assets/add2.png";
import add3 from "../../Assets/add3.png";
import { Button } from "@mui/material";
function Advertisement() {
  return (
    <div className="add">
      <div className="content">
        <img src={add1} alt="add" />
        <div className="footitem">
          <Button className="cat-button">Break Fast</Button>
        </div>
      </div>
      <div className="content">
        <img src={add2} alt="add" />
        <div className="footitem">
          <Button className="cat-button">Lunch</Button>
        </div>
      </div>
      <div className="content">
        <img src={add3} alt="add" />
        <div className="footitem">
          <Button className="cat-button">Snacks</Button>
        </div>
      </div>
    </div>
  );
}

export default Advertisement;
