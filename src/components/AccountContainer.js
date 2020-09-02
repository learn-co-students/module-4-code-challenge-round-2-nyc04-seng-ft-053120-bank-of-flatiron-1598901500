import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import Sort from "./Sort";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    transactions: [],
    searchTerm: "",
    sortBy: "category"
  }

  fetchTransactions = () => {
    fetch("http://localhost:6001/transactions")
      .then(res => res.json())
      .then(transactions => {
        this.setState({
          transactions: transactions
        })
      })
  }

  componentDidMount() {
    this.fetchTransactions()
  }

  handleAddTransaction = (newTransaction) => {
    this.setState({
      transactions: [...this.state.transactions, newTransaction]
    })
  }

  handleSearch = (event) => {
    // const searchTerm = event.target.value
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleSort = (event) => {
    // const sortBy = event.target.value
    this.setState({
      sortBy: event.target.value
    })
  }

  searchAndSortTransactions = () => {
    const filteredTransactions = this.state.transactions.filter(transaction => {
      return transaction.description.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    })
    return filteredTransactions.sort((transA, transB) => {
      return transA[this.state.sortBy].localeCompare(transB[this.state.sortBy])
    })
  }

  render() {
    const filteredAndSortedTransactions = this.searchAndSortTransactions()
    return (
      <div>
        <Search searchHandler={this.handleSearch} />
        <Sort sortHandler={this.handleSort} sortBy={this.state.sortBy} />
        <AddTransactionForm addTransaction={this.handleAddTransaction} />
        <TransactionsList transactions={filteredAndSortedTransactions} />
      </div>
    );
  }
}

export default AccountContainer;
