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
  currentmove: GetCurrentMoveInitial(),
  chocopie_id: GetNewChocopieInitial(),
  snake: GetSnakeInital(),
  free: GetFreeGridsInitial(),
};
