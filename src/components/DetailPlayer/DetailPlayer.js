import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getPlayerThunk,
  loadPlayersThunk,
} from "../../redux/thunks/playersThunks";
import GoogleMap from "../Map/Map";
import DetailPlayerStyle from "./DetailPlayerStyle";
import { GoLocation } from "react-icons/go";
import { BiTime } from "react-icons/bi";
import { BsCalendarDate } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";

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
    navigate(`/edit/${id}`);
  };

  const handlePerfil = () => {
    dispatch(getPlayerThunk(id));
    navigate(`/editDetailPlayer/${id}`);
  };

  return (
    <DetailPlayerStyle>
      <div className="card">
        <div className="user" onClick={handlePerfil}>
          <div className="user-info">
            <img src={allPlayers.image} alt="user" />
            <h5>{allPlayers.name}</h5>
          </div>
          <span>
            <FiEdit size={30} onClick={handleEdit} className="icon_edit" />
          </span>
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
              {allPlayers.locationEvent}, {allPlayers.province},{" "}
              {allPlayers.country}
            </a>
          </span>
        </div>
        <GoogleMap />
      </div>
    </DetailPlayerStyle>
  );
};

export default DetailPlayer;
