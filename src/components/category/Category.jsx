import React from "react";
import "./Category.scss";

const catData = [
  {
    image: "/img/Group1.png",
    name: "Men’s T-Shirts",
  },
  {
    image: "/img/Group2.png",
    name: "Women’s Wear",
  },
  {
    image: "/img/Group3.png",
    name: "Winter Collections",
  },
  {
    image: "/img/Group4.png",
    name: "Hooded T-Shirts",
  },
  {
    image: "/img/Group5.png",
    name: "Polo Neck T-Shirts",
  },
  {
    image: "/img/Group6.png",
    name: "Full Sleeves T-Shirts",
  },
];

const Category = () => {
  return (
    <div className="category">
      <div className="container">
        {catData.map((item) => (
          <div className="catitem">
            <img className="catimg" src={item.image} alt="" />
            <p className="catname">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
