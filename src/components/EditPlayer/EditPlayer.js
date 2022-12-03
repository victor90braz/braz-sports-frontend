import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { correctAction } from "../../modals/modals";
import { blankStateActionCreator } from "../../redux/features/playerSlice";
import { editPlayerThunk } from "../../redux/thunks/playersThunks";
import EditPlayerStyle from "./EditPlayerStyle";

const EditPlayer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { player } = useSelector((state) => state.player);

  const [valuePlayer, setFormEditPlayer] = useState(player);

  const buttonDisabled =
    valuePlayer.level === "" ||
    valuePlayer.name === "" ||
    valuePlayer.locationEvent === "" ||
    valuePlayer.payment === "" ||
    valuePlayer.dateEvent === "" ||
    valuePlayer.time === "" ||
    valuePlayer.descriptionEvent === "";

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
          level: valuePlayer.level,
          name: valuePlayer.name,
          locationEvent: valuePlayer.locationEvent,
          payment: valuePlayer.payment,
          dateEvent: valuePlayer.dateEvent,
          time: valuePlayer.time,
          descriptionEvent: valuePlayer.descriptionEvent,
        })
      );

      dispatch(blankStateActionCreator());
      correctAction(`${valuePlayer.name} has been edited successfully`);
      navigate("/home");
    }
  };

  return (
    <EditPlayerStyle>
      <form autoComplete="off" noValidate onSubmit={submitEdit}>
        <h2>EDIT PLAYER</h2>

        <label htmlFor="level">level</label>
        <input
          id="level"
          type="text"
          value={valuePlayer.level}
          onChange={editPlayerData}
          className="inputbox"
          name="level"
          required
        />

        <label htmlFor="name">name</label>
        <input
          id="name"
          type="text"
          value={valuePlayer.name}
          onChange={editPlayerData}
          className="inputbox"
          name="name"
          required
        />

        <label htmlFor="locationEvent">locationEvent</label>
        <input
          id="locationEvent"
          type="text"
          value={valuePlayer.locationEvent}
          onChange={editPlayerData}
          className="inputbox"
          name="locationEvent"
          required
        />

        <label htmlFor="payment">payment</label>
        <input
          id="payment"
          type="text"
          value={valuePlayer.payment}
          onChange={editPlayerData}
          className="inputbox"
          name="payment"
          required
        />

        <label htmlFor="dateEvent">dateEvent</label>
        <input
          id="dateEvent"
          type="text"
          value={valuePlayer.dateEvent}
          onChange={editPlayerData}
          className="inputbox"
          name="dateEvent"
          required
        />

        <label htmlFor="time">time</label>
        <input
          id="time"
          type="time"
          value={valuePlayer.time}
          onChange={editPlayerData}
          className="inputbox"
          name="time"
          required
        />

        <label htmlFor="descriptionEvent">descriptionEvent</label>
        <input
          id="descriptionEvent"
          type="text"
          value={valuePlayer.descriptionEvent}
          onChange={editPlayerData}
          className="inputbox"
          name="descriptionEvent"
          required
        />

        <button disabled={buttonDisabled} type="submit" className="button">
          Set Player
        </button>
      </form>
    </EditPlayerStyle>
  );
};

export default EditPlayer;
