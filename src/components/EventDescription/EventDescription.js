import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadEventsThunk } from "../../redux/thunks/eventsThunk/eventsThunk";

import EventDescriptionStyle from "./EventDescriptionStyle";

const EventDescription = () => {
  const { allEvents } = useSelector((selectEvent) => selectEvent.event);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadEventsThunk());
  }, [dispatch]);

  return (
    <EventDescriptionStyle>
      {allEvents.map((event, index) => (
        <div className="row row-cols-1 row-cols-md-2 g-4" key={index}>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <ul>
                  <li>{event.level}</li>
                  <li>{event.locationEvent}</li>
                  <li>{event.payment}€</li>
                  <li>{event.dateEvent}</li>
                  <li>{event.time}</li>
                </ul>
                <p>{event.descriptionEvent}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </EventDescriptionStyle>
  );
};

export default EventDescription;
