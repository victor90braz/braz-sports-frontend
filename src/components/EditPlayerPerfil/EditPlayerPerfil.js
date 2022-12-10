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
          loser: valuePlayer.loser,
          winner: valuePlayer.winner,
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
            type="text"
            class="form-control"
            id="name"
            rows="3"
            value={valuePlayer.name}
            onChange={editPlayerData}
          />

          <div class="mb-3">
            <label htmlFor="level" class="form-label">
              level:
            </label>
            <textarea
              type="text"
              class="form-control"
              id="level"
              value={valuePlayer.level}
              onChange={editPlayerData}
            />
          </div>

          <div class="mb-3">
            <label htmlFor="loser" class="form-label">
              loser:
            </label>
            <input
              type="text"
              class="form-control"
              id="loser"
              value={valuePlayer.loser}
              onChange={editPlayerData}
            />
          </div>
          <div class="mb-3">
            <label htmlFor="winner" class="form-label">
              winner:
            </label>
            <input
              type="text"
              class="form-control"
              id="winner"
              value={valuePlayer.winner}
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
