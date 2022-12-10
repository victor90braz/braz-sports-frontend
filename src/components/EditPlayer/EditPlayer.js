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
      <form autoComplete="off" noValidate onSubmit={submitEdit}>
        <fieldset>
          <legend>Edit Player Card</legend>
          <div class="mb-3">
            <label htmlFor="sport" class="form-label">
              sport:
            </label>
            <input
              class="form-control"
              id="sport"
              rows="3"
              value={valuePlayer.sport}
              onChange={editPlayerData}
            />
          </div>

          <div class="mb-3">
            <label htmlFor="descriptionEvent" class="form-label">
              descriptionEvent:
            </label>
            <input
              class="form-control"
              id="descriptionEvent"
              rows="3"
              value={valuePlayer.descriptionEvent}
              onChange={editPlayerData}
            />
          </div>

          <label htmlFor="dateEvent" class="form-label">
            dateEvent:
          </label>
          <input
            type={"date"}
            class="form-control"
            id="dateEvent"
            rows="3"
            value={valuePlayer.dateEvent}
            onChange={editPlayerData}
          />

          <div class="mb-3">
            <label htmlFor="image" class="form-label">
              image:
            </label>
            <textarea
              type="text"
              class="form-control"
              id="image"
              value={valuePlayer.image}
              onChange={editPlayerData}
            />
          </div>

          <div class="mb-3">
            <label htmlFor="timeEvent" class="form-label">
              time:
            </label>
            <input
              type="time"
              class="form-control"
              id="timeEvent"
              value={valuePlayer.time}
              onChange={editPlayerData}
            />
          </div>
          <div class="mb-3">
            <label htmlFor="image" class="form-label">
              Image:
            </label>
            <input
              type="text"
              class="form-control"
              id="image"
              value={valuePlayer.image}
              onChange={editPlayerData}
            />
          </div>

          <div class="mb-3">
            <label htmlFor="username" class="form-label">
              username:
            </label>
            <input
              type="text"
              class="form-control"
              id="username"
              value={valuePlayer.username}
              onChange={editPlayerData}
            />
          </div>
          <button type="submit" className="button">
            Set Player
          </button>
        </fieldset>
      </form>
    </EditPlayerStyle>
  );
};

export default EditPlayer;
