import { initial } from "./initial";
import { EAT_CHOCOPIE, MOVE } from "../actions/types";

export const SnakeIdsReducer = (state = initial.snakeIds, action) => {
  if (action.type === EAT_CHOCOPIE) {
    let newState = [...state, action.payload.head];
    return newState;
  } else if (action.type === MOVE) {
    let newState = state || [];
    newState = newState.splice(1);
    newState.push(action.payload.head);
    return newState;
  }
  return state;
};
