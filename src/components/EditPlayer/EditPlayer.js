import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { correctAction } from "../../modals/modals";
import { editPlayerThunk } from "../../redux/thunks/playersThunks";
import EditPlayerStyle from "./EditPlayerStyle";

const EditPlayer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { player } = useSelector((state) => state.player);

  const [valuePlayer, setFormEditPlayer] = useState(player);

  const editPlayerData = (event) => {
    setFormEditPlayer({
      ...valuePlayer,
      [event.target.id]: event.target.value,
    });
  };

  const submitEdit = (event) => {
    event.preventDefault();

    if (player) {
      dispatch(
        editPlayerThunk(valuePlayer.id, {
          sport: valuePlayer.sport,
          descriptionEvent: valuePlayer.descriptionEvent,
          dateEvent: valuePlayer.dateEvent,
          image: valuePlayer.image,
          username: valuePlayer.username,
        })
      );

      correctAction(`${valuePlayer.username} has been edited successfully`);
      navigate("/home");
    }
  };

  return (
    <EditPlayerStyle>
      <div className="container">
        <form autoComplete="off" noValidate onSubmit={submitEdit}>
          <fieldset>
            <legend>Edit Player Card</legend>
            <div className="mb-3">
              <label htmlFor="sport" className="form-label">
                sport:
              </label>
              <input
                className="form-control"
                id="sport"
                rows="3"
                value={valuePlayer.sport}
                onChange={editPlayerData}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="descriptionEvent" className="form-label">
                descriptionEvent:
              </label>
              <input
                className="form-control"
                id="descriptionEvent"
                rows="3"
                value={valuePlayer.descriptionEvent}
                onChange={editPlayerData}
              />
            </div>

            <label htmlFor="dateEvent" className="form-label">
              dateEvent:
            </label>
            <input
              type={"date"}
              className="form-control"
              id="dateEvent"
              rows="3"
              value={valuePlayer.dateEvent}
              onChange={editPlayerData}
            />

            <div className="mb-3">
              <label htmlFor="image" className="form-label">
                image:
              </label>
              <textarea
                type="text"
                className="form-control"
                id="image"
                value={valuePlayer.image}
                onChange={editPlayerData}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="timeEvent" className="form-label">
                time:
              </label>
              <input
                type="time"
                className="form-control"
                id="timeEvent"
                value={valuePlayer.time}
                onChange={editPlayerData}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="image" className="form-label">
                Image:
              </label>
              <input
                type="text"
                className="form-control"
                id="image"
                value={valuePlayer.image}
                onChange={editPlayerData}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                username:
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={valuePlayer.username}
                onChange={editPlayerData}
              />
            </div>
            <button type="submit" className="button">
              Set Player Card
            </button>
          </fieldset>
        </form>
      </div>
    </EditPlayerStyle>
  );
};

export default EditPlayer;
