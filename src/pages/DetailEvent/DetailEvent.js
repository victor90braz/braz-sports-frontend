import EventDescription from "../../components/EventDescription/EventDescription";
import PersonalCard from "../../components/PersonalCard/PersonalCard";
import StatusEvent from "../../components/StatusEvent/StatusEvent";

import DetailEventStyle from "./DetailEventStyle";

const DetailEvent = () => {
  const imageBackground =
    "https://img.freepik.com/vetores-gratis/silhueta-de-uma-torcida-empolgada-contra-uma-bola-de-futebol_1048-13959.jpg?w=2000";

  return (
    <DetailEventStyle>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div className="card">
            <img src={imageBackground} className="card-img-top" alt="..." />
            <div className="card-body">
              <StatusEvent />
              <EventDescription />
              <PersonalCard />
            </div>
          </div>
        </div>
      </div>
    </DetailEventStyle>
  );
};

export default DetailEvent;
