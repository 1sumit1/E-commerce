import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
           <img className="icon"  src="/img/Group1.svg" alt="" />
        </div>
        <div className="right">
           <img  className="icon" src="/img/Frame1.svg" alt="" />
           <img  className="icon" src="/img/Frame2.svg" alt="" />
           <img  className="icon" src="/img/Frame4.svg" alt="" />
           <img  className="icon" src="/img/Frame3.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
