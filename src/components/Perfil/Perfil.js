import PerfilStyle from "./PerfilStyle";
import { FcLike } from "react-icons/fc";
import { getPlayerThunk } from "../../redux/thunks/playersThunks";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Perfil = () => {
  const { id } = useParams();
  const { player } = useSelector((state) => state.player);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPlayerThunk(id));
  }, [dispatch, id]);

  return (
    <PerfilStyle>
      <div className="container d-flex justify-content-center align-items-center">
        <div className="card">
          <div className="upper">
            <img
              src="https://i.imgur.com/Qtrsrk5.jpg"
              className="img-fluid"
              alt="Cover Perfil"
            />
          </div>

          <div className="user text-center">
            <div className="profile">
              <img
                src="https://i.imgur.com/JgYD2nQ.jpg"
                className="rounded-circle"
                width="80"
                alt="User Perfil"
              />
            </div>
          </div>

          <div className="mt-5 text-center">
            <h4 className="mb-0">{player.name}</h4>
            <span className="text-muted d-block mb-2">{player.level}</span>

            <FcLike size={40} />

            <div className="d-flex justify-content-between align-items-center mt-4 px-4">
              <div className="stats">
                <h6 className="mb-0">Rate</h6>
                <span>{player.averageRate}</span>
              </div>

              <div className="stats">
                <h6 className="mb-0">Games</h6>
                <span>{player.loser}</span>
              </div>

              <div className="stats">
                <h6 className="mb-0">Winnings</h6>
                <span>{player.winner}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PerfilStyle>
  );
};

export default Perfil;
