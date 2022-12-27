import { NavLink } from "react-router-dom";
import PlayerCardStyles from "./PlayerCardStyles";
import { BsCalendarDate } from "react-icons/bs";

const PlayerCard = ({
  player: { id, sport, descriptionEvent, dateEvent, image, username },
}) => {
  return (
    <PlayerCardStyles>
      <div className="container">
        <NavLink to={`/perfil/${id}`} style={{ textDecoration: "none" }}>
          <section className="wrapper">
            <div className="card-body">
              <h2 className="card-meta mb-2">{sport}</h2>
              <h1 className="card-title mt-0 ">{descriptionEvent}</h1>

              <p className="location-container">
                <BsCalendarDate size={25} />
                {dateEvent}
              </p>
            </div>

            <div className="card-perfil">
              <div className="media">
                <img
                  className="rounded-circle"
                  src={image}
                  alt="Generic placeholder"
                />

                <div className="media-body">
                  <h2 className="my-0 text-white d-block">{username}</h2>
                  <small>Organizer</small>
                </div>
              </div>
            </div>
          </section>
        </NavLink>
      </div>
    </PlayerCardStyles>
  );
};

export default PlayerCard;
