import { LEFT, UP, RIGHT, DOWN, ESC, SPACE, KEYCODE } from "./globals";
import { MovementValidator } from "./validator";

export const handleMovement = (pressed, chocopieId, headId) => {
  let valid = true,
    gameOver = false,
    chocopie = false,
    pause = false,
    head = null;
  console.log(pressed);
  console.log("CODE:", KEYCODE[pressed]);
  switch (KEYCODE[pressed]) {
    case UP: {
      console.log("CHEKC UP");
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
    case SPACE: {
      console.log("NOTECNTER");
      pause = true;
      break;
    }
  }
  const nextMove = KEYCODE[pressed];
  console.log({ valid, gameOver, chocopie, pause, head, nextMove });
  return { valid, gameOver, chocopie, pause, head, nextMove };
};
