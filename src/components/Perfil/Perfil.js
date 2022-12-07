import PerfilStyle from "./PerfilStyle";
import { getPlayerThunk } from "../../redux/thunks/playersThunks";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";

const Perfil = () => {
  const { id } = useParams();
  const { player } = useSelector((state) => state.player);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPlayerThunk(id));
  }, [dispatch, id]);

  return (
    <PerfilStyle>
      <div className="container-perfil">
        <div className="card">
          <img src={player.image} alt="Person" className="card__image" />
          <p className="card__name">{player.name}</p>
          <p className="card__name">{player.level}</p>
          <div className="grid-container">
            <div className="grid-child-posts">{player.loser} Loser</div>
            <div className="grid-child-followers">{player.winner} Winner</div>
          </div>
          <ul className="social-icons">
            <li>
              <a href="/#">
                <i className="fa fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="/#">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/victor-braz/"
                target={"_blank"}
                rel="noreferrer"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>
          </ul>
          <NavLink to="/create">
            <button className="btn draw-border">CREATE NEW EVENT</button>
          </NavLink>
        </div>
      </div>
    </PerfilStyle>
  );
};

export default Perfil;
