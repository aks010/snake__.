// GRID / FREE
// SNAKE
import {
  START_HEAD,
  START_TAIL,
  GRID_LENGTH,
  GRID_WIDTH,
  RIGHT,
} from "./constants";

export const GetFreeGridsInitial = () => {
  let free_ids = [];
  console.log("Start Head", START_HEAD);
  console.log("Start Head", START_TAIL);
  for (let i = 1; i <= GRID_LENGTH * GRID_WIDTH; i++) {
    if (i != START_HEAD && i != START_TAIL) free_ids.push(i);
  }
  return free_ids;
};

export const GetSnakeInital = () => {
  return [START_TAIL, START_HEAD];
};

export const GetCurrentMoveInitial = () => {
  return RIGHT;
};

export const GetNewChocopieInitial = () => {
  let free_ids = GetFreeGridsInitial();
  console.log(free_ids);
  let random_idx = Math.floor(Math.random() * free_ids.length);
  console.log(random_idx);
  return free_ids[random_idx];
};
