import React from "react";
import "./Offer.scss";

const Offer = () => {
  return (
    <div className="offer">
      <div className="container">
        <div className="sale">
          <div className="left">
            <img src="/img/diamond.png" alt="" />
            <h5>Hurry Up!</h5>
            <h1>85% OFF</h1>
            <h5>Sale</h5>
            <button>SHOP NOW</button>
          </div>
          <div className="right">
            <img src="/img/discount.png" alt="" />
            <h5>Hurry Up!</h5>
            <h1>75% OFF</h1>
            <h5>Sale</h5>
            <button>SHOP NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
