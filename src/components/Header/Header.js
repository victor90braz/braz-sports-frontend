import MenuHamburger from "../MenuHamburger/MenuHamburger";
import NavBar from "../NavBar/NavBar";

const Header = () => {
  return (
    <div className="container-header">
      <nav className="navbar bg-light">
        <NavBar />
        <MenuHamburger />
      </nav>
    </div>
  );
};

export default Header;
