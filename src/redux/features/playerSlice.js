import { createSlice } from "@reduxjs/toolkit";

const playerSlice = createSlice({
  name: "player",
  initialState: {
    allPlayers: [],
    player: {},
  },
  reducers: {
    loadAllPlayers: (players, action) => ({
      ...players,
      allPlayers: action.payload,
    }),

    loadPlayer: (player, action) => ({
      ...player,
      player: action.payload,
    }),

    blankState: (players) => ({ ...players, player: {} }),

    deletePlayer: (players, action) => ({
      ...players,
      allPlayers: players.allPlayers.filter(
        (player) => player.id !== action.payload
      ),
    }),

    createPlayer: (players, action) => ({
      ...players,
      allPlayers: [...players.allPlayers, action.payload],
    }),

    editPlayer: (player, action) => ({
      ...player,
      allPlayers: player.allPlayers.map((player) =>
        player.id === action.payload.id ? { ...action.payload } : { ...player }
      ),
    }),
  },
});

export const {
  loadAllPlayers: loadAllPlayersActionCreator,
  addPlayer: addPlayerActionCreator,
  deletePlayer: deletePlayerActionCreator,
  editPlayer: editPlayerActionCreator,
  loadPlayer: loadPlayerActionCreator,
  blankState: blankStateActionCreator,
  createPlayer: createPlayerActionCreator,
} = playerSlice.actions;

export default playerSlice.reducer;
