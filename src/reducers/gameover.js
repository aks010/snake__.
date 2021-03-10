import { initial } from "./initial";
import { GAMEOVER } from "../actions/types";
export const GameoverReducer = (state = initial.gameover, action) => {
  if (action.type === GAMEOVER) {
    return action.payload.gameover;
  }
  return state;
};
