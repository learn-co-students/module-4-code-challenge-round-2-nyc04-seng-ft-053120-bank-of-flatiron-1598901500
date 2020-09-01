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

  // Fetch GET request for transactions
  componentDidMount() {
    fetch('http://localhost:6001/transactions')
      .then((response) => response.json())
      .then((transactions) => this.setState({ transactions: transactions }));
  }

  // Fetch POST request to add new transactions
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

  // Set sort category in State
  handleSort = (sortParam) => this.setState({ sort: sortParam });

  // Set search query terms in State
  searchFilter = (event) => {
    this.setState({ filter: event.target.value });
  };

  // Filter transactions by search query
  liveSearch = () => {
    if (this.state.filter !== '') {
      return this.state.transactions.filter((transaction) =>
        transaction.description
          .toLowerCase()
          .includes(this.state.filter.toLowerCase())
      );
    }
    return this.state.transactions;
  };

  // Delete transaction and update record in State
  deleteTransaction = (id) => {
    this.setState((prevState) => ({
      transactions: prevState.transactions.filter(
        (transaction) => transaction.id !== id
      ),
    }));
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
          sort={this.state.sort}
          handleSort={this.handleSort}
          sortTransactions={this.sortTransactions}
          deleteTransaction={this.deleteTransaction}
        />
      </div>
    );
  }
}

export default AccountContainer;
