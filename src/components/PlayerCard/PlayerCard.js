import { useNavigate } from "react-router-dom";

import PlayerCardStyles from "./PlayerCardStyles";

const PlayerCard = ({
  player: { id, name, descriptionEvent, dateEvent, timeEvent, level, gender },
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
        <span className="card-header">Event</span>
        <div className="card-body">
          <h5>{descriptionEvent}</h5>
          <p>{gender}</p>
          <p>{level}</p>
          <p>{dateEvent}</p>
          <p>{timeEvent}</p>
          <p>{name}</p>
          <div>
            <button onClick={handleDetail}>See Details</button>
            <button onClick={handlePerfil}>See Perfil</button>
          </div>
        </div>
      </div>
    </PlayerCardStyles>
  );
};

export default PlayerCard;
