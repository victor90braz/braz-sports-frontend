import FooterStyle from "./FooterStyle";

const Footer = () => {
  return (
    <FooterStyle>
      <div className="navbar">
        <a href="#home">
          <i className="fa-regular fa-house">Home</i>
        </a>
        <a href="#news">
          <i className="fa-regular fa-house">Tournaments</i>
        </a>
        <a href="#contact">
          <i className="fa-regular fa-house">Games</i>
        </a>
        <a href="#contact">
          <i className="fa-regular fa-house">My Events</i>
        </a>
      </div>
    </FooterStyle>
  );
};

export default Footer;
