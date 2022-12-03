import { mockUserLogin, mockUserRegister } from "../../mocks/mockUser";
import { loginThunk, registerThunk } from "./userThunks";

jest.mock("jwt-decode", () => () => ({
  username: "buffon",
  password: "buffon1977",
}));

jest.mock("jwt-decode", () => () => ({ id: "1977", username: "buffon" }));

describe("Given a loginThunk function", () => {
  describe("When it's called", () => {
    test("It should dispatch the loginActionCreator with the data from the token", async () => {
      const dispatch = jest.fn();

      const thunk = loginThunk(mockUserLogin);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given a registerThunk", () => {
  describe("When its called", () => {
    test("Then it should call the dispatch", () => {
      const dispatch = jest.fn();

      const thunk = registerThunk(mockUserRegister);

      thunk(dispatch());

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
