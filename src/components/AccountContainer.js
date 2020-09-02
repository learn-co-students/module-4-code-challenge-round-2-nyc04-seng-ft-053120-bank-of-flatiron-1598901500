import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    transactions: []
  }

  // fetchTransactions = () => {
  //   fetch("http://localhost:6001/transactions")
  //     .then(res => res.json())
  //     .then(transactions => {
  //       console.log(transactions)
  //     })
  // }

  // componentDidMount() {
  //   console.log(this.state)
  //   this.fetchTransactions()
  // }

  render() {
    return (
      <div>
        <Search />
        <AddTransactionForm />
        <TransactionsList />
      </div>
    );
  }
}

export default AccountContainer;
