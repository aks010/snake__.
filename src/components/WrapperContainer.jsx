import React from "react";
import DisplayBoard from "./displayboard";
import Playground from "./playground";

class Wrapper extends React.Component {
  render() {
    return (
      <div>
        <DisplayBoard />
        <Playground />
      </div>
    );
  }
}

export default Wrapper;
