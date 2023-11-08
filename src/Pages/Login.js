import { Alert, Snackbar, TextField, Typography } from "@mui/material";
import LogoImage from "../Assets/Login.png";
import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../Redux/UserSlice";
function Login() {
  const [LoginData, setLoginData] = useState({ email: "", pass: "" });
  const [loginResponse, setLoginResponse] = useState({ msg: "", action: "" });
  const dispatch = useDispatch();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  function SubmitLogin() {
    axios
      .post("https://restarentbackend.onrender.com/auth/login", {
        ...LoginData,
      })
      .then((response) => {
        const { name, gmail } = response.data;
        dispatch(login({ name: name, email: gmail }));
        setLoginResponse({ msg: "logged in sucessfully", action: "success" });
        setSnackbarOpen(true);
        window.history.back();
      })

      .catch((err) => {
        if (!err.response) {
          setLoginResponse({
            msg: "something Wrong From our side",
            action: "danger",
          });
        }
        if (err.response && err.response.status === 401) {
          setLoginResponse({ msg: "Invalid credentials", action: "error" });
        }
        setSnackbarOpen(true);
      });
  }
  return (
    <div className="login">
      <div className="login-content">
        <div className="data-content">
          <Snackbar
            message={"logged in sucessfully"}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            open={snackbarOpen}
            autoHideDuration={3000}
            onClose={() => {
              setSnackbarOpen(false);
            }}
          >
            <Alert
              severity={
                loginResponse.action !== "" ? loginResponse.action : "success"
              }
            >
              {loginResponse.msg}
            </Alert>
          </Snackbar>

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
          className="emailspan"
        >
          Login with your email address and Password
        </Typography>

        {loginResponse && (
          <Typography
            variant="span"
            color="#5D5D5D"
            fontSize={"24px"}
            fontWeight="400"
            fontFamily="Montserrat"
          >
            {loginResponse.msg}
          </Typography>
        )}

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
          onChange={(e) => {
            setLoginData((prevState) => ({
              ...prevState,
              email: e.target.value,
            }));
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
          onChange={(e) => {
            setLoginData((prevState) => ({
              ...prevState,
              pass: e.target.value,
            }));
          }}
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
          <button className="btn" onClick={SubmitLogin}>
            Login
          </button>
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
            fontSize={"30px"}
            fontWeight="700"
            fontFamily="Montserrat"
            sx={{ marginLeft: "20px" }}
          >
            <Link to="/register">Signup</Link>
          </Typography>
        </div>
      </div>
      <div>
        <img src={LogoImage} alt="loginimage" className="loginimg" />
      </div>
    </div>
  );
}

export default Login;
