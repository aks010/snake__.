import React from "react";
import "./index.css";

class SnakeCell extends React.Component {
  render() {
    return (
      <div
        // id={this.props.id && this.props.id}
        className="gridcell snake"
      ></div>
    );
  }
}

export default SnakeCell;
