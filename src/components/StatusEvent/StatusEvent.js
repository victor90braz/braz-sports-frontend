import { useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import StatusEventStyle from "./StatusEventStyle";

const StatusEvent = () => {
  const [state, setState] = useState({ shown: true });

  return (
    <StatusEventStyle>
      <div onClick={() => setState({ shown: !state.shown })}>
        {state.shown ? (
          <div>
            <span>You are not confirmed in the event</span>
            <BsCheckCircleFill size={30} color="red" />
          </div>
        ) : (
          <div>
            <span>You are confirmed in the event</span>
            <BsCheckCircleFill size={30} color="green" />
          </div>
        )}
      </div>
    </StatusEventStyle>
  );
};

export default StatusEvent;
