import { LEFT, UP, RIGHT, DOWN, ESC, SPACE, KEYCODE } from "./globals";

const validate = (move, head) => {
  return true;
};

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
      let { validMove, newHead } = validate(UP, headId);
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

  return { valid, gameOver, chocopie, pause, head };
};
