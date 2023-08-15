import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col1">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries....
            </p>
            <div className="icons">
              <img src="/img/Group2.svg" alt="" />
              <img src="/img/Group3.svg" alt="" />
              <img src="/img/Group4.svg" alt="" />
              <img src="/img/Group5.svg" alt="" />
              <img src="/img/Group6.svg" alt="" />
            </div>
          </div>
          <div className="col2">
            <h3>ONLINE SHOPPING</h3>
            <p>Men’s T-Shirts</p>
            <p>Women’s Wear</p>
            <p>Winter Collections</p>
            <p>Hooded T-Shirts</p>
            <p>Streetwear Collections</p>
          </div>
          <div className="col3">
            <h3>CUSTOMER POLICIES</h3>
            <p>About Us</p>
            <p>Terms & Conditions</p>
            <p>Shipping & Returns Policy</p>
            <p>Cancellation & Refund Policy</p>
            <p>Contact Us</p>
          </div>
          <div className="col4">
            <h3>STORE INFORMATION</h3>
            <div className="icon">
              <img src="/img/Frame.svg" alt="" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </p>
            </div>
            <div className="icon">
              <img src="/img/Frame5.svg" alt="" />
              <p>Call Us: 1234567890</p>
            </div>
            <div className="icon">
              <img src="/img/Frame6.svg" alt="" />
              <p>Email Us: info@yourmail.com</p>
            </div>
          </div>
        </div>
        <div className="bottom">
          <p>©2022-23 Powered By dummy team</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
