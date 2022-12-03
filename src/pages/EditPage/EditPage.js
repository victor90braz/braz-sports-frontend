import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import EditPlayer from "../../components/EditPlayer/EditPlayer";
import { getPlayerThunk } from "../../redux/thunks/playersThunks";

const EditPage = () => {
  const { playerId } = useParams();
  const { player } = useSelector((state) => state.player);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPlayerThunk(playerId));
  }, [dispatch, playerId]);

  return <>{player.name && <EditPlayer />}</>;
};

export default EditPage;
