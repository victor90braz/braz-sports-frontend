import CardEventStyle from "./CardEventStyle.js";

const CardEvent = ({
  event: { image, name, descriptionEvent, dateEvent, timeEvent, level, gender },
}) => {
  return (
    <CardEventStyle>
      <div className="card">
        <div className="row">
          <div className="col">
            <img src={image} className="img-fluid" alt="..." />
            <span className="userName">{name}</span>
          </div>
          <div className="col col-description">
            <div className="card-body">
              <h5 className="card-title">{descriptionEvent}</h5>
              <ul>
                <li>
                  <input
                    type="text"
                    value={dateEvent}
                    className="dateEvent"
                    readOnly
                  />
                </li>
                <li>
                  <input type="time" value={timeEvent} readOnly />
                </li>
                <li>
                  <span>{level}</span>
                </li>
                <li>
                  <span>{gender}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </CardEventStyle>
  );
};

export default CardEvent;
