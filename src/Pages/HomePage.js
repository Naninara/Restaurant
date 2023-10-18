import React from "react";
import Home from "../Compnents/Home/Home";
import ShowCase from "../Compnents/Advertisement/Showcase";
import About from "../Compnents/About/About";
import Cuisines from "../Compnents/Cuisines/Cuisines";
function HomePage() {
  return (
    <div>
      <Home />
      <ShowCase />
      <About />
      <Cuisines />
    </div>
  );
}

export default HomePage;
