import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import playerReducer from "../features/playerSlice";

const store = configureStore({
  reducer: { user: userReducer, player: playerReducer },
});

export default store;
