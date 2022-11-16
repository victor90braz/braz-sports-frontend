import { cardImage, imagesPath } from "../../assets/imagesPath.js";
import CardEventStyle from "./CardEventStyle.js";

const CardEvent = () => {
  return (
    <CardEventStyle>
      <div class="card">
        <img
          src={imagesPath.cardImage}
          class="card-img-top"
          alt="..."
          width="50px"
        />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="/#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </CardEventStyle>
  );
};

export default CardEvent;
