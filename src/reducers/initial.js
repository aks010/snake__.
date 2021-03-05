import {
  GetFreeGridsInitial,
  GetSnakeInital,
  GetCurrentMoveInitial,
  GetNewChocopie,
} from "../helpers/elements";

export const initial = {
  score: 0,
  play: false,
  gameover: false,
  currentmove: GetCurrentMoveInitial(),
  chocopie_id: GetNewChocopie(),
  snake: GetSnakeInital(),
  free: GetFreeGridsInitial(),
};
