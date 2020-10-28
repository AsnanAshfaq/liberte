import React from "react";
import "./home.css";
import Products from "../../data";

import ProductLayout from "./ProductLayout";

function MostPopularProducts() {
  return (
    <div className="d-flex justify-content-center flex-column m-0 p-0">
      <h3
        className="container-fluid d-flex justify-content-center align-items-center text py-3"
        style={{ height: "fit-content", fontWeight: "bolder" }}
      >
        Most Popular Products
      </h3>

      <div className="w-auto m-0 p-0 h-auto text d-flex justify-content-center ">
        <h6 className="link py-3 m-0" style={{ width: "fit-content" }}>
          View All
        </h6>
      </div>

      {/* list of Products 👍 */}
      <div className="container-fluid d-flex flex-row m-0 p-0">
        <div className="row">
          {Products.map((product) => (
            <div className="col-xl-2 col-lg-2 col-md-3 col-sm-6">
              <ProductLayout
                key={product.id}
                image={product.imgURL}
                price={product.price}
                name={product.productName}
                sizes={product.sizes}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MostPopularProducts;
