import React from "react";
import "./Policy.scss";

const Policy = () => {
  return (
    <div className="policy">
      <div className="circle1"></div>
      <div className="circle2"></div>
      <div className="container">
        <div className="items">
          <div className="item">
            <img src="/img/p1.png" alt="" />
            <p>7 Days Return</p>
          </div>
          <div className="item">
            <img src="/img/p2.png" alt="" />
            <p>Quality Products</p>
          </div>
          <div className="item">
            <img src="/img/p3.png" alt="" />
            <p>Safe Payment</p>
          </div>
          <div className="item">
            <img src="/img/p4.png" alt="" />
            <p>24x7 Helpline</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policy;
