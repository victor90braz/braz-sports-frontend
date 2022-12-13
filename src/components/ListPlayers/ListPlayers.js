import { useSelector } from "react-redux";
import PlayerCard from "../PlayerCard/PlayerCard";
import ListPlayersStyles from "./ListPlayersStyles";

const ListPlayers = () => {
  const { allPlayers } = useSelector((status) => status.player);

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
