import React from "react";

class GridCell extends React.Component {
  render() {
    return (
      <div id={this.props.id && this.props.id}>Grid Cell {this.props.id}</div>
    );
  }
}

export default GridCell;
