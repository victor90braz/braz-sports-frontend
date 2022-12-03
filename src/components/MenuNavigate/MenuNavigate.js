import { NavLink } from "react-router-dom";

import MenuNavigateStyle from "./MenuNavigateStyle";
import LogOut from "../LogOut/LogOut";

const MenuNavigate = () => {
  return (
    <MenuNavigateStyle>
      <nav className="nav-logo">
        <NavLink to="/home">SPORTSBRAZ</NavLink>
      </nav>

      <nav className="nav-links">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/create">Builder Player</NavLink>
      </nav>
      <LogOut />
    </MenuNavigateStyle>
  );
};

export default MenuNavigate;
