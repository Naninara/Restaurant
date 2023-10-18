import React from "react";
import { Link } from "react-router-dom";
import "./Showcase.css";

const ShowCase = () => {
  return (
    <div className="showcase">
      <div className="images">
        <img
          src="https://res-console.cloudinary.com/dggryzgok/thumbnails/transform/v1/image/upload/Yl9hdXRvOnByZWRvbWluYW50LGNfcGFkLGhfMzAwLHdfMzAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/UmVzdGF1cmVudEFzc2VzdHMva2U5dWw4Y3R6cHhqbXpkam5hYTc=/template_primary"
          className="image img-11"
          alt="wings"
        />
        <img
          src="https://res-console.cloudinary.com/dggryzgok/thumbnails/transform/v1/image/upload/Yl9hdXRvOnByZWRvbWluYW50LGNfcGFkLGhfMzAwLHdfMzAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/UmVzdGF1cmVudEFzc2VzdHMvemtmbHVydTZqdXBzbzFncWNnY28=/template_primary"
          className="image img-33"
          alt="joints"
        />
        <img
          src="https://res-console.cloudinary.com/dggryzgok/thumbnails/transform/v1/image/upload/Yl9hdXRvOnByZWRvbWluYW50LGNfcGFkLGhfMzAwLHdfMzAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/UmVzdGF1cmVudEFzc2VzdHMvbzJxeGJubDB0eWx2b2w1d2NjNHI=/template_primary"
          className="image img-22"
          alt="tandoori"
        />
      </div>
      <div className="order-now">
        <Link to="/restarents">
          <button className="btn">Order Now</button>
        </Link>
      </div>
    </div>
  );
};

export default ShowCase;
