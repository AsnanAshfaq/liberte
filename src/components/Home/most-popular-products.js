import React from "react";
import "./home.css";
import Products from "../../data";
import { Image } from "react-bootstrap";

const Product = ({ image, price, sizes, name }) => {
  // loop through all the products
  return (
    <div className="container-fluid d-flex card-container justify-content-center m-0 p-0">
      {/* image container  */}
      <div
        class="card border-0 m-0 p-0"
        style={{ width: "fit-content", height: "fit-content" }}
      >
        <img class="card-img-top" src={image} alt="Card image cap" />
        <div class="card-body d-flex justify-content-center flex-column m-0 p-0">
          <h6
            class="card-text text m-0 py-3"
            style={{ maxHeight: 15, textAlign: "center" }}
          >
            {name}
            <b>
              <p
                class="card-title py-3 text"
                style={{ minHeight: 40, fontSize: 17, textAlign: "center" }}
              >
                {price}
              </p>
            </b>
          </h6>
        </div>
      </div>
    </div>
  );
};
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
        <h4 className="link py-3" style={{ width: "fit-content" }}>
          View All
        </h4>
      </div>

      {/* list of Products 👍 */}
      <div className="container-fluid d-flex flex-row m-0 p-0">
        <div className="row">
          {Products.map((product) => (
            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-6 ">
              <Product
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
