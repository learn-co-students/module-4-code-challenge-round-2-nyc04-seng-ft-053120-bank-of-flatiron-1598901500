import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
import Sort from "./Sort";

class AccountContainer extends Component {
  constructor() {
    super();
    this.state = {
      transactions: [],
      search: "",
      sortBy: "default",
      sortOrder: "asc",
    }
  }

  componentDidMount() {
    fetch('http://localhost:6001/transactions')
      .then(res => res.json())
      .then(transactions => this.setState({
        transactions: transactions,
      }))
  }

  addTransaction = (newTransaction) => {
    const postConfig = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newTransaction)
    }

    fetch('http://localhost:6001/transactions', postConfig)
      .then(res => res.json())
      .then(transaction => {
        this.setState(prevState => {
          return {
            transactions: [...prevState.transactions, transaction],
          }
        })
      }).catch(err => console.log(err));
  }

  deleteTransaction = (id) => {
    const deleteConfig = {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      }
    }

    fetch(`http://localhost:6001/transactions/${id}`, deleteConfig)
      .then(_ => {
        this.setState(prevState => {
            return {
              transactions: prevState.transactions.filter(transaction => transaction.id !== id)
            }
          })
        }).catch(err => console.log(err));
  }

  updateSearch = (query) => {
    this.setState({
      search: query,
    })
  }

  filterTransaction = () => {
    return this.state.transactions.filter(transaction => transaction.description.toLowerCase().includes(this.state.search.toLowerCase()))
  }

  sortTransactionsAsc = (arr) => {
    switch (this.state.sortBy) {
      case 'description':
      case 'category':
        return [...arr].sort((tr1, tr2) => tr1[this.state.sortBy] > tr2[this.state.sortBy] ? 1 : -1)
      default:
        return arr;
    }
  }

  sortTransactionsDsc = (arr) => {
    switch (this.state.sortBy) {
      case 'description':
      case 'category':
        return [...arr].sort((tr1, tr2) => tr1[this.state.sortBy] < tr2[this.state.sortBy] ? 1 : -1)
      default:
        return arr;
    }
  }

  sortTransaction = (arr) => {
    switch(this.state.sortOrder) {
      case 'asc':
        return this.sortTransactionsAsc(arr);
      case 'dsc':
        return this.sortTransactionsDsc(arr);
      default:
        return arr;
    }
  }

  updateSortBy = (newVal) => {
    this.setState({
      sortBy: newVal,
    })
  }

  updateSortOrder = (newOrder) => {
    this.setState({
      sortOrder: newOrder
    })
  }

  render() {
    const transactions = this.sortTransaction(this.filterTransaction());

    return (
      <div>
        <Search search={this.state.search} updateSearch={this.updateSearch} />
        <AddTransactionForm addTransaction={this.addTransaction} />
        <Sort sortBy={this.state.sortBy} sortOrder={this.state.sortOrder} updateSortBy={this.updateSortBy} updateSortOrder={this.updateSortOrder} />
        <TransactionsList transactions={transactions} deleteTransaction={this.deleteTransaction} />
      </div>
    );
  }
}

export default AccountContainer;
