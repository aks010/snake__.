import React from "react";

class SnakeCell extends React.Component {
  render() {
    return (
      <div id={this.props.id && this.props.id}>Sanke Cell {this.props.id}</div>
    );
  }
}

export default SnakeCell;
