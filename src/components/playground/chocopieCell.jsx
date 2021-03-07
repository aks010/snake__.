import React from "react";

class Chocopie extends React.Component {
  render() {
    return (
      <div id={this.props.id && this.props.id}>
        Chocopie Cell {this.props.id}
      </div>
    );
  }
}

export default Chocopie;
