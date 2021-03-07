import {
  GetFreeGridsInitial,
  GetSnakeInital,
  GetCurrentMoveInitial,
  GetNewChocopieInitial,
} from "../helpers/elements";

export const initial = {
  score: 0,
  play: false,
  pause: true,
  gameover: false,
  currentMove: GetCurrentMoveInitial(),
  chocopieId: GetNewChocopieInitial(),
  snakeIds: GetSnakeInital(),
  freeIds: GetFreeGridsInitial(),
};
