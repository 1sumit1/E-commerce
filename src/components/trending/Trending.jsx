import React from "react";
import Card from "../card/Card";
import "./Trending.scss";

const cardData = [
  {
    id: 1,
    image: "/img/Rectangle1.png",
    name: "Men Henley Neck",
    name1: "Full Sleeve Red Wine",
    price: "399",
    oldPrice: "1299",
  },
  {
    id: 2,
    image: "/img/Rectangle2.png",
    name: "Men Henley Neck",
    name1: "Full Sleeve Red Wine",
    price: "399",
    oldPrice: "1299",
  },
  {
    id: 3,
    image: "/img/Rectangle3.png",
    name: "Men Henley Neck",
    name1: "Full Sleeve Red Wine",
    price: "399",
    oldPrice: "1299",
  },
  {
    id: 4,
    image: "/img/Rectangle4.png",
    name: "Men Henley Neck",
    name1: "Full Sleeve Red Wine",
    price: "399",
    oldPrice: "1299",
  },
];

const Trending = ({ title }) => {
  return (
    <div className="trending">
      <div className="container">
        <h1 className="title">{title}</h1>
        <div className="items">
          {cardData.map((item) => (
            <div className="card-item" key={item.id}>
              <Card item={item} />
            </div>
          ))}
        </div>
        <div className="btn">
          <button className="vbtn">VIEW ALL</button>
        </div>
      </div>
    </div>
  );
};

export default Trending;
