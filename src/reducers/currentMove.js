import { CURRENT_MOVE } from "../actions/types";
import { initial } from "./initial";

export const CurrentMoveReducer = (state = initial.currentMove, action) => {
  if (action.type === CURRENT_MOVE) {
    return action.payload.dirn;
  }

  return state;
};
