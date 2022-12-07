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
          name: valuePlayer.name,
          descriptionEvent: valuePlayer.descriptionEvent,
          dateEvent: valuePlayer.dateEvent,
          timeEvent: valuePlayer.timeEvent,
          image: valuePlayer.image,
        })
      );

      correctAction(`${valuePlayer.name} has been edited successfully`);
      navigate("/home");
    }
  };

  return (
    <EditPlayerStyle>
      <form autoComplete="off" noValidate onSubmit={submitEdit}>
        <fieldset>
          <legend>Edit</legend>
          <div class="mb-3">
            <label for="name" class="form-label">
              Name:
            </label>
            <input
              class="form-control"
              id="name"
              rows="3"
              value={valuePlayer.name}
              onChange={editPlayerData}
            />
          </div>

          <div class="mb-3">
            <label for="descriptionEvent" class="form-label">
              Description:
            </label>
            <textarea
              type="text"
              class="form-control"
              id="descriptionEvent"
              value={valuePlayer.descriptionEvent}
              onChange={editPlayerData}
            />
          </div>
          <div class="mb-3">
            <label for="dateEvent" class="form-label">
              Date:
            </label>
            <input
              type="text"
              class="form-control"
              id="dateEvent"
              value={valuePlayer.dateEvent}
              onChange={editPlayerData}
            />
          </div>
          <div class="mb-3">
            <label for="timeEvent" class="form-label">
              Time:
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
            <label for="image" class="form-label">
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
          <button type="submit" className="button">
            Set Player
          </button>
        </fieldset>
      </form>
    </EditPlayerStyle>
  );
};

export default EditPlayer;
