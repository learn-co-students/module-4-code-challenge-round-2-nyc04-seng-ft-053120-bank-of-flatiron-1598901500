import React, { Component } from 'react';
import TransactionsList from './TransactionsList';
import Search from './Search';
import AddTransactionForm from './AddTransactionForm';

class AccountContainer extends Component {
  state = {
    transactions: [],
    filter: '',
    sort: 'none',
  };

  componentDidMount() {
    fetch('http://localhost:6001/transactions')
      .then((response) => response.json())
      .then((transactions) => this.setState({ transactions: transactions }));
  }

  filterTransactions = () => {
    if (this.state.filter !== '') {
      return this.state.transactions.filter(
        (transaction) => transaction.description === this.state.filter
      );
    }
    return this.state.transactions;
  };

  handleFilter = (filterParam) => this.setState({ filter: filterParam });

  handleSort = (sortParam) => this.setState({ sort: sortParam });

  sortTransactions = (transactions) => {
    switch (this.state.sort) {
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

  addTransaction = (transaction) => {
    this.setState({ transactions: [...this.state.transactions, transaction] });

    fetch('http://localhost:6001/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(transaction),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
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
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  // displayTransactions = () => {
  //   this.setState({ transactions: this.transactions })
  // }

  render() {
    return (
      <div>
        <Search
          filter={this.state.filter}
          handleFilter={this.handleFilter}
          filterTransactions={this.filterTransactions}
        />
        <AddTransactionForm addTransaction={this.addTransaction} />
        <TransactionsList
          transactions={this.state.transactions}
          removeTransaction={this.removeTransaction}
          sort={this.state.sort}
          handleSort={this.handleSort}
          sortTransactions={this.sortTransactions}
        />
      </div>
    );
  }
}

export default AccountContainer;
