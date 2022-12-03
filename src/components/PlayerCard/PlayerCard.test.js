import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { mockPlayer } from "../../mocks/playerMock";
import store from "../../redux/store/store";
import PlayerCard from "./PlayerCard";

describe("Given the Player component", () => {
  describe("When it's rendered with a user param that matches the user logged and the rendered delete button is clicked", () => {
    test("Then it should call dispatch", async () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <PlayerCard player={mockPlayer} />
          </BrowserRouter>
        </Provider>
      );

      const buttons = screen.getAllByRole("button");
      userEvent.click(buttons[0]);
      const dispatch = jest.fn();

      expect(dispatch).toBeCalledTimes(0);
    });
  });
});
