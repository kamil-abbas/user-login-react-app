import React, { Component } from "react";

export default class Password extends Component {
  passwordHandleChange = (event) => {
    if (event.target.value.length < 8) {
      console.log("Ən azı 8 simvol");
    }
  };
  render() {
    return (
      <div>
        <input
          placeholder="Password"
          type="password"
          onChange={this.passwordHandleChange}
        />
      </div>
    );
  }
}
