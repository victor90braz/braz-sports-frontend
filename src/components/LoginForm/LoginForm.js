import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { wrongAction } from "../../modals/modals";
import { loginThunk } from "../../redux/thunks/userThunks";

import LoginFormStyle from "./LoginFormStyle";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialFormValue = {
    username: "",
    password: "",
  };

  const [formValue, setFormValue] = useState(initialFormValue);

  const handleInputChange = (event) => {
    event.preventDefault();
    setFormValue({ ...formValue, [event.target.id]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formValue.username === "" || formValue.password === "") {
      wrongAction("Please fill in the required field (*)");
      return;
    }

    await dispatch(loginThunk(formValue));
    navigate("/home");
  };

  return (
    <LoginFormStyle>
      <div className="container">
        <div>
          <img src="./top11-logo.png" alt="" className="brand-logo" />
        </div>

        <form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <div className="inputs">
            <label htmlFor="username">* USERNAME</label>
            <input
              type="text"
              id="username"
              onChange={handleInputChange}
              value={formValue.username}
              required
            />
            <label htmlFor="username">* PASSWORD</label>
            <input
              type="password"
              id="password"
              onChange={handleInputChange}
              value={formValue.password}
              required
            />
            <button type="submit">LOGIN</button>
          </div>
        </form>

        <div className="register">
          <span>
            Don't have an account? Please
            <NavLink to={"/register"} style={{ textDecoration: "none" }}>
              <small>REGISTER</small>
            </NavLink>
          </span>
        </div>
      </div>
    </LoginFormStyle>
  );
};

export default LoginForm;
