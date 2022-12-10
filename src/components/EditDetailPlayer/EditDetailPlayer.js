import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { correctAction } from "../../modals/modals";
import { editPlayerThunk } from "../../redux/thunks/playersThunks";
import EditDetailPlayerStyle from "./EditDetailPlayerStyle";

const EditDetailPlayer = () => {
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
          image: valuePlayer.image,
          name: valuePlayer.name,
          sport: valuePlayer.sport,
          dateEvent: valuePlayer.dateEvent,
          locationEvent: valuePlayer.locationEvent,
          province: valuePlayer.province,
          country: valuePlayer.country,
        })
      );

      correctAction(`${valuePlayer.username} has been edited successfully`);
      navigate("/home");
    }
  };

  return (
    <EditDetailPlayerStyle>
      <form autoComplete="off" noValidate onSubmit={submitEdit}>
        <fieldset>
          <legend>Edit</legend>
          <div class="mb-3">
            <label htmlFor="image" class="form-label">
              image:
            </label>
            <input
              class="form-control"
              id="image"
              rows="3"
              value={valuePlayer.image}
              onChange={editPlayerData}
            />
          </div>

          <label htmlFor="name" class="form-label">
            name:
          </label>
          <input
            type={"date"}
            class="form-control"
            id="name"
            rows="3"
            value={valuePlayer.name}
            onChange={editPlayerData}
          />

          <div class="mb-3">
            <label htmlFor="dateEvent" class="form-label">
              dateEvent:
            </label>
            <textarea
              type="text"
              class="form-control"
              id="dateEvent"
              value={valuePlayer.dateEvent}
              onChange={editPlayerData}
            />
          </div>

          <div class="mb-3">
            <label htmlFor="locationEvent" class="form-label">
              locationEvent:
            </label>
            <input
              type="text"
              class="form-control"
              id="locationEvent"
              value={valuePlayer.locationEvent}
              onChange={editPlayerData}
            />
          </div>

          <div class="mb-3">
            <label htmlFor="province" class="form-label">
              province:
            </label>
            <input
              type="text"
              class="form-control"
              id="province"
              value={valuePlayer.province}
              onChange={editPlayerData}
            />
          </div>

          <div class="mb-3">
            <label htmlFor="country" class="form-label">
              country:
            </label>
            <input
              type="text"
              class="form-control"
              id="country"
              value={valuePlayer.country}
              onChange={editPlayerData}
            />
          </div>

          <button type="submit" className="button">
            Set Player
          </button>
        </fieldset>
      </form>
    </EditDetailPlayerStyle>
  );
};

export default EditDetailPlayer;
