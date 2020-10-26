import React from "react";
// react bootstrap stuff
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
// icon material ui
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
// css
import "./header.css";

function Header() {
  return (
    <Container className="m-0 p-0 header d-block flex-column" fluid>
      <div className="m-0 p-0 d-flex flex-row">
        {/* /* free space 🔥  */}
        <div className="col-xl-1 col-lg-1"></div>
        {/* logo 🍔 */}
        <div className="col-xl-2 col-lg-2 col-md-3 col-sm-3 col-xs  d-flex flex-row justify-content-center align-items-center m-0 p-0">
          <h4
            className="header__logo p-0 m-0 d-flex justify-flex-start "
            style={{ textAlign: "center",zIndex:2 }}
          >
            Liberté
          </h4>
        </div>
        <div className="col-xl-5 col-lg-5 col-md-4 col-sm-5 col-xs  m-0 p-0 d-flex flex-row justify-content-center border-none">
          <Dropdown className="dropdown__item">
            <Dropdown.Toggle
              className="dropdown btn-outline-dark m-0 p-0"
              style={{
                backgroundColor: "black",
                color: "white",
                userSelect: "none",
                outline: "none",
                border: 0,
              }}
              id="dropdown-basic1"
            >
              Men
            </Dropdown.Toggle>
            <Dropdown.Menu
              className="border-0 m-0 p-0"
              style={{ backgroundColor: "black" }}
            >
              <Dropdown.Item href="#/action-1" className="dropdown__item">
                All Products
              </Dropdown.Item>
              <Dropdown.Item href="#/action-1" className="dropdown__item">
                Trousers
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2" className="dropdown__item">
                Track Suits
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3" className="dropdown__item">
                Workout Shirts{" "}
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3" className="dropdown__item">
                Workout Shirts{" "}
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3" className="dropdown__item">
                T-Shirt Dryfit
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3" className="dropdown__item">
                Shorts
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="dropdown__item">
            <Dropdown.Toggle
              className="dropdown btn-outline-dark border-none m-0 p-0"
              style={{
                backgroundColor: "black",
                color: "white",
                userSelect: "none",
                outline: "none",
                border: 0,
              }}
              id="dropdown-basic2"
            >
              Women
            </Dropdown.Toggle>

            <Dropdown.Menu className="border-0 m-0 p-0">
              <Dropdown.Item href="#/action-1" className="dropdown__item">
                All Products
              </Dropdown.Item>
              <Dropdown.Item href="#/action-1" className="dropdown__item">
                Leggings
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2" className="dropdown__item">
                Sports Bra
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3" className="dropdown__item">
                Women Track Suit
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          {/* sign in or sign out 💯 */}
        </div>
        {/* /* free space 🔥  */}
        <div className="col col-xl-1 col-lg-1" style={{backgroundColor:'black'}}></div>
        {/* side option 🧑 ⚓ */}
        <div
          className="col-xl-3 col-lg-3 col-md-3 col col-xs m-0 p-0 d-flex flex-row"
          style={{ backgroundColor: "black" }}
        >
          <div className="col col-md-6 col-sm-6">
            <p className="register m-0 p-0 d-flex justify-content-center align-items-center">
              Sign In
            </p>
          </div>
          {/* search icon 🎃 */}
          <div className="col col-md-3 col-sm-3 d-flex justify-content-end align-items-center">
            <SearchIcon style={{ fill: "white", fontSize: 25 }} />
          </div>
          {/* basket icon  🩰*/}

          <div className="col col-md-3 col-sm-3 d-flex justify-content-start align-items-center ">
            <ShoppingCartIcon style={{ fill: "white", fontSize: 25 }} />
          </div>
        </div>
      </div>

      {/* banner image 🎧 */}
      <div className="container-fluid position-relative m-0 p-0">
        <div className="row m-0 p-0">
          <div className="col m-0 p-0">
            <Image
              src="https://cdn.shopify.com/s/files/1/0535/9093/files/sensorybanner_1600x.jpg?v=1602455199"
              fluid
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Header;
