import {
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ResponseModel from "../Compnents/Models/ResponseModel";
import { clear } from "../Redux/CartSlice";

import Login from "./Login";

function Address() {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.allreducers.user.email);
  const cart = useSelector((state) => state.allreducers.cart);
  const [modelOpen, setModelOpen] = useState(false);
  const [modelData, setModelData] = useState({});

  const [adressData, setaddressData] = useState({});
  const [wholeTotal, setWholeTotal] = useState(0);
  useEffect(() => {
    const total = cart.reduce((total, ele) => {
      return (total += ele.quantity * ele.cost);
    }, 0);
    setWholeTotal(total);
  }, [cart]);
  function placeOrder() {
    if (!adressData.phoneNumber || !adressData.name || !adressData.address) {
      alert("Please fill All the details");
      return;
    }
    axios
      .post("http://localhost:3500/orders/placeorder", {
        email: login,
        orderItems: cart,
        OrderCost: wholeTotal,
        Address: adressData,
      })
      .then((response) => {
        dispatch(clear());
        setModelOpen(true);
        setModelData({
          EmojiCode: "success",
          ModelText: `Order Placed Succesfully `,
          navigateLink: "/order",
          ButtonText: "Go To Orders",
        });
      })
      .catch((err) => {
        if (!err.status) {
          setModelOpen(true);
          setModelData({
            EmojiCode: "fail",
            ModelText: `Couldn't place order `,
            navigateLink: "/address",
            ButtonText: "Click here place order again",
          });
        }
      });
  }
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
          onChange={(e) =>
            setaddressData((prevState) => ({
              ...prevState,
              name: e.target.value,
            }))
          }
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
          onChange={(e) =>
            setaddressData((prevState) => ({
              ...prevState,
              phoneNumber: e.target.value,
            }))
          }
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
          onChange={(e) =>
            setaddressData((prevState) => ({
              ...prevState,
              address: e.target.value,
            }))
          }
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
          <button className="btn" onClick={placeOrder} type="submit">
            Place Order
          </button>
        </div>
      </div>
      <ResponseModel open={modelOpen} setOpen={setModelOpen} {...modelData} />
    </div>
  );
}

export default Address;
