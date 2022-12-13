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
  const [formData, setFormData] = useState(player);

  const changeFormDataValue = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const updateFormDataId = formData.id;
  const updateFormData = {
    image: formData.image,
    name: formData.name,
    sport: formData.sport,
    descriptionEvent: formData.descriptionEvent,
    dateEvent: formData.dateEvent,
    timeEvent: formData.timeEvent,
    linkLocation: formData.linkLocation,
    locationEvent: formData.locationEvent,
    latitude: formData.latitude,
    longitude: formData.longitude,
  };

  const editForm = (event) => {
    event.preventDefault();

    dispatch(editPlayerThunk(updateFormDataId, updateFormData));
    correctAction(`${formData.username} edited`);
    navigate(`/detail`);
  };

  return (
    <EditDetailPlayerStyle>
      <div className="container">
        <form autoComplete="off" noValidate onSubmit={editForm}>
          <fieldset>
            <legend>Edit Detail Player</legend>

            <div className="mb-3">
              <label htmlFor="image" className="form-label">
                Image Url
              </label>
              <input
                className="form-control"
                id="image"
                value={formData.image}
                onChange={changeFormDataValue}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={formData.name}
                onChange={changeFormDataValue}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="sport" className="form-label">
                Sport
              </label>
              <input
                type="text"
                className="form-control"
                id="sport"
                value={formData.sport}
                onChange={changeFormDataValue}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="descriptionEvent" className="form-label">
                Title Description
              </label>
              <input
                type="text"
                className="form-control"
                id="descriptionEvent"
                value={formData.descriptionEvent}
                onChange={changeFormDataValue}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="dateEvent" className="form-label">
                Date
              </label>
              <input
                type="date"
                className="form-control"
                id="dateEvent"
                value={formData.dateEvent}
                onChange={changeFormDataValue}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="timeEvent" className="form-label">
                Time
              </label>
              <input
                type="time"
                className="form-control"
                id="timeEvent"
                value={formData.timeEvent}
                onChange={changeFormDataValue}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="linkLocation" className="form-label">
                Location Link
              </label>
              <input
                type="text"
                className="form-control"
                id="linkLocation"
                value={formData.linkLocation}
                onChange={changeFormDataValue}
                placeholder="https://goo.gl/maps/WWvfVSc3geyeW1eu7"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="locationEvent" className="form-label">
                Address Place
              </label>
              <input
                type="text"
                className="form-control"
                id="locationEvent"
                value={formData.locationEvent}
                onChange={changeFormDataValue}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="latitude" className="form-label">
                Location Map (LAT)
              </label>
              <input
                type="text"
                className="form-control"
                id="latitude"
                value={formData.latitude}
                onChange={changeFormDataValue}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="longitude" className="form-label">
                Location Map (LON)
              </label>
              <input
                type="text"
                className="form-control"
                id="longitude"
                value={formData.longitude}
                onChange={changeFormDataValue}
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
