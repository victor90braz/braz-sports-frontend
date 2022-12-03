import userReducer, {
  loginActionCreator,
  logoutActionCreator,
} from "./userSlice";

describe("Given a userSlice reducer", () => {
  describe("When its invoked with an unknown action and a user as initialValue", () => {
    test("Then it should return the same user", () => {
      const action = {
        type: "user/unknownAction",
      };

      const initialValue = { name: "carlos" };

      const receivedValue = userReducer(initialValue, action);

      expect(receivedValue).toBe(initialValue);
    });
  });
  describe("When its invoked with a login action and a user", () => {
    test("Then it should return the user", () => {
      const user = {
        id: "1",
        username: "juanca",
      };

      const loggedUser = {
        id: "1",
        username: "juanca",
        logged: true,
      };

      const action = loginActionCreator(user);

      const receivedValue = userReducer({}, action);

      expect(receivedValue).toEqual(loggedUser);
    });
  });

  describe("When it's invoked with a logout action", () => {
    test("Then it should return initial state without user credentials and logged: false", () => {
      const user = {
        id: "1",
        username: "juancarlos",
      };

      const expectValue = {
        id: "",
        username: "",
        logged: false,
      };

      const actionLogin = loginActionCreator(user);
      userReducer({}, actionLogin);

      const actionLogout = logoutActionCreator();
      const logoutStatedValue = userReducer(user, actionLogout);

      expect(logoutStatedValue).toEqual(expectValue);
    });
  });
});
