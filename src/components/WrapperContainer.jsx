import React from "react";
import DisplayBoard from "./displayboard";
import Playground from "./playground";
import "./index.css";
class Wrapper extends React.Component {
  render() {
    return (
      <div className="layout">
        <DisplayBoard />
        <Playground />
      </div>
    );
  }
}

export default Wrapper;
