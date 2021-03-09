import { SNAKE_SPEED } from "./constants";

let Podium = {};
let interval = null;
Podium.keydown = function (k) {
  var oEvent = document.createEvent("KeyboardEvent");

  // Chromium Hack
  Object.defineProperty(oEvent, "keyCode", {
    get: function () {
      return this.keyCodeVal;
    },
  });
  Object.defineProperty(oEvent, "which", {
    get: function () {
      return this.keyCodeVal;
    },
  });

  if (oEvent.initKeyboardEvent) {
    oEvent.initKeyboardEvent(
      "keydown",
      true,
      true,
      document.defaultView,
      false,
      false,
      false,
      false,
      k,
      k
    );
  } else {
    oEvent.initKeyEvent(
      "keydown",
      true,
      true,
      document.defaultView,
      false,
      false,
      false,
      false,
      k,
      0
    );
  }

  oEvent.keyCodeVal = k;

  if (oEvent.keyCode !== k) {
    alert("keyCode mismatch " + oEvent.keyCode + "(" + oEvent.which + ")");
  }

  document.dispatchEvent(oEvent);
};

export const PerformAutoKeyDown = (keyCode) => {
  console.log("AUTO PRESS: ", keyCode);

  Podium.keydown(keyCode);
};

export const ClearSetInterval = () => {
  if (interval != null) return window.clearInterval(interval);
};

export const CreateSetInterval = (keyCode) => {
  interval = window.setInterval(() => {
    PerformAutoKeyDown(keyCode);
  }, SNAKE_SPEED);
};
