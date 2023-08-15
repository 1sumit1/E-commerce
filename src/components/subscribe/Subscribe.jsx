import React from "react";
import "./Subscribe.scss";

const Subscribe = () => {
  return (
    <div className="subscribe">
      <div className="container">
        <img src="/img/Mask.png" className="mask" alt="" />
        <h2>
          Subscribe to get updates on exciting offers <br /> & deals
        </h2>
        <div className="sub">
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
