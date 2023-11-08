import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./NavBar.css";
import { ShoppingCart } from "@mui/icons-material";
import { Badge, IconButton } from "@mui/material";
import { useSelector } from "react-redux";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ProfileMenu from "../MenuComponents/ProfileMenu";
const close = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 -960 960 960"
    width="24"
  >
    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
  </svg>
);
const menu = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 -960 960 960"
    width="24"
  >
    <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
  </svg>
);

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const cart = useSelector((state) => state.allreducers.cart);
  const userInfo = useSelector((state) => state.allreducers.user);
  const handleClick = () => {
    setOpen(!isOpen);
  };
  return (
    <>
      <div className="navbar">
        <header>
          <nav>
            <div className="nav-header">
              <Link className="logo" to="/">
                <h1>LOGO.</h1>
              </Link>

              <div className="cartdiv">
                <div onClick={handleClick} className="mobile">
                  {isOpen ? close : menu}
                </div>
              </div>
            </div>

            <div className={isOpen ? "nav-active" : "nav"} id="links">
              <Link to="/">Home</Link>

              <Link to="/Menu">Menu</Link>
              <Link to="order">Orders</Link>
              {userInfo.name ? (
                <IconButton
                  aria-label="profile"
                  sx={{ color: "white" }}
                  onClick={() => {
                    setOpenMenu(true);
                  }}
                >
                  <AccountCircleIcon />
                </IconButton>
              ) : (
                <Link to="/login">Login</Link>
              )}
              <Link to={"/cart"}>
                <Badge color="primary" badgeContent={cart.length} showZero>
                  <ShoppingCart sx={{ cursor: "pointer" }} />
                </Badge>
              </Link>
            </div>
          </nav>
        </header>
      </div>
      <ProfileMenu open={openMenu} setOpen={setOpenMenu} />
    </>
  );
};

export default Navbar;
