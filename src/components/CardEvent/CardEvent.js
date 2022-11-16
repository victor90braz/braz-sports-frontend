import { imagesPath } from "../../assets/imagesPath.js";
import CardEventStyle from "./CardEventStyle.js";

const CardEvent = ({ event: { image, name, nationality } }) => {
  return (
    <CardEventStyle>
      <div className="card">
        <img
          src={image}
          className="card-img-top"
          alt="Photo user event."
          width="50px"
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{nationality}</p>
          <a href="/#" className="btn btn-primary">
            Map Address
          </a>
        </div>
      </div>
    </CardEventStyle>
  );
};

export default CardEvent;
