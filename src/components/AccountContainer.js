import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    transactions: [],
    searchTerm: ""
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
    const searchTerm = event.target.value
    this.setState({
      searchTerm: searchTerm
    })
  }

  searchTransactions = () => {
    return this.state.transactions.filter(transaction => {
      return transaction.description.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    })
  }

  render() {
    const filteredTransactions = this.searchTransactions()
    return (
      <div>
        <Search searchHandler={this.handleSearch} />
        <AddTransactionForm addTransaction={this.handleAddTransaction} />
        <TransactionsList transactions={filteredTransactions} />
      </div>
    );
  }
}

export default AccountContainer;
