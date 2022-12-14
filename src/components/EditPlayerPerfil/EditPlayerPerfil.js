import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { correctAction } from "../../modals/modals";
import { editPlayerThunk } from "../../redux/thunks/playersThunks";
import EditPlayerPerfilStyle from "./EditPlayerPerfilStyle";

const EditPlayerPerfil = () => {
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
    level: formData.level,
    email: formData.email,
    contactNumber: formData.contactNumber,
    sport: formData.sport,
    descriptionEvent: formData.descriptionEvent,
    dateEvent: formData.dateEvent,
    username: formData.username,
  };

  const editForm = (event) => {
    event.preventDefault();

    dispatch(editPlayerThunk(updateFormDataId, updateFormData));
    correctAction(`${formData.name} edited`);
    navigate(`/perfil/${formData.id}`);
  };

  return (
    <EditPlayerPerfilStyle>
      <div className="container">
        <form autoComplete="off" noValidate onSubmit={editForm}>
          <section>
            <h2>Perfil Organizer</h2>
            <div className="mb-3">
              <label htmlFor="image" className="form-label">
                Image Url
              </label>
              <input
                className="form-control"
                id="image"
                rows="3"
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
                rows="3"
                value={formData.name}
                onChange={changeFormDataValue}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="level" className="form-label">
                Your Level
              </label>
              <input
                type="text"
                className="form-control"
                id="level"
                value={formData.level}
                onChange={changeFormDataValue}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="text"
                className="form-control"
                id="email"
                value={formData.email}
                onChange={changeFormDataValue}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="contactNumber" className="form-label">
                Phone Number
              </label>
              <input
                type="text"
                className="form-control"
                id="contactNumber"
                value={formData.contactNumber}
                onChange={changeFormDataValue}
              />
            </div>
          </section>

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
    </EditPlayerPerfilStyle>
  );
};

export default EditPlayerPerfil;
