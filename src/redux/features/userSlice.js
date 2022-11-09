import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    id: "",
    username: "",
    logged: false,
  },
  reducers: {
    login: (user, action) => ({ ...action.payload, logged: true }),
    logout: (user, action) => ({
      id: "",
      username: "",
      logged: false,
    }),
  },
});

export const { login: loginActionCreator, logout: logoutActionCreator } =
  userSlice.actions;

export default userSlice.reducer;
