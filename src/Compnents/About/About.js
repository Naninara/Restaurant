import React from "react";
import "./About.css";

const shape = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="925"
    height="721"
    viewBox="0 0 925 721"
    fill="none"
  >
    <path
      d="M2.47607 481.853C-27.0649 722.978 237.439 720 540.402 720C1331.8 720 1083.86 672.257 1083.86 466.921C1083.86 261.585 1289.42 1.55626 986.461 1.55626C744.062 -11.4514 43.5 147 2.47607 481.853Z"
      fill="#FF5733"
    />
  </svg>
);

const About = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>
          About <span style={{ color: "#FF5733" }}>Us</span>
        </h1>
        <img
          src="https://res.cloudinary.com/dggryzgok/image/upload/v1697298916/Restarent%20Assests/q1c9ytlxsot0m2zyjc3i.png"
          className="burger"
          alt="burger"
          loading="lazy"
        />
      </div>
      <div className="right">
        {shape}
        <div className="content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            quibusdam minima quis aperiam assumenda qui tempora ea neque
            sapiente numquam delectus eaque eveniet quidem distinctio fuga
            voluptatibus consequuntur, odit iure? Ex, nulla. Odio fuga eaque
            dolorum cumque eligendi. Illum, sapiente explicabo ea reprehenderit
            quos fugit doloremque eligendi perferendis soluta assumenda.
            <br />
            <br />
            Veniam alias at quasi voluptas! Unde harum quas aut cumque adipisci
            distinctio alias hic autem ullam facilis! In amet animi laudantium
            molestias.
          </p>
          <button className="btn btn-kn">Know More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
