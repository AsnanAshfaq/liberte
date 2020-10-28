import React from "react";
const ProductLayout = ({ image, price, sizes, name }) => {
  // loop through all the products
  return (
    <div
      className="container-fluid d-flex card-container justify-content-center m-0 p-0"
      style={{ Height: "fit-content", maxHeight: 400 }}
    >
      <div
        class="card border-0 m-0 p-0"
        style={{
          width: "fit-content",
          height: "fit-content",
          maxHeight: "inherit",
        }}
      >
        <div
          className="wrapper w-100"
          style={{ Height: "fit-content", maxheight: 200, overflow: "hidden" }}
        >
          <img
            class="card-img-top img-fluid"
            style={{ width: "inherit", height: "inherit" }}
            src={image}
            alt="Card image cap"
          />
        </div>
        <div class="card-body d-flex justify-content-center flex-column m-0 p-0">
          <p
            class="card-text text d-flex justify-content-center m-0 mt-2"
            style={{
              Height: "fit-content",
              minHeight: 50,
              maxHeight: 70,
              overflow: "hidden",
              textAlign: "center",
            }}
          >
            {name}
          </p>
          <b>
            <p
              class="card-title m-0 text"
              style={{
                Height: "fit-content",
                minHeight: 20,
                maxHeight: 40,
                overflow: "hidden",
                fontSize: 13,
                fontWeight: "bolder",
                textAlign: "center",
              }}
            >
              {price}
            </p>
          </b>
          <div className="d-flex justify-content-center m-0 p-0">
            {sizes.map((item) => {
              // if the size if empty then dont show it
              if (item == "") return null;
              else
                return (
                  <div
                    className="d-flex justify-content-center size_container border border-dark rounded text-align-center px-1 mx-1"
                    style={{
                      width: 35,
                      minWidth: 10,
                      textAlign: "center",
                      Height: "fit-content",
                      minHeight: 30,
                      maxHeight: 30,
                      overflow: "hidden",
                    }}
                  >
                    <p className="size_name">{item}</p>
                  </div>
                );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductLayout;
