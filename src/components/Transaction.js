import React, { Component } from 'react';

export class Transaction extends Component {

  handleSubmit(event) {
    event.preventDefault();
    this.props.addTransaction(this.state);
  }

  render() {
    const { date, description, category, amount} = this.props.transaction;

    return (
      <tr>
        <td>{date}</td>
        <td>{description}</td>
        <td>{category}</td>
        <td>{amount}</td>
        <td>
          <button className="ui button" type="submit">
            Delete Transaction
          </button>
        </td>
      </tr>
    );
  };
};

export default Transaction;
