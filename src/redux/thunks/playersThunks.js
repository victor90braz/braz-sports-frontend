import axios from "axios";
import { toast } from "react-toastify";
import {
  createPlayerActionCreator,
  deletePlayerActionCreator,
  editPlayerActionCreator,
  loadAllPlayersActionCreator,
  loadPlayerActionCreator,
} from "../features/playerSlice";

const url = process.env.REACT_APP_API_URL;

const getAuthHeader = () => {
  const token = localStorage.getItem("token");
  return { headers: { Authorization: `Bearer ${token}` } };
};

export const loadPlayersThunk = () => async (dispatch) => {
  const { data } = await axios.get(`${url}players/`);

  dispatch(loadAllPlayersActionCreator(data));
};

export const getPlayerThunk = (idPlayer) => async (dispatch) => {
  const {
    data: { player },
  } = await axios.get(`${url}players/${idPlayer}`);

  dispatch(loadPlayerActionCreator(player));
};

export const deletePlayerThunk = (id) => async (dispatch) => {
  const deleteToast = toast.loading("Deleting...", { isLoading: true });

  try {
    const route = `${process.env.REACT_APP_API_URL}players/${id}`;
    await axios.delete(route, getAuthHeader());

    toast.update(deleteToast, {
      isLoading: false,
      autoClose: 100,
    });

    dispatch(deletePlayerActionCreator(id));
  } catch (error) {
    toast.error("Event couldn't be removed, try again later");
  }
};

export const createrThunk = (playerData) => async (dispatch) => {
  await axios.post(`${process.env.REACT_APP_API_URL}players/`, playerData);
  dispatch(createPlayerActionCreator(playerData));
  dispatch(loadPlayerActionCreator(playerData));
};

export const editPlayerThunk = (id, formPlayer) => async (dispatch) => {
  const token = localStorage.getItem("token");

  if (token) {
    const { data } = await axios.put(
      `${process.env.REACT_APP_API_URL}players/${id}`,
      formPlayer,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(editPlayerActionCreator(data));
  }
};
