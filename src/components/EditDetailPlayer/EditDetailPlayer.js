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
          timeEvent: valuePlayer.timeEvent,
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
      <div className="container">
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
              <label htmlFor="timeEvent" className="form-label">
                timeEvent:
              </label>
              <input
                type="time"
                className="form-control"
                id="timeEvent"
                value={valuePlayer.timeEvent}
                onChange={editPlayerData}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="linkLocation" className="form-label">
                link to share:
              </label>
              <input
                type="text"
                className="form-control"
                id="linkLocation"
                value={valuePlayer.linkLocation}
                onChange={editPlayerData}
                placeholder="https://goo.gl/maps/WWvfVSc3geyeW1eu7"
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
                google map (latitude):
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
                google map (longitude):
              </label>
              <input
                type="text"
                className="form-control"
                id="longitude"
                value={valuePlayer.longitude}
                onChange={editPlayerData}
              />
            </div>

            <button type="submit" className="button">
              Set Detail Player
            </button>
          </fieldset>
        </form>
      </div>
    </EditDetailPlayerStyle>
  );
};

export default EditDetailPlayer;
