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
    const { valid, gameOver, chocopie, pause, head } = handleMovement(
      event.keyCode,
      this.props.chocopieId,
      this.props.snakeIds[this.props.snakeIds.length - 1]
    );
    console.log("PAUSE PRINT", pause);
    if (gameOver) {
      return this.props.GameOver();
    } else if (pause) {
      this.props.Pause(!this.props.pause);
    } else if (valid && chocopie) {
      this.props.EatChocopie(head);
      const newChocopieId = generateChocopie(this.props.snakeIds);
      this.props.Generate_Chocopie(newChocopieId);
    } else if (valid) return this.props.MoveSnake(head);
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
