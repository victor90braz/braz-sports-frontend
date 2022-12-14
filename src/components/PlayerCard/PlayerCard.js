import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { deletePlayerThunk } from "../../redux/thunks/playersThunks";
import PlayerCardStyles from "./PlayerCardStyles";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { BsCalendarDate } from "react-icons/bs";

const PlayerCard = ({
  player: { id, sport, descriptionEvent, dateEvent, image, username },
}) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    const deleteCard = window.confirm("Are you sure to delete this card?");
    if (deleteCard) dispatch(deletePlayerThunk(id));
  };

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

        <div className="card-action">
          <RiDeleteBin6Fill
            size={30}
            onClick={handleDelete}
            className="icon_delete"
          />
          <NavLink to={`/gameEdit/${id}`} className="btn draw-border">
            EDIT GAME
          </NavLink>
        </div>
      </div>
    </PlayerCardStyles>
  );
};

export default PlayerCard;
