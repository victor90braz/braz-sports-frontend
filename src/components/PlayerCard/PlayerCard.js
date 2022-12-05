import { useNavigate } from "react-router-dom";

import PlayerCardStyles from "./PlayerCardStyles";

const PlayerCard = ({
  player: {
    id,
    image,
    descriptionEvent,
    name,
    dateEvent,
    timeEvent,
    level,
    gender,
  },
}) => {
  const navigate = useNavigate();

  const handleDetail = () => {
    navigate(`/detail/${id}`);
  };

  const handlePerfil = () => {
    navigate(`/perfil/${id}`);
  };

  return (
    <PlayerCardStyles>
      <div className="card">
        <button onClick={handlePerfil} className="wrapp-image">
          <p>{name}</p>
          <img src={image} className="card-img-top" alt="..." />
        </button>
        <div className="card-body">
          <h5 className="card-title">{gender}</h5>
          <p className="card-text">{descriptionEvent}</p>
          <p>{level}</p>
          <p>{dateEvent}</p>
          <p>{timeEvent}</p>

          <button onClick={handleDetail}>See Details</button>
        </div>
      </div>
    </PlayerCardStyles>
  );
};

export default PlayerCard;
