import React from "react";
import { connect } from "react-redux";

class ScoreBoard extends React.Component {
  UNSAFE_componentWillReceiveProps(nP) {
    console.log("DISPLAY SCORE");
  }

  render() {
    console.log("CHAEKC");
    console.log(this.props.score);
    return <div>Score: {this.props.score}</div>;
  }
}

const mapStateToProps = (state) => {
  const { score } = state;
  return { score };
};

export default connect(mapStateToProps, {})(ScoreBoard);
