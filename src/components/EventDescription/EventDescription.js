import EventDescriptionStyle from "./EventDescriptionStyle";

const EventDescription = () => {
  return (
    <EventDescriptionStyle>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <ul>
                <li>Open Level</li>
                <li>Plaja de Bogatel</li>
                <li>5€</li>
                <li>19-11-22</li>
                <li>07:30</li>
              </ul>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis, dolorem tempora quae illo in qui. Consequuntur
                dolore aspernatur amet repellat molestias mollitia nesciunt,
                possimus quo consectetur nostrum temporibus, voluptates earum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </EventDescriptionStyle>
  );
};

export default EventDescription;
