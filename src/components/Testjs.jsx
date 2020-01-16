import React, { Component } from "react";

class Testjs extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    id: 2
  };

  affiche() {
    console.log(this.state.id);
  }

  render() {
    return (
      <div>
        <input onChange={e => this.setState({ id: e.target.value })} />
        <button onClick={() => this.props.searchTiket(this.state.id)}>
          search
        </button>
        <div>resultat: {this.state.id}</div>
      </div>
    );
  }
}
export default Testjs;
