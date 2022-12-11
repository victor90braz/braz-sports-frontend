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
          level: valuePlayer.level,
          email: valuePlayer.email,
          contactNumber: valuePlayer.contactNumber,
        })
      );

      correctAction(
        `Perfil of ${valuePlayer.username} has been edited successfully`
      );
      navigate("/home");
    }
  };

  return (
    <EditPlayerPerfilStyle>
      <form autoComplete="off" noValidate onSubmit={submitEdit}>
        <fieldset>
          <legend>Edit Player Perfil</legend>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">
              image:
            </label>
            <input
              className="form-control"
              id="image"
              rows="3"
              value={valuePlayer.image}
              onChange={editPlayerData}
            />
          </div>

          <label htmlFor="name" className="form-label">
            name:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            rows="3"
            value={valuePlayer.name}
            onChange={editPlayerData}
          />

          <div className="mb-3">
            <label htmlFor="level" className="form-label">
              level:
            </label>
            <input
              type="text"
              className="form-control"
              id="level"
              value={valuePlayer.level}
              onChange={editPlayerData}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              email:
            </label>
            <input
              type="text"
              className="form-control"
              id="email"
              value={valuePlayer.email}
              onChange={editPlayerData}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="contactNumber" className="form-label">
              contactNumber:
            </label>
            <input
              type="text"
              className="form-control"
              id="contactNumber"
              value={valuePlayer.contactNumber}
              onChange={editPlayerData}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="instagram" className="form-label">
              instagram:
            </label>
            <input
              type="text"
              className="form-control"
              id="instagram"
              value={valuePlayer.instagram}
              onChange={editPlayerData}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="twitter" className="form-label">
              twitter:
            </label>
            <input
              type="text"
              className="form-control"
              id="twitter"
              value={valuePlayer.twitter}
              onChange={editPlayerData}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="linkedin" className="form-label">
              linkedin:
            </label>
            <input
              type="text"
              className="form-control"
              id="linkedin"
              value={valuePlayer.linkedin}
              onChange={editPlayerData}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="github" className="form-label">
              github:
            </label>
            <input
              type="text"
              className="form-control"
              id="github"
              value={valuePlayer.github}
              onChange={editPlayerData}
            />
          </div>

          <button type="submit" className="button">
            Set Player Perfil
          </button>
        </fieldset>
      </form>
    </EditPlayerPerfilStyle>
  );
};

export default EditPlayerPerfil;
