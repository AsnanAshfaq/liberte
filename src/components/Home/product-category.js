import React from "react";
import ProductLayout from "./ProductLayout";


function ProductCategory({data}) {
  return (
    <div className="container-fluid d-flex flex-row m-0 p-0">
      <div className="row">
        {data.map((product) => (
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
  );
}

export default ProductCategory;
