import React from "react";
import "./Landing.css";
import { InputAdornment, TextField } from "@mui/material";
import { FmdGood } from "@mui/icons-material";

function Landing() {
  return (
    <div className="landing">
      <h1>
        Hungry.?
        <br /> We got you..🫂
      </h1>
      <TextField
        className="input-text"
        label="enter your location"
        variant="outlined"
        size="small"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <FmdGood />
            </InputAdornment>
          ),
        }}
      ></TextField>
      <img
        src="https://res.cloudinary.com/dggryzgok/image/upload/v1695195020/Landing1.png"
        className="landing1"
        alt="img"
      ></img>
      <img
        src="https://res.cloudinary.com/dggryzgok/image/upload/v1695195020/landing2.png"
        className="landing3"
        alt="img"
      ></img>
      <img
        src="https://res.cloudinary.com/dggryzgok/image/upload/v1695195020/landing3.png"
        className="landing2"
        alt="img"
      ></img>
    </div>
  );
}

export default Landing;
