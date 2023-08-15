import React from "react";
import "./Showcase.scss";

const Showcase = () => {
  return (
    <div className="showcase">
      <div className="container">
        <div className="row">
          <div className="item">
            <img src="/img/man.png" alt="" />
            <p>Streetwear Collections </p>
          </div>
          <div className="item">
            <img src="/img/man1.png" alt="" />
            <p>Striped T-Shirts</p>
          </div>
          <div className="item">
            <img src="/img/man2.png" alt="" />
            <p>Round Neck T-Shirts</p>
          </div>
          <div className="item">
            <img src="/img/man3.png" alt="" />
            <p>Printed T-Shirts</p>
          </div>
          <div className="item">
            <img src="/img/man4.png" alt="" />
            <p>Oversized T-Shirts</p>
          </div>
          <div className="item">
            <img src="/img/man5.png" alt="" />
            <p>Half Sleeves T-Shirts</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
