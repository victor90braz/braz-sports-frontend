import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import CreatePlayer from "./CreatePlayer";

const mockUseNavigate = jest.fn();
const mockUseDispatch = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUseNavigate("/home"),
  useDispatch: () => mockUseDispatch(),
}));

describe("Given a CreatorPlayer component", () => {
  describe("When the word 'Pelé' is written to the name input field", () => {
    test("Then the value of the name input field should be 'Pelé'", () => {
      const labelToFind = "Name";
      const inputText = "Pelé";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <CreatePlayer />
          </BrowserRouter>
        </Provider>
      );

      const label = screen.getByLabelText(labelToFind);
      userEvent.type(label, inputText);

      expect(label).toHaveValue(inputText);
    });
  });

  describe("When the label Name has a value but one of the others fields are empties and the submit is clicked", () => {
    test("Then the label name should rendered an input with value ''", () => {
      const inputText = "Pelé";
      const inputNumber = "1";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <CreatePlayer />
          </BrowserRouter>
        </Provider>
      );

      const inputTexts = screen.getAllByRole("textbox");
      const inputNumbers = screen.getAllByRole("textbox");

      const submitButton = screen.getByRole("button", {
        name: "Add New Player",
      });

      inputTexts.forEach((input) => {
        userEvent.type(input, inputText);
      });

      inputNumbers.forEach((input) => {
        userEvent.type(input, inputNumber);
      });

      userEvent.click(submitButton);

      expect(mockUseNavigate).toHaveBeenCalled();
    });
  });

  describe("Given a CreatorPlayer", () => {
    describe("When its called to be rendered", () => {
      test("Then it should create a CreatorPlayer with four list components", () => {
        const listItem = 14;

        render(
          <Provider store={store}>
            <BrowserRouter>
              <CreatePlayer />
            </BrowserRouter>
          </Provider>
        );

        const displayHeader = screen.getAllByRole("listitem");
        expect(displayHeader).toHaveLength(listItem);
      });
    });
  });

  test("Then the two inputs should render a text '/home'", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CreatePlayer />
        </BrowserRouter>
      </Provider>
    );

    const submitButton = screen.getByRole("button");
    userEvent.click(submitButton);

    expect(mockUseNavigate).toHaveBeenCalled();
  });
});
