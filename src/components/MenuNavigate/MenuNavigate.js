import MenuNavigateStyle from "./MenuNavigateStyle";
import LogOut from "../LogOut/LogOut";
import { NavLink } from "react-router-dom";

const MenuNavigate = () => {
  return (
    <MenuNavigateStyle>
      <nav className="nav-logo">
        <NavLink to="/home">BRAZSPORTS</NavLink>
      </nav>
      <LogOut />
    </MenuNavigateStyle>
  );
};

export default MenuNavigate;
