import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import EditPlayer from "./EditPlayer";

describe("Given a CreatorPlayer component", () => {
  describe("When the word 'Pelé' is written to the name input field", () => {
    test("Then the value of the name input field should be 'Pelé'", () => {
      const labelToFind = "Name";
      const inputText = "Pelé";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <EditPlayer />
          </BrowserRouter>
        </Provider>
      );

      const label = screen.getByLabelText(labelToFind);
      userEvent.type(label, inputText);

      expect(label).toHaveValue(inputText);
    });
  });

  describe("When the two inputs have text and the submit button is clicked", () => {
    test("Then the two inputs should render a text 'Pelé'", () => {
      const nameLabel = "Name";
      const inputText = "Pelé";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <EditPlayer />
          </BrowserRouter>
        </Provider>
      );

      const name = screen.getByLabelText(nameLabel);
      const submitButton = screen.getByRole("button");

      userEvent.type(name, inputText);
      userEvent.click(submitButton);

      expect(name).toHaveValue("Pelé");
    });
  });

  describe("When the label Name has a value but one of the others fields are empties and the submit is clicked", () => {
    test("Then the label name should rendered an input with value ''", async () => {
      const nameLabel = "Name";
      const inputText = "Pelé";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <EditPlayer />
          </BrowserRouter>
        </Provider>
      );

      const name = screen.getByLabelText(nameLabel);

      const submitButton = screen.getByRole("button");

      userEvent.type(name, inputText);

      await userEvent.click(submitButton);

      expect(name).toHaveValue(inputText);
    });
  });
});
