import React from "react";
import { Image } from "react-bootstrap";
import "./home.css";

function Banner() {
  return (
    <div className="container-fluid bg-dark m-0 p-0">
      <div className="row banner-row m-0 p-0 d-flex flex-row">
        <div className="col col-sm m-0 p-0 w-auto h-auto">
          {/* div for image one  */}
          <div className="w-100  d-flex h-100 m-0 p-0">
            <Image
              fluid
              className="w-100 d-flex img-responsive h-100 m-0 p-0"
              src="https://cdn.shopify.com/s/files/1/0535/9093/files/shopwomenscamo_800x.jpg?v=1603493497"
              alt=""
            />
            <div className="d-flex flex-column">
              <h1 className="highlight">SHOP WOMEN</h1>

              <button
                className="highlight  d-flex justify-content-center p-4 btn border-none w-25 highlight-btn"
                style={{ top: 300,left: 200, backgroundColor: "black", color: "white" }}
              >
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
        <div className="col col-sm m-0 p-0 w-auto h-auto">
          {/* div for image two  */}
          <div className="w-100 bg-danger h-100 m-0 p-0">
            <Image
              fluid
              className="w-100 d-flex  h-100 m-0 p-0"
              src="https://cdn.shopify.com/s/files/1/0535/9093/files/camotshirt_800x.jpg?v=1581465285"
              alt=""
            />
            <div className="d-flex flex-column">
              <h1 className="highlight" style={{ left: 220 }}>
                SHOP MEN
              </h1>

              <button
                className="  d-flex justify-content-center p-4 border-none btn border-none w-25 highlight highlight-btn"
                style={{ top: 300,left: 250, backgroundColor: "black", color: "white" }}
              >
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
