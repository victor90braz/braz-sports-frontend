import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logoutActionCreator } from "../../redux/features/userSlice";
import LogOutStyle from "./LogOutStyle";
import { AiOutlineLogout } from "react-icons/ai";

const LogOut = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const logOut = () => {
    localStorage.removeItem("token");
    dispatch(logoutActionCreator());
    Navigate("/login");
  };
  return (
    <LogOutStyle>
      <NavLink to="/login">
        <button
          onClick={logOut}
          className="logout"
          style={{
            background: "none",
            color: "red",
            border: "none",
            padding: "0",
          }}
        >
          <AiOutlineLogout size={40} />
          Logout
        </button>
      </NavLink>
    </LogOutStyle>
  );
};

export default LogOut;
