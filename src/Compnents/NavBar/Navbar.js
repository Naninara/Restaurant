import React from "react";
import "./NavBar.css";
function Navbar() {
  return (
    <div id="navbar-container">
      <div className="nav-content">
        <span className="logo">LOGO</span>
        <div className="nav-navigation">
          <li>Home</li>
          <li>About</li>
          <li>Restaurent</li>
          <li>Process</li>
          <li>Conatct Us</li>
        </div>
        <div className="nav-login">
          <span>Login</span>
          <span>Sign Up</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
