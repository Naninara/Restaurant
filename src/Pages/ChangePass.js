import { Alert, Snackbar, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import LogoImage from "../Assets/Login.png";

function ChangePass() {
  const [userCreation, setUserCreation] = useState({ message: "", action: "" });
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [Registartiondata, setRegistartiondata] = useState({
    email: "",
    prevpass: "",
    newpass: "",
    confirmpass: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setRegistartiondata((Registartiondata) => ({
      ...Registartiondata,
      [name]: value,
    }));
  }

  function UserRegister(e) {
    e.preventDefault();
    if (Registartiondata.newpass !== Registartiondata.confirmpass) {
      setUserCreation({ message: "Passwords mismatch", action: "warning" });
      setSnackbarOpen(true);
      return;
    }
    const { email, prevpass, newpass } = Registartiondata;
    axios
      .patch("http://localhost:3500/forgot", {
        email,
        prevpass,
        newpass,
      })
      .then((response) => {
        setUserCreation({
          message: response.data.msg,
          action: "success",
        });
        setSnackbarOpen(true);
      })
      .catch((err) => {
        console.log(err);
        if (err.response) {
          setUserCreation({
            message: err.response.data.msg,
            action: "error",
          });
          setSnackbarOpen(true);
        } else {
          setUserCreation({
            message: "Server is not running",
            action: "error",
          });
          setSnackbarOpen(true);
        }
      });
  }

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => {
          setSnackbarOpen(false);
        }}
      >
        <Alert
          severity={userCreation.action !== "" ? userCreation.action : "info"}
        >
          {userCreation.message}
        </Alert>
      </Snackbar>
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
              Previous Password
            </Typography>

            <TextField
              className="input-text"
              label="Previous Password"
              variant="outlined"
              size="small"
              type="text"
              name="prevpass"
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
              Password
            </Typography>

            <TextField
              className="input-text"
              label="Enter your password"
              variant="outlined"
              size="small"
              type="password"
              name="newpass"
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
              required
            ></TextField>

            <div className="button-div">
              <button className="btn" onClick={UserRegister} type="submit">
                Update Password
              </button>
            </div>
          </div>
          <div>
            <img src={LogoImage} alt="loginimage" className="loginimg" />
          </div>
        </div>
      </form>
    </>
  );
}

export default ChangePass;
