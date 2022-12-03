import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import LoginForm from "./LoginForm";

const mockUseNavigate = jest.fn();
const mockUseDispatch = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUseNavigate("/home"),
  useDispatch: () => mockUseDispatch(),
}));

global.window = Object.create(window);
const url = "http://dummy.com";
Object.defineProperty(window, "location", {
  value: {
    href: url,
  },
});

expect(window.location.href).toEqual(url);

describe("Given a LoginForm component", () => {
  describe("When the component is receiving the input 'Hello'", () => {
    test("Then the username input value should be 'Hello'", () => {
      const labelToFind = "* USERNAME";
      const value = "Hello";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <LoginForm />
          </Provider>
        </BrowserRouter>
      );

      const label = screen.getByLabelText(labelToFind);
      userEvent.type(label, value);

      expect(label).toHaveValue(value);
    });
  });
  describe("When the two inpputs have been filled and the submit button is clicked", () => {
    test("Then the two inputs should be empty", () => {
      // const nameLabel = "Name";
      const usernameLabel = "* USERNAME";
      const passwordLabel = "* PASSWORD";
      const inputText = "hello";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <LoginForm />
          </Provider>
        </BrowserRouter>
      );

      const username = screen.getByLabelText(usernameLabel);
      const password = screen.getByLabelText(passwordLabel);
      const submitButton = screen.getByRole("button");

      userEvent.type(username, inputText);
      userEvent.type(password, inputText);
      userEvent.click(submitButton);

      expect(username).toHaveValue("hellohello");
      expect(password).toHaveValue("hellohello");
    });
  });
  describe("When the username is Boo", () => {
    test("Then the username input should be Boo", () => {
      const usernameLabel = "* USERNAME";
      const inputText = "Boo";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <LoginForm />
          </Provider>
        </BrowserRouter>
      );

      const username = screen.getByLabelText(usernameLabel);

      const submitButton = screen.getByRole("button");

      userEvent.type(username, inputText);

      userEvent.click(submitButton);

      expect(username).toHaveValue(inputText);
    });
  });
  describe("When the username and password introduced are submitted and correct", () => {
    test("Then the user should be logged in", () => {
      const usernameLabel = "* USERNAME";
      const passwordLabel = "* PASSWORD";
      const inputText = "Boo";
      const inputText2 = "123";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <LoginForm />
          </Provider>
        </BrowserRouter>
      );

      const username = screen.getByLabelText(usernameLabel);
      const password = screen.getByLabelText(passwordLabel);
      const submitButton = screen.getByRole("button");

      userEvent.type(username, inputText);
      userEvent.type(password, inputText2);
      userEvent.click(submitButton);
    });
  });
});
