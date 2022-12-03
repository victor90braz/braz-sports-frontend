import { rest } from "msw";

import { mockToken, mockUserRegister } from "./mockUser";
import { mockPlayer, mockPlayers } from "./playerMock";

export const handlers = [
  rest.post(
    `${process.env.REACT_APP_API_URL}users/login`,
    (req, res, context) => {
      return res(context.status(200), context.json({ token: mockToken }));
    }
  ),

  rest.post(
    `${process.env.REACT_APP_API_URL}users/register`,
    (req, res, context) => {
      return res(
        context.status(200),
        context.json({
          mockUserRegister,
        })
      );
    }
  ),

  rest.get(`${process.env.REACT_APP_API_URL}players/`, (req, res, context) => {
    return res(context.status(200), context.json(mockPlayers));
  }),

  rest.get(`${process.env.REACT_APP_API_URL}players/1`, (req, res, context) => {
    return res(context.status(200), context.json(mockPlayer));
  }),
];
