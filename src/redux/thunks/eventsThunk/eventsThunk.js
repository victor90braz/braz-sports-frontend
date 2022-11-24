import axios from "axios";
import {
  createEventActionCreator,
  deleteEventActionCreator,
  loadAllEventsActionCreator,
  loadEventActionCreator,
  updateEventActionCreator,
} from "../../features/sliceEvents/sliceEvents";

const url = process.env.REACT_APP_API_URL;

export const loadEventsThunk = () => async (dispatch) => {
  const { data } = await axios.get(`${url}user/`);

  dispatch(loadAllEventsActionCreator(data));
};

export const getEventThunk = (idEvent) => async (dispatch) => {
  const {
    data: { event },
  } = await axios.get(`${url}user/${idEvent}`);

  dispatch(loadEventActionCreator(event));
};

export const deleteEventThunk = (idEvent) => async (dispatch) => {
  const token = localStorage.getItem("token");

  const { findId } = await axios.delete(
    `${process.env.REACT_APP_API_URL}user/${idEvent}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (findId === 200) {
    dispatch(deleteEventActionCreator(idEvent));
  }
};

export const createEventThunk = (event) => async (dispatch) => {
  await axios.post(`${process.env.REACT_APP_API_URL}user/`, event);
  dispatch(createEventActionCreator(event));
  dispatch(loadEventActionCreator(event));
};

export const updateEventThunk =
  (eventId, updateDataEvent) => async (dispatch) => {
    const token = localStorage.getItem("token");

    if (token) {
      const { dataEvent } = await axios.put(
        `${process.env.REACT_APP_API_URL}user/${eventId}`,
        updateDataEvent,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(updateEventActionCreator(dataEvent));
    }
  };
