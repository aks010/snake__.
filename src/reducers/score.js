import { initial } from "./initial";
import { EAT_CHOCOPIE } from "../actions/types";

export const ScoreReducer = (state = initial.score, action) => {
  if (action.type === EAT_CHOCOPIE) {
    return state + 1;
  }
  return state;
};
