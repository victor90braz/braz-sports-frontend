import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPlayersThunk } from "../../redux/thunks/playersThunks";
import PlayerCard from "../PlayerCard/PlayerCard";
import Search from "../Search/Search";
import ListPlayersStyles from "./ListPlayersStyles";

const ListPlayers = () => {
  const { allPlayers } = useSelector((status) => status.player);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPlayersThunk());
  }, [dispatch]);

  const handleList = () => {
    const infoList = document.getElementById("infoList");

    infoList.style.display === "none"
      ? (infoList.style.display = "block")
      : (infoList.style.display = "none");
  };

  return (
    <ListPlayersStyles>
      <div className="container-info">
        <button onClick={handleList} className="btn btn-info">
          Search...
        </button>

        <div id="infoList">
          <Search />
        </div>
      </div>

      <div className="container-players">
        {allPlayers.map((player, keyPlayer) => (
          <PlayerCard player={player} key={keyPlayer} />
        ))}
      </div>
    </ListPlayersStyles>
  );
};

export default ListPlayers;
