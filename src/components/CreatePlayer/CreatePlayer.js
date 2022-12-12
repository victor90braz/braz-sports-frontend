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
    formPlayer.contactNumber === "" ||
    formPlayer.locationEvent === "" ||
    formPlayer.province === "" ||
    formPlayer.country === "" ||
    formPlayer.instagram === "" ||
    formPlayer.twitter === "" ||
    formPlayer.linkedin === "" ||
    formPlayer.github === "";
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
          instagram: formPlayer.instagram,
          twitter: formPlayer.twitter,
          linkedin: formPlayer.linkedin,
          github: formPlayer.github,
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
        <h1>Create Card Player</h1>
        <label htmlFor="sport">Sport</label>
        <input
          id="sport"
          type="text"
          value={formPlayer.sport}
          onChange={changePlayerData}
          className="inputbox"
          name="sport"
          required
        />
        <label htmlFor="descriptionEvent">Title Description</label>
        <input
          id="descriptionEvent"
          type="text"
          value={formPlayer.descriptionEvent}
          onChange={changePlayerData}
          className="inputbox"
          name="descriptionEvent"
          required
        />
        <label htmlFor="dateEvent">Date</label>
        <input
          id="dateEvent"
          type="date"
          value={formPlayer.dateEvent}
          onChange={changePlayerData}
          className="inputbox"
          name="dateEvent"
          required
        />
        <label htmlFor="image">Image Url</label>
        <input
          id="image"
          type="url"
          value={formPlayer.image}
          onChange={changePlayerData}
          className="inputbox"
          name="image"
          required
        />
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={formPlayer.username}
          onChange={changePlayerData}
          className="inputbox"
          name="username"
          required
        />
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={formPlayer.name}
          onChange={changePlayerData}
          className="inputbox"
          name="name"
          required
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          value={formPlayer.email}
          onChange={changePlayerData}
          className="inputbox"
          name="email"
          required
        />

        <label htmlFor="level">Your Level</label>
        <input
          id="level"
          type="text"
          value={formPlayer.level}
          onChange={changePlayerData}
          className="inputbox"
          name="level"
          required
        />
        <label htmlFor="latitude">Location Map (LAT)</label>
        <input
          id="latitude"
          type="text"
          value={formPlayer.latitude}
          onChange={changePlayerData}
          className="inputbox"
          name="latitude"
          required
        />
        <label htmlFor="longitude">Location Map (LON)</label>
        <input
          id="longitude"
          type="text"
          value={formPlayer.longitude}
          onChange={changePlayerData}
          className="inputbox"
          name="longitude"
          required
        />
        <label htmlFor="timeEvent">Time</label>
        <input
          id="timeEvent"
          type="time"
          value={formPlayer.timeEvent}
          onChange={changePlayerData}
          className="inputbox"
          name="timeEvent"
          required
        />
        <label htmlFor="contactNumber">Phone Number</label>
        <input
          id="contactNumber"
          type="text"
          value={formPlayer.contactNumber}
          onChange={changePlayerData}
          className="inputbox"
          name="contactNumber"
          required
        />

        <label htmlFor="linkLocation">Share Location Link</label>
        <input
          id="linkLocation"
          type="text"
          value={formPlayer.linkLocation}
          onChange={changePlayerData}
          className="inputbox"
          name="linkLocation"
          required
        />

        <label htmlFor="locationEvent">Address Place</label>
        <input
          id="locationEvent"
          type="text"
          value={formPlayer.locationEvent}
          onChange={changePlayerData}
          className="inputbox"
          name="locationEvent"
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
