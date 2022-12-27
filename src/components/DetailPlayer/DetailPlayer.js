import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  deletePlayerThunk,
  getPlayerThunk,
  loadPlayersThunk,
} from "../../redux/thunks/playersThunks";
import GoogleMap from "../Map/Map";
import DetailPlayerStyle from "./DetailPlayerStyle";
import { GoLocation } from "react-icons/go";
import { BiTime } from "react-icons/bi";
import { BsCalendarDate, BsCreditCard2Front } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbListDetails } from "react-icons/tb";

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

  const handleCard = () => {
    dispatch(getPlayerThunk(id));
    navigate(`/gameEdit/${id}`);
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

          <div className="container-actions">
            <span onClick={handleEdit}>
              <TbListDetails size={25} className="icon-detail-card" />
              Set Detail Card
            </span>

            <span onClick={handleDelete}>
              <RiDeleteBin6Line size={25} className="icon-delete" /> Delete
              Cards
            </span>

            <span onClick={handleCard}>
              <BsCreditCard2Front size={25} className="icon-card" />
              Set Card
            </span>
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
            <p
              href={allPlayers.linkLocation}
              target={"_blank"}
              rel="noreferrer"
            >
              <GoLocation size={25} />
              {allPlayers.locationEvent}
            </p>
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
