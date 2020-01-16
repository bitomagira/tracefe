import React, { Component } from "react";

class recu extends Component {
  state = {
    numero: 1,
    montant: 50
  };

  render() {
    return this.props.tiket ? (
      <div>
        numero : {this.props.tiket.id}
        &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;Montant : {this.state.montant}{" "}
        <br />
        donné par : {this.props.tiket.donnepar.nom} <br></br>
        Recu par : {this.props.tiket.recupar.nom}
        <br />
        Recu en date du : {this.props.tiket.daterecu}
      </div>
    ) : null;
  }
}
export default recu;
