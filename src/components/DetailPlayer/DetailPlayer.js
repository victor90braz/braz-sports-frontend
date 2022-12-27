import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import {
  deletePlayerThunk,
  getPlayerThunk,
  loadPlayersThunk,
} from "../../redux/thunks/playersThunks";
import GoogleMap from "../Map/Map";
import DetailPlayerStyle from "./DetailPlayerStyle";
import { GoLocation } from "react-icons/go";
import { BiTime } from "react-icons/bi";
import { BsCalendarDate } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";

const DetailPlayer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { player: allPlayers } = useSelector((state) => state.player);

  useEffect(() => {
    dispatch(getPlayerThunk(id));
    dispatch(loadPlayersThunk());
  }, [dispatch, id]);

  const handleEdit = () => {
    dispatch(getPlayerThunk(id));
    navigate(`/editDetailPlayer/${id}`);
  };

  const handlePerfil = () => {
    dispatch(getPlayerThunk(id));
    navigate(`/perfil/${id}`);
  };

  const handleDelete = () => {
    const deleteCard = window.confirm("Are you sure to delete this card?");
    if (deleteCard) dispatch(deletePlayerThunk(id));
  };

  return (
    <DetailPlayerStyle>
      <div className="card">
        <div className="user">
          <div className="user-info" onClick={handlePerfil}>
            <img src={allPlayers.image} alt="user" />
            <h5>{allPlayers.name}</h5>
          </div>

          <span onClick={handleEdit}>
            <FiEdit size={30} className="icon_edit" />
            edit detail
          </span>

          <div className="card-action">
            <RiDeleteBin6Fill
              size={30}
              onClick={handleDelete}
              className="icon_delete"
            />
            <NavLink to={`/gameEdit/${id}`} className="btn draw-border">
              <CiEdit size={35} className="icon_edit" />
              Edit Card
            </NavLink>
          </div>
        </div>
        <div className="card-body">
          <span className="tag tag-teal">{allPlayers.sport}</span>
          <h4>{allPlayers.descriptionEvent}</h4>

          <span>
            <BsCalendarDate size={25} />
            {allPlayers.dateEvent}
          </span>

          <span>
            <BiTime size={25} />
            {allPlayers.timeEvent}
          </span>

          <span>
            <a
              href={allPlayers.linkLocation}
              target={"_blank"}
              rel="noreferrer"
            >
              <GoLocation size={25} />
              {allPlayers.locationEvent}
            </a>
          </span>
        </div>

        <div className="card-footer">
          <GoogleMap />
        </div>
      </div>
    </DetailPlayerStyle>
  );
};

export default DetailPlayer;
