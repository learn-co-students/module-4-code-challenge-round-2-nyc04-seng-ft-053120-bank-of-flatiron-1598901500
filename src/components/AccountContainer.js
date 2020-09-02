import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    transactions: []
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
      transactions: [... this.state.transactions, newTransaction]
    })
  }

  render() {
    return (
      <div>
        <Search />
        <AddTransactionForm addTransaction={this.handleAddTransaction} />
        <TransactionsList transactions={this.state.transactions} />
      </div>
    );
  }
}

export default AccountContainer;
