import React, { Component } from 'react';
import Transaction from './Transaction';

class TransactionsList extends Component {
  // Sort transactions by category
  sortTransactions = (transactions) => {
    switch (this.props.sort) {
      case 'Date':
        return transactions.sort((a, b) => (a.date > b.date ? 1 : -1));
      case 'Description':
        return transactions.sort((a, b) =>
          a.description > b.description ? 1 : -1
        );
      case 'Category':
        return transactions.sort((a, b) => (a.category > b.category ? 1 : -1));
      case 'Amount':
        return transactions.sort((a, b) => (a.amount < b.amount ? 1 : -1));
      default:
        return transactions;
    }
  };

  // Fetch Delete Request
  fetchDelete = (id, event) => {
    event.preventDefault();
    this.props.deleteTransaction(id);

    fetch(`http://localhost:6001/transactions/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        console.log('Success:', response);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  // Create table of transactions
  renderTransactions = () => {
    return this.sortTransactions(this.props.liveSearch()).map((transaction) => {
      return (
        <Transaction
          key={transaction.id}
          transaction={transaction}
          id={transaction.id}
          onDelete={this.onDelete}
        />
      );
    });
  };

  render() {
    return (
      <table className="ui celled striped padded table">
        <tbody>
          <tr>
            <th>
              <h3
                className="ui center aligned header"
                onClick={() => this.props.handleSort('Date')}
              >
                Date
              </h3>
            </th>
            <th>
              <h3
                className="ui center aligned header"
                onClick={() => this.props.handleSort('Description')}
              >
                Description
              </h3>
            </th>
            <th>
              <h3
                className="ui center aligned header"
                onClick={() => this.props.handleSort('Category')}
              >
                Category
              </h3>
            </th>
            <th>
              <h3
                className="ui center aligned header"
                onClick={() => this.props.handleSort('Amount')}
              >
                Amount
              </h3>
            </th>
          </tr>
          {this.renderTransactions()}
        </tbody>
      </table>
    );
  }
}

export default TransactionsList;
