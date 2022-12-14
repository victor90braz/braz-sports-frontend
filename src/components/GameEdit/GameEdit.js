import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { correctAction } from "../../modals/modals";
import { editPlayerThunk } from "../../redux/thunks/playersThunks";
import GameEditStyle from "./GameEditStyle";

const GameEdit = () => {
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
    username: formData.username,
  };

  const editForm = (event) => {
    event.preventDefault();

    dispatch(editPlayerThunk(updateFormDataId, updateFormData));
    correctAction(`${formData.name} edited`);
    navigate(`/home`);
  };

  return (
    <GameEditStyle>
      <div className="container">
        <form autoComplete="off" noValidate onSubmit={editForm}>
          <section>
            <h2>Card Event</h2>

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
          </section>

          <button type="submit" className="btn">
            Update Data
          </button>
        </form>
      </div>
    </GameEditStyle>
  );
};

export default GameEdit;
