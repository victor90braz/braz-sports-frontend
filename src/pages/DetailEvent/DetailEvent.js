import EventDescription from "../../components/EventDescription/EventDescription";
import PersonalCard from "../../components/PersonalCard/PersonalCard";
import DetailEventStyle from "./DetailEventStyle";

const DetailEvent = () => {
  return (
    <DetailEventStyle>
      <EventDescription className="container-description" />
      <PersonalCard />
    </DetailEventStyle>
  );
};

export default DetailEvent;
