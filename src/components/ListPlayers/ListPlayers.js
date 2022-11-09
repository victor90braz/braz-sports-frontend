import { useSelector } from "react-redux";
import PlayerCard from "../PlayerCard/PlayerCard";
import ListPlayersStyles from "./ListPlayersStyles";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadPlayersThunk } from "../../redux/thunks/playersThunks";
import { imagesPath } from "../../assets/imagesPath";

const ListPlayers = () => {
  const { allPlayers } = useSelector((status) => status.player);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPlayersThunk());
  }, [dispatch]);

  return (
    <ListPlayersStyles>
      <div>
        <img src={imagesPath.favicon} alt="dasd" width={200} />
      </div>

      <section>
        {allPlayers.map((player, index) => (
          <PlayerCard player={player} key={index} />
        ))}
      </section>
    </ListPlayersStyles>
  );
};

export default ListPlayers;
