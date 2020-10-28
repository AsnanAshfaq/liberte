import React from "react";
import Header from "../header/header";
import LandingPageBanner from "./landing-banner";
import MostPopularProducts from "./most-popular-products";

function Home() {
  return (
    <div className="container-fluid m-0 p-0">
      <Header />
      <div className="container-fluid overflow-hidden d-flex m-0 p-0">
        <LandingPageBanner />
      </div>
      <div className="container-fluid d-flex  m-0 p-0">
        <div className="row m-0 p-0">
          <div className="col m-0 p-0">
            <MostPopularProducts />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
