import FooterStyle from "./FooterStyle";
import { AiOutlineHome } from "react-icons/ai";
import { GiSportMedal } from "react-icons/gi";
import { IoMdFootball } from "react-icons/io";

const Footer = () => {
  return (
    <FooterStyle>
      <div className="navbar">
        <a href="#home">
          <AiOutlineHome size={50} />
          <span>Home</span>
        </a>
        <a href="#news">
          <GiSportMedal size={50} />
          <span>Tournaments</span>
        </a>
        <a href="#contact">
          <IoMdFootball size={50} />
          <span>Games</span>
        </a>
        <a href="#contact">
          <AiOutlineHome size={50} />
          <span>My Events</span>
        </a>
      </div>
    </FooterStyle>
  );
};

export default Footer;
