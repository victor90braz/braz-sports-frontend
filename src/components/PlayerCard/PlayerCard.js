import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  deletePlayerThunk,
  getPlayerThunk,
} from "../../redux/thunks/playersThunks";
import PlayerCardStyles from "./PlayerCardStyles";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { BiTime } from "react-icons/bi";
import { BsCalendarDate } from "react-icons/bs";

const PlayerCard = ({
  player: {
    id,
    descriptionEvent,
    dateEvent,
    timeEvent,
    image,
    name,
    province,
    country,
    locationEvent,
  },
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDetail = () => {
    navigate(`/detail/${id}`);
  };

  const handlePerfil = () => {
    navigate(`/perfil/${id}`);
  };

  const handleEdit = () => {
    dispatch(getPlayerThunk(id));
    navigate(`/edit/${id}`);
  };

  const handleDelete = () => {
    const deleteCard = window.confirm("Are you sure to delete this card?");

    if (deleteCard) dispatch(deletePlayerThunk(id));
  };

  return (
    <PlayerCardStyles>
      <section className="wrapper">
        <div className="card-body" onClick={handleDetail}>
          <h2 className="card-meta mb-2">Beach Volley</h2>
          <h1 className="card-title mt-0 ">{descriptionEvent}</h1>

          <ul className="location-container">
            <li>
              <BsCalendarDate size={25} />
              {dateEvent}
            </li>
            <li>
              <BiTime size={25} />
              {timeEvent}
            </li>
            <li>
              <GoLocation size={25} />
              {locationEvent}, {province}, {country}
            </li>
          </ul>
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
            className="icon_delete"
          />
          <FiEdit size={30} onClick={handleEdit} className="icon_edit" />
        </div>
      </section>
    </PlayerCardStyles>
  );
};

export default PlayerCard;
