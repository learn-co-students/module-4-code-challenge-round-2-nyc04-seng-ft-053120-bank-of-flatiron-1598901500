import React, { Component } from 'react';
import Transaction from "./Transaction";

class TransactionsList extends Component {

  filterText = this.props.filter;

  renderTransactions = () => {
    return this.props.liveSearch().map((transaction) => {
      return <Transaction key={transaction.id} transaction={transaction} />;
    });
  };

  removeTransaction = (deletedTransaction) => {
    this.setState({
      transactions: this.state.transactions.filter(
        (transaction) => transaction.id !== deletedTransaction.id
      ),
    });

    fetch(`http://localhost:6001/transactions/${deletedTransaction.id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  render() {
    return (
      <table className="ui celled striped padded table">
        <tbody>
          <tr>
            <th>
              <h3 className="ui center aligned header">Date</h3>
            </th>
            <th>
              <h3 className="ui center aligned header">Description</h3>
            </th>
            <th>
              <h3 className="ui center aligned header">Category</h3>
            </th>
            <th>
              <h3 className="ui center aligned header">Amount</h3>
            </th>
          </tr>
          {this.renderTransactions()}
        </tbody>
      </table>
    );
  }
};

export default TransactionsList;
