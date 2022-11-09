import axios from "axios";
import {
  createPlayerActionCreator,
  deletePlayerActionCreator,
  editPlayerActionCreator,
  loadAllPlayersActionCreator,
  loadPlayerActionCreator,
} from "../features/playerSlice";

const url = process.env.REACT_APP_API_URL;

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
  const token = localStorage.getItem("token");

  const { status } = await axios.delete(
    `${process.env.REACT_APP_API_URL}players/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (status === 200) {
    dispatch(deletePlayerActionCreator(id));
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
