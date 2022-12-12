import axios from "axios";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";
import { correctAction, wrongAction } from "../../modals/modals";
import { loginActionCreator } from "../features/userSlice";

export const registerThunk = (userData) => async () => {
  await axios.post(`${process.env.REACT_APP_API_URL}users/register`, userData);
};

export const loginThunk = (userData) => async (dispatch) => {
  const loginToast = toast.loading("Loading...", { isLoading: true });
  try {
    const { data, status } = await axios.post(
      `${process.env.REACT_APP_API_URL}users/login`,
      userData
    );

    if (status === 200) {
      const { id, username } = jwtDecode(data.token);
      localStorage.setItem("token", data.token);

      correctAction(`Welcome ${username}`);
      dispatch(loginActionCreator({ id, username }));

      toast.update(loginToast, {
        isLoading: false,
        autoClose: 100,
      });
    } else {
    }
  } catch (error) {
    toast.update(loginToast, {
      isLoading: false,
      autoClose: 100,
    });
    wrongAction("Incorrect username or password.");
  }
};
