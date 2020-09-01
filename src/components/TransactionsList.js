import React, { Component } from 'react';
import Transaction from './Transaction';

class TransactionsList extends Component {
  filterText = this.props.filter;

  renderTransactions = () => {
    return this.sortTransactions(this.props.liveSearch()).map((transaction) => {
      return <Transaction key={transaction.id} transaction={transaction} />;
    });
  };

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
        return transactions.sort((a, b) => (a.price > b.price ? 1 : -1));
      default:
        return transactions;
    }
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
