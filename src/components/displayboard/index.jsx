import React from "react";
import { connect } from "react-redux";

class DisplayBoard extends React.Component {
  state = {
    paused: null,
  };
  componentDidUpdate(prevProps) {
    if (this.props.pause !== prevProps.pause) {
      this.setState({ pause: this.props.pause });
    }
  }

  render() {
    const { pause } = this.props;
    return (
      <div>
        {pause ? (
          <React.Fragment>GAME PAUSED</React.Fragment>
        ) : (
          <React.Fragment>PLAYING</React.Fragment>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { gameover, play, pause } = state;

  return {
    gameover,
    play,
    pause,
  };
};

export default connect(mapStateToProps, {})(DisplayBoard);
