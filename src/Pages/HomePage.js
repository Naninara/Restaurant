import React from "react";
import Landing from "../Compnents/Landing/Landing";
import Advertisement from "../Compnents/Advertisements/Advertisement";
import Offers from "../Compnents/Offers/Offers";
function HomePage() {
  return (
    <div>
      {" "}
      <Landing />
      <Advertisement />
      <Offers />
    </div>
  );
}

export default HomePage;
