import {
  MOVE,
  PLAY,
  PAUSE,
  GOAL,
  GAMEOVER,
  EAT_CHOCOPIE,
  GENERATE_CHOCOPIE,
} from "./types";

export const MoveSnake = (head) => {
  return {
    type: MOVE,
    payload: {
      head,
      // tail,
    },
  };
};

export const EatChocopie = (head) => {
  return {
    type: EAT_CHOCOPIE,
    payload: {
      head,
    },
  };
};

export const Play = () => {
  return {
    type: PLAY,
  };
};

export const Pause = (data) => {
  return {
    type: PAUSE,
    payload: data,
  };
};

export const Goal = () => {
  return {
    type: GOAL,
  };
};

export const Generate_Chocopie = ({ new_chocopie_id }) => {
  return {
    type: GENERATE_CHOCOPIE,
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
