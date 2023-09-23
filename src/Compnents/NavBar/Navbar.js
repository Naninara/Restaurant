import React from "react";
import "./NavBar.css";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <AppBar sx={{ position: "fixed", top: 0, zIndex: 999 }}>
      <Toolbar className="toolbar">
        <div>
          <Link to="/">
            <Typography variant="span">LOGO</Typography>
          </Link>
        </div>
        <div className="right">
          <Link to="/login">
            <Typography variant="span">Login</Typography>
          </Link>
          <Link to="/restarents">
            <Typography variant="span">Restarents</Typography>
          </Link>
          <ShoppingCart />
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
