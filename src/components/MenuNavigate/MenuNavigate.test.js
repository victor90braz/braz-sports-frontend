import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import MenuNavigate from "./MenuNavigate";

describe("Given a MenuNavigate", () => {
  describe("When its called to be rendered", () => {
    test("Then it should create a MenuNavigate with four list components", () => {
      const listItem = 2;

      render(
        <Provider store={store}>
          <BrowserRouter>
            <MenuNavigate />
          </BrowserRouter>
        </Provider>
      );

      const displayHeader = screen.getAllByRole("listitem");
      expect(displayHeader).toHaveLength(listItem);
    });
  });

  describe("When it's invoked", () => {
    test("Then it should render the text 'El Once Ideal'", () => {
      const expectedText = "El Once Ideal";

      render(
        <>
          <Provider store={store}>
            <BrowserRouter>
              <MenuNavigate />
            </BrowserRouter>
          </Provider>
        </>
      );

      const result = screen.getByRole("heading", { level: 1 });
      expect(result.textContent).toBe(expectedText);
    });
  });
});
