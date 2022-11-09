import React from "react";
import { imagesPath } from "../../assets/imagesPath";
import NavbarStyle from "./NavbarStyle";

const NavBar = () => {
  return (
    <NavbarStyle>
      <div className="container-fluid">
        <a className="navbar-brand" href="/home">
          <img
            src={imagesPath.brand}
            alt="Braz Sports"
            className="d-inline-block align-text-top brand"
          />
          Braz Sports
        </a>
      </div>
    </NavbarStyle>
  );
};

export default NavBar;
