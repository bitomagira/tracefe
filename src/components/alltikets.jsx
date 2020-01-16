import React, { Component } from "react";
import Recu from "./recu";

class alltikets extends Component {
  constructor(props) {
    super(props);
  }

  state = {};

  render() {
    return this.props.data ? (
      <div>
        <Recu tiket={this.props.data} />
      </div>
    ) : null;
  }
}

export default alltikets;
