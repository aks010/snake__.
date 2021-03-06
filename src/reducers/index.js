import { combineReducers, createStore } from "redux";

import { PauseReducer } from "./pause";
import { GameoverReducer } from "./gameover";
import { PlayReducer } from "./play";

const reducers = {
  pause: PauseReducer,
  play: PlayReducer,
  gameover: GameoverReducer,
};

export const store = createStore(combineReducers(reducers));
