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
  let random_idx = Math.floor(Math.random() * free_ids.length);
  console.log(random_idx);
  return free_ids[random_idx];
};

// free ids
const getFreeIds = (snake_ids) => {
  let free_ids = [];
  for (let i = 1; i <= GRID_LENGTH * GRID_WIDTH; i++) {
    if (!snake_ids.includes(i)) free_ids.push(i);
  }
  return free_ids;
};

// chocopieid

export const generateChocopie = (snake_ids) => {
  let free_ids = getFreeIds(snake_ids);
  let random_idx = Math.floor(Math.random() * free_ids.length);
  return free_ids[random_idx];
};
