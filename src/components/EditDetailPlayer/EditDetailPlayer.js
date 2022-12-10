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
          linkLocation: valuePlayer.linkLocation,
          locationEvent: valuePlayer.locationEvent,
          province: valuePlayer.province,
          country: valuePlayer.country,
          latitude: valuePlayer.latitude,
          longitude: valuePlayer.longitude,
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
          <legend>Edit Detail Player</legend>

          <div className="mb-3">
            <label htmlFor="image" className="form-label">
              image:
            </label>
            <input
              className="form-control"
              id="image"
              value={valuePlayer.image}
              onChange={editPlayerData}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              name:
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={valuePlayer.name}
              onChange={editPlayerData}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="dateEvent" className="form-label">
              dateEvent:
            </label>
            <input
              type="date"
              className="form-control"
              id="dateEvent"
              value={valuePlayer.dateEvent}
              onChange={editPlayerData}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="linkLocation" className="form-label">
              linkLocation:
            </label>
            <input
              type="text"
              className="form-control"
              id="linkLocation"
              value={valuePlayer.linkLocation}
              onChange={editPlayerData}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="locationEvent" className="form-label">
              locationEvent:
            </label>
            <input
              type="text"
              className="form-control"
              id="locationEvent"
              value={valuePlayer.locationEvent}
              onChange={editPlayerData}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="province" className="form-label">
              province:
            </label>
            <input
              type="text"
              className="form-control"
              id="province"
              value={valuePlayer.province}
              onChange={editPlayerData}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="country" className="form-label">
              country:
            </label>
            <input
              type="text"
              className="form-control"
              id="country"
              value={valuePlayer.country}
              onChange={editPlayerData}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="latitude" className="form-label">
              latitude:
            </label>
            <input
              type="text"
              className="form-control"
              id="latitude"
              value={valuePlayer.latitude}
              onChange={editPlayerData}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="longitude" className="form-label">
              longitude:
            </label>
            <input
              type="text"
              className="form-control"
              id="longitude"
              value={valuePlayer.longitude}
              onChange={editPlayerData}
            />
          </div>

          <button type="submit" classNameName="button">
            Set Detail Player
          </button>
        </fieldset>
      </form>
    </EditDetailPlayerStyle>
  );
};

export default EditDetailPlayer;
