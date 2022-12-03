import { render } from "@testing-library/react";
import AccessControl from "./AccessControl";

const mockUseNavigate = jest.fn();
let mockLogged;

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-redux"),
  useNavigate: () => mockUseNavigate,
}));

jest.mock("react-redux", () => ({
  useSelector: () => ({ logged: mockLogged }),
}));

describe("Given a 'AccessControl' component", () => {
  describe("When 'logged' it's false", () => {
    test("Then it should call navigate and it should return null", () => {
      mockLogged = false;

      render(<AccessControl />);

      expect(mockUseNavigate).toHaveBeenCalledWith("/login");
    });
  });
});
