import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardEvent from "../../components/CardEvent/CardEvent";
import { loadEventsThunk } from "../../redux/thunks/eventsThunk/eventsThunk";

import MyEventsStyled from "./MyEventsStyled";

const MyEvents = () => {
  const { allEvents } = useSelector((selectEvent) => selectEvent.event);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadEventsThunk());
  }, [dispatch]);

  return (
    <MyEventsStyled>
      <h2>My Events</h2>
      {allEvents.map((loadEvent, eventKey) => (
        <CardEvent event={loadEvent} key={eventKey} />
      ))}
    </MyEventsStyled>
  );
};

export default MyEvents;
