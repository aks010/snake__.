import React from "react";
import { connect } from "react-redux";

import GameOver from "./gameover";

class DisplayBoard extends React.Component {
  state = {
    pause: false,
    gameover: false,
    menu: true,
  };
  componentDidUpdate(prevProps) {
    if (this.props.pause !== prevProps.pause) {
      this.setState({ pause: this.props.pause });
    }
    if (this.props.gameover !== prevProps.gameover) {
      this.setState({ gameover: this.props.gameover });
    }
    if (this.props.menu !== prevProps.menu) {
      this.setState({ menu: this.props.menu });
    }
  }

  render() {
    return <div>{this.state.gameover && <GameOver />}</div>;
  }
}

const mapStateToProps = (state) => {
  const { gameover, menu, pause } = state;

  return {
    gameover,
    menu,
    pause,
  };
};

export default connect(mapStateToProps, {})(DisplayBoard);
