import {
  LEFT,
  UP,
  RIGHT,
  DOWN,
  ESC,
  SPACE,
  KEYCODE,
  RKEYCODE,
} from "./globals";
import { MovementValidator } from "./validator";

let ConsiderOpposite = (a, b) => {
  if (a === UP && b === DOWN) return RKEYCODE[DOWN];
  else if (a === DOWN && b === UP) return RKEYCODE[UP];
  else if (a === LEFT && b == RIGHT) return RKEYCODE[RIGHT];
  else if (a === RIGHT && b === LEFT) return RKEYCODE[LEFT];
  return RKEYCODE[a];
};

export const handleMovement = (
  pressed,
  currentMove,
  chocopieId,
  headId,
  snakeIds
) => {
  let valid = true,
    gameOver = false,
    chocopie = false,
    pause = false,
    head = null;

  pressed = ConsiderOpposite(KEYCODE[pressed], currentMove);

  switch (KEYCODE[pressed]) {
    case UP: {
      let { validMove, newHead } = MovementValidator(UP, headId);
      if (!validMove) {
        valid = false;
        gameOver = true;
      } else {
        if (newHead === chocopieId) {
          chocopie = true;
          head = chocopieId;
        } else head = newHead;
      }
      break;
    }
    case RIGHT: {
      let { validMove, newHead } = MovementValidator(RIGHT, headId);
      if (!validMove) {
        valid = false;
        gameOver = true;
      } else {
        if (newHead === chocopieId) {
          chocopie = true;
          head = chocopieId;
        } else head = newHead;
      }
      break;
    }
    case DOWN: {
      let { validMove, newHead } = MovementValidator(DOWN, headId);
      if (!validMove) {
        valid = false;
        gameOver = true;
      } else {
        if (newHead === chocopieId) {
          chocopie = true;
          head = chocopieId;
        } else head = newHead;
      }
      break;
    }
    case LEFT: {
      let { validMove, newHead } = MovementValidator(LEFT, headId);
      if (!validMove) {
        valid = false;
        gameOver = true;
      } else {
        if (newHead === chocopieId) {
          chocopie = true;
          head = chocopieId;
        } else head = newHead;
      }
      break;
    }
    case SPACE || ESC: {
      pause = true;
      break;
    }
  }
  const nextMove = KEYCODE[pressed] || SPACE;
  // console.log({ valid, gameOver, chocopie, pause, head, nextMove });
  if (snakeIds.includes(head)) {
    valid = false;
    gameOver = true;
  }

  return { valid, gameOver, chocopie, pause, head, nextMove };
};
