import { Button, TextField, Typography } from "@mui/material";
import LogoImage from "../Assets/Login.png";
import React from "react";
import "./Login.css";
function Login() {
  return (
    <div className="login">
      <div className="login-content">
        <div className="data-content">
          <Typography
            variant="span"
            color="#000000"
            fontSize={"48px"}
            fontWeight="700"
            fontFamily="Montserrat"
          >
            Welcome
          </Typography>
          <Typography
            variant="span"
            color="#D55826"
            fontSize={"48px"}
            fontWeight="700"
            fontFamily="Montserrat"
            sx={{ marginLeft: "20px" }}
          >
            Back
          </Typography>
        </div>
        <Typography
          variant="span"
          color="#5D5D5D"
          fontSize={"24px"}
          fontWeight="400"
          fontFamily="Montserrat"
        >
          Login with your email address and Password
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
          fontSize={"20px"}
          fontWeight="700"
          fontFamily="Montserrat"
        >
          Forgot Password?
        </Typography>
        <div className="button-div">
          <Button className="cat-button">Login</Button>
        </div>
        <div className="button-div">
          <Typography
            variant="span"
            color="#5D5D5D"
            fontSize={"24px"}
            fontWeight="400"
            fontFamily="Montserrat"
          >
            Don't Have Account
          </Typography>
          <Typography
            variant="span"
            color="#D55826"
            fontSize={"30px"}
            fontWeight="700"
            fontFamily="Montserrat"
            sx={{ marginLeft: "20px" }}
          >
            Signup
          </Typography>
        </div>
      </div>
      <div>
        <img src={LogoImage} alt="loginimage" />
      </div>
    </div>
  );
}

export default Login;
