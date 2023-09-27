import { Button, TextField, Typography } from "@mui/material";

import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";
function Register() {
  return (
    <div className="register">
      <div className="register-content">
        <div className="register-content">
          <Typography
            variant="span"
            color="#D55826"
            fontSize={"48px"}
            fontWeight="700"
            fontFamily="Montserrat"
            sx={{ marginLeft: "20px" }}
          >
            Welcome to Foodier
          </Typography>
        </div>
        <Typography
          variant="span"
          color="#5D5D5D"
          fontSize={"24px"}
          fontWeight="400"
          fontFamily="Montserrat"
        >
          We Deliver your Hunger
        </Typography>

        <Typography
          variant="span"
          color="rgba(26, 18, 11, 0.90)"
          fontSize={"32px"}
          fontWeight="700"
          fontFamily="Montserrat"
        >
          Email Address
        </Typography>

        <TextField
          className="input-text"
          label="Enter your email adress"
          variant="outlined"
          size="small"
          type="email"
        ></TextField>

        <Typography
          variant="span"
          color="rgba(26, 18, 11, 0.90)"
          fontSize={"32px"}
          fontWeight="700"
          fontFamily="Montserrat"
        >
          Password
        </Typography>

        <TextField
          className="input-text"
          label="Enter your password"
          variant="outlined"
          size="small"
          type="password"
        ></TextField>
        <Typography
          variant="span"
          color="rgba(26, 18, 11, 0.90)"
          fontSize={"32px"}
          fontWeight="700"
          fontFamily="Montserrat"
        >
          Confirm Password
        </Typography>

        <TextField
          className="input-text"
          label="Enter your password"
          variant="outlined"
          size="small"
          type="password"
        ></TextField>

        <div className="button-div">
          <Button className="cat-button">Sign Up</Button>
        </div>
      </div>
    </div>
  );
}

export default Register;
