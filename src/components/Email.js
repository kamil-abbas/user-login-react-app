import React, { Component } from "react";

export default class Email extends Component {
  emailHandleChange=(event)=>{
    console.log("Yalnız .ru domenlərinə icazə verilir.")
  }
  render() {
    return (
      <div>
        <input placeholder="Email" onChange={this.emailHandleChange}/>
      </div>
    );
  }
}
