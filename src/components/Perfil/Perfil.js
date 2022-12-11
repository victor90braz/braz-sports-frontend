import PerfilStyle from "./PerfilStyle";
import { getPlayerThunk } from "../../redux/thunks/playersThunks";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { GrInstagram } from "react-icons/gr";
import { AiOutlineLinkedin, AiFillTwitterCircle } from "react-icons/ai";
import { DiGithubBadge } from "react-icons/di";

const Perfil = () => {
  const { id } = useParams();
  const { player } = useSelector((state) => state.player);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getPlayerThunk(id));
  }, [dispatch, id]);

  const handleDetail = () => {
    navigate(`/detail/${id}`);
  };

  const handleEdit = () => {
    navigate(`/editPerfil/${id}`);
  };

  return (
    <PerfilStyle>
      <div className="container-perfil">
        <div className="card">
          <img src={player.image} alt="Person" className="card__image" />
          <p className="card__name">{player.name}</p>
          <p className="card__name">{player.level}</p>
          <p className="card__name">{player.email}</p>
          <p className="card__name">{player.contactNumber}</p>

          <a href={player.instagram} target={"_blank"} rel="noreferrer">
            <GrInstagram size={35} />
          </a>

          <a href={player.twitter} target={"_blank"} rel="noreferrer">
            <AiFillTwitterCircle size={40} />
          </a>

          <a href={player.linkedin} target={"_blank"} rel="noreferrer">
            <AiOutlineLinkedin size={40} />
          </a>

          <a href={player.github} target={"_blank"} rel="noreferrer">
            <DiGithubBadge size={45} />
          </a>

          <NavLink to="/create">
            <button className="btn draw-border">CREATE A NEW EVENT</button>
          </NavLink>

          <button className="btn draw-border" onClick={handleDetail}>
            EVENT DETAIL
          </button>
          <button className="btn draw-border" onClick={handleEdit}>
            <FiEdit size={30} className="icon_edit" />
          </button>
        </div>
      </div>
    </PerfilStyle>
  );
};

export default Perfil;
