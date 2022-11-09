import axios from "axios";
import jwtDecode from "jwt-decode";
import { correctAction, wrongAction } from "../../components/modals/modals";
import { loginActionCreator } from "../features/userSlice";

export const registerThunk = (userData) => async () => {
  await axios.post(`${process.env.REACT_APP_API_URL}users/register`, userData);
};

export const loginThunk = (userData) => async (dispatch) => {
  try {
    const { data, status } = await axios.post(
      `${process.env.REACT_APP_API_URL}users/login`,
      userData
    );

    if (status === 200) {
      const { id, username } = jwtDecode(data.token);
      localStorage.setItem("token", data.token);
      correctAction(`Welcome to our page ${username}`);
      dispatch(loginActionCreator({ id, username }));
    } else {
    }
  } catch (error) {
    wrongAction("Incorrect username or password.");
  }
};
