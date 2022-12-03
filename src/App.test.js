import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import store from "./redux/store/store";
import * as React from "react";

jest.mock("jwt-decode", () => () => ({
  id: "1",
  name: "carlos",
  username: "carlos",
  image: "carlos.jpg",
}));

const mockUseNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUseNavigate,
}));

describe("Given a App component", () => {
  describe("When it's invoked", () => {
    test("Then it should render the text 'REGISTER'", () => {
      const expectedText = "El Once Ideal";

      render(
        <>
          <Provider store={store}>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </Provider>
        </>
      );

      const result = screen.getByText(expectedText);
      expect(result).toBeInTheDocument();
    });
  });
});
