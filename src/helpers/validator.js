import { LEFT, RIGHT, UP, DOWN } from "./globals";
import { GRID_LENGTH, GRID_WIDTH } from "./constants";

export const MovementValidator = (move, head) => {
  let newHead;
  let validMove = true;
  switch (move) {
    case UP: {
      newHead = head - GRID_LENGTH;
      break;
    }
    case RIGHT: {
      // check border
      if (head % GRID_LENGTH === 0) validMove = false;
      else newHead = head + 1;
      break;
    }
    case DOWN: {
      newHead = head + GRID_LENGTH;
      break;
    }
    case LEFT: {
      if (head % GRID_LENGTH === 1) validMove = false;
      else newHead = head - 1;

      break;
    }
  }

  if (newHead <= 0 || newHead > GRID_LENGTH * GRID_WIDTH) validMove = false;
  return { validMove, newHead };
};
