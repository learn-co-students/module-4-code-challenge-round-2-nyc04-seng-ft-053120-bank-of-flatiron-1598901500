import React, { Component } from 'react';
import TransactionsList from './TransactionsList';
import Search from './Search';
import AddTransactionForm from './AddTransactionForm';

class AccountContainer extends Component {
  state = {
    transactions: [],
    filter: '',
    sort: 'None',
  };

  componentDidMount() {
    fetch('http://localhost:6001/transactions')
      .then((response) => response.json())
      .then((transactions) => this.setState({ transactions: transactions }));
  }

  searchFilter = (event) => {
    this.setState({filter: event.target.value }); 
  };

  liveSearch = () => {
    if (this.state.filter !== '') {
      return this.state.transactions.filter((transaction) =>
        transaction.description.toLowerCase().includes(this.state.filter.toLowerCase())
      );
    };
    return this.state.transactions;
  };

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
      <div>
        <Search
          currentState={this.state}
          filter={this.state.filter}
          searchFilter={this.searchFilter}
          liveSearch={this.liveSearch}
        />
        <AddTransactionForm addTransaction={this.addTransaction} />
        <TransactionsList
          liveSearch={this.liveSearch}
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
