import React from "react";
import { connect } from "react-redux";

class DisplayBoard extends React.Component {
  UNSAFE_componentWillReceiveProps(nP) {
    console.log(nP);
  }

  render() {
    console.log(this.props);
    return <div>DISPLAY MENU/GAMEOVER</div>;
  }
}

const mapStateToProps = (state) => {
  const { gameover, play, pause } = state;
  console.log("HERE");
  console.log(state);
  return {
    gameover,
    play,
    pause,
  };
};

export default connect(mapStateToProps, {})(DisplayBoard);
