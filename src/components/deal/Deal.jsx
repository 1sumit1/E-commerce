import React from "react";
import "./Deal.scss";

const Deal = () => {
  return (
    <div className="deal">
      <div className="container">
        <div className="top">
          <div className="top-img">
            <img src="/img/image2.png" alt="" />
          </div>
          <div className="top-img">
            <img src="/img/image3.png" alt="" />
          </div>
        </div>
        <div className="bottom">
          <div className="bottom-img">
            <img src="/img/image4.png" alt="" />
          </div>
          <div className="bottom-img">
            <img src="/img/image5.png" alt="" />
          </div>
          <div className="bottom-img">
            <img src="/img/image6.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deal;
