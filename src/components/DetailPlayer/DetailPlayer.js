import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPlayerThunk } from "../../redux/thunks/playersThunks";
import GoogleMap from "../Map/Map";
import DetailPlayerStyle from "./DetailPlayerStyle";
import { GoLocation } from "react-icons/go";
import { BiTime } from "react-icons/bi";
import { BsCalendarDate } from "react-icons/bs";

const DetailPlayer = () => {
  const dispatch = useDispatch();

  const { id } = useParams();
  const { player: allPlayers } = useSelector((state) => state.player);

  useEffect(() => {
    dispatch(getPlayerThunk(id));
  }, [dispatch, id]);

  return (
    <DetailPlayerStyle>
      <div class="card">
        <div class="user">
          <div class="user-info">
            <img src={allPlayers.image} alt="user" />
            <h5>{allPlayers.name}</h5>
          </div>
        </div>

        <div class="card-body">
          <span class="tag tag-teal">Volley</span>
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
            <GoLocation size={25} />
            {allPlayers.locationEvent}, {allPlayers.province},
            {allPlayers.country}
          </span>
        </div>

        <GoogleMap />
      </div>
    </DetailPlayerStyle>
  );
};

export default DetailPlayer;
