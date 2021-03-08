import React from "react";
import { connect } from "react-redux";

import GridCell from "./gridCell";
import SnakeCell from "./snakeCell";
import ChocopieCell from "./chocopieCell";
import ScoreBoard from "../displayboard/scoreboard";
import {
  Pause,
  MoveSnake,
  EatChocopie,
  GameOver,
  Generate_Chocopie,
} from "../../actions";
import { handleMovement } from "../../helpers/movement";
import { generateChocopie } from "../../helpers/elements";
import { RKEYCODE } from "../../helpers/globals";

let interval = null;
let timer = null;
let SNAKE_SPEED = 1000;

let PerformAutoKeyPress = (keyCode) => {
  console.log("PRESSED KEY", keyCode);
  var keyboardEvent = document.createEvent("KeyboardEvent");
  var initMethod =
    typeof keyboardEvent.initKeyboardEvent !== "undefined"
      ? "initKeyboardEvent"
      : "initKeyEvent";

  keyboardEvent[initMethod](
    "keydown", // event type: keydown, keyup, keypress
    true, // bubbles
    true, // cancelable
    window, // view: should be window
    false, // ctrlKey
    false, // altKey
    false, // shiftKey
    false, // metaKey
    keyCode, // keyCode: unsigned long - the virtual key code, else 0
    0 // charCode: unsigned long - the Unicode character associated with the depressed key, else 0
  );
  document.dispatchEvent(keyboardEvent);
};

let cnt = 0;

class Playground extends React.Component {
  state = {
    snakeIds: [],
  };

  componentDidUpdate(prevProps) {
    const { snakeIds: propsSnakeIds } = this.props;
    const { snakeIds: prevSnakeIds } = prevProps;

    const prevHead = propsSnakeIds[propsSnakeIds.length - 1];
    const presentHead = prevSnakeIds[prevSnakeIds.length - 1];
    console.log("PRESENTIDS");
    // console.log(propsSnakeIds);
    // console.log(prevSnakeIds);
    // console.log(prevHead, presentHead);
    if (prevHead != presentHead) {
      console.log("SEEMING");
      console.log(propsSnakeIds);
      console.log(prevSnakeIds);
      this.setState({ snakeIds: propsSnakeIds });
    }
  }

  handleClick = () => {
    this.props.Pause(!this.props.pause);
  };

  handleKeyPress = (event) => {
    console.log("KEY PREESE");
    const { valid, gameOver, chocopie, pause, head, nextMove } = handleMovement(
      event.keyCode,
      this.props.chocopieId,
      this.props.snakeIds[this.props.snakeIds.length - 1]
    );
    console.log("PAUSE PRINT", pause);
    console.log(
      "CURRENT MOVE: ",
      this.props.currentMove,
      RKEYCODE[this.props.currentMove]
    );
    if (gameOver) {
      // CLEARSETINTERVAL()
      console.log("GAMEOVER!!!!");
      window.clearInterval(interval);
      cnt = 0;
      return this.props.GameOver();
    } else if (pause) {
      // CLEARSETINTERVAL()
      window.clearInterval(interval);
      cnt = 0;
      this.props.Pause(!this.props.pause);
    } else if (valid && chocopie) {
      console.log("CHOCOPIE!!!!");
      if (this.props.currentMove != nextMove) {
        // CLEARSETINTERVAL();
        window.clearInterval(interval);
        cnt = 0;
        // CREATESETINTERVAL(DIRN);
        interval = window.setInterval(() => {
          console.log("Pressing: ", ++cnt);
          PerformAutoKeyPress(RKEYCODE[this.props.currentMove]);
        }, SNAKE_SPEED);
      }
      interval = window.setInterval(() => {
        console.log("Pressing: ", ++cnt);
        PerformAutoKeyPress(RKEYCODE[this.props.currentMove]);
      }, SNAKE_SPEED);
      this.props.EatChocopie(head);

      const newChocopieId = generateChocopie(this.props.snakeIds);

      this.props.Generate_Chocopie(newChocopieId);
    } else if (valid) {
      console.log("DOES UP NOT REACH HEAR");
      console.log("NO IT DOES!!!!");
      console.log(this.props.currentMove, nextMove);
      if (this.props.currentMove != nextMove) {
        // CLEARSETINTERVAL();
        window.clearInterval(interval);
        cnt = 0;

        // CREATESETINTERVAL(DIRN)
        interval = window.setInterval(() => {
          console.log("Pressing: ", ++cnt);
          PerformAutoKeyPress(RKEYCODE[nextMove]);
        }, SNAKE_SPEED);
      }
      return this.props.MoveSnake(head);
    }
  };

  render() {
    return (
      <div onKeyDown={this.handleKeyPress}>
        <GridCell />
        <SnakeCell />
        <ChocopieCell />
        <ScoreBoard />
        <button onClick={this.handleClick}>
          {this.props.pause ? (
            <React.Fragment>Resume</React.Fragment>
          ) : (
            <React.Fragment>Pause</React.Fragment>
          )}
        </button>
        <button> Move</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  //   console.log(state);
  const { chocopieId, snakeIds, currentMove, pause } = state;
  //   console.log({ chocopieId, snakeIds, currentMove });
  return {
    chocopieId,
    snakeIds,
    pause,
    currentMove,
  };
};

export default connect(mapStateToProps, {
  Pause,
  MoveSnake,
  EatChocopie,
  GameOver,
})(Playground);
