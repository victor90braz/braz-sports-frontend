import PerfilStyle from "./PerfilStyle";
import { FcLike } from "react-icons/fc";

const Perfil = () => {
  return (
    <PerfilStyle>
      <div className="container d-flex justify-content-center align-items-center">
        <div className="card">
          <div className="upper">
            <img src="https://i.imgur.com/Qtrsrk5.jpg" className="img-fluid" />
          </div>

          <div className="user text-center">
            <div className="profile">
              <img
                src="https://i.imgur.com/JgYD2nQ.jpg"
                className="rounded-circle"
                width="80"
              />
            </div>
          </div>

          <div className="mt-5 text-center">
            <h4 className="mb-0">Victor Braz</h4>
            <span className="text-muted d-block mb-2">Experienced</span>

            <FcLike size={40} />

            <div className="d-flex justify-content-between align-items-center mt-4 px-4">
              <div className="stats">
                <h6 className="mb-0">Points</h6>
                <span>8,797</span>
              </div>

              <div className="stats">
                <h6 className="mb-0">Games</h6>
                <span>142</span>
              </div>

              <div className="stats">
                <h6 className="mb-0">Winnings</h6>
                <span>129</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PerfilStyle>
  );
};

export default Perfil;
