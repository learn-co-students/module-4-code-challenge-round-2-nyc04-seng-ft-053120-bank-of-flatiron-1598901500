import React, { Component } from "react";

class Transaction extends Component {
  render(){
    // console.log(this.props.transaction)

    return (
      <tr>
        <td>{this.props.transaction.date}</td>
        <td>{this.props.transaction.description}</td>
        <td>{this.props.transaction.category}</td>
        <td>{this.props.transaction.amount}</td>
      </tr>
    )
  }
}

export default Transaction;
