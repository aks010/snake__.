import { initial } from "./initial";
import { PAUSE } from "../actions/types";

export const PauseReducer = (state = initial.pause, action) => {
  if (action.type === PAUSE) return action.payload;
  return state;
};
