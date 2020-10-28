import React, { useState } from "react";
// react bootstrap stuff
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
// icon material ui
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
// search modal
import SearchModal from "./modal-search";
// css
import "./header.css";
import { Badge } from "@material-ui/core";

function Header() {
  const [IsModalOpen, setIsModalOpen] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
    console.log("opening modal")
  };

  return (
    <Container className="m-0 p-0 header d-block flex-column cont"  fluid>
      {/* search modal 🥑 */}
      {IsModalOpen && <SearchModal setModal={setIsModalOpen} modalOpen={true}/>}

      <div className="m-0 p-0 d-flex flex-row">
        {/* /* free space 🔥  */}
        <div className="col-xl-1 col-lg-1 free_space"></div>
        {/* logo 🍔 */}
        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-1 d-flex flex-row justify-content-center align-items-center m-0 p-0 logo">
          <h4
            className="header__logo p-0 m-0 d-flex justify-flex-start"
            style={{ textAlign: "center", zIndex: 2, width: "auto" }}
          >
            Liberté
          </h4>
        </div>
        <div className="col-xl-5 col-lg-5 col-md-5 col-sm-3 m-0 p-0 d-flex flex-row justify-content-center border-none drop">
          <Dropdown className="dropdown__item" style={{ width: "auto" }}>
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
        <div
          className="col col-xl-1 col-lg-1 free_space"
          style={{ backgroundColor: "black" }}
        ></div>
        {/* side option 🧑 ⚓ */}
        <div
          className="col-xl-3 col-lg-3 col-md-3 col-5 m-0 p-0 d-flex flex-row"
          style={{ backgroundColor: "black" }}
        >
          <div className="col col-md-6 col-sm-6">
            <p className="register m-0 p-0 d-flex justify-content-center align-items-center">
              Sign In
            </p>
          </div>
          {/* search icon 🎃 */}
          <div
            className="col col-md-3 col-sm-3 d-flex justify-content-end align-items-center register"
            onClick={openModal}
          >
            <SearchIcon style={{ fill: "white", fontSize: 25 }} />
          </div>
          {/* basket icon  🩰*/}

          <div className="col col-md-3 col-sm-3 m-0 p-0 d-flex justify-content-center align-items-center register">
          <Badge badgeContent={4} className="w-25 h-50 pr-4" color="secondary">
            <ShoppingCartIcon style={{ fill: "white", fontSize: 25 }} />
          </Badge>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Header;
