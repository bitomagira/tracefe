import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class Login extends Component {
  state = {};

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  login = async () => {
    await fetch(
      `http://localhost:8080/api/users/${this.state.login}/${this.state.password}`
    )
      .then(res => res.json())
      .then(data => console.log(data));
  };

  render() {
    return (
      <div>
        <label>login : </label>{" "}
        <input type="text" id="login" onChange={this.handleChange}></input>
        <br />
        <label>password</label>
        <input type="text" id="password" onChange={this.handleChange}></input>
        <br></br>
        <Button variant="contained" color="primary" onClick={this.login}>
          login
        </Button>
      </div>
    );
  }
}
export default Login;
