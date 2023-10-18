import React from "react";
import "./Home.css";

const location = (
  <svg
    width="21"
    height="29"
    viewBox="0 0 21 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      id="Vector"
      d="M10.5 13.7863C9.5528 13.7863 8.64439 13.41 7.97462 12.7402C7.30485 12.0705 6.92857 11.162 6.92857 10.2148C6.92857 9.26764 7.30485 8.35924 7.97462 7.68946C8.64439 7.01969 9.5528 6.64342 10.5 6.64342C11.4472 6.64342 12.3556 7.01969 13.0254 7.68946C13.6952 8.35924 14.0714 9.26764 14.0714 10.2148C14.0714 10.6839 13.9791 11.1483 13.7996 11.5816C13.6201 12.0149 13.357 12.4086 13.0254 12.7402C12.6937 13.0719 12.3 13.3349 11.8667 13.5144C11.4334 13.6939 10.969 13.7863 10.5 13.7863ZM10.5 0.214844C7.84784 0.214844 5.3043 1.26841 3.42893 3.14378C1.55357 5.01914 0.5 7.56268 0.5 10.2148C0.5 17.7148 10.5 28.7863 10.5 28.7863C10.5 28.7863 20.5 17.7148 20.5 10.2148C20.5 7.56268 19.4464 5.01914 17.5711 3.14378C15.6957 1.26841 13.1522 0.214844 10.5 0.214844Z"
      fill="#706868"
    />
  </svg>
);
const search = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="25"
    viewBox="0 -960 960 960"
    width="25"
  >
    <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
  </svg>
);
const arrow = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 -960 960 960"
    width="24"
  >
    <path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z" />
  </svg>
);

const Home = () => {
  return (
    <div className="home">
      <img
        src="https://res-console.cloudinary.com/dggryzgok/thumbnails/transform/v1/image/upload/Yl9hdXRvOnByZWRvbWluYW50LGNfcGFkLGhfMzAwLHdfMzAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/UmVzdGF1cmVudEFzc2VzdHMvc2QyZGJuZjNlc2Yzc2dlbGhzcnI=/template_primary"
        className="img-1 img"
        alt="Chicken"
      />
      <img
        src="https://res-console.cloudinary.com/dggryzgok/thumbnails/transform/v1/image/upload/Yl9hdXRvOnByZWRvbWluYW50LGNfcGFkLGhfMzAwLHdfMzAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/UmVzdGF1cmVudEFzc2VzdHMvbXI5OGtwOGRkaWx6bnp1cm5pZ2Q=/template_primary"
        className="img-2 img"
        alt="samsosa"
      />
      <img
        src="https://res.cloudinary.com/dggryzgok/image/upload/v1695195020/Landing2.png"
        className="img-3 img"
        alt="joints"
      />
      <div className="content">
        <h1>Fresh, Fast, and Powerful!</h1>
        <div className="input">
          {location}
          <input placeholder="Enter Your Address" type="text" />
          <div className="search">{search}</div>
        </div>
        <h3 style={{ marginTop: "30px" }}>Scroll for more</h3>
        <div className="arrow"> {arrow}</div>
      </div>
    </div>
  );
};

export default Home;
