import React from "react";
import { imagesPath } from "../../assets/imagesPath";
import MenuHamburger from "../MenuHamburger/MenuHamburger";
import NavbarStyle from "./NavbarStyle";

const NavBar = () => {
  return (
    <NavbarStyle>
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/home">
            <img
              src={imagesPath.brand}
              alt="Braz Sports"
              className="d-inline-block align-text-top brand"
            />
            Braz Sports
          </a>
          <MenuHamburger />
        </div>
      </nav>
    </NavbarStyle>
  );
};

export default NavBar;
