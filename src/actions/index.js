import { MOVE, PLAY, PAUSE, GOAL, GAMEOVER, GENERATE_CHOCOPIE } from "./types";

export const MoveSnake = ({ head, tail }) => {
  return {
    type: MOVE,
    payload: {
      head,
      tail,
    },
  };
};

export const Play = () => {
  return {
    type: PLAY,
  };
};

export const Pause = () => {
  return {
    type: PAUSE,
  };
};

export const Goal = () => {
  return {
    type: GOAL,
  };
};

export const GENERATE_CHOCOPIE = ({ new_chocopie_id }) => {
  return {
    type: PAUSE,
    payload: {
      id: new_chocopie_id,
    },
  };
};

export const GameOver = () => {
  return {
    type: GAMEOVER,
  };
};
