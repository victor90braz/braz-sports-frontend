import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { correctAction, wrongAction } from "../../modals/modals";
import { registerThunk } from "../../redux/thunks/userThunks";
import RegisterFormStyle from "./RegisterFormStyle";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialFormValue = {
    name: "",
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

    if (
      formValue.name === "" ||
      formValue.username === "" ||
      formValue.password === ""
    ) {
      wrongAction("Please fill in the required field (*)");
      return;
    }
    if (formValue.password.length < 9) {
      wrongAction("Your password must be at least 9 characters long.");
      return;
    }
    await dispatch(registerThunk(formValue));
    correctAction(`${formValue.name} has been registered`);
    navigate("/home");
  };

  return (
    <RegisterFormStyle>
      <div className="container">
        <div>
          <img src="./top11-logo.png" alt="" className="brand-logo" />
        </div>

        <form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <div className="inputs">
            <label htmlFor="username">* NAME</label>
            <input
              type="text"
              id="name"
              onChange={handleInputChange}
              value={formValue.name}
              required
            />

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
            <button type="submit">REGISTER</button>
          </div>
        </form>
        <div className="login">
          <span>
            If you have already registered, please
            <NavLink to={"/login"} style={{ textDecoration: "none" }}>
              <small>LOGIN</small>
            </NavLink>
          </span>
        </div>
      </div>
    </RegisterFormStyle>
  );
};

export default RegisterForm;
