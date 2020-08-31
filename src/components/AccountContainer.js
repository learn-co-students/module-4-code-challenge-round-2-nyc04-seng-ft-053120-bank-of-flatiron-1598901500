import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

const URL = 'http://localhost:6001/transactions'

class AccountContainer extends Component {
  state = {
    transactions: [],
    query: "",
    sort: "date"
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

  handleRemoveTransaction = (transactionId) => {
    fetch((URL + '/' + transactionId), {
      method: 'DELETE',
    })
    .then(resp => resp.json())
    .then(data => {
      const updatedTransactions = this.state.transactions.filter(transaction => transaction.id === transactionId ? null : transaction)
      this.setState(prevState => ({
        transactions: updatedTransactions
      }))
    })
  }

  handleSearch = (event) => {
    event.persist();
    this.setState(prevState => ({
      query: event.target.value
    }))
  }

  handleFilter = (event) => {
    event.persist();
    this.setState(prevState => ({
      sort: event.target.textContent
    }))
  }

  renderTransactions = () => {
    const query = this.state.query.toLowerCase()
    const sort = this.state.sort.toLowerCase()

    const filteredTransactions = this.state.transactions.filter(transaction => (
      transaction.description.toLowerCase().includes(query)
      ))

    const sortedTransactions = filteredTransactions.sort((t1, t2) => (
      t1[sort] > t2[sort]) ? 1 : -1
      )
    return sortedTransactions
  }

  render() {
    return (
      <div>
        <Search handleSearch={this.handleSearch} />
        <AddTransactionForm handleNewTransaction={this.handleNewTransaction} />
        <TransactionsList transactions={this.renderTransactions()} handleFilter={this.handleFilter} handleRemoveTransaction={this.handleRemoveTransaction} />
      </div>
    );
  }
}

export default AccountContainer;
