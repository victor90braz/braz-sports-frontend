import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPlayersThunk } from "../../redux/thunks/playersThunks";
import PlayerCard from "../PlayerCard/PlayerCard";
import ListPlayersStyles from "./ListPlayersStyles";

const ListPlayers = () => {
  const { allPlayers } = useSelector((status) => status.player);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPlayersThunk());
  }, [dispatch]);

  return (
    <ListPlayersStyles>
      <div className="container-players">
        {allPlayers.map((player, keyPlayer) => (
          <PlayerCard player={player} key={keyPlayer} />
        ))}
      </div>
    </ListPlayersStyles>
  );
};

export default ListPlayers;
