import React, { Component } from "react";
import Email from "./Email";
import Password from "./Password";
import Submit from "./Submit";
import './UserLogin.css'

export default class UserLogin extends Component {
  render() {
    return (
      <div>
        <Email/>
        <Password/>
        <Submit/>
      </div>
    );
  }
}
