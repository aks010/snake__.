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
  CurrentMove,
} from "../../actions";
import { handleMovement } from "../../helpers/movement";
import { generateChocopie } from "../../helpers/elements";
import {
  ClearSetInterval,
  CreateSetInterval,
} from "../../helpers/keyboardSimulate";
import { GRID_LENGTH, GRID_WIDTH } from "../../helpers/constants";

class Playground extends React.Component {
  state = {
    snakeIds: [],
    chocopieId: null,
    score: 0,
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentDidUpdate(prevProps) {
    const { snakeIds: propsSnakeIds } = this.props;
    const { snakeIds: prevSnakeIds } = prevProps;
    console.log(
      "Chocopie @: ",
      this.props.chocopieId,
      "Prev: ",
      prevProps.chocopieId
    );
    if (this.props.chocopieId != prevProps.chocopieId) {
      console.log("New Chocopie @: ", this.props.chocopieId);
      this.setState({ chocopieId: this.props.chocopieId });
    }
    if (this.props.score != prevProps.score) {
      this.setState({ score: this.props.score });
    }

    const prevHead = propsSnakeIds[propsSnakeIds.length - 1];
    const presentHead = prevSnakeIds[prevSnakeIds.length - 1];
    if (prevHead !== presentHead) {
      this.setState({ snakeIds: propsSnakeIds });
    }
  }

  handleClick = () => {
    this.props.Pause(!this.props.pause);
  };

  handleKeyDown = (event) => {
    if (this.props.gameover || this.props.menu) return;
    console.log(this.props.gameover);
    const { valid, gameOver, chocopie, pause, head, nextMove } = handleMovement(
      event.keyCode,
      this.props.currentMove,
      this.props.chocopieId,
      this.props.snakeIds[this.props.snakeIds.length - 1],
      this.props.snakeIds
    );
    // console.log({ valid, gameOver, chocopie, pause, head, nextMove });
    console.log(
      "Chocopie Id: ",
      this.props.chocopieId,
      "Head: ",
      this.props.snakeIds[this.props.snakeIds.length - 1]
    );
    if (gameOver) {
      console.log("G A M E  O V E R");
      ClearSetInterval();
      // this.props.Pause(!this.props.pause);
      return this.props.GameOver(true);
    }
    if (pause) {
      console.log("PAUSING ");
      ClearSetInterval();
      return this.props.Pause(!this.props.pause);
    }
    if (valid && chocopie) {
      console.log("********* CHOCOPIE... YUMMY **********");
      if (this.props.currentMove !== nextMove) {
        ClearSetInterval();
        CreateSetInterval(event.keyCode);
      }
      this.props.EatChocopie(head);
      //   // INCR _SCORE
      const newChocopieId = generateChocopie(this.props.snakeIds);
      console.log("NEW CHOCOPIE ID: ", newChocopieId);
      return this.props.Generate_Chocopie(newChocopieId);
    }
    if (valid) {
      console.log("+++++++VALID MOVE+++++++");
      if (this.props.currentMove !== nextMove) {
        console.log(this.props.currentMove, "!==", nextMove);
        this.props.CurrentMove(nextMove);
        ClearSetInterval();
        CreateSetInterval(event.keyCode);
      }
      return this.props.MoveSnake(head);
    }
  };

  renderGrid = () => {
    let id = 1;
    let component = [];
    for (let i = 1; i <= GRID_LENGTH; i++) {
      let tmpComp = [];
      for (let j = 1; j <= GRID_WIDTH; j++) {
        if (this.props.snakeIds.includes(id)) {
          tmpComp.push(<SnakeCell />);
        } else if (this.props.chocopieId === id) {
          tmpComp.push(<ChocopieCell />);
        } else tmpComp.push(<GridCell />);
        id++;
      }
      component.push(<div className="grid-row">{tmpComp}</div>);
    }
    return component;
  };

  render() {
    return (
      <div id="test" tabIndex="0">
        {this.renderGrid()}
        <div>Score: {this.state.score}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    gameover,
    chocopieId,
    snakeIds,
    currentMove,
    pause,
    menu,
    score,
  } = state;

  return {
    chocopieId,
    snakeIds,
    score,
    pause,
    menu,
    currentMove,
    gameover,
  };
};

export default connect(mapStateToProps, {
  Pause,
  MoveSnake,
  CurrentMove,
  EatChocopie,
  GameOver,
  Generate_Chocopie,
})(Playground);
