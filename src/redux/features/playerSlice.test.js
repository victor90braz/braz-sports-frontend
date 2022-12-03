import { mockPlayer, mockPlayers } from "../../mocks/playerMock";
import {
  deletePlayerActionCreator,
  editPlayerActionCreator,
  loadAllPlayersActionCreator,
} from "./playerSlice";

import playerReducer from "../features/playerSlice";

describe("Given a playerReducer reducer", () => {
  describe("When its invoked with an unknown action and a player as initialValue", () => {
    test("Then it should return the same initial value", () => {
      const action = {
        type: "user/unknownAction",
      };

      const initialState = {
        allPlayers: mockPlayers,
      };

      const receivedValue = playerReducer(initialState, action);

      expect(receivedValue).toEqual(initialState);
    });
  });

  describe("When its invoked with a player action and a user", () => {
    test("Then it should return the user", () => {
      const action = loadAllPlayersActionCreator(mockPlayer);

      const initialState = {
        allPlayers: mockPlayers,
      };

      const { allPlayers } = playerReducer(initialState, action);

      expect(allPlayers).toEqual(mockPlayer);
    });
  });

  describe("When its invoked with an deletePlayer action with an id and a initial state with one player", () => {
    test("Then it should return one note at allNotes and at notesToShow", () => {
      const expectedLength = 1;

      const action = deletePlayerActionCreator(mockPlayers[0].id);

      const initialState = {
        allPlayers: mockPlayers,
      };

      const { allPlayers } = playerReducer(initialState, action);

      expect(allPlayers).toHaveLength(expectedLength);
    });
  });

  describe("When its invoked with a edit action with one player as a initial state and a edited player", () => {
    test("Then it should edit the player and change the properties", () => {
      const editedPlayer = {
        image:
          "https://www.futbin.com/content/fifa22/img/players/p50332827.png?v=16",
        name: "Neymar",
        position: "delantero",
        speed: "99",
        shoot: "90",
        pass: "95",
        agility: "90",
        defense: "45",
        strength: "80",
      };

      const action = editPlayerActionCreator(editedPlayer);

      const initialState = {
        allPlayers: mockPlayer,
      };

      const { allPlayers } = playerReducer(initialState, action);

      expect(allPlayers[0]).toHaveProperty("image", editedPlayer.image);
      expect(allPlayers[0]).toHaveProperty("name", editedPlayer.name);
      expect(allPlayers[0]).toHaveProperty("position", editedPlayer.position);
      expect(allPlayers[0]).toHaveProperty("speed", editedPlayer.speed);
      expect(allPlayers[0]).toHaveProperty("shoot", editedPlayer.shoot);
      expect(allPlayers[0]).toHaveProperty("pass", editedPlayer.pass);
      expect(allPlayers[0]).toHaveProperty("agility", editedPlayer.agility);
      expect(allPlayers[0]).toHaveProperty("defense", editedPlayer.defense);
      expect(allPlayers[0]).toHaveProperty("strength", editedPlayer.strength);
    });
  });
});
