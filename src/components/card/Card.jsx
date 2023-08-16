import React from "react";
import "./Card.scss";

const Card = ({ item }) => {
  return (
    <div className="card">
      <div className="card-item">
        <img src={item.image} class="card-img-top" alt="..." />
        <div className="circle">
          <img src="/img/icon1.svg" alt="" />
          <img src="/img/icon2.svg" alt="" />
          <img src="/img/icon3.svg" alt="" />
        </div>
      </div>
      <div className="card-body">
        <h5 className="card-name">{item.name}</h5>
        <h5 className="card-name">{item.name1}</h5>
        <div className="card-price">
          <p className="card-text">{item.price}</p>
          <del className="card-text1">{item.oldPrice}</del>
        </div>
        <div className="size">
          <div className="s">S</div>
          <div className="s">M</div>
          <div className="s">L</div>
          <div className="s">XL</div>
          <div className="s">XXL</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
