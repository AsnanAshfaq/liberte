import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import Banner from "./banner";
import LandingPageBanner from "./landing-banner";
import MostPopularProducts from "./most-popular-products";
import ProductCategory from "./product-category";
// local data for showing in Categories
import {
  MenWorkoutShirts,
  MenShorts,
  WomenSportsBra,
  WomenLeggings,
} from "../../categoryWiseProducts";

const Categories = [
  { category: " Men Workout Shirts", categoryData: MenWorkoutShirts },
  { category: "Men Shorts", categoryData: MenShorts },
  { category: "Women Leggings", categoryData: WomenLeggings },
  { category: "Women Sports Bra", categoryData: WomenSportsBra },
];

function Home() {
  return (
    <div className="container-fluid m-0 p-0">
      <Header />

      <div className="container-fluid overflow-hidden d-flex m-0 p-0">
        <LandingPageBanner />
      </div>
      <div className="container-fluid d-flex h-auto m-0 p-0">
        <div className="row m-0 p-0">
          <div className="col m-0 p-0">
            <MostPopularProducts />
          </div>
        </div>
      </div>
      <div className="container-fluid d-flex m-0 mt-2  p-0">
        <div className="row m-0 p-0">
          <div className="col m-0 p-0">
            <Banner />
          </div>
        </div>
      </div>

      {/* loop through all the categories  */}
      <div
        className="container-fluid d-flex justify-content-center align-items-center m-0 p-0"
        style={{ height: "auto" }}
      >
        <div className="row m-0 p-0">
          <div className="col m-0 p-0 ">
            <h2 className="d-flex justify-content-center align-items-center pt-3 text">
              Some of Our Products
            </h2>
          </div>
        </div>
      </div>
      {Categories.map((item) => (
        <div
          className="container-fluid d-flex m-0 mt-4 p-0"
          style={{ height: "auto" }}
        >
          <div className="row m-0 p-0">
            <div className="col m-0 p-0">
              <h4
                className="container-fluid d-flex justify-content-center align-items-center text py-3 mb-0"
                style={{ height: "fit-content", fontWeight: "bolder" }}
              >
                {item.category}
              </h4>
              <div className="w-auto m-0 p-0 h-auto text d-flex justify-content-center ">
                <p className="link py-3 m-0" style={{ width: "fit-content" }}>
                  View All
                </p>
              </div>
              <ProductCategory data={item.categoryData} />
            </div>
          </div>
        </div>
      ))}

      {/* footer  */}
      <div className="container-fluid m-0 p-0 w-auto h-auto mt-4">
        <div className="row m-0 p-0">
          <div className="col m-0 p-0">
            <Footer/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
