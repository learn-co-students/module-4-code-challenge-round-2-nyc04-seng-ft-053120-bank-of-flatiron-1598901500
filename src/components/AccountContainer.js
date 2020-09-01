import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  constructor() {
    super();
    this.state = {
      transactions: [],
      search: "",
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
            transactions: [transaction, ...prevState.transactions],
          }
        })
      })
  }

  updateSearch = (query) => {
    this.setState({
      search: query,
    })
  }

  filterTransaction = () => {
    return this.state.transactions.filter(transaction => transaction.description.toLowerCase().includes(this.state.search.toLowerCase()))
  }

  render() {
    const transactions = this.filterTransaction();

    return (
      <div>
        <Search search={this.state.search} updateSearch={this.updateSearch} />
        <AddTransactionForm addTransaction={this.addTransaction} />
        <TransactionsList transactions={transactions} />
      </div>
    );
  }
}

export default AccountContainer;
