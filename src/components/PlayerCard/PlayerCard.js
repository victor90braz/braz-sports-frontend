import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deletePlayerThunk } from "../../redux/thunks/playersThunks";
import PlayerCardStyles from "./PlayerCardStyles";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { BiDetail } from "react-icons/bi";

const PlayerCard = ({
  player: { id, descriptionEvent, dateEvent, timeEvent, image, name },
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDetail = () => {
    navigate(`/detail/${id}`);
  };

  const handlePerfil = () => {
    navigate(`/perfil/${id}`);
  };

  const handleDelete = () => {
    dispatch(deletePlayerThunk(id));
  };
  return (
    <PlayerCardStyles>
      <section className="wrapper">
        <div className="card-body" onClick={handleDetail}>
          <small className="card-meta mb-2">Beach Volley</small>
          <h1 className="card-title mt-0 ">{descriptionEvent}</h1>
          <small>
            <i className="far fa-clock"></i>Date: {dateEvent}
          </small>
          <small>
            <i className="far fa-clock"></i>Time: {timeEvent}
          </small>
        </div>

        <div className="card-perfil" onClick={handlePerfil}>
          <div className="media">
            <img
              className="rounded-circle"
              src={image}
              alt="Generic placeholder"
            />

            <div className="media-body">
              <h2 className="my-0 text-white d-block">{name}</h2>
              <small>Organizer</small>
            </div>
          </div>
        </div>

        <div className="card-action">
          <RiDeleteBin6Fill
            size={30}
            onClick={handleDelete}
            className="card-action_icon"
          />
        </div>
      </section>
    </PlayerCardStyles>
  );
};

export default PlayerCard;
