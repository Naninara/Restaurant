import {
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Login from "./Login";

function Address() {
  const login = useSelector((state) => state.allreducers.user.email);
  const navigate = useNavigate();
  return !login ? (
    <Login />
  ) : (
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
            Enter Your
          </Typography>
          <Typography
            variant="span"
            color="#D55826"
            fontSize={"48px"}
            fontWeight="700"
            fontFamily="Montserrat"
            sx={{ marginLeft: "20px" }}
          >
            Address
          </Typography>
        </div>

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
          type="email"
        ></TextField>
        <Typography
          variant="span"
          color="rgba(26, 18, 11, 0.90)"
          fontSize={"32px"}
          fontWeight="700"
          fontFamily="Montserrat"
        >
          Phone Number
        </Typography>

        <TextField
          className="input-text"
          label="Enter your phone number"
          variant="outlined"
          size="small"
          type="text"
        ></TextField>
        <Typography
          variant="span"
          color="rgba(26, 18, 11, 0.90)"
          fontSize={"32px"}
          fontWeight="700"
          fontFamily="Montserrat"
        >
          Your Address
        </Typography>

        <TextField
          className="input-text"
          label="Enter your Address"
          multiline
          rows={4}
          variant="outlined"
          size="small"
          type="text"
        ></TextField>
        <Typography
          variant="span"
          color="rgba(26, 18, 11, 0.90)"
          fontSize={"32px"}
          fontWeight="700"
          fontFamily="Montserrat"
        >
          Payment Mode
        </Typography>

        <div style={{ display: "flex" }}>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="Cash On Delivery"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="Cash On Delivery"
              control={<Radio />}
              label="Cash On Delivery"
            />
            <FormControlLabel
              value="Prepaid"
              control={<Radio />}
              label="Prepaid"
              disabled
            />
            <span style={{ color: "grey" }}>
              * Due to some reasons prepaid delivery is hold for some days
            </span>
          </RadioGroup>
        </div>

        <div className="button-div">
          <button className="btn">Place Order</button>
        </div>
      </div>
    </div>
  );
}

export default Address;
