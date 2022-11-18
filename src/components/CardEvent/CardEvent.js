import CardEventStyle from "./CardEventStyle.js";

const CardEvent = ({
  event: { image, name, descriptionEvent, dateEvent, timeEvent, level, gender },
}) => {
  return (
    <CardEventStyle>
      <div className="card">
        <div className="card-body card-body_user">
          <img
            src={image}
            className="card-img-top"
            alt="Photo user event."
            width="50px"
          />

          <span className="card-title">
            <strong>Organizer</strong> {name}
          </span>
        </div>

        <div className="card-body">
          <h2 className="card-text">{descriptionEvent}</h2>
          <input type="text" value={dateEvent} />
          <input type="time" value={timeEvent} />
          <p>{level}</p>
          <p>{gender}</p>
          <a href="/#" className="btn btn-primary">
            Map Address
          </a>
        </div>
      </div>
    </CardEventStyle>
  );
};

export default CardEvent;
