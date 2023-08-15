import React, { Suspense } from "react";
import "./Home.scss";
import Navbar from "../../components/navbar/Navbar";
const Category = React.lazy(() => import("../../components/category/Category"));
const Trending = React.lazy(() => import("../../components/trending/Trending"));
const Deal = React.lazy(() => import("../../components/deal/Deal"));
const Footer = React.lazy(() => import("../../components/footer/Footer"));
const Subscribe = React.lazy(() =>
  import("../../components/subscribe/Subscribe")
);
const Policy = React.lazy(() => import("../../components/policy/Policy"));
const Offer = React.lazy(() => import("../../components/offer/Offer"));
const Showcase = React.lazy(() => import("../../components/showcase/Showcase"));

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="nav">
          <Navbar />
        </div>
        <div className="banner">
          <img className="banimg" src="/img/image1.png" alt="" />
        </div>
        <div className="cat">
          <Suspense fallback={<div> Please Wait... </div>}>
            <Category />
          </Suspense>
        </div>
        <div className="deal">
          <Suspense fallback={<div> Please Wait... </div>}>
            <Deal />
          </Suspense>
        </div>
        <div className="trend">
          <Trending title="Trending T-Shirts" />
        </div>
        <div className="Featured">
          <Trending title="Featured Products" />
        </div>
        <div className="feshion">
          <img className="banimg" src="/img/banner1.png" alt="" />
        </div>
        <div className="new">
          <Trending title="New Products" />
        </div>
        <div className="best">
          <Trending title="Best Selling Products" />
        </div>
        <div className="showcase">
          <Showcase />
        </div>
        <div className="fit">
          <img className="banimg" src="/img/banner2.png" alt="" />
        </div>
        <div className="offer">
          <Offer />
        </div>
        <div className="policy">
          <Policy />
        </div>
        <div className="subscribe">
          <Subscribe />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
