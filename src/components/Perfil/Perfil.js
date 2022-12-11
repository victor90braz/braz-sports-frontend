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

  const cardNames = [
    `Name: ${player.name}`,
    `Level: ${player.level}`,
    `Email: ${player.email}`,
    `Tel: ${player.contactNumber}`,
  ];

  return (
    <PerfilStyle>
      <div className="container-perfil">
        <div className="card">
          <img src={player.image} alt="Person" className="card_image" />

          <div className="card-body">
            {cardNames.map((value, index) => (
              <p className="card_name" key={index}>
                {value}
              </p>
            ))}
          </div>

          <div className="card-footer">
            <NavLink to={`/detail/${id}`} className="btn draw-border">
              EVENT DETAIL
            </NavLink>
            <NavLink to={`/editPerfil/${id}`} className="btn draw-border">
              EDIT PERFIL
            </NavLink>
            <NavLink to={`/create`} className="btn draw-border">
              CREATE A NEW EVENT
            </NavLink>
          </div>
        </div>
      </div>
    </PerfilStyle>
  );
};

export default Perfil;
