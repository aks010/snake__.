import { initial } from "./initial";
import { GENERATE_CHOCOPIE } from "../actions/types";

export const ChocopieIdReducer = (state = initial.chocopieId, action) => {
  if (action.type === GENERATE_CHOCOPIE) {
    return action.payload.id;
  }
  return state;
};
