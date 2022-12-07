import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { blankStateActionCreator } from "../../redux/features/playerSlice";
import { getPlayerThunk } from "../../redux/thunks/playersThunks";
import DetailPlayerStyle from "./DetailPlayerStyle";

const DetailPlayer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();
  const { player: allPlayers } = useSelector((state) => state.player);

  const handleEdit = () => {
    dispatch(getPlayerThunk(id));
    dispatch(blankStateActionCreator());
    navigate(`/edit/${id}`);
  };

  useEffect(() => {
    dispatch(getPlayerThunk(id));
  }, [dispatch, id]);

  return (
    <DetailPlayerStyle>
      <div className="card text-center">
        <div className="card-header">{allPlayers.level}</div>
        <div className="card-body">
          <h5 className="card-title">{allPlayers.locationEvent}</h5>
          <p className="card-text">{allPlayers.payment}€</p>
          <p className="card-text">{allPlayers.dateEvent}</p>
          <p className="card-text">{allPlayers.time}</p>
        </div>
      </div>

      <div className="bg-info clearfix">
        <button
          type="button"
          className="btn btn-secondary float-start"
          onClick={handleEdit}
        >
          Edit
        </button>
      </div>
    </DetailPlayerStyle>
  );
};

export default DetailPlayer;
