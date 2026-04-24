import React from "react";
import "./Navbar.css";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <>
      <div className="navbar-container-lg"></div>
      <div className="navbar-container-sm">
        <ul className="navbar-sm-first-section-container">
          <RxHamburgerMenu />
          <h1 className="navbar-sm-silent-scholar">Silent Scholar</h1>
        </ul>
        <ul>
          <p className="avatar-image-sm-navbar"></p>
        </ul>
        
      </div>
    </>
  );
};

export default Navbar;
