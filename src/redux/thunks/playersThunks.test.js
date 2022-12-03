import "../../mocks/server";
import { mockPlayer, mockPlayers } from "../../mocks/playerMock";
import {
  addPlayerActionCreator,
  deletePlayerActionCreator,
  editPlayerActionCreator,
  loadAllPlayersActionCreator,
} from "../features/playerSlice";
import {
  deletePlayerThunk,
  editPlayerThunk,
  getPlayerThunk,
  loadPlayersThunk,
} from "./playersThunks";
import axios from "axios";

describe("Given the loadPlayersThunk function", () => {
  describe("When invoked", () => {
    test("Then it should dispatch the loadAllPlayersActionCreator with a list of games", async () => {
      const dispatch = jest.fn();
      const expectedAction = loadAllPlayersActionCreator(mockPlayers);

      const thunk = loadPlayersThunk();
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});

describe("Given the deletePlayerThunk function", () => {
  describe("When it's called with an id", () => {
    test("Then it should call dispatch with the loadPlayer action with the Player received from the axios request", async () => {
      const id = "2";
      const dispatch = jest.fn();
      const action = deletePlayerActionCreator(id);

      jest.spyOn(Storage.prototype, "getItem").mockReturnValue("token");
      axios.delete = jest.fn().mockResolvedValue({ status: 200 });

      const thunk = deletePlayerThunk(id);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(action);
    });
  });

  describe("When it's called with an existent id", () => {
    test("Then it should not call the dispatch", async () => {
      const id = "2";
      const dispatch = jest.fn();

      jest.spyOn(Storage.prototype, "getItem").mockReturnValue("token");
      axios.delete = jest.fn().mockResolvedValue({});

      const thunk = deletePlayerThunk(id);
      await thunk(dispatch);

      expect(dispatch).not.toHaveBeenCalled();
    });
  });
});

describe("Given the editPlayerThunk function", () => {
  describe("When it's called with an id to edit and a player", () => {
    test("Then it should call dispatch with the new player edited received from the axios request", async () => {
      const dispatch = jest.fn();
      const action = editPlayerActionCreator(mockPlayers);

      jest.spyOn(Storage.prototype, "getItem").mockReturnValue("token");
      axios.put = jest.fn().mockResolvedValue({ data: mockPlayers });

      const thunk = editPlayerThunk(mockPlayers.id, mockPlayers);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(action);
    });
  });

  describe("When it's called and there is no token", () => {
    test("Then it should not call dispatch", async () => {
      const dispatch = jest.fn();

      jest.spyOn(Storage.prototype, "getItem").mockReturnValue("");

      const thunk = editPlayerThunk(mockPlayers.id, mockPlayers);
      await thunk(dispatch);

      expect(dispatch).not.toHaveBeenCalled();
    });
  });
});
