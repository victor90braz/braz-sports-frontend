import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import ListPlayers from "./ListPlayers";

describe("Given a ListPlayers component", () => {
  describe("When it's invoked", () => {
    test("Then it should render a title with a text 'All Games'", () => {
      const expectedText = "All Games";
      render(
        <Provider store={store}>
          <BrowserRouter>
            <ListPlayers />
          </BrowserRouter>
        </Provider>
      );
      const result = screen.getByRole("heading", { level: 3 });
      expect(result.textContent).toBe(expectedText);
    });
  });
});
