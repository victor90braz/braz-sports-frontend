import PersonalCardStyle from "./PersonalCardStyle";

const PersonalCard = () => {
  return (
    <PersonalCardStyle>
      <div className="card">
        <div>
          <img
            src="https://gcdn.emol.cl/futbol-internacional/files/2022/10/alishalehmann-fotos2.jpg"
            alt="Perfil of user"
          />
        </div>
        <div className="card-body">
          <ul>
            <li>Victor</li>
            <li>+34 722 888 222</li>
            <li>icon1 icon2</li>
          </ul>
        </div>
      </div>
    </PersonalCardStyle>
  );
};

export default PersonalCard;
