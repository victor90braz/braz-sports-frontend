import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardEvent from "../../components/CardEvent/CardEvent";
import { loadPlayersThunk } from "../../redux/thunks/playersThunks";
import MyEventsStyled from "./MyEventsStyled";

const MyEvents = () => {
  const { allPlayers } = useSelector((event) => event.player);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPlayersThunk());
  }, [dispatch]);

  return (
    <MyEventsStyled>
      <h2>My Events</h2>
      {allPlayers.map((loadEvent, eventKey) => (
        <CardEvent event={loadEvent} key={eventKey} />
      ))}
    </MyEventsStyled>
  );
};

export default MyEvents;
