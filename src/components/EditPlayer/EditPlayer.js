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
  const [formData, setFormData] = useState(player);

  const changeFormDataValue = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const updateFormDataId = formData.id;
  const updateFormData = {
    sport: formData.sport,
    descriptionEvent: formData.descriptionEvent,
    dateEvent: formData.dateEvent,
    image: formData.image,
    username: formData.username,
  };

  const editForm = (event) => {
    event.preventDefault();

    dispatch(editPlayerThunk(updateFormDataId, updateFormData));
    correctAction(`${formData.username} edited`);
    navigate(`/home`);
  };

  return (
    <EditPlayerStyle>
      <div className="container">
        <form autoComplete="off" noValidate onSubmit={editForm}>
          <fieldset>
            <legend>Edit Player Card</legend>

            <div className="mb-3">
              <label htmlFor="sport" className="form-label">
                Sport
              </label>
              <input
                className="form-control"
                id="sport"
                rows="3"
                value={formData.sport}
                onChange={changeFormDataValue}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="descriptionEvent" className="form-label">
                Title Description
              </label>
              <input
                className="form-control"
                id="descriptionEvent"
                rows="3"
                value={formData.descriptionEvent}
                onChange={changeFormDataValue}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="dateEvent" className="form-label">
                Date
              </label>
              <input
                type={"date"}
                className="form-control"
                id="dateEvent"
                rows="3"
                value={formData.dateEvent}
                onChange={changeFormDataValue}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="image" className="form-label">
                Image Url
              </label>
              <input
                type="url"
                className="form-control"
                id="image"
                value={formData.image}
                onChange={changeFormDataValue}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={formData.username}
                onChange={changeFormDataValue}
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
