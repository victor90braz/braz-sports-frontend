import React from "react";
import { render, screen } from "@testing-library/react";
import EditPage from "./EditPage";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";

const mockDispatch = jest.fn();
const player = "Name";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
  useSelector: () => ({ player: { name: player } }),
}));

describe("Given a EditPage component", () => {
  describe("When it's rendered and the noteId param matches with a note", () => {
    test("Then it should show the text 'Name'", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <EditPage />
          </BrowserRouter>
        </Provider>
      );

      const element = screen.getByRole("heading", { level: 2 });

      expect(element).toBeInTheDocument();
    });
  });
});
