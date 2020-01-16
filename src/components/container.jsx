import React from "react";
import Testjs from "./Testjs";
import Test2 from "./test2";
import Login from "./Login";
import AllTikets from "./alltikets";

class container extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {};
  searchTiket = async id => {
    await fetch(`http://localhost:8080/api/tikets/${id}`)
      .then(res => (res.status === 200 ? res.json() : null))
      .then(data => this.setState({ data }));
    console.log(this.state.data);
    console.log(id);
  };

  render() {
    return (
      <div>
        <Login />
        <div style={{ position: "center" }}>
          <h1>trace it</h1>
        </div>
        <Testjs searchTiket={this.searchTiket} />
        <Test2 />
        {this.state.data !== "undefined" ? (
          <AllTikets data={this.state.data} />
        ) : null}
      </div>
    );
  }
}

export default container;
