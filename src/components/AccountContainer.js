import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

const URL = 'http://localhost:6001/transactions'

class AccountContainer extends Component {
  state = {
    transactions: [],
    query: "",
  }

  componentDidMount() {
    fetch(URL)
    .then(resp => resp.json())
    .then(data => this.setState({transactions: data}))
  }

  handleNewTransaction = (newTransaction) => {
    fetch(URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newTransaction)
    })
    .then(resp => resp.json())
    .then(data => this.setState(prevState => ({
      transactions: [
        ...prevState.transactions,
        data
      ]
    })))
  }

  handleSearch = (event) => {
    event.persist();
    this.setState(prevState => ({
      query: event.target.value
    }))
  }

  renderTransactions = () => {
    const query = this.state.query.toLowerCase()
    return this.state.transactions.filter(transaction => transaction.description.toLowerCase().includes(query))
  }

  render() {
    return (
      <div>
        <Search handleSearch={this.handleSearch} />
        <AddTransactionForm handleNewTransaction={this.handleNewTransaction} />
        <TransactionsList transactions={this.renderTransactions()} />
      </div>
    );
  }
}

export default AccountContainer;
