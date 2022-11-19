import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardEvent from "../../components/CardEvent/CardEvent";
import { loadPlayersThunk } from "../../redux/thunks/playersThunks";
import GamesStyled from "./GamesStyled";

const Games = () => {
  const { allPlayers } = useSelector((event) => event.player);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPlayersThunk());
  }, [dispatch]);

  return (
    <GamesStyled>
      <h2>Games</h2>
      {allPlayers.map((loadEvent, eventKey) => (
        <CardEvent event={loadEvent} key={eventKey} />
      ))}
    </GamesStyled>
  );
};

export default Games;
