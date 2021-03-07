import { combineReducers, createStore } from "redux";

import { PauseReducer } from "./pause";
import { GameoverReducer } from "./gameover";
import { PlayReducer } from "./play";
import { ChocopieIdReducer } from "./chocopieId";
import { CurrentMoveReducer } from "./currentMove";
import { FreeIdsReducer } from "./freeIds";
import { SnakeIdsReducer } from "./snakeIds";
import { ScoreReducer } from "./score";

const reducers = {
  pause: PauseReducer,
  play: PlayReducer,
  gameover: GameoverReducer,
  chocopieId: ChocopieIdReducer,
  currentMove: CurrentMoveReducer,
  freeIds: FreeIdsReducer,
  snakeIds: SnakeIdsReducer,
  score: ScoreReducer,
};

export const store = createStore(combineReducers(reducers));
