import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createrThunk } from "../../redux/thunks/playersThunks";
import CreatePlayerStyle from "./CreatePlayerStyle";
import { correctAction, wrongAction } from "../../modals/modals";

const CreatePlayer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const blankFields = {
    sport: "",
    descriptionEvent: "",
    dateEvent: "",
    image: "",
    username: "",
    name: "",
  };

  const [formPlayer, setFormPlayer] = useState(blankFields);

  const buttonDisabled =
    formPlayer.sport === "" ||
    formPlayer.descriptionEvent === "" ||
    formPlayer.dateEvent === "" ||
    formPlayer.image === "" ||
    formPlayer.username === "" ||
    formPlayer.name === "" ||
    formPlayer.email === "" ||
    formPlayer.loser === "" ||
    formPlayer.winner === "" ||
    formPlayer.level === "" ||
    formPlayer.latitude === "" ||
    formPlayer.longitude === "" ||
    formPlayer.timeEvent === "" ||
    formPlayer.contactNumber === "";
  const changePlayerData = (event) => {
    setFormPlayer({ ...formPlayer, [event.target.id]: event.target.value });
  };

  const submit = (event) => {
    try {
      event.preventDefault();

      dispatch(
        createrThunk({
          sport: formPlayer.sport,
          descriptionEvent: formPlayer.descriptionEvent,
          dateEvent: formPlayer.dateEvent,
          image: formPlayer.image,
          username: formPlayer.username,
          name: formPlayer.name,
          email: formPlayer.email,
          loser: formPlayer.loser,
          winner: formPlayer.winner,
          level: formPlayer.level,
          latitude: formPlayer.latitude,
          longitude: formPlayer.longitude,
          timeEvent: formPlayer.timeEvent,
          contactNumber: formPlayer.contactNumber,
          locationEvent: formPlayer.locationEvent,
          province: formPlayer.province,
          country: formPlayer.country,
        })
      );

      setFormPlayer(blankFields);
      correctAction(
        `Greate, ${formPlayer.username} has been added in the list.`
      );
      navigate("/home");
    } catch (error) {
      wrongAction(
        "Error! All fields are required. Please set a number between 1 to 99. Try again!"
      );
    }
  };

  return (
    <CreatePlayerStyle>
      <form autoComplete="off" noValidate onSubmit={submit}>
        <h1>Create Player</h1>

        <label htmlFor="sport">sport</label>
        <input
          id="sport"
          type="text"
          value={formPlayer.sport}
          onChange={changePlayerData}
          className="inputbox"
          name="sport"
          required
        />

        <label htmlFor="descriptionEvent">descriptionEvent</label>
        <input
          id="descriptionEvent"
          type="text"
          value={formPlayer.descriptionEvent}
          onChange={changePlayerData}
          className="inputbox"
          name="descriptionEvent"
          required
        />

        <label htmlFor="dateEvent">dateEvent</label>
        <input
          id="dateEvent"
          type="date"
          value={formPlayer.dateEvent}
          onChange={changePlayerData}
          className="inputbox"
          name="dateEvent"
          required
        />

        <label htmlFor="image">image</label>
        <input
          id="image"
          type="text"
          value={formPlayer.image}
          onChange={changePlayerData}
          className="inputbox"
          name="image"
          required
        />

        <label htmlFor="username">username</label>
        <input
          id="username"
          type="text"
          value={formPlayer.username}
          onChange={changePlayerData}
          className="inputbox"
          name="username"
          required
        />

        <label htmlFor="name">name</label>
        <input
          id="name"
          type="text"
          value={formPlayer.name}
          onChange={changePlayerData}
          className="inputbox"
          name="name"
          required
        />

        <label htmlFor="email">email</label>
        <input
          id="email"
          type="text"
          value={formPlayer.email}
          onChange={changePlayerData}
          className="inputbox"
          name="email"
          required
        />

        <label htmlFor="loser">loser</label>
        <input
          id="loser"
          type="text"
          value={formPlayer.loser}
          onChange={changePlayerData}
          className="inputbox"
          name="loser"
          required
        />

        <label htmlFor="winner">winner</label>
        <input
          id="winner"
          type="text"
          value={formPlayer.winner}
          onChange={changePlayerData}
          className="inputbox"
          name="winner"
          required
        />

        <label htmlFor="level">level</label>
        <input
          id="level"
          type="text"
          value={formPlayer.level}
          onChange={changePlayerData}
          className="inputbox"
          name="level"
          required
        />

        <label htmlFor="latitude">latitude</label>
        <input
          id="latitude"
          type="text"
          value={formPlayer.latitude}
          onChange={changePlayerData}
          className="inputbox"
          name="latitude"
          required
        />

        <label htmlFor="longitude">longitude</label>
        <input
          id="longitude"
          type="text"
          value={formPlayer.longitude}
          onChange={changePlayerData}
          className="inputbox"
          name="longitude"
          required
        />

        <label htmlFor="timeEvent">timeEvent</label>
        <input
          id="timeEvent"
          type="time"
          value={formPlayer.timeEvent}
          onChange={changePlayerData}
          className="inputbox"
          name="timeEvent"
          required
        />

        <label htmlFor="contactNumber">contactNumber</label>
        <input
          id="contactNumber"
          type="text"
          value={formPlayer.contactNumber}
          onChange={changePlayerData}
          className="inputbox"
          name="contactNumber"
          required
        />

        <label htmlFor="locationEvent">locationEvent</label>
        <input
          id="locationEvent"
          type="text"
          value={formPlayer.locationEvent}
          onChange={changePlayerData}
          className="inputbox"
          name="locationEvent"
          required
        />

        <label htmlFor="province">province</label>
        <input
          id="province"
          type="text"
          value={formPlayer.province}
          onChange={changePlayerData}
          className="inputbox"
          name="province"
          required
        />

        <label htmlFor="country">country</label>
        <input
          id="country"
          type="text"
          value={formPlayer.country}
          onChange={changePlayerData}
          className="inputbox"
          name="country"
          required
        />

        <button disabled={buttonDisabled} type="submit" className="button">
          Create Event
        </button>
      </form>
    </CreatePlayerStyle>
  );
};

export default CreatePlayer;
