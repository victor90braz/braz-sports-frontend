import { createSlice } from "@reduxjs/toolkit";

const eventSlice = createSlice({
  name: "event",
  initialState: {
    allEvents: [],
    event: {},
  },
  reducers: {
    loadAllEvents: (events, action) => ({
      ...events,
      allEvents: action.payload,
    }),

    loadEvent: (event, action) => ({
      ...event,
      event: action.payload,
    }),

    deleteEvent: (getEvents, action) => ({
      ...getEvents,
      allEvents: getEvents.allEvents.filter(
        (getEvent) => getEvent.id !== action.payload
      ),
    }),

    createEvent: (events, action) => ({
      ...events,
      allEvents: [...events.allEvents, action.payload],
    }),

    updateEvent: (event, action) => ({
      ...event,
      allEvents: event.allEvents.map((event) =>
        event.id === action.payload.id ? { ...action.payload } : { ...event }
      ),
    }),

    blankState: (allEvents) => ({ ...allEvents, event: {} }),
  },
});

export const {
  loadAllEvents: loadAllEventsActionCreator,
  loadEvent: loadEventActionCreator,
  deleteEvent: deleteEventActionCreator,
  createEvent: createEventActionCreator,
  updateEvent: updateEventActionCreator,
  blankState: blankStateActionCreator,
} = eventSlice.actions;

export default eventSlice.reducer;
