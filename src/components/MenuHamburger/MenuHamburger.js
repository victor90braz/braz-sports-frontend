import MenuHamburgerStyle from "./MenuHamburgerStyle";

const MenuHamburger = () => {
  return (
    <MenuHamburgerStyle>
      <button
        className="btn "
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        <i className="fa-solid fa-bars fa-4x"></i>
      </button>

      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div className="offcanvas-body enlaces">
          <a href="/comment">comment</a>
          <a href="/rating">rating</a>
          <a href="/perfil">perfil</a>
          <a href="/subscription">subscription</a>
          <a href="/club">club</a>
          <a href="/level">level</a>
          <a href="/logout">logout</a>
        </div>
      </div>
    </MenuHamburgerStyle>
  );
};

export default MenuHamburger;
