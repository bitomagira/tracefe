import React, { Component } from "react";
import done from "./done.png";
import patriote from "./patriot.png";
import notdone from "./notdone.png";

class test2 extends Component {
  state = {
    id: 2
  };

  async componentDidMount() {
    await fetch("http://localhost:8080/api/tiket")
      .then(res => res.json())
      .then(data => this.setState({ data }));
    console.log(this.state);
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column"
          }}
        >
          <img src={patriote} alt="imag" height="80px" width="80px" />
          <div>Le Patriote</div>
          <div>Le resistant</div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column"
          }}
        >
          <img
            src={this.state.id === 20 ? done : notdone}
            alt="imag"
            height="80px"
            width="80px"
          />
          <div>Cellule</div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column"
          }}
        >
          <img src={done} alt="imag" height="80px" width="80px" />
          <div>Section</div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column"
          }}
        >
          <img src={done} alt="imag" height="80px" width="80px" />
          <div>QG</div>
          <div>Destination</div>
        </div>
      </div>
    );
  }
}
export default test2;
