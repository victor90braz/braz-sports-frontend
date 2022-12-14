import React from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import AccessControl from "./pages/AccessControl/AccessControl";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import jwtDecode from "jwt-decode";
import { loginActionCreator } from "./redux/features/userSlice";
import DetailPlayer from "./components/DetailPlayer/DetailPlayer";
import LoginForm from "./components/LoginForm/LoginForm";
import MenuNavigate from "./components/MenuNavigate/MenuNavigate";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import CreatePlayer from "./components/CreatePlayer/CreatePlayer";
import { loadPlayersThunk } from "./redux/thunks/playersThunks";
import Perfil from "./components/Perfil/Perfil";
import ListPlayers from "./components/ListPlayers/ListPlayers";
import AppStyle from "./AppStyle";
import EditPlayerPerfil from "./components/EditPlayerPerfil/EditPlayerPerfil";
import EditDetailPlayer from "./components/EditDetailPlayer/EditDetailPlayer";
import GameEdit from "./components/GameEdit/GameEdit";

function App() {
  const { logged } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!logged && token) {
      const userInfo = jwtDecode(token);

      dispatch(loginActionCreator(userInfo));
      dispatch(loadPlayersThunk());
      navigate("/home");
    }
  }, [dispatch, logged, navigate, token]);

  return (
    <AppStyle>
      {window.location.pathname !== "/login" &&
        window.location.pathname !== "/register" && (
          <>
            <MenuNavigate />
          </>
        )}

      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />

        <Route
          path="/home"
          element={
            <AccessControl>
              <ListPlayers />
            </AccessControl>
          }
        />

        <Route
          path="/perfil/:id"
          element={
            <AccessControl>
              <Perfil />
            </AccessControl>
          }
        />

        <Route
          path="/detail/:id"
          element={
            <AccessControl>
              <DetailPlayer />
            </AccessControl>
          }
        />

        <Route
          path="/create"
          element={
            <AccessControl>
              <CreatePlayer />
            </AccessControl>
          }
        />

        <Route
          path="/gameEdit/:playerId"
          element={
            <AccessControl>
              <GameEdit />
            </AccessControl>
          }
        />

        <Route
          path="/editPerfil/:playerId"
          element={
            <AccessControl>
              <EditPlayerPerfil />
            </AccessControl>
          }
        />

        <Route
          path="/editDetailPlayer/:playerId"
          element={
            <AccessControl>
              <EditDetailPlayer />
            </AccessControl>
          }
        />
      </Routes>
    </AppStyle>
  );
}

export default App;
