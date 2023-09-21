import React from "react";
import "./NavBar.css";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
function Navbar() {
  return (
    <AppBar sx={{ position: "fixed", top: 0, zIndex: 999 }}>
      <Toolbar className="toolbar">
        <div>
          <Typography variant="span">LOGO</Typography>
        </div>
        <div className="right">
          <Typography variant="span">Login</Typography>
          <Typography variant="span">Restarents</Typography>
          <ShoppingCart />
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
