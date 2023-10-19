import { TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import LogoImage from "../Assets/Login.png";

import "./Login.css";
function Register() {
  const [Registartiondata, setRegistartiondata] = useState({
    email: "",
    username: "",
    pass: "",
    confirmpass: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setRegistartiondata((Registartiondata) => ({
      ...Registartiondata,
      [name]: value,
    }));
  }

  function UserRegister() {
    if (Registartiondata.pass !== Registartiondata.confirmpass) {
      alert("passwords mismatch");
      return;
    }
    const { email, pass, username } = Registartiondata;
    axios
      .post("http://localhost:3500/signup", {
        email,
        pass,
        username,
      })
      .then((response) => {
        if (response.status === 201) {
          alert("User created");
        }
      })
      .catch((err) => {
        alert(err.response.data);
      });
  }

  return (
    <form>
      <div className="login">
        <div className="login-content">
          <div className="data-content">
            <Typography
              variant="span"
              color="#D55826"
              fontSize={"48px"}
              fontWeight="700"
              fontFamily="Montserrat"
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
            name="email"
            required
            onChange={(e) => {
              handleChange(e);
            }}
          ></TextField>
          <Typography
            variant="span"
            color="rgba(26, 18, 11, 0.90)"
            fontSize={"32px"}
            fontWeight="700"
            fontFamily="Montserrat"
          >
            Your Name
          </Typography>

          <TextField
            className="input-text"
            label="Enter your name"
            variant="outlined"
            size="small"
            type="text"
            name="username"
            onChange={(e) => {
              handleChange(e);
            }}
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
            name="pass"
            onChange={(e) => {
              handleChange(e);
            }}
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
            name="confirmpass"
            onChange={(e) => {
              handleChange(e);
            }}
          ></TextField>

          <div className="button-div">
            <button className="btn" onClick={UserRegister} type="submit">
              Sign Up
            </button>
          </div>
        </div>
        <div>
          <img src={LogoImage} alt="loginimage" className="loginimg" />
        </div>
      </div>
    </form>
  );
}

export default Register;
